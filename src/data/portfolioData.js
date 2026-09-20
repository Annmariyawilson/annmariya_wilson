export const personalInfo = {
  name: "Annmariya Wilson",
  role: "Full Stack Developer",
  avatar: "/assets/hero/annmariya-wilsom-profile-img.png",
  subtitles: ["Frontend Developer", "Full Stack Developer"],
  tagline: "Building responsive web applications, SaaS platforms, and seamless full-stack digital experiences.",
  email: "annmariyawilson04@gmail.com",
  location: "Dubai, UAE",
  github: "https://github.com/Annmariyawilson",
  githubUsername: "Annmariyawilson",
  linkedin: "https://linkedin.com/in/annmariya-wilson",
  linkedinUsername: "annmariya-wilson",
  liveUrl: "https://annmariyawilson.vercel.app",
  summary: "Full Stack Developer with 2+ years of experience building responsive web applications, SaaS platforms, trading platforms, and e-commerce solutions. Hands-on experience with React.js, Next.js, Angular, Node.js, Express.js, MongoDB, REST APIs, authentication, RBAC, and responsive UI development. Dedicated to writing clean code with a focus on reusable components, API integration, performance, and user experience.",
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Live Client Projects", value: "10+" },
    { label: "Tech Stack Modules", value: "15+" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

export const technicalSkills = {
  frontend: {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Angular", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Responsive Web Design", level: "Expert" }
    ]
  },
  backend: {
    category: "Backend Development",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "REST APIs", level: "Expert" },
      { name: "JWT Authentication", level: "Advanced" },
      { name: "Role-Based Access (RBAC)", level: "Advanced" },
      { name: "CRUD Operations", level: "Expert" }
    ]
  },
  database: {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Supabase", level: "Advanced" }
    ]
  },
  tools: {
    category: "Tools & Methodologies",
    icon: "GitBranch",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "GitHub", level: "Expert" },
      { name: "Bitbucket", level: "Advanced" },
      { name: "Postman", level: "Expert" },
      { name: "Jira", level: "Advanced" },
      { name: "Slack", level: "Advanced" },
      { name: "Agile / Scrum", level: "Expert" }
    ]
  },

  other: {
    category: "Other Skills",
    icon: "Cpu",
    skills: [
      { name: "Shopify", level: "Advanced" },
      { name: "API Integration", level: "Expert" },
      { name: "Performance Optimization", level: "Expert" },
      { name: "SEO", level: "Advanced" }
    ]
  }
};

