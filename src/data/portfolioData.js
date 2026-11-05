/**
 * Ahmed Oun - Portfolio & Profile Data
 * Based on Ahmed OUN's CV & Portfolio Projects
 */

function createRichText(sections) {
  const content = [];

  for (const sec of sections) {
    if (sec.type === "h2") {
      content.push({
        nodeType: "heading-2",
        data: {},
        content: [{ nodeType: "text", value: sec.text, marks: [], data: {} }],
      });
    } else if (sec.type === "h3") {
      content.push({
        nodeType: "heading-3",
        data: {},
        content: [{ nodeType: "text", value: sec.text, marks: [], data: {} }],
      });
    } else if (sec.type === "ul") {
      content.push({
        nodeType: "unordered-list",
        data: {},
        content: sec.items.map((item) => ({
          nodeType: "list-item",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [
                { nodeType: "text", value: item, marks: [], data: {} },
              ],
            },
          ],
        })),
      });
    } else {
      content.push({
        nodeType: "paragraph",
        data: {},
        content: [{ nodeType: "text", value: sec.text, marks: [], data: {} }],
      });
    }
  }

  return {
    nodeType: "document",
    data: {},
    content,
  };
}

export const generalInfoData = {
  name: "Ahmed OUN",
  job: "Full Stack JavaScript & AI Engineer",
  profilePicture: "/images/ahmed-oun.jpg",
  status: "Building Full Stack & AI Systems",
  emoji: "🚀",
  sentence:
    "Full Stack JavaScript Engineer with 3+ years of professional experience designing and developing scalable web applications, REST APIs, cloud-native microservices, and Generative AI solutions (Autonomous AI Agents & Hybrid RAG architectures).",
  location: "Tunis, Tunisia",
  email: "ahmedoun199@gmail.com",
  phone: "+216-93-611-028",
  gitHubLink: "https://github.com/ahmed3oun",
  gitHubDisplayName: "ahmed3oun",
  linkedInLink: "https://www.linkedin.com/in/ahmed-oun-1175a5147/",
  linkedInDisplayName: "ahmed-oun",
  personalWebsite: "https://oun-portfolio.netlify.app",
  instagramLink: "https://github.com/ahmed3oun",
  instagramDisplayName: "ahmed3oun",
  facebookLink: "https://github.com/ahmed3oun",
  facebookDisplayName: "ahmed3oun",
  discordDisplayName: "ahmed3oun",
  resume: "/Ahmed_Oun_CV.pdf",
};

