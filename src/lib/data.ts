import { IconType } from "react-icons";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiLangchain,
  SiGooglegemini,
  SiFlask,
  SiFastapi,
  SiPandas,
  SiFirebase,
  SiReact,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiRender,
  SiPostman,
} from "react-icons/si";
import { Search, Layers, MessageSquare, Database, Bot } from "lucide-react";

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
  icon: IconType;
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
  { name: "Python", category: "Programming", proficiency: 90, icon: SiPython },
  { name: "C++", category: "Programming", proficiency: 70, icon: SiCplusplus },
  { name: "JavaScript", category: "Programming", proficiency: 75, icon: SiJavascript },
  { name: "SQL", category: "Programming", proficiency: 75, icon: SiMysql },
 
  // AI / ML
  { name: "LangChain", category: "AI / ML", proficiency: 80, icon: SiLangchain },
  { name: "RAG Pipelines", category: "AI / ML", proficiency: 80, icon: Search },
  { name: "FAISS", category: "AI / ML", proficiency: 75, icon: Layers },
  { name: "Whisper", category: "AI / ML", proficiency: 75, icon: Bot },
  { name: "CLIP", category: "AI / ML", proficiency: 75, icon: Bot },
  { name: "Gemini API", category: "AI / ML", proficiency: 80, icon: SiGooglegemini },
  { name: "OpenAI API", category: "AI / ML", proficiency: 75, icon: Bot },
  { name: "Prompt Engineering", category: "AI / ML", proficiency: 80, icon: MessageSquare },
  { name: "Vector DBs", category: "AI / ML", proficiency: 75, icon: Database },
 
  // Backend
  { name: "Flask", category: "Backend", proficiency: 85, icon: SiFlask },
  { name: "FastAPI", category: "Backend", proficiency: 80, icon: SiFastapi },
  { name: "REST API Design", category: "Backend", proficiency: 80, icon: SiFastapi },
 
  // Data
  { name: "Pandas", category: "Data", proficiency: 80, icon: SiPandas },
 
  // Database
  { name: "MySQL", category: "Database", proficiency: 75, icon: SiMysql },
  { name: "Firebase Firestore", category: "Database", proficiency: 70, icon: SiFirebase },
 
  // Web
  { name: "React", category: "Web", proficiency: 65, icon: SiReact },
  { name: "HTML", category: "Web", proficiency: 75, icon: SiHtml5 },
  { name: "CSS", category: "Web", proficiency: 70, icon: SiCss },
 
  // Tools
  { name: "Git", category: "Tools", proficiency: 85, icon: SiGit },
  { name: "GitHub", category: "Tools", proficiency: 85, icon: SiGithub },
  { name: "Render", category: "Tools", proficiency: 65, icon: SiRender },
  { name: "Postman", category: "Tools", proficiency: 70, icon: SiPostman },
];

