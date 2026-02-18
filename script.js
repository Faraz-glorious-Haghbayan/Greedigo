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
    {
      id: "shoplift",
      name: "Shoplift",
      type: "Petty",
      reqRep: 0,
      baseChance: 0.88,
      risk: 0.14,
      heatAdd: 6,
      reward: [40, 150],
      jail: 1,
      desc: "Swipe localized goods.",
    },
    {
      id: "mug",
      name: "Mug Tourist",
      type: "Petty",
      reqRep: 10,
      baseChance: 0.77,
      risk: 0.25,
      heatAdd: 12,
      reward: [150, 600],
      jail: 3,
      desc: "High adrenaline, quick cash.",
    },
    {
      id: "burglary",
      name: "House Burglary",
      type: "Felony",
      reqRep: 50,
      baseChance: 0.62,
      risk: 0.38,
      heatAdd: 25,
      reward: [1500, 6000],
      jail: 12,
      desc: "Break & Enter. Don't wake the dog.",
    },
    {
      id: "scam",
      name: "Crypto Rugpull",
      type: "Cyber",
      reqRep: 100,
      baseChance: 0.55,
      risk: 0.22,
      heatAdd: 22,
      reward: [6000, 25000],
      jail: 24,
      desc: "Target greedy investors online.",
    },
    {
      id: "heist",
      name: "Bank Heist",
      type: "Organized",
      reqRep: 500,
      baseChance: 0.3,
      risk: 0.88,
      heatAdd: 95,
      reward: [120000, 450000],
      jail: 120,
      desc: " The big one. High morality cost.",
    },
    {
      id: "insider",
      name: "Insider Trading",
      type: "White Collar",
      reqRep: 1000,
      baseChance: 0.7,
      risk: 0.6,
      heatAdd: 35,
      reward: [350000, 1500000],
      jail: 60,
      desc: "Exploit corporate secrets.",
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
      maxBet: 5000,
      desc: "Spin the reels. 95% RTP.",
    },
    {
      id: "blackjack",
      name: "Blackjack",
      minBet: 100,
      maxBet: 10000,
      desc: "Beat the dealer (21).",
    },
    {
      id: "horse",
      name: "Horse Racing",
      minBet: 500,
      maxBet: 50000,
      desc: "High stakes track betting.",
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
      pay: 45,
      stressHit: 2,
      risk: 0,
      desc: "Fold sheets for commissary money.",
    },
    {
      id: "kitchen",
      name: "Kitchen Duty",
      pay: 60,
      stressHit: 3,
      risk: 0.01,
      desc: "Cook for inmates. Slight danger from kitchen fights.",
    },
    {
      id: "workshop",
      name: "Workshop",
      pay: 80,
      stressHit: 4,
      risk: 0.02,
      desc: "Build furniture. Learn basic skills.",
    },
    {
      id: "library",
      name: "Library Clerk",
      pay: 35,
      stressHit: 0,
      risk: 0,
      desc: "Quiet work. Read books and gain smarts.",
      smartsBonus: 1,
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
    crime: { rep: 0, heat: 0, history: [] },
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
    },
    // Pets
    pets: [], // { id, name, type, ageMonths, maxAge, happiness }
    // Prison
    prison: {
      monthsServed: 0,
      totalSentence: 0,
      reputation: 0, // respect inside
      gangProtection: false,
      escapeAttempts: 0,
      prisonJob: null,
      earnings: 0,
      infractions: 0,
      solitary: 0, // months in solitary
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
        if (!this.state.prison) {
          this.state.prison = {
            monthsServed: 0,
            totalSentence: 0,
            reputation: 0,
            gangProtection: false,
            escapeAttempts: 0,
            prisonJob: null,
            earnings: 0,
            infractions: 0,
            solitary: 0,
          };
        }
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
      crime: { rep: 0, heat: 0, history: [] },
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
      },
      pets: [],
      prison: {
        monthsServed: 0,
        totalSentence: 0,
        reputation: 0,
        gangProtection: false,
        escapeAttempts: 0,
        prisonJob: null,
        earnings: 0,
        infractions: 0,
        solitary: 0,
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
      },
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
      app.log(`Hot streak x${g.actionStreak}! Keep momentum for bonus growth.`);
    }
  },

  decayActionStreak() {
    if (!this.state.gameplay) return;
    const g = this.state.gameplay;
    if (g.currentMonthActions === 0) {
      g.actionStreak = Math.max(0, g.actionStreak - 2);
    } else if (g.currentMonthActions >= 3) {
      const bonus = Math.min(4000, 200 + g.currentMonthActions * 80);
      this.modCash(bonus);
      this.modStat("happiness", 1.5);
      g.legendScore += 2;
      app.log(
        `Momentum bonus: +$${Math.round(bonus)} from disciplined execution.`,
      );
    }
    g.currentMonthActions = 0;
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
    if (health < 30) deathRisk += (30 - health) * 0.004;
    if (ageYears > 58) deathRisk += (ageYears - 58) * 0.002;
    deathRisk += life.chronicStress * 0.0009;
    deathRisk += life.riskDebt * 0.0008;
    deathRisk += riskExposure * 0.012;
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
    this.showOnboardingStep(0);
  },

  maybeAdvanceOnboarding() {
    const o = this.state.onboarding;
    if (!o || !o.active || o.completed || o.skipped) return;
    if (o.month > CONFIG.ONBOARDING_MONTHS) {
      o.active = false;
      o.completed = true;
      app.toast("Onboarding complete. You're on your own now.", "success");
      return;
    }

    const milestones = [2, 4, 6, 8, 10];
    if (milestones.includes(o.month)) {
      this.showOnboardingStep(Math.min(5, milestones.indexOf(o.month) + 1));
    }
  },

  showOnboardingStep(stepIndex) {
    const o = this.state.onboarding;
    if (!o || o.skipped || o.completed || o.seenSteps.includes(stepIndex))
      return;
    o.seenSteps.push(stepIndex);
    o.step = stepIndex;

    const steps = [
      {
        title: "Guided Run (10 Minutes)",
        body: "Goal: survive 10 months without spiraling risk. Start by taking a job in Career.",
        actions: [
          {
            text: "Open Career",
            cb: () => {
              app.activateView("career");
              app.closeModal();
            },
          },
          {
            text: "Skip Tutorial",
            cb: () => {
              o.skipped = true;
              o.active = false;
              app.closeModal();
            },
          },
        ],
      },
      {
        title: "Month 2: Budget Reality",
        body: "Advance month and watch expenses. Keep cash positive to avoid debt pressure.",
        actions: [{ text: "Got it", cb: () => app.closeModal() }],
      },
      {
        title: "Month 4: Learn Market Risk",
        body: "Make 1 small market trade to see volatility and fees without overexposure.",
        actions: [
          {
            text: "Open Market",
            cb: () => {
              app.activateView("market");
              app.closeModal();
            },
          },
          { text: "Stay Here", cb: () => app.closeModal() },
        ],
      },
      {
        title: "Month 6: Startup Discipline",
        body: "Only launch a startup if you can afford burn. Over-hiring now can end your run later.",
        actions: [
          {
            text: "Open Business",
            cb: () => {
              app.activateView("business");
              app.closeModal();
            },
          },
          { text: "Skip", cb: () => app.closeModal() },
        ],
      },
      {
        title: "Month 8: Crime Is Not Free",
        body: "Crime spikes heat and legal record. Even successful runs can end in sudden death.",
        actions: [
          {
            text: "Open Crime",
            cb: () => {
              app.activateView("crime");
              app.closeModal();
            },
          },
          { text: "Avoid Crime", cb: () => app.closeModal() },
        ],
      },
      {
        title: "Month 10 Complete",
        body: "Tutorial done. Use the Risk HUD to decide when to stop before greed kills the run.",
        actions: [{ text: "Finish", cb: () => app.closeModal() }],
      },
    ];

    const step = steps[stepIndex];
    if (!step) return;
    app.modal(step.title, step.body, step.actions);
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
    let deathDesc = `You died at age ${ageYrs}.\n\nCause: ${reason}\nNet worth left behind: $${shortNumber(Math.floor(nw))}`;
    if (rel.status === "married")
      deathDesc += `\n\n${rel.partnerName} mourns your loss.`;
    if (rel.children.length > 0)
      deathDesc += `\n${rel.children.length} child${rel.children.length > 1 ? "ren" : ""} left behind.`;

    app.modal("\u{1F480} Death", deathDesc, [
      { text: "Accept Fate", cb: () => app.closeModal() },
    ]);
    this.renderAll();
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
    if (health < 30) deathRisk += (30 - health) * 0.002;
    if (ageYears > 58) deathRisk += (ageYears - 58) * 0.001;
    deathRisk += life.chronicStress * 0.0004;
    deathRisk += life.riskDebt * 0.0003;
    deathRisk += riskExposure * 0.005;

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
    if (happiness <= 5 && totalDebt > 50000 && Math.random() < 0.004) {
      this.die(
        "Died from severe depression brought on by crushing debt and despair.",
      );
      return;
    }
    if (happiness <= 3 && life.chronicStress > 80 && Math.random() < 0.003) {
      this.die(
        "Took their own life after years of unbearable stress and hopelessness.",
      );
      return;
    }

    // --- Heart attack from low health + age ---
    if (health < 25 && ageYears > 40 && Math.random() < 0.003) {
      this.die(
        "Suffered a fatal heart attack. Years of poor health caught up.",
      );
      return;
    }
    if (health < 15 && Math.random() < 0.004) {
      this.die("Massive stroke. Your body couldn't take it anymore.");
      return;
    }

    // --- Drug/alcohol related (high stress + low happiness) ---
    if (life.chronicStress > 85 && happiness < 20 && Math.random() < 0.002) {
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
      this.state.job.performance += this.state.job.performance > 50 ? -2 : 1;
      let stressHit = level.stress / 10;
      if (this.state.job.performance < 30) stressHit *= 2;
      this.modStat("happiness", -stressHit);
      this.state.job.stress =
        Math.min(
          100,
          Math.max(0, (this.state.job.stress || 0) + level.stress * 0.06 - 1.5),
        ).toFixed(1) * 1;

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
    if (this.state.age % 6 === 0) this.saveGame(false);
  },

  handleJail() {
    if (this.state.life.dead || this.state.life.retired) return;

    // Switch to prison view
    app.setView("prison");

    this.state.jail--;
    this.state.age++;
    this.state.prison.monthsServed++;

    if (this.state.gameplay) {
      this.state.gameplay.actionStreak = Math.max(
        0,
        this.state.gameplay.actionStreak - 3,
      );
      this.state.gameplay.currentMonthActions = 0;
    }

    // Prison is HARD — realistic effects
    this.modStat("happiness", -10);
    this.modStat("health", -3);
    this.modStat("energy", -15);

    // Relationship suffers in prison
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

    // Solitary confinement
    if (this.state.prison.solitary > 0) {
      this.state.prison.solitary--;
      this.modStat("happiness", -15);
      this.modStat("health", -2);
      app.log(
        `Solitary confinement... ${this.state.prison.solitary} months left.`,
      );
    }

    // Random prison fights
    if (
      !this.state.prison.gangProtection &&
      Math.random() < CONFIG.PRISON_FIGHT_CHANCE
    ) {
      this.modStat("health", -12);
      this.modStat("happiness", -8);
      this.state.prison.infractions++;
      app.toast("Got into a prison fight. Injuries sustained.", "error");
      FX.screenShake("sm");
      if (Math.random() < 0.3) {
        this.state.prison.solitary += 2;
        app.toast("Sent to solitary confinement for fighting.", "error");
      }
    }

    // Prison job pay
    if (this.state.prison.prisonJob) {
      const job = CONFIG.PRISON_JOBS.find(
        (j) => j.id === this.state.prison.prisonJob,
      );
      if (job) {
        this.state.prison.earnings += job.pay;
        this.modCash(job.pay);
        this.modStat("happiness", -job.stressHit);
        if (job.smartsBonus) this.modStat("smarts", job.smartsBonus);
        if (job.risk > 0 && Math.random() < job.risk) {
          this.modStat("health", -5);
          app.toast("Incident during prison work detail.", "warning");
        }
      }
    }

    // Gang protection cost
    if (this.state.prison.gangProtection) {
      if (this.state.cash >= CONFIG.PRISON_GANG_PROTECTION_COST) {
        this.modCash(-CONFIG.PRISON_GANG_PROTECTION_COST);
      } else {
        this.state.prison.gangProtection = false;
        app.toast("Can't afford gang protection anymore.", "error");
      }
    }

    // Jail decay Rep
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
      (this.state.prison.gangProtection ? -0.002 : 0.003) +
      this.state.prison.infractions * 0.002;
    if (
      this.checkSuddenDeath(
        "Prison",
        prisonDeathRisk,
        "Died in custody — violence, medical neglect, or despair",
      )
    ) {
      return;
    }
    this.checkMortality();

    if (this.state.jail <= 0) {
      // Release
      this.state.prison.prisonJob = null;
      this.state.prison.gangProtection = false;
      this.state.prison.solitary = 0;
      app.toast("Released from prison. Freedom at last.", "success");
      FX.screenFlash("gain");
      app.setView("career");
    } else {
      app.log(
        `Federal Prison — ${this.state.jail} months remaining. Guard your health.`,
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
    if (this.state.cash < 1000) return app.toast("Need $1k needed", "error");
    if (this.state.crime.heat <= 0)
      return app.toast("No heat to clean", "info");
    this.modCash(-1000);
    this.state.crime.heat = Math.max(0, this.state.crime.heat - 20);
    app.toast("Heat lowered", "success");
    this.renderAll();
  },

  commitCrime(id) {
    if (!this.canAct()) return;
    if (this.state.stats.energy < 30) return app.toast("Too tired", "error");

    let c = CONFIG.CRIMES.find((x) => x.id === id);
    this.state.runStats.crimeActions += 1;
    if (this.state.onboarding.active && this.state.onboarding.month < 9) {
      app.log("Tutorial: crime raises death risk fast. Use with caution.");
    }

    // Rep Check
    if (this.state.crime.rep < c.reqRep)
      return app.toast(`Need ${c.reqRep} Rep`, "error");

    this.modStat("energy", -30);

    // Calc Success
    // Base - (Heat Penalty) + (Smarts Bonus) + (Rep Bonus)
    let heatPenalty = this.state.crime.heat * 0.005; // 50 heat = -25% chance
    let smartsBonus = this.state.stats.smarts * 0.002; // 100 smarts = +20% chance
    let legalPenalty = this.state.life.legalRecord * 0.012;
    let netChance = c.baseChance - heatPenalty - legalPenalty + smartsBonus;

    // Cap chance
    netChance = Math.max(0.05, Math.min(0.95, netChance));

    if (Math.random() < netChance) {
      // Success
      let reward = c.reward[0] + Math.random() * (c.reward[1] - c.reward[0]);
      reward *= Math.max(0.55, 1 - this.state.crime.heat * 0.0035);
      this.modCash(reward);
      this.state.crime.rep += Math.ceil(c.heatAdd / 2); // Gain rep
      this.state.crime.heat += c.heatAdd;
      this.recordGreed(c.heatAdd * 0.45, `${c.name} payouts`);
      this.state.life.riskDebt = Math.min(
        300,
        this.state.life.riskDebt + c.risk * 5,
      );

      // "Critical Success" - no heat gained?
      if (Math.random() > 0.9) {
        this.state.crime.heat -= c.heatAdd;
        app.toast(`CLEAN GETAWAY! +$${reward.toFixed(0)}`, "epic");
        FX.screenFlash("gain");
      } else {
        app.toast(`Success! +$${reward.toFixed(0)} (Heat Up)`, "warning");
      }
      this.registerAction(5);

      const successDeathRisk =
        c.risk * 0.015 + Math.max(0, this.state.crime.heat - 60) * 0.0008;
      if (
        this.checkSuddenDeath(
          `Crime: ${c.name}`,
          successDeathRisk,
          "Killed during the getaway after escalating criminal exposure",
        )
      ) {
        return;
      }
    } else {
      // Failure - Roll for Jail
      // Higher heat = higher jail chance
      let jailChance =
        c.risk +
        this.state.crime.heat * 0.01 +
        this.state.life.legalRecord * 0.03 +
        this.state.life.greed * 0.0008;
      if (Math.random() < jailChance) {
        this.state.jail = c.jail;
        // Initialize prison state for this sentence
        this.state.prison.monthsServed = 0;
        this.state.prison.totalSentence = c.jail;
        this.state.prison.prisonJob = null;
        this.state.prison.gangProtection = false;
        this.state.prison.solitary = 0;
        this.state.prison.infractions = 0;
        this.state.life.legalRecord += Math.max(1, c.jail / 18);
        this.state.life.opportunitiesLost += Math.max(
          1,
          Math.floor(c.jail / 24),
        );
        this.state.life.maxHealth = Math.max(
          30,
          this.state.life.maxHealth - c.jail * 0.05,
        );
        this.state.crime.heat = 0; // Heat resets on jail? Or maybe drops to 50?
        FX.screenFlash("jail");
        FX.screenShake("lg");
        app.modal(
          "BUSTED!",
          `Police caught you. ${c.jail} months in federal prison.`,
          [{ text: "Damn", cb: () => app.closeModal() }],
        );

        const arrestDeathRisk =
          c.risk * 0.045 +
          this.state.crime.heat * 0.0018 +
          this.state.life.legalRecord * 0.01;
        if (
          this.checkSuddenDeath(
            `Arrested: ${c.name}`,
            arrestDeathRisk,
            "Lethal force incident during arrest",
          )
        ) {
          return;
        }
      } else {
        app.toast("Failed but escaped!", "text-loss");
        this.state.crime.heat += c.heatAdd * 1.5; // Botched job = more heat
        this.state.life.riskDebt = Math.min(
          300,
          this.state.life.riskDebt + c.heatAdd * 0.6,
        );

        const botchedDeathRisk = c.risk * 0.03 + this.state.crime.heat * 0.0015;
        if (
          this.checkSuddenDeath(
            `Botched: ${c.name}`,
            botchedDeathRisk,
            "Killed during a botched operation",
          )
        ) {
          return;
        }
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
      return app.modal("Exhausted", "Too tired to study.");
    this.state.stats.energy -= 20;
    this.state.edu.progress += 0.5; // Speed up degree
    this.modStat("smarts", 0.5); // Gain smarts
    this.registerAction(2);
    app.modal(
      "Studied",
      "You crammed for exams. (+0.5 Progress, +0.5 Smarts)",
      [{ text: "Ok", cb: () => app.closeModal() }],
    );
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

  playCasino(gameId) {
    if (!this.canAct()) return;
    const g = CONFIG.CASINO_GAMES.find((x) => x.id === gameId);

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

    let win = 0;
    let outcome = "loss";

    if (g.id === "slots") {
      if (Math.random() < 0.08) {
        // Jackpot
        win = amt * 15;
        outcome = "jackpot";
      } else if (Math.random() < 0.35) {
        win = amt * 2;
        outcome = "win";
      }
    } else if (g.id === "blackjack") {
      // Skill check could improve odds
      let odds = 0.45 + this.state.stats.smarts * 0.001; // max 0.55
      if (Math.random() < odds) {
        win = amt * 2;
        outcome = "win";
      }
    } else if (g.id === "horse") {
      if (Math.random() < 0.15) {
        win = amt * 6;
        outcome = "win";
      }
    }

    if (win > 0) {
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
      this.state.casino.lastOutcome = outcome === "jackpot" ? "Jackpot" : "Win";
      this.registerAction(outcome === "jackpot" ? 8 : 2);
      app.toast(`Won $${win}!`, outcome === "jackpot" ? "epic" : "success");
      if (outcome === "jackpot") {
        FX.confetti();
        FX.screenShake("lg");
        FX.screenFlash("epic");
        FX.milestoneOverlay("JACKPOT!", `+$${shortNumber(win)}`);
      }
    } else {
      this.state.casino.losses++;
      this.state.casino.net -= amt;
      this.state.casino.streak =
        this.state.casino.streak <= 0 ? this.state.casino.streak - 1 : -1;
      this.state.casino.lastOutcome = "Loss";
      app.toast("Lost...", "text-loss");
    }

    this.state.casino.lastGame = g.name;
    this.state.casino.lastBet = amt;
    this.state.casino.lastWin = win;
    this.state.casino.history.unshift({
      game: g.name,
      result: win > 0 ? (outcome === "jackpot" ? "Jackpot" : "Win") : "Loss",
      bet: amt,
      payout: win,
      net: win - amt,
      age: this.state.age,
    });
    if (this.state.casino.history.length > 8)
      this.state.casino.history.length = 8;

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
  renderAll() {
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
        <div class="panel-header">
            <div class="panel-image">
                <img src="${t.image}" alt="${t.name}" />
            </div>
            <div class="panel-title">
                <h2>${lvl.title}</h2>
                <div class="panel-subtitle">${t.name}</div>
            </div>
            <div style="text-align:right;">
                <span class="tag safe">$${shortNumber(this.state.job.salary)}/yr</span>
            </div>
        </div>

        <div class="stats-grid-2">
            <div>
                <div class="stat-meta-row"><span>Performance</span><span>${this.state.job.performance}%</span></div>
                <div class="progress-bg"><div class="progress-fill" style="width:${this.state.job.performance}%; background:${perfColor};"></div></div>
                
                <div class="stat-meta-row" style="margin-top:12px;"><span>Politics</span><span>${this.state.job.politics || 0}/100</span></div>
                <div class="progress-bg"><div class="progress-fill" style="width:${this.state.job.politics || 0}%; background:var(--accent-purple, #8b5cf6);"></div></div>
            </div>
            <div>
                <div class="stat-meta-row"><span>Stress</span><span>${(this.state.job.stress || 0).toFixed(1)}%</span></div>
                <div class="progress-bg"><div class="progress-fill" style="width:${this.state.job.stress || 0}%; background:var(--accent-red);"></div></div>
                <div class="stat-note">Gain skills over time to promote.</div>
            </div>
        </div>

        <div class="action-grid-3">
            <button class="btn btn-primary btn-multiline" onclick="game.performWork('hard')">
                <span>Grind</span>
                <span class="btn-subtext">+Perf +Stress</span>
            </button>
            <button class="btn btn-outline btn-multiline" onclick="game.performWork('network')">
                <span>Schmooze</span>
                <span class="btn-subtext">+Politics</span>
            </button>
            <button class="btn btn-outline btn-multiline" onclick="game.performWork('slack')">
                 <span>Slack Off</span>
                 <span class="btn-subtext">-Stress -Perf</span>
            </button>
        </div>
        <div class="panel-footer">
            <button class="btn btn-success" onclick="game.askPromotion()">Request Promotion</button>
            <button class="btn btn-danger" onclick="game.quitJob()">Resign</button>
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
            <div class="card-header" style="border-bottom:1px solid var(--border-dim); padding-bottom:12px; margin-bottom:16px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <img src="${track.image}" alt="${track.name}" style="width: 90px; height: 60px; object-fit: cover; border-radius: 6px;">
                    <h3 style="margin:0;">${track.name}</h3>
                </div>
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">`;

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
                    ? `<button class="btn btn-outline" onclick="game.applyJob('${track.id}', ${idx})" ${locked ? "disabled" : ""}>
                        ${locked ? '<i class="fa-solid fa-lock"></i> Locked' : "Apply Now"}
                       </button>`
                    : '<div style="text-align:center;"><span class="tag safe" style="width:100%; display:block; text-align:center;">CURRENT ROLE</span></div>'
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
        return `<div class="tag" style="margin-right:4px; margin-bottom:4px;">${CONFIG.SKILLS[key].name} Lv.${lvl}</div>`;
      })
      .join("");

    // Inject skills into edu list top for visibility
    const eduEl = document.getElementById("edu-list");
    if (eduEl && !document.getElementById("skill-cloud")) {
      let d = document.createElement("div");
      d.id = "skill-cloud";
      d.style.gridColumn = "span 2";
      d.style.marginBottom = "16px";
      d.innerHTML = `<h4 style="color:#888; margin-bottom:8px;">My Skills XP</h4><div style="display:flex; flex-wrap:wrap;">${skillHTML || '<span style="color:#666; font-size:0.8rem;">No skills yet. Get a job to learn.</span>'}</div>`;
      eduEl.prepend(d);
    } else if (document.getElementById("skill-cloud")) {
      document.getElementById("skill-cloud").innerHTML =
        `<h4 style="color:#888; margin-bottom:8px;">My Skills XP</h4><div style="display:flex; flex-wrap:wrap;">${skillHTML || '<span style="color:#666; font-size:0.8rem;">No skills yet. Get a job to learn.</span>'}</div>`;
    }

    // --- DASHBOARD CRIME ---
    document.getElementById("meter-heat").style.width =
      Math.min(100, this.state.crime.heat) + "%";
    document.getElementById("heat-label").innerText =
      this.state.crime.heat > 80
        ? "MANHUNT"
        : this.state.crime.heat > 50
          ? "HOT"
          : this.state.crime.heat > 20
            ? "SUSPICIOUS"
            : "CLEAR";
    document.getElementById("stat-rep").innerText = this.state.crime.rep;
    document.getElementById("rep-level").innerText =
      Math.floor(this.state.crime.rep / 100) + 1;

    document.getElementById("crime-list").innerHTML = CONFIG.CRIMES.map((c) => {
      let locked = this.state.crime.rep < c.reqRep;
      let successChance = Math.max(
        0.05,
        Math.min(
          0.95,
          c.baseChance -
            this.state.crime.heat * 0.005 +
            this.state.stats.smarts * 0.002,
        ),
      );
      let color =
        successChance > 0.7
          ? "var(--accent-green)"
          : successChance > 0.4
            ? "var(--accent-amber)"
            : "var(--accent-red)";

      let riskVal = ((1 - successChance) * 100).toFixed(0);

      return `
             <div class="card" ${locked ? 'style="opacity:0.5; pointer-events:none;"' : ""}>
                <div class="card-header">
                    <div>
                        <h3>${c.name}</h3>
                        <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px;">${c.type}</div>
                    </div>
                    ${locked ? `<span class="tag" style="border-color:var(--text-muted);">Need ${c.reqRep} Rep</span>` : `<span class="tag" style="color:${color}; border-color:${color}; background:rgba(0,0,0,0.2);">Risk: ${riskVal}%</span>`}
                </div>
                <p>${c.desc}</p>
                <div style="margin: 12px 0; padding:8px; background:rgba(255,255,255,0.03); border-radius:4px; font-size:0.8rem; display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                     <div style="display:flex; flex-direction:column;">
                        <span style="color:var(--text-muted); font-size:0.7em;">PAYOUT</span>
                        <span style="color:var(--accent-green); font-weight:600;">$${c.reward[0] / 1000}k - $${c.reward[1] / 1000}k</span>
                     </div>
                     <div style="display:flex; flex-direction:column; text-align:right;">
                        <span style="color:var(--text-muted); font-size:0.7em;">JAIL TIME</span>
                        <span style="color:var(--accent-red); font-weight:600;">${c.jail} mo</span>
                     </div>
                </div>
                ${
                  !locked
                    ? `
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;">
                    <span>Success Chance</span>
                    <span>${(successChance * 100).toFixed(0)}%</span>
                </div>
                <div class="progress-bg" style="height:6px; margin-bottom:16px; border-radius:3px;">
                    <div class="progress-fill" style="width:${successChance * 100}%; background:${color}; border-radius:3px;"></div>
                </div>
                <button class="btn btn-danger" onclick="game.commitCrime('${c.id}')"><i class="fa-solid fa-mask"></i> COMMIT CRIME</button>`
                    : '<button class="btn btn-outline" disabled><i class="fa-solid fa-lock"></i> LOCKED</button>'
                }
            </div>
            `;
    }).join("");

    // --- STARTUPS ---
    // Business dashboard
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
        totalVal >= 1e6
          ? `$${(totalVal / 1e6).toFixed(1)}M`
          : `$${(totalVal / 1000).toFixed(0)}K`;
      document.getElementById("biz-employees").innerText = totalEmp;
      const bizNetEl = document.getElementById("biz-net");
      if (bizNetEl) {
        bizNetEl.innerText = `${totalNet >= 0 ? "+" : ""}$${shortNumber(Math.round(totalNet))}`;
        bizNetEl.style.color =
          totalNet >= 0 ? "var(--accent-green)" : "var(--accent-red)";
      }

      // Auto-guide: show contextual help based on current state
      let guideHtml = "";
      if (this.state.startups.length === 0) {
        guideHtml = `<div class="biz-guide">
          <div class="biz-guide-title"><i class="fa-solid fa-lightbulb"></i> How to Start a Business</div>
          <div class="biz-guide-steps">
            <div class="biz-guide-step"><span class="biz-step-num">1</span><span>Save up at least $4K (E-Commerce is cheapest)</span></div>
            <div class="biz-guide-step"><span class="biz-step-num">2</span><span>Pick an industry below — E-Commerce or EdTech are easiest</span></div>
            <div class="biz-guide-step"><span class="biz-step-num">3</span><span>Hire 2 Developers first — they build your product</span></div>
            <div class="biz-guide-step"><span class="biz-step-num">4</span><span>Once you have 5+ features, hire 1 Sales person to get users</span></div>
            <div class="biz-guide-step"><span class="biz-step-num">5</span><span>Use <b>Invest</b> to fund your startup and <b>Morale</b> to keep team happy</span></div>
            <div class="biz-guide-step"><span class="biz-step-num">6</span><span>Add Marketing when PMF > 25%, then Exit (IPO/Sell) when valued high</span></div>
          </div>
        </div>`;
      } else {
        // Show specific tips for each startup
        const tips = [];
        this.state.startups.forEach((s, i) => {
          const teamSize =
            s.staff.dev + s.staff.sales + s.staff.mkt + s.staff.exec;
          const pmf = s.market.pmf;
          const profit = s.financials.rev - s.financials.burn;
          const runway = s.financials.months_runway;
          const morale = s.staff.morale;

          if (teamSize === 0)
            tips.push(
              `<b>${s.name}</b>: Hire Developers! You need a team to build anything.`,
            );
          else if (s.staff.dev === 0)
            tips.push(
              `<b>${s.name}</b>: No developers! Hire devs — they build your product.`,
            );
          else if (morale < 40)
            tips.push(
              `<b>${s.name}</b>: ⚠️ Morale is only ${morale.toFixed(0)}%! Use <b>Boost Morale</b> or your team will underperform.`,
            );
          else if (runway < 4 && profit < 0)
            tips.push(
              `<b>${s.name}</b>: ⚠️ Low runway (${runway.toFixed(0)}mo)! Use <b>Invest</b> to add your personal cash, or seek <b>Funding</b>.`,
            );
          else if (s.product.features < 5 && s.staff.sales > 0)
            tips.push(
              `<b>${s.name}</b>: Too early for sales. Focus on devs to build features first.`,
            );
          else if (pmf < 0.25 && s.staff.mkt > 0 && s.product.features < 10)
            tips.push(
              `<b>${s.name}</b>: Marketing is wasted at low PMF. Build more features first.`,
            );
          else if (pmf > 0.25 && s.staff.sales === 0)
            tips.push(
              `<b>${s.name}</b>: PMF is ${(pmf * 100).toFixed(0)}%! Hire Sales to start getting paying users.`,
            );
          else if (pmf > 0.4 && s.staff.mkt === 0)
            tips.push(
              `<b>${s.name}</b>: Good PMF! Add Marketing to accelerate user growth.`,
            );
          else if (profit > 3000 && teamSize < 6)
            tips.push(
              `<b>${s.name}</b>: You're profitable! Consider scaling your team for faster growth.`,
            );
          else if (s.financials.val > 100000)
            tips.push(
              `<b>${s.name}</b>: Valuation $${(s.financials.val / 1000).toFixed(0)}K! Consider an Exit (IPO or Sale).`,
            );
          else if (profit > 0)
            tips.push(
              `<b>${s.name}</b>: ✅ Profitable! Keep growing or Exit when you're ready.`,
            );
        });
        if (tips.length > 0) {
          guideHtml = `<div class="biz-guide biz-guide-tips">
            <div class="biz-guide-title"><i class="fa-solid fa-compass"></i> What To Do Next</div>
            <div class="biz-guide-tip-list">${tips.map((t) => `<div class="biz-guide-tip">${t}</div>`).join("")}</div>
          </div>`;
        }
      }
      bizDashboard.innerHTML = guideHtml;
    }

    // Startup type grid
    const typeGrid = document.getElementById("startup-type-grid");
    if (typeGrid) {
      typeGrid.innerHTML = CONFIG.STARTUP_TYPES.map((t) => {
        const canAfford = this.state.cash >= t.cost;
        return `<div class="biz-type-card ${canAfford ? "" : "biz-type-locked"}" onclick="${canAfford ? `game._createStartup('${t.id}')` : ""}">
          <div class="biz-type-icon" style="color:${t.color};background:${t.color}22"><i class="fa-solid ${t.icon}"></i></div>
          <div class="biz-type-info">
            <span class="biz-type-name">${t.name}</span>
            <span class="biz-type-cost">${canAfford ? `$${shortNumber(t.cost)}` : `Need $${shortNumber(t.cost)}`}</span>
          </div>
          <div class="biz-type-meta">
            <span title="Difficulty">${"●".repeat(Math.ceil(t.difficulty))}${"○".repeat(3 - Math.ceil(t.difficulty))}</span>
            <span title="Upside">${t.upside}x</span>
          </div>
        </div>`;
      }).join("");
    }

    // Active startups title
    const activeTitle = document.getElementById("active-startups-title");
    if (activeTitle)
      activeTitle.style.display = this.state.startups.length ? "" : "none";

    document.getElementById("startup-list").innerHTML = this.state.startups
      .map((s, i) => {
        const pmfPct = (s.market.pmf * 100).toFixed(0);
        const users =
          s.market.users > 1000
            ? (s.market.users / 1000).toFixed(1) + "k"
            : s.market.users.toFixed(0);
        const burn = s.financials.burn;
        const rev = s.financials.rev;
        const runway = Math.max(0, s.financials.months_runway).toFixed(1);
        const profit = rev - burn;
        const profitColor =
          profit >= 0 ? "var(--accent-green)" : "var(--accent-red)";
        const cashColor =
          s.financials.cash < burn * 3
            ? "var(--accent-red)"
            : "var(--accent-green)";
        const typeInfo =
          CONFIG.STARTUP_TYPES.find((t) => t.id === s.info.type) || {};
        const typeColor = typeInfo.color || "#a78bfa";
        const moraleFill =
          s.staff.morale > 60
            ? "#34d399"
            : s.staff.morale > 30
              ? "#fbbf24"
              : "#ef4444";
        const runwayColor =
          parseFloat(runway) > 6
            ? "#34d399"
            : parseFloat(runway) > 3
              ? "#fbbf24"
              : "#ef4444";

        // Render Roles
        const roleHtml = Object.keys(CONFIG.STARTUP_ROLES)
          .map((role) => {
            const r = CONFIG.STARTUP_ROLES[role];
            return `<div class="biz-role-row">
                <div class="biz-role-info">
                    <span class="biz-role-icon"><i class="fa-solid ${r.icon}"></i></span>
                    <div>
                      <span class="biz-role-name">${role.toUpperCase()}</span>
                      <span class="biz-role-desc">${r.desc}</span>
                    </div>
                </div>
                <div class="biz-role-controls">
                    <button class="biz-role-btn" onclick="game.manageStartup(${i}, 'fire', '${role}')"><i class="fa-solid fa-minus"></i></button>
                    <span class="biz-role-count">${s.staff[role]}</span>
                    <button class="biz-role-btn biz-role-hire" onclick="game.manageStartup(${i}, 'hire', '${role}')"><i class="fa-solid fa-plus"></i></button>
                    <span class="biz-role-salary">$${r.salary}/mo</span>
                </div>
            </div>`;
          })
          .join("");

        return `<div class="card biz-startup-card" style="grid-column: span 2; border-color:${typeColor}33">
          <!-- Header -->
          <div class="biz-card-header">
            <div class="biz-card-title">
              <div class="biz-card-icon" style="background:${typeColor}22;color:${typeColor}"><i class="fa-solid ${typeInfo.icon || "fa-building"}"></i></div>
              <div>
                <h3>${s.name}</h3>
                <span class="tag" style="background:${typeColor}22;color:${typeColor};border-color:${typeColor}44">${(typeInfo.name || s.info.type).toUpperCase()}</span>
              </div>
            </div>
            <div class="biz-card-profit">
              <span style="color:${profitColor};font-size:1.2rem;font-weight:800">${profit >= 0 ? "+" : ""}$${shortNumber(Math.round(profit))}<small>/mo</small></span>
              <span class="biz-card-users"><i class="fa-solid fa-users"></i> ${users} users</span>
            </div>
          </div>

          <!-- Key Metrics -->
          <div class="biz-metrics-row">
            <div class="biz-metric">
              <span class="biz-metric-label">VALUATION</span>
              <span class="biz-metric-value">$${s.financials.val >= 1e6 ? (s.financials.val / 1e6).toFixed(1) + "M" : (s.financials.val / 1000).toFixed(0) + "K"}</span>
            </div>
            <div class="biz-metric">
              <span class="biz-metric-label">CASH</span>
              <span class="biz-metric-value" style="color:${cashColor}">$${(s.financials.cash / 1000).toFixed(1)}K</span>
            </div>
            <div class="biz-metric">
              <span class="biz-metric-label">RUNWAY</span>
              <span class="biz-metric-value" style="color:${runwayColor}">${runway}mo</span>
            </div>
            <div class="biz-metric">
              <span class="biz-metric-label">BURN</span>
              <span class="biz-metric-value" style="color:var(--accent-red)">$${shortNumber(Math.round(burn))}</span>
            </div>
          </div>

          <!-- Product & Growth -->
          <div class="biz-section-grid">
            <div class="biz-section">
              <h4 class="biz-section-title"><i class="fa-solid fa-code-branch"></i> Product</h4>
              <div class="biz-pmf-bar">
                <div class="biz-pmf-label"><span>Product-Market Fit</span><span style="color:${pmfPct >= 50 ? "#34d399" : pmfPct >= 25 ? "#fbbf24" : "#ef4444"}">${pmfPct}%</span></div>
                <div class="progress-bg" style="height:8px;border-radius:4px"><div class="progress-fill" style="width:${pmfPct}%;background:${pmfPct >= 50 ? "#34d399" : pmfPct >= 25 ? "#fbbf24" : "#ef4444"};border-radius:4px;transition:width 0.5s"></div></div>
              </div>
              <div class="biz-product-stats">
                <div class="biz-pstat"><i class="fa-solid fa-puzzle-piece"></i><span>${s.product.features.toFixed(0)}</span><small>Features</small></div>
                <div class="biz-pstat biz-pstat-bad"><i class="fa-solid fa-bug"></i><span>${s.product.bugs.toFixed(0)}</span><small>Bugs</small></div>
              </div>
            </div>
            <div class="biz-section">
              <h4 class="biz-section-title"><i class="fa-solid fa-users-gear"></i> Team <span class="biz-morale-tag" style="color:${moraleFill}">${s.staff.morale.toFixed(0)}% morale</span></h4>
              ${roleHtml}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="biz-actions">
            <button class="btn biz-action-btn biz-act-invest" onclick="game.investInStartup(${i})" title="Invest your personal cash into the company"><i class="fa-solid fa-piggy-bank"></i> Invest</button>
            <button class="btn biz-action-btn biz-act-morale" onclick="game.boostMorale(${i})" title="Throw a team event to boost morale ($500)"><i class="fa-solid fa-champagne-glasses"></i> Morale</button>
            <button class="btn biz-action-btn biz-act-campaign" onclick="game.runMarketingCampaign(${i})" title="Launch a marketing campaign to gain users"><i class="fa-solid fa-bullhorn"></i> Campaign</button>
            <button class="btn biz-action-btn biz-act-funding" onclick="game.seekFunding(${i})" title="Pitch investors for funding"><i class="fa-solid fa-hand-holding-dollar"></i> Funding</button>
            <button class="btn biz-action-btn biz-act-pivot" onclick="game.pivotStartup(${i})" title="Change your industry"><i class="fa-solid fa-rotate"></i> Pivot</button>
            <button class="btn biz-action-btn biz-act-exit" onclick="game.exitStartup(${i})" title="IPO or sell your company"><i class="fa-solid fa-door-open"></i> Exit</button>
            <button class="btn biz-action-btn biz-act-advisor" onclick="game.getAdvisorTip(${i})" title="Get expert advice ($1,000)"><i class="fa-solid fa-lightbulb"></i> Advisor <small>$1K</small></button>
          </div>
        </div>`;
      })
      .join("");

    const hustleList = document.getElementById("hustle-list");
    if (hustleList) {
      hustleList.innerHTML = CONFIG.SIDE_HUSTLES.map((h) => {
        const canDo =
          this.state.stats.smarts >= h.reqSmarts &&
          this.state.stats.energy >= h.energy &&
          !this.state.life.dead &&
          !this.state.life.retired;
        return `<div class="card">
          <div class="card-header">
            <h3>${h.name}</h3>
            <span class="tag">$${h.payout[0]} - $${h.payout[1]}</span>
          </div>
          <p>${h.desc}</p>
          <div style="font-size:0.8rem; color:var(--text-muted); margin:10px 0 14px; display:flex; justify-content:space-between;">
            <span>Smarts: ${h.reqSmarts}</span>
            <span>Energy: ${h.energy}</span>
          </div>
          <button class="btn btn-primary" onclick="game.doHustle('${h.id}')" ${canDo ? "" : "disabled"}>
            ${canDo ? "Run Hustle" : "Locked / Tired"}
          </button>
        </div>`;
      }).join("");
    }

    const contractList = document.getElementById("contract-list");
    if (contractList) {
      contractList.innerHTML = CONFIG.HIGH_TICKET_CONTRACTS.map((c) => {
        const canDo =
          this.state.stats.smarts >= c.reqSmarts &&
          this.state.stats.energy >= c.energy &&
          !this.state.life.dead &&
          !this.state.life.retired;
        return `<div class="card">
          <div class="card-header">
            <h3>${c.name}</h3>
            <span class="tag safe">$${c.payout[0]} - $${c.payout[1]}</span>
          </div>
          <p>${c.desc}</p>
          <div style="font-size:0.8rem; color:var(--text-muted); margin:10px 0 14px; display:flex; justify-content:space-between;">
            <span>Smarts: ${c.reqSmarts}</span>
            <span>Energy: ${c.energy}</span>
          </div>
          <button class="btn btn-success" onclick="game.doContract('${c.id}')" ${canDo ? "" : "disabled"}>
            ${canDo ? "Take Contract" : "Locked / Tired"}
          </button>
        </div>`;
      }).join("");
    }

    const creatorList = document.getElementById("creator-list");
    if (creatorList) {
      const launchCards = CONFIG.CHANNEL_TYPES.map((t) => {
        const canLaunch =
          this.state.stats.smarts >= t.reqSmarts &&
          this.state.cash >= t.cost &&
          !this.state.life.dead &&
          !this.state.life.retired;
        return `<div class="card">
          <div class="card-header">
            <h3>${t.name}</h3>
            <span class="tag">$${shortNumber(t.cost)}</span>
          </div>
          <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:14px;">
            Smarts ${t.reqSmarts}+ • RPM ${t.rpm.toFixed(1)} • Vol ${(t.volatility * 100).toFixed(0)}%
          </div>
          <button class="btn btn-outline" onclick="game.launchChannel('${t.id}')" ${canLaunch ? "" : "disabled"}>
            Launch Channel
          </button>
        </div>`;
      }).join("");

      const activeChannels = this.state.wealth.channels.length
        ? this.state.wealth.channels
            .map((c, idx) => {
              const t = CONFIG.CHANNEL_TYPES.find((x) => x.id === c.typeId);
              if (!t) return "";
              const growthCost = Math.floor(250 + c.audience * 2.2);
              return `<div class="card">
                <div class="card-header">
                  <h3>${t.name}</h3>
                  <span class="tag safe">LIVE</span>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.8rem; margin-bottom:12px;">
                  <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:4px;">
                    <div style="color:var(--text-muted);">Audience</div>
                    <div style="font-family:var(--font-mono); color:#fff;">${shortNumber(Math.floor(c.audience))}</div>
                  </div>
                  <div style="background:rgba(255,255,255,0.03); padding:8px; border-radius:4px;">
                    <div style="color:var(--text-muted);">Last Month</div>
                    <div style="font-family:var(--font-mono); color:var(--accent-green);">$${shortNumber(Math.floor(c.monthly))}</div>
                  </div>
                </div>
                <button class="btn btn-primary" onclick="game.growChannel(${idx})">
                  Promote Content ($${shortNumber(growthCost)})
                </button>
              </div>`;
            })
            .join("")
        : `<div class="card" style="grid-column: span 2;"><p style="margin:0; color:var(--text-muted);">No creator channels yet. Launch one above for recurring income.</p></div>`;

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
      franchiseList.innerHTML = CONFIG.FRANCHISES.map((f) => {
        const owned = this.state.wealth.franchises?.[f.id] || 0;
        return `<div class="card">
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
      propertyList.innerHTML = CONFIG.PROPERTIES.map((p) => {
        const owned = this.state.wealth.properties[p.id] || 0;
        return `<div class="card">
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
      dividendList.innerHTML = CONFIG.DIVIDEND_FUNDS.map((fund) => {
        const units = this.state.wealth.dividends?.[fund.id] || 0;
        const livePrice =
          this.state.wealth.dividendPrices?.[fund.id] ?? fund.unitPrice;
        const estMonthly = (livePrice * units * fund.yieldAnnual) / 12;
        return `<div class="card">
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

      bankOverview.innerHTML = `
        <div class="card-header">
          <h3><i class="fa-solid fa-shield-halved"></i> Financial Health</h3>
          <span class="tag" style="color:${scoreColor}; border-color:${scoreColor};"><i class="fa-solid fa-star"></i> ${Math.round(bank.creditScore)}</span>
        </div>
        <div class="data-grid-4">
          <div class="data-box">
            <div class="data-label">Checking</div>
            <div class="data-value">$${shortNumber(Math.floor(bank.checking))}</div>
          </div>
          <div class="data-box">
            <div class="data-label">Savings</div>
            <div class="data-value">$${shortNumber(Math.floor(bank.savings))}</div>
          </div>
          <div class="data-box">
            <div class="data-label">Monthly Debt</div>
            <div class="data-value" style="color:${debtService > 0 ? "var(--red)" : "inherit"}">$${shortNumber(Math.floor(debtService))}</div>
          </div>
          <div class="data-box">
            <div class="data-label">Credit Used</div>
            <div class="data-value">${(utilization * 100).toFixed(0)}%</div>
          </div>
        </div>`;

      bankAccounts.innerHTML = `
        <div class="card">
          <div class="card-header">
            <h3><i class="fa-solid fa-arrows-rotate"></i> Transfer Money</h3>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:10px;">
            <button class="btn btn-outline" onclick="game.transferBankFunds('cash','checking',500)"><i class="fa-solid fa-arrow-right"></i> Deposit $500</button>
            <button class="btn btn-outline" onclick="game.transferBankFunds('checking','cash',500)"><i class="fa-solid fa-arrow-left"></i> Withdraw $500</button>
            <button class="btn btn-primary" onclick="game.transferBankFunds('cash','savings',2000)"><i class="fa-solid fa-piggy-bank"></i> Save $2,000</button>
            <button class="btn btn-outline" onclick="game.transferBankFunds('savings','checking',1000)"><i class="fa-solid fa-arrow-down"></i> From Savings $1k</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h3><i class="fa-solid fa-lock"></i> CDs</h3>
            <span class="tag safe">Guaranteed</span>
          </div>
          <p style="font-size:.78rem;color:var(--text-muted);margin:6px 0">Lock money away for higher interest rates.</p>
          <div style="display:grid; gap:6px;">
            ${CONFIG.BANK_PRODUCTS.cdOffers
              .map(
                (offer) =>
                  `<button class="btn btn-outline" onclick="game.openBankCd('${offer.id}')">${offer.name} \u2022 ${(offer.apy * 100).toFixed(1)}% APY \u2022 Min $${shortNumber(offer.minDeposit)}</button>`,
              )
              .join("")}
          </div>
        </div>`;

      bankCredit.innerHTML = `
        <div class="card">
          <div class="card-header">
            <h3><i class="fa-solid fa-credit-card"></i> Credit Card</h3>
            <span class="tag ${utilization > 0.8 ? "risk" : utilization > 0.3 ? "warning" : "safe"}">${(utilization * 100).toFixed(0)}% Used</span>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(90px,1fr));gap:10px;margin:12px 0">
            <div class="mini-stat-box"><span>Balance</span><strong style="color:${cc.balance > 0 ? "var(--red)" : "inherit"}">$${shortNumber(Math.floor(cc.balance))}</strong></div>
            <div class="mini-stat-box"><span>Limit</span><strong>$${shortNumber(Math.floor(cc.limit))}</strong></div>
            <div class="mini-stat-box"><span>APR</span><strong>${(cc.apr * 100).toFixed(1)}%</strong></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <button class="btn btn-outline" onclick="game.takeCreditCashAdvance(500)"><i class="fa-solid fa-plus"></i> Borrow $500</button>
            <button class="btn btn-primary" onclick="game.payCreditCard(500)"><i class="fa-solid fa-minus"></i> Pay $500</button>
            <button class="btn btn-outline" onclick="game.takeCreditCashAdvance(2000)"><i class="fa-solid fa-plus"></i> Borrow $2k</button>
            <button class="btn btn-primary" onclick="game.payCreditCard(2000)"><i class="fa-solid fa-minus"></i> Pay $2k</button>
          </div>
        </div>`;

      bankLoanOffers.innerHTML = CONFIG.BANK_PRODUCTS.loanOffers
        .map((offer) => {
          const eligibleScore = bank.creditScore >= offer.minScore;
          const dtiGate = dti <= 0.68;
          const canApply = eligibleScore && dtiGate;
          return `<div class="card" style="opacity:${canApply ? 1 : 0.72};">
            <div class="card-header">
              <h3>${offer.name}</h3>
              <span class="tag">$${shortNumber(offer.principal)}</span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px; display:grid; gap:2px;">
              <span>Term: ${offer.termMonths} months</span>
              <span>Base APR: ${(offer.baseApr * 100).toFixed(2)}%</span>
              <span>Min Score: ${offer.minScore}</span>
            </div>
            <button class="btn btn-primary" onclick="game.applyBankLoan('${offer.id}')" ${canApply ? "" : "disabled"}>
              ${canApply ? "Apply Now" : "Credit / DTI Too Weak"}
            </button>
          </div>`;
        })
        .join("");

      const activeLoanCards = bank.loans.length
        ? bank.loans
            .map(
              (loan) => `<div class="card">
              <div class="card-header">
                <h3>${loan.name}</h3>
                <span class="tag risk">$${shortNumber(Math.floor(loan.principal))}</span>
              </div>
              <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:10px; display:grid; gap:2px;">
                <span>APR ${(loan.apr * 100).toFixed(2)}% • ${loan.termLeft} months left</span>
                <span>Payment $${shortNumber(Math.floor(loan.monthlyPayment))}/mo</span>
                <span>Missed: ${loan.missedPayments || 0}</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                <button class="btn btn-success" onclick="game.payLoanExtra('${loan.id}', 500)">Extra $500</button>
                <button class="btn btn-success" onclick="game.payLoanExtra('${loan.id}', 2000)">Extra $2,000</button>
              </div>
            </div>`,
            )
            .join("")
        : `<div class="card" style="grid-column: span 2;"><p style="margin:0; color:var(--text-muted);">No active installment loans.</p></div>`;

      const cdCards = bank.cds.length
        ? bank.cds
            .map(
              (cd) => `<div class="card">
              <div class="card-header">
                <h3>${cd.name}</h3>
                <span class="tag safe">${cd.termLeft}m left</span>
              </div>
              <div style="font-size:0.8rem; color:var(--text-muted); display:grid; gap:2px;">
                <span>Balance: $${shortNumber(Math.floor(cd.balance))}</span>
                <span>APY: ${(cd.apy * 100).toFixed(2)}%</span>
              </div>
            </div>`,
            )
            .join("")
        : `<div class="card"><p style="margin:0; color:var(--text-muted);">No active CDs.</p></div>`;

      bankActiveLoans.innerHTML = activeLoanCards + cdCards;
    }

    // --- MARKET ---
    if (document.getElementById("ticker-text"))
      document.getElementById("ticker-text").innerText = this.state.economy
        .news[0]
        ? this.state.economy.news[0].msg
        : "Market Open.";
    document.getElementById("market-list").innerHTML = CONFIG.ASSETS.map(
      (def) => {
        let asset = this.state.assets[def.id];
        let colorClass = asset.trend >= 0 ? "text-gain" : "text-loss";
        return `
        <div class="card" style="padding:12px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span style="font-weight:bold; color:#fff;">${def.name}</span>
            <span style="color:#666; font-size:10px;">${def.id.toUpperCase()}</span>
          </div>
          <div style="font-size:1.4rem; font-family:'JetBrains Mono'; color:#fff; margin-bottom:4px;">$${asset.price.toFixed(2)}</div>
          <div class="${colorClass}" style="font-size:11px; font-family:'JetBrains Mono';">${asset.trend >= 0 ? "▲" : "▼"} ${(asset.trend * 100).toFixed(2)}%</div>
          <div style="margin-top:12px; font-size:11px; color:#888;">Owned: <span style="color:#fff">${asset.owned}</span></div>

          <div style="display:flex; gap:8px; align-items:center; margin-top:10px;">
            <input id="market-qty-${def.id}" type="number" min="1" value="1" step="1" aria-label="Quantity for ${def.id.toUpperCase()}" style="width:84px; padding:6px; border-radius:8px; background:transparent; color:#fff; border:1px solid var(--border-dim);" />
            <div style="margin-left:auto; display:flex; gap:8px;">
              <button class="btn btn-ghost" style="padding:6px 8px;" onclick="(function(){const el=document.getElementById('market-qty-${def.id}'); el.value = Math.max(1, parseInt(el.value||1)+1);})()">+1</button>
              <button class="btn btn-ghost" style="padding:6px 8px;" onclick="(function(){const el=document.getElementById('market-qty-${def.id}'); el.value = Math.max(1, parseInt(el.value||1)-1);})()">-1</button>
              <button class="btn btn-outline" style="padding:6px 8px;" onclick="game.buyMax('${def.id}')">Buy Max</button>
              <button class="btn btn-success" style="margin:0; padding:6px;" onclick="game.trade('${def.id}', true, parseInt(document.getElementById('market-qty-${def.id}').value || 1))">BUY</button>
              <button class="btn btn-danger" style="margin:0; padding:6px;" onclick="game.trade('${def.id}', false, parseInt(document.getElementById('market-qty-${def.id}').value || 1))">SELL</button>
            </div>
          </div>
        </div>`;
      },
    ).join("");

    document.getElementById("shop-list").innerHTML = CONFIG.ITEMS.map(
      (it) => `
        <div class="card">
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
        return `<div class="card" style="${disabled ? "opacity:0.65;" : ""}">
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
              <div class="card-header">
                 <div style="display:flex; flex-direction:column;">
                    <span class="edu-label">Enrolled In</span>
                    <h3 class="edu-title">${d.name}</h3>
                 </div>
                 <span class="tag safe">Month ${this.state.edu.progress}/${d.duration}</span>
              </div>
              <div class="progress-bg" style="margin:20px 0;"><div class="progress-fill" style="width:${progressPct}%; background:var(--green);"></div></div>
              <div class="edu-meta">
                  <span><i class="fa-solid fa-coins" style="margin-right:8px; color:var(--red);"></i>Loan: <span style="color:var(--red);">$${shortNumber(Math.floor(this.state.edu.loans || 0))}</span></span>
                  <span><i class="fa-solid fa-brain" style="margin-right:8px; color:var(--blue);"></i>IQ Req: ${d.iqReq} (You: ${this.state.stats.smarts.toFixed(0)})</span>
              </div>
              <div class="edu-actions">
                 <button class="btn btn-primary" onclick="game.studyHard()">
                    <i class="fa-solid fa-book-open"></i> Study Hard <span style="opacity:0.6; font-size:0.8em; margin-left:4px;">(-20 NRG)</span>
                 </button>
                 <button class="btn btn-danger" onclick="game.dropOut()" style="width:auto;">Drop Out</button>
              </div>
           </div>
        `;
    } else {
      eduList.innerHTML = CONFIG.DEGREES.map((d) => {
        let owned = this.state.edu.degrees.includes(d.id);
        if (owned && d.id !== "basic")
          return `<div class="card" style="opacity:0.6;"><div class="card-header"><h3>${d.name}</h3><span class="tag safe"><i class="fa-solid fa-check"></i> COMPLETED</span></div></div>`;

        return `<div class="card">
                <div class="card-header">
                    <h3>${d.name}</h3>
                    <span class="tag">$${shortNumber(d.cost)}</span>
                </div>
                <div style="margin-bottom:16px;">
                    <p style="font-size:0.85rem; display:flex; gap:8px; align-items:center;"><i class="fa-solid fa-clock" style="color:#666;"></i> ${d.duration} Months</p>
                    <p style="font-size:0.85rem; display:flex; gap:8px; align-items:center; margin-top:4px;"><i class="fa-solid fa-brain" style="color:#666;"></i> ${d.iqReq} IQ Req</p>
                </div>
                <button class="btn btn-outline" onclick="game.enroll('${d.id}')">Enroll Now</button>
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

    const casinoList = document.getElementById("casino-games-list");
    if (casinoList) {
      const casino = this.state.casino;
      const totalBets = casino.wins + casino.losses;
      const winRate = totalBets
        ? `${Math.round((casino.wins / totalBets) * 100)}%`
        : "0%";
      const rtp = casino.wagered
        ? `${((casino.paidOut / casino.wagered) * 100).toFixed(1)}%`
        : "0.0%";
      const avgBet = casino.lifetimeSpins
        ? Math.round(casino.wagered / casino.lifetimeSpins)
        : 0;
      const streakLabel =
        casino.streak > 0
          ? `Heater +${casino.streak}`
          : casino.streak < 0
            ? `Cold ${casino.streak}`
            : "Neutral";

      const netTag = document.getElementById("casino-lifetime-net");
      if (netTag) {
        netTag.innerText = `${casino.net >= 0 ? "+" : "-"}$${shortNumber(Math.abs(casino.net))}`;
        netTag.classList.remove("safe", "risk");
        netTag.classList.add(casino.net >= 0 ? "safe" : "risk");
      }

      const totalBetsEl = document.getElementById("casino-total-bets");
      const winRateEl = document.getElementById("casino-win-rate");
      const streakEl = document.getElementById("casino-streak");
      const bestPayoutEl = document.getElementById("casino-best-payout");
      const intelEl = document.getElementById("casino-intel-card");
      const lastOutcomeEl = document.getElementById("casino-last-outcome");
      const recentListEl = document.getElementById("casino-recent-list");

      if (totalBetsEl) totalBetsEl.innerText = shortNumber(totalBets);
      if (winRateEl) winRateEl.innerText = winRate;
      if (streakEl) streakEl.innerText = streakLabel;
      if (bestPayoutEl)
        bestPayoutEl.innerText = `$${shortNumber(casino.bestPayout || 0)}`;

      if (lastOutcomeEl)
        lastOutcomeEl.innerText =
          casino.lastOutcome && casino.lastGame
            ? `${casino.lastOutcome} - ${casino.lastGame}`
            : "No hands yet";

      const bankrollPressure =
        this.state.cash <= avgBet * 2
          ? "High"
          : this.state.cash <= avgBet * 6
            ? "Medium"
            : "Low";

      if (intelEl) {
        intelEl.innerHTML = `
          <div class="card-header">
            <h3>Table Intelligence</h3>
            <span class="tag">RTP ${rtp}</span>
          </div>
          <div class="casino-intel-grid">
            <div class="casino-intel-item">
              <span>Avg Bet</span>
              <strong>$${shortNumber(avgBet)}</strong>
            </div>
            <div class="casino-intel-item">
              <span>Bankroll Pressure</span>
              <strong>${bankrollPressure}</strong>
            </div>
            <div class="casino-intel-item">
              <span>Last Hand</span>
              <strong>${casino.lastBet ? `$${shortNumber(casino.lastBet)}` : "N/A"}</strong>
            </div>
            <div class="casino-intel-item">
              <span>Last Payout</span>
              <strong>${casino.lastWin ? `$${shortNumber(casino.lastWin)}` : "$0"}</strong>
            </div>
          </div>
          <p class="casino-intel-tip">Tip: Keep average bet below 12% of liquid cash to reduce bust risk during cold streaks.</p>
        `;
      }

      if (recentListEl) {
        if (!casino.history.length) {
          recentListEl.innerHTML = `<div class="casino-recent-empty">Play a hand to populate table history.</div>`;
        } else {
          recentListEl.innerHTML = casino.history
            .map(
              (
                entry,
              ) => `<div class="casino-recent-row ${entry.net >= 0 ? "up" : "down"}">
              <span>${entry.game}</span>
              <span>${entry.result}</span>
              <span>Bet $${shortNumber(entry.bet)}</span>
              <span>${entry.net >= 0 ? "+" : "-"}$${shortNumber(Math.abs(entry.net))}</span>
            </div>`,
            )
            .join("");
        }
      }

      const gameMeta = {
        slots: {
          icon: "fa-solid fa-cherry",
          edge: "5%",
          volatility: "High",
          line: "Fast outcomes, streaky returns",
          cta: "Spin Table",
        },
        blackjack: {
          icon: "fa-solid fa-spade",
          edge: "1-3%",
          volatility: "Medium",
          line: "Best odds with disciplined sizing",
          cta: "Deal Hand",
        },
        horse: {
          icon: "fa-solid fa-horse-head",
          edge: "8-12%",
          volatility: "Very High",
          line: "Huge upside, heavy drawdowns",
          cta: "Open Track",
        },
      };

      casinoList.innerHTML = CONFIG.CASINO_GAMES.map((g) => {
        const m = gameMeta[g.id] || {
          icon: "fa-solid fa-dice",
          edge: "N/A",
          volatility: "Unknown",
          line: g.desc,
          cta: "Play",
        };

        return `<article class="card casino-game-card game-${g.id}">
          <div class="casino-game-header">
            <div class="casino-game-icon"><i class="${m.icon}"></i></div>
            <div>
              <h3 class="casino-game-title">${g.name}</h3>
              <p class="casino-game-desc">${m.line}</p>
            </div>
          </div>
          <div class="casino-chip-row">
            <span class="tag">Limits $${shortNumber(g.minBet)}-$${shortNumber(g.maxBet)}</span>
            <span class="tag">Edge ${m.edge}</span>
            <span class="tag">Volatility ${m.volatility}</span>
          </div>
          <button class="btn btn-primary casino-action-btn" onclick="game.playCasino('${g.id}')">${m.cta}</button>
        </article>`;
      }).join("");
    }

    const politicsDash = document.getElementById("politics-dashboard");
    const politicsList = document.getElementById("politics-roles-list");

    if (politicsDash && politicsList) {
      const p = this.state.politics;
      p.approval = p.approval ?? 50;
      p.corruption = p.corruption ?? 0;
      if (p.role) {
        const roleDef = CONFIG.POLITICS_ROLES.find((r) => r.id === p.role);
        const approvalColor =
          p.approval >= 60
            ? "var(--green)"
            : p.approval >= 35
              ? "var(--amber)"
              : "var(--red)";
        const corruptionLevel =
          p.corruption > 50
            ? "High Risk"
            : p.corruption > 20
              ? "Moderate"
              : "Low";
        politicsDash.innerHTML = `
            <div class="card-header">
                <div>
                    <span class="tag safe" style="margin-bottom:6px;display:inline-block">${roleDef.name}</span>
                    <h3 style="font-size:1.4rem;color:#fff;margin:0">In Office</h3>
                </div>
                <div style="text-align:right">
                     <div style="font-size:0.78rem;color:var(--text-muted)">Term Remaining</div>
                     <div style="font-family:var(--font-mono);font-size:1.3rem;color:#fff">${p.termLeft} mo</div>
                </div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:14px;margin-top:18px">
                <div class="mini-stat-box"><span>Influence</span><strong style="color:var(--accent-purple)">${p.influence}</strong></div>
                <div class="mini-stat-box"><span>Approval</span><strong style="color:${approvalColor}">${Math.round(p.approval)}%</strong></div>
                <div class="mini-stat-box"><span>Laws Passed</span><strong>${p.lawsPassed}</strong></div>
                <div class="mini-stat-box"><span>Corruption</span><strong style="color:${p.corruption > 20 ? "var(--red)" : "var(--text-muted)"}">${corruptionLevel}</strong></div>
                <div class="mini-stat-box"><span>Salary</span><strong>$${shortNumber(Math.floor(roleDef.salary / 12))}/mo</strong></div>
                <div class="mini-stat-box"><span>Bribes</span><strong style="color:${p.bribesTaken > 0 ? "var(--red)" : "#fff"}">$${shortNumber(p.bribesTaken)}</strong></div>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:18px">
                <button class="btn btn-primary" onclick="game.politicalAction('speech')"><i class="fa-solid fa-microphone"></i> Speech</button>
                <button class="btn btn-primary" onclick="game.politicalAction('passlaw')"><i class="fa-solid fa-scroll"></i> Pass Law</button>
                <button class="btn btn-outline" onclick="game.politicalAction('outreach')"><i class="fa-solid fa-handshake"></i> Outreach</button>
                <button class="btn btn-outline" onclick="game.politicalAction('debate')"><i class="fa-solid fa-comments"></i> Debate</button>
                <button class="btn btn-outline" onclick="game.politicalAction('fundraise')"><i class="fa-solid fa-hand-holding-dollar"></i> Fundraise</button>
                <button class="btn btn-danger" onclick="game.politicalAction('embezzle')"><i class="fa-solid fa-mask"></i> Embezzle</button>
            </div>
        `;
      } else {
        politicsDash.innerHTML = `
            <div style="text-align:center;padding:32px">
                <i class="fa-solid fa-landmark" style="font-size:3rem;color:var(--text-muted);margin-bottom:16px;display:block"></i>
                <h3 style="color:#fff;margin-bottom:8px">Not in Office</h3>
                <p style="color:var(--text-muted);margin-bottom:16px">Build your influence through volunteering and community work, then run for office below.</p>
                <div style="display:flex;justify-content:center;gap:20px;margin-bottom:18px">
                    <div class="mini-stat-box"><span>Influence</span><strong style="color:var(--accent-purple)">${p.influence}</strong></div>
                    <div class="mini-stat-box"><span>Laws Passed</span><strong>${p.lawsPassed}</strong></div>
                </div>
                <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
                    <button class="btn btn-primary" onclick="game.politicsVolunteer()"><i class="fa-solid fa-hand-holding-heart"></i> Volunteer (+2 Inf)</button>
                    <button class="btn btn-outline" onclick="game.politicsRally()"><i class="fa-solid fa-bullhorn"></i> Attend Rally (+1 Inf)</button>
                    <button class="btn btn-outline" onclick="game.politicsDonate()"><i class="fa-solid fa-donate"></i> Donate $500 (+3 Inf)</button>
                </div>
            </div>
        `;
      }

      politicsList.innerHTML = CONFIG.POLITICS_ROLES.map((r) => {
        const isCurrent = p.role === r.id;
        const canRun =
          !p.role &&
          this.state.cash >= r.cost &&
          p.influence >= r.reqRep && // using reqRep from config as influence req
          !this.state.life.dead;

        if (isCurrent) return ""; // Don't show current role in list

        return `<div class="card" style="opacity:${canRun ? 1 : 0.6}">
            <div class="card-header">
                <h3>${r.name}</h3>
                <span class="tag">$${shortNumber(r.cost)} Campaign</span>
            </div>
            <div style="margin-bottom:12px; font-size:0.85rem; color:var(--text-muted);">
                Salary $${shortNumber(r.salary)}/yr • Term ${r.term}mo • Req Inf: ${r.reqRep}
            </div>
            <button class="btn btn-primary" onclick="game.startCampaign('${r.id}')" ${canRun ? "" : "disabled"}>
                ${canRun ? "Launch Campaign" : "Unavailable"}
            </button>
        </div>`;
      }).join("");
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
    const icon = document.getElementById("mobile-nav-icon");
    if (nav) nav.classList.toggle("nav-open", this.mobileNavOpen);
    if (overlay) overlay.classList.toggle("active", this.mobileNavOpen);
    if (icon) {
      icon.className = this.mobileNavOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    }
  },
  closeMobileNav() {
    this.mobileNavOpen = false;
    const nav = document.getElementById("nav-tabs");
    const overlay = document.getElementById("mobile-nav-overlay");
    const icon = document.getElementById("mobile-nav-icon");
    if (nav) nav.classList.remove("nav-open");
    if (overlay) overlay.classList.remove("active");
    if (icon) icon.className = "fa-solid fa-bars";
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
    const target = document.getElementById("view-" + id);
    if (target) target.classList.add("active");
    const tab =
      navEl || document.querySelector(`.nav-item[onclick*="'${id}'"]`);
    if (tab) tab.classList.add("active");
    if (id === "market") setTimeout(() => this.drawChart(), 100);
    this.closeMobileNav();
  },
  setView(id) {
    const navEl =
      typeof event !== "undefined" && event.currentTarget
        ? event.currentTarget
        : null;
    this.activateView(id, navEl);
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
    if (hudStreak) hudStreak.innerText = `${gameplay.actionStreak || 0}`;

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
  log(msg) {
    const el = document.getElementById("log-latest");
    if (el) el.innerText = msg;
  },
  toast(msg, type = "success") {
    this.log(msg);
    const container = document.getElementById("toast-container");
    if (!container) return;
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
    setTimeout(() => {
      t.classList.add("toast-out");
      setTimeout(() => t.remove(), 400);
    }, 3000);
  },
  modal(t, d, acts) {
    document.getElementById("modal-title").innerText = t;
    document.getElementById("modal-desc").innerText = d;
    const c = document.getElementById("modal-actions");
    c.innerHTML = "";
    acts.forEach((a) => {
      let b = document.createElement("button");
      b.className = "btn btn-primary";
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
    const cvs = document.getElementById("market-chart");
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    const rect = cvs.parentNode.getBoundingClientRect();
    cvs.width = rect.width;
    cvs.height = rect.height;
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    const spy = game.state.assets["spy"];
    if (spy) {
      const data = spy.history;
      if (data.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 2;
      let min = Math.min(...data);
      let max = Math.max(...data);
      let range = max - min || 1;
      data.forEach((val, i) => {
        let x = (i / (data.length - 1)) * cvs.width;
        let y = cvs.height - ((val - min) / range) * (cvs.height - 40) - 20;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.lineTo(cvs.width, cvs.height);
      ctx.lineTo(0, cvs.height);
      ctx.closePath();
      let gr = ctx.createLinearGradient(0, 0, 0, cvs.height);
      gr.addColorStop(0, "rgba(59, 130, 246, 0.2)");
      gr.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = gr;
      ctx.fill();
    }
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

      const targetFps = window.innerWidth < 900 ? 16 : 22;

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
  stars: [],
  nebulae: [],
  animId: null,
  mouseX: 0,
  mouseY: 0,
  targetMouseX: 0,
  targetMouseY: 0,
  frameCount: 0,

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

    // Density scales with screen
    const starCount = isDesktop ? 350 : 180;
    const particleCount = isDesktop ? 90 : 50;

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
    for (let i = 0; i < (isDesktop ? 6 : 3); i++) {
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

    // Start render loop
    this.render();

    // Typewriter effects
    this.typewrite("title-tagline", "The Free Wealth Simulator Game", 55, 1600);
    this.typewrite(
      "title-desc",
      "You are 18 years old with 500$. Can you find a way to retire rich?",
      24,
      3000,
    );

    // Check for saved game
    const saved = localStorage.getItem("GreedigoSave");
    if (saved) {
      const btn = document.getElementById("btn-continue");
      if (btn) btn.style.display = "flex";
    }
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

    // Draw stars with depth parallax
    for (const s of this.stars) {
      const twinkle = Math.sin(time * s.twinkleSpeed * 12 + s.twinklePhase);
      const alpha = s.alpha * (0.5 + twinkle * 0.5);
      const parallaxFactor = 2 + s.depth * 8;
      const px = s.x + this.mouseX * parallaxFactor;
      const py = s.y + this.mouseY * parallaxFactor;

      // Slight bloom on brighter stars
      if (s.r > 1 && alpha > 0.3) {
        const sg = ctx.createRadialGradient(px, py, 0, px, py, s.r * 4);
        sg.addColorStop(
          0,
          `rgba(${s.color[0]},${s.color[1]},${s.color[2]},${alpha * 0.15})`,
        );
        sg.addColorStop(1, `rgba(${s.color[0]},${s.color[1]},${s.color[2]},0)`);
        ctx.beginPath();
        ctx.arc(px, py, s.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = sg;
        ctx.fill();
      }

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

      // Glow
      const glowSize = p.r * (6 + p.depth * 6);
      const grad = ctx.createRadialGradient(
        effectiveX,
        effectiveY,
        0,
        effectiveX,
        effectiveY,
        glowSize,
      );
      grad.addColorStop(0, `rgba(${r},${g},${b},${a * 0.35})`);
      grad.addColorStop(0.4, `rgba(${r},${g},${b},${a * 0.1})`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(effectiveX, effectiveY, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(effectiveX, effectiveY, p.r * pulseFactor, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
      ctx.fill();
    }

    // Connection lines (performance-limited)
    const maxConCheck = Math.min(this.particles.length, 50);
    for (let i = 0; i < maxConCheck; i++) {
      for (let j = i + 1; j < maxConCheck; j++) {
        const a = this.particles[i];
        const b = this.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          const alpha = (1 - d / 100) * 0.06;
          ctx.beginPath();
          ctx.moveTo(
            a.x + this.mouseX * (3 + a.depth * 10),
            a.y + this.mouseY * (3 + a.depth * 10),
          );
          ctx.lineTo(
            b.x + this.mouseX * (3 + b.depth * 10),
            b.y + this.mouseY * (3 + b.depth * 10),
          );
          ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
    }

    this.animId = requestAnimationFrame(() => this.render());
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
    }, 1400);
  },

  skipToGame() {
    const appShell = document.getElementById("app-shell");
    if (appShell) appShell.style.display = "";
    game.init();
  },
};

/* ======================================================================
   FX ENGINE — Screen shake, flash, confetti, milestone, life events
   ====================================================================== */
const FX = {
  screenShake(size = "sm") {
    document.body.classList.add("fx-shake-" + size);
    setTimeout(
      () => document.body.classList.remove("fx-shake-" + size),
      size === "lg" ? 600 : 400,
    );
  },
  screenFlash(type = "gain") {
    const el = document.createElement("div");
    el.className = "fx-flash-overlay fx-flash-" + type;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 600);
  },
  confetti() {
    if (this._confettiActive) return;
    this._confettiActive = true;
    const self = this;
    const canvas = document.createElement("canvas");
    canvas.className = "confetti-canvas";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const pieces = [];
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
    for (let i = 0; i < 80; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1,
        w: Math.random() * 10 + 5,
        h: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * 4 + 3,
        rot: Math.random() * 360,
        rv: (Math.random() - 0.5) * 12,
        opacity: 1,
      });
    }
    let frame = 0;
    const maxFrames = 90;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        p.rot += p.rv;
        if (frame > maxFrames * 0.6) p.opacity = Math.max(0, p.opacity - 0.03);
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (frame < maxFrames) requestAnimationFrame(draw);
      else {
        canvas.remove();
        self._confettiActive = false;
      }
    }
    requestAnimationFrame(draw);
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
  const evt = LIFE_EVENTS[Math.floor(Math.random() * LIFE_EVENTS.length)];
  app.modal(`${evt.emoji} ${evt.title}`, evt.desc, [
    {
      text: "Deal With It",
      cb: () => {
        evt.effect(this);
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
    // 8% chance of random life event each month (only if alive)
    if (
      !this.state.life.dead &&
      !this.state.life.retired &&
      Math.random() < 0.08
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
      app.toast(`🔥 Hot Streak x${streak}!`, "epic");
      FX.screenFlash("gain");
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

/* ── RENDERING: Relationships ── */
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
};

game.renderPets = function () {
  const petShop = document.getElementById("pet-shop");
  if (petShop) {
    petShop.innerHTML =
      '<h4 style="grid-column:1/-1;opacity:0.6;font-size:0.8rem;margin:0">ADOPT A PET</h4>' +
      CONFIG.PETS.map(
        (p) => `<div class="card">
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
          return `<div class="card"><div class="card-header"><h3>${pet.emoji} ${pet.name}</h3><span class="tag">${moodEmoji} ${Math.round(pet.happiness)}%</span></div>
          <p style="opacity:0.7;font-size:0.8rem">Age: ${ageYrs}yr ${ageMo}mo \u2022 Cost: $${config ? config.monthlyCost : 0}/mo</p></div>`;
        })
        .join("");
    }
  }
};

/* ── RENDERING: Prison ── */
game.renderPrison = function () {
  if (this.state.jail <= 0) return;
  const p = this.state.prison;
  const statusCard = document.getElementById("prison-status-card");
  if (statusCard) {
    const timeServed = p.monthsServed;
    const totalTime = this.state.jail + timeServed;
    const pct = Math.round((timeServed / totalTime) * 100);
    const protectedTag = p.gangProtection
      ? '<span class="tag safe">Protected</span>'
      : '<span class="tag danger">Unprotected</span>';
    statusCard.innerHTML = `<div class="card-header"><h3>\u26D3\uFE0F Federal Prison</h3>${protectedTag}</div>
      <div style="margin:12px 0">
        <div style="display:flex;justify-content:space-between;font-size:0.8rem;opacity:0.7;margin-bottom:4px"><span>Time Served: ${timeServed} months</span><span>${this.state.jail} months remaining</span></div>
        <div class="progress-bg"><div class="progress-fill fill-health" style="width:${pct}%;background:linear-gradient(90deg,#ef4444,#f97316)"></div></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:0.75rem;margin:8px 0">
        <div style="text-align:center"><div style="opacity:0.5">INFRACTIONS</div><strong>${p.infractions}</strong></div>
        <div style="text-align:center"><div style="opacity:0.5">ESCAPE TRIES</div><strong>${p.escapeAttempts}</strong></div>
        <div style="text-align:center"><div style="opacity:0.5">EARNINGS</div><strong>$${p.earnings}</strong></div>
      </div>
      ${p.solitary > 0 ? '<div style="background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:8px;margin:8px 0;font-size:0.8rem;color:#fca5a5"><i class="fa-solid fa-lock"></i> SOLITARY CONFINEMENT \u2014 ' + p.solitary + " months remaining</div>" : ""}
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
        ${!p.gangProtection ? '<button class="btn btn-outline" onclick="game.buyGangProtection()"><i class="fa-solid fa-shield"></i> Gang Protection ($' + CONFIG.PRISON_GANG_PROTECTION_COST + "/mo)</button>" : ""}
        <button class="btn btn-danger" onclick="game.attemptEscape()"><i class="fa-solid fa-person-running"></i> Attempt Escape</button>
      </div>`;
  }
  const actionsDiv = document.getElementById("prison-actions");
  if (actionsDiv) {
    actionsDiv.innerHTML = CONFIG.PRISON_JOBS.map(
      (j) => `<div class="card ${p.prisonJob === j.id ? "card-active" : ""}">
        <div class="card-header"><h3>${j.name}</h3><span class="tag">$${j.pay}/mo</span></div>
        <p style="opacity:0.7;font-size:0.8rem">${j.desc}</p>
        <button class="btn ${p.prisonJob === j.id ? "btn-outline" : "btn-primary"}" style="margin-top:8px" onclick="game.selectPrisonJob('${j.id}')">${p.prisonJob === j.id ? "Current Job" : "Select"}</button></div>`,
    ).join("");
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
  game.renderAll = function () {
    origRenderAll3();
    this.renderRelationships();
    if (this.state.jail > 0) this.renderPrison();
    galleryScroll.refresh();
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

window.onload = function () {
  titleScreen.init();
};