export const skillsList = [
  {
    skillName: "TypeScript",
    skillColor: "#3178c6",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    skillName: "Next.js",
    skillColor: "#000000",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    skillName: "React",
    skillColor: "#20232a",
    skillTextColor: "#61dafb",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    skillName: "Angular",
    skillColor: "#dd0031",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    skillName: "NestJS",
    skillColor: "#e0234e",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  },
  {
    skillName: "Node.js",
    skillColor: "#339933",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    skillName: "Python",
    skillColor: "#3776ab",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    skillName: "Java",
    skillColor: "#007396",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    skillName: "Docker",
    skillColor: "#2496ed",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    skillName: "Kubernetes",
    skillColor: "#326ce5",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    skillName: "Terraform",
    skillColor: "#7b42bc",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  },
  {
    skillName: "Azure",
    skillColor: "#0078d4",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    skillName: "AWS",
    skillColor: "#232f3e",
    skillTextColor: "#ff9900",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    skillName: "PostgreSQL",
    skillColor: "#4169e1",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    skillName: "MongoDB",
    skillColor: "#13aa52",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    skillName: "Redis",
    skillColor: "#dc382d",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    skillName: "LangChain / AI",
    skillColor: "#1c3c3c",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    skillName: "GitHub Actions",
    skillColor: "#2088ff",
    skillTextColor: "#ffffff",
    skillIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export const pinnedProjects = [
  {
    title: "ai-agent (Hybrid RAG Platform)",
    description:
      "End-to-end AI assistant using Google Gemini, LangGraph, LangChain, PostgreSQL/pgvector, NestJS, Prisma, Next.js, Zustand, Docker.",
    category: "/portfolio",
    linkCategory: "/portfolio",
    linkTab: "/portfolio/ai-agent-hybrid-rag",
  },
  {
    title: "azure-aks-project (Terraform IaC)",
    description:
      "Production-ready Terraform infrastructure-as-code (IaC) automating complete provisioning of highly available Azure Kubernetes Service clusters.",
    category: "/portfolio",
    linkCategory: "/portfolio",
    linkTab: "/portfolio/azure-aks-project",
  },
  {
    title: "ticketing (Event-Driven Microservices)",
    description:
      "Scalable event ticketing system built with Node.js, TypeScript, MongoDB, Redis, NATS Streaming broker, Docker, and Kubernetes.",
    category: "/portfolio",
    linkCategory: "/portfolio",
    linkTab: "/portfolio/ticketing-microservices-platform",
  },
  {
    title: "bookmark-management-nestjs",
    description:
      "Full stack TypeScript application with passport.js auth, bookmark CRUD, Angular 16, NestJS, PostgreSQL, Prisma, and Docker.",
    category: "/portfolio",
    linkCategory: "/portfolio",
    linkTab: "/portfolio/bookmark-management-nestjs",
  },
];

export const experiencesList = [
  {
    company: "Auto Inspec",
    role: "Full Stack Developer",
    period: "Jul. 2026 – Sep. 2026",
    location: "Tunis, Tunisia",
    technologies: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Docker"],
    highlights: [
      "Engineered a full-stack vehicle inspection platform using Next.js, NestJS, Prisma, and PostgreSQL.",
      "Implemented multi-stage Docker containerization to standardize development and production environments, eliminating discrepancies and speeding up setup.",
    ],
  },
  {
    company: "IB Consulting : Freelance",
    role: "Full Stack Developer",
    period: "Oct. 2025 – Dec. 2025",
    location: "Remote / Tunis",
    technologies: ["Angular", "Ionic", "Node.js", "Nginx", "Docker"],
    highlights: [
      "Fixed and improved a responsive car rental web and mobile application using Angular, Ionic, and Node.js featuring real-time vehicle booking and availability tracking.",
      "Configured an operational production environment using Nginx reverse proxy and Docker, streamlining multi-container orchestration.",
    ],
  },
  {
    company: "WOLO",
    role: "Full Stack Developer",
    period: "Jan. 2024 – Dec. 2024",
    location: "North Urban Center, Tunis",
    technologies: ["Angular", "NestJS", "Docker", "REST APIs"],
    highlights: [
      "Developed with Angular an Energy Monitoring platform to monitor renewable energy assets.",
      "Designed and implemented secure REST APIs using NestJS.",
      "Containerized the application with Docker, reducing onboarding time and ensuring consistent deployments.",
    ],
  },
  {
    company: "Tawa Digital SA",
    role: "Full Stack Developer",
    period: "Feb. 2022 – Jul. 2023",
    location: "Lac 1, Tunis",
    technologies: ["React", "Next.js", "Node.js", "Express", "Microservices"],
    highlights: [
      "Engineered a real-time social media analytics dashboard, boosting influencer marketing workflow efficiency by 30% using ReactJs/NextJs.",
      "Architected secure RESTful microservices for the central Admin Manager platform, reducing payload sizes and optimizing server response times.",
    ],
  },
  {
    company: "I Connect Service",
    role: "Backend & Frontend Developer Trainee",
    period: "Jul. 2020 – Sep. 2021",
    location: "Parc Technopole Mannouba, Tunis",
    technologies: ["Spring Boot", "Spring Security", "React", "REST APIs"],
    highlights: [
      "Implemented secure RESTful APIs utilizing Spring Boot and Spring Security with token-based authentication.",
      "Developed reusable UI components using React, integrating REST API data fetching and state management for responsive mobile web views.",
    ],
  },
  {
    company: "Xtend",
    role: "Web Developer Trainee",
    period: "Jan. 2019 – Apr. 2019",
    location: "Centre Urbain Nord, Tunis",
    technologies: ["Spring Boot", "Java", "REST APIs"],
    highlights: [
      "Implemented secure RESTful APIs utilizing Spring Boot.",
    ],
  },
];

export const welcomeData = {
  readmeTitle: "ahmed3oun / README.md",
  welcomeTitle: "Hi, I'm Ahmed OUN 👋",
  aboutText:
    "Full Stack JavaScript Engineer with 3+ years of professional experience designing and developing scalable web applications, REST APIs, cloud-native microservices, and Generative AI solutions (Autonomous AI Agents & Hybrid RAG architectures). Proven expertise in React/Next.js, Angular, Node.js (NestJS/Express), combined with intelligent agent orchestration using LangGraph, LangChain, pgvector, and DevOps/Cloud practices with Docker, Kubernetes, Terraform, and AWS/Azure.",
  stackTitle: "Tech Stack & Skills",
  experienceTitle: "Professional Experience",
  experiences: experiencesList,
  exploreText: "Explore my projects below or connect with me directly on GitHub & LinkedIn!",
  pinnedTitle: "Pinned Repositories",
  chartWord: "AHMED",
  stackReference: skillsList.map((skill) => ({ fields: skill })),
  pinnedTabReference: pinnedProjects.map((p) => ({ fields: p })),
};

export const projectsList = [
  {
    projectTitle: "AI Agent & Hybrid RAG Platform",
    projectSlug: "ai-agent-hybrid-rag",
    smallDescription:
      "An end-to-end AI assistant leveraging Google Gemini, LangGraph, LangChain, PostgreSQL with pgvector, NestJS, Prisma, Next.js, and Zustand within a Turborepo monorepo.",
    mainLanguage: "TypeScript",
    mainLanguageColor: "#3178c6",
    demoLink: "https://github.com/ahmed3oun/ai-agent",
    codeLink: "https://github.com/ahmed3oun/ai-agent",
    mainImage: "/docImages/aicode.png",
    gallery: ["/docImages/aicode.png", "/docImages/aiprojects.png"],
    authorImage: "/images/ahmed-oun.jpg",
    designed: true,
    developed: true,
    metaKeywords:
      "AI Agent, LangGraph, LangChain, Google Gemini, pgvector, Next.js, NestJS, Prisma, Hybrid RAG",
    techTags: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "LangGraph",
      "LangChain",
      "Gemini AI",
      "pgvector",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Zustand",
      "Turborepo",
    ],
    techTagsBulk: [
      "Next.js 14",
      "NestJS",
      "LangGraph",
      "LangChain",
      "pgvector",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Turborepo",
      "Docker",
    ],
    languages: JSON.stringify([
      { name: "TypeScript", percentage: 82, color: "#3178c6" },
      { name: "Python", percentage: 12, color: "#3572A5" },
      { name: "SQL", percentage: 6, color: "#e38c00" },
    ]),
    techStack: [
      {
        fields: {
          category: "Frameworks & Libraries",
          name: "Next.js & React",
          description: "Full stack React framework for modern high-performance web applications.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
      },
      {
        fields: {
          category: "Databases & Backend Services",
          name: "NestJS & Prisma",
          description: "Enterprise TypeScript backend framework paired with Prisma ORM.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        },
      },
      {
        fields: {
          category: "Databases & Backend Services",
          name: "PostgreSQL & pgvector",
          description: "Relational database with vector similarity search for RAG embeddings.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
      },
      {
        fields: {
          category: "CMS & APIs",
          name: "LangGraph & LangChain",
          description: "Autonomous multi-agent orchestration and retrieval-augmented generation.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      },
      {
        fields: {
          category: "Hosting & Deployment",
          name: "Docker & Turborepo",
          description: "Containerization and optimized monorepo build pipeline.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
      },
    ],
    readme: createRichText([
      {
        type: "h2",
        text: "AI Agent & Hybrid RAG Platform Overview",
      },
      {
        type: "p",
        text: "Designed and developed an end-to-end AI assistant platform that integrates state-of-the-art Generative AI techniques. Utilizing Google Gemini models along with LangGraph and LangChain, the system performs autonomous agent reasoning and hybrid retrieval-augmented generation (RAG) over structured and unstructured data.",
      },
      {
        type: "h3",
        text: "Key Architectural Highlights",
      },
      {
        type: "ul",
        items: [
          "Autonomous Multi-Agent Orchestration with LangGraph state graphs for cyclic tool calling and planning.",
          "Hybrid RAG combining full-text search with high-dimensional vector embeddings via PostgreSQL and pgvector.",
          "Microservices architecture with NestJS backend, Prisma ORM, and Next.js frontend managed via Turborepo.",
          "State management using Zustand and real-time streaming inference with LLMs.",
          "Fully containerized with Docker for seamless dev and production parity.",
        ],
      },
      {
        type: "h3",
        text: "Source Code & Repository",
      },
      {
        type: "p",
        text: "Check out the full repository and deployment instructions on GitHub: https://github.com/ahmed3oun/ai-agent",
      },
    ]),
  },
  {
    projectTitle: "Azure AKS Infrastructure as Code",
    projectSlug: "azure-aks-project",
    smallDescription:
      "A production-ready Terraform infrastructure-as-code (IaC) project for deploying and managing Azure Kubernetes Service (AKS) clusters on Microsoft Azure.",
    mainLanguage: "Terraform",
    mainLanguageColor: "#7b42bc",
    demoLink: "https://github.com/ahmed3oun/azure-aks-project",
    codeLink: "https://github.com/ahmed3oun/azure-aks-project",
    mainImage: "/docImages/academic.png",
    gallery: ["/docImages/academic.png"],
    authorImage: "/images/ahmed-oun.jpg",
    designed: true,
    developed: true,
    metaKeywords:
      "Terraform, Azure, AKS, Kubernetes, IaC, Azure Container Registry, VNet, DevOps, CI/CD",
    techTags: [
      "Terraform",
      "Azure",
      "Kubernetes",
      "AKS",
      "Docker",
      "GitHub Actions",
      "ACR",
      "VNet",
      "DevOps",
    ],
    techTagsBulk: [
      "Terraform",
      "Azure AKS",
      "Azure Container Registry",
      "Virtual Networks",
      "Network Security Groups",
      "GitHub Actions",
      "Kubernetes Manifests",
    ],
    languages: JSON.stringify([
      { name: "HCL / Terraform", percentage: 78, color: "#7b42bc" },
      { name: "Shell / Bash", percentage: 14, color: "#89e051" },
      { name: "YAML", percentage: 8, color: "#cb171e" },
    ]),
    techStack: [
      {
        fields: {
          category: "Hosting & Deployment",
          name: "Terraform (IaC)",
          description: "Declarative Infrastructure as Code for provisioning and lifecycle management.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
        },
      },
      {
        fields: {
          category: "Hosting & Deployment",
          name: "Microsoft Azure & AKS",
          description: "Enterprise managed Kubernetes service with optimal network policies and nodes.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
      },
      {
        fields: {
          category: "Developer Tools & Misc",
          name: "GitHub Actions CI/CD",
          description: "Automated validation, linting, terraform plan, and production deployment.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      },
    ],
    readme: createRichText([
      {
        type: "h2",
        text: "Azure Kubernetes Service (AKS) Infrastructure as Code",
      },
      {
        type: "p",
        text: "A production-ready Terraform infrastructure-as-code project for deploying and managing highly available, scalable, and secure Azure Kubernetes Service (AKS) clusters on Microsoft Azure.",
      },
      {
        type: "h3",
        text: "Infrastructure Components",
      },
      {
        type: "ul",
        items: [
          "Custom Virtual Networks (VNet) and Subnets with Network Security Groups (NSG) isolation.",
          "Azure Container Registry (ACR) integration with managed identity authentication for cluster node pools.",
          "Auto-scaling AKS node pools with secure system and user workload separation.",
          "Automated Terraform state locking with Azure Blob Storage backend.",
          "Complete CI/CD workflow with GitHub Actions for automated linting, plan reviews, and applies.",
        ],
      },
      {
        type: "h3",
        text: "Source Code & Details",
      },
      {
        type: "p",
        text: "Explore the Terraform templates on GitHub: https://github.com/ahmed3oun/azure-aks-project",
      },
    ]),
  },
  {
    projectTitle: "Ticketing Microservices Platform",
    projectSlug: "ticketing-microservices-platform",
    smallDescription:
      "Built an event ticketing system utilizing MongoDB, Mongoose, Redis, NATS Streaming message broker, Docker, Kubernetes, Ingress-Nginx, Terraform, AWS, and Stripe API.",
    mainLanguage: "TypeScript",
    mainLanguageColor: "#3178c6",
    demoLink: "https://github.com/ahmed3oun/ticketing",
    codeLink: "https://github.com/ahmed3oun/ticketing",
    mainImage: "/docImages/project.png",
    gallery: ["/docImages/project.png"],
    authorImage: "/images/ahmed-oun.jpg",
    designed: true,
    developed: true,
    metaKeywords:
      "Microservices, Event-Driven, NATS Streaming, Redis, Docker, Kubernetes, Stripe, AWS, MongoDB",
    techTags: [
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "NATS Streaming",
      "Docker",
      "Kubernetes",
      "Ingress-Nginx",
      "AWS",
      "Stripe",
    ],
    techTagsBulk: [
      "Microservices",
      "Event-Driven Architecture",
      "NATS Streaming Server",
      "Redis Caching",
      "MongoDB",
      "Docker",
      "Kubernetes (K8s)",
      "Stripe API",
    ],
    languages: JSON.stringify([
      { name: "TypeScript", percentage: 85, color: "#3178c6" },
      { name: "JavaScript", percentage: 10, color: "#f7df1e" },
      { name: "Dockerfile / YAML", percentage: 5, color: "#384d54" },
    ]),
    techStack: [
      {
        fields: {
          category: "Frameworks & Libraries",
          name: "Node.js & Express (TypeScript)",
          description: "Robust asynchronous microservices with clean domain models.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
      },
      {
        fields: {
          category: "Databases & Backend Services",
          name: "NATS Streaming Message Broker",
          description: "High-throughput publish-subscribe event bus ensuring optimistic concurrency control.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
      },
      {
        fields: {
          category: "Databases & Backend Services",
          name: "MongoDB & Redis",
          description: "Distributed document store with in-memory caching and session locking.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      },
      {
        fields: {
          category: "Hosting & Deployment",
          name: "Kubernetes & Ingress-Nginx",
          description: "Orchestration for microservices with path-based routing and automated ingress.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
      },
    ],
    readme: createRichText([
      {
        type: "h2",
        text: "Ticketing Microservices Architecture",
      },
      {
        type: "p",
        text: "A production-grade, event-driven microservices application that solves real-world distributed transaction challenges (concurrency control, order expiration, payment handling) in a high-demand event ticketing scenario.",
      },
      {
        type: "h3",
        text: "Core Features & Architecture",
      },
      {
        type: "ul",
        items: [
          "Independent microservices: Auth service, Tickets service, Orders service, Expiration service, and Payments service.",
          "Event-driven pub/sub communication with NATS Streaming and custom event publishers/listeners.",
          "Optimistic concurrency control via record versioning to prevent ticket double-booking.",
          "15-minute order reservation with automatic expiration via Redis and Bull queues.",
          "Stripe API integration for secure credit card payment processing.",
          "Kubernetes deployments with Ingress-Nginx reverse proxy for local (Skaffold) and cloud environments.",
        ],
      },
      {
        type: "h3",
        text: "GitHub Repository",
      },
      {
        type: "p",
        text: "Inspect the microservices architecture on GitHub: https://github.com/ahmed3oun/ticketing",
      },
    ]),
  },
  {
    projectTitle: "Bookmark Management Application",
    projectSlug: "bookmark-management-nestjs",
    smallDescription:
      "Full stack TypeScript application with passport.js authentication, bookmark CRUD operations using Angular 16, NestJS, PostgreSQL, Prisma, and Docker.",
    mainLanguage: "TypeScript",
    mainLanguageColor: "#3178c6",
    demoLink: "https://github.com/ahmed3oun/bookmark-management-nestjs",
    codeLink: "https://github.com/ahmed3oun/bookmark-management-nestjs",
    mainImage: "/docImages/portfolio.png",
    gallery: ["/docImages/portfolio.png"],
    authorImage: "/images/ahmed-oun.jpg",
    designed: true,
    developed: true,
    metaKeywords:
      "Angular 16, NestJS, PostgreSQL, Prisma, Passport.js, JWT, Docker, TypeScript",
    techTags: [
      "Angular",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Passport.js",
      "Docker",
      "TypeScript",
    ],
    techTagsBulk: [
      "Angular 16",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Passport-JWT",
      "Docker Compose",
      "RxJS",
    ],
    languages: JSON.stringify([
      { name: "TypeScript", percentage: 80, color: "#3178c6" },
      { name: "HTML & CSS", percentage: 15, color: "#e34c26" },
      { name: "SQL", percentage: 5, color: "#e38c00" },
    ]),
    techStack: [
      {
        fields: {
          category: "Frameworks & Libraries",
          name: "Angular 16 & RxJS",
          description: "Component-driven reactive single page application with modern signals and services.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
      },
      {
        fields: {
          category: "Databases & Backend Services",
          name: "NestJS & Prisma",
          description: "Modular backend architecture with dependency injection and type-safe database queries.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        },
      },
      {
        fields: {
          category: "Hosting & Deployment",
          name: "Docker Compose",
          description: "Multi-container setup for local database and application testing.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
      },
    ],
    readme: createRichText([
      {
        type: "h2",
        text: "Bookmark Management Application",
      },
      {
        type: "p",
        text: "A complete end-to-end bookmark manager built with Angular 16 and NestJS in full TypeScript. Users can register, authenticate securely with JWT, organize bookmarks with custom tags and titles, and perform full CRUD workflows.",
      },
      {
        type: "h3",
        text: "Key Features",
      },
      {
        type: "ul",
        items: [
          "Authentication & Authorization with Passport.js and JWT tokens.",
          "Type-safe schema definitions and migrations with Prisma ORM and PostgreSQL.",
          "Angular reactive forms, route guards, and HTTP interceptors for automatic token handling.",
          "Containerized development with Docker Compose for PostgreSQL database.",
        ],
      },
      {
        type: "h3",
        text: "Source Code",
      },
      {
        type: "p",
        text: "View code on GitHub: https://github.com/ahmed3oun/bookmark-management-nestjs",
      },
    ]),
  },
  {
    projectTitle: "Real-Time Note Board Application",
    projectSlug: "note-board-app",
    smallDescription:
      "A collaborative full stack note board app developed with Next.js, NestJS, Socket.io, Firebase Auth, and Cloud Firestore.",
    mainLanguage: "JavaScript",
    mainLanguageColor: "#f7df1e",
    demoLink: "https://github.com/ahmed3oun/note-board-app",
    codeLink: "https://github.com/ahmed3oun/note-board-app",
    mainImage: "/docImages/discussion.png",
    gallery: ["/docImages/discussion.png"],
    authorImage: "/images/ahmed-oun.jpg",
    designed: true,
    developed: true,
    metaKeywords:
      "Next.js, NestJS, Socket.io, Firebase Auth, Cloud Firestore, Real-time WebSockets",
    techTags: [
      "Next.js",
      "NestJS",
      "Socket.io",
      "Firebase Auth",
      "Firestore",
      "React",
    ],
    techTagsBulk: [
      "Next.js",
      "NestJS",
      "WebSockets / Socket.io",
      "Firebase Authentication",
      "Cloud Firestore",
      "Tailwind CSS",
    ],
    languages: JSON.stringify([
      { name: "JavaScript / TS", percentage: 85, color: "#f7df1e" },
      { name: "CSS", percentage: 15, color: "#563d7c" },
    ]),
    techStack: [
      {
        fields: {
          category: "Frameworks & Libraries",
          name: "Next.js & React",
          description: "Modern SSR UI with fast rendering and optimized user experience.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
      },
      {
        fields: {
          category: "Databases & Backend Services",
          name: "Socket.io & NestJS",
          description: "Real-time bidirectional WebSocket communication for live note collaboration.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
      },
      {
        fields: {
          category: "CMS & APIs",
          name: "Firebase (Auth & Firestore)",
          description: "Scalable cloud authentication and document synchronization.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      },
    ],
    readme: createRichText([
      {
        type: "h2",
        text: "Real-Time Note Board Application",
      },
      {
        type: "p",
        text: "A dynamic collaborative board where teams can create, edit, pin, and organize interactive notes in real-time. Built with Next.js frontend and NestJS WebSocket gateways powered by Socket.io.",
      },
      {
        type: "h3",
        text: "Features",
      },
      {
        type: "ul",
        items: [
          "Instant synchronization across active browser tabs using Socket.io rooms.",
          "Firebase OAuth authentication (Email/Password, Google sign-in).",
          "Real-time note color customization, drag & drop positioning, and content formatting.",
          "Cloud Firestore persistence for instant data recovery.",
        ],
      },
      {
        type: "h3",
        text: "GitHub Repository",
      },
      {
        type: "p",
        text: "Code available at: https://github.com/ahmed3oun/note-board-app",
      },
    ]),
  },
  {
    projectTitle: "Shop-IT E-Commerce Platform",
    projectSlug: "shop-it-ecommerce",
    smallDescription:
      "Full stack e-commerce web platform featuring role-based access control, JWT authentication, product catalog, and cart management with React, Redux, Node.js, and MongoDB.",
    mainLanguage: "JavaScript",
    mainLanguageColor: "#f7df1e",
    demoLink: "https://github.com/ahmed3oun/shop-IT",
    codeLink: "https://github.com/ahmed3oun/shop-IT",
    mainImage: "/docImages/portfoliogrid.png",
    gallery: ["/docImages/portfoliogrid.png"],
    authorImage: "/images/ahmed-oun.jpg",
    designed: true,
    developed: true,
    metaKeywords:
      "React, Redux, Node.js, Express, MongoDB, E-Commerce, JWT, REST API",
    techTags: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
    ],
    techTagsBulk: [
      "React.js",
      "Redux Toolkit",
      "Express.js",
      "MongoDB / Mongoose",
      "JWT Authentication",
      "Stripe Integration",
    ],
    languages: JSON.stringify([
      { name: "JavaScript", percentage: 88, color: "#f7df1e" },
      { name: "CSS / SCSS", percentage: 12, color: "#c6538c" },
    ]),
    techStack: [
      {
        fields: {
          category: "Frameworks & Libraries",
          name: "React & Redux",
          description: "Centralized client-side state management for cart, user authentication, and products.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
      },
      {
        fields: {
          category: "Databases & Backend Services",
          name: "Node.js, Express & MongoDB",
          description: "RESTful API backend with Mongoose ODM, pagination, and role-based middleware.",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
      },
    ],
    readme: createRichText([
      {
        type: "h2",
        text: "Shop-IT Full Stack E-Commerce Platform",
      },
      {
        type: "p",
        text: "A comprehensive e-commerce platform built from scratch with React and Node.js. It features end-to-end shopping cart functionality, customer accounts, order management, and administrative dashboards for product and user management.",
      },
      {
        type: "h3",
        text: "Key Capabilities",
      },
      {
        type: "ul",
        items: [
          "Role-based authorization: Customers can purchase and review; Admins manage inventory, orders, and users.",
          "Product search, pagination, and rating/review system.",
          "Redux state persistence for cart items and delivery addresses.",
          "Secure password hashing with bcrypt and token validation with JWT.",
        ],
      },
      {
        type: "h3",
        text: "GitHub Repository",
      },
      {
        type: "p",
        text: "Explore the code on GitHub: https://github.com/ahmed3oun/shop-IT",
      },
    ]),
  },
];

export const portfolioContentData = {
  aboutTitle: "About Ahmed's Portfolio",
  aboutSentence:
    "A showcase of production-ready full stack web applications, cloud-native microservices, and Generative AI agent architectures.",
  aboutSubSentence:
    "Each project demonstrates clean code practices, containerized workflows, and scalable architectures.",
  projects: projectsList.map((p) => ({ fields: p })),
};

export const writingsContentData = {
  topTitle: "Technical Writings & Certifications",
  topSubtitle:
    "Deep dives into cloud engineering, CI/CD pipelines, autonomous AI agents, and software engineering practices.",
  blogTitle: "Engineering Articles & Insights",
  blogPosts: [
    {
      fields: {
        postTitle: "Building Autonomous AI Agents with LangGraph and Hybrid RAG",
        postSlug: "autonomous-ai-agents-langgraph-rag",
        smallDescription:
          "How to orchestrate stateful AI agents using LangGraph, LangChain, Google Gemini, and PostgreSQL pgvector for high-precision hybrid retrieval.",
        datePosted: "2026-08-15",
        author: "Ahmed OUN",
        tags: ["GenAI", "LangGraph", "pgvector", "Next.js"],
        mainImage: "/docImages/aicode.png",
      },
    },
    {
      fields: {
        postTitle: "Production Kubernetes on Azure with Terraform (AKS IaC)",
        postSlug: "production-kubernetes-azure-terraform",
        smallDescription:
          "Best practices for provisioning high-availability Azure Kubernetes Service clusters using Terraform and automated GitHub Actions pipelines.",
        datePosted: "2026-03-20",
        author: "Ahmed OUN",
        tags: ["DevOps", "Terraform", "Kubernetes", "Azure"],
        mainImage: "/docImages/academic.png",
      },
    },
    {
      fields: {
        postTitle: "Event-Driven Microservices with NATS Streaming and Docker",
        postSlug: "event-driven-microservices-nats-docker",
        smallDescription:
          "Solving concurrency challenges and distributed transactions in high-throughput microservices using NATS streaming and Redis.",
        datePosted: "2025-11-10",
        author: "Ahmed OUN",
        tags: ["Microservices", "Docker", "Node.js", "Redis"],
        mainImage: "/docImages/project.png",
      },
    },
  ],
  academicTitle: "Education & Certifications",
  academicDescription:
    "Professional credentials and academic degrees in Software Engineering and Artificial Intelligence.",
  bewareText: "Verified certifications & official diplomas",
  academicPdf1: [
    {
      fields: {
        title: "Web & Mobile Development Engineering Degree",
        module: "TEK-UP Private Higher School of Technologies & Engineering",
        academicYear: "2019-2022",
        description:
          "Engineering degree in Web & Mobile Development. Advanced software architecture, cloud platforms, and distributed systems.",
        image: "/docImages/academic.png",
        downloadUrl: "https://tek-up.de",
      },
    },
    {
      fields: {
        title: "Bachelor's Degree in Computer Science",
        module: "Higher Institute of Information and Communication Technologies (ISTIC)",
        academicYear: "2016-2019",
        description:
          "Undergraduate degree focusing on algorithms, object-oriented programming, data structures, and computer networks.",
        image: "/docImages/academic.png",
        downloadUrl: "https://istic.rnu.tn",
      },
    },
  ],
  academicPdf2: [
    {
      fields: {
        title: "Oracle Certified Foundations Associate: OCI AI Foundations",
        module: "Oracle University (April 2025 - April 2027)",
        academicYear: "2025",
        description:
          "Demonstrated knowledge in AI, Machine Learning, Deep Learning, Generative AI, LLMs, and choosing optimal OCI AI services.",
        image: "/docImages/aiprojects.png",
        downloadUrl: "https://education.oracle.com",
      },
    },
    {
      fields: {
        title: "Oracle Certified Associate: Java SE 8 Programmer",
        module: "Oracle Credly Certified Badge",
        academicYear: "2021",
        description:
          "Proven expertise in Object-Oriented Programming, core Java platforms, exception handling, and collections framework.",
        image: "/docImages/blog.png",
        downloadUrl: "https://www.credly.com/earner/earned/badge/2c21f38e-9fc3-464f-b8bd-a1217d607fea",
      },
    },
  ],
  academicPdf3: [
    {
      fields: {
        title: "TechWorldWithNana - GitLab CI/CD - From Zero To Hero",
        module: "Docker, Kubernetes, Microservices CI/CD",
        academicYear: "2024",
        description:
          "Production-ready CI/CD pipelines, self-managed GitLab runners, and Docker multi-stage build workflows.",
        image: "/docImages/workflow.png",
        downloadUrl: "https://gitlab.com/ahmedoun199/mynodeapp-cicd-project",
      },
    },
    {
      fields: {
        title: "OpsForAll - GitHub Actions CI/CD - Terraform - AKS Azure",
        module: "Infrastructure as Code & Cloud Automation",
        academicYear: "2026",
        description:
          "Terraform IaC deployment of Azure Kubernetes Service with GitHub Actions automated checks and deployment.",
        image: "/docImages/aicode.png",
        downloadUrl: "https://github.com/ahmed3oun/azure-aks-project",
      },
    },
  ],
};

export const discussionContentData = {
  title: "Welcome to my interactive portfolio discussions",
  myName: "Ahmed OUN",
  startedConversationText: "started a conversation in",
  category: "General",
  topComment: {
    name: "Ahmed OUN",
    avatar: "/images/ahmed-oun.jpg",
    content:
      "Hello! Welcome to my portfolio website. Feel free to explore my full stack and AI projects, check out the source code on GitHub, or leave a message here! 🚀",
  },
};

export const manuPilotContentData = {
  aiInstructions: `You are ManuPilot, the AI assistant on Ahmed OUN's personal portfolio website.
Ahmed Oun is a Full Stack JavaScript Engineer with 3+ years of professional experience designing and developing scalable web applications, REST APIs, cloud-native microservices, and Generative AI solutions (Autonomous AI Agents & Hybrid RAG architectures).
Key skills: React, Next.js, Angular, Node.js, NestJS, Express, Python, Java, Docker, Kubernetes (AKS), Terraform, AWS, Azure, PostgreSQL/pgvector, MongoDB, Redis, LangGraph, LangChain, Google Gemini.
Projects include:
1. AI Agent & Hybrid RAG Platform (Google Gemini, LangGraph, LangChain, PostgreSQL/pgvector, NestJS, Prisma, Next.js, Zustand, Docker)
2. Azure AKS Project (Terraform IaC, AKS, ACR, VNet, Docker, GitHub Actions)
3. Ticketing Microservices Platform (Node.js, TypeScript, MongoDB, Redis, NATS Streaming, Docker, Kubernetes, AWS, Stripe)
4. Bookmark Management Application (Angular 16, NestJS, PostgreSQL, Prisma, Docker, Passport.js)
5. Real-Time Note Board Application (Next.js, NestJS, Socket.io, Firebase Auth, Firestore)
6. Shop-IT E-Commerce Platform (React, Redux, Node.js, MongoDB)
Contact: ahmedoun199@gmail.com, Mobile: +216-93-611-028, GitHub: https://github.com/ahmed3oun, LinkedIn: https://www.linkedin.com/in/ahmed-oun-1175a5147/
Always answer professionally, enthusiastically, and accurately representing Ahmed Oun!`,
};