export interface Project {
  id: string;
  title: string;
  image: string;
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
    image: "/images/projects/video-rag.png",
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
    image: "/images/projects/business-dashboard.png",
    description:
      "Interactive analytics dashboard turning raw business data into actionable visual insights.",
    longDescription:
      "A data visualization and analytics dashboard built to surface business insights from structured data, with interactive charts and a clean, queryable interface for exploring trends.",
    techStack: ["Python", "FastAPI", "MySQL"],
    githubUrl: "https://github.com/erprincechauhan/Business-Intelligence-Dashboard",
    featured: true,
  },

  {
    id: "iris-knn-dashboard",
    title: "AI Classification Dashboard — Iris Dataset (KNN)",
    image: "/images/projects/iris-knn.png",
    description:
      "Full-stack ML dashboard for exploring, training, and evaluating a KNN classifier on the Iris dataset.",
    longDescription:
      "A full-stack demonstration of the supervised learning workflow built on the classic Iris dataset. A FastAPI backend handles dataset loading, stratified train/test splitting, feature scaling, and training a configurable K-Nearest Neighbors classifier with scikit-learn. The React frontend walks through the entire ML lifecycle across dedicated pages — dataset exploration with distribution charts, preprocessing preview, model training, a prediction playground with per-class probability bars, and an evaluation dashboard with accuracy, precision/recall/F1, and a confusion matrix.",
    techStack: ["React", "TypeScript", "FastAPI", "scikit-learn", "Tailwind CSS"],
    githubUrl: "https://github.com/erprincechauhan/iris-knn-dashboard",
    featured: true,
  },

  {
    id: "loan-ai",
    title: "AI Loan Approval System",
    image: "/images/projects/loan-ai.png",
    description:
      "AI-powered loan processing with smart eligibility checking, underwriting, and PDF sanction letter generation.",
    longDescription:
      "An intelligent loan assistance system built with multi-agent architecture. Features customer data verification via Firebase, automated underwriting with Google Gemini, real-time chat interface, and automatic PDF sanction letter generation.",
    techStack: ["Flask", "Firebase", "Google Gemini", "LangChain", "FPDF"],
    githubUrl: "https://github.com/erprincechauhan/AI-LoanApproval",
    featured: true,
  },

  {
    id: "recommind-ai",
    title: "RecomMind AI — Content-Based Resource Recommender",
    image: "/images/projects/recommind-ai.png",
    description:
      "Content-based learning resource recommender using TF-IDF and cosine similarity, with explainable, ranked results.",
    longDescription:
      "A full-stack recommendation system where a user picks at least three interests from a fixed taxonomy, and a FastAPI backend ranks a 45-resource catalog by cosine similarity over TF-IDF vectors built from each resource's title, category, tags, and description. Includes a custom rule-based preprocessing pipeline (stopword removal, lemmatization, synonym/abbreviation expansion), automatic fallback to popularity-based ranking when no resource clears the similarity threshold, deterministic tie-breaking, and per-recommendation natural-language explanations (e.g. \"Recommended because: Matches your interest in Machine Learning and Python\"). Also supports resource-to-resource \"more like this\" recommendations and a paginated, filterable catalog browser, backed by a React + TypeScript frontend and a pytest-covered recommendation engine.",
    techStack: ["React", "TypeScript", "FastAPI", "scikit-learn", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/erprincechauhan/recommind-ai",
    featured: true,
  },

  {
    id: "primetrade-assignment",
    title: "Market Sentiment vs. Trader Performance Analysis",
    image: "/images/projects/primtrade.png",
    description:
      "Statistical analysis of 211K+ trades linking market sentiment (Fear & Greed Index) to trader performance and risk-taking behavior.",
    longDescription:
      "An end-to-end analytical pipeline joining Fear & Greed Index data with 211,224 trade records across 32 accounts (late 2023–mid 2025) to test how sentiment regimes relate to daily PnL, position sizing, and win rates. Ran Shapiro-Wilk, Kruskal-Wallis, Spearman rank correlation, and Chi-square tests. Found a statistically significant negative correlation between sentiment and daily PnL (ρ=−0.25, p=0.027), and that traders significantly increase position sizes during Greed/Extreme Greed regimes (χ²=1950.21, p<0.001) despite stable ~80% win rates across all regimes — evidence that FOMO-driven position sizing, not trade accuracy, drives the performance drop.",
    techStack: ["Python", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/erprincechauhan/Primetrade-Assignment",
    featured: false,
  },


   {
    id: "Tkinter-login",
    title: "Tkinter Login Form",
    image: "/images/projects/tkinter.png",
    description:
      "Tkinter-based Python login app with authentication, image support, and popup alerts for secure user interaction.",
    longDescription:
      "A simple Tkinter-based Python login app with username/password validation, image support, and popup alerts. Demonstrates basic GUI development and user authentication.",
    techStack: ["Python", "Tkinter"],
    githubUrl: "https://github.com/erprincechauhan/Tkinter-Login-Form",
    featured: false,
  },

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
