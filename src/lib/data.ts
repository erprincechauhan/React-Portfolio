export const personalInfo = {
  name: "Prince Chauhan",
  tagline: "AI/ML Enthusiast • Python & Backend Developer • Building Production-Style AI Systems",
  email: "erprincechauhan@gmail.com",
  github: "https://github.com/erprincechauhan",
  linkedin: "https://www.linkedin.com/in/erprincechauhan",
  bio: "I'm an aspiring AI Engineer and Data Scientist with a passion for building intelligent systems that solve real-world problems. From voice-controlled assistants to video understanding pipelines, I combine deep learning expertise with full-stack development to create end-to-end AI solutions.",
  resumeUrl: "/Princeresume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 0–100
  icon: string;
}

export const skillCategories = [
  "Programming",
  "AI / ML",
  "Backend",
  "Data",
  "Database",
  "Web",
  "Tools",
];

export const skills: Skill[] = [
  // Programming
  { name: "Python", category: "Programming", proficiency: 90, icon: "🐍" },
  { name: "C++", category: "Programming", proficiency: 70, icon: "⚙️" },
  { name: "JavaScript", category: "Programming", proficiency: 75, icon: "✦" },
  { name: "SQL", category: "Programming", proficiency: 75, icon: "🗄️" },

  // AI / ML
  { name: "LangChain", category: "AI / ML", proficiency: 80, icon: "🦜" },
  { name: "RAG Pipelines", category: "AI / ML", proficiency: 80, icon: "🔍" },
  { name: "FAISS", category: "AI / ML", proficiency: 75, icon: "🧭" },
  { name: "Whisper", category: "AI / ML", proficiency: 75, icon: "🎙️" },
  { name: "CLIP", category: "AI / ML", proficiency: 75, icon: "🖼️" },
  { name: "Gemini API", category: "AI / ML", proficiency: 80, icon: "✨" },
  { name: "OpenAI API", category: "AI / ML", proficiency: 75, icon: "🤖" },
  { name: "Prompt Engineering", category: "AI / ML", proficiency: 80, icon: "💬" },
  { name: "Vector DBs", category: "AI / ML", proficiency: 75, icon: "🗂️" },

  // Backend
  { name: "Flask", category: "Backend", proficiency: 85, icon: "🧪" },
  { name: "FastAPI", category: "Backend", proficiency: 80, icon: "⚡" },
  { name: "REST API Design", category: "Backend", proficiency: 80, icon: "🔗" },

  // Data
  { name: "Pandas", category: "Data", proficiency: 80, icon: "📊" },

  // Database
  { name: "MySQL", category: "Database", proficiency: 75, icon: "🐬" },
  { name: "Firebase Firestore", category: "Database", proficiency: 70, icon: "🔥" },

  // Web
  { name: "React", category: "Web", proficiency: 65, icon: "⚛️" },
  { name: "HTML", category: "Web", proficiency: 75, icon: "📄" },
  { name: "CSS", category: "Web", proficiency: 70, icon: "🎨" },

  // Tools
  { name: "Git", category: "Tools", proficiency: 85, icon: "🔀" },
  { name: "GitHub", category: "Tools", proficiency: 85, icon: "🐙" },
  { name: "Render", category: "Tools", proficiency: 65, icon: "🚀" },
  { name: "Postman", category: "Tools", proficiency: 70, icon: "📮" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "video-rag",
    title: "Video-RAG Chatbot",
    description:
      "Upload videos, ask natural language questions, and get auto-extracted clips with precise timestamps.",
    longDescription:
      "A complete Video-based Retrieval Augmented Generation system using dual-modal search (text + visual embeddings), FAISS indexing, scene detection, and automatic clip extraction. Features reciprocal rank fusion for intelligent result merging.",
    techStack: ["Python", "FAISS", "CLIP", "Whisper", "Gradio", "Gemini"],
    githubUrl: "https://github.com/erprincechauhan/RAG",
    featured: true,
  },

  {
    id: "business-intelligence-dashboard",
    title: "Business Intelligence Dashboard",
    description:
      "Interactive analytics dashboard turning raw business data into actionable visual insights.",
    longDescription:
      "A data visualization and analytics dashboard built to surface business insights from structured data, with interactive charts and a clean, queryable interface for exploring trends.",
    techStack: ["Python", "FastAPI", "MySQL"],
    githubUrl: "https://github.com/erprincechauhan/Business-Intelligence-Dashboard",
    featured: true,
  },

  {
    id: "loan-ai",
    title: "AI Loan Approval System",
    description:
      "AI-powered loan processing with smart eligibility checking, underwriting, and PDF sanction letter generation.",
    longDescription:
      "An intelligent loan assistance system built with multi-agent architecture. Features customer data verification via Firebase, automated underwriting with Google Gemini, real-time chat interface, and automatic PDF sanction letter generation.",
    techStack: ["Flask", "Firebase", "Google Gemini", "LangChain", "FPDF"],
    githubUrl: "https://github.com/erprincechauhan/AI-LoanApproval",
    featured: true,
  },

  {
    id: "primetrade-assignment",
    title: "Market Sentiment vs. Trader Performance Analysis",
    description:
      "Statistical analysis of 211K+ trades linking market sentiment (Fear & Greed Index) to trader performance and risk-taking behavior.",
    longDescription:
      "An end-to-end analytical pipeline joining Fear & Greed Index data with 211,224 trade records across 32 accounts (late 2023–mid 2025) to test how sentiment regimes relate to daily PnL, position sizing, and win rates. Ran Shapiro-Wilk, Kruskal-Wallis, Spearman rank correlation, and Chi-square tests. Found a statistically significant negative correlation between sentiment and daily PnL (ρ=−0.25, p=0.027), and that traders significantly increase position sizes during Greed/Extreme Greed regimes (χ²=1950.21, p<0.001) despite stable ~80% win rates across all regimes — evidence that FOMO-driven position sizing, not trade accuracy, drives the performance drop.",
    techStack: ["Python", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/erprincechauhan/Primetrade-Assignment",
    featured: true,
  },


  // {
  //   id: "mental-wellness",
  //   title: "Mental Wellness Chatbot",
  //   description:
  //     "AI chatbot providing mental health advice using Llama 2 with document retrieval from PDFs.",
  //   longDescription:
  //     "An empathetic AI chatbot built with Streamlit and LangChain that leverages Meta's Llama 2 model. It retrieves relevant information from mental health PDF documents to provide real-time, informed advice to users seeking support.",
  //   techStack: ["Streamlit", "LangChain", "Llama 2", "PDF Retrieval"],
  //   githubUrl: "https://github.com/princechauhan",
  //   featured: true,
  // },
  // {
  //   id: "health-mgmt",
  //   title: "Health Management System",
  //   description:
  //     "Track exercise and food activities with automated timestamps and comprehensive history.",
  //   longDescription:
  //     "A Python-based health management system that allows users to log exercise routines and dietary activities. Automatically timestamps all entries and provides a clean interface for reviewing health history over time.",
  //   techStack: ["Python", "Data Management", "CLI"],
  //   githubUrl: "https://github.com/princechauhan",
  //   featured: false,
  // },
  {
    id: "flask-contact",
    title: "Flask Contact App",
    description:
      "Blog-style site with contact form, SQL database storage, and email notifications.",
    longDescription:
      "A clean Flask application serving a blog-like website with index, post, about, and contact pages. Contact form submissions are stored in SQLite and trigger email notifications to the site owner via Flask-Mail.",
    techStack: ["Flask", "SQLAlchemy", "Flask-Mail", "SQLite"],
    githubUrl: "https://github.com/princechauhan",
    featured: true,
  },
   {
    id: "Tkinter-login",
    title: "Tkinter Login Form",
    description:
      "Tkinter-based Python login app with authentication, image support, and popup alerts for secure user interaction.",
    longDescription:
      "A simple Tkinter-based Python login app with username/password validation, image support, and popup alerts. Demonstrates basic GUI development and user authentication.",
    techStack: ["Python", "Tkinter"],
    githubUrl: "https://github.com/erprincechauhan/Tkinter-Login-Form",
    featured: false,
  },

  // {
  //   id: "jarvis",
  //   title: "JARVIS AI Assistant",
  //   description:
  //     "Voice-controlled AI desktop assistant with intelligent command routing and tool selection.",
  //   longDescription:
  //     "A modular AI-powered desktop assistant inspired by Iron Man's JARVIS. Features voice recognition, AI-powered command routing, extensible tool system, and natural language understanding for desktop automation.",
  //   techStack: ["Python", "Speech Recognition", "AI/ML", "System Tray"],
  //   githubUrl: "https://github.com/erprincechauhan",
  //   featured: false,
  // },

  // {
  //   id: "flappy-bird",
  //   title: "Flappy Bird Game",
  //   description:
  //     "Classic Flappy Bird clone built with Python featuring smooth gameplay mechanics.",
  //   longDescription:
  //     "A faithful recreation of the classic Flappy Bird game using Python and Pygame. Features smooth physics, collision detection, score tracking, and responsive controls.",
  //   techStack: ["Python", "Pygame"],
  //   githubUrl: "https://github.com/princechauhan",
  //   featured: false,
  // },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tags: string[];
}

export const timeline: TimelineItem[] = [
  {
    year: "Present",
    title: "Building AI-Powered Applications",
    description:
      "Developing production-grade AI systems including Video-RAG pipelines, multi-agent loan processing, and voice-controlled assistants. Focused on bridging the gap between ML research and real-world applications.",
    tags: ["RAG", "Multi-Agent AI", "Computer Vision"],
  },
  {
    year: "2025",
    title: "Deep Dive into AI & Machine Learning",
    description:
      "Intensified focus on deep learning frameworks — TensorFlow, Keras — and built end-to-end ML pipelines. Explored NLP with LangChain, vector databases, and retrieval-augmented generation architectures.",
    tags: ["TensorFlow", "LangChain", "FAISS"],
  },
  {
    year: "2024",
    title: "Full-Stack Development & Python Mastery",
    description:
      "Built multiple web applications with Flask, Django, and FastAPI. Developed strong fundamentals in backend architecture, database design, and API development.",
    tags: ["Flask", "Django", "FastAPI", "Python"],
  },
  {
    year: "2023",
    title: "Programming Foundations",
    description:
      "Started the journey with C++ and Python. Built foundational projects including games and utility tools. Learned version control with Git and GitHub.",
    tags: ["C++", "Python", "Git", "DSA"],
  },
];
