import { projectImages } from "./assets";

export const PROJECTS = [
  {
    title: "CONCONTOWN",
    image: projectImages.completeConcontownCover,
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
      main: ["Mobile App", "Travel & E-commerce", "Event Management", "i18n"],
      others: ["Entertainment", "Lifestyle", "Tourism"],
    },
  },
  {
    title: "Cuping",
    image: projectImages.completeCupingCover,
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
      main: ["Mobile App", "Social", "Community", "Events"],
      others: ["Trust & Safety", "Lifestyle", "Tokyo"],
    },
  },
  {
    title: "Moonoh",
    image: projectImages.completeMoonohCover,
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
      main: ["Mobile App", "Marketplace", "E-commerce", "Community"],
      others: ["Local Commerce", "Trust & Safety"],
    },
  },
  {
    title: "Autowini Pro",
    image: projectImages.completeAutowiniCover,
    description: {
      summary:
        "Seller app for Autowini Inc., South Korea's used-car export hub—dealers manage inventory and cross-border deals from the lot or auction lane.",
      features: [
        "Capture photos/videos to the cloud—no phone storage or YouTube upload steps",
        "14 languages so sellers can talk to buyers worldwide",
        "100% advance payment protection before vehicles ship",
        "Listing flow under ~5 minutes vs 15+ on legacy flows",
        "Shipped at 4.5+ stars; primary workflow for 500+ active sellers",
      ],
    },
    url: "https://www.autowini.com/",
    technologies: {
      main: ["Mobile App", "Cloud Media", "i18n", "FinTech"],
      others: ["B2B", "Automotive Export", "Seller Tools"],
    },
  },
  {
    title: "Nexus AI",
    image: projectImages.careerChatbot,
    description: {
      summary:
        "Embedded AI concierge for your portfolio—answers career and project questions, captures leads, and routes unknown topics for follow-up.",
      features: [
        "Digital representative tuned to JinHo Yun's experience and stack",
        "Profile-grounded answers from structured context (no generic filler)",
        "Visitor Q&A with logging for gaps you want to train later",
        "Optional contact capture when visitors want a direct reply",
        "Gemini-powered tool calls for structured note-taking",
      ],
    },
    url: "https://huggingface.co/spaces/liuyuelintop/career_chatbots",
    technologies: {
      main: ["Python", "Gradio", "Gemini API", "Agents"],
      others: ["Hugging Face Spaces", "Tool Use"],
    },
  },
  {
    title: "CodeCraft Cloud",
    image: projectImages.nextCodeCraft,
    description: {
      summary:
        "Browser-based IDE workspace with multiplayer editing, snippets, and SaaS billing hooks—VS Code–inspired UX on the web.",
      features: [
        "Shared cursors and live document sync for pair sessions",
        "Snippet gallery with shareable permalinks",
        "Payments and webhooks wired for SaaS checkout flows",
        "Themable editor chrome and keyboard-first navigation",
      ],
    },
    url: "https://codecraft.liuyuelin.dev/",
    technologies: {
      main: ["Next.js", "Convex", "Clerk", "TypeScript"],
      others: ["Webhooks", "Lemon Squeezy", "Real-time sync"],
    },
  },
  {
    title: "InkStack",
    image: projectImages.mernBlog,
    description: {
      summary:
        "Markdown-first developer publication engine—fast builds, rich MDX, and SEO that survives social sharing.",
      features: [
        "MDX with interactive components where you need them",
        "Automatic Open Graph and Twitter cards per route",
        "Prism-powered code samples with theme parity",
        "Paginated archives and tag-driven discovery",
      ],
    },
    url: "https://blog.liuyuelin.dev/",
    technologies: {
      main: ["Next.js", "Velite", "MDX", "Tailwind CSS"],
      others: ["Shadcn/ui", "Vercel", "SEO"],
    },
  },
  {
    title: "PulseWire",
    image: projectImages.twitterClone,
    description: {
      summary:
        "Microblogging surface with realtime posts, threads, and media—designed for low-latency reads and writes at small scale.",
      features: [
        "Create, edit, and remove posts with optimistic UI paths",
        "Nested replies and lightweight notifications",
        "Image pipeline via Cloudinary transforms",
        "JWT-secured API with role-aware mutations",
      ],
    },
    url: "https://twitter-clone-qhpp.onrender.com/",
    technologies: {
      main: ["React", "Node.js", "MongoDB", "React Query"],
      others: ["Cloudinary", "JWT", "Express", "Tailwind"],
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
    url: "https://stripe-subscriptions-yl.vercel.app/",
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
    url: "https://mern-estate-zw5b.onrender.com/",
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
