/* ============================================================
   MOBILE EXPERIENCE ENHANCER — Greedigo
   Swipe Navigation · Haptic Feedback · Touch Interactions
   Quick Actions · Pull-to-Play · Double-tap · Long-press
   ============================================================ */
const MOBILE = (() => {
  "use strict";

  const isMobile = () => window.matchMedia("(max-width: 980px)").matches;

  // ─────────────────────────────────────────────────────────
  //  HAPTIC FEEDBACK ENGINE
  // ─────────────────────────────────────────────────────────
  const haptic = {
    light() {
      if (navigator.vibrate) navigator.vibrate(8);
    },
    medium() {
      if (navigator.vibrate) navigator.vibrate(18);
    },
    heavy() {
      if (navigator.vibrate) navigator.vibrate(35);
    },
    success() {
      if (navigator.vibrate) navigator.vibrate([12, 40, 12]);
    },
    error() {
      if (navigator.vibrate) navigator.vibrate([30, 20, 60]);
    },
    loot() {
      if (navigator.vibrate) navigator.vibrate([10, 20, 10, 20, 40]);
    },
    epic() {
      if (navigator.vibrate) navigator.vibrate([15, 30, 15, 30, 15, 30, 50]);
    },
    pulse() {
      if (navigator.vibrate) navigator.vibrate([5, 50, 5]);
    },
  };

  // ─────────────────────────────────────────────────────────
  //  SWIPE NAVIGATION BETWEEN TABS
  // ─────────────────────────────────────────────────────────
  const BOTTOM_NAV_VIEWS = [
    "career",
    "hustles",
    "business",
    "market",
    "bank",
    "lifestyle",
    "casino",
  ];

  let swipeStartX = 0;
  let swipeStartY = 0;
  let swiping = false;
  const SWIPE_THRESHOLD = 60;
  const SWIPE_VERTICAL_MAX = 100; // prevent diagonal swipes

  function getCurrentViewIndex() {
    const current = typeof app !== "undefined" ? app.currentView : "";
    const idx = BOTTOM_NAV_VIEWS.indexOf(current);
    return idx >= 0 ? idx : 0;
  }

  function initSwipeNavigation() {
    const mainArea = document.querySelector(".main-area");
    if (!mainArea) return;

    mainArea.addEventListener(
      "touchstart",
      (e) => {
        if (!isMobile()) return;
        // Don't capture if touching scrollable inner elements
        const tag = e.target.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea" || tag === "select") return;
        // Don't swipe on modals
        if (
          e.target.closest(".modal-content") ||
          e.target.closest(".mob-bottom-nav")
        )
          return;

        swipeStartX = e.touches[0].clientX;
        swipeStartY = e.touches[0].clientY;
        swiping = true;
      },
      { passive: true },
    );

    mainArea.addEventListener(
      "touchend",
      (e) => {
        if (!swiping || !isMobile()) return;
        swiping = false;

        const dx = e.changedTouches[0].clientX - swipeStartX;
        const dy = Math.abs(e.changedTouches[0].clientY - swipeStartY);

        if (dy > SWIPE_VERTICAL_MAX) return; // vertical scroll, not horizontal swipe
        if (Math.abs(dx) < SWIPE_THRESHOLD) return;

        const idx = getCurrentViewIndex();
        if (dx < 0 && idx < BOTTOM_NAV_VIEWS.length - 1) {
          // Swipe left → next tab
          app.setView(BOTTOM_NAV_VIEWS[idx + 1]);
          haptic.light();
          addSwipeTransition("left");
        } else if (dx > 0 && idx > 0) {
          // Swipe right → previous tab
          app.setView(BOTTOM_NAV_VIEWS[idx - 1]);
          haptic.light();
          addSwipeTransition("right");
        }
      },
      { passive: true },
    );
  }

  function addSwipeTransition(direction) {
    const views = document.querySelectorAll(".view-container.active");
    views.forEach((v) => {
      v.style.animation = `mobileSlideIn${direction === "left" ? "Left" : "Right"} 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      v.addEventListener(
        "animationend",
        () => {
          v.style.animation = "";
        },
        { once: true },
      );
    });
  }

  // ─────────────────────────────────────────────────────────
  //  TOUCH FEEDBACK ON ALL BUTTONS
  // ─────────────────────────────────────────────────────────
  function initTouchFeedback() {
    document.addEventListener(
      "touchstart",
      (e) => {
        if (!isMobile()) return;
        const btn = e.target.closest(
          "button, .btn, .nav-item, .mbn-tab, .card, [onclick]",
        );
        if (btn) {
          btn.classList.add("mob-touch-active");
          haptic.light();
        }
      },
      { passive: true },
    );

    document.addEventListener(
      "touchend",
      () => {
        document.querySelectorAll(".mob-touch-active").forEach((el) => {
          el.classList.remove("mob-touch-active");
        });
      },
      { passive: true },
    );

    document.addEventListener(
      "touchcancel",
      () => {
        document.querySelectorAll(".mob-touch-active").forEach((el) => {
          el.classList.remove("mob-touch-active");
        });
      },
      { passive: true },
    );
  }

  // ─────────────────────────────────────────────────────────
  //  ENHANCED HAPTIC HOOKS — Patch existing game actions
  // ─────────────────────────────────────────────────────────
  function patchHaptics() {
    if (typeof game === "undefined" || typeof app === "undefined") return;

    // Haptic on toast
    const origToast = app.toast.bind(app);
    app.toast = function (msg, type) {
      if (isMobile()) {
        if (type === "epic") haptic.success();
        else if (type === "error") haptic.error();
        else haptic.pulse();
      }
      return origToast(msg, type);
    };

    // Haptic on modal open
    const origModal = app.modal.bind(app);
    app.modal = function (t, d, acts, opts) {
      if (isMobile()) haptic.medium();
      return origModal(t, d, acts, opts);
    };

    // Haptic on cash change
    if (game.modCash) {
      const origModCash = game.modCash.bind(game);
      game.modCash = function (amt) {
        if (isMobile()) {
          if (Math.abs(amt) > 10000) haptic.heavy();
          else if (amt > 0) haptic.light();
        }
        return origModCash(amt);
      };
    }

    // Haptic on loot drop
    if (game._showLootDrop) {
      const origLoot = game._showLootDrop.bind(game);
      game._showLootDrop = function (tier, amount) {
        if (isMobile()) {
          if (tier.id === "legendary") haptic.epic();
          else if (tier.id === "epic") haptic.heavy();
          else haptic.loot();
        }
        return origLoot(tier, amount);
      };
    }

    // Haptic on next month
    if (game.nextMonth) {
      const origNext = game.nextMonth.bind(game);
      game.nextMonth = function () {
        if (isMobile()) haptic.light();
        return origNext();
      };
    }

    // Haptic on FX
    if (typeof FX !== "undefined") {
      if (FX.screenShake) {
        const origShake = FX.screenShake;
        FX.screenShake = function (size) {
          if (isMobile()) haptic.heavy();
          return origShake(size);
        };
      }
      if (FX.confetti) {
        const origConfetti = FX.confetti;
        FX.confetti = function () {
          if (isMobile()) haptic.epic();
          return origConfetti();
        };
      }
    }
  }

  // ─────────────────────────────────────────────────────────
  //  DOUBLE-TAP QUICK ADVANCE (double-tap empty area = next month)
  // ─────────────────────────────────────────────────────────
  let lastTapTime = 0;
  function initDoubleTap() {
    document.addEventListener(
      "touchend",
      (e) => {
        if (!isMobile()) return;
        // Only on view container backgrounds, not buttons/links
        const vc = e.target.closest(".view-container");
        if (!vc) return;
        if (
          e.target.closest(
            "button, a, input, .btn, .card, [onclick], .modal-content",
          )
        )
          return;

        const now = Date.now();
        if (now - lastTapTime < 300) {
          // Double tap detected — advance month!
          if (typeof game !== "undefined" && game.nextMonth) {
            game.nextMonth();
            showQuickAction("⏩ Month Advanced!");
          }
          lastTapTime = 0; // Reset
        } else {
          lastTapTime = now;
        }
      },
      { passive: true },
    );
  }

  // ─────────────────────────────────────────────────────────
  //  QUICK ACTION FLOATING INDICATOR
  // ─────────────────────────────────────────────────────────
  function showQuickAction(text) {
    const existing = document.querySelector(".mob-quick-action");
    if (existing) existing.remove();

    const el = document.createElement("div");
    el.className = "mob-quick-action";
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }

  // ─────────────────────────────────────────────────────────
  //  FLOATING ACTION BUTTON (FAB) — Quick access to key actions
  // ─────────────────────────────────────────────────────────
  let fabOpen = false;
  let fabEl = null;

  function createFAB() {
    if (!isMobile()) return;

    fabEl = document.createElement("div");
    fabEl.className = "mob-fab-container";
    fabEl.innerHTML = `
      <div class="mob-fab-menu" id="mob-fab-menu">
        <button class="mob-fab-item" onclick="MOBILE.fabAction('nextMonth')" title="Next Month">
          <i class="fa-solid fa-forward"></i>
          <span>Next Month</span>
        </button>
        <button class="mob-fab-item" onclick="MOBILE.fabAction('quests')" title="Quests">
          <i class="fa-solid fa-scroll"></i>
          <span>Quests</span>
        </button>
        <button class="mob-fab-item" onclick="MOBILE.fabAction('legacy')" title="Legacy">
          <i class="fa-solid fa-star"></i>
          <span>Legacy</span>
        </button>
        <button class="mob-fab-item" onclick="MOBILE.fabAction('challenges')" title="Challenges">
          <i class="fa-solid fa-trophy"></i>
          <span>Challenges</span>
        </button>
      </div>
      <button class="mob-fab-btn" id="mob-fab-btn" onclick="MOBILE.toggleFAB()">
        <i class="fa-solid fa-bolt"></i>
      </button>
    `;
    document.body.appendChild(fabEl);
  }

  function toggleFAB() {
    fabOpen = !fabOpen;
    const menu = document.getElementById("mob-fab-menu");
    const btn = document.getElementById("mob-fab-btn");
    if (menu) menu.classList.toggle("mob-fab-open", fabOpen);
    if (btn) btn.classList.toggle("mob-fab-active", fabOpen);
    haptic.light();
  }

  function fabAction(action) {
    toggleFAB(); // Close menu
    haptic.medium();
    switch (action) {
      case "nextMonth":
        if (typeof game !== "undefined" && game.nextMonth) game.nextMonth();
        break;
      case "quests":
        if (typeof app !== "undefined" && app.showQuestsModal)
          app.showQuestsModal();
        break;
      case "legacy":
        if (typeof VIRAL !== "undefined" && VIRAL.showLegacyShop)
          VIRAL.showLegacyShop();
        break;
      case "challenges":
        if (typeof VIRAL !== "undefined" && VIRAL.showChallenges)
          VIRAL.showChallenges();
        break;
    }
  }

  // ─────────────────────────────────────────────────────────
  //  PULL-DOWN QUICK STATS PEEK
  // ─────────────────────────────────────────────────────────
  let pullStartY = 0;
  let pulling = false;

  function initPullStats() {
    const mainArea = document.querySelector(".main-area");
    if (!mainArea) return;

    mainArea.addEventListener(
      "touchstart",
      (e) => {
        if (!isMobile()) return;
        const vc = document.querySelector(".view-container.active");
        if (!vc || vc.scrollTop > 5) return; // Only when scrolled to top
        if (
          e.target.closest(".modal-content, .mob-bottom-nav, .mobile-top-bar")
        )
          return;
        pullStartY = e.touches[0].clientY;
        pulling = true;
      },
      { passive: true },
    );

    mainArea.addEventListener(
      "touchend",
      (e) => {
        if (!pulling || !isMobile()) return;
        pulling = false;
        const dy = e.changedTouches[0].clientY - pullStartY;
        if (dy > 80) {
          // Pull down detected — toggle stats panel
          if (typeof app !== "undefined" && app.toggleMobileStats) {
            app.toggleMobileStats();
            haptic.medium();
          }
        }
      },
      { passive: true },
    );
  }

  // ─────────────────────────────────────────────────────────
  //  ORIENTATION HANDLER
  // ─────────────────────────────────────────────────────────
  function initOrientationHandler() {
    function handleOrientation() {
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      document.body.classList.toggle(
        "mob-landscape",
        isLandscape && isMobile(),
      );
    }

    window.addEventListener("orientationchange", () =>
      setTimeout(handleOrientation, 100),
    );
    window.addEventListener("resize", handleOrientation);
    handleOrientation();
  }

  // ─────────────────────────────────────────────────────────
  //  MOBILE SCROLL SNAP FOR CARDS
  // ─────────────────────────────────────────────────────────
  function enhanceCardScrolling() {
    if (!isMobile()) return;
    // Make horizontal-scroll card containers snap
    document
      .querySelectorAll(".gallery-scroll, .horizontal-scroll")
      .forEach((container) => {
        container.style.scrollSnapType = "x mandatory";
        container.style.webkitOverflowScrolling = "touch";
        Array.from(container.children).forEach((child) => {
          child.style.scrollSnapAlign = "center";
        });
      });
  }

  // ─────────────────────────────────────────────────────────
  //  BOTTOM TAB INDICATOR ANIMATION
  // ─────────────────────────────────────────────────────────
  function initTabIndicator() {
    if (!isMobile()) return;
    const nav = document.getElementById("mob-bottom-nav");
    if (!nav) return;

    // Create sliding indicator
    const indicator = document.createElement("div");
    indicator.className = "mob-tab-indicator";
    nav.appendChild(indicator);

    function moveIndicator() {
      const activeTab = nav.querySelector(".mbn-tab.active");
      if (activeTab) {
        const rect = activeTab.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        indicator.style.left =
          rect.left - navRect.left + rect.width / 2 - 15 + "px";
        indicator.style.opacity = "1";
      }
    }

    // Watch for tab changes
    const observer = new MutationObserver(moveIndicator);
    nav.querySelectorAll(".mbn-tab").forEach((tab) => {
      observer.observe(tab, { attributes: true, attributeFilter: ["class"] });
    });
    moveIndicator();
  }

  // ─────────────────────────────────────────────────────────
  //  MOBILE TOAST POSITION (stack from bottom on mobile)
  // ─────────────────────────────────────────────────────────
  function repositionToasts() {
    if (!isMobile()) return;
    const container = document.getElementById("toast-container");
    if (container) {
      container.classList.add("mob-toast-position");
    }
  }

  // ─────────────────────────────────────────────────────────
  //  LONG PRESS — contextual actions
  // ─────────────────────────────────────────────────────────
  let longPressTimer = null;
  function initLongPress() {
    document.addEventListener(
      "touchstart",
      (e) => {
        if (!isMobile()) return;
        const card = e.target.closest(
          ".casino-game-card, .hustle-card, .biz-card, .asset-card",
        );
        if (!card) return;

        longPressTimer = setTimeout(() => {
          haptic.heavy();
          card.classList.add("mob-long-pressed");
          setTimeout(() => card.classList.remove("mob-long-pressed"), 600);
        }, 500);
      },
      { passive: true },
    );

    document.addEventListener(
      "touchend",
      () => {
        clearTimeout(longPressTimer);
      },
      { passive: true },
    );

    document.addEventListener(
      "touchmove",
      () => {
        clearTimeout(longPressTimer);
      },
      { passive: true },
    );
  }

  // ─────────────────────────────────────────────────────────
  //  VIEWPORT LOCK — Prevent zoom on double-tap for inputs
  // ─────────────────────────────────────────────────────────
  function preventUnwantedZoom() {
    // Already handled by meta viewport, but ensure inputs don't zoom
    document
      .querySelectorAll("input[type=number], input[type=text], select")
      .forEach((el) => {
        el.style.fontSize = "16px"; // Prevents iOS zoom on focus
      });

    // Re-apply on DOM changes
    const observer = new MutationObserver(() => {
      document
        .querySelectorAll("input[type=number], input[type=text], select")
        .forEach((el) => {
          if (!el.style.fontSize || el.style.fontSize !== "16px") {
            el.style.fontSize = "16px";
          }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ─────────────────────────────────────────────────────────
  //  WAKE LOCK — Keep screen on while playing
  // ─────────────────────────────────────────────────────────
  let wakeLock = null;
  async function requestWakeLock() {
    try {
      if ("wakeLock" in navigator) {
        wakeLock = await navigator.wakeLock.request("screen");
        wakeLock.addEventListener("release", () => {
          wakeLock = null;
        });
      }
    } catch {}
  }

  // Re-acquire on visibility change
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && !wakeLock) {
      requestWakeLock();
    }
  });

  // ─────────────────────────────────────────────────────────
  //  MOBILE PARTICLE TOUCH TRAIL
  // ─────────────────────────────────────────────────────────
  let trailEnabled = true;
  function initTouchTrail() {
    if (!isMobile()) return;
    document.addEventListener(
      "touchmove",
      (e) => {
        if (!trailEnabled) return;
        // Throttle to every ~60ms
        trailEnabled = false;
        setTimeout(() => {
          trailEnabled = true;
        }, 60);

        const touch = e.touches[0];
        const particle = document.createElement("div");
        particle.className = "mob-touch-particle";
        particle.style.left = touch.clientX + "px";
        particle.style.top = touch.clientY + "px";
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 500);
      },
      { passive: true },
    );
  }

  // ─────────────────────────────────────────────────────────
  //  SMART KEYBOARD HANDLING
  // ─────────────────────────────────────────────────────────
  function initKeyboardHandler() {
    if (!isMobile()) return;
    const vv = window.visualViewport;
    if (!vv) return;

    vv.addEventListener("resize", () => {
      const keyboardOpen = vv.height < window.innerHeight * 0.75;
      document.body.classList.toggle("mob-keyboard-open", keyboardOpen);
    });
  }

  // ─────────────────────────────────────────────────────────
  //  BOOT
  // ─────────────────────────────────────────────────────────
  function boot() {
    if (!isMobile() && !("ontouchstart" in window)) return; // Desktop, skip all

    initSwipeNavigation();
    initTouchFeedback();
    initDoubleTap();
    initPullStats();
    initOrientationHandler();
    initTabIndicator();
    initLongPress();
    initTouchTrail();
    initKeyboardHandler();
    preventUnwantedZoom();
    repositionToasts();
    requestWakeLock();

    // Delayed inits after game loads
    setTimeout(() => {
      patchHaptics();
      createFAB();
      enhanceCardScrolling();
    }, 1500);

    // Re-check on orientation/resize
    window.addEventListener("resize", () => {
      if (isMobile()) {
        repositionToasts();
        enhanceCardScrolling();
      }
    });
  }

  // Auto-boot
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    setTimeout(boot, 300);
  }

  return {
    boot,
    haptic,
    toggleFAB,
    fabAction,
    showQuickAction,
  };
})();
