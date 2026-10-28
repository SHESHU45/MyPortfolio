import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  coupang,
  qicap,
  groww,
  threejs,
  docker,
  cplusplus,
  c,
  java,
  python,
  go,
  rust,
  sql,
  spring,
  flask,
  kubernetes,
  githubactions,
  mysql,
  postgresql,
  firebase,
  junit,
  store_platform,
  incident_agent,
  aichatx,
  movieflex,
  airflow,
  argo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const profileLinks = {
  resume: "/Talluri_Sheshu_Resume.pdf",
  github: "https://github.com/SHESHU45",
  linkedin: "https://www.linkedin.com/in/talluri-sheshu/",
  leetcode: "https://leetcode.com/u/SheshuTalluri/",
  codeforces: "https://codeforces.com/profile/Frvingw009",
  codechef: "https://www.codechef.com/users/sheshu1607",
  email: "sheshuchowdary134@gmail.com",
  phone: "+91 9515807539",
};

const services = [
  {
    title: "Software & AI Engineer",
    icon: mobile,
  },
  {
    title: "Backend & Distributed Systems",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

// Rendered as 3D balls in the Tech section (order = display order).
const technologies = [
  // Languages
  { name: "C++", icon: cplusplus },
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "Go", icon: go },
  { name: "Rust", icon: rust },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "SQL", icon: sql },
  { name: "C", icon: c },
  // Frameworks
  { name: "Spring Boot / Spring Batch", icon: spring },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Flask", icon: flask },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  // DevOps & Orchestration
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "CI/CD (GitHub Actions)", icon: githubactions },
  { name: "git", icon: git },
  // Databases
  { name: "MySQL", icon: mysql },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "Firebase", icon: firebase },
  // Testing
  { name: "JUnit", icon: junit },
  // Web & Design
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "figma", icon: figma },
];

// Full skill list grouped by category (shown as text below the balls).
const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Java", "Python", "Go", "Rust", "JavaScript", "SQL", "C"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Spring Batch", "React.js", "Node.js", "Flask"],
  },
  {
    title: "DevOps & Orchestration",
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Backend & Systems",
    skills: [
      "REST APIs",
      "Distributed Systems",
      "Scalable Systems",
      "Fault Tolerance",
      "Idempotency",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Unit Testing (JUnit)",
      "Validation",
      "Debugging",
      "Production Monitoring",
    ],
  },
];

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company_name: "Coupang · Hyderabad, India",
    icon: coupang,
    iconBg: "#FFFFFF",
    date: "June 2026 - September 2026",
    points: [
      "Built a secure PII data pipeline across two microservices to protect customer shipping information — generating short-lived signed access tokens, retrieving and masking recipient names and addresses via an internal token service, and storing private keys in HashiCorp Vault with access controlled through a company security portal.",
      "Replaced fragile direct HTTP calls with a standardized API Gateway SDK (Pylon) for invoice format fetching in the shipping label service.",
      "Reduced production deployment time from 16 mins to under 5 mins by setting up emergency CI/CD pipelines across 5 services.",
      "Tech Stack: Java, Spring Boot, CircleCI, Docker, Kafka, API Gateway (Pylon), Redis.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "QiCAP.Ai (HFT) · Bengaluru, India",
    icon: qicap,
    iconBg: "#FFFFFF",
    date: "February 2026 - June 2026",
    points: [
      "Built a full-stack internal platform to auto-generate and remotely deploy exchange-specific XML configurations (CTCL adapters, Hellfire, HF Engine) for low-latency trading infrastructure on Linux servers, replacing manual TradeOps workflows with one-click config generation and Ansible-based deployment via SSH.",
      "Implemented role-based access control with maker-checker approval workflows, Excel-to-DB client synchronization, config generation history with audit logging, and dynamic gateway adapter management enforcing throttling limits, terminal ID validation, and standardized credential paths.",
      "Tech Stack: Python, FastAPI, React, TypeScript, PostgreSQL, Ansible, XML, Linux.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Groww · Bengaluru, India",
    icon: groww,
    iconBg: "#1d1836",
    date: "July 2025 - January 2026",
    points: [
      "Built and maintained Java Spring Boot microservices and Spring Batch pipelines on Kubernetes for large-scale financial workflows across trading, demat, and funds systems.",
      "Wrote unit tests using JUnit and contributed to UAT and release testing, ensuring correctness and stability of backend services before production deployment.",
      "Improved reliability of batch pipelines by implementing retries, failure isolation, and idempotent processing, reducing production failures and ensuring consistent execution.",
      "Designed and validated DAG-based batch workflows using Kubernetes CronJobs, ensuring fault-tolerant and predictable job execution.",
      "Tech Stack: Java, Spring Boot, Spring Batch, Kubernetes, JUnit.",
    ],
  },
];

