export const personalInfo = {
  name: "Prince Chauhan",
  tagline: "AI Engineer • Data Scientist • Full-Stack Developer",
  email: "erprincechauhan@gmail.com",
  github: "https://github.com/erprincechauhan",
  linkedin: "https://linkedin.com/in/princechauhan",
  bio: "I'm an aspiring AI Engineer and Data Scientist with a passion for building intelligent systems that solve real-world problems. From voice-controlled assistants to video understanding pipelines, I combine deep learning expertise with full-stack development to create end-to-end AI solutions.",
  resumeUrl: "#experience",
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
  "Tools",
];

export const skills: Skill[] = [
  // Programming
  { name: "Python", category: "Programming", proficiency: 90, icon: "🐍" },
  { name: "C++", category: "Programming", proficiency: 70, icon: "⚙️" },
  { name: "JavaScript", category: "Programming", proficiency: 75, icon: "✦" },
  // AI / ML
  { name: "TensorFlow", category: "AI / ML", proficiency: 75, icon: "🧠" },
  { name: "Keras", category: "AI / ML", proficiency: 75, icon: "🔬" },
  // Backend
  { name: "Django", category: "Backend", proficiency: 70, icon: "🌐" },
  { name: "Flask", category: "Backend", proficiency: 85, icon: "🧪" },
  { name: "FastAPI", category: "Backend", proficiency: 75, icon: "⚡" },
  // Data
  { name: "Pandas", category: "Data", proficiency: 80, icon: "📊" },
  // Tools
  { name: "Git", category: "Tools", proficiency: 85, icon: "🔀" },
  { name: "GitHub", category: "Tools", proficiency: 85, icon: "🐙" },
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
  // {
  //   id: "flask-contact",
  //   title: "Flask Contact App",
  //   description:
  //     "Blog-style site with contact form, SQL database storage, and email notifications.",
  //   longDescription:
  //     "A clean Flask application serving a blog-like website with index, post, about, and contact pages. Contact form submissions are stored in SQLite and trigger email notifications to the site owner via Flask-Mail.",
  //   techStack: ["Flask", "SQLAlchemy", "Flask-Mail", "SQLite"],
  //   githubUrl: "https://github.com/princechauhan",
  //   featured: false,
  // },
   {
    id: "Tkinter-login",
    title: "Tkinter Login Form",
    description:
      "Tkinter-based Python login app with authentication, image support, and popup alerts for secure user interaction.",
    longDescription:
      "A simple Tkinter-based Python login app with username/password validation, image support, and popup alerts. Demonstrates basic GUI development and user authentication.",
    techStack: ["Python", "Tkinter"],
    githubUrl: "https://github.com/erprincechauhan/Tkinter-Login-Form",
    featured: true,
  },

    {
    id: "jarvis",
    title: "JARVIS AI Assistant",
    description:
      "Voice-controlled AI desktop assistant with intelligent command routing and tool selection.",
    longDescription:
      "A modular AI-powered desktop assistant inspired by Iron Man's JARVIS. Features voice recognition, AI-powered command routing, extensible tool system, and natural language understanding for desktop automation.",
    techStack: ["Python", "Speech Recognition", "AI/ML", "System Tray"],
    githubUrl: "https://github.com/erprincechauhan",
    featured: false,
  },

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
