// ============================================================
//  VIRAL & ADDICTION SYSTEMS — Greedigo
//  1. Daily Rewards & Login Streaks
//  2. Prestige / Legacy System (cross-life bonuses)
//  3. Expanded Achievements (30+ new, shareable)
//  4. Challenge Runs (modifiers for bonus rewards)
//  5. Near-Miss Mechanics (dopamine hooks)
//  6. 40+ New Random Events (multi-choice dilemmas)
//  7. Social Sharing (shareable cards)
//  8. Golden Hour & Lucky Streaks
//  9. Life Feed (narrative log)
//  10. Momentum & Hype System
// ============================================================

const VIRAL = (() => {
  "use strict";

  // ─────────────────────────────────────────────────────────
  //  1. DAILY REWARDS & LOGIN STREAKS
  // ─────────────────────────────────────────────────────────
  const DAILY_REWARDS = [
    { day: 1, cash: 200, label: "$200 Cash", icon: "💵", xp: 30 },
    { day: 2, cash: 500, label: "$500 Cash", icon: "💰", xp: 50 },
    { day: 3, cash: 1000, label: "$1,000 Cash", icon: "🤑", xp: 80 },
    {
      day: 4,
      cash: 0,
      label: "+20 Energy",
      icon: "⚡",
      xp: 60,
      stat: { energy: 20 },
    },
    { day: 5, cash: 2500, label: "$2,500 Cash", icon: "💎", xp: 120 },
    {
      day: 6,
      cash: 0,
      label: "+15 All Stats",
      icon: "🌟",
      xp: 100,
      stat: { health: 15, energy: 15, happiness: 15, smarts: 15 },
    },
    {
      day: 7,
      cash: 10000,
      label: "MEGA: $10K + Bonus!",
      icon: "🏆",
      xp: 300,
      mega: true,
    },
  ];

  function getDailyState() {
    try {
      const raw = localStorage.getItem("GreedigoDailyRewards");
      return raw
        ? JSON.parse(raw)
        : { streak: 0, lastClaim: null, totalLogins: 0 };
    } catch {
      return { streak: 0, lastClaim: null, totalLogins: 0 };
    }
  }

  function saveDailyState(state) {
    try {
      localStorage.setItem("GreedigoDailyRewards", JSON.stringify(state));
    } catch {}
  }

  function checkDailyReward() {
    if (typeof game === "undefined" || !game.state || game.state.life?.dead)
      return;
    const ds = getDailyState();
    const now = new Date();
    const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

    if (ds.lastClaim === today) return; // Already claimed today

    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = `${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDate()}`;

    // Check if streak continues or resets
    if (ds.lastClaim === yesterdayStr) {
      ds.streak = Math.min(ds.streak + 1, 7);
    } else if (ds.lastClaim) {
      ds.streak = 1; // Streak broken
    } else {
      ds.streak = 1; // First time
    }

    ds.lastClaim = today;
    ds.totalLogins = (ds.totalLogins || 0) + 1;
    saveDailyState(ds);

    // Show daily reward popup after brief delay
    setTimeout(() => showDailyRewardModal(ds), 1500);
  }

  function showDailyRewardModal(ds) {
    if (typeof app === "undefined") return;
    const reward = DAILY_REWARDS[(ds.streak - 1) % 7];
    const streakBonus = Math.floor(ds.streak / 7); // Extra cycle bonus

    let rewardHTML = `
      <div class="vr-daily-popup">
        <div class="vr-daily-streak">
          <span class="vr-daily-flame">${ds.streak >= 7 ? "🔥🔥🔥" : ds.streak >= 3 ? "🔥🔥" : "🔥"}</span>
          <span class="vr-daily-streak-num">${ds.streak}-Day Streak!</span>
        </div>
        <div class="vr-daily-days">`;

    for (let i = 0; i < 7; i++) {
      const r = DAILY_REWARDS[i];
      const claimed = i < ds.streak;
      const isToday = i === (ds.streak - 1) % 7;
      rewardHTML += `<div class="vr-day ${claimed ? "vr-day-claimed" : ""} ${isToday ? "vr-day-today" : ""}">
        <div class="vr-day-num">Day ${i + 1}</div>
        <div class="vr-day-icon">${r.icon}</div>
        <div class="vr-day-label">${r.label}</div>
        ${claimed ? '<div class="vr-day-check">✓</div>' : ""}
      </div>`;
    }

    rewardHTML += `</div>`;
    if (streakBonus > 0) {
      rewardHTML += `<div class="vr-daily-bonus">🌟 Cycle Bonus ×${streakBonus}: All rewards doubled!</div>`;
    }
    rewardHTML += `</div>`;

    const multiplier = streakBonus > 0 ? 2 : 1;
    app.modal(
      `${reward.icon} Daily Reward — Day ${ds.streak}`,
      rewardHTML,
      [
        {
          text: `Claim ${reward.label}!`,
          cb: () => {
            if (reward.cash > 0) game.modCash(reward.cash * multiplier);
            if (reward.stat) {
              Object.entries(reward.stat).forEach(([k, v]) =>
                game.modStat(k, v * multiplier),
              );
            }
            if (reward.xp && typeof RS !== "undefined")
              RS.addXP(reward.xp * multiplier);

            // Mega day bonus
            if (reward.mega) {
              FX.confetti();
              FX.screenShake("lg");
              SFX.play("achievement");
              game.modStat("happiness", 25);
            } else {
              FX.screenFlash("gain");
              SFX.play("coin");
            }
            app.toast(
              `Day ${ds.streak} reward claimed! ${reward.label}`,
              "epic",
            );
            app.closeModal();
          },
        },
      ],
      { html: true },
    );
  }

  // ─────────────────────────────────────────────────────────
  //  2. PRESTIGE / LEGACY SYSTEM
  // ─────────────────────────────────────────────────────────
  const LEGACY_PERKS = [
    {
      id: "silver_spoon",
      cost: 5,
      name: "Silver Spoon",
      desc: "Start with +$1,000",
      icon: "🥄",
    },
    {
      id: "born_smart",
      cost: 8,
      name: "Born Smart",
      desc: "+10 Smarts at start",
      icon: "🧒",
    },
    {
      id: "healthy_genes",
      cost: 8,
      name: "Healthy Genes",
      desc: "+15 Max Health",
      icon: "🧬",
    },
    {
      id: "trust_fund",
      cost: 15,
      name: "Trust Fund",
      desc: "Start with +$5,000",
      icon: "💰",
    },
    {
      id: "natural_charm",
      cost: 12,
      name: "Natural Charm",
      desc: "+20% relationship success",
      icon: "😎",
    },
    {
      id: "street_cred",
      cost: 10,
      name: "Street Cred",
      desc: "Start with 50 crime rep",
      icon: "🔥",
    },
    {
      id: "investor_blood",
      cost: 20,
      name: "Investor Blood",
      desc: "-50% trading fees",
      icon: "📈",
    },
    {
      id: "luck_gene",
      cost: 25,
      name: "Luck Gene",
      desc: "+5% positive event chance",
      icon: "🍀",
    },
    {
      id: "empire_heir",
      cost: 40,
      name: "Empire Heir",
      desc: "Start with +$25,000",
      icon: "👑",
    },
    {
      id: "immortal_will",
      cost: 60,
      name: "Immortal Will",
      desc: "-15% death risk",
      icon: "💀",
    },
  ];

  function getLegacyState() {
    try {
      const raw = localStorage.getItem("GreedigoLegacy");
      return raw
        ? JSON.parse(raw)
        : { points: 0, totalEarned: 0, perks: {}, lives: [], bestLife: null };
    } catch {
      return {
        points: 0,
        totalEarned: 0,
        perks: {},
        lives: [],
        bestLife: null,
      };
    }
  }

  function saveLegacyState(state) {
    try {
      localStorage.setItem("GreedigoLegacy", JSON.stringify(state));
    } catch {}
  }

  function calculateLegacyPoints(gameState) {
    if (!gameState) return 0;
    let pts = 0;
    const nw = typeof game !== "undefined" ? game.getNetWorth() : 0;
    const age = Math.floor((gameState.age || 216) / 12);

    // Net worth bonuses
    if (nw >= 1000000) pts += 20;
    else if (nw >= 500000) pts += 12;
    else if (nw >= 100000) pts += 6;
    else if (nw >= 10000) pts += 2;

    // Age survived
    pts += Math.max(0, Math.floor((age - 18) / 5));

    // Achievements
    const achCount = Object.keys(gameState.gameplay?.achievements || {}).length;
    pts += achCount * 2;

    // Legend score
    pts += Math.floor((gameState.gameplay?.legendScore || 0) / 20);

    // Career progression
    if (gameState.job?.level >= 3) pts += 3;
    if (gameState.job?.level >= 4) pts += 5;

    // Crime lord
    if ((gameState.crime?.rep || 0) >= 500) pts += 5;

    // Retired successfully
    if (gameState.life?.retired) pts += 10;

    return pts;
  }

  function onLifeEnd() {
    if (typeof game === "undefined" || !game.state) return;
    const legacy = getLegacyState();
    const earned = calculateLegacyPoints(game.state);
    const nw = game.getNetWorth();
    const age = Math.floor(game.state.age / 12);

    legacy.points += earned;
    legacy.totalEarned += earned;
    legacy.lives.push({
      age,
      netWorth: nw,
      died: !!game.state.life.dead,
      reason: game.state.life.deathReason || "Retired",
      points: earned,
      date: Date.now(),
      name: game.state.char?.name || "Unknown",
    });
    // Keep last 50 lives
    if (legacy.lives.length > 50) legacy.lives = legacy.lives.slice(-50);

    if (!legacy.bestLife || nw > (legacy.bestLife.netWorth || 0)) {
      legacy.bestLife = { age, netWorth: nw, name: game.state.char?.name };
    }

    saveLegacyState(legacy);
    showLegacyEarnedToast(earned);
  }

  function showLegacyEarnedToast(pts) {
    if (pts > 0 && typeof app !== "undefined") {
      setTimeout(() => {
        app.toast(
          `+${pts} Legacy Points earned! Spend them on your next life.`,
          "epic",
        );
      }, 2000);
    }
  }

  function applyLegacyPerks() {
    if (typeof game === "undefined" || !game.state) return;
    const legacy = getLegacyState();
    const perks = legacy.perks || {};

    if (perks.silver_spoon) game.modCash(1000);
    if (perks.trust_fund) game.modCash(5000);
    if (perks.empire_heir) game.modCash(25000);
    if (perks.born_smart) game.modStat("smarts", 10);
    if (perks.healthy_genes) {
      game.state.stats.health = Math.min(100, game.state.stats.health + 15);
      game.state.life.maxHealth = (game.state.life.maxHealth || 100) + 15;
    }
    if (perks.street_cred && game.state.crime) {
      game.state.crime.rep = (game.state.crime.rep || 0) + 50;
    }

    // Store active perks on state for runtime checks
    game.state._legacyPerks = perks;
  }

  function showLegacyShop() {
    if (typeof app === "undefined") return;
    const legacy = getLegacyState();

    let html = `<div class="vr-legacy-shop">
      <div class="vr-legacy-header">
        <div class="vr-legacy-points">
          <span class="vr-lp-icon">⭐</span>
          <span class="vr-lp-num">${legacy.points}</span>
          <span class="vr-lp-label">Legacy Points</span>
        </div>
        <div class="vr-legacy-lives">${legacy.lives.length} Past Lives • Best: $${typeof shortNumber !== "undefined" ? shortNumber(legacy.bestLife?.netWorth || 0) : (legacy.bestLife?.netWorth || 0).toLocaleString()}</div>
      </div>
      <div class="vr-legacy-perks">`;

    LEGACY_PERKS.forEach((perk) => {
      const owned = !!legacy.perks[perk.id];
      const canBuy = !owned && legacy.points >= perk.cost;
      html += `<div class="vr-perk ${owned ? "vr-perk-owned" : ""} ${canBuy ? "vr-perk-available" : ""}">
        <div class="vr-perk-icon">${perk.icon}</div>
        <div class="vr-perk-info">
          <div class="vr-perk-name">${perk.name}</div>
          <div class="vr-perk-desc">${perk.desc}</div>
        </div>
        <div class="vr-perk-cost">${owned ? "✅ Owned" : `⭐ ${perk.cost}`}</div>
        ${
          !owned
            ? `<button class="vr-perk-buy ${canBuy ? "" : "vr-perk-locked"}" onclick="VIRAL.buyPerk('${perk.id}')" ${canBuy ? "" : "disabled"}>
          ${canBuy ? "Buy" : "Locked"}
        </button>`
            : ""
        }
      </div>`;
    });

    html += `</div>`;

    // Past Lives Gallery
    if (legacy.lives.length > 0) {
      html += `<div class="vr-past-lives-title">📜 Past Lives</div><div class="vr-past-lives">`;
      legacy.lives
        .slice(-8)
        .reverse()
        .forEach((life) => {
          html += `<div class="vr-past-life">
          <span class="vr-pl-name">${life.name || "Unknown"}</span>
          <span class="vr-pl-age">${life.died ? "☠️" : "🏖️"} Age ${life.age}</span>
          <span class="vr-pl-nw">$${typeof shortNumber !== "undefined" ? shortNumber(life.netWorth) : life.netWorth.toLocaleString()}</span>
          <span class="vr-pl-pts">+${life.points}⭐</span>
        </div>`;
        });
      html += `</div>`;
    }

    html += `</div>`;

    app.modal(
      "⭐ Legacy Shop",
      html,
      [{ text: "Close", cb: () => app.closeModal(), style: "secondary" }],
      { html: true, wide: true },
    );
  }

  function buyPerk(perkId) {
    const legacy = getLegacyState();
    const perk = LEGACY_PERKS.find((p) => p.id === perkId);
    if (!perk || legacy.perks[perkId] || legacy.points < perk.cost) return;

    legacy.points -= perk.cost;
    legacy.perks[perkId] = true;
    saveLegacyState(legacy);

    FX.screenFlash("gain");
    SFX.play("buy");
    app.toast(
      `${perk.icon} ${perk.name} unlocked! Active on next life.`,
      "epic",
    );
    showLegacyShop(); // Refresh
  }

  // ─────────────────────────────────────────────────────────
  //  3. CHALLENGE RUNS
  // ─────────────────────────────────────────────────────────
  const CHALLENGE_DEFS = [
    {
      id: "speedrun",
      name: "Speedrun",
      desc: "Retire before age 30",
      icon: "⏱️",
      rewardMult: 2.5,
      check: (g) => g.life?.retired && g.age / 12 <= 30,
    },
    {
      id: "pacifist",
      name: "Pacifist",
      desc: "Retire rich — zero crimes committed",
      icon: "☮️",
      rewardMult: 2.0,
      check: (g) => g.life?.retired && (g.runStats?.crimeActions || 0) === 0,
    },
    {
      id: "crime_only",
      name: "Crime Lord",
      desc: "$500K+ net worth, career income = $0",
      icon: "🔫",
      rewardMult: 2.5,
      check: (g) =>
        g.life?.retired &&
        g.runStats?.careerMonths === 0 &&
        (typeof game !== "undefined" ? game.getNetWorth() : 0) >= 500000,
    },
    {
      id: "no_edu",
      name: "Self-Made",
      desc: "Retire with $250K+, no degrees",
      icon: "📚",
      rewardMult: 1.8,
      check: (g) =>
        g.life?.retired &&
        (g.edu?.degrees?.length || 0) === 0 &&
        (typeof game !== "undefined" ? game.getNetWorth() : 0) >= 250000,
    },
    {
      id: "gambler",
      name: "All In",
      desc: "Win $100K+ from casino alone",
      icon: "🎰",
      rewardMult: 3.0,
      check: (g) => (g.casino?.net || 0) >= 100000,
    },
    {
      id: "minimalist",
      name: "Minimalist",
      desc: "Retire with $1M+, own zero items",
      icon: "🧘",
      rewardMult: 2.0,
      check: (g) =>
        g.life?.retired &&
        (g.inventory?.length || 0) === 0 &&
        (typeof game !== "undefined" ? game.getNetWorth() : 0) >= 1000000,
    },
    {
      id: "family_first",
      name: "Family First",
      desc: "Married + 3 kids + retire happy",
      icon: "👨‍👩‍👧‍👦",
      rewardMult: 1.5,
      check: (g) =>
        g.life?.retired &&
        g.relationship?.status === "married" &&
        (g.relationship?.children?.length || 0) >= 3,
    },
    {
      id: "empire",
      name: "Empire Builder",
      desc: "3+ active startups with $2M+ NW",
      icon: "🏗️",
      rewardMult: 2.5,
      check: (g) =>
        (g.startups?.length || 0) >= 3 &&
        (typeof game !== "undefined" ? game.getNetWorth() : 0) >= 2000000,
    },
  ];

  function getActiveChallenge() {
    if (typeof game === "undefined" || !game.state) return null;
    return game.state._activeChallenge || null;
  }

  function startChallenge(id) {
    if (typeof game === "undefined" || !game.state) return;
    const ch = CHALLENGE_DEFS.find((c) => c.id === id);
    if (!ch) return;
    game.state._activeChallenge = id;
    app.toast(`${ch.icon} Challenge Active: ${ch.name} — ${ch.desc}`, "epic");
    FX.screenFlash("gain");
  }

  function checkChallengeCompletion() {
    if (typeof game === "undefined" || !game.state) return;
    const chId = game.state._activeChallenge;
    if (!chId) return;
    const ch = CHALLENGE_DEFS.find((c) => c.id === chId);
    if (!ch || !ch.check(game.state)) return;

    // Challenge completed!
    game.state._activeChallenge = null;
    game.state._completedChallenges = game.state._completedChallenges || [];
    if (!game.state._completedChallenges.includes(chId)) {
      game.state._completedChallenges.push(chId);
      const bonus = Math.floor(
        calculateLegacyPoints(game.state) * ch.rewardMult,
      );
      const legacy = getLegacyState();
      legacy.points += bonus;
      saveLegacyState(legacy);

      FX.confetti();
      FX.screenShake("lg");
      SFX.play("achievement");
      app.toast(
        `${ch.icon} CHALLENGE COMPLETE: ${ch.name}! +${bonus} Legacy Points!`,
        "epic",
      );
    }
  }

  function showChallengeSelect() {
    if (typeof app === "undefined") return;
    const completed =
      (typeof game !== "undefined" && game.state?._completedChallenges) || [];

    let html = `<div class="vr-challenges">
      <div class="vr-ch-info">Pick a challenge to earn bonus Legacy Points. Only one active at a time.</div>`;

    CHALLENGE_DEFS.forEach((ch) => {
      const done = completed.includes(ch.id);
      const active = getActiveChallenge() === ch.id;
      html += `<div class="vr-ch ${done ? "vr-ch-done" : ""} ${active ? "vr-ch-active" : ""}">
        <div class="vr-ch-icon">${ch.icon}</div>
        <div class="vr-ch-body">
          <div class="vr-ch-name">${ch.name} ${done ? "✅" : ""} ${active ? "🔴 ACTIVE" : ""}</div>
          <div class="vr-ch-desc">${ch.desc}</div>
          <div class="vr-ch-reward">Reward: ×${ch.rewardMult} Legacy Points</div>
        </div>
        ${!done && !active ? `<button class="vr-ch-start" onclick="VIRAL.startChallenge('${ch.id}');app.closeModal()">Start</button>` : ""}
      </div>`;
    });

    html += `</div>`;
    app.modal(
      "🏆 Challenge Runs",
      html,
      [{ text: "Close", cb: () => app.closeModal(), style: "secondary" }],
      { html: true, wide: true },
    );
  }

  // ─────────────────────────────────────────────────────────
  //  4. NEAR-MISS MECHANICS
  // ─────────────────────────────────────────────────────────
  function triggerNearMiss(context, details) {
    if (typeof app === "undefined") return;
    const messages = {
      casino: [
        "So close! ONE number away from the jackpot! 🎰",
        "The reels spun in perfect sequence... almost. Try again? 🎲",
        "You could FEEL the win. Next spin could be yours! 💫",
        "That was a near-miss — statistically, you're due for a hit! 🔥",
      ],
      crime: [
        "You barely escaped! Heart pounding. Adrenaline is addictive... 😰",
        "Sirens in the distance. That was close. Worth the rush? 🚨",
        "You slipped away by inches. Your stealth is improving! 🥷",
      ],
      market: [
        "If you'd held 2 more months, that would've been a 3× return! 📈",
        "The stock you almost bought just went up 40%! 😱",
        "So close to timing the bottom perfectly. Trust your instincts! 📊",
      ],
      startup: [
        "Your startup was THIS close to product-market fit! 🚀",
        "One more funding round could've saved it. Next time... 💡",
      ],
    };

    const pool = messages[context] || messages.casino;
    const msg = pool[Math.floor(Math.random() * pool.length)];

    // Near-miss toast with special styling
    app.toast(msg, "warning");

    // Subtle happiness boost (near-misses are exciting!)
    if (typeof game !== "undefined" && game.state) {
      game.modStat("happiness", 3);
    }
  }

  // ─────────────────────────────────────────────────────────
  //  5. EXPANDED RANDOM EVENTS (40 new multi-choice dilemmas)
  // ─────────────────────────────────────────────────────────
  const VIRAL_EVENTS = [
    // ── WINDFALL ────────────────────────────────────
    {
      emoji: "📦",
      title: "Mystery Package Arrived",
      desc: "A package from a distant relative you never knew. Inside: a sealed envelope. Do you open it?",
      optA: "Open it",
      optB: "Sell it unopened on eBay",
      optC: "Ignore it",
      gateFn: () => true,
      fxA(g) {
        const roll = Math.random();
        if (roll < 0.3) {
          const amt = 5000 + Math.floor(Math.random() * 15000);
          g.modCash(amt);
          app.toast(
            `Inside: bearer bonds worth $${shortNumber(amt)}! 💰`,
            "epic",
          );
          FX.confetti();
        } else if (roll < 0.6) {
          g.modStat("smarts", 8);
          app.toast(
            "A collection of rare books. Your mind expands. +8 Smarts",
            "success",
          );
        } else {
          g.modStat("happiness", -10);
          app.toast(
            "It was a box of old debts and a cursed doll. Happiness -10.",
            "error",
          );
        }
      },
      fxB(g) {
        const amt = 800 + Math.floor(Math.random() * 1200);
        g.modCash(amt);
        app.toast(`Sold for $${amt} on eBay. Safe choice.`, "success");
      },
      fxC(g) {
        app.toast("You left it on the porch. It vanished overnight.", "info");
      },
    },
    {
      emoji: "🎤",
      title: "Karaoke Night Goes Viral",
      desc: "Your drunk karaoke video hit 2M views overnight. Record labels and meme pages are reaching out.",
      optA: "Sign with a label",
      optB: "Sell the rights",
      optC: "Delete everything",
      gateFn: (g) => g.state.stats.happiness >= 40,
      fxA(g) {
        if (Math.random() < 0.4) {
          g.modCash(25000 + Math.floor(Math.random() * 25000));
          g.modStat("happiness", 20);
          app.toast("Your single charted! Brief fame and fortune! 🎵", "epic");
          FX.confetti();
        } else {
          g.modStat("happiness", -15);
          g.modCash(-3000);
          app.toast(
            "The label scammed you. Lost $3K in 'studio fees'. 😤",
            "error",
          );
        }
      },
      fxB(g) {
        g.modCash(5000);
        app.toast("Sold meme rights for $5K. Smart move.", "success");
      },
      fxC(g) {
        g.modStat("happiness", -5);
        app.toast("Deleted. But the internet never forgets...", "info");
      },
    },
    {
      emoji: "💍",
      title: "Ex Wants You Back",
      desc: "Your ex slides into your DMs at 2 AM: 'I made a mistake.' They seem genuine this time.",
      optA: "Give them another chance",
      optB: "Ghost them",
      optC: "Meet for closure only",
      gateFn: (g) => g.state.age > 20 * 12,
      fxA(g) {
        if (Math.random() < 0.5) {
          g.modStat("happiness", 20);
          app.toast("Love rekindled. This time feels different. ❤️", "success");
        } else {
          g.modStat("happiness", -20);
          g.modStat("energy", -15);
          app.toast("Same mistakes. You got hurt again. 💔", "error");
        }
      },
      fxB(g) {
        g.modStat("happiness", 5);
        app.toast("Left on read. Power move. 😎", "success");
      },
      fxC(g) {
        g.modStat("smarts", 5);
        g.modStat("happiness", 8);
        app.toast(
          "Had coffee. Got closure. Both moved on. Growth. 🌱",
          "success",
        );
      },
    },
    {
      emoji: "🏠",
      title: "Neighbor's House Fire",
      desc: "Your neighbor's house caught fire. They lost everything. The community is rallying.",
      optA: "Donate $2,000",
      optB: "Volunteer your time",
      optC: "Mind your business",
      gateFn: (g) => g.state.cash > 3000,
      fxA(g) {
        g.modCash(-2000);
        g.modStat("happiness", 15);
        if (g.state.gameplay)
          g.state.gameplay.legendScore =
            (g.state.gameplay.legendScore || 0) + 8;
        app.toast(
          "Your generosity was noticed. +15 Happy, +8 Legend",
          "success",
        );
        // Karma: small chance of future reward
        if (Math.random() < 0.25) {
          setTimeout(() => {
            g.modCash(8000);
            app.toast(
              "🎁 The neighbor's insurance company sent you a thank-you bonus: $8,000!",
              "epic",
            );
          }, 8000);
        }
      },
      fxB(g) {
        g.modStat("energy", -15);
        g.modStat("happiness", 12);
        app.toast(
          "Spent the weekend helping rebuild. Exhausting but fulfilling.",
          "success",
        );
      },
      fxC(g) {
        g.modStat("happiness", -8);
        app.toast("You watched from your window. The guilt lingers.", "info");
      },
    },
    {
      emoji: "🧪",
      title: "Experimental Drug Trial",
      desc: "A biotech company offers $5,000 to test a new cognitive enhancer. 'Totally safe,' they say.",
      optA: "Take the money — join the trial",
      optB: "Negotiate for more",
      optC: "No way",
      gateFn: () => true,
      fxA(g) {
        g.modCash(5000);
        const roll = Math.random();
        if (roll < 0.4) {
          g.modStat("smarts", 20);
          g.modStat("energy", 15);
          app.toast(
            "NZT moment! Your brain is ON FIRE. +20 Smarts! 🧠",
            "epic",
          );
          FX.screenFlash("gain");
        } else if (roll < 0.7) {
          app.toast(
            "No effect. $5K for sitting in a chair. Easy money.",
            "success",
          );
        } else {
          g.modStat("health", -25);
          g.modStat("energy", -20);
          app.toast(
            "Side effects: migraines, nausea, temporary vision loss. -25 Health 🤮",
            "error",
          );
          FX.screenShake("lg");
        }
      },
      fxB(g) {
        if (Math.random() < 0.5) {
          g.modCash(12000);
          app.toast(
            "They needed volunteers badly. $12K. Cha-ching.",
            "success",
          );
        } else {
          app.toast("They picked someone else. Opportunity gone.", "info");
        }
      },
      fxC(g) {
        app.toast(
          "You value your brain cells. Smart move... probably.",
          "info",
        );
      },
    },
    {
      emoji: "🚗",
      title: "Road Rage Incident",
      desc: "Someone cut you off and brake-checked you. They're now out of their car, walking toward you.",
      optA: "Confront them",
      optB: "Drive away",
      optC: "Record on phone",
      gateFn: () => true,
      fxA(g) {
        if (Math.random() < 0.3) {
          g.modStat("health", -20);
          g.modCash(-5000);
          app.toast(
            "Fight went wrong. Hospital bill: $5,000. -20 Health. 🏥",
            "error",
          );
          FX.screenShake("lg");
        } else {
          g.modStat("happiness", 8);
          app.toast(
            "They backed down when you stood your ground. Respect earned. 💪",
            "success",
          );
        }
      },
      fxB(g) {
        g.modStat("happiness", 3);
        app.toast(
          "Drove off. Smart. Arrived alive. That's what matters.",
          "success",
        );
      },
      fxC(g) {
        if (Math.random() < 0.4) {
          g.modCash(3000);
          app.toast(
            "Video went viral! Insurance settlement: $3,000. 📱",
            "success",
          );
        } else {
          app.toast(
            "Got it on camera. Filed a report. Justice served.",
            "info",
          );
        }
      },
    },
    {
      emoji: "🐕",
      title: "Stray Dog Follows You Home",
      desc: "A scrappy stray has been following you for 3 blocks. Big brown eyes. Ribs showing.",
      optA: "Adopt it",
      optB: "Take to shelter",
      optC: "Keep walking",
      gateFn: () => true,
      fxA(g) {
        g.modStat("happiness", 18);
        g.modCash(-500);
        if (g.state.relationship) {
          g.state.relationship.pets = g.state.relationship.pets || [];
          g.state.relationship.pets.push({
            name: "Lucky",
            type: "dog",
            age: 0,
            happiness: 80,
            health: 60,
          });
        }
        app.toast(
          "🐕 Meet Lucky! Vet bills: $500. Unconditional love: priceless.",
          "success",
        );
      },
      fxB(g) {
        g.modStat("happiness", 5);
        app.toast(
          "Dropped it at a no-kill shelter. Good deed done. 🏠",
          "success",
        );
      },
      fxC(g) {
        g.modStat("happiness", -8);
        app.toast(
          "You hear it whimpering as you walk away. Guilt stings.",
          "info",
        );
      },
    },
    {
      emoji: "🎓",
      title: "Free Masterclass Opportunity",
      desc: "An MIT professor is offering a free 2-week intensive bootcamp. Applications close today.",
      optA: "Apply immediately",
      optB: "Too busy — skip it",
      gateFn: (g) => g.state.stats.smarts >= 20,
      fxA(g) {
        g.modStat("smarts", 15);
        g.modStat("energy", -20);
        // Random skill boost
        const skills = Object.keys(g.state.skills || {});
        if (skills.length > 0) {
          const sk = skills[Math.floor(Math.random() * skills.length)];
          g.state.skills[sk] = Math.min(100, (g.state.skills[sk] || 0) + 10);
          app.toast(
            `Intense bootcamp! +15 Smarts, +10 ${sk}. Worth the grind. 🎓`,
            "success",
          );
        } else {
          app.toast(
            "Intense bootcamp! +15 Smarts. Your brain is sharper. 🎓",
            "success",
          );
        }
      },
      fxB(g) {
        app.toast("Life goes on. But you wonder what could've been...", "info");
      },
    },
    {
      emoji: "💸",
      title: "Tax Audit Notice",
      desc: "The IRS flagged your return. An agent wants to 'review' your finances next week.",
      optA: "Cooperate fully",
      optB: "Hire a tax lawyer — $3,000",
      optC: "Shred everything and hope",
      gateFn: (g) => g.state.cash > 10000,
      fxA(g) {
        const penalty = Math.floor(g.state.cash * (0.05 + Math.random() * 0.1));
        g.modCash(-penalty);
        app.toast(
          `Audit found discrepancies. Penalty: $${shortNumber(penalty)}. Ouch!`,
          "error",
        );
      },
      fxB(g) {
        g.modCash(-3000);
        if (Math.random() < 0.7) {
          app.toast(
            "Lawyer found deductions you missed. Net gain! Smart move. 💼",
            "success",
          );
          g.modCash(5000);
        } else {
          app.toast(
            "Lawyer tried, but they still hit you. At least it's less. 📝",
            "info",
          );
        }
      },
      fxC(g) {
        if (Math.random() < 0.4) {
          const fine = Math.floor(g.state.cash * 0.2);
          g.modCash(-fine);
          g.modStat("happiness", -15);
          app.toast(
            `They found out. Obstruction fine: $${shortNumber(fine)}! 🚨`,
            "error",
          );
          FX.screenShake("sm");
        } else {
          app.toast(
            "They moved on to bigger fish. Got lucky this time. 😅",
            "success",
          );
        }
      },
    },
    {
      emoji: "⚡",
      title: "Power Outage — Crypto Opportunity",
      desc: "Your area lost power for 6 hours. But your phone shows crypto crashed 40% globally.",
      optA: "Buy the dip with $5K",
      optB: "Buy aggressive — $15K",
      optC: "Wait it out",
      gateFn: (g) => g.state.cash > 6000,
      fxA(g) {
        g.modCash(-5000);
        setTimeout(() => {
          if (Math.random() < 0.6) {
            g.modCash(12000);
            app.toast("📈 Crypto bounced! Your $5K → $12K. Nice call!", "epic");
            FX.screenFlash("gain");
          } else {
            g.modCash(2000);
            app.toast(
              "Crypto kept dipping. Got $2K back. Could be worse.",
              "warning",
            );
          }
        }, 5000);
        app.toast("Bought the dip. Now we wait... ⏳", "info");
      },
      fxB(g) {
        g.modCash(-15000);
        setTimeout(() => {
          if (Math.random() < 0.45) {
            g.modCash(45000);
            app.toast(
              "🚀 MASSIVE BOUNCE! $15K → $45K! LEGENDARY TRADE!",
              "epic",
            );
            FX.confetti();
            FX.screenShake("lg");
          } else {
            g.modCash(5000);
            app.toast(
              "Still down. Got $5K back. -$10K total. Pain. 📉",
              "error",
            );
          }
        }, 5000);
        app.toast("All in on the dip. Bold. Very bold. 🎲", "warning");
      },
      fxC(g) {
        app.toast(
          "Power came back. Crypto recovered without you. FOMO is real.",
          "info",
        );
      },
    },
    {
      emoji: "🎪",
      title: "Carnival Fortune Teller",
      desc: "A mysterious fortune teller at the local fair grabs your wrist. 'I see your future. $20 for a reading.'",
      optA: "Pay $20 — why not?",
      optB: "Walk away",
      gateFn: () => true,
      fxA(g) {
        g.modCash(-20);
        const fortunes = [
          () => {
            g.modStat("happiness", 15);
            app.toast(
              "'Great love is coming.' You feel warm and hopeful. ❤️",
              "success",
            );
          },
          () => {
            g.modStat("smarts", 10);
            app.toast(
              "'Invest in your mind.' Cryptic but... inspirational. 🧠",
              "success",
            );
          },
          () => {
            const amt = 1000 + Math.floor(Math.random() * 4000);
            g.modCash(amt);
            app.toast(
              `'Check your coat pocket.' You find $${amt} you forgot about! 💰`,
              "epic",
            );
          },
          () => {
            g.modStat("health", -10);
            app.toast(
              "'Beware the next meal.' You feel nauseous suddenly. -10 Health 🤢",
              "error",
            );
          },
          () => {
            g.modStat("happiness", 20);
            app.toast(
              "'Everything will be okay.' Simple. But you needed to hear that. 🌟",
              "success",
            );
            FX.screenFlash("gain");
          },
        ];
        fortunes[Math.floor(Math.random() * fortunes.length)]();
      },
      fxB(g) {
        app.toast(
          "'You'll regret that!' she yells. Probably just marketing.",
          "info",
        );
      },
    },
    {
      emoji: "🏋️",
      title: "Gym Bro Offers Steroids",
      desc: "The biggest guy at the gym pulls you aside. 'Want results 10x faster? I got the good stuff. $800.'",
      optA: "Buy and use them",
      optB: "Report him",
      optC: "Politely decline",
      gateFn: () => true,
      fxA(g) {
        g.modCash(-800);
        g.modStat("health", 25);
        g.modStat("energy", 20);
        app.toast("Gains are INSANE. You look incredible. 💪🔥", "success");
        // Delayed side effects
        setTimeout(() => {
          if (Math.random() < 0.5) {
            g.modStat("health", -40);
            g.modStat("happiness", -15);
            app.toast(
              "Side effects kicked in hard. Heart palpitations, mood swings. -40 Health 💀",
              "error",
            );
            FX.screenShake("lg");
          }
        }, 12000);
      },
      fxB(g) {
        g.modStat("happiness", 5);
        if (g.state.gameplay)
          g.state.gameplay.legendScore =
            (g.state.gameplay.legendScore || 0) + 5;
        app.toast(
          "Gym kicked him out. You did the right thing. +5 Legend",
          "success",
        );
      },
      fxC(g) {
        g.modStat("happiness", 3);
        app.toast("Natural gains only. Slow but sustainable. 🏋️", "info");
      },
    },
    {
      emoji: "🌊",
      title: "Flash Flood Warning",
      desc: "Massive flooding is headed your way. You have 30 minutes to act.",
      optA: "Evacuate now — leave everything",
      optB: "Grab valuables and run",
      optC: "Stay and protect your stuff",
      gateFn: () => true,
      fxA(g) {
        g.modStat("health", 5);
        const loss = Math.min(g.state.cash * 0.1, 5000);
        g.modCash(-loss);
        app.toast(
          `Evacuated safely. Some property damage: -$${shortNumber(loss)}. But you're alive.`,
          "success",
        );
      },
      fxB(g) {
        if (Math.random() < 0.7) {
          g.modStat("health", -5);
          app.toast(
            "Made it out with your stuff! Close call though. -5 Health from stress.",
            "success",
          );
        } else {
          g.modStat("health", -25);
          g.modCash(-3000);
          app.toast(
            "Got caught in the flood grabbing stuff. Hospital visit. -25 Health, -$3K 🌊",
            "error",
          );
          FX.screenShake("sm");
        }
      },
      fxC(g) {
        if (Math.random() < 0.3) {
          app.toast(
            "The flood missed your area. Lucky! Everything's fine. 👌",
            "success",
          );
        } else {
          g.modStat("health", -30);
          g.modCash(-8000);
          app.toast(
            "Water rose fast. Emergency rescue. -30 Health, -$8K in damage. 🚑",
            "error",
          );
          FX.screenShake("lg");
        }
      },
    },
    {
      emoji: "🤝",
      title: "Old Friend Needs $10K",
      desc: "Your childhood best friend calls crying. They need $10,000 to avoid losing their home. They promise to pay it back.",
      optA: "Lend the full $10K",
      optB: "Offer $2K — it's what you can spare",
      optC: "You can't help right now",
      gateFn: (g) => g.state.cash >= 12000,
      fxA(g) {
        g.modCash(-10000);
        g.modStat("happiness", 12);
        // 40% chance they pay back double (with gratitude), 30% they pay back, 30% they ghost you
        const roll = Math.random();
        setTimeout(() => {
          if (roll < 0.25) {
            g.modCash(20000);
            app.toast(
              "💝 They paid back DOUBLE. 'You saved my life. This is everything I have.' +$20K",
              "epic",
            );
            FX.confetti();
          } else if (roll < 0.55) {
            g.modCash(10000);
            app.toast(
              "They paid you back every cent. Friendship restored. 🤝",
              "success",
            );
          } else {
            app.toast(
              "They stopped returning your calls. $10K and a friend — both gone. 💔",
              "error",
            );
          }
        }, 10000);
        app.toast("Money sent. Now you wait and hope. 🙏", "info");
      },
      fxB(g) {
        g.modCash(-2000);
        g.modStat("happiness", 5);
        app.toast(
          "They appreciated what you could give. Real friendship understands limits.",
          "success",
        );
      },
      fxC(g) {
        g.modStat("happiness", -12);
        app.toast(
          "They said they understood. But the silence afterwards says otherwise. 😔",
          "info",
        );
      },
    },
    {
      emoji: "🎰",
      title: "Hot Tip from a Stranger",
      desc: "A well-dressed stranger at a bar whispers: 'Put everything you have on [COMPANY] stock. Trust me.' Then walks away.",
      optA: "YOLO — invest $10K",
      optB: "Small bet — $1K",
      optC: "Ignore the weirdo",
      gateFn: (g) => g.state.cash >= 5000,
      fxA(g) {
        g.modCash(-10000);
        setTimeout(() => {
          if (Math.random() < 0.35) {
            g.modCash(50000);
            app.toast(
              "📈 The tip was REAL! $10K → $50K! Who WAS that person?!",
              "epic",
            );
            FX.confetti();
            FX.screenShake("lg");
          } else {
            g.modCash(2000);
            app.toast(
              "Stock tanked. Got $2K back. -$8K. Never trust bar strangers. 📉",
              "error",
            );
          }
        }, 6000);
        app.toast("All in on a stranger's tip. Bold. Very bold. 🎲", "warning");
      },
      fxB(g) {
        g.modCash(-1000);
        setTimeout(() => {
          if (Math.random() < 0.35) {
            g.modCash(5000);
            app.toast(
              "The tip paid off! $1K → $5K. Should've gone bigger... 📈",
              "success",
            );
          } else {
            app.toast(
              "Stock went nowhere. -$1K. At least you didn't go big.",
              "info",
            );
          }
        }, 6000);
        app.toast("Small bet placed. Conservative play.", "info");
      },
      fxC(g) {
        app.toast(
          "You finished your drink and left. Smart? Or cowardly? You'll never know.",
          "info",
        );
      },
    },
    {
      emoji: "🏆",
      title: "Reality TV Casting Call",
      desc: "Producers of 'Hustle Island' want YOU for their next season. $50K guaranteed, fame possible. 6-month commitment.",
      optA: "Sign up!",
      optB: "Demand more money",
      optC: "Hard pass",
      gateFn: (g) => g.state.age > 19 * 12,
      fxA(g) {
        g.modCash(50000);
        const roll = Math.random();
        if (roll < 0.3) {
          g.modStat("happiness", 30);
          g.modCash(100000);
          if (g.state.gameplay)
            g.state.gameplay.legendScore =
              (g.state.gameplay.legendScore || 0) + 25;
          app.toast(
            "🌟 YOU WON THE SHOW! $150K total + massive fame! Legend +25!",
            "epic",
          );
          FX.confetti();
          FX.screenShake("lg");
        } else if (roll < 0.6) {
          g.modStat("happiness", 10);
          app.toast(
            "Eliminated in week 4. Still got the $50K though. Fun experience!",
            "success",
          );
        } else {
          g.modStat("happiness", -15);
          g.modStat("health", -10);
          app.toast(
            "Horrible edit. The internet hates you now. -15 Happy, -10 Health from stress.",
            "error",
          );
        }
      },
      fxB(g) {
        if (Math.random() < 0.4) {
          g.modCash(80000);
          app.toast(
            "They needed you badly. $80K deal! Negotiation skills pay off! 💪",
            "success",
          );
        } else {
          app.toast("They passed. Someone else took your spot. 🤷", "info");
        }
      },
      fxC(g) {
        app.toast("Your peaceful, un-televised life continues. 🧘", "info");
      },
    },
    {
      emoji: "🔮",
      title: "Déjà Vu – Parallel Life Glimpse",
      desc: "You experience an intense déjà vu. For a split second, you see a version of yourself — richer, happier, more successful. The vision fades.",
      optA: "Channel that energy — hustle harder",
      optB: "Reflect and meditate",
      gateFn: () => true,
      fxA(g) {
        g.modStat("energy", -15);
        g.modStat("happiness", 10);
        // Buff all income for next few rounds (simulated via small cash boost)
        const boost = 500 + Math.floor(Math.random() * 1500);
        g.modCash(boost);
        app.toast(
          `Déjà vu motivation! Worked extra hard. +$${boost}, +10 Happy ⚡`,
          "success",
        );
      },
      fxB(g) {
        g.modStat("happiness", 15);
        g.modStat("smarts", 5);
        g.modStat("health", 5);
        app.toast(
          "Deep meditation. +15 Happy, +5 Smarts, +5 Health. Centered. 🧘",
          "success",
        );
      },
    },
    {
      emoji: "🎂",
      title: "Milestone Birthday Bash",
      desc: "It's a big birthday! Friends want to throw you a massive party. Could be epic... or expensive.",
      optA: "Go all out — $3K party",
      optB: "Keep it chill — $200",
      optC: "Skip it entirely",
      gateFn: (g) => g.state.age % 60 === 0 && g.state.age > 240, // Every 5 years after 20
      fxA(g) {
        g.modCash(-3000);
        g.modStat("happiness", 30);
        g.modStat("energy", -15);
        app.toast(
          "🎉 LEGENDARY PARTY! Happiness through the roof! -$3K but SO worth it!",
          "epic",
        );
        FX.confetti();
      },
      fxB(g) {
        g.modCash(-200);
        g.modStat("happiness", 12);
        app.toast(
          "Nice dinner with close friends. Sometimes less is more. 🎂",
          "success",
        );
      },
      fxC(g) {
        g.modStat("happiness", -10);
        app.toast(
          "Another year older. You scrolled through birthday texts alone. 📱",
          "info",
        );
      },
    },
    {
      emoji: "🏦",
      title: "Bank Error in Your Favor",
      desc: "You check your account: there's an extra $15,000 that isn't yours. A bank error. Nobody knows.",
      optA: "Keep it quietly",
      optB: "Report it to the bank",
      optC: "Donate it anonymously",
      gateFn: () => true,
      fxA(g) {
        g.modCash(15000);
        // Risk: bank may discover it later
        if (Math.random() < 0.35) {
          setTimeout(() => {
            g.modCash(-15000);
            g.modCash(-5000);
            app.toast(
              "🚨 Bank caught the error! Clawed back $15K + $5K penalty! 😱",
              "error",
            );
            FX.screenShake("lg");
          }, 15000);
        }
        app.toast("$15K deposited. Your secret. For now... 🤫", "success");
      },
      fxB(g) {
        g.modStat("happiness", 10);
        g.modCash(500);
        if (g.state.gameplay)
          g.state.gameplay.legendScore =
            (g.state.gameplay.legendScore || 0) + 10;
        app.toast(
          "Bank thanked you with a $500 bonus. +10 Legend. Integrity pays. 🏅",
          "success",
        );
      },
      fxC(g) {
        g.modStat("happiness", 15);
        if (g.state.gameplay)
          g.state.gameplay.legendScore =
            (g.state.gameplay.legendScore || 0) + 15;
        app.toast(
          "Anonymous donation made. +15 Legend. You're a secret hero. 🦸",
          "success",
        );
      },
    },
    {
      emoji: "🎮",
      title: "Side Hustle: Game Goes Viral",
      desc: "That silly mobile game you built on weekends just hit #3 on the App Store. Downloads are EXPLODING.",
      optA: "Quit your job and go full-time",
      optB: "Monetize casually",
      optC: "Sell the game",
      gateFn: (g) => (g.state.skills?.coding || 0) >= 20,
      fxA(g) {
        if (Math.random() < 0.35) {
          g.modCash(200000);
          g.modStat("happiness", 30);
          app.toast(
            "🚀 YOUR GAME MADE $200K! Indie dev dream come true!",
            "epic",
          );
          FX.confetti();
          FX.screenShake("lg");
        } else {
          g.modStat("happiness", -10);
          g.modCash(-8000);
          app.toast(
            "Hype died in 2 weeks. No job, no income. -$8K in expenses. 😰",
            "error",
          );
        }
      },
      fxB(g) {
        g.modCash(15000 + Math.floor(Math.random() * 15000));
        g.modStat("happiness", 15);
        app.toast(
          "Ad revenue flowing! Nice side income while keeping your day job. 💰",
          "success",
        );
      },
      fxC(g) {
        g.modCash(50000 + Math.floor(Math.random() * 50000));
        app.toast(
          `Sold to a publisher! Quick cash and zero stress. Smart exit.`,
          "success",
        );
      },
    },
    // ── CRISIS / TENSION EVENTS ─────────────
    {
      emoji: "⚖️",
      title: "Wrongful Accusation",
      desc: "You've been falsely accused of fraud. If convicted, you face 2 years in prison. You're innocent.",
      optA: "Fight it in court — $8K legal fees",
      optB: "Take a plea deal — 3 months",
      optC: "Flee the country",
      gateFn: (g) => g.state.cash >= 5000 && g.state.age > 22 * 12,
      fxA(g) {
        g.modCash(-8000);
        if (Math.random() < 0.75) {
          g.modStat("happiness", 15);
          g.modCash(20000);
          app.toast(
            "NOT GUILTY! Wrongful accusation lawsuit pays $20K! Justice SERVED! ⚖️",
            "epic",
          );
          FX.confetti();
        } else {
          g.modStat("happiness", -20);
          app.toast(
            "Convicted despite innocence. The system failed you. -20 Happy",
            "error",
          );
          if (g.state.crime)
            g.state.crime.jailMonths = (g.state.crime.jailMonths || 0) + 6;
        }
      },
      fxB(g) {
        g.modStat("happiness", -15);
        if (g.state.crime)
          g.state.crime.jailMonths = (g.state.crime.jailMonths || 0) + 3;
        app.toast(
          "Plea deal: 3 months. You know you're innocent. This burns. 😤",
          "error",
        );
      },
      fxC(g) {
        g.modCash(-20000);
        g.modStat("happiness", -25);
        app.toast(
          "New identity, new country. -$20K. Your old life is gone. 🛫",
          "error",
        );
      },
    },
    {
      emoji: "💡",
      title: "Billion-Dollar Idea",
      desc: "3 AM. Can't sleep. Suddenly — THE idea. The one that could change everything. But it needs $20K to prototype.",
      optA: "Fund it yourself — $20K",
      optB: "Pitch investors",
      optC: "Write it down and sleep on it",
      gateFn: (g) => g.state.stats.smarts >= 40,
      fxA(g) {
        g.modCash(-20000);
        setTimeout(() => {
          const roll = Math.random();
          if (roll < 0.2) {
            g.modCash(500000);
            g.modStat("happiness", 40);
            app.toast(
              "🦄 IT WORKED! Your idea became MASSIVE! +$500K! VISIONARY! 🚀",
              "epic",
            );
            FX.confetti();
            FX.screenShake("lg");
          } else if (roll < 0.5) {
            g.modCash(50000);
            app.toast(
              "Decent traction! Made $50K back. Not bad for a midnight idea. 💡",
              "success",
            );
          } else {
            app.toast(
              "Idea flopped. -$20K. Back to the drawing board. 📝",
              "error",
            );
          }
        }, 8000);
        app.toast("Building the prototype... 🔨", "info");
      },
      fxB(g) {
        if (Math.random() < 0.4) {
          g.modCash(30000);
          g.modStat("happiness", 15);
          app.toast(
            "Investor bought in! $30K funding secured! Let's build! 🚀",
            "success",
          );
        } else {
          app.toast(
            "Every VC passed. 'Interesting but not for us.' Classic. 🙄",
            "info",
          );
        }
      },
      fxC(g) {
        g.modStat("smarts", 3);
        app.toast(
          "Wrote it in your notes app. You'll probably forget... but who knows? 📝",
          "info",
        );
      },
    },
    {
      emoji: "🌍",
      title: "World Event: Market Crash",
      desc: "Breaking news: Global markets crashed 30% overnight. Panic everywhere. Opportunity or catastrophe?",
      optA: "Buy everything — market will recover",
      optB: "Sell everything — protect capital",
      optC: "Do nothing — ride it out",
      gateFn: (g) => g.state.age > 22 * 12,
      fxA(g) {
        const invest = Math.min(g.state.cash * 0.5, 50000);
        g.modCash(-invest);
        setTimeout(() => {
          if (Math.random() < 0.65) {
            g.modCash(invest * 2.5);
            app.toast(
              `🚀 Market recovered! Your $${shortNumber(invest)} → $${shortNumber(Math.floor(invest * 2.5))}! Warren Buffett energy!`,
              "epic",
            );
            FX.confetti();
          } else {
            g.modCash(invest * 0.4);
            app.toast(
              `Market kept falling. Got back $${shortNumber(Math.floor(invest * 0.4))}. Painful. 📉`,
              "error",
            );
          }
        }, 8000);
        app.toast(
          `Invested $${shortNumber(invest)} into the crash. Brave. 🎲`,
          "warning",
        );
      },
      fxB(g) {
        // If they have assets, simulate selling
        const cashSaved = Math.floor(g.state.cash * 0.05);
        g.modCash(cashSaved);
        app.toast(
          `Sold positions. Preserved capital. +$${shortNumber(cashSaved)} from quick sales. 🛡️`,
          "success",
        );
      },
      fxC(g) {
        if (Math.random() < 0.6) {
          app.toast(
            "Markets recovered after 3 months. Patience paid off. Your portfolio is fine. 📊",
            "success",
          );
        } else {
          const loss = Math.floor(g.state.cash * 0.08);
          g.modCash(-loss);
          app.toast(
            `Long recession. Some losses bled through. -$${shortNumber(loss)} 📉`,
            "warning",
          );
        }
      },
    },
    {
      emoji: "🎭",
      title: "Identity Theft!",
      desc: "Someone cloned your credit card and spent $8,000. Your bank froze your accounts.",
      optA: "File police report — long process",
      optB: "Hire a PI — $2,000",
      gateFn: (g) => g.state.cash >= 3000,
      fxA(g) {
        g.modCash(-8000);
        g.modStat("happiness", -12);
        setTimeout(() => {
          if (Math.random() < 0.6) {
            g.modCash(8000);
            app.toast(
              "Bank reversed the charges after investigation. $8K back! 🏦",
              "success",
            );
          } else {
            g.modCash(3000);
            app.toast(
              "Only got $3K back. Insurance covered the rest... partially. 😤",
              "warning",
            );
          }
        }, 10000);
        app.toast(
          "Identity stolen! -$8K. Investigation pending... 🕵️",
          "error",
        );
      },
      fxB(g) {
        g.modCash(-2000);
        if (Math.random() < 0.7) {
          g.modCash(8000);
          g.modCash(5000);
          app.toast(
            "PI caught the thief! $8K recovered + $5K in damages! Justice! 🕵️",
            "epic",
          );
        } else {
          app.toast("PI found nothing. -$2K wasted. 🤦", "error");
        }
      },
    },
    {
      emoji: "🏠",
      title: "Dream Home — Below Market Value",
      desc: "A gorgeous house just listed at 40% below market value. The owner needs a fast sale. But you'd need to liquidate everything.",
      optA: "Buy it — go all in",
      optB: "Make a lowball offer",
      optC: "Pass — too risky",
      gateFn: (g) => g.state.cash >= 30000,
      fxA(g) {
        const cost = Math.min(g.state.cash * 0.8, 200000);
        g.modCash(-cost);
        g.modStat("happiness", 25);
        app.toast(
          `Home purchased for $${shortNumber(cost)}! Below market value. Great investment! 🏡`,
          "success",
        );
        // Appreciation
        setTimeout(() => {
          const appreciation = Math.floor(cost * (0.2 + Math.random() * 0.4));
          g.modCash(appreciation);
          app.toast(
            `🏠 Home appreciated! Property value up $${shortNumber(appreciation)}! 📈`,
            "epic",
          );
        }, 15000);
      },
      fxB(g) {
        if (Math.random() < 0.3) {
          const cost = Math.min(g.state.cash * 0.5, 100000);
          g.modCash(-cost);
          g.modStat("happiness", 20);
          app.toast(
            `Lowball accepted! Got it for $${shortNumber(cost)}. STEAL! 🏡`,
            "epic",
          );
        } else {
          app.toast(
            "They rejected your offer. Someone else swooped in. 😤",
            "info",
          );
        }
      },
      fxC(g) {
        app.toast(
          "Passed. The next buyer flipped it for $200K profit. Ouch.",
          "info",
        );
        g.modStat("happiness", -5);
      },
    },
  ];

  // ─────────────────────────────────────────────────────────
  //  6. SOCIAL SHARING
  // ─────────────────────────────────────────────────────────
  function generateShareCard() {
    if (typeof game === "undefined" || !game.state) return;
    const s = game.state;
    const nw = game.getNetWorth();
    const age = Math.floor(s.age / 12);
    const path = game.classifyPrimaryPath
      ? game.classifyPrimaryPath()
      : "unknown";
    const pathNames = {
      career: "Corporate",
      startup: "Entrepreneur",
      crime: "Criminal",
      market: "Trader",
      hustle: "Hustler",
      wealth: "Investor",
    };
    const achievements = Object.keys(s.gameplay?.achievements || {}).length;
    const isDead = s.life?.dead;
    const legacy = getLegacyState();

    const text = isDead
      ? `☠️ RIP ${s.char?.name || "Player"} — Died at ${age} with $${typeof shortNumber !== "undefined" ? shortNumber(nw) : Math.floor(nw).toLocaleString()} | Path: ${pathNames[path] || path} | ${achievements} achievements | Can YOU do better? 🎮 greedigo.com`
      : `🏆 ${s.char?.name || "Player"} retired at ${age} with $${typeof shortNumber !== "undefined" ? shortNumber(nw) : Math.floor(nw).toLocaleString()}! | Path: ${pathNames[path] || path} | ${achievements} achievements | Lives: ${legacy.lives.length} | Beat my score! 🎮 greedigo.com`;

    // Copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          app.toast("📋 Copied to clipboard! Share everywhere! 🚀", "success");
        })
        .catch(() => {
          fallbackCopy(text);
        });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      app.toast("📋 Copied to clipboard! Share everywhere! 🚀", "success");
    } catch {
      app.toast("Share: " + text, "info");
    }
    document.body.removeChild(ta);
  }

  // ─────────────────────────────────────────────────────────
  //  7. GOLDEN HOUR & LUCKY STREAKS
  // ─────────────────────────────────────────────────────────
  let goldenHourActive = false;
  let goldenHourEndTime = 0;
  let momentumStreak = 0;
  let lastMomentumType = null;

  function checkGoldenHour() {
    // Random chance per month to trigger a golden hour
    if (goldenHourActive && Date.now() < goldenHourEndTime) return;
    goldenHourActive = false;

    if (Math.random() < 0.04) {
      // ~4% per month
      activateGoldenHour();
    }
  }

  function activateGoldenHour() {
    goldenHourActive = true;
    goldenHourEndTime = Date.now() + 60000; // 60 seconds

    // Visual indicator
    document.body.classList.add("vr-golden-hour");
    app.toast(
      "🌟 GOLDEN HOUR! All earnings doubled for 60 seconds! GO GO GO!",
      "epic",
    );
    FX.screenFlash("gain");
    SFX.play("epic");

    setTimeout(() => {
      goldenHourActive = false;
      document.body.classList.remove("vr-golden-hour");
      app.toast("Golden Hour ended. Back to normal.", "info");
    }, 60000);
  }

  function isGoldenHour() {
    return goldenHourActive && Date.now() < goldenHourEndTime;
  }

  function trackMomentum(type, isPositive) {
    if (isPositive && type === lastMomentumType) {
      momentumStreak++;
      if (momentumStreak === 3) {
        app.toast("🔥 HOT STREAK! You're on fire! +10 Happiness", "epic");
        if (typeof game !== "undefined") game.modStat("happiness", 10);
        FX.screenFlash("gain");
      } else if (momentumStreak === 5) {
        app.toast("🔥🔥🔥 UNSTOPPABLE STREAK! Bonus $2,000!", "epic");
        if (typeof game !== "undefined") game.modCash(2000);
        FX.confetti();
      }
    } else if (!isPositive) {
      if (momentumStreak >= 3) {
        app.toast("Streak broken... but legends bounce back. 💪", "warning");
      }
      momentumStreak = 0;
    }
    lastMomentumType = type;
  }

  // ─────────────────────────────────────────────────────────
  //  8. LIFE FEED (narrative log)
  // ─────────────────────────────────────────────────────────
  const lifeFeedEntries = [];
  const MAX_FEED = 50;

  function addLifeFeedEntry(text, type) {
    const age =
      typeof game !== "undefined" && game.state
        ? Math.floor(game.state.age / 12)
        : "?";
    lifeFeedEntries.unshift({
      text,
      type: type || "info",
      age,
      time: Date.now(),
    });
    if (lifeFeedEntries.length > MAX_FEED) lifeFeedEntries.pop();
    renderLifeFeed();
  }

  function renderLifeFeed() {
    const el = document.getElementById("vr-life-feed");
    if (!el) return;
    el.innerHTML = lifeFeedEntries
      .slice(0, 12)
      .map((e) => {
        const typeClass = `vr-feed-${e.type}`;
        return `<div class="vr-feed-entry ${typeClass}">
        <span class="vr-feed-age">Age ${e.age}</span>
        <span class="vr-feed-text">${e.text}</span>
      </div>`;
      })
      .join("");
  }

  // ─────────────────────────────────────────────────────────
  //  9. EXPANDED ACHIEVEMENTS (30 more)
  // ─────────────────────────────────────────────────────────
  const EXTRA_ACHIEVEMENTS = [
    // Wealth milestones
    {
      id: "v_first_10k",
      title: "Five Figures",
      points: 10,
      reward: 500,
      check: () => typeof game !== "undefined" && game.getNetWorth() >= 10000,
      cat: "wealth",
    },
    {
      id: "v_100k",
      title: "Six Figure Club",
      points: 20,
      reward: 2000,
      check: () => typeof game !== "undefined" && game.getNetWorth() >= 100000,
      cat: "wealth",
    },
    {
      id: "v_million",
      title: "Millionaire",
      points: 50,
      reward: 10000,
      check: () => typeof game !== "undefined" && game.getNetWorth() >= 1000000,
      cat: "wealth",
    },
    {
      id: "v_10m",
      title: "Deca-Millionaire",
      points: 80,
      reward: 25000,
      check: () =>
        typeof game !== "undefined" && game.getNetWorth() >= 10000000,
      cat: "wealth",
    },
    {
      id: "v_billionaire",
      title: "The Billionaire",
      points: 200,
      reward: 100000,
      check: () =>
        typeof game !== "undefined" && game.getNetWorth() >= 1000000000,
      cat: "wealth",
    },

    // Career
    {
      id: "v_first_job",
      title: "Employee of the Month",
      points: 5,
      reward: 200,
      check: () => typeof game !== "undefined" && game.state?.job?.level >= 1,
      cat: "career",
    },
    {
      id: "v_top_career",
      title: "Corner Office",
      points: 40,
      reward: 8000,
      check: () => typeof game !== "undefined" && game.state?.job?.level >= 4,
      cat: "career",
    },
    {
      id: "v_ceo",
      title: "C-Suite",
      points: 60,
      reward: 15000,
      check: () =>
        typeof game !== "undefined" && game.state?.job?.title === "CEO",
      cat: "career",
    },

    // Crime
    {
      id: "v_first_crime",
      title: "First Offense",
      points: 5,
      reward: 100,
      check: () =>
        typeof game !== "undefined" &&
        (game.state?.runStats?.crimeActions || 0) >= 1,
      cat: "crime",
    },
    {
      id: "v_crime_50",
      title: "Hardened Criminal",
      points: 25,
      reward: 3000,
      check: () =>
        typeof game !== "undefined" &&
        (game.state?.runStats?.crimeActions || 0) >= 50,
      cat: "crime",
    },
    {
      id: "v_jail_break",
      title: "Jailbird",
      points: 15,
      reward: 1000,
      check: () =>
        typeof game !== "undefined" &&
        (game.state?.crime?.totalJailTime || 0) >= 12,
      cat: "crime",
    },
    {
      id: "v_clean_record",
      title: "Spotless Record",
      points: 30,
      reward: 5000,
      check: () =>
        typeof game !== "undefined" &&
        game.state?.age > 40 * 12 &&
        (game.state?.runStats?.crimeActions || 0) === 0,
      cat: "lifestyle",
    },

    // Lifestyle
    {
      id: "v_world_traveler",
      title: "World Traveler",
      points: 20,
      reward: 2000,
      check: () =>
        typeof game !== "undefined" &&
        (game.state?.travel?.countriesVisited?.length || 0) >= 3,
      cat: "lifestyle",
    },
    {
      id: "v_big_family",
      title: "Big Family",
      points: 15,
      reward: 1500,
      check: () =>
        typeof game !== "undefined" &&
        (game.state?.relationship?.children?.length || 0) >= 4,
      cat: "lifestyle",
    },
    {
      id: "v_max_happy",
      title: "Pure Bliss",
      points: 10,
      reward: 500,
      check: () =>
        typeof game !== "undefined" && game.state?.stats?.happiness >= 95,
      cat: "lifestyle",
    },
    {
      id: "v_max_smart",
      title: "Galaxy Brain",
      points: 10,
      reward: 500,
      check: () =>
        typeof game !== "undefined" && game.state?.stats?.smarts >= 95,
      cat: "lifestyle",
    },
    {
      id: "v_survive_60",
      title: "Senior Citizen",
      points: 20,
      reward: 3000,
      check: () => typeof game !== "undefined" && game.state?.age >= 60 * 12,
      cat: "lifestyle",
    },
    {
      id: "v_survive_80",
      title: "Living Legend",
      points: 50,
      reward: 10000,
      check: () => typeof game !== "undefined" && game.state?.age >= 80 * 12,
      cat: "lifestyle",
    },

    // Casino
    {
      id: "v_casino_win_10k",
      title: "High Roller",
      points: 15,
      reward: 1000,
      check: () =>
        typeof game !== "undefined" && (game.state?.casino?.net || 0) >= 10000,
      cat: "casino",
    },
    {
      id: "v_casino_win_100k",
      title: "Whale",
      points: 40,
      reward: 8000,
      check: () =>
        typeof game !== "undefined" && (game.state?.casino?.net || 0) >= 100000,
      cat: "casino",
    },
    {
      id: "v_casino_loss",
      title: "Rock Bottom",
      points: 10,
      reward: 200,
      check: () =>
        typeof game !== "undefined" &&
        (game.state?.casino?.losses || 0) >= 50000,
      cat: "casino",
    },

    // Startup
    {
      id: "v_first_startup",
      title: "Founder",
      points: 10,
      reward: 1000,
      check: () =>
        typeof game !== "undefined" && (game.state?.startups?.length || 0) >= 1,
      cat: "startup",
    },
    {
      id: "v_startup_exit",
      title: "Exit Strategy",
      points: 35,
      reward: 5000,
      check: () =>
        typeof game !== "undefined" &&
        (game.state?.runStats?.startupExits || 0) >= 1,
      cat: "startup",
    },

    // Social / Secret
    {
      id: "v_generosity",
      title: "Philanthropist",
      points: 25,
      reward: 3000,
      check: () =>
        typeof game !== "undefined" &&
        (game.state?.gameplay?.legendScore || 0) >= 100,
      cat: "social",
    },
    {
      id: "v_greed_king",
      title: "Greed King",
      points: 30,
      reward: 5000,
      check: () =>
        typeof game !== "undefined" && (game.state?.life?.greed || 0) >= 80,
      cat: "secret",
    },
    {
      id: "v_zero_hero",
      title: "From Zero to Hero",
      points: 50,
      reward: 10000,
      check: () =>
        typeof game !== "undefined" &&
        game.state?.gameplay?.wasBankrupt &&
        game.getNetWorth() >= 500000,
      cat: "secret",
    },
    {
      id: "v_night_owl",
      title: "Night Owl",
      points: 5,
      reward: 100,
      check: () => new Date().getHours() >= 23 || new Date().getHours() < 4,
      cat: "secret",
    },
    {
      id: "v_speed_demon",
      title: "Speed Demon",
      points: 15,
      reward: 1000,
      check: () =>
        typeof game !== "undefined" &&
        game.state?.age < 20 * 12 &&
        game.getNetWorth() >= 50000,
      cat: "secret",
    },
    {
      id: "v_risk_taker",
      title: "Adrenaline Junkie",
      points: 15,
      reward: 1000,
      check: () =>
        typeof game !== "undefined" && (game.state?.life?.riskDebt || 0) >= 50,
      cat: "secret",
    },

    // Legacy
    {
      id: "v_legacy_5",
      title: "Reincarnator",
      points: 20,
      reward: 2000,
      check: () => getLegacyState().lives.length >= 5,
      cat: "legacy",
    },
    {
      id: "v_legacy_20",
      title: "Eternal Soul",
      points: 50,
      reward: 8000,
      check: () => getLegacyState().lives.length >= 20,
      cat: "legacy",
    },
  ];

  function injectExtraAchievements() {
    if (typeof game === "undefined" || !game.getAchievementDefinitions) return;
    const origFn = game.getAchievementDefinitions.bind(game);
    game.getAchievementDefinitions = function () {
      const base = origFn();
      return [...base, ...EXTRA_ACHIEVEMENTS];
    };
  }

  // ─────────────────────────────────────────────────────────
  //  10. WIRE INTO EXISTING GAME SYSTEMS
  // ─────────────────────────────────────────────────────────
  function patchGameSystems() {
    if (typeof game === "undefined") return;

    // Inject extra achievements
    injectExtraAchievements();

    // Patch nextMonth for viral events, golden hour, challenges, life feed
    const currentNextMonth = game.nextMonth.bind(game);
    game.nextMonth = function () {
      currentNextMonth();

      if (this.state.life?.dead || this.state.life?.retired) return;

      // Viral events — 15% chance per month (in addition to base events)
      if (Math.random() < 0.15) {
        triggerViralEvent();
      }

      // Golden hour check
      checkGoldenHour();

      // Challenge completion check
      checkChallengeCompletion();

      // Life feed entry for month advance
      const age = Math.floor(this.state.age / 12);
      const month = this.state.age % 12;
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      if (month === 0) {
        addLifeFeedEntry(`🎂 Happy birthday! You turned ${age}.`, "success");
      }

      // Track net worth momentum
      const nw = game.getNetWorth();
      const lastNW = game.state._lastTrackedNW || 0;
      if (nw > lastNW * 1.1 && lastNW > 1000) {
        trackMomentum("wealth", true);
      } else if (nw < lastNW * 0.9 && lastNW > 1000) {
        trackMomentum("wealth", false);
      }
      game.state._lastTrackedNW = nw;
    };

    // Patch die() to trigger legacy system
    const origDie = game.die.bind(game);
    game.die = function (reason) {
      origDie(reason);
      onLifeEnd();
      addLifeFeedEntry(`☠️ ${reason}`, "error");
    };

    // Patch offerRetirement if it exists
    if (game.offerRetirement) {
      const origRetire = game.offerRetirement.bind(game);
      game.offerRetirement = function () {
        origRetire();
        // We'll hook into the retirement completion via a check
      };
    }

    // Patch startNewTimeline to apply legacy perks
    const origNewTimeline = game.startNewTimeline.bind(game);
    game.startNewTimeline = function () {
      origNewTimeline();
      setTimeout(() => {
        applyLegacyPerks();
        checkDailyReward();
      }, 500);
    };

    // Patch modCash for near-miss and golden hour
    if (game.modCash) {
      const origModCash = game.modCash.bind(game);
      game.modCash = function (amt) {
        // Golden hour doubles positive earnings
        if (amt > 0 && isGoldenHour()) {
          amt = Math.floor(amt * 2);
        }

        // Legacy perk: investor_blood reduces trading losses
        if (amt < 0 && game.state?._legacyPerks?.investor_blood) {
          // Only reduce negative amounts from trading (heuristic: medium-sized losses)
          if (amt > -100000 && amt < -100) {
            amt = Math.floor(amt * 0.5);
          }
        }

        origModCash(amt);

        // Cash float animation for significant amounts
        if (Math.abs(amt) >= 500) {
          spawnCashFloat(amt);
        }
      };
    }

    // Patch casino for near-misses
    if (game._resolveBet) {
      const origResolve = game._resolveBet.bind(game);
      game._resolveBet = function (g, amt) {
        const streakBefore = game.state.casino.streak;
        origResolve(g, amt);
        const won = game.state.casino.lastWin > 0;
        // Trigger near-miss on losses
        if (!won && Math.random() < 0.3) {
          setTimeout(() => triggerNearMiss("casino"), 800);
        }
        trackMomentum("casino", won);
      };
    }
  }

  function triggerViralEvent() {
    if (typeof game === "undefined" || !game.state) return;
    const eligible = VIRAL_EVENTS.filter((e) => {
      try {
        return !e.gateFn || e.gateFn(game);
      } catch {
        return false;
      }
    });
    if (eligible.length === 0) return;

    const event = eligible[Math.floor(Math.random() * eligible.length)];

    const buttons = [];
    if (event.optA)
      buttons.push({
        text: event.optA,
        cb: () => {
          event.fxA(game);
          addLifeFeedEntry(
            `${event.emoji} ${event.title}: chose "${event.optA}"`,
            "success",
          );
          app.closeModal();
        },
      });
    if (event.optB)
      buttons.push({
        text: event.optB,
        cb: () => {
          event.fxB(game);
          addLifeFeedEntry(
            `${event.emoji} ${event.title}: chose "${event.optB}"`,
            "info",
          );
          app.closeModal();
        },
      });
    if (event.optC)
      buttons.push({
        text: event.optC,
        cb: () => {
          event.fxC(game);
          addLifeFeedEntry(
            `${event.emoji} ${event.title}: chose "${event.optC}"`,
            "info",
          );
          app.closeModal();
        },
        style: "secondary",
      });

    // Dramatic entrance
    FX.screenFlash("loss");
    SFX.play("modalOpen");

    app.modal(`${event.emoji} ${event.title}`, event.desc, buttons);
  }

  // ─────────────────────────────────────────────────────────
  //  CASH FLOAT ANIMATION
  // ─────────────────────────────────────────────────────────
  function spawnCashFloat(amt) {
    const el = document.createElement("div");
    el.className = `vr-cash-float ${amt > 0 ? "vr-cash-gain" : "vr-cash-loss"}`;
    const formatted =
      amt > 0
        ? `+$${typeof shortNumber !== "undefined" ? shortNumber(amt) : amt.toLocaleString()}`
        : `-$${typeof shortNumber !== "undefined" ? shortNumber(Math.abs(amt)) : Math.abs(amt).toLocaleString()}`;
    el.textContent = formatted;

    // Position near the money display
    const cashEl =
      document.getElementById("hud-cash") ||
      document.querySelector(".stat-cash");
    if (cashEl) {
      const rect = cashEl.getBoundingClientRect();
      el.style.left = rect.left + rect.width / 2 + "px";
      el.style.top = rect.bottom + "px";
    } else {
      el.style.left = "50%";
      el.style.top = "80px";
    }

    document.body.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.remove();
    }, 2000);
  }

  // ─────────────────────────────────────────────────────────
  //  SHARE BUTTON INJECTION INTO ENDING SCREEN
  // ─────────────────────────────────────────────────────────
  function injectShareButtons() {
    // Find ending panel and add share/legacy buttons
    const observer = new MutationObserver(() => {
      const endPanel =
        document.getElementById("ending-panel") ||
        document.querySelector(".end-panel");
      const gameEnded =
        endPanel &&
        (endPanel.classList.contains("ending-death") ||
          endPanel.classList.contains("ending-retired"));
      if (gameEnded && !endPanel.querySelector(".vr-share-row")) {
        const row = document.createElement("div");
        row.className = "vr-share-row";
        row.innerHTML = `
          <button class="vr-share-btn" onclick="VIRAL.shareCard()">
            <i class="fa-solid fa-share-nodes"></i> Share My Story
          </button>
          <button class="vr-legacy-btn" onclick="VIRAL.showLegacyShop()">
            <i class="fa-solid fa-star"></i> Legacy Shop
          </button>
          <button class="vr-challenge-btn" onclick="VIRAL.showChallenges()">
            <i class="fa-solid fa-trophy"></i> Challenges
          </button>
        `;
        endPanel.appendChild(row);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  // ─────────────────────────────────────────────────────────
  //  SIDEBAR WIDGETS
  // ─────────────────────────────────────────────────────────
  function injectSidebarWidgets() {
    // Inject life feed widget into sidebar
    const sidebar =
      document.querySelector(".sidebar-inner") ||
      document.querySelector(".sidebar");
    if (!sidebar) return;

    // Challenge indicator
    const chWidget = document.createElement("div");
    chWidget.id = "vr-challenge-indicator";
    chWidget.className = "vr-sidebar-widget";
    sidebar.appendChild(chWidget);

    // Life feed
    const feedWidget = document.createElement("div");
    feedWidget.className = "vr-sidebar-widget vr-feed-widget";
    feedWidget.innerHTML = `
      <div class="vr-widget-title"><i class="fa-solid fa-scroll"></i> Life Feed</div>
      <div id="vr-life-feed" class="vr-life-feed"></div>
    `;
    sidebar.appendChild(feedWidget);

    // Daily streak indicator
    const ds = getDailyState();
    if (ds.streak > 0) {
      const streakWidget = document.createElement("div");
      streakWidget.className = "vr-sidebar-widget vr-streak-widget";
      streakWidget.innerHTML = `
        <div class="vr-streak-display">
          <span class="vr-streak-flame">${ds.streak >= 7 ? "🔥🔥🔥" : ds.streak >= 3 ? "🔥🔥" : "🔥"}</span>
          <span class="vr-streak-text">${ds.streak}-Day Streak</span>
        </div>
      `;
      sidebar.insertBefore(streakWidget, sidebar.firstChild);
    }

    // Update challenge indicator periodically
    setInterval(updateChallengeIndicator, 3000);
  }

  function updateChallengeIndicator() {
    const el = document.getElementById("vr-challenge-indicator");
    if (!el) return;
    const ch = getActiveChallenge();
    if (!ch) {
      el.innerHTML = `<button class="vr-ch-pick-btn" onclick="VIRAL.showChallenges()">
        <i class="fa-solid fa-trophy"></i> Pick a Challenge
      </button>`;
      return;
    }
    const def = CHALLENGE_DEFS.find((c) => c.id === ch);
    if (!def) return;
    el.innerHTML = `<div class="vr-ch-active-widget">
      <span class="vr-ch-active-icon">${def.icon}</span>
      <div class="vr-ch-active-info">
        <div class="vr-ch-active-name">${def.name}</div>
        <div class="vr-ch-active-desc">${def.desc}</div>
      </div>
    </div>`;
  }

  // ─────────────────────────────────────────────────────────
  //  HEADER BUTTONS
  // ─────────────────────────────────────────────────────────
  function injectHeaderButtons() {
    const controlRight = document.querySelector(".control-right");
    if (!controlRight) return;

    // Legacy button
    const legacyBtn = document.createElement("button");
    legacyBtn.className = "vr-header-btn";
    legacyBtn.title = "Legacy Shop";
    legacyBtn.onclick = () => showLegacyShop();
    const legacy = getLegacyState();
    legacyBtn.innerHTML = `<i class="fa-solid fa-star"></i><span class="vr-header-badge">${legacy.points}</span>`;
    controlRight.insertBefore(legacyBtn, controlRight.firstChild);

    // Challenge button
    const chBtn = document.createElement("button");
    chBtn.className = "vr-header-btn";
    chBtn.title = "Challenge Runs";
    chBtn.onclick = () => showChallengeSelect();
    chBtn.innerHTML = `<i class="fa-solid fa-trophy"></i>`;
    controlRight.insertBefore(chBtn, controlRight.firstChild);
  }

  // ─────────────────────────────────────────────────────────
  //  BOOT
  // ─────────────────────────────────────────────────────────
  function boot() {
    if (typeof game === "undefined" || !game.state) {
      // Retry in 500ms if game hasn't loaded yet
      setTimeout(boot, 500);
      return;
    }

    patchGameSystems();
    injectShareButtons();

    // Defer UI injection to ensure DOM is ready
    setTimeout(() => {
      injectSidebarWidgets();
      injectHeaderButtons();
      checkDailyReward();
      applyLegacyPerks();
    }, 800);
  }

  // Auto-boot
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(boot, 600));
  } else {
    setTimeout(boot, 600);
  }

  // ─────────────────────────────────────────────────────────
  //  PUBLIC API
  // ─────────────────────────────────────────────────────────
  return {
    boot,
    checkDailyReward,
    showLegacyShop,
    buyPerk,
    showChallenges: showChallengeSelect,
    startChallenge,
    shareCard: generateShareCard,
    triggerNearMiss,
    addLifeFeed: addLifeFeedEntry,
    isGoldenHour,
    trackMomentum,
    getLegacy: getLegacyState,
    getActiveChallenge,
  };
})();
