import { projectImages } from "./assets";

export const PROJECTS = [
  {
    title: "CONCONTOWN",
    image: projectImages.concontownPng,
    description: {
      summary:
        "SM Entertainment's official music-travel platform: one app for concert tickets, hotels, transport, merch, and fan experiences for K-pop fans in Korea and Japan. Test launch May 2025; official opening July 3, 2025.",
      features: [
        "Single checkout for tickets, hotels, and transportation",
        "Exclusive fan packages (e.g. Tokyo Dome Hotel x SMTOWN LIVE 2025, in-app only)",
        "Official goods pre-order to skip venue lines",
        "Points, promos, and launch giveaways including hotel stays",
        "Japanese and Korean UI for both markets",
      ],
    },
    url: "https://www.concontown.jp/",
    technologies: {
      main: ["Swift", "Kotlin", "Objective-C", "Java"],
      others: ["JavaScript", "TypeScript", "Dart"],
    },
  },
  {
    title: "Cuping",
    image: projectImages.cupingPng,
    description: {
      summary:
        "Interest-first social app for ONE TEAM SOFT (Tokyo): \"GrouPINs\" connect people by shared hobbies and places—not swipe-only dating.",
      features: [
        "GrouPINs built around interests, locations, and activities",
        "ID verification plus admin review for new members",
        "Automated limits for reported users; inactive users deprioritized in feeds",
        "Members and pro hosts can both create GrouPINs",
        "Location + interest discovery for relevant groups nearby",
        "Privacy-first: minimal retention and clear delete rights",
      ],
    },
    url: "https://cuping.me/",
    technologies: {
      main: ["TypeScript", "Dart", "Kotlin", "JavaScript"],
      others: ["Swift", "Java", "Objective-C"],
    },
  },
  {
    title: "Moonoh",
    image: projectImages.moonohPng,
    description: {
      summary:
        "Neighborhood resale marketplace (Moonoh Inc., NYC, 2024): zero seller fees and tooling that favors trust between neighbors, not only transactions.",
      features: [
        "No platform cut—sellers keep full sale price",
        "Very fast listing flow for casual sellers",
        "In-app chat until you agree on a safe meetup",
        "Ratings after deals to build local reputation",
        "Safety tips and fraud guidance in the core journey",
        "Hyperlocal browse so handoffs stay practical",
      ],
    },
    url: "https://www.moon-oh.com/",
    technologies: {
      main: ["Laravel", "Livewire", "Swift", "Kotlin"],
      others: ["Filament", "PHP", "Dart", "Java", "Objective-C"],
    },
  },
  {
    title: "Brown & White Noise Sleep",
    image: projectImages.whiteNoiseSleep,
    description: {
      summary:
        "Fall asleep faster with relaxing brown noise, white noise, and sleep sounds. A free sleep sounds app designed to help you sleep better, reduce stress, and block distractions using calming background noise.",
      features: [
        "Integrated Firebase for real-time analytics and user behavior tracking",
        "UXCam for session recording and UX optimization",
        "In-app purchase functionality with resolved performance issues",
        "Maintained 4.5-star rating on Google Play",
      ],
    },
    url: "https://play.google.com/store/apps/details?id=com.arthologicsoftware.relaxedsleep",
    technologies: {
      main: ["Flutter", "Firebase", "UXCam"],
      others: [],
    },
  },
  {
    title: "AI-Powered Personalized Recommendation App",
    image: projectImages.snaply,
    description: {
      summary:
        "A mobile app that provides personalized content recommendations based on user behavior. Analyzes clicks, views, and likes to deliver tailored content, helping users find what they want faster and increasing engagement.",
      features: [
        "Collaborative filtering and content-based recommendation algorithms",
        "Collected and processed user interaction data to train AI models",
        "Real-time recommendation updates based on user feedback",
        "Increased user engagement time by 30%",
        "Recommendation click-through rate improved by 25%",
      ],
    },
    url: "",
    technologies: {
      main: ["Flutter", "Python", "PostgreSQL"],
      others: [],
    },
  },
  {
    title: "SmartDoc – AI Productivity Assistant",
    image: projectImages.smartDocImg,
    description: {
      summary:
        "A mobile app that automates document classification and summarization to improve workplace productivity. Helps users quickly organize documents, extract key insights, and generate concise summaries.",
      features: [
        "AI-powered document classification using NLP techniques",
        "Automatic summarization for large documents and PDFs",
        "Dashboard with processed documents, summary highlights, and category insights",
        "Keyword search and quick export options",
        "Reduced document processing time by 30%",
        "Capable of summarizing 100+ pages in seconds",
      ],
    },
    url: "",
    technologies: {
      main: ["React", "Node.js", "Flutter", "Python", "PostgreSQL"],
      others: [],
    },
  },
  {
    title: "Custom API-Based Workflow Automation",
    image: projectImages.customApi,
    description: {
      summary:
        "An automated workflow to connect multiple SaaS applications that could not be handled with standard integrations. Manual processes caused delays and inconsistencies in data handling.",
      features: [
        "Custom workflow using n8n and Make.com with API integrations",
        "Connected multiple apps via REST APIs and Webhooks",
        "Automated data transfers, transformations, and multi-step actions",
        "Reduced manual work by 60%",
        "Ensured data consistency across systems",
      ],
    },
    url: "",
    technologies: {
      main: ["n8n", "Webhooks", "JSON", "Workflow Automation", "API Integration"],
      others: ["Multi-SaaS Automation", "Custom Triggers", "Data Transformation"],
    },
  },
  {
    title: "Data Integration & Reporting Automation",
    image: projectImages.reportingAutomation,
    description: {
      summary:
        "An automated workflow to collect data from multiple channels (Google Sheets, Airtable, Shopify, etc.) and generate weekly reports, eliminating manual data gathering and processing inefficiencies.",
      features: [
        "Automated workflow using n8n connecting multiple data sources",
        "Filtering, formatting, and consolidation into Google Sheets",
        "Automated weekly report delivery via email",
        "Reduced report preparation time by 80%",
        "Eliminated data errors completely",
      ],
    },
    url: "",
    technologies: {
      main: ["n8n", "Google Sheets", "Airtable", "Workflow Automation", "API Integration"],
      others: ["Webhooks", "Automated Reporting"],
    },
  },
  {
    title: "CartForge",
    image: projectImages.cartForgeCover,
    description: {
      summary:
        "Full retail stack with checkout, inventory variants, and ops dashboards—Redis-backed reads for snappy catalog pages.",
      features: [
        "Stripe Checkout and webhook-driven order state",
        "Variant matrix (size, color, bundle) without spreadsheet hacks",
        "Redis layer for hot product and cart fragments",
        "Sales snapshots and funnel-friendly analytics widgets",
      ],
    },
    url: "https://mern-e-commerce-store-8w0a.onrender.com/",
    technologies: {
      main: ["React", "Node.js", "MongoDB", "Stripe"],
      others: ["Redis", "Zustand", "Cloudinary"],
    },
  },
  {
    title: "CycleBill",
    image: projectImages.cycleBillCover,
    description: {
      summary:
        "Subscription lifecycle console—plans, trials, dunning-friendly webhooks, and customer portal flows on Next.js.",
      features: [
        "Stripe Billing primitives for monthly and annual plans",
        "Webhook idempotency and audit-friendly event log",
        "Theme-aware customer area (light / dark)",
        "Kinde-handled identities with minimal custom auth code",
      ],
    },
    url: "",
    technologies: {
      main: ["Next.js", "Stripe", "Prisma", "Kinde"],
      others: ["PostgreSQL", "Vercel", "Webhooks"],
    },
  },
  {
    title: "NestMap",
    image: projectImages.mernEstate,
    description: {
      summary:
        "Property discovery portal with map-aware search, rich galleries, and lead capture tuned for agents and renters.",
      features: [
        "Compound filters: price, beds, amenities, pet rules",
        "Map and list dual mode with geotagged listings",
        "Drag-and-drop media ordering for open houses",
        "Lead forms routed to CRM-friendly payloads",
      ],
    },
    url: "",
    technologies: {
      main: ["React", "Node.js", "MongoDB", "Firebase"],
      others: ["Map APIs", "Tailwind CSS", "Express"],
    },
  },
  {
    title: "PlayAxis",
    image: projectImages.gameHub,
    description: {
      summary:
        "Arcade lobby for quick sessions—TypeScript game shell with saved progress and shareable score cards.",
      features: [
        "Touch and keyboard controls with responsive canvas layouts",
        "Local progress checkpoints between sessions",
        "Social share hooks for highlights",
        "Vercel-friendly static + edge delivery",
      ],
    },
    url: "https://game-hub-two-zeta.vercel.app/",
    technologies: {
      main: ["React", "TypeScript", "Vite", "Vercel"],
      others: ["Canvas API", "PWA-ready"],
    },
  },
];
