const CONFIG = {
  STARTING_CASH: 500,
  INFLATION: 0.003,
  RETIREMENT_AGE: 55,
  SAFE_RETIREMENT_NETWORTH: 400000,
  ONBOARDING_MONTHS: 10,

  DEGREES: [
    {
      id: "basic",
      name: "Online Courses",
      cost: 500,
      duration: 6,
      iqReq: 0,
    },
    {
      id: "cs",
      name: "Computer Science",
      cost: 25000,
      duration: 48,
      iqReq: 50,
    },
    { id: "biz", name: "Business Admin", cost: 15000, duration: 36, iqReq: 40 },
    { id: "mba", name: "MBA", cost: 50000, duration: 24, iqReq: 60 },
    {
      id: "med",
      name: "Medical Degree",
      cost: 150000,
      duration: 72,
      iqReq: 80,
    },
  ],

  SKILLS: {
    coding: { name: "Coding", desc: "Software engineering" },
    healing: { name: "healing", desc: "Medical capability" },
    sales: { name: "Sales", desc: "Deal closing" },
    mgmt: { name: "Leadership", desc: "Team management" },
    cooking: { name: "Cooking", desc: "Culinary arts" },
  },

  CAREERS: [
    {
      id: "service",
      name: "Hospitality",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop",
      levels: [
        {
          title: "Dishwasher",
          salary: 22000,
          reqEdu: null,
          reqSkill: {},
          stress: 30,
          xp: ["cooking"],
        },
        {
          title: "Line Cook",
          salary: 32000,
          reqEdu: null,
          reqSkill: { cooking: 10 },
          stress: 60,
          xp: ["cooking"],
        },
        {
          title: "Sous Chef",
          salary: 45000,
          reqEdu: null,
          reqSkill: { cooking: 30, mgmt: 10 },
          stress: 80,
          xp: ["cooking", "mgmt"],
        },
        {
          title: "Head Chef",
          salary: 75000,
          reqEdu: null,
          reqSkill: { cooking: 60, mgmt: 30 },
          stress: 90,
          xp: ["cooking", "mgmt"],
        },
        {
          title: "Restaurateur",
          salary: 150000,
          reqEdu: "biz",
          reqSkill: { cooking: 80, mgmt: 60 },
          stress: 100,
          xp: ["mgmt"],
        },
      ],
    },
    {
      id: "tech",
      name: "Technology",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop",
      levels: [
        {
          title: "QA Intern",
          salary: 35000,
          reqEdu: null,
          reqSkill: {},
          stress: 20,
          xp: ["coding"],
        },
        {
          title: "Jr. Developer",
          salary: 75000,
          reqEdu: "cs",
          reqSkill: { coding: 15 },
          stress: 45,
          xp: ["coding"],
        },
        {
          title: "Sr. Developer",
          salary: 140000,
          reqEdu: null,
          reqSkill: { coding: 50 },
          stress: 65,
          xp: ["coding"],
        },
        {
          title: "Staff Engineer",
          salary: 220000,
          reqEdu: null,
          reqSkill: { coding: 80, mgmt: 20 },
          stress: 75,
          xp: ["coding", "mgmt"],
        },
        {
          title: "Distinguished Eng.",
          salary: 450000,
          reqEdu: null,
          reqSkill: { coding: 95, mgmt: 40 },
          stress: 55,
          xp: ["coding", "mgmt"],
        },
      ],
    },
    {
      id: "corp",
      name: "Corporate",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop",
      levels: [
        {
          title: "Sales Rep",
          salary: 45000,
          reqEdu: null,
          reqSkill: {},
          stress: 50,
          xp: ["sales"],
        },
        {
          title: "Account Manager",
          salary: 70000,
          reqEdu: null,
          reqSkill: { sales: 30 },
          stress: 60,
          xp: ["sales"],
        },
        {
          title: "Director",
          salary: 130000,
          reqEdu: "biz",
          reqSkill: { sales: 60, mgmt: 20 },
          stress: 75,
          xp: ["sales", "mgmt"],
        },
        {
          title: "VP of Sales",
          salary: 280000,
          reqEdu: "mba",
          reqSkill: { sales: 80, mgmt: 50 },
          stress: 90,
          xp: ["sales", "mgmt"],
        },
        {
          title: "CEO",
          salary: 1500000,
          reqEdu: "mba",
          reqSkill: { sales: 90, mgmt: 90 },
          stress: 100,
          xp: ["mgmt"],
        },
      ],
    },
    {
      id: "med",
      name: "Medicine",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      levels: [
        {
          title: "Orderly",
          salary: 30000,
          reqEdu: null,
          reqSkill: {},
          stress: 40,
          xp: ["healing"],
        },
        {
          title: "Nurse",
          salary: 70000,
          reqEdu: null,
          reqSkill: { healing: 20 },
          stress: 60,
          xp: ["healing"],
        },
        {
          title: "Resident",
          salary: 60000,
          reqEdu: "med",
          reqSkill: { healing: 40 },
          stress: 100,
          xp: ["healing"],
        },
        {
          title: "Attending",
          salary: 300000,
          reqEdu: null,
          reqSkill: { healing: 80 },
          stress: 80,
          xp: ["healing", "mgmt"],
        },
        {
          title: "Chief of Surgery",
          salary: 650000,
          reqEdu: null,
          reqSkill: { healing: 95, mgmt: 50 },
          stress: 95,
          xp: ["healing", "mgmt"],
        },
      ],
    },
  ],

  ITEMS: [
    { id: "bike", name: "E-Bike", cost: 1500, happy: 2 },
    { id: "civic", name: "Honda Civic", cost: 8000, happy: 5 },
    { id: "tesla", name: "Tesla Model 3", cost: 45000, happy: 15 },
    { id: "porsche", name: "Porsche 911", cost: 120000, happy: 30 },
    { id: "apt", name: "Luxury Apt", cost: 250000, happy: 20 },
    { id: "mansion", name: "Mega Mansion", cost: 5000000, happy: 100 },
  ],

  // REFACTORED CRIME SCHEMA
  CRIMES: [
    // ── PETTY ──────────────────────────────────────────────────────────
    {
      id: "shoplift",
      name: "Shoplift",
      type: "Petty",
      reqRep: 0,
      baseChance: 0.88,
      risk: 0.1,
      heatAdd: 5,
      reward: [60, 220],
      jail: 1,
      skill: "stealth",
      desc: "Pocket high-value items. Quick and low risk.",
    },
    {
      id: "pickpocket",
      name: "Pickpocket",
      type: "Petty",
      reqRep: 10,
      baseChance: 0.8,
      risk: 0.18,
      heatAdd: 8,
      reward: [120, 500],
      jail: 2,
      skill: "stealth",
      desc: "Lift wallets from crowds. All fingers, no traces.",
    },
    {
      id: "mug",
      name: "Strong-Arm Robbery",
      type: "Street",
      reqRep: 25,
      baseChance: 0.75,
      risk: 0.28,
      heatAdd: 15,
      reward: [300, 1200],
      jail: 4,
      skill: "intimidation",
      desc: "Take what you want. Speed is everything.",
    },
    // ── FELONY ─────────────────────────────────────────────────────────
    {
      id: "carjack",
      name: "Carjack & Strip",
      type: "Felony",
      reqRep: 80,
      baseChance: 0.65,
      risk: 0.35,
      heatAdd: 22,
      reward: [1200, 5500],
      jail: 8,
      skill: "street_smarts",
      desc: "Strip a luxury car for parts. Sell through a chop shop.",
    },
    {
      id: "burglary",
      name: "House Burglary",
      type: "Felony",
      reqRep: 120,
      baseChance: 0.6,
      risk: 0.4,
      heatAdd: 28,
      reward: [2500, 9000],
      jail: 14,
      skill: "stealth",
      desc: "Break & enter a wealthy home. Don't wake the dog.",
    },
    {
      id: "robbery",
      name: "Armed Robbery",
      type: "Felony",
      reqRep: 200,
      baseChance: 0.58,
      risk: 0.5,
      heatAdd: 38,
      reward: [5000, 20000],
      jail: 24,
      skill: "intimidation",
      desc: "Hit a store at gunpoint. High adrenaline, high risk.",
    },
    // ── CYBER / FRAUD ──────────────────────────────────────────────────
    {
      id: "phishing",
      name: "Phishing Campaign",
      type: "Cyber",
      reqRep: 45,
      baseChance: 0.72,
      risk: 0.18,
      heatAdd: 14,
      reward: [800, 6000],
      jail: 12,
      skill: "hacking",
      desc: "Mass phishing emails, steal credentials and drain accounts.",
    },
    {
      id: "scam",
      name: "Crypto Rugpull",
      type: "Cyber",
      reqRep: 150,
      baseChance: 0.6,
      risk: 0.25,
      heatAdd: 24,
      reward: [8000, 40000],
      jail: 30,
      skill: "hacking",
      desc: "Launch a fake coin, hype it, pull the liquidity. Gone.",
    },
    {
      id: "corp_hack",
      name: "Corporate Hack",
      type: "Cyber",
      reqRep: 350,
      baseChance: 0.5,
      risk: 0.35,
      heatAdd: 32,
      reward: [40000, 180000],
      jail: 48,
      skill: "hacking",
      desc: "Breach a corp network. Steal secrets or deploy ransomware.",
    },
    // ── ORGANIZED ──────────────────────────────────────────────────────
    {
      id: "protection",
      name: "Protection Racket",
      type: "Organized",
      reqRep: 250,
      baseChance: 0.68,
      risk: 0.42,
      heatAdd: 30,
      reward: [3000, 12000],
      jail: 36,
      skill: "intimidation",
      desc: "Make local businesses pay for 'security'. Monthly tribute.",
    },
    {
      id: "arms_deal",
      name: "Arms Deal",
      type: "Organized",
      reqRep: 500,
      baseChance: 0.52,
      risk: 0.58,
      heatAdd: 50,
      reward: [30000, 120000],
      jail: 60,
      skill: "planning",
      desc: "Broker illegal weapons. One wrong buyer ends everything.",
    },
    // ── DRUG TRADE ─────────────────────────────────────────────────────
    {
      id: "street_deal",
      name: "Street Deal",
      type: "Drug Trade",
      reqRep: 15,
      baseChance: 0.78,
      risk: 0.22,
      heatAdd: 12,
      reward: [400, 1800],
      jail: 6,
      skill: "street_smarts",
      desc: "Move small product on the corner. Stay off the radar.",
    },
    {
      id: "cook_sell",
      name: "Cook & Sell",
      type: "Drug Trade",
      reqRep: 200,
      baseChance: 0.62,
      risk: 0.4,
      heatAdd: 30,
      reward: [8000, 35000],
      jail: 36,
      skill: "chemistry",
      desc: "Run a home lab. Quality product commands premium prices.",
    },
    {
      id: "distribution",
      name: "Distribution Run",
      type: "Drug Trade",
      reqRep: 500,
      baseChance: 0.55,
      risk: 0.52,
      heatAdd: 45,
      reward: [50000, 180000],
      jail: 72,
      skill: "planning",
      desc: "Supply whole city blocks. Kilos, not grams.",
    },
    // ── ELITE ──────────────────────────────────────────────────────────
    {
      id: "heist",
      name: "Bank Heist",
      type: "Elite",
      reqRep: 700,
      baseChance: 0.32,
      risk: 0.85,
      heatAdd: 90,
      reward: [200000, 700000],
      jail: 120,
      skill: "planning",
      desc: "The big one. Crew required. All-or-nothing.",
    },
    {
      id: "insider",
      name: "Insider Trading",
      type: "White Collar",
      reqRep: 800,
      baseChance: 0.68,
      risk: 0.5,
      heatAdd: 38,
      reward: [300000, 1500000],
      jail: 60,
      skill: "hacking",
      desc: "Exploit non-public corporate secrets. Paper trails are fatal.",
    },
    {
      id: "extortion",
      name: "Political Extortion",
      type: "Elite",
      reqRep: 1200,
      baseChance: 0.45,
      risk: 0.65,
      heatAdd: 55,
      reward: [80000, 500000],
      jail: 84,
      skill: "planning",
      desc: "Blackmail powerful figures. They pay — or they burn.",
    },
  ],

  /* ═══ CRIME SKILLS ═══ */
  CRIME_SKILLS: [
    {
      id: "stealth",
      name: "Stealth",
      icon: "fa-user-ninja",
      desc: "Reduces detection on B&E, pickpocket & shoplift. Train in darkness.",
      trainCost: 500,
      energyCost: 20,
      xpGain: 35,
    },
    {
      id: "intimidation",
      name: "Intimidation",
      icon: "fa-hand-fist",
      desc: "Boosts mugging, robbery & protection racket success. Hit the gym.",
      trainCost: 400,
      energyCost: 25,
      xpGain: 30,
    },
    {
      id: "hacking",
      name: "Hacking",
      icon: "fa-terminal",
      desc: "Powers phishing, crypto scams & corp hacks. Study systems.",
      trainCost: 800,
      energyCost: 15,
      xpGain: 28,
    },
    {
      id: "street_smarts",
      name: "Street Smarts",
      icon: "fa-eye",
      desc: "General underworld awareness. Lowers heat gain on all street crimes.",
      trainCost: 300,
      energyCost: 20,
      xpGain: 40,
    },
    {
      id: "chemistry",
      name: "Chemistry",
      icon: "fa-flask",
      desc: "Drug lab quality & yield — higher purity = more money per batch.",
      trainCost: 1000,
      energyCost: 15,
      xpGain: 25,
    },
    {
      id: "planning",
      name: "Tactical Planning",
      icon: "fa-chess",
      desc: "Heist & organized crime success. Think three steps ahead.",
      trainCost: 600,
      energyCost: 15,
      xpGain: 30,
    },
  ],

  /* ═══ LAWYERS ═══ */
  LAWYERS: [
    {
      id: "public_defender",
      name: "Public Defender",
      tier: 0,
      monthlyCost: 0,
      caseFee: 0,
      jailReduction: 0.08,
      dismissChance: 0.04,
      desc: "Court-appointed. Better than nothing. Barely.",
    },
    {
      id: "local_attorney",
      name: "Local Attorney",
      tier: 1,
      monthlyCost: 3000,
      caseFee: 5000,
      jailReduction: 0.35,
      dismissChance: 0.22,
      desc: "Knows the local DA. Can cut real deals.",
    },
    {
      id: "experienced",
      name: "Experienced Counsel",
      tier: 2,
      monthlyCost: 12000,
      caseFee: 20000,
      jailReduction: 0.58,
      dismissChance: 0.45,
      desc: "Former prosecutor. Knows every loophole.",
    },
    {
      id: "top_firm",
      name: "Elite Law Firm",
      tier: 3,
      monthlyCost: 45000,
      caseFee: 80000,
      jailReduction: 0.78,
      dismissChance: 0.68,
      desc: "The best money can buy. Evidence? What evidence?",
    },
    {
      id: "cartel_attorney",
      name: "Cartel Attorney",
      tier: 4,
      monthlyCost: 200000,
      caseFee: 300000,
      jailReduction: 0.92,
      dismissChance: 0.88,
      desc: "Makes prosecutors disappear. Drug empire only.",
      reqDrugTier: "network",
    },
  ],

  /* ═══ DRUG EMPIRE TIERS ═══ */
  DRUG_TIERS: [
    {
      id: "dealer",
      name: "Street Dealer",
      icon: "fa-person",
      setupCost: 8000,
      income: [800, 2200],
      arrestRisk: 0.06,
      heatPerMonth: 4,
      reqRep: 30,
      reqChem: 0,
      desc: "You and a burner phone. Small product, fast cash.",
    },
    {
      id: "lab",
      name: "Home Cook Lab",
      icon: "fa-flask-vial",
      setupCost: 40000,
      income: [5000, 15000],
      arrestRisk: 0.08,
      heatPerMonth: 8,
      reqRep: 200,
      reqChem: 150,
      desc: "Your own lab. Quality purity commands premium street prices.",
    },
    {
      id: "network",
      name: "Distribution Network",
      icon: "fa-network-wired",
      setupCost: 200000,
      income: [25000, 80000],
      arrestRisk: 0.1,
      heatPerMonth: 15,
      reqRep: 500,
      reqChem: 300,
      desc: "You supply the dealers. Kilos, not grams. City-wide operation.",
    },
    {
      id: "cartel",
      name: "Cartel Operations",
      icon: "fa-crown",
      setupCost: 1500000,
      income: [150000, 600000],
      arrestRisk: 0.13,
      heatPerMonth: 25,
      reqRep: 1000,
      reqChem: 500,
      desc: "International supply chain. Near limitless money. DEA hunts you daily.",
    },
  ],

  ASSETS: [
    {
      id: "spy",
      name: "S&P 500 ETF",
      type: "index",
      base: 450,
      vol: 0.02,
      corr: 0.9,
    },
    {
      id: "qqq",
      name: "Nasdaq 100",
      type: "index",
      base: 370,
      vol: 0.04,
      corr: 0.95,
    },
    {
      id: "tsla",
      name: "Tesla Inc",
      type: "stock",
      base: 200,
      vol: 0.08,
      corr: 0.7,
    },
    {
      id: "aapl",
      name: "Apple Inc",
      type: "stock",
      base: 180,
      vol: 0.03,
      corr: 0.85,
    },
    {
      id: "btc",
      name: "Bitcoin",
      type: "crypto",
      base: 25000,
      vol: 0.15,
      corr: 0.4,
    },
    {
      id: "eth",
      name: "Ethereum",
      type: "crypto",
      base: 1600,
      vol: 0.12,
      corr: 0.45,
    },
    {
      id: "gold",
      name: "Gold Futures",
      type: "comm",
      base: 1900,
      vol: 0.015,
      corr: -0.3,
    },
    {
      id: "oil",
      name: "Crude Oil",
      type: "comm",
      base: 80,
      vol: 0.05,
      corr: 0.2,
    },
  ],

  // --- NEW BUSINESS CONFIG ---
  STARTUP_TYPES: [
    {
      id: "saas",
      name: "SaaS Platform",
      icon: "fa-cloud",
      cost: 8000,
      difficulty: 0.8,
      upside: 1.2,
      desc: "Recurring revenue cloud software. Steady growth, predictable income.",
      color: "#60a5fa",
    },
    {
      id: "social",
      name: "Social App",
      icon: "fa-users",
      cost: 5000,
      difficulty: 1.0,
      upside: 3.0,
      desc: "Build the next viral social network. High risk, massive reward.",
      color: "#f472b6",
    },
    {
      id: "biotech",
      name: "BioTech",
      icon: "fa-dna",
      cost: 50000,
      difficulty: 1.8,
      upside: 6.0,
      desc: "Cutting-edge medicine and research. Expensive but revolutionary.",
      color: "#34d399",
    },
    {
      id: "ecommerce",
      name: "E-Commerce",
      icon: "fa-cart-shopping",
      cost: 4000,
      difficulty: 0.6,
      upside: 1.0,
      desc: "Online retail store. Easiest to start, quicker revenue.",
      color: "#fbbf24",
    },
    {
      id: "fintech",
      name: "FinTech",
      icon: "fa-coins",
      cost: 18000,
      difficulty: 1.2,
      upside: 2.5,
      desc: "Financial technology disrupting banking. High regulation, high reward.",
      color: "#a78bfa",
    },
    {
      id: "gaming",
      name: "Gaming Studio",
      icon: "fa-gamepad",
      cost: 10000,
      difficulty: 1.0,
      upside: 2.0,
      desc: "Video game development. Creative, hit-driven market.",
      color: "#fb923c",
    },
    {
      id: "edtech",
      name: "EdTech",
      icon: "fa-graduation-cap",
      cost: 5000,
      difficulty: 0.7,
      upside: 1.3,
      desc: "Education technology. Stable demand, social impact.",
      color: "#38bdf8",
    },
    {
      id: "ai",
      name: "AI & Machine Learning",
      icon: "fa-brain",
      cost: 25000,
      difficulty: 1.4,
      upside: 4.0,
      desc: "Artificial intelligence products. Cutting-edge, talent-hungry.",
      color: "#c084fc",
    },
  ],
  STARTUP_ROLES: {
    dev: {
      salary: 5500,
      output: 11,
      desc: "Builds product features & fixes bugs",
      icon: "fa-code",
    },
    sales: {
      salary: 4200,
      output: 0.5,
      desc: "Acquires customers & closes deals",
      icon: "fa-handshake",
    },
    mkt: {
      salary: 4000,
      output: 20,
      desc: "Grows brand awareness & reach",
      icon: "fa-bullhorn",
    },
    exec: {
      salary: 8000,
      output: 1.15,
      desc: "Multiplies everyone's output by 15%",
      icon: "fa-crown",
    },
  },

  // --- BUSINESS ADVISOR ---
  ADVISOR_TIPS: {
    early: [
      "Focus on hiring 2-3 developers first. Product is everything in the early days.",
      "Don't hire an executive yet — they're expensive and you need builders, not managers.",
      "Keep your burn rate low. Runway is your lifeline.",
      "Get to Product-Market Fit (PMF) before scaling. Aim for 30%+ PMF.",
      "Consider a marketing hire once you have a solid product (10+ features).",
      "Watch your morale — unhappy teams build buggy products.",
      "Your first 100 users are the hardest. Sales hires can accelerate this.",
    ],
    growing: [
      "You're gaining traction! Time to add a sales person to accelerate growth.",
      "Consider hiring an executive now — they boost everyone's productivity.",
      "Marketing spend scales with users. More awareness = faster growth.",
      "Bug count too high? Add another developer or slow new feature development.",
      "Your runway looks healthy. Consider reinvesting profits into hiring.",
      "PMF above 50% — you've found your market! Now scale aggressively.",
      "Think about your exit strategy: IPO for glory, acquisition for guaranteed payout.",
    ],
    struggling: [
      "Fire underperforming roles to extend runway. Survival first.",
      "Focus all resources on product. Features drive PMF, PMF drives users.",
      "Your burn rate is eating you alive. Cut to skeleton crew if needed.",
      "Consider a pivot — changing your startup type might save the company.",
      "Cash injection needed. Launch a marketing campaign to boost revenue.",
      "Morale is tanking. Sometimes a smaller, focused team is better.",
    ],
    great: [
      "Honestly? You're crushing it. I almost feel bad charging you for this. Almost. 💰",
      "Your startup is printing money. Maybe buy me a yacht? I take PayPal.",
      "I've got nothing. You're doing better than 99% of founders. Go celebrate!",
      "At this point you're basically teaching ME. Can I be YOUR advisor?",
      "The only advice I have: don't get cocky. The market humbles everyone eventually.",
    ],
    hopeless: [
      "Look... I'm good, but I'm not a miracle worker. This thing is circling the drain.",
      "My professional advice? Update your resume. And maybe mine too, since I clearly failed.",
      "I've seen startups recover from worse. Actually no, I haven't. Sorry.",
      "The good news: you'll learn from this. The bad news: everything else.",
      "Even caffeine can't save this one. Time to pivot... to a different career maybe?",
    ],
  },

  // --- COUNTRY DATA ---
  // [name, ISO code, economy(1-5), stability(1-5), taxBurden(1-5), safety(1-5), opportunity(1-5)]
  COUNTRIES: [
    ["Afghanistan", "AF", 1, 1, 1, 1, 1],
    ["Albania", "AL", 2, 3, 2, 3, 2],
    ["Algeria", "DZ", 2, 2, 2, 2, 2],
    ["Andorra", "AD", 5, 5, 1, 5, 3],
    ["Angola", "AO", 2, 2, 2, 2, 2],
    ["Antigua and Barbuda", "AG", 4, 4, 2, 4, 3],
    ["Argentina", "AR", 3, 3, 4, 3, 3],
    ["Armenia", "AM", 2, 3, 2, 3, 2],
    ["Australia", "AU", 5, 5, 4, 5, 5],
    ["Austria", "AT", 5, 5, 5, 5, 4],
    ["Azerbaijan", "AZ", 3, 3, 2, 3, 2],
    ["Bahamas", "BS", 4, 4, 1, 3, 3],
    ["Bahrain", "BH", 5, 4, 1, 4, 4],
    ["Bangladesh", "BD", 1, 2, 2, 2, 2],
    ["Barbados", "BB", 4, 4, 3, 4, 3],
    ["Belarus", "BY", 3, 2, 3, 3, 2],
    ["Belgium", "BE", 5, 5, 5, 4, 4],
    ["Belize", "BZ", 2, 3, 2, 3, 2],
    ["Benin", "BJ", 1, 3, 2, 3, 1],
    ["Bhutan", "BT", 2, 4, 2, 4, 2],
    ["Bolivia", "BO", 2, 2, 2, 2, 2],
    ["Bosnia and Herzegovina", "BA", 3, 3, 3, 3, 2],
    ["Botswana", "BW", 3, 4, 3, 4, 3],
    ["Brazil", "BR", 3, 3, 4, 2, 3],
    ["Brunei", "BN", 5, 4, 1, 5, 3],
    ["Bulgaria", "BG", 3, 4, 3, 4, 3],
    ["Burkina Faso", "BF", 1, 1, 2, 1, 1],
    ["Burundi", "BI", 1, 1, 2, 1, 1],
    ["Cabo Verde", "CV", 2, 4, 3, 4, 2],
    ["Cambodia", "KH", 2, 3, 2, 3, 2],
    ["Cameroon", "CM", 1, 2, 2, 2, 1],
    ["Canada", "CA", 5, 5, 4, 5, 5],
    ["Central African Republic", "CF", 1, 1, 1, 1, 1],
    ["Chad", "TD", 1, 1, 1, 1, 1],
    ["Chile", "CL", 4, 4, 3, 4, 4],
    ["China", "CN", 3, 3, 3, 4, 4],
    ["Colombia", "CO", 3, 3, 3, 2, 3],
    ["Comoros", "KM", 1, 2, 2, 2, 1],
    ["Congo (DRC)", "CD", 1, 1, 1, 1, 1],
    ["Congo (Republic)", "CG", 2, 2, 2, 2, 1],
    ["Costa Rica", "CR", 3, 4, 3, 4, 3],
    ["Croatia", "HR", 4, 4, 4, 4, 3],
    ["Cuba", "CU", 2, 3, 3, 3, 1],
    ["Cyprus", "CY", 4, 4, 3, 4, 3],
    ["Czech Republic", "CZ", 4, 5, 4, 5, 4],
    ["Côte d'Ivoire", "CI", 2, 2, 2, 2, 2],
    ["Denmark", "DK", 5, 5, 5, 5, 4],
    ["Djibouti", "DJ", 2, 3, 2, 3, 1],
    ["Dominica", "DM", 3, 4, 2, 4, 2],
    ["Dominican Republic", "DO", 3, 3, 3, 3, 3],
    ["Ecuador", "EC", 2, 3, 3, 2, 2],
    ["Egypt", "EG", 2, 3, 2, 3, 2],
    ["El Salvador", "SV", 2, 3, 2, 2, 2],
    ["Equatorial Guinea", "GQ", 3, 2, 1, 2, 2],
    ["Eritrea", "ER", 1, 1, 2, 2, 1],
    ["Estonia", "EE", 4, 5, 3, 5, 4],
    ["Eswatini", "SZ", 2, 3, 2, 3, 2],
    ["Ethiopia", "ET", 1, 1, 2, 2, 1],
    ["Fiji", "FJ", 2, 3, 3, 3, 2],
    ["Finland", "FI", 5, 5, 5, 5, 4],
    ["France", "FR", 5, 5, 5, 4, 4],
    ["Gabon", "GA", 3, 3, 2, 3, 2],
    ["Gambia", "GM", 1, 3, 2, 3, 1],
    ["Georgia", "GE", 2, 3, 2, 3, 3],
    ["Germany", "DE", 5, 5, 5, 5, 5],
    ["Ghana", "GH", 2, 3, 2, 3, 2],
    ["Greece", "GR", 4, 4, 4, 4, 3],
    ["Grenada", "GD", 3, 4, 2, 4, 2],
    ["Guatemala", "GT", 2, 3, 2, 2, 2],
    ["Guinea", "GN", 1, 2, 2, 2, 1],
    ["Guinea-Bissau", "GW", 1, 2, 2, 2, 1],
    ["Guyana", "GY", 2, 3, 2, 3, 2],
    ["Haiti", "HT", 1, 1, 2, 1, 1],
    ["Honduras", "HN", 2, 2, 2, 2, 2],
    ["Hungary", "HU", 4, 4, 3, 4, 3],
    ["Iceland", "IS", 5, 5, 4, 5, 4],
    ["India", "IN", 2, 3, 3, 3, 3],
    ["Indonesia", "ID", 2, 3, 3, 3, 3],
    ["Iran", "IR", 2, 2, 3, 2, 2],
    ["Iraq", "IQ", 2, 1, 2, 1, 1],
    ["Ireland", "IE", 5, 5, 3, 5, 5],
    ["Israel", "IL", 5, 4, 4, 3, 5],
    ["Italy", "IT", 5, 5, 5, 4, 4],
    ["Jamaica", "JM", 3, 3, 3, 2, 2],
    ["Japan", "JP", 5, 5, 4, 5, 4],
    ["Jordan", "JO", 3, 4, 2, 4, 2],
    ["Kazakhstan", "KZ", 3, 3, 2, 3, 3],
    ["Kenya", "KE", 2, 3, 2, 2, 2],
    ["Kiribati", "KI", 1, 4, 2, 4, 1],
    ["Kuwait", "KW", 5, 4, 1, 4, 3],
    ["Kyrgyzstan", "KG", 2, 3, 2, 3, 2],
    ["Laos", "LA", 2, 3, 2, 3, 2],
    ["Latvia", "LV", 4, 4, 3, 4, 3],
    ["Lebanon", "LB", 2, 1, 2, 2, 2],
    ["Lesotho", "LS", 1, 3, 2, 3, 1],
    ["Liberia", "LR", 1, 2, 2, 2, 1],
    ["Libya", "LY", 2, 1, 2, 1, 1],
    ["Liechtenstein", "LI", 5, 5, 2, 5, 4],
    ["Lithuania", "LT", 4, 4, 3, 5, 4],
    ["Luxembourg", "LU", 5, 5, 4, 5, 4],
    ["Madagascar", "MG", 1, 2, 2, 2, 1],
    ["Malawi", "MW", 1, 3, 2, 3, 1],
    ["Malaysia", "MY", 3, 4, 2, 4, 4],
    ["Maldives", "MV", 3, 4, 2, 4, 2],
    ["Mali", "ML", 1, 1, 2, 1, 1],
    ["Malta", "MT", 4, 5, 3, 5, 3],
    ["Marshall Islands", "MH", 2, 4, 2, 4, 1],
    ["Mauritania", "MR", 1, 2, 2, 2, 1],
    ["Mauritius", "MU", 3, 4, 2, 4, 3],
    ["Mexico", "MX", 3, 3, 3, 2, 3],
    ["Micronesia", "FM", 2, 4, 2, 4, 1],
    ["Moldova", "MD", 2, 3, 3, 3, 2],
    ["Monaco", "MC", 5, 5, 1, 5, 4],
    ["Mongolia", "MN", 2, 3, 2, 3, 2],
    ["Montenegro", "ME", 3, 4, 3, 4, 3],
    ["Morocco", "MA", 2, 3, 3, 3, 2],
    ["Mozambique", "MZ", 1, 2, 2, 2, 1],
    ["Myanmar", "MM", 1, 1, 2, 1, 1],
    ["Namibia", "NA", 2, 4, 3, 4, 2],
    ["Nauru", "NR", 3, 4, 2, 4, 1],
    ["Nepal", "NP", 1, 3, 2, 3, 1],
    ["Netherlands", "NL", 5, 5, 5, 5, 5],
    ["New Zealand", "NZ", 5, 5, 4, 5, 4],
    ["Nicaragua", "NI", 2, 2, 2, 2, 2],
    ["Niger", "NE", 1, 2, 2, 2, 1],
    ["Nigeria", "NG", 2, 2, 2, 2, 2],
    ["North Korea", "KP", 1, 2, 1, 2, 1],
    ["North Macedonia", "MK", 3, 3, 3, 3, 2],
    ["Norway", "NO", 5, 5, 5, 5, 4],
    ["Oman", "OM", 4, 4, 1, 4, 3],
    ["Pakistan", "PK", 2, 2, 2, 2, 2],
    ["Palau", "PW", 3, 4, 2, 4, 2],
    ["Panama", "PA", 4, 4, 2, 3, 3],
    ["Papua New Guinea", "PG", 2, 2, 2, 2, 1],
    ["Paraguay", "PY", 2, 3, 2, 3, 2],
    ["Peru", "PE", 3, 3, 3, 3, 3],
    ["Philippines", "PH", 2, 3, 2, 3, 2],
    ["Poland", "PL", 4, 4, 3, 4, 4],
    ["Portugal", "PT", 4, 5, 4, 4, 4],
    ["Qatar", "QA", 5, 4, 1, 5, 4],
    ["Romania", "RO", 3, 4, 3, 4, 3],
    ["Russia", "RU", 3, 2, 3, 3, 2],
    ["Rwanda", "RW", 1, 3, 2, 3, 2],
    ["Saint Kitts and Nevis", "KN", 4, 4, 1, 4, 3],
    ["Saint Lucia", "LC", 3, 4, 2, 4, 2],
    ["Saint Vincent and the Grenadines", "VC", 3, 4, 2, 4, 2],
    ["Samoa", "WS", 2, 4, 2, 4, 2],
    ["San Marino", "SM", 5, 5, 3, 5, 3],
    ["São Tomé and Príncipe", "ST", 1, 4, 2, 4, 1],
    ["Saudi Arabia", "SA", 5, 4, 1, 4, 4],
    ["Senegal", "SN", 1, 3, 2, 3, 2],
    ["Serbia", "RS", 3, 3, 3, 3, 3],
    ["Seychelles", "SC", 4, 4, 2, 4, 2],
    ["Sierra Leone", "SL", 1, 3, 2, 3, 1],
    ["Singapore", "SG", 5, 5, 2, 5, 5],
    ["Slovakia", "SK", 4, 4, 3, 4, 3],
    ["Slovenia", "SI", 4, 5, 4, 5, 4],
    ["Solomon Islands", "SB", 1, 3, 2, 3, 1],
    ["Somalia", "SO", 1, 1, 1, 1, 1],
    ["South Africa", "ZA", 3, 3, 3, 2, 3],
    ["South Korea", "KR", 5, 4, 3, 4, 5],
    ["South Sudan", "SS", 1, 1, 1, 1, 1],
    ["Spain", "ES", 4, 5, 4, 4, 4],
    ["Sri Lanka", "LK", 2, 3, 3, 3, 2],
    ["Sudan", "SD", 1, 1, 2, 1, 1],
    ["Suriname", "SR", 2, 3, 2, 3, 2],
    ["Sweden", "SE", 5, 5, 5, 5, 4],
    ["Switzerland", "CH", 5, 5, 4, 5, 5],
    ["Syria", "SY", 1, 1, 1, 1, 1],
    ["Tajikistan", "TJ", 1, 2, 2, 2, 1],
    ["Tanzania", "TZ", 1, 3, 2, 3, 2],
    ["Thailand", "TH", 3, 3, 2, 3, 3],
    ["Timor-Leste", "TL", 1, 3, 2, 3, 1],
    ["Togo", "TG", 1, 3, 2, 3, 1],
    ["Tonga", "TO", 2, 4, 2, 4, 1],
    ["Trinidad and Tobago", "TT", 4, 3, 3, 3, 3],
    ["Tunisia", "TN", 2, 3, 3, 3, 2],
    ["Turkey", "TR", 3, 3, 3, 3, 3],
    ["Turkmenistan", "TM", 2, 2, 2, 2, 1],
    ["Tuvalu", "TV", 2, 4, 2, 4, 1],
    ["Uganda", "UG", 1, 2, 2, 2, 1],
    ["Ukraine", "UA", 2, 1, 3, 1, 2],
    ["United Arab Emirates", "AE", 5, 5, 1, 5, 5],
    ["United Kingdom", "GB", 5, 5, 4, 5, 5],
    ["United States", "US", 5, 5, 3, 4, 5],
    ["Uruguay", "UY", 4, 4, 3, 4, 3],
    ["Uzbekistan", "UZ", 2, 3, 2, 3, 2],
    ["Vanuatu", "VU", 2, 4, 2, 4, 1],
    ["Vatican City", "VA", 5, 5, 1, 5, 1],
    ["Venezuela", "VE", 1, 1, 2, 1, 1],
    ["Vietnam", "VN", 2, 3, 2, 3, 3],
    ["Yemen", "YE", 1, 1, 1, 1, 1],
    ["Zambia", "ZM", 1, 3, 2, 3, 1],
    ["Zimbabwe", "ZW", 1, 2, 2, 2, 1],
  ],

  getCountryByCode(code) {
    const c = this.COUNTRIES.find((c) => c[1] === code);
    if (!c) return null;
    return { name: c[0], code: c[1], profile: [c[2], c[3], c[4], c[5], c[6]] };
  },

  getCountryModifiers(profile) {
    const [econ, stab, tax, safe, opp] = profile;
    const taxRates = [0, 0.04, 0.1, 0.18, 0.28, 0.38];
    const livingMults = [0, 0.35, 0.55, 0.8, 1.0, 1.25];
    const deathSafe = [0, 2.2, 1.6, 1.0, 0.7, 0.45];
    const deathStab = [0, 1.8, 1.35, 1.0, 0.8, 0.6];
    const startupMults = [0, 1.7, 1.35, 1.0, 0.85, 0.7];
    const cashMults = [0, 0.25, 0.45, 0.7, 1.0, 1.2];
    return {
      taxMod: taxRates[tax],
      livingCostMult: livingMults[econ],
      deathRiskMult: deathSafe[safe] * deathStab[stab],
      startupDiffMult: startupMults[opp],
      startingCashMult: cashMults[econ],
      educationMult: [0, 0.6, 0.75, 0.9, 1.0, 1.1][opp],
      healthDecayMult: [0, 1.4, 1.2, 1.0, 0.85, 0.65][safe],
    };
  },

  getCountryTraits(profile) {
    const [econ, stab, tax, safe, opp] = profile;
    const pros = [],
      cons = [];
    if (econ >= 4) pros.push("Strong economy");
    if (econ === 5) pros.push("High starting capital");
    if (econ <= 2) cons.push("Weak economy");
    if (econ === 1) cons.push("Extreme poverty");
    if (stab >= 4) pros.push("Politically stable");
    if (stab <= 2) cons.push("Political instability");
    if (stab === 1) cons.push("Active conflict zone");
    if (tax <= 2) pros.push(tax === 1 ? "Tax haven" : "Low taxes");
    if (tax >= 4) cons.push(tax === 5 ? "Very high taxes" : "High taxes");
    if (safe >= 4) pros.push(safe === 5 ? "Exceptionally safe" : "Very safe");
    if (safe <= 2) cons.push(safe === 1 ? "Extremely dangerous" : "High crime");
    if (opp >= 4)
      pros.push(
        opp === 5 ? "World-class opportunities" : "Great opportunities",
      );
    if (opp <= 2)
      cons.push(opp === 1 ? "Very limited opportunities" : "Few opportunities");
    return { pros, cons };
  },

  getCountryFlag(code) {
    return String.fromCodePoint(
      ...[...code.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65),
    );
  },

  SIDE_HUSTLES: [
    {
      id: "freelance_code",
      name: "Programmer",
      reqSmarts: 35,
      energy: 24,
      payout: [300, 1800],
      stress: 1.4,
      desc: "Build small websites or apps.",
    },
    {
      id: "private_tutor",
      name: "Private Tutoring",
      reqSmarts: 22,
      energy: 18,
      payout: [160, 900],
      stress: 0.8,
      desc: "Teach students after work.",
    },
    {
      id: "flip_items",
      name: "Flip Electronics",
      reqSmarts: 18,
      energy: 16,
      payout: [120, 1400],
      stress: 1.0,
      desc: "Buy low, refurbish, and resell.",
    },
    {
      id: "event_photos",
      name: "Photography",
      reqSmarts: 15,
      energy: 20,
      payout: [180, 1200],
      stress: 1.1,
      desc: "Shoot events on weekends.",
    },
    {
      id: "luxury_delivery",
      name: "Luxury Courier",
      reqSmarts: 12,
      energy: 22,
      payout: [90, 700],
      stress: 1.6,
      desc: "Fast deliveries, strict deadlines.",
    },
  ],

  HIGH_TICKET_CONTRACTS: [
    {
      id: "cto_advisor",
      name: "Fractional CTO Advisory",
      reqSmarts: 48,
      energy: 26,
      payout: [1200, 6800],
      stress: 2.2,
      desc: "Guide startups on architecture and hiring plans.",
    },
    {
      id: "funnel_consult",
      name: "Sales Funnel Overhaul",
      reqSmarts: 40,
      energy: 22,
      payout: [900, 5200],
      stress: 1.9,
      desc: "Rebuild pipeline and conversion funnels for businesses.",
    },
    {
      id: "ai_automation",
      name: "AI Automation Sprint",
      reqSmarts: 55,
      energy: 28,
      payout: [1800, 9800],
      stress: 2.6,
      desc: "Ship workflow automations with premium pricing.",
    },
    {
      id: "exec_coaching",
      name: "Executive Coaching",
      reqSmarts: 36,
      energy: 18,
      payout: [700, 3600],
      stress: 1.5,
      desc: "Coach leaders on execution and operating cadence.",
    },
  ],

  CHANNEL_TYPES: [
    {
      id: "youtube_finance",
      name: "Finance YouTube Channel",
      cost: 2500,
      reqSmarts: 26,
      rpm: 1.8,
      volatility: 0.34,
    },
    {
      id: "shortform",
      name: "Short-Form Viral Clips",
      cost: 1200,
      reqSmarts: 14,
      rpm: 0.8,
      volatility: 0.62,
    },
    {
      id: "newsletter",
      name: "Paid Industry Newsletter",
      cost: 1800,
      reqSmarts: 20,
      rpm: 1.3,
      volatility: 0.28,
    },
  ],

  PROPERTIES: [
    {
      id: "duplex",
      name: "Duplex Rental",
      cost: 95000,
      rent: 1350,
      upkeep: 320,
      risk: 0.25,
    },
    {
      id: "stripmall",
      name: "Small Retail Unit",
      cost: 240000,
      rent: 3400,
      upkeep: 860,
      risk: 0.4,
    },
    {
      id: "warehouse",
      name: "Warehouse",
      cost: 520000,
      rent: 7600,
      upkeep: 1800,
      risk: 0.58,
    },
  ],

  FRANCHISES: [
    {
      id: "coffee_chain",
      name: "Coffee Kiosk Franchise",
      cost: 60000,
      revenue: 3000,
      upkeep: 1200,
      risk: 0.2,
    },
    {
      id: "gym_studio",
      name: "Micro Gym Franchise",
      cost: 180000,
      revenue: 9600,
      upkeep: 4600,
      risk: 0.34,
    },
    {
      id: "storage_units",
      name: "Storage Unit Franchise",
      cost: 340000,
      revenue: 18000,
      upkeep: 8600,
      risk: 0.4,
    },
  ],

  DIVIDEND_FUNDS: [
    {
      id: "div_stable",
      name: "Dividend Aristocrats ETF",
      unitPrice: 500,
      yieldAnnual: 0.036,
      volatility: 0.018,
    },
    {
      id: "div_reit",
      name: "Global REIT Income ETF",
      unitPrice: 750,
      yieldAnnual: 0.051,
      volatility: 0.028,
    },
    {
      id: "div_energy",
      name: "Energy Cashflow ETF",
      unitPrice: 920,
      yieldAnnual: 0.062,
      volatility: 0.042,
    },
  ],

  BANK_PRODUCTS: {
    checkingApyBase: 0.004,
    savingsSpreadOverInflation: 0.012,
    creditCard: {
      baseLimit: 2000,
      baseApr: 0.239,
      minPaymentRate: 0.03,
      lateFee: 35,
      cashAdvanceFee: 0.04,
    },
    cdOffers: [
      {
        id: "cd_6m",
        name: "6M CD",
        termMonths: 6,
        apy: 0.038,
        minDeposit: 1000,
      },
      {
        id: "cd_12m",
        name: "12M CD",
        termMonths: 12,
        apy: 0.046,
        minDeposit: 2500,
      },
      {
        id: "cd_24m",
        name: "24M CD",
        termMonths: 24,
        apy: 0.054,
        minDeposit: 5000,
      },
    ],
    loanOffers: [
      {
        id: "loan_personal",
        name: "Personal Loan",
        principal: 6000,
        termMonths: 36,
        baseApr: 0.115,
        minScore: 620,
        originationFee: 0.02,
      },
      {
        id: "loan_business",
        name: "Business Credit Line",
        principal: 20000,
        termMonths: 60,
        baseApr: 0.128,
        minScore: 660,
        originationFee: 0.025,
      },
      {
        id: "loan_growth",
        name: "Expansion Term Loan",
        principal: 60000,
        termMonths: 84,
        baseApr: 0.102,
        minScore: 700,
        originationFee: 0.03,
      },
    ],
  },

  BOND_UNIT_PRICE: 1000,

  CASINO_GAMES: [
    {
      id: "slots",
      name: "Lucky Slots",
      minBet: 50,
      maxBet: 50000,
      desc: "Spin the reels. 95% RTP. Jackpot at 15×.",
    },
    {
      id: "blackjack",
      name: "Blackjack",
      minBet: 100,
      maxBet: 100000,
      desc: "Beat the dealer to 21. Best odds in the house.",
    },
    {
      id: "roulette",
      name: "Roulette",
      minBet: 100,
      maxBet: 200000,
      desc: "Red/Black, Dozens, or Straight-Up. Wheel of fortune.",
    },
    {
      id: "craps",
      name: "Craps",
      minBet: 200,
      maxBet: 100000,
      desc: "Throw the bones. Pass line, any seven, yo-eleven.",
    },
    {
      id: "horse",
      name: "Horse Racing",
      minBet: 500,
      maxBet: 500000,
      desc: "Pick your horse, read the odds. High risk, huge reward.",
    },
    {
      id: "scratch",
      name: "Scratch Card",
      minBet: 10,
      maxBet: 500,
      desc: "Instant results. Lucky 7s can pay 20×. No skill required.",
    },
  ],

  POLITICS_ROLES: [
    {
      id: "council",
      name: "City Council",
      cost: 5000,
      salary: 35000,
      reqRep: 0,
      term: 24,
      infGain: 2,
    },
    {
      id: "mayor",
      name: "Mayor",
      cost: 50000,
      salary: 120000,
      reqRep: 100,
      term: 48,
      infGain: 8,
    },
    {
      id: "governor",
      name: "Governor",
      cost: 500000,
      salary: 210000,
      reqRep: 500,
      term: 48,
      infGain: 25,
    },
    {
      id: "senator",
      name: "Senator",
      cost: 2500000,
      salary: 174000,
      reqRep: 1500,
      term: 72,
      infGain: 60,
    },
  ],

  /* ═══ RELATIONSHIPS ═══ */
  PARTNERS: [
    {
      id: "alex",
      name: "Alex",
      trait: "Ambitious",
      income: 3200,
      spendRate: 0.6,
      loyalty: 0.8,
      looks: 7,
      humor: 6,
      compatibility: () => (game.state.stats.smarts > 40 ? 0.75 : 0.45),
    },
    {
      id: "jordan",
      name: "Jordan",
      trait: "Frugal",
      income: 2400,
      spendRate: 0.2,
      loyalty: 0.9,
      looks: 5,
      humor: 8,
      compatibility: () => 0.65,
    },
    {
      id: "sam",
      name: "Sam",
      trait: "Wealthy",
      income: 12000,
      spendRate: 0.9,
      loyalty: 0.5,
      looks: 9,
      humor: 4,
      compatibility: () => (game.getNetWorth() > 50000 ? 0.7 : 0.3),
    },
    {
      id: "casey",
      name: "Casey",
      trait: "Creative",
      income: 1800,
      spendRate: 0.4,
      loyalty: 0.85,
      looks: 6,
      humor: 9,
      compatibility: () => (game.state.stats.happiness > 40 ? 0.7 : 0.4),
    },
    {
      id: "taylor",
      name: "Taylor",
      trait: "Supportive",
      income: 2800,
      spendRate: 0.5,
      loyalty: 0.95,
      looks: 6,
      humor: 7,
      compatibility: () => 0.6,
    },
    {
      id: "morgan",
      name: "Morgan",
      trait: "Adventurous",
      income: 4500,
      spendRate: 0.7,
      loyalty: 0.6,
      looks: 8,
      humor: 7,
      compatibility: () => (game.state.stats.health > 60 ? 0.65 : 0.35),
    },
  ],
  WEDDING_COSTS: {
    courthouse: 500,
    modest: 8000,
    lavish: 35000,
    extravagant: 85000,
  },
  PRENUP_TYPES: [
    {
      id: "none",
      name: "No Prenup",
      desc: "Full asset sharing. Divorce splits everything 50/50.",
      splitPct: 0.5,
    },
    {
      id: "partial",
      name: "Partial Prenup",
      desc: "Pre-marriage assets protected. Post-marriage split 50/50.",
      splitPct: 0.35,
    },
    {
      id: "full",
      name: "Full Prenup",
      desc: "All assets stay separated. Minimal financial exposure.",
      splitPct: 0.1,
    },
  ],
  DIVORCE_BASE_COST: 5000,
  CHILD_MONTHLY_COST: 800,
  ADOPTION_COST: 15000,
  ADOPTION_CHILD_AGE: 4,

  /* ═══ POLYGAMY / SIDE RELATIONSHIPS ═══ */
  // Countries where polygamous marriage is legally permitted
  POLYGAMY_ALLOWED_CODES: new Set([
    "AF",
    "DZ",
    "BH",
    "BD",
    "BJ",
    "BF",
    "CM",
    "CF",
    "KM",
    "CI",
    "DJ",
    "EG",
    "ER",
    "ET",
    "GM",
    "GN",
    "GW",
    "ID",
    "IR",
    "IQ",
    "JO",
    "KE",
    "KW",
    "LY",
    "MY",
    "ML",
    "MR",
    "MA",
    "NE",
    "NG",
    "OM",
    "PK",
    "QA",
    "SA",
    "SN",
    "SL",
    "SO",
    "TD",
    "TZ",
    "TG",
    "TN",
    "AE",
    "YE",
    "SD",
  ]),

  SIDE_PARTNERS: [
    {
      id: "s_yasmine",
      name: "Yasmine",
      trait: "Seductive",
      looks: 9,
      humor: 5,
      loyalty: 0.28,
      monthlyExpense: { fling: 220, girlfriend: 420, second_wife: 680 },
      compatibility: () => 0.62,
    },
    {
      id: "s_bianca",
      name: "Bianca",
      trait: "Thrill-seeking",
      looks: 8,
      humor: 7,
      loyalty: 0.22,
      monthlyExpense: { fling: 260, girlfriend: 460, second_wife: 740 },
      compatibility: () => 0.56,
    },
    {
      id: "s_nina",
      name: "Nina",
      trait: "Passionate",
      looks: 7,
      humor: 8,
      loyalty: 0.38,
      monthlyExpense: { fling: 200, girlfriend: 400, second_wife: 640 },
      compatibility: () => 0.52,
    },
    {
      id: "s_layla",
      name: "Layla",
      trait: "Devoted",
      looks: 8,
      humor: 6,
      loyalty: 0.55,
      monthlyExpense: { fling: 180, girlfriend: 380, second_wife: 600 },
      compatibility: () => 0.68,
    },
    {
      id: "s_zara",
      name: "Zara",
      trait: "Charismatic",
      looks: 9,
      humor: 7,
      loyalty: 0.32,
      monthlyExpense: { fling: 300, girlfriend: 560, second_wife: 820 },
      compatibility: () =>
        typeof game !== "undefined" && game.getNetWorth() > 100000
          ? 0.72
          : 0.38,
    },
    {
      id: "s_priya",
      name: "Priya",
      trait: "Alluring",
      looks: 8,
      humor: 7,
      loyalty: 0.44,
      monthlyExpense: { fling: 240, girlfriend: 440, second_wife: 700 },
      compatibility: () => 0.58,
    },
    {
      id: "s_camille",
      name: "Camille",
      trait: "Playful",
      looks: 7,
      humor: 9,
      loyalty: 0.3,
      monthlyExpense: { fling: 210, girlfriend: 410, second_wife: 660 },
      compatibility: () => 0.55,
    },
    {
      id: "s_diana",
      name: "Diana",
      trait: "Mysterious",
      looks: 9,
      humor: 5,
      loyalty: 0.25,
      monthlyExpense: { fling: 280, girlfriend: 500, second_wife: 760 },
      compatibility: () => 0.5,
    },
  ],

  /* ═══ PETS ═══ */
  PETS: [
    {
      id: "dog",
      name: "Dog",
      emoji: "🐕",
      cost: 1200,
      monthlyCost: 150,
      happinessBonus: 6,
      healthBonus: 2,
      stressReduction: 3,
      vetRiskPct: 0.04,
      vetCost: [400, 2500],
      lifespan: [10, 15],
    },
    {
      id: "cat",
      name: "Cat",
      emoji: "🐈",
      cost: 800,
      monthlyCost: 90,
      happinessBonus: 4,
      healthBonus: 1,
      stressReduction: 4,
      vetRiskPct: 0.03,
      vetCost: [200, 1800],
      lifespan: [12, 20],
    },
    {
      id: "fish",
      name: "Fish Tank",
      emoji: "🐠",
      cost: 300,
      monthlyCost: 30,
      happinessBonus: 2,
      healthBonus: 0,
      stressReduction: 2,
      vetRiskPct: 0.01,
      vetCost: [50, 200],
      lifespan: [3, 7],
    },
    {
      id: "bird",
      name: "Parrot",
      emoji: "🦜",
      cost: 1500,
      monthlyCost: 80,
      happinessBonus: 3,
      healthBonus: 0,
      stressReduction: 3,
      vetRiskPct: 0.02,
      vetCost: [150, 1000],
      lifespan: [20, 50],
    },
    {
      id: "reptile",
      name: "Reptile",
      emoji: "🦎",
      cost: 600,
      monthlyCost: 60,
      happinessBonus: 2,
      healthBonus: 0,
      stressReduction: 1,
      vetRiskPct: 0.015,
      vetCost: [100, 800],
      lifespan: [8, 25],
    },
  ],

  /* ═══ PRISON ═══ */
  PRISON_JOBS: [
    {
      id: "laundry",
      name: "Laundry Detail",
      emoji: "👕",
      pay: 45,
      stressHit: 2,
      risk: 0,
      desc: "Fold sheets for commissary money. Boring but safe.",
    },
    {
      id: "kitchen",
      name: "Kitchen Duty",
      emoji: "🍳",
      pay: 60,
      stressHit: 3,
      risk: 0.01,
      desc: "Cook for 800 inmates. Hot, dangerous, decent pay.",
    },
    {
      id: "workshop",
      name: "Workshop",
      emoji: "🔨",
      pay: 80,
      stressHit: 4,
      risk: 0.02,
      desc: "Build furniture. Highest pay, slight injury risk.",
    },
    {
      id: "library",
      name: "Library Clerk",
      emoji: "📖",
      pay: 35,
      stressHit: 0,
      risk: 0,
      smartsBonus: 1,
      desc: "Quiet work. Read case law and gain smarts every month.",
    },
    {
      id: "informant",
      name: "Guard Informant",
      emoji: "🕵️",
      pay: 120,
      stressHit: 5,
      risk: 0.15,
      repHit: -4,
      desc: "Highest pay, but inmates HATE snitches. High risk of attack.",
    },
    {
      id: "tattoo_artist",
      name: "Tattoo Artist",
      emoji: "🎨",
      pay: 100,
      stressHit: 2,
      risk: 0.01,
      repBonus: 3,
      desc: "Ink your block-mates. Great rep boosts and solid pay.",
    },
    {
      id: "gym_supervisor",
      name: "Gym Supervisor",
      emoji: "💪",
      pay: 70,
      stressHit: 1,
      risk: 0,
      healthBonus: 2,
      desc: "Run the yard gym. Stay in shape while you earn.",
    },
  ],

  PRISON_CONTRABAND: [
    {
      id: "cigarettes",
      name: "Cigarettes",
      emoji: "🚬",
      cost: 60,
      maxStack: 5,
      desc: "Universal prison currency. Trade for favors. Costs nothing to use.",
      useEffect: "barter",
      useDesc: "Trade for reputation and goodwill. +8 reputation.",
    },
    {
      id: "burner_phone",
      name: "Burner Phone",
      emoji: "📱",
      cost: 250,
      maxStack: 1,
      desc: "Stay connected to your crew outside. Earns $200/month passively.",
      useEffect: "income",
      useDesc: "Active: earns $200/mo from outside connections.",
    },
    {
      id: "shiv",
      name: "Shiv",
      emoji: "🗡️",
      cost: 180,
      maxStack: 1,
      desc: "Win more fights, lose fewer brawls. +35% fight win chance.",
      useEffect: "fight",
      useDesc: "Passive: +35% fight win rate while held.",
    },
    {
      id: "lockpick",
      name: "Lockpick Kit",
      emoji: "🗝️",
      cost: 400,
      maxStack: 1,
      desc: "Required for the Tunnel Escape. Adds +30% escape success chance.",
      useEffect: "escape",
      useDesc: "Used automatically during Tunnel Escape attempt.",
    },
    {
      id: "guard_uniform",
      name: "Guard's Uniform",
      emoji: "🪖",
      cost: 700,
      maxStack: 1,
      desc: "One-time use. Massively boosts walk-out escape odds (65%).",
      useEffect: "escape_big",
      useDesc: "One-time use during escape — consumed on attempt.",
    },
    {
      id: "hooch",
      name: "Prison Hooch",
      emoji: "🍶",
      cost: 80,
      maxStack: 3,
      desc: "Homebrew alcohol. +20 happiness but +10% infraction risk this month.",
      useEffect: "happiness",
      useDesc: "Drink it: +20 happiness. Risk of infraction.",
    },
    {
      id: "law_books",
      name: "Law Books",
      emoji: "⚖️",
      cost: 130,
      maxStack: 2,
      desc: "Study your case. 20% chance to reduce sentence by 2 months.",
      useEffect: "legal",
      useDesc: "Study: 20% chance to cut 2 months off your sentence.",
    },
    {
      id: "protein_powder",
      name: "Protein Powder",
      emoji: "🥤",
      cost: 100,
      maxStack: 3,
      desc: "Boost your workouts. +50% health gain from yard activities this month.",
      useEffect: "workout",
      useDesc: "Consume: +50% health from yard training this month.",
    },
  ],

  PRISON_YARD: [
    {
      id: "lift",
      name: "Lift Weights",
      emoji: "🏋️",
      energy: 20,
      health: 8,
      rep: 3,
      happiness: 3,
      desc: "Build muscle and earn respect. Strong = safe.",
    },
    {
      id: "run",
      name: "Run Laps",
      emoji: "🏃",
      energy: 15,
      health: 6,
      rep: 0,
      happiness: 5,
      desc: "Cardio keeps you sharp. Burns off the stress.",
    },
    {
      id: "meditate",
      name: "Meditate in Cell",
      emoji: "🧘",
      energy: 5,
      health: 2,
      rep: 0,
      happiness: 12,
      desc: "Find inner peace inside these walls. Destroys stress.",
    },
    {
      id: "network",
      name: "Network with OGs",
      emoji: "🤝",
      energy: 10,
      health: 0,
      rep: 6,
      happiness: 2,
      crimeRep: 20,
      desc: "Learn from veteran criminals. Huge crime rep when released.",
    },
    {
      id: "poker",
      name: "Yard Poker Game",
      emoji: "🃏",
      energy: 8,
      health: 0,
      rep: 2,
      happiness: 8,
      gamble: true,
      desc: "Bet commissary cash. Win up to 3x — or lose it all.",
    },
    {
      id: "study_law",
      name: "File an Appeal",
      emoji: "📝",
      energy: 25,
      health: 0,
      rep: 0,
      happiness: -3,
      appealChance: 0.15,
      desc: "15% chance to knock 2 months off your sentence. High effort.",
    },
    {
      id: "fight_train",
      name: "Fight Training",
      emoji: "🥊",
      energy: 25,
      health: 4,
      rep: 8,
      happiness: 2,
      fightBonus: true,
      desc: "Train to fight. +8 rep + become a feared fighter.",
    },
  ],

  PRISON_GANGS: [
    {
      id: "the_crew",
      name: "The Crew",
      emoji: "👥",
      color: "#94a3b8",
      fee: 100,
      protects: true,
      incomeBonus: 0,
      crimeBonus: 8,
      fightBonus: 0.15,
      desc: "General protection. Everyone knows you. Balanced perks.",
    },
    {
      id: "carnales",
      name: "Los Carnales",
      emoji: "🌵",
      color: "#f97316",
      fee: 150,
      protects: true,
      incomeBonus: 200,
      crimeBonus: 25,
      fightBonus: 0.2,
      desc: "Street gang. Outside crew sends $200/mo. Crime rep +25 on release.",
    },
    {
      id: "corporation",
      name: "The Corporation",
      emoji: "💼",
      color: "#22d3ee",
      fee: 300,
      protects: true,
      incomeBonus: 350,
      crimeBonus: 12,
      fightBonus: 0.1,
      smartsBonus: 1,
      desc: "White-collar network. $350/mo income + smarts boost. Corporate crime.",
    },
    {
      id: "iron_wolves",
      name: "Iron Wolves MC",
      emoji: "🏍️",
      color: "#a855f7",
      fee: 120,
      protects: true,
      incomeBonus: 0,
      crimeBonus: 15,
      fightBonus: 0.4,
      desc: "Biker gang. Best fight protection. Feared in every block.",
    },
  ],

  PRISON_EVENTS: [
    {
      id: "good_food",
      weight: 8,
      msg: "Surprise: actual real food today. Whatever guard owed you comes through.",
      health: 6,
      happiness: 5,
    },
    {
      id: "fight_dodged",
      weight: 7,
      msg: "Brawl erupted near you — you slipped away clean. No damage.",
      happiness: 3,
    },
    {
      id: "good_behavior",
      weight: 5,
      msg: "🎉 Guard files a 'GOOD BEHAVIOR' report. Sentence reduced by 1 month!",
      jailReduction: 1,
      happiness: 10,
    },
    {
      id: "contraband_bust",
      weight: 4,
      msg: "⚠️ CELL SHAKEDOWN! Guard found your stash. All contraband confiscated.",
      contrabandLoss: true,
      infractions: 1,
      happiness: -12,
    },
    {
      id: "prison_riot",
      weight: 3,
      msg: "🚨 PRISON RIOT! Lockdown for 2 extra months. Everyone suffers.",
      solitaryAdd: 2,
      health: -8,
      happiness: -18,
    },
    {
      id: "cellmate_lesson",
      weight: 6,
      msg: "Your cellmate spills his trade secrets from 20 years inside.",
      crimeRep: 15,
      happiness: 5,
    },
    {
      id: "legal_win",
      weight: 3,
      msg: "⚖️ Your lawyer found a filing error! Sentence reduced by 3 months!",
      jailReduction: 3,
      happiness: 25,
    },
    {
      id: "sick",
      weight: 6,
      msg: "Prison flu sweeps the block. Medical care is a joke in here.",
      health: -14,
      happiness: -8,
    },
    {
      id: "fight_ambush",
      weight: 4,
      msg: "Ambushed near the showers. You took real damage.",
      health: -15,
      happiness: -10,
      infractions: 1,
    },
    {
      id: "phone_smuggled",
      weight: 5,
      msg: "Someone tossed a burner over the fence. Quick call to your crew.",
      happiness: 12,
      cashBonus: 100,
    },
    {
      id: "celebrity_inmate",
      weight: 3,
      msg: "A famous white-collar criminal lands in your block. You pick his brain.",
      smarts: 3,
      crimeRep: 8,
    },
    {
      id: "gambling_win",
      weight: 6,
      msg: "Won the underground poker game this month. Easy money.",
      cashBonus: 200,
      happiness: 10,
    },
    {
      id: "gambling_loss",
      weight: 6,
      msg: "Lost big at the underground poker table. Painful.",
      cashLoss: 120,
      happiness: -8,
    },
    {
      id: "find_contraband",
      weight: 4,
      msg: "Found a shiv stashed behind the toilet. Could be useful.",
      contrabandGain: "shiv",
    },
    {
      id: "snitch_beats",
      weight: 3,
      msg: "The block found out someone snitched. Wasn't you — but chaos ensued.",
      health: -5,
      happiness: -5,
    },
    {
      id: "guard_tip",
      weight: 5,
      msg: "A guard tips you off about a transfer. You hustle for favors.",
      happiness: 6,
      rep: 3,
    },
    {
      id: "workout_partner",
      weight: 7,
      msg: "Found an elite workout partner this month. Extra gains.",
      health: 8,
      rep: 2,
    },
    {
      id: "commissary_bonus",
      weight: 5,
      msg: "Prison commissary ran a promo. You stocked up cheap.",
      cashBonus: 50,
      happiness: 4,
    },
  ],

  PRISON_BRIBE_TIERS: [
    {
      id: "small",
      name: "Small Favor",
      emoji: "💵",
      cost: 400,
      desc: "Guard looks the other way on violations. 20% chance to cut 1 month.",
      chance: 0.2,
      reduction: 1,
    },
    {
      id: "medium",
      name: "Regular Payoff",
      emoji: "💰",
      cost: 1000,
      desc: "Guard activates phone privileges. +$200/mo income for 3 months.",
      chance: 1.0,
      incomeMonths: 3,
      income: 200,
    },
    {
      id: "big",
      name: "Big Bribe",
      emoji: "🤑",
      cost: 3000,
      desc: "Guard arranges early release paperwork. 50% chance to cut up to 5 months.",
      chance: 0.5,
      reduction: 5,
    },
  ],

  PRISON_ESCAPE_BASE_CHANCE: 0.08,
  PRISON_ESCAPE_FAIL_PENALTY: 18,
  PRISON_FIGHT_CHANCE: 0.1,
  PRISON_GANG_PROTECTION_COST: 200,

  /* ── Health & Wellness Activities ── */
  WELLNESS: [
    {
      id: "gym",
      name: "Gym Session",
      icon: "fa-dumbbell",
      cost: 30,
      energy: 15,
      health: 6,
      happiness: 3,
      smarts: 0,
      stress: -3,
      cooldown: 0,
      desc: "Lift weights and build strength.",
    },
    {
      id: "yoga",
      name: "Yoga Class",
      icon: "fa-person-rays",
      cost: 25,
      energy: 10,
      health: 4,
      happiness: 5,
      smarts: 0,
      stress: -5,
      cooldown: 0,
      desc: "Stretch your body and relax your mind.",
    },
    {
      id: "meditate",
      name: "Meditation",
      icon: "fa-brain",
      cost: 0,
      energy: 8,
      health: 2,
      happiness: 4,
      smarts: 1,
      stress: -6,
      cooldown: 0,
      desc: "Free your mind. Reduce stress.",
    },
    {
      id: "jog",
      name: "Morning Jog",
      icon: "fa-person-running",
      cost: 0,
      energy: 12,
      health: 5,
      happiness: 2,
      smarts: 0,
      stress: -2,
      cooldown: 0,
      desc: "A quick run around the block.",
    },
    {
      id: "read",
      name: "Read a Book",
      icon: "fa-book-open",
      cost: 15,
      energy: 5,
      health: 0,
      happiness: 3,
      smarts: 3,
      stress: -2,
      cooldown: 0,
      desc: "Expand your mind with literature.",
    },
    {
      id: "spa",
      name: "Spa Day",
      icon: "fa-hot-tub-person",
      cost: 200,
      energy: 5,
      health: 3,
      happiness: 10,
      smarts: 0,
      stress: -10,
      cooldown: 3,
      desc: "Full relaxation. Premium pampering.",
    },
    {
      id: "haircut",
      name: "New Haircut",
      icon: "fa-scissors",
      cost: 40,
      energy: 5,
      health: 0,
      happiness: 6,
      smarts: 0,
      stress: -1,
      cooldown: 2,
      desc: "Fresh look, fresh confidence.",
    },
    {
      id: "therapy",
      name: "Therapy Session",
      icon: "fa-comments",
      cost: 150,
      energy: 5,
      health: 2,
      happiness: 8,
      smarts: 1,
      stress: -8,
      cooldown: 1,
      desc: "Talk through your problems.",
    },
    {
      id: "hike",
      name: "Nature Hike",
      icon: "fa-mountain-sun",
      cost: 10,
      energy: 18,
      health: 7,
      happiness: 6,
      smarts: 0,
      stress: -4,
      cooldown: 0,
      desc: "Explore the wilderness.",
    },
    {
      id: "martial",
      name: "Martial Arts",
      icon: "fa-hand-fist",
      cost: 60,
      energy: 20,
      health: 5,
      happiness: 4,
      smarts: 1,
      stress: -3,
      cooldown: 0,
      desc: "Train discipline and self-defense.",
    },
    {
      id: "swim",
      name: "Swimming",
      icon: "fa-person-swimming",
      cost: 20,
      energy: 14,
      health: 6,
      happiness: 4,
      smarts: 0,
      stress: -3,
      cooldown: 0,
      desc: "Full-body workout in the pool.",
    },
    {
      id: "cooking",
      name: "Cooking Class",
      icon: "fa-utensils",
      cost: 80,
      energy: 8,
      health: 3,
      happiness: 5,
      smarts: 2,
      stress: -2,
      cooldown: 1,
      desc: "Learn to cook healthy meals.",
    },
  ],
};

// Compact number formatter: returns a short string (no $ sign)
function shortNumber(n, digits = 1) {
  if (n === null || n === undefined) return "0";
  const negative = n < 0;
  let x = Math.abs(Number(n) || 0);
  if (!isFinite(x)) return (negative ? "-" : "") + "Infinity";

  if (x < 1000) {
    // show integer for small numbers, avoid decimals
    return (negative ? "-" : "") + Math.floor(x).toLocaleString();
  }

  const units = ["k", "m", "b", "t", "q", "Q", "s", "S", "o", "n"];
  const exponent = Math.floor(Math.log10(x));
  const idx = Math.floor(exponent / 3) - 1; // 0 -> k
  if (idx < units.length) {
    const scale = Math.pow(10, (idx + 1) * 3);
    const value = x / scale;
    return (
      (negative ? "-" : "") +
      value.toFixed(digits).replace(/\.0+$|(?<=\.[0-9]*)0+$/g, "") +
      units[idx]
    );
  }

  // For very large numbers beyond our unit list, use scientific notation compactly
  const exp = Math.floor(Math.log10(x));
  const mant = x / Math.pow(10, exp);
  return (
    (negative ? "-" : "") +
    mant.toFixed(digits).replace(/\.0+$|(?<=\.[0-9]*)0+$/g, "") +
    "e" +
    exp
  );
}

function displayMoney(n) {
  const v = Number(n) || 0;
  if (Math.abs(v) >= 1000) return "$" + shortNumber(v, 1);
  return "$" + v.toFixed(2);
}

const game = {
  state: {
    playerName: "Player",
    country: null,
    countryProfile: null,
    age: 18 * 12,
    cash: CONFIG.STARTING_CASH,
    stats: { health: 100, energy: 100, happiness: 50, smarts: 20 },
    job: null,
    edu: { current: null, progress: 0, degrees: [], loans: 0, gpa: 0 },
    skills: {}, // { skillId: xp }
    inventory: [],
    startups: [],
    jail: 0,
    // Travel / Migration
    travel: {
      migrating: false,
      targetCountry: null,
      method: null, // 'legal' | 'illegal'
      monthsLeft: 0,
      totalMonths: 0,
      visaDenied: 0,
      timesTraveled: 0,
      caughtIllegally: 0,
      countryWarningShown: 0,
    },
    // Crime State
    crime: {
      rep: 0,
      heat: 0,
      history: [],
      skills: {
        stealth: 0,
        intimidation: 0,
        hacking: 0,
        street_smarts: 0,
        chemistry: 0,
        planning: 0,
      },
      lawyer: null, // retained lawyer id
      lawyerMonthsLeft: 0,
      drugEmpire: {
        tier: null, // null | 'dealer' | 'lab' | 'network' | 'cartel'
        income: 0,
        territory: 0,
        turfWars: 0,
        monthsActive: 0,
        bribed: false, // paid off local cops this month
        deaHeat: 0, // 0-100 DEA investigation level
      },
    },
    // Wellness
    wellness: { cooldowns: {}, totalSessions: 0 },
    // Relationships
    relationship: {
      status: "single", // single, dating, engaged, married, divorced
      partner: null, // partner config id
      partnerName: "",
      monthsTogether: 0,
      love: 0, // 0-100
      trust: 0, // 0-100
      prenup: "none",
      weddingType: null,
      marriageMonth: 0,
      fights: 0,
      divorces: 0,
      children: [], // { name, age (months), adopted: bool }
      childExpenses: 0,
      lastBirthMonth: 0,
      sideRelationships: [], // [{ id, partnerId, partnerName, type, love, monthsTogether, monthlyExpense }]
    },
    // Pets
    pets: [], // { id, name, type, ageMonths, maxAge, happiness }
    // Prison
    prison: {
      monthsServed: 0,
      totalSentence: 0,
      reputation: 0,
      gangProtection: false,
      gangId: null,
      escapeAttempts: 0,
      prisonJob: null,
      earnings: 0,
      infractions: 0,
      solitary: 0,
      contraband: [],
      guardBribed: false,
      bribeIncomeMonthsLeft: 0,
      yardDoneThisMonth: false,
      fightTrainBonus: false,
      workoutBoosted: false,
      crimeRepBonus: 0,
      eventLog: [],
    },
    // New Sections
    casino: {
      wins: 0,
      losses: 0,
      net: 0,
      lifetimeSpins: 0,
      streak: 0,
      bestPayout: 0,
      lastOutcome: "",
      lastGame: "",
      lastBet: 0,
      lastWin: 0,
      wagered: 0,
      paidOut: 0,
      history: [],
    },
    politics: {
      influence: 0,
      role: null,
      termLeft: 0,
      bribesTaken: 0,
      lawsPassed: 0,
    },

    economy: {
      interestRate: 0.05,
      inflation: 0.03,
      gdpGrowth: 0.02,
      sentiment: 0.5,
      news: [],
    },
    finance: {
      lastMonth: {
        income: 0,
        taxes: 0,
        livingCosts: 0,
        totalExpenses: 0,
        netCashflow: 0,
      },
    },
    life: {
      maxHealth: 100,
      chronicStress: 0,
      greed: 0,
      riskDebt: 0,
      legalRecord: 0,
      opportunitiesLost: 0,
      burnout: 0,
      retired: false,
      dead: false,
      deathReason: "",
      endingSummary: null,
      retirementOfferedAtAge: 0,
      telemetryRecorded: false,
      lastDeathRiskPct: 0,
    },
    runStats: {
      careerMonths: 0,
      startupMonths: 0,
      crimeActions: 0,
      marketTrades: 0,
      hustleActions: 0,
      wealthMonths: 0,
      bankruptMonths: 0,
      monthsPlayed: 0,
    },
    onboarding: {
      active: true,
      completed: false,
      skipped: false,
      month: 0,
      step: 0,
      seenSteps: [],
    },
    telemetry: {
      runs: [],
      totalRuns: 0,
    },
    wealth: {
      properties: {},
      franchises: {},
      bonds: 0,
      dividends: {},
      dividendPrices: {},
      channels: [],
      lastMonthly: {
        income: 0,
        expenses: 0,
        notes: "No passive cashflow yet.",
      },
    },
    bank: {
      checking: 0,
      savings: 0,
      creditScore: 640,
      historyMonths: 0,
      creditCard: {
        balance: 0,
        limit: 2000,
        apr: 0.239,
        missedPayments: 0,
      },
      loans: [],
      cds: [],
      lastMonthly: {
        income: 0,
        expenses: 0,
        notes: "No bank activity yet.",
      },
    },
    assets: {},
    portfolioHistory: [],
    gameplay: {
      fastForwardMonths: 1,
      actionStreak: 0,
      bestActionStreak: 0,
      currentMonthActions: 0,
      legendScore: 0,
      achievements: {},
      wasBankrupt: false,
      lastNetWorth: CONFIG.STARTING_CASH,
    },
  },

  init() {
    /* ── Storage availability check ── */
    try {
      localStorage.setItem("__storageTest", "1");
      localStorage.removeItem("__storageTest");
    } catch (e) {
      setTimeout(
        () =>
          app.toast(
            "⚠️ Browser storage unavailable. Use Export Save to keep your progress.",
            "warning",
          ),
        2000,
      );
    }

    const saved = localStorage.getItem("GreedigoSave");
    if (saved) {
      try {
        this.state = JSON.parse(saved);
        // Schema update for crime
        if (!this.state.crime)
          this.state.crime = { rep: 0, heat: 0, history: [] };
        // New section migrations
        if (!this.state.casino)
          this.state.casino = {
            wins: 0,
            losses: 0,
            net: 0,
            lifetimeSpins: 0,
          };
        this.state.casino.streak = this.state.casino.streak ?? 0;
        this.state.casino.bestPayout = this.state.casino.bestPayout ?? 0;
        this.state.casino.lastOutcome = this.state.casino.lastOutcome ?? "";
        this.state.casino.lastGame = this.state.casino.lastGame ?? "";
        this.state.casino.lastBet = this.state.casino.lastBet ?? 0;
        this.state.casino.lastWin = this.state.casino.lastWin ?? 0;
        this.state.casino.wagered = this.state.casino.wagered ?? 0;
        this.state.casino.paidOut = this.state.casino.paidOut ?? 0;
        this.state.casino.history = this.state.casino.history ?? [];
        if (!this.state.politics)
          this.state.politics = {
            influence: 0,
            role: null,
            termLeft: 0,
            bribesTaken: 0,
            lawsPassed: 0,
          };
        if (!this.state.skills) this.state.skills = {};
        if (!this.state.wellness)
          this.state.wellness = { cooldowns: {}, totalSessions: 0 };
        if (!this.state.wellness.cooldowns) this.state.wellness.cooldowns = {};
        this.state.wellness.totalSessions =
          this.state.wellness.totalSessions ?? 0;
        if (!this.state.finance) {
          this.state.finance = {
            lastMonth: {
              income: 0,
              taxes: 0,
              livingCosts: 0,
              totalExpenses: 0,
              netCashflow: 0,
            },
          };
        }
        if (!this.state.finance.lastMonth) {
          this.state.finance.lastMonth = {
            income: 0,
            taxes: 0,
            livingCosts: 0,
            totalExpenses: 0,
            netCashflow: 0,
          };
        }
        if (!this.state.edu)
          this.state.edu = {
            current: null,
            progress: 0,
            degrees: [],
            loans: 0,
            gpa: 0,
          };
        if (!this.state.edu.loans) this.state.edu.loans = 0;
        if (!this.state.life) {
          this.state.life = {
            maxHealth: 100,
            chronicStress: 0,
            greed: 0,
            riskDebt: 0,
            legalRecord: 0,
            opportunitiesLost: 0,
            burnout: 0,
            retired: false,
            dead: false,
            deathReason: "",
            endingSummary: null,
            retirementOfferedAtAge: 0,
          };
        }
        this.state.life.maxHealth = this.state.life.maxHealth ?? 100;
        this.state.life.chronicStress = this.state.life.chronicStress ?? 0;
        this.state.life.greed = this.state.life.greed ?? 0;
        this.state.life.riskDebt = this.state.life.riskDebt ?? 0;
        this.state.life.legalRecord = this.state.life.legalRecord ?? 0;
        this.state.life.opportunitiesLost =
          this.state.life.opportunitiesLost ?? 0;
        this.state.life.burnout = this.state.life.burnout ?? 0;
        this.state.life.retired = this.state.life.retired ?? false;
        this.state.life.dead = this.state.life.dead ?? false;
        this.state.life.deathReason = this.state.life.deathReason ?? "";
        this.state.life.endingSummary = this.state.life.endingSummary ?? null;
        this.state.life.retirementOfferedAtAge =
          this.state.life.retirementOfferedAtAge ?? 0;
        this.state.life.telemetryRecorded =
          this.state.life.telemetryRecorded ?? false;
        this.state.life.lastDeathRiskPct =
          this.state.life.lastDeathRiskPct ?? 0;
        // Character migration
        if (!this.state.playerName) this.state.playerName = "Player";
        if (!this.state.country) {
          this.state.country = null;
          this.state.countryProfile = null;
        }
        // Travel migration
        if (!this.state.travel)
          this.state.travel = {
            migrating: false,
            targetCountry: null,
            method: null,
            monthsLeft: 0,
            totalMonths: 0,
            visaDenied: 0,
            timesTraveled: 0,
            caughtIllegally: 0,
            countryWarningShown: 0,
          };
        // Advisor uses tracking
        if (!this.state.advisorUses) this.state.advisorUses = {};
        if (!this.state.runStats) {
          this.state.runStats = {
            careerMonths: 0,
            startupMonths: 0,
            crimeActions: 0,
            marketTrades: 0,
            hustleActions: 0,
            wealthMonths: 0,
            bankruptMonths: 0,
            monthsPlayed: 0,
          };
        }
        if (!this.state.onboarding) {
          this.state.onboarding = {
            active: true,
            completed: false,
            skipped: false,
            month: 0,
            step: 0,
            seenSteps: [],
          };
        }
        if (!this.state.onboarding.seenSteps)
          this.state.onboarding.seenSteps = [];
        if (!this.state.telemetry)
          this.state.telemetry = { runs: [], totalRuns: 0 };
        if (!this.state.telemetry.runs) this.state.telemetry.runs = [];
        this.state.telemetry.totalRuns = this.state.telemetry.totalRuns ?? 0;
        if (!this.state.wealth) {
          this.state.wealth = {
            properties: {},
            franchises: {},
            bonds: 0,
            dividends: {},
            dividendPrices: {},
            channels: [],
            lastMonthly: {
              income: 0,
              expenses: 0,
              notes: "No passive cashflow yet.",
            },
          };
        }
        if (!this.state.wealth.properties) this.state.wealth.properties = {};
        if (!this.state.wealth.franchises) this.state.wealth.franchises = {};
        if (!Array.isArray(this.state.wealth.channels))
          this.state.wealth.channels = [];
        this.state.wealth.bonds = this.state.wealth.bonds ?? 0;
        if (!this.state.wealth.dividends) this.state.wealth.dividends = {};
        if (!this.state.wealth.dividendPrices)
          this.state.wealth.dividendPrices = {};
        CONFIG.DIVIDEND_FUNDS.forEach((fund) => {
          this.state.wealth.dividendPrices[fund.id] =
            this.state.wealth.dividendPrices[fund.id] ?? fund.unitPrice;
          this.state.wealth.dividends[fund.id] =
            this.state.wealth.dividends[fund.id] ?? 0;
        });
        if (!this.state.wealth.lastMonthly) {
          this.state.wealth.lastMonthly = {
            income: 0,
            expenses: 0,
            notes: "No passive cashflow yet.",
          };
        }
        if (!this.state.bank) {
          this.state.bank = {
            checking: 0,
            savings: 0,
            creditScore: 640,
            historyMonths: 0,
            creditCard: {
              balance: 0,
              limit: CONFIG.BANK_PRODUCTS.creditCard.baseLimit,
              apr: CONFIG.BANK_PRODUCTS.creditCard.baseApr,
              missedPayments: 0,
            },
            loans: [],
            cds: [],
            lastMonthly: {
              income: 0,
              expenses: 0,
              notes: "No bank activity yet.",
            },
          };
        }
        this.state.bank.checking = this.state.bank.checking ?? 0;
        this.state.bank.savings = this.state.bank.savings ?? 0;
        this.state.bank.creditScore = this.state.bank.creditScore ?? 640;
        this.state.bank.historyMonths = this.state.bank.historyMonths ?? 0;
        if (!this.state.bank.creditCard) {
          this.state.bank.creditCard = {
            balance: 0,
            limit: CONFIG.BANK_PRODUCTS.creditCard.baseLimit,
            apr: CONFIG.BANK_PRODUCTS.creditCard.baseApr,
            missedPayments: 0,
          };
        }
        this.state.bank.creditCard.balance =
          this.state.bank.creditCard.balance ?? 0;
        this.state.bank.creditCard.limit =
          this.state.bank.creditCard.limit ??
          CONFIG.BANK_PRODUCTS.creditCard.baseLimit;
        this.state.bank.creditCard.apr =
          this.state.bank.creditCard.apr ??
          CONFIG.BANK_PRODUCTS.creditCard.baseApr;
        this.state.bank.creditCard.missedPayments =
          this.state.bank.creditCard.missedPayments ?? 0;
        if (!Array.isArray(this.state.bank.loans)) this.state.bank.loans = [];
        if (!Array.isArray(this.state.bank.cds)) this.state.bank.cds = [];
        if (!this.state.bank.lastMonthly) {
          this.state.bank.lastMonthly = {
            income: 0,
            expenses: 0,
            notes: "No bank activity yet.",
          };
        }
        this.state.runStats.hustleActions =
          this.state.runStats.hustleActions ?? 0;
        this.state.runStats.wealthMonths =
          this.state.runStats.wealthMonths ?? 0;
        if (!this.state.gameplay) {
          this.state.gameplay = {
            fastForwardMonths: 1,
            actionStreak: 0,
            bestActionStreak: 0,
            currentMonthActions: 0,
            legendScore: 0,
            achievements: {},
            wasBankrupt: false,
            lastNetWorth: this.getNetWorth
              ? this.getNetWorth()
              : CONFIG.STARTING_CASH,
          };
        }
        // Migration: relationship, pets, prison
        if (!this.state.relationship) {
          this.state.relationship = {
            status: "single",
            partner: null,
            partnerName: "",
            monthsTogether: 0,
            love: 0,
            trust: 0,
            prenup: "none",
            weddingType: null,
            marriageMonth: 0,
            fights: 0,
            divorces: 0,
            children: [],
            childExpenses: 0,
            lastBirthMonth: 0,
          };
        }
        // Migration: ensure lastBirthMonth exists
        if (this.state.relationship.lastBirthMonth === undefined) {
          this.state.relationship.lastBirthMonth = 0;
        }
        // Migration: ensure sideRelationships exists
        if (!this.state.relationship.sideRelationships) {
          this.state.relationship.sideRelationships = [];
        }
        if (!this.state.pets) this.state.pets = [];
        // Migration: crime skills/lawyer/drugEmpire
        if (!this.state.crime)
          this.state.crime = { rep: 0, heat: 0, history: [] };
        if (!this.state.crime.skills)
          this.state.crime.skills = {
            stealth: 0,
            intimidation: 0,
            hacking: 0,
            street_smarts: 0,
            chemistry: 0,
            planning: 0,
          };
        if (this.state.crime.lawyer === undefined)
          this.state.crime.lawyer = null;
        if (this.state.crime.lawyerMonthsLeft === undefined)
          this.state.crime.lawyerMonthsLeft = 0;
        if (!this.state.crime.drugEmpire)
          this.state.crime.drugEmpire = {
            tier: null,
            income: 0,
            territory: 0,
            turfWars: 0,
            monthsActive: 0,
            bribed: false,
            deaHeat: 0,
          };
        if (this.state.crime.drugEmpire.deaHeat === undefined)
          this.state.crime.drugEmpire.deaHeat = 0;
        if (!this.state.prison) {
          this.state.prison = {
            monthsServed: 0,
            totalSentence: 0,
            reputation: 0,
            gangProtection: false,
            gangId: null,
            escapeAttempts: 0,
            prisonJob: null,
            earnings: 0,
            infractions: 0,
            solitary: 0,
            contraband: [],
            guardBribed: false,
            bribeIncomeMonthsLeft: 0,
            yardDoneThisMonth: false,
            fightTrainBonus: false,
            workoutBoosted: false,
            crimeRepBonus: 0,
            eventLog: [],
          };
        }
        // Migrate existing prison saves with new fields
        const _p = this.state.prison;
        if (_p.gangId === undefined) _p.gangId = null;
        if (_p.contraband === undefined) _p.contraband = [];
        if (_p.guardBribed === undefined) _p.guardBribed = false;
        if (_p.bribeIncomeMonthsLeft === undefined)
          _p.bribeIncomeMonthsLeft = 0;
        if (_p.yardDoneThisMonth === undefined) _p.yardDoneThisMonth = false;
        if (_p.fightTrainBonus === undefined) _p.fightTrainBonus = false;
        if (_p.workoutBoosted === undefined) _p.workoutBoosted = false;
        if (_p.crimeRepBonus === undefined) _p.crimeRepBonus = 0;
        if (_p.eventLog === undefined) _p.eventLog = [];
        this.state.gameplay.fastForwardMonths =
          this.state.gameplay.fastForwardMonths ?? 1;
        this.state.gameplay.actionStreak =
          this.state.gameplay.actionStreak ?? 0;
        this.state.gameplay.bestActionStreak =
          this.state.gameplay.bestActionStreak ?? 0;
        this.state.gameplay.currentMonthActions =
          this.state.gameplay.currentMonthActions ?? 0;
        this.state.gameplay.legendScore = this.state.gameplay.legendScore ?? 0;
        this.state.gameplay.achievements =
          this.state.gameplay.achievements || {};
        this.state.gameplay.wasBankrupt =
          this.state.gameplay.wasBankrupt ?? false;
        this.state.gameplay.lastNetWorth =
          this.state.gameplay.lastNetWorth ?? CONFIG.STARTING_CASH;
        /* Addiction Engine v2 migrations */
        this.state.gameplay.monthlyChallenges =
          this.state.gameplay.monthlyChallenges ?? [];
        this.state.gameplay.challengeSnapshot =
          this.state.gameplay.challengeSnapshot ?? {};
        this.state.gameplay.challengesCompleted =
          this.state.gameplay.challengesCompleted ?? 0;
        this.state.gameplay.challengeStreak =
          this.state.gameplay.challengeStreak ?? 0;
        this.state.gameplay.bestChallengeStreak =
          this.state.gameplay.bestChallengeStreak ?? 0;
        this.state.gameplay.prestigeRun = this.state.gameplay.prestigeRun ?? 0;
        if (!this.state.prestige) this.state.prestige = {};
        if (!this.state.rival) this.state.rival = null;
        this.state.life.flashEventsAccepted =
          this.state.life.flashEventsAccepted ?? 0;
      } catch (e) {
        this.resetState();
      }
    } else {
      this.resetState();
    }

    this.initializeAssets();

    this.loadTelemetry();
    this.renderAll();
    app.bgEffect();
    this.maybeStartOnboarding();
    this.bindHotkeys();
    this._checkDailyBonus();

    if (this.state.life.dead || this.state.life.retired) {
      const end = this.state.life.endingSummary;
      if (end) {
        app.modal(
          this.state.life.dead
            ? "Timeline Ended: Death"
            : "Timeline Ended: Retirement",
          `Age ${end.age} | Net worth $${shortNumber(Math.floor(end.netWorth))}\n${end.reason}`,
          [{ text: "Close", cb: () => app.closeModal() }],
        );
      }
    }
  },

  resetState() {
    this.state = {
      playerName: "Player",
      country: null,
      countryProfile: null,
      age: 18 * 12,
      cash: CONFIG.STARTING_CASH,
      stats: { health: 100, energy: 100, happiness: 50, smarts: 20 },
      job: null,
      edu: { current: null, progress: 0, degrees: [] },
      skills: {},
      inventory: [],
      startups: [],
      jail: 0,
      travel: {
        migrating: false,
        targetCountry: null,
        method: null,
        monthsLeft: 0,
        totalMonths: 0,
        visaDenied: 0,
        timesTraveled: 0,
        caughtIllegally: 0,
        countryWarningShown: 0,
      },
      crime: {
        rep: 0,
        heat: 0,
        history: [],
        skills: {
          stealth: 0,
          intimidation: 0,
          hacking: 0,
          street_smarts: 0,
          chemistry: 0,
          planning: 0,
        },
        lawyer: null,
        lawyerMonthsLeft: 0,
        drugEmpire: {
          tier: null,
          income: 0,
          territory: 0,
          turfWars: 0,
          monthsActive: 0,
          bribed: false,
          deaHeat: 0,
        },
      },
      wellness: { cooldowns: {}, totalSessions: 0 },
      relationship: {
        status: "single",
        partner: null,
        partnerName: "",
        monthsTogether: 0,
        love: 0,
        trust: 0,
        prenup: "none",
        weddingType: null,
        marriageMonth: 0,
        fights: 0,
        divorces: 0,
        children: [],
        childExpenses: 0,
        lastBirthMonth: 0,
        sideRelationships: [],
      },
      pets: [],
      prison: {
        monthsServed: 0,
        totalSentence: 0,
        reputation: 0,
        gangProtection: false,
        gangId: null,
        escapeAttempts: 0,
        prisonJob: null,
        earnings: 0,
        infractions: 0,
        solitary: 0,
        contraband: [],
        guardBribed: false,
        bribeIncomeMonthsLeft: 0,
        yardDoneThisMonth: false,
        fightTrainBonus: false,
        workoutBoosted: false,
        crimeRepBonus: 0,
        eventLog: [],
      },
      casino: {
        wins: 0,
        losses: 0,
        net: 0,
        lifetimeSpins: 0,
        streak: 0,
        bestPayout: 0,
        lastOutcome: "",
        lastGame: "",
        lastBet: 0,
        lastWin: 0,
        wagered: 0,
        paidOut: 0,
        history: [],
      },
      politics: {
        influence: 0,
        role: null,
        termLeft: 0,
        bribesTaken: 0,
        lawsPassed: 0,
      },
      economy: {
        interestRate: 0.05,
        inflation: 0.02,
        gdpGrowth: 0.02,
        sentiment: 0.5,
        news: [],
      },
      finance: {
        lastMonth: {
          income: 0,
          taxes: 0,
          livingCosts: 0,
          totalExpenses: 0,
          netCashflow: 0,
        },
      },
      life: {
        maxHealth: 100,
        chronicStress: 0,
        greed: 0,
        riskDebt: 0,
        legalRecord: 0,
        opportunitiesLost: 0,
        burnout: 0,
        retired: false,
        dead: false,
        deathReason: "",
        endingSummary: null,
        retirementOfferedAtAge: 0,
        telemetryRecorded: false,
        lastDeathRiskPct: 0,
      },
      runStats: {
        careerMonths: 0,
        startupMonths: 0,
        crimeActions: 0,
        marketTrades: 0,
        hustleActions: 0,
        wealthMonths: 0,
        bankruptMonths: 0,
        monthsPlayed: 0,
      },
      onboarding: {
        active: true,
        completed: false,
        skipped: false,
        month: 0,
        step: 0,
        seenSteps: [],
      },
      telemetry: {
        runs: [],
        totalRuns: 0,
      },
      wealth: {
        properties: {},
        franchises: {},
        bonds: 0,
        dividends: {},
        dividendPrices: {},
        channels: [],
        lastMonthly: {
          income: 0,
          expenses: 0,
          notes: "No passive cashflow yet.",
        },
      },
      bank: {
        checking: 0,
        savings: 0,
        creditScore: 640,
        historyMonths: 0,
        creditCard: {
          balance: 0,
          limit: CONFIG.BANK_PRODUCTS.creditCard.baseLimit,
          apr: CONFIG.BANK_PRODUCTS.creditCard.baseApr,
          missedPayments: 0,
        },
        loans: [],
        cds: [],
        lastMonthly: {
          income: 0,
          expenses: 0,
          notes: "No bank activity yet.",
        },
      },
      assets: {},
      portfolioHistory: [],
      gameplay: {
        fastForwardMonths: 1,
        actionStreak: 0,
        bestActionStreak: 0,
        currentMonthActions: 0,
        legendScore: 0,
        achievements: {},
        wasBankrupt: false,
        lastNetWorth: CONFIG.STARTING_CASH,
        monthlyChallenges: [],
        challengeSnapshot: {},
        challengesCompleted: 0,
        challengeStreak: 0,
        bestChallengeStreak: 0,
        prestigeRun: 0,
      },
      prestige: {},
      rival: null,
    };
    this.initializeAssets();
    this.addNews("Market opens. Analysts predict volatility.");
  },

  initializeAssets() {
    if (!this.state.assets) this.state.assets = {};
    CONFIG.ASSETS.forEach((a) => {
      if (!this.state.assets[a.id]) {
        this.state.assets[a.id] = {
          price: a.base,
          history: [],
          owned: 0,
          trend: 0,
        };
        let p = a.base;
        for (let i = 0; i < 50; i++) {
          p = p * (1 + (Math.random() - 0.5) * a.vol);
          this.state.assets[a.id].history.push(p);
        }
        this.state.assets[a.id].price = p;
      }
    });

    if (!this.state.wealth.dividendPrices)
      this.state.wealth.dividendPrices = {};
    if (!this.state.wealth.dividends) this.state.wealth.dividends = {};
    CONFIG.DIVIDEND_FUNDS.forEach((fund) => {
      this.state.wealth.dividendPrices[fund.id] =
        this.state.wealth.dividendPrices[fund.id] ?? fund.unitPrice;
      this.state.wealth.dividends[fund.id] =
        this.state.wealth.dividends[fund.id] ?? 0;
    });
  },

  canAct() {
    if (this.state.life.dead || this.state.life.retired) {
      app.toast("Life run has ended. Reset to start a new timeline.", "error");
      return false;
    }
    return true;
  },

  setFastForward(months) {
    if (!this.state.gameplay) return;
    const allowed = [1, 6, 12];
    const selected = allowed.includes(months) ? months : 1;
    this.state.gameplay.fastForwardMonths = selected;
    document
      .querySelectorAll(".speed-btn")
      .forEach((el) => el.classList.remove("active"));
    const activeBtn = document.getElementById(`speed-${selected}`);
    if (activeBtn) activeBtn.classList.add("active");
    // Update the main advance button label
    const label = document.getElementById("advance-btn-label");
    if (label)
      label.innerText = selected > 1 ? `+${selected} Months` : "+1 Month";
    this.renderAll();
  },

  advanceBySpeed() {
    if (!this.canAct()) return;
    const months = this.state.gameplay?.fastForwardMonths || 1;
    if (months <= 1) {
      this.nextMonth();
      this.renderAll();
      return;
    }
    let advanced = 0;
    for (let i = 0; i < months; i++) {
      if (!this.canAct()) break;
      if (this.state.life.dead || this.state.life.retired) break;
      this.nextMonth();
      advanced++;
    }
    this.renderAll();
    if (advanced > 1) app.toast(`Advanced ${advanced} months`, "success");
  },

  bindHotkeys() {
    if (this._hotkeysBound) return;
    window.addEventListener("keydown", (event) => {
      const target = event.target;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable)
        return;

      if (event.code === "Space") {
        event.preventDefault();
        if (event.shiftKey) {
          const previous = this.state.gameplay.fastForwardMonths;
          this.state.gameplay.fastForwardMonths = 12;
          this.advanceBySpeed();
          this.state.gameplay.fastForwardMonths = previous;
        } else {
          this.advanceBySpeed();
        }
      }

      if (event.altKey && event.code === "KeyS") {
        event.preventDefault();
        this.saveGame();
      }
    });
    this._hotkeysBound = true;
  },

  registerAction(score = 1) {
    if (!this.state.gameplay) return;
    const g = this.state.gameplay;
    g.currentMonthActions += 1;
    g.actionStreak += 1;
    g.bestActionStreak = Math.max(g.bestActionStreak, g.actionStreak);
    g.legendScore += Math.max(1, Math.floor(score));

    if (g.actionStreak > 0 && g.actionStreak % 10 === 0) {
      SFX.play("hotStreak");
      app.log(
        `🔥 Hot streak x${g.actionStreak}! Momentum cash bonus incoming!`,
        "epic",
      );
    } else if (g.actionStreak > 0 && g.actionStreak % 5 === 0) {
      app.log(
        `⚡ Action streak x${g.actionStreak} — keep the momentum!`,
        "success",
      );
    }
  },

  decayActionStreak() {
    if (!this.state.gameplay) return;
    const g = this.state.gameplay;
    if (g.currentMonthActions === 0) {
      g.actionStreak = Math.max(0, g.actionStreak - 2);
    } else if (g.currentMonthActions >= 3) {
      const bonus = Math.min(12000, 500 + g.currentMonthActions * 200);
      this.modCash(bonus);
      SFX.play("bigCoin");
      this.modStat("happiness", 3);
      g.legendScore += 4;
      const tier =
        g.currentMonthActions >= 10
          ? "🚀🔥 INSANE"
          : g.currentMonthActions >= 6
            ? "🚀 EPIC"
            : "⚡ Solid";
      app.log(
        `${tier} momentum! +$${Math.round(bonus).toLocaleString()} bonus — ${g.currentMonthActions} actions this month!`,
        g.currentMonthActions >= 6 ? "epic" : "success",
      );
      if (g.currentMonthActions >= 8) FX.screenFlash("rgba(255,215,0,0.15)");
    }
    g.currentMonthActions = 0;
  },

  /* ── Daily Login Bonus ── */
  _checkDailyBonus() {
    const today = new Date().toDateString();
    const lastLogin = localStorage.getItem("GreedigoLastLogin");
    if (lastLogin === today) return;
    localStorage.setItem("GreedigoLastLogin", today);
    // Don't reward on very first session (no save yet)
    if (!this.state || this.state.age <= 18 * 12 + 2) return;

    const raw = parseInt(localStorage.getItem("GreedigoLoginStreak") || "0");
    const last = lastLogin ? new Date(lastLogin) : null;
    const yest = new Date();
    yest.setDate(yest.getDate() - 1);
    const streak =
      last && last.toDateString() === yest.toDateString() ? raw + 1 : 1;
    localStorage.setItem("GreedigoLoginStreak", String(streak));

    const base = 300;
    const bonus = base + streak * 120 + Math.floor(Math.random() * 400);
    const isMega = streak % 7 === 0 && streak > 0;
    const finalBonus = isMega ? bonus * 3 : bonus;

    setTimeout(() => {
      this.modCash(finalBonus);
      this._showDailyBonusBanner(finalBonus, streak, isMega);
    }, 1800);
  },

  _showDailyBonusBanner(amount, streak, isMega) {
    const ov = document.createElement("div");
    ov.className = "db-overlay";
    const banner = document.createElement("div");
    banner.className = "daily-bonus-banner";
    banner.innerHTML = `
      <div class="db-emoji">${isMega ? "💎" : streak >= 3 ? "🔥" : "🌅"}</div>
      <div class="db-title">${isMega ? "MEGA BONUS UNLOCKED!" : "Daily Return Bonus!"}</div>
      <div class="db-sub">Day ${streak} streak — welcome back!</div>
      <div class="db-amount">+$${amount.toLocaleString()}</div>
      <div class="db-streak">${streak >= 7 ? "🏆 7-day streak achiever!" : streak >= 3 ? "🔥 On a hot streak!" : "Come back tomorrow for more!"}</div>
      <button class="db-btn" id="db-close-btn">Collect & Play!</button>
    `;
    document.body.appendChild(ov);
    document.body.appendChild(banner);
    SFX.play("dailyBonus");
    FX.confetti();
    const close = () => {
      ov.remove();
      banner.remove();
    };
    document.getElementById("db-close-btn").addEventListener("click", close);
    ov.addEventListener("click", close);
  },

  /* ── Milestone Goal Indicator ── */
  renderMilestoneGoal() {
    const block = document.getElementById("milestone-goal-block");
    const labelEl = document.getElementById("mg-label");
    const fillEl = document.getElementById("mg-fill");
    const pctEl = document.getElementById("mg-pct");
    if (!block || !labelEl || !fillEl || !pctEl) return;

    const nw = this.getNetWorth();
    const milestones = [
      { label: "First $1,000", target: 1000 },
      { label: "First $5,000", target: 5000 },
      { label: "First $10,000", target: 10000 },
      { label: "First $25,000", target: 25000 },
      { label: "First $50,000", target: 50000 },
      { label: "First $100,000", target: 100000 },
      { label: "First $250,000", target: 250000 },
      { label: "First $500,000", target: 500000 },
      { label: "Millionaire club", target: 1000000 },
      { label: "Five Million", target: 5000000 },
    ];

    const next = milestones.find((m) => nw < m.target);
    if (!next) {
      block.style.display = "none";
      return;
    }

    block.style.display = "block";
    const prev = milestones[milestones.indexOf(next) - 1];
    const base = prev ? prev.target : 0;
    const pct = Math.min(
      100,
      Math.max(0, ((nw - base) / (next.target - base)) * 100),
    );
    labelEl.textContent = `→ ${next.label}`;
    fillEl.style.width = pct.toFixed(1) + "%";
    pctEl.textContent = pct.toFixed(0) + "%";
  },

  /* ── First Purchase Nudges ── */
  _checkFirstPurchaseNudges() {
    if (!this.state || this.state.life.dead || this.state.life.retired) return;
    const cash = this.state.cash;
    const inv = this.state.inventory || [];
    const hasVehicle = inv.some((i) =>
      ["bike", "civic", "tesla", "porsche"].includes(i),
    );
    const hasProperty =
      Object.values(this.state.wealth?.properties || {}).reduce(
        (a, b) => a + b,
        0,
      ) >= 1;

    if (cash >= 6000 && !hasVehicle && !this._nudgedCar) {
      this._nudgedCar = true;
      app.toast(
        "🚗 You can afford your first vehicle! Check Lifestyle →",
        "info",
      );
      app.log(
        "💡 Tip: You have enough for your first vehicle. Check Lifestyle!",
        "info",
      );
    }
    if (cash >= 250000 && !hasProperty && !this._nudgedProperty) {
      this._nudgedProperty = true;
      app.toast("🏠 Time to invest in property! Check Wealth →", "info");
      app.log(
        "💡 Tip: You have enough to start building a property portfolio!",
        "info",
      );
    }
    if (cash >= 45000 && !hasVehicle && this._nudgedCar && !this._nudgedTesla) {
      this._nudgedTesla = true;
      app.toast("⚡ You could upgrade to a Tesla Model 3. Status up!", "info");
    }
  },

  _checkNetWorthMilestone() {
    if (!this.state || this.state.age <= 18 * 12 + 6) return;
    const nw = this.getNetWorth();
    const crossed =
      this.state._nwMilestonesCrossed || (this.state._nwMilestonesCrossed = {});
    const milestones = [
      {
        val: 10000,
        label: "Five Figures!",
        emoji: "💵",
        sub: "You crossed $10,000 net worth!",
      },
      {
        val: 50000,
        label: "Fifty Grand!",
        emoji: "💸",
        sub: "Net worth hit $50,000. Respect.",
      },
      {
        val: 100000,
        label: "Six Figures!",
        emoji: "🤑",
        sub: "$100,000 net worth — welcome to the club.",
      },
      {
        val: 250000,
        label: "Quarter Million!",
        emoji: "🏦",
        sub: "Net worth: $250,000. You are crushing it.",
      },
      {
        val: 500000,
        label: "Half a Million!",
        emoji: "💰",
        sub: "$500K net worth. Most people never get here.",
      },
      {
        val: 1000000,
        label: "MILLIONAIRE!",
        emoji: "🏆",
        sub: "You are officially worth $1,000,000!",
        mega: true,
      },
      {
        val: 5000000,
        label: "MULTI-MILLIONAIRE!",
        emoji: "🚀",
        sub: "$5 Million net worth. Legendary status.",
        mega: true,
      },
      {
        val: 10000000,
        label: "DECA-MILLIONAIRE!",
        emoji: "👑",
        sub: "$10 MILLION. You are untouchable.",
        mega: true,
      },
    ];
    for (const m of milestones) {
      if (nw >= m.val && !crossed[m.val]) {
        crossed[m.val] = true;
        setTimeout(() => {
          SFX.play(m.mega ? "netWorthMilestone" : "epic");
          FX.confetti();
          if (m.mega) {
            FX.milestoneOverlay(m.label);
          } else {
            FX.screenFlash("rgba(255,215,0,0.25)");
            app.toast(`${m.emoji} ${m.label} — ${m.sub}`, "success");
          }
          app.log(`${m.emoji} ${m.label} — ${m.sub}`, "epic");
        }, 400);
        break; // one per month max
      }
    }
  },

  getAchievementDefinitions() {
    return [
      {
        id: "first_10k",
        title: "Five Figures",
        points: 10,
        reward: 500,
        check: () => this.getNetWorth() >= 10000,
      },
      {
        id: "first_100k",
        title: "Six Figure Arc",
        points: 25,
        reward: 2000,
        check: () => this.getNetWorth() >= 100000,
      },
      {
        id: "millionaire",
        title: "Millionaire",
        points: 70,
        reward: 10000,
        check: () => this.getNetWorth() >= 1000000,
      },
      {
        id: "grinder",
        title: "10-Year Survivor",
        points: 22,
        reward: 1500,
        check: () => this.state.runStats.monthsPlayed >= 120,
      },
      {
        id: "scholar",
        title: "Double Degree",
        points: 24,
        reward: 2500,
        check: () => (this.state.edu.degrees || []).length >= 2,
      },
      {
        id: "market_wolf",
        title: "Market Wolf",
        points: 24,
        reward: 1800,
        check: () => this.state.runStats.marketTrades >= 60,
      },
      {
        id: "crime_lord",
        title: "Crime Lord",
        points: 38,
        reward: 6000,
        check: () => this.state.crime.rep >= 500,
      },
      {
        id: "land_lord",
        title: "Property Baron",
        points: 30,
        reward: 4000,
        check: () =>
          Object.values(this.state.wealth.properties || {}).reduce(
            (a, b) => a + b,
            0,
          ) >= 3,
      },
      {
        id: "diversified",
        title: "Diversified",
        points: 28,
        reward: 3200,
        check: () =>
          CONFIG.ASSETS.filter((a) => (this.state.assets[a.id]?.owned || 0) > 0)
            .length >= 4,
      },
      {
        id: "comeback",
        title: "Comeback Story",
        points: 35,
        reward: 5000,
        check: () =>
          this.state.gameplay.wasBankrupt && this.getNetWorth() >= 75000,
      },
      // ── NEW ACHIEVEMENTS ──────────────────────────────────────────
      {
        id: "first_job",
        title: "Employee of the Month",
        points: 5,
        reward: 300,
        check: () => !!this.state.job,
      },
      {
        id: "car_owner",
        title: "Getting Around",
        points: 8,
        reward: 600,
        check: () =>
          this.state.inventory.some((i) =>
            ["bike", "civic", "tesla", "porsche"].includes(i),
          ),
      },
      {
        id: "homeowner",
        title: "Property Owner",
        points: 15,
        reward: 1500,
        check: () =>
          Object.values(this.state.wealth.properties || {}).reduce(
            (a, b) => a + b,
            0,
          ) >= 1,
      },
      {
        id: "startup_ceo",
        title: "Startup CEO",
        points: 20,
        reward: 2000,
        check: () => (this.state.startups || []).length > 0,
      },
      {
        id: "love_struck",
        title: "Love Struck",
        points: 12,
        reward: 800,
        check: () =>
          this.state.relationship &&
          this.state.relationship.status !== "single",
      },
      {
        id: "parent",
        title: "New Parent",
        points: 20,
        reward: 2500,
        check: () => (this.state.relationship?.children || []).length > 0,
      },
      {
        id: "debt_free",
        title: "Debt Free",
        points: 18,
        reward: 1800,
        check: () =>
          (this.state.bank?.loans?.length || 0) === 0 &&
          (this.state.bank?.creditCard?.balance || 0) < 100 &&
          (this.state.edu?.loans || 0) < 100,
      },
      {
        id: "multimillionaire",
        title: "Multi-Millionaire",
        points: 100,
        reward: 25000,
        check: () => this.getNetWorth() >= 5000000,
      },
      {
        id: "speed_run",
        title: "Speed Runner",
        points: 45,
        reward: 8000,
        check: () => this.state.life.retired && this.state.age / 12 <= 35,
      },
      {
        id: "crime_master",
        title: "Street God",
        points: 55,
        reward: 12000,
        check: () => (this.state.crime?.rep || 0) >= 1000,
      },
      {
        id: "casino_addict",
        title: "Casino Regular",
        points: 15,
        reward: 1000,
        check: () => (this.state.casino?.lifetimeSpins || 0) >= 50,
      },
      {
        id: "high_saver",
        title: "High Saver",
        points: 20,
        reward: 2500,
        check: () => (this.state.bank?.savings || 0) >= 50000,
      },
      {
        id: "politician",
        title: "Political Power",
        points: 25,
        reward: 3000,
        check: () => !!this.state.politics?.role,
      },
      {
        id: "drug_lord",
        title: "Cartel Boss",
        points: 60,
        reward: 15000,
        check: () => this.state.crime?.drugEmpire?.tier === "cartel",
      },
      {
        id: "pet_owner",
        title: "Pet Parent",
        points: 8,
        reward: 400,
        check: () => (this.state.pets || []).length > 0,
      },
      {
        id: "social_butterfly",
        title: "Social Butterfly",
        points: 10,
        reward: 500,
        check: () =>
          (this.state.relationship?.sideRelationships || []).length >= 1,
      },
    ];
  },

  checkAchievements() {
    if (!this.state.gameplay) return;
    const g = this.state.gameplay;
    const defs = this.getAchievementDefinitions();
    defs.forEach((achievement) => {
      if (g.achievements[achievement.id]) return;
      if (!achievement.check()) return;

      g.achievements[achievement.id] = true;
      g.legendScore += achievement.points;
      if (achievement.reward > 0) this.modCash(achievement.reward);
      FX.confetti();
      FX.milestoneOverlay(
        achievement.title,
        `Legend +${achievement.points}${achievement.reward ? " | Cash +$" + shortNumber(achievement.reward) : ""}`,
      );
      FX.screenShake("lg");
      SFX.play("achievement");
      app.toast("Achievement: " + achievement.title, "epic");
    });
  },

  loadTelemetry() {
    try {
      const raw = localStorage.getItem("GreedigoTelemetry");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.runs)) {
        this.state.telemetry.runs = parsed.runs.slice(-500);
        this.state.telemetry.totalRuns = parsed.totalRuns || parsed.runs.length;
      }
    } catch (err) {
      this.state.telemetry = { runs: [], totalRuns: 0 };
    }
  },

  saveTelemetry() {
    try {
      localStorage.setItem(
        "GreedigoTelemetry",
        JSON.stringify({
          runs: this.state.telemetry.runs.slice(-500),
          totalRuns: this.state.telemetry.totalRuns,
        }),
      );
    } catch (e) {
      /* storage full — silently skip */
    }
  },

  classifyPrimaryPath() {
    const r = this.state.runStats;
    const scores = {
      career: r.careerMonths,
      startup: r.startupMonths,
      crime: r.crimeActions * 1.2,
      market: r.marketTrades * 0.8,
      hustle: (r.hustleActions || 0) * 0.9,
      wealth: (r.wealthMonths || 0) * 1.1,
    };
    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  },

  estimateDeathRiskPct() {
    const health = this.state.stats.health;
    const ageYears = this.state.age / 12;
    const life = this.state.life;
    const riskExposure = this.getRiskExposure();
    let deathRisk = 0;
    if (health < 30) deathRisk += (30 - health) * 0.0012; // scaled down
    if (ageYears > 58) deathRisk += (ageYears - 58) * 0.0006;
    deathRisk += life.chronicStress * 0.0002;
    deathRisk += life.riskDebt * 0.0002;
    deathRisk += riskExposure * 0.003;
    return Math.max(0, Math.min(95, deathRisk * 100));
  },

  getTelemetrySnapshot() {
    const runs = this.state.telemetry.runs || [];
    if (!runs.length)
      return {
        winRateByPath: "N/A",
        medianLife: "N/A",
        bankruptcyRate: "N/A",
      };

    const wins = runs.filter((r) => r.won).length;
    const bankrupt = runs.filter((r) => r.bankrupt).length;
    const ages = runs.map((r) => r.ageYears).sort((a, b) => a - b);
    const mid = Math.floor(ages.length / 2);
    const medianLife =
      ages.length % 2 === 0
        ? ((ages[mid - 1] + ages[mid]) / 2).toFixed(1)
        : ages[mid].toFixed(1);

    const pathNames = {
      career: "Career",
      startup: "Startup",
      crime: "Crime",
      market: "Market",
      hustle: "Hustle",
      wealth: "Wealth",
    };
    const pathWinRate =
      Object.keys(pathNames)
        .map((path) => {
          const pool = runs.filter((r) => r.primaryPath === path);
          if (!pool.length) return null;
          const pwins = pool.filter((r) => r.won).length;
          return `${pathNames[path]} ${((pwins / pool.length) * 100).toFixed(0)}%`;
        })
        .filter(Boolean)
        .join(" · ") || "No data yet";

    return {
      winRateByPath: pathWinRate,
      medianLife: `${medianLife}y`,
      bankruptcyRate: `${((bankrupt / runs.length) * 100).toFixed(0)}%`,
    };
  },

  finalizeRunTelemetry(outcome) {
    if (this.state.life.telemetryRecorded) return;
    const ageYears = this.state.age / 12;
    const netWorth = this.getNetWorth();
    const path = this.classifyPrimaryPath();
    const record = {
      outcome,
      ageYears: Number(ageYears.toFixed(2)),
      netWorth: Number(netWorth.toFixed(0)),
      bankrupt: netWorth < 0,
      won:
        outcome === "retired" &&
        netWorth >= CONFIG.SAFE_RETIREMENT_NETWORTH &&
        !this.state.life.dead,
      primaryPath: path,
      playerName: this.state.playerName || "Unknown",
      country: this.state.country || "Unknown",
      deathReason:
        this.state.life.deathReason ||
        (outcome === "retired" ? "Retired" : "Unknown"),
      at: Date.now(),
    };

    this.state.telemetry.runs.push(record);
    if (this.state.telemetry.runs.length > 500)
      this.state.telemetry.runs.shift();
    this.state.telemetry.totalRuns += 1;
    this.state.life.telemetryRecorded = true;
    this.saveTelemetry();
    this.savePastLife(record);
  },

  savePastLife(record) {
    try {
      const raw = localStorage.getItem("GreedigoPastLives");
      const lives = raw ? JSON.parse(raw) : [];
      lives.push(record);
      if (lives.length > 50) lives.shift();
      localStorage.setItem("GreedigoPastLives", JSON.stringify(lives));
    } catch (e) {}
  },

  getPastLives() {
    try {
      const raw = localStorage.getItem("GreedigoPastLives");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  maybeStartOnboarding() {
    const o = this.state.onboarding;
    if (!o || o.completed || o.skipped || !o.active) return;
    if (this.state.age > 18 * 12 + CONFIG.ONBOARDING_MONTHS) {
      o.active = false;
      o.completed = true;
      return;
    }
    TUT.show(0);
  },

  maybeAdvanceOnboarding() {
    const o = this.state.onboarding;
    if (!o || !o.active || o.completed || o.skipped) return;
    if (o.month > CONFIG.ONBOARDING_MONTHS) {
      o.active = false;
      o.completed = true;
      TUT.complete();
      return;
    }
    // milestones: months 1-8 map to steps 1-8
    const milestones = [1, 2, 3, 4, 5, 6, 8, 10];
    const idx = milestones.indexOf(o.month);
    if (idx !== -1) TUT.show(idx + 1);
  },

  showOnboardingStep(stepIndex) {
    // Delegated to TUT — kept for backwards compat
    TUT.show(stepIndex);
  },

  getNetWorth() {
    let assetsVal = 0;
    CONFIG.ASSETS.forEach((a) => {
      const asset = this.state.assets[a.id];
      if (asset) assetsVal += asset.price * asset.owned;
    });

    const wealth = this.state.wealth || {};
    const bank = this.state.bank || {};

    const propertyVal = CONFIG.PROPERTIES.reduce((acc, prop) => {
      const units = wealth.properties?.[prop.id] || 0;
      return acc + units * prop.cost;
    }, 0);

    const franchiseVal = CONFIG.FRANCHISES.reduce((acc, franchise) => {
      const units = wealth.franchises?.[franchise.id] || 0;
      return acc + units * franchise.cost;
    }, 0);

    const dividendVal = CONFIG.DIVIDEND_FUNDS.reduce((acc, fund) => {
      const units = wealth.dividends?.[fund.id] || 0;
      const price = wealth.dividendPrices?.[fund.id] ?? fund.unitPrice;
      return acc + units * price;
    }, 0);

    const bondVal = (wealth.bonds || 0) * CONFIG.BOND_UNIT_PRICE;

    const bankDeposits =
      (bank.checking || 0) +
      (bank.savings || 0) +
      (bank.cds || []).reduce((sum, cd) => sum + (cd.balance || 0), 0);
    const bankDebt =
      (bank.creditCard?.balance || 0) +
      (bank.loans || []).reduce((sum, loan) => sum + (loan.principal || 0), 0);

    return (
      this.state.cash +
      assetsVal +
      propertyVal +
      franchiseVal +
      dividendVal +
      bondVal +
      bankDeposits -
      bankDebt
    );
  },

  getRiskExposure() {
    const portfolioValue = CONFIG.ASSETS.reduce((acc, a) => {
      const asset = this.state.assets[a.id];
      if (!asset) return acc;
      return acc + asset.price * asset.owned;
    }, 0);

    const riskyPortfolio = CONFIG.ASSETS.reduce((acc, a) => {
      if (a.vol < 0.08) return acc;
      const asset = this.state.assets[a.id];
      if (!asset) return acc;
      return acc + asset.price * asset.owned;
    }, 0);

    const riskyShare = portfolioValue > 0 ? riskyPortfolio / portfolioValue : 0;
    const startupPressure = Math.min(1.5, this.state.startups.length * 0.35);
    const heatPressure = this.state.crime.heat / 80;
    const debtPressure =
      this.state.cash < 0
        ? Math.min(1.5, Math.abs(this.state.cash) / 20000)
        : 0;

    return riskyShare * 1.2 + startupPressure + heatPressure + debtPressure;
  },

  recordGreed(amount, reason) {
    this.state.life.greed = Math.max(
      0,
      Math.min(250, this.state.life.greed + amount),
    );
    if (amount > 0) {
      this.state.life.riskDebt = Math.min(
        300,
        this.state.life.riskDebt + amount * 0.35,
      );
      if (this.state.life.greed > 90 && Math.random() < 0.12) {
        this.addNews(
          `Greed warning: ${reason}. Long-term consequences intensifying.`,
        );
      }
    }
  },

  evaluateLifePressure(monthlyExpenses = 0) {
    const life = this.state.life;
    const ageYears = this.state.age / 12;
    const jobStress = this.state.job ? (this.state.job.stress || 0) * 0.45 : 0;
    const heatStress = this.state.crime.heat * 0.35;
    const moneyStress =
      this.state.cash < monthlyExpenses
        ? 20
        : this.state.cash < monthlyExpenses * 2
          ? 10
          : 0;
    const startupStress = this.state.startups.length * 6;
    const bankDebt =
      (this.state.bank?.creditCard?.balance || 0) +
      (this.state.bank?.loans || []).reduce(
        (sum, loan) => sum + (loan.principal || 0),
        0,
      );
    const debtStress =
      this.state.edu.loans > 0 ? Math.min(18, this.state.edu.loans / 25000) : 0;
    const bankingStress = bankDebt > 0 ? Math.min(22, bankDebt / 18000) : 0;
    const totalStress =
      jobStress +
      heatStress +
      moneyStress +
      startupStress +
      debtStress +
      bankingStress;

    life.chronicStress = Math.max(
      0,
      Math.min(220, life.chronicStress + (totalStress - 28) * 0.08),
    );
    life.burnout = Math.max(
      0,
      Math.min(100, life.burnout + (totalStress - 40) * 0.06),
    );

    const ageDecay = Math.max(0, (ageYears - 45) * 0.03);
    const overRisk = this.getRiskExposure();
    const countryHealthMult = this.state.countryProfile
      ? CONFIG.getCountryModifiers(this.state.countryProfile).healthDecayMult
      : 1.0;
    const healthDecay =
      (0.2 +
        ageDecay +
        life.chronicStress / 95 +
        life.riskDebt / 180 +
        overRisk * 0.35 +
        (this.state.stats.happiness < 30 ? 0.45 : 0)) *
      countryHealthMult;

    this.modStat("health", -healthDecay);

    if (totalStress > 65 || overRisk > 1.5 || life.greed > 110) {
      life.maxHealth = Math.max(35, life.maxHealth - 0.22 - overRisk * 0.05);
      this.state.stats.health = Math.min(
        this.state.stats.health,
        life.maxHealth,
      );
    }

    if (life.burnout > 70 && Math.random() < 0.15) {
      life.opportunitiesLost += 1;
      this.modStat("happiness", -3);
      this.addNews("Burnout cost you a major opportunity.");
    }

    if (life.greed > 120 && Math.random() < 0.2) {
      life.opportunitiesLost += 1;
      life.legalRecord += 1;
      this.addNews("Your reputation for greed closed doors in elite circles.");
    }
  },

  maybeOfferRetirement() {
    if (this.state.life.dead || this.state.life.retired) return;
    const ageYears = Math.floor(this.state.age / 12);
    const netWorth = this.getNetWorth();
    const eligible =
      ageYears >= CONFIG.RETIREMENT_AGE &&
      netWorth >= CONFIG.SAFE_RETIREMENT_NETWORTH;
    if (!eligible) return;
    if (this.state.life.retirementOfferedAtAge === ageYears) return;

    this.state.life.retirementOfferedAtAge = ageYears;
    app.modal(
      "Retirement Decision",
      `You are ${ageYears} with net worth $${shortNumber(Math.floor(netWorth))}. Retire now and lock your legacy, or keep pushing with rising health risk?`,
      [
        {
          text: "Retire Now",
          cb: () => this.retire("Chose to retire while ahead"),
        },
        { text: "Keep Grinding", cb: () => app.closeModal() },
      ],
    );
  },

  promptCashOut() {
    if (!this.canAct()) return;
    const ageYears = Math.floor(this.state.age / 12);
    const netWorth = this.getNetWorth();
    const gap = CONFIG.SAFE_RETIREMENT_NETWORTH - netWorth;
    const position =
      gap <= 0
        ? "You are above the safe retirement line."
        : `You are $${shortNumber(Math.ceil(gap))} below the suggested safe retirement line.`;

    app.modal(
      "Cash Out Temptation",
      `Age ${ageYears}. Net worth $${shortNumber(Math.floor(netWorth))}.\n${position}\n\nDo you cash out now, or keep risking everything?`,
      [
        {
          text: "Cash Out Now",
          cb: () => this.retire("Cashed out under pressure"),
        },
        {
          text: "Keep Pushing",
          cb: () => app.closeModal(),
        },
      ],
    );
  },

  retire(reason = "Retired by choice") {
    if (this.state.life.retired || this.state.life.dead) return;
    this.state.life.retired = true;
    this.finalizeRunTelemetry("retired");
    this.state.life.endingSummary = {
      reason,
      age: Math.floor(this.state.age / 12),
      netWorth: this.getNetWorth(),
      greed: this.state.life.greed,
      legalRecord: this.state.life.legalRecord,
      opportunitiesLost: this.state.life.opportunitiesLost,
    };
    this.saveGame();
    app.modal(
      "Legacy Secured",
      `Retired at age ${this.state.life.endingSummary.age} with $${shortNumber(Math.floor(this.state.life.endingSummary.netWorth))} net worth.\nGreed Index: ${Math.floor(this.state.life.greed)} | Opportunities Lost: ${this.state.life.opportunitiesLost}`,
      [{ text: "Close", cb: () => app.closeModal() }],
    );
    this.renderAll();
  },

  die(reason = "Health collapse from prolonged over-risking") {
    if (this.state.life.dead || this.state.life.retired) return;
    this.state.life.dead = true;
    setTimeout(() => SFX.play("death"), 80);
    this.finalizeRunTelemetry("dead");
    this.state.life.deathReason = reason;
    const ageYrs = Math.floor(this.state.age / 12);
    const nw = this.getNetWorth();
    this.state.life.endingSummary = {
      reason,
      age: ageYrs,
      netWorth: nw,
      greed: this.state.life.greed,
      legalRecord: this.state.life.legalRecord,
      opportunitiesLost: this.state.life.opportunitiesLost,
    };
    this.saveGame();

    const rel = this.state.relationship;
    const overlay = document.getElementById("death-overlay");

    if (overlay) {
      // ── Populate overlay ──
      const causeEl = document.getElementById("death-cause-text");
      const ageEl = document.getElementById("death-stat-age");
      const nwEl = document.getElementById("death-stat-nw");
      const greedEl = document.getElementById("death-stat-greed");
      const legacyEl = document.getElementById("death-stat-legacy");
      const epitaphEl = document.getElementById("death-epitaph");
      const mourningEl = document.getElementById("death-mourning");

      if (causeEl) causeEl.innerText = reason;
      if (ageEl) ageEl.innerText = `${ageYrs} yrs`;
      if (nwEl) {
        const sign = nw < 0 ? "\u2212" : "+";
        nwEl.innerText = `${sign}$${shortNumber(Math.abs(Math.floor(nw)))}`;
        nwEl.style.color = nw >= 0 ? "#4ade80" : "#f87171";
      }
      if (greedEl) greedEl.innerText = Math.round(this.state.life.greed || 0);
      if (legacyEl)
        legacyEl.innerText = Math.round(this.state.gameplay?.legendScore || 0);

      // Epitaph
      const epitaphs = [
        "They worked hard. They played harder. The ledger never lies.",
        "Fortune favors the bold \u2014 but the bold still die.",
        "In the pursuit of more, they lost everything.",
        "A life lived on the edge. The edge won.",
        "The market never forgives. Neither does time.",
        "They chased the dream until it ran out of road.",
        "Every decision led here. Every coin spent or saved.",
        "Ambition is only as long as your heartbeat.",
        "Wealth without health is just a number in the dark.",
        "At the end, the score doesn\u2019t care who\u2019s keeping it.",
      ];
      const greed = Math.round(this.state.life.greed || 0);
      const epi = epitaphs[greed % epitaphs.length];
      if (epitaphEl) epitaphEl.innerText = `\u201c${epi}\u201d`;

      // Mourning
      if (mourningEl) {
        const parts = [];
        if (rel && rel.status === "married")
          parts.push(`${rel.partnerName} mourns your passing.`);
        const kids = rel?.children?.length || 0;
        if (kids > 0)
          parts.push(`${kids} child${kids > 1 ? "ren" : ""} left behind.`);
        mourningEl.innerText = parts.join("  ");
      }

      // ── Show overlay ──
      overlay.style.display = "flex";
      overlay.offsetHeight; // reflow
      overlay.classList.add("death-visible");
    } else {
      // Fallback modal
      let deathDesc = `You died at age ${ageYrs}.\n\nCause: ${reason}\nNet worth: $${shortNumber(Math.floor(nw))}`;
      if (rel && rel.status === "married")
        deathDesc += `\n\n${rel.partnerName} mourns your loss.`;
      if (rel && rel.children?.length > 0)
        deathDesc += `\n${rel.children.length} child${rel.children.length > 1 ? "ren" : ""} left behind.`;
      app.modal("\u{1F480} Death", deathDesc, [
        { text: "Accept Fate", cb: () => app.closeModal() },
      ]);
    }
    this.renderAll();
  },

  _closeDeath() {
    const overlay = document.getElementById("death-overlay");
    if (!overlay) return;
    overlay.classList.remove("death-visible");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 650);
  },

  startNewTimeline() {
    localStorage.removeItem("GreedigoSave");
    this.resetState();
    this.initializeAssets();
    this.state.onboarding = {
      active: true,
      completed: false,
      skipped: false,
      month: 0,
      step: 0,
      seenSteps: [],
    };
    if (typeof TUT !== "undefined") TUT.reset();

    // Reset advance button to original state
    const nextBtn = document.getElementById("main-advance-btn");
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.innerHTML = `<i class="fa-solid fa-forward"></i> <span id="advance-btn-label">+1 Month</span>`;
    }
    const cashoutBtn = document.getElementById("cashout-btn");
    if (cashoutBtn) cashoutBtn.disabled = false;
    document
      .querySelectorAll(".speed-btn")
      .forEach((btn) => (btn.disabled = false));
    document.body.classList.remove("run-ended");

    app.closeModal();
    charCreation.show();
  },

  checkSuddenDeath(context, baseRisk, reason) {
    if (this.state.life.dead || this.state.life.retired) return false;
    const healthPenalty =
      this.state.stats.health < 45 ? (45 - this.state.stats.health) * 0.004 : 0;
    const stressPenalty = this.state.life.chronicStress * 0.0012;
    const riskDebtPenalty = this.state.life.riskDebt * 0.0009;
    const totalRisk = Math.max(
      0,
      Math.min(0.9, baseRisk + healthPenalty + stressPenalty + riskDebtPenalty),
    );

    if (Math.random() < totalRisk) {
      this.die(`${reason} (${context})`);
      return true;
    }
    return false;
  },

  checkMortality() {
    if (this.state.life.dead || this.state.life.retired) return;
    const health = this.state.stats.health;
    const ageYears = this.state.age / 12;
    const life = this.state.life;
    const happiness = this.state.stats.happiness;
    const riskExposure = this.getRiskExposure();
    const cp = this.state.countryProfile;
    const safe = cp ? cp[3] : 5;
    const stab = cp ? cp[1] : 5;

    // --- Instant death: health = 0 ---
    if (health <= 0) {
      const zeroReasons = [
        "Massive heart attack after years of neglecting your health.",
        "Multiple organ failure — your body finally gave out.",
        "Cardiac arrest. Your heart simply stopped.",
        "Collapsed and never woke up. Total system shutdown.",
      ];
      this.die(zeroReasons[Math.floor(Math.random() * zeroReasons.length)]);
      return;
    }

    // --- Build death risk ---
    let deathRisk = 0;
    if (health < 30) deathRisk += (30 - health) * 0.0006; // was 0.002
    if (ageYears > 58) deathRisk += (ageYears - 58) * 0.0003; // was 0.001
    deathRisk += life.chronicStress * 0.00008; // was 0.0004
    deathRisk += life.riskDebt * 0.00008; // was 0.0003
    deathRisk += riskExposure * 0.0015; // was 0.005

    // Country safety/stability modifier
    if (cp) {
      const cMods = CONFIG.getCountryModifiers(cp);
      deathRisk *= cMods.deathRiskMult;
    }

    // --- Conflict zone random events (safety 1-2, stability 1-2) ---
    if (safe <= 2 && stab <= 1 && Math.random() < 0.002) {
      const warDeaths = [
        "Killed by a bomb strike while walking through your neighborhood.",
        "Caught in crossfire between armed militias. You didn't make it.",
        "A car bomb detonated near your home. You were killed instantly.",
        "Shot by a sniper while trying to get food from the market.",
        "An airstrike hit your building during the night.",
        "Killed in a mortar attack on your street.",
      ];
      this.die(warDeaths[Math.floor(Math.random() * warDeaths.length)]);
      return;
    }
    if (safe <= 1 && Math.random() < 0.0015) {
      const violenceDeaths = [
        "Murdered in a random act of violence. Your country offered no safety.",
        "Killed by armed robbers who raided your home.",
        "Shot during a protest that turned deadly.",
        "Caught in a terrorist attack while commuting.",
      ];
      this.die(
        violenceDeaths[Math.floor(Math.random() * violenceDeaths.length)],
      );
      return;
    }
    if (safe <= 2 && stab <= 2 && Math.random() < 0.001) {
      const unsafeDeaths = [
        "Died from an untreated infection — healthcare was unavailable.",
        "Killed in a gang-related shooting near your neighborhood.",
        "Died from contaminated water. The infrastructure was failing.",
        "Killed in a building collapse — no safety regulations existed.",
      ];
      this.die(unsafeDeaths[Math.floor(Math.random() * unsafeDeaths.length)]);
      return;
    }

    // --- Depression/suicide from extreme unhappiness + debt ---
    const totalDebt =
      (this.state.bank?.creditCard?.balance || 0) +
      (this.state.bank?.loans || []).reduce(
        (s, l) => s + (l.principal || 0),
        0,
      ) +
      (this.state.edu?.loans || 0);
    if (happiness <= 5 && totalDebt > 50000 && Math.random() < 0.0012) {
      this.die(
        "Died from severe depression brought on by crushing debt and despair.",
      );
      return;
    }
    if (happiness <= 3 && life.chronicStress > 80 && Math.random() < 0.0008) {
      this.die(
        "Took their own life after years of unbearable stress and hopelessness.",
      );
      return;
    }

    // --- Heart attack from low health + age ---
    if (health < 25 && ageYears > 40 && Math.random() < 0.0008) {
      this.die(
        "Suffered a fatal heart attack. Years of poor health caught up.",
      );
      return;
    }
    if (health < 15 && Math.random() < 0.001) {
      this.die("Massive stroke. Your body couldn't take it anymore.");
      return;
    }

    // --- Drug/alcohol related (high stress + low happiness) ---
    if (life.chronicStress > 85 && happiness < 20 && Math.random() < 0.0005) {
      const substance = [
        "Died from an accidental overdose while self-medicating chronic pain.",
        "Alcohol poisoning after years of heavy drinking to cope with stress.",
        "Liver failure from substance abuse driven by desperation.",
      ];
      this.die(substance[Math.floor(Math.random() * substance.length)]);
      return;
    }

    // --- Standard probabilistic death ---
    if (Math.random() < deathRisk) {
      // Context-aware reason selection
      let reason;
      if (life.riskDebt > 120) {
        const riskReasons = [
          "Fatal collapse after years of high-risk overextension.",
          "Your reckless lifestyle finally caught up to you. Heart failure at the worst time.",
          "Died from complications after ignoring every warning sign for years.",
        ];
        reason = riskReasons[Math.floor(Math.random() * riskReasons.length)];
      } else if (life.chronicStress > 90) {
        const stressReasons = [
          "Stress-induced aneurysm. You never learned to slow down.",
          "Heart gave out under crushing chronic stress.",
          "Died in your sleep from stress cardiomyopathy — broken heart syndrome.",
        ];
        reason =
          stressReasons[Math.floor(Math.random() * stressReasons.length)];
      } else if (ageYears > 70) {
        const oldReasons = [
          "Passed away peacefully in old age.",
          "Died of natural causes at a ripe old age.",
          "Your heart stopped quietly one night. Old age took you gently.",
          "Pneumonia in your later years. Your immune system just couldn't fight it.",
        ];
        reason = oldReasons[Math.floor(Math.random() * oldReasons.length)];
      } else if (health < 30) {
        const healthReasons = [
          "Heart attack from chronically poor health. No one was surprised.",
          "Organ failure after neglecting your health for too long.",
          "Collapsed on the street. Your body had been failing for months.",
        ];
        reason =
          healthReasons[Math.floor(Math.random() * healthReasons.length)];
      } else if (totalDebt > 100000) {
        const debtReasons = [
          "The stress of insurmountable debt triggered a fatal cardiac episode.",
          "Died from a stress-induced stroke, crushed under financial ruin.",
        ];
        reason = debtReasons[Math.floor(Math.random() * debtReasons.length)];
      } else {
        const genericReasons = [
          "An unexpected medical emergency. Life is fragile.",
          "A sudden accident. Gone too soon.",
          "Complications from an undiagnosed condition.",
          "A rare but fatal illness took you without warning.",
        ];
        reason =
          genericReasons[Math.floor(Math.random() * genericReasons.length)];
      }
      this.die(reason);
    }
  },

  saveGame(showToast = true) {
    try {
      localStorage.setItem("GreedigoSave", JSON.stringify(this.state));
      if (showToast) app.toast("Game Saved!", "success");
    } catch (e) {
      app.toast(
        "Save failed — storage full or unavailable. Use Export Save to download a backup.",
        "error",
      );
    }
  },

  exportSave() {
    try {
      const data = JSON.stringify(this.state, null, 2);
      const blob = new Blob([data], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `greedigo-save-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      app.toast("Save exported! Keep this file safe.", "success");
    } catch (e) {
      app.toast("Export failed.", "error");
    }
  },

  importSave() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (!data.age || !data.stats || !data.cash === undefined) {
            app.toast("Invalid save file.", "error");
            return;
          }
          app.modal(
            "Import Save",
            "This will overwrite your current game. Continue?",
            [
              {
                text: "Yes, Import",
                cb: () => {
                  this.state = data;
                  try {
                    localStorage.setItem("GreedigoSave", JSON.stringify(data));
                  } catch (_) {}
                  this.renderAll();
                  app.closeModal();
                  app.toast("Save imported successfully!", "success");
                  FX.confetti();
                },
              },
              { text: "Cancel", cb: () => app.closeModal() },
            ],
          );
        } catch (err) {
          app.toast("Failed to read save file.", "error");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  },

  addNews(msg) {
    this.state.economy.news.unshift({ msg, type: "info" });
    if (this.state.economy.news.length > 20) this.state.economy.news.pop();
    if (document.getElementById("ticker-text")) app._renderNews();
    app.log(msg);
  },

  nextMonth() {
    if (!this.canAct()) return;

    if (this.state.jail > 0) {
      this.handleJail();
      return;
    }

    this.state.age++;
    this.state.runStats.monthsPlayed += 1;
    this.state.onboarding.month += 1;
    this.state.stats.energy = 100;
    this.modStat("happiness", -1);

    // Age milestone messages
    if (this.state.age % 12 === 0) {
      const yr = Math.floor(this.state.age / 12);
      const nw = this.getNetWorth();
      const birthdayLines = {
        18: "🎂 18 — legally an adult. The world is wide open.",
        20: "🎂 The teenage years are behind you. Hustle harder.",
        25: "🎂 Quarter century. Time flies — make it count.",
        30: "🎂 Thirty. Some call it the new twenty. Prove them right.",
        35: "🎂 Thirty-five. Half the lifetime for some. How far have you come?",
        40: "🎂 Forty. Legacy starts here. What will they remember you for?",
        50: "🎂 Fifty. Wealth means nothing without wisdom — got both?",
        60: "🎂 Sixty. Slow down? Never. The grind never retires.",
        70: "🎂 Seventy years on this earth. A legend in the making.",
      };
      const line = birthdayLines[yr];
      if (line) {
        const wealthNote =
          nw >= 1e6
            ? ` Net worth: $${(nw / 1e6).toFixed(1)}M 💰`
            : nw >= 1000
              ? ` Net worth: $${Math.round(nw / 1000)}K`
              : "";
        app.log(line + wealthNote, "epic");
        SFX.play("epic");
        FX.screenFlash("rgba(255,215,0,0.18)");
      } else if (yr > 18) {
        app.log(`🎂 Happy Birthday! Age ${yr}.`, "info");
      }
    }

    // Decay Heat naturally
    if (this.state.crime.heat > 0) {
      this.state.crime.heat = Math.max(0, this.state.crime.heat - 5);
    }

    // Tick wellness cooldowns
    if (this.state.wellness) {
      Object.keys(this.state.wellness.cooldowns).forEach((k) => {
        if (this.state.wellness.cooldowns[k] > 0)
          this.state.wellness.cooldowns[k]--;
      });
    }

    const inflationMult = 1 + Math.max(-0.01, this.state.economy.inflation);
    const countryLivingMult = this.state.countryProfile
      ? CONFIG.getCountryModifiers(this.state.countryProfile).livingCostMult
      : 1.0;
    const housingCost = 700 * inflationMult * countryLivingMult;
    const foodCost = 280 * inflationMult * countryLivingMult;
    const utilitiesCost = 220 * inflationMult * countryLivingMult;
    const ownershipCost =
      this.state.inventory.length * 200 + this.state.startups.length * 150;
    const livingCosts = housingCost + foodCost + utilitiesCost + ownershipCost;

    let expenses = livingCosts;

    // Student Loans
    if (this.state.edu.loans > 0) {
      let interest = this.state.edu.loans * (0.06 / 12);
      this.state.edu.loans += interest;
      if (!this.state.edu.current) {
        // Must pay if not student
        let pay = Math.max(50, this.state.edu.loans * 0.01);
        expenses += pay;
        this.state.edu.loans -= pay;
      }
    }

    let income = 0;
    if (this.state.job) {
      this.state.runStats.careerMonths += 1;
      const track = CONFIG.CAREERS.find((t) => t.id === this.state.job.trackId);
      const level = track.levels[this.state.job.level];
      income += this.state.job.salary / 12;
      SFX.play("salary");
      this.state.job.performance += this.state.job.performance > 50 ? -2 : 1;
      let stressHit = level.stress / 10;
      if (this.state.job.performance < 30) stressHit *= 2;
      this.modStat("happiness", -stressHit);
      this.state.job.stress =
        Math.min(
          100,
          Math.max(0, (this.state.job.stress || 0) + level.stress * 0.06 - 1.5),
        ).toFixed(1) * 1;
      // Narrative journal entry
      const narratives = [
        `You clocked in another month as a ${level.title}. The grind continues.`,
        `Work was ${level.stress > 70 ? "brutal" : "steady"} this month as a ${level.title}.`,
        `Paycheck landed: $${shortNumber(Math.round(this.state.job.salary / 12))} from your ${level.title} role.`,
        `You put in the hours at ${track.name}. The ${this.state.job.performance > 70 ? "boss noticed your hard work" : "routine feels familiar"}.`,
      ];
      app.log(
        narratives[Math.floor(this.state.age % narratives.length)],
        "info",
      );

      if (this.state.job.performance < 10) {
        app.modal(
          "FIRED!",
          `You were terminated from ${level.title} due to poor performance.`,
          [{ text: "Pack Desk", cb: () => app.closeModal() }],
        );
        this.state.job = null;
      } else if (Math.random() < 0.05) this.triggerWorkEvent(track, level);
    }

    if (this.state.politics.role) {
      const r = CONFIG.POLITICS_ROLES.find(
        (x) => x.id === this.state.politics.role,
      );
      income += r.salary / 12;
      this.state.politics.termLeft--;
      if (this.state.politics.termLeft <= 0) {
        this.state.politics.role = null;
        app.modal("Term Limit", `Your term as ${r.name} has ended.`, [
          { text: "Retire from Office", cb: () => app.closeModal() },
        ]);
        // Influence decays after office
        this.state.politics.influence = Math.max(
          10,
          this.state.politics.influence * 0.8,
        );
      }
    }

    this.processStartups();
    if (this.state.startups.length > 0) {
      this.state.runStats.startupMonths += 1;
    }
    const wealthFlow = this.processWealthMonthly();
    income += wealthFlow.income;
    expenses += wealthFlow.expenses;
    if (wealthFlow.income > 0 || wealthFlow.expenses > 0) {
      this.state.runStats.wealthMonths =
        (this.state.runStats.wealthMonths || 0) + 1;
    }
    const bankFlow = this.processBankMonthly();
    income += bankFlow.income;
    expenses += bankFlow.expenses;
    let taxes = 0;
    if (income > 0) {
      const annualizedIncome = income * 12;
      let taxRate = 0.05;
      if (annualizedIncome > 250000) taxRate = 0.32;
      else if (annualizedIncome > 120000) taxRate = 0.24;
      else if (annualizedIncome > 60000) taxRate = 0.17;
      else if (annualizedIncome > 24000) taxRate = 0.1;
      // Country tax modifier
      if (this.state.countryProfile) {
        taxRate += CONFIG.getCountryModifiers(this.state.countryProfile).taxMod;
      }
      taxes = income * Math.min(0.65, taxRate);
      income -= taxes;
    }

    this.state.finance.lastMonth = {
      income,
      taxes,
      livingCosts,
      totalExpenses: expenses,
      netCashflow: income - expenses,
    };

    this.modCash(income - expenses);
    if (this.state.cash < 0) this.state.gameplay.wasBankrupt = true;
    if (this.state.cash < 0) this.state.runStats.bankruptMonths += 1;

    // Narrative life journal entry based on current state
    if (!this.state.job && this.state.startups.length === 0) {
      const noJobLines = [
        "Another month without a job. The savings are shrinking.",
        "You spend the days hustling but have no steady income.",
        "No paycheck this month. Time to find work — or make your own.",
      ];
      app.log(
        noJobLines[Math.floor(this.state.age % noJobLines.length)],
        "warning",
      );
    }
    if (this.state.stats.health < 35) {
      app.log(
        "Your body is breaking down. You really need to take care of yourself.",
        "error",
      );
    } else if (this.state.stats.happiness < 25) {
      app.log(
        "You feel empty. The grind is taking its toll on your soul.",
        "warning",
      );
    }
    this.decayActionStreak();
    this.evaluateLifePressure(expenses);
    this.processTravelTick();
    this.checkMortality();
    if (this.state.life.dead) return;
    this.checkCountryWarning();

    if (this.state.edu.current) {
      this.state.edu.progress++;
      let deg = CONFIG.DEGREES.find((d) => d.id === this.state.edu.current);
      if (this.state.edu.progress >= deg.duration) {
        this.state.edu.degrees.push(deg.id);
        this.state.edu.current = null;
        app.modal("Graduated!", `You earned a ${deg.name}!`, [
          { text: "Awesome", cb: () => app.closeModal() },
        ]);
      }
    }

    this.tickMarkets();
    this.checkAchievements();
    this.maybeAdvanceOnboarding();
    this.maybeOfferRetirement();
    this._checkFirstPurchaseNudges();
    this._checkNetWorthMilestone();
    this.renderMilestoneGoal();
    if (this.state.age % 6 === 0) this.saveGame(false);
  },

  handleJail() {
    if (this.state.life.dead || this.state.life.retired) return;

    // Switch to prison view
    app.setView("prison");

    this.state.jail--;
    this.state.age++;
    const p = this.state.prison;
    p.monthsServed++;
    // Reset monthly yard activity flag
    p.yardDoneThisMonth = false;
    p.workoutBoosted = false;

    if (this.state.gameplay) {
      this.state.gameplay.actionStreak = Math.max(
        0,
        this.state.gameplay.actionStreak - 3,
      );
      this.state.gameplay.currentMonthActions = 0;
    }

    // Prison base effects
    this.modStat("happiness", -10);
    this.modStat("health", -3);
    this.modStat("energy", -15);

    // ── Relationship damage ──
    if (
      this.state.relationship.status === "married" ||
      this.state.relationship.status === "dating"
    ) {
      this.state.relationship.love = Math.max(
        0,
        this.state.relationship.love - 8,
      );
      this.state.relationship.trust = Math.max(
        0,
        this.state.relationship.trust - 5,
      );
      if (this.state.relationship.love < 10 && Math.random() < 0.15) {
        const wasMarried = this.state.relationship.status === "married";
        app.toast(
          wasMarried
            ? "Your spouse filed for divorce while you're inside."
            : "Your partner left you.",
          "error",
        );
        if (wasMarried) this._processDivorce(true);
        else {
          this.state.relationship.status = "single";
          this.state.relationship.partner = null;
        }
      }
    }

    // ── Solitary confinement ──
    if (p.solitary > 0) {
      p.solitary--;
      this.modStat("happiness", -15);
      this.modStat("health", -2);
      app.log(
        `🔒 Solitary confinement — ${p.solitary} months remaining. Dark in here.`,
      );
    }

    // ── Prison fights (gang/shiv reduce risk) ──
    const hasShiv = p.contraband && p.contraband.includes("shiv");
    const fightChance = p.gangId
      ? 0.04
      : p.gangProtection
        ? 0.04
        : CONFIG.PRISON_FIGHT_CHANCE;
    if (Math.random() < fightChance) {
      if (hasShiv && Math.random() < 0.65) {
        // Won the fight
        p.reputation = Math.min(100, p.reputation + 5);
        this.modStat("happiness", 3);
        app.toast(
          "⚔️ Someone tried you — your shiv changed their mind. Reputation up.",
          "success",
        );
      } else {
        this.modStat("health", -12);
        this.modStat("happiness", -8);
        p.infractions++;
        const hadFightBonus = p.fightTrainBonus;
        if (hadFightBonus) {
          this.modStat("health", 5); // partial recovery
          app.toast(
            "💥 Taken a hit, but your fight training paid off. Less damage.",
            "warning",
          );
        } else {
          app.toast("🩸 Got jumped in the block. Injuries sustained.", "error");
          FX.screenShake("sm");
        }
        if (Math.random() < 0.3 && !p.gangId) {
          p.solitary += 2;
          app.toast("Sent to solitary confinement for fighting.", "error");
        }
      }
    }

    // ── Prison job pay ──
    if (p.prisonJob) {
      const job = CONFIG.PRISON_JOBS.find((j) => j.id === p.prisonJob);
      if (job) {
        p.earnings += job.pay;
        this.modCash(job.pay);
        this.modStat("happiness", -job.stressHit);
        if (job.smartsBonus) this.modStat("smarts", job.smartsBonus);
        if (job.healthBonus) this.modStat("health", job.healthBonus);
        if (job.repBonus)
          p.reputation = Math.min(100, p.reputation + job.repBonus);
        if (job.repHit) {
          p.reputation = Math.max(0, p.reputation + job.repHit);
          // Informant risk: inmates may find out
          if (job.risk > 0 && Math.random() < job.risk) {
            this.modStat("health", -18);
            p.infractions++;
            app.toast(
              "😤 Inmates found out you're snitching. Beaten badly.",
              "error",
            );
            FX.screenShake("sm");
          }
        } else if (job.risk > 0 && Math.random() < job.risk) {
          this.modStat("health", -5);
          app.toast("Incident during prison work detail.", "warning");
        }
      }
    }

    // ── Gang membership: protection + income ──
    if (p.gangId) {
      const gang = CONFIG.PRISON_GANGS.find((g) => g.id === p.gangId);
      if (gang) {
        if (this.state.cash >= gang.fee) {
          this.modCash(-gang.fee);
          if (gang.incomeBonus > 0) {
            this.modCash(gang.incomeBonus);
            p.earnings += gang.incomeBonus;
          }
          if (gang.smartsBonus) this.modStat("smarts", gang.smartsBonus);
          p.reputation = Math.min(100, p.reputation + 1);
          p.gangProtection = true;
        } else {
          // Can't pay gang dues — kicked out
          p.gangId = null;
          p.gangProtection = false;
          app.toast(`Kicked out of ${gang.name} — couldn't pay dues.`, "error");
        }
      }
    } else if (p.gangProtection) {
      // Legacy gang protection (bought manually without gang)
      if (this.state.cash >= CONFIG.PRISON_GANG_PROTECTION_COST) {
        this.modCash(-CONFIG.PRISON_GANG_PROTECTION_COST);
      } else {
        p.gangProtection = false;
        app.toast("Can't afford gang protection anymore.", "error");
      }
    }

    // ── Bribe income ──
    if (p.bribeIncomeMonthsLeft > 0) {
      this.modCash(200);
      p.earnings += 200;
      p.bribeIncomeMonthsLeft--;
      app.log("📱 Bribed guard passes along your phone income. +$200.");
    }

    // ── Burner phone passive income ──
    if (p.contraband && p.contraband.includes("burner_phone")) {
      this.modCash(200);
      p.earnings += 200;
      app.log("📲 Burner phone earnings from your crew outside: +$200.");
    }

    // ── Hooch infraction risk ──
    if (p.contraband && p.contraband.includes("hooch") && Math.random() < 0.1) {
      p.infractions++;
      app.toast(
        "🍶 Guard spotted your hooch stash. Infraction added.",
        "warning",
      );
      const hIdx = p.contraband.indexOf("hooch");
      if (hIdx > -1) p.contraband.splice(hIdx, 1);
    }

    // ── Random monthly PRISON EVENT ──
    if (Math.random() < 0.55) {
      const events = CONFIG.PRISON_EVENTS;
      const totalWeight = events.reduce((s, e) => s + e.weight, 0);
      let rand = Math.random() * totalWeight;
      let chosenEvent = events[events.length - 1];
      for (const ev of events) {
        rand -= ev.weight;
        if (rand <= 0) {
          chosenEvent = ev;
          break;
        }
      }

      const ev = chosenEvent;
      let evMsg = ev.msg;

      if (ev.health) this.modStat("health", ev.health);
      if (ev.happiness) this.modStat("happiness", ev.happiness);
      if (ev.smarts) this.modStat("smarts", ev.smarts);
      if (ev.crimeRep) p.crimeRepBonus = (p.crimeRepBonus || 0) + ev.crimeRep;
      if (ev.jailReduction && ev.jailReduction > 0) {
        this.state.jail = Math.max(0, this.state.jail - ev.jailReduction);
      }
      if (ev.solitaryAdd) p.solitary += ev.solitaryAdd;
      if (ev.infractions) p.infractions += ev.infractions;
      if (ev.cashBonus) {
        this.modCash(ev.cashBonus);
        p.earnings += ev.cashBonus;
      }
      if (ev.cashLoss) this.modCash(-Math.min(this.state.cash, ev.cashLoss));
      if (ev.rep) p.reputation = Math.min(100, p.reputation + ev.rep);
      if (ev.contrabandLoss && p.contraband.length > 0) {
        p.contraband = [];
        evMsg += " All contraband gone.";
      }
      if (ev.contrabandGain) {
        if (!p.contraband.includes(ev.contrabandGain))
          p.contraband.push(ev.contrabandGain);
        evMsg += " Picked it up.";
      }

      p.eventLog = [
        { msg: evMsg, month: p.monthsServed },
        ...(p.eventLog || []),
      ].slice(0, 8);
      app.log(`⚡ [Prison Event] ${evMsg}`);
      if (ev.jailReduction)
        app.toast(
          `⚖️ Sentence cut by ${ev.jailReduction} month${ev.jailReduction > 1 ? "s" : ""}!`,
          "epic",
        );
      else if (ev.contrabandLoss)
        app.toast("🔦 Shakedown! Contraband confiscated.", "error");
      else if (ev.prison_riot || ev.solitaryAdd)
        app.toast("🚨 Prison riot! Extra time added.", "error");
    }

    // ── Jail stat decay ──
    this.state.crime.rep = Math.max(0, this.state.crime.rep - 5);
    this.state.crime.heat = Math.max(0, this.state.crime.heat - 10);
    this.state.life.maxHealth = Math.max(35, this.state.life.maxHealth - 0.12);
    this.state.life.legalRecord += 0.08;
    this.state.life.burnout = Math.min(100, this.state.life.burnout + 2);
    this.evaluateLifePressure(900);

    const prisonDeathRisk =
      0.003 +
      this.state.life.legalRecord * 0.004 +
      Math.min(0.1, this.state.jail * 0.0008) +
      (p.gangId || p.gangProtection ? -0.002 : 0.003) +
      p.infractions * 0.002;
    if (
      this.checkSuddenDeath(
        "Prison",
        prisonDeathRisk,
        "Died in custody — violence, medical neglect, or despair",
      )
    )
      return;
    this.checkMortality();

    if (this.state.jail <= 0) {
      // ── RELEASE ──
      p.prisonJob = null;
      p.gangProtection = false;
      p.gangId = null;
      p.solitary = 0;
      p.contraband = [];
      p.yardDoneThisMonth = false;
      // Apply accumulated crime rep bonus
      if (p.crimeRepBonus > 0) {
        this.state.crime.rep += p.crimeRepBonus;
        app.toast(
          `🏆 Prison connections paid off — +${p.crimeRepBonus} Crime Rep on release!`,
          "success",
        );
        p.crimeRepBonus = 0;
      }
      app.toast("🚪 Released from prison! The streets await.", "success");
      FX.screenFlash("gain");
      FX.confetti();
      app.setView("career");
    } else {
      app.log(
        `⛓️ Federal Prison — ${this.state.jail} months remaining. Stay sharp.`,
      );
    }
    this.renderAll();
  },

  processStartups() {
    this.state.startups.forEach((s) => {
      // 1. Costs (reduced overhead)
      const costs = {
        dev: s.staff.dev * CONFIG.STARTUP_ROLES.dev.salary,
        sales: s.staff.sales * CONFIG.STARTUP_ROLES.sales.salary,
        mkt: s.staff.mkt * CONFIG.STARTUP_ROLES.mkt.salary,
        exec: s.staff.exec * CONFIG.STARTUP_ROLES.exec.salary,
      };
      const totalSalaries = Object.values(costs).reduce((a, b) => a + b, 0);
      const teamSize = s.staff.dev + s.staff.sales + s.staff.mkt + s.staff.exec;
      const infra = 150 + s.market.users * 0.02;
      const managementOverhead = Math.pow(Math.max(1, teamSize), 1.05) * 35;
      const compliance = Math.max(0, s.market.users * 0.003);
      const burn = totalSalaries + infra + managementOverhead + compliance;
      s.financials.burn = burn;
      s.financials.cash -= burn;

      // 2. Product (devs are faster)
      const devPower =
        s.staff.dev * (s.staff.morale / 100) * (1 + s.staff.exec * 0.15);
      const founderPenalty = Math.max(0.75, 1 - this.state.life.burnout / 250);
      const newFeat = devPower * 1.2 * founderPenalty;
      const polish = devPower * 0.9 * founderPenalty;

      s.product.features += newFeat;
      s.product.bugs = Math.max(
        0,
        s.product.bugs - polish + newFeat * (0.2 - s.staff.dev * 0.015),
      );

      // 3. Growth (easier to get clients)
      const countryStartupMult = this.state.countryProfile
        ? CONFIG.getCountryModifiers(this.state.countryProfile).startupDiffMult
        : 1.0;
      const adjustedDifficulty = s.info.difficulty * countryStartupMult;
      const pmf = Math.min(
        1.0,
        (s.product.features / (35 * adjustedDifficulty)) * s.product.concept,
      );
      const reputationPenalty =
        this.state.life.legalRecord * 0.01 +
        this.state.life.opportunitiesLost * 0.008;
      s.market.pmf = Math.max(0.08, pmf - reputationPenalty);

      // Base Churn (lower)
      let churn = 0.025 + s.product.bugs / 300;
      churn = Math.max(0.005, Math.min(0.4, churn));

      // New Users = (Awareness * PMF) + (Sales), with better conversion
      const awareness =
        s.staff.mkt * CONFIG.STARTUP_ROLES.mkt.output +
        (Math.random() * s.market.users) / 100;
      const conversion = s.market.pmf * 0.22;
      let newUsers = awareness * conversion + s.staff.sales * 80 * s.market.pmf;
      newUsers *= 1 + (this.state.economy.sentiment - 0.4) * 0.4;
      if (teamSize > 25) newUsers *= 0.9;

      // Net
      s.market.users = Math.max(
        0,
        s.market.users + newUsers - s.market.users * churn,
      );

      // 4. Revenue (higher ARPU)
      const arpuBase =
        s.info.type === "biotech"
          ? 28
          : s.info.type === "saas"
            ? 18
            : s.info.type === "fintech"
              ? 20
              : s.info.type === "ai"
                ? 22
                : 13;
      const arpu = arpuBase * (1 - this.state.economy.inflation * 0.3);
      const rev = s.market.users * arpu;
      const tax = Math.max(0, rev - burn) * 0.1;
      s.financials.rev = rev - tax;
      s.financials.cash += rev - tax;

      // Valuation (Revenue * 12 * GrowthMultiple)
      const growth = newUsers / (s.market.users || 1);
      const mult = Math.max(
        2.0,
        4.0 + growth * 12 - this.state.economy.interestRate * 8,
      );
      s.financials.val = rev * 12 * mult;

      // 5. Events — morale drifts toward 70 (not random center)
      const moraleDrift = (70 - s.staff.morale) * 0.03;
      s.staff.morale = Math.max(
        5,
        Math.min(
          100,
          s.staff.morale + moraleDrift + (Math.random() - 0.45) * 3,
        ),
      );
      if (s.financials.cash < 0) s.financials.months_runway--;
      else s.financials.months_runway = s.financials.cash / (burn - rev + 1);

      if (s.financials.cash < 0 && Math.random() < 0.06) {
        this.state.life.riskDebt = Math.min(
          300,
          this.state.life.riskDebt + 0.8,
        );
      }

      if (teamSize >= 15 && s.financials.cash < burn * 2) {
        this.recordGreed(1.0, "Aggressive startup scaling without runway");
      }

      // Bankruptcy threshold: much more lenient
      if (s.financials.cash < -100000 || s.staff.morale <= 1) s.dead = true;
    });

    const before = this.state.startups.length;
    this.state.startups = this.state.startups.filter((s) => !s.dead);
    if (before > this.state.startups.length) {
      const failed = before - this.state.startups.length;
      this.state.life.opportunitiesLost += failed;
      this.state.life.riskDebt = Math.min(
        300,
        this.state.life.riskDebt + failed * 5,
      );
      this.modStat("happiness", -failed * 3);
      this.addNews(`${failed} startup(s) collapsed from weak fundamentals.`);
    }
  },

  // --- CAREER PRO ---
  getSkillLevel(id) {
    return Math.floor(Math.sqrt(this.state.skills[id] || 0));
  },

  gainSkillXP(id, amt) {
    if (!this.state.skills[id]) this.state.skills[id] = 0;
    this.state.skills[id] += amt;
    // visual feedback?
  },

  applyJob(trackId, levelIdx) {
    if (!this.canAct()) return;
    if (this.state.stats.energy < 10)
      return app.toast("Too tired to interview", "error");

    const track = CONFIG.CAREERS.find((t) => t.id === trackId);
    const level = track.levels[levelIdx];

    // Education Check
    if (level.reqEdu && !this.state.edu.degrees.includes(level.reqEdu))
      return app.toast(
        `HR Rejected: Need ${level.reqEdu.toUpperCase()}`,
        "error",
      );

    // Resume Scoring
    let score = 0;
    let maxScore = 0;
    const report = [];

    // 1. Qualified Education Score (Employers Prefer Relevant Degrees)
    // "Even if not strictly required, relevant degrees massively boost acceptance"
    const trackDegrees = {
      tech: ["cs"],
      corp: ["biz", "mba"],
      med: ["med"],
      service: ["biz"],
    };
    const preferred = trackDegrees[trackId] || [];

    // We expect candidates to be educated for a solid chance
    maxScore += 25;

    let eduPoints = 0;
    const hasPreferred = preferred.some((d) =>
      this.state.edu.degrees.includes(d),
    );
    const isStudyingPreferred = preferred.includes(this.state.edu.current);

    if (hasPreferred) {
      eduPoints = 25; // Perfect match - highly qualified
    } else if (isStudyingPreferred) {
      eduPoints = 15; // Currently studying (Student/Intern fit)
    } else if (this.state.edu.degrees.length > 0) {
      eduPoints = 5; // Has a degree (shows discipline at least)
    } else {
      // No degree, no study.
    }

    score += eduPoints;
    // Only complain about education if it was a major missing factor
    if (eduPoints < 10 && preferred.length > 0)
      report.push(
        "Education Mismatch (Preferred: " +
          preferred.join("/").toUpperCase() +
          ")",
      );

    // 2. Skill match
    for (const [skill, reqLvl] of Object.entries(level.reqSkill)) {
      maxScore += reqLvl;
      const myLvl = this.getSkillLevel(skill);
      score += Math.min(myLvl, reqLvl);
      if (myLvl < reqLvl) report.push(`Weak ${CONFIG.SKILLS[skill].name}`);
    }

    // IQ/Smarts Logic
    maxScore += 20;
    const smartsContrib = (this.state.stats.smarts / 100) * 20;
    score += smartsContrib;

    // Previous Job Logic (Promotion is easier)
    if (
      this.state.job &&
      this.state.job.trackId === trackId &&
      this.state.job.level === levelIdx - 1
    ) {
      score += 20; // 20 'free' points for internal promotion
    }

    const opportunityDrag =
      this.state.life.legalRecord * 0.03 +
      this.state.life.opportunitiesLost * 0.02 +
      this.state.life.burnout * 0.0015;
    if (this.state.life.legalRecord > 1)
      report.push("Background risk concerns");
    if (this.state.life.burnout > 65)
      report.push("Burnout signals in interview");
    const percentage = Math.max(
      levelIdx === 0 ? 0.9 : 0.02, // Entry-level jobs are 90% likely to accept
      Math.min(0.95, score / (maxScore || 1) - opportunityDrag),
    );
    this.modStat("energy", -10);
    app.updateStats();

    if (Math.random() < percentage) {
      // Offer Logic
      const baseSalary = level.salary;
      const signOn = Math.random() < 0.3 ? baseSalary * 0.1 : 0;

      let msg = `HR: "We were impressed."\nSalary: $${shortNumber(baseSalary)}`;
      if (signOn > 0) msg += `\nSign-on Bonus: $${shortNumber(signOn)}`;

      app.modal("Job Offer", msg, [
        {
          text: "Accept Offer",
          cb: () => {
            this.modCash(signOn);
            this.state.job = {
              trackId,
              level: levelIdx,
              performance: 50,
              politics: 10,
              salary: baseSalary,
              stress: 0, // Personal accumulation
            };
            SFX.play("jobGet");
            app.closeModal();
            this.renderAll();
          },
        },
        {
          text: "Negotiate (+10%)",
          cb: () => this.negotiateJob(trackId, levelIdx, baseSalary),
        },
      ]);
    } else {
      // FAIL
      // Add more flavor to rejections
      const reason = report.length > 0 ? report[0] : "Candidate fit issue";
      const fullFeedback = report.length > 1 ? report.join(", ") : reason;

      const excuses = [
        "We went with a candidate with more education.",
        "Your resume didn't pass the automated screen.",
        "We're looking for someone with more relevant background.",
        `Feedback: ${fullFeedback}`,
      ];
      const excuse = excuses[Math.floor(Math.random() * excuses.length)];

      app.modal("Rejection", `HR: "Unfortunately..."\n${excuse}`, [
        { text: "Okay", cb: () => app.closeModal() },
      ]);
    }
  },

  negotiateJob(trackId, levelIdx, baseSalary) {
    if (!this.canAct()) return;
    // Risk check taking Sales/Mgmt skill
    const persuasion = this.getSkillLevel("sales") + this.getSkillLevel("mgmt");
    const roll = Math.random() * 100;

    if (roll < persuasion * 5 + 30) {
      // Base 30% chance + skills
      const newSalary = baseSalary * 1.1;
      app.modal("Success!", `They agreed to $${shortNumber(newSalary)}`, [
        {
          text: "Take It",
          cb: () => {
            this.state.job = {
              trackId,
              level: levelIdx,
              performance: 50,
              politics: 10,
              salary: newSalary,
              stress: 0,
            };
            app.closeModal();
            this.renderAll();
          },
        },
      ]);
    } else {
      app.modal("Offer Rescinded", "They didn't like your attitude.", [
        { text: "Damn", cb: () => app.closeModal() },
      ]);
    }
  },

  performWork(type) {
    if (!this.canAct()) return;
    if (!this.state.job) return;
    if (this.state.stats.energy < 20) return app.toast("Exhausted", "error");
    this.modStat("energy", -20);

    const track = CONFIG.CAREERS.find((t) => t.id === this.state.job.trackId);
    const level = track.levels[this.state.job.level];

    // Gain XP based on job type
    level.xp.forEach((sk) => this.gainSkillXP(sk, 10));

    if (type === "hard") {
      this.state.job.performance += 5;
      this.state.stats.happiness -= 2;
      this.state.job.stress =
        Math.min(100, (this.state.job.stress || 0) + 5).toFixed(1) * 1;
      this.state.life.burnout = Math.min(100, this.state.life.burnout + 1.1);
      this.state.life.chronicStress = Math.min(
        220,
        this.state.life.chronicStress + 0.9,
      );
      if (this.state.job.stress > 88 || this.state.life.burnout > 92) {
        if (
          this.checkSuddenDeath(
            "Overwork",
            0.01 + this.state.job.stress * 0.0005,
            "Fatal stress event triggered by overwork and exhaustion",
          )
        ) {
          return;
        }
      }
      app.toast("Grinded tasks (+Perf, +Stress)", "info");
      this.registerAction(2);
    } else if (type === "network") {
      this.state.job.politics += 5;
      this.state.skills["mgmt"] = (this.state.skills["mgmt"] || 0) + 5;
      app.toast("Schmoozed Boss (+Politics)", "info");
      this.registerAction(2);
    } else if (type === "slack") {
      this.state.job.stress =
        Math.max(0, (this.state.job.stress || 0) - 10).toFixed(1) * 1;
      this.state.stats.happiness += 2;
      this.state.job.performance -= 2;
      app.toast("Slacked off (-Stress)", "success");
      this.registerAction(1);
    }

    this.renderAll();
  },
  askPromotion() {
    if (!this.canAct()) return;
    if (!this.state.job) return;
    const track = CONFIG.CAREERS.find((t) => t.id === this.state.job.trackId);
    if (this.state.job.level >= track.levels.length - 1)
      return app.toast("Top of ladder!", "info");

    const politics = this.state.job.politics || 0;
    const performance = this.state.job.performance;

    // Performance Review
    let feedback = "";
    if (performance < 70) feedback += "Performance is lacking. ";
    if (politics < 20) feedback += "Nobody knows who you are. ";

    const promotionDrag =
      this.state.life.legalRecord * 0.025 +
      this.state.life.opportunitiesLost * 0.012 +
      this.state.life.burnout * 0.001;
    if (performance >= 70 && politics >= 20 && Math.random() > promotionDrag) {
      this.applyJob(this.state.job.trackId, this.state.job.level + 1);
    } else {
      this.state.job.performance -= 5;
      if (!feedback) {
        feedback =
          "Leadership cited your long-term risk profile and reliability concerns.";
      }
      app.modal("Review Failed", `Boss says: "${feedback}"`, [
        { text: "Ok", cb: () => app.closeModal() },
      ]);
    }
  },
  quitJob() {
    if (!this.canAct()) return;
    this.state.job = null;
    this.renderAll();
  },

  // --- NEW CRIME SYSTEM ---

  launderHeat() {
    if (!this.canAct()) return;
    if (this.state.cash < 1000)
      return app.toast("Need $1k to launder", "error");
    if (this.state.crime.heat <= 0)
      return app.toast("No heat to clean", "info");
    this.modCash(-1000);
    this.state.crime.heat = Math.max(0, this.state.crime.heat - 20);
    app.toast("Money laundered — heat cooled off.", "success");
    this.renderAll();
  },

  // ── CRIME SKILL TRAINING ──────────────────────────────────────────────────
  trainCrimeSkill(skillId) {
    if (!this.canAct()) return;
    const s = CONFIG.CRIME_SKILLS.find((x) => x.id === skillId);
    if (!s) return;
    if (this.state.cash < s.trainCost)
      return app.toast(`Need $${shortNumber(s.trainCost)} to train`, "error");
    if (this.state.stats.energy < s.energyCost)
      return app.toast("Too tired to train", "error");
    this.modCash(-s.trainCost);
    this.modStat("energy", -s.energyCost);
    const prev = this.state.crime.skills[skillId] || 0;
    this.state.crime.skills[skillId] = Math.min(3000, prev + s.xpGain);
    const lvl = this._crimeSkillLevel(this.state.crime.skills[skillId]);
    app.toast(`${s.name} trained → ${lvl} (+${s.xpGain} XP)`, "success");
    this.renderAll();
  },

  _crimeSkillLevel(xp) {
    if (xp >= 2500) return "👑 Master";
    if (xp >= 1500) return "💀 Expert";
    if (xp >= 700) return "🔥 Advanced";
    if (xp >= 250) return "⚡ Skilled";
    if (xp >= 80) return "🌱 Novice";
    return "🔒 Untrained";
  },

  // ── LAWYER MANAGEMENT ─────────────────────────────────────────────────────
  hireLawyer(lawyerId) {
    if (!this.canAct()) return;
    const l = CONFIG.LAWYERS.find((x) => x.id === lawyerId);
    if (!l) return;
    if (
      l.reqDrugTier &&
      (!this.state.crime.drugEmpire.tier ||
        this._drugTierIndex(this.state.crime.drugEmpire.tier) <
          this._drugTierIndex(l.reqDrugTier))
    ) {
      return app.toast(
        "You need a drug empire at Network tier to access this attorney.",
        "error",
      );
    }
    if (l.monthlyCost > 0 && this.state.cash < l.monthlyCost)
      return app.toast(
        `Need $${shortNumber(l.monthlyCost)} first month retainer`,
        "error",
      );
    if (l.monthlyCost > 0) this.modCash(-l.monthlyCost);
    this.state.crime.lawyer = lawyerId;
    app.toast(
      `Retained: ${l.name}. Monthly retainer: $${shortNumber(l.monthlyCost)}`,
      "success",
    );
    this.renderAll();
  },

  fireLawyer() {
    if (!this.state.crime.lawyer) return;
    const l = CONFIG.LAWYERS.find((x) => x.id === this.state.crime.lawyer);
    this.state.crime.lawyer = null;
    app.toast(
      `Dismissed ${l ? l.name : "attorney"}. You are exposed.`,
      "warning",
    );
    this.renderAll();
  },

  // ── DRUG EMPIRE ───────────────────────────────────────────────────────────
  _drugTierIndex(tierId) {
    const order = ["dealer", "lab", "network", "cartel"];
    return order.indexOf(tierId);
  },

  startDrugOperation(tierId) {
    if (!this.canAct()) return;
    const tier = CONFIG.DRUG_TIERS.find((t) => t.id === tierId);
    if (!tier) return;

    const currentIdx = this._drugTierIndex(this.state.crime.drugEmpire.tier);
    const newIdx = this._drugTierIndex(tierId);

    if (newIdx <= currentIdx)
      return app.toast("Already at or above this tier", "error");
    if (newIdx > currentIdx + 1 && currentIdx >= 0)
      return app.toast("Must upgrade one tier at a time", "error");
    if (this.state.crime.rep < tier.reqRep)
      return app.toast(`Need ${tier.reqRep} Street Rep`, "error");
    if (
      tier.reqChem > 0 &&
      (this.state.crime.skills.chemistry || 0) < tier.reqChem
    )
      return app.toast(`Need ${tier.reqChem} Chemistry XP`, "error");
    if (this.state.cash < tier.setupCost)
      return app.toast(
        `Need $${shortNumber(tier.setupCost)} setup cash`,
        "error",
      );

    this.modCash(-tier.setupCost);
    this.state.crime.drugEmpire.tier = tierId;
    this.state.crime.drugEmpire.monthsActive = 0;
    this.state.crime.drugEmpire.bribed = false;
    if (tierId === "dealer") this.state.crime.drugEmpire.income = 1200;
    if (tierId === "lab") this.state.crime.drugEmpire.income = 9000;
    if (tierId === "network") this.state.crime.drugEmpire.income = 45000;
    if (tierId === "cartel") this.state.crime.drugEmpire.income = 300000;

    FX.screenFlash("gain");
    app.toast(
      `🏴 ${tier.name} launched. Passive income: $${shortNumber(this.state.crime.drugEmpire.income)}/mo`,
      "epic",
    );
    this.renderAll();
  },

  shutDownDrugOp() {
    if (!this.state.crime.drugEmpire.tier)
      return app.toast("No operation running", "info");
    this.state.crime.drugEmpire.tier = null;
    this.state.crime.drugEmpire.income = 0;
    this.state.crime.drugEmpire.deaHeat = 0;
    app.toast("Operation shut down and evidence destroyed.", "warning");
    this.renderAll();
  },

  bribeLocalCops() {
    if (!this.canAct()) return;
    const de = this.state.crime.drugEmpire;
    if (!de.tier) return app.toast("No active operation to protect", "error");
    const tierDef = CONFIG.DRUG_TIERS.find((t) => t.id === de.tier);
    const bribeCost = Math.round((de.income || 1000) * 0.18);
    if (this.state.cash < bribeCost)
      return app.toast(`Need $${shortNumber(bribeCost)} for bribes`, "error");
    this.modCash(-bribeCost);
    de.bribed = true;
    de.deaHeat = Math.max(0, de.deaHeat - 20);
    this.state.crime.heat = Math.max(0, this.state.crime.heat - 15);
    app.toast(
      `💵 Local cops paid off. Operation protected this month. ($${shortNumber(bribeCost)})`,
      "success",
    );
    this.renderAll();
  },

  expandTerritory() {
    if (!this.canAct()) return;
    const de = this.state.crime.drugEmpire;
    if (!de.tier) return app.toast("No operation to expand", "error");
    const cost = Math.round((de.income || 1000) * 0.5);
    if (this.state.cash < cost)
      return app.toast(`Need $${shortNumber(cost)} to muscle in`, "error");
    this.modCash(-cost);
    de.territory = Math.min(100, (de.territory || 0) + 15);
    de.income = Math.round(de.income * 1.15);
    de.turfWars = (de.turfWars || 0) + 1;
    this.state.crime.heat += 20;
    app.toast(
      `Territory expanded +15%. Income now $${shortNumber(de.income)}/mo. Rivals are angry.`,
      "warning",
    );
    this.renderAll();
  },

  processDrugEmpireMonthly() {
    const de = this.state.crime.drugEmpire;
    if (!de.tier) return;
    const tierDef = CONFIG.DRUG_TIERS.find((t) => t.id === de.tier);
    if (!tierDef) return;

    de.monthsActive = (de.monthsActive || 0) + 1;

    // Chemistry skill bonus to income (up to +40%)
    const chemBonus =
      1 +
      Math.min(0.4, ((this.state.crime.skills.chemistry || 0) / 3000) * 1.2);
    const actualIncome = Math.round(
      (tierDef.income[0] +
        Math.random() * (tierDef.income[1] - tierDef.income[0])) *
        chemBonus *
        (1 + (de.territory || 0) * 0.005),
    );
    de.income = actualIncome;
    this.modCash(actualIncome);
    this.state.runStats.crimeActions = this.state.runStats.crimeActions || 0;
    this.state.crime.heat += tierDef.heatPerMonth;
    de.deaHeat = Math.min(100, (de.deaHeat || 0) + tierDef.heatPerMonth * 0.6);
    this.state.crime.rep += Math.ceil(tierDef.heatPerMonth * 0.5);

    // Lawyer costs paid monthly
    if (this.state.crime.lawyer) {
      const lDef = CONFIG.LAWYERS.find((l) => l.id === this.state.crime.lawyer);
      if (lDef && lDef.monthlyCost > 0) {
        if (this.state.cash >= lDef.monthlyCost) {
          this.modCash(-lDef.monthlyCost);
        } else {
          this.state.crime.lawyer = null;
          app.toast(
            "Couldn't afford lawyer retainer — contract terminated.",
            "error",
          );
        }
      }
    }

    // Turf war random event
    if (de.turfWars > 0 && Math.random() < 0.15 * (de.turfWars * 0.3)) {
      const loss = Math.round(actualIncome * (0.2 + Math.random() * 0.4));
      this.modCash(-loss);
      this.modStat("health", -5);
      this.state.crime.heat += 15;
      app.toast(
        `🔫 Rival gang hit one of your spots. Lost $${shortNumber(loss)} and took hits.`,
        "error",
      );
    }

    // DEA raid chance
    if (!de.bribed) {
      const raidChance = tierDef.arrestRisk + (de.deaHeat / 100) * 0.22;
      if (Math.random() < raidChance) {
        const sentence =
          de.tier === "cartel"
            ? 120
            : de.tier === "network"
              ? 72
              : de.tier === "lab"
                ? 36
                : 10;
        const lawyer = this.state.crime.lawyer
          ? CONFIG.LAWYERS.find((l) => l.id === this.state.crime.lawyer)
          : CONFIG.LAWYERS[0];
        const reducedSentence = lawyer
          ? Math.max(1, Math.round(sentence * (1 - lawyer.jailReduction)))
          : sentence;

        // Dismiss charges?
        if (lawyer && Math.random() < lawyer.dismissChance) {
          if (lawyer.caseFee) this.modCash(-lawyer.caseFee);
          de.deaHeat = Math.max(0, de.deaHeat - 30);
          app.toast(
            `🚨 DEA Raid! ${lawyer.name} got it dismissed. Case fee: $${shortNumber(lawyer.caseFee)}`,
            "success",
          );
        } else {
          this.state.crime.drugEmpire.tier = null;
          this.state.crime.drugEmpire.income = 0;
          this.state.crime.drugEmpire.deaHeat = 0;
          this.state.jail = reducedSentence;
          this.state.prison.monthsServed = 0;
          this.state.prison.totalSentence = reducedSentence;
          this.state.prison.prisonJob = null;
          this.state.prison.gangProtection = false;
          this.state.prison.solitary = 0;
          this.state.prison.infractions = 0;
          this.state.life.legalRecord += Math.max(3, sentence / 12);
          FX.screenFlash("jail");
          app.modal(
            "🚨 DEA RAID!",
            `Your operation was busted. ${lawyer && lawyer.tier > 0 ? `${lawyer.name} negotiated ${sentence} → ${reducedSentence} months.` : `${reducedSentence} months federal.`}`,
            [{ text: "It's over", cb: () => app.closeModal() }],
          );
        }
        return;
      }
    }
    de.bribed = false; // bribe protection only lasts one month
  },

  commitCrime(id) {
    if (!this.canAct()) return;
    if (this.state.stats.energy < 30)
      return app.toast("Too exhausted", "error");

    const c = CONFIG.CRIMES.find((x) => x.id === id);
    if (!c) return;
    if (this.state.crime.rep < c.reqRep)
      return app.toast(`Need ${c.reqRep} Street Rep`, "error");

    const cr = this.state.crime; // shorthand used throughout this function
    this.state.runStats.crimeActions += 1;
    this.modStat("energy", -30);

    // ── Skill bonus (relevant skill XP → up to +30% success) ──────────────────
    const skillXp = this.state.crime.skills[c.skill] || 0;
    const skillBonus = Math.min(0.3, skillXp / 3000);

    // ── Other modifiers ────────────────────────────────────────────────────────
    const heatPenalty = this.state.crime.heat * 0.005;
    const smartsBonus = this.state.stats.smarts * 0.002;
    const legalPenalty = this.state.life.legalRecord * 0.012;

    let netChance =
      c.baseChance + skillBonus - heatPenalty - legalPenalty + smartsBonus;
    netChance = Math.max(0.05, Math.min(0.97, netChance));

    // ── Gain XP in relevant skill regardless of outcome ───────────────────────
    const skillDef = CONFIG.CRIME_SKILLS.find((s) => s.id === c.skill);
    if (skillDef)
      this.state.crime.skills[c.skill] = Math.min(
        3000,
        (this.state.crime.skills[c.skill] || 0) + 10,
      );

    if (Math.random() < netChance) {
      // ── SUCCESS ───────────────────────────────────────────────────────────────
      let reward = c.reward[0] + Math.random() * (c.reward[1] - c.reward[0]);
      // Chemistry skill multiplies drug crime rewards
      if (c.type === "Drug Trade")
        reward *=
          1 + Math.min(0.5, (this.state.crime.skills.chemistry || 0) / 3000);
      reward *= Math.max(0.55, 1 - this.state.crime.heat * 0.003);
      this.modCash(reward);
      this.state.crime.rep += Math.ceil(c.heatAdd * 0.6);
      this.state.crime.heat += c.heatAdd;
      this.recordGreed(c.heatAdd * 0.45, `${c.name} payout`);
      this.state.life.riskDebt = Math.min(
        300,
        this.state.life.riskDebt + c.risk * 4,
      );

      SFX.play("crimeSuccess");
      const cleanGetaway = Math.random() > 0.88;
      if (cleanGetaway) {
        this.state.crime.heat = Math.max(0, this.state.crime.heat - c.heatAdd);
        app.toast(
          `CLEAN GETAWAY! +$${shortNumber(reward)} — no traces left`,
          "epic",
        );
        FX.screenFlash("gain");
      } else {
        app.toast(
          `${c.name} success! +$${shortNumber(reward)} 🔥 heat rising`,
          "warning",
        );
      }
      this.registerAction(5);

      // ── Track stats & history ────────────────────────────────────────────────
      cr.streak = (cr.streak || 0) + 1;
      cr.bestStreak = Math.max(cr.bestStreak || 0, cr.streak);
      cr.totalEarned = (cr.totalEarned || 0) + Math.round(reward);
      cr.biggestScore = Math.max(cr.biggestScore || 0, Math.round(reward));
      cr.successCount = (cr.successCount || 0) + 1;
      cr.lifetimeJobs = (cr.lifetimeJobs || 0) + 1;
      cr.history = cr.history || [];
      cr.history.unshift({
        id: c.id,
        name: c.name,
        success: true,
        reward: Math.round(reward),
        type: c.type,
        clean: cleanGetaway,
      });
      if (cr.history.length > 25) cr.history = cr.history.slice(0, 25);
      if (cr.streak === 5) {
        setTimeout(() => {
          FX.milestoneOverlay(
            "🔥 5-JOB STREAK!",
            "The streets bow to you. Keep the heat going.",
          );
          FX.confetti();
        }, 700);
      }
      if (cr.streak === 10) {
        setTimeout(() => {
          FX.milestoneOverlay(
            "💀 10-JOB STREAK!",
            "Criminal mastermind. The law can't touch you.",
          );
          FX.confetti();
        }, 700);
      }
      if (cr.streak === 20) {
        setTimeout(() => {
          FX.milestoneOverlay(
            "👑 20-JOB STREAK!",
            "KINGPIN STATUS. A living legend of the underworld.",
          );
          FX.confetti();
        }, 700);
      }

      const successDeathRisk =
        c.risk * 0.012 + Math.max(0, this.state.crime.heat - 60) * 0.0007;
      if (
        this.checkSuddenDeath(
          `Crime: ${c.name}`,
          successDeathRisk,
          "Killed during the getaway",
        )
      )
        return;
    } else {
      // ── FAILURE ───────────────────────────────────────────────────────────────
      const jailChance = Math.min(
        0.96,
        c.risk +
          this.state.crime.heat * 0.01 +
          this.state.life.legalRecord * 0.03 +
          this.state.life.greed * 0.0007,
      );

      if (Math.random() < jailChance) {
        // ── BUSTED — check lawyer ──────────────────────────────────────────────
        const lawyer = this.state.crime.lawyer
          ? CONFIG.LAWYERS.find((l) => l.id === this.state.crime.lawyer)
          : CONFIG.LAWYERS[0]; // public defender by default

        // Try to dismiss charges outright
        if (lawyer && Math.random() < lawyer.dismissChance) {
          const caseFee = lawyer.caseFee || 0;
          if (caseFee > 0) this.modCash(-caseFee);
          this.state.crime.heat += c.heatAdd * 0.5;
          app.toast(
            `Your ${lawyer.name} got the charges DROPPED. Cost: $${shortNumber(caseFee)}`,
            "success",
          );
          FX.screenFlash("gain");
          // ── Track dismissed ────────────────────────────────────────────────
          cr.streak = 0;
          cr.failCount = (cr.failCount || 0) + 1;
          cr.lifetimeJobs = (cr.lifetimeJobs || 0) + 1;
          cr.history = cr.history || [];
          cr.history.unshift({
            id: c.id,
            name: c.name,
            success: false,
            reward: 0,
            type: c.type,
            outcome: "dismissed",
          });
          if (cr.history.length > 25) cr.history = cr.history.slice(0, 25);
        } else {
          // Serve reduced sentence
          let sentenceMonths = c.jail;
          if (lawyer)
            sentenceMonths = Math.max(
              1,
              Math.round(c.jail * (1 - lawyer.jailReduction)),
            );
          const caseFee = lawyer ? lawyer.caseFee || 0 : 0;
          if (caseFee > 0) this.modCash(-caseFee);

          this.state.jail = sentenceMonths;
          this.state.prison.monthsServed = 0;
          this.state.prison.totalSentence = sentenceMonths;
          this.state.prison.prisonJob = null;
          this.state.prison.gangProtection = false;
          this.state.prison.solitary = 0;
          this.state.prison.infractions = 0;
          this.state.life.legalRecord += Math.max(1, sentenceMonths / 18);
          this.state.life.opportunitiesLost += Math.max(
            1,
            Math.floor(sentenceMonths / 24),
          );
          this.state.life.maxHealth = Math.max(
            30,
            this.state.life.maxHealth - sentenceMonths * 0.05,
          );
          this.state.crime.heat = 0;

          // ── Track bust ───────────────────────────────────────────────────────
          cr.streak = 0;
          cr.failCount = (cr.failCount || 0) + 1;
          cr.lifetimeJobs = (cr.lifetimeJobs || 0) + 1;
          cr.history = cr.history || [];
          cr.history.unshift({
            id: c.id,
            name: c.name,
            success: false,
            reward: 0,
            type: c.type,
            outcome: "busted",
            jail: sentenceMonths,
          });
          if (cr.history.length > 25) cr.history = cr.history.slice(0, 25);

          const lawyerMsg =
            lawyer && lawyer.tier > 0
              ? ` ${lawyer.name} reduced your sentence from ${c.jail} → ${sentenceMonths} months.`
              : "";

          SFX.play("arrested");
          FX.screenFlash("jail");
          FX.screenShake("lg");
          app.modal(
            "🚔 BUSTED!",
            `Police caught you.${lawyerMsg} ${sentenceMonths} months in federal prison.`,
            [{ text: "Damn", cb: () => app.closeModal() }],
          );

          const arrestDeathRisk =
            c.risk * 0.04 +
            this.state.crime.heat * 0.0015 +
            this.state.life.legalRecord * 0.008;
          if (
            this.checkSuddenDeath(
              `Arrested: ${c.name}`,
              arrestDeathRisk,
              "Lethal force incident during arrest",
            )
          )
            return;
        }
      } else {
        // Escaped but botched
        SFX.play("crimeFail");
        app.toast(
          "Botched — escaped by the skin of your teeth. Heat explodes.",
          "text-loss",
        );
        this.state.crime.heat += c.heatAdd * 1.8;
        this.state.life.riskDebt = Math.min(
          300,
          this.state.life.riskDebt + c.heatAdd * 0.7,
        );
        // ── Track botched ─────────────────────────────────────────────────────
        cr.streak = 0;
        cr.failCount = (cr.failCount || 0) + 1;
        cr.lifetimeJobs = (cr.lifetimeJobs || 0) + 1;
        cr.history = cr.history || [];
        cr.history.unshift({
          id: c.id,
          name: c.name,
          success: false,
          reward: 0,
          type: c.type,
          outcome: "botched",
        });
        if (cr.history.length > 25) cr.history = cr.history.slice(0, 25);
        const botchedDeathRisk = c.risk * 0.03 + this.state.crime.heat * 0.0012;
        if (
          this.checkSuddenDeath(
            `Botched: ${c.name}`,
            botchedDeathRisk,
            "Killed during a botched operation",
          )
        )
          return;
      }
    }

    if (this.state.crime.heat > 70) {
      this.modStat("health", -1.5);
      this.modStat("happiness", -2);
    }
    this.renderAll();
  },

  // --- MARKET ---
  tickMarkets() {
    const E = this.state.economy;
    E.interestRate +=
      (0.05 - E.interestRate) * 0.05 + (Math.random() - 0.5) * 0.005;
    E.inflation += E.gdpGrowth * 0.08 + (Math.random() - 0.5) * 0.004;
    // GDP growth has a slight upward bias (real economies grow over time)
    E.gdpGrowth += (Math.random() - 0.45) * 0.01;
    E.interestRate = Math.max(0.01, Math.min(0.15, E.interestRate));
    E.inflation = Math.max(-0.01, Math.min(0.12, E.inflation));
    E.gdpGrowth = Math.max(-0.04, Math.min(0.07, E.gdpGrowth));
    // Sentiment has a slight upward bias (markets are generally optimistic)
    E.sentiment = Math.max(
      0,
      Math.min(1, E.sentiment + (Math.random() - 0.45) * 0.1),
    );
    CONFIG.ASSETS.forEach((def) => {
      let asset = this.state.assets[def.id];
      let macroReturn = E.gdpGrowth * 2.5;
      let interestDrag = E.interestRate * 0.8;
      let sentimentFactor = (E.sentiment - 0.4) * 0.06;
      // Base upward drift (markets historically go up ~0.5-1% per month)
      let driftUp = def.type === "crypto" ? 0.008 : 0.005;
      let systematic =
        (macroReturn - interestDrag + sentimentFactor + driftUp) * def.corr;
      let idiosyncratic = (Math.random() - 0.47) * def.vol;
      let inflationDrag = E.inflation * (def.type === "crypto" ? 0.1 : 0.3);
      let pctChange = systematic + idiosyncratic - inflationDrag;

      // Flash crashes are rarer
      if (def.vol > 0.1 && E.sentiment > 0.8 && Math.random() < 0.04) {
        pctChange -= 0.12 + Math.random() * 0.12;
        this.addNews(`${def.name} flash crash punished late risk-takers.`);
      }

      // Occasional bull surges
      if (E.sentiment > 0.6 && E.gdpGrowth > 0.02 && Math.random() < 0.06) {
        pctChange += 0.05 + Math.random() * 0.1;
        this.addNews(`${def.name} surges on strong economic data!`);
      }

      pctChange = Math.max(-0.25, Math.min(0.35, pctChange));
      asset.price = asset.price * (1 + pctChange);
      asset.trend = pctChange;
      asset.history.push(asset.price);
      if (asset.history.length > 50) asset.history.shift();
    });
    if (E.gdpGrowth < -0.02 && Math.random() < 0.15)
      this.addNews("Recession fears mount.");
    if (E.gdpGrowth > 0.03 && Math.random() < 0.15)
      this.addNews("Economy booming \u2014 markets rally!");
    if (this.state.assets["btc"].trend > 0.1) this.addNews("Crypto bull run.");
  },
  trade(id, buy, qty = 1) {
    if (!this.canAct()) return;
    qty = Math.max(1, Math.floor(Number(qty) || 1));
    this.state.runStats.marketTrades += 1;
    let asset = this.state.assets[id];
    const def = CONFIG.ASSETS.find((a) => a.id === id);
    let price = asset.price;

    // fee and slippage scale with volatility/position; keep per-share base and multiply by qty
    let feeRate = 0.004 + (def.vol || 0.02) * 0.04;
    let baseSlippage = Math.min(0.03, (asset.owned / 120) * (def.vol || 0.02));
    // small extra slippage for larger orders (keeps UX predictable)
    let slippage = Math.min(0.06, baseSlippage + Math.min(0.02, qty * 0.0005));

    let effectivePricePerShare = buy
      ? price * (1 + slippage)
      : price * (1 - slippage);
    let totalPrice = effectivePricePerShare * qty;
    let fee = totalPrice * feeRate;

    if (buy) {
      if (this.state.cash >= totalPrice + fee) {
        this.modCash(-(totalPrice + fee));
        asset.owned += qty;
        if (def.vol >= 0.1)
          this.recordGreed(1.2 * qty, `Speculative ${id.toUpperCase()} buys`);
        app.toast(
          `Bought ${qty} ${id.toUpperCase()} for ${displayMoney(totalPrice + fee)}`,
          "success",
        );
        this.registerAction(Math.min(5, qty));
      } else app.toast("Insufficient Funds", "error");
    } else {
      if (asset.owned >= qty) {
        this.modCash(totalPrice - fee);
        asset.owned -= qty;
        app.toast(
          `Sold ${qty} ${id.toUpperCase()} for ${displayMoney(totalPrice - fee)}`,
          "success",
        );
        this.registerAction(Math.min(5, qty));
      } else {
        app.toast("You don't own that many shares", "error");
      }
    }

    if (fee > 0 && Math.random() < 0.35) {
      app.log(`Trading costs paid: ${displayMoney(fee)}.`);
    }

    this.renderAll();
  },

  buyMax(id) {
    if (!this.canAct()) return;
    const asset = this.state.assets[id];
    const def = CONFIG.ASSETS.find((a) => a.id === id);
    const price = asset.price;
    const cash = this.state.cash;
    if (!price || price <= 0) return app.toast("Invalid asset price", "error");

    // helper to compute total cost for q shares (including slippage and fee)
    const computeTotal = (q) => {
      q = Math.max(0, Math.floor(q));
      let feeRate = 0.004 + (def.vol || 0.02) * 0.04;
      let baseSlippage = Math.min(
        0.03,
        (asset.owned / 120) * (def.vol || 0.02),
      );
      let slippage = Math.min(0.06, baseSlippage + Math.min(0.02, q * 0.0005));
      let effPrice = price * (1 + slippage);
      let totalPrice = effPrice * q;
      let fee = totalPrice * feeRate;
      return totalPrice + fee;
    };

    // quick upper bound
    let hi = Math.floor(cash / Math.max(0.000001, price));
    if (hi <= 0) return app.toast("Insufficient funds", "error");
    let lo = 0;

    // Binary search maximum q such that computeTotal(q) <= cash
    while (lo < hi) {
      const mid = Math.ceil((lo + hi) / 2);
      if (computeTotal(mid) <= cash) lo = mid;
      else hi = mid - 1;
    }

    const qty = lo;
    if (qty <= 0)
      return app.toast("Insufficient funds to buy any shares", "error");
    // Place trade for qty shares
    this.trade(id, true, qty);
  },

  // --- BUSINESS ---
  startStartup() {
    if (!this.canAct()) return;
    if (this.state.cash < 5000) return app.toast("Need $5k Capital", "error");
    const opts = CONFIG.STARTUP_TYPES.map((t) => ({
      text: `${t.name} ($${t.cost})`,
      cb: () => this._createStartup(t.id),
    }));
    app.modal("Incorporate", "Choose Industry", opts);
  },

  _createStartup(typeId) {
    if (!this.canAct()) return;
    const type = CONFIG.STARTUP_TYPES.find((t) => t.id === typeId);
    if (this.state.cash < type.cost)
      return app.toast("Insufficient Funds", "error");

    this.modCash(-type.cost);
    this.recordGreed(type.cost / 12000, `Launching ${type.name}`);

    // Complex Init
    const s = {
      id: Date.now(),
      name: `${type.name} ${Date.now().toString().slice(-4)}`,
      info: { type: typeId, difficulty: type.difficulty, upside: type.upside },
      staff: { dev: 0, sales: 0, mkt: 0, exec: 0, morale: 80 },
      financials: {
        cash: type.cost * 2.5,
        burn: 0,
        rev: 0,
        val: 0,
        months_runway: 18,
      },
      product: { features: 0, bugs: 0, concept: Math.random() * 0.3 + 0.7 }, // 0.7-1.0 quality
      market: { users: 0, pmf: 0, awareness: 0 },
      dead: false,
    };

    this.state.startups.push(s);
    this.registerAction(6);
    app.closeModal();
    this.renderAll();
  },

  manageStartup(idx, action, role) {
    if (!this.canAct()) return;
    const s = this.state.startups[idx];
    if (!s) return;

    // Hire/Fire
    if (action === "hire") {
      const cost = CONFIG.STARTUP_ROLES[role].salary;
      if (s.financials.cash < cost * 2) {
        this.recordGreed(1.1, "Hiring despite thin runway");
      }
      s.staff[role]++;
      app.toast(`Hired ${role.toUpperCase()}`, "success");
    }
    if (action === "fire") {
      if (s.staff[role] > 0) {
        s.staff[role]--;
        s.staff.morale -= 10;
        app.toast(`Fired ${role.toUpperCase()}`, "text-loss");
      }
    }
    this.renderAll();
  },

  // --- STARTUP ADVISOR ---
  getAdvisorTip(idx) {
    if (!this.canAct()) return;
    const s = this.state.startups[idx];
    if (!s) return;
    if (this.state.cash < 1000)
      return app.toast("Need $1,000 for advisor consultation", "error");

    this.modCash(-1000);
    if (!this.state.advisorUses) this.state.advisorUses = {};
    if (!this.state.advisorUses[s.id]) this.state.advisorUses[s.id] = 0;
    this.state.advisorUses[s.id]++;

    const teamSize = s.staff.dev + s.staff.sales + s.staff.mkt + s.staff.exec;
    const pmf = s.market.pmf;
    const runway = s.financials.months_runway;
    const profit = s.financials.rev - s.financials.burn;
    const uses = this.state.advisorUses[s.id];

    let category;
    if (profit > 5000 && pmf > 0.6 && runway > 12) {
      category = "great";
    } else if (runway < 3 || (s.financials.cash < 0 && s.staff.morale < 20)) {
      category = "hopeless";
    } else if (runway < 6 || profit < -2000 || s.staff.morale < 35) {
      category = "struggling";
    } else if (pmf > 0.3 && s.market.users > 50) {
      category = "growing";
    } else {
      category = "early";
    }

    const tips = CONFIG.ADVISOR_TIPS[category];
    const tipIdx = (uses - 1) % tips.length;
    const tip = tips[tipIdx];

    app.modal(
      "💼 Business Advisor",
      `"${tip}"\n\n— Your advisor (consultation #${uses}, cost: $1,000)`,
      [{ text: "Thanks!", cb: () => app.closeModal() }],
    );
    this.renderAll();
  },

  // --- MARKETING CAMPAIGN ---
  runMarketingCampaign(idx) {
    if (!this.canAct()) return;
    const s = this.state.startups[idx];
    if (!s) return;
    const cost = Math.max(2000, Math.round(s.market.users * 0.5 + 1000));
    if (s.financials.cash < cost)
      return app.toast(`Need $${shortNumber(cost)} in startup funds`, "error");

    s.financials.cash -= cost;
    const boost = (15 + Math.random() * 25) * (1 + s.market.pmf);
    s.market.awareness = (s.market.awareness || 0) + boost;
    const newUsers = Math.round(boost * s.market.pmf * 0.8);
    s.market.users += newUsers;
    s.staff.morale = Math.min(100, s.staff.morale + 3);

    app.toast(`Campaign launched! +${newUsers} new users`, "success");
    this.registerAction(4);
    this.renderAll();
  },

  // --- INVEST IN COMPANY ---
  investInStartup(idx) {
    if (!this.canAct()) return;
    const s = this.state.startups[idx];
    if (!s) return;

    const options = [1000, 5000, 10000, 25000].filter(
      (amt) => this.state.cash >= amt,
    );
    if (options.length === 0)
      return app.toast(
        "You don't have enough personal cash to invest",
        "error",
      );

    const buttons = options.map((amt) => ({
      text: `Invest $${shortNumber(amt)}`,
      cb: () => {
        this.state.cash -= amt;
        s.financials.cash += amt;
        s.financials.months_runway =
          s.financials.cash / Math.max(1, s.financials.burn);
        app.toast(`Invested $${shortNumber(amt)} into ${s.name}!`, "success");
        app.closeModal();
        this.renderAll();
      },
    }));
    buttons.push({ text: "Cancel", cb: () => app.closeModal() });

    app.modal(
      "\uD83D\uDCB0 Invest Personal Cash",
      `Transfer money from your personal account into ${s.name}.\n\nCurrent startup cash: $${shortNumber(Math.round(s.financials.cash))}\nYour cash: $${shortNumber(Math.round(this.state.cash))}`,
      buttons,
    );
  },

  // --- BOOST MORALE ---
  boostMorale(idx) {
    if (!this.canAct()) return;
    const s = this.state.startups[idx];
    if (!s) return;
    const cost = 500;
    if (s.financials.cash < cost)
      return app.toast(
        `Need $${cost} in startup funds for a team event`,
        "error",
      );

    s.financials.cash -= cost;
    const boost = 12 + Math.round(Math.random() * 10);
    s.staff.morale = Math.min(100, s.staff.morale + boost);
    app.toast(
      `Team event! Morale +${boost}% (now ${Math.round(s.staff.morale)}%)`,
      "success",
    );
    this.registerAction(2);
    this.renderAll();
  },

  // --- SEEK FUNDING ---
  seekFunding(idx) {
    if (!this.canAct()) return;
    const s = this.state.startups[idx];
    if (!s) return;
    if (s.market.pmf < 0.15)
      return app.toast("Investors want PMF > 15% before investing", "error");

    const valuation = s.financials.val;
    if (valuation < 10000)
      return app.toast("Valuation too low to attract investors", "error");

    const fundingAmount = Math.round(valuation * (0.15 + Math.random() * 0.1));
    const dilution = Math.round(
      (fundingAmount / (valuation + fundingAmount)) * 100,
    );

    app.modal(
      "🤝 Funding Offer",
      `An investor is interested!\n\nFunding: $${shortNumber(fundingAmount)}\nValuation: $${shortNumber(valuation)}\nDilution: ${dilution}% equity\n\nThis cash goes into your startup's account.`,
      [
        {
          text: `Accept Funding`,
          cb: () => {
            s.financials.cash += fundingAmount;
            s.financials.months_runway =
              s.financials.cash / Math.max(1, s.financials.burn);
            app.toast(`Raised $${shortNumber(fundingAmount)}!`, "success");
            FX.confetti();
            app.closeModal();
            game.renderAll();
          },
        },
        { text: "Decline", cb: () => app.closeModal() },
      ],
    );
  },

  // --- PIVOT STARTUP ---
  pivotStartup(idx) {
    if (!this.canAct()) return;
    const s = this.state.startups[idx];
    if (!s) return;

    const available = CONFIG.STARTUP_TYPES.filter((t) => t.id !== s.info.type);
    const opts = available.map((t) => ({
      text: `${t.name} (${t.difficulty}x difficulty)`,
      cb: () => {
        const pivotCost = Math.round(t.cost * 0.3);
        if (s.financials.cash < pivotCost) {
          app.toast(`Need $${shortNumber(pivotCost)} to pivot`, "error");
          app.closeModal();
          return;
        }
        s.financials.cash -= pivotCost;
        s.info.type = t.id;
        s.info.difficulty = t.difficulty;
        s.info.upside = t.upside;
        s.product.features = Math.max(0, s.product.features * 0.5);
        s.market.pmf = Math.max(0.05, s.market.pmf * 0.4);
        s.staff.morale = Math.max(10, s.staff.morale - 15);
        s.name = `${t.name} ${Date.now().toString().slice(-4)}`;
        app.toast(`Pivoted to ${t.name}! Some progress was lost.`, "text-loss");
        app.closeModal();
        game.renderAll();
      },
    }));
    app.modal(
      "🔄 Pivot Company",
      "Pivoting changes your industry. You'll keep your team but lose some product progress and PMF.",
      opts,
    );
  },

  // --- EXIT STARTUP (IPO / ACQUISITION) ---
  exitStartup(idx) {
    if (!this.canAct()) return;
    const s = this.state.startups[idx];
    if (!s) return;

    const val = s.financials.val;
    if (val < 50000) return app.toast("Need $50K+ valuation to exit", "error");

    const ipoMultiplier = 0.6 + Math.random() * 0.8;
    const ipoValue = Math.round(val * ipoMultiplier);
    const acquireMultiplier = 0.4 + Math.random() * 0.5;
    const acquireValue = Math.round(val * acquireMultiplier);

    app.modal(
      "🚀 Exit Strategy",
      `${s.name}\nCurrent Valuation: $${shortNumber(val)}\n\nChoose your exit:`,
      [
        {
          text: `IPO — $${shortNumber(ipoValue)} (risky)`,
          cb: () => {
            if (Math.random() < 0.3) {
              const actual = Math.round(ipoValue * (0.3 + Math.random() * 0.4));
              app.toast(
                `IPO flopped! Only got $${shortNumber(actual)}`,
                "text-loss",
              );
              game.modCash(actual);
            } else {
              game.modCash(ipoValue);
              FX.confetti();
              FX.milestoneOverlay(
                "📈 IPO Success!",
                `$${shortNumber(ipoValue)}`,
              );
              FX.screenFlash("epic");
            }
            game.state.startups.splice(idx, 1);
            app.closeModal();
            game.renderAll();
          },
        },
        {
          text: `Sell — $${shortNumber(acquireValue)} (safe)`,
          cb: () => {
            game.modCash(acquireValue);
            app.toast(
              `Company acquired for $${shortNumber(acquireValue)}!`,
              "success",
            );
            game.state.startups.splice(idx, 1);
            app.closeModal();
            game.renderAll();
          },
        },
        { text: "Keep Building", cb: () => app.closeModal() },
      ],
    );
  },

  // ═══════════════════════════════════════════════════════
  //   TRAVEL / MIGRATION SYSTEM
  // ═══════════════════════════════════════════════════════

  getTravelCost(fromProfile, toProfile, method) {
    const [fromEcon] = fromProfile;
    const [toEcon, toStab, toTax, toSafe, toOpp] = toProfile;
    if (method === "legal") {
      // Visa + flights + legal fees — expensive to go to rich countries
      const baseCost = 800 + toEcon * 1200 + (toSafe >= 4 ? 2000 : 0);
      const visaFee = toStab >= 4 ? 1500 : 500;
      return Math.round(baseCost + visaFee);
    } else {
      // Illegal — smuggler fees, much cheaper but still costs money
      const baseCost = 200 + toEcon * 350;
      return Math.round(baseCost);
    }
  },

  getTravelTime(fromProfile, toProfile, method) {
    const [fromEcon, fromStab, fromTax, fromSafe, fromOpp] = fromProfile;
    const [toEcon, toStab, toTax, toSafe, toOpp] = toProfile;
    if (method === "legal") {
      // Legal process: visa application, approval wait, travel
      let months = 2;
      if (fromEcon <= 2) months += 3; // Poor country = harder to get visa
      if (fromStab <= 2) months += 2; // Unstable = more scrutiny
      if (toSafe >= 4) months += 2; // Safe countries have strict immigration
      if (toEcon >= 4 && fromEcon <= 2) months += 3; // Big economic gap = long wait
      return months;
    } else {
      // Illegal: faster but variable
      let months = 1;
      if (toSafe >= 4) months += 1; // Harder to cross into safe countries
      if (fromStab <= 1) months += 1; // Conflict zone = harder to leave
      return months;
    }
  },

  getVisaDenialChance(fromProfile, toProfile) {
    const [fromEcon, fromStab] = fromProfile;
    const [toEcon, toStab, toTax, toSafe] = toProfile;
    let chance = 0.05;
    if (fromEcon <= 2) chance += 0.25;
    if (fromStab <= 2) chance += 0.2;
    if (toSafe >= 4) chance += 0.15;
    if (toEcon >= 4 && fromEcon <= 2) chance += 0.15;
    // Education helps
    if (this.state.edu.degrees.length > 0) chance -= 0.15;
    // Money helps
    if (this.state.cash > 50000) chance -= 0.1;
    if (this.state.cash > 200000) chance -= 0.1;
    return Math.max(0.02, Math.min(0.85, chance));
  },

  getCaughtChance(fromProfile, toProfile) {
    const [toEcon, toStab, toTax, toSafe] = toProfile;
    let chance = 0.15;
    if (toSafe >= 4) chance += 0.25;
    if (toSafe >= 5) chance += 0.15;
    if (toStab >= 4) chance += 0.1;
    return Math.max(0.05, Math.min(0.75, chance));
  },

  getSentenceMonths(toProfile) {
    const [toEcon, toStab, toTax, toSafe] = toProfile;
    const base = 6 + toSafe * 6 + toStab * 3;
    return base + Math.floor(Math.random() * 12);
  },

  startTravel(targetCode, method) {
    if (!this.canAct()) return;
    if (this.state.life.dead || this.state.life.retired) return;
    if (this.state.travel.migrating)
      return app.toast("Already migrating!", "error");
    if (this.state.jail > 0)
      return app.toast("Can't travel from jail", "error");
    if (targetCode === this.state.country)
      return app.toast("You already live here", "error");

    const target = CONFIG.getCountryByCode(targetCode);
    if (!target) return;

    const fromProfile = this.state.countryProfile || [3, 3, 3, 3, 3];
    const toProfile = target.profile;
    const cost = this.getTravelCost(fromProfile, toProfile, method);
    const time = this.getTravelTime(fromProfile, toProfile, method);

    if (this.state.cash < cost) {
      return app.toast(
        `Need $${shortNumber(cost)} for ${method} travel`,
        "error",
      );
    }

    const flag = CONFIG.getCountryFlag(targetCode);

    if (method === "legal") {
      const denyChance = this.getVisaDenialChance(fromProfile, toProfile);
      const denialPct = Math.round(denyChance * 100);

      app.modal(
        "🛂 Legal Migration",
        `Travel to ${flag} ${target.name}\n\nCost: $${shortNumber(cost)}\nProcessing Time: ${time} months\nVisa Denial Risk: ${denialPct}%\n\nYou'll continue life while your visa processes.`,
        [
          {
            text: `Apply ($${shortNumber(cost)})`,
            cb: () => {
              game.modCash(-cost);
              game.state.travel.migrating = true;
              game.state.travel.targetCountry = targetCode;
              game.state.travel.method = "legal";
              game.state.travel.monthsLeft = time;
              game.state.travel.totalMonths = time;
              app.toast(
                `Visa application submitted to ${target.name}`,
                "success",
              );
              app.closeModal();
              game.renderAll();
            },
          },
          { text: "Cancel", cb: () => app.closeModal() },
        ],
      );
    } else {
      const caughtChance = this.getCaughtChance(fromProfile, toProfile);
      const caughtPct = Math.round(caughtChance * 100);

      app.modal(
        "⚠️ Illegal Border Crossing",
        `Smuggle yourself to ${flag} ${target.name}\n\nCost: $${shortNumber(cost)}\nJourney Time: ${time} month(s)\nCapture Risk: ${caughtPct}%\n\n⚠️ If caught: HARSH prison sentence, criminal record, deportation.\nThe journey itself is dangerous.`,
        [
          {
            text: `Risk It ($${shortNumber(cost)})`,
            cb: () => {
              game.modCash(-cost);
              game.state.travel.migrating = true;
              game.state.travel.targetCountry = targetCode;
              game.state.travel.method = "illegal";
              game.state.travel.monthsLeft = time;
              game.state.travel.totalMonths = time;
              app.toast(`You've begun the dangerous journey...`, "text-loss");
              app.closeModal();
              game.renderAll();
            },
          },
          { text: "Too Risky", cb: () => app.closeModal() },
        ],
      );
    }
  },

  processTravelTick() {
    const t = this.state.travel;
    if (!t || !t.migrating) return;

    t.monthsLeft--;

    if (t.method === "illegal") {
      // Random dangers during journey
      if (Math.random() < 0.08) {
        this.modStat("health", -(10 + Math.random() * 15));
        this.addNews("The illegal journey is taking a toll on your health.");
      }
      if (Math.random() < 0.05) {
        this.modStat("happiness", -10);
        this.addNews(
          "You witnessed terrible things on the journey. Your spirit is breaking.",
        );
      }
    }

    if (t.monthsLeft <= 0) {
      const target = CONFIG.getCountryByCode(t.targetCountry);
      if (!target) {
        t.migrating = false;
        return;
      }
      const toProfile = target.profile;
      const fromProfile = this.state.countryProfile || [3, 3, 3, 3, 3];

      if (t.method === "legal") {
        // Check visa denial
        const denyChance = this.getVisaDenialChance(fromProfile, toProfile);
        if (Math.random() < denyChance) {
          t.migrating = false;
          t.visaDenied++;
          app.modal(
            "🚫 Visa Denied",
            `Your visa application to ${target.name} was rejected.\n\nYour money was not refunded. You can try again later.\n\nTip: Higher education, more savings, and better countries of origin improve your chances.`,
            [{ text: "Damn...", cb: () => app.closeModal() }],
          );
          this.modStat("happiness", -8);
          return;
        }
        // Success!
        this.completeMigration(t.targetCountry);
      } else {
        // Illegal — check if caught
        const caughtChance = this.getCaughtChance(fromProfile, toProfile);
        if (Math.random() < caughtChance) {
          // CAUGHT!
          t.migrating = false;
          t.caughtIllegally++;
          const sentence = this.getSentenceMonths(toProfile);
          this.state.life.legalRecord += 5;
          this.state.crime.heat = Math.min(100, this.state.crime.heat + 30);
          this.state.jail = sentence;

          app.modal(
            "🚨 CAUGHT!",
            `Border patrol captured you trying to enter ${target.name} illegally!\n\nYou've been sentenced to ${sentence} months in detention.\nCriminal record added. You will be deported after serving.`,
            [
              {
                text: "Face Justice",
                cb: () => {
                  app.closeModal();
                  app.activateView("prison");
                  game.renderAll();
                },
              },
            ],
          );
          this.modStat("happiness", -20);
          this.modStat("health", -5);
          return;
        }
        // Made it!
        this.completeMigration(t.targetCountry);
      }
    }
  },

  completeMigration(code) {
    const c = CONFIG.getCountryByCode(code);
    if (!c) return;
    const flag = CONFIG.getCountryFlag(code);
    const oldCountry = this.state.country
      ? CONFIG.getCountryByCode(this.state.country)
      : null;
    const oldName = oldCountry ? oldCountry.name : "Unknown";

    this.state.country = code;
    this.state.countryProfile = c.profile;
    this.state.travel.migrating = false;
    this.state.travel.targetCountry = null;
    this.state.travel.method = null;
    this.state.travel.timesTraveled++;

    // Lose your job when migrating
    if (this.state.job) {
      this.state.job = null;
      this.addNews("You left your job behind when you migrated.");
    }

    FX.confetti();
    FX.milestoneOverlay(`${flag} New Home!`, c.name);
    app.modal(
      "🌍 Migration Complete!",
      `You've successfully moved from ${oldName} to ${flag} ${c.name}!\n\nYour taxes, living costs, safety, and opportunities now reflect your new country.\n\nYou'll need to find a new job here.`,
      [{ text: "Start Fresh", cb: () => app.closeModal() }],
    );
    this.modStat("happiness", 10);
    this.renderAll();
  },

  checkCountryWarning() {
    const cp = this.state.countryProfile;
    if (!cp) return;
    const t = this.state.travel;
    const monthsPlayed = this.state.runStats.monthsPlayed || 0;
    const safe = cp[3];
    const stab = cp[1];
    const econ = cp[0];

    // Show warning every ~24 months if in a bad country
    if (monthsPlayed - (t.countryWarningShown || 0) < 24) return;
    if (safe > 2 && stab > 2 && econ > 2) return;

    let msg = "";
    const c = CONFIG.getCountryByCode(this.state.country);
    const name = c ? c.name : "your country";
    const flag = c ? CONFIG.getCountryFlag(this.state.country) : "";

    if (safe <= 1 && stab <= 1) {
      msg = `⚠️ ${flag} ${name} is an ACTIVE WAR ZONE.\n\nYou face constant risk of death from bombings, shootings, and violence.\n\nYou should seriously consider migrating to a safer country — legally or illegally.\n\nGo to the Travel tab to explore options.`;
    } else if (safe <= 1) {
      msg = `⚠️ ${flag} ${name} is EXTREMELY DANGEROUS.\n\nViolent crime, armed gangs, and lack of law enforcement put your life at daily risk.\n\nConsider saving money to migrate somewhere safer.`;
    } else if (stab <= 1) {
      msg = `⚠️ ${flag} ${name} is in POLITICAL CRISIS.\n\nCivil unrest, coups, and instability make life unpredictable and dangerous.\n\nMigrating could save your life.`;
    } else if (safe <= 2 && econ <= 2) {
      msg = `⚠️ ${flag} ${name} has HIGH CRIME and EXTREME POVERTY.\n\nYour earning potential is severely limited and your safety is compromised.\n\nConsider working toward legal migration to improve your future.`;
    } else if (econ <= 1) {
      msg = `💡 ${flag} ${name} has a devastated economy.\n\nEarning a living here is extremely difficult. Migration to a wealthier country could change your life.\n\nCheck the Travel tab for options.`;
    } else {
      msg = `💡 Life in ${flag} ${name} could be better.\n\nConsider exploring the Travel tab if you want to migrate to a country with better opportunities.`;
    }

    t.countryWarningShown = monthsPlayed;
    app.modal("🌍 Country Alert", msg, [
      {
        text: "Open Travel Tab",
        cb: () => {
          app.closeModal();
          app.activateView("travel");
        },
      },
      { text: "I'll Stay", cb: () => app.closeModal() },
    ]);
  },

  filterTravelCountries() {
    const container = document.getElementById("travel-country-list-container");
    if (!container) return;
    const searchVal = document.getElementById("travel-search")?.value || "";
    const cp = this.state.countryProfile || [3, 3, 3, 3, 3];
    const t = this.state.travel || {};
    const filtered = CONFIG.COUNTRIES.filter(
      (c) =>
        c[0].toLowerCase().includes(searchVal.toLowerCase()) &&
        c[1] !== this.state.country,
    ).slice(0, 30);

    container.innerHTML = filtered
      .map((c) => {
        const flag = CONFIG.getCountryFlag(c[1]);
        const [e, st, tx, sa, op] = [c[2], c[3], c[4], c[5], c[6]];
        const rating = ((e + st + sa + op) / 4).toFixed(1);
        const tierColor =
          rating >= 4
            ? "#34d399"
            : rating >= 3
              ? "#60a5fa"
              : rating >= 2
                ? "#fbbf24"
                : "#ef4444";
        const fromP = cp;
        const toP = [e, st, tx, sa, op];
        const legalCost = this.getTravelCost(fromP, toP, "legal");
        const illegalCost = this.getTravelCost(fromP, toP, "illegal");
        const legalTime = this.getTravelTime(fromP, toP, "legal");
        const illegalTime = this.getTravelTime(fromP, toP, "illegal");
        const denialPct = Math.round(
          this.getVisaDenialChance(fromP, toP) * 100,
        );
        const caughtPct = Math.round(this.getCaughtChance(fromP, toP) * 100);

        let safetyTag = "";
        if (sa <= 1)
          safetyTag = `<span class="travel-tag travel-tag-danger">Dangerous</span>`;
        else if (sa >= 4)
          safetyTag = `<span class="travel-tag travel-tag-safe">Safe</span>`;

        return `<div class="travel-country-card">
        <div class="travel-cc-header">
          <span class="travel-cc-flag">${flag}</span>
          <div class="travel-cc-info">
            <span class="travel-cc-name">${c[0]}</span>
            <span class="travel-cc-rating" style="color:${tierColor}">${"★".repeat(Math.round(parseFloat(rating)))}</span>
            ${safetyTag}
          </div>
        </div>
        <div class="travel-cc-options">
          <div class="travel-option travel-option-legal">
            <div class="travel-opt-head"><i class="fa-solid fa-passport"></i> Legal</div>
            <div class="travel-opt-detail">Cost: $${shortNumber(legalCost)}</div>
            <div class="travel-opt-detail">Time: ${legalTime}mo</div>
            <div class="travel-opt-detail">Denial: ${denialPct}%</div>
            <button class="btn btn-sm btn-primary" onclick="game.startTravel('${c[1]}','legal')" ${t.migrating ? "disabled" : ""}>Apply</button>
          </div>
          <div class="travel-option travel-option-illegal">
            <div class="travel-opt-head"><i class="fa-solid fa-person-running"></i> Illegal</div>
            <div class="travel-opt-detail">Cost: $${shortNumber(illegalCost)}</div>
            <div class="travel-opt-detail">Time: ${illegalTime}mo</div>
            <div class="travel-opt-detail">Caught: ${caughtPct}%</div>
            <button class="btn btn-sm btn-danger" onclick="game.startTravel('${c[1]}','illegal')" ${t.migrating ? "disabled" : ""}>Risk It</button>
          </div>
        </div>
      </div>`;
      })
      .join("");
  },

  doHustle(id) {
    if (!this.canAct()) return;
    const hustle = CONFIG.SIDE_HUSTLES.find((h) => h.id === id);
    if (!hustle) return;
    if (this.state.stats.smarts < hustle.reqSmarts) {
      return app.toast(`Need ${hustle.reqSmarts} Smarts`, "error");
    }
    if (this.state.stats.energy < hustle.energy) {
      return app.toast("Not enough energy for this hustle", "error");
    }

    this.state.runStats.hustleActions =
      (this.state.runStats.hustleActions || 0) + 1;
    this.modStat("energy", -hustle.energy);
    this.modStat("happiness", -hustle.stress);

    const sentimentBoost = 0.85 + this.state.economy.sentiment * 0.4;
    const skillBoost = 1 + Math.min(0.3, this.state.stats.smarts / 300);
    const base =
      hustle.payout[0] + Math.random() * (hustle.payout[1] - hustle.payout[0]);
    const payout = base * sentimentBoost * skillBoost;

    this.modCash(payout);
    this.gainSkillXP("sales", 4);
    this.gainSkillXP("mgmt", 3);
    if (payout > hustle.payout[1] * 1.1) {
      this.recordGreed(0.9, `${hustle.name} windfall`);
    }
    app.toast(`${hustle.name}: +$${payout.toFixed(0)}`, "success");
    this.registerAction(3);
    this.renderAll();
  },

  doContract(id) {
    if (!this.canAct()) return;
    const contract = CONFIG.HIGH_TICKET_CONTRACTS.find((c) => c.id === id);
    if (!contract) return;
    if (this.state.stats.smarts < contract.reqSmarts) {
      return app.toast(`Need ${contract.reqSmarts} Smarts`, "error");
    }
    if (this.state.stats.energy < contract.energy) {
      return app.toast("Not enough energy for this contract", "error");
    }

    this.state.runStats.hustleActions =
      (this.state.runStats.hustleActions || 0) + 1;
    this.modStat("energy", -contract.energy);
    this.modStat("happiness", -contract.stress);

    const sentimentBoost = 0.9 + this.state.economy.sentiment * 0.5;
    const skillBoost = 1 + Math.min(0.45, this.state.stats.smarts / 220);
    const base =
      contract.payout[0] +
      Math.random() * (contract.payout[1] - contract.payout[0]);
    const payout = base * sentimentBoost * skillBoost;

    this.modCash(payout);
    this.gainSkillXP("sales", 7);
    this.gainSkillXP("mgmt", 7);
    if (payout > contract.payout[1] * 1.08) {
      this.recordGreed(1.1, `${contract.name} premium windfall`);
    }
    app.toast(`${contract.name}: +$${payout.toFixed(0)}`, "success");
    this.registerAction(4);
    this.renderAll();
  },

  launchChannel(typeId) {
    if (!this.canAct()) return;
    const type = CONFIG.CHANNEL_TYPES.find((c) => c.id === typeId);
    if (!type) return;
    if (this.state.stats.smarts < type.reqSmarts)
      return app.toast(`Need ${type.reqSmarts} Smarts`, "error");
    if (this.state.cash < type.cost)
      return app.toast("Insufficient Funds", "error");

    this.modCash(-type.cost);
    this.state.wealth.channels.push({
      id: Date.now() + Math.floor(Math.random() * 1000),
      typeId,
      audience: 40 + Math.random() * 120,
      quality: 0.45 + Math.random() * 0.35,
      monthly: 0,
    });
    this.recordGreed(type.cost / 18000, `Launching ${type.name}`);
    this.renderAll();
  },

  growChannel(idx) {
    if (!this.canAct()) return;
    const channel = this.state.wealth.channels[idx];
    if (!channel) return;
    const budget = 250 + channel.audience * 2.2;
    if (this.state.cash < budget)
      return app.toast("Need bigger budget", "error");
    if (this.state.stats.energy < 12)
      return app.toast("Too tired to produce content", "error");

    this.modCash(-budget);
    this.modStat("energy", -12);
    channel.audience += 20 + Math.random() * 90;
    channel.quality = Math.min(
      1.4,
      channel.quality + 0.02 + Math.random() * 0.04,
    );
    this.gainSkillXP("sales", 5);
    this.registerAction(2);
    this.renderAll();
  },

  buyFranchise(id) {
    if (!this.canAct()) return;
    const franchise = CONFIG.FRANCHISES.find((f) => f.id === id);
    if (!franchise) return;
    if (this.state.cash < franchise.cost)
      return app.toast("Insufficient Funds", "error");

    this.modCash(-franchise.cost);
    this.state.wealth.franchises[id] =
      (this.state.wealth.franchises[id] || 0) + 1;
    this.recordGreed(franchise.cost / 120000, `Buying ${franchise.name}`);
    this.registerAction(3);
    this.renderAll();
  },

  sellFranchise(id) {
    if (!this.canAct()) return;
    const franchise = CONFIG.FRANCHISES.find((f) => f.id === id);
    if (!franchise) return;
    const owned = this.state.wealth.franchises[id] || 0;
    if (owned < 1) return app.toast("You don't own this franchise", "error");

    const saleFactor = Math.max(
      0.7,
      Math.min(
        1.18,
        0.9 +
          this.state.economy.sentiment * 0.16 -
          this.state.economy.inflation * 0.45 +
          (Math.random() - 0.5) * 0.06,
      ),
    );
    this.state.wealth.franchises[id] = owned - 1;
    this.modCash(franchise.cost * saleFactor);
    this.renderAll();
  },

  buyDividend(id) {
    if (!this.canAct()) return;
    const fund = CONFIG.DIVIDEND_FUNDS.find((f) => f.id === id);
    if (!fund) return;

    const currentPrice = this.state.wealth.dividendPrices[id] ?? fund.unitPrice;
    if (this.state.cash < currentPrice)
      return app.toast("Insufficient Funds", "error");

    this.modCash(-currentPrice);
    this.state.wealth.dividends[id] =
      (this.state.wealth.dividends[id] || 0) + 1;
    this.recordGreed(currentPrice / 30000, `Stacking ${fund.name}`);
    this.registerAction(2);
    this.renderAll();
  },

  sellDividend(id) {
    if (!this.canAct()) return;
    const fund = CONFIG.DIVIDEND_FUNDS.find((f) => f.id === id);
    if (!fund) return;
    const owned = this.state.wealth.dividends[id] || 0;
    if (owned < 1) return app.toast("No units to sell", "error");

    const currentPrice = this.state.wealth.dividendPrices[id] ?? fund.unitPrice;
    this.state.wealth.dividends[id] = owned - 1;
    this.modCash(currentPrice);
    this.renderAll();
  },

  buyProperty(id) {
    if (!this.canAct()) return;
    const prop = CONFIG.PROPERTIES.find((p) => p.id === id);
    if (!prop) return;
    if (this.state.cash < prop.cost)
      return app.toast("Insufficient Funds", "error");
    this.modCash(-prop.cost);
    this.state.wealth.properties[id] =
      (this.state.wealth.properties[id] || 0) + 1;
    this.recordGreed(prop.cost / 90000, `Buying ${prop.name}`);
    this.registerAction(3);
    this.renderAll();
  },

  sellProperty(id) {
    if (!this.canAct()) return;
    const prop = CONFIG.PROPERTIES.find((p) => p.id === id);
    if (!prop) return;
    const owned = this.state.wealth.properties[id] || 0;
    if (owned < 1) return app.toast("You don't own this property", "error");

    const saleFactor = Math.max(
      0.7,
      Math.min(
        1.25,
        0.9 +
          this.state.economy.sentiment * 0.18 -
          this.state.economy.inflation * 0.6 +
          (Math.random() - 0.5) * 0.08,
      ),
    );
    const salePrice = prop.cost * saleFactor;
    this.state.wealth.properties[id] = owned - 1;
    this.modCash(salePrice);
    this.renderAll();
  },

  buyBond() {
    if (!this.canAct()) return;
    const unit = CONFIG.BOND_UNIT_PRICE;
    if (this.state.cash < unit) return app.toast("Need $1,000 cash", "error");
    this.modCash(-unit);
    this.state.wealth.bonds += 1;
    this.registerAction(1);
    this.renderAll();
  },

  sellBond() {
    if (!this.canAct()) return;
    if (this.state.wealth.bonds <= 0)
      return app.toast("No bonds to sell", "error");

    const mark = Math.max(
      850,
      Math.min(
        1150,
        CONFIG.BOND_UNIT_PRICE *
          (1 +
            (this.state.economy.interestRate - 0.05) * 1.5 -
            this.state.economy.inflation * 0.8),
      ),
    );
    this.state.wealth.bonds -= 1;
    this.modCash(mark);
    this.renderAll();
  },

  computeLoanPayment(principal, aprAnnual, termMonths) {
    const monthlyRate = aprAnnual / 12;
    if (monthlyRate <= 0) return principal / Math.max(1, termMonths);
    const pow = Math.pow(1 + monthlyRate, termMonths);
    return (principal * monthlyRate * pow) / (pow - 1);
  },

  getEstimatedMonthlyIncome() {
    let monthly = 0;
    if (this.state.job) monthly += this.state.job.salary / 12;
    if (this.state.politics.role) {
      const role = CONFIG.POLITICS_ROLES.find(
        (x) => x.id === this.state.politics.role,
      );
      if (role) monthly += role.salary / 12;
    }
    const passive = this.state.wealth?.lastMonthly?.income || 0;
    return Math.max(400, monthly + passive * 0.55);
  },

  getBankDebtServiceMonthly() {
    const bank = this.state.bank;
    const ccBal = bank.creditCard?.balance || 0;
    const ccDue =
      ccBal > 0
        ? Math.max(25, ccBal * CONFIG.BANK_PRODUCTS.creditCard.minPaymentRate)
        : 0;
    const loanDue = (bank.loans || []).reduce(
      (sum, loan) => sum + (loan.monthlyPayment || 0),
      0,
    );
    return ccDue + loanDue;
  },

  transferBankFunds(from, to, amount) {
    if (!this.canAct()) return;
    if (from === to) return;
    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0)
      return app.toast("Invalid transfer amount", "error");

    const valid = ["cash", "checking", "savings"];
    if (!valid.includes(from) || !valid.includes(to))
      return app.toast("Invalid transfer route", "error");

    const fromBal =
      from === "cash" ? this.state.cash : this.state.bank[from] || 0;
    if (fromBal < amt) return app.toast("Insufficient funds", "error");

    if (from === "cash") this.modCash(-amt);
    else this.state.bank[from] -= amt;

    if (to === "cash") this.modCash(amt);
    else this.state.bank[to] += amt;

    this.registerAction(1);
    this.renderAll();
  },

  takeCreditCashAdvance(amount) {
    if (!this.canAct()) return;
    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0)
      return app.toast("Invalid amount", "error");

    const card = this.state.bank.creditCard;
    const fee = amt * CONFIG.BANK_PRODUCTS.creditCard.cashAdvanceFee;
    const totalCharge = amt + fee;
    const available = Math.max(0, card.limit - card.balance);
    if (available < totalCharge) {
      return app.toast("Credit limit too low for this advance", "error");
    }

    card.balance += totalCharge;
    this.modCash(amt);
    this.state.bank.creditScore = Math.max(
      300,
      this.state.bank.creditScore - 3,
    );
    this.recordGreed(0.7, "Using cash advance");
    this.registerAction(2);
    this.renderAll();
  },

  payCreditCard(amount) {
    if (!this.canAct()) return;
    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0)
      return app.toast("Invalid payment amount", "error");
    if (this.state.cash < amt)
      return app.toast("Not enough cash for payment", "error");

    const card = this.state.bank.creditCard;
    if (card.balance <= 0) return app.toast("Card balance already $0", "error");

    const pay = Math.min(amt, card.balance);
    this.modCash(-pay);
    card.balance -= pay;
    this.state.bank.creditScore = Math.min(
      850,
      this.state.bank.creditScore + 2,
    );
    this.registerAction(1);
    this.renderAll();
  },

  applyBankLoan(offerId) {
    if (!this.canAct()) return;
    const offer = CONFIG.BANK_PRODUCTS.loanOffers.find((x) => x.id === offerId);
    if (!offer) return;

    const bank = this.state.bank;
    const monthlyIncome = this.getEstimatedMonthlyIncome();
    const currentService = this.getBankDebtServiceMonthly();
    const dti = currentService / Math.max(1, monthlyIncome);
    const score = bank.creditScore;

    const underwriting =
      score +
      this.state.stats.smarts * 0.9 +
      (this.state.job ? 12 : 0) -
      dti * 180 -
      (this.state.cash < 0 ? 35 : 0) +
      (Math.random() * 28 - 14);

    if (score < offer.minScore || dti > 0.68 || underwriting < offer.minScore) {
      bank.creditScore = Math.max(300, bank.creditScore - 6);
      app.toast("Loan declined by underwriting", "error");
      this.renderAll();
      return;
    }

    const riskAdj =
      Math.max(0, 680 - score) * 0.00034 + Math.max(0, dti - 0.35) * 0.085;
    const apr = Math.min(0.34, offer.baseApr + riskAdj);
    const financedPrincipal = offer.principal * (1 + offer.originationFee);
    const monthlyPayment = this.computeLoanPayment(
      financedPrincipal,
      apr,
      offer.termMonths,
    );

    bank.loans.push({
      id: `${offer.id}_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      name: offer.name,
      principal: financedPrincipal,
      apr,
      termLeft: offer.termMonths,
      monthlyPayment,
      missedPayments: 0,
    });

    this.modCash(offer.principal);
    bank.creditScore = Math.min(850, bank.creditScore + 3);
    this.recordGreed(offer.principal / 60000, `Leveraging ${offer.name}`);
    this.registerAction(3);
    this.renderAll();
  },

  payLoanExtra(loanId, amount) {
    if (!this.canAct()) return;
    const amt = Number(amount);
    if (!Number.isFinite(amt) || amt <= 0)
      return app.toast("Invalid payment amount", "error");
    if (this.state.cash < amt) return app.toast("Not enough cash", "error");

    const loan = this.state.bank.loans.find((x) => x.id === loanId);
    if (!loan) return;
    const pay = Math.min(amt, loan.principal);
    this.modCash(-pay);
    loan.principal -= pay;
    if (loan.principal <= 1) loan.principal = 0;
    this.state.bank.creditScore = Math.min(
      850,
      this.state.bank.creditScore + 2,
    );
    this.registerAction(1);
    this.renderAll();
  },

  openBankCd(offerId) {
    if (!this.canAct()) return;
    const offer = CONFIG.BANK_PRODUCTS.cdOffers.find((x) => x.id === offerId);
    if (!offer) return;
    if (this.state.bank.savings < offer.minDeposit) {
      return app.toast(
        `Need $${shortNumber(offer.minDeposit)} in savings`,
        "error",
      );
    }

    this.state.bank.savings -= offer.minDeposit;
    this.state.bank.cds.push({
      id: `${offer.id}_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      name: offer.name,
      balance: offer.minDeposit,
      apy: offer.apy,
      termLeft: offer.termMonths,
      termMonths: offer.termMonths,
    });
    this.registerAction(1);
    this.renderAll();
  },

  processBankMonthly() {
    const bank = this.state.bank;
    let income = 0;
    let expenses = 0;
    const notes = [];

    bank.historyMonths = (bank.historyMonths || 0) + 1;

    const checkingApy = Math.max(
      0,
      CONFIG.BANK_PRODUCTS.checkingApyBase +
        this.state.economy.interestRate * 0.1 -
        this.state.economy.inflation * 0.04,
    );
    const checkingInt = bank.checking * (checkingApy / 12);
    bank.checking += checkingInt;
    income += checkingInt;

    const savingsApy = Math.max(
      0.005,
      this.state.economy.interestRate +
        CONFIG.BANK_PRODUCTS.savingsSpreadOverInflation -
        this.state.economy.inflation * 0.22,
    );
    const savingsInt = bank.savings * (savingsApy / 12);
    bank.savings += savingsInt;
    income += savingsInt;

    bank.cds = bank.cds.filter((cd) => {
      const growth = cd.balance * (cd.apy / 12);
      cd.balance += growth;
      income += growth;
      cd.termLeft -= 1;
      if (cd.termLeft <= 0) {
        bank.savings += cd.balance;
        notes.push(`${cd.name} matured and rolled into savings`);
        return false;
      }
      return true;
    });

    const card = bank.creditCard;
    const util = card.limit > 0 ? card.balance / card.limit : 1;
    card.apr = Math.max(
      0.14,
      Math.min(
        0.34,
        CONFIG.BANK_PRODUCTS.creditCard.baseApr +
          Math.max(0, 680 - bank.creditScore) * 0.00022 +
          this.state.economy.inflation * 0.08,
      ),
    );

    if (card.balance > 0) {
      const ccInterest = card.balance * (card.apr / 12);
      card.balance += ccInterest;
      const minDue = Math.max(
        25,
        card.balance * CONFIG.BANK_PRODUCTS.creditCard.minPaymentRate,
      );

      if (this.state.cash >= minDue) {
        expenses += minDue;
        card.balance = Math.max(0, card.balance - minDue);
      } else {
        card.balance += CONFIG.BANK_PRODUCTS.creditCard.lateFee;
        card.missedPayments = (card.missedPayments || 0) + 1;
        notes.push("Missed credit card minimum payment");
      }
    }

    bank.loans = bank.loans.filter((loan) => {
      if (loan.principal <= 0.5 || loan.termLeft <= 0) return false;

      const interest = loan.principal * (loan.apr / 12);
      if (this.state.cash >= loan.monthlyPayment) {
        expenses += loan.monthlyPayment;
        loan.principal = Math.max(
          0,
          loan.principal + interest - loan.monthlyPayment,
        );
        loan.termLeft -= 1;
      } else {
        loan.principal += interest + 20;
        loan.missedPayments = (loan.missedPayments || 0) + 1;
        notes.push(`${loan.name}: missed payment`);
      }

      return loan.principal > 0.5 && loan.termLeft > 0;
    });

    const debtService = this.getBankDebtServiceMonthly();
    const dti = debtService / Math.max(1, this.getEstimatedMonthlyIncome());
    let scoreDelta = 0;
    if (util <= 0.2) scoreDelta += 4;
    else if (util <= 0.35) scoreDelta += 2;
    else if (util >= 0.9) scoreDelta -= 12;
    else if (util >= 0.75) scoreDelta -= 8;
    else if (util >= 0.5) scoreDelta -= 3;

    const missedCount =
      (card.missedPayments || 0) +
      bank.loans.reduce((sum, loan) => sum + (loan.missedPayments || 0), 0);
    if (missedCount > 0) scoreDelta -= Math.min(24, missedCount * 2);
    if (dti < 0.25) scoreDelta += 2;
    if (dti > 0.5) scoreDelta -= 6;
    if (this.state.cash < 0) scoreDelta -= 4;

    bank.creditScore = Math.max(
      300,
      Math.min(850, bank.creditScore + scoreDelta),
    );

    const targetLimit = Math.max(
      1000,
      Math.min(
        30000,
        CONFIG.BANK_PRODUCTS.creditCard.baseLimit +
          (bank.creditScore - 620) * 34 +
          this.state.stats.smarts * 18,
      ),
    );
    card.limit = card.limit + (targetLimit - card.limit) * 0.12;
    card.limit = Math.max(1000, Math.min(30000, card.limit));

    bank.lastMonthly = {
      income,
      expenses,
      notes: notes.length
        ? notes.join(" • ")
        : "Payments current. Credit profile stable.",
    };

    return { income: 0, expenses };
  },

  processWealthMonthly() {
    const wealth = this.state.wealth;
    let income = 0;
    let expenses = 0;
    const notes = [];

    CONFIG.PROPERTIES.forEach((prop) => {
      const units = wealth.properties[prop.id] || 0;
      if (!units) return;

      let grossRent =
        prop.rent * units * (1 + (this.state.economy.sentiment - 0.5) * 0.2);
      const vacancyRisk = Math.max(
        0.01,
        0.04 + prop.risk * 0.08 - this.state.economy.sentiment * 0.02,
      );

      if (Math.random() < vacancyRisk) {
        grossRent *= 0.62;
        notes.push(`${prop.name}: vacancy month`);
      }

      const upkeep =
        prop.upkeep * units * (1 + Math.max(0, this.state.economy.inflation));
      income += Math.max(0, grossRent);
      expenses += upkeep;

      if (Math.random() < prop.risk * 0.06) {
        const repair = prop.upkeep * units * (1.2 + Math.random() * 1.4);
        expenses += repair;
        notes.push(`${prop.name}: repair hit`);
      }
    });

    CONFIG.FRANCHISES.forEach((franchise) => {
      const units = wealth.franchises?.[franchise.id] || 0;
      if (!units) return;

      let gross =
        franchise.revenue *
        units *
        (0.9 + this.state.economy.sentiment * 0.25 + Math.random() * 0.08);
      let costs =
        franchise.upkeep *
        units *
        (1 + Math.max(0, this.state.economy.inflation * 0.8));

      if (Math.random() < franchise.risk * 0.08) {
        costs += franchise.upkeep * units * (0.9 + Math.random() * 1.2);
        notes.push(`${franchise.name}: operations disruption`);
      }

      income += Math.max(0, gross);
      expenses += costs;
    });

    CONFIG.DIVIDEND_FUNDS.forEach((fund) => {
      const units = wealth.dividends?.[fund.id] || 0;
      const currentPrice = wealth.dividendPrices?.[fund.id] ?? fund.unitPrice;
      const drift = (Math.random() - 0.5) * fund.volatility;
      const nextPrice = Math.max(
        fund.unitPrice * 0.58,
        currentPrice *
          (1 +
            drift +
            (this.state.economy.sentiment - 0.5) * 0.03 -
            this.state.economy.inflation * 0.02),
      );
      wealth.dividendPrices[fund.id] = nextPrice;

      if (!units) return;
      const yieldAdj = Math.max(
        0.01,
        fund.yieldAnnual +
          this.state.economy.interestRate * 0.16 -
          this.state.economy.inflation * 0.12,
      );
      const payout = (nextPrice * units * yieldAdj) / 12;
      income += payout;
    });

    wealth.channels.forEach((channel) => {
      const type = CONFIG.CHANNEL_TYPES.find((c) => c.id === channel.typeId);
      if (!type) return;

      const drift = (Math.random() - 0.5) * type.volatility;
      const growth = Math.max(
        -0.12,
        Math.min(
          0.18,
          0.03 +
            (channel.quality - 0.55) * 0.1 +
            (this.state.economy.sentiment - 0.5) * 0.08 +
            drift,
        ),
      );
      channel.audience = Math.max(0, channel.audience * (1 + growth));
      const gross =
        channel.audience * type.rpm * Math.max(0.35, channel.quality);
      const net = Math.max(0, gross * 0.88);
      channel.monthly = net;
      income += net;

      if (growth < -0.05 && Math.random() < 0.28) {
        notes.push(`${type.name}: algorithm slump`);
      }
    });

    if (wealth.bonds > 0) {
      const yieldAnnual = Math.max(
        0.01,
        this.state.economy.interestRate +
          0.01 -
          this.state.economy.inflation * 0.25,
      );
      const coupon = wealth.bonds * CONFIG.BOND_UNIT_PRICE * (yieldAnnual / 12);
      income += coupon;
    }

    wealth.lastMonthly = {
      income,
      expenses,
      notes: notes.length ? notes.join(" • ") : "Cashflow stable this month.",
    };

    return { income, expenses };
  },

  enroll(id) {
    if (!this.canAct()) return;
    if (this.state.edu.current)
      return app.modal("Busy", "Finish your current degree first.");
    let deg = CONFIG.DEGREES.find((d) => d.id === id);
    if (!deg) return;

    // IQ Check
    if (this.state.stats.smarts < deg.iqReq) {
      return app.modal(
        "Rejected",
        `Admissions rejected your application. You need ${deg.iqReq} Smarts. Study more?`,
        [{ text: "Okay", cb: () => app.closeModal() }],
      );
    }

    app.modal(
      "Tuition Payment",
      `${deg.name} tuition is $${shortNumber(deg.cost)}.`,
      [
        {
          text: "Pay Cash",
          cb: () => {
            if (this.state.cash < deg.cost)
              return app.modal("Error", "Not enough cash", [
                { text: "Back", cb: () => app.closeModal() },
              ]);
            this.modCash(-deg.cost);
            this.startDegree(id);
            app.closeModal();
          },
        },
        {
          text: "Student Loan (6%)",
          cb: () => {
            if (!this.state.edu.loans) this.state.edu.loans = 0;
            this.state.edu.loans += deg.cost;
            this.startDegree(id);
            app.closeModal();
          },
        },
        { text: "Cancel", cb: () => app.closeModal() },
      ],
    );
  },

  startDegree(id) {
    if (!this.canAct()) return;
    this.state.edu.current = id;
    this.state.edu.progress = 0;
    this.renderAll();
  },

  studyHard() {
    if (!this.canAct()) return;
    if (this.state.stats.energy < 20)
      return app.toast("Too tired to study. Need 20 energy.", "error");
    this.state.stats.energy -= 20;
    this.state.edu.progress += 0.5;
    this.modStat("smarts", 0.5);
    this.registerAction(2);
    app.toast("Crammed for exams — +0.5 Progress, +0.5 Smarts", "success");
    this.renderAll();
  },

  dropOut() {
    if (!this.canAct()) return;
    app.modal(
      "Drop Out?",
      "Are you sure? You will lose all progress but keep the debt.",
      [
        {
          text: "Yes, I quit",
          cb: () => {
            this.state.edu.current = null;
            this.state.edu.progress = 0;
            this.renderAll();
            app.closeModal();
          },
        },
        { text: "Cancel", cb: () => app.closeModal() },
      ],
    );
  },

  playCasino(gameId, presetAmt) {
    if (!this.canAct()) return;
    const g = CONFIG.CASINO_GAMES.find((x) => x.id === gameId);
    if (!g) return;

    // Quick-bet: amount already chosen, skip modal
    if (presetAmt !== undefined) {
      const bet = Math.min(Math.max(presetAmt, g.minBet), g.maxBet);
      return this._resolveBet(g, bet);
    }

    app.modal("Place Bet", `${g.name}: ${g.desc}`, [
      { text: `$${g.minBet}`, cb: () => this._resolveBet(g, g.minBet) },
      {
        text: `$${g.minBet * 5}`,
        cb: () => this._resolveBet(g, g.minBet * 5),
      },
      { text: `$${g.maxBet}`, cb: () => this._resolveBet(g, g.maxBet) },
      { text: "Cancel", cb: () => app.closeModal() },
    ]);
  },

  _resolveBet(g, amt) {
    if (this.state.cash < amt) return app.toast("Broke", "error");

    this.modCash(-amt);
    this.state.casino.lifetimeSpins++;
    this.state.casino.wagered += amt;
    app.closeModal();
    SFX.play("casinoSpin");

    let win = 0;
    let outcome = "loss";
    let outcomeLabel = "Loss";
    const r = Math.random();

    if (g.id === "slots") {
      if (r < 0.06) {
        win = amt * 15;
        outcome = "jackpot";
        outcomeLabel = "🎰 JACKPOT!";
      } else if (r < 0.06 + 0.06) {
        win = amt * 5;
        outcome = "bigwin";
        outcomeLabel = "Big Win! 5×";
      } else if (r < 0.06 + 0.06 + 0.28) {
        win = amt * 2;
        outcome = "win";
        outcomeLabel = "Win";
      }
    } else if (g.id === "blackjack") {
      let odds = 0.45 + this.state.stats.smarts * 0.001;
      if (r < odds * 0.08) {
        win = Math.floor(amt * 2.5);
        outcome = "blackjack";
        outcomeLabel = "Blackjack! 3:2";
      } else if (r < odds) {
        win = amt * 2;
        outcome = "win";
        outcomeLabel = "Beat Dealer";
      }
    } else if (g.id === "roulette") {
      if (r < 0.027) {
        win = amt * 12;
        outcome = "straight";
        outcomeLabel = "⚡ Straight Up!";
      } else if (r < 0.13) {
        win = amt * 3;
        outcome = "dozen";
        outcomeLabel = "Dozen Win";
      } else if (r < 0.49) {
        win = amt * 2;
        outcome = "win";
        outcomeLabel = "Red / Black";
      }
    } else if (g.id === "craps") {
      if (r < 0.056) {
        win = amt * 7;
        outcome = "hardway";
        outcomeLabel = "🎲 Yo-Eleven!";
      } else if (r < 0.496) {
        win = amt * 2;
        outcome = "win";
        outcomeLabel = "Pass Line";
      }
    } else if (g.id === "horse") {
      if (r < 0.04) {
        win = amt * 14;
        outcome = "jackpot";
        outcomeLabel = "🏆 Longshot!";
      } else if (r < 0.15) {
        win = amt * 6;
        outcome = "win";
        outcomeLabel = "Winner!";
      }
    } else if (g.id === "scratch") {
      if (r < 0.02) {
        win = amt * 20;
        outcome = "jackpot";
        outcomeLabel = "🌟 Lucky 7s!";
      } else if (r < 0.07) {
        win = Math.floor(amt * 5);
        outcome = "bigwin";
        outcomeLabel = "Triple Match!";
      } else if (r < 0.32) {
        win = Math.floor(amt * 2);
        outcome = "win";
        outcomeLabel = "Small Win";
      }
    }

    const isBigWin = ["jackpot", "straight", "hardway", "blackjack"].includes(
      outcome,
    );
    const isAnyWin = win > 0;

    if (isAnyWin) {
      this.modCash(win);
      this.state.casino.wins++;
      this.state.casino.net += win - amt;
      this.state.casino.paidOut += win;
      this.state.casino.bestPayout = Math.max(
        this.state.casino.bestPayout,
        win,
      );
      this.state.casino.streak =
        this.state.casino.streak >= 0 ? this.state.casino.streak + 1 : 1;
      this.state.casino.lastOutcome = outcomeLabel;
      this.registerAction(isBigWin ? 8 : 2);
      SFX.play(isBigWin ? "jackpot" : "casinoWin");
      app.toast(
        `Won $${shortNumber(win)}! ${outcomeLabel}`,
        isBigWin ? "epic" : "success",
      );
      if (isBigWin) {
        FX.confetti();
        FX.screenShake("lg");
        FX.screenFlash("epic");
        FX.milestoneOverlay(outcomeLabel, `+$${shortNumber(win)}`);
      }
    } else {
      this.state.casino.losses++;
      this.state.casino.net -= amt;
      this.state.casino.streak =
        this.state.casino.streak <= 0 ? this.state.casino.streak - 1 : -1;
      this.state.casino.lastOutcome = "Loss";
      SFX.play("casinoLose");
      app.toast("Lost — better luck next hand!", "text-loss");
    }

    this.state.casino.lastGame = g.name;
    this.state.casino.lastBet = amt;
    this.state.casino.lastWin = win;
    this.state.casino.history.unshift({
      game: g.name,
      gameId: g.id,
      result: isAnyWin ? outcomeLabel : "Loss",
      bet: amt,
      payout: win,
      net: win - amt,
      age: this.state.age,
      big: isBigWin,
    });
    if (this.state.casino.history.length > 30)
      this.state.casino.history.length = 30;

    this.renderAll();
  },

  politicsVolunteer() {
    if (!this.canAct()) return;
    if (this.state.stats.energy < 15) return app.toast("Too tired", "error");
    this.modStat("energy", -15);
    this.state.politics.influence += 2;
    this.modStat("happiness", 3);
    app.toast("Volunteered at community center (+2 Influence)", "success");
    this.renderAll();
  },

  politicsRally() {
    if (!this.canAct()) return;
    if (this.state.stats.energy < 10) return app.toast("Too tired", "error");
    this.modStat("energy", -10);
    this.state.politics.influence += 1;
    app.toast("Attended political rally (+1 Influence)", "info");
    this.renderAll();
  },

  politicsDonate() {
    if (!this.canAct()) return;
    if (this.state.cash < 500) return app.toast("Need $500", "error");
    this.modCash(-500);
    this.state.politics.influence += 3;
    app.toast("Donated to local causes (+3 Influence)", "success");
    this.renderAll();
  },

  startCampaign(roleId) {
    if (!this.canAct()) return;
    const r = CONFIG.POLITICS_ROLES.find((x) => x.id === roleId);
    if (this.state.cash < r.cost) return app.toast("Need funds", "error");

    this.modCash(-r.cost);

    // Election Chance
    let chance =
      0.4 +
      this.state.politics.influence * 0.005 +
      this.state.stats.smarts * 0.002;
    // Opponent smear campaign chance
    chance -= this.state.life.legalRecord * 0.1;

    app.modal("Election Day", " The votes are being counted...", [
      {
        text: "Watch Results",
        cb: () => {
          if (Math.random() < chance) {
            this.state.politics.role = roleId;
            this.state.politics.termLeft = r.term;
            this.state.politics.influence += r.infGain;
            this.recordGreed(r.cost / 5000, "Political Ambition");
            this.registerAction(10);
            app.modal("Victory!", `You have been elected ${r.name}.`, [
              { text: "Serve People", cb: () => app.closeModal() },
            ]);
          } else {
            this.state.politics.influence += 2; // consolation
            app.modal(
              "Defeated",
              "You lost the election. Try improving influence or reputation.",
              [{ text: "Concede", cb: () => app.closeModal() }],
            );
          }
          this.renderAll();
        },
      },
    ]);
  },

  politicalAction(type) {
    if (!this.canAct() || !this.state.politics.role) return;
    const r = CONFIG.POLITICS_ROLES.find(
      (x) => x.id === this.state.politics.role,
    );
    const p = this.state.politics;

    if (type === "speech") {
      this.modStat("energy", -10);
      p.influence += 2;
      this.state.stats.happiness += 1;
      app.toast("Speech given (+2 Influence)", "info");
      this.registerAction(1);
    } else if (type === "fundraise") {
      this.modStat("energy", -15);
      let raised = r.salary * 0.1 + p.influence * 10;
      this.modCash(raised);
      app.toast(`Fundraised +$${Math.floor(raised)}`, "success");
      this.registerAction(2);
    } else if (type === "passlaw") {
      this.modStat("energy", -20);
      const smartsReq = 30 + p.lawsPassed * 5;
      const chance = Math.min(
        0.85,
        0.4 + this.state.stats.smarts * 0.008 + p.influence * 0.003,
      );
      if (Math.random() < chance) {
        p.lawsPassed++;
        p.influence += 5;
        this.modStat("happiness", 3);
        this.registerAction(5);
        const rewards = [1000, 2500, 5000, 10000];
        const reward = rewards[Math.min(p.lawsPassed - 1, rewards.length - 1)];
        this.modCash(reward);
        app.toast(
          `Law passed! (+5 Inf, +$${shortNumber(reward)}) — Total: ${p.lawsPassed}`,
          "success",
        );
      } else {
        p.influence = Math.max(0, p.influence - 2);
        app.toast("Bill rejected by committee. Lost influence.", "warning");
      }
    } else if (type === "outreach") {
      this.modStat("energy", -12);
      p.influence += 3;
      this.modStat("happiness", 2);
      p.approval = Math.min(100, (p.approval || 50) + 4);
      app.toast("Community outreach! (+3 Influence, +Approval)", "info");
      this.registerAction(2);
    } else if (type === "debate") {
      this.modStat("energy", -18);
      const win = Math.random() < 0.4 + this.state.stats.smarts * 0.006;
      if (win) {
        p.influence += 6;
        this.modStat("happiness", 4);
        app.toast("Won the debate! (+6 Influence)", "success");
        this.registerAction(4);
      } else {
        p.influence = Math.max(0, p.influence - 3);
        this.modStat("happiness", -3);
        app.toast("Lost the debate. (-3 Influence)", "warning");
      }
    } else if (type === "embezzle") {
      let stolen = r.salary * 2;
      this.modCash(stolen);
      p.bribesTaken += stolen;
      p.corruption = (p.corruption || 0) + 10;
      this.state.life.legalRecord += 0.5;
      this.state.life.riskDebt += 20;
      this.recordGreed(5, "Embezzlement");
      app.toast(`Embezzled +$${Math.floor(stolen)}`, "danger");

      if (Math.random() < 0.05 + (p.corruption || 0) * 0.01) {
        app.modal(
          "Scandal!",
          "You were caught embezzling funds. Impeached and arrested.",
          [
            {
              text: "Resign",
              cb: () => {
                p.role = null;
                p.influence = 0;
                this.state.jail = 24;
                app.closeModal();
                this.renderAll();
              },
            },
          ],
        );
      }
    }
    this.renderAll();
  },

  buyItem(id) {
    if (!this.canAct()) return;
    let it = CONFIG.ITEMS.find((x) => x.id === id);
    if (this.state.cash < it.cost) return app.toast("Too expensive", "error");
    this.modCash(-it.cost);
    this.state.inventory.push(id);
    this.modStat("happiness", it.happy);
    this.registerAction(1);
    // Milestone toasts
    const VEHICLES = ["bike", "civic", "tesla", "porsche"];
    const HOMES = ["apt", "mansion"];
    const inv = this.state.inventory;
    if (
      VEHICLES.includes(id) &&
      inv.filter((i) => VEHICLES.includes(i)).length === 1
    ) {
      setTimeout(() => {
        FX.milestoneOverlay(
          "🚗 First Vehicle!",
          it.name + " — you’re on the road!",
        );
        FX.confetti();
      }, 400);
    }
    if (
      HOMES.includes(id) &&
      inv.filter((i) => HOMES.includes(i)).length === 1
    ) {
      setTimeout(() => {
        FX.milestoneOverlay(
          "🏠 First Property!",
          it.name + " — building real wealth!",
        );
        FX.confetti();
      }, 400);
    }
    this.renderAll();
  },
  modCash(amt) {
    this.state.cash += amt;
    if (amt !== 0) app.showFloat(amt);
    const abs = Math.abs(amt);
    if (abs >= 50000) {
      FX.screenFlash(amt > 0 ? "epic" : "loss");
      FX.screenShake("lg");
    } else if (abs >= 10000) {
      FX.screenFlash(amt > 0 ? "gain" : "loss");
      FX.screenShake("sm");
    } else if (abs >= 5000 && amt > 0) FX.screenFlash("gain");
  },
  modStat(key, val) {
    const maxVal = key === "health" ? this.state.life.maxHealth : 100;
    this.state.stats[key] = Math.max(
      0,
      Math.min(maxVal, this.state.stats[key] + val),
    );
  },

  /* ── Wellness System ── */
  doWellness(id) {
    if (!this.canAct()) return;
    if (!this.state.wellness)
      this.state.wellness = { cooldowns: {}, totalSessions: 0 };
    if (!this.state.wellness.cooldowns) this.state.wellness.cooldowns = {};
    this.state.wellness.totalSessions = this.state.wellness.totalSessions ?? 0;

    const act = CONFIG.WELLNESS.find((w) => w.id === id);
    if (!act) return;
    if (this.state.stats.energy < act.energy)
      return app.toast("Too tired for this activity.", "error");
    if (this.state.cash < act.cost)
      return app.toast("Can't afford this right now.", "error");
    const cd = this.state.wellness.cooldowns[id] || 0;
    if (cd > 0)
      return app.toast(
        `Wait ${cd} more month${cd > 1 ? "s" : ""} before doing this again.`,
        "warning",
      );
    this.modCash(-act.cost);
    this.modStat("energy", -act.energy);
    if (act.health > 0) this.modStat("health", act.health);
    if (act.happiness > 0) this.modStat("happiness", act.happiness);
    if (act.smarts > 0) this.modStat("smarts", act.smarts);
    if (act.stress < 0) {
      this.state.life.chronicStress = Math.max(
        0,
        this.state.life.chronicStress + act.stress,
      );
      this.state.life.burnout = Math.max(
        0,
        this.state.life.burnout + act.stress * 0.5,
      );
    }
    if (act.cooldown > 0) this.state.wellness.cooldowns[id] = act.cooldown;
    this.state.wellness.totalSessions++;
    const effects = [];
    if (act.health > 0) effects.push(`+${act.health} Health`);
    if (act.happiness > 0) effects.push(`+${act.happiness} Happiness`);
    if (act.smarts > 0) effects.push(`+${act.smarts} Smarts`);
    if (act.stress < 0) effects.push(`${act.stress} Stress`);
    app.toast(`${act.name}: ${effects.join(", ")}`, "success");
    this.registerAction(1);
    this.renderAll();
  },
  renderCrimeSimple() {
    if (!this.state?.crime) return;
    const cr = this.state.crime;

    const CRIME_EMOJI = {
      shoplift: "🛍️",
      pickpocket: "👜",
      mug: "👊",
      carjack: "🚗",
      burglary: "🏠",
      robbery: "🔫",
      phishing: "🎣",
      scam: "₿",
      corp_hack: "💻",
      protection: "🤝",
      arms_deal: "⚔️",
      street_deal: "💊",
      cook_sell: "🧪",
      distribution: "📦",
      heist: "🏦",
      insider: "📈",
      extortion: "🃏",
    };
    const TYPE_COLOR = {
      Petty: "#94a3b8",
      Street: "#f97316",
      Felony: "#ef4444",
      Cyber: "#3b82f6",
      "Drug Trade": "#a855f7",
      Organized: "#dc2626",
      "White Collar": "#38bdf8",
      Elite: "#f59e0b",
    };
    const TYPE_BG = {
      Petty: "rgba(148,163,184,0.07)",
      Street: "rgba(249,115,22,0.07)",
      Felony: "rgba(239,68,68,0.07)",
      Cyber: "rgba(59,130,246,0.07)",
      "Drug Trade": "rgba(168,85,247,0.07)",
      Organized: "rgba(220,38,38,0.08)",
      "White Collar": "rgba(56,189,248,0.07)",
      Elite: "rgba(245,158,11,0.08)",
    };
    const TYPE_BORDER = {
      Petty: "rgba(148,163,184,0.18)",
      Street: "rgba(249,115,22,0.22)",
      Felony: "rgba(239,68,68,0.22)",
      Cyber: "rgba(59,130,246,0.22)",
      "Drug Trade": "rgba(168,85,247,0.22)",
      Organized: "rgba(220,38,38,0.26)",
      "White Collar": "rgba(56,189,248,0.22)",
      Elite: "rgba(245,158,11,0.28)",
    };
    const SKILL_ICONS = {
      stealth: "fa-user-ninja",
      intimidation: "fa-hand-fist",
      hacking: "fa-terminal",
      street_smarts: "fa-eye",
      chemistry: "fa-flask",
      planning: "fa-chess",
    };
    const SKILL_COLORS = {
      stealth: "#a855f7",
      intimidation: "#ef4444",
      hacking: "#3b82f6",
      street_smarts: "#f97316",
      chemistry: "#22d3ee",
      planning: "#f59e0b",
    };

    // ── HUD ──────────────────────────────────────────────────────────────────
    const hudEl = document.getElementById("crime-hud");
    if (hudEl) {
      const heatPct = Math.min(100, cr.heat);
      const heatColor =
        cr.heat > 80
          ? "#ef4444"
          : cr.heat > 50
            ? "#f97316"
            : cr.heat > 20
              ? "#f59e0b"
              : "#4ade80";
      const heatLabel =
        cr.heat > 80
          ? "🚨 MANHUNT"
          : cr.heat > 50
            ? "🔥 HOT"
            : cr.heat > 20
              ? "⚠️ WANTED"
              : "✅ CLEAN";
      const heatSub =
        cr.heat > 80
          ? "🚔🚔🚔 Cops swarming. Lie low NOW!"
          : cr.heat > 50
            ? "🚔🚔 On their radar. Risk of arrest."
            : cr.heat > 20
              ? "🚔 Suspicious eyes around. Stay careful."
              : "😎 You're invisible. Perfect time to hustle.";

      const RANKS = [
        { min: 0, label: "Small-Timer 😬", color: "#94a3b8" },
        { min: 2, label: "Street Thug 🥊", color: "#f97316" },
        { min: 4, label: "Soldier 🔫", color: "#ef4444" },
        { min: 7, label: "Made Man 🤝", color: "#a855f7" },
        { min: 10, label: "Boss 💀", color: "#dc2626" },
        { min: 13, label: "Kingpin 👑", color: "#f59e0b" },
      ];
      const repLevel = Math.floor(cr.rep / 100) + 1;
      const repRank =
        [...RANKS].reverse().find((r) => repLevel >= r.min) || RANKS[0];
      const nextRank = RANKS.find((r) => r.min > repLevel);
      const repInLvl = cr.rep % 100;
      const repLvlPct = 100 - Math.round((repInLvl / 100) * 100); // inverted: bar fill = progress within level
      const repLvlPctFwd = Math.round((repInLvl / 100) * 100);

      const streak = cr.streak || 0;
      const bestStreak = cr.bestStreak || 0;
      const streakColor =
        streak >= 10
          ? "#ef4444"
          : streak >= 5
            ? "#f97316"
            : streak >= 3
              ? "#fbbf24"
              : streak >= 1
                ? "#a3a3a3"
                : "#475569";
      const streakEmoji =
        streak >= 10
          ? "💀💀"
          : streak >= 5
            ? "🔥🔥"
            : streak >= 3
              ? "🔥"
              : streak >= 1
                ? "⚡"
                : "—";
      const streakMsg =
        streak >= 10
          ? "UNTOUCHABLE. Criminal legend mode."
          : streak >= 5
            ? "On FIRE. Keep it rolling!"
            : streak >= 3
              ? "Nice streak. Don't blow it."
              : streak >= 1
                ? "Good start. Stay focused."
                : "No streak yet — run a clean job.";

      const totalEarned = cr.totalEarned || 0;
      const biggestScore = cr.biggestScore || 0;
      const successCount = cr.successCount || 0;
      const failCount = cr.failCount || 0;
      const lifetimeJobs = cr.lifetimeJobs || 0;
      const winRate =
        lifetimeJobs > 0 ? Math.round((successCount / lifetimeJobs) * 100) : 0;
      const winRateColor =
        winRate >= 65 ? "#4ade80" : winRate >= 45 ? "#fbbf24" : "#f87171";

      hudEl.innerHTML = `
        <div class="crime-hud-v2">
          <div class="chv-card chv-heat" style="--chv-color:${heatColor};">
            <div class="chv-label"><i class="fa-solid fa-fire"></i> Wanted Level</div>
            <div class="chv-val" style="color:${heatColor};">${heatLabel}</div>
            <div class="chv-bar"><div class="chv-bar-fill" style="width:${heatPct}%;background:${heatColor};"></div></div>
            <div class="chv-sub">${heatSub}</div>
            <button class="chv-action-btn${this.state.cash < 1000 || cr.heat <= 0 ? " chv-btn-cantdo" : ""}" onclick="game.launderHeat()" style="--chv-color:${heatColor};">
              <i class="fa-solid fa-droplet"></i> Cool Down <span style="opacity:0.65;font-size:0.8em;">${cr.heat <= 0 ? "(no heat)" : this.state.cash < 1000 ? "(need $1k)" : "($1k)"}</span>
            </button>
          </div>

          <div class="chv-card chv-rep" style="--chv-color:${repRank.color};">
            <div class="chv-label"><i class="fa-solid fa-street-view"></i> Street Rep</div>
            <div class="chv-val" style="color:${repRank.color};">${cr.rep} ⭐</div>
            <div class="chv-rank-badge" style="color:${repRank.color};border-color:${repRank.color}44;background:${repRank.color}12;">${repRank.label}</div>
            ${
              nextRank
                ? `<div class="chv-bar" style="margin-top:8px;"><div class="chv-bar-fill" style="width:${repLvlPctFwd}%;background:${repRank.color};"></div></div>
                 <div class="chv-sub">${(nextRank.min - repLevel) * 100 - repInLvl} rep to <span style="color:${nextRank.color};">${nextRank.label}</span></div>`
                : `<div class="chv-sub chv-maxed">👑 Maximum Rank Achieved</div>`
            }
          </div>

          <div class="chv-card chv-streak${streak >= 3 ? " chv-streak-hot" : ""}" style="--chv-color:${streakColor};">
            <div class="chv-label"><i class="fa-solid fa-bolt-lightning"></i> Hot Streak</div>
            <div class="chv-val chv-streak-num" style="color:${streakColor};">${streakEmoji} ${streak > 0 ? streak : "None"}</div>
            <div class="chv-sub">Best: <strong style="color:${streakColor};">${bestStreak}</strong> in a row</div>
            <div class="chv-sub" style="margin-top:4px;font-style:italic;">${streakMsg}</div>
          </div>

          <div class="chv-card chv-records" style="--chv-color:#4ade80;">
            <div class="chv-label"><i class="fa-solid fa-sack-dollar"></i> Criminal Record</div>
            <div class="chv-val" style="color:#4ade80;">$${shortNumber(totalEarned)}</div>
            <div class="chv-sub">Best score: <strong style="color:#f59e0b;">$${shortNumber(biggestScore)}</strong></div>
            <div class="chv-sub" style="margin-top:5px;display:flex;align-items:center;gap:8px;">
              <span>${lifetimeJobs} jobs</span>
              <span style="color:${winRateColor};font-weight:700;">${winRate}% wins</span>
            </div>
            <div class="chv-bar" style="margin-top:7px;"><div class="chv-bar-fill" style="width:${winRate}%;background:${winRateColor};"></div></div>
          </div>
        </div>`;
    }

    // ── SKILLS QUICK BAR ─────────────────────────────────────────────────────
    const skillsBarEl = document.getElementById("crime-skills-bar");
    if (skillsBarEl) {
      skillsBarEl.innerHTML = `<div class="crime-skills-quick">
        ${CONFIG.CRIME_SKILLS.map((s) => {
          const xp = cr.skills[s.id] || 0;
          const xpPct = Math.min(100, Math.round((xp / 3000) * 100));
          const lvl = this._crimeSkillLevel(xp);
          const col = SKILL_COLORS[s.id] || "#94a3b8";
          const canTrain =
            this.state.cash >= s.trainCost &&
            this.state.stats.energy >= s.energyCost;
          const mastered = xp >= 3000;
          return `<div class="csq-card${canTrain ? " csq-trainable" : mastered ? " csq-mastered" : " csq-cant-train"}" style="--csq-color:${col};" onclick="game.trainCrimeSkill('${s.id}')" title="${s.desc}&#10;Cost: $${s.trainCost} · ${s.energyCost}⚡">
            <i class="fa-solid ${SKILL_ICONS[s.id] || "fa-star"}" style="color:${col};"></i>
            <div class="csq-name">${s.name}</div>
            <div class="csq-lvl" style="color:${col};">${lvl}</div>
            <div class="csq-bar"><div class="csq-bar-fill" style="width:${xpPct}%;background:${col};"></div></div>
            <div class="csq-xp">${xp}/3000 XP</div>
            <div class="csq-train-lbl ${canTrain ? "can" : "cant"}">${canTrain ? "⚡ Train $" + shortNumber(s.trainCost) : mastered ? "👑 Mastered" : "🔒 Need cash/energy"}</div>
          </div>`;
        }).join("")}
      </div>`;
    }

    // ── OPERATIONS ───────────────────────────────────────────────────────────
    const crimeListEl = document.getElementById("crime-list");
    if (crimeListEl) {
      const unlocked = CONFIG.CRIMES.filter((c) => cr.rep >= c.reqRep);
      const locked = CONFIG.CRIMES.filter((c) => cr.rep < c.reqRep);
      const hotStreak = (cr.streak || 0) >= 3;
      const playerEnergy = this.state.stats.energy;

      const cards = unlocked
        .map((c) => {
          const skillXp = cr.skills[c.skill] || 0;
          const skillBonus = Math.min(0.3, skillXp / 3000);
          const sc = Math.max(
            0.05,
            Math.min(
              0.97,
              c.baseChance +
                skillBonus -
                cr.heat * 0.005 -
                this.state.life.legalRecord * 0.012 +
                this.state.stats.smarts * 0.002,
            ),
          );
          const scPct = Math.round(sc * 100);
          const scColor =
            sc > 0.7 ? "#4ade80" : sc > 0.4 ? "#fbbf24" : "#f87171";
          const col = TYPE_COLOR[c.type] || "#94a3b8";
          const bg = TYPE_BG[c.type] || "rgba(255,255,255,0.03)";
          const border = TYPE_BORDER[c.type] || "rgba(255,255,255,0.1)";
          const emoji = CRIME_EMOJI[c.id] || "🎭";
          const skillLvl = this._crimeSkillLevel(skillXp);
          const skillIcon = SKILL_ICONS[c.skill] || "fa-star";
          const skillCol = SKILL_COLORS[c.skill] || "#94a3b8";
          const heatActive = cr.heat > 30;
          const crimeHist = (cr.history || []).filter((h) => h.id === c.id);
          const cricmeSucc = crimeHist.filter((h) => h.success).length;
          const crimeTotal = crimeHist.length;
          // Circumferential SVG ring for success %
          const circumference = 2 * Math.PI * 16; // r=16
          const dashArray = (scPct / 100) * circumference;
          return `<div class="crime-card-v2" style="--cc-color:${col};background:${bg};border-color:${border};">
          <div class="ccv-top-accent" style="background:linear-gradient(90deg,${col},${col}44,transparent);"></div>
          <div class="ccv-body">
            <div class="ccv-head">
              <div class="ccv-emoji-wrap" style="background:${col}15;border:1px solid ${col}33;">${emoji}</div>
              <div class="ccv-info">
                <div class="ccv-name">${c.name}${hotStreak ? ' <span class="ccv-hot-badge">🔥 HOT</span>' : ""}</div>
                <span class="ccv-type-tag" style="color:${col};background:${col}18;border-color:${col}33;">${c.type}</span>
              </div>
              <div class="ccv-ring" style="--ring-col:${scColor};">
                <svg viewBox="0 0 40 40" width="52" height="52">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4.5"/>
                  <circle cx="20" cy="20" r="16" fill="none" stroke="${scColor}" stroke-width="4.5"
                    stroke-dasharray="${dashArray.toFixed(1)} ${circumference.toFixed(1)}"
                    stroke-dashoffset="${(circumference * 0.25).toFixed(1)}"
                    stroke-linecap="round" transform="rotate(-90 20 20)"/>
                </svg>
                <div class="ccv-ring-text">
                  <span style="color:${scColor};font-size:0.72rem;font-weight:900;line-height:1;">${scPct}%</span>
                </div>
              </div>
            </div>

            <div class="ccv-desc">${c.desc}</div>

            ${heatActive ? `<div class="ccv-heat-warn"><i class="fa-solid fa-fire-flame-curved"></i> Heat penalty: −${(cr.heat * 0.5).toFixed(0)}% on success chance</div>` : ""}

            <div class="ccv-stats">
              <div class="ccv-stat">
                <div class="ccv-stat-val" style="color:#4ade80;">$${shortNumber(c.reward[0])}–$${shortNumber(c.reward[1])}</div>
                <div class="ccv-stat-lbl">💵 Payout</div>
              </div>
              <div class="ccv-stat">
                <div class="ccv-stat-val" style="color:#f87171;">⛓️ ${c.jail}mo</div>
                <div class="ccv-stat-lbl">Jail Risk</div>
              </div>
              <div class="ccv-stat">
                <div class="ccv-stat-val">
                  <i class="fa-solid ${skillIcon}" style="color:${skillCol};margin-right:3px;font-size:0.75em;"></i>
                  <span style="color:${skillCol};">${skillLvl.replace(/[🌱⚡🔥💀👑🔒]/u, "").trim()}</span>
                </div>
                <div class="ccv-stat-lbl">${c.skill.replace("_", " ")}</div>
              </div>
              ${
                crimeTotal > 0
                  ? `<div class="ccv-stat">
                <div class="ccv-stat-val" style="color:${cricmeSucc === crimeTotal ? "#4ade80" : "#fbbf24"};">${cricmeSucc}/${crimeTotal}</div>
                <div class="ccv-stat-lbl">Your P/F</div>
              </div>`
                  : ""
              }
            </div>

            <button class="ccv-run-btn${playerEnergy < 30 ? " ccv-run-cantdo" : ""}" style="--run-col:${col};" onclick="game.commitCrime('${c.id}')" ${playerEnergy < 30 ? 'title="Need 30 energy to run this job"' : ""}>
              <i class="fa-solid fa-bolt"></i>
              ${playerEnergy < 30 ? '😴 Too Tired <span class="ccv-energy-req">⚡ Need 30</span>' : 'Run the Job <span class="ccv-energy-req">⚡ 30</span>'}
            </button>
          </div>
        </div>`;
        })
        .join("");

      let lockedHtml = "";
      if (locked.length) {
        const byRep = [...locked].sort((a, b) => a.reqRep - b.reqRep);
        lockedHtml = `<div class="crime-locked-section">
          <div class="crime-locked-hdr">
            <i class="fa-solid fa-lock"></i>
            <span>${locked.length} Operations Locked — earn more rep to unlock</span>
          </div>
          <div class="crime-locked-grid">
            ${byRep
              .map((c) => {
                const col = TYPE_COLOR[c.type] || "#94a3b8";
                const emoji = CRIME_EMOJI[c.id] || "🎭";
                const repNeed = c.reqRep - cr.rep;
                return `<div class="cll-card" style="--cll-col:${col};">
                <span class="cll-emoji">${emoji}</span>
                <div class="cll-name">${c.name}</div>
                <div class="cll-type" style="color:${col};">${c.type}</div>
                <div class="cll-rep">+${repNeed} rep</div>
              </div>`;
              })
              .join("")}
          </div>
        </div>`;
      }
      crimeListEl.innerHTML = `<div class="crime-ops-grid">${cards}</div>${lockedHtml}`;
    }

    // ── CRIME HISTORY LOG ────────────────────────────────────────────────────
    const logEl = document.getElementById("crime-log");
    if (logEl) {
      const history = cr.history || [];
      if (!history.length) {
        logEl.innerHTML = `<div class="crime-log-empty">
          <i class="fa-solid fa-ghost"></i>
          <span>No jobs yet. Stay clean — or don't.</span>
        </div>`;
      } else {
        const TYPE_SHORT = {
          Petty: "PTY",
          Street: "STR",
          Felony: "FEL",
          Cyber: "CBR",
          "Drug Trade": "DRG",
          Organized: "ORG",
          "White Collar": "WCL",
          Elite: "ELT",
        };
        logEl.innerHTML = `<div class="crime-log-wrap">
          <div class="clog-head">
            <span>Operation</span><span>Type</span><span>Outcome</span><span>Earned</span>
          </div>
          ${history
            .map((h, i) => {
              const col = TYPE_COLOR[h.type] || "#94a3b8";
              const emoji = CRIME_EMOJI[h.id] || "🎭";
              const resultIcon = h.success
                ? h.clean
                  ? "🏃 Vanished"
                  : "✅ Success"
                : h.outcome === "busted"
                  ? "🚔 Busted"
                  : h.outcome === "dismissed"
                    ? "⚖️ Dismissed"
                    : "❌ Botched";
              const resultColor = h.success
                ? "#4ade80"
                : h.outcome === "dismissed"
                  ? "#fbbf24"
                  : "#f87171";
              const isBig = h.success && h.reward >= 50000;
              return `<div class="clog-row${h.success && h.clean ? " clog-clean" : ""}${!h.success && h.outcome === "busted" ? " clog-busted" : ""}${isBig ? " clog-big" : ""}">
              <span class="clog-name">${emoji} ${h.name}${isBig ? ' <span class="clog-big-badge">💰 BIG SCORE</span>' : ""}</span>
              <span class="clog-type" style="color:${col};background:${col}18;border:1px solid ${col}33;">${TYPE_SHORT[h.type] || h.type}</span>
              <span class="clog-result" style="color:${resultColor};">${resultIcon}</span>
              <span class="clog-reward" style="color:${h.success ? "#4ade80" : "var(--text-dim)"};">${h.success ? "+$" + shortNumber(h.reward) : "—"}</span>
            </div>`;
            })
            .join("")}
        </div>`;
      }
    }
  },

  renderAll() {
    // Throttle: collapse rapid batched renders into one
    if (this._renderPending) return;
    this._renderPending = true;
    clearTimeout(this._renderPendingTimer);
    this._renderPendingTimer = setTimeout(() => {
      this._renderPending = false;
    }, 20);
    app.updateStats();

    const nextBtn = document.getElementById("main-advance-btn");
    const cashoutBtn = document.getElementById("cashout-btn");
    const ended = this.state.life.dead || this.state.life.retired;
    const speedMonths = this.state.gameplay?.fastForwardMonths || 1;
    document.body.classList.toggle("run-ended", ended);

    if (nextBtn) {
      nextBtn.disabled = ended;
      if (cashoutBtn) cashoutBtn.disabled = ended;
      document
        .querySelectorAll(".speed-btn")
        .forEach((btn) => (btn.disabled = ended));

      document
        .querySelectorAll(".speed-btn")
        .forEach((el) => el.classList.remove("active"));
      const activeSpeedBtn = document.getElementById(`speed-${speedMonths}`);
      if (activeSpeedBtn) activeSpeedBtn.classList.add("active");

      const label = document.getElementById("advance-btn-label");
      if (ended) {
        nextBtn.innerHTML = this.state.life.dead
          ? "<i class='fa-solid fa-heart-crack'></i> Timeline Ended"
          : "<i class='fa-solid fa-flag-checkered'></i> Retired";
      } else {
        nextBtn.innerHTML = `<i class="fa-solid fa-forward"></i> <span id="advance-btn-label">${speedMonths > 1 ? `+${speedMonths} Months` : "+1 Month"}</span>`;
      }
    }

    const endingPanel = document.getElementById("ending-panel");
    if (endingPanel) {
      if (ended) {
        const end = this.state.life.endingSummary || {
          reason: this.state.life.dead
            ? this.state.life.deathReason || "Run ended"
            : "Retired",
          age: Math.floor(this.state.age / 12),
          netWorth: this.getNetWorth(),
          greed: this.state.life.greed,
          legalRecord: this.state.life.legalRecord,
          opportunitiesLost: this.state.life.opportunitiesLost,
        };
        const netWorth = Math.floor(end.netWorth || 0);
        const outcomeTitle = this.state.life.dead
          ? "Early Death"
          : "Legacy Secured";
        const outcomeClass = this.state.life.dead
          ? "ending-death"
          : "ending-retired";
        const pathName = this.classifyPrimaryPath();
        const telem = this.getTelemetrySnapshot();

        endingPanel.className = `ending-panel ${outcomeClass}`;

        // Build relationship summary for ending
        const rel = this.state.relationship;
        const childCount = rel.children.length;
        const petCount = this.state.pets.length;
        let familySummary = "";
        if (rel.status === "married")
          familySummary += `Married to ${rel.partnerName}`;
        else if (rel.divorces > 0)
          familySummary += `Divorced ${rel.divorces} time${rel.divorces > 1 ? "s" : ""}`;
        else familySummary += "Died alone";
        if (childCount > 0)
          familySummary += ` \u2022 ${childCount} child${childCount > 1 ? "ren" : ""}`;
        if (petCount > 0)
          familySummary += ` \u2022 ${petCount} pet${petCount > 1 ? "s" : ""}`;

        const deathEmoji = this.state.life.dead ? "\u{1F480}" : "\u{1F451}";
        const heroSubtext = this.state.life.dead
          ? `${end.reason}`
          : `You chose to step away at age ${end.age}, leaving behind a legacy worth remembering.`;

        const monthsPlayed = this.state.runStats.monthsPlayed || 0;
        const yearsLived = end.age - 18;

        endingPanel.innerHTML = `
          <div class="ending-hero">
            <div class="ending-kicker">${this.state.life.dead ? "\u{2620}\u{FE0F}  LIFE OVER" : "\u{1F3C6}  LEGACY SECURED"}</div>
            <h2>${deathEmoji} ${outcomeTitle}</h2>
            <p>${heroSubtext}</p>
            <div class="ending-networth">$${shortNumber(netWorth)}</div>
            <div class="ending-networth-label">Final Net Worth</div>
          </div>

          <div class="ending-stats-grid">
            <div class="ending-stat"><span>Age at ${this.state.life.dead ? "Death" : "Retirement"}</span><strong>${end.age} years</strong></div>
            <div class="ending-stat"><span>Years Lived</span><strong>${yearsLived}</strong></div>
            <div class="ending-stat"><span>Primary Path</span><strong>${pathName.toUpperCase()}</strong></div>
            <div class="ending-stat"><span>Family</span><strong>${familySummary}</strong></div>
            <div class="ending-stat"><span>Greed Index</span><strong>${Math.round(end.greed || 0)}</strong></div>
            <div class="ending-stat"><span>Legal Record</span><strong>${(end.legalRecord || 0).toFixed(1)}</strong></div>
            <div class="ending-stat"><span>Months Played</span><strong>${monthsPlayed}</strong></div>
            <div class="ending-stat"><span>Median Lifespan</span><strong>${telem.medianLife}</strong></div>
          </div>

          <div class="ending-foot">
            <div class="ending-telemetry">
              <div><span>Success by Path</span><strong>${telem.winRateByPath}</strong></div>
              <div><span>Bankruptcy Rate</span><strong>${telem.bankruptcyRate}</strong></div>
            </div>
            <div class="ending-actions">
              <button class="btn btn-primary" onclick="game.startNewTimeline()">
                <i class="fa-solid fa-rotate-right"></i> Start New Timeline
              </button>
            </div>
          </div>
        `;

        const activeView = document.querySelector(".view-container.active");
        if (!activeView || activeView.id !== "view-ending") {
          app.activateView("ending");
        }
      } else {
        endingPanel.className = "ending-panel";
        endingPanel.innerHTML = `
          <div class="card">
            <h3 style="margin-bottom:8px;">Timeline Running</h3>
            <p style="color:var(--text-muted); margin:0;">This section unlocks when your run ends by retirement or death.</p>
          </div>
        `;
      }
    }

    // --- CAREER PRO UI (Updated) ---
    const jobEl = document.getElementById("current-job-panel");
    if (this.state.job) {
      let t = CONFIG.CAREERS.find((x) => x.id === this.state.job.trackId);
      let lvl = t.levels[this.state.job.level];
      let perfColor =
        this.state.job.performance > 80
          ? "#10b981"
          : this.state.job.performance < 40
            ? "#ef4444"
            : "#f59e0b";

      jobEl.innerHTML = `
        <div class="panel-hero-strip">
            <img src="${t.image}" alt="${t.name}" />
            <div class="panel-hero-strip-overlay">
                <div class="panel-hero-info">
                    <div class="panel-hero-eyebrow">${t.name}</div>
                    <div class="panel-hero-title">${lvl.title}</div>
                </div>
                <div class="panel-hero-right">
                    <div class="panel-hero-salary-label">Annual Salary</div>
                    <div class="panel-hero-salary">$${shortNumber(this.state.job.salary)}</div>
                </div>
            </div>
        </div>
        <div class="panel-body">
            <div class="career-kpi-row">
                <div class="career-kpi">
                    <span class="career-kpi-label">Performance</span>
                    <span class="career-kpi-val" style="color:${perfColor};">${this.state.job.performance}%</span>
                </div>
                <div class="career-kpi">
                    <span class="career-kpi-label">Politics</span>
                    <span class="career-kpi-val" style="color:#8b5cf6;">${this.state.job.politics || 0}<span style="font-size:0.75rem;opacity:0.55;">/100</span></span>
                </div>
                <div class="career-kpi">
                    <span class="career-kpi-label">Stress</span>
                    <span class="career-kpi-val" style="color:var(--accent-red);">${(this.state.job.stress || 0).toFixed(1)}%</span>
                </div>
            </div>

            <div class="stats-grid-2" style="margin-bottom:20px;">
                <div>
                    <div class="stat-meta-row"><span>Performance</span><span style="color:${perfColor};">${this.state.job.performance}%</span></div>
                    <div class="progress-bg"><div class="progress-fill" style="width:${this.state.job.performance}%; background:${perfColor};"></div></div>
                    <div class="stat-meta-row" style="margin-top:12px;"><span>Politics</span><span style="color:#8b5cf6;">${this.state.job.politics || 0}/100</span></div>
                    <div class="progress-bg"><div class="progress-fill" style="width:${this.state.job.politics || 0}%; background:#8b5cf6;"></div></div>
                </div>
                <div>
                    <div class="stat-meta-row"><span>Stress</span><span style="color:var(--accent-red);">${(this.state.job.stress || 0).toFixed(1)}%</span></div>
                    <div class="progress-bg"><div class="progress-fill" style="width:${this.state.job.stress || 0}%; background:var(--accent-red);"></div></div>
                    <div class="stat-note" style="margin-top:10px;"><i class="fa-solid fa-circle-info" style="margin-right:5px;opacity:0.5;"></i>Gain skills over time to earn a promotion.</div>
                </div>
            </div>

            <div class="action-grid-3">
                <button class="btn btn-primary btn-multiline" onclick="game.performWork('hard')">
                    <span>Grind</span>
                    <span class="btn-subtext">+Perf  +Stress</span>
                </button>
                <button class="btn btn-outline btn-multiline" onclick="game.performWork('network')">
                    <span>Schmooze</span>
                    <span class="btn-subtext">+Politics</span>
                </button>
                <button class="btn btn-outline btn-multiline" onclick="game.performWork('slack')">
                    <span>Slack Off</span>
                    <span class="btn-subtext">-Stress  -Perf</span>
                </button>
            </div>
            <div class="panel-footer">
                <button class="btn btn-success" onclick="game.askPromotion()"><i class="fa-solid fa-arrow-up" style="margin-right:6px;"></i>Request Promotion</button>
                <button class="btn btn-danger" onclick="game.quitJob()"><i class="fa-solid fa-door-open" style="margin-right:6px;"></i>Resign</button>
            </div>
        </div>`;
    } else {
      jobEl.innerHTML = `<div class="empty-state">
        <i class="fa-solid fa-briefcase empty-icon"></i>
        <div class="empty-title">Unemployed</div>
        <div class="empty-desc">Browse the market below to start your career.</div>
      </div>`;
    }

    // LIST JOBS
    document.getElementById("job-list").innerHTML = CONFIG.CAREERS.map(
      (track) => {
        let myLvl =
          this.state.job && this.state.job.trackId === track.id
            ? this.state.job.level
            : -1;

        let html = `<div class="card" style="grid-column: span 2;">
            <div class="career-track-header">
                <img src="${track.image}" alt="${track.name}" class="career-track-img-sm">
                <h3 class="career-track-name">${track.name}</h3>
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap:14px;">`;

        html += track.levels
          .map((lvl, idx) => {
            let isCurrent = myLvl === idx;
            let locked = myLvl !== idx && myLvl !== idx - 1 && idx !== 0; // Can only see next level or entry level
            if (isCurrent) locked = false;

            // Req String
            let reqs = [];
            if (lvl.reqEdu) reqs.push(lvl.reqEdu.toUpperCase());
            for (let [sk, val] of Object.entries(lvl.reqSkill)) {
              let mySk = game.getSkillLevel(sk);
              let color =
                mySk >= val ? "var(--accent-green)" : "var(--accent-red)";
              reqs.push(
                `<span style="color:${color}">${CONFIG.SKILLS[sk].name} ${val}</span>`,
              );
            }
            if (reqs.length === 0) reqs.push("Entry Level");

            let cardClass = "job-card";
            if (isCurrent) cardClass += " current";
            if (locked) cardClass += " locked";

            return `
            <div class="${cardClass}">
                <div class="job-head">
                    <span class="job-title">${lvl.title}</span>
                    <span class="job-salary">$${(lvl.salary / 1000).toFixed(0)}k</span>
                </div>
                <div class="job-reqs">
                    <i class="fa-solid fa-clipboard-check"></i> ${reqs.join(", ")}
                </div>
                ${
                  !isCurrent
                    ? `<button class="btn ${locked ? "btn-outline" : "btn-primary"}" onclick="game.applyJob('${track.id}', ${idx})" ${locked ? "disabled" : ""}>
                        ${locked ? '<i class="fa-solid fa-lock" style="margin-right:5px;"></i>Locked' : '<i class="fa-solid fa-paper-plane" style="margin-right:6px;"></i>Apply Now'}
                       </button>`
                    : '<div style="margin-top:auto;"><span class="tag safe" style="width:100%; display:block; text-align:center; padding:8px; font-size:0.75rem; letter-spacing:1px;"><i class="fa-solid fa-check" style="margin-right:5px;"></i>CURRENT ROLE</span></div>'
                }
            </div>`;
          })
          .join("");

        html += `</div></div>`;
        return html;
      },
    ).join("");

    // SKILLS VISUALIZATION
    const skillHTML = Object.entries(this.state.skills)
      .map(([key, xp]) => {
        let lvl = game.getSkillLevel(key);
        return `<div class="tag" style="margin-right:4px; margin-bottom:4px;"><i class="fa-solid fa-star" style="font-size:0.6rem;margin-right:4px;opacity:0.5;"></i>${CONFIG.SKILLS[key].name} <span style="font-family:var(--font-mono);font-weight:800;">Lv.${lvl}</span></div>`;
      })
      .join("");

    // Inject skills into edu list top for visibility
    const eduEl = document.getElementById("edu-list");
    if (eduEl && !document.getElementById("skill-cloud")) {
      let d = document.createElement("div");
      d.id = "skill-cloud";
      d.style.gridColumn = "span 2";
      d.style.marginBottom = "8px";
      d.innerHTML = `<h4><i class="fa-solid fa-bolt" style="margin-right:7px;color:var(--gold);"></i>My Skills</h4><div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:2px;">${skillHTML || '<span style="color:var(--text-dim); font-size:0.82rem;">No skills yet — get a job to start learning.</span>'}</div>`;
      eduEl.prepend(d);
    } else if (document.getElementById("skill-cloud")) {
      document.getElementById("skill-cloud").innerHTML =
        `<h4><i class="fa-solid fa-bolt" style="margin-right:7px;color:var(--gold);"></i>My Skills</h4><div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:2px;">${skillHTML || '<span style="color:var(--text-dim); font-size:0.82rem;">No skills yet — get a job to start learning.</span>'}</div>`;
    }

    // --- CRIME SECTION ---
    if (app.currentView === "crime") {
      this.renderCrimeSimple();
    }
    if (false) {
      /* old complex crime rendering - disabled */
      const cr = this.state.crime;
      const de = cr.drugEmpire;

      // ── CRIME HUD ─────────────────────────────────────────────────────────
      const hudEl = document.getElementById("crime-hud");
      if (hudEl) {
        const heatPct = Math.min(100, cr.heat);
        const heatColor =
          cr.heat > 80
            ? "#ef4444"
            : cr.heat > 50
              ? "#f97316"
              : cr.heat > 20
                ? "#f59e0b"
                : "#4ade80";
        const heatLabel =
          cr.heat > 80
            ? "🚨 MANHUNT"
            : cr.heat > 50
              ? "🔥 HOT"
              : cr.heat > 20
                ? "⚠️ SUSPICIOUS"
                : "✅ CLEAR";
        const repLevel = Math.floor(cr.rep / 100) + 1;
        const repTitle =
          repLevel >= 13
            ? "Kingpin"
            : repLevel >= 10
              ? "Boss"
              : repLevel >= 7
                ? "Made Man"
                : repLevel >= 4
                  ? "Soldier"
                  : repLevel >= 2
                    ? "Street Thug"
                    : "Small-Timer";
        const lDef = cr.lawyer
          ? CONFIG.LAWYERS.find((l) => l.id === cr.lawyer)
          : null;
        const drugActive = de && de.tier;
        const drugTDef = drugActive
          ? CONFIG.DRUG_TIERS.find((t) => t.id === de.tier)
          : null;

        hudEl.innerHTML = `
          <div class="crime-hud-card">
            <div class="crime-hud-label">Wanted Level</div>
            <div class="crime-hud-value" style="color:${heatColor};">${heatLabel}</div>
            <div class="crime-hud-bar"><div class="crime-hud-bar-fill" style="width:${heatPct}%;background:${heatColor};"></div></div>
            <div class="crime-hud-sub">${heatPct.toFixed(0)}% heat — higher heat = more busts</div>
            <div class="crime-hud-action">
              <button class="btn btn-outline heat-launder-btn" onclick="game.launderHeat()"><i class="fa-solid fa-water" style="margin-right:5px;"></i>Launder Heat ($1k)</button>
            </div>
          </div>
          <div class="crime-hud-card">
            <div class="crime-hud-label">Street Rep</div>
            <div class="crime-hud-value" style="background:linear-gradient(135deg,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${cr.rep}</div>
            <div class="crime-hud-sub"><strong style="color:#a78bfa;">Lv.${repLevel}</strong> ${repTitle}</div>
          </div>
          <div class="crime-hud-card">
            <div class="crime-hud-label">Legal Defense</div>
            <div class="crime-hud-value" style="font-size:0.95rem;color:${lDef ? "#4ade80" : "var(--text-muted)"};">${lDef ? lDef.name : "None"}</div>
            <div class="crime-hud-sub">${lDef ? `−${Math.round(lDef.jailReduction * 100)}% sentence · ${Math.round(lDef.dismissChance * 100)}% dismiss` : "No attorney retained"}</div>
          </div>
          <div class="crime-hud-card" style="${drugActive ? "" : "opacity:0.55;"}">
            <div class="crime-hud-label">Drug Empire</div>
            <div class="crime-hud-value" style="font-size:0.95rem;color:${drugActive ? "#f87171" : "var(--text-muted)"};">${drugActive ? drugTDef.name : "None"}</div>
            <div class="crime-hud-sub">${drugActive ? `$${shortNumber(de.income)}/mo · DEA: ${Math.round(de.deaHeat || 0)}%` : "Not running operations"}</div>
          </div>`;
      }

      // ── DRUG EMPIRE PANEL ──────────────────────────────────────────────────
      const drugPanel = document.getElementById("drug-empire-panel");
      if (drugPanel) {
        const DRUG_IMGS = {
          dealer:
            "https://images.unsplash.com/photo-1587590741732-db3f6ccf99ea?w=800&h=400&fit=crop&auto=format",
          lab: "https://images.unsplash.com/photo-1614924308600-fc72e1b0dce4?w=800&h=400&fit=crop&auto=format",
          network:
            "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&h=400&fit=crop&auto=format",
          cartel:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&auto=format",
        };
        const currentIdx = this._drugTierIndex(de.tier);

        if (!de.tier) {
          // Tier progression cards
          drugPanel.innerHTML =
            `<div style="grid-column:1/-1;font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;padding:10px 14px;border-radius:10px;border:1px solid rgba(239,68,68,0.15);background:rgba(239,68,68,0.04);">
            <i class="fa-solid fa-circle-info" style="margin-right:7px;color:#f87171;"></i>
            Build a drug empire to earn passive income. Start as a Street Dealer, then upgrade to dominate the city. Requires <strong>Rep + Chemistry skill</strong>.
          </div>` +
            CONFIG.DRUG_TIERS.map((t, idx) => {
              const repOk = cr.rep >= t.reqRep;
              const chemOk = (cr.skills.chemistry || 0) >= t.reqChem;
              const cashOk = this.state.cash >= t.setupCost;
              const canStart = idx === 0 && repOk && chemOk && cashOk;
              const isLocked = !repOk || !chemOk;
              return `<div class="drug-tier-card${isLocked ? " locked-tier" : ""}">
              <img class="drug-tier-img" src="${DRUG_IMGS[t.id]}" alt="${t.name}" loading="lazy">
              <div class="drug-tier-overlay">
                <div class="drug-tier-icon"><i class="fa-solid ${t.icon}"></i></div>
                <div>
                  <div class="drug-tier-name">${t.name}</div>
                  <div class="drug-tier-tag">Tier ${idx + 1} · $${shortNumber(t.setupCost)} setup</div>
                </div>
              </div>
              <div class="drug-tier-body">
                <div class="drug-tier-desc">${t.desc}</div>
                <div class="drug-tier-stats">
                  <div class="drug-stat-box">
                    <div class="drug-stat-label">Income</div>
                    <div class="drug-stat-val" style="color:#4ade80;">$${shortNumber(t.income[0])}–$${shortNumber(t.income[1])}/mo</div>
                  </div>
                  <div class="drug-stat-box">
                    <div class="drug-stat-label">Arrest Risk</div>
                    <div class="drug-stat-val" style="color:#f87171;">${(t.arrestRisk * 100).toFixed(0)}%/mo</div>
                  </div>
                  <div class="drug-stat-box">
                    <div class="drug-stat-label">Req Rep</div>
                    <div class="drug-stat-val" style="color:${repOk ? "#4ade80" : "#f87171"};">${t.reqRep}</div>
                  </div>
                  <div class="drug-stat-box">
                    <div class="drug-stat-label">Req Chem XP</div>
                    <div class="drug-stat-val" style="color:${chemOk ? "#4ade80" : "#f87171"};">${t.reqChem || "—"}</div>
                  </div>
                </div>
                ${
                  idx === 0
                    ? `<button class="btn ${canStart ? "btn-danger" : "btn-outline"}" onclick="game.startDrugOperation('${t.id}')" ${canStart ? "" : "disabled"}>
                  <i class="fa-solid fa-flask" style="margin-right:6px;"></i>${cashOk ? (repOk && chemOk ? "Launch Operation" : "Skill Req Not Met") : "Need More Cash"}
                </button>`
                    : `<div style="font-size:0.75rem;opacity:0.45;text-align:center;padding:6px;border:1px dashed rgba(255,255,255,0.08);border-radius:8px;"><i class="fa-solid fa-lock" style="margin-right:5px;"></i>Upgrade from Street Dealer first</div>`
                }
              </div>
            </div>`;
            }).join("");
        } else {
          // Active empire — full status card
          const tDef = CONFIG.DRUG_TIERS.find((t) => t.id === de.tier);
          const nextTier = CONFIG.DRUG_TIERS[currentIdx + 1] || null;
          const deaPct = Math.round(de.deaHeat || 0);
          const deaColor =
            deaPct > 70 ? "#ef4444" : deaPct > 40 ? "#f97316" : "#f59e0b";
          const bribeCost = Math.round((de.income || 1000) * 0.18);
          const terrCost = Math.round((de.income || 1000) * 0.5);
          drugPanel.innerHTML = `
            <div class="card drug-empire-active">
              <div class="drug-empire-hero">
                <img src="${DRUG_IMGS[de.tier]}" alt="${tDef.name}" loading="lazy">
                <div class="drug-empire-hero-overlay">
                  <div class="drug-empire-hero-info">
                    <div class="drug-empire-eyebrow"><i class="fa-solid ${tDef.icon}" style="margin-right:6px;"></i>${tDef.name} · ${de.monthsActive} months active</div>
                    <div class="drug-empire-title">Drug Lord Operations</div>
                  </div>
                  <div class="drug-empire-right">
                    <div class="drug-empire-income-label">Monthly Income</div>
                    <div class="drug-empire-income">$${shortNumber(de.income)}</div>
                  </div>
                </div>
              </div>
              <div class="drug-empire-body">
                <div class="drug-empire-kpis">
                  <div class="drug-empire-kpi"><div class="drug-empire-kpi-label">Territory</div><div class="drug-empire-kpi-val">${de.territory || 0}%</div></div>
                  <div class="drug-empire-kpi"><div class="drug-empire-kpi-label">DEA Heat</div><div class="drug-empire-kpi-val" style="color:${deaColor};">${deaPct}%</div></div>
                  <div class="drug-empire-kpi"><div class="drug-empire-kpi-label">Turf Wars</div><div class="drug-empire-kpi-val">${de.turfWars || 0}</div></div>
                  <div class="drug-empire-kpi"><div class="drug-empire-kpi-label">Police Bribed</div><div class="drug-empire-kpi-val" style="color:${de.bribed ? "#4ade80" : "var(--text-muted)"};">${de.bribed ? "Yes" : "No"}</div></div>
                </div>
                <div class="drug-empire-dea-row">
                  <div class="drug-empire-dea-header">
                    <span><i class="fa-solid fa-shield-halved" style="color:${deaColor};margin-right:5px;"></i>DEA Investigation Progress</span>
                    <span style="color:${deaColor};font-weight:700;">${deaPct}%</span>
                  </div>
                  <div class="progress-bg" style="height:8px;margin:0;">
                    <div class="progress-fill" style="width:${deaPct}%;background:${deaColor};border-radius:999px;"></div>
                  </div>
                </div>
                <div class="drug-empire-actions">
                  <button class="btn btn-outline" onclick="game.bribeLocalCops()" ${de.bribed ? "disabled" : ""}><i class="fa-solid fa-hand-holding-dollar" style="margin-right:6px;"></i>Bribe Cops ($${shortNumber(bribeCost)})</button>
                  <button class="btn btn-outline" onclick="game.expandTerritory()"><i class="fa-solid fa-map-location-dot" style="margin-right:6px;"></i>Expand Territory ($${shortNumber(terrCost)})</button>
                  ${nextTier ? `<button class="btn btn-primary" onclick="game.startDrugOperation('${nextTier.id}')"><i class="fa-solid fa-arrow-trend-up" style="margin-right:6px;"></i>Upgrade to ${nextTier.name}</button>` : ""}
                  <button class="btn btn-danger" onclick="app.modal('Shut Down Empire?','Destroy all evidence and dissolve operations. All passive income stops permanently.',[{text:'Confirm Shutdown',cb:()=>{app.closeModal();game.shutDownDrugOp();}},{text:'Cancel',cb:()=>app.closeModal()}])"><i class="fa-solid fa-power-off" style="margin-right:6px;"></i>Shut Down</button>
                </div>
              </div>
            </div>`;
        }
      }

      // ── CRIME SKILLS ──────────────────────────────────────────────────────
      const skillsList = document.getElementById("crime-skills-list");
      if (skillsList) {
        const SKILL_IMGS = {
          stealth:
            "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=700&h=300&fit=crop&auto=format",
          intimidation:
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&h=300&fit=crop&auto=format",
          hacking:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&h=300&fit=crop&auto=format",
          street_smarts:
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&h=300&fit=crop&auto=format",
          chemistry:
            "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=700&h=300&fit=crop&auto=format",
          planning:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=700&h=300&fit=crop&auto=format",
        };
        skillsList.innerHTML = CONFIG.CRIME_SKILLS.map((s) => {
          const xp = cr.skills[s.id] || 0;
          const xpPct = Math.min(100, Math.round((xp / 3000) * 100));
          const bonus = Math.round(Math.min(0.3, xp / 3000) * 100);
          const lvlLabel = this._crimeSkillLevel(xp);
          const canTrain =
            this.state.cash >= s.trainCost &&
            this.state.stats.energy >= s.energyCost;
          return `<div class="card crime-skill-card">
            <img class="card-img" src="${SKILL_IMGS[s.id]}" alt="${s.name}" loading="lazy">
            <div style="margin-bottom:10px;">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:6px;">
                <h3 style="margin:0;display:flex;align-items:center;gap:8px;"><i class="fa-solid ${s.icon}" style="color:#a78bfa;"></i>${s.name}</h3>
                <div style="display:flex;gap:6px;align-items:center;flex-shrink:0;">
                  <span class="crime-skill-level-badge">${lvlLabel}</span>
                  <span class="crime-skill-bonus-badge"><i class="fa-solid fa-arrow-trend-up"></i>+${bonus}%</span>
                </div>
              </div>
              <p style="font-size:0.8rem;color:var(--text-muted);margin:0 0 10px;">${s.desc}</p>
            </div>
            <div class="crime-skill-xp-row"><span>XP Progress</span><span>${xp.toLocaleString()} / 3,000</span></div>
            <div class="crime-skill-bar"><div class="crime-skill-bar-fill" style="width:${xpPct}%;"></div></div>
            <button class="btn ${canTrain ? "btn-primary" : "btn-outline"}" onclick="game.trainCrimeSkill('${s.id}')" ${canTrain ? "" : "disabled"}>
              <i class="fa-solid fa-dumbbell" style="margin-right:6px;"></i>Train (+${s.xpGain} XP) — <span style="font-family:var(--font-mono);">$${shortNumber(s.trainCost)}</span> / <span style="opacity:0.7;">${s.energyCost}⚡</span>
            </button>
          </div>`;
        }).join("");
      }

      // ── LAWYERS ──────────────────────────────────────────────────────────
      const lawyerList = document.getElementById("lawyer-list");
      if (lawyerList) {
        const LAW_IMGS = [
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&h=300&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=700&h=300&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=700&h=300&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=700&h=300&fit=crop&auto=format",
          "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=700&h=300&fit=crop&auto=format",
        ];
        lawyerList.innerHTML = CONFIG.LAWYERS.map((l, i) => {
          const isCurrent = cr.lawyer === l.id;
          const canAfford = this.state.cash >= l.monthlyCost;
          const locked =
            l.reqDrugTier &&
            this._drugTierIndex(de.tier) < this._drugTierIndex(l.reqDrugTier);
          return `<div class="card${locked ? " crime-op-locked" : ""}" style="${isCurrent ? "border:1px solid rgba(74,222,128,0.35);box-shadow:0 0 0 1px rgba(74,222,128,0.08) inset;" : ""}">
            <img class="card-img" src="${LAW_IMGS[i]}" alt="${l.name}" loading="lazy">
            <div style="margin-bottom:4px;">
              <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:3px;">
                <h3 style="margin:0;">${l.name}</h3>
                <span class="tag ${isCurrent ? "safe" : ""}" style="flex-shrink:0;">${l.monthlyCost > 0 ? `$${shortNumber(l.monthlyCost)}/mo` : "Free"}</span>
              </div>
              <span class="lawyer-card-tier">Tier ${l.tier} Attorney</span>
            </div>
            <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:10px;">${l.desc}</p>
            <div class="lawyer-card-stats">
              <div class="lawyer-stat-box">
                <div class="lawyer-stat-label">Sentence Cut</div>
                <div class="lawyer-stat-val" style="color:#fbbf24;">−${Math.round(l.jailReduction * 100)}%</div>
              </div>
              <div class="lawyer-stat-box">
                <div class="lawyer-stat-label">Dismiss Chance</div>
                <div class="lawyer-stat-val" style="color:#4ade80;">${Math.round(l.dismissChance * 100)}%</div>
              </div>
              ${l.caseFee > 0 ? `<div class="lawyer-stat-box" style="grid-column:span 2;"><div class="lawyer-stat-label">Case Fee</div><div class="lawyer-stat-val">$${shortNumber(l.caseFee)}</div></div>` : ""}
            </div>
            ${
              locked
                ? `<div class="crime-op-locked-badge"><i class="fa-solid fa-lock"></i>Requires Drug Empire: ${l.reqDrugTier}</div>`
                : isCurrent
                  ? `<div style="display:flex;gap:8px;"><button class="btn btn-outline" style="flex:1;" disabled><i class="fa-solid fa-check" style="margin-right:5px;color:#4ade80;"></i>Currently Retained</button><button class="btn btn-danger" onclick="game.fireLawyer()" style="width:auto;padding:0 16px;">Fire</button></div>`
                  : `<button class="btn ${canAfford || l.monthlyCost === 0 ? "btn-primary" : "btn-outline"}" onclick="game.hireLawyer('${l.id}')" ${canAfford || l.monthlyCost === 0 ? "" : "disabled"}><i class="fa-solid fa-handshake" style="margin-right:6px;"></i>${canAfford || l.monthlyCost === 0 ? "Retain Attorney" : "Insufficient Funds"}</button>`
            }
          </div>`;
        }).join("");
      }

      // ── CRIME OPERATIONS ──────────────────────────────────────────────────
      const TYPE_COLORS = {
        Petty: { color: "#94a3b8", glow: "rgba(148,163,184,0.3)" },
        Street: { color: "#f97316", glow: "rgba(249,115,22,0.3)" },
        Felony: { color: "#ef4444", glow: "rgba(239,68,68,0.3)" },
        Cyber: { color: "#3b82f6", glow: "rgba(59,130,246,0.3)" },
        "Drug Trade": { color: "#a855f7", glow: "rgba(168,85,247,0.3)" },
        Organized: { color: "#dc2626", glow: "rgba(220,38,38,0.3)" },
        "White Collar": { color: "#38bdf8", glow: "rgba(56,189,248,0.3)" },
        Elite: { color: "#f59e0b", glow: "rgba(245,158,11,0.3)" },
      };
      const CRIME_IMGS = {
        shoplift:
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=700&h=300&fit=crop&auto=format",
        pickpocket:
          "https://images.unsplash.com/photo-1573408301185-9519f17b9c69?w=700&h=300&fit=crop&auto=format",
        mug: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&h=300&fit=crop&auto=format",
        carjack:
          "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=700&h=300&fit=crop&auto=format",
        burglary:
          "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=700&h=300&fit=crop&auto=format",
        robbery:
          "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?w=700&h=300&fit=crop&auto=format",
        phishing:
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=700&h=300&fit=crop&auto=format",
        scam: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&h=300&fit=crop&auto=format",
        corp_hack:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&h=300&fit=crop&auto=format",
        protection:
          "https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=700&h=300&fit=crop&auto=format",
        arms_deal:
          "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=700&h=300&fit=crop&auto=format",
        street_deal:
          "https://images.unsplash.com/photo-1587590741732-db3f6ccf99ea?w=700&h=300&fit=crop&auto=format",
        cook_sell:
          "https://images.unsplash.com/photo-1614924308600-fc72e1b0dce4?w=700&h=300&fit=crop&auto=format",
        distribution:
          "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=700&h=300&fit=crop&auto=format",
        heist:
          "https://images.unsplash.com/photo-1504707748692-419802426bc6?w=700&h=300&fit=crop&auto=format",
        insider:
          "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=700&h=300&fit=crop&auto=format",
        extortion:
          "https://images.unsplash.com/photo-1575368127640-c9f3c09b8fca?w=700&h=300&fit=crop&auto=format",
      };

      const typeOrder = [
        "Petty",
        "Street",
        "Felony",
        "Cyber",
        "Drug Trade",
        "Organized",
        "White Collar",
        "Elite",
      ];
      const byType = {};
      CONFIG.CRIMES.forEach((c) => {
        (byType[c.type] = byType[c.type] || []).push(c);
      });

      const CRIME_TYPE_ICONS = {
        Petty: "fa-hand",
        Street: "fa-street-view",
        Felony: "fa-handcuffs",
        Cyber: "fa-laptop-code",
        "Drug Trade": "fa-tablets",
        Organized: "fa-people-group",
        "White Collar": "fa-briefcase",
        Elite: "fa-crown",
      };

      let crimeHTML = "";
      typeOrder.forEach((type) => {
        if (!byType[type]) return;
        const tc = TYPE_COLORS[type] || {
          color: "#94a3b8",
          glow: "rgba(148,163,184,0.3)",
        };
        const unlockedOps = byType[type].filter((c) => cr.rep >= c.reqRep);
        if (!unlockedOps.length) return;
        crimeHTML += `<div class="crime-op-type-header" style="color:${tc.color};"><i class="fa-solid fa-circle-dot" style="font-size:0.5rem;"></i>${type}</div>`;
        crimeHTML += unlockedOps
          .map((c) => {
            const skillXp = cr.skills[c.skill] || 0;
            const skillBonus = Math.min(0.3, skillXp / 3000);
            const successChance = Math.max(
              0.05,
              Math.min(
                0.97,
                c.baseChance +
                  skillBonus -
                  cr.heat * 0.005 -
                  this.state.life.legalRecord * 0.012 +
                  this.state.stats.smarts * 0.002,
              ),
            );
            const successColor =
              successChance > 0.7
                ? "#4ade80"
                : successChance > 0.4
                  ? "#fbbf24"
                  : "#f87171";
            const skillDef = CONFIG.CRIME_SKILLS.find(
              (sk) => sk.id === c.skill,
            );
            const lawyerDef = cr.lawyer
              ? CONFIG.LAWYERS.find((l) => l.id === cr.lawyer)
              : null;
            const reducedJail = lawyerDef
              ? Math.max(1, Math.round(c.jail * (1 - lawyerDef.jailReduction)))
              : c.jail;
            const heatPenalty =
              cr.heat > 25
                ? `<div style="display:flex;align-items:center;gap:6px;padding:6px 10px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.18);border-radius:8px;font-size:0.74rem;color:#fca5a5;margin-bottom:10px;"><i class="fa-solid fa-fire-flame-curved" style="color:#ef4444;"></i> Heat penalty: −${(cr.heat * 0.5).toFixed(0)}% success</div>`
                : "";

            return `<div class="card crime-op-card" style="--op-color:${tc.color};">
            <div class="crime-op-top-bar" style="background:linear-gradient(90deg,${tc.color},${tc.color}44,transparent);"></div>
            <div class="crime-op-head">
              <div class="crime-op-icon" style="color:${tc.color};background:${tc.color}15;border:1px solid ${tc.color}33;">
                <i class="fa-solid ${CRIME_TYPE_ICONS[c.type] || "fa-skull"}"></i>
              </div>
              <div style="flex:1;min-width:0;">
                <div style="font-weight:800;font-size:0.96rem;margin-bottom:3px;">${c.name}</div>
                <span style="font-family:var(--font-mono);font-size:0.6rem;letter-spacing:1.5px;text-transform:uppercase;color:${tc.color};opacity:0.9;">${c.type}</span>
              </div>
              <div class="crime-op-ring" style="border-color:${successColor}55;">
                <span style="font-family:var(--font-mono);font-size:1rem;font-weight:900;color:${successColor};line-height:1;">${(successChance * 100).toFixed(0)}</span>
                <span style="font-size:0.5rem;letter-spacing:1px;color:var(--text-dim);text-transform:uppercase;">%</span>
              </div>
            </div>
            <p style="font-size:0.79rem;color:var(--text-muted);margin:0 0 12px;line-height:1.55;">${c.desc}</p>
            <div class="crime-op-meta">
              <div class="crime-op-meta-box">
                <div class="crime-op-meta-label">Payout</div>
                <div class="crime-op-meta-val" style="color:#4ade80;">$${shortNumber(c.reward[0])}<span style="opacity:0.4;font-size:0.8em;">–</span>${shortNumber(c.reward[1])}</div>
              </div>
              <div class="crime-op-meta-box">
                <div class="crime-op-meta-label">Sentence</div>
                <div class="crime-op-meta-val" style="color:#f87171;">${reducedJail}${lawyerDef && reducedJail < c.jail ? `<span style="text-decoration:line-through;opacity:0.35;font-size:0.75em;margin-left:3px;">${c.jail}</span>` : ""} mo</div>
              </div>
              <div class="crime-op-meta-box">
                <div class="crime-op-meta-label">Skill</div>
                <div class="crime-op-meta-val" style="color:#a78bfa;"><i class="fa-solid ${skillDef ? skillDef.icon : "fa-bolt"}" style="font-size:0.75em;margin-right:3px;"></i>+${Math.round(skillBonus * 100)}%</div>
              </div>
            </div>
            <div class="crime-op-bar" style="margin-bottom:${cr.heat > 25 ? "8px" : "12px"};">
              <div class="crime-op-bar-fill" style="width:${successChance * 100}%;background:linear-gradient(90deg,${successColor}99,${successColor});"></div>
            </div>
            ${heatPenalty}
            <button class="btn crime-execute-btn" style="background:linear-gradient(135deg,${tc.color}dd,${tc.color}88);border:1px solid ${tc.color}55;color:#fff;font-weight:800;" onclick="game.commitCrime('${c.id}')"><i class="fa-solid fa-masks-theater"></i> Run the Job</button>
          </div>`;
          })
          .join("");
      });
      // Locked operations — compact section
      const allLockedOps = CONFIG.CRIMES.filter(function (c) {
        return cr.rep < c.reqRep;
      });
      if (allLockedOps.length > 0) {
        var lockedHtml =
          '<div class="crime-locked-section" style="grid-column:1/-1;">';
        lockedHtml += '<div class="crime-locked-header">';
        lockedHtml +=
          '<span class="crime-locked-title"><i class="fa-solid fa-lock"></i> Locked Operations <span class="crime-locked-count">' +
          allLockedOps.length +
          "</span></span>";
        lockedHtml +=
          '<span class="crime-locked-hint">Commit crimes to earn Street Rep and unlock more operations</span>';
        lockedHtml += '</div><div class="crime-locked-grid">';
        allLockedOps.forEach(function (lc) {
          const ltc = TYPE_COLORS[lc.type] || { color: "#94a3b8" };
          lockedHtml += '<div class="crime-locked-item">';
          lockedHtml +=
            '<span class="crime-locked-item-type" style="color:' +
            ltc.color +
            ";border-color:" +
            ltc.color +
            '33;">' +
            lc.type +
            "</span>";
          lockedHtml +=
            '<span class="crime-locked-item-name">' + lc.name + "</span>";
          lockedHtml +=
            '<span class="crime-locked-item-pay">$' +
            shortNumber(lc.reward[1]) +
            "</span>";
          lockedHtml +=
            '<span class="crime-locked-item-req"><i class="fa-solid fa-lock"></i> ' +
            lc.reqRep +
            " Rep</span>";
          lockedHtml += "</div>";
        });
        lockedHtml += "</div></div>";
        crimeHTML += lockedHtml;
      }
      document.getElementById("crime-list").innerHTML = crimeHTML;
    }

    // --- STARTUPS ---
    // Business dashboard — empire grade + KPIs
    const bizDashboard = document.getElementById("biz-dashboard");
    if (bizDashboard) {
      const totalVal = this.state.startups.reduce(
        (s, x) => s + x.financials.val,
        0,
      );
      const totalEmp = this.state.startups.reduce(
        (s, x) => s + x.staff.dev + x.staff.sales + x.staff.mkt + x.staff.exec,
        0,
      );
      const totalNet = this.state.startups.reduce(
        (s, x) => s + (x.financials.rev - x.financials.burn),
        0,
      );
      document.getElementById("biz-count").innerText =
        this.state.startups.length;
      document.getElementById("biz-total-val").innerText =
        totalVal >= 1e9
          ? `$${(totalVal / 1e9).toFixed(2)}B`
          : totalVal >= 1e6
            ? `$${(totalVal / 1e6).toFixed(1)}M`
            : `$${(totalVal / 1000).toFixed(0)}K`;
      document.getElementById("biz-employees").innerText = totalEmp;
      const bizNetEl = document.getElementById("biz-net");
      if (bizNetEl) {
        bizNetEl.innerText = `${totalNet >= 0 ? "+" : ""}$${shortNumber(Math.round(totalNet))}`;
        bizNetEl.style.color =
          totalNet >= 0 ? "var(--accent-green)" : "var(--accent-red)";
      }
      // Empire grade ring
      let empireScore = 0;
      if (this.state.startups.length > 0) {
        const avgPmf =
          this.state.startups.reduce((s, x) => s + x.market.pmf, 0) /
          this.state.startups.length;
        const avgMorale =
          this.state.startups.reduce((s, x) => s + x.staff.morale, 0) /
          this.state.startups.length;
        const profitableCount = this.state.startups.filter(
          (x) => x.financials.rev > x.financials.burn,
        ).length;
        empireScore = Math.min(
          100,
          Math.round(
            avgPmf * 100 * 0.35 +
              avgMorale * 0.25 +
              (profitableCount / this.state.startups.length) * 100 * 0.25 +
              Math.min(30, this.state.startups.length * 10) * 0.15,
          ),
        );
      }
      const gradeLetters =
        empireScore >= 90
          ? "S"
          : empireScore >= 80
            ? "A"
            : empireScore >= 65
              ? "B"
              : empireScore >= 50
                ? "C"
                : empireScore >= 35
                  ? "D"
                  : "F";
      const gradeColors = {
        S: "#fbbf24",
        A: "#34d399",
        B: "#22d3ee",
        C: "#a78bfa",
        D: "#fb923c",
        F: "#f87171",
      };
      const gradeColor = gradeColors[gradeLetters];
      const gradeEl = document.getElementById("biz-grade-letter");
      const gradeArc = document.getElementById("biz-grade-arc");
      if (gradeEl) {
        gradeEl.textContent = gradeLetters;
        gradeEl.style.color = gradeColor;
      }
      if (gradeArc) {
        const circ = 2 * Math.PI * 32;
        gradeArc.style.stroke = gradeColor;
        gradeArc.style.strokeDasharray = `${(empireScore / 100) * circ} ${circ}`;
        gradeArc.style.filter = `drop-shadow(0 0 8px ${gradeColor}88)`;
      }
      // Portfolio summary
      const portfolioSummary = document.getElementById("biz-portfolio-summary");
      if (portfolioSummary && this.state.startups.length > 0) {
        const profitable = this.state.startups.filter(
          (x) => x.financials.rev > x.financials.burn,
        ).length;
        portfolioSummary.innerHTML = `<span style="color:#34d399">${profitable} profitable</span>&nbsp;·&nbsp;<span style="color:#64748b">${this.state.startups.length - profitable} growing</span>`;
      }

      // Guide panel
      let guideHtml = "";
      if (this.state.startups.length === 0) {
        guideHtml = `<div class="biz-guide">
          <div class="biz-guide-icon"><i class="fa-solid fa-map"></i></div>
          <div class="biz-guide-content">
            <div class="biz-guide-title">Your First Company Awaits</div>
            <div class="biz-guide-steps">
              <div class="biz-guide-step"><span class="biz-step-num">1</span><span>Save at least <b>$4K</b> — E-Commerce is the cheapest</span></div>
              <div class="biz-guide-step"><span class="biz-step-num">2</span><span>Pick an industry below and launch</span></div>
              <div class="biz-guide-step"><span class="biz-step-num">3</span><span>Hire <b>2 Developers</b> — they build your product</span></div>
              <div class="biz-guide-step"><span class="biz-step-num">4</span><span>Hit <b>5+ features</b> then add Sales to get users</span></div>
              <div class="biz-guide-step"><span class="biz-step-num">5</span><span>Reach PMF 40%+ then <b>Exit for max profit</b></span></div>
            </div>
          </div>
        </div>`;
      } else {
        const criticalAlerts = [];
        const actionItems = [];
        this.state.startups.forEach((s) => {
          const teamSize =
            s.staff.dev + s.staff.sales + s.staff.mkt + s.staff.exec;
          const pmf = s.market.pmf;
          const profit = s.financials.rev - s.financials.burn;
          const runway = s.financials.months_runway;
          const morale = s.staff.morale;
          if (runway < 3 && profit < 0)
            criticalAlerts.push(
              `<div class="biz-alert-item critical"><i class="fa-solid fa-triangle-exclamation"></i> <b>${s.name}</b> has <b>${runway.toFixed(0)}mo runway</b> left — Invest or raise NOW</div>`,
            );
          else if (morale < 25)
            criticalAlerts.push(
              `<div class="biz-alert-item warn"><i class="fa-solid fa-face-frown"></i> <b>${s.name}</b> morale at <b>${morale.toFixed(0)}%</b> — Boost morale before team quits</div>`,
            );
          if (teamSize === 0)
            actionItems.push(
              `<b>${s.name}</b>: Hire Developers to start building!`,
            );
          else if (pmf > 0.25 && s.staff.sales === 0)
            actionItems.push(
              `<b>${s.name}</b>: PMF ${(pmf * 100).toFixed(0)}% ✓ — Time to hire Sales`,
            );
          else if (pmf > 0.4 && s.staff.mkt === 0)
            actionItems.push(
              `<b>${s.name}</b>: Strong PMF — add Marketing to 10x growth`,
            );
          else if (s.product.bugs > 10)
            actionItems.push(
              `<b>${s.name}</b>: ${s.product.bugs.toFixed(0)} bugs are hurting growth — hire devs`,
            );
          else if (profit > 0)
            actionItems.push(
              `<b>${s.name}</b>: Profitable! Scale up or plan your Exit`,
            );
        });
        let alertHtml =
          criticalAlerts.length > 0
            ? `<div class="biz-alerts">${criticalAlerts.join("")}</div>`
            : "";
        let tipsHtml =
          actionItems.length > 0
            ? `<div class="biz-guide biz-guide-tips">
          <div class="biz-guide-icon"><i class="fa-solid fa-compass"></i></div>
          <div class="biz-guide-content">
            <div class="biz-guide-title">Next Moves</div>
            <div class="biz-guide-tip-list">${actionItems.map((t) => `<div class="biz-guide-tip"><i class="fa-solid fa-arrow-right"></i>${t}</div>`).join("")}</div>
          </div>
        </div>`
            : "";
        guideHtml = alertHtml + tipsHtml;
      }
      bizDashboard.innerHTML = guideHtml;
    }

    // Startup type grid
    const typeGrid = document.getElementById("startup-type-grid");
    if (typeGrid) {
      typeGrid.innerHTML = CONFIG.STARTUP_TYPES.map((t) => {
        const canAfford = this.state.cash >= t.cost;
        return `<div class="btc2-card ${canAfford ? "" : "btc2-locked"}" onclick="${canAfford ? `game._createStartup('${t.id}')` : ""}">
          <div class="btc2-accent-bar" style="background:${t.color}"></div>
          <div class="btc2-icon" style="color:${t.color};background:${t.color}15;border-color:${t.color}30">
            <i class="fa-solid ${t.icon}"></i>
          </div>
          <div class="btc2-body">
            <div class="btc2-name">${t.name}</div>
            <div class="btc2-desc">${t.desc}</div>
          </div>
          <div class="btc2-footer">
            <div class="btc2-cost ${canAfford ? "ok" : "no"}">
              <i class="fa-solid fa-${canAfford ? "unlock" : "lock"}"></i>
              <span>${canAfford ? `$${shortNumber(t.cost)}` : `$${shortNumber(t.cost)} needed`}</span>
            </div>
            <div class="btc2-right">
              <span class="btc2-upside" style="color:${t.color}">${t.upside}x</span>
              <div class="btc2-dots">${Array.from({ length: 3 })
                .map(
                  (_, j) =>
                    `<span class="btc2-dot${j < Math.ceil(t.difficulty) ? " on" : ""}" style="${j < Math.ceil(t.difficulty) ? `background:${t.color}` : ""}"></span>`,
                )
                .join("")}</div>
            </div>
          </div>
          ${canAfford ? `<div class="btc2-launch-btn" style="background:${t.color}18;border-color:${t.color}40;color:${t.color}">LAUNCH <i class="fa-solid fa-rocket"></i></div>` : ""}
        </div>`;
      }).join("");
    }

    // Active startups title
    const activeTitle = document.getElementById("active-startups-title");
    if (activeTitle)
      activeTitle.style.display = this.state.startups.length ? "" : "none";

    document.getElementById("startup-list").innerHTML = this.state.startups
      .map((s, i) => {
        const pmfPct = Math.round(s.market.pmf * 100);
        const users =
          s.market.users > 1_000_000
            ? (s.market.users / 1_000_000).toFixed(1) + "M"
            : s.market.users > 1000
              ? (s.market.users / 1000).toFixed(1) + "K"
              : s.market.users.toFixed(0);
        const burn = s.financials.burn;
        const rev = s.financials.rev;
        const runway = Math.max(0, s.financials.months_runway);
        const profit = rev - burn;
        const isProfit = profit >= 0;
        const profitColor = isProfit ? "#34d399" : "#f87171";
        const typeInfo =
          CONFIG.STARTUP_TYPES.find((t) => t.id === s.info.type) || {};
        const typeColor = typeInfo.color || "#a78bfa";
        const runwayPct = Math.min(100, (runway / 18) * 100);
        const runwayColor =
          runway > 6 ? "#34d399" : runway > 3 ? "#fbbf24" : "#f87171";
        const pmfColor =
          pmfPct >= 50 ? "#34d399" : pmfPct >= 25 ? "#fbbf24" : "#f87171";
        const moraleColor =
          s.staff.morale > 60
            ? "#34d399"
            : s.staff.morale > 30
              ? "#fbbf24"
              : "#f87171";
        const moraleIcon =
          s.staff.morale > 60
            ? "fa-face-laugh"
            : s.staff.morale > 30
              ? "fa-face-meh"
              : "fa-face-frown";
        const valFmt =
          s.financials.val >= 1e9
            ? "$" + (s.financials.val / 1e9).toFixed(2) + "B"
            : s.financials.val >= 1e6
              ? "$" + (s.financials.val / 1e6).toFixed(1) + "M"
              : "$" + (s.financials.val / 1000).toFixed(0) + "K";
        const isCritical = runway < 3 && profit < 0;
        const statusLabel =
          profit > 0
            ? "PROFITABLE"
            : runway > 6
              ? "GROWING"
              : runway > 2
                ? "STRUGGLING"
                : "CRITICAL";
        const statusColor =
          profit > 0
            ? "#34d399"
            : runway > 6
              ? "#fbbf24"
              : runway > 2
                ? "#fb923c"
                : "#f87171";
        const healthScore = Math.min(
          100,
          Math.round(
            pmfPct * 0.3 +
              s.staff.morale * 0.4 +
              Math.min(100, runwayPct) * 0.3,
          ),
        );
        const healthColor =
          healthScore > 70
            ? "#34d399"
            : healthScore > 45
              ? "#fbbf24"
              : "#f87171";
        let milestone =
          s.financials.val < 50000
            ? "First milestone: $50K valuation"
            : s.financials.val < 500000
              ? "Scale to $500K valuation"
              : s.financials.val < 1000000
                ? "Reach $1M valuation"
                : s.financials.val < 10000000
                  ? "Target a $10M exit"
                  : "IPO ready — consider exiting!";
        let alertBanner = "";
        if (isCritical)
          alertBanner = `<div class="biz3-alert critical"><i class="fa-solid fa-siren-on"></i> CRITICAL — ${runway.toFixed(0)} months runway left. Invest or fundraise immediately.</div>`;
        else if (s.staff.morale < 30)
          alertBanner = `<div class="biz3-alert warn"><i class="fa-solid fa-face-angry"></i> MORALE CRISIS — Team at ${s.staff.morale.toFixed(0)}%. Boost morale before they quit.</div>`;
        else if (s.product.bugs > 15)
          alertBanner = `<div class="biz3-alert info"><i class="fa-solid fa-bug"></i> BUG STORM — ${s.product.bugs.toFixed(0)} bugs are tanking your reviews.</div>`;
        const teamSize =
          s.staff.dev + s.staff.sales + s.staff.mkt + s.staff.exec;
        const roleHtml = Object.keys(CONFIG.STARTUP_ROLES)
          .map((role) => {
            const r = CONFIG.STARTUP_ROLES[role];
            const count = s.staff[role] || 0;
            return `<div class="biz3-role-row">
            <div class="biz3-role-icon" style="color:${typeColor};background:${typeColor}12;border-color:${typeColor}25">
              <i class="fa-solid ${r.icon}"></i>
            </div>
            <div class="biz3-role-info">
              <div class="biz3-role-name">${role.toUpperCase()}</div>
              <div class="biz3-role-cost">$${r.salary.toLocaleString()}/mo ea</div>
            </div>
            <div class="biz3-role-ctrl">
              <button class="biz3-btn-fire" onclick="game.manageStartup(${i},'fire','${role}')"><i class="fa-solid fa-minus"></i></button>
              <span class="biz3-role-num" style="color:${count > 0 ? typeColor : "#475569"}">${count}</span>
              <button class="biz3-btn-hire" onclick="game.manageStartup(${i},'hire','${role}')"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>`;
          })
          .join("");

        return `<div class="biz3-card${isCritical ? " biz3-critical" : ""}" style="--bc:${typeColor}">
          <div class="biz3-stripe" style="background:linear-gradient(90deg,${typeColor}cc 0%,${typeColor}33 55%,transparent)"></div>
          ${alertBanner}
          <div class="biz3-hdr">
            <div class="biz3-hdr-left">
              <div class="biz3-icon" style="background:${typeColor}12;color:${typeColor};border-color:${typeColor}35">
                <i class="fa-solid ${typeInfo.icon || "fa-building"}"></i>
              </div>
              <div class="biz3-title-wrap">
                <div class="biz3-company-name">${s.name}</div>
                <div class="biz3-tags">
                  <span class="biz3-industry-tag" style="color:${typeColor};background:${typeColor}12;border-color:${typeColor}28">${(typeInfo.name || s.info.type).toUpperCase()}</span>
                  <span class="biz3-status-tag" style="color:${statusColor};background:${statusColor}12;border-color:${statusColor}28"><i class="fa-solid fa-circle biz3-pulse-dot" style="font-size:0.4rem"></i> ${statusLabel}</span>
                </div>
              </div>
            </div>
            <div class="biz3-hdr-right">
              <div class="biz3-big-profit" style="color:${profitColor}">${isProfit ? "+" : ""}$${shortNumber(Math.round(profit))}<span class="biz3-per-mo">/mo</span></div>
              <div class="biz3-health-bar-wrap">
                <span class="biz3-health-lbl">HEALTH</span>
                <div class="biz3-health-track"><div class="biz3-health-fill" style="width:${healthScore}%;background:linear-gradient(90deg,${healthColor},${healthColor}aa)"></div></div>
                <span class="biz3-health-num" style="color:${healthColor}">${healthScore}</span>
              </div>
            </div>
          </div>
          <div class="biz3-kpis">
            <div class="biz3-kpi-tile">
              <div class="biz3-kti" style="color:#a78bfa"><i class="fa-solid fa-scale-balanced"></i></div>
              <div class="biz3-ktn">${valFmt}</div>
              <div class="biz3-ktl">VALUATION</div>
            </div>
            <div class="biz3-kpi-tile">
              <div class="biz3-kti" style="color:#22d3ee"><i class="fa-solid fa-users"></i></div>
              <div class="biz3-ktn">${users}</div>
              <div class="biz3-ktl">USERS</div>
            </div>
            <div class="biz3-kpi-tile">
              <div class="biz3-kti" style="color:#34d399"><i class="fa-solid fa-vault"></i></div>
              <div class="biz3-ktn" style="color:${s.financials.cash < burn * 3 ? "#f87171" : "#34d399"}">$${shortNumber(Math.round(s.financials.cash))}</div>
              <div class="biz3-ktl">CASH</div>
            </div>
            <div class="biz3-kpi-tile">
              <div class="biz3-kti" style="color:#f87171"><i class="fa-solid fa-fire-flame-curved"></i></div>
              <div class="biz3-ktn" style="color:#f87171">$${shortNumber(Math.round(burn))}</div>
              <div class="biz3-ktl">BURN/MO</div>
            </div>
          </div>
          <div class="biz3-meters">
            <div class="biz3-meter">
              <div class="biz3-meter-hdr">
                <span><i class="fa-solid fa-bullseye" style="color:${pmfColor}"></i> Product-Market Fit</span>
                <span class="biz3-mval" style="color:${pmfColor}">${pmfPct}%</span>
              </div>
              <div class="biz3-meter-track"><div class="biz3-meter-fill${pmfPct >= 50 ? " shimmer" : ""}" style="width:${pmfPct}%;background:${pmfColor}"></div></div>
              <div class="biz3-meter-hint">${pmfPct < 25 ? "Build features to find PMF" : pmfPct < 50 ? "Getting traction — add Sales!" : pmfPct < 75 ? "Strong PMF — scale with Marketing" : "Excellent PMF — ready to exit"}</div>
            </div>
            <div class="biz3-meter">
              <div class="biz3-meter-hdr">
                <span><i class="fa-solid fa-hourglass-half" style="color:${runwayColor}"></i> Runway</span>
                <span class="biz3-mval" style="color:${runwayColor}">${runway.toFixed(1)} months</span>
              </div>
              <div class="biz3-meter-track"><div class="biz3-meter-fill" style="width:${runwayPct}%;background:${runwayColor}"></div></div>
              <div class="biz3-meter-hint">${runway < 3 ? "⚠️ Running out — act now!" : runway < 6 ? "Tight — consider raising" : runway < 12 ? "Solid runway — keep growing" : "Healthy cash position"}</div>
            </div>
          </div>
          <div class="biz3-mid-grid">
            <div class="biz3-mid-col">
              <div class="biz3-col-hdr"><i class="fa-solid fa-microchip" style="color:${typeColor}"></i> PRODUCT</div>
              <div class="biz3-product-row">
                <div class="biz3-p-stat green"><i class="fa-solid fa-circle-check"></i><span class="biz3-ps-num">${s.product.features.toFixed(0)}</span><span class="biz3-ps-lbl">Features</span></div>
                <div class="biz3-p-stat red"><i class="fa-solid fa-bug"></i><span class="biz3-ps-num">${s.product.bugs.toFixed(0)}</span><span class="biz3-ps-lbl">Bugs</span></div>
              </div>
              <div class="biz3-milestone"><i class="fa-solid fa-flag-checkered" style="color:${typeColor}"></i><span>${milestone}</span></div>
            </div>
            <div class="biz3-mid-col">
              <div class="biz3-col-hdr">
                <i class="fa-solid fa-users-gear" style="color:${typeColor}"></i> TEAM (${teamSize})
                <div class="biz3-morale-chip"><i class="fa-solid ${moraleIcon}" style="color:${moraleColor}"></i><span style="color:${moraleColor}">${s.staff.morale.toFixed(0)}%</span></div>
              </div>
              <div class="biz3-roles">${roleHtml}</div>
            </div>
          </div>
          <div class="biz3-actions-hdr"><i class="fa-solid fa-terminal"></i> COMMAND ACTIONS</div>
          <div class="biz3-actions">
            <button class="biz3-act biz3-invest" onclick="game.investInStartup(${i})">
              <div class="biz3-act-icon"><i class="fa-solid fa-piggy-bank"></i></div>
              <div class="biz3-act-label">Invest</div>
              <div class="biz3-act-sub">Add cash</div>
            </button>
            <button class="biz3-act biz3-morale-btn" onclick="game.boostMorale(${i})">
              <div class="biz3-act-icon"><i class="fa-solid fa-champagne-glasses"></i></div>
              <div class="biz3-act-label">Morale</div>
              <div class="biz3-act-sub">Team boost</div>
            </button>
            <button class="biz3-act biz3-campaign" onclick="game.runMarketingCampaign(${i})">
              <div class="biz3-act-icon"><i class="fa-solid fa-bullhorn"></i></div>
              <div class="biz3-act-label">Campaign</div>
              <div class="biz3-act-sub">Get users</div>
            </button>
            <button class="biz3-act biz3-funding-btn" onclick="game.seekFunding(${i})">
              <div class="biz3-act-icon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
              <div class="biz3-act-label">Funding</div>
              <div class="biz3-act-sub">Raise round</div>
            </button>
            <button class="biz3-act biz3-pivot-btn" onclick="game.pivotStartup(${i})">
              <div class="biz3-act-icon"><i class="fa-solid fa-rotate"></i></div>
              <div class="biz3-act-label">Pivot</div>
              <div class="biz3-act-sub">Change model</div>
            </button>
            <button class="biz3-act biz3-exit-btn" onclick="game.exitStartup(${i})">
              <div class="biz3-act-icon"><i class="fa-solid fa-trophy"></i></div>
              <div class="biz3-act-label">Exit / IPO</div>
              <div class="biz3-act-sub" style="color:${typeColor}">${valFmt}</div>
            </button>
            <button class="biz3-act biz3-advisor-btn" onclick="game.getAdvisorTip(${i})">
              <div class="biz3-act-icon"><i class="fa-solid fa-lightbulb"></i></div>
              <div class="biz3-act-label">Advisor</div>
              <div class="biz3-act-sub">Get advice</div>
            </button>
          </div>
        </div>`;
      })
      .join("");

    const HUSTLE_ICONS = {
      freelance_code: "fa-code",
      private_tutor: "fa-graduation-cap",
      flip_items: "fa-arrows-rotate",
      event_photos: "fa-camera",
      luxury_delivery: "fa-truck-fast",
    };

    // Update header stats
    const hhSessions = document.getElementById("hh-sessions");
    const hhAge = document.getElementById("hh-age");
    const hhEnergyBar = document.getElementById("hh-energy-bar");
    const hhEnergyLabel = document.getElementById("hh-energy-label");
    const energy = Math.round(this.state.stats.energy);
    if (hhSessions)
      hhSessions.textContent = this.state.runStats.hustleActions || 0;
    if (hhAge) hhAge.textContent = `Age ${Math.floor(this.state.age / 12)}`;
    if (hhEnergyBar) hhEnergyBar.style.width = `${energy}%`;
    if (hhEnergyLabel)
      hhEnergyLabel.innerHTML = `Energy: <strong style="color:#fbbf24">${energy}</strong> — ${energy >= 70 ? "Ready to grind" : energy >= 40 ? "Some fatigue" : "Low energy, rest up"}`;

    const hustleList = document.getElementById("hustle-list");
    if (hustleList) {
      hustleList.innerHTML = CONFIG.SIDE_HUSTLES.map((h) => {
        const canDo =
          this.state.stats.smarts >= h.reqSmarts &&
          this.state.stats.energy >= h.energy &&
          !this.state.life.dead &&
          !this.state.life.retired;
        const icon = HUSTLE_ICONS[h.id] || "fa-bolt";
        const payoutPct = Math.min(100, Math.round(h.payout[1] / 98));
        return `<div class="hustle-card hc-amber${canDo ? "" : " hc-locked"}">
          <div class="hc-top-bar">
            <span class="hc-badge"><i class="fa-solid fa-bolt"></i> Side Hustle</span>
            <span class="hc-payout-tag">$${h.payout[0].toLocaleString()}–$${h.payout[1].toLocaleString()}</span>
          </div>
          <div class="hc-body">
            <div class="hc-icon-wrap"><i class="fa-solid ${icon}"></i></div>
            <div class="hc-info">
              <div class="hc-name">${h.name}</div>
              <div class="hc-desc">${h.desc}</div>
            </div>
          </div>
          <div class="hc-stats-row">
            <div class="hc-stat-pill"><i class="fa-solid fa-brain"></i> IQ ${h.reqSmarts}</div>
            <div class="hc-stat-pill energy"><i class="fa-solid fa-bolt"></i> NRG ${h.energy}</div>
            <div class="hc-stat-pill stress"><i class="fa-solid fa-fire"></i> ${h.stress}×</div>
          </div>
          <div class="hc-payout-track"><div class="hc-payout-fill" style="width:${payoutPct}%"></div></div>
          <button class="hc-cta${canDo ? " ready" : ""}" onclick="game.doHustle('${h.id}')" ${canDo ? "" : "disabled"}>
            <i class="fa-solid fa-${canDo ? "play" : "lock"}"></i>${canDo ? "LAUNCH HUSTLE" : "LOCKED / TIRED"}
          </button>
        </div>`;
      }).join("");
    }

    const CONTRACT_ICONS = {
      cto_advisor: "fa-server",
      funnel_consult: "fa-chart-bar",
      ai_automation: "fa-robot",
      exec_coaching: "fa-user-tie",
    };
    const contractList = document.getElementById("contract-list");
    if (contractList) {
      contractList.innerHTML = CONFIG.HIGH_TICKET_CONTRACTS.map((c) => {
        const canDo =
          this.state.stats.smarts >= c.reqSmarts &&
          this.state.stats.energy >= c.energy &&
          !this.state.life.dead &&
          !this.state.life.retired;
        const icon = CONTRACT_ICONS[c.id] || "fa-file-signature";
        const payoutPct = Math.min(100, Math.round(c.payout[1] / 98));
        return `<div class="hustle-card hc-cyan${canDo ? "" : " hc-locked"}">
          <div class="hc-top-bar">
            <span class="hc-badge"><i class="fa-solid fa-file-signature"></i> Contract</span>
            <span class="hc-payout-tag">$${c.payout[0].toLocaleString()}–$${c.payout[1].toLocaleString()}</span>
          </div>
          <div class="hc-body">
            <div class="hc-icon-wrap"><i class="fa-solid ${icon}"></i></div>
            <div class="hc-info">
              <div class="hc-name">${c.name}</div>
              <div class="hc-desc">${c.desc}</div>
            </div>
          </div>
          <div class="hc-stats-row">
            <div class="hc-stat-pill"><i class="fa-solid fa-brain"></i> IQ ${c.reqSmarts}</div>
            <div class="hc-stat-pill energy"><i class="fa-solid fa-bolt"></i> NRG ${c.energy}</div>
            <div class="hc-stat-pill stress"><i class="fa-solid fa-fire"></i> ${c.stress}×</div>
          </div>
          <div class="hc-payout-track"><div class="hc-payout-fill" style="width:${payoutPct}%"></div></div>
          <button class="hc-cta${canDo ? " ready" : ""}" onclick="game.doContract('${c.id}')" ${canDo ? "" : "disabled"}>
            <i class="fa-solid fa-${canDo ? "play" : "lock"}"></i>${canDo ? "TAKE CONTRACT" : "LOCKED / TIRED"}
          </button>
        </div>`;
      }).join("");
    }

    const CREATOR_ICONS = {
      youtube_finance: "fa-youtube",
      shortform: "fa-mobile-screen",
      newsletter: "fa-envelope-open-text",
    };
    const creatorList = document.getElementById("creator-list");
    if (creatorList) {
      const launchCards = CONFIG.CHANNEL_TYPES.map((t) => {
        const canLaunch =
          this.state.stats.smarts >= t.reqSmarts &&
          this.state.cash >= t.cost &&
          !this.state.life.dead &&
          !this.state.life.retired;
        const icon = CREATOR_ICONS[t.id] || "fa-circle-play";
        return `<div class="hustle-card hc-purple${canLaunch ? "" : " hc-locked"}">
          <div class="hc-top-bar">
            <span class="hc-badge"><i class="fa-solid fa-circle-play"></i> Creator</span>
            <span class="hc-payout-tag">$${shortNumber(t.cost)} invest</span>
          </div>
          <div class="hc-body">
            <div class="hc-icon-wrap"><i class="${icon === "fa-youtube" ? "fa-brands" : "fa-solid"} ${icon}"></i></div>
            <div class="hc-info">
              <div class="hc-name">${t.name}</div>
              <div class="hc-desc">RPM $${t.rpm.toFixed(1)} &middot; Volatility ${(t.volatility * 100).toFixed(0)}%</div>
            </div>
          </div>
          <div class="hc-stats-row">
            <div class="hc-stat-pill"><i class="fa-solid fa-brain"></i> IQ ${t.reqSmarts}</div>
            <div class="hc-stat-pill"><i class="fa-solid fa-dollar-sign"></i> $${shortNumber(t.cost)}</div>
          </div>
          <button class="hc-cta${canLaunch ? " ready" : ""}" onclick="game.launchChannel('${t.id}')" ${canLaunch ? "" : "disabled"}>
            <i class="fa-solid fa-${canLaunch ? "rocket" : "lock"}"></i>${canLaunch ? "LAUNCH CHANNEL" : "LOCKED / BROKE"}
          </button>
        </div>`;
      }).join("");

      const activeChannels = this.state.wealth.channels.length
        ? this.state.wealth.channels
            .map((c, idx) => {
              const t = CONFIG.CHANNEL_TYPES.find((x) => x.id === c.typeId);
              if (!t) return "";
              const growthCost = Math.floor(250 + c.audience * 2.2);
              return `<div class="hustle-card hc-purple">
                <div class="hc-top-bar">
                  <span class="hc-badge"><span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#34d399;margin-right:5px;vertical-align:middle;animation:liveRedPulse 1.2s ease-in-out infinite;"></span> LIVE</span>
                  <span class="hc-payout-tag" style="color:#34d399">$${shortNumber(Math.floor(c.monthly))}/mo</span>
                </div>
                <div class="hc-body">
                  <div class="hc-icon-wrap"><i class="fa-solid fa-signal"></i></div>
                  <div class="hc-info">
                    <div class="hc-name">${t.name}</div>
                    <div class="hc-desc">Active channel — earning passive income</div>
                  </div>
                </div>
                <div class="hc-metrics-grid">
                  <div class="hc-metric">
                    <div class="hc-metric-label">Audience</div>
                    <div class="hc-metric-val">${shortNumber(Math.floor(c.audience))}</div>
                  </div>
                  <div class="hc-metric">
                    <div class="hc-metric-label">Last Month</div>
                    <div class="hc-metric-val green">$${shortNumber(Math.floor(c.monthly))}</div>
                  </div>
                </div>
                <button class="hc-cta ready" onclick="game.growChannel(${idx})">
                  <i class="fa-solid fa-chart-line"></i>PROMOTE ($${shortNumber(growthCost)})
                </button>
              </div>`;
            })
            .join("")
        : `<div class="hustle-card hc-purple hc-locked" style="grid-column:span 2;text-align:center;padding:32px 20px 28px;">
            <div style="font-size:2.2rem;margin-bottom:12px;color:rgba(192,132,252,0.35)"><i class="fa-solid fa-circle-play"></i></div>
            <div style="color:rgba(148,163,184,0.6);font-size:0.88rem;line-height:1.6;">Launch a channel above to start earning passive income every month.</div>
          </div>`;

      creatorList.innerHTML = launchCards + activeChannels;
    }

    const passivePreview = document.getElementById("passive-preview");
    if (passivePreview) {
      const flow = this.state.wealth.lastMonthly;
      const net = flow.income - flow.expenses;
      const netColor = net >= 0 ? "var(--green)" : "var(--red)";
      passivePreview.innerHTML = `
        <div class="card-header">
          <h3>Passive Cashflow</h3>
          <span class="tag" style="color:${netColor}; border-color:${netColor};">${net >= 0 ? "+" : ""}$${shortNumber(Math.floor(net))}</span>
        </div>
        <div class="data-grid-3">
          <div class="data-box highlight-green">
            <div class="data-label">Income</div>
            <div class="data-value green">$${shortNumber(Math.floor(flow.income))}</div>
          </div>
          <div class="data-box highlight-red">
            <div class="data-label">Expenses</div>
            <div class="data-value red">$${shortNumber(Math.floor(flow.expenses))}</div>
          </div>
          <div class="data-box">
            <div class="data-label">Bond Units</div>
            <div class="data-value">${this.state.wealth.bonds}</div>
          </div>
        </div>
        <div class="stat-note">${flow.notes}</div>`;
    }

    const franchiseList = document.getElementById("franchise-list");
    if (franchiseList) {
      const FRANCH_IMGS = {
        coffee_chain:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&h=300&fit=crop&auto=format",
        gym_studio:
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&h=300&fit=crop&auto=format",
        storage_units:
          "storage.png",
      };
      franchiseList.innerHTML = CONFIG.FRANCHISES.map((f) => {
        const owned = this.state.wealth.franchises?.[f.id] || 0;
        return `<div class="card">
          <img class="card-img" src="${FRANCH_IMGS[f.id] || FRANCH_IMGS.coffee_chain}" alt="${f.name}" loading="lazy">
          <div class="card-header">
            <h3>${f.name}</h3>
            <span class="tag">Owned: ${owned}</span>
          </div>
          <div class="stat-meta-row" style="margin-bottom:12px;">
            <span>Cost $${shortNumber(f.cost)}</span>
            <span>Rev $${shortNumber(f.revenue)}/mo</span>
          </div>
          <div class="action-grid">
            <button class="btn btn-success" onclick="game.buyFranchise('${f.id}')">Buy</button>
            <button class="btn btn-danger" onclick="game.sellFranchise('${f.id}')">Sell</button>
          </div>
        </div>`;
      }).join("");
    }

    const propertyList = document.getElementById("property-list");
    if (propertyList) {
      const PROP_IMGS = {
        duplex:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&h=300&fit=crop&auto=format",
        stripmall:
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=300&fit=crop&auto=format",
        warehouse:
          "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=700&h=300&fit=crop&auto=format",
      };
      propertyList.innerHTML = CONFIG.PROPERTIES.map((p) => {
        const owned = this.state.wealth.properties[p.id] || 0;
        return `<div class="card">
          <img class="card-img" src="${PROP_IMGS[p.id] || PROP_IMGS.duplex}" alt="${p.name}" loading="lazy">
          <div class="card-header">
            <h3>${p.name}</h3>
            <span class="tag">Owned: ${owned}</span>
          </div>
          <div class="stat-meta-row" style="margin-bottom:12px;">
            <span>Cost $${shortNumber(p.cost)}</span>
            <span>Rent $${shortNumber(p.rent)}/mo</span>
          </div>
          <div class="action-grid">
            <button class="btn btn-success" onclick="game.buyProperty('${p.id}')">Buy</button>
            <button class="btn btn-danger" onclick="game.sellProperty('${p.id}')">Sell</button>
          </div>
        </div>`;
      }).join("");
    }

    const bondList = document.getElementById("bond-list");
    if (bondList) {
      const mark = Math.max(
        850,
        Math.min(
          1150,
          CONFIG.BOND_UNIT_PRICE *
            (1 +
              (this.state.economy.interestRate - 0.05) * 1.5 -
              this.state.economy.inflation * 0.8),
        ),
      );
      const annualYield = Math.max(
        0.01,
        this.state.economy.interestRate +
          0.01 -
          this.state.economy.inflation * 0.25,
      );
      bondList.innerHTML = `<div class="card" style="grid-column: span 2;">
        <img class="card-img" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&h=300&fit=crop&auto=format" alt="Bonds" loading="lazy">
        <div class="card-header">
          <h3>Government & Corporate Bonds</h3>
          <span class="tag safe">Defensive Income</span>
        </div>
        <div class="data-grid-4">
          <div class="data-box">
            <div class="data-label">Unit Price</div>
            <div class="data-value">$${CONFIG.BOND_UNIT_PRICE}</div>
          </div>
          <div class="data-box">
            <div class="data-label">Market Price</div>
            <div class="data-value">$${Math.floor(mark)}</div>
          </div>
          <div class="data-box">
            <div class="data-label">Approx Yield</div>
            <div class="data-value">${(annualYield * 100).toFixed(2)}%</div>
          </div>
          <div class="data-box">
            <div class="data-label">Owned</div>
            <div class="data-value">${this.state.wealth.bonds}</div>
          </div>
        </div>
        <div class="action-grid">
          <button class="btn btn-success" onclick="game.buyBond()">Buy Bond</button>
          <button class="btn btn-danger" onclick="game.sellBond()">Sell Bond</button>
        </div>
      </div>`;
    }

    const dividendList = document.getElementById("dividend-list");
    if (dividendList) {
      const DIV_IMGS = {
        div_stable:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=300&fit=crop&auto=format",
        div_reit:
          "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=700&h=300&fit=crop&auto=format",
        div_energy:
          "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&h=300&fit=crop&auto=format",
      };
      dividendList.innerHTML = CONFIG.DIVIDEND_FUNDS.map((fund) => {
        const units = this.state.wealth.dividends?.[fund.id] || 0;
        const livePrice =
          this.state.wealth.dividendPrices?.[fund.id] ?? fund.unitPrice;
        const estMonthly = (livePrice * units * fund.yieldAnnual) / 12;
        return `<div class="card">
          <img class="card-img" src="${DIV_IMGS[fund.id] || DIV_IMGS.div_stable}" alt="${fund.name}" loading="lazy">
          <div class="card-header">
            <h3>${fund.name}</h3>
            <span class="tag safe">Units: ${units}</span>
          </div>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px; display:grid; gap:2px;">
            <span>Price: $${shortNumber(Math.floor(livePrice))} / unit</span>
            <span>Yield: ${(fund.yieldAnnual * 100).toFixed(2)}% annual</span>
            <span>Est Dividend: $${shortNumber(Math.floor(estMonthly))}/mo</span>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <button class="btn btn-success" onclick="game.buyDividend('${fund.id}')">Buy 1</button>
            <button class="btn btn-danger" onclick="game.sellDividend('${fund.id}')">Sell 1</button>
          </div>
        </div>`;
      }).join("");
    }

    const bankOverview = document.getElementById("bank-overview");
    const bankAccounts = document.getElementById("bank-accounts");
    const bankCredit = document.getElementById("bank-credit");
    const bankLoanOffers = document.getElementById("bank-loan-offers");
    const bankActiveLoans = document.getElementById("bank-active-loans");
    if (
      bankOverview &&
      bankAccounts &&
      bankCredit &&
      bankLoanOffers &&
      bankActiveLoans
    ) {
      const bank = this.state.bank;
      const debtService = this.getBankDebtServiceMonthly();
      const incomeEst = this.getEstimatedMonthlyIncome();
      const dti = debtService / Math.max(1, incomeEst);
      const cc = bank.creditCard;
      const utilization = cc.limit > 0 ? cc.balance / cc.limit : 0;
      const scoreColor =
        bank.creditScore >= 760
          ? "var(--accent-green)"
          : bank.creditScore >= 680
            ? "var(--accent-blue)"
            : bank.creditScore >= 620
              ? "var(--accent-amber)"
              : "var(--accent-red)";

      const scoreTier =
        bank.creditScore >= 760
          ? "Excellent"
          : bank.creditScore >= 680
            ? "Good"
            : bank.creditScore >= 620
              ? "Fair"
              : "Poor";
      bankOverview.innerHTML = `
        <div class="bank-hero">
          <div class="bank-score-wrap">
            <div class="bank-score-circle" style="--score-color:${scoreColor};">
              <span class="bank-score-num" style="color:${scoreColor};">${Math.round(bank.creditScore)}</span>
              <span class="bank-score-tier">${scoreTier}</span>
            </div>
            <div class="bank-score-label">Credit Score</div>
          </div>
          <div class="bank-kpi-grid">
            <div class="bank-kpi"><div class="bank-kpi-icon" style="color:#22d3ee;"><i class="fa-solid fa-arrows-rotate"></i></div><div class="bank-kpi-label">Checking</div><div class="bank-kpi-val">$${shortNumber(Math.floor(bank.checking))}</div></div>
            <div class="bank-kpi"><div class="bank-kpi-icon" style="color:#34d399;"><i class="fa-solid fa-piggy-bank"></i></div><div class="bank-kpi-label">Savings</div><div class="bank-kpi-val">$${shortNumber(Math.floor(bank.savings))}</div></div>
            <div class="bank-kpi"><div class="bank-kpi-icon" style="color:${debtService > 0 ? "#f87171" : "#34d399"};"><i class="fa-solid fa-file-invoice-dollar"></i></div><div class="bank-kpi-label">Monthly Debt</div><div class="bank-kpi-val" style="color:${debtService > 0 ? "#f87171" : "#34d399"};">$${shortNumber(Math.floor(debtService))}</div></div>
            <div class="bank-kpi"><div class="bank-kpi-icon" style="color:${utilization > 0.7 ? "#f87171" : "#fbbf24"};"><i class="fa-solid fa-credit-card"></i></div><div class="bank-kpi-label">CC Used</div><div class="bank-kpi-val" style="color:${utilization > 0.7 ? "#f87171" : utilization > 0.4 ? "#fbbf24" : "#34d399"};"> ${(utilization * 100).toFixed(0)}%</div></div>
          </div>
        </div>`;

      bankAccounts.innerHTML = `
        <div class="bank-panel-card">
          <div class="bank-panel-header">
            <span class="bank-panel-title"><i class="fa-solid fa-arrows-rotate" style="color:#22d3ee;"></i> Transfer Funds</span>
          </div>
          <div class="bank-acct-strip">
            <div class="bank-acct-col"><div class="bank-acct-name">CHECKING</div><div class="bank-acct-bal">$${shortNumber(Math.floor(bank.checking))}</div></div>
            <i class="fa-solid fa-arrows-left-right" style="color:var(--text-dim);font-size:0.85rem;"></i>
            <div class="bank-acct-col" style="text-align:right;"><div class="bank-acct-name">SAVINGS</div><div class="bank-acct-bal" style="color:#34d399;">$${shortNumber(Math.floor(bank.savings))}</div></div>
          </div>
          <div class="bank-btn-grid">
            <button class="btn btn-outline bank-action-btn" onclick="game.transferBankFunds('cash','checking',500)"><i class="fa-solid fa-arrow-down"></i> Deposit $500</button>
            <button class="btn btn-outline bank-action-btn" onclick="game.transferBankFunds('checking','cash',500)"><i class="fa-solid fa-arrow-up"></i> Withdraw $500</button>
            <button class="btn btn-primary bank-action-btn" onclick="game.transferBankFunds('cash','savings',2000)"><i class="fa-solid fa-piggy-bank"></i> Save $2,000</button>
            <button class="btn btn-outline bank-action-btn" onclick="game.transferBankFunds('savings','checking',1000)"><i class="fa-solid fa-circle-down"></i> Take $1k</button>
          </div>
        </div>
        <div class="bank-panel-card">
          <div class="bank-panel-header">
            <span class="bank-panel-title"><i class="fa-solid fa-lock" style="color:#fbbf24;"></i> Certificates of Deposit</span>
            <span class="tag safe">Guaranteed</span>
          </div>
          <p style="font-size:0.78rem;color:var(--text-muted);margin:0 0 12px;">Lock cash away for higher guaranteed returns.</p>
          <div style="display:grid;gap:6px;">
            ${CONFIG.BANK_PRODUCTS.cdOffers.map((offer) => `<button class="btn btn-outline bank-cd-btn" onclick="game.openBankCd('${offer.id}')"><span>${offer.name}</span><span style="color:#fbbf24;font-weight:700;">${(offer.apy * 100).toFixed(1)}% APY</span><span style="color:var(--text-dim);">Min $${shortNumber(offer.minDeposit)}</span></button>`).join("")}
          </div>
        </div>`;

      bankCredit.innerHTML = `
        <div class="bank-panel-card bank-cc-card">
          <div class="bank-panel-header">
            <span class="bank-panel-title"><i class="fa-solid fa-credit-card" style="color:#a855f7;"></i> Credit Card</span>
            <span class="tag ${utilization > 0.8 ? "risk" : utilization > 0.3 ? "warning" : "safe"}">${(utilization * 100).toFixed(0)}% Used</span>
          </div>
          <div class="bank-cc-art">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
              <span style="font-family:var(--font-mono);font-size:0.62rem;letter-spacing:2px;color:rgba(255,255,255,0.4);">GREEDIGO PREMIUM</span>
              <i class="fa-brands fa-cc-visa" style="font-size:1.6rem;color:rgba(255,255,255,0.3);"></i>
            </div>
            <div style="font-family:var(--font-mono);font-size:0.9rem;letter-spacing:3px;color:rgba(255,255,255,0.6);margin-bottom:14px;">•••• •••• •••• ${String(Math.round(bank.creditScore * 0.0413)).padStart(4, String.fromCharCode(48))}</div>
            <div class="bank-cc-stats-row">
              <div class="bank-cc-stat"><div class="bank-cc-stat-label">Balance</div><div class="bank-cc-stat-val" style="color:${cc.balance > 0 ? "#f87171" : "#34d399"};">$${shortNumber(Math.floor(cc.balance))}</div></div>
              <div class="bank-cc-stat"><div class="bank-cc-stat-label">Limit</div><div class="bank-cc-stat-val">$${shortNumber(Math.floor(cc.limit))}</div></div>
              <div class="bank-cc-stat"><div class="bank-cc-stat-label">APR</div><div class="bank-cc-stat-val" style="color:#fbbf24;">${(cc.apr * 100).toFixed(1)}%</div></div>
            </div>
            <div class="bank-cc-util-bar"><div style="width:${Math.min(100, utilization * 100).toFixed(0)}%;height:100%;background:${utilization > 0.8 ? "#ef4444" : utilization > 0.5 ? "#f97316" : "#22d3ee"};border-radius:999px;"></div></div>
          </div>
          <div class="bank-btn-grid">
            <button class="btn btn-outline bank-action-btn" onclick="game.takeCreditCashAdvance(500)"><i class="fa-solid fa-plus"></i> Borrow $500</button>
            <button class="btn btn-primary bank-action-btn" onclick="game.payCreditCard(500)"><i class="fa-solid fa-minus"></i> Pay $500</button>
            <button class="btn btn-outline bank-action-btn" onclick="game.takeCreditCashAdvance(2000)"><i class="fa-solid fa-plus"></i> Borrow $2k</button>
            <button class="btn btn-primary bank-action-btn" onclick="game.payCreditCard(2000)"><i class="fa-solid fa-minus"></i> Pay $2k</button>
          </div>
        </div>`;

      bankLoanOffers.innerHTML = CONFIG.BANK_PRODUCTS.loanOffers
        .map((offer) => {
          const eligibleScore = bank.creditScore >= offer.minScore;
          const dtiGate = dti <= 0.68;
          const canApply = eligibleScore && dtiGate;
          const blockReason = !eligibleScore
            ? `Score too low (need ${offer.minScore}+)`
            : `DTI too high (${(dti * 100).toFixed(0)}%)`;
          return `<div class="bank-panel-card bank-loan-card${canApply ? "" : " bank-loan-dim"}">
            <div class="bank-loan-header">
              <div><div class="bank-loan-name">${offer.name}</div><div class="bank-loan-principal">$${shortNumber(offer.principal)}</div></div>
              <div class="bank-loan-rate-badge">${(offer.baseApr * 100).toFixed(1)}<small>% APR</small></div>
            </div>
            <div class="bank-loan-meta">
              <span><i class="fa-solid fa-calendar-days"></i> ${offer.termMonths} months</span>
              <span><i class="fa-solid fa-star-half-stroke"></i> Min ${offer.minScore} score</span>
            </div>
            ${
              canApply
                ? `<button class="btn btn-primary bank-apply-btn" onclick="game.applyBankLoan('${offer.id}')"><i class="fa-solid fa-check-circle"></i> Apply Now</button>`
                : `<div class="bank-loan-blocked"><i class="fa-solid fa-circle-xmark"></i> ${blockReason}</div>`
            }
          </div>`;
        })
        .join("");

      const activeLoanCards = bank.loans.length
        ? bank.loans
            .map(
              (loan) => `<div class="bank-panel-card bank-active-loan">
              <div class="bank-loan-header">
                <div><div class="bank-loan-name">${loan.name}</div><div style="font-size:0.72rem;color:var(--text-dim);margin-top:2px;">${loan.termLeft}mo left · ${(loan.apr * 100).toFixed(2)}% APR</div></div>
                <div class="bank-loan-rate-badge" style="background:rgba(248,113,113,0.08);border-color:rgba(248,113,113,0.22);color:#f87171;">$${shortNumber(Math.floor(loan.principal))}</div>
              </div>
              <div style="margin:10px 0;height:5px;background:rgba(255,255,255,0.07);border-radius:999px;overflow:hidden;"><div style="width:${Math.max(5, 100 - Math.round((loan.termLeft / Math.max(1, loan.termLeft)) * 50))}%;height:100%;background:linear-gradient(90deg,#f87171,#f97316);border-radius:999px;"></div></div>
              <div class="bank-loan-meta" style="margin-bottom:10px;">
                <span>$${shortNumber(Math.floor(loan.monthlyPayment))}/mo</span>
                ${(loan.missedPayments || 0) > 0 ? '<span style="color:#f87171;"><i class="fa-solid fa-triangle-exclamation"></i> ' + (loan.missedPayments || 0) + " missed</span>" : '<span style="color:#34d399;"><i class="fa-solid fa-check"></i> On track</span>'}
              </div>
              <div class="bank-btn-grid">
                <button class="btn btn-success" onclick="game.payLoanExtra('${loan.id}',500)"><i class="fa-solid fa-plus"></i> $500</button>
                <button class="btn btn-success" onclick="game.payLoanExtra('${loan.id}',2000)"><i class="fa-solid fa-plus"></i> $2k</button>
              </div>
            </div>`,
            )
            .join("")
        : `<div class="bank-panel-card" style="opacity:0.55;"><p style="margin:0;color:var(--text-muted);text-align:center;padding:12px 0;"><i class="fa-solid fa-check-circle" style="color:#34d399;margin-right:6px;"></i>No active loans.</p></div>`;

      const cdCards = bank.cds.length
        ? bank.cds
            .map(
              (cd) => `<div class="bank-panel-card">
              <div class="bank-loan-header">
                <div><div class="bank-loan-name">${cd.name}</div><div style="font-size:0.72rem;color:var(--text-dim);margin-top:2px;">${cd.termLeft} months remaining</div></div>
                <div class="bank-loan-rate-badge" style="background:rgba(251,191,36,0.08);border-color:rgba(251,191,36,0.22);color:#fbbf24;">${(cd.apy * 100).toFixed(2)}% APY</div>
              </div>
              <div class="bank-loan-meta" style="margin-top:8px;"><span>Balance: $${shortNumber(Math.floor(cd.balance))}</span></div>
            </div>`,
            )
            .join("")
        : `<div class="bank-panel-card" style="opacity:0.55;"><p style="margin:0;color:var(--text-muted);text-align:center;padding:12px 0;"><i class="fa-solid fa-piggy-bank" style="color:#fbbf24;margin-right:6px;"></i>No active CDs.</p></div>`;

      bankActiveLoans.innerHTML = activeLoanCards + cdCards;
    }

    // --- MARKET (redesigned) ---
    const _mktTypeColors = {
      index: "#60a5fa",
      stock: "#a78bfa",
      crypto: "#f59e0b",
      comm: "#34d399",
    };
    const _mktTypeLabels = {
      index: "INDEX",
      stock: "STOCK",
      crypto: "CRYPTO",
      comm: "COMMOD",
    };

    // Tape
    const tapeEl = document.getElementById("mkt-tape-track");
    if (tapeEl) {
      const items = [...CONFIG.ASSETS, ...CONFIG.ASSETS]
        .map((def) => {
          const a = this.state.assets[def.id];
          const up = a.trend >= 0;
          const px = a.price < 100 ? a.price.toFixed(2) : a.price.toFixed(0);
          return `<span class="mkt-tape-item ${up ? "mkt-up" : "mkt-dn"}">${def.id.toUpperCase()} <b>$${px}</b> <em>${up ? "▲" : "▼"}${Math.abs(a.trend * 100).toFixed(2)}%</em></span><span class="mkt-tape-sep">|</span>`;
        })
        .join("");
      tapeEl.innerHTML = items;
    }

    // Portfolio card
    const portCardEl = document.getElementById("mkt-port-card");
    if (portCardEl) {
      let totalInvested = 0;
      const byType = { index: 0, stock: 0, crypto: 0, comm: 0 };
      CONFIG.ASSETS.forEach((def) => {
        const a = this.state.assets[def.id];
        const val = a.price * a.owned;
        totalInvested += val;
        byType[def.type] = (byType[def.type] || 0) + val;
      });
      const holdingCount = CONFIG.ASSETS.filter(
        (d) => this.state.assets[d.id].owned > 0,
      ).length;
      const breakdownHtml = Object.keys(byType)
        .map((t) => {
          if (!byType[t]) return "";
          const pct = totalInvested > 0 ? (byType[t] / totalInvested) * 100 : 0;
          return `<div class="mkt-pb-row">
          <div class="mkt-pb-dot" style="background:${_mktTypeColors[t]}"></div>
          <span class="mkt-pb-lbl">${{ index: "Indices", stock: "Stocks", crypto: "Crypto", comm: "Commod" }[t]}</span>
          <span class="mkt-pb-val">$${shortNumber(byType[t])}</span>
          <div class="mkt-pb-bar-wrap"><div class="mkt-pb-bar" style="width:${pct.toFixed(1)}%;background:${_mktTypeColors[t]}"></div></div>
        </div>`;
        })
        .join("");
      portCardEl.innerHTML = `
        <div class="mkt-port-hd"><i class="fa-solid fa-briefcase"></i> Portfolio</div>
        <div class="mkt-port-total">$${shortNumber(totalInvested)}</div>
        <div class="mkt-port-sub">Invested Value</div>
        <div class="mkt-port-metrics">
          <div class="mkt-pm"><div class="mkt-pm-val">${displayMoney(this.state.cash)}</div><div class="mkt-pm-lbl">Cash</div></div>
          <div class="mkt-pm"><div class="mkt-pm-val">${holdingCount}</div><div class="mkt-pm-lbl">Holdings</div></div>
          <div class="mkt-pm"><div class="mkt-pm-val">${CONFIG.ASSETS.length}</div><div class="mkt-pm-lbl">Markets</div></div>
        </div>
        <div class="mkt-pb">${breakdownHtml || '<div style="color:var(--text-dim);font-size:0.78rem;padding:8px 0;">No positions yet.</div>'}</div>
      `;
    }

    // Asset grid
    const _activeMktFilter = window._mktFilter || "all";
    const _activeMktSel = window._mktSelected || "spy";
    document.getElementById("market-list").innerHTML = CONFIG.ASSETS.filter(
      (def) => _activeMktFilter === "all" || def.type === _activeMktFilter,
    )
      .map((def) => {
        const a = this.state.assets[def.id];
        const up = a.trend >= 0;
        const posVal = a.price * a.owned;
        const col = _mktTypeColors[def.type] || "#fff";
        const isSel = _activeMktSel === def.id;
        const px = a.price < 100 ? a.price.toFixed(2) : a.price.toFixed(0);
        const chgTxt =
          (up ? "▲ +" : "▼ ") + Math.abs(a.trend * 100).toFixed(2) + "%";
        return `<div class="mkt-card${isSel ? " mkt-card-sel" : ""}" data-type="${def.type}" onclick="mktSelect('${def.id}',this)">
          <div class="mkt-card-l">
            <div class="mkt-type-pill" style="background:${col}1a;color:${col};border-color:${col}33">${_mktTypeLabels[def.type] || def.type.toUpperCase()}</div>
            <div class="mkt-card-ticker">${def.id.toUpperCase()}</div>
            <div class="mkt-card-cname">${def.name}</div>
            ${
              a.owned > 0
                ? `<div class="mkt-card-pos"><i class="fa-solid fa-circle-check" style="color:#34d399"></i> ${a.owned} sh · $${shortNumber(posVal)}</div>`
                : `<div class="mkt-card-pos" style="opacity:0.38">No position</div>`
            }
          </div>
          <div class="mkt-card-m">
            <canvas class="mkt-spark" id="spark-${def.id}" width="72" height="30"></canvas>
          </div>
          <div class="mkt-card-r">
            <div class="mkt-card-price" style="color:${col}">$${px}</div>
            <div class="mkt-card-chg ${up ? "mkt-gain" : "mkt-loss"}">${chgTxt}</div>
            <div class="mkt-card-actions">
              <div class="mkt-qty-row">
                <button class="mkt-qbtn" onclick="event.stopPropagation();mktQtyAdj('${def.id}',-1)">−</button>
                <input class="mkt-qin" id="mkt-qty-${def.id}" type="number" min="1" value="1" onclick="event.stopPropagation()" />
                <button class="mkt-qbtn" onclick="event.stopPropagation();mktQtyAdj('${def.id}',1)">+</button>
              </div>
              <div class="mkt-trade-row">
                <button class="mkt-bbtn" onclick="event.stopPropagation();game.trade('${def.id}',true,parseInt(document.getElementById('mkt-qty-${def.id}').value||1))">BUY</button>
                <button class="mkt-sbtn" onclick="event.stopPropagation();game.trade('${def.id}',false,parseInt(document.getElementById('mkt-qty-${def.id}').value||1))">SELL</button>
                <button class="mkt-xbtn" onclick="event.stopPropagation();game.buyMax('${def.id}')">MAX</button>
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    // Draw sparklines after DOM is painted
    requestAnimationFrame(() => {
      CONFIG.ASSETS.forEach((def) => {
        const cvs = document.getElementById("spark-" + def.id);
        if (!cvs) return;
        const ctx2 = cvs.getContext("2d");
        const hist = (this.state.assets[def.id].history || []).slice(-24);
        if (hist.length < 2) return;
        const sparkUp = hist[hist.length - 1] >= hist[0];
        const sc = sparkUp ? "#34d399" : "#f87171";
        const W2 = cvs.width,
          H2 = cvs.height;
        const mn2 = Math.min(...hist),
          mx2 = Math.max(...hist),
          rng2 = mx2 - mn2 || 1;
        ctx2.clearRect(0, 0, W2, H2);
        ctx2.beginPath();
        hist.forEach((v, i) => {
          const x = (i / (hist.length - 1)) * W2;
          const y = H2 - 2 - ((v - mn2) / rng2) * (H2 - 4);
          i === 0 ? ctx2.moveTo(x, y) : ctx2.lineTo(x, y);
        });
        ctx2.strokeStyle = sc;
        ctx2.lineWidth = 1.5;
        ctx2.stroke();
        ctx2.lineTo(W2, H2);
        ctx2.lineTo(0, H2);
        ctx2.closePath();
        const sg = ctx2.createLinearGradient(0, 0, 0, H2);
        sg.addColorStop(
          0,
          sparkUp ? "rgba(52,211,153,0.3)" : "rgba(248,113,113,0.3)",
        );
        sg.addColorStop(1, "rgba(0,0,0,0)");
        ctx2.fillStyle = sg;
        ctx2.fill();
      });
    });

    // Update main chart header
    const _cDef = CONFIG.ASSETS.find((d) => d.id === _activeMktSel);
    const _cAsset = this.state.assets[_activeMktSel];
    if (_cDef && _cAsset) {
      const _cn = document.getElementById("mkt-chart-name");
      if (_cn) _cn.textContent = _cDef.name;
      const _ct = document.getElementById("mkt-chart-ticker");
      if (_ct) _ct.textContent = _activeMktSel.toUpperCase();
      const _cp = document.getElementById("mkt-chart-price");
      if (_cp)
        _cp.textContent =
          "$" +
          (_cAsset.price < 100
            ? _cAsset.price.toFixed(2)
            : _cAsset.price.toFixed(0));
      const _cc = document.getElementById("mkt-chart-chg");
      if (_cc) {
        const _cup = _cAsset.trend >= 0;
        _cc.textContent =
          (_cup ? "▲ +" : "▼ ") + (_cAsset.trend * 100).toFixed(2) + "%";
        _cc.className = "mkt-chart-chg " + (_cup ? "gain" : "loss");
      }
    }
    app.drawChart();

    const ITEM_IMGS = {
      bike: "ebike.png",
      civic:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=700&h=300&fit=crop&auto=format",
      tesla:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=700&h=300&fit=crop&auto=format",
      porsche:
        "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=700&h=300&fit=crop&auto=format",
      apt: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&h=300&fit=crop&auto=format",
      mansion:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&h=300&fit=crop&auto=format",
    };
    document.getElementById("shop-list").innerHTML = CONFIG.ITEMS.map(
      (it) => `
        <div class="card">
            <img class="card-img" src="${ITEM_IMGS[it.id] || ITEM_IMGS.apt}" alt="${it.name}" loading="lazy">
            <div class="card-header">
                <h3>${it.name}</h3>
                <span class="tag">$${shortNumber(it.cost)}</span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">
                <i class="fa-solid fa-smile" style="color:var(--accent-amber); margin-right:6px;"></i> +${it.happy} Happiness
            </div>
            <button class="btn btn-primary" onclick="game.buyItem('${it.id}')">
                Purchase
            </button>
        </div>`,
    ).join("");

    document.getElementById("inventory-list").innerHTML = this.state.inventory
      .length
      ? this.state.inventory
          .map((id) => {
            let item = CONFIG.ITEMS.find((x) => x.id === id);
            return `
          <div class="card" style="padding:12px; display:flex; justify-content:space-between; align-items:center;">
             <span style="font-weight:600; color:#fff;">${item.name}</span>
             <span class="tag safe">Owned</span>
          </div>`;
          })
          .join("")
      : `<div style="grid-column: span 3; text-align:center; color:var(--text-muted); padding:32px;">No items owned.</div>`;

    /* ── Wellness render ── */
    const wellnessOverview = document.getElementById("wellness-overview");
    if (wellnessOverview) {
      const stress = Math.round(this.state.life.chronicStress);
      const burnout = Math.round(this.state.life.burnout);
      const hp = this.state.stats.health;
      const sessions = this.state.wellness?.totalSessions || 0;
      const stressColor =
        stress > 50
          ? "var(--accent-red)"
          : stress > 25
            ? "var(--accent-amber)"
            : "var(--green)";
      const burnoutColor =
        burnout > 50
          ? "var(--accent-red)"
          : burnout > 25
            ? "var(--accent-amber)"
            : "var(--green)";
      wellnessOverview.innerHTML = `
        <div class="card-header"><h3>Your Wellness</h3><span class="tag">${sessions} sessions</span></div>
        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; margin-top:14px;">
          <div style="text-align:center;">
            <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px;">Health</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--green); font-family:'JetBrains Mono';">${hp}</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px;">Stress</div>
            <div style="font-size:1.4rem; font-weight:800; color:${stressColor}; font-family:'JetBrains Mono';">${stress}</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px;">Burnout</div>
            <div style="font-size:1.4rem; font-weight:800; color:${burnoutColor}; font-family:'JetBrains Mono';">${burnout}</div>
          </div>
        </div>`;
    }
    const WELLNESS_IMGS = {
      gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&h=300&fit=crop&auto=format",
      yoga: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&h=300&fit=crop&auto=format",
      meditate:
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=700&h=300&fit=crop&auto=format",
      jog: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&h=300&fit=crop&auto=format",
      read: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&h=300&fit=crop&auto=format",
      spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&h=300&fit=crop&auto=format",
      haircut:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&h=300&fit=crop&auto=format",
      therapy:
        "therapy.png",
      hike: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&h=300&fit=crop&auto=format",
      martial:
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=700&h=300&fit=crop&auto=format",
      swim: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=700&h=300&fit=crop&auto=format",
    };
    const wellnessActivities = document.getElementById("wellness-activities");
    if (wellnessActivities) {
      wellnessActivities.innerHTML = CONFIG.WELLNESS.map((act) => {
        const cd = this.state.wellness?.cooldowns?.[act.id] || 0;
        const canAfford = this.state.cash >= act.cost;
        const hasEnergy = this.state.stats.energy >= act.energy;
        const onCooldown = cd > 0;
        const disabled = !canAfford || !hasEnergy || onCooldown;
        const effects = [];
        if (act.health > 0)
          effects.push(
            `<span style="color:var(--green);">+${act.health} HP</span>`,
          );
        if (act.happiness > 0)
          effects.push(
            `<span style="color:var(--accent-amber);">+${act.happiness} Happy</span>`,
          );
        if (act.smarts > 0)
          effects.push(
            `<span style="color:var(--blue);">+${act.smarts} Smarts</span>`,
          );
        if (act.stress < 0)
          effects.push(
            `<span style="color:var(--purple);">${act.stress} Stress</span>`,
          );
        const btnText = onCooldown
          ? `Cooldown (${cd}mo)`
          : act.cost > 0
            ? `$${act.cost}`
            : "Free";
        const wImg = WELLNESS_IMGS[act.id] || WELLNESS_IMGS.gym;
        return `<div class="card" style="${disabled ? "opacity:0.65;" : ""}">
          <img class="card-img" src="${wImg}" alt="${act.name}" loading="lazy">
          <div class="card-header">
            <h3><i class="fa-solid ${act.icon}" style="margin-right:6px;"></i>${act.name}</h3>
            <span class="tag">${act.cost > 0 ? "$" + act.cost : "Free"}</span>
          </div>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:10px;">${act.desc}</p>
          <div style="font-size:0.75rem; display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
            ${effects.join("")}
            <span style="color:var(--text-muted);"><i class="fa-solid fa-bolt" style="margin-right:3px;"></i>-${act.energy} Energy</span>
          </div>
          <button class="btn btn-primary" onclick="game.doWellness('${act.id}')" ${disabled ? "disabled" : ""}>
            ${btnText}
          </button>
        </div>`;
      }).join("");
    }

    const eduList = document.getElementById("edu-list");
    if (this.state.edu.current) {
      let d = CONFIG.DEGREES.find((x) => x.id === this.state.edu.current);
      let progressPct = (this.state.edu.progress / d.duration) * 100;
      eduList.innerHTML = `
           <div class="card edu-active-card">
              <div class="card-header" style="margin-bottom:18px;">
                 <div style="display:flex; flex-direction:column;">
                    <span class="edu-label"><i class="fa-solid fa-graduation-cap" style="margin-right:5px;"></i>Currently Enrolled</span>
                    <h3 class="edu-title">${d.name}</h3>
                 </div>
                 <div style="text-align:right;">
                    <span class="tag safe">Month ${this.state.edu.progress}/${d.duration}</span>
                    <div style="margin-top:5px;font-family:var(--font-mono);font-size:0.75rem;color:var(--accent-green);">${progressPct.toFixed(0)}% complete</div>
                 </div>
              </div>
              <div class="progress-bg" style="margin:0 0 20px; height:8px; border-radius:999px;">
                <div class="progress-fill" style="width:${progressPct}%; background:linear-gradient(90deg,#10b981,#34d399); border-radius:999px;"></div>
              </div>
              <div class="edu-meta">
                  <span><i class="fa-solid fa-coins" style="margin-right:7px; color:var(--accent-red);"></i>Loan: <strong style="color:var(--accent-red);">$${shortNumber(Math.floor(this.state.edu.loans || 0))}</strong></span>
                  <span><i class="fa-solid fa-brain" style="margin-right:7px; color:var(--blue);"></i>IQ Req: <strong>${d.iqReq}</strong> <span style="opacity:0.55;">(You: ${this.state.stats.smarts.toFixed(0)})</span></span>
              </div>
              <div class="edu-actions">
                 <button class="btn btn-primary" onclick="game.studyHard()">
                    <i class="fa-solid fa-book-open" style="margin-right:7px;"></i>Study Hard <span style="opacity:0.65; font-size:0.8em; margin-left:4px;">(-20 NRG)</span>
                 </button>
                 <button class="btn btn-danger" onclick="game.dropOut()" style="width:auto;padding:0 18px;">Drop Out</button>
              </div>
           </div>
        `;
    } else {
      eduList.innerHTML = CONFIG.DEGREES.map((d) => {
        let owned = this.state.edu.degrees.includes(d.id);
        if (owned && d.id !== "basic")
          return `<div class="card" style="opacity:0.55;">
            <div class="card-header">
              <h3 style="margin:0;">${d.name}</h3>
              <span class="tag safe"><i class="fa-solid fa-check" style="margin-right:5px;"></i>Completed</span>
            </div>
          </div>`;

        const canAfford = this.state.cash >= d.cost;
        const hasIQ = this.state.stats.smarts >= d.iqReq;
        return `<div class="card edu-degree-card">
                <div class="card-header" style="margin-bottom:6px;">
                    <h3 style="margin:0;">${d.name}</h3>
                </div>
                <span class="edu-degree-cost">$${shortNumber(d.cost)}<span style="font-size:0.65rem;font-weight:600;opacity:0.5;margin-left:4px;">/ loan</span></span>
                <div class="edu-degree-meta-row">
                    <span class="edu-chip"><i class="fa-solid fa-clock"></i> ${d.duration} Months</span>
                    <span class="edu-chip" style="${hasIQ ? "" : "border-color:rgba(239,68,68,0.3);color:var(--accent-red);"}"><i class="fa-solid fa-brain"></i> ${d.iqReq} IQ</span>
                </div>
                <button class="btn ${canAfford && hasIQ ? "btn-primary" : "btn-outline"}" onclick="game.enroll('${d.id}')" ${!hasIQ ? "disabled" : ""} style="margin-top:auto;">
                    ${!hasIQ ? '<i class="fa-solid fa-lock" style="margin-right:5px;"></i>IQ Too Low' : '<i class="fa-solid fa-graduation-cap" style="margin-right:6px;"></i>Enroll Now'}
                </button>
            </div>`;
      }).join("");
    }

    // --- TRAVEL / MIGRATION TAB ---
    const travelPanel = document.getElementById("travel-panel");
    if (travelPanel) {
      const t = this.state.travel;
      const cp = this.state.countryProfile || [3, 3, 3, 3, 3];
      const curCountry = this.state.country
        ? CONFIG.getCountryByCode(this.state.country)
        : null;
      const curName = curCountry ? curCountry.name : "Unknown";
      const curFlag = this.state.country
        ? CONFIG.getCountryFlag(this.state.country)
        : "🌍";
      const [curEcon, curStab, curTax, curSafe, curOpp] = cp;

      // Country danger indicator
      let dangerLevel = "Safe";
      let dangerColor = "#34d399";
      let dangerDesc = "Your country is relatively safe.";
      if (curSafe <= 1 && curStab <= 1) {
        dangerLevel = "WAR ZONE";
        dangerColor = "#ef4444";
        dangerDesc =
          "Active conflict. Bombings, shootings, violence. Leave immediately if you can.";
      } else if (curSafe <= 1) {
        dangerLevel = "EXTREME DANGER";
        dangerColor = "#ef4444";
        dangerDesc =
          "Extreme violence and lawlessness. Your life is at constant risk.";
      } else if (curStab <= 1) {
        dangerLevel = "CRISIS ZONE";
        dangerColor = "#f97316";
        dangerDesc = "Political collapse, civil unrest. Very dangerous.";
      } else if (curSafe <= 2 || curStab <= 2) {
        dangerLevel = "Dangerous";
        dangerColor = "#f59e0b";
        dangerDesc = "High crime rates and instability. Consider migrating.";
      } else if (curSafe >= 4 && curStab >= 4) {
        dangerLevel = "Very Safe";
        dangerColor = "#34d399";
        dangerDesc = "Excellent safety and stability.";
      } else {
        dangerLevel = "Moderate";
        dangerColor = "#60a5fa";
        dangerDesc = "Average safety. Could be better.";
      }

      // Migration status
      let migrationHtml = "";
      if (t.migrating) {
        const targetC = CONFIG.getCountryByCode(t.targetCountry);
        const tFlag = CONFIG.getCountryFlag(t.targetCountry);
        const progress = Math.round(
          ((t.totalMonths - t.monthsLeft) / t.totalMonths) * 100,
        );
        const methodLabel =
          t.method === "legal"
            ? "🛂 Legal Visa Process"
            : "⚠️ Illegal Border Crossing";
        migrationHtml = `<div class="travel-migration-active">
          <div class="travel-mig-header">
            <i class="fa-solid fa-plane-departure"></i>
            <div>
              <h3>Migrating to ${tFlag} ${targetC ? targetC.name : "Unknown"}</h3>
              <span class="travel-mig-method">${methodLabel}</span>
            </div>
          </div>
          <div class="travel-mig-progress">
            <div class="travel-mig-bar-track"><div class="travel-mig-bar-fill" style="width:${progress}%"></div></div>
            <span>${t.monthsLeft} month(s) remaining</span>
          </div>
        </div>`;
      }

      // Country list for migration
      const searchVal = document.getElementById("travel-search")?.value || "";
      const filtered = CONFIG.COUNTRIES.filter(
        (c) =>
          c[0].toLowerCase().includes(searchVal.toLowerCase()) &&
          c[1] !== this.state.country,
      ).slice(0, 30);

      const countryListHtml = filtered
        .map((c) => {
          const flag = CONFIG.getCountryFlag(c[1]);
          const [e, st, tx, sa, op] = [c[2], c[3], c[4], c[5], c[6]];
          const rating = ((e + st + sa + op) / 4).toFixed(1);
          const tierColor =
            rating >= 4
              ? "#34d399"
              : rating >= 3
                ? "#60a5fa"
                : rating >= 2
                  ? "#fbbf24"
                  : "#ef4444";
          const fromP = cp;
          const toP = [e, st, tx, sa, op];
          const legalCost = this.getTravelCost(fromP, toP, "legal");
          const illegalCost = this.getTravelCost(fromP, toP, "illegal");
          const legalTime = this.getTravelTime(fromP, toP, "legal");
          const illegalTime = this.getTravelTime(fromP, toP, "illegal");
          const denialPct = Math.round(
            this.getVisaDenialChance(fromP, toP) * 100,
          );
          const caughtPct = Math.round(this.getCaughtChance(fromP, toP) * 100);

          let safetyTag = "";
          if (sa <= 1)
            safetyTag = `<span class="travel-tag travel-tag-danger">Dangerous</span>`;
          else if (sa >= 4)
            safetyTag = `<span class="travel-tag travel-tag-safe">Safe</span>`;

          return `<div class="travel-country-card">
          <div class="travel-cc-header">
            <span class="travel-cc-flag">${flag}</span>
            <div class="travel-cc-info">
              <span class="travel-cc-name">${c[0]}</span>
              <span class="travel-cc-rating" style="color:${tierColor}">${"★".repeat(Math.round(parseFloat(rating)))}</span>
              ${safetyTag}
            </div>
          </div>
          <div class="travel-cc-options">
            <div class="travel-option travel-option-legal">
              <div class="travel-opt-head"><i class="fa-solid fa-passport"></i> Legal</div>
              <div class="travel-opt-detail">Cost: $${shortNumber(legalCost)}</div>
              <div class="travel-opt-detail">Time: ${legalTime}mo</div>
              <div class="travel-opt-detail">Denial: ${denialPct}%</div>
              <button class="btn btn-sm btn-primary" onclick="game.startTravel('${c[1]}','legal')" ${t.migrating ? "disabled" : ""}>Apply</button>
            </div>
            <div class="travel-option travel-option-illegal">
              <div class="travel-opt-head"><i class="fa-solid fa-person-running"></i> Illegal</div>
              <div class="travel-opt-detail">Cost: $${shortNumber(illegalCost)}</div>
              <div class="travel-opt-detail">Time: ${illegalTime}mo</div>
              <div class="travel-opt-detail">Caught: ${caughtPct}%</div>
              <button class="btn btn-sm btn-danger" onclick="game.startTravel('${c[1]}','illegal')" ${t.migrating ? "disabled" : ""}>Risk It</button>
            </div>
          </div>
        </div>`;
        })
        .join("");

      travelPanel.innerHTML = `
        <div class="travel-current">
          <div class="travel-current-header">
            <span class="travel-current-flag">${curFlag}</span>
            <div>
              <h3>Currently in ${curName}</h3>
              <span class="travel-danger-badge" style="color:${dangerColor};border-color:${dangerColor}33;background:${dangerColor}11">${dangerLevel}</span>
            </div>
          </div>
          <p class="travel-danger-desc">${dangerDesc}</p>
          <div class="travel-stats-row">
            <span>Economy: ${"★".repeat(curEcon)}${"☆".repeat(5 - curEcon)}</span>
            <span>Safety: ${"★".repeat(curSafe)}${"☆".repeat(5 - curSafe)}</span>
            <span>Stability: ${"★".repeat(curStab)}${"☆".repeat(5 - curStab)}</span>
            <span>Opportunity: ${"★".repeat(curOpp)}${"☆".repeat(5 - curOpp)}</span>
          </div>
        </div>
        ${migrationHtml}
        <div class="travel-countries-section">
          <h3 class="section-subtitle"><i class="fa-solid fa-globe"></i> Migrate to Another Country</h3>
          <div class="travel-search-wrap">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="travel-search" placeholder="Search countries..." value="${searchVal}" oninput="game.filterTravelCountries()" autocomplete="off" />
          </div>
          <div class="travel-country-list" id="travel-country-list-container">${countryListHtml}</div>
        </div>
      `;
    }

    // Past Lives section
    const pastLivesEl = document.getElementById("past-lives-list");
    if (pastLivesEl) {
      const lives = this.getPastLives();
      if (lives.length === 0) {
        pastLivesEl.innerHTML = `<div class="card" style="text-align:center;padding:40px 20px;color:var(--text-muted)">
          <i class="fa-solid fa-ghost" style="font-size:2.5rem;margin-bottom:12px;display:block;opacity:0.3"></i>
          <p style="margin:0">No past lives yet. Live a life first!</p>
        </div>`;
      } else {
        pastLivesEl.innerHTML = lives
          .slice()
          .reverse()
          .map((l, i) => {
            const isDead = l.outcome === "dead";
            const icon = isDead ? "fa-skull-crossbones" : "fa-crown";
            const borderColor = isDead
              ? "rgba(239,68,68,0.3)"
              : "rgba(52,211,153,0.3)";
            const statusColor = isDead ? "#ef4444" : "#34d399";
            const statusText = isDead ? "DIED" : "RETIRED";
            const date = l.at ? new Date(l.at).toLocaleDateString() : "Unknown";
            const nwColor = l.netWorth >= 0 ? "#34d399" : "#ef4444";
            return `<div class="card past-life-card" style="border-color:${borderColor};margin-bottom:10px">
            <div class="past-life-header">
              <div class="past-life-icon" style="color:${statusColor}"><i class="fa-solid ${icon}"></i></div>
              <div class="past-life-info">
                <span class="past-life-name">${l.playerName || "Unknown"}</span>
                <span class="past-life-status" style="color:${statusColor}">${statusText} at age ${Math.floor(l.ageYears)}</span>
              </div>
              <div class="past-life-date">${date}</div>
            </div>
            <div class="past-life-details">
              <div class="past-life-detail"><span>Country</span><strong>${l.country || "Unknown"}</strong></div>
              <div class="past-life-detail"><span>Net Worth</span><strong style="color:${nwColor}">$${shortNumber(Number(l.netWorth || 0))}</strong></div>
              <div class="past-life-detail"><span>Path</span><strong>${(l.primaryPath || "Unknown").toUpperCase()}</strong></div>
              <div class="past-life-detail"><span>${isDead ? "Cause of Death" : "Outcome"}</span><strong>${l.deathReason || "Unknown"}</strong></div>
            </div>
          </div>`;
          })
          .join("");
      }
    }

    // ── CASINO SECTION ────────────────────────────────────────────
    const casinoHud = document.getElementById("casino-hud");
    const casinoList = document.getElementById("casino-games-list");
    const sessionLog = document.getElementById("casino-session-log");

    if (casinoHud || casinoList || sessionLog) {
      const casino = this.state.casino;
      const totalBets = casino.wins + casino.losses;
      const winRate = totalBets
        ? Math.round((casino.wins / totalBets) * 100)
        : 0;
      const netColor =
        casino.net > 0 ? "#4ade80" : casino.net < 0 ? "#f87171" : "#94a3b8";
      const wagered = casino.wagered || 0;

      // VIP tier
      const VIP_TIERS = [
        { label: "Bronze", min: 0, color: "#cd7f32", next: 10000 },
        { label: "Silver", min: 10000, color: "#94a3b8", next: 50000 },
        { label: "Gold", min: 50000, color: "#fbbf24", next: 200000 },
        { label: "Platinum", min: 200000, color: "#e2e8f0", next: 1000000 },
        { label: "Diamond", min: 1000000, color: "#22d3ee", next: Infinity },
      ];
      const vip =
        VIP_TIERS.slice()
          .reverse()
          .find((t) => wagered >= t.min) || VIP_TIERS[0];
      const vipProgress =
        vip.next === Infinity
          ? 100
          : Math.min(
              100,
              Math.round(((wagered - vip.min) / (vip.next - vip.min)) * 100),
            );

      // Streak display
      const streakAbs = Math.abs(casino.streak || 0);
      const streakHot = (casino.streak || 0) > 0;
      const streakNeutral = (casino.streak || 0) === 0;
      const streakEmoji = streakNeutral
        ? "〰️"
        : streakHot
          ? "🔥".repeat(Math.min(streakAbs, 5))
          : "❄️".repeat(Math.min(streakAbs, 5));
      const streakColor = streakNeutral
        ? "#94a3b8"
        : streakHot
          ? "#f97316"
          : "#60a5fa";

      // HUD cards
      if (casinoHud) {
        casinoHud.innerHTML = `
          <div class="casino-hud-card chc-pnl">
            <div class="casino-hud-label">Session P&amp;L</div>
            <div class="casino-hud-value" style="color:${netColor};">${casino.net >= 0 ? "+" : ""}$${shortNumber(casino.net)}</div>
            <div class="casino-hud-sub">${totalBets} total hands &nbsp;·&nbsp; $${shortNumber(wagered)} wagered</div>
          </div>
          <div class="casino-hud-card chc-wr">
            <div class="casino-hud-label">Win Rate</div>
            <div class="casino-hud-value" style="color:${winRate >= 50 ? "#4ade80" : "#f87171"};">${winRate}<span style="font-size:0.7em;opacity:0.7">%</span></div>
            <div class="casino-hud-sub" style="margin-top:6px;">
              <div class="casino-winrate-bar"><div class="casino-winrate-fill" style="width:${winRate}%;background:${winRate >= 50 ? "#4ade80" : "#f87171"};"></div></div>
              <span style="margin-top:4px;display:block;">${casino.wins}W &nbsp;/&nbsp; ${casino.losses}L</span>
            </div>
          </div>
          <div class="casino-hud-card chc-streak">
            <div class="casino-hud-label">Streak</div>
            <div class="casino-hud-value" style="color:${streakColor};font-size:1.1rem;letter-spacing:1px;">${streakEmoji}</div>
            <div class="casino-hud-sub">${streakNeutral ? "No streak" : streakHot ? `🔥 ${streakAbs} wins in a row` : `❄️ ${streakAbs} losses in a row`}</div>
          </div>
          <div class="casino-hud-card chc-best">
            <div class="casino-hud-label">Best Payout</div>
            <div class="casino-hud-value" style="color:#fbbf24;">$${shortNumber(casino.bestPayout || 0)}</div>
            <div class="casino-hud-sub">Biggest single win ever</div>
          </div>
          <div class="casino-hud-card chc-vip" style="grid-column:span 2;">
            <div class="casino-hud-label" style="display:flex;justify-content:space-between;"><span>VIP Status</span><span style="color:${vip.color};font-weight:900;">${vip.label}</span></div>
            <div class="casino-vip-bar-wrap">
              <div class="casino-vip-bar"><div class="casino-vip-fill" style="width:${vipProgress}%;background:${vip.color};"></div></div>
            </div>
            <div class="casino-hud-sub" style="margin-top:5px;">$${shortNumber(wagered)} wagered total &nbsp;·&nbsp; ${vip.next === Infinity ? "MAX TIER" : `$${shortNumber(vip.next - wagered)} to ${VIP_TIERS[VIP_TIERS.indexOf(vip) + 1]?.label}`}</div>
          </div>`;
      }

      // Game cards
      if (casinoList) {
        const GAME_DATA = {
          slots: {
            img: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=400&fit=crop&auto=format",
            icon: "🎰",
            edge: "8%",
            rtp: "~92%",
            volatility: "High",
            topPay: "15×",
            color: "#d946ef",
            grad: "linear-gradient(135deg,#d946ef,#9333ea)",
            glowColor: "rgba(217,70,239,0.25)",
            chips: [50, 500, 5000, 50000],
            tags: [
              { label: "JACKPOT 15×", color: "#d946ef" },
              { label: "HOT", color: "#f97316" },
            ],
          },
          blackjack: {
            img: "blackjack.png",
            icon: "🃏",
            edge: "1–3%",
            rtp: "97%+",
            volatility: "Medium",
            topPay: "2.5×",
            color: "#34d399",
            grad: "linear-gradient(135deg,#10b981,#14b8a6)",
            glowColor: "rgba(52,211,153,0.2)",
            chips: [100, 1000, 10000, 100000],
            tags: [
              { label: "BEST ODDS", color: "#34d399" },
              { label: "SKILL", color: "#60a5fa" },
            ],
          },
          roulette: {
            img: "roulette.png",
            icon: "🎡",
            edge: "5%",
            rtp: "95%",
            volatility: "Medium",
            topPay: "12×",
            color: "#f87171",
            grad: "linear-gradient(135deg,#ef4444,#ec4899)",
            glowColor: "rgba(239,68,68,0.2)",
            chips: [100, 1000, 20000, 200000],
            tags: [
              { label: "STRAIGHT 12×", color: "#f87171" },
              { label: "3 WAYS TO WIN", color: "#fbbf24" },
            ],
          },
          craps: {
            img: "craps.png",
            icon: "🎲",
            edge: "4%",
            rtp: "96%",
            volatility: "Medium",
            topPay: "7×",
            color: "#60a5fa",
            grad: "linear-gradient(135deg,#3b82f6,#6366f1)",
            glowColor: "rgba(96,165,250,0.2)",
            chips: [200, 2000, 20000, 100000],
            tags: [
              { label: "YO-ELEVEN 7×", color: "#60a5fa" },
              { label: "CLASSIC", color: "#a78bfa" },
            ],
          },
          horse: {
            img: "horse-racing.png",
            icon: "🏇",
            edge: "15%",
            rtp: "85%",
            volatility: "Extreme",
            topPay: "14×",
            color: "#fbbf24",
            grad: "linear-gradient(135deg,#fbbf24,#f97316)",
            glowColor: "rgba(251,191,36,0.22)",
            chips: [500, 5000, 50000, 500000],
            tags: [
              { label: "LONGSHOT 14×", color: "#fbbf24" },
              { label: "HIGH RISK", color: "#f87171" },
            ],
          },
          scratch: {
            img: "scratch-card.png",
            icon: "🌟",
            edge: "10%",
            rtp: "90%",
            volatility: "Low",
            topPay: "20×",
            color: "#22d3ee",
            grad: "linear-gradient(135deg,#22d3ee,#0ea5e9)",
            glowColor: "rgba(34,211,238,0.2)",
            chips: [10, 50, 200, 500],
            tags: [
              { label: "LUCKY 7s 20×", color: "#22d3ee" },
              { label: "INSTANT", color: "#34d399" },
            ],
          },
        };
        casinoList.innerHTML = CONFIG.CASINO_GAMES.map((g) => {
          const d = GAME_DATA[g.id] || {
            img: "",
            icon: "🎲",
            edge: "N/A",
            rtp: "N/A",
            volatility: "Unknown",
            topPay: "N/A",
            color: "#94a3b8",
            grad: "linear-gradient(135deg,#64748b,#475569)",
            glowColor: "transparent",
            chips: [g.minBet, g.maxBet],
            tags: [],
          };
          const tagsHtml = (d.tags || [])
            .map(
              (t) =>
                `<span class="cg-tag" style="background:${t.color}22;border-color:${t.color}55;color:${t.color};">${t.label}</span>`,
            )
            .join("");
          const chipsHtml = (d.chips || [])
            .map(
              (b) =>
                `<button class="casino-chip" onclick="game.playCasino('${g.id}',${b})" style="--chip-color:${d.color};"><span>$${shortNumber(b)}</span></button>`,
            )
            .join("");
          return `<div class="casino-game-card game-${g.id}" style="--game-color:${d.color};--game-glow:${d.glowColor};">
            <div class="casino-game-bg" style="background-image:url('${d.img}');">
              <div class="casino-game-bg-overlay" style="background:linear-gradient(to bottom,rgba(4,7,17,0.05) 0%,${d.glowColor} 50%,rgba(4,7,17,0.97) 100%);"></div>
              <div class="cg-top-row">
                <span class="cg-icon">${d.icon}</span>
                <div class="cg-tags">${tagsHtml}</div>
              </div>
              <div class="casino-game-badge" style="background:${d.grad};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${g.name}</div>
            </div>
            <div class="casino-game-body">
              <p class="casino-game-desc">${g.desc}</p>
              <div class="casino-game-meta">
                <div class="casino-meta-box"><span>House Edge</span><strong style="color:#f87171;">${d.edge}</strong></div>
                <div class="casino-meta-box"><span>RTP</span><strong style="color:#4ade80;">${d.rtp}</strong></div>
                <div class="casino-meta-box"><span>Volatility</span><strong style="color:${d.color};">${d.volatility}</strong></div>
                <div class="casino-meta-box"><span>Top Payout</span><strong style="color:#fbbf24;">${d.topPay}</strong></div>
              </div>
              <div class="casino-chips-label">Quick Bet</div>
              <div class="casino-chip-row">
                ${chipsHtml}
              </div>
              <button class="casino-play-btn" style="--game-color:${d.color};" onclick="game.playCasino('${g.id}')">
                <span>${d.icon}</span> Place Custom Bet
              </button>
            </div>
          </div>`;
        }).join("");
      }

      // Session log
      if (sessionLog) {
        const GAME_ICONS = {
          slots: "🎰",
          blackjack: "🃏",
          roulette: "🎡",
          craps: "🎲",
          horse: "🏇",
          scratch: "🌟",
        };
        if (!casino.history || !casino.history.length) {
          sessionLog.innerHTML = `<div class="casino-log-empty"><i class="fa-solid fa-dice"></i><span>No hands yet — hit the tables!</span></div>`;
        } else {
          sessionLog.innerHTML =
            `<div class="casino-log-grid">` +
            casino.history
              .map((entry) => {
                const icon =
                  GAME_ICONS[entry.gameId] ||
                  (entry.big ? "🏆" : entry.net >= 0 ? "✅" : "❌");
                const isBig = entry.big;
                const isWin = entry.net >= 0;
                return `<div class="casino-log-row ${isWin ? "log-win" : "log-loss"}${isBig ? " log-big" : ""}">
                <div class="casino-log-icon">${icon}</div>
                <div class="casino-log-game">${entry.game || "—"}</div>
                <div class="casino-log-result${isBig ? " jackpot" : ""}">${entry.result || "—"}</div>
                <div class="casino-log-bet">$${shortNumber(entry.bet)}</div>
                <div class="casino-log-net" style="color:${isWin ? "#4ade80" : "#f87171"};">${isWin ? "+" : ""}$${shortNumber(entry.net)}</div>
              </div>`;
              })
              .join("") +
            `</div>`;
        }
      }
    }

    // ── POLITICS SECTION ─────────────────────────────────────────
    const politicsHud = document.getElementById("politics-hud");
    const politicsAction = document.getElementById("politics-action-panel");
    const politicsList = document.getElementById("politics-roles-list");

    if (politicsHud || politicsAction || politicsList) {
      const p = this.state.politics;
      p.approval = p.approval ?? 50;
      p.corruption = p.corruption ?? 0;
      p.bribesTaken = p.bribesTaken ?? 0;

      // ── HUD
      if (politicsHud) {
        const approvalColor =
          p.approval >= 60
            ? "#4ade80"
            : p.approval >= 35
              ? "#fbbf24"
              : "#f87171";
        const corruptColor =
          p.corruption > 50
            ? "#f87171"
            : p.corruption > 20
              ? "#fbbf24"
              : "#94a3b8";
        const corruptLabel =
          p.corruption > 50
            ? "High Risk"
            : p.corruption > 20
              ? "Moderate"
              : "Clean";
        politicsHud.innerHTML = `
          <div class="politics-hud-card">
            <div class="politics-hud-label">Influence</div>
            <div class="politics-hud-value" style="color:#a78bfa;">${p.influence}</div>
            <div class="politics-hud-sub">${p.role ? "Currently in office" : "Not in office"}</div>
          </div>
          <div class="politics-hud-card">
            <div class="politics-hud-label">Public Approval</div>
            <div class="politics-hud-value" style="color:${approvalColor};">${Math.round(p.approval)}%</div>
            <div class="politics-hud-sub">
              <div class="politics-approval-bar"><div class="politics-approval-fill" style="width:${Math.round(p.approval)}%;background:${approvalColor};"></div></div>
            </div>
          </div>
          <div class="politics-hud-card">
            <div class="politics-hud-label">Laws Passed</div>
            <div class="politics-hud-value">${p.lawsPassed}</div>
            <div class="politics-hud-sub">career total</div>
          </div>
          <div class="politics-hud-card">
            <div class="politics-hud-label">Corruption</div>
            <div class="politics-hud-value" style="color:${corruptColor};font-size:1rem;">${corruptLabel}</div>
            <div class="politics-hud-sub">Bribes: $${shortNumber(p.bribesTaken)}</div>
          </div>`;
      }

      // ── Action panel
      if (politicsAction) {
        if (p.role) {
          const roleDef = CONFIG.POLITICS_ROLES.find((r) => r.id === p.role);
          politicsAction.innerHTML = `
            <div class="politics-office-banner">
              <div class="politics-office-left">
                <div class="politics-office-badge">${roleDef ? roleDef.name : p.role}</div>
                <div class="politics-office-title">Currently in Office</div>
                <div class="politics-office-sub">Term ending in <strong>${p.termLeft} months</strong>&nbsp;&middot;&nbsp;Salary <strong>$${roleDef ? shortNumber(Math.floor(roleDef.salary / 12)) : "?"}/mo</strong></div>
              </div>
              <div class="politics-office-actions">
                <button class="btn btn-primary" onclick="game.politicalAction('speech')"><i class="fa-solid fa-microphone"></i> Speech</button>
                <button class="btn btn-primary" onclick="game.politicalAction('passlaw')"><i class="fa-solid fa-scroll"></i> Pass Law</button>
                <button class="btn btn-outline" onclick="game.politicalAction('outreach')"><i class="fa-solid fa-handshake"></i> Outreach</button>
                <button class="btn btn-outline" onclick="game.politicalAction('debate')"><i class="fa-solid fa-comments"></i> Debate</button>
                <button class="btn btn-outline" onclick="game.politicalAction('fundraise')"><i class="fa-solid fa-hand-holding-dollar"></i> Fundraise</button>
                <button class="btn btn-danger" onclick="game.politicalAction('embezzle')"><i class="fa-solid fa-mask"></i> Embezzle</button>
              </div>
            </div>`;
        } else {
          politicsAction.innerHTML = `
            <div class="politics-grassroots">
              <div class="politics-grassroots-label">
                <i class="fa-solid fa-seedling" style="color:#4ade80;"></i>
                Grassroots &mdash; Build Your Base
              </div>
              <div class="politics-grassroots-grid">
                <button class="politics-gr-btn" onclick="game.politicsVolunteer()">
                  <i class="fa-solid fa-hand-holding-heart"></i>
                  <span class="pgb-title">Volunteer</span>
                  <span class="pgb-sub">+2 Influence &middot; &minus;15 NRG</span>
                </button>
                <button class="politics-gr-btn" onclick="game.politicsRally()">
                  <i class="fa-solid fa-bullhorn"></i>
                  <span class="pgb-title">Attend Rally</span>
                  <span class="pgb-sub">+1 Influence &middot; &minus;10 NRG</span>
                </button>
                <button class="politics-gr-btn" onclick="game.politicsDonate()">
                  <i class="fa-solid fa-donate"></i>
                  <span class="pgb-title">Donate $500</span>
                  <span class="pgb-sub">+3 Influence &middot; &minus;$500</span>
                </button>
              </div>
            </div>`;
        }
      }

      // ── Role cards
      if (politicsList) {
        const POL_IMGS = {
          council: "city-council.png",
          mayor: "mayor.png",
          governor: "governor.png",
          senator: "senator.png",
        };
        const POL_TIERS = {
          council: {
            color: "#22d3ee",
            label: "Local",
            grad: "linear-gradient(135deg,#0ea5e9,#22d3ee)",
          },
          mayor: {
            color: "#4ade80",
            label: "Municipal",
            grad: "linear-gradient(135deg,#16a34a,#4ade80)",
          },
          governor: {
            color: "#a78bfa",
            label: "State",
            grad: "linear-gradient(135deg,#7c3aed,#a78bfa)",
          },
          senator: {
            color: "#fbbf24",
            label: "Federal",
            grad: "linear-gradient(135deg,#d97706,#fbbf24)",
          },
        };
        politicsList.innerHTML = CONFIG.POLITICS_ROLES.map((r) => {
          const isCurrent = p.role === r.id;
          const canRun =
            !p.role &&
            this.state.cash >= r.cost &&
            p.influence >= r.reqRep &&
            !this.state.life.dead;
          const tier = POL_TIERS[r.id] || {
            color: "#94a3b8",
            label: "Unknown",
            grad: "linear-gradient(135deg,#475569,#94a3b8)",
          };
          if (isCurrent) return "";
          const lockReason = p.role
            ? "Already in Office"
            : p.influence < r.reqRep
              ? `Need ${r.reqRep} Influence`
              : `Need $${shortNumber(r.cost)}`;
          return `<div class="card politics-role-card${canRun ? "" : " locked"}">
            <div class="politics-role-bg" style="background-image:url('${POL_IMGS[r.id] || POL_IMGS.council}');">
              <div class="politics-role-bg-overlay"></div>
              <div class="politics-role-tier" style="background:${tier.grad}">${tier.label}</div>
              <div class="politics-role-name" style="color:${tier.color};">${r.name}</div>
            </div>
            <div class="politics-role-body">
              <div class="politics-role-meta">
                <div class="politics-meta-box"><span>Campaign Cost</span><strong>$${shortNumber(r.cost)}</strong></div>
                <div class="politics-meta-box"><span>Annual Salary</span><strong style="color:#4ade80;">$${shortNumber(r.salary)}</strong></div>
                <div class="politics-meta-box"><span>Term Length</span><strong>${r.term} mo</strong></div>
                <div class="politics-meta-box"><span>Min. Influence</span><strong style="color:#a78bfa;">${r.reqRep}</strong></div>
              </div>
              <button class="btn ${canRun ? "btn-primary" : "btn-outline"} politics-run-btn" onclick="game.startCampaign('${r.id}')" ${canRun ? "" : "disabled"}>
                ${canRun ? '<i class="fa-solid fa-person-booth"></i> Launch Campaign' : lockReason}
              </button>
            </div>
          </div>`;
        }).join("");
      }
    }

    app.drawChart();
  },
};

// Debounced render: coalesce frequent renderAll() calls into a single rAF for smoother UI
(function () {
  const orig = game.renderAll.bind(game);
  game._renderPending = false;
  game.renderAll = function (forceImmediate = false) {
    if (forceImmediate) return orig();
    if (this._renderPending) return;
    this._renderPending = true;
    requestAnimationFrame(() => {
      this._renderPending = false;
      orig();
    });
  };
  // expose original synchronous render when necessary
  game.renderNow = orig;
})();

const app = {
  mobileNavOpen: false,
  _el: {},
  el(id) {
    return this._el[id] || (this._el[id] = document.getElementById(id));
  },
  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen;
    const nav = document.getElementById("nav-tabs");
    const overlay = document.getElementById("mobile-nav-overlay");
    const moreBtn = document.querySelector(".mbn-more");
    if (nav) nav.classList.toggle("nav-open", this.mobileNavOpen);
    if (overlay) overlay.classList.toggle("active", this.mobileNavOpen);
    if (moreBtn)
      moreBtn.classList.toggle("nav-open-active", this.mobileNavOpen);
  },
  closeMobileNav() {
    this.mobileNavOpen = false;
    const nav = document.getElementById("nav-tabs");
    const overlay = document.getElementById("mobile-nav-overlay");
    const moreBtn = document.querySelector(".mbn-more");
    if (nav) nav.classList.remove("nav-open");
    if (overlay) overlay.classList.remove("active");
    if (moreBtn) moreBtn.classList.remove("nav-open-active");
  },

  showQuestsModal() {
    if (
      typeof CHALLENGE_POOL === "undefined" ||
      !game.state?.gameplay?.monthlyChallenges?.length
    ) {
      app.toast("No quests yet — advance a month first.", "info");
      return;
    }
    const gp = game.state.gameplay;
    const snap = gp.challengeSnapshot || {};
    const items = gp.monthlyChallenges
      .map((ch) => {
        const tpl = CHALLENGE_POOL.find((t) => t.id === ch.id);
        if (!tpl) return "";
        let done = ch.done;
        if (!done) {
          try {
            done = tpl.check(snap, game);
          } catch (e) {
            done = false;
          }
        }
        return `<div class="quest-item ${done ? "quest-done" : ""}" style="margin-bottom:10px">
        <span class="quest-e">${tpl.e}</span>
        <div class="quest-body">
          <div class="quest-title">${tpl.title}</div>
          <div class="quest-desc">${tpl.desc}</div>
        </div>
        <div class="quest-reward ${done ? "quest-reward-done" : ""}">
          ${done ? '<i class="fa-solid fa-check"></i>' : "$" + shortNumber(tpl.reward)}
        </div>
      </div>`;
      })
      .join("");
    const streak =
      gp.challengeStreak > 0
        ? `<div style="margin-bottom:12px;font-size:0.8rem;color:#fbbf24">🔥 Quest Streak: ${gp.challengeStreak} months — Bonus multiplier active!</div>`
        : "";
    const total = gp.challengesCompleted || 0;
    app.modal(
      "📜 Monthly Quests",
      `${streak}<div style="font-size:0.75rem;color:var(--text-dim);margin-bottom:10px">All 3 cleared = streak bonus</div>${items}<div style="font-size:0.75rem;color:var(--text-dim);margin-top:10px">Total quests completed: <strong>${total}</strong></div>`,
      [{ text: "Back to Grind", cb: () => app.closeModal() }],
    );
  },

  mobileStatsOpen: false,
  toggleMobileStats() {
    this.mobileStatsOpen = !this.mobileStatsOpen;
    const panel = document.getElementById("mobile-stats-panel");
    const btn = document.getElementById("mtb-stats-btn");
    const icon = document.getElementById("mtb-stats-icon");
    if (panel) panel.classList.toggle("msp-open", this.mobileStatsOpen);
    if (btn) btn.classList.toggle("mtb-active", this.mobileStatsOpen);
    if (icon)
      icon.className = this.mobileStatsOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-chart-simple";
  },
  activateView(id, navEl = null) {
    document
      .querySelectorAll(".view-container")
      .forEach((e) => e.classList.remove("active"));
    document
      .querySelectorAll(".nav-item")
      .forEach((e) => e.classList.remove("active"));
    // Sync bottom nav active tab
    document
      .querySelectorAll(".mbn-tab[data-view]")
      .forEach((e) => e.classList.remove("active"));
    const mbnTab = document.querySelector(`.mbn-tab[data-view="${id}"]`);
    if (mbnTab) mbnTab.classList.add("active");
    const target = document.getElementById("view-" + id);
    if (target) target.classList.add("active");
    const tab =
      navEl || document.querySelector(`.nav-item[onclick*="'${id}'"]`);
    if (tab) tab.classList.add("active");
    if (id === "market") setTimeout(() => this.drawChart(), 100);
    if (id === "business") setTimeout(() => this.initBizEmpireCanvas(), 80);
    // Track current view for conditional rendering
    this.currentView = id;
    if (id === "relationships") {
      try {
        game && game.renderRelationships && game.renderRelationships();
      } catch (e) {}
    }
    if (id === "crime") {
      try {
        game && game.renderAll && game.renderAll();
      } catch (e) {}
    }
    if (id === "prison") {
      try {
        game && game.renderPrison && game.renderPrison();
      } catch (e) {}
    }
    this.closeMobileNav();
  },
  setView(id) {
    const navEl =
      typeof event !== "undefined" && event.currentTarget
        ? event.currentTarget
        : null;
    this.activateView(id, navEl);
  },
  _bizCanvasAnim: null,
  initBizEmpireCanvas() {
    const canvas = document.getElementById("biz-empire-canvas");
    if (!canvas) return;
    if (this._bizCanvasAnim) cancelAnimationFrame(this._bizCanvasAnim);
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const cols = "#6366f1,#a78bfa,#22d3ee,#34d399".split(",");
    let t = 0;
    // create dot grid
    const spacing = 38;
    const dots = [];
    const W = canvas.width,
      H = canvas.height;
    for (let x = 0; x < W + spacing; x += spacing) {
      for (let y = 0; y < H + spacing; y += spacing) {
        dots.push({
          x,
          y,
          phase: Math.random() * Math.PI * 2,
          color: cols[Math.floor(Math.random() * cols.length)],
        });
      }
    }
    const draw = () => {
      if (!document.getElementById("biz-empire-canvas")) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;
      for (const d of dots) {
        const pulse = 0.3 + 0.4 * Math.sin(t + d.phase);
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle =
          d.color +
          Math.round(pulse * 120)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();
      }
      // draw a few flowing lines
      for (let k = 0; k < dots.length; k += 7) {
        const d = dots[k],
          d2 = dots[(k + 13) % dots.length];
        const dist = Math.hypot(d.x - d2.x, d.y - d2.y);
        if (dist < 90) {
          const alpha = Math.round((1 - dist / 90) * 0.18 * 255)
            .toString(16)
            .padStart(2, "0");
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(d2.x, d2.y);
          ctx.strokeStyle = d.color + alpha;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
      this._bizCanvasAnim = requestAnimationFrame(draw);
    };
    draw();
  },
  updateStats() {
    let assetsVal = 0;
    CONFIG.ASSETS.forEach((a) => {
      let asset = game.state.assets[a.id];
      if (asset) assetsVal += asset.price * asset.owned;
    });
    this.el("stat-cash").innerText = shortNumber(game.state.cash, 1);
    const netWorth = game.getNetWorth();
    this.el("stat-networth").innerText = shortNumber(netWorth, 1);
    this.el("stat-age").innerText = Math.floor(game.state.age / 12);
    const statPlayerEl = this.el("stat-player-name");
    if (statPlayerEl)
      statPlayerEl.innerText = game.state.playerName || "Player";

    // ── Mobile Top Bar ──
    const mtbAge = this.el("mtb-age");
    if (mtbAge) mtbAge.innerText = `Age ${Math.floor(game.state.age / 12)}`;
    const mtbName = this.el("mtb-name");
    if (mtbName) mtbName.innerText = game.state.playerName || "Player";
    const mtbNw = this.el("mtb-nw");
    if (mtbNw) {
      const nwAbbr = `$${shortNumber(netWorth, 1)}`;
      mtbNw.innerText = nwAbbr;
      mtbNw.classList.toggle("mtb-neg", netWorth < 0);
    }

    // ── Mobile Stats Panel ──
    const mspHp = this.el("msp-hp");
    if (mspHp) mspHp.innerText = Math.round(game.state.stats.health);
    const mspBarHp = this.el("msp-bar-hp");
    if (mspBarHp)
      mspBarHp.style.width =
        Math.min(
          100,
          Math.max(
            0,
            (game.state.stats.health / (game.state.life?.maxHealth || 100)) *
              100,
          ),
        ) + "%";
    const mspNrg = this.el("msp-nrg");
    if (mspNrg) mspNrg.innerText = Math.round(game.state.stats.energy);
    const mspBarNrg = this.el("msp-bar-nrg");
    if (mspBarNrg)
      mspBarNrg.style.width =
        Math.min(100, Math.max(0, game.state.stats.energy)) + "%";
    const mspJoy = this.el("msp-joy");
    if (mspJoy) mspJoy.innerText = Math.round(game.state.stats.happiness);
    const mspBarJoy = this.el("msp-bar-joy");
    if (mspBarJoy)
      mspBarJoy.style.width =
        Math.min(100, Math.max(0, game.state.stats.happiness)) + "%";
    const mspIq = this.el("msp-iq");
    if (mspIq) mspIq.innerText = Math.round(game.state.stats.smarts);
    const mspBarIq = this.el("msp-bar-iq");
    if (mspBarIq)
      mspBarIq.style.width =
        Math.min(100, Math.max(0, game.state.stats.smarts)) + "%";
    const mspCash = this.el("msp-cash");
    if (mspCash) {
      const c = game.state.cash;
      mspCash.innerText = `$${shortNumber(c, 1)}`;
    }
    const mspRisk = document.getElementById("msp-risk");
    const mspBurn = document.getElementById("msp-burn");
    const mspPartner = document.getElementById("msp-partner");

    // Mobile stats: player name + country
    const mspPlayerName = this.el("msp-player-name");
    if (mspPlayerName)
      mspPlayerName.innerText = game.state.playerName || "Player";
    const mspPlayerCountry = this.el("msp-player-country");
    if (mspPlayerCountry) {
      if (game.state.country) {
        const cc = CONFIG.getCountryByCode(game.state.country);
        if (cc) {
          const flag = CONFIG.getCountryFlag(game.state.country);
          mspPlayerCountry.innerHTML = `${flag} ${cc.name}`;
        }
      } else {
        mspPlayerCountry.innerText = "";
      }
    }
    const life = game.state.life;
    const deathRiskPct = game.estimateDeathRiskPct();
    const prevRiskPct = life.lastDeathRiskPct || 0;
    life.lastDeathRiskPct = deathRiskPct;
    const healthLabel = this.el("val-health");
    if (healthLabel)
      healthLabel.innerText = `${Math.round(game.state.stats.health)} / ${Math.round(life.maxHealth)}`;
    const energyLabel = this.el("val-energy");
    if (energyLabel)
      energyLabel.innerText = `${Math.round(game.state.stats.energy)}%`;
    const happyLabel = this.el("val-happiness");
    if (happyLabel)
      happyLabel.innerText = `${Math.round(game.state.stats.happiness)}%`;
    const smartLabel = this.el("val-smarts");
    if (smartLabel)
      smartLabel.innerText = `${Math.round(game.state.stats.smarts)}`;
    const smartsIQ = this.el("smarts-iq");
    if (smartsIQ) {
      const s = game.state.stats.smarts;
      const iq = Math.round(70 + s * 1.3);
      let desc = "Below Avg";
      if (iq >= 145) desc = "Genius";
      else if (iq >= 130) desc = "Gifted";
      else if (iq >= 115) desc = "Bright";
      else if (iq >= 100) desc = "Average";
      else if (iq >= 85) desc = "Below Avg";
      smartsIQ.innerText = `IQ: ~${iq} (${desc})`;
    }

    const hudDeathRisk = this.el("hud-death-risk");
    if (hudDeathRisk) hudDeathRisk.innerText = `${deathRiskPct.toFixed(1)}%`;

    const hudBurnout = this.el("hud-burnout");
    if (hudBurnout) hudBurnout.innerText = `${Math.round(life.burnout)}%`;

    // ── Update mobile stats panel chips ──
    if (mspRisk) {
      mspRisk.innerText = `${deathRiskPct.toFixed(1)}%`;
      const chip = mspRisk.closest(".msp-chip");
      if (chip) chip.classList.toggle("msp-warn", deathRiskPct >= 15);
    }
    if (mspBurn) mspBurn.innerText = `${Math.round(life.burnout)}%`;
    if (mspPartner) {
      const rel = game.state.relationships;
      const p = rel?.partner;
      mspPartner.innerText = p ? p.name.split(" ")[0] : "Single";
    }

    if (hudDeathRisk?.parentElement)
      hudDeathRisk.parentElement.classList.add("metric-major");
    if (hudBurnout?.parentElement)
      hudBurnout.parentElement.classList.add("metric-major");

    const hudLegalTrend = this.el("hud-legal-trend");
    if (hudLegalTrend) {
      const legalPressure = life.legalRecord + game.state.crime.heat / 40;
      let legalTrend = "Stable";
      if (legalPressure >= 7) legalTrend = "Critical";
      else if (legalPressure >= 4.5) legalTrend = "Rising";
      else if (legalPressure >= 2.5) legalTrend = "Elevated";
      else if (legalPressure < 1.5) legalTrend = "Contained";
      hudLegalTrend.innerText = legalTrend;
    }

    if (hudDeathRisk) {
      hudDeathRisk.classList.remove(
        "risk-low",
        "risk-mid",
        "risk-high",
        "risk-critical",
      );
      hudDeathRisk.classList.add(
        deathRiskPct >= 45
          ? "risk-critical"
          : deathRiskPct >= 22
            ? "risk-high"
            : deathRiskPct >= 10
              ? "risk-mid"
              : "risk-low",
      );
    }
    if (hudBurnout) {
      hudBurnout.classList.remove(
        "risk-low",
        "risk-mid",
        "risk-high",
        "risk-critical",
      );
      hudBurnout.classList.add(
        life.burnout >= 85
          ? "risk-critical"
          : life.burnout >= 60
            ? "risk-high"
            : life.burnout >= 35
              ? "risk-mid"
              : "risk-low",
      );
    }
    if (hudLegalTrend) {
      const tone = hudLegalTrend.innerText;
      hudLegalTrend.classList.remove(
        "risk-low",
        "risk-mid",
        "risk-high",
        "risk-critical",
      );
      if (tone === "Critical") hudLegalTrend.classList.add("risk-critical");
      else if (tone === "Rising") hudLegalTrend.classList.add("risk-high");
      else if (tone === "Elevated") hudLegalTrend.classList.add("risk-mid");
      else hudLegalTrend.classList.add("risk-low");
    }

    const heat = game.state.crime.heat;
    const bankDebt =
      (game.state.bank?.creditCard?.balance || 0) +
      (game.state.bank?.loans || []).reduce(
        (sum, loan) => sum + (loan.principal || 0),
        0,
      );
    const totalDebt = bankDebt + (game.state.edu?.loans || 0);
    const ageYears = game.state.age / 12;
    const debtPressurePct = Math.max(
      0,
      Math.min(
        100,
        (totalDebt / Math.max(10000, Math.abs(netWorth) + 1)) * 100,
      ),
    );
    const agePressurePct = Math.max(0, Math.min(100, (ageYears - 42) * 2.6));
    const stressComposite = Math.max(
      life.burnout,
      Math.min(100, life.chronicStress / 1.8),
    );
    const systemicRisk = Math.max(
      deathRiskPct,
      stressComposite,
      heat,
      debtPressurePct * 0.9,
      agePressurePct * 0.8,
    );

    const rootStyle = document.documentElement.style;
    rootStyle.setProperty(
      "--risk-intensity",
      Math.min(1, systemicRisk / 100).toFixed(3),
    );
    rootStyle.setProperty(
      "--wealth-intensity",
      Math.min(
        1,
        Math.max(0, (Math.log10(Math.max(1000, netWorth + 1000)) - 3) / 4),
      ).toFixed(3),
    );

    const maxThreat = Math.max(deathRiskPct, life.burnout, heat);

    // --- PSYCHOLOGICAL ENGINE UPDATE ---

    // Clear old classes & new classes
    document.body.classList.remove(
      "tension-mid",
      "tension-high",
      "tension-critical",
      "ui-decay-mild",
      "ui-decay-high",
      "ui-decay-critical",
      "stress-med",
      "stress-high",
      "stress-critical",
      "greed-med",
      "greed-high",
    );

    // Apply Stress Classes
    // Uses chronicStress as primary driver, but burnout scales it up
    const stressLevel = life.chronicStress;
    if (stressLevel >= 85 || life.burnout >= 90) {
      document.body.classList.add("stress-critical");
    } else if (stressLevel >= 60 || life.burnout >= 60) {
      document.body.classList.add("stress-high");
    } else if (stressLevel >= 25) {
      document.body.classList.add("stress-med");
    }

    // Apply Greed Classes
    const greedLevel = life.greed || 0;
    // We can also infer "greed" if net worth is high but stress is also high (the cost of seeking wealth)
    if (greedLevel >= 60) {
      document.body.classList.add("greed-high");
    } else if (greedLevel >= 25) {
      document.body.classList.add("greed-med");
    }

    // Legacy Fallback for Systemic Risk (mapped to Stress)
    if (
      systemicRisk >= 78 &&
      !document.body.classList.contains("stress-critical")
    ) {
      document.body.classList.add("stress-high");
    }

    if (debtPressurePct >= 38 || totalDebt >= 45000)
      document.body.classList.add("ui-debt-high");
    if (heat >= 58) document.body.classList.add("ui-crime-hot");
    if (ageYears >= 52) document.body.classList.add("ui-aging");

    const netWorthRow = document.querySelector(".stat-row.hero");
    if (netWorthRow) {
      netWorthRow.classList.remove("networth-rich", "networth-danger");
      if (netWorth >= CONFIG.SAFE_RETIREMENT_NETWORTH)
        netWorthRow.classList.add("networth-rich");
      if (netWorth < 0 || debtPressurePct >= 45)
        netWorthRow.classList.add("networth-danger");
    }

    const heatLabel = this.el("heat-label");
    if (heatLabel) {
      heatLabel.classList.remove(
        "risk-low",
        "risk-mid",
        "risk-high",
        "risk-critical",
      );
      heatLabel.classList.add(
        heat >= 80
          ? "risk-critical"
          : heat >= 50
            ? "risk-high"
            : heat >= 20
              ? "risk-mid"
              : "risk-low",
      );
    }

    const cashoutLabel = this.el("cashout-label");
    const cashoutPanel = this.el("cashout-temptation");
    if (cashoutLabel && cashoutPanel) {
      const age = Math.floor(game.state.age / 12);
      const safe = CONFIG.SAFE_RETIREMENT_NETWORTH;
      const nearSafety = netWorth >= safe * 0.8;
      const deepRisk = deathRiskPct >= 22 || life.burnout >= 65 || heat >= 55;

      cashoutPanel.classList.remove(
        "cashout-soft",
        "cashout-hot",
        "cashout-critical",
      );

      if (netWorth >= safe) {
        cashoutPanel.classList.add("cashout-critical");
        cashoutLabel.innerText =
          "You can lock in victory now. One bad month can still ruin everything.";
      } else if (nearSafety || deepRisk || age >= CONFIG.RETIREMENT_AGE) {
        cashoutPanel.classList.add("cashout-hot");
        cashoutLabel.innerText =
          "Cash out temptation rising — your risk profile is deteriorating.";
      } else {
        cashoutPanel.classList.add("cashout-soft");
        cashoutLabel.innerText = "Temptation: Cash out while you still can.";
      }
    }

    const telem = game.getTelemetrySnapshot();
    const hudWinRate = document.getElementById("hud-win-rate");
    if (hudWinRate) hudWinRate.innerText = telem.winRateByPath;
    const hudMedian = document.getElementById("hud-median-life");
    if (hudMedian) hudMedian.innerText = telem.medianLife;
    const hudBankrupt = document.getElementById("hud-bankruptcy-rate");
    if (hudBankrupt) hudBankrupt.innerText = telem.bankruptcyRate;

    const gameplay = game.state.gameplay || {};
    const achievements = gameplay.achievements || {};
    const totalAchievements = game.getAchievementDefinitions
      ? game.getAchievementDefinitions().length
      : 0;
    const unlockedCount = Object.keys(achievements).length;

    const hudLegend = document.getElementById("hud-legend-score");
    if (hudLegend) hudLegend.innerText = Math.round(gameplay.legendScore || 0);

    const hudStreak = document.getElementById("hud-action-streak");
    if (hudStreak) {
      const s = gameplay.actionStreak || 0;
      const fireEmoji = s >= 20 ? "🔥🔥" : s >= 10 ? "🔥" : s >= 5 ? "⚡" : "";
      const sfClass =
        s >= 20 ? "sf-fire" : s >= 10 ? "sf-hot" : s >= 5 ? "sf-warm" : "";
      hudStreak.innerHTML = `<span class="hud-streak-fire ${sfClass}">${fireEmoji}${s}</span>`;
    }

    const fm = game.state.finance?.lastMonth || {
      income: 0,
      taxes: 0,
      livingCosts: 0,
      totalExpenses: 0,
      netCashflow: 0,
    };
    const hudMonthlyIncome = document.getElementById("hud-monthly-income");
    if (hudMonthlyIncome)
      hudMonthlyIncome.innerText = `$${shortNumber(Math.round(fm.income || 0))}`;
    const hudMonthlyTax = document.getElementById("hud-monthly-tax");
    if (hudMonthlyTax)
      hudMonthlyTax.innerText = `$${shortNumber(Math.round(fm.taxes || 0))}`;
    const hudMonthlyLiving = document.getElementById("hud-monthly-living");
    if (hudMonthlyLiving)
      hudMonthlyLiving.innerText = `$${shortNumber(Math.round(fm.livingCosts || 0))}`;
    const hudMonthlyExpenses = document.getElementById("hud-monthly-expenses");
    if (hudMonthlyExpenses)
      hudMonthlyExpenses.innerText = `$${shortNumber(Math.round(fm.totalExpenses || 0))}`;
    const hudMonthlyNet = document.getElementById("hud-monthly-net");
    if (hudMonthlyNet) {
      const netFlow = Math.round(fm.netCashflow || 0);
      hudMonthlyNet.innerText = `${netFlow >= 0 ? "+" : "-"}$${shortNumber(Math.abs(netFlow))}`;
      hudMonthlyNet.classList.remove(
        "risk-low",
        "risk-mid",
        "risk-high",
        "risk-critical",
      );
      if (netFlow >= 500) hudMonthlyNet.classList.add("risk-low");
      else if (netFlow >= 0) hudMonthlyNet.classList.add("risk-mid");
      else if (netFlow >= -1500) hudMonthlyNet.classList.add("risk-high");
      else hudMonthlyNet.classList.add("risk-critical");
    }

    const legendChip = document.getElementById("legend-chip");
    if (legendChip) {
      legendChip.innerText = `Legend ${Math.round(gameplay.legendScore || 0)} • Streak ${gameplay.actionStreak || 0}`;
    }

    // Player name & country
    const hudPlayerName = document.getElementById("hud-player-name");
    if (hudPlayerName)
      hudPlayerName.innerText = game.state.playerName || "Player";
    const hudPlayerCountry = document.getElementById("hud-player-country");
    if (hudPlayerCountry) {
      if (game.state.country) {
        const cc = CONFIG.getCountryByCode(game.state.country);
        if (cc) {
          const flag = CONFIG.getCountryFlag(game.state.country);
          hudPlayerCountry.innerHTML = `${flag} ${cc.name}`;
        }
      } else {
        hudPlayerCountry.innerText = "Unknown";
      }
    }
    const hudCountryTraits = document.getElementById("hud-country-traits");
    if (hudCountryTraits && game.state.countryProfile) {
      const traits = CONFIG.getCountryTraits(game.state.countryProfile);
      const prosHtml = traits.pros
        .map((p) => `<span class="trait-pro">✓ ${p}</span>`)
        .join("");
      const consHtml = traits.cons
        .map((c) => `<span class="trait-con">✗ ${c}</span>`)
        .join("");
      hudCountryTraits.innerHTML = prosHtml + consHtml;
    } else if (hudCountryTraits) {
      hudCountryTraits.innerHTML = "";
    }

    const hudOnboarding = document.getElementById("hud-onboarding");
    if (hudOnboarding) {
      const o = game.state.onboarding;
      if (o.skipped) hudOnboarding.innerText = "Skipped";
      else if (o.completed || !o.active) hudOnboarding.innerText = "Complete";
      else
        hudOnboarding.innerText = `Month ${Math.min(o.month, CONFIG.ONBOARDING_MONTHS)}/${CONFIG.ONBOARDING_MONTHS}`;
    }

    ["health", "energy", "happiness", "smarts"].forEach((s) => {
      let el = document.getElementById("bar-" + s);
      if (el) el.style.width = game.state.stats[s] + "%";
    });

    if (life.retired) {
      this.log("Retired. Your timeline is complete.");
    } else if (life.dead) {
      this.log(`Timeline ended: ${life.deathReason}`);
    } else if (deathRiskPct > 20 && deathRiskPct > prevRiskPct + 1) {
      this.log(
        `Death risk rising to ${deathRiskPct.toFixed(1)}%. Reduce heat, stress, and leverage.`,
      );
    } else if (life.chronicStress > 90 || life.greed > 120) {
      this.log(
        `Warning: Stress ${Math.round(life.chronicStress)} | Greed ${Math.round(life.greed)} | Risk Debt ${Math.round(life.riskDebt)}`,
      );
    }
  },
  showFloat(val) {
    const abs = Math.abs(val);
    let tier = "float-sm";
    if (abs >= 50000) tier = "float-xl";
    else if (abs >= 5000) tier = "float-lg";
    else if (abs >= 500) tier = "float-md";
    let el = document.createElement("div");
    el.className = `floating-text ${tier} ${val > 0 ? "text-gain" : "text-loss"}`;
    const formatted =
      abs >= 1000
        ? "$" + (abs / 1000).toFixed(abs >= 10000 ? 0 : 1) + "k"
        : "$" + abs.toFixed(0);
    el.innerText = (val > 0 ? "+" : "-") + formatted;
    el.style.left = Math.random() * 30 + 35 + "%";
    el.style.top = 40 + Math.random() * 20 + "%";
    document.body.appendChild(el);
    const dur = tier === "float-xl" ? 2200 : tier === "float-lg" ? 1800 : 1500;
    setTimeout(() => el.remove(), dur);
  },
  _feedHistory: [],
  log(msg, type = "info") {
    const el = document.getElementById("log-latest");
    if (el) el.innerText = msg;
    // Push to Life Journal feed
    this._feedHistory = this._feedHistory || [];
    this._feedHistory.push({ msg, type });
    if (this._feedHistory.length > 10) this._feedHistory.shift();
    this._renderLifeFeed();
  },
  _renderLifeFeed() {
    const el = document.getElementById("life-journal-entries");
    if (!el) return;
    const icons = {
      success: "✅",
      error: "❌",
      info: "📖",
      warning: "⚠️",
      epic: "🔥",
    };
    const entries = [...this._feedHistory].reverse();
    el.innerHTML = entries
      .map((e, i) => {
        const cls = `lj-${e.type || "info"}${i === 0 ? " lj-newest" : ""}`;
        return `<div class="lj-entry ${cls}"><span class="lj-icon">${icons[e.type] || "📖"}</span><span class="lj-msg">${e.msg}</span></div>`;
      })
      .join("");
  },
  toast(msg, type = "success") {
    this.log(msg);
    const container = document.getElementById("toast-container");
    if (!container) return;
    // Cap visible toasts at 4 — remove oldest first
    const existing = container.querySelectorAll(".toast-notification");
    if (existing.length >= 4) existing[0].remove();
    const t = document.createElement("div");
    t.className = `toast-notification toast-${type}`;
    const icons = {
      success: "fa-check-circle",
      error: "fa-circle-xmark",
      info: "fa-circle-info",
      warning: "fa-triangle-exclamation",
      epic: "fa-fire",
    };
    const icon = icons[type] || icons.success;
    t.innerHTML = `<i class="fa-solid ${icon}"></i><span>${msg}</span>`;
    container.appendChild(t);
    setTimeout(
      () => {
        t.classList.add("toast-out");
        setTimeout(() => t.remove(), 300);
      },
      type === "epic" ? 3000 : 1800,
    );
  },
  modal(t, d, acts, opts = {}) {
    document.getElementById("modal-title").innerText = t;
    const descEl = document.getElementById("modal-desc");
    // Auto-detect HTML content OR explicit html flag
    if (opts.html || (typeof d === "string" && d.trim().startsWith("<"))) {
      descEl.innerHTML = d;
    } else {
      descEl.innerText = d;
    }
    const c = document.getElementById("modal-actions");
    c.innerHTML = "";
    acts.forEach((a) => {
      let b = document.createElement("button");
      b.className =
        a.style === "secondary" ? "btn btn-outline" : "btn btn-primary";
      b.innerText = a.text;
      b.onclick = a.cb;
      c.appendChild(b);
    });
    document.getElementById("modal-overlay").classList.add("open");
  },
  closeModal() {
    document.getElementById("modal-overlay").classList.remove("open");
  },
  _renderNews() {},
  drawChart() {
    const id = window._mktSelected || "spy";
    const cvs = document.getElementById("market-chart");
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    const panel = cvs.parentNode;
    const rect = panel.getBoundingClientRect();
    cvs.width = rect.width || 480;
    cvs.height = 188;
    const W = cvs.width,
      H = cvs.height;
    ctx.clearRect(0, 0, W, H);

    const asset = game.state.assets[id];
    const def = CONFIG.ASSETS.find((d) => d.id === id);
    if (!asset || !def) return;
    const data = asset.history || [];
    if (data.length < 2) {
      ctx.fillStyle = "rgba(255,255,255,0.12)";
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.textAlign = "center";
      ctx.fillText("Building history…", W / 2, H / 2);
      return;
    }

    const up = data[data.length - 1] >= data[0];
    const col = up ? "#34d399" : "#f87171";
    const mn = Math.min(...data),
      mx = Math.max(...data),
      rng = mx - mn || 1;
    const PAD = { t: 12, r: 8, b: 22, l: 54 };
    const cW = W - PAD.l - PAD.r;
    const cH = H - PAD.t - PAD.b;

    // Horizontal grid lines + price labels
    const gridN = 4;
    for (let i = 0; i <= gridN; i++) {
      const gy = PAD.t + (i / gridN) * cH;
      const gv = mx - (i / gridN) * rng;
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(PAD.l, gy);
      ctx.lineTo(W - PAD.r, gy);
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.28)";
      ctx.font = "9px JetBrains Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText(
        "$" + (gv < 100 ? gv.toFixed(1) : Math.round(gv)),
        PAD.l - 4,
        gy + 3,
      );
    }

    // Month labels (every ~10 data points)
    const step = Math.max(1, Math.floor(data.length / 5));
    ctx.fillStyle = "rgba(255,255,255,0.22)";
    ctx.font = "9px JetBrains Mono, monospace";
    ctx.textAlign = "center";
    for (let i = 0; i < data.length; i += step) {
      const bx = PAD.l + (i / (data.length - 1)) * cW;
      ctx.fillText("M" + i, bx, H - 5);
    }

    // Main area fill
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = PAD.l + (i / (data.length - 1)) * cW;
      const y = PAD.t + (1 - (v - mn) / rng) * cH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    const lastX = PAD.l + cW;
    const baseY = PAD.t + cH;
    ctx.lineTo(lastX, baseY);
    ctx.lineTo(PAD.l, baseY);
    ctx.closePath();
    const gr = ctx.createLinearGradient(0, PAD.t, 0, baseY);
    gr.addColorStop(0, up ? "rgba(52,211,153,0.22)" : "rgba(248,113,113,0.22)");
    gr.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gr;
    ctx.fill();

    // Main line (drawn on top of fill)
    ctx.beginPath();
    data.forEach((v, i) => {
      const x = PAD.l + (i / (data.length - 1)) * cW;
      const y = PAD.t + (1 - (v - mn) / rng) * cH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = col;
    ctx.lineWidth = 2;
    ctx.shadowColor = col;
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Endpoint dot
    const ex = PAD.l + cW;
    const ey = PAD.t + (1 - (data[data.length - 1] - mn) / rng) * cH;
    ctx.beginPath();
    ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = col;
    ctx.shadowColor = col;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
  },
  bgEffect() {
    if (this._bgFxBooted) return;
    this._bgFxBooted = true;

    const c = document.getElementById("bg-canvas");
    if (!c) return;
    const x = c.getContext("2d", { alpha: true });
    let w = 0;
    let h = 0;
    let dpr = 1;
    let gridCanvas;
    let gridCtx;
    let nodes = [];
    let lastFrame = 0;

    const step = 44;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
      tx: window.innerWidth * 0.5,
      ty: window.innerHeight * 0.5,
    };

    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

    const renderStaticGrid = () => {
      if (!gridCtx) return;
      gridCtx.clearRect(0, 0, w, h);
      gridCtx.lineWidth = 1;
      gridCtx.strokeStyle = "rgba(255, 255, 255, 0.026)";
      gridCtx.beginPath();
      for (let i = 0; i <= w + step; i += step) {
        gridCtx.moveTo(i, 0);
        gridCtx.lineTo(i, h);
      }
      for (let i = 0; i <= h + step; i += step) {
        gridCtx.moveTo(0, i);
        gridCtx.lineTo(w, i);
      }
      gridCtx.stroke();
    };

    const makeNodes = () => {
      const density = prefersReducedMotion
        ? 0.25
        : window.innerWidth < 900
          ? 0.5
          : 0.85;
      const count = Math.floor(clamp((w * h) / 32000, 20, 80) * density);
      nodes = Array.from({ length: count }, () => {
        const depth = 0.35 + Math.random() * 0.85;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          depth,
          speed: (0.07 + Math.random() * 0.3) * depth,
          radius: (0.9 + Math.random() * 2.4) * depth,
          hue: Math.random() > 0.66 ? 190 : Math.random() > 0.5 ? 216 : 164,
          twinkle: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      x.setTransform(dpr, 0, 0, dpr, 0, 0);

      gridCanvas = document.createElement("canvas");
      gridCanvas.width = Math.floor(w * dpr);
      gridCanvas.height = Math.floor(h * dpr);
      gridCtx = gridCanvas.getContext("2d", { alpha: true });
      gridCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      renderStaticGrid();
      makeNodes();
    };

    const updatePointerCss = () => {
      const nx = clamp(pointer.x / Math.max(1, w), 0, 1);
      const ny = clamp(pointer.y / Math.max(1, h), 0, 1);
      const rootStyle = document.documentElement.style;
      rootStyle.setProperty("--ui-tilt-x", nx.toFixed(3));
      rootStyle.setProperty("--ui-tilt-y", ny.toFixed(3));
      rootStyle.setProperty("--realism-x", `${(nx * 100).toFixed(2)}%`);
      rootStyle.setProperty("--realism-y", `${(ny * 100).toFixed(2)}%`);
    };

    const onMove = (event) => {
      pointer.tx = event.clientX;
      pointer.ty = event.clientY;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 120);
    });
    resize();

    const drawReducedMotion = () => {
      x.clearRect(0, 0, w, h);
      x.globalCompositeOperation = "source-over";
      x.fillStyle = "rgba(7, 12, 24, 0.86)";
      x.fillRect(0, 0, w, h);
      x.drawImage(gridCanvas, 0, 0, w, h);
      x.fillStyle = "rgba(56, 189, 248, 0.08)";
      x.fillRect(w * 0.06, h * 0.1, w * 0.26, h * 0.45);
    };

    if (prefersReducedMotion) {
      drawReducedMotion();
      return;
    }

    function drawGrid(ts = 0) {
      if (document.hidden) {
        requestAnimationFrame(drawGrid);
        return;
      }

      const targetFps = window.innerWidth < 900 ? 12 : 16;

      if (ts - lastFrame < 1000 / targetFps) {
        requestAnimationFrame(drawGrid);
        return;
      }
      const dt = Math.max(0.5, Math.min(2.2, (ts - lastFrame) / 16.67 || 1));
      lastFrame = ts;

      pointer.x += (pointer.tx - pointer.x) * 0.065;
      pointer.y += (pointer.ty - pointer.y) * 0.065;
      updatePointerCss();

      const life = game.state?.life || {};
      const stress = clamp((life.chronicStress || 0) / 100, 0, 1);
      const burnout = clamp((life.burnout || 0) / 100, 0, 1);
      const heat = clamp((game.state?.crime?.heat || 0) / 100, 0, 1);
      const risk = clamp(Math.max(stress, burnout, heat), 0, 1);

      const netWorth = game.getNetWorth
        ? game.getNetWorth()
        : game.state?.cash || 0;
      const wealth = clamp(
        (Math.log10(Math.max(1000, netWorth + 1000)) - 3) / 4,
        0,
        1,
      );

      const glareX = pointer.x;
      const glareY = pointer.y;

      x.clearRect(0, 0, w, h);
      x.globalCompositeOperation = "source-over";
      x.fillStyle = "rgba(4, 8, 16, 0.58)";
      x.fillRect(0, 0, w, h);

      const baseGlow = x.createRadialGradient(
        glareX,
        glareY,
        0,
        glareX,
        glareY,
        Math.max(w, h) * 0.62,
      );
      baseGlow.addColorStop(0, `rgba(125, 211, 252, ${0.12 + wealth * 0.24})`);
      baseGlow.addColorStop(
        0.42,
        `rgba(56, 189, 248, ${0.08 + wealth * 0.12})`,
      );
      baseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      x.fillStyle = baseGlow;
      x.fillRect(0, 0, w, h);

      x.globalAlpha = 0.76 + wealth * 0.18;
      x.drawImage(gridCanvas, 0, 0, w, h);
      x.globalAlpha = 1;

      x.strokeStyle = `rgba(255, 255, 255, ${0.015 + risk * 0.03})`;
      x.lineWidth = 1;
      const gridOffset = (ts * 0.01) % step;
      x.beginPath();
      for (let gx = -step; gx < w + step; gx += step) {
        x.moveTo(gx + gridOffset * 0.3, 0);
        x.lineTo(gx - gridOffset * 0.4, h);
      }
      x.stroke();

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const parallax = (n.depth - 0.35) * 18;
        n.y += n.speed * dt;
        n.x += Math.sin((ts * 0.00055 + n.twinkle) * (1 + n.depth * 0.6)) * 0.1;
        if (n.y > h + 12) {
          n.y = -12;
          n.x = Math.random() * w;
        }

        const px = n.x + (pointer.x / w - 0.5) * parallax;
        const py = n.y + (pointer.y / h - 0.5) * parallax;
        const flicker = 0.5 + 0.5 * Math.sin(ts * 0.0019 + n.twinkle * 2.2);

        x.fillStyle = `hsla(${n.hue}, 90%, ${68 + wealth * 20}%, ${0.22 + flicker * 0.36})`;
        x.beginPath();
        x.arc(px, py, n.radius, 0, Math.PI * 2);
        x.fill();

        if (i < nodes.length - 1) {
          const m = nodes[i + 1];
          const dx = m.x - n.x;
          const dy = m.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            x.strokeStyle = `rgba(125, 211, 252, ${(1 - dist / 110) * 0.1})`;
            x.beginPath();
            x.moveTo(px, py);
            x.lineTo(
              m.x + (pointer.x / w - 0.5) * (m.depth - 0.35) * 18,
              m.y + (pointer.y / h - 0.5) * (m.depth - 0.35) * 18,
            );
            x.stroke();
          }
        }
      }

      const dangerSweep = x.createLinearGradient(0, h, 0, h * 0.2);
      dangerSweep.addColorStop(0, `rgba(239, 68, 68, ${0.09 + risk * 0.24})`);
      dangerSweep.addColorStop(1, "rgba(239, 68, 68, 0)");
      x.fillStyle = dangerSweep;
      x.fillRect(0, 0, w, h);

      const vignette = x.createRadialGradient(
        w * 0.5,
        h * 0.5,
        Math.min(w, h) * 0.15,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.75,
      );
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(1, `rgba(2, 5, 12, ${0.38 + risk * 0.25})`);
      x.fillStyle = vignette;
      x.fillRect(0, 0, w, h);

      if (Math.random() > 0.68 - wealth * 0.18) {
        const rx = Math.floor(Math.random() * (w / step)) * step;
        const ry = Math.floor(Math.random() * (h / step)) * step;
        x.fillStyle =
          Math.random() > 0.5
            ? `rgba(16, 185, 129, ${0.07 + wealth * 0.1})`
            : `rgba(59, 130, 246, ${0.07 + wealth * 0.1})`;
        x.fillRect(rx + 1, ry + 1, step - 1, step - 1);
      }

      requestAnimationFrame(drawGrid);
    }
    requestAnimationFrame(drawGrid);
  },
};

/* ═══════════════════════════════════════════════════════
   CHARACTER CREATION SYSTEM
   ═══════════════════════════════════════════════════════ */
const charCreation = {
  selectedCountry: null,

  show() {
    const screen = document.getElementById("character-creation");
    if (!screen) return;
    screen.style.display = "flex";
    this.renderCountryList("");
    const nameInput = document.getElementById("char-name");
    if (nameInput) {
      nameInput.value = "";
      setTimeout(() => nameInput.focus(), 400);
    }
    document.getElementById("btn-begin").disabled = true;
    this.selectedCountry = null;
    const details = document.getElementById("country-details");
    if (details) details.style.display = "none";
  },

  hide() {
    const screen = document.getElementById("character-creation");
    if (screen) {
      screen.classList.add("char-fade-out");
      setTimeout(() => {
        screen.style.display = "none";
        screen.classList.remove("char-fade-out");
      }, 600);
    }
  },

  filterCountries(query) {
    this.renderCountryList(query.toLowerCase().trim());
  },

  renderCountryList(query) {
    const list = document.getElementById("country-list");
    if (!list) return;
    const filtered = CONFIG.COUNTRIES.filter((c) =>
      c[0].toLowerCase().includes(query),
    );
    list.innerHTML = filtered
      .map((c) => {
        const flag = CONFIG.getCountryFlag(c[1]);
        const [econ, stab, tax, safe, opp] = [c[2], c[3], c[4], c[5], c[6]];
        const rating = ((econ + stab + safe + opp) / 4).toFixed(1);
        const tierColor =
          rating >= 4
            ? "#34d399"
            : rating >= 3
              ? "#60a5fa"
              : rating >= 2
                ? "#fbbf24"
                : "#ef4444";
        const sel =
          this.selectedCountry === c[1] ? " country-item-selected" : "";
        return `<div class="country-item${sel}" onclick="charCreation.selectCountry('${c[1]}')">
        <span class="country-flag">${flag}</span>
        <span class="country-name">${c[0]}</span>
        <span class="country-rating" style="color:${tierColor}">${"★".repeat(Math.round(parseFloat(rating)))}</span>
      </div>`;
      })
      .join("");
  },

  selectCountry(code) {
    this.selectedCountry = code;
    const c = CONFIG.getCountryByCode(code);
    if (!c) return;
    const mods = CONFIG.getCountryModifiers(c.profile);
    const traits = CONFIG.getCountryTraits(c.profile);
    const flag = CONFIG.getCountryFlag(code);
    const details = document.getElementById("country-details");
    if (details) {
      details.style.display = "block";
      details.innerHTML = `
        <div class="cd-header">
          <span class="cd-flag">${flag}</span>
          <div>
            <h3>${c.name}</h3>
            <div class="cd-bars">
              <div class="cd-bar"><span>Economy</span><div class="cd-bar-track"><div class="cd-bar-fill" style="width:${c.profile[0] * 20}%;background:#34d399"></div></div></div>
              <div class="cd-bar"><span>Stability</span><div class="cd-bar-track"><div class="cd-bar-fill" style="width:${c.profile[1] * 20}%;background:#60a5fa"></div></div></div>
              <div class="cd-bar"><span>Safety</span><div class="cd-bar-track"><div class="cd-bar-fill" style="width:${c.profile[3] * 20}%;background:#a78bfa"></div></div></div>
              <div class="cd-bar"><span>Opportunity</span><div class="cd-bar-track"><div class="cd-bar-fill" style="width:${c.profile[4] * 20}%;background:#fbbf24"></div></div></div>
            </div>
          </div>
        </div>
        <div class="cd-traits">
          ${traits.pros.length ? `<div class="cd-pros">${traits.pros.map((p) => `<span class="cd-pro"><i class="fa-solid fa-check"></i> ${p}</span>`).join("")}</div>` : ""}
          ${traits.cons.length ? `<div class="cd-cons">${traits.cons.map((c) => `<span class="cd-con"><i class="fa-solid fa-xmark"></i> ${c}</span>`).join("")}</div>` : ""}
        </div>
        <div class="cd-effects">
          <div class="cd-eff"><span>Tax Modifier</span><span style="color:${mods.taxMod > 0.2 ? "#ef4444" : "#34d399"}">${mods.taxMod > 0 ? "+" : ""}${(mods.taxMod * 100).toFixed(0)}%</span></div>
          <div class="cd-eff"><span>Living Cost</span><span>${mods.livingCostMult.toFixed(2)}x</span></div>
          <div class="cd-eff"><span>Death Risk</span><span style="color:${mods.deathRiskMult > 1 ? "#ef4444" : "#34d399"}">${mods.deathRiskMult.toFixed(2)}x</span></div>
          <div class="cd-eff"><span>Startup Difficulty</span><span>${mods.startupDiffMult.toFixed(2)}x</span></div>
          <div class="cd-eff"><span>Starting Cash</span><span style="color:${mods.startingCashMult >= 1 ? "#34d399" : "#ef4444"}">${mods.startingCashMult.toFixed(2)}x</span></div>
        </div>`;
    }
    // Re-render list to show selection
    const searchVal = document.getElementById("country-search")?.value || "";
    this.renderCountryList(searchVal.toLowerCase().trim());
    // Enable begin button if name exists
    this.checkReady();
  },

  checkReady() {
    const name = document.getElementById("char-name")?.value.trim();
    const btn = document.getElementById("btn-begin");
    if (btn) btn.disabled = !(name && this.selectedCountry);
  },

  randomizeCountry() {
    // Choose from currently filtered list if a search is active, otherwise all countries
    const searchVal = document.getElementById("country-search")?.value || "";
    const query = searchVal.toLowerCase().trim();
    const pool = CONFIG.COUNTRIES.filter((c) =>
      c[0].toLowerCase().includes(query),
    );
    const list = pool.length ? pool : CONFIG.COUNTRIES;
    const idx = Math.floor(Math.random() * list.length);
    const code = list[idx][1];
    // Select the country and briefly flash the details
    this.selectCountry(code);
    const el = document.querySelector(`.country-item.country-item-selected`);
    if (el) {
      el.classList.add("flash-anim");
      setTimeout(() => el.classList.remove("flash-anim"), 700);
    }
  },

  start() {
    const name = document.getElementById("char-name")?.value.trim();
    if (!name || !this.selectedCountry) return;
    const c = CONFIG.getCountryByCode(this.selectedCountry);
    const mods = CONFIG.getCountryModifiers(c.profile);

    // Apply character to game state
    game.state.playerName = name;
    game.state.country = this.selectedCountry;
    game.state.countryProfile = c.profile;
    game.state.advisorUses = {};

    // Apply country starting cash modifier
    game.state.cash = Math.round(CONFIG.STARTING_CASH * mods.startingCashMult);

    // Apply education quality to smarts
    game.state.stats.smarts = Math.round(20 * mods.educationMult);

    this.hide();

    // Launch game after animation
    setTimeout(() => {
      const appShell = document.getElementById("app-shell");
      if (appShell) appShell.style.display = "";
      game.initializeAssets();
      game.loadTelemetry();
      game.saveGame(false);
      game.renderAll();
      app.activateView("career");
      app.bgEffect();
      game.maybeStartOnboarding();
      game.bindHotkeys();
    }, 650);
  },
};

/* ═══════════════════════════════════════════════════════
   CINEMATIC TITLE SCREEN CONTROLLER
   ═══════════════════════════════════════════════════════ */
const titleScreen = {
  particleCanvas: null,
  particleCtx: null,
  particles: [],
  coins: [],
  stars: [],
  nebulae: [],
  animId: null,
  glitchTimer: null,
  mouseX: 0,
  mouseY: 0,
  targetMouseX: 0,
  targetMouseY: 0,
  frameCount: 0,
  lastFrameTime: 0,

  init() {
    this.particleCanvas = document.getElementById("title-particles");
    if (!this.particleCanvas) return this.skipToGame();

    this.particleCtx = this.particleCanvas.getContext("2d");
    this.resize();
    window.addEventListener("resize", () => this.resize());

    // Smooth mouse tracking
    document.addEventListener("mousemove", (e) => {
      this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    const w = this.particleCanvas.width;
    const h = this.particleCanvas.height;
    const isDesktop = w >= 1024;

    // Density scales with screen — kept lean for smooth 30fps
    const starCount = isDesktop ? 160 : 80;
    const particleCount = isDesktop ? 40 : 20;

    // Background stars in 3 depth layers
    for (let i = 0; i < starCount; i++) {
      const depth = Math.random();
      this.stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r:
          depth < 0.3
            ? Math.random() * 0.6 + 0.2
            : depth < 0.7
              ? Math.random() * 1 + 0.4
              : Math.random() * 1.8 + 0.6,
        alpha:
          depth < 0.3
            ? Math.random() * 0.2 + 0.05
            : depth < 0.7
              ? Math.random() * 0.4 + 0.1
              : Math.random() * 0.7 + 0.15,
        depth: depth,
        twinkleSpeed: Math.random() * 0.015 + 0.003,
        twinklePhase: Math.random() * Math.PI * 2,
        color:
          Math.random() > 0.85
            ? [180, 200, 255]
            : Math.random() > 0.7
              ? [255, 230, 200]
              : [210, 218, 235],
      });
    }

    // Create nebula blobs for atmospheric glow
    const nebulaColors = [
      { r: 60, g: 100, b: 220, a: 0.012 },
      { r: 140, g: 90, b: 220, a: 0.01 },
      { r: 50, g: 180, b: 120, a: 0.008 },
      { r: 180, g: 80, b: 160, a: 0.006 },
    ];
    for (let i = 0; i < (isDesktop ? 3 : 2); i++) {
      const nc = nebulaColors[i % nebulaColors.length];
      this.nebulae.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 300 + 200,
        color: nc,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Floating particles
    for (let i = 0; i < particleCount; i++) {
      this.particles.push(this.createParticle());
    }

    // Gold coin / money sparkle particles
    const coinCount = isDesktop ? 18 : 10;
    for (let i = 0; i < coinCount; i++) {
      this.coins.push(this.createCoin());
    }

    // Start render loop
    this.render();

    // Typewriter effects
    this.typewrite("title-tagline", "The Free Wealth Simulator Game", 55, 1600);
    this.typewrite(
      "title-desc",
      "You are 18 years old with $500. Can you find a way to retire rich?",
      24,
      3000,
    );

    // Set data-text for glitch CSS effect
    const glitchEl = document.getElementById("title-glitch-text");
    if (glitchEl) glitchEl.setAttribute("data-text", "GREEDIGO");

    // Schedule periodic title glitch
    this.scheduleGlitch();

    // Check for saved game
    const saved = localStorage.getItem("GreedigoSave");
    if (saved) {
      const btn = document.getElementById("btn-continue");
      if (btn) btn.style.display = "flex";
    }
  },

  scheduleGlitch() {
    const doGlitch = () => {
      const el = document.getElementById("title-glitch-text");
      if (!el) return;
      el.classList.add("glitching");
      setTimeout(() => el.classList.remove("glitching"), 380);
      // Schedule next glitch at random interval 6-18s
      this.glitchTimer = setTimeout(doGlitch, 6000 + Math.random() * 12000);
    };
    // First glitch after 5-10s
    this.glitchTimer = setTimeout(doGlitch, 5000 + Math.random() * 5000);
  },

  createCoin() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Coins start from bottom half and float upward
    const goldVariants = [
      { r: 251, g: 191, b: 36 },
      { r: 255, g: 220, b: 80 },
      { r: 245, g: 158, b: 11 },
      { r: 255, g: 255, b: 140 },
    ];
    const c = goldVariants[Math.floor(Math.random() * goldVariants.length)];
    return {
      x: Math.random() * w,
      y: h * 0.4 + Math.random() * h * 0.6,
      vy: -(Math.random() * 0.4 + 0.15), // drift upward
      vx: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 2.5 + 1.0,
      rx: Math.random() * 1.5 + 0.6, // horizontal radius (ellipse = coin tilt)
      color: c,
      alpha: Math.random() * 0.55 + 0.15,
      spin: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.04,
      sparkle: Math.random() * Math.PI * 2,
      sparkleSpeed: Math.random() * 0.06 + 0.02,
    };
  },

  resize() {
    if (!this.particleCanvas) return;
    this.particleCanvas.width = window.innerWidth;
    this.particleCanvas.height = window.innerHeight;
    // Rebuild stars on resize
    if (this.stars.length > 0) {
      this.stars.forEach((s) => {
        s.x = Math.random() * window.innerWidth;
        s.y = Math.random() * window.innerHeight;
      });
    }
  },

  createParticle() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const colors = [
      { r: 96, g: 165, b: 250 },
      { r: 130, g: 120, b: 250 },
      { r: 74, g: 222, b: 128 },
      { r: 34, g: 211, b: 238 },
      { r: 200, g: 100, b: 200 },
      { r: 250, g: 190, b: 80 },
    ];
    const c = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25 - 0.12,
      r: Math.random() * 2.2 + 0.6,
      color: c,
      alpha: Math.random() * 0.45 + 0.08,
      life: Math.random() * 500 + 250,
      maxLife: 0,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.025 + 0.008,
      depth: Math.random(),
    };
  },

  render() {
    this.animId = requestAnimationFrame(() => this.render());

    // Throttle to ~30fps to keep CPU/GPU light
    const now = performance.now();
    if (now - this.lastFrameTime < 33.3) return;
    this.lastFrameTime = now;

    this.frameCount++;
    const ctx = this.particleCtx;
    const w = this.particleCanvas.width;
    const h = this.particleCanvas.height;

    // Smooth mouse interpolation
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.06;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.06;

    // Clear with adaptive trail fade
    ctx.fillStyle = "rgba(5, 10, 24, 0.12)";
    ctx.fillRect(0, 0, w, h);

    const time = Date.now() * 0.001;

    // Draw nebula blobs
    for (const n of this.nebulae) {
      n.pulse += 0.003;
      const scale = 1 + Math.sin(n.pulse) * 0.15;
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -n.radius) n.x = w + n.radius;
      if (n.x > w + n.radius) n.x = -n.radius;
      if (n.y < -n.radius) n.y = h + n.radius;
      if (n.y > h + n.radius) n.y = -n.radius;

      const nx = n.x + this.mouseX * 15;
      const ny = n.y + this.mouseY * 15;
      const grad = ctx.createRadialGradient(
        nx,
        ny,
        0,
        nx,
        ny,
        n.radius * scale,
      );
      grad.addColorStop(
        0,
        `rgba(${n.color.r},${n.color.g},${n.color.b},${n.color.a * (0.8 + Math.sin(n.pulse) * 0.2)})`,
      );
      grad.addColorStop(
        0.5,
        `rgba(${n.color.r},${n.color.g},${n.color.b},${n.color.a * 0.3})`,
      );
      grad.addColorStop(1, `rgba(${n.color.r},${n.color.g},${n.color.b},0)`);
      ctx.beginPath();
      ctx.arc(nx, ny, n.radius * scale, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    // Central soft light source behind logo
    const centerGrad = ctx.createRadialGradient(
      w * 0.5,
      h * 0.42,
      0,
      w * 0.5,
      h * 0.42,
      Math.min(w, h) * 0.4,
    );
    const cPulse = 0.025 + Math.sin(time * 0.5) * 0.008;
    centerGrad.addColorStop(0, `rgba(96, 165, 250, ${cPulse})`);
    centerGrad.addColorStop(0.3, `rgba(130, 120, 250, ${cPulse * 0.5})`);
    centerGrad.addColorStop(1, "rgba(5, 10, 24, 0)");
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.42, Math.min(w, h) * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = centerGrad;
    ctx.fill();

    // Draw stars with depth parallax (simple filled arcs — no per-star gradients)
    for (const s of this.stars) {
      const twinkle = Math.sin(time * s.twinkleSpeed * 12 + s.twinklePhase);
      const alpha = s.alpha * (0.5 + twinkle * 0.5);
      const parallaxFactor = 2 + s.depth * 8;
      const px = s.x + this.mouseX * parallaxFactor;
      const py = s.y + this.mouseY * parallaxFactor;

      ctx.beginPath();
      ctx.arc(px, py, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.color[0]},${s.color[1]},${s.color[2]},${alpha})`;
      ctx.fill();
    }

    // Particles with depth
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      if (p.maxLife === 0) p.maxLife = p.life;
      p.life--;
      if (p.life <= 0) {
        this.particles[i] = this.createParticle();
        this.particles[i].y = h + 10;
        continue;
      }

      p.pulse += p.pulseSpeed;
      const pulseFactor = 0.7 + Math.sin(p.pulse) * 0.3;
      const lifeFade = Math.min(1, p.life / 80, (p.maxLife - p.life) / 80);

      // Mouse interaction with depth
      const parallax = 3 + p.depth * 10;
      const effectiveX = p.x + this.mouseX * parallax;
      const effectiveY = p.y + this.mouseY * parallax;
      const mCenterX = (this.mouseX * 0.5 + 0.5) * w;
      const mCenterY = (this.mouseY * 0.5 + 0.5) * h;
      const dx = effectiveX - mCenterX;
      const dy = effectiveY - mCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 180 && dist > 0) {
        const force = ((180 - dist) / 180) * 0.2;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.997;
      p.vy *= 0.997;

      if (p.x < -20) p.x = w + 20;
      if (p.x > w + 20) p.x = -20;
      if (p.y < -20) p.y = h + 20;
      if (p.y > h + 20) p.y = -20;

      const a = p.alpha * lifeFade * pulseFactor;
      const { r, g, b } = p.color;

      // Core dot only — no per-particle radial gradient for performance
      ctx.beginPath();
      ctx.arc(effectiveX, effectiveY, p.r * pulseFactor, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
      ctx.fill();
    }

    // ── Gold coin / money sparkle particles ───────────────────────────────
    for (const coin of this.coins) {
      coin.y += coin.vy;
      coin.x += coin.vx;
      coin.spin += coin.spinSpeed;
      coin.sparkle += coin.sparkleSpeed;

      // Wrap: when coin floats off top, respawn at bottom
      if (coin.y < -20) {
        coin.y = h + 10;
        coin.x = Math.random() * w;
      }
      if (coin.x < -10) coin.x = w + 10;
      if (coin.x > w + 10) coin.x = -10;

      const sparkFactor = 0.55 + Math.sin(coin.sparkle) * 0.45;
      const a = coin.alpha * sparkFactor;
      const { r, g, b: cb } = coin.color;

      // Coin tile effect — draw as rotated ellipse (flat coin tumbling)
      const tilt = Math.abs(Math.cos(coin.spin));
      const rx = Math.max(0.3, coin.rx * tilt);
      const ry = coin.r;

      // Outer glow
      const glowR = coin.r * 5;
      const glowGrad = ctx.createRadialGradient(
        coin.x,
        coin.y,
        0,
        coin.x,
        coin.y,
        glowR,
      );
      glowGrad.addColorStop(0, `rgba(${r},${g},${cb},${a * 0.5})`);
      glowGrad.addColorStop(0.5, `rgba(${r},${g},${cb},${a * 0.12})`);
      glowGrad.addColorStop(1, `rgba(${r},${g},${cb},0)`);
      ctx.beginPath();
      ctx.arc(coin.x, coin.y, glowR, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Coin body (ellipse)
      ctx.save();
      ctx.translate(coin.x, coin.y);
      ctx.scale(rx / ry, 1);
      ctx.beginPath();
      ctx.arc(0, 0, ry, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${cb},${a})`;
      ctx.fill();
      // Coin shine
      if (sparkFactor > 0.75) {
        ctx.fillStyle = `rgba(255,255,200,${(sparkFactor - 0.75) * 0.8})`;
        ctx.beginPath();
        ctx.ellipse(
          -ry * 0.2,
          -ry * 0.2,
          ry * 0.35,
          ry * 0.2,
          -0.5,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
      ctx.restore();
    }
  },

  typewrite(elementId, text, speed, delay) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = "";
    let i = 0;
    setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }, delay);
  },

  startNewLife() {
    // Show character creation instead of direct launch
    const screen = document.getElementById("title-screen");
    if (screen) {
      screen.classList.add("fade-out");
      setTimeout(() => {
        if (this.animId) cancelAnimationFrame(this.animId);
        if (this.glitchTimer) clearTimeout(this.glitchTimer);
        screen.style.display = "none";
        localStorage.removeItem("GreedigoSave");
        game.resetState();
        charCreation.show();
      }, 800);
    }
  },

  continueGame() {
    this.launchGame(false);
  },

  launchGame(isNew) {
    const screen = document.getElementById("title-screen");
    if (!screen) return;

    /* ── Start music NOW, inside the click handler, before any setTimeout ──
       Browser autoplay policy requires play() within the user-gesture stack.
       Calling it 1400ms later (after the fade) makes Chrome block it. */
    SFX.startBgMusicUnmuted();

    // Massive particle explosion from center
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    for (let i = 0; i < 80; i++) {
      const p = this.createParticle();
      p.x = cx + (Math.random() - 0.5) * 40;
      p.y = cy + (Math.random() - 0.5) * 40;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 10 + 3;
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed;
      p.r = Math.random() * 4 + 1.5;
      p.alpha = Math.random() * 0.6 + 0.3;
      p.life = 100;
      this.particles.push(p);
    }

    // Flash effect
    const ctx = this.particleCtx;
    if (ctx) {
      const w = this.particleCanvas.width;
      const h = this.particleCanvas.height;
      const flash = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.max(w, h) * 0.5,
      );
      flash.addColorStop(0, "rgba(255, 255, 255, 0.3)");
      flash.addColorStop(0.5, "rgba(96, 165, 250, 0.1)");
      flash.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = flash;
      ctx.fillRect(0, 0, w, h);
    }

    // Trigger fade-out
    screen.classList.add("fade-out");

    setTimeout(() => {
      if (this.animId) cancelAnimationFrame(this.animId);
      if (this.glitchTimer) clearTimeout(this.glitchTimer);
      screen.style.display = "none";
      const appShell = document.getElementById("app-shell");
      if (appShell) appShell.style.display = "";

      if (isNew) {
        localStorage.removeItem("GreedigoSave");
        game.resetState();
        game.initializeAssets();
        game.loadTelemetry();
        game.renderAll();
        app.bgEffect();
        game.maybeStartOnboarding();
        game.bindHotkeys();
      } else {
        game.init();
      }
      /* Music was already started at the top of launchGame() */
    }, 1400);
  },

  skipToGame() {
    const appShell = document.getElementById("app-shell");
    if (appShell) appShell.style.display = "";
    game.init();
    /* Start background music */
    SFX.startBgMusicUnmuted();
  },
};

/* ======================================================================
   FX ENGINE — Screen shake, flash, confetti, milestone, life events
   ====================================================================== */
const FX = {
  _shakePending: false,
  screenShake(size = "sm") {
    /* Debounce: ignore if a shake is already queued or running */
    if (this._shakePending) return;
    this._shakePending = true;
    const target = document.querySelector(".app-container") || document.body;
    const cls = "fx-shake-" + size;
    target.classList.remove(
      "fx-shake-sm",
      "fx-shake-lg",
    ); /* reset if stacked */
    /* Force reflow so re-adding the class restarts the animation */
    void target.offsetWidth;
    target.classList.add(cls);
    const dur = size === "lg" ? 600 : 400;
    setTimeout(() => {
      target.classList.remove(cls);
      this._shakePending = false;
    }, dur);
  },
  _flashEl: null,
  _flashTimer: null,
  screenFlash(type = "gain") {
    /* Reuse a single overlay element rather than creating new DOM nodes */
    if (!this._flashEl) {
      this._flashEl = document.createElement("div");
      this._flashEl.className = "fx-flash-overlay";
      document.body.appendChild(this._flashEl);
    }
    const el = this._flashEl;
    clearTimeout(this._flashTimer);
    el.className = "fx-flash-overlay fx-flash-" + type;
    /* Restart animation by removing and re-adding */
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
    this._flashTimer = setTimeout(() => {
      el.className = "fx-flash-overlay";
    }, 600);
  },
  confetti() {
    /* CSS-based confetti — zero JS animation loop, fully GPU-composited */
    if (this._confettiActive) return;
    this._confettiActive = true;
    const self = this;
    const colors = [
      "#f59e0b",
      "#ef4444",
      "#10b981",
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#14b8a6",
      "#f97316",
    ];
    const container = document.createElement("div");
    container.className = "confetti-container";
    document.body.appendChild(container);
    const count = 48;
    let settled = 0;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "confetti-piece";
      const color = colors[i % colors.length];
      const x = (Math.random() * 96 + 2).toFixed(1);
      const w = (Math.random() * 9 + 5).toFixed(1);
      const h = (Math.random() * 5 + 3).toFixed(1);
      const dur = (Math.random() * 0.7 + 0.85).toFixed(2);
      const delay = (Math.random() * 0.45).toFixed(2);
      const endX = ((Math.random() - 0.5) * 180).toFixed(0);
      const r0 = (Math.random() * 360).toFixed(0);
      const r1 = (parseFloat(r0) + (Math.random() - 0.5) * 540).toFixed(0);
      p.style.cssText =
        `left:${x}vw;width:${w}px;height:${h}px;background:${color};` +
        `--cfx:${endX}px;--cr0:${r0}deg;--cr1:${r1}deg;` +
        `animation:confettiFall ${dur}s ${delay}s linear forwards;`;
      p.addEventListener(
        "animationend",
        () => {
          settled++;
          if (settled >= count) {
            container.remove();
            self._confettiActive = false;
          }
        },
        { once: true },
      );
      container.appendChild(p);
    }
    /* Safety cleanup in case all animationend events don't fire (tab hidden etc.) */
    setTimeout(() => {
      if (container.parentNode) container.remove();
      self._confettiActive = false;
    }, 2500);
  },
  milestoneOverlay(title, sub) {
    // Remove any existing milestone overlay to prevent stacking
    document.querySelectorAll(".milestone-overlay").forEach((e) => e.remove());
    const el = document.createElement("div");
    el.className = "milestone-overlay";
    el.innerHTML = `<div class="milestone-badge">${title}</div><div class="milestone-sub">${sub}</div>`;
    document.body.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.remove();
    }, 1500);
  },
  updateStreakFire() {
    const chip = document.querySelector(".legend-chip");
    if (!chip) return;
    const streak = game.state.gameplay?.actionStreak || 0;
    chip.classList.remove("streak-warm", "streak-hot", "streak-fire");
    if (streak >= 20) chip.classList.add("streak-fire");
    else if (streak >= 10) chip.classList.add("streak-hot");
    else if (streak >= 5) chip.classList.add("streak-warm");
  },
  updateHeartbeat() {
    const hp = game.state.stats?.health || 100;
    document.body.classList.toggle("health-critical", hp < 25);
  },
  pulseNextMonth() {
    const btn = document.querySelector(".next-month-btn");
    if (btn && !btn.disabled) {
      btn.classList.add("pulse-ready");
      setTimeout(() => btn.classList.remove("pulse-ready"), 1200);
    }
  },
};

/* ── Random Life Events ── */
const LIFE_EVENTS = [
  {
    emoji: "🎁",
    title: "Birthday Gift",
    desc: "A relative sent you a surprise birthday gift!",
    effect: (g) => {
      g.modCash(500 + Math.random() * 1000);
      g.modStat("happiness", 8);
    },
    type: "success",
  },
  {
    emoji: "🏥",
    title: "Medical Bill",
    desc: "An unexpected medical expense hit your wallet.",
    effect: (g) => {
      g.modCash(-(800 + Math.random() * 2000));
      g.modStat("health", -5);
    },
    type: "error",
  },
  {
    emoji: "🎰",
    title: "Found Cash",
    desc: "You found a $20 bill on the ground. Lucky day!",
    effect: (g) => {
      g.modCash(20);
      g.modStat("happiness", 3);
    },
    type: "info",
  },
  {
    emoji: "🔧",
    title: "Car Trouble",
    desc: "Your car broke down. Repair costs incoming.",
    effect: (g) => {
      g.modCash(-(400 + Math.random() * 800));
    },
    type: "warning",
  },
  {
    emoji: "📈",
    title: "Side Hustle Win",
    desc: "A side gig paid off handsomely!",
    effect: (g) => {
      g.modCash(1000 + Math.random() * 3000);
      g.registerAction(2);
    },
    type: "success",
  },
  {
    emoji: "🌪️",
    title: "Natural Disaster",
    desc: "A storm damaged your property.",
    effect: (g) => {
      g.modCash(-(2000 + Math.random() * 4000));
      g.modStat("happiness", -10);
    },
    type: "error",
  },
  {
    emoji: "🎓",
    title: "Scholarship Offer",
    desc: "You received a small scholarship grant!",
    effect: (g) => {
      g.modCash(1500);
      g.modStat("happiness", 5);
    },
    type: "success",
  },
  {
    emoji: "💔",
    title: "Bad Breakup",
    desc: "Relationship problems are draining your energy.",
    effect: (g) => {
      g.modStat("happiness", -15);
      g.modStat("energy", -20);
    },
    type: "error",
  },
  {
    emoji: "🏆",
    title: "Local Contest",
    desc: "You won a local competition prize!",
    effect: (g) => {
      g.modCash(800 + Math.random() * 1200);
      g.modStat("happiness", 10);
    },
    type: "success",
  },
  {
    emoji: "🦠",
    title: "Got Sick",
    desc: "A nasty flu knocked you out for a while.",
    effect: (g) => {
      g.modStat("health", -8);
      g.modStat("energy", -30);
    },
    type: "error",
  },
  {
    emoji: "💡",
    title: "Eureka Moment",
    desc: "A flash of inspiration boosts your smarts!",
    effect: (g) => {
      g.modStat("smarts", 5);
      g.modStat("happiness", 5);
    },
    type: "info",
  },
  {
    emoji: "🏠",
    title: "Rent Increase",
    desc: "Your landlord raised the rent again.",
    effect: (g) => {
      g.modCash(-(300 + Math.random() * 700));
    },
    type: "warning",
  },
  {
    emoji: "🐕",
    title: "Adopted a Pet",
    desc: "A furry friend brings joy (and expenses).",
    effect: (g) => {
      g.modCash(-200);
      g.modStat("happiness", 12);
    },
    type: "success",
  },
  {
    emoji: "💰",
    title: "Tax Refund",
    desc: "The IRS sent you a surprise refund!",
    effect: (g) => {
      g.modCash(1200 + Math.random() * 2500);
    },
    type: "success",
  },
  {
    emoji: "🎵",
    title: "Concert Night",
    desc: "A spontaneous concert outing lifted your spirits!",
    effect: (g) => {
      g.modCash(-150);
      g.modStat("happiness", 8);
    },
    type: "info",
  },
  {
    emoji: "⚡",
    title: "Power Outage",
    desc: "Extended blackout disrupted your routine.",
    effect: (g) => {
      g.modStat("happiness", -5);
      g.modStat("energy", -10);
    },
    type: "warning",
  },
  {
    emoji: "🏅",
    title: "Fitness Milestone",
    desc: "Your workout routine is paying off!",
    effect: (g) => {
      g.modStat("health", 8);
      g.modStat("happiness", 5);
    },
    type: "success",
  },
  {
    emoji: "📱",
    title: "Phone Stolen",
    desc: "Someone swiped your phone on the subway.",
    effect: (g) => {
      g.modCash(-800);
      g.modStat("happiness", -8);
    },
    type: "error",
  },
  {
    emoji: "🎲",
    title: "Lucky Day",
    desc: "Everything seems to go your way today!",
    effect: (g) => {
      g.modCash(300 + Math.random() * 700);
      g.modStat("happiness", 6);
      g.modStat("health", 3);
    },
    type: "success",
  },
  {
    emoji: "😰",
    title: "Anxiety Attack",
    desc: "Stress has been building up...",
    effect: (g) => {
      g.modStat("happiness", -12);
      g.modStat("health", -3);
    },
    type: "error",
  },
  {
    emoji: "🍀",
    title: "Inheritance",
    desc: "A distant relative left you some money!",
    effect: (g) => {
      g.modCash(3000 + Math.random() * 7000);
      g.modStat("happiness", 5);
    },
    type: "epic",
  },
  {
    emoji: "🔥",
    title: "Kitchen Fire",
    desc: "A small kitchen fire caused some damage.",
    effect: (g) => {
      g.modCash(-(500 + Math.random() * 1500));
      g.modStat("health", -5);
    },
    type: "error",
  },
  /* ── WILD & FUNNY NEW EVENTS ── */
  {
    emoji: "🎬",
    title: "Went Viral!",
    desc: "A random video you posted exploded online. Brands are sliding into your DMs with sponsorship cash!",
    effect: (g) => {
      g.modCash(5000 + Math.random() * 15000);
      g.modStat("happiness", 20);
    },
    type: "epic",
  },
  {
    emoji: "🎟️",
    title: "Lottery Ticket!",
    desc: "You scratched a lottery ticket and hit a secondary prize. Not the jackpot, but hey — that's real money!",
    effect: (g) => {
      g.modCash(2000 + Math.random() * 18000);
      g.modStat("happiness", 15);
    },
    type: "epic",
  },
  {
    emoji: "🚀",
    title: "Crypto Moon",
    desc: "A forgotten wallet of some random coin you bought years ago just surged 10,000%. You're cashing out!",
    effect: (g) => {
      g.modCash(8000 + Math.random() * 40000);
      g.modStat("happiness", 25);
    },
    type: "epic",
  },
  {
    emoji: "🧸",
    title: "eBay Goldmine",
    desc: "You listed a dusty old toy on eBay as a joke. A collector bought it for way more than it had any right to be worth.",
    effect: (g) => {
      g.modCash(1500 + Math.random() * 4000);
      g.modStat("happiness", 8);
    },
    type: "success",
  },
  {
    emoji: "🍕",
    title: "Mysterious Pizza",
    desc: "A pizza delivery guy showed up at your door. Wrong address, but both of you agreed you deserved it. Life is good.",
    effect: (g) => {
      g.modStat("happiness", 10);
      g.modStat("health", 3);
    },
    type: "info",
  },
  {
    emoji: "🌟",
    title: "Celebrity Encounter",
    desc: "You bumped into a famous celebrity at a coffee shop. They were surprisingly normal — and they paid for your latte!",
    effect: (g) => {
      g.modStat("happiness", 14);
      g.modStat("smarts", 2);
    },
    type: "success",
  },
  {
    emoji: "💎",
    title: "Old Coat Surprise",
    desc: "You found a diamond ring in the pocket of an old coat. Appraisal says it's the real deal. Craigslist payday!",
    effect: (g) => {
      g.modCash(3000 + Math.random() * 7000);
      g.modStat("happiness", 10);
    },
    type: "success",
  },
  {
    emoji: "📞",
    title: "Scam Caller Scammed",
    desc: "A scammer called you. You strung them along for 45 minutes pretending to buy gift cards, then trolled them. They somehow sent YOU money by mistake.",
    effect: (g) => {
      g.modCash(300 + Math.random() * 600);
      g.modStat("happiness", 12);
    },
    type: "success",
  },
  {
    emoji: "🏃",
    title: "Accidental Marathon",
    desc: "You signed up for a 5K but showed up to the wrong race. Somehow finished a half marathon. You feel incredible.",
    effect: (g) => {
      g.modStat("health", 15);
      g.modStat("happiness", 10);
    },
    type: "success",
  },
  {
    emoji: "🤖",
    title: "AI Took Their Job",
    desc: "Your entire department was threatened with AI replacement. You're the only one whose role got upgraded instead. Eat, sleep, win.",
    effect: (g) => {
      g.modStat("happiness", 12);
      g.modStat("smarts", 5);
      g.state.job &&
        (g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 15,
        ));
    },
    type: "success",
  },
  {
    emoji: "🎮",
    title: "Gaming Tournament",
    desc: "You entered an online gaming tournament on a whim. You wiped the floor with everyone.",
    effect: (g) => {
      g.modCash(1000 + Math.random() * 4000);
      g.modStat("happiness", 15);
    },
    type: "success",
  },
  {
    emoji: "📸",
    title: "Paparazzi Mistake",
    desc: "Paparazzi mistook you for a celebrity outside a restaurant. You played along. The photo sold. You got a cut.",
    effect: (g) => {
      g.modCash(500 + Math.random() * 2000);
      g.modStat("happiness", 18);
    },
    type: "success",
  },
  {
    emoji: "🚢",
    title: "Won a Cruise Raffle",
    desc: "You won a luxury cruise in a charity raffle you forgot you entered. Bon voyage!",
    effect: (g) => {
      g.modStat("happiness", 25);
      g.modStat("health", 10);
    },
    type: "epic",
  },
  {
    emoji: "🦜",
    title: "Inherited a Parrot",
    desc: "A distant relative left you their parrot, Biscuit. He knows three words: 'Money', 'Now', and a slur. Oddly motivating.",
    effect: (g) => {
      g.modStat("happiness", 12);
      g.modCash(-100);
    },
    type: "info",
  },
  {
    emoji: "💌",
    title: "Secret Admirer",
    desc: "You received an anonymous letter confessing someone has a crush on you. You have no idea who it is, but your confidence is through the roof.",
    effect: (g) => {
      g.modStat("happiness", 16);
    },
    type: "info",
  },
  {
    emoji: "👑",
    title: "30 Under 30 Feature",
    desc: "A local magazine listed you in their '30 Under 30' issue. You didn't apply. Your neighbor nominated you. Legend.",
    effect: (g) => {
      g.modStat("happiness", 14);
      g.modStat("smarts", 3);
      g.state.job &&
        (g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 10,
        ));
    },
    type: "success",
  },
  {
    emoji: "🎪",
    title: "Spontaneous Busking",
    desc: "You grabbed a guitar at a street fair and busked for two hours. People went wild. Hat full of cash, heart full of joy.",
    effect: (g) => {
      g.modCash(200 + Math.random() * 600);
      g.modStat("happiness", 10);
    },
    type: "success",
  },
  {
    emoji: "💰",
    title: "Dividend Surprise",
    desc: "You forgot you owned stocks. They've been paying dividends for 3 years and it just compounded into something meaningful.",
    effect: (g) => {
      g.modCash(2000 + Math.random() * 5000);
      g.modStat("happiness", 7);
    },
    type: "success",
  },
  {
    emoji: "😤",
    title: "Fender Bender",
    desc: "A minor car accident. The other driver was unreasonably rude, but their insurance covered everything — including a fat inconvenience payment.",
    effect: (g) => {
      g.modCash(800 + Math.random() * 1200);
      g.modStat("happiness", -5);
    },
    type: "warning",
  },
  {
    emoji: "🛸",
    title: "I Swear I Saw Something",
    desc: "You saw something in the sky last night that no rational explanation covers. You can't stop thinking about it. Your brain is on fire.",
    effect: (g) => {
      g.modStat("smarts", 6);
      g.modStat("happiness", 8);
    },
    type: "info",
  },
  {
    emoji: "🌮",
    title: "Free Festival Food",
    desc: "You stumbled into a food festival that was giving away free samples. You ate for three hours straight. Absolute bliss.",
    effect: (g) => {
      g.modStat("happiness", 12);
      g.modStat("health", 5);
    },
    type: "info",
  },
  {
    emoji: "📚",
    title: "Book Deal Offer",
    desc: "A publisher reached out after reading your old blog. They want your 'unflinching life story.' You have no idea what they're talking about but the advance check is real.",
    effect: (g) => {
      g.modCash(10000 + Math.random() * 20000);
      g.modStat("happiness", 15);
    },
    type: "epic",
  },
  {
    emoji: "🎃",
    title: "Costume Contest Champion",
    desc: "You threw together a last-minute costume from stuff around the house and somehow won the whole contest. Cash prize included.",
    effect: (g) => {
      g.modCash(500 + Math.random() * 1000);
      g.modStat("happiness", 12);
    },
    type: "success",
  },
  {
    emoji: "🤑",
    title: "Micro-Influencer",
    desc: "A niche brand noticed your social media and offered you a tiny sponsorship deal. The check is embarrassingly small but the ego boost is immense.",
    effect: (g) => {
      g.modCash(1200 + Math.random() * 2000);
      g.modStat("happiness", 10);
    },
    type: "success",
  },
  {
    emoji: "⚡",
    title: "Sued the Power Company",
    desc: "A power outage fried your appliances. You filed a small claims complaint and somehow won — plus legal fees covered.",
    effect: (g) => {
      g.modCash(1500 + Math.random() * 3000);
      g.modStat("happiness", 8);
    },
    type: "success",
  },
  {
    emoji: "🍀",
    title: "Billionaire Bet",
    desc: "A bored billionaire randomly Venmo'd you $5,000 with the note 'do something interesting.' You already spent it. No regrets.",
    effect: (g) => {
      g.modCash(5000);
      g.modStat("happiness", 20);
    },
    type: "epic",
  },
  {
    emoji: "🦁",
    title: "Zoo Escape Chaos",
    desc: "A peacock escaped the local zoo and chased you for three blocks. You got a $500 viral clip deal out of it.",
    effect: (g) => {
      g.modCash(500);
      g.modStat("happiness", 14);
      g.modStat("health", -2);
    },
    type: "info",
  },
  {
    emoji: "🏖️",
    title: "Boss Gave You a Vacation",
    desc: "Your boss felt guilty about last month's abuse and surprised the whole team with paid time off. You're going somewhere warm.",
    effect: (g) => {
      g.modStat("happiness", 20);
      g.modStat("health", 8);
      g.modStat("energy", 40);
    },
    type: "success",
  },
  {
    emoji: "🎵",
    title: "Nostalgia Playlist",
    desc: "You found your old iPod and listened to the whole thing. Suddenly your energy is back, your focus is laser-sharp, and you feel unstoppable.",
    effect: (g) => {
      g.modStat("happiness", 10);
      g.modStat("energy", 30);
    },
    type: "info",
  },
  {
    emoji: "🧙",
    title: "Fortune Teller",
    desc: "A street psychic told you something unsettlingly accurate about your life. You left with more confidence than you've had in years.",
    effect: (g) => {
      g.modStat("happiness", 8);
      g.modStat("smarts", 4);
    },
    type: "info",
  },
];

/* ── Work Events ── */
const WORK_EVENTS = [
  {
    title: "Performance Bonus",
    desc: "Great work this quarter! Here's a bonus.",
    effect: (g, sal) => {
      g.modCash(sal * 0.15);
      g.modStat("happiness", 8);
    },
    type: "success",
  },
  {
    title: "Office Drama",
    desc: "Workplace gossip is affecting morale.",
    effect: (g) => {
      g.modStat("happiness", -6);
    },
    type: "warning",
  },
  {
    title: "Promotion Hint",
    desc: "Your manager hinted at a possible promotion!",
    effect: (g) => {
      g.modStat("happiness", 10);
      g.state.job.performance = Math.min(100, g.state.job.performance + 10);
    },
    type: "info",
  },
  {
    title: "Layoff Scare",
    desc: "Rumors of layoffs are spreading...",
    effect: (g) => {
      g.modStat("happiness", -12);
      g.modStat("energy", -15);
    },
    type: "error",
  },
  {
    title: "Free Lunch",
    desc: "Company bought everyone lunch today!",
    effect: (g) => {
      g.modStat("happiness", 4);
      g.modStat("health", 2);
    },
    type: "info",
  },
  {
    title: "Overtime Required",
    desc: "Mandatory overtime this month. Extra pay but more stress.",
    effect: (g, sal) => {
      g.modCash(sal * 0.08);
      g.modStat("happiness", -8);
      g.modStat("energy", -20);
    },
    type: "warning",
  },
  {
    title: "Team Building",
    desc: "A team outing boosted everyone's spirits.",
    effect: (g) => {
      g.modStat("happiness", 7);
      g.state.job.performance = Math.min(100, g.state.job.performance + 5);
    },
    type: "success",
  },
  {
    title: "System Crash",
    desc: "IT systems went down. Chaotic day at work.",
    effect: (g) => {
      g.modStat("happiness", -5);
      g.modStat("energy", -10);
    },
    type: "error",
  },
  {
    title: "Client Win",
    desc: "You landed a big client! Management is impressed.",
    effect: (g, sal) => {
      g.modCash(sal * 0.1);
      g.state.job.performance = Math.min(100, g.state.job.performance + 8);
      g.modStat("happiness", 6);
    },
    type: "success",
  },
  {
    title: "Toxic Boss",
    desc: "Your manager is being unreasonable today.",
    effect: (g) => {
      g.modStat("happiness", -10);
      g.state.job.performance = Math.max(0, g.state.job.performance - 5);
    },
    type: "error",
  },
  {
    title: "Skill Workshop",
    desc: "Company-sponsored training session. You learned something!",
    effect: (g) => {
      g.modStat("smarts", 3);
      g.modStat("happiness", 3);
    },
    type: "info",
  },
  {
    title: "Holiday Bonus",
    desc: "End of year holiday bonus!",
    effect: (g, sal) => {
      g.modCash(sal * 0.12);
      g.modStat("happiness", 5);
    },
    type: "success",
  },
  /* ── WILD & FUNNY NEW WORK EVENTS ── */
  {
    title: "Reply-All Disaster",
    desc: "You accidentally sent a personal rant to the entire company. HR is calling it 'refreshingly honest'. Everyone respects you more now.",
    effect: (g) => {
      g.modStat("happiness", 10);
      g.state.job &&
        (g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 8,
        ));
    },
    type: "info",
  },
  {
    title: "LinkedIn Goes Viral",
    desc: "You wrote a 3-sentence post about 'hustle culture' and it hit 500K impressions. Recruiters are flooding your inbox. Leverage it.",
    effect: (g) => {
      g.modStat("happiness", 12);
      g.modStat("smarts", 3);
      g.state.job &&
        (g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 12,
        ));
    },
    type: "success",
  },
  {
    title: "Fell Asleep in Meeting",
    desc: "You dozed off mid-presentation, started snoring softly, and somehow the CEO called it 'zen-like poise under pressure'. You've been promoted.",
    effect: (g, sal) => {
      g.modCash(sal * 0.25);
      g.modStat("happiness", 15);
      g.state.job &&
        (g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 15,
        ));
    },
    type: "epic",
  },
  {
    title: "Accidental Pay Raise",
    desc: "HR entered the wrong number in the salary system and accidentally gave you a raise. Finance caught it but the CEO said 'good enough, keep it'.",
    effect: (g, sal) => {
      g.modCash(sal * 0.2);
      g.modStat("happiness", 14);
    },
    type: "success",
  },
  {
    title: "Fixed the Coffee Machine",
    desc: "You fixed the office coffee machine that had been broken for 3 weeks. You are now universally adored. They baked you a cake.",
    effect: (g) => {
      g.modStat("happiness", 16);
      g.modStat("health", 5);
      g.state.job &&
        (g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 5,
        ));
    },
    type: "success",
  },
  {
    title: "Stock Options Vested",
    desc: "Those dusty stock options from 3 years ago finally vested. The market cooperated. This is the payday you forgot was coming.",
    effect: (g, sal) => {
      g.modCash(sal * 1.5 + Math.random() * sal);
      g.modStat("happiness", 20);
    },
    type: "epic",
  },
  {
    title: "Remote Work Forever",
    desc: "Company announced permanent work-from-home. No more commute. No more pants. Your energy and sanity are fully restored.",
    effect: (g) => {
      g.modStat("happiness", 20);
      g.modStat("energy", 40);
      g.modStat("health", 8);
    },
    type: "success",
  },
  {
    title: "Surprise Company Retreat",
    desc: "The company flew everyone to a mountain resort for a surprise 3-day retreat. You didn't do a single work thing. Perfect.",
    effect: (g) => {
      g.modStat("happiness", 18);
      g.modStat("health", 10);
      g.modStat("energy", 35);
    },
    type: "success",
  },
  {
    title: "Expense Report Approved",
    desc: "Finance approved an expense report that absolutely should not have been approved. No questions asked. You're keeping quiet.",
    effect: (g, sal) => {
      g.modCash(sal * 0.18);
      g.modStat("happiness", 8);
    },
    type: "success",
  },
  {
    title: "Company Nap Pods Installed",
    desc: "The company invested in wellness nap pods in the break room. You have been in one for most of the week. Performance is through the roof somehow.",
    effect: (g) => {
      g.modStat("energy", 50);
      g.modStat("happiness", 12);
      g.state.job &&
        (g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 8,
        ));
    },
    type: "info",
  },
  {
    title: "Nemesis Got Fired",
    desc: "That one coworker who made your life difficult every day got fired. You didn't even do anything. The universe just handled it.",
    effect: (g) => {
      g.modStat("happiness", 22);
      g.modStat("energy", 20);
    },
    type: "epic",
  },
  {
    title: "Pizza Party Announced",
    desc: "Company smashed its quarterly goals. Free pizza for everyone — and they got the good stuff, not that cardboard chain garbage.",
    effect: (g) => {
      g.modStat("happiness", 10);
      g.modStat("health", 5);
    },
    type: "success",
  },
  {
    title: "Mystery Bonus",
    desc: "A mysterious 'strategic alignment bonus' appeared in your paycheck. Finance has no record of authorising it. Nobody is investigating.",
    effect: (g, sal) => {
      g.modCash(sal * 0.3);
      g.modStat("happiness", 10);
    },
    type: "success",
  },
];

/* ── Attach triggerWorkEvent to game ── */
game.triggerWorkEvent = function (track, level) {
  const evt = WORK_EVENTS[Math.floor(Math.random() * WORK_EVENTS.length)];
  const salary = this.state.job.salary;
  app.modal(`💼 ${evt.title}`, evt.desc, [
    {
      text: "OK",
      cb: () => {
        evt.effect(this, salary / 12);
        app.closeModal();
        app.toast(evt.title, evt.type);
      },
    },
  ]);
};

/* ── Attach triggerLifeEvent to game ── */
game.triggerLifeEvent = function () {
  const g = this;
  const r = g.state.relationship || {};
  const inRelationship = r.status && r.status !== "single";
  const hasPets = g.state.pets && g.state.pets.length > 0;
  // Only pick events that make sense for the current game state
  const pool = LIFE_EVENTS.filter(function (e) {
    // breakup events require an active relationship
    if (e.title === "Bad Breakup" && !inRelationship) return false;
    // car trouble: reduce chance when player is very young or broke
    if (e.title === "Car Trouble" && g.state.cash < 800 && Math.random() < 0.7)
      return false;
    // scholarship offer: only make sense for younger characters
    if (e.title === "Scholarship Offer" && Math.floor(g.state.age / 12) > 35)
      return false;
    // natural disaster costs a lot — cap at player being able to recover
    if (e.title === "Natural Disaster" && g.state.cash < 1500) return false;
    // pet-related event only if they have pets or can afford adoption
    if (e.title === "Adopted a Pet" && (hasPets || g.state.cash < 300))
      return false;
    return true;
  });
  const evt = (pool.length > 0 ? pool : LIFE_EVENTS)[
    Math.floor(Math.random() * (pool.length || LIFE_EVENTS.length))
  ];
  app.modal(`${evt.emoji} ${evt.title}`, evt.desc, [
    {
      text: "Deal With It",
      cb: () => {
        evt.effect(g);
        app.closeModal();
        app.toast(evt.title, evt.type);
      },
    },
  ]);
};

/* ── Patch nextMonth to include random life events ── */
(function () {
  const origNextMonth = game.nextMonth.bind(game);
  game.nextMonth = function () {
    origNextMonth();
    // 22% chance of random life event each month (only if alive)
    if (
      !this.state.life.dead &&
      !this.state.life.retired &&
      Math.random() < 0.22
    ) {
      this.triggerLifeEvent();
    }
    FX.updateStreakFire();
    FX.updateHeartbeat();
  };
})();

/* ── Patch renderAll to apply streak fire visual and heartbeat ── */
(function () {
  const origRenderAll = game.renderAll.bind(game);
  game.renderAll = function () {
    origRenderAll();
    FX.updateStreakFire();
    FX.updateHeartbeat();
  };
})();

/* ── Patch registerAction to pulse button and fire toast on streaks ── */
(function () {
  const origRegisterAction = game.registerAction.bind(game);
  game.registerAction = function (score) {
    origRegisterAction(score);
    FX.pulseNextMonth();
    FX.updateStreakFire();
    const streak = this.state.gameplay?.actionStreak || 0;
    if (streak > 0 && streak % 10 === 0) {
      const streakBonus = Math.min(
        50000,
        streak * 500 + Math.random() * streak * 300,
      );
      game.modCash(streakBonus);
      game.modStat("happiness", 10);
      app.toast(
        `🔥 Hot Streak x${streak}! Momentum bonus +$${Math.round(streakBonus).toLocaleString()}!`,
        "epic",
      );
      FX.screenFlash("gain");
      FX.confetti();
    }
  };
})();

/* ── Patch die for dramatic death screen ── */
(function () {
  const origDie = game.die.bind(game);
  game.die = function (reason) {
    origDie(reason);
    FX.screenFlash("loss");
    FX.screenShake("lg");
  };
})();

/* ── Patch retire for celebration ── */
(function () {
  const origRetire = game.retire.bind(game);
  game.retire = function (reason) {
    origRetire(reason);
    FX.confetti();
    FX.milestoneOverlay(
      "🏆 Legacy Secured",
      `Retired with $${shortNumber(Math.floor(this.getNetWorth()))}`,
    );
    FX.screenFlash("epic");
  };
})();

/* ── Early-game celebrations system ── */
(function () {
  /* Track milestones that have already fired so they don't repeat */
  const fired = new Set();
  function once(key, fn) {
    if (fired.has(key)) return;
    fired.add(key);
    fn();
  }

  /* ---- Graduation celebration ---- */
  const origGradModal = app.modal.bind(app);
  const _origModal = app.modal;
  app.modal = function (title, body, btns) {
    _origModal.call(app, title, body, btns);
    if (title === "Graduated!") {
      FX.confetti();
      FX.milestoneOverlay("🎓 Graduated!", body);
      FX.screenFlash("epic");
    }
  };

  /* ---- First enrollment celebration ---- */
  const origStartDegree = game.startDegree.bind(game);
  game.startDegree = function (id) {
    const hadDeg = !!this.state.edu.current;
    origStartDegree(id);
    if (!hadDeg && this.state.edu.current) {
      const d = CONFIG.DEGREES.find((x) => x.id === id);
      once("first_enroll", () => {
        FX.confetti();
        FX.milestoneOverlay("📚 Enrolled!", d ? d.name : "University");
        FX.screenFlash("gain");
      });
    }
  };

  /* ---- First startup celebration ---- */
  const origStartStartup = game.startStartup.bind(game);
  game.startStartup = function () {
    const had = this.state.startups.length;
    origStartStartup();
    if (had === 0 && this.state.startups.length > 0) {
      once("first_startup", () => {
        FX.confetti();
        FX.milestoneOverlay("🚀 Founder!", "Your first startup!");
        FX.screenFlash("epic");
      });
    }
  };

  /* ---- Net worth milestone celebrations ---- */
  const thresholds = [
    {
      key: "nw_1k",
      amt: 1000,
      title: "💰 $1,000!",
      sub: "First thousand earned",
    },
    { key: "nw_5k", amt: 5000, title: "💵 $5,000!", sub: "Building momentum" },
    {
      key: "nw_25k",
      amt: 25000,
      title: "📈 $25,000!",
      sub: "Quarter of the way to six figures",
    },
    {
      key: "nw_50k",
      amt: 50000,
      title: "🔥 $50,000!",
      sub: "Halfway to six figures",
    },
    {
      key: "nw_250k",
      amt: 250000,
      title: "⭐ $250,000!",
      sub: "Quarter millionaire",
    },
    {
      key: "nw_500k",
      amt: 500000,
      title: "🌟 $500,000!",
      sub: "Half a million!",
    },
    {
      key: "nw_5m",
      amt: 5000000,
      title: "👑 $5,000,000!",
      sub: "Multi-millionaire",
    },
    {
      key: "nw_10m",
      amt: 10000000,
      title: "💎 $10,000,000!",
      sub: "Eight-figure empire",
    },
  ];
  const origRenderAll = game.renderAll.bind(game);
  game.renderAll = function () {
    origRenderAll();
    /* Net worth milestones */
    const nw = this.getNetWorth();
    thresholds.forEach((t) => {
      if (nw >= t.amt) {
        once(t.key, () => {
          FX.confetti();
          FX.milestoneOverlay(t.title, t.sub);
          FX.screenFlash("epic");
        });
      }
    });
    /* First job (checked on every render since job accept is async in a modal) */
    if (this.state.job) {
      once("first_job", () => {
        FX.confetti();
        FX.milestoneOverlay("💼 First Job!", "Welcome to the grind.");
        FX.screenFlash("gain");
      });
    }
  };

  /* ---- First crime celebration ---- */
  const origCommitCrime = game.commitCrime ? game.commitCrime.bind(game) : null;
  if (origCommitCrime) {
    game.commitCrime = function (id) {
      const hadCrimes = this.state.crime.history.length;
      origCommitCrime(id);
      if (hadCrimes === 0 && this.state.crime.history.length > 0) {
        once("first_crime", () => {
          FX.milestoneOverlay("🔫 First Crime", "Welcome to the underworld");
          FX.screenFlash("loss");
          FX.screenShake("sm");
        });
      }
    };
  }

  /* ---- First pet celebration — patched after pet system loads ---- */
})();

/* ══════════════════════════════════════════════════════════════════════
   RELATIONSHIPS, PETS & PRISON — Full Systems
   ══════════════════════════════════════════════════════════════════════ */

const FIRST_NAMES = [
  "Liam",
  "Emma",
  "Noah",
  "Olivia",
  "James",
  "Ava",
  "Ethan",
  "Mia",
  "Lucas",
  "Sophia",
  "Mason",
  "Isabella",
  "Logan",
  "Charlotte",
  "Jack",
  "Amelia",
  "Dylan",
  "Harper",
  "Leo",
  "Ella",
  "Owen",
  "Grace",
  "Aiden",
  "Lily",
  "Ryan",
  "Aria",
  "Caleb",
  "Zoe",
  "Nathan",
  "Chloe",
];
function randomName() {
  return FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
}

/* ── RELATIONSHIP SYSTEM ── */
game.getAvailablePartners = function () {
  const pool = [...CONFIG.PARTNERS];
  return pool.sort(() => Math.random() - 0.5).slice(0, 3);
};

game.startDating = function (partnerId) {
  if (!this.canAct()) return;
  if (this.state.relationship.status !== "single")
    return app.toast("Already in a relationship!", "error");
  if (this.state.stats.energy < 20)
    return app.toast("Too tired to date.", "error");
  const p = CONFIG.PARTNERS.find((x) => x.id === partnerId);
  if (!p) return;
  this.modStat("energy", -20);
  this.modCash(-150);
  const compat = p.compatibility();
  if (Math.random() < compat) {
    this.state.relationship.status = "dating";
    this.state.relationship.partner = partnerId;
    this.state.relationship.partnerName = p.name;
    this.state.relationship.love = 25 + Math.floor(Math.random() * 20);
    this.state.relationship.trust = 30 + Math.floor(Math.random() * 20);
    this.state.relationship.monthsTogether = 0;
    this.modStat("happiness", 15);
    app.toast(`You and ${p.name} are now dating! 💕`, "success");
    FX.screenFlash("gain");
  } else {
    this.modStat("happiness", -5);
    app.toast(`${p.name} wasn't interested. Better luck next time.`, "error");
  }
  this.registerAction(1);
  this.renderAll();
};

game.proposeMarriage = function () {
  if (this.state.relationship.status !== "dating") return;
  if (this.state.relationship.love < 60)
    return app.toast("Your relationship isn't strong enough yet.", "warning");
  if (this.state.relationship.monthsTogether < 6)
    return app.toast(
      "Too early to propose. Date at least 6 months.",
      "warning",
    );
  const p = CONFIG.PARTNERS.find(
    (x) => x.id === this.state.relationship.partner,
  );
  const acceptChance =
    (this.state.relationship.love / 100) *
    (this.state.relationship.trust / 100) *
    (p ? p.loyalty : 0.5);
  if (Math.random() < Math.min(0.95, acceptChance + 0.2)) {
    this.state.relationship.status = "engaged";
    this.modStat("happiness", 20);
    app.toast(`${this.state.relationship.partnerName} said YES! 💍`, "epic");
    FX.confetti();
    FX.screenFlash("epic");
    this._showWeddingOptions();
  } else {
    this.state.relationship.love -= 15;
    this.modStat("happiness", -20);
    app.toast(
      `${this.state.relationship.partnerName} said no... not ready yet.`,
      "error",
    );
    FX.screenFlash("loss");
  }
  this.renderAll();
};

game._showWeddingOptions = function () {
  const costs = CONFIG.WEDDING_COSTS;
  app.modal(
    "\u{1F492} Wedding Planning",
    `Choose your wedding style with ${this.state.relationship.partnerName}:`,
    [
      {
        text: `Courthouse ($${shortNumber(costs.courthouse)})`,
        cb: () => {
          this._doWedding("courthouse", costs.courthouse);
          app.closeModal();
        },
      },
      {
        text: `Modest ($${shortNumber(costs.modest)})`,
        cb: () => {
          this._doWedding("modest", costs.modest);
          app.closeModal();
        },
      },
      {
        text: `Lavish ($${shortNumber(costs.lavish)})`,
        cb: () => {
          this._doWedding("lavish", costs.lavish);
          app.closeModal();
        },
      },
      {
        text: `Extravagant ($${shortNumber(costs.extravagant)})`,
        cb: () => {
          this._doWedding("extravagant", costs.extravagant);
          app.closeModal();
        },
      },
    ],
  );
};

game._doWedding = function (type, cost) {
  if (this.state.cash < cost)
    return app.toast("Can't afford this wedding!", "error");
  this.modCash(-cost);
  this.state.relationship.weddingType = type;
  const p = CONFIG.PARTNERS.find(
    (x) => x.id === this.state.relationship.partner,
  );
  const partnerWantsPrenup = p && p.income > 8000;
  const playerRicher = this.getNetWorth() > (p ? p.income * 24 : 50000);
  if (playerRicher || partnerWantsPrenup) {
    setTimeout(() => this._showPrenupOptions(), 500);
  } else {
    this._finalizeMarriage(type, "none");
  }
};

game._showPrenupOptions = function () {
  const options = CONFIG.PRENUP_TYPES;
  const p = this.state.relationship.partnerName;
  app.modal(
    "\u{1F4CB} Prenuptial Agreement",
    `${p} suggests discussing a prenup. This determines asset division if divorce happens.`,
    [
      {
        text: options[0].name,
        cb: () => {
          this._finalizeMarriage(
            this.state.relationship.weddingType || "modest",
            "none",
          );
          app.closeModal();
        },
      },
      {
        text: options[1].name,
        cb: () => {
          this._finalizeMarriage(
            this.state.relationship.weddingType || "modest",
            "partial",
          );
          app.closeModal();
        },
      },
      {
        text: options[2].name,
        cb: () => {
          this.state.relationship.trust -= 10;
          this.state.relationship.love -= 5;
          this._finalizeMarriage(
            this.state.relationship.weddingType || "modest",
            "full",
          );
          app.closeModal();
        },
      },
    ],
  );
};

game._finalizeMarriage = function (weddingType, prenupType) {
  this.state.relationship.status = "married";
  this.state.relationship.prenup = prenupType;
  this.state.relationship.weddingType = weddingType;
  this.state.relationship.marriageMonth = this.state.age;
  this.state.relationship.love = Math.min(
    100,
    this.state.relationship.love + 15,
  );
  this.state.relationship.trust = Math.min(
    100,
    this.state.relationship.trust + 10,
  );
  const happinessBonus = {
    courthouse: 5,
    modest: 10,
    lavish: 18,
    extravagant: 25,
  };
  this.modStat("happiness", 25 + (happinessBonus[weddingType] || 10));
  FX.confetti();
  FX.milestoneOverlay(
    "\u{1F492} Just Married!",
    `You married ${this.state.relationship.partnerName}!`,
  );
  app.toast(
    `Married ${this.state.relationship.partnerName}! ${prenupType !== "none" ? "(Prenup: " + prenupType + ")" : ""}`,
    "epic",
  );
  this.registerAction(5);
  this.renderAll();
};

game.tryForBaby = function () {
  if (this.state.relationship.status !== "married")
    return app.toast("Must be married.", "error");
  // 10-month cooldown between births
  const r = this.state.relationship;
  const monthsSinceBirth = this.state.age - (r.lastBirthMonth || 0);
  if (r.lastBirthMonth > 0 && monthsSinceBirth < 10) {
    const remaining = 10 - monthsSinceBirth;
    return app.toast(
      `Must wait ${remaining} more month${remaining > 1 ? "s" : ""} before trying again.`,
      "error",
    );
  }
  if (this.state.stats.energy < 20) return app.toast("Too tired.", "error");
  this.modStat("energy", -20);
  const chance = 0.25 + this.state.stats.health / 500;
  if (Math.random() < chance) {
    const name = randomName();
    r.children.push({
      name,
      ageMonths: 0,
      adopted: false,
    });
    r.lastBirthMonth = this.state.age;
    this.modStat("happiness", 30);
    app.toast(
      `\u{1F389} ${r.partnerName} is having a baby! Meet ${name}!`,
      "epic",
    );
    FX.confetti();
    FX.screenFlash("epic");
    this.modCash(-3000);
  } else {
    this.modStat("happiness", -3);
    app.toast("No luck this time.", "info");
  }
  this.registerAction(1);
  this.renderAll();
};

game.adoptChild = function () {
  if (this.state.cash < CONFIG.ADOPTION_COST)
    return app.toast(
      `Need $${shortNumber(CONFIG.ADOPTION_COST)} for adoption.`,
      "error",
    );
  this.modCash(-CONFIG.ADOPTION_COST);
  const name = randomName();
  this.state.relationship.children.push({
    name,
    ageMonths: CONFIG.ADOPTION_CHILD_AGE * 12,
    adopted: true,
  });
  this.modStat("happiness", 25);
  app.toast(`Welcome home, ${name}! \u{1F3E0}`, "epic");
  FX.confetti();
  this.registerAction(3);
  this.renderAll();
};

/* ── RELATIONSHIP IMPROVEMENT ACTIONS ── */
game.dateNight = function () {
  if (!this.canAct()) return;
  const r = this.state.relationship;
  if (r.status === "single") return app.toast("You're single!", "error");
  const cost = 80 + Math.floor(Math.random() * 120);
  if (this.state.cash < cost)
    return app.toast("Can't afford a date right now.", "error");
  this.modCash(-cost);
  this.modStat("energy", -8);
  const quality = Math.random();
  if (quality > 0.7) {
    r.love = Math.min(100, r.love + 8 + Math.random() * 5);
    r.trust = Math.min(100, r.trust + 4);
    this.modStat("happiness", 6);
    app.toast(`Amazing date with ${r.partnerName}! (-$${cost})`, "success");
  } else if (quality > 0.2) {
    r.love = Math.min(100, r.love + 4 + Math.random() * 3);
    r.trust = Math.min(100, r.trust + 2);
    this.modStat("happiness", 3);
    app.toast(`Nice evening with ${r.partnerName}. (-$${cost})`, "info");
  } else {
    r.love = Math.max(0, r.love - 2);
    this.modStat("happiness", -2);
    app.toast(`Awkward date with ${r.partnerName}... (-$${cost})`, "warning");
  }
  this.registerAction(1);
  this.renderAll();
};

game.giveGift = function () {
  if (!this.canAct()) return;
  const r = this.state.relationship;
  if (r.status === "single") return app.toast("You're single!", "error");
  const gifts = [
    { name: "flowers", cost: 50, love: 3, trust: 1 },
    { name: "jewelry", cost: 500, love: 8, trust: 3 },
    { name: "surprise trip", cost: 2000, love: 15, trust: 5 },
    { name: "handmade gift", cost: 20, love: 5, trust: 4 },
  ];
  const affordable = gifts.filter((g) => this.state.cash >= g.cost);
  if (affordable.length === 0)
    return app.toast("Can't afford any gifts.", "error");
  const gift = affordable[Math.floor(Math.random() * affordable.length)];
  this.modCash(-gift.cost);
  r.love = Math.min(100, r.love + gift.love);
  r.trust = Math.min(100, r.trust + gift.trust);
  this.modStat("happiness", 3);
  app.toast(
    `Gave ${r.partnerName} ${gift.name}! (+${gift.love} love, -$${gift.cost})`,
    "success",
  );
  this.registerAction(1);
  this.renderAll();
};

game.couplesTherapy = function () {
  if (!this.canAct()) return;
  const r = this.state.relationship;
  if (r.status === "single") return app.toast("You're single!", "error");
  const cost = 300;
  if (this.state.cash < cost)
    return app.toast(`Therapy costs $${cost}.`, "error");
  this.modCash(-cost);
  this.modStat("energy", -10);
  r.trust = Math.min(100, r.trust + 8 + Math.random() * 7);
  r.love = Math.min(100, r.love + 3 + Math.random() * 4);
  r.fights = Math.max(0, r.fights - 1);
  this.modStat("happiness", 2);
  app.toast(
    `Therapy session with ${r.partnerName}. Trust improved! (-$${cost})`,
    "info",
  );
  this.registerAction(1);
  this.renderAll();
};

game.qualityTime = function () {
  if (!this.canAct()) return;
  const r = this.state.relationship;
  if (r.status === "single") return app.toast("You're single!", "error");
  this.modStat("energy", -5);
  r.love = Math.min(100, r.love + 2 + Math.random() * 3);
  r.trust = Math.min(100, r.trust + 3 + Math.random() * 2);
  this.modStat("happiness", 4);
  const activities = [
    "watched a movie",
    "cooked dinner together",
    "went for a walk",
    "played games",
    "had a deep conversation",
  ];
  const act = activities[Math.floor(Math.random() * activities.length)];
  app.toast(`You and ${r.partnerName} ${act}.`, "info");
  this.registerAction(1);
  this.renderAll();
};

game.breakup = function () {
  if (this.state.relationship.status === "single") return;
  if (this.state.relationship.status === "married") {
    this._initiateDivorce();
    return;
  }
  const name = this.state.relationship.partnerName;
  this.state.relationship.status = "single";
  this.state.relationship.partner = null;
  this.state.relationship.partnerName = "";
  this.state.relationship.love = 0;
  this.state.relationship.trust = 0;
  this.state.relationship.monthsTogether = 0;
  this.modStat("happiness", -15);
  app.toast(`Broke up with ${name}.`, "warning");
  FX.screenFlash("loss");
  this.renderAll();
};

game._initiateDivorce = function () {
  const netWorth = this.getNetWorth();
  const prenupConfig =
    CONFIG.PRENUP_TYPES.find((p) => p.id === this.state.relationship.prenup) ||
    CONFIG.PRENUP_TYPES[0];
  const splitAmount = Math.max(0, netWorth * prenupConfig.splitPct);
  const totalCost = splitAmount + CONFIG.DIVORCE_BASE_COST;
  const name = this.state.relationship.partnerName;
  app.modal(
    "\u{2696}\u{FE0F} Divorce Proceedings",
    `Divorcing ${name}.\n\nPrenup: ${prenupConfig.name}\nAsset Split: $${shortNumber(Math.floor(splitAmount))}\nLegal Fees: $${shortNumber(CONFIG.DIVORCE_BASE_COST)}\nTotal Cost: $${shortNumber(Math.floor(totalCost))}`,
    [
      {
        text: "Proceed with Divorce",
        cb: () => {
          this._processDivorce(false);
          app.closeModal();
        },
      },
      { text: "Stay Together", cb: () => app.closeModal() },
    ],
  );
};

game._processDivorce = function (forced) {
  const prenupConfig =
    CONFIG.PRENUP_TYPES.find((p) => p.id === this.state.relationship.prenup) ||
    CONFIG.PRENUP_TYPES[0];
  const netWorth = this.getNetWorth();
  const splitAmount = Math.max(0, netWorth * prenupConfig.splitPct);
  const totalCost = splitAmount + CONFIG.DIVORCE_BASE_COST;
  this.modCash(-totalCost);
  this.state.relationship.divorces++;
  const name = this.state.relationship.partnerName;
  this.state.relationship.status = "single";
  this.state.relationship.partner = null;
  this.state.relationship.partnerName = "";
  this.state.relationship.love = 0;
  this.state.relationship.trust = 0;
  this.state.relationship.monthsTogether = 0;
  this.state.relationship.prenup = "none";
  this.modStat("happiness", -30);
  this.state.life.chronicStress = Math.min(
    200,
    this.state.life.chronicStress + 25,
  );
  FX.screenFlash("loss");
  FX.screenShake("lg");
  app.toast(
    `Divorced ${name}. Lost $${shortNumber(Math.floor(totalCost))}.`,
    "error",
  );
  this.renderAll();
};

/* ════════════════════════════════════════════════════════
   SIDE RELATIONSHIPS  –  flings, girlfriends, extra wives
   Available in polygamy-legal countries for official wives;
   available as secret affairs everywhere (high risk).
   ════════════════════════════════════════════════════════ */

game.isPolygamyAllowed = function () {
  return CONFIG.POLYGAMY_ALLOWED_CODES.has(this.state.country);
};

/** Called from the UI "Start Side Affair" button */
game.openSideRelationshipMenu = function () {
  if (!this.canAct()) return;
  const r = this.state.relationship;
  if (r.status === "single")
    return app.toast("You need to be in a relationship first.", "warning");

  const poly = this.isPolygamyAllowed();
  const countryName = this.state.country || "your country";

  const buttons = [
    {
      text: "💋 Fling (Secret) — ~$220/mo",
      cb: () => {
        app.closeModal();
        game._pickSidePartner("fling");
      },
    },
    {
      text: "❤️ Girlfriend (Secret) — ~$440/mo",
      cb: () => {
        app.closeModal();
        game._pickSidePartner("girlfriend");
      },
    },
  ];

  if (poly && r.status === "married") {
    buttons.push({
      text: "💍 Second Wife (Official) — ~$670/mo",
      cb: () => {
        app.closeModal();
        game._pickSidePartner("second_wife");
      },
    });
  }
  buttons.push({ text: "Cancel", cb: () => app.closeModal() });

  const warningLine = poly
    ? `You live in ${countryName} — polygamy is legal here. Official marriages are recognised; all wives will know about each other and will react.`
    : `In ${countryName} this is an affair. If your partner finds out, consequences will be severe. Risk grows every month.`;

  app.modal("💔 Start a Side Relationship", warningLine, buttons);
};

/** Show partner picker for the chosen side-relationship type */
game._pickSidePartner = function (type) {
  const r = this.state.relationship;
  const takenIds = r.sideRelationships.map((sr) => sr.partnerId);
  const available = CONFIG.SIDE_PARTNERS.filter(
    (sp) => !takenIds.includes(sp.id),
  );
  if (available.length === 0)
    return app.toast("No one else available right now.", "info");

  const btns = available.slice(0, 5).map((sp) => ({
    text: `${sp.name} — ${sp.trait}  (Looks ${"⭐".repeat(Math.round(sp.looks / 2))})`,
    cb: () => {
      app.closeModal();
      game._attemptSideRelationship(sp.id, type);
    },
  }));
  btns.push({ text: "Never mind", cb: () => app.closeModal() });

  const typeLabel =
    type === "fling"
      ? "Fling"
      : type === "girlfriend"
        ? "Girlfriend"
        : "Second Wife";
  app.modal(`Choose — ${typeLabel}`, "Pick someone:", btns);
};

/** Attempt to start the chosen side relationship */
game._attemptSideRelationship = function (partnerId, type) {
  if (!this.canAct()) return;
  if (this.state.stats.energy < 20)
    return app.toast("Too tired right now.", "error");

  const sp = CONFIG.SIDE_PARTNERS.find((x) => x.id === partnerId);
  if (!sp) return;

  // Poly check for second_wife
  if (type === "second_wife" && !this.isPolygamyAllowed())
    return app.toast(
      "This is only possible in countries where polygamy is legal.",
      "error",
    );
  if (type === "second_wife" && this.state.relationship.status !== "married")
    return app.toast("You must be married to take a second wife.", "error");

  const dateCost = type === "fling" ? 100 : 150;
  if (this.state.cash < dateCost)
    return app.toast(`Need at least $${dateCost} to make a move.`, "error");

  this.modCash(-dateCost);
  this.modStat("energy", -20);

  const compat = sp.compatibility();
  if (Math.random() > compat) {
    this.modStat("happiness", -3);
    app.toast(`${sp.name} wasn't interested.`, "error");
    this.registerAction(1);
    this.renderAll();
    return;
  }

  const expense = sp.monthlyExpense[type] || sp.monthlyExpense["fling"];
  const typeLabel =
    type === "fling"
      ? "a fling"
      : type === "girlfriend"
        ? "your girlfriend"
        : "your second wife";

  const entry = {
    id: "sr_" + Date.now(),
    partnerId: sp.id,
    partnerName: sp.name,
    partnerTrait: sp.trait,
    partnerLooks: sp.looks,
    type,
    love: 20 + Math.floor(Math.random() * 20),
    monthsTogether: 0,
    monthlyExpense: expense,
  };

  this.state.relationship.sideRelationships.push(entry);
  this.modStat("happiness", type === "second_wife" ? 12 : 10);

  const typeEmoji =
    type === "fling" ? "🔥" : type === "girlfriend" ? "💋" : "💍";
  app.toast(`${typeEmoji} ${sp.name} is now ${typeLabel}!`, "success");
  FX.screenFlash("gain");

  if (type === "second_wife") {
    const mainName = this.state.relationship.partnerName;
    setTimeout(() => {
      app.toast(
        `${mainName} has been told. She's quiet — for now. Watch for jealousy.`,
        "warning",
      );
    }, 1800);
  }

  this.registerAction(2);
  this.renderAll();
};

/** Player-initiated end to a side relationship */
game.endSideRelationship = function (sideRelId) {
  const r = this.state.relationship;
  const idx = r.sideRelationships.findIndex((sr) => sr.id === sideRelId);
  if (idx === -1) return;
  const sr = r.sideRelationships[idx];
  const name = sr.partnerName;

  const msg =
    sr.type === "second_wife"
      ? `Divorced ${name}. She will receive a settlement.`
      : sr.type === "girlfriend"
        ? `Ended things with ${name}. She's hurt and confused.`
        : `Cut off the fling with ${name}. Awkward, but done.`;

  r.sideRelationships.splice(idx, 1);

  if (sr.type === "second_wife") {
    const settlement = Math.min(this.state.cash * 0.08, 8000);
    this.modCash(-settlement);
    app.toast(
      `${msg} Settlement: -$${shortNumber(Math.floor(settlement))}`,
      "warning",
    );
  } else {
    app.toast(msg, "warning");
  }
  this.modStat("happiness", sr.type === "second_wife" ? -12 : -5);
  FX.screenFlash("loss");
  this.renderAll();
};

/** Monthly processing for all side relationships — returns total expense */
game.processSideRelationshipsMonthly = function () {
  const r = this.state.relationship;
  if (!r.sideRelationships || r.sideRelationships.length === 0) return 0;

  let totalExpenses = 0;
  const toRemove = [];

  r.sideRelationships.forEach((sr) => {
    sr.monthsTogether++;
    totalExpenses += sr.monthlyExpense;

    // ── Official second wife track (known polygamy arrangement) ──
    if (sr.type === "second_wife" && this.isPolygamyAllowed()) {
      if (r.status !== "single" && Math.random() < 0.22) {
        this._wifeJealousyEvent(sr, r);
      }
      // Small regular happiness from the new relation
      if (Math.random() < 0.1) {
        this.modStat("happiness", 2);
        app.toast(`Spent quality time with ${sr.partnerName}.`, "info");
      }
      return;
    }

    // ── Secret relationship / affair track ──
    // Discovery chance rises over time
    const baseChance =
      sr.type === "fling" ? 0.014 : sr.type === "girlfriend" ? 0.024 : 0.034;
    const growthPerMonth = sr.type === "fling" ? 0.0008 : 0.0015;
    const discoveryChance = Math.min(
      0.28,
      baseChance + sr.monthsTogether * growthPerMonth,
    );

    if (r.status !== "single" && Math.random() < discoveryChance) {
      this._affairDiscovered(sr, r);
      toRemove.push(sr.id);
      return;
    }

    // Positive events
    if (Math.random() < 0.09) {
      sr.love = Math.min(100, (sr.love || 30) + 5);
      this.modStat("happiness", 3);
      const positiveMsgs = [
        `${sr.partnerName} sent you a secret message. Your heart races.`,
        `A hidden evening with ${sr.partnerName}. Exhilarating.`,
        `${sr.partnerName} surprised you at lunch. Risky, but thrilling.`,
        `Late-night call with ${sr.partnerName}. You smile when no one's watching.`,
      ];
      app.toast(
        positiveMsgs[Math.floor(Math.random() * positiveMsgs.length)],
        "info",
      );
    }

    // Fling growing complicated
    if (sr.type === "fling" && sr.monthsTogether >= 6 && Math.random() < 0.12) {
      const complicatedMsgs = [
        `${sr.partnerName} is getting emotionally attached. This fling is getting complicated.`,
        `${sr.partnerName} asked "What are we?" — harder to keep this casual.`,
        `${sr.partnerName} wants to meet more often. You're juggling two lives.`,
      ];
      app.toast(
        `⚠️ ${complicatedMsgs[Math.floor(Math.random() * complicatedMsgs.length)]}`,
        "warning",
      );
      this.modStat("happiness", -2);
    }

    // Girlfriend putting pressure
    if (
      sr.type === "girlfriend" &&
      sr.monthsTogether >= 3 &&
      Math.random() < 0.08
    ) {
      const pressureMsgs = [
        `${sr.partnerName} wants to know why she can never meet your friends.`,
        `${sr.partnerName} suspects something. You deflect, but she's not convinced.`,
        `${sr.partnerName} noticed the hidden folder on your phone. Close call.`,
      ];
      app.toast(
        `⚠️ ${pressureMsgs[Math.floor(Math.random() * pressureMsgs.length)]}`,
        "warning",
      );
      this.modStat("happiness", -3);
    }
  });

  // Remove discovered ones
  r.sideRelationships = r.sideRelationships.filter(
    (sr) => !toRemove.includes(sr.id),
  );
  return totalExpenses;
};

/** Discovery event — main partner finds out about the affair */
game._affairDiscovered = function (sr, r) {
  if (r.status === "single") return;
  const mainName = r.partnerName;
  const sideName = sr.partnerName;

  const scenarios = [
    {
      opener: `${mainName} found flirty messages from ${sideName} on your phone.`,
      details: `She read everything. Every exchange, every lie by omission. She sat in silence for a long time before the screaming started.`,
      trustHit: 44,
      loveHit: 38,
      happinessHit: 24,
      divorceChance: 0.32,
    },
    {
      opener: `${mainName}'s friend saw you with ${sideName} at a restaurant.`,
      details: `Screenshots were sent. By the time you got home the locks were changed and your bags were on the doorstep.`,
      trustHit: 50,
      loveHit: 46,
      happinessHit: 30,
      divorceChance: 0.5,
    },
    {
      opener: `${sideName} accidentally called ${mainName} after misdailing.`,
      details: `Twenty seconds of background noise. Enough. ${mainName} is pale when you walk in. She already knows.`,
      trustHit: 62,
      loveHit: 56,
      happinessHit: 36,
      divorceChance: 0.62,
    },
    {
      opener: `${mainName} found hotel receipts in your jacket pocket.`,
      details: `Two rooms billed on the same night. Your name on both. She crumpled the receipts and threw them at you.`,
      trustHit: 46,
      loveHit: 40,
      happinessHit: 26,
      divorceChance: 0.38,
    },
    {
      opener: `${sideName} confronted ${mainName} directly — she's done being hidden.`,
      details: `They had a full conversation. ${mainName} now knows exactly how long this has been going on. She is devastated.`,
      trustHit: 68,
      loveHit: 60,
      happinessHit: 40,
      divorceChance: 0.72,
    },
    {
      opener: `${mainName} checked your location — it didn't match your story.`,
      details: `She drove there. Saw your car. Waited. Watched. Said nothing until you came home, then laid every inconsistency out on the table.`,
      trustHit: 55,
      loveHit: 50,
      happinessHit: 32,
      divorceChance: 0.48,
    },
    {
      opener: `A mutual friend told ${mainName} they'd seen you with someone.`,
      details: `Word travels. She'd heard whispers for weeks and dismissed them. Not anymore. She's shaking with a combination of anger and grief.`,
      trustHit: 40,
      loveHit: 36,
      happinessHit: 22,
      divorceChance: 0.28,
    },
    {
      opener: `${mainName} saw a photo of you and ${sideName} together on social media.`,
      details: `Someone tagged you both without thinking. Notifications lit up. ${mainName} saw it before you could do anything. Her DMs are already full of condolences from people she didn't even know were watching.`,
      trustHit: 58,
      loveHit: 52,
      happinessHit: 34,
      divorceChance: 0.55,
    },
  ];

  const sc = scenarios[Math.floor(Math.random() * scenarios.length)];
  r.trust = Math.max(0, r.trust - sc.trustHit);
  r.love = Math.max(0, r.love - sc.loveHit);
  this.modStat("happiness", -sc.happinessHit);
  this.state.life.chronicStress = Math.min(
    200,
    this.state.life.chronicStress + 25,
  );
  this.state.relationship.fights++;

  FX.screenFlash("loss");
  FX.screenShake("md");

  app.toast(`💔 ${sc.opener}`, "error");
  setTimeout(() => app.toast(`😔 ${sc.details}`, "warning"), 1600);

  const divorces = Math.random() < sc.divorceChance;

  if (divorces) {
    if (r.status === "married") {
      setTimeout(() => {
        app.toast(
          `⚖️ ${mainName} has contacted a lawyer. She's filing for divorce.`,
          "error",
        );
        FX.screenFlash("jail");
        this._processDivorce(true);
        this.renderAll();
      }, 3500);
    } else {
      setTimeout(() => {
        app.toast(
          `${mainName} ended the relationship. She cannot trust you.`,
          "error",
        );
        r.status = "single";
        r.partner = null;
        r.partnerName = "";
        r.love = 0;
        r.trust = 0;
        this.modStat("happiness", -20);
        FX.screenFlash("loss");
        this.renderAll();
      }, 3500);
    }
  } else {
    // Stays but with lingering consequences
    const stayConsequences = [
      `${mainName} is staying — for the kids, she says. But she sleeps in the other room now.`,
      `${mainName} demands couples therapy and full transparency. Every password, every account.`,
      `${mainName} called her mother. Her whole family knows. You're not welcome at gatherings for a long time.`,
      `${mainName} stays, but the warmth in her eyes is gone. She functions. She mothers. She does not forgive.`,
      `${mainName} is humiliated. She tells you if it ever happens again, she won't hesitate. You believe her.`,
    ];
    const conseqIdx = Math.floor(Math.random() * stayConsequences.length);
    setTimeout(() => {
      app.toast(`😶 ${stayConsequences[conseqIdx]}`, "warning");
      if (conseqIdx === 1) {
        // Therapy demanded — costs money
        const therapyCost = 800 + Math.floor(Math.random() * 600);
        this.modCash(-therapyCost);
        app.toast(
          `Couples therapy bills: -$${shortNumber(therapyCost)}`,
          "error",
        );
      }
      this.renderAll();
    }, 3200);
  }

  this.renderAll();
};

/** Jealousy / tension events for known polygamous arrangements */
game._wifeJealousyEvent = function (sr, r) {
  const mainName = r.partnerName;
  const sideName = sr.partnerName;

  const events = [
    {
      msg: `${mainName} demands you spend more time with her and less with ${sideName}. You promise a special evening to smooth things over.`,
      cost: 0,
      loveDrainMain: 4,
      happinessHit: 5,
    },
    {
      msg: `${mainName} refuses to be in the same room as ${sideName}. A family dinner ends in tense silence.`,
      cost: 0,
      loveDrainMain: 6,
      happinessHit: 9,
    },
    {
      msg: `${mainName} demands an expensive gift to feel valued. You comply, quietly. (-$600)`,
      cost: 600,
      loveDrainMain: 0,
      happinessHit: 4,
    },
    {
      msg: `${sideName} wants her own apartment — the shared living arrangement is unbearable. (-$900/mo extra)`,
      cost: 900,
      loveDrainMain: 2,
      happinessHit: 7,
    },
    {
      msg: `Your children ask why they have two mothers at home. You fumble an explanation. Everyone is tense for days.`,
      cost: 0,
      loveDrainMain: 5,
      happinessHit: 11,
    },
    {
      msg: `${mainName} threatens to return to her parents' home unless you set clearer boundaries with ${sideName}.`,
      cost: 0,
      loveDrainMain: 9,
      happinessHit: 14,
    },
    {
      msg: `Word has spread in the neighbourhood about your arrangement. Some people stare, others whisper. Social discomfort follows.`,
      cost: 0,
      loveDrainMain: 1,
      happinessHit: 6,
    },
    {
      msg: `${sideName} is expecting a child. ${mainName} is silent for a long time. Even in a legal arrangement, this hits hard.`,
      cost: 0,
      loveDrainMain: 18,
      happinessHit: 16,
    },
    {
      msg: `${mainName} and ${sideName} argued loudly in the house. You had to mediate. No one won. You all lost something.`,
      cost: 0,
      loveDrainMain: 7,
      happinessHit: 10,
    },
    {
      msg: `${sideName} complains you spend more time with ${mainName}. Both feel neglected. The household is a powder keg.`,
      cost: 0,
      loveDrainMain: 4,
      happinessHit: 8,
    },
    {
      msg: `${mainName} discovers ${sideName} gave you a gift she couldn't afford — and feels inadequate. Quiet crying behind closed doors.`,
      cost: 0,
      loveDrainMain: 5,
      happinessHit: 7,
    },
    {
      msg: `You forgot ${mainName}'s birthday while focused on ${sideName}. The hurt is real and immediate. -$400 damage control.`,
      cost: 400,
      loveDrainMain: 12,
      happinessHit: 12,
    },
  ];

  // Suppress pregnancy event to ~8% chance
  const filtered = events.filter(
    (e) => !e.msg.includes("expecting") || Math.random() < 0.08,
  );
  const evt = filtered[Math.floor(Math.random() * filtered.length)];

  if (evt.cost > 0) this.modCash(-evt.cost);
  r.love = Math.max(0, r.love - evt.loveDrainMain);
  this.modStat("happiness", -evt.happinessHit);
  this.state.life.chronicStress = Math.min(
    200,
    this.state.life.chronicStress + 4,
  );

  app.toast(`⚠️ ${evt.msg}`, "warning");

  // Critical threshold  — first wife may demand divorce
  if (r.love < 18 && r.status === "married" && Math.random() < 0.18) {
    setTimeout(() => {
      app.toast(
        `${mainName} has reached her limit. She wants you to choose — or she leaves.`,
        "error",
      );
      FX.screenShake("lg");
      FX.screenFlash("loss");
    }, 2000);
  }

  this.renderAll();
};

game.processRelationshipMonthly = function () {
  const r = this.state.relationship;
  if (r.status === "single") {
    r.childExpenses = 0;
    let childCosts = 0;
    r.children.forEach((c) => {
      c.ageMonths++;
      const ageYrs = c.ageMonths / 12;
      childCosts +=
        ageYrs >= 18
          ? CONFIG.CHILD_MONTHLY_COST * 0.3
          : ageYrs >= 13
            ? CONFIG.CHILD_MONTHLY_COST * 1.5
            : CONFIG.CHILD_MONTHLY_COST;
    });
    r.childExpenses = childCosts;
    return childCosts;
  }
  const p = CONFIG.PARTNERS.find((x) => x.id === r.partner);
  r.monthsTogether++;
  let expenses = 0;
  if (r.status === "married" && p) {
    this.modCash(p.income / 12);
  }
  if (p && r.status === "married") {
    expenses += (p.income / 12) * p.spendRate * (0.8 + Math.random() * 0.4);
  }
  const happyFactor = this.state.stats.happiness / 100;
  r.love += (happyFactor - 0.4) * 3 + (Math.random() - 0.5) * 4;
  r.trust += (Math.random() - 0.3) * 2;
  r.love = Math.max(0, Math.min(100, r.love));
  r.trust = Math.max(0, Math.min(100, r.trust));
  if (Math.random() < 0.06) {
    r.fights++;
    r.love -= 5 + Math.random() * 10;
    r.trust -= 3;
    this.modStat("happiness", -6);
    app.toast(`Had an argument with ${r.partnerName}.`, "warning");
  }
  if (Math.random() < 0.04 && r.love > 50) {
    r.love = Math.min(100, r.love + 8);
    r.trust = Math.min(100, r.trust + 5);
    this.modStat("happiness", 5);
    app.toast(`Great evening with ${r.partnerName}! \u{2764}\u{FE0F}`, "info");
  }
  if (r.love < 15 && r.status === "dating" && Math.random() < 0.2) {
    app.toast(`${r.partnerName} broke up with you.`, "error");
    r.status = "single";
    r.partner = null;
    r.partnerName = "";
    this.modStat("happiness", -15);
    FX.screenFlash("loss");
  }
  if (r.love < 10 && r.status === "married" && Math.random() < 0.08) {
    app.toast(`${r.partnerName} wants a divorce.`, "error");
    this._processDivorce(true);
  }
  let childCosts = 0;
  r.children.forEach((c) => {
    c.ageMonths++;
    const ageYrs = c.ageMonths / 12;
    let cost = CONFIG.CHILD_MONTHLY_COST;
    if (ageYrs >= 13) cost *= 1.5;
    if (ageYrs >= 18) cost *= 0.3;
    childCosts += cost;
  });
  r.childExpenses = childCosts;
  expenses += childCosts;
  return expenses;
};

/* ── PET SYSTEM ── */
game.adoptPet = function (petTypeId) {
  if (!this.canAct()) return;
  const petConfig = CONFIG.PETS.find((p) => p.id === petTypeId);
  if (!petConfig) return;
  if (this.state.cash < petConfig.cost)
    return app.toast(`Need $${shortNumber(petConfig.cost)} to adopt.`, "error");
  if (this.state.pets.length >= 4)
    return app.toast("Too many pets! Max 4.", "warning");
  this.modCash(-petConfig.cost);
  const maxAge =
    (petConfig.lifespan[0] +
      Math.random() * (petConfig.lifespan[1] - petConfig.lifespan[0])) *
    12;
  this.state.pets.push({
    id: petConfig.id + "_" + Date.now(),
    type: petConfig.id,
    name: petConfig.name,
    emoji: petConfig.emoji,
    ageMonths: 0,
    maxAge: Math.floor(maxAge),
    happiness: 80,
  });
  this.modStat("happiness", 10);
  app.toast(`Adopted a ${petConfig.name}! ${petConfig.emoji}`, "success");
  FX.screenFlash("gain");
  if (this.state.pets.length === 1) {
    FX.confetti();
    FX.milestoneOverlay("🐾 First Pet!", "A loyal companion joins you");
  }
  this.registerAction(1);
  this.renderAll();
};

game.processPetsMonthly = function () {
  let expenses = 0;
  const toRemove = [];
  this.state.pets.forEach((pet, idx) => {
    const config = CONFIG.PETS.find((p) => p.id === pet.type);
    if (!config) return;
    pet.ageMonths++;
    expenses += config.monthlyCost;
    this.modStat("happiness", config.happinessBonus * 0.3);
    this.modStat("health", config.healthBonus * 0.2);
    this.state.life.chronicStress = Math.max(
      0,
      this.state.life.chronicStress - config.stressReduction * 0.2,
    );
    if (Math.random() < config.vetRiskPct) {
      const vetCost =
        config.vetCost[0] +
        Math.random() * (config.vetCost[1] - config.vetCost[0]);
      expenses += vetCost;
      this.modStat("happiness", -5);
      app.toast(
        `${pet.emoji} ${pet.name} needed a vet visit! -$${shortNumber(Math.floor(vetCost))}`,
        "warning",
      );
    }
    if (pet.ageMonths >= pet.maxAge) {
      toRemove.push(idx);
      this.modStat("happiness", -20);
      app.toast(
        `${pet.emoji} ${pet.name} passed away. Rest in peace. \u{1F308}`,
        "error",
      );
      FX.screenFlash("loss");
    }
    pet.happiness = Math.max(
      20,
      Math.min(100, pet.happiness + (Math.random() - 0.3) * 5),
    );
  });
  toRemove.reverse().forEach((i) => this.state.pets.splice(i, 1));
  return expenses;
};

/* ── PRISON ACTIONS ── */
game.selectPrisonJob = function (jobId) {
  if (this.state.jail <= 0) return;
  this.state.prison.prisonJob = jobId;
  const job = CONFIG.PRISON_JOBS.find((j) => j.id === jobId);
  app.toast(`Assigned to ${job.name}.`, "info");
  this.renderAll();
};

game.attemptEscape = function () {
  if (this.state.jail <= 0) return;
  if (this.state.stats.energy < 40)
    return app.toast("Too weak to attempt escape.", "error");
  this.modStat("energy", -40);
  this.state.prison.escapeAttempts++;
  let chance = CONFIG.PRISON_ESCAPE_BASE_CHANCE;
  chance -= this.state.prison.escapeAttempts * 0.015;
  chance += this.state.stats.smarts * 0.001;
  chance -= this.state.prison.infractions * 0.01;
  chance = Math.max(0.02, Math.min(0.15, chance));
  if (Math.random() < chance) {
    this.state.jail = 0;
    this.state.crime.heat += 40;
    this.state.prison.prisonJob = null;
    this.state.prison.gangProtection = false;
    this.modStat("happiness", 20);
    app.toast("\u{1F3C3} ESCAPED! You're on the run!", "epic");
    FX.confetti();
    FX.screenShake("lg");
    FX.screenFlash("epic");
    app.setView("career");
  } else {
    this.state.jail += CONFIG.PRISON_ESCAPE_FAIL_PENALTY;
    this.state.prison.totalSentence += CONFIG.PRISON_ESCAPE_FAIL_PENALTY;
    this.state.prison.infractions += 3;
    this.state.prison.solitary += 3;
    this.modStat("happiness", -15);
    this.modStat("health", -8);
    app.toast(
      `Escape failed! +${CONFIG.PRISON_ESCAPE_FAIL_PENALTY} months added. Solitary.`,
      "error",
    );
    FX.screenFlash("jail");
    FX.screenShake("lg");
    if (
      this.checkSuddenDeath(
        "Escape Attempt",
        0.08,
        "Shot by guards during escape attempt",
      )
    )
      return;
  }
  this.renderAll();
};

game.buyGangProtection = function () {
  if (this.state.jail <= 0) return;
  if (this.state.prison.gangProtection)
    return app.toast("Already have protection.", "info");
  if (this.state.cash < CONFIG.PRISON_GANG_PROTECTION_COST)
    return app.toast("Can't afford protection.", "error");
  this.modCash(-CONFIG.PRISON_GANG_PROTECTION_COST);
  this.state.prison.gangProtection = true;
  this.state.prison.reputation += 5;
  app.toast("Bought gang protection. Safer now.", "success");
  this.renderAll();
};

/* ─────────────────────────────────────────────
   PRISON: NEW FUNCTIONS
   ───────────────────────────────────────────── */

game.joinPrisonGang = function (gangId) {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  const gang = CONFIG.PRISON_GANGS.find((g) => g.id === gangId);
  if (!gang) return;
  if (p.gangId === gangId)
    return app.toast(`Already a member of ${gang.name}.`, "info");
  if (p.gangId) return app.toast("Leave your current gang first.", "warning");
  if (this.state.cash < gang.fee)
    return app.toast(`Need $${gang.fee} for initiation.`, "error");
  this.modCash(-gang.fee);
  p.gangId = gangId;
  p.gangProtection = true;
  p.reputation = Math.min(100, p.reputation + 10);
  app.toast(
    `✅ Jumped in to ${gang.emoji} ${gang.name}. You're protected now.`,
    "success",
  );
  FX.screenFlash("gain");
  this.renderPrison();
};

game.leavePrisonGang = function () {
  const p = this.state.prison;
  if (!p.gangId) return;
  const gang = CONFIG.PRISON_GANGS.find((g) => g.id === p.gangId);
  p.gangId = null;
  p.gangProtection = false;
  p.reputation = Math.max(0, p.reputation - 10);
  app.toast(
    `Left ${gang ? gang.name : "the gang"}. You're unprotected now.`,
    "warning",
  );
  this.renderPrison();
};

game.buyContraband = function (itemId) {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  const item = CONFIG.PRISON_CONTRABAND.find((c) => c.id === itemId);
  if (!item) return;
  const owned = p.contraband
    ? p.contraband.filter((id) => id === itemId).length
    : 0;
  if (owned >= item.maxStack)
    return app.toast(`Already holding max ${item.name}.`, "warning");
  if (this.state.cash < item.cost)
    return app.toast(`Need $${item.cost} to buy ${item.name}.`, "error");
  this.modCash(-item.cost);
  if (!p.contraband) p.contraband = [];
  p.contraband.push(itemId);
  app.toast(`${item.emoji} Acquired: ${item.name}. Keep it hidden.`, "success");
  this.renderPrison();
};

game.useContraband = function (itemId) {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  const item = CONFIG.PRISON_CONTRABAND.find((c) => c.id === itemId);
  if (!item) return;
  if (!p.contraband || !p.contraband.includes(itemId))
    return app.toast("You don't have that.", "error");

  switch (item.useEffect) {
    case "barter":
      p.reputation = Math.min(100, p.reputation + 8);
      this.modStat("happiness", 5);
      app.toast(
        "🚬 Traded cigarettes around the block. +8 Reputation.",
        "success",
      );
      break;
    case "income":
      app.toast(
        "📱 Burner phone is active — earning $200/mo passively.",
        "info",
      );
      return; // Don't consume
    case "fight":
      app.toast("🗡️ Shiv is held — passive +35% fight win chance.", "info");
      return; // Don't consume
    case "escape":
      app.toast(
        "🗝️ Lockpick kit held — will boost Tunnel Escape chance.",
        "info",
      );
      return; // Don't consume
    case "escape_big":
      app.toast("🪖 Guard's uniform held — ready for Walk-Out Escape.", "info");
      return; // Don't consume
    case "happiness":
      this.modStat("happiness", 20);
      if (Math.random() < 0.12) {
        p.infractions++;
        app.toast("🍶 Drank the hooch. Guard saw you. Infraction!", "warning");
      } else
        app.toast(
          "🍶 Drank the hooch. +20 happiness. Don't get caught.",
          "success",
        );
      break;
    case "legal":
      if (Math.random() < 0.2) {
        this.state.jail = Math.max(0, this.state.jail - 2);
        app.toast("⚖️ Found a legal angle! Sentence cut by 2 months.", "epic");
        FX.screenFlash("gain");
      } else {
        app.toast("📚 Studied the law books. No luck this time.", "info");
      }
      break;
    case "workout":
      p.workoutBoosted = true;
      app.toast(
        "🥤 Protein power activated! +50% health from yard training this month.",
        "success",
      );
      return; // Don't consume on use (consumed on yard activity)
  }
  // Consume item
  const idx = p.contraband.indexOf(itemId);
  if (idx > -1) p.contraband.splice(idx, 1);
  this.renderPrison();
};

game.doYardActivity = function (activityId) {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  if (p.yardDoneThisMonth)
    return app.toast(
      "Already used your yard time this month. Advance to next month.",
      "warning",
    );

  const act = CONFIG.PRISON_YARD.find((a) => a.id === activityId);
  if (!act) return;
  if (this.state.stats.energy < act.energy)
    return app.toast(`Need ${act.energy} energy for this activity.`, "error");

  this.modStat("energy", -act.energy);
  p.yardDoneThisMonth = true;

  // Apply effects
  if (act.health) {
    const mult = p.workoutBoosted ? 1.5 : 1;
    this.modStat("health", Math.round(act.health * mult));
    if (p.workoutBoosted) {
      const protIdx = p.contraband.indexOf("protein_powder");
      if (protIdx > -1) p.contraband.splice(protIdx, 1);
      p.workoutBoosted = false;
    }
  }
  if (act.rep) p.reputation = Math.min(100, p.reputation + act.rep);
  if (act.happiness) this.modStat("happiness", act.happiness);

  if (act.crimeRep) {
    p.crimeRepBonus = (p.crimeRepBonus || 0) + act.crimeRep;
    app.toast(
      `🤝 Networked with veterans. +${act.crimeRep} crime rep saved for release!`,
      "success",
    );
  }

  if (act.fightBonus) {
    p.fightTrainBonus = true;
    app.toast(
      "🥊 Fight training done. You're sharper — less damage from brawls.",
      "success",
    );
  }

  if (act.gamble) {
    // Redirect to poker game
    const bet = 50;
    if (this.state.cash < bet)
      return app.toast("Need at least $50 for poker.", "error");
    const roll = Math.random();
    const hasShiv = p.contraband && p.contraband.includes("shiv") ? 0.05 : 0; // slightly better with street cred
    if (roll < 0.38 + hasShiv) {
      const win = bet * (Math.random() < 0.15 ? 3 : 2);
      this.modCash(win);
      p.earnings += win;
      p.reputation = Math.min(100, p.reputation + 2);
      app.toast(`🃏 Won the yard poker game! +$${win}`, "success");
      FX.screenFlash("gain");
    } else {
      this.modCash(-bet);
      app.toast(`🃏 Lost $${bet} at the poker table. Tough luck.`, "error");
    }
    p.yardDoneThisMonth = true;
    this.renderPrison();
    return;
  }

  if (act.appealChance) {
    if (Math.random() < act.appealChance) {
      this.state.jail = Math.max(0, this.state.jail - 2);
      app.toast("📝 Appeal successful! Sentence reduced by 2 months.", "epic");
      FX.screenFlash("gain");
    } else {
      app.toast("📝 Filed an appeal. Court denied it. Keep trying.", "info");
    }
  }

  app.toast(`${act.emoji} ${act.name} done.`, "success");
  this.renderPrison();
};

game.prisonPokerBet = function (betAmount) {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  const bet = parseInt(betAmount) || 50;
  if (bet < 10) return app.toast("Minimum bet is $10.", "warning");
  if (this.state.cash < bet)
    return app.toast(
      `Not enough cash. You have $${Math.round(this.state.cash)}.`,
      "error",
    );
  const roll = Math.random();
  const smarts = this.state.stats.smarts || 50;
  const winChance = 0.35 + (smarts - 50) * 0.001;
  if (roll < winChance) {
    const mult = roll < 0.05 ? 4 : roll < 0.2 ? 2.5 : 2;
    const win = Math.round(bet * mult);
    this.modCash(win);
    p.earnings += win;
    p.reputation = Math.min(100, p.reputation + 3);
    app.toast(`🃏 POKER WIN! +$${win} (${mult}x)`, "success");
    FX.screenFlash("gain");
  } else {
    this.modCash(-bet);
    app.toast(`🃏 Lost $${bet} at poker. The house always wins.`, "error");
  }
  this.renderPrison();
};

game.bribeGuard = function (tierId) {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  const tier = CONFIG.PRISON_BRIBE_TIERS.find((t) => t.id === tierId);
  if (!tier) return;
  if (this.state.cash < tier.cost)
    return app.toast(
      `Need $${tier.cost.toLocaleString()} for this bribe.`,
      "error",
    );
  this.modCash(-tier.cost);
  app.toast(
    `${tier.emoji} Slipped the guard $${tier.cost.toLocaleString()}.`,
    "info",
  );

  if (tier.id === "small") {
    if (Math.random() < tier.chance) {
      this.state.jail = Math.max(0, this.state.jail - tier.reduction);
      app.toast("✅ Guard came through — sentence cut by 1 month.", "success");
    } else {
      app.toast(
        "❌ Guard pocketed the cash... and did nothing. Classic.",
        "warning",
      );
    }
  } else if (tier.id === "medium") {
    p.bribeIncomeMonthsLeft = tier.incomeMonths;
    app.toast(
      `📱 Guard activates phone privileges for ${tier.incomeMonths} months. +$200/mo.`,
      "success",
    );
  } else if (tier.id === "big") {
    if (Math.random() < tier.chance) {
      this.state.jail = Math.max(0, this.state.jail - tier.reduction);
      app.toast(
        `🤑 Guard arranged early release papers. Sentence cut by ${tier.reduction} months!`,
        "epic",
      );
      FX.screenFlash("gain");
    } else {
      app.toast(
        "💸 That guard took your $3K and transferred blocks. Nothing happened.",
        "error",
      );
    }
  }
  this.renderPrison();
};

game.tunnelEscape = function () {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  if (this.state.stats.energy < 50)
    return app.toast("Too exhausted to dig. Need 50 energy.", "error");
  const hasLockpick = p.contraband && p.contraband.includes("lockpick");
  if (!hasLockpick)
    return app.toast(
      "🗝️ Need a Lockpick Kit for a tunnel escape. Buy it from contraband.",
      "error",
    );

  this.modStat("energy", -50);
  p.escapeAttempts++;

  let chance = 0.25 + 0.1; // lockpick bonus
  chance -= p.escapeAttempts * 0.04;
  chance += (this.state.stats.smarts - 50) * 0.001;
  chance = Math.max(0.08, Math.min(0.45, chance));

  if (Math.random() < chance) {
    this.state.jail = 0;
    this.state.crime.heat += 60;
    p.prisonJob = null;
    p.gangProtection = false;
    p.gangId = null;
    p.contraband = [];
    this.modStat("happiness", 30);
    const idx = p.contraband ? p.contraband.indexOf("lockpick") : -1;
    if (idx > -1) p.contraband.splice(idx, 1);
    app.toast(
      "🏃 TUNNEL ESCAPE SUCCESS! You dug out under the fence. Go!",
      "epic",
    );
    FX.confetti();
    FX.screenFlash("epic");
    FX.screenShake("lg");
    app.setView("career");
  } else {
    // Remove lockpick
    const idx = p.contraband.indexOf("lockpick");
    if (idx > -1) p.contraband.splice(idx, 1);
    this.state.jail += 20;
    p.totalSentence += 20;
    p.infractions += 2;
    p.solitary += 4;
    this.modStat("happiness", -20);
    this.modStat("health", -10);
    app.toast(
      "🚨 Tunnel discovered! +20 months. 4 months solitary. Lockpick confiscated.",
      "error",
    );
    FX.screenFlash("jail");
    FX.screenShake("lg");
    if (
      this.checkSuddenDeath(
        "Escape Attempt",
        0.06,
        "Shot while escaping through a tunnel",
      )
    )
      return;
  }
  this.renderAll();
};

game.walkOutEscape = function () {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  const hasUniform = p.contraband && p.contraband.includes("guard_uniform");
  if (!hasUniform)
    return app.toast("🪖 Need a Guard's Uniform for walk-out escape.", "error");
  if (this.state.stats.energy < 40)
    return app.toast("Need 40 energy for this.", "error");

  this.modStat("energy", -40);
  p.escapeAttempts++;
  // Remove uniform (one-time use)
  const idx = p.contraband.indexOf("guard_uniform");
  if (idx > -1) p.contraband.splice(idx, 1);

  const chance = 0.55 - p.escapeAttempts * 0.05;
  if (Math.random() < Math.max(0.2, chance)) {
    this.state.jail = 0;
    this.state.crime.heat += 80;
    p.prisonJob = null;
    p.gangProtection = false;
    p.gangId = null;
    this.modStat("happiness", 40);
    app.toast(
      "🪖 WALKED STRAIGHT OUT. Guards thought you were one of them. LEGENDARY.",
      "epic",
    );
    FX.confetti();
    FX.screenFlash("epic");
    FX.screenShake("lg");
    app.setView("career");
  } else {
    this.state.jail += 24;
    p.totalSentence += 24;
    p.infractions += 3;
    p.solitary += 6;
    this.modStat("happiness", -25);
    this.modStat("health", -15);
    app.toast(
      "🚨 Uniform didn't fool anyone. +24 months, 6 months solitary.",
      "error",
    );
    FX.screenFlash("jail");
    FX.screenShake("lg");
    if (
      this.checkSuddenDeath(
        "Escape Attempt",
        0.1,
        "Tackled by guards during walk-out escape attempt",
      )
    )
      return;
  }
  this.renderAll();
};

game.prisonSnitch = function () {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  if (Math.random() < 0.6) {
    this.state.jail = Math.max(0, this.state.jail - 2);
    this.modStat("happiness", 5);
    p.reputation = Math.max(0, p.reputation - 15);
    app.toast(
      "🤫 Snitched on a cellmate. Sentence cut by 2 months. Rep tanked.",
      "warning",
    );
  } else {
    app.toast(
      "🤫 Snitched but guard didn't care. Nothing happened, but word is spreading...",
      "warning",
    );
    p.reputation = Math.max(0, p.reputation - 8);
  }
  // Risk of getting attacked next month
  if (Math.random() < 0.4) {
    this.modStat("health", -20);
    p.infractions++;
    app.toast(
      "🩸 Inmates found out you snitched. Beaten in the bathroom.",
      "error",
    );
    FX.screenShake("sm");
  }
  this.renderPrison();
};
game.renderRelationships = function () {
  const r = this.state.relationship;
  const statusCard = document.getElementById("relationship-status-card");
  if (statusCard) {
    const p = CONFIG.PARTNERS.find((x) => x.id === r.partner);
    if (r.status === "single") {
      statusCard.innerHTML = `<div class="card-header"><h3>\u{1F494} Single</h3><span class="tag">${r.divorces > 0 ? "Divorced \u00D7" + r.divorces : "Looking for love"}</span></div><p style="opacity:0.7;margin-top:8px">Meet someone from the dating pool below. Dates cost $150 and energy.</p>`;
    } else {
      const statusEmoji = {
        dating: "\u{1F495}",
        engaged: "\u{1F48D}",
        married: "\u{1F492}",
      };
      const loveColor =
        r.love >= 70
          ? "var(--green)"
          : r.love >= 40
            ? "var(--amber)"
            : "var(--red)";
      const trustColor =
        r.trust >= 70
          ? "var(--green)"
          : r.trust >= 40
            ? "var(--amber)"
            : "var(--red)";
      let actions = "";
      if (r.status === "dating")
        actions = `<button class="btn btn-primary" onclick="game.proposeMarriage()"><i class="fa-solid fa-ring"></i> Propose</button>`;
      if (r.status === "married")
        actions = `<button class="btn btn-primary" onclick="game.tryForBaby()"><i class="fa-solid fa-baby"></i> Try for Baby</button> <button class="btn btn-outline" onclick="game.adoptChild()"><i class="fa-solid fa-hand-holding-heart"></i> Adopt ($${shortNumber(CONFIG.ADOPTION_COST)})</button>`;
      statusCard.innerHTML = `<div class="card-header"><h3>${statusEmoji[r.status] || ""} ${r.partnerName}</h3><span class="tag ${r.status === "married" ? "safe" : ""}">${r.status.charAt(0).toUpperCase() + r.status.slice(1)}</span></div>
        <p style="opacity:0.7">${p ? p.trait : ""} \u2022 Together ${Math.floor(r.monthsTogether / 12)}yr ${r.monthsTogether % 12}mo${r.prenup !== "none" && r.status === "married" ? " \u2022 Prenup: " + r.prenup : ""}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0">
          <div><span style="font-size:0.75rem;opacity:0.6">LOVE</span><div class="progress-bg" style="margin-top:4px"><div class="progress-fill" style="width:${r.love}%;background:${loveColor}"></div></div><span style="font-size:0.75rem">${Math.round(r.love)}%</span></div>
          <div><span style="font-size:0.75rem;opacity:0.6">TRUST</span><div class="progress-bg" style="margin-top:4px"><div class="progress-fill" style="width:${r.trust}%;background:${trustColor}"></div></div><span style="font-size:0.75rem">${Math.round(r.trust)}%</span></div>
        </div>
        <div class="relationship-actions">
          <div class="rel-actions-row">${actions}
            <button class="btn btn-outline" onclick="game.dateNight()"><i class="fa-solid fa-wine-glass"></i> Date Night</button>
            <button class="btn btn-outline" onclick="game.giveGift()"><i class="fa-solid fa-gift"></i> Give Gift</button>
            <button class="btn btn-outline" onclick="game.qualityTime()"><i class="fa-solid fa-couch"></i> Quality Time</button>
            <button class="btn btn-outline" onclick="game.couplesTherapy()"><i class="fa-solid fa-brain"></i> Therapy ($300)</button>
          </div>
          <div class="rel-actions-row">
            <button class="btn btn-danger" onclick="game.breakup()"><i class="fa-solid fa-heart-crack"></i> ${r.status === "married" ? "Divorce" : "Break Up"}</button>
          </div>
        </div>`;
    }
  }
  const datingPool = document.getElementById("dating-pool");
  if (datingPool) {
    if (r.status === "single") {
      const available = this.getAvailablePartners();
      datingPool.innerHTML = available
        .map(
          (p) => `<div class="card">
          <div class="card-header"><h3>${p.name}</h3><span class="tag">${p.trait}</span></div>
          <p style="opacity:0.7;font-size:0.8rem">Income: $${shortNumber(p.income)}/mo \u2022 Loyalty: ${Math.round(p.loyalty * 100)}%</p>
          <div style="display:flex;gap:6px;margin-top:4px"><span style="font-size:0.75rem">Looks: ${"\u2B50".repeat(Math.round(p.looks / 2))}</span><span style="font-size:0.75rem">Humor: ${"\u{1F604}".repeat(Math.round(p.humor / 2))}</span></div>
          <button class="btn btn-primary" style="margin-top:10px" onclick="game.startDating('${p.id}')"><i class="fa-solid fa-heart"></i> Ask Out ($150)</button></div>`,
        )
        .join("");
    } else {
      datingPool.innerHTML = "";
    }
  }
  const childList = document.getElementById("children-list");
  if (childList) {
    if (r.children.length === 0) {
      childList.innerHTML =
        '<div class="card"><p style="opacity:0.5;text-align:center">No children yet.</p></div>';
    } else {
      childList.innerHTML = r.children
        .map((c) => {
          const ageYrs = Math.floor(c.ageMonths / 12);
          const ageMo = c.ageMonths % 12;
          const stage =
            ageYrs < 1
              ? "\u{1F476} Baby"
              : ageYrs < 5
                ? "\u{1F9D2} Toddler"
                : ageYrs < 13
                  ? "\u{1F466} Child"
                  : ageYrs < 18
                    ? "\u{1F9D1} Teen"
                    : "\u{1F9D1}\u200D\u{1F393} Adult";
          const cost =
            ageYrs >= 18
              ? CONFIG.CHILD_MONTHLY_COST * 0.3
              : ageYrs >= 13
                ? CONFIG.CHILD_MONTHLY_COST * 1.5
                : CONFIG.CHILD_MONTHLY_COST;
          return `<div class="card"><div class="card-header"><h3>${c.name}</h3><span class="tag">${stage}</span></div>
          <p style="opacity:0.7;font-size:0.8rem">${c.adopted ? "Adopted \u2022 " : ""}Age ${ageYrs}yr${ageMo > 0 ? " " + ageMo + "mo" : ""} \u2022 Cost: $${shortNumber(Math.floor(cost))}/mo</p></div>`;
        })
        .join("");
    }
  }
  const marriagePanel = document.getElementById("marriage-panel");
  if (marriagePanel) {
    marriagePanel.style.display = r.status === "engaged" ? "" : "none";
    if (r.status === "engaged") {
      marriagePanel.innerHTML = `<div class="card-header"><h3>\u{1F48D} Engaged to ${r.partnerName}</h3></div><p>Pick a date and plan the wedding!</p>
        <button class="btn btn-primary" onclick="game._showWeddingOptions()" style="margin-top:10px"><i class="fa-solid fa-church"></i> Plan Wedding</button>`;
    }
  }
  this.renderPets();

  /* ── Side Relationships ── */
  const sideHeader = document.getElementById("side-rel-header-card");
  const sideList = document.getElementById("side-relationships-list");

  if (sideHeader && sideList) {
    const poly = this.isPolygamyAllowed();
    const countryName = this.state.country || "your current country";

    if (r.status === "single") {
      sideHeader.style.display = "none";
      sideList.innerHTML =
        '<div class="card"><p style="opacity:0.5;text-align:center">Enter a relationship first to unlock this section.</p></div>';
    } else {
      sideHeader.style.display = "";
      const polyBadge = poly
        ? `<span class="tag safe" style="font-size:0.7rem">⚖️ Polygamy Legal</span>`
        : `<span class="tag" style="font-size:0.7rem;background:var(--amber);color:#000">⚠️ Secret — High Risk</span>`;

      const warnText = poly
        ? `In ${countryName}, taking additional partners is permitted by law. Your main partner will know and <em>may react with jealousy</em>. Financial and emotional costs apply.`
        : `Affairs are illegal or socially devastating in ${countryName}. Discovery risk grows every month. If found out, your relationship may never recover.`;

      sideHeader.innerHTML = `
        <div class="card-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
          <h3 style="margin:0">💔 Side Relationships</h3>
          ${polyBadge}
        </div>
        <p style="opacity:0.75;font-size:0.82rem;margin:8px 0">${warnText}</p>
        <button class="btn btn-primary" onclick="game.openSideRelationshipMenu()" style="margin-top:6px">
          <i class="fa-solid fa-plus"></i> Start a Side Affair
        </button>`;

      if (!r.sideRelationships || r.sideRelationships.length === 0) {
        sideList.innerHTML =
          '<div class="card"><p style="opacity:0.45;text-align:center;font-size:0.85rem">No active side relationships.</p></div>';
      } else {
        sideList.innerHTML = r.sideRelationships
          .map((sr) => {
            const sp =
              CONFIG.SIDE_PARTNERS.find((x) => x.id === sr.partnerId) || {};
            const loveColor =
              sr.love >= 60
                ? "var(--green)"
                : sr.love >= 35
                  ? "var(--amber)"
                  : "var(--red)";
            const typeLabel =
              sr.type === "fling"
                ? "💋 Fling"
                : sr.type === "girlfriend"
                  ? "❤️ Girlfriend"
                  : "💍 2nd Wife";
            const typeClass = sr.type === "second_wife" ? "safe" : "";

            let discInfo = "";
            if (sr.type !== "second_wife" || !poly) {
              const base =
                sr.type === "fling"
                  ? 0.014
                  : sr.type === "girlfriend"
                    ? 0.024
                    : 0.034;
              const growth = sr.type === "fling" ? 0.0008 : 0.0015;
              const risk = Math.min(
                28,
                Math.round((base + sr.monthsTogether * growth) * 100),
              );
              const riskColor =
                risk < 8
                  ? "var(--green)"
                  : risk < 18
                    ? "var(--amber)"
                    : "var(--red)";
              discInfo = `<p style="font-size:0.75rem;margin:4px 0">
              <span style="opacity:0.6">DISCOVERY RISK / MO</span>
              <span style="color:${riskColor};font-weight:700;margin-left:6px">${risk}%</span>
            </p>`;
            } else {
              discInfo = `<p style="font-size:0.75rem;margin:4px 0;opacity:0.6">Known arrangement — jealousy events possible</p>`;
            }

            return `<div class="card">
            <div class="card-header">
              <h3>${sr.partnerName}</h3>
              <span class="tag ${typeClass}">${typeLabel}</span>
            </div>
            <p style="opacity:0.65;font-size:0.78rem">${sp.trait || ""} • Together ${Math.floor(sr.monthsTogether / 12)}yr ${sr.monthsTogether % 12}mo</p>
            <div style="margin:8px 0">
              <span style="font-size:0.72rem;opacity:0.6">LOVE</span>
              <div class="progress-bg" style="margin-top:3px">
                <div class="progress-fill" style="width:${sr.love}%;background:${loveColor}"></div>
              </div>
              <span style="font-size:0.72rem">${Math.round(sr.love)}%</span>
            </div>
            ${discInfo}
            <p style="font-size:0.75rem;margin:4px 0;opacity:0.7">Cost: <b>$${shortNumber(sr.monthlyExpense)}/mo</b></p>
            <button class="btn btn-danger" style="margin-top:8px;font-size:0.8rem" onclick="game.endSideRelationship('${sr.id}')">
              <i class="fa-solid fa-heart-crack"></i> End It
            </button>
          </div>`;
          })
          .join("");
      }
    }
  }
};

game.renderPets = function () {
  const PET_IMGS = {
    dog: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&h=240&fit=crop&auto=format",
    cat: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=700&h=240&fit=crop&auto=format",
    fish: "fishtank.png",
    bird: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=700&h=240&fit=crop&auto=format",
    reptile: "reptile.png",
  };
  const petShop = document.getElementById("pet-shop");
  if (petShop) {
    petShop.innerHTML =
      '<h4 style="grid-column:1/-1;opacity:0.6;font-size:0.8rem;margin:0">ADOPT A PET</h4>' +
      CONFIG.PETS.map(
        (p) => `<div class="card">
          <img class="card-img" src="${PET_IMGS[p.id] || PET_IMGS.dog}" alt="${p.name}" loading="lazy">
          <div class="card-header"><h3>${p.emoji} ${p.name}</h3><span class="tag">$${shortNumber(p.cost)}</span></div>
          <p style="opacity:0.7;font-size:0.8rem">Monthly: $${p.monthlyCost}/mo \u2022 Happiness +${p.happinessBonus} \u2022 Lifespan ${p.lifespan[0]}-${p.lifespan[1]}yr</p>
          <button class="btn btn-primary" style="margin-top:8px" onclick="game.adoptPet('${p.id}')"><i class="fa-solid fa-paw"></i> Adopt</button></div>`,
      ).join("");
  }
  const petList = document.getElementById("pet-list");
  if (petList) {
    if (this.state.pets.length === 0) {
      petList.innerHTML =
        '<div class="card"><p style="opacity:0.5;text-align:center">No pets yet. Adopt one below!</p></div>';
    } else {
      petList.innerHTML = this.state.pets
        .map((pet) => {
          const config = CONFIG.PETS.find((p) => p.id === pet.type);
          const ageYrs = Math.floor(pet.ageMonths / 12);
          const ageMo = pet.ageMonths % 12;
          const moodEmoji =
            pet.happiness >= 70
              ? "\u{1F60A}"
              : pet.happiness >= 40
                ? "\u{1F610}"
                : "\u{1F622}";
          return `<div class="card"><img class="card-img" src="${PET_IMGS[pet.type] || PET_IMGS.dog}" alt="${pet.name}" loading="lazy"><div class="card-header"><h3>${pet.emoji} ${pet.name}</h3><span class="tag">${moodEmoji} ${Math.round(pet.happiness)}%</span></div>
          <p style="opacity:0.7;font-size:0.8rem">Age: ${ageYrs}yr ${ageMo}mo \u2022 Cost: $${config ? config.monthlyCost : 0}/mo</p></img>`;
        })
        .join("");
    }
  }
};

/* ── RENDERING: Prison ── */
game.renderPrison = function () {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  const jailMonths = this.state.jail;
  const timeServed = p.monthsServed;
  const totalTime = jailMonths + timeServed;
  const pct = totalTime > 0 ? Math.round((timeServed / totalTime) * 100) : 0;
  const currentGang = p.gangId
    ? CONFIG.PRISON_GANGS.find((g) => g.id === p.gangId)
    : null;

  // ── Hero ──
  const heroEl = document.getElementById("prison-hero");
  if (heroEl) {
    heroEl.innerHTML = `
      <img class="view-hero-img" src="https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=1400&h=560&fit=crop&auto=format" alt="" loading="lazy"/>
      <div class="view-hero-overlay" style="background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(4,4,14,0.92) 100%)"></div>
      <div class="view-hero-content">
        <i class="fa-solid fa-person-rays" style="color:#ef4444;background:rgba(239,68,68,0.15);border-color:rgba(239,68,68,0.35)"></i>
        <div>
          <h2 style="color:#fca5a5">Federal Penitentiary</h2>
          <div style="font-size:0.88rem;color:rgba(255,255,255,0.5);margin-top:4px">Year ${Math.floor(timeServed / 12)} Month ${timeServed % 12} of your sentence. ${jailMonths} months left.</div>
          <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
            ${p.solitary > 0 ? `<span class="pris-badge badge-solitary">🔒 SOLITARY ${p.solitary}mo</span>` : ""}
            ${currentGang ? `<span class="pris-badge" style="background:${currentGang.color}22;border-color:${currentGang.color}55;color:${currentGang.color}">${currentGang.emoji} ${currentGang.name}</span>` : '<span class="pris-badge badge-lone">👤 Independent</span>'}
            ${p.contraband && p.contraband.includes("burner_phone") ? '<span class="pris-badge badge-phone">📱 Phone Active</span>' : ""}
            ${p.bribeIncomeMonthsLeft > 0 ? `<span class="pris-badge badge-bribe">💵 Bribe: ${p.bribeIncomeMonthsLeft}mo left</span>` : ""}
            ${p.yardDoneThisMonth ? '<span class="pris-badge badge-done">✅ Yard Done</span>' : '<span class="pris-badge badge-ready">⚡ Yard Ready</span>'}
          </div>
        </div>
      </div>`;
  }

  // ── KPI Strip ──
  const kpiEl = document.getElementById("prison-kpi");
  if (kpiEl) {
    const repColor =
      p.reputation >= 60
        ? "#10b981"
        : p.reputation >= 30
          ? "#f59e0b"
          : "#ef4444";
    kpiEl.innerHTML = `
      <div class="pris-kpi-card" style="border-color:rgba(239,68,68,0.3)">
        <div class="pris-kpi-icon" style="color:#ef4444;background:rgba(239,68,68,0.1)"><i class="fa-solid fa-calendar-days"></i></div>
        <div class="pris-kpi-body"><span class="pris-kpi-val" style="color:#fca5a5">${jailMonths}mo</span><span class="pris-kpi-label">SENTENCE LEFT</span></div>
      </div>
      <div class="pris-kpi-card" style="border-color:rgba(245,158,11,0.3)">
        <div class="pris-kpi-icon" style="color:#f59e0b;background:rgba(245,158,11,0.1)"><i class="fa-solid fa-star"></i></div>
        <div class="pris-kpi-body"><span class="pris-kpi-val" style="color:${repColor}">${p.reputation}</span><span class="pris-kpi-label">YARD REP</span></div>
      </div>
      <div class="pris-kpi-card" style="border-color:rgba(168,85,247,0.3)">
        <div class="pris-kpi-icon" style="color:#a855f7;background:rgba(168,85,247,0.1)"><i class="fa-solid fa-file-contract"></i></div>
        <div class="pris-kpi-body"><span class="pris-kpi-val" style="color:#c4b5fd">${p.infractions}</span><span class="pris-kpi-label">INFRACTIONS</span></div>
      </div>
      <div class="pris-kpi-card" style="border-color:rgba(34,211,238,0.3)">
        <div class="pris-kpi-icon" style="color:#22d3ee;background:rgba(34,211,238,0.1)"><i class="fa-solid fa-dollar-sign"></i></div>
        <div class="pris-kpi-body"><span class="pris-kpi-val" style="color:#67e8f9">$${(p.earnings || 0).toLocaleString()}</span><span class="pris-kpi-label">TOTAL EARNED</span></div>
      </div>
      <div class="pris-kpi-card" style="border-color:rgba(16,185,129,0.3)">
        <div class="pris-kpi-icon" style="color:#10b981;background:rgba(16,185,129,0.1)"><i class="fa-solid fa-fire"></i></div>
        <div class="pris-kpi-body"><span class="pris-kpi-val" style="color:#34d399">${p.crimeRepBonus || 0}</span><span class="pris-kpi-label">REP ON RELEASE</span></div>
      </div>`;
  }

  // ── Sentence Progress Bar ──
  const progEl = document.getElementById("prison-progress");
  if (progEl) {
    progEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;font-size:0.75rem;opacity:0.6;margin-bottom:6px">
        <span>⛓️ Served: ${timeServed} months</span>
        <span>${pct}% complete</span>
        <span>${jailMonths} months remaining</span>
      </div>
      <div style="height:10px;background:rgba(255,255,255,0.06);border-radius:99px;overflow:hidden">
        <div style="width:${pct}%;height:100%;border-radius:99px;background:linear-gradient(90deg,#ef4444,#f97316);box-shadow:0 0 10px #ef444466;transition:width 0.5s ease"></div>
      </div>`;
  }

  // ── SECTION: Prison Jobs ──
  const jobsEl = document.getElementById("prison-jobs");
  if (jobsEl) {
    jobsEl.innerHTML = CONFIG.PRISON_JOBS.map((j) => {
      const active = p.prisonJob === j.id;
      const bonuses = [];
      if (j.smartsBonus) bonuses.push(`+${j.smartsBonus} smarts/mo`);
      if (j.healthBonus) bonuses.push(`+${j.healthBonus} health/mo`);
      if (j.repBonus) bonuses.push(`+${j.repBonus} rep/mo`);
      if (j.repHit) bonuses.push(`⚠️${Math.abs(j.repHit)} rep (snitch risk)`);
      return `<div class="card ${active ? "card-active" : ""}" style="${active ? "border-color:rgba(239,68,68,0.5)" : ""}">
        <div class="card-header"><h3>${j.emoji} ${j.name}</h3><span class="tag" style="background:rgba(34,211,238,0.1);color:#67e8f9;border-color:rgba(34,211,238,0.2)">$${j.pay}/mo</span></div>
        <p style="opacity:0.7;font-size:0.8rem;margin:6px 0">${j.desc}</p>
        ${bonuses.length ? `<div style="font-size:0.72rem;color:#a78bfa;margin:4px 0">${bonuses.join(" · ")}</div>` : ""}
        <button class="btn ${active ? "btn-outline" : "btn-primary"}" style="margin-top:8px;width:100%" onclick="game.selectPrisonJob('${j.id}')">${active ? "✅ Current Job" : "Take This Job"}</button>
      </div>`;
    }).join("");
  }

  // ── SECTION: Prison Yard ──
  const yardEl = document.getElementById("prison-yard");
  if (yardEl) {
    yardEl.innerHTML = CONFIG.PRISON_YARD.map((act) => {
      const disabled = p.yardDoneThisMonth;
      const bonuses = [];
      if (act.health) bonuses.push(`+${act.health}❤️`);
      if (act.rep) bonuses.push(`+${act.rep}⭐`);
      if (act.happiness) bonuses.push(`+${act.happiness}😊`);
      if (act.crimeRep) bonuses.push(`+${act.crimeRep} crime rep`);
      if (act.appealChance)
        bonuses.push(`${(act.appealChance * 100).toFixed(0)}% cut 2mo`);
      if (act.gamble) bonuses.push("Win up to 3x");
      return `<div class="card ${disabled ? "card-disabled" : ""}">
        <div class="card-header"><h3>${act.emoji} ${act.name}</h3><span class="tag">${act.energy} energy</span></div>
        <p style="opacity:0.7;font-size:0.8rem;margin:6px 0">${act.desc}</p>
        <div style="font-size:0.72rem;color:#a78bfa;margin:4px 0">${bonuses.join(" · ")}</div>
        <button class="btn btn-primary" style="margin-top:8px;width:100%;${disabled ? "opacity:0.4;pointer-events:none" : ""}" onclick="game.doYardActivity('${act.id}')" ${disabled ? "disabled" : ""}>
          ${disabled ? "✅ Yard Used This Month" : "Do This"}
        </button>
      </div>`;
    }).join("");
  }

  // ── SECTION: Contraband ──
  const contrabandShopEl = document.getElementById("prison-contraband-shop");
  if (contrabandShopEl) {
    const owned = p.contraband || [];
    contrabandShopEl.innerHTML = CONFIG.PRISON_CONTRABAND.map((item) => {
      const heldCount = owned.filter((id) => id === item.id).length;
      const maxed = heldCount >= item.maxStack;
      const canAfford = this.state.cash >= item.cost;
      return `<div class="card" style="position:relative">
        ${heldCount > 0 ? `<div class="pris-owned-badge">x${heldCount}</div>` : ""}
        <div class="card-header"><h3>${item.emoji} ${item.name}</h3><span class="tag" style="background:rgba(239,68,68,0.1);color:#fca5a5;border-color:rgba(239,68,68,0.25)">$${item.cost}</span></div>
        <p style="opacity:0.7;font-size:0.8rem;margin:6px 0">${item.desc}</p>
        <div style="font-size:0.72rem;color:#86efac;margin:4px 0"><i class="fa-solid fa-bolt"></i> ${item.useDesc}</div>
        <div style="display:flex;gap:6px;margin-top:8px">
          <button class="btn btn-primary" style="flex:1;${!canAfford || maxed ? "opacity:0.4;pointer-events:none" : ""}" onclick="game.buyContraband('${item.id}')" ${!canAfford || maxed ? "disabled" : ""}>${maxed ? "Max Held" : !canAfford ? "Can't Afford" : "Buy"}</button>
          ${heldCount > 0 ? `<button class="btn btn-outline" style="flex:1" onclick="game.useContraband('${item.id}')">Use</button>` : ""}
        </div>
      </div>`;
    }).join("");
  }

  // ── SECTION: Gangs ──
  const gangsEl = document.getElementById("prison-gangs");
  if (gangsEl) {
    gangsEl.innerHTML = CONFIG.PRISON_GANGS.map((gang) => {
      const isMember = p.gangId === gang.id;
      const perks = [];
      if (gang.incomeBonus > 0) perks.push(`$${gang.incomeBonus}/mo income`);
      if (gang.crimeBonus) perks.push(`+${gang.crimeBonus} crime rep`);
      if (gang.fightBonus)
        perks.push(`${(gang.fightBonus * 100).toFixed(0)}% fight boost`);
      if (gang.smartsBonus) perks.push(`+${gang.smartsBonus} smarts/mo`);
      return `<div class="card ${isMember ? "card-active" : ""}" style="${isMember ? `border-color:${gang.color}55` : ""}">
        <div class="card-header"><h3>${gang.emoji} ${gang.name}</h3><span class="tag" style="background:${gang.color}22;color:${gang.color};border-color:${gang.color}44">$${gang.fee}/mo</span></div>
        <p style="opacity:0.7;font-size:0.8rem;margin:6px 0">${gang.desc}</p>
        <div style="font-size:0.72rem;color:#a78bfa;margin:4px 0">${perks.join(" · ")}</div>
        ${isMember ? `<div style="display:flex;gap:6px;margin-top:8px"><span class="btn btn-outline" style="flex:1;opacity:0.6;cursor:default;text-align:center">✅ Member</span><button class="btn btn-danger" style="flex:1" onclick="game.leavePrisonGang()">Leave</button></div>` : `<button class="btn btn-primary" style="margin-top:8px;width:100%;${p.gangId ? "opacity:0.4;pointer-events:none" : ""}" onclick="game.joinPrisonGang('${gang.id}')" ${p.gangId ? "disabled" : ""}>${p.gangId ? "Already in Gang" : `Join — $${gang.fee}`}</button>`}
      </div>`;
    }).join("");
  }

  // ── SECTION: Bribe & Escape ──
  const bribeEl = document.getElementById("prison-bribe");
  if (bribeEl) {
    bribeEl.innerHTML = CONFIG.PRISON_BRIBE_TIERS.map((tier) => {
      const canAfford = this.state.cash >= tier.cost;
      return `<div class="card">
        <div class="card-header"><h3>${tier.emoji} ${tier.name}</h3><span class="tag" style="background:rgba(245,158,11,0.1);color:#fbbf24;border-color:rgba(245,158,11,0.25)">$${tier.cost.toLocaleString()}</span></div>
        <p style="opacity:0.7;font-size:0.8rem;margin:6px 0">${tier.desc}</p>
        <button class="btn btn-primary" style="margin-top:8px;width:100%;${!canAfford ? "opacity:0.4;pointer-events:none" : ""}" onclick="game.bribeGuard('${tier.id}')" ${!canAfford ? "disabled" : ""}>${!canAfford ? `Need $${tier.cost.toLocaleString()}` : "Bribe Guard"}</button>
      </div>`;
    }).join("");
  }

  // ── SECTION: Escape ──
  const escapeEl = document.getElementById("prison-escape");
  if (escapeEl) {
    const hasLockpick = p.contraband && p.contraband.includes("lockpick");
    const hasUniform = p.contraband && p.contraband.includes("guard_uniform");
    const escChance = Math.max(
      0.02,
      Math.min(
        0.15,
        CONFIG.PRISON_ESCAPE_BASE_CHANCE - p.escapeAttempts * 0.015,
      ),
    );
    const tunnelChance = hasLockpick
      ? Math.max(0.08, Math.min(0.45, 0.35 - p.escapeAttempts * 0.04))
      : 0;
    escapeEl.innerHTML = `
      <div class="card">
        <div class="card-header"><h3>🏃 Sprint Escape</h3><span class="tag">${(escChance * 100).toFixed(0)}% chance</span></div>
        <p style="opacity:0.7;font-size:0.8rem">Make a run for the fence. Pure luck and legs. Costs 40 energy. Fail = +${CONFIG.PRISON_ESCAPE_FAIL_PENALTY} months.</p>
        <button class="btn btn-danger" style="margin-top:8px;width:100%" onclick="game.attemptEscape()">🏃 Attempt Sprint Escape</button>
      </div>
      <div class="card ${!hasLockpick ? "card-disabled" : ""}" style="${hasLockpick ? "border-color:rgba(245,158,11,0.4)" : ""}">
        <div class="card-header"><h3>🗝️ Tunnel Escape</h3><span class="tag">${hasLockpick ? (tunnelChance * 100).toFixed(0) + "% chance" : "Needs Lockpick"}</span></div>
        <p style="opacity:0.7;font-size:0.8rem">Dig out under the fence using a lockpick kit. Much better odds. Fail = +20 months, 4 months solitary.</p>
        <button class="btn ${hasLockpick ? "btn-warning" : "btn-outline"}" style="margin-top:8px;width:100%;${!hasLockpick ? "opacity:0.4;pointer-events:none" : ""}" onclick="game.tunnelEscape()" ${!hasLockpick ? "disabled" : ""}>${!hasLockpick ? "Buy Lockpick Kit First" : "Dig the Tunnel"}</button>
      </div>
      <div class="card ${!hasUniform ? "card-disabled" : ""}" style="${hasUniform ? "border-color:rgba(167,139,250,0.4)" : ""}">
        <div class="card-header"><h3>🪖 Walk-Out Escape</h3><span class="tag">${hasUniform ? "55% chance" : "Needs Uniform"}</span></div>
        <p style="opacity:0.7;font-size:0.8rem">Dress as a guard and walk straight out the front gate. Highest chance, one-time use uniform. Fail = +24 months, 6mo solitary.</p>
        <button class="btn ${hasUniform ? "btn-purple" : "btn-outline"}" style="margin-top:8px;width:100%;${!hasUniform ? "opacity:0.4;pointer-events:none" : ""}" onclick="game.walkOutEscape()" ${!hasUniform ? "disabled" : ""}>${!hasUniform ? "Buy Guard's Uniform First" : "Walk Out Like a Guard"}</button>
      </div>
      <div class="card">
        <div class="card-header"><h3>🤫 Snitch</h3><span class="tag">60% works</span></div>
        <p style="opacity:0.7;font-size:0.8rem">Tip off the guards on a cellmate. 60% chance to cut 2 months. Costs $-15 reputation. Risk of being beaten if found out.</p>
        <button class="btn btn-outline" style="margin-top:8px;width:100%;color:#fca5a5;border-color:rgba(239,68,68,0.3)" onclick="game.prisonSnitch()">Snitch (Risky)</button>
      </div>`;
  }

  // ── SECTION: Poker Table ──
  const pokerEl = document.getElementById("prison-poker");
  if (pokerEl) {
    const smarts = (this.state.stats && this.state.stats.smarts) || 50;
    const winChance = Math.max(20, Math.min(55, 35 + (smarts - 50) * 0.1));
    pokerEl.innerHTML = `
      <div class="card" style="border-color:rgba(251,191,36,0.3);background:linear-gradient(135deg,rgba(12,16,36,0.9),rgba(20,24,50,0.9))">
        <div class="card-header"><h3>🃏 Underground Poker Table</h3><span class="tag safe">Win Chance: ${winChance.toFixed(0)}%</span></div>
        <p style="opacity:0.7;font-size:0.8rem;margin:6px 0">High-stakes prison poker. Your smarts (${Math.round(smarts)}) improve odds. Bet commissary cash. Big wins possible.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:10px 0">
          ${[50, 150, 300].map((bet) => `<button class="btn btn-outline" style="font-size:0.8rem;border-color:rgba(251,191,36,0.3);color:#fbbf24" onclick="game.prisonPokerBet(${bet})">$${bet} bet</button>`).join("")}
        </div>
        <div style="font-size:0.72rem;opacity:0.5;margin-top:4px">$50 → win $100-200 · $150 → win $300-600 · $300 → up to $1,200</div>
      </div>`;
  }

  // ── SECTION: Event Log ──
  const logEl = document.getElementById("prison-event-log");
  if (logEl) {
    const log = p.eventLog || [];
    if (log.length === 0) {
      logEl.innerHTML = `<div class="card" style="opacity:0.5;text-align:center;padding:20px"><i class="fa-solid fa-scroll" style="margin-bottom:8px;font-size:1.5rem"></i><br>No events yet. Advance months to see what happens.</div>`;
    } else {
      logEl.innerHTML = log
        .map(
          (ev, i) => `
        <div style="display:flex;gap:10px;align-items:flex-start;padding:10px;border-left:2px solid rgba(239,68,68,${0.4 - i * 0.04});margin-bottom:6px">
          <div style="font-size:0.75rem;opacity:0.45;flex-shrink:0;margin-top:2px">MO ${ev.month}</div>
          <div style="font-size:0.82rem;line-height:1.5">${ev.msg}</div>
        </div>`,
        )
        .join("");
    }
  }
};

/* ── SIDEBAR HUD UPDATE PATCH ── */
(function () {
  const origUpdateStats3 = app.updateStats.bind(app);
  app.updateStats = function () {
    origUpdateStats3();
    const r = game.state.relationship;
    const hudPartner = document.getElementById("hud-partner");
    if (hudPartner) {
      hudPartner.innerText =
        r.status === "single" ? "Single" : `${r.partnerName} (${r.status})`;
    }
    const hudKids = document.getElementById("hud-kids");
    if (hudKids) hudKids.innerText = r.children.length;
    const hudPets = document.getElementById("hud-pets");
    if (hudPets) hudPets.innerText = game.state.pets.length;
  };
})();

/* ── Patch renderAll to include new sections ── */
(function () {
  const origRenderAll3 = game.renderAll.bind(game);
  let _galPending = false;
  game.renderAll = function () {
    origRenderAll3();
    // Only re-render relationships when social view is active — avoids expensive DOM rebuild on every render
    if ((app.currentView || "career") === "relationships")
      this.renderRelationships();
    // Only re-render prison when prison view is active and actually in jail
    if (this.state.jail > 0 && (app.currentView || "") === "prison")
      this.renderPrison();
    // Throttle gallery-scroll refresh so it runs at most once per animation frame
    if (!_galPending) {
      _galPending = true;
      requestAnimationFrame(() => {
        galleryScroll.refresh();
        _galPending = false;
      });
    }
  };
})();

/* ── Gallery Scroll Indicators (mobile/tablet only) ── */
const galleryScroll = (() => {
  const isMobile = () => window.matchMedia("(max-width: 980px)").matches;
  const tracked = new WeakSet();

  function createDots(container) {
    let dots = container.nextElementSibling;
    if (dots && dots.classList.contains("gallery-dots")) {
      // reuse existing
    } else {
      dots = document.createElement("div");
      dots.className = "gallery-dots";
      container.parentNode.insertBefore(dots, container.nextSibling);
    }
    const items = container.children;
    const count = items.length;
    if (count <= 1) {
      dots.style.display = "none";
      return;
    }
    dots.style.display = "";
    dots.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const d = document.createElement("span");
      d.className = "gallery-dot" + (i === 0 ? " active" : "");
      dots.appendChild(d);
    }
    updateDots(container, dots);
  }

  function updateDots(container, dots) {
    if (!dots) return;
    const items = container.children;
    const scrollL = container.scrollLeft;
    const cw = container.clientWidth;
    let closest = 0,
      minDist = Infinity;
    for (let i = 0; i < items.length; i++) {
      const dist = Math.abs(items[i].offsetLeft - scrollL);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    }
    const allDots = dots.querySelectorAll(".gallery-dot");
    allDots.forEach((d, i) => d.classList.toggle("active", i === closest));
  }

  function attachScroll(container) {
    if (tracked.has(container)) return;
    tracked.add(container);
    let ticking = false;
    container.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const dots = container.nextElementSibling;
          if (dots && dots.classList.contains("gallery-dots"))
            updateDots(container, dots);
          ticking = false;
        });
      },
      { passive: true },
    );
  }

  function refresh() {
    if (!isMobile()) return;
    document.querySelectorAll(".grid-cards").forEach((g) => {
      // Skip single-card and block-display containers
      if (g.id === "bank-credit" || g.id === "bond-list") return;
      if (g.children.length <= 1) return;
      createDots(g);
      attachScroll(g);
    });
  }

  return { refresh };
})();

/* ── Patch nextMonth to process relationships & pets ── */
(function () {
  const origNextMonth4 = game.nextMonth.bind(game);
  game.nextMonth = function () {
    const origJail = this.state.jail;
    origNextMonth4();
    if (origJail <= 0 && !this.state.life.dead && !this.state.life.retired) {
      const relExpenses = this.processRelationshipMonthly();
      const petExpenses = this.processPetsMonthly();
      if (relExpenses + petExpenses > 0)
        this.modCash(-(relExpenses + petExpenses));
    }
    if (this.state.jail > 0) app.setView("prison");
  };
})();

/* ── Patch nextMonth to process side relationships monthly ── */
(function () {
  const origNextMonthSide = game.nextMonth.bind(game);
  game.nextMonth = function () {
    origNextMonthSide();
    if (
      this.state.jail <= 0 &&
      !this.state.life.dead &&
      !this.state.life.retired
    ) {
      const sideExpenses = this.processSideRelationshipsMonthly();
      if (sideExpenses > 0) this.modCash(-sideExpenses);
      // Drug empire monthly tick
      this.processDrugEmpireMonthly();
      // Standalone lawyer retainer (when no drug empire active — drug empire already handles it)
      if (!this.state.crime.drugEmpire.tier && this.state.crime.lawyer) {
        const lDef = CONFIG.LAWYERS.find(
          (l) => l.id === this.state.crime.lawyer,
        );
        if (lDef && lDef.monthlyCost > 0) {
          if (this.state.cash >= lDef.monthlyCost) {
            this.modCash(-lDef.monthlyCost);
          } else {
            this.state.crime.lawyer = null;
            app.toast(
              "Couldn't afford lawyer retainer — you're on your own.",
              "error",
            );
          }
        }
      }
    }
  };
})();

/* ══════════════════════════════════════════════════════════════════════
   SOUND ENGINE  —  Web-Audio-API synthesised SFX + BG music toggle
   ══════════════════════════════════════════════════════════════════════ */
const SFX = (() => {
  let _ac = null;
  let muted = localStorage.getItem("greedigo_mute") === "1";

  function ctx() {
    if (!_ac) _ac = new (window.AudioContext || window.webkitAudioContext)();
    if (_ac.state === "suspended") _ac.resume();
    return _ac;
  }

  /* ── Core helpers ── */
  function tone(freq, type, startVol, endVol, duration, startTime) {
    const c = ctx();
    const o = c.createOscillator();
    const g = c.createGain();
    o.connect(g);
    g.connect(c.destination);
    o.type = type;
    o.frequency.setValueAtTime(freq, startTime);
    g.gain.setValueAtTime(startVol, startTime);
    g.gain.exponentialRampToValueAtTime(
      Math.max(0.001, endVol),
      startTime + duration,
    );
    o.start(startTime);
    o.stop(startTime + duration + 0.01);
  }
  function sweep(f0, f1, type, vol, duration, startTime) {
    const c = ctx();
    const o = c.createOscillator();
    const g = c.createGain();
    o.connect(g);
    g.connect(c.destination);
    o.type = type;
    o.frequency.setValueAtTime(f0, startTime);
    o.frequency.exponentialRampToValueAtTime(f1, startTime + duration);
    g.gain.setValueAtTime(vol, startTime);
    g.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    o.start(startTime);
    o.stop(startTime + duration + 0.01);
  }

  /* ── Noise burst helper (bandpass-filtered white noise for transients) ── */
  function noiseBurst(vol, dur, freq, q, startTime) {
    try {
      const c = ctx();
      const bufSz = Math.ceil(c.sampleRate * Math.max(0.01, dur));
      const buf = c.createBuffer(1, bufSz, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSz; i++) data[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      src.buffer = buf;
      const filt = c.createBiquadFilter();
      filt.type = "bandpass";
      filt.frequency.value = freq;
      filt.Q.value = q;
      const g = c.createGain();
      g.gain.setValueAtTime(vol, startTime);
      g.gain.exponentialRampToValueAtTime(0.001, startTime + dur);
      src.connect(filt);
      filt.connect(g);
      g.connect(c.destination);
      src.start(startTime);
      src.stop(startTime + dur + 0.02);
    } catch (e) {
      /* ignore */
    }
  }

  /* ── Professional Sound Library ── */
  const sounds = {
    click() {
      const t = ctx().currentTime;
      noiseBurst(0.11, 0.022, 4200, 2.8, t);
      tone(1400, "sine", 0.032, 0.001, 0.028, t + 0.002);
    },

    coin() {
      const t = ctx().currentTime;
      // Metallic bell: fundamental + inharmonic upper partial
      [
        [1047, 0],
        [1319, 0.042],
        [1568, 0.082],
      ].forEach(([f, d]) => {
        tone(f, "sine", 0.1, 0.001, 0.2, t + d);
        tone(f * 2.756, "sine", 0.028, 0.001, 0.09, t + d);
      });
      noiseBurst(0.055, 0.028, 7200, 10, t);
    },

    bigCoin() {
      const t = ctx().currentTime;
      // Ascending pentatonic metallic shower
      [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => {
        tone(f, "sine", 0.11, 0.001, 0.24, t + i * 0.058);
        tone(f * 2.756, "sine", 0.03, 0.001, 0.1, t + i * 0.058);
        noiseBurst(0.038, 0.025, 5500 + i * 420, 14, t + i * 0.058);
      });
    },

    salary() {
      const t = ctx().currentTime;
      // Cash register: metallic hit + short descending chime
      noiseBurst(0.14, 0.028, 5800, 4, t);
      tone(1319, "sine", 0.09, 0.001, 0.14, t + 0.024);
      tone(1047, "sine", 0.06, 0.001, 0.1, t + 0.08);
    },

    buy() {
      const t = ctx().currentTime;
      // Warm thunk + rising note
      noiseBurst(0.1, 0.04, 220, 1.8, t);
      tone(330, "triangle", 0.07, 0.001, 0.13, t + 0.01);
      tone(440, "sine", 0.06, 0.001, 0.1, t + 0.07);
    },

    sell() {
      const t = ctx().currentTime;
      sweep(440, 880, "triangle", 0.08, 0.18, t);
      tone(1047, "sine", 0.05, 0.001, 0.1, t + 0.16);
    },

    error() {
      const t = ctx().currentTime;
      tone(200, "square", 0.1, 0.001, 0.09, t);
      tone(180, "square", 0.08, 0.001, 0.09, t + 0.05);
      noiseBurst(0.06, 0.06, 320, 1.5, t);
    },

    advance() {
      const t = ctx().currentTime;
      tone(480, "triangle", 0.048, 0.001, 0.065, t);
      tone(600, "triangle", 0.03, 0.001, 0.048, t + 0.038);
    },

    modalOpen() {
      const t = ctx().currentTime;
      sweep(320, 900, "sine", 0.052, 0.18, t);
      tone(1800, "sine", 0.02, 0.001, 0.07, t + 0.14);
    },

    casinoSpin() {
      const t = ctx().currentTime;
      // Mechanical reel clicks + rising sweep
      for (let i = 0; i < 5; i++) {
        noiseBurst(0.07, 0.02, 1800 + i * 300, 3, t + i * 0.075);
        tone(200 + i * 60, "square", 0.04, 0.001, 0.04, t + i * 0.075);
      }
      sweep(400, 1200, "sawtooth", 0.04, 0.38, t);
    },

    casinoWin() {
      const t = ctx().currentTime;
      // Bright ascending arpeggio with chorus + coin shower
      [523, 659, 784, 1047].forEach((f, i) => {
        tone(f, "sine", 0.12, 0.001, 0.28, t + i * 0.078);
        tone(f * 1.008, "sine", 0.042, 0.001, 0.22, t + i * 0.078 + 0.01);
      });
      for (let i = 0; i < 8; i++) {
        const f = 660 + Math.random() * 720;
        tone(f, "sine", 0.055, 0.001, 0.08, t + 0.36 + i * 0.048);
        noiseBurst(0.022, 0.022, f * 1.5, 16, t + 0.36 + i * 0.048);
      }
    },

    jackpot() {
      const t = ctx().currentTime;
      // Bass slam
      sweep(95, 48, "sine", 0.22, 0.42, t);
      noiseBurst(0.28, 0.07, 480, 0.9, t);
      // Rising fanfare
      [
        [330, 0.06],
        [415, 0.15],
        [523, 0.26],
        [659, 0.39],
        [784, 0.54],
        [1047, 0.7],
        [1319, 0.88],
      ].forEach(([f, d]) => {
        tone(f, "sine", 0.16, 0.001, 0.42, t + d);
        tone(f * 1.005, "sine", 0.07, 0.001, 0.38, t + d + 0.012);
      });
      // Coin flood
      for (let i = 0; i < 22; i++) {
        const f = 480 + Math.random() * 1100;
        const jitter = Math.random() * 0.035;
        tone(f, "sine", 0.058, 0.001, 0.08, t + 0.88 + i * 0.042 + jitter);
        noiseBurst(0.018, 0.018, f, 18, t + 0.88 + i * 0.042 + jitter);
      }
    },

    casinoLose() {
      const t = ctx().currentTime;
      // Sad descending minor phrase + low thud
      [494, 415, 370, 311, 261].forEach((f, i) => {
        tone(f, "triangle", 0.11, 0.001, 0.3, t + i * 0.115);
      });
      sweep(310, 90, "sine", 0.1, 0.48, t + 0.22);
      noiseBurst(0.06, 0.12, 200, 1.2, t + 0.1);
    },

    crimeSuccess() {
      const t = ctx().currentTime;
      // Stealthy heist success — minor melodic sting
      sweep(280, 640, "sawtooth", 0.09, 0.13, t);
      tone(740, "sine", 0.09, 0.001, 0.2, t + 0.1);
      tone(880, "sine", 0.11, 0.001, 0.24, t + 0.22);
      noiseBurst(0.05, 0.038, 2200, 5, t + 0.1);
    },

    crimeFail() {
      const t = ctx().currentTime;
      // Alarm descend + bass thud
      sweep(640, 140, "sawtooth", 0.15, 0.32, t);
      tone(130, "square", 0.09, 0.001, 0.28, t + 0.18);
      noiseBurst(0.1, 0.07, 350, 1.2, t);
    },

    arrested() {
      const t = ctx().currentTime;
      // Police siren: two-tone warble × 7
      for (let i = 0; i < 7; i++) {
        sweep(920, 620, "sawtooth", 0.13, 0.22, t + i * 0.25);
        sweep(620, 920, "sawtooth", 0.13, 0.22, t + i * 0.25 + 0.125);
      }
    },

    achievement() {
      const t = ctx().currentTime;
      // Bass chord anchor
      [261, 329, 392].forEach((f) =>
        tone(f * 0.5, "triangle", 0.09, 0.001, 0.55, t),
      );
      noiseBurst(0.11, 0.055, 3200, 2, t);
      // Triumphant rising fanfare with chorus
      [
        [523, 0],
        [659, 0.09],
        [784, 0.18],
        [1047, 0.28],
        [1319, 0.4],
        [1047, 0.56],
        [1319, 0.68],
        [1568, 0.82],
      ].forEach(([f, d]) => {
        tone(f, "sine", 0.15, 0.001, 0.34, t + d);
        tone(f * 1.005, "sine", 0.055, 0.001, 0.3, t + d + 0.012);
      });
    },

    hotStreak() {
      const t = ctx().currentTime;
      // Power-up ascending cascade
      [294, 370, 440, 554, 659, 880, 1047].forEach((f, i) => {
        tone(f, "sawtooth", 0.078, 0.001, 0.13, t + i * 0.048);
        tone(f * 2, "sine", 0.032, 0.001, 0.09, t + i * 0.048 + 0.018);
      });
    },

    epic() {
      const t = ctx().currentTime;
      // Bass hit + rising sweep + fanfare
      sweep(95, 50, "sine", 0.2, 0.35, t);
      noiseBurst(0.18, 0.065, 650, 1, t);
      sweep(300, 1400, "sawtooth", 0.08, 0.52, t + 0.045);
      [
        [523, 0.1],
        [659, 0.2],
        [784, 0.32],
        [1047, 0.46],
        [1319, 0.61],
      ].forEach(([f, d]) => {
        tone(f, "sine", 0.14, 0.001, 0.38, t + d);
        tone(f * 1.005, "sine", 0.055, 0.001, 0.32, t + d + 0.012);
      });
    },

    netWorthMilestone() {
      const t = ctx().currentTime;
      // MASSIVE orchestral stab — bass slam + full chord voicing + coin cascade
      sweep(80, 44, "sine", 0.3, 0.55, t);
      noiseBurst(0.38, 0.09, 520, 0.75, t);
      sweep(380, 1800, "sawtooth", 0.12, 0.65, t + 0.055);
      [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => {
        tone(f, "sine", 0.17, 0.001, 0.65, t + 0.07 + i * 0.035);
        tone(
          f * 1.004,
          "sine",
          0.065,
          0.001,
          0.58,
          t + 0.07 + i * 0.035 + 0.01,
        );
        tone(f * 0.5, "triangle", 0.055, 0.001, 0.55, t + 0.07 + i * 0.03);
      });
      for (let i = 0; i < 20; i++) {
        const f = 580 + Math.random() * 1300;
        const jt = Math.random() * 0.04;
        tone(f, "sine", 0.055, 0.001, 0.085, t + 0.85 + i * 0.045 + jt);
        noiseBurst(0.018, 0.02, f, 20, t + 0.85 + i * 0.045 + jt);
      }
    },

    dailyBonus() {
      const t = ctx().currentTime;
      // Sparkle cascade + mini fanfare
      [1047, 1319, 1568, 2093, 2637, 3136].forEach((f, i) => {
        tone(f, "sine", 0.08, 0.001, 0.22, t + i * 0.065);
        tone(f * 1.5, "sine", 0.032, 0.001, 0.1, t + i * 0.065 + 0.025);
        noiseBurst(0.035, 0.025, f * 0.8, 18, t + i * 0.065);
      });
      [523, 659, 784, 1047].forEach((f, i) => {
        tone(f, "sine", 0.1, 0.001, 0.3, t + 0.52 + i * 0.075);
      });
    },

    death() {
      const t = ctx().currentTime;
      // Cinematic dark stinger
      sweep(220, 38, "sawtooth", 0.2, 1.6, t);
      sweep(110, 28, "sine", 0.16, 1.4, t + 0.22);
      tone(48, "square", 0.11, 0.001, 1.1, t + 0.62);
      noiseBurst(0.14, 0.22, 190, 0.45, t + 0.1);
      noiseBurst(0.07, 1.0, 75, 0.28, t + 0.55);
    },

    jobGet() {
      const t = ctx().currentTime;
      // Warm confident hire jingle
      [523, 659, 784, 1047].forEach((f, i) =>
        tone(f, "triangle", 0.1, 0.001, 0.24, t + i * 0.072),
      );
      noiseBurst(0.06, 0.04, 4000, 6, t + 0.02);
      tone(1319, "sine", 0.08, 0.001, 0.2, t + 0.3);
    },
  };

  /* ── Public API ── */
  const api = {
    get muted() {
      return muted;
    },

    play(name) {
      if (muted) return;
      try {
        ctx();
        if (sounds[name]) sounds[name]();
      } catch (e) {
        /* ignore */
      }
    },

    toggle() {
      muted = !muted;
      localStorage.setItem("greedigo_mute", muted ? "1" : "0");
      const bgm = document.getElementById("bg-music");
      if (bgm) {
        /* Just flip the muted flag — no need to stop/restart */
        bgm.muted = muted;
        /* If unmuting and audio somehow stopped, restart it */
        if (!muted && bgm.paused) bgm.play().catch(() => {});
      }
      if (muted) {
        this.stopAmbient();
      } else {
        /* Restart ambient if no file is playing */
        if (!bgm || bgm.paused) this.startAmbient();
      }
      /* Update toggle button icon */
      const btn = document.getElementById("snd-toggle-btn");
      if (btn) {
        btn.innerHTML = muted
          ? '<i class="fa-solid fa-volume-xmark"></i>'
          : '<i class="fa-solid fa-volume-high"></i>';
        btn.title = muted ? "Unmute sounds" : "Mute sounds";
        btn.classList.toggle("snd-muted", muted);
      }
      if (!muted) api.play("click");
    },

    _init() {
      /* Restore bgm muted state */
      const bgm = document.getElementById("bg-music");
      if (bgm) {
        bgm.muted = muted;
        bgm.loop = true;
      }
      /* Restore toggle button state */
      const btn = document.getElementById("snd-toggle-btn");
      if (btn) {
        btn.innerHTML = muted
          ? '<i class="fa-solid fa-volume-xmark"></i>'
          : '<i class="fa-solid fa-volume-high"></i>';
        btn.classList.toggle("snd-muted", muted);
      }

      /* Try to autoplay immediately (works if browser allows it) */
      if (!muted && bgm) {
        bgm.play().catch(() => {
          /* Autoplay blocked — wait for first user interaction */
          const startOnInteraction = () => {
            if (!muted && bgm.paused) {
              bgm.play().catch(() => {});
            }
            ["click", "keydown", "touchstart"].forEach((ev) =>
              document.removeEventListener(ev, startOnInteraction),
            );
          };
          ["click", "keydown", "touchstart"].forEach((ev) =>
            document.addEventListener(ev, startOnInteraction, { once: true }),
          );
        });
      }

      /* Global button click SFX */
      document.addEventListener("click", function (e) {
        const btn = e.target.closest(
          ".btn, .mbn-tab, .speed-btn, .next-month-btn, .crime-execute-btn, .bank-action-btn, .bank-apply-btn",
        );
        if (btn && !btn.id.includes("snd-toggle")) api.play("click");
      });
    },

    /* ── Ambient procedural music fallback (used when bg file is missing) ── */
    _ambientNodes: null,
    _ambientRunning: false,

    startAmbient() {
      if (this._ambientRunning || muted) return;
      try {
        const c = ctx();
        const master = c.createGain();
        master.gain.setValueAtTime(0, c.currentTime);
        master.gain.linearRampToValueAtTime(0.06, c.currentTime + 3);
        master.connect(c.destination);

        const nodes = [];
        /* Soft pad: detuned sines */
        [
          [55, 0],
          [82.5, 3],
          [110, -4],
          [165, 2],
        ].forEach(([freq, detune]) => {
          const o = c.createOscillator();
          const g = c.createGain();
          const lfo = c.createOscillator();
          const lfoGain = c.createGain();
          lfo.frequency.value = 0.05 + Math.random() * 0.08;
          lfo.type = "sine";
          lfoGain.gain.value = 1.5;
          lfo.connect(lfoGain);
          lfoGain.connect(o.frequency);
          o.type = "sine";
          o.frequency.value = freq;
          o.detune.value = detune;
          g.gain.value = 0.25;
          o.connect(g);
          g.connect(master);
          o.start();
          lfo.start();
          nodes.push(o, g, lfo, lfoGain);
        });
        this._ambientNodes = { master, nodes, ctx: c };
        this._ambientRunning = true;
      } catch (e) {
        /* ignore */
      }
    },

    stopAmbient() {
      if (!this._ambientRunning || !this._ambientNodes) return;
      try {
        const { master, nodes, ctx: c } = this._ambientNodes;
        master.gain.linearRampToValueAtTime(0, c.currentTime + 1.5);
        setTimeout(() => {
          nodes.forEach((n) => {
            try {
              n.stop && n.stop();
              n.disconnect();
            } catch (e) {}
          });
          master.disconnect();
        }, 1800);
      } catch (e) {
        /* ignore */
      }
      this._ambientRunning = false;
      this._ambientNodes = null;
    },

    startBgMusicUnmuted() {
      /* Force-unmute when entering a game so music always plays automatically.
         This overrides any saved mute preference from a previous session. */
      if (muted) {
        muted = false;
        localStorage.setItem("greedigo_mute", "0");
        const bgmEl = document.getElementById("bg-music");
        if (bgmEl) bgmEl.muted = false;
        const btn = document.getElementById("snd-toggle-btn");
        if (btn) {
          btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
          btn.title = "Mute sounds";
          btn.classList.remove("snd-muted");
        }
      }
      this.startBgMusic();
    },

    startBgMusic() {
      const bgm = document.getElementById("bg-music");
      if (!bgm) {
        /* No audio element — only start ambient if not muted */
        if (!muted) this.startAmbient();
        return;
      }
      if (!bgm.paused) {
        /* Already running — just sync the muted state */
        bgm.muted = muted;
        return;
      }
      bgm.volume = 0.4;
      bgm.loop = true; /* Ensure loop is always set */
      bgm.muted = muted;
      bgm.play().catch(() => {
        /* File missing / browser blocked — fall back to ambient only if audible */
        if (!muted && !this._ambientRunning) this.startAmbient();
      });
    },

    stopBgMusic() {
      const bgm = document.getElementById("bg-music");
      if (bgm && !bgm.paused) bgm.pause();
      this.stopAmbient();
    },
  };

  /* ── Patch app.toast for context-aware sounds ── */
  (function () {
    const _origToast = app.toast.bind(app);
    app.toast = function (msg, type = "success") {
      _origToast(msg, type);
      const m = (msg || "").toLowerCase();
      if (type === "epic") {
        if (m.includes("jackpot")) api.play("jackpot");
        else if (m.includes("getaway")) api.play("crimeSuccess");
        else api.play("epic");
      } else if (type === "success") {
        if (m.includes("won $") || m.includes("win")) api.play("casinoWin");
        else if (m.includes("success") || m.includes("+$")) api.play("coin");
        else api.play("coin");
      } else if (type === "error") {
        if (
          m.includes("busted") ||
          m.includes("arrest") ||
          m.includes("prison")
        )
          api.play("arrested");
        else api.play("error");
      } else if (type === "warning") {
        if (m.includes("success") || m.includes("+$")) api.play("crimeSuccess");
        else api.play("click");
      } else if (type === "text-loss") {
        api.play("casinoLose");
      }
    };
  })();

  /* ── Patch game.die for death SFX ── */
  (function () {
    const _origDie = game.die.bind(game);
    game.die = function (reason) {
      api.play("death");
      _origDie(reason);
    };
  })();

  /* ── Patch the advance button for month-tick SFX ── */
  (function () {
    const advBtn = document.getElementById("main-advance-btn");
    if (advBtn) {
      const _orig = advBtn.onclick;
      advBtn.addEventListener("click", () => api.play("advance"), true);
    }
  })();

  return api;
})();

/* ══════════════════════════════════════════════════════
   MARKET UI HELPERS
   ══════════════════════════════════════════════════════ */
window._mktSelected = "spy";
window._mktFilter = "all";

function mktSelect(id, el) {
  window._mktSelected = id;
  document
    .querySelectorAll(".mkt-card")
    .forEach((c) => c.classList.remove("mkt-card-sel"));
  if (el) el.classList.add("mkt-card-sel");
  // Update chart header immediately
  const def = CONFIG.ASSETS.find((d) => d.id === id);
  const a = game.state.assets[id];
  if (def && a) {
    const n = document.getElementById("mkt-chart-name");
    if (n) n.textContent = def.name;
    const t = document.getElementById("mkt-chart-ticker");
    if (t) t.textContent = id.toUpperCase();
    const p = document.getElementById("mkt-chart-price");
    if (p)
      p.textContent =
        "$" + (a.price < 100 ? a.price.toFixed(2) : a.price.toFixed(0));
    const c = document.getElementById("mkt-chart-chg");
    if (c) {
      const up = a.trend >= 0;
      c.textContent = (up ? "▲ +" : "▼ ") + (a.trend * 100).toFixed(2) + "%";
      c.className = "mkt-chart-chg " + (up ? "gain" : "loss");
    }
  }
  app.drawChart();
}

function mktFilter(type, btn) {
  window._mktFilter = type;
  document
    .querySelectorAll(".mkt-tab")
    .forEach((b) => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  game.renderAll();
}

function mktQtyAdj(id, delta) {
  const el = document.getElementById("mkt-qty-" + id);
  if (el) el.value = Math.max(1, (parseInt(el.value) || 1) + delta);
}

/* ══════════════════════════════════════════════════════
   TUTORIAL ENGINE — TUT
   ══════════════════════════════════════════════════════ */
const TUT = (function () {
  const STEPS = [
    {
      icon: "fa-rocket",
      color: "#a78bfa",
      title: "Welcome to Greedigo",
      body: "You're 18, broke, and hungry. Build wealth, manage risk, and don't die doing it. Every decision has consequences — there are no do-overs.",
      tip: "The goal isn't just money. It's surviving long enough to spend it.",
      target: null,
      action: null,
    },
    {
      icon: "fa-briefcase",
      color: "#60a5fa",
      title: "Start Your Career",
      body: "A job is your income engine. Open the Career view, pick a role, and start earning. Without income you'll run dry before month 3.",
      tip: "Higher-paying roles require more smarts. Study early to unlock better jobs.",
      target: '[data-view="career"], .nav-item[onclick*="career"]',
      action: () => app.activateView("career"),
      actionLabel: "Go to Career →",
    },
    {
      icon: "fa-wallet",
      color: "#34d399",
      title: "Budget Reality Check",
      body: "Rent, food, and lifestyle cost money every month. Watch your Cash in the top HUD — if it hits zero and you have no job, you spiral fast.",
      tip: "Keep at least 3 months of expenses in cash at all times. That's your safety net.",
      target: "#hud-cash",
      action: null,
    },
    {
      icon: "fa-heart-pulse",
      color: "#f472b6",
      title: "Your Four Stats",
      body: "Health, Energy, Happiness, and Smarts degrade over time. Low health can kill you. Low happiness tanks productivity. Manage them via Wellness.",
      tip: "Burnout is real — don't ignore the Stress and Burnout meters in the Wellness tab.",
      target: "#bar-health",
      action: () => app.activateView("wellness"),
      actionLabel: "Open Wellness →",
    },
    {
      icon: "fa-chart-line",
      color: "#fbbf24",
      title: "Invest in the Market",
      body: "The stock market grows your cash passively — but it's volatile. Start small with index funds (SPY/QQQ) before touching crypto or individual stocks.",
      tip: "Diversify across categories — never put all cash into one asset.",
      target: '[data-view="market"], .nav-item[onclick*="market"]',
      action: () => app.activateView("market"),
      actionLabel: "Open Market →",
    },
    {
      icon: "fa-triangle-exclamation",
      color: "#f87171",
      title: "Watch Your Risk",
      body: "The Risk % in the top bar is your death clock. It climbs with debt, crime, poor health, and bad decisions. Above 80% you can die any month.",
      tip: "The Cashout button locks in your net worth and ends the run safely. Use it before risk kills you.",
      target: "#risk-pct",
      action: null,
    },
    {
      icon: "fa-building",
      color: "#818cf8",
      title: "Launch a Business",
      body: "Startups unlock exponential income — but burn cash fast. Only launch when you have at least $10k buffer and a stable job income behind you.",
      tip: "Hire carefully. Every employee costs monthly salary. Over-hiring early is a run-killer.",
      target: '[data-view="business"], .nav-item[onclick*="business"]',
      action: () => app.activateView("business"),
      actionLabel: "Open Business →",
    },
    {
      icon: "fa-landmark",
      color: "#34d399",
      title: "Build Passive Wealth",
      body: "Real estate, bonds, franchises, and dividend funds generate income every month — even while you sleep. This is where real wealth compounds.",
      tip: "Passive income covering your expenses = financial independence. That's the real win state.",
      target: '[data-view="wealth"], .nav-item[onclick*="wealth"]',
      action: () => app.activateView("wealth"),
      actionLabel: "Open Wealth →",
    },
    {
      icon: "fa-skull",
      color: "#f87171",
      title: "Crime Doesn't Pay... Much",
      body: "Crime earns fast money but spikes Heat and Legal Risk. Too many offenses and you get arrested, lose assets, or die. It's a high-risk, late-game tool — not a strategy.",
      tip: "Never commit crimes when your Risk % is above 50. One bad roll can end your run.",
      target: '[data-view="crime"], .nav-item[onclick*="crime"]',
      action: null,
    },
    {
      icon: "fa-graduation-cap",
      color: "#a78bfa",
      title: "You're Ready",
      body: "Tutorial complete. There's no hand-holding from here. Build wealth, survive risk, and get out before greed kills you. Good luck.",
      tip: null,
      target: null,
      action: null,
      isLast: true,
    },
  ];

  let _current = -1;
  let _ringTimeout = null;

  function _panel() {
    return document.getElementById("tut-panel");
  }
  function _ring() {
    return document.getElementById("tut-ring");
  }
  function _seen() {
    const o =
      typeof game !== "undefined" && game.state ? game.state.onboarding : null;
    return o ? o.seenSteps : [];
  }

  function _posRing(selector) {
    const r = _ring();
    if (!r) return;
    if (!selector) {
      r.style.display = "none";
      return;
    }
    // Try mobile tab first, then desktop nav
    const selectors = selector.split(",").map((s) => s.trim());
    let el = null;
    for (const s of selectors) {
      el = document.querySelector(s);
      if (el) break;
    }
    if (!el) {
      r.style.display = "none";
      return;
    }
    const rect = el.getBoundingClientRect();
    const pad = 6;
    r.style.display = "block";
    r.style.top = rect.top - pad + "px";
    r.style.left = rect.left - pad + "px";
    r.style.width = rect.width + pad * 2 + "px";
    r.style.height = rect.height + pad * 2 + "px";
    r.style.borderRadius =
      parseInt(getComputedStyle(el).borderRadius) + pad + "px";
    // Pulse in
    r.classList.remove("tut-ring-in");
    void r.offsetWidth; // reflow
    r.classList.add("tut-ring-in");
  }

  function _buildDots(total, current) {
    const c = document.getElementById("tut-dots");
    if (!c) return;
    c.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const d = document.createElement("div");
      d.className =
        "tut-dot" +
        (i < current ? " tut-dot-done" : "") +
        (i === current ? " tut-dot-active" : "");
      c.appendChild(d);
    }
  }

  function show(idx) {
    const o =
      typeof game !== "undefined" && game.state ? game.state.onboarding : null;
    if (o && (o.skipped || o.completed)) return;
    if (o && o.seenSteps.includes(idx)) return;
    if (o) {
      o.seenSteps.push(idx);
      o.step = idx;
    }

    _current = idx;
    const step = STEPS[idx];
    if (!step) return;

    const total = STEPS.length;
    const p = _panel();
    if (!p) return;

    // Content
    const iconEl = document.getElementById("tut-icon");
    const wrapEl = document.getElementById("tut-icon-wrap");
    const titleEl = document.getElementById("tut-title");
    const descEl = document.getElementById("tut-desc");
    const metaEl = document.getElementById("tut-step-label");
    const tipBox = document.getElementById("tut-tip-box");
    const tipText = document.getElementById("tut-tip-text");
    const nextLbl = document.getElementById("tut-next-label");
    const nextIco = document.getElementById("tut-next-icon");
    const fillEl = document.getElementById("tut-progress-fill");

    if (iconEl) {
      iconEl.className = "fa-solid " + step.icon;
    }
    if (wrapEl) {
      wrapEl.style.background = step.color + "22";
      wrapEl.style.borderColor = step.color + "44";
      wrapEl.querySelector("i").style.color = step.color;
    }
    if (titleEl) titleEl.textContent = step.title;
    if (descEl) descEl.textContent = step.body;
    if (metaEl) metaEl.textContent = "Step " + (idx + 1) + " of " + total;
    if (fillEl)
      fillEl.style.width = (((idx + 1) / total) * 100).toFixed(1) + "%";
    if (fillEl) fillEl.style.background = step.color;

    if (tipBox && tipText) {
      if (step.tip) {
        tipBox.style.display = "flex";
        tipText.textContent = step.tip;
      } else {
        tipBox.style.display = "none";
      }
    }

    if (step.isLast) {
      if (nextLbl) nextLbl.textContent = "Finish";
      if (nextIco) nextIco.className = "fa-solid fa-check";
    } else if (step.action && step.actionLabel) {
      if (nextLbl) nextLbl.textContent = step.actionLabel.replace(" →", "");
      if (nextIco) nextIco.className = "fa-solid fa-arrow-right";
    } else {
      if (nextLbl) nextLbl.textContent = "Got It";
      if (nextIco) nextIco.className = "fa-solid fa-arrow-right";
    }
    // Colour the next button
    const nextBtn = document.getElementById("tut-next-btn");
    if (nextBtn) nextBtn.style.background = step.color;

    _buildDots(total, idx);

    // Spotlight
    clearTimeout(_ringTimeout);
    if (step.target) {
      _ringTimeout = setTimeout(() => _posRing(step.target), 250);
    } else {
      _posRing(null);
    }

    // Show panel
    p.classList.remove("tut-panel-hidden");
    p.classList.add("tut-panel-in");
  }

  function next() {
    const step = STEPS[_current];
    if (step && step.isLast) {
      _finish();
      return;
    }

    // Run step action (e.g. navigate to a view)
    if (step && typeof step.action === "function") step.action();

    const nextIdx = _current + 1;
    if (nextIdx >= STEPS.length) {
      _finish();
      return;
    }

    // Swap content without hiding, then re-show
    const p = _panel();
    if (p) p.classList.add("tut-swap");
    setTimeout(() => {
      if (p) p.classList.remove("tut-swap");
      show(nextIdx);
    }, 160);
  }

  function skip() {
    const o =
      typeof game !== "undefined" && game.state ? game.state.onboarding : null;
    if (o) {
      o.skipped = true;
      o.active = false;
    }
    _hide();
    app.toast("Tutorial skipped. You're on your own.", "info");
  }

  function complete() {
    _finish();
  }

  function reset() {
    _current = -1;
    _hide();
  }

  function _finish() {
    const o =
      typeof game !== "undefined" && game.state ? game.state.onboarding : null;
    if (o) {
      o.completed = true;
      o.active = false;
    }
    _hide();
    app.toast("Tutorial complete — good luck out there.", "success");
  }

  function _hide() {
    const p = _panel();
    if (p) {
      p.classList.remove("tut-panel-in");
      p.classList.add("tut-panel-hidden");
    }
    _posRing(null);
  }

  // Reposition spotlight on resize
  window.addEventListener("resize", () => {
    if (_current >= 0 && STEPS[_current] && STEPS[_current].target) {
      _posRing(STEPS[_current].target);
    }
  });

  return { show, next, skip, complete, reset };
})();

window.onload = function () {
  titleScreen.init();
  SFX._init();
};

/* ═══════════════════════════════════════════════════════════════════
   GREEDIGO ADDICTION ENGINE v2
   Monthly Challenges · Prestige · Rival · Flash Events · New Events
   ═══════════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────────
   CHALLENGE POOL  (30 mission templates for monthly quests)
   ───────────────────────────────────────────────────────────────── */
const CHALLENGE_POOL = [
  {
    id: "c_survive",
    e: "🌟",
    title: "Still Standing",
    desc: "Survive the month alive & free",
    reward: 400,
    leg: 2,
    check: (s, g) => !g.state.life.dead && !g.state.jail,
  },
  {
    id: "c_employed",
    e: "💼",
    title: "Working Stiff",
    desc: "Be employed this month",
    reward: 550,
    leg: 3,
    check: (s, g) => !!g.state.job,
  },
  {
    id: "c_happy",
    e: "😁",
    title: "High on Life",
    desc: "Keep happiness above 65",
    reward: 650,
    leg: 4,
    check: (s, g) => g.state.stats.happiness >= 65,
  },
  {
    id: "c_healthy",
    e: "💪",
    title: "Iron Body",
    desc: "Keep health above 70",
    reward: 700,
    leg: 4,
    check: (s, g) => g.state.stats.health >= 70,
  },
  {
    id: "c_nodbt",
    e: "✅",
    title: "Clean Slate",
    desc: "Carry no debt this month",
    reward: 900,
    leg: 5,
    check: (s, g) =>
      (g.state.bank?.loans?.length || 0) === 0 &&
      (g.state.bank?.creditCard?.balance || 0) < 100 &&
      (g.state.edu?.loans || 0) < 100,
  },
  {
    id: "c_relation",
    e: "❤️",
    title: "Heart Full",
    desc: "Be in a relationship",
    reward: 700,
    leg: 5,
    check: (s, g) => g.state.relationship?.status !== "single",
  },
  {
    id: "c_crime1",
    e: "🎭",
    title: "Street Level",
    desc: "Commit at least 1 crime",
    reward: 950,
    leg: 5,
    check: (s, g) => g.state.runStats.crimeActions - s.crimeActions >= 1,
  },
  {
    id: "c_trade2",
    e: "📈",
    title: "Wall St. Move",
    desc: "Execute 2+ market trades",
    reward: 1200,
    leg: 7,
    check: (s, g) => g.state.runStats.marketTrades - s.marketTrades >= 2,
  },
  {
    id: "c_crypto",
    e: "₿",
    title: "Crypto Curious",
    desc: "Own any BTC or ETH",
    reward: 1500,
    leg: 8,
    check: (s, g) =>
      (g.state.assets.btc?.owned || 0) > 0 ||
      (g.state.assets.eth?.owned || 0) > 0,
  },
  {
    id: "c_perform",
    e: "⭐",
    title: "Star Performer",
    desc: "Job performance above 80%",
    reward: 1400,
    leg: 8,
    check: (s, g) => (g.state.job?.performance || 0) >= 80,
  },
  {
    id: "c_startup",
    e: "🚀",
    title: "Builder Mode",
    desc: "Have an active startup running",
    reward: 1000,
    leg: 6,
    check: (s, g) => (g.state.startups?.length || 0) > 0,
  },
  {
    id: "c_hustle2",
    e: "⚡",
    title: "Side Grind",
    desc: "Complete 2+ hustle gigs",
    reward: 1100,
    leg: 6,
    check: (s, g) => g.state.runStats.hustleActions - s.hustleActions >= 2,
  },
  {
    id: "c_greenday",
    e: "🟢",
    title: "Green Day",
    desc: "End the month with higher net worth",
    reward: 1800,
    leg: 9,
    check: (s, g) => g.getNetWorth() > s.netWorth,
  },
  {
    id: "c_politician",
    e: "🏛️",
    title: "The Politician",
    desc: "Hold a political office",
    reward: 1500,
    leg: 9,
    check: (s, g) => !!g.state.politics?.role,
  },
  {
    id: "c_cash5k",
    e: "💸",
    title: "Cash Flow",
    desc: "Earn $5,000+ more cash than you started",
    reward: 1800,
    leg: 10,
    check: (s, g) => g.state.cash - s.cash >= 5000,
  },
  {
    id: "c_vital",
    e: "✨",
    title: "Peak Form",
    desc: "Health AND happiness both above 70",
    reward: 1600,
    leg: 10,
    check: (s, g) =>
      g.state.stats.health >= 70 && g.state.stats.happiness >= 70,
  },
  {
    id: "c_networth",
    e: "💰",
    title: "Stack Paper",
    desc: "Net worth above $50,000",
    reward: 1200,
    leg: 7,
    check: (s, g) => g.getNetWorth() >= 50000,
  },
  {
    id: "c_property",
    e: "🏠",
    title: "Landlord Life",
    desc: "Own at least 1 rental property",
    reward: 2000,
    leg: 12,
    check: (s, g) =>
      Object.values(g.state.wealth?.properties || {}).reduce(
        (a, b) => a + b,
        0,
      ) >= 1,
  },
  {
    id: "c_crime3",
    e: "💀",
    title: "Triple Threat",
    desc: "Commit 3+ crimes this month",
    reward: 2800,
    leg: 14,
    check: (s, g) => g.state.runStats.crimeActions - s.crimeActions >= 3,
  },
  {
    id: "c_trade4",
    e: "🐂",
    title: "Bull Session",
    desc: "Execute 4+ market trades",
    reward: 2800,
    leg: 14,
    check: (s, g) => g.state.runStats.marketTrades - s.marketTrades >= 4,
  },
  {
    id: "c_hustle4",
    e: "🔥",
    title: "Hustle King",
    desc: "Complete 4+ hustle gigs",
    reward: 2600,
    leg: 14,
    check: (s, g) => g.state.runStats.hustleActions - s.hustleActions >= 4,
  },
  {
    id: "c_streak15",
    e: "🔥",
    title: "On Fire",
    desc: "Maintain action streak of 15+",
    reward: 2000,
    leg: 11,
    check: (s, g) => (g.state.gameplay?.actionStreak || 0) >= 15,
  },
  {
    id: "c_diversify",
    e: "🎯",
    title: "Spread the Risk",
    desc: "Hold 3+ different asset types",
    reward: 2200,
    leg: 12,
    check: (s, g) => {
      const t = new Set(
        CONFIG.ASSETS.filter((a) => (g.state.assets[a.id]?.owned || 0) > 0).map(
          (a) => a.type,
        ),
      );
      return t.size >= 3;
    },
  },
  {
    id: "c_nw100k",
    e: "💎",
    title: "Six Figures",
    desc: "Net worth above $100,000",
    reward: 3000,
    leg: 16,
    check: (s, g) => g.getNetWorth() >= 100000,
  },
  {
    id: "c_moonshot",
    e: "🌙",
    title: "Moonshot Month",
    desc: "Net worth up 5%+ this month",
    reward: 4000,
    leg: 18,
    check: (s, g) => s.netWorth > 1000 && g.getNetWorth() >= s.netWorth * 1.05,
  },
  {
    id: "c_crime5",
    e: "👑",
    title: "Untouchable",
    desc: "Commit 5+ crimes this month",
    reward: 5500,
    leg: 22,
    check: (s, g) => g.state.runStats.crimeActions - s.crimeActions >= 5,
  },
  {
    id: "c_recovery",
    e: "🏥",
    title: "Comeback Kid",
    desc: "Start below 40 health, end above 60",
    reward: 2200,
    leg: 12,
    check: (s, g) => s.health < 40 && g.state.stats.health >= 60,
  },
  {
    id: "c_combo",
    e: "🌪️",
    title: "Full Send",
    desc: "Crime + hustle + trade in same month",
    reward: 3800,
    leg: 20,
    check: (s, g) =>
      g.state.runStats.crimeActions - s.crimeActions >= 1 &&
      g.state.runStats.hustleActions - s.hustleActions >= 1 &&
      g.state.runStats.marketTrades - s.marketTrades >= 1,
  },
  {
    id: "c_actions5",
    e: "💥",
    title: "Blitz Month",
    desc: "Take 5+ tracked actions this month",
    reward: 2500,
    leg: 14,
    check: (s, g) =>
      g.state.runStats.crimeActions -
        s.crimeActions +
        (g.state.runStats.marketTrades - s.marketTrades) +
        (g.state.runStats.hustleActions - s.hustleActions) >=
      5,
  },
  {
    id: "c_kingmaker",
    e: "🗳️",
    title: "Kingmaker",
    desc: "Political influence above 50",
    reward: 2800,
    leg: 15,
    check: (s, g) => (g.state.politics?.influence || 0) >= 50,
  },
];

/* ─────────────────────────────────────────────────────────────────
   FLASH OPPORTUNITY EVENTS (fire 6% monthly — urgent choices)
   ───────────────────────────────────────────────────────────────── */
const FLASH_EVENTS = [
  {
    e: "💡",
    title: "Inside Intelligence",
    desc: 'A well-connected friend drops a hot stock tip. "Buy TSLA before Friday — trust me." Could be illegal. Could be gold.',
    yes: "I'm in",
    no: "Pass",
    onYes(g) {
      const gain =
        Math.random() < 0.65 ? g.state.cash * 0.18 : -(g.state.cash * 0.08);
      g.modCash(gain);
      app.toast(
        gain > 0
          ? `Tip paid off! +$${shortNumber(Math.round(gain))}`
          : "Tip was wrong. Market moved against you.",
        gain > 0 ? "epic" : "error",
      );
    },
  },
  {
    e: "🏚️",
    title: "Distressed Property Deal",
    desc: "A motivated seller is offloading a duplex at 40% below market. Cash only. Offer expires this month.",
    yes: "Buy it ($57,000)",
    no: "Let it go",
    gateFn(g) {
      return g.state.cash >= 57000;
    },
    gateMsg: "You need at least $57,000 in cash.",
    onYes(g) {
      g.modCash(-57000);
      g.state.wealth.properties = g.state.wealth.properties || {};
      g.state.wealth.properties["flash_duplex"] =
        (g.state.wealth.properties["flash_duplex"] || 0) + 1;
      g.modStat("happiness", 8);
      app.toast("Duplex acquired at 40% discount!", "success");
    },
  },
  {
    e: "🧠",
    title: "Private Mentorship Session",
    desc: "A renowned entrepreneur offers you 3 hours of private coaching. Life-altering wisdom — if you can afford the time.",
    yes: "Make time",
    no: "Too busy",
    onYes(g) {
      g.modStat("smarts", 12);
      g.modStat("energy", -20);
      g.modCash(-500);
      g.registerAction(3);
      app.toast("Mentorship unlocked: +12 Smarts", "success");
    },
  },
  {
    e: "💊",
    title: "Underground Performance Stack",
    desc: 'A shady vendor offers "focus supplements" — no prescription, questionable legality. Huge productivity boost, risky side effects.',
    yes: "Take the stack",
    no: "Hard pass",
    onYes(g) {
      if (Math.random() < 0.65) {
        g.modStat("smarts", 10);
        g.modStat("energy", 30);
        app.toast("Absolute clarity. +10 Smarts, +30 Energy", "success");
      } else {
        g.modStat("health", -18);
        app.toast("Nasty side effects. -18 Health", "error");
      }
    },
  },
  {
    e: "🎁",
    title: "Anonymous Wire Transfer",
    desc: "$8,200 arrives in your account from an unknown sender. No explanation. You could return it — or keep it.",
    yes: "Keep it",
    no: "Return it (you won't)",
    onYes(g) {
      g.modCash(8200);
      g.state.life.legalRecord += 0.3;
      app.toast("$8,200 kept. Legal record: +0.3", "warning");
    },
    onNo(g) {
      app.toast("You returned the mystery money. Solid citizen.", "info");
      g.modStat("happiness", 5);
    },
  },
  {
    e: "📦",
    title: "Black Market Hardware",
    desc: "Someone's selling premium tech gear at 80% off — clearly stolen. Risky to buy, but the savings are insane.",
    yes: "Buy the haul ($400)",
    no: "Not worth it",
    gateFn(g) {
      return g.state.cash >= 400;
    },
    gateMsg: "Need $400.",
    onYes(g) {
      g.modCash(-400);
      if (Math.random() < 0.7) {
        g.modStat("smarts", 6);
        g.modCash(1800);
        app.toast("Flipped stolen gear for a $1,400 profit", "success");
      } else {
        g.modStat("health", -5);
        app.toast("Stakeout. You barely got away.", "error");
      }
    },
  },
  {
    e: "🗺️",
    title: "Treasure Map — Crypto Cold Wallet",
    desc: "You find a note with 12 seed words. It could be a real Bitcoin wallet — or a trap. No way to know without trying.",
    yes: "Try the seed",
    no: "Leave it",
    onYes(g) {
      const roll = Math.random();
      if (roll < 0.12) {
        const loot = 15000 + Math.random() * 50000;
        g.modCash(loot);
        app.toast(
          `JACKPOT! Lost wallet with $${shortNumber(Math.round(loot))}`,
          "epic",
        );
        FX.confetti();
      } else if (roll < 0.55) {
        app.toast("Empty. Either drained or fake.", "info");
      } else {
        g.modStat("health", -5);
        g.state.life.legalRecord += 0.2;
        app.toast(
          "It was a phishing trap. Health & legal record hit.",
          "error",
        );
      }
    },
  },
  {
    e: "💼",
    title: "Headhunter Offer",
    desc: "A corporate headhunter calls with an off-the-books offer: skip the interview process and start immediately at +30% salary — but it means leaving your current role.",
    yes: "Take the offer",
    no: "Stay put",
    gateFn(g) {
      return !!g.state.job;
    },
    gateMsg: "You need to be employed.",
    onYes(g) {
      const boost = Math.round((g.state.job?.salary || 40000) * 0.28);
      g.state.job && (g.state.job.salary += boost);
      g.modStat("happiness", 6);
      app.toast(
        `New salary: +$${shortNumber(boost)}/yr — no interview needed`,
        "success",
      );
    },
  },
  {
    e: "🎰",
    title: "Private High-Stakes Game",
    desc: "An invitation-only poker game. Buy-in is $3,000. High-rollers only. Winner takes the table.",
    yes: "Buy in ($3,000)",
    no: "Fold before you start",
    gateFn(g) {
      return g.state.cash >= 3000;
    },
    gateMsg: "Need $3,000 to enter.",
    onYes(g) {
      g.modCash(-3000);
      const pot = 3000 * (3 + Math.floor(Math.random() * 5));
      if (Math.random() < 0.35) {
        g.modCash(pot);
        app.toast(`You swept the table! +$${shortNumber(pot)}`, "epic");
        FX.screenFlash("gain");
      } else {
        app.toast("Busted out. The house always wins — eventually.", "error");
      }
    },
  },
  {
    e: "🦈",
    title: "Predatory Loan Shark",
    desc: "A loan shark offers $20,000 cash — right now, no questions. But miss a payment and things get... physical.",
    yes: "Take the money",
    no: "No thanks",
    onYes(g) {
      g.modCash(20000);
      g.state.bank.loans = g.state.bank.loans || [];
      g.state.bank.loans.push({
        id: "shark_loan",
        name: "Loan Shark Debt",
        principal: 28000,
        monthlyPayment: 1800,
        monthsLeft: 18,
        apr: 0.38,
      });
      g.state.life.riskDebt += 15;
      app.toast("$20k cash, but $28k owed at 38% APR", "warning");
    },
  },
  {
    e: "📰",
    title: "Viral Controversy",
    desc: "A post you made years ago is circulating. You can pay a reputation firm $5,000 to bury it — or ride it out.",
    yes: "Pay the firm ($5,000)",
    no: "Ride it out",
    gateFn(g) {
      return g.state.cash >= 5000;
    },
    gateMsg: "Need $5,000.",
    onYes(g) {
      g.modCash(-5000);
      g.modStat("happiness", 12);
      app.toast("Crisis managed. Your image is clean.", "success");
    },
    onNo(g) {
      const hit = Math.random();
      if (hit < 0.4) {
        g.modStat("happiness", -15);
        if (g.state.job)
          g.state.job.performance = Math.max(
            0,
            (g.state.job.performance || 0) - 20,
          );
        app.toast(
          "Backlash costs you. -15 Happiness, job performance hit",
          "error",
        );
      } else {
        app.toast("Drama faded. People forgot in a week.", "info");
      }
    },
  },
  {
    e: "🌍",
    title: "Offshore Banking Tip",
    desc: "An accountant whispers about a loophole: move $10k offshore and skip $3,400 in taxes — legally gray, but effective.",
    yes: "Do it ($10,000)",
    no: "Play it straight",
    gateFn(g) {
      return g.state.cash >= 10000;
    },
    gateMsg: "Need $10,000.",
    onYes(g) {
      g.modCash(-10000 + 3400);
      g.state.life.legalRecord += 0.15;
      app.toast("Tax savings claimed: +$3,400. Legal record: +0.15", "warning");
    },
  },
];

/* ─────────────────────────────────────────────────────────────────
   30 NEW LIFE EVENTS  (pushed to existing pool)
   ───────────────────────────────────────────────────────────────── */
LIFE_EVENTS.push(
  {
    emoji: "🎤",
    title: "Viral Moment",
    desc: "A video of you goes viral. Followers, offers, and chaos follow.",
    type: "epic",
    effect(g) {
      g.modCash(2200 + Math.random() * 4800);
      g.modStat("happiness", 14);
      g.state.crime &&
        (g.state.crime.heat = Math.min(100, (g.state.crime.heat || 0) + 8));
    },
  },
  {
    emoji: "🧬",
    title: "Health Scare",
    desc: "A doctor finds a concerning result. You recover, but it shakes you.",
    type: "error",
    effect(g) {
      g.modStat("health", -12);
      g.modStat("happiness", -10);
      g.modCash(-(1500 + Math.random() * 3000));
    },
  },
  {
    emoji: "📉",
    title: "Market Panic",
    desc: "A sudden crash wipes 20% off all market positions.",
    type: "error",
    effect(g) {
      CONFIG.ASSETS.forEach((a) => {
        const pos = g.state.assets[a.id];
        if (pos && pos.avgPrice) pos.avgPrice *= 0.8;
      });
      g.modStat("happiness", -8);
    },
  },
  {
    emoji: "📊",
    title: "Market Boom",
    desc: "A surprise rate cut sends markets surging 15%.",
    type: "epic",
    effect(g) {
      CONFIG.ASSETS.forEach((a) => {
        const pos = g.state.assets[a.id];
        if (pos && pos.avgPrice && (pos.owned || 0) > 0) {
          const v = (pos.owned || 0) * pos.avgPrice * 0.15;
          g.modCash(v > 0 ? v : 0);
        }
      });
      g.modStat("happiness", 8);
    },
  },
  {
    emoji: "🏋️",
    title: "Fitness Kick",
    desc: "You get obsessed with working out. Health surges.",
    type: "success",
    effect(g) {
      g.modStat("health", 14);
      g.modStat("energy", 15);
      g.modCash(-300);
    },
  },
  {
    emoji: "🔑",
    title: "Unexpected Inheritance",
    desc: "A distant aunt left you more than expected.",
    type: "epic",
    effect(g) {
      const amt = 8000 + Math.random() * 22000;
      g.modCash(amt);
      g.modStat("happiness", 7);
      app.toast(`Inheritance: +$${shortNumber(Math.round(amt))}`, "epic");
    },
  },
  {
    emoji: "🚓",
    title: "Police Shake Down",
    desc: "Cops roust you on suspicion. You're clean — but it costs time and dignity.",
    type: "warning",
    effect(g) {
      g.modStat("happiness", -8);
      g.modStat("energy", -15);
      if (g.state.crime?.heat > 20)
        g.state.crime.heat = Math.max(0, g.state.crime.heat - 10);
    },
  },
  {
    emoji: "💊",
    title: "Chronic Burnout",
    desc: "Months of overwork hit all at once. You crash hard.",
    type: "error",
    effect(g) {
      g.modStat("health", -10);
      g.modStat("energy", -40);
      g.modStat("happiness", -12);
      g.state.life.burnout = Math.min(100, (g.state.life.burnout || 0) + 15);
    },
  },
  {
    emoji: "🌅",
    title: "Clarity Retreat",
    desc: "A weekend alone in nature resets your mind.",
    type: "success",
    effect(g) {
      g.modStat("happiness", 18);
      g.modStat("health", 6);
      g.state.life.chronicStress = Math.max(
        0,
        (g.state.life.chronicStress || 0) - 12,
      );
      g.modCash(-600);
    },
  },
  {
    emoji: "🎓",
    title: "Skill Certification",
    desc: "You completed an online course and earned a certificate.",
    type: "success",
    effect(g) {
      g.modStat("smarts", 8);
      g.modCash(-400);
      g.modStat("happiness", 5);
    },
  },
  {
    emoji: "💬",
    title: "Mentor Meeting",
    desc: "An industry legend gave you their time. Priceless wisdom.",
    type: "epic",
    effect(g) {
      g.modStat("smarts", 10);
      g.modStat("happiness", 10);
      g.registerAction(2);
    },
  },
  {
    emoji: "🍕",
    title: "Food Poisoning",
    desc: "Bad meal from a sketchy restaurant. You're down for a week.",
    type: "error",
    effect(g) {
      g.modStat("health", -9);
      g.modStat("energy", -30);
      g.modStat("happiness", -6);
    },
  },
  {
    emoji: "🎮",
    title: "Gaming Binge",
    desc: "You lost a weekend to a game. You regret nothing.",
    type: "info",
    effect(g) {
      g.modStat("happiness", 12);
      g.modStat("energy", -20);
      g.modStat("health", -3);
    },
  },
  {
    emoji: "🌊",
    title: "Vacation Surprise",
    desc: "A last-minute trip turned into the best weekend of your life.",
    type: "success",
    effect(g) {
      g.modCash(-(800 + Math.random() * 1200));
      g.modStat("happiness", 20);
      g.modStat("health", 8);
    },
  },
  {
    emoji: "🔓",
    title: "Account Hacked",
    desc: "Someone drained your checking account while you slept.",
    type: "error",
    effect(g) {
      const loss = Math.min(g.state.cash * 0.15, 3500);
      g.modCash(-loss);
      g.modStat("happiness", -12);
    },
  },
  {
    emoji: "🏆",
    title: "Community Award",
    desc: "You were recognized by the local chamber of commerce.",
    type: "success",
    effect(g) {
      g.modStat("happiness", 12);
      g.state.crime &&
        (g.state.crime.heat = Math.max(0, (g.state.crime.heat || 0) - 6));
      g.modCash(1000);
    },
  },
  {
    emoji: "🌡️",
    title: "Heatwave",
    desc: "An extreme heat event disrupts your routine.",
    type: "warning",
    effect(g) {
      g.modStat("health", -5);
      g.modStat("energy", -20);
      g.modCash(-400);
    },
  },
  {
    emoji: "📬",
    title: "Old Friend Returns",
    desc: "A long-lost contact resurfaces with a business opportunity.",
    type: "success",
    effect(g) {
      g.modCash(1500 + Math.random() * 3000);
      g.modStat("happiness", 9);
      g.registerAction(1);
    },
  },
  {
    emoji: "🎪",
    title: "Festival Frenzy",
    desc: "You splurged on VIP festival tickets. Worth every penny.",
    type: "info",
    effect(g) {
      g.modCash(-1200);
      g.modStat("happiness", 16);
    },
  },
  {
    emoji: "🚨",
    title: "Neighborhood Crime",
    desc: "A break-in near your place puts everyone on edge.",
    type: "error",
    effect(g) {
      g.modCash(-600);
      g.modStat("happiness", -8);
    },
  },
  {
    emoji: "💌",
    title: "Love Letter",
    desc: "Someone left a note under your door. You smile for days.",
    type: "success",
    effect(g) {
      g.modStat("happiness", 14);
    },
  },
  {
    emoji: "🛢️",
    title: "Gas Price Spike",
    desc: "Fuel costs went through the roof this month.",
    type: "warning",
    effect(g) {
      g.modCash(-(200 + Math.random() * 300));
      g.modStat("happiness", -4);
    },
  },
  {
    emoji: "🦺",
    title: "Side Job Surprise",
    desc: "An unexpected gig paid double what you expected.",
    type: "success",
    effect(g) {
      const bonus = 1800 + Math.random() * 2800;
      g.modCash(bonus);
      g.registerAction(2);
    },
  },
  {
    emoji: "🎯",
    title: "Lucky Bet",
    desc: "You made a small wager on something ridiculous — and won.",
    type: "epic",
    effect(g) {
      g.modCash(3500 + Math.random() * 6500);
      g.modStat("happiness", 10);
    },
  },
  {
    emoji: "🌀",
    title: "Identity Crisis",
    desc: "You question everything. Productivity tanks, clarity surfaces.",
    type: "warning",
    effect(g) {
      g.modStat("happiness", -10);
      g.modStat("smarts", 6);
      g.state.life.greed = Math.max(0, (g.state.life.greed || 0) - 5);
    },
  },
  {
    emoji: "🤝",
    title: "Networking Event",
    desc: "A black-tie event led to three new contacts and two leads.",
    type: "success",
    effect(g) {
      g.modCash(-500);
      g.modStat("smarts", 4);
      g.modStat("happiness", 6);
      if (g.state.job)
        g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 8,
        );
    },
  },
  {
    emoji: "🎲",
    title: "Vegas Night",
    desc: "You caught a last-minute flight to Vegas. No regrets.",
    type: "info",
    effect(g) {
      const win = Math.random() < 0.45;
      g.modCash(win ? Math.random() * 3000 : -Math.random() * 2500);
      g.modStat("happiness", win ? 12 : -5);
    },
  },
  {
    emoji: "🧩",
    title: "Puzzle Solved",
    desc: "You cracked a problem you've been stuck on for months.",
    type: "success",
    effect(g) {
      g.modStat("smarts", 8);
      g.modStat("happiness", 8);
      g.registerAction(2);
    },
  },
  {
    emoji: "🩺",
    title: "Free Health Screening",
    desc: "A community clinic screened you — caught an early issue.",
    type: "info",
    effect(g) {
      g.modStat("health", 7);
      g.modStat("happiness", 5);
    },
  },
  {
    emoji: "🌋",
    title: "Financial Volcano",
    desc: "Every expense hit at once. Bills, rent hike, and a surprise deduction.",
    type: "error",
    effect(g) {
      g.modCash(-(2200 + Math.random() * 3500));
      g.modStat("happiness", -10);
    },
  },
);

/* ─────────────────────────────────────────────────────────────────
   CHOICE-BASED LIFE EVENTS  (modal with 2 options)
   ───────────────────────────────────────────────────────────────── */
const CHOICE_EVENTS = [
  {
    emoji: "📰",
    title: "Whistleblower Opportunity",
    desc: "You discovered financial fraud at work. You could report it to regulators (risky, but a potential reward) or stay quiet and protect your career.",
    optA: "Report it",
    optB: "Stay quiet",
    fxA(g) {
      if (Math.random() < 0.5) {
        g.modCash(15000 + Math.random() * 20000);
        g.modStat("happiness", 15);
        app.toast("Whistleblower reward: major payout!", "epic");
        FX.confetti();
      } else {
        g.state.job && (g.state.job.performance = 0);
        app.toast("Reported — but it backfired. You were pushed out.", "error");
      }
    },
    fxB(g) {
      g.modStat("happiness", -8);
      g.state.life.greed = (g.state.life.greed || 0) + 3;
      app.toast("You looked the other way. Greed index +3.", "warning");
    },
  },
  {
    emoji: "🤑",
    title: "Startup Buyout Offer",
    desc: "A corpo just offered to buy your startup for a flat $250,000. It's below market, but it's guaranteed money. Accept or hold out for more?",
    optA: "Take the $250k",
    optB: "Hold out",
    gateFn(g) {
      return (g.state.startups?.length || 0) > 0;
    },
    fxA(g) {
      g.state.startups = g.state.startups || [];
      if (g.state.startups.length > 0) {
        g.state.startups.shift();
        g.modCash(250000);
        app.toast("Startup sold for $250,000!", "epic");
        FX.confetti();
      }
    },
    fxB(g) {
      if (Math.random() < 0.4) {
        setTimeout(
          () => app.toast("They withdrew the offer. Nothing.", "error"),
          200,
        );
      } else {
        app.toast("Smart hold. They might come back higher.", "success");
      }
    },
  },
  {
    emoji: "💼",
    title: "Corporate Spy Approach",
    desc: "A competitor wants you to leak your company's strategy. They're offering $30,000 in cash. Illegal, high risk.",
    optA: "Take the cash",
    optB: "Refuse",
    fxA(g) {
      if (Math.random() < 0.6) {
        g.modCash(30000);
        g.state.life.legalRecord = (g.state.life.legalRecord || 0) + 1.5;
        app.toast("$30k received, legal record spiked", "warning");
      } else {
        g.state.job && (g.state.job = null);
        g.state.life.legalRecord = (g.state.life.legalRecord || 0) + 3;
        app.toast("Caught. Fired and under investigation.", "error");
      }
    },
    fxB(g) {
      g.modStat("happiness", 5);
      app.toast("You refused. Your integrity is intact.", "success");
    },
  },
  {
    emoji: "🌍",
    title: "Life-Changing Relocation",
    desc: "A spectacular job offer just came in — from another country. 60% salary increase, but you'd leave everything behind.",
    optA: "Relocate",
    optB: "Stay home",
    fxA(g) {
      const boost = Math.round((g.state.job?.salary || 45000) * 0.6);
      g.state.job && (g.state.job.salary += boost);
      g.modStat("happiness", -6);
      g.modStat("smarts", 5);
      app.toast(`Relocated — salary +$${shortNumber(boost)}/yr`, "success");
    },
    fxB(g) {
      g.modStat("happiness", 6);
      app.toast("You stayed. Your roots run deep.", "info");
    },
  },
  {
    emoji: "🃏",
    title: "Double or Nothing",
    desc: "A broker calls: leverage your entire portfolio 2x for one month. If markets go up, you double gains. If down — you lose half.",
    optA: "Double down",
    optB: "Hold steady",
    fxA(g) {
      const nw = g.getNetWorth();
      if (Math.random() < 0.5) {
        g.modCash(nw * 0.25);
        app.toast(
          `Leveraged bet won! +$${shortNumber(Math.round(nw * 0.25))}`,
          "epic",
        );
        FX.confetti();
      } else {
        const loss = Math.min(g.state.cash, nw * 0.2);
        g.modCash(-loss);
        app.toast(
          `Leveraged bet lost. -$${shortNumber(Math.round(loss))}`,
          "error",
        );
      }
    },
    fxB(g) {
      app.toast("Patience prevails. Portfolio untouched.", "info");
    },
  },
  // ── NEW SOCIAL DRAMA EVENTS ────────────────────────────────────
  {
    emoji: "😤",
    title: "Coworker Insult",
    desc: "A coworker humiliates you in front of the whole office. Everyone is watching. How do you respond?",
    optA: "Insult back (public)",
    optB: "Report to HR",
    fxA(g) {
      g.modStat("happiness", 8);
      if (g.state.job)
        g.state.job.performance = Math.max(
          0,
          (g.state.job.performance || 50) - 15,
        );
      app.toast(
        "You clapped back. Everyone heard. Job performance took a hit.",
        "warning",
      );
    },
    fxB(g) {
      g.modStat("happiness", -5);
      if (Math.random() < 0.5) {
        g.modCash(3000);
        app.toast("HR sided with you. Settlement: +$3,000.", "success");
      } else {
        app.toast("HR did nothing. You're marked as difficult.", "error");
        if (g.state.job)
          g.state.job.performance = Math.max(
            0,
            (g.state.job.performance || 50) - 8,
          );
      }
    },
  },
  {
    emoji: "🕵️",
    title: "Partner's Secret",
    desc: "You find suspicious texts on your partner's phone. Are they cheating? Your gut says yes.",
    optA: "Confront them",
    optB: "Hire a PI ($800)",
    gateFn(g) {
      return g.state.relationship?.status !== "single";
    },
    fxA(g) {
      const cheating = Math.random() < 0.45;
      if (cheating) {
        g.modStat("happiness", -25);
        g.state.relationship.love = Math.max(
          0,
          (g.state.relationship.love || 50) - 30,
        );
        app.toast(
          "They confessed. Trust shattered. Relationship in crisis.",
          "error",
        );
        FX.screenShake("lg");
      } else {
        g.modStat("happiness", -8);
        g.state.relationship.trust = Math.max(
          0,
          (g.state.relationship.trust || 50) - 10,
        );
        app.toast(
          "They denied it. You feel guilty for accusing them.",
          "warning",
        );
      }
    },
    fxB(g) {
      if (g.state.cash < 800) {
        app.toast("Not enough cash.", "error");
        return;
      }
      g.modCash(-800);
      const cheating = Math.random() < 0.5;
      if (cheating) {
        g.modStat("happiness", -20);
        app.toast(
          "The PI confirms it. Evidence in hand. What you do next is your choice.",
          "error",
        );
      } else {
        g.modStat("happiness", 5);
        app.toast(
          "They're innocent. You feel relieved — and a little ashamed.",
          "info",
        );
      }
    },
  },
  {
    emoji: "🎟️",
    title: "Lottery Ticket!",
    desc: "You bought a scratch-off lottery ticket for $5. You feel lucky today.",
    optA: "Scratch it!",
    optB: "Save it for later",
    fxA(g) {
      const roll = Math.random();
      if (roll < 0.03) {
        const jackpot = 50000 + Math.floor(Math.random() * 150000);
        g.modCash(jackpot);
        app.toast(`JACKPOT! 🎉 You won $${jackpot.toLocaleString()}!`, "epic");
        FX.confetti();
        FX.screenShake("lg");
      } else if (roll < 0.15) {
        const win = 20 + Math.floor(Math.random() * 480);
        g.modCash(win);
        app.toast(`Small win! You got $${win} back.`, "success");
      } else {
        g.modCash(-5);
        app.toast("Nothing. The lottery is just a tax on hope.", "info");
      }
    },
    fxB(g) {
      app.toast("You put the ticket in a drawer. Maybe later.", "info");
    },
  },
  {
    emoji: "🐾",
    title: "Street Dog",
    desc: "You find an injured stray dog. It looks at you with big eyes. Vet will cost ~$650.",
    optA: "Take it to the vet",
    optB: "Walk away",
    fxA(g) {
      if (g.state.cash < 650) {
        app.toast("Not enough cash for vet bills.", "error");
        return;
      }
      g.modCash(-650);
      g.modStat("happiness", 18);
      if (!g.state.pets) g.state.pets = [];
      if (g.state.pets.length < 3) {
        g.state.pets.push({
          id: "dog_" + Date.now(),
          name: "Buddy",
          type: "dog",
          ageMonths: 24,
          maxAge: 180,
          happiness: 80,
        });
        app.toast("You saved Buddy! New dog adopted. +18 Happiness.", "epic");
        FX.confetti();
      } else {
        app.toast(
          "You paid for its vet bills and found it a good home. +18 Happiness.",
          "success",
        );
      }
    },
    fxB(g) {
      g.modStat("happiness", -6);
      app.toast("You kept walking. It haunts you a little.", "warning");
    },
  },
  {
    emoji: "🤝",
    title: "Friend Needs a Loan",
    desc: 'Your best friend calls, desperate. "I need $4,000 or I lose my apartment. You\'re the only one I can ask."',
    optA: "Lend the money",
    optB: "Can't help right now",
    gateFn(g) {
      return g.state.cash >= 4000;
    },
    fxA(g) {
      g.modCash(-4000);
      const repaid = Math.random() < 0.6;
      if (repaid) {
        setTimeout(() => {
          g.modCash(4000);
          app.toast(
            "Your friend paid you back! Friendship and money intact.",
            "success",
          );
        }, 3000);
        app.toast(
          "You lent $4,000. They say they'll pay back next month.",
          "info",
        );
      } else {
        app.toast(
          "You lent $4,000. They vanished. Some friendships have a price.",
          "error",
        );
      }
      g.modStat("happiness", 10);
    },
    fxB(g) {
      g.modStat("happiness", -8);
      app.toast("You said no. The friendship is strained.", "warning");
    },
  },
  {
    emoji: "📋",
    title: "Boss Wants Weekend Work",
    desc: '"I need you this weekend," your boss says. "Big project. Obviously you\'ll be compensated — eventually."',
    optA: "Agree to work",
    optB: "Refuse (personal time)",
    gateFn(g) {
      return !!g.state.job;
    },
    fxA(g) {
      g.modStat("happiness", -10);
      if (g.state.job)
        g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 15,
        );
      g.modCash(800);
      app.toast(
        "You worked the weekend. Performance up. +$800 bonus. But you're drained.",
        "warning",
      );
    },
    fxB(g) {
      g.modStat("happiness", 8);
      if (g.state.job)
        g.state.job.performance = Math.max(
          0,
          (g.state.job.performance || 50) - 5,
        );
      app.toast(
        "You refused. Your boss wasn't happy. But your weekend was yours.",
        "info",
      );
    },
  },
  {
    emoji: "👜",
    title: "Found Wallet",
    desc: "You found a wallet on the street with $340 cash and an ID card inside.",
    optA: "Keep the cash",
    optB: "Return it",
    fxA(g) {
      g.modCash(340);
      g.state.life.legalRecord = (g.state.life.legalRecord || 0) + 0.1;
      app.toast("You kept $340. Quick win. Legal record: tiny hit.", "warning");
    },
    fxB(g) {
      g.modStat("happiness", 12);
      if (Math.random() < 0.4) {
        g.modCash(200);
        app.toast("The owner rewarded you with $200! Karma is real.", "epic");
        FX.confetti();
      } else {
        app.toast(
          "You returned it. No reward, but you feel good about it.",
          "success",
        );
      }
    },
  },
  {
    emoji: "💊",
    title: "Suspicious Diagnosis",
    desc: "A doctor says you need an expensive procedure — but a second opinion might save $12,000.",
    optA: "Trust the doctor ($12,000)",
    optB: "Get a second opinion",
    gateFn(g) {
      return g.state.cash >= 12000;
    },
    fxA(g) {
      g.modCash(-12000);
      g.modStat("health", 20);
      app.toast("Procedure done. Health fully recovered: +20 HP.", "success");
    },
    fxB(g) {
      if (Math.random() < 0.55) {
        g.modCash(-3000);
        g.modStat("health", 15);
        app.toast(
          "Second opinion: minor treatment only. Saved $9,000!",
          "epic",
        );
        FX.confetti();
      } else {
        app.toast(
          "Second doctor agrees: you need the full procedure.",
          "warning",
        );
        g.modStat("health", -5);
      }
    },
  },
  {
    emoji: "🏎️",
    title: "Street Race Invitation",
    desc: "A stranger at a red light revs their engine and nods. It's a $500 bet — winner takes.",
    optA: "Accept the race ($500)",
    optB: "Drive away safely",
    gateFn(g) {
      return (
        g.state.cash >= 500 &&
        (g.state.inventory || []).some((i) =>
          ["civic", "tesla", "porsche"].includes(i),
        )
      );
    },
    fxA(g) {
      g.modCash(-500);
      if (Math.random() < 0.5) {
        g.modCash(1000);
        g.modStat("happiness", 14);
        app.toast("You won! +$1,000 and serious street cred.", "epic");
      } else {
        g.modStat("happiness", -5);
        g.modStat("health", -8);
        app.toast(
          "You lost — and nearly crashed. -$500 and a close call.",
          "error",
        );
        FX.screenShake("lg");
      }
    },
    fxB(g) {
      app.toast("You drove away. Some risks aren't worth taking.", "info");
    },
  },
  {
    emoji: "📱",
    title: "Viral Social Media Post",
    desc: "A post you wrote is going viral. Brands are sliding into your DMs with sponsorship offers.",
    optA: "Accept sponsorship ($3,000)",
    optB: "Keep it organic",
    fxA(g) {
      g.modCash(3000);
      g.modStat("happiness", 8);
      app.toast("$3,000 from brand deal. Sponsored content is in.", "success");
    },
    fxB(g) {
      g.modStat("happiness", 15);
      g.state.crime &&
        (g.state.crime.heat = Math.max(0, (g.state.crime.heat || 0) - 5));
      app.toast("You stayed authentic. Your credibility grows.", "info");
    },
  },
  {
    emoji: "🔥",
    title: "Kitchen Fire Scare",
    desc: "A small fire started in your kitchen. Minor damage, but you need to choose how to handle repairs.",
    optA: "File insurance claim",
    optB: "Pay out of pocket ($1,200)",
    fxA(g) {
      g.modCash(-300);
      g.modStat("happiness", -5);
      g.modStat("health", -3);
      app.toast(
        "Insurance handled it. $300 deductible. Premiums may rise.",
        "warning",
      );
    },
    fxB(g) {
      if (g.state.cash < 1200) {
        app.toast("Not enough cash for repairs.", "error");
        return;
      }
      g.modCash(-1200);
      g.modStat("happiness", -3);
      app.toast("Repairs done out of pocket. No insurance hassle.", "info");
    },
  },
  {
    emoji: "🎂",
    title: "Surprise Office Party",
    desc: "Your coworkers threw you a surprise birthday party. Everyone is watching — celebrate big or play it cool?",
    optA: "Buy drinks for everyone ($200)",
    optB: "Thank them and stay chill",
    gateFn(g) {
      return !!g.state.job;
    },
    fxA(g) {
      g.modCash(-200);
      g.modStat("happiness", 20);
      if (g.state.job)
        g.state.job.performance = Math.min(
          100,
          (g.state.job.performance || 50) + 10,
        );
      app.toast(
        "Best day at work in a long time. Morale through the roof!",
        "epic",
      );
    },
    fxB(g) {
      g.modStat("happiness", 12);
      app.toast(
        "You smiled and enjoyed the moment quietly. A good day.",
        "success",
      );
    },
  },
];

/* ─────────────────────────────────────────────────────────────────
   CHALLENGES MODULE
   ───────────────────────────────────────────────────────────────── */
const CHALLENGES = {
  _migrate(g) {
    const gp = g.state.gameplay;
    if (!gp) return;
    gp.monthlyChallenges = gp.monthlyChallenges ?? [];
    gp.challengeSnapshot = gp.challengeSnapshot ?? {};
    gp.challengesCompleted = gp.challengesCompleted ?? 0;
    gp.challengeStreak = gp.challengeStreak ?? 0;
    gp.bestChallengeStreak = gp.bestChallengeStreak ?? 0;
  },

  _snap(g) {
    return {
      cash: g.state.cash,
      netWorth: g.getNetWorth(),
      crimeActions: g.state.runStats.crimeActions,
      marketTrades: g.state.runStats.marketTrades,
      hustleActions: g.state.runStats.hustleActions,
      health: g.state.stats.health,
      happiness: g.state.stats.happiness,
      monthsPlayed: g.state.runStats.monthsPlayed,
      casinoHistory: g.state.casino?.history?.length || 0,
    };
  },

  /* Called at the START of each new month — checks last month's challenges */
  check(g) {
    this._migrate(g);
    const gp = g.state.gameplay;
    if (!gp.monthlyChallenges.length || !gp.challengeSnapshot.netWorth) return;
    const snap = gp.challengeSnapshot;
    let completedThisMonth = 0;

    gp.monthlyChallenges.forEach((ch) => {
      if (ch.done) return;
      const tpl = CHALLENGE_POOL.find((t) => t.id === ch.id);
      if (!tpl) return;
      try {
        if (tpl.check(snap, g)) {
          ch.done = true;
          completedThisMonth++;
          gp.challengesCompleted++;
          g.modCash(tpl.reward);
          g.state.gameplay.legendScore += tpl.leg;
          app.toast(
            `✅ Quest: "${tpl.title}" — +$${shortNumber(tpl.reward)}`,
            "success",
          );
        }
      } catch (e) {
        /* guard */
      }
    });

    const allDone = gp.monthlyChallenges.every((ch) => ch.done);
    if (allDone && completedThisMonth > 0) {
      gp.challengeStreak++;
      gp.bestChallengeStreak = Math.max(
        gp.bestChallengeStreak,
        gp.challengeStreak,
      );
      const bonus = 2000 * gp.challengeStreak;
      g.modCash(bonus);
      g.state.gameplay.legendScore += 8;
      FX.confetti();
      FX.milestoneOverlay(
        "🏅 All Quests Cleared!",
        `Streak x${gp.challengeStreak} — Bonus +$${shortNumber(bonus)}`,
      );
    } else if (completedThisMonth === 0 && gp.monthlyChallenges.length) {
      gp.challengeStreak = 0; // reset streak on missed month
    }
  },

  /* Generate 3 new challenges for the coming month */
  generate(g) {
    this._migrate(g);
    const gp = g.state.gameplay;

    // Pick one from each difficulty tier: easy (reward<1000), med (1000-2500), hard (2500+)
    const easy = CHALLENGE_POOL.filter((t) => t.reward < 1000);
    const med = CHALLENGE_POOL.filter(
      (t) => t.reward >= 1000 && t.reward < 2500,
    );
    const hard = CHALLENGE_POOL.filter((t) => t.reward >= 2500);

    const pick = (pool, exclude) => {
      const filtered = pool.filter((t) => !exclude.includes(t.id));
      return filtered[Math.floor(Math.random() * filtered.length)];
    };

    const selected = [];
    const e = pick(easy, []);
    if (e) selected.push(e);
    const m = pick(
      med,
      selected.map((t) => t.id),
    );
    if (m) selected.push(m);
    const h = pick(
      hard,
      selected.map((t) => t.id),
    );
    if (h) selected.push(h);

    gp.monthlyChallenges = selected.map((t) => ({ id: t.id, done: false }));
    gp.challengeSnapshot = this._snap(g);
  },

  render() {
    const el = document.getElementById("quest-list");
    if (!el) return;
    const g = game;
    if (!g.state?.gameplay?.monthlyChallenges?.length) {
      el.innerHTML =
        '<div style="color:var(--text-dim);font-size:0.78rem;padding:4px 0">Next month will reveal your quests.</div>';
      return;
    }
    const gp = g.state.gameplay;
    const snap = gp.challengeSnapshot || {};
    el.innerHTML = gp.monthlyChallenges
      .map((ch) => {
        const tpl = CHALLENGE_POOL.find((t) => t.id === ch.id);
        if (!tpl) return "";
        let done = ch.done;
        if (!done) {
          try {
            done = tpl.check(snap, g);
          } catch (e) {
            done = false;
          }
        }
        return `<div class="quest-item ${done ? "quest-done" : ""}">
        <span class="quest-e">${tpl.e}</span>
        <div class="quest-body">
          <div class="quest-title">${tpl.title}</div>
          <div class="quest-desc">${tpl.desc}</div>
        </div>
        <div class="quest-reward ${done ? "quest-reward-done" : ""}">
          ${done ? '<i class="fa-solid fa-check"></i>' : "$" + shortNumber(tpl.reward)}
        </div>
      </div>`;
      })
      .join("");

    // update mobile quest badge
    const badge = document.getElementById("quest-count-badge");
    if (badge) {
      const done = gp.monthlyChallenges.filter((ch) => {
        if (ch.done) return true;
        const tpl = CHALLENGE_POOL.find((t) => t.id === ch.id);
        try {
          return tpl && tpl.check(snap, g);
        } catch (e) {
          return false;
        }
      }).length;
      const total = gp.monthlyChallenges.length;
      badge.textContent = `${done}/${total}`;
      badge.className = `quest-count-badge ${done === total ? "quest-all-done" : ""}`;
    }

    // quest streak badge
    const streak = document.getElementById("quest-streak-badge");
    if (streak && gp.challengeStreak > 0) {
      streak.textContent = `🔥${gp.challengeStreak}`;
    } else if (streak) {
      streak.textContent = "";
    }
  },
};

/* ─────────────────────────────────────────────────────────────────
   PRESTIGE / LEGACY SYSTEM
   ───────────────────────────────────────────────────────────────── */
const PRESTIGE = {
  PERKS: [
    {
      id: "silver_spoon",
      e: "🥄",
      name: "Silver Spoon",
      desc: "Start your next life with 3× the starting cash. Old money never dies.",
      apply(g) {
        g.state.cash *= 3;
      },
    },
    {
      id: "prodigy",
      e: "🧠",
      name: "Prodigy",
      desc: "+20 starting Smarts. You were born different.",
      apply(g) {
        g.state.stats.smarts = Math.min(100, g.state.stats.smarts + 20);
      },
    },
    {
      id: "street_cred",
      e: "🗡️",
      name: "Street Cred",
      desc: "Start with 150 Crime Rep — the streets already know your name.",
      apply(g) {
        g.state.crime.rep = 150;
      },
    },
    {
      id: "trust_fund",
      e: "💵",
      name: "Trust Fund",
      desc: "Receive $1,200/month passive income from family inheritance. Forever.",
      apply(g) {
        g.state.prestige = g.state.prestige || {};
        g.state.prestige.trustFund = true;
      },
    },
    {
      id: "iron_will",
      e: "🔥",
      name: "Iron Will",
      desc: "Start with maxed Health & Energy. Minimum health floor: 25.",
      apply(g) {
        g.state.stats.health = 100;
        g.state.stats.energy = 100;
        g.state.prestige = g.state.prestige || {};
        g.state.prestige.ironWill = true;
      },
    },
    {
      id: "connected",
      e: "🤝",
      name: "Connected",
      desc: "Skip interviews — start with a senior Software Engineer role ($125k).",
      apply(g) {
        g.state.prestige = g.state.prestige || {};
        g.state.prestige.connected = true;
        // Auto-assign a senior tech position (level index 2 in the "tech" track)
        const track = CONFIG.CAREERS.find((t) => t.id === "tech");
        const levelIdx = track ? Math.min(2, track.levels.length - 1) : 0;
        const baseSalary =
          track && track.levels[levelIdx]
            ? track.levels[levelIdx].salary
            : 125000;
        g.state.job = {
          trackId: "tech",
          level: levelIdx,
          performance: 50,
          politics: 10,
          salary: baseSalary,
          stress: 0,
        };
      },
    },
  ],

  load() {
    try {
      return JSON.parse(localStorage.getItem("GreedigoPrestige") || "{}");
    } catch (e) {
      return {};
    }
  },

  save(data) {
    try {
      localStorage.setItem("GreedigoPrestige", JSON.stringify(data));
    } catch (e) {}
  },

  getTotalRuns() {
    const d = this.load();
    return d.totalRuns || 0;
  },

  injectToEndingPanel(g) {
    const panel = document.getElementById("ending-panel");
    if (!panel || !panel.innerHTML || panel.querySelector(".prestige-block"))
      return;
    const pData = this.load();
    const runs = (pData.totalRuns || 0) + 1;
    const activePerk = pData.perk
      ? this.PERKS.find((p) => p.id === pData.perk)
      : null;

    // Increment total runs once per game end
    if (!g.state.life._prestigeCounted) {
      g.state.life._prestigeCounted = true;
      pData.totalRuns = runs;
      this.save(pData);
    }

    const block = document.createElement("div");
    block.className = "prestige-block";
    block.innerHTML = `
      <div class="prestige-title"><i class="fa-solid fa-infinity"></i> Legacy Continues — Run #${runs}</div>
      ${activePerk ? `<div class="prestige-active-perk">Active Legacy: ${activePerk.e} <strong>${activePerk.name}</strong></div>` : ""}
      <div class="prestige-subtitle">Before starting over, lock in a Legacy Perk that carries into your next life.</div>
      <button class="prestige-btn" onclick="PRESTIGE.showPicker()"><i class="fa-solid fa-seedling"></i> Choose Your Legacy</button>
    `;

    const foot = panel.querySelector(".ending-foot");
    if (foot) panel.insertBefore(block, foot);
    else panel.appendChild(block);
  },

  showPicker() {
    // Pick 3 random perks to offer
    const shuffled = [...this.PERKS]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const pData = this.load();
    const rows = shuffled
      .map(
        (p) => `
      <div class="perk-card ${pData.perk === p.id ? "perk-active" : ""}" onclick="PRESTIGE.selectPerk('${p.id}')">
        <div class="perk-emoji">${p.e}</div>
        <div class="perk-info">
          <div class="perk-name">${p.name}</div>
          <div class="perk-desc">${p.desc}</div>
        </div>
        ${pData.perk === p.id ? '<i class="fa-solid fa-check perk-check"></i>' : ""}
      </div>`,
      )
      .join("");

    app.modal(
      "🌿 Choose Your Legacy Perk",
      `<div class="perk-list">${rows}</div>
       <div style="font-size:0.76rem;color:var(--text-dim);margin-top:12px;text-align:center;">This bonus carries into your NEXT run.</div>`,
      [
        {
          text: "Start New Timeline →",
          cb() {
            app.closeModal();
            game.startNewTimeline();
          },
        },
      ],
    );
  },

  selectPerk(id) {
    const pData = this.load();
    pData.perk = id;
    this.save(pData);
    // Re-render perk cards
    document.querySelectorAll(".perk-card").forEach((c) => {
      c.classList.toggle(
        "perk-active",
        c.getAttribute("onclick")?.includes(id),
      );
    });
    const perk = this.PERKS.find((p) => p.id === id);
    app.toast(`Legacy locked: ${perk?.e} ${perk?.name}`, "success");
  },

  apply(g) {
    const pData = this.load();
    if (!pData.perk) return;
    const perk = this.PERKS.find((p) => p.id === pData.perk);
    if (perk) {
      perk.apply(g);
      g.state.prestige = g.state.prestige || {};
      g.state.prestige.activePerk = pData.perk;
      g.state.prestige.run = pData.totalRuns || 1;
      setTimeout(
        () => app.toast(`Legacy active: ${perk.e} ${perk.name}`, "epic"),
        2000,
      );
    }
    // Increment prestige run counter
    g.state.gameplay.prestigeRun = pData.totalRuns || 0;
  },
};

/* ─────────────────────────────────────────────────────────────────
   RIVAL NPC SYSTEM
   ───────────────────────────────────────────────────────────────── */
const RIVAL = {
  NAMES: [
    "Riley Chen",
    "Marcus Webb",
    "Priya Nair",
    "Jake Holloway",
    "Sofia Reyes",
    "Aiden Park",
    "Layla Brooks",
    "Ethan Cruz",
  ],
  TAUNTS: [
    "Your rival just lapped you. \uD83D\uDE0F",
    "They said your name at their party — as a cautionary tale.",
    "Rival Update: they just bought what you couldn't afford.",
    "Heard your rival closed a seven-figure deal. You?",
    "Your rival doesn't even know you exist anymore.",
  ],
  PRAISES: [
    "You're ahead of your rival now. They're studying YOUR moves.",
    "Rival left on read. They can't keep up.",
    "Word is your rival is nervous. They should be.",
    "Your rival asked around about you. The answer impressed them.",
  ],

  init(g) {
    if (g.state.rival) return;
    const name = this.NAMES[Math.floor(Math.random() * this.NAMES.length)];
    g.state.rival = {
      name,
      netWorth: g.getNetWorth() * (0.9 + Math.random() * 0.3),
      growthRate: 0.012 + Math.random() * 0.012, // 1.2% – 2.4% monthly
      taunts: 0,
      wasAhead: false,
    };
  },

  tick(g) {
    if (!g.state.rival) this.init(g);
    const rv = g.state.rival;
    // Rival grows by growthRate +/- variance
    const growth = rv.growthRate * (0.6 + Math.random() * 0.8);
    rv.netWorth = Math.max(500, rv.netWorth * (1 + growth));

    const playerNW = g.getNetWorth();
    const rivalAhead = rv.netWorth > playerNW;

    if (rivalAhead && !rv.wasAhead && Math.random() < 0.35) {
      app.toast(
        this.TAUNTS[Math.floor(Math.random() * this.TAUNTS.length)],
        "warning",
      );
      rv.taunts++;
    } else if (!rivalAhead && rv.wasAhead) {
      app.toast(
        this.PRAISES[Math.floor(Math.random() * this.PRAISES.length)],
        "success",
      );
    }
    rv.wasAhead = rivalAhead;
  },

  render() {
    const el = document.getElementById("rival-nw");
    const nameEl = document.getElementById("rival-name");
    const msgEl = document.getElementById("rival-msg");
    const panelEl = document.getElementById("rival-panel");
    if (!el) return;
    const rv = game.state?.rival;
    if (!rv) {
      if (panelEl) panelEl.style.display = "none";
      return;
    }
    if (panelEl) panelEl.style.display = "";
    if (nameEl) nameEl.textContent = rv.name;

    const playerNW = game.getNetWorth();
    const diff = playerNW - rv.netWorth;
    const pct =
      rv.netWorth > 0 ? Math.abs((diff / rv.netWorth) * 100).toFixed(1) : "0";
    el.textContent = "$" + shortNumber(Math.round(rv.netWorth));
    el.style.color = diff > 0 ? "#34d399" : "#f87171";

    if (msgEl) {
      if (diff > 0) {
        msgEl.innerHTML = `<i class="fa-solid fa-arrow-up" style="color:#34d399"></i> You're +${pct}% ahead`;
        msgEl.style.color = "#34d399";
      } else {
        msgEl.innerHTML = `<i class="fa-solid fa-arrow-down" style="color:#f87171"></i> You're ${pct}% behind`;
        msgEl.style.color = "#f87171";
      }
    }
  },
};

/* ─────────────────────────────────────────────────────────────────
   25 NEW ACHIEVEMENTS
   ───────────────────────────────────────────────────────────────── */
const NEW_ACHIEVEMENTS = [
  {
    id: "first_job",
    title: "First Paycheck",
    points: 8,
    reward: 300,
    check() {
      return !!game.state.job;
    },
  },
  {
    id: "ten_million",
    title: "Eight Figures",
    points: 90,
    reward: 50000,
    check() {
      return game.getNetWorth() >= 10000000;
    },
  },
  {
    id: "billionaire",
    title: "Billionaire Club",
    points: 150,
    reward: 200000,
    check() {
      return game.getNetWorth() >= 1000000000;
    },
  },
  {
    id: "ceo_reached",
    title: "C-Suite",
    points: 55,
    reward: 15000,
    check() {
      return game.state.job?.trackId === "corp" && game.state.job?.level >= 4;
    },
  },
  {
    id: "chief_surgery",
    title: "In Your Hands",
    points: 50,
    reward: 12000,
    check() {
      return game.state.job?.trackId === "med" && game.state.job?.level >= 4;
    },
  },
  {
    id: "dist_engineer",
    title: "Distinguished",
    points: 55,
    reward: 12000,
    check() {
      return game.state.job?.trackId === "tech" && game.state.job?.level >= 5;
    },
  },
  {
    id: "married_once",
    title: "Til Death",
    points: 15,
    reward: 1500,
    check() {
      return game.state.relationship?.status === "married";
    },
  },
  {
    id: "full_house",
    title: "Full House",
    points: 20,
    reward: 2500,
    check() {
      return (game.state.relationship?.children?.length || 0) >= 3;
    },
  },
  {
    id: "senator_title",
    title: "Senator",
    points: 60,
    reward: 18000,
    check() {
      return game.state.politics?.role === "senator";
    },
  },
  {
    id: "cartel_boss",
    title: "Cartel Boss",
    points: 80,
    reward: 40000,
    check() {
      return game.state.drug?.tier === "cartel";
    },
  },
  {
    id: "lone_wolf",
    title: "Lone Wolf",
    points: 15,
    reward: 1200,
    check() {
      return (
        game.state.life.retired &&
        game.state.relationship?.status === "single" &&
        game.state.relationship?.fights === 0
      );
    },
  },
  {
    id: "moon_wallet",
    title: "Moon Wallet",
    points: 45,
    reward: 10000,
    check() {
      const btc = game.state.assets.btc;
      return btc && (btc.owned || 0) * (btc.avgPrice || 0) >= 500000;
    },
  },
  {
    id: "iron_constitution",
    title: "Iron Constitution",
    points: 25,
    reward: 3000,
    check() {
      return (
        (game.state.runStats.monthsPlayed || 0) >= 12 &&
        game.state.stats.health >= 60
      );
    },
  },
  {
    id: "quest_master",
    title: "Quest Master",
    points: 30,
    reward: 4000,
    check() {
      return (game.state.gameplay?.challengeStreak || 0) >= 3;
    },
  },
  {
    id: "jailbird",
    title: "Prison Veteran",
    points: 18,
    reward: 1500,
    check() {
      return (game.state.prison?.monthsServed || 0) >= 24;
    },
  },
  {
    id: "clean_money",
    title: "Clean Money",
    points: 65,
    reward: 20000,
    check() {
      return (
        game.getNetWorth() >= 1000000 &&
        (game.state.bank?.loans?.length || 0) === 0 &&
        (game.state.edu?.loans || 0) < 100
      );
    },
  },
  {
    id: "young_money",
    title: "Young Money",
    points: 40,
    reward: 6000,
    check() {
      return game.state.age / 12 <= 28 && game.getNetWorth() >= 100000;
    },
  },
  {
    id: "portfolio_pro",
    title: "Portfolio Pro",
    points: 20,
    reward: 2000,
    check() {
      return (
        CONFIG.ASSETS.filter((a) => (game.state.assets[a.id]?.owned || 0) > 0)
          .length >= 5
      );
    },
  },
  {
    id: "prestige_1",
    title: "Transcended",
    points: 30,
    reward: 5000,
    check() {
      return (game.state.gameplay?.prestigeRun || 0) >= 1;
    },
  },
  {
    id: "prestige_3",
    title: "Reborn Thrice",
    points: 60,
    reward: 12000,
    check() {
      return (game.state.gameplay?.prestigeRun || 0) >= 3;
    },
  },
  {
    id: "full_send",
    title: "Full Send",
    points: 35,
    reward: 5000,
    check() {
      const gp = game.state.gameplay;
      if (!gp?.challengeSnapshot) return false;
      const s = gp.challengeSnapshot;
      const rs = game.state.runStats;
      return (
        rs.crimeActions - s.crimeActions >= 1 &&
        rs.hustleActions - s.hustleActions >= 1 &&
        rs.marketTrades - s.marketTrades >= 1
      );
    },
  },
  {
    id: "flash_accepted",
    title: "Opportunity Seeker",
    points: 12,
    reward: 1000,
    check() {
      return (game.state.life.flashEventsAccepted || 0) >= 3;
    },
  },
  {
    id: "law_abiding",
    title: "Law Abiding",
    points: 20,
    reward: 2500,
    check() {
      return (
        game.state.age / 12 >= 40 &&
        (game.state.life.legalRecord || 0) < 0.1 &&
        (game.state.crime?.rep || 0) < 5
      );
    },
  },
  {
    id: "challenge_50",
    title: "Quest Veteran",
    points: 40,
    reward: 5000,
    check() {
      return (game.state.gameplay?.challengesCompleted || 0) >= 50;
    },
  },
  {
    id: "rival_crusher",
    title: "Rival Crusher",
    points: 28,
    reward: 4000,
    check() {
      const rv = game.state.rival;
      return rv && game.getNetWorth() >= rv.netWorth * 2;
    },
  },
];

/* ─────────────────────────────────────────────────────────────────
   WIRE IN NEW ACHIEVEMENTS via monkey-patch
   ───────────────────────────────────────────────────────────────── */
(function () {
  const orig = game.getAchievementDefinitions.bind(game);
  game.getAchievementDefinitions = function () {
    const defs = orig();
    NEW_ACHIEVEMENTS.forEach((na) => {
      if (!defs.find((d) => d.id === na.id)) defs.push(na);
    });
    return defs;
  };
})();

/* ─────────────────────────────────────────────────────────────────
   CHOICE EVENT TRIGGER  (attaches to game)
   ───────────────────────────────────────────────────────────────── */
game.triggerChoiceEvent = function () {
  const available = CHOICE_EVENTS.filter((e) => !e.gateFn || e.gateFn(this));
  if (!available.length) return;
  const evt = available[Math.floor(Math.random() * available.length)];
  app.modal(`${evt.emoji} ${evt.title}`, evt.desc, [
    {
      text: evt.optA,
      cb: () => {
        evt.fxA && evt.fxA(this);
        app.closeModal();
      },
    },
    {
      text: evt.optB,
      style: "secondary",
      cb: () => {
        evt.fxB && evt.fxB(this);
        app.closeModal();
      },
    },
  ]);
};

/* ─────────────────────────────────────────────────────────────────
   PATCH nextMonth — wire everything in
   ───────────────────────────────────────────────────────────────── */
(function () {
  const orig = game.nextMonth.bind(game);
  game.nextMonth = function () {
    // --- 1. Challenges: check last month, then generate new batch for this month ---
    if (!this.state.life.dead && !this.state.life.retired && !this.state.jail) {
      if (this.state.gameplay?.monthlyChallenges?.length) {
        CHALLENGES.check(this);
      }
      CHALLENGES.generate(this); // always fresh challenges each month
    }

    // --- 2. Rival tick ---
    if (!this.state.life.dead && !this.state.life.retired) {
      RIVAL.init(this);
      RIVAL.tick(this);
    }

    // --- 3. Run the month ---
    const _wasInJail = (this.state.jail || 0) > 0;
    orig.call(this);
    if (_wasInJail) return; // skip post-month processing during jail

    // --- 4. Trust Fund passive (prestige perk) ---
    if (this.state.prestige?.trustFund && !this.state.life.dead) {
      this.modCash(1200);
      app.log("Trust fund: +$1,200 family income.");
    }

    // --- 5. Iron Will floor ---
    if (this.state.prestige?.ironWill && !this.state.life.dead) {
      if (this.state.stats.health < 25) this.state.stats.health = 25;
    }

    // --- 6. Flash opportunity (10% chance) ---
    if (
      !this.state.life.dead &&
      !this.state.life.retired &&
      !this.state.jail &&
      Math.random() < 0.1
    ) {
      const avail = FLASH_EVENTS.filter((e) => !e.gateFn || e.gateFn(this));
      if (avail.length) {
        const fe = avail[Math.floor(Math.random() * avail.length)];
        const gSelf = this;
        app.modal(`⚡ ${fe.title}`, fe.desc, [
          {
            text: fe.yes,
            cb() {
              if (fe.gateFn && !fe.gateFn(gSelf)) {
                app.toast(fe.gateMsg || "Requirements not met.", "warning");
                app.closeModal();
                return;
              }
              fe.onYes && fe.onYes(gSelf);
              gSelf.state.life.flashEventsAccepted =
                (gSelf.state.life.flashEventsAccepted || 0) + 1;
              gSelf.registerAction(1);
              app.closeModal();
            },
          },
          {
            text: fe.no,
            style: "secondary",
            cb() {
              fe.onNo && fe.onNo(gSelf);
              app.closeModal();
            },
          },
        ]);
      }
    }

    // --- 7. Rare choice event (8% chance) ---
    if (
      !this.state.life.dead &&
      !this.state.life.retired &&
      !this.state.jail &&
      Math.random() < 0.08
    ) {
      this.triggerChoiceEvent();
    }

    // --- 8. Generate challenges on first month ---
    if (
      !this.state.life.dead &&
      !this.state.life.retired &&
      !this.state.gameplay?.monthlyChallenges?.length
    ) {
      CHALLENGES.generate(this);
    }
  };
})();

/* ─────────────────────────────────────────────────────────────────
   PATCH startNewTimeline  — apply prestige perk at game start
   ───────────────────────────────────────────────────────────────── */
(function () {
  const orig = game.startNewTimeline.bind(game);
  game.startNewTimeline = function () {
    orig.call(this);
    // Apply prestige perk after reset (charCreation will re-init anyway, so we hook charCreation.onConfirm)
    this._applyPrestigeOnNextStart = true;
  };
})();

/* Hook charCreation.start to apply prestige immediately after character is created */
(function () {
  const origStart = charCreation.start.bind(charCreation);
  charCreation.start = function () {
    const shouldApply = !!game._applyPrestigeOnNextStart;
    if (!shouldApply) {
      origStart();
      return;
    }

    // Intercept the one-shot 650ms setTimeout that charCreation.start uses
    // to launch the game, so we can apply prestige perks before the first renderAll.
    const origSetTimeout = window.setTimeout;
    let intercepted = false;
    window.setTimeout = function (fn, delay) {
      if (!intercepted && delay === 650 && typeof fn === "function") {
        intercepted = true;
        window.setTimeout = origSetTimeout; // restore immediately
        return origSetTimeout(function () {
          fn(); // runs: initializeAssets, saveGame, renderAll, activateView, etc.
          game._applyPrestigeOnNextStart = false;
          PRESTIGE.apply(game);
          RIVAL.init(game);
          game.renderAll(); // re-render so perk values are visible from the start
        }, delay);
      }
      return origSetTimeout(fn, delay);
    };
    origStart();
    // Safety: restore in case no 650ms setTimeout was registered
    window.setTimeout = origSetTimeout;
  };
})();

/* ─────────────────────────────────────────────────────────────────
   PATCH renderAll  — inject challenges, rival, prestige panel
   ───────────────────────────────────────────────────────────────── */
(function () {
  const orig = game.renderAll.bind(game);
  game.renderAll = function () {
    orig.call(this);
    if (this.state?.life?.dead || this.state?.life?.retired) {
      PRESTIGE.injectToEndingPanel(this);
    }
    CHALLENGES.render();
    RIVAL.render();
    if (this.state?.age > 18 * 12) {
      this.renderMilestoneGoal();
    }
    FX.updateStreakFire();
  };
})();