export const experiences = [
  {
    company: "MINDLABS SYSTEMS PVT. LTD",
    role: "UI Developer",
    period: "07/2026 – 09/2026",
    location: "Kakkanad, Kerala",
    type: "Full-Time",
    highlights: [
      "Developed responsive web interfaces and reusable UI components using HTML, CSS, and JavaScript.",
      "Translated UI/UX designs into functional interfaces and collaborated on testing and debugging."
    ],
    tags: ["HTML", "CSS", "JavaScript", "UI/UX", "Responsive Design"]
  },
  {
    company: "THINK FORGE GLOBAL LLP",
    role: "Full Stack Developer",
    period: "06/2025 – 05/2026",
    location: "Malappuram, Kerala",
    type: "Full-Time",
    highlights: [
      "Built responsive web applications, SaaS platforms, trading platforms, and e-commerce solutions with React.js, Next.js, and Node.js.",
      "Implemented reusable components, dashboards, authentication, RBAC, and REST API integrations.",
      "Worked with MongoDB, MySQL, Supabase, and Shopify; supported performance and responsive-design improvements.",
      "Collaborated with Git, Bitbucket, Slack, and Jira in Agile/Scrum environments."
    ],
    tags: ["React.js", "Next.js", "Node.js", "MongoDB", "Supabase", "Shopify", "Agile"]
  },
  {
    company: "FREELANCE",
    role: "Full Stack Developer",
    period: "2024 – 2025",
    location: "Remote",
    type: "Freelance",
    highlights: [
      "Developed a College Management System with Angular, Node.js, Express.js, and MongoDB.",
      "Implemented JWT authentication, RBAC, CRUD operations, responsive dashboards, and REST APIs."
    ],
    tags: ["Angular", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"]
  }
];

export const projects = [
  {
    id: "salmara-ayurveda",
    title: "Salmara Ayurveda",
    liveUrl: "https://salmaraayurveda.com/",
    image: "/assets/projects/salmara-ayurveda.jpg",
    category: "E-Commerce",
    badge: "Shopify Store",
    techStack: ["Shopify", "React.js", "Next.js", "Node.js", "Supabase"],
    shortDesc:
      "Premium Ayurvedic wellness e-commerce storefront with live inventory sync, product catalog, and seamless checkout.",
    fullDesc:
      "Salmara Ayurveda is an end-to-end wellness e-commerce platform built with Next.js and Shopify APIs. Features intuitive storefronts with fast search, product categories, reviews, and automated inventory sync with Supabase and Node.js.",
    features: [
      "Shopify Headless API integration for product catalog and checkout",
      "Admin inventory management with Supabase real-time updates",
      "Lighthouse 95+ score with optimized speed and technical SEO",
      "Clean, modern responsive UI tailored for Ayurvedic products"
    ]
  },
  {
    id: "chillmaster-uae",
    title: "Chillmaster UAE",
    liveUrl: "https://www.chillmasteruae.com/",
    image: "/assets/projects/chillmaster-uae.jpg",
    category: "Corporate & Services",
    badge: "UAE Services",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "Responsive UI"],
    shortDesc:
      "Commercial HVAC, refrigeration, and cooling engineering services platform serving clients across the UAE.",
    fullDesc:
      "Chillmaster UAE is a commercial engineering services web application providing service booking, technical solution catalogs, client project showcases, and rapid quotation requests for cooling and HVAC systems in Dubai and across the UAE.",
    features: [
      "Service inquiry and quotation request workflows",
      "Commercial and residential HVAC project showcases",
      "Mobile-optimized emergency service contact integration",
      "High performance on Vercel with localized SEO metadata"
    ]
  },
  {
    id: "kalangara-paints",
    title: "Kalangara Paints",
    liveUrl: "https://www.kalangarapaints.com/",
    image: "/assets/projects/kalangara-paints.jpg",
    category: "Corporate & Retail",
    badge: "Industrial Brand",
    techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    shortDesc:
      "Digital catalogue, color shade visualizer, and dealer locator for a premier decorative and industrial paint brand.",
    fullDesc:
      "Kalangara Paints is a corporate manufacturer and retail platform presenting extensive product ranges for interior, exterior, and industrial coatings with technical specifications and dealer network information.",
    features: [
      "Product categorization by surface, finish, and industrial application",
      "Interactive color shade visualizer and technical data sheets",
      "Dealer network and direct quotation inquiry system",
      "Clean corporate design system with responsive layouts"
    ]
  },
  {
    id: "holycross-college",
    title: "Holy Cross College",
    liveUrl: "https://holycrosscollege.co.in/",
    image: "/assets/projects/holycross-college.jpg",
    category: "Institutional",
    badge: "Official Portal",
    techStack: ["Angular", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    shortDesc:
      "Comprehensive institutional web portal and college management system with student, faculty, and administrative modules.",
    fullDesc:
      "Holy Cross College Management System is a full-featured institutional web application handling academic announcements, departments, faculty directories, student admissions, course curricula, and administrative controls with secure role separation.",
    features: [
      "Official academic portal and department management workflows",
      "Role-based access for students, faculty, and administration",
      "Course catalog, announcements, and examination schedule modules",
      "Mobile-first responsive interface with fast load times",
      "Secure backend architecture with MongoDB database integration"
    ]
  },
  {
    id: "day-off-journeys",
    title: "Day Off Journeys",
    liveUrl: "https://www.dayoffjourneys.com/",
    image: "/assets/projects/day-off-journeys.jpg",
    category: "Travel & Hospitality",
    badge: "Live Client",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    shortDesc:
      "Curated travel, tour booking, and experiential vacation platform with interactive packages and itinerary planning.",
    fullDesc:
      "Day Off Journeys is a bespoke travel and tourism platform showcasing tailored vacation packages, destination guides, and seamless booking inquiry workflows with an immersive, visual user experience.",
    features: [
      "Interactive holiday packages and categorized destination browsing",
      "Instant inquiry and custom itinerary request forms",
      "Optimized media delivery and responsive travel imagery",
      "Engaging UI with fluid transitions and modern typography"
    ]
  },
  {
    id: "yacht-hub-dubai",
    title: "Yacht Hub Dubai",
    liveUrl: "https://www.yachthubdubai.com/",
    image: "/assets/projects/yacht-hub-dubai.jpg", 
    category: "Travel & Hospitality",
    badge: "Luxury Rental",
    techStack: ["Next.js", "Tailwind CSS"],
    shortDesc:
      "Premium luxury yacht rental platform in Dubai offering curated fleet bookings and experiential packages.",
    fullDesc:
      "Yacht Hub Dubai is a luxury yacht rental platform that allows users to seamlessly book premium yachts in Dubai. The platform features an extensive fleet catalog, experiential packages for corporate events and private parties, and a streamlined online reservation system.",
    features: [
      "Extensive premium fleet catalogue with detailed vessel specifications",
      "Flexible hourly, half-day, and full-day booking packages",
      "Specialized event experiences and tailored itineraries",
      "High performance, fully responsive UI built with Next.js and Tailwind CSS"
    ]
  },
  {
    id: "frootcane",
    title: "Frootcane",
    liveUrl: "https://www.frootcane.com/",
    image: "/assets/projects/frootcane.jpg", 
    category: "Food & Hospitality",
    badge: "F&B Brand",
    techStack: ["Next.js", "Tailwind CSS"],
    shortDesc:
      "Digital storefront for a premium sugarcane juice brand, featuring an interactive menu, location finder, and gallery.",
    fullDesc:
      "Frootcane is a modern digital presence for a fresh sugarcane juice brand based in Guruvayoor. The web application features an interactive categorised digital menu showcasing 22+ flavours, a gallery of storefront moments, location finding integration, and a direct contact system for bulk ordering.",
    features: [
      "Interactive digital menu with categorized flavor profiles (Classics, Spicy, Healthy)",
      "Responsive gallery and physical storefront location finder with map integration",
      "Fast page loads and SEO optimization powered by Next.js",
      "Direct communication channels via WhatsApp and contact forms"
    ]
  },
  {
    id: "depro-trading",
    title: "Depro Trading",
    liveUrl: "https://www.deprotrading.com/",
    image: "/assets/projects/depro-trading.jpg", 
    category: "Corporate & Services",
    badge: "Hardware Solutions",
    techStack: ["Next.js", "Tailwind CSS", "React.js"],
    shortDesc:
      "B2B and B2C digital platform for premium interior hardware, aluminum fabrication, and wholesale supply.",
    fullDesc:
      "Depro Trading is a comprehensive digital portal for a premium hardware supplier based in Kerala. It showcases product catalogs, features a dynamic service roadmap, wholesale partnerships, and detailed service offerings across aluminum fabrication and interior works. Built for lead generation and client consultation bookings.",
    features: [
      "Detailed service and product catalog presentation",
      "Streamlined consultation and B2B inquiry workflows",
      "Integration with WhatsApp for instant client communication",
      "Performant architecture tailored for B2B SEO and rapid loading"
    ]
  },
  {
    id: "echo-hearing-aid",
    title: "Echo Hearing Aid",
    liveUrl: "https://www.echohearingaid.com/",
    image: "/assets/projects/echo-hearing-aid.jpg", 
    category: "Corporate & Services",
    badge: "Healthcare Clinic",
    techStack: ["React.js", "Tailwind CSS"],
    shortDesc:
      "Healthcare digital platform for a professional audiology clinic, featuring service bookings and WhatsApp integrations.",
    fullDesc:
      "Echo Hearing Aid is a professional healthcare web platform built for a specialized audiology clinic in Kerala. It features an elegant presentation of clinical services, a structured patient onboarding roadmap, dedicated home visit booking workflows, and deep WhatsApp integration for instant patient consultations.",
    features: [
      "Comprehensive clinical service presentation and booking workflows",
      "Integrated WhatsApp consultation routing for quick patient access",
      "Trust-building sections including patient roadmap and lifetime care highlights",
      "Highly accessible, clean interface tailored for healthcare demographics"
    ]
  },
  {
    id: "beauty-world",
    title: "Beauty World Family Lounge",
    liveUrl: "https://beautyworldfamilylounge.in/home",
    image: "/assets/projects/beauty-world.jpg", 
    category: "Institutional & EdTech",
    badge: "Beauty Academy",
    techStack: ["React.js", "Tailwind CSS"],
    shortDesc:
      "Premium beauty, wellness, and training destination offering professional salon services and certified career-oriented courses.",
    fullDesc:
      "Beauty World Family Lounge is a premium beauty and wellness digital platform based in Kerala. The application serves as both a booking portal for professional salon services and an educational gateway for government-certified beautician, fashion designing, tailoring, and Zumba courses.",
    features: [
      "Integrated course application system for vocational beauty training",
      "Real-time salon service discovery and consultation forms",
      "Multi-disciplinary academy modules including Fashion Design and Zumba",
      "Direct WhatsApp integration and responsive mobile-first design"
    ]
  },
  {
    id: "zyvest-capital",
    title: "Zyvest Capital",
    liveUrl: "#",
    image: "/assets/projects/zyvest-capital.jpg",
    category: "FinTech",
    badge: "Trading Platform",
    techStack: ["Next.js", "Tailwind CSS", "REST APIs"],
    shortDesc:
      "A responsive trading platform with multi-role modules including KYC, wallet management, and MT5 account creation.",
    fullDesc:
      "Built a responsive trading platform with multi-role User, Admin, Employee, and Super Admin modules; implemented onboarding, KYC, wallet management, MT5 account creation, transactions, PAMM investment, team management, support, marketing, and administrative workflows.",
    features: [
      "Multi-role modules: User, Admin, Employee, Super Admin",
      "Onboarding, KYC, and MT5 account creation",
      "Wallet management and transactions",
      "PAMM investment and team management workflows"
    ]
  },





  {
    id: "choco-mint",
    title: "Choco Mint",
    liveUrl: "https://choco-mint.vercel.app/",
    image: "/assets/projects/choco-mint.jpg",
    category: "Food & Hospitality",
    badge: "Web App",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
    shortDesc:
      "Artisanal confectionery and bakery web application with interactive dessert menus and customized gift hampers.",
    fullDesc:
      "Choco Mint is a delightful bakery and dessert showcase platform with interactive menus, online gifting options, custom cake requests, and an elegant visual design.",
    features: [
      "Interactive digital menu with dietary tags and rich imagery",
      "Custom gift hamper configurator and pre-ordering forms",
      "Smooth micro-interactions and appetizing aesthetic",
      "Instant deployment and zero-latency CDN on Vercel"
    ]
  },
  {
    id: "true-news",
    title: "True News",
    liveUrl: "https://true-news-kappa.vercel.app/",
    image: "/assets/projects/true-news.jpg",
    category: "Media & News",
    badge: "Media Portal",
    techStack: ["Next.js", "REST APIs", "Tailwind CSS", "Vercel"],
    shortDesc:
      "Real-time news and journalism portal with category filtering, breaking news tickers, and rich editorial layouts.",
    fullDesc:
      "True News is a modern digital journalism platform delivering real-time articles, breaking news alerts, multimedia stories, and topic filtering across politics, technology, business, and culture.",
    features: [
      "Dynamic article publishing with responsive editorial typography",
      "Real-time breaking news ticker and topic filtering",
      "Bookmark, share, and dark/light reading modes",
      "Optimized for core web vitals and fast article loading"
    ]
  },
  {
    id: "amilas-masala-paste",
    title: "Amila's Masala Paste",
    liveUrl: "https://amilas-masala-paste.vercel.app/",
    image: "/assets/projects/amilas-masala-paste.jpg",
    category: "E-Commerce",
    badge: "FMCG Brand",
    techStack: ["React.js", "Node.js", "Tailwind CSS", "Vercel"],
    shortDesc:
      "Culinary FMCG storefront showcasing authentic spice pastes, recipe inspiration guides, and direct ordering.",
    fullDesc:
      "Amila's Masala Paste is an FMCG e-commerce storefront presenting authentic traditional paste blends, recipe pairings, product nutritional details, and ordering options.",
    features: [
      "Product showcase with authentic ingredient breakdowns",
      "Integrated culinary recipe library and cooking tips",
      "Seamless mobile ordering interface with cart feedback",
      "Fast static site generation on Vercel"
    ]
  },
  {
    id: "trade-learners",
    title: "Trade Learners",
    liveUrl: "https://trade-learners.vercel.app/",
    image: "/assets/projects/trade-learners.jpg",
    category: "FinTech & EdTech",
    badge: "EdTech Platform",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    shortDesc:
      "Financial education and trading academy platform with interactive curriculum modules and market learning resources.",
    fullDesc:
      "Trade Learners is a comprehensive trading education portal offering structured learning paths for forex, stocks, and crypto trading, complete with webinars, mentorship schedules, and community insights.",
    features: [
      "Structured course modules from beginner to advanced trading",
      "Webinar registration and live workshop schedules",
      "Market analysis widgets and financial risk calculators",
      "Clean FinTech interface with interactive roadmap"
    ]
  },
  {
    id: "phoenix-platform",
    title: "Phoenix Digital",
    liveUrl: "https://phoenix-nine-alpha.vercel.app/",
    image: "/assets/projects/phoenix-platform.jpg",
    category: "SaaS & Agency",
    badge: "SaaS Solutions",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    shortDesc:
      "Enterprise digital solutions and SaaS agency platform featuring product capabilities, case studies, and lead capture.",
    fullDesc:
      "Phoenix Digital is an agency and SaaS product showcase platform highlighting modern digital engineering services, enterprise case studies, technology stacks, and consultation bookings.",
    features: [
      "Modular product and engineering services presentation",
      "Interactive case study cards with measurable client ROI",
      "Lead generation and instant consultation booking integration",
      "High-speed SPA build on Vercel"
    ]
  },
  {
    id: "security-spy",
    title: "Security Spy",
    liveUrl: "https://security-spy.vercel.app/",
    image: "/assets/projects/security-spy.jpg",
    category: "Security & IoT",
    badge: "Security Tech",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    shortDesc:
      "Commercial surveillance and smart security solutions portal featuring product catalogs and installation plans.",
    fullDesc:
      "Security Spy is a security tech platform presenting smart CCTV systems, biometric access controls, remote monitoring solutions, and enterprise security installation services.",
    features: [
      "Security camera and biometric hardware product catalogue",
      "Custom security package calculator and site survey request",
      "Technical specifications and live demonstration bookings",
      "Responsive design with dark/light visual clarity"
    ]
  },
  {
    id: "ar-architects",
    title: "AR Architects",
    liveUrl: "https://ararchitectsin.vercel.app/",
    image: "/assets/projects/ar-architects.jpg",
    category: "Architecture & Design",
    badge: "Design Studio",
    techStack: ["React.js", "Vite", "CSS3 Animation", "Vercel"],
    shortDesc:
      "Architectural design and luxury interior portfolio showcasing residential, commercial, and spatial masterplans.",
    fullDesc:
      "AR Architects is a minimalist portfolio for an architectural practice featuring residential villas, commercial structures, interior transformations, 3D renderings, and project blueprints.",
    features: [
      "Immersive project gallery with architectural photography",
      "Project details categorized by residential, commercial & interior",
      "Studio philosophy, awards, and consultation booking form",
      "Minimalist editorial aesthetic with fluid micro-interactions"
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Kannur University",
    period: "2021 – 2024",
    location: "Kerala, India",
    description: "Core computer science fundamentals, data structures, algorithms, database systems, and object-oriented programming."
  }
];

export const certifications = [
  {
    title: "MERN/MEAN Full Stack Web Development",
    issuer: "Luminar Technolab",
    period: "2024",
    location: "Calicut, Kerala",
    description: "Rigorous industry immersion covering React.js, Angular, Node.js, Express.js, MongoDB, REST API architecture, and production deployment."
  }
];
