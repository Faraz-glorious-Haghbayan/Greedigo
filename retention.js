// ============================================================
//  RETENTION SYSTEMS — Greedigo
//  1. Progression System  (XP / Levels)
//  2. Combo / Streak      (rapid-action multiplier)
//  3. Unlockable Abilities (5 active powers)
//  4. Procedural Random Events (real-time triggers)
//  5. Persistent Upgrades  (localStorage shop)
// ============================================================

const RS = (() => {
  // ─────────────────────────────────────────────────────────
  //  CONFIG
  // ─────────────────────────────────────────────────────────
  const XP_THRESHOLDS = [
    0, // level 1 → 2
    150, // level 2 → 3
    350, // level 3 → 4
    700, // level 4 → 5
    1200, // level 5 → 6
    2000, // level 6 → 7
    3200, // level 7 → 8
    5000, // level 8 → 9
    7800, // level 9 → 10
    12000, // level 10 (max)
  ];

  const LEVEL_MULT = [
    1.0, // Lv 1
    1.08, // Lv 2
    1.16, // Lv 3
    1.25, // Lv 4
    1.35, // Lv 5
    1.5, // Lv 6
    1.68, // Lv 7
    1.9, // Lv 8
    2.2, // Lv 9
    2.6, // Lv 10
  ];

  const ABILITY_DEFS = [
    {
      id: "double_reward",
      name: "Double Reward",
      icon: "⚡",
      unlockLevel: 2,
      durationSec: 8,
      cooldownSec: 35,
      desc: "All cash earned is doubled for 8 seconds.",
    },
    {
      id: "auto_hustle",
      name: "Auto Hustle",
      icon: "🤖",
      unlockLevel: 4,
      durationSec: 0,
      cooldownSec: 60,
      desc: "Instantly advance 3 game months.",
    },
    {
      id: "slow_time",
      name: "Slow Time",
      icon: "⏱️",
      unlockLevel: 6,
      durationSec: 12,
      cooldownSec: 50,
      desc: "Freezes stat decay for 12 seconds.",
    },
    {
      id: "cash_burst",
      name: "Cash Burst",
      icon: "💸",
      unlockLevel: 8,
      durationSec: 0,
      cooldownSec: 45,
      desc: "Instantly earn a large level-scaled cash bonus.",
    },
    {
      id: "fortune_shield",
      name: "Fortune Shield",
      icon: "🛡️",
      unlockLevel: 10,
      durationSec: 0,
      cooldownSec: 90,
      desc: "Blocks the next negative random event.",
    },
  ];

  const UPGRADE_DEFS = [
    {
      id: "income_boost",
      name: "Income Amplifier",
      icon: "💵",
      baseCost: 500,
      maxLevel: 3,
      desc: "Monthly income +8% per level.",
      costMult: 3,
      effectLabel: (lvl) => `+${lvl * 8}% income`,
    },
    {
      id: "xp_boost",
      name: "Quick Learner",
      icon: "🧠",
      baseCost: 400,
      maxLevel: 5,
      desc: "All XP earned +12% per level.",
      costMult: 2,
      effectLabel: (lvl) => `+${lvl * 12}% XP gain`,
    },
    {
      id: "combo_ext",
      name: "Combo Master",
      icon: "🔥",
      baseCost: 600,
      maxLevel: 3,
      desc: "Combo action window +0.5s per level.",
      costMult: 2.5,
      effectLabel: (lvl) => `+${(lvl * 0.5).toFixed(1)}s window`,
    },
    {
      id: "ability_cd",
      name: "Power Cooldown",
      icon: "⚡",
      baseCost: 800,
      maxLevel: 3,
      desc: "Ability cooldowns reduced –15% per level.",
      costMult: 2.5,
      effectLabel: (lvl) => `–${lvl * 15}% cooldown`,
    },
    {
      id: "event_luck",
      name: "Fortune Magnet",
      icon: "🎲",
      baseCost: 1200,
      maxLevel: 2,
      desc: "Positive random events become more frequent.",
      costMult: 4,
      effectLabel: (lvl) => (lvl >= 2 ? "Max Luck!" : "More +events"),
    },
    {
      id: "passive_earn",
      name: "Passive Engine",
      icon: "🤖",
      baseCost: 2000,
      maxLevel: 3,
      desc: "Earn $50/sec passively while playing.",
      costMult: 3,
      effectLabel: (lvl) => `+$${lvl * 50}/sec`,
    },
  ];

  // ─────────────────────────────────────────────────────────
  //  RUNTIME STATE  (not persisted — resets on page reload)
  // ─────────────────────────────────────────────────────────
  const rt = {
    comboCount: 0,
    comboMult: 1.0,
    lastActionTime: 0,
    comboTimeout: null,

    doubleRewardUntil: 0,
    slowTimeUntil: 0,
    shieldStored: false,

    xpBoostUntil: 0,
    earningsBoostUntil: 0,
    earningsBoostMult: 1.0,

    eventTimeout: null,
    passiveInterval: null,
    abilityTickInterval: null,
    patched: false,

    chaos: {
      active: false,
      endTime: 0,
      cooldownUntil: 0,
      mult: 1,
      totalEarned: 0,
      peakMult: 1,
      fastestCombo: 0,
      startNetWorth: 0,
      insaneTriggered: false,
      tickTimer: null,
      eventTimer: null,
      endTimer: null,
    },
  };

  // ─────────────────────────────────────────────────────────
  //  HELPERS
  // ─────────────────────────────────────────────────────────
  function gs() {
    // safe access to game.state.retention
    if (typeof game === "undefined" || !game.state) return null;
    if (!game.state.retention) {
      game.state.retention = { xp: 0, level: 1, abilities: {} };
    }
    ABILITY_DEFS.forEach((a) => {
      if (!game.state.retention.abilities[a.id]) {
        game.state.retention.abilities[a.id] = { cooldownUntil: 0 };
      }
    });
    return game.state.retention;
  }

  function getUpgrades() {
    try {
      return JSON.parse(localStorage.getItem("GreedigoUpgrades") || "{}");
    } catch (e) {
      return {};
    }
  }
  function saveUpgrades(u) {
    localStorage.setItem("GreedigoUpgrades", JSON.stringify(u));
  }
  function upgradeLevel(id) {
    return getUpgrades()[id] || 0;
  }

  function comboWindowMs() {
    return 2000 + upgradeLevel("combo_ext") * 500;
  }
  function gameActive() {
    return (
      typeof game !== "undefined" &&
      game.state &&
      !game.state.life?.dead &&
      !game.state.life?.retired
    );
  }
  function shellVisible() {
    const s = document.getElementById("app-shell");
    return s && s.style.display !== "none";
  }

  // Multipliers
  function incomeMult() {
    const lvl = (gs() || {}).level || 1;
    const lvlMult = LEVEL_MULT[Math.min(lvl - 1, LEVEL_MULT.length - 1)];
    const upgMult = 1 + upgradeLevel("income_boost") * 0.08;
    const abilMult = Date.now() < rt.doubleRewardUntil ? 2.0 : 1.0;
    const evtMult =
      Date.now() < rt.earningsBoostUntil ? rt.earningsBoostMult : 1.0;
    const chaosMult = rt.chaos.active ? rt.chaos.mult : 1;
    // Combos stack with Chaos Mode exponentially
    const comboStackMult = rt.chaos.active
      ? Math.pow(1 + rt.comboCount * 0.05, 1.5)
      : 1;
    return lvlMult * upgMult * abilMult * evtMult * chaosMult * comboStackMult;
  }
  function xpMult() {
    const upgMult = 1 + upgradeLevel("xp_boost") * 0.12;
    const evtMult = Date.now() < rt.xpBoostUntil ? 2.0 : 1.0;
    const comboBoost = rt.comboMult;
    return upgMult * evtMult * comboBoost;
  }

  // ─────────────────────────────────────────────────────────
  //  1. PROGRESSION SYSTEM
  // ─────────────────────────────────────────────────────────
  function awardXP(base) {
    if (!gameActive()) return;
    const p = gs();
    if (!p) return;
    const maxLevel = XP_THRESHOLDS.length; // 10
    if (p.level >= maxLevel) return; // already capped

    const earned = Math.max(1, Math.round(base * xpMult()));
    p.xp += earned;
    showXPFloat(earned);

    // Level-up loop
    while (p.level < maxLevel) {
      const needed = XP_THRESHOLDS[p.level]; // index = current level (0-based offset handled)
      if (p.xp >= needed) {
        p.xp -= needed;
        p.level++;
        onLevelUp(p.level);
      } else {
        break;
      }
    }
    if (p.level >= maxLevel) p.xp = 0;

    renderXPBar();
  }

  function onLevelUp(newLevel) {
    const mult = LEVEL_MULT[Math.min(newLevel - 1, LEVEL_MULT.length - 1)];
    if (typeof SFX !== "undefined") SFX.play("achievement");
    if (typeof FX !== "undefined") FX.screenFlash("rgba(168,85,247,0.3)");
    if (typeof app !== "undefined") {
      app.toast(`✨ Level ${newLevel}! Multiplier ×${mult.toFixed(2)}`, "epic");
      app.log(
        `✨ Reached Level ${newLevel}! All cash rewards ×${mult.toFixed(2)}`,
        "epic",
      );
    }
    // Announce newly unlocked abilities
    ABILITY_DEFS.forEach((a) => {
      if (a.unlockLevel === newLevel && typeof app !== "undefined") {
        app.toast(`🔓 Ability Unlocked: ${a.icon} ${a.name}!`, "success");
      }
    });
    renderXPBar();
    renderAbilities();
  }

  // ─────────────────────────────────────────────────────────
  //  2. COMBO / STREAK
  // ─────────────────────────────────────────────────────────
  function onAction() {
    const now = Date.now();
    const window = comboWindowMs();

    if (now - rt.lastActionTime <= window) {
      rt.comboCount = Math.min(rt.comboCount + 1, 20);
    } else {
      rt.comboCount = 1;
    }
    rt.lastActionTime = now;

    if (rt.comboCount >= 10) rt.comboMult = 3.0;
    else if (rt.comboCount >= 7) rt.comboMult = 2.5;
    else if (rt.comboCount >= 5) rt.comboMult = 2.0;
    else if (rt.comboCount >= 3) rt.comboMult = 1.5;
    else rt.comboMult = 1.0;

    if (rt.comboTimeout) clearTimeout(rt.comboTimeout);
    rt.comboTimeout = setTimeout(() => breakCombo(), window + 200);

    if (
      rt.comboCount >= 5 &&
      rt.comboCount % 5 === 0 &&
      typeof SFX !== "undefined"
    ) {
      SFX.play("hotStreak");
    }
    renderCombo();
    awardXP(5 + rt.comboCount * 2);
  }

  function breakCombo() {
    if (rt.comboCount > 4 && typeof app !== "undefined") {
      app.log(`⏰ Combo ×${rt.comboCount} ended.`, "info");
    }
    rt.comboCount = 0;
    rt.comboMult = 1.0;
    renderCombo();
  }

  // ─────────────────────────────────────────────────────────
  //  3. UNLOCKABLE ABILITIES
  // ─────────────────────────────────────────────────────────
  function useAbility(id) {
    if (!gameActive()) return;
    const def = ABILITY_DEFS.find((a) => a.id === id);
    if (!def) return;
    const p = gs();
    if (!p) return;

    if (p.level < def.unlockLevel) {
      app.toast(`🔒 Unlocks at Level ${def.unlockLevel}`, "error");
      return;
    }

    const ab = p.abilities[id];
    const now = Date.now();
    const cdReduct = upgradeLevel("ability_cd") * 0.15;
    if (ab.cooldownUntil > now) {
      const secs = Math.ceil((ab.cooldownUntil - now) / 1000);
      app.toast(`⏳ Cooldown: ${secs}s remaining`, "error");
      return;
    }

    const cdMs = def.cooldownSec * (1 - cdReduct) * 1000;
    ab.cooldownUntil = now + cdMs;

    switch (id) {
      case "double_reward":
        rt.doubleRewardUntil = now + def.durationSec * 1000;
        app.toast(`⚡ Double Reward active for ${def.durationSec}s!`, "epic");
        app.log(
          `⚡ Double Reward: all cash ×2 for ${def.durationSec} seconds`,
          "epic",
        );
        if (typeof SFX !== "undefined") SFX.play("hotStreak");
        if (typeof FX !== "undefined") FX.screenFlash("rgba(251,191,36,0.2)");
        break;

      case "auto_hustle":
        for (let i = 0; i < 3; i++) {
          if (!game.state.life.dead && !game.state.life.retired)
            game.nextMonth();
        }
        game.renderAll();
        app.toast("🤖 Auto Hustle: +3 months advanced!", "success");
        app.log("🤖 Auto Hustle activated — 3 months advanced.", "success");
        break;

      case "slow_time":
        rt.slowTimeUntil = now + def.durationSec * 1000;
        app.toast(`⏱️ Slow Time active for ${def.durationSec}s!`, "success");
        app.log(
          `⏱️ Slow Time: stat decay frozen for ${def.durationSec} seconds`,
          "success",
        );
        if (typeof FX !== "undefined") FX.screenFlash("rgba(34,211,238,0.15)");
        break;

      case "cash_burst": {
        const lvlIdx = Math.min((p.level || 1) - 1, LEVEL_MULT.length - 1);
        const mult = LEVEL_MULT[lvlIdx];
        const base = 5000 + Math.random() * 20000;
        const amt = Math.floor(base * mult);
        // Bypass income multiplier for burst (it's already a bonus)
        game.state.cash += amt;
        if (typeof app !== "undefined") app.showFloat(amt);
        app.log(
          `💸 Cash Burst! +$${amt.toLocaleString()} (×${mult.toFixed(2)} level bonus)`,
          "epic",
        );
        if (typeof SFX !== "undefined") SFX.play("bigCoin");
        if (typeof FX !== "undefined") {
          FX.screenFlash("epic");
          FX.screenShake("sm");
        }
        break;
      }

      case "fortune_shield":
        rt.shieldStored = true;
        app.toast(
          "🛡️ Fortune Shield active — next bad event blocked!",
          "success",
        );
        app.log(
          "🛡️ Fortune Shield: the next negative random event will be deflected.",
          "success",
        );
        break;
    }

    renderAbilities();
    awardXP(30);
  }

  // ─────────────────────────────────────────────────────────
  //  4. PROCEDURAL RANDOM EVENTS
  // ─────────────────────────────────────────────────────────
  const EVENT_DEFS = [
    {
      id: "bonus_rain",
      name: "Bonus Rain!",
      icon: "💰",
      type: "positive",
      desc: "A surge of good fortune drops cash your way.",
      fn() {
        const amt = 500 + Math.floor(Math.random() * 1500);
        game.state.cash += amt;
        if (typeof app !== "undefined") app.showFloat(amt);
        app.log(`💰 Bonus Rain! +$${amt.toLocaleString()} bonus.`, "epic");
        if (typeof SFX !== "undefined") SFX.play("bigCoin");
        if (typeof FX !== "undefined") FX.screenFlash("gain");
      },
    },
    {
      id: "market_craze",
      name: "Market Craze",
      icon: "📈",
      type: "positive",
      desc: "Markets surge — XP doubled for 15 seconds.",
      fn() {
        rt.xpBoostUntil = Date.now() + 15000;
        app.log("📈 Market Craze! XP gain ×2 for 15 seconds.", "success");
      },
    },
    {
      id: "lucky_streak",
      name: "Lucky Streak",
      icon: "🍀",
      type: "positive",
      desc: "Fortune smiles — 1.5× earnings for 20 seconds!",
      fn() {
        rt.earningsBoostUntil = Date.now() + 20000;
        rt.earningsBoostMult = 1.5;
        app.log(
          "🍀 Lucky Streak! All earnings ×1.5 for 20 seconds.",
          "success",
        );
        if (typeof SFX !== "undefined") SFX.play("hotStreak");
      },
    },
    {
      id: "windfall",
      name: "Tax Windfall",
      icon: "💎",
      type: "positive",
      desc: "A surprise tax refund landed in your account.",
      fn() {
        const amt = 1000 + Math.floor(Math.random() * 4000);
        game.state.cash += amt;
        if (typeof app !== "undefined") app.showFloat(amt);
        app.log(
          `💎 Tax Windfall! +$${amt.toLocaleString()} surprise refund.`,
          "epic",
        );
        if (typeof SFX !== "undefined") SFX.play("casinoWin");
      },
    },
    {
      id: "inspector",
      name: "Inspector Visit",
      icon: "🚨",
      type: "negative",
      desc: "An inspector levied a compliance fine.",
      fn() {
        if (rt.shieldStored) {
          rt.shieldStored = false;
          app.log("🛡️ Fortune Shield blocked the Inspector Visit!", "epic");
          renderAbilities();
          return;
        }
        const fine = 200 + Math.floor(Math.random() * 600);
        game.modCash(-fine);
        app.log(
          `🚨 Inspector Visit! $${fine.toLocaleString()} fine issued.`,
          "error",
        );
        if (typeof SFX !== "undefined") SFX.play("crimeFail");
      },
    },
    {
      id: "price_hike",
      name: "Price Hike",
      icon: "💸",
      type: "negative",
      desc: "Living costs temporarily surged.",
      fn() {
        if (rt.shieldStored) {
          rt.shieldStored = false;
          app.log("🛡️ Fortune Shield blocked the Price Hike!", "epic");
          renderAbilities();
          return;
        }
        const fine = 300 + Math.floor(Math.random() * 700);
        game.modCash(-fine);
        app.log(
          `💸 Price Hike! Extra $${fine.toLocaleString()} cost hit.`,
          "error",
        );
      },
    },
  ];

  function scheduleNextEvent() {
    if (rt.eventTimeout) clearTimeout(rt.eventTimeout);
    const delay = 20000 + Math.floor(Math.random() * 20000);
    rt.eventTimeout = setTimeout(() => {
      fireRandomEvent();
      scheduleNextEvent();
    }, delay);
  }

  function fireRandomEvent() {
    if (!gameActive() || !shellVisible()) return;

    const luck = upgradeLevel("event_luck");
    const pool = EVENT_DEFS.map((e) => ({
      def: e,
      weight: e.type === "positive" ? 1 + luck * 0.4 : 1,
    }));
    const total = pool.reduce((s, p) => s + p.weight, 0);
    let rand = Math.random() * total;
    let chosen = pool[pool.length - 1];
    for (const p of pool) {
      rand -= p.weight;
      if (rand <= 0) {
        chosen = p;
        break;
      }
    }

    showEventBanner(chosen.def);
    chosen.def.fn();
    awardXP(20);
  }

  function showEventBanner(def) {
    const banner = document.getElementById("rs-event-banner");
    if (!banner) return;
    banner.innerHTML = `
      <div class="rs-event-inner rs-event-${def.type}">
        <span class="rs-event-icon">${def.icon}</span>
        <div class="rs-event-text">
          <div class="rs-event-name">${def.name}</div>
          <div class="rs-event-desc">${def.desc}</div>
        </div>
      </div>`;
    banner.classList.add("rs-event-visible");
    clearTimeout(banner._hideTimer);
    banner._hideTimer = setTimeout(
      () => banner.classList.remove("rs-event-visible"),
      5000,
    );
  }

  // ─────────────────────────────────────────────────────────
  //  5. PERSISTENT UPGRADES
  // ─────────────────────────────────────────────────────────
  function buyUpgrade(id) {
    if (!gameActive()) return;
    const def = UPGRADE_DEFS.find((u) => u.id === id);
    if (!def) return;
    const upgs = getUpgrades();
    const cur = upgs[id] || 0;
    if (cur >= def.maxLevel) {
      app.toast("Already at maximum level!", "info");
      return;
    }
    const cost = Math.floor(def.baseCost * Math.pow(def.costMult, cur));
    if (game.state.cash < cost) {
      app.toast(`Need $${cost.toLocaleString()} — not enough cash.`, "error");
      return;
    }
    game.state.cash -= cost;
    app.updateStats();
    upgs[id] = cur + 1;
    saveUpgrades(upgs);
    app.toast(`✅ ${def.name} upgraded to Level ${cur + 1}`, "success");
    if (typeof SFX !== "undefined") SFX.play("buy");
    awardXP(50);
    if (id === "passive_earn") restartPassive();
    renderUpgradesModal();
    renderXPBar();
  }

  function showUpgradesModal() {
    if (typeof app === "undefined") return;
    app.modal(
      "🏪 Upgrade Shop",
      buildUpgradesHTML(),
      [{ text: "Close", cb: () => app.closeModal() }],
      { html: true },
    );
  }

  function buildUpgradesHTML() {
    const upgs = getUpgrades();
    const rows = UPGRADE_DEFS.map((def) => {
      const lvl = upgs[def.id] || 0;
      const maxed = lvl >= def.maxLevel;
      const cost = maxed
        ? 0
        : Math.floor(def.baseCost * Math.pow(def.costMult, lvl));
      const canAfford =
        typeof game !== "undefined" && game.state && game.state.cash >= cost;
      return `
        <div class="rs-upg-row">
          <div class="rs-upg-icon">${def.icon}</div>
          <div class="rs-upg-info">
            <div class="rs-upg-name">${def.name} <span class="rs-upg-level">Lv ${lvl}/${def.maxLevel}</span></div>
            <div class="rs-upg-desc">${def.desc}</div>
            ${lvl > 0 ? `<div class="rs-upg-effect">${def.effectLabel(lvl)}</div>` : ""}
          </div>
          <div class="rs-upg-action">
            ${
              maxed
                ? '<span class="rs-upg-maxed">MAX</span>'
                : `<button class="rs-upg-btn${canAfford ? "" : " rs-upg-cant"}" onclick="RS.buyUpgrade('${def.id}')">$${typeof shortNumber !== "undefined" ? shortNumber(cost, 0) : cost.toLocaleString()}</button>`
            }
          </div>
        </div>`;
    }).join("");
    const total = UPGRADE_DEFS.reduce((s, d) => s + (upgs[d.id] || 0), 0);
    return `
      <div class="rs-upg-header">Permanent upgrades — persist across all timelines.</div>
      <div class="rs-upg-list">${rows}</div>
      <div class="rs-upg-footer">Total upgrades purchased: <strong>${total}</strong></div>`;
  }

  function renderUpgradesModal() {
    const modal = document.getElementById("modal-desc");
    if (modal && modal.querySelector(".rs-upg-list")) {
      modal.innerHTML = buildUpgradesHTML();
    }
  }

  function restartPassive() {
    if (rt.passiveInterval) clearInterval(rt.passiveInterval);
    const lvl = upgradeLevel("passive_earn");
    if (lvl <= 0) return;
    const perSec = lvl * 50;
    rt.passiveInterval = setInterval(() => {
      if (!gameActive() || !shellVisible()) return;
      game.state.cash += perSec;
      const el = document.getElementById("stat-cash");
      if (el && typeof shortNumber !== "undefined")
        el.innerText = shortNumber(game.state.cash, 1);
      // small float indicator every 5 ticks
      if (Math.random() < 0.2 && typeof app !== "undefined")
        app.showFloat(perSec * 5);
    }, 1000);
  }

  // ─────────────────────────────────────────────────────────
  //  RENDER FUNCTIONS
  // ─────────────────────────────────────────────────────────
  function renderXPBar() {
    const containers = [
      document.getElementById("rs-xp-bar-container"),
      document.getElementById("rs-xp-bar-container-m"),
    ].filter(Boolean);
    if (!containers.length) return;
    const p = gs();
    if (!p) return;

    const level = p.level || 1;
    const maxLevel = XP_THRESHOLDS.length;
    const isMax = level >= maxLevel;
    const xp = p.xp || 0;
    const needed = isMax ? 0 : XP_THRESHOLDS[level] || 1;
    const pct = isMax ? 100 : Math.min(100, (xp / needed) * 100);
    const mult = LEVEL_MULT[Math.min(level - 1, LEVEL_MULT.length - 1)];
    const lvlColor =
      level >= 8 ? "#f97316" : level >= 5 ? "#a78bfa" : "#38bdf8";

    const html = `
      <div class="rs-xp-row">
        <span class="rs-xp-badge" style="border-color:${lvlColor};color:${lvlColor}">Lv ${level}</span>
        <div class="rs-xp-center">
          <div class="rs-xp-track" title="${isMax ? "MAX LEVEL" : xp + " / " + needed + " XP"}">
            <div class="rs-xp-fill" style="width:${pct}%;background:${lvlColor}"></div>
            <span class="rs-xp-pct">${isMax ? "MAX" : Math.round(pct) + "%"}</span>
          </div>
        </div>
        <span class="rs-xp-mult">×${mult.toFixed(2)}</span>
        <button class="rs-shop-btn" onclick="RS.showUpgradesModal()" title="Upgrade Shop">🏪</button>
      </div>`;
    containers.forEach((c) => {
      c.innerHTML = html;
    });
  }

  function renderCombo() {
    const el = document.getElementById("rs-combo-widget");
    if (!el) return;
    if (rt.comboCount < 2) {
      el.classList.remove("rs-combo-visible");
      return;
    }
    el.classList.add("rs-combo-visible");
    const pct = Math.min(100, (rt.comboCount / 10) * 100);
    const tier =
      rt.comboCount >= 10
        ? "rs-combo-max"
        : rt.comboCount >= 7
          ? "rs-combo-high"
          : rt.comboCount >= 4
            ? "rs-combo-mid"
            : "";
    el.className = `rs-combo-widget rs-combo-visible ${tier}`;
    el.innerHTML = `
      <div class="rs-combo-label">COMBO</div>
      <div class="rs-combo-count">×${rt.comboCount}</div>
      <div class="rs-combo-xp">${rt.comboMult.toFixed(1)}× XP</div>
      <div class="rs-combo-bar"><div class="rs-combo-fill" style="width:${pct}%"></div></div>`;
  }

  function renderAbilities() {
    const containers = [
      document.getElementById("rs-abilities-container"),
      document.getElementById("rs-abilities-container-m"),
    ].filter(Boolean);
    if (!containers.length) return;
    const p = gs();
    if (!p) return;
    const now = Date.now();

    const abHtml = ABILITY_DEFS.map((def) => {
      const unlocked = p.level >= def.unlockLevel;
      const ab = (p.abilities && p.abilities[def.id]) || { cooldownUntil: 0 };
      const onCd = ab.cooldownUntil > now;
      const cdSecs = onCd ? Math.ceil((ab.cooldownUntil - now) / 1000) : 0;

      let isActive = false;
      if (def.id === "double_reward") isActive = rt.doubleRewardUntil > now;
      if (def.id === "slow_time") isActive = rt.slowTimeUntil > now;
      if (def.id === "fortune_shield") isActive = rt.shieldStored;

      let cls = "rs-ability-btn";
      if (!unlocked) cls += " rs-ab-locked";
      else if (isActive) cls += " rs-ab-active";
      else if (onCd) cls += " rs-ab-cd";

      return `
        <button class="${cls}" onclick="RS.useAbility('${def.id}')"
          title="${def.name}: ${def.desc}${!unlocked ? " (Unlocks at Level " + def.unlockLevel + ")" : ""}">
          <span class="rs-ab-icon">${def.icon}</span>
          <span class="rs-ab-name">${def.name}</span>
          ${onCd ? `<span class="rs-ab-timer">${cdSecs}s</span>` : ""}
          ${!unlocked ? `<span class="rs-ab-lock">🔒 Lv${def.unlockLevel}</span>` : ""}
          ${isActive ? `<span class="rs-ab-active-badge">ACTIVE</span>` : ""}
        </button>`;
    }).join("");
    containers.forEach((c) => {
      c.innerHTML = abHtml;
    });
  }

  function showXPFloat(amount) {
    const el = document.createElement("div");
    el.className = "rs-xp-float";
    el.textContent = `+${amount} XP`;
    // position near XP bar
    const bar = document.getElementById("rs-xp-bar-container");
    if (bar) {
      const rect = bar.getBoundingClientRect();
      el.style.left = rect.left + "px";
      el.style.top = rect.top - 10 + window.scrollY + "px";
    } else {
      el.style.right = "20px";
      el.style.top = "120px";
    }
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1400);
  }

  // ─────────────────────────────────────────────────────────
  //  GAME HOOKS
  // ─────────────────────────────────────────────────────────
  function patchGame() {
    if (rt.patched) return;
    rt.patched = true;

    // Patch registerAction → trigger combo + award base XP
    const origRegister = game.registerAction.bind(game);
    game.registerAction = function (score = 1) {
      origRegister(score);
      onAction();
    };

    // Patch modCash → apply income multiplier for positive amounts
    const origModCash = game.modCash.bind(game);
    game.modCash = function (amt) {
      if (amt > 0) {
        const mult = incomeMult();
        // Only scale if multiplier is meaningfully different from 1 to
        // avoid floating-point drift on tiny amounts
        if (mult > 1.001) amt = Math.round(amt * mult);
        // Track total earned during Chaos Mode
        if (rt.chaos.active) rt.chaos.totalEarned += amt;
      }
      origModCash(amt);
    };

    // Patch nextMonth → freeze stat decay + award XP per month
    const origNextMonth = game.nextMonth.bind(game);
    game.nextMonth = function () {
      const frozen = rt.slowTimeUntil > Date.now();
      if (frozen) {
        // Snapshot vitals before
        const hp = game.state.stats.health;
        const joy = game.state.stats.happiness;
        origNextMonth();
        // Undo at most the natural per-month health and happiness decay
        // (energy is always reset to 100 in nextMonth, so leave it)
        const hpDrop = hp - game.state.stats.health;
        const joyDrop = joy - game.state.stats.happiness;
        if (hpDrop > 0)
          game.state.stats.health = Math.min(
            hp,
            game.state.stats.health + hpDrop * 0.9,
          );
        if (joyDrop > 0)
          game.state.stats.happiness = Math.min(
            joy,
            game.state.stats.happiness + joyDrop * 0.9,
          );
      } else {
        origNextMonth();
      }
      awardXP(8);
    };

    // Patch startNewTimeline → reset retention state for the new run
    const origReset = game.startNewTimeline.bind(game);
    game.startNewTimeline = function () {
      origReset();
      if (game.state) {
        game.state.retention = { xp: 0, level: 1, abilities: {} };
        ABILITY_DEFS.forEach((a) => {
          game.state.retention.abilities[a.id] = { cooldownUntil: 0 };
        });
      }
      // Clear active ability states
      rt.doubleRewardUntil = 0;
      rt.slowTimeUntil = 0;
      rt.shieldStored = false;
      rt.earningsBoostUntil = 0;
      rt.xpBoostUntil = 0;
      // Clear chaos mode
      if (rt.chaos.active) {
        clearInterval(rt.chaos.tickTimer);
        clearTimeout(rt.chaos.eventTimer);
        clearTimeout(rt.chaos.endTimer);
        document.body.classList.remove("chaos-active");
      }
      rt.chaos.active = false;
      rt.chaos.endTime = 0;
      rt.chaos.cooldownUntil = 0;
      rt.chaos.mult = 1;
      rt.chaos.totalEarned = 0;
      rt.chaos.peakMult = 1;
      rt.chaos.fastestCombo = 0;
      rt.chaos.insaneTriggered = false;
      breakCombo();
      renderXPBar();
      renderAbilities();
      renderChaosButton();
    };
  }

  // ─────────────────────────────────────────────────────────
  //  INIT
  // ─────────────────────────────────────────────────────────
  function init() {
    const p = gs();
    if (!p) return;

    patchGame();
    renderXPBar();
    renderAbilities();
    renderCombo();

    // Start random event cycle
    scheduleNextEvent();

    // Start passive income if purchased
    restartPassive();

    // Tick ability cooldown display + chaos HUD every second
    if (rt.abilityTickInterval) clearInterval(rt.abilityTickInterval);
    rt.abilityTickInterval = setInterval(() => {
      renderAbilities();
      renderChaosButton();
      if (rt.chaos.active) renderChaosHUD();
    }, 1000);

    renderChaosButton();
  }

  // ─────────────────────────────────────────────────────────
  //  6. CHAOS MODE
  // ─────────────────────────────────────────────────────────
  const CHAOS_UNLOCK_LEVEL = 5;
  const CHAOS_DURATION_MS = 45000; // 45 seconds
  const CHAOS_COOLDOWN_MS = 180000; // 3 minutes

  function chaosUnlocked() {
    const p = gs();
    return p && p.level >= CHAOS_UNLOCK_LEVEL;
  }

  function activateChaos() {
    if (!gameActive()) return;
    if (rt.chaos.active) {
      app.toast("🌀 Chaos Mode is already running!", "info");
      return;
    }
    if (!chaosUnlocked()) {
      app.toast(
        `🔒 Chaos Mode unlocks at Level ${CHAOS_UNLOCK_LEVEL}!`,
        "error",
      );
      return;
    }
    if (Date.now() < rt.chaos.cooldownUntil) {
      const secs = Math.ceil((rt.chaos.cooldownUntil - Date.now()) / 1000);
      app.toast(`⏳ Chaos Mode cooling down: ${secs}s`, "error");
      return;
    }

    // --- ACTIVATE ---
    rt.chaos.active = true;
    rt.chaos.endTime = Date.now() + CHAOS_DURATION_MS;
    rt.chaos.mult = 5;
    rt.chaos.totalEarned = 0;
    rt.chaos.peakMult = 5;
    rt.chaos.fastestCombo = rt.comboCount;
    rt.chaos.insaneTriggered = false;
    rt.chaos.startNetWorth =
      typeof game !== "undefined" && game.getNetWorth
        ? game.getNetWorth()
        : game.state
          ? game.state.cash
          : 0;

    document.body.classList.add("chaos-active");
    showChaosActivateBanner();
    renderChaosButton();
    renderChaosHUD();

    if (rt.chaos.tickTimer) clearInterval(rt.chaos.tickTimer);
    rt.chaos.tickTimer = setInterval(tickChaos, 2000);
    scheduleNextChaosEvent();

    if (rt.chaos.endTimer) clearTimeout(rt.chaos.endTimer);
    rt.chaos.endTimer = setTimeout(endChaos, CHAOS_DURATION_MS);

    if (typeof SFX !== "undefined") SFX.play("hotStreak");
    if (typeof FX !== "undefined") {
      FX.screenFlash("epic");
      FX.screenShake("lg");
      FX.confetti();
    }
    app.log("🌀 CHAOS MODE ACTIVATED — multipliers escalating!", "epic");
    awardXP(50);
  }

  function tickChaos() {
    if (!rt.chaos.active) return;
    const now = Date.now();
    if (now >= rt.chaos.endTime) {
      endChaos();
      return;
    }

    const elapsed = CHAOS_DURATION_MS - (rt.chaos.endTime - now);
    const progress = elapsed / CHAOS_DURATION_MS; // 0 → 1

    // Escalate: 5x → 20x, combo stacks exponentially
    const baseEscalation = 5 + Math.floor(progress * 15);
    const comboStack = 1 + rt.comboCount * 0.08;
    rt.chaos.mult = Math.min(
      20,
      Math.round(baseEscalation * comboStack * 10) / 10,
    );
    rt.chaos.peakMult = Math.max(rt.chaos.peakMult, rt.chaos.mult);
    rt.chaos.fastestCombo = Math.max(rt.chaos.fastestCombo, rt.comboCount);

    // Shake intensity grows with progress
    if (typeof FX !== "undefined") {
      if (progress > 0.5 && Math.random() < 0.6) FX.screenShake("sm");
      // Color pulse flash
      const hue = Math.floor(Math.random() * 360);
      FX.screenFlash(
        `rgba(${hue > 180 ? 100 : 200},${hue < 120 ? 50 : 150},255,0.12)`,
      );
    }

    // Spawn particle burst
    spawnChaosParticles(Math.floor(progress * 5) + 2);

    // Update HUD
    renderChaosHUD();

    // INSANE RUN trigger at 12x+
    if (rt.chaos.mult >= 12 && !rt.chaos.insaneTriggered) {
      rt.chaos.insaneTriggered = true;
      setTimeout(showInsaneRunBanner, 300);
    }
  }

  function scheduleNextChaosEvent() {
    if (!rt.chaos.active) return;
    clearTimeout(rt.chaos.eventTimer);
    const delay = 3000 + Math.random() * 4000; // 3–7s
    rt.chaos.eventTimer = setTimeout(() => {
      if (rt.chaos.active) {
        fireChaosEvent();
        scheduleNextChaosEvent();
      }
    }, delay);
  }

  function fireChaosEvent() {
    if (!gameActive()) return;
    const chaosEvents = [
      {
        name: "💥 CASH SURGE",
        color: "#fbbf24",
        fn() {
          const base = Math.floor(800 + Math.random() * 4200);
          const mult = incomeMult();
          const finalAmt = mult > 1.001 ? Math.round(base * mult) : base;
          game.modCash(base);
          spawnBigFloat(
            `+$${typeof shortNumber !== "undefined" ? shortNumber(finalAmt, 0) : finalAmt}`,
            "#fbbf24",
          );
          app.log(
            `💥 Cash Surge! +$${typeof shortNumber !== "undefined" ? shortNumber(finalAmt, 0) : finalAmt}`,
            "epic",
          );
        },
      },
      {
        name: "🔥 COMBO EXPLOSION",
        color: "#f97316",
        fn() {
          rt.comboCount = Math.min(20, rt.comboCount + 4);
          rt.comboMult = Math.min(3.0, rt.comboMult + 0.5);
          renderCombo();
          spawnBigFloat(`COMBO ×${rt.comboCount}`, "#f97316");
          app.log(`🔥 Combo Explosion! Combo ×${rt.comboCount}`, "epic");
        },
      },
      {
        name: "⚡ SPEED RUSH",
        color: "#38bdf8",
        fn() {
          const base = Math.floor(400 + Math.random() * 2600);
          const mult = incomeMult();
          const finalAmt = mult > 1.001 ? Math.round(base * mult) : base;
          game.modCash(base);
          spawnBigFloat(
            `⚡ +$${typeof shortNumber !== "undefined" ? shortNumber(finalAmt, 0) : finalAmt}`,
            "#38bdf8",
          );
          app.log(
            `⚡ Speed Rush! +$${typeof shortNumber !== "undefined" ? shortNumber(finalAmt, 0) : finalAmt}`,
            "success",
          );
        },
      },
      {
        name: "💎 JACKPOT",
        color: "#a78bfa",
        fn() {
          const base = Math.floor(3000 + Math.random() * 12000);
          const mult = incomeMult() * 2; // jackpot double-dips
          const finalAmt = Math.round(base * mult);
          game.state.cash += finalAmt;
          if (rt.chaos.active) rt.chaos.totalEarned += finalAmt;
          if (typeof app !== "undefined") app.showFloat(finalAmt);
          spawnBigFloat(
            `💎 JACKPOT\n+$${typeof shortNumber !== "undefined" ? shortNumber(finalAmt, 0) : finalAmt}`,
            "#a78bfa",
          );
          if (typeof FX !== "undefined") {
            FX.confetti();
            FX.screenFlash("epic");
          }
          if (typeof SFX !== "undefined") SFX.play("casinoWin");
          app.log(
            `💎 JACKPOT! +$${typeof shortNumber !== "undefined" ? shortNumber(finalAmt, 0) : finalAmt}`,
            "epic",
          );
        },
      },
      {
        name: "🌪️ WINDFALL",
        color: "#34d399",
        fn() {
          const base = Math.floor(1200 + Math.random() * 3800);
          const mult = incomeMult();
          const finalAmt = mult > 1.001 ? Math.round(base * mult) : base;
          game.modCash(base);
          spawnBigFloat(
            `🌪️ WINDFALL\n+$${typeof shortNumber !== "undefined" ? shortNumber(finalAmt, 0) : finalAmt}`,
            "#34d399",
          );
          app.log(
            `🌪️ Windfall! +$${typeof shortNumber !== "undefined" ? shortNumber(finalAmt, 0) : finalAmt}`,
            "epic",
          );
        },
      },
    ];
    const ev = chaosEvents[Math.floor(Math.random() * chaosEvents.length)];
    ev.fn();
    if (typeof FX !== "undefined")
      FX.screenShake(Math.random() < 0.35 ? "lg" : "sm");
    awardXP(15);
    renderChaosHUD();
  }

  function endChaos() {
    if (!rt.chaos.active) return;
    rt.chaos.active = false;
    rt.chaos.cooldownUntil = Date.now() + CHAOS_COOLDOWN_MS;

    clearInterval(rt.chaos.tickTimer);
    clearTimeout(rt.chaos.eventTimer);
    clearTimeout(rt.chaos.endTimer);

    document.body.classList.remove("chaos-active");
    hideChaosHUD();
    renderChaosButton();

    if (typeof FX !== "undefined") FX.screenFlash("rgba(168,85,247,0.25)");
    app.log(
      `🌀 Chaos Mode ended — Total earned: $${typeof shortNumber !== "undefined" ? shortNumber(rt.chaos.totalEarned, 1) : rt.chaos.totalEarned}`,
      "epic",
    );
    app.toast("🌀 Chaos Mode ended!", "info");

    awardXP(100);
    setTimeout(() => showChaosHighlight(), 1500);
  }

  function showChaosActivateBanner() {
    const el = document.getElementById("chaos-activate-banner");
    if (!el) return;
    el.classList.add("chaos-activate-visible");
    setTimeout(() => el.classList.remove("chaos-activate-visible"), 3500);
  }

  function showInsaneRunBanner() {
    const el = document.getElementById("chaos-insane-banner");
    if (!el) return;
    el.innerHTML = `
      <div class="chaos-insane-inner">
        <div class="chaos-insane-eyebrow">🌀 CHAOS ×${rt.chaos.mult.toFixed(0)}</div>
        <div class="chaos-insane-title">INSANE RUN</div>
        <div class="chaos-insane-earned">+$${typeof shortNumber !== "undefined" ? shortNumber(rt.chaos.totalEarned, 1) : rt.chaos.totalEarned} EARNED</div>
      </div>`;
    el.classList.add("chaos-insane-visible");
    if (typeof FX !== "undefined") {
      FX.screenShake("lg");
      FX.screenFlash("epic");
      FX.confetti();
    }
    if (typeof SFX !== "undefined") SFX.play("achievement");
    setTimeout(() => el.classList.remove("chaos-insane-visible"), 5000);
  }

  function showChaosHighlight() {
    if (typeof app === "undefined") return;
    const stats = {
      totalEarned: rt.chaos.totalEarned,
      peakMult: rt.chaos.peakMult,
      fastestCombo: rt.chaos.fastestCombo,
    };
    const moneyFmt = (n) =>
      typeof shortNumber !== "undefined"
        ? shortNumber(n, 1)
        : n.toLocaleString();

    const html = `
      <div class="chaos-highlight-screen">
        <div class="chs-glow-title">🌀 CHAOS RECAP</div>
        <div class="chs-subtitle">Your best moments this run</div>
        <div class="chs-stats-grid">
          <div class="chs-stat-card">
            <div class="chs-stat-val chs-val-peak">×${stats.peakMult.toFixed(0)}</div>
            <div class="chs-stat-label">PEAK MULTIPLIER</div>
          </div>
          <div class="chs-stat-card">
            <div class="chs-stat-val chs-val-combo">×${stats.fastestCombo}</div>
            <div class="chs-stat-label">MAX COMBO</div>
          </div>
          <div class="chs-stat-card">
            <div class="chs-stat-val chs-val-earn">$${moneyFmt(stats.totalEarned)}</div>
            <div class="chs-stat-label">CHAOS EARNED</div>
          </div>
        </div>
        <div class="chs-tip">Share this to TikTok or YouTube Shorts! 📱</div>
      </div>`;

    app.modal(
      "🌀 CHAOS RECAP",
      html,
      [
        { text: "📸 Clip This Run", cb: () => clipThisRun(stats) },
        { text: "Close", cb: () => app.closeModal() },
      ],
      { html: true },
    );
  }

  function clipThisRun(stats) {
    const canvas = document.createElement("canvas");
    canvas.width = 660;
    canvas.height = 380;
    const ctx = canvas.getContext("2d");

    // Background gradient
    const bg = ctx.createLinearGradient(0, 0, 660, 380);
    bg.addColorStop(0, "#0a0118");
    bg.addColorStop(0.5, "#120830");
    bg.addColorStop(1, "#0a0118");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 660, 380);

    // Glowing border
    ctx.shadowColor = "#a855f7";
    ctx.shadowBlur = 24;
    ctx.strokeStyle = "#7c3aed";
    ctx.lineWidth = 3;
    ctx.strokeRect(4, 4, 652, 372);
    ctx.shadowBlur = 0;

    // Inner accent border
    ctx.strokeStyle = "rgba(168,85,247,0.3)";
    ctx.lineWidth = 1;
    ctx.strokeRect(12, 12, 636, 356);

    // Title: CHAOS MODE
    ctx.shadowColor = "#f97316";
    ctx.shadowBlur = 20;
    ctx.fillStyle = "#f97316";
    ctx.font = "bold 64px 'Bebas Neue', Impact, Arial";
    ctx.textAlign = "center";
    ctx.fillText("CHAOS MODE", 330, 82);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.fillStyle = "#fbbf24";
    ctx.font = "600 22px 'Space Grotesk', Arial";
    ctx.fillText("INSANE RUN · GREEDIGO", 330, 116);

    // Divider
    const div = ctx.createLinearGradient(40, 0, 620, 0);
    div.addColorStop(0, "transparent");
    div.addColorStop(0.3, "#7c3aed");
    div.addColorStop(0.7, "#7c3aed");
    div.addColorStop(1, "transparent");
    ctx.strokeStyle = div;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(40, 136);
    ctx.lineTo(620, 136);
    ctx.stroke();

    // Stats columns
    const cols = [
      {
        label: "PEAK MULTIPLIER",
        val: `×${stats.peakMult.toFixed(0)}`,
        color: "#f97316",
      },
      { label: "MAX COMBO", val: `×${stats.fastestCombo}`, color: "#fb923c" },
      {
        label: "CHAOS EARNED",
        val: `$${stats.totalEarned >= 1e6 ? (stats.totalEarned / 1e6).toFixed(1) + "M" : stats.totalEarned >= 1000 ? (stats.totalEarned / 1000).toFixed(1) + "k" : stats.totalEarned.toFixed(0)}`,
        color: "#a78bfa",
      },
    ];
    const colW = 220;
    cols.forEach((c, i) => {
      const x = 110 + i * colW;
      ctx.shadowColor = c.color;
      ctx.shadowBlur = 12;
      ctx.fillStyle = c.color;
      ctx.font = "bold 44px 'Bebas Neue', Impact, Arial";
      ctx.textAlign = "center";
      ctx.fillText(c.val, x, 215);
      ctx.shadowBlur = 0;
      ctx.fillStyle = "#94a3b8";
      ctx.font = "600 11px 'Space Grotesk', Arial";
      ctx.letterSpacing = "2px";
      ctx.fillText(c.label, x, 238);
    });

    // Player name
    const pName =
      typeof game !== "undefined" && game.state?.char?.name
        ? game.state.char.name
        : "Player";
    ctx.fillStyle = "#64748b";
    ctx.font = "14px 'Space Grotesk', Arial";
    ctx.textAlign = "center";
    ctx.fillText(`${pName}'s Chaos Run  ·  greedigo.com`, 330, 295);

    // Bottom prompt
    ctx.fillStyle = "#475569";
    ctx.font = "13px 'Space Grotesk', Arial";
    ctx.fillText("Share on TikTok · YouTube Shorts · Twitch", 330, 326);

    // Mini confetti dots
    const dotColors = [
      "#f97316",
      "#a855f7",
      "#fbbf24",
      "#3b82f6",
      "#10b981",
      "#ec4899",
    ];
    for (let i = 0; i < 28; i++) {
      ctx.fillStyle = dotColors[i % dotColors.length];
      ctx.beginPath();
      ctx.arc(
        20 + Math.random() * 620,
        340 + Math.random() * 28,
        Math.random() * 3 + 1,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "greedigo-chaos-run.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      app.toast("📸 Screenshot saved! Post it online! 🚀", "success");
    });
  }

  function spawnBigFloat(text, color) {
    const el = document.createElement("div");
    el.className = "chaos-big-float";
    el.style.setProperty("--chaos-float-color", color || "#fbbf24");
    el.textContent = text;
    el.style.left = 25 + Math.random() * 50 + "%";
    el.style.top = 20 + Math.random() * 30 + "%";
    document.body.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.remove();
    }, 2600);
  }

  function spawnChaosParticles(count) {
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "chaos-particle";
      const hue = Math.floor(Math.random() * 360);
      p.style.setProperty("--p-hue", hue);
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = Math.random() * 100 + "vh";
      p.style.setProperty("--p-dx", (Math.random() - 0.5) * 120 + "px");
      p.style.setProperty("--p-dy", (Math.random() - 0.5) * 120 + "px");
      document.body.appendChild(p);
      setTimeout(() => {
        if (p.parentNode) p.remove();
      }, 900);
    }
  }

  function renderChaosHUD() {
    const el = document.getElementById("chaos-hud");
    if (!el) return;
    if (!rt.chaos.active) {
      el.style.display = "none";
      return;
    }

    const remaining = Math.max(
      0,
      Math.ceil((rt.chaos.endTime - Date.now()) / 1000),
    );
    const pct = Math.max(
      0,
      ((rt.chaos.endTime - Date.now()) / CHAOS_DURATION_MS) * 100,
    );
    const moneyFmt = (n) =>
      typeof shortNumber !== "undefined"
        ? shortNumber(n, 1)
        : n.toLocaleString();

    el.style.display = "";
    el.innerHTML = `
      <div class="chaos-hud-inner">
        <div class="chaos-hud-header">
          <span class="chaos-hud-icon">🌀</span>
          <span class="chaos-hud-title-txt">CHAOS MODE</span>
          <span class="chaos-hud-timer">${remaining}s</span>
        </div>
        <div class="chaos-hud-mult">×${rt.chaos.mult.toFixed(0)}<span class="chaos-hud-mult-label"> MULT</span></div>
        <div class="chaos-hud-bar-wrap">
          <div class="chaos-hud-bar">
            <div class="chaos-hud-fill" style="width:${pct.toFixed(1)}%"></div>
          </div>
        </div>
        <div class="chaos-hud-earned">+$${moneyFmt(rt.chaos.totalEarned)} earned</div>
      </div>`;
  }

  function hideChaosHUD() {
    const el = document.getElementById("chaos-hud");
    if (el) el.style.display = "none";
  }

  function renderChaosButton() {
    const targets = ["chaos-mode-btn", "chaos-mode-btn-m"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!targets.length) return;
    const unlocked = chaosUnlocked();
    const active = rt.chaos.active;
    const onCd = !active && Date.now() < rt.chaos.cooldownUntil;
    const cdSecs = onCd
      ? Math.ceil((rt.chaos.cooldownUntil - Date.now()) / 1000)
      : 0;

    if (active) {
      targets.forEach((btn) => {
        btn.innerHTML = `<span class="chaos-btn-icon">🌀</span><span class="chaos-btn-label">CHAOS!<br><small>ACTIVE</small></span>`;
        btn.className =
          btn.id === "chaos-mode-btn-m"
            ? "chaos-mode-btn chaos-btn-active msp-chaos-btn"
            : "chaos-mode-btn chaos-btn-active";
        btn.disabled = true;
      });
      return;
    }
    if (onCd) {
      targets.forEach((btn) => {
        btn.innerHTML = `<span class="chaos-btn-icon">🌀</span><span class="chaos-btn-label">Chaos<br><small>${cdSecs}s</small></span>`;
        btn.className =
          btn.id === "chaos-mode-btn-m"
            ? "chaos-mode-btn chaos-btn-cd msp-chaos-btn"
            : "chaos-mode-btn chaos-btn-cd";
        btn.disabled = true;
      });
      return;
    }
    if (!unlocked) {
      targets.forEach((btn) => {
        btn.innerHTML = `<span class="chaos-btn-icon">🌀</span><span class="chaos-btn-label">Chaos<br><small>Lv ${CHAOS_UNLOCK_LEVEL}</small></span>`;
        btn.className =
          btn.id === "chaos-mode-btn-m"
            ? "chaos-mode-btn chaos-btn-locked msp-chaos-btn"
            : "chaos-mode-btn chaos-btn-locked";
        btn.disabled = true;
        btn.title = `Unlocks at Level ${CHAOS_UNLOCK_LEVEL}`;
      });
      return;
    }
    targets.forEach((btn) => {
      btn.innerHTML = `<span class="chaos-btn-icon">🌀</span><span class="chaos-btn-label">CHAOS<br><small>MODE</small></span>`;
      btn.className =
        btn.id === "chaos-mode-btn-m"
          ? "chaos-mode-btn chaos-btn-ready msp-chaos-btn"
          : "chaos-mode-btn chaos-btn-ready";
      btn.disabled = false;
      btn.title = "Activate 45-second Chaos Mode!";
    });
  }

  // Watch for game shell becoming visible (new game start or continue)
  function watchForGameStart() {
    const shell = document.getElementById("app-shell");
    if (!shell) {
      setTimeout(watchForGameStart, 200);
      return;
    }

    // If already visible (page reload with active session)
    if (shell.style.display !== "none") {
      setTimeout(init, 300);
      return;
    }

    // Observe attribute changes on shell — keep observer alive for new timeline starts
    let _lastVisible = false;
    const obs = new MutationObserver(() => {
      const nowVisible = shell.style.display !== "none";
      if (nowVisible && !_lastVisible) {
        // app-shell just became visible (game start or new timeline)
        setTimeout(init, 300);
      }
      _lastVisible = nowVisible;
    });
    obs.observe(shell, { attributes: true, attributeFilter: ["style"] });
  }

  document.addEventListener("DOMContentLoaded", watchForGameStart);

  // ─────────────────────────────────────────────────────────
  //  PUBLIC API
  // ─────────────────────────────────────────────────────────
  return {
    useAbility,
    buyUpgrade,
    showUpgradesModal,
    awardXP,
    onAction,
    init,
    activateChaos,
    // expose for debug / prestige hooks
    get comboCount() {
      return rt.comboCount;
    },
    get level() {
      const p = gs();
      return p ? p.level : 1;
    },
    get chaosActive() {
      return rt.chaos.active;
    },
  };
})();