const achievements = [
  {
    title: "Codeforces Expert",
    highlight: "Max Rating: 1669",
    description:
      "Rated Expert in competitive programming on Codeforces (@Frvingw009).",
    link: "https://codeforces.com/profile/Frvingw009",
    icon: "chart",
  },
  {
    title: "LeetCode Knight",
    highlight: "Max Rating: 1923",
    description:
      "Awarded Knight badge on LeetCode (Top ~5% globally, @SheshuTalluri).",
    link: "https://leetcode.com/u/SheshuTalluri/",
    icon: "shield",
  },
  {
    title: "CodeChef 4-Star",
    highlight: "Max Rating: 1840",
    description:
      "Four-star competitive programming rating on CodeChef (@sheshu1607).",
    link: "https://www.codechef.com/users/sheshu1607",
    icon: "star",
  },
];

const hackathonsAndRoles = [
  {
    event: "APACHE AIRFLOW & ARGO WORKFLOWS",
    result: "Open-Source Contributor",
  },
  {
    event: "AFTERDARK (IIIT LUCKNOW)",
    result: "Coordinator · Aug 2024 – Oct 2025",
  },
  {
    event: "IIIT LUCKNOW (B.TECH CS)",
    result: "CGPA: 8.05 · 2022 – 2026",
  },
];

const projects = [
  {
    name: "Store Provisioning Platform",
    description:
      "Kubernetes-native multi-tenant platform that provisions isolated WooCommerce stores with a single click using Helm charts (Kind & k3s). Enforces namespace isolation, RBAC, NetworkPolicies, ResourceQuotas, idempotent reconciliation loops, and a SQLite-backed audit trail.",
    tags: [
      {
        name: "kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "helm",
        color: "green-text-gradient",
      },
      {
        name: "react-nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: store_platform,
    source_code_link: "https://github.com/SHESHU45/StoreProvisioningPlatform",
  },
  {
    name: "AI Incident Agent",
    description:
      "End-to-end production incident investigation agent built on Cloudflare's Agents SDK. Orchestrates durable multi-step workflows with Llama 3.3 70B on Workers AI, queries diagnostic tools, recalls similar past incidents via Vectorize semantic search, and persists RCA reports in D1.",
    tags: [
      {
        name: "cloudflare-agents",
        color: "blue-text-gradient",
      },
      {
        name: "llama-3.3",
        color: "green-text-gradient",
      },
      {
        name: "vectorize-d1",
        color: "pink-text-gradient",
      },
    ],
    image: incident_agent,
    source_code_link: "https://github.com/SHESHU45/incident-agent",
  },
  {
    name: "AIChatX",
    description:
      "Full-stack, real-time AI chat and code execution platform powered by Gemini conversational AI, JWT authentication, and responsive WebSocket communication over TCP/IP. Includes a sandboxed compiler module that spins up isolated Node.js servers for live code execution in the browser.",
    tags: [
      {
        name: "gemini-ai",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs-socket.io",
        color: "green-text-gradient",
      },
      {
        name: "react-mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: aichatx,
    source_code_link: "https://github.com/SHESHU45/AIChatX",
  },
  {
    name: "MovieFlex",
    description:
      "Hybrid movie recommendation engine combining content-based and collaborative filtering using BERT, Neural Collaborative Filtering (NCF), SVD, and TF-IDF. Integrates the TMDB API for metadata and scrapes IMDb user reviews to run real-time NLP sentiment analysis.",
    tags: [
      {
        name: "bert-ncf-svd",
        color: "blue-text-gradient",
      },
      {
        name: "python-ml",
        color: "green-text-gradient",
      },
      {
        name: "nlp-sentiment",
        color: "pink-text-gradient",
      },
    ],
    image: movieflex,
    source_code_link: "https://github.com/SHESHU45/MovieFlex",
  },
  {
    name: "Apache Airflow (Open Source)",
    description:
      "Open-source contributor to Apache Airflow, the industry-standard platform for programmatically authoring, scheduling, and monitoring distributed DAG workflows and data pipelines in Python.",
    tags: [
      {
        name: "open-source",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "dag-orchestration",
        color: "pink-text-gradient",
      },
    ],
    image: airflow,
    source_code_link: "https://github.com/SHESHU45/airflow",
  },
  {
    name: "Argo Workflows (Open Source)",
    description:
      "Open-source contributor to Argo Workflows, the CNCF container-native workflow engine for orchestrating parallel jobs and DAG pipelines on Kubernetes using Go controllers and custom resources.",
    tags: [
      {
        name: "open-source",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: argo,
    source_code_link: "https://github.com/SHESHU45/argo-workflows",
  },
];

export {
  services,
  technologies,
  skillCategories,
  experiences,
  achievements,
  hackathonsAndRoles,
  projects,
};
