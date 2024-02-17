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
  zidio,
  threejs,
  StudyNotion,
  chatterbox,
  DiagnoseWizard,
  galaxyVision,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web3 Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Zidio",
    icon: zidio,
    iconBg: "#383E56",
    date: "February 2024 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I believed it was unattainable to create a website as visually stunning as our projects, yet Sheshu shattered my expectations.",
    name: "S Roopesh",
    designation: "Web3 Lead",
    company: "IIIT Lucknow",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "I have yet to encounter a web developer who genuinely prioritizes their clients' success as much as Sheshu does.",
    name: "Kota Karthik",
    designation: "Web dev lead",
    company: "IIIT Lucknow",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "After Sheshu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Charan",
    designation: "Mobile dev Lead",
    company: "IIIT Lucknow",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sheshu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Saketha Ram",
    designation: "Mobile dev Lead",
    company: "IIIT Lucknow",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "Chat Application ",
    description:
      "Chat application designed to facilitate seamless communication and interaction among users, offering a user-friendly platform for real-time messaging, file sharing, and group discussions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: chatterbox,
    source_code_link: "https://github.com/SHESHU45/chatterbox",
  },
  {
    name: "DiagnoseWizard",
    description:
      "It is a website that takes the details of your medical reports and predicts the type of disease you have been diagnosed with. It uses React for the frontend and Flask for the backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: DiagnoseWizard,
    source_code_link: "https://github.com/SHESHU45/DiagnoseWizard",
  },
  {
    name: "Galaxy Vision ",
    description:
      "violence detection ML model to detect suspicious activities in real-time through CCTV or any camera, and send immediate alert to the respective authorities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: galaxyVision,
    source_code_link: "https://github.com/SHESHU45/GalaxyVision",
  },
  {
    name: "Study-Notion ",
    description:
      "Learning platform designed to empower users to explore, and manage knowledge resources, offering a good solution for educational needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "razorpay",
        color: "pink-text-gradient",
      },
    ],
    image: StudyNotion,
    source_code_link: "https://github.com/SHESHU45/Study-Notion",
  },
];

export { services, technologies, experiences, testimonials, projects };
