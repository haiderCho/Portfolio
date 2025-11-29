import { Experience, Project, Skill, Education } from './types';

export const PROFILE = {
  name: "Nafiz Haider Chowdhury",
  title: "AI/ML Engineer",
  tagline: "Turning ideas into reality.",
  bio: "I specialize in Machine Learning, with additional experience in Full Stack Development, and a keen interest in building scalable systems and solving complex problems.",
  location: "Dhaka, Bangladesh",
  availability: "Open to Opportunities",
  social: {
    github: "https://github.com/haiderCho",
    linkedin: "https://linkedin.com/in/4e6166697a/",
    twitter: "https://twitter.com/NafizHC"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Music Recommendation System",
    description: "A music recommendation system built using Jupyter Notebook, analyzing user preferences to suggest songs.",
    techStack: ["Jupyter Notebook", "Python"],
    repoUrl: "https://github.com/haiderCho/CSE299-Project-MRS",
    stars: 4,
    forks: 0,
    category: "AI/ML"
  },
  {
    id: "p2",
    title: "USB Access Control",
    description: "A C# application designed to control and monitor USB device access on a system for enhanced security.",
    techStack: ["C#", "Java", "PHP"],
    repoUrl: "https://github.com/haiderCho/CSE323-Project-UAC",
    stars: 1,
    forks: 0,
    category: "Systems"
  },
  {
    id: "p3",
    title: "Tic-Tac-Toe AI",
    description: "An unbeatable Tic-Tac-Toe AI implemented using the Minimax algorithm with Alpha-Beta pruning.",
    techStack: ["Python", "Minimax Algorithm", "Alpha-Beta Pruning"],
    repoUrl: "https://github.com/haiderCho/CSE440-Project-TTTAI",
    stars: 1,
    forks: 0,
    category: "AI/ML"
  },
  {
    id: "p4",
    title: "Phishing URL Detection",
    description: "Machine learning model to detect phishing URLs, enhancing cybersecurity by identifying malicious links.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    repoUrl: "https://github.com/haiderCho/CSE445-Project-MLPUD",
    stars: 1,
    forks: 0,
    category: "AI/ML"
  },
  {
    id: "p5",
    title: "Freshwater Fish Disease Classification",
    description: "Deep learning model using ResNet50 and transfer learning to classify diseases in freshwater fish from images — aimed at improving aquaculture health monitoring.",
    techStack: ["Python", "TensorFlow", "Keras", "ResNet50"],
    repoUrl: "https://github.com/haiderCho/FWFDC",
    stars: 0,
    forks: 0,
    category: "AI/ML"
  },
  {
    id: "p6",
    title: "Personal Portfolio Website",
    description: "A responsive and modern personal portfolio site showcasing the developer’s skills, projects, experience, and contact information.",
    techStack: ["TypeScript", "React", "HTML"],
    repoUrl: "https://github.com/haiderCho/Portfolio",
    stars: 0,
    forks: 0,
    category: "Web / Front-end"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 95, category: "Core" },
  { name: "TensorFlow", level: 85, category: "AI/ML" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Docker", level: 70, category: "DevOps" },
  { name: "C++", level: 75, category: "Core" },
  { name: "Java", level: 75, category: "Core" },
  { name: "SQL", level: 80, category: "Backend" },
  { name: "Git", level: 90, category: "DevOps" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "AWS", level: 65, category: "DevOps" }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "e1",
    role: "AI/ML Engineer & Data Scientist",
    company: "TDR Ltd",
    period: "Present",
    description: "Develop and deploy advanced artificial intelligence models, create data-driven predictive analytics solutions, and optimize machine-learning pipelines for performance, scalability, and reliability. Responsibilities include designing end-to-end modeling workflows, evaluating and preparing datasets, improving algorithmic accuracy, and collaborating with stakeholders to translate business needs into actionable AI solutions. Consistently leverage best practices in model validation, experimentation, and optimization to deliver high-impact, production-ready systems."
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu4",
    degree: "M.Sc. in Computer Science & Engineering",
    institution: "Loading...",
    period: "Loading...",
    description: "Loading..."
  },
  {
    id: "edu3",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "North South University",
    period: "2025",
    description: "Artificial Intelligence and Machine Learning Trail."
  },
  {
    id: "edu2",
    degree: "Higher Secondary Education",
    institution: "Birshreshtha Noor Mohammad Public College",
    period: "2016",
    description: ""
  },
  {
    id: "edu1",
    degree: "Secondary Education",
    institution: "Birshreshtha Noor Mohammad Public College",
    period: "2014",
    description: ""
  }
];

export const PROGRAMMING_LANGUAGES: import('./types').ProgrammingLanguage[] = [
  // Languages
  { name: "C", icon: "devicon-c-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "C#", icon: "devicon-csharp-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "C++", icon: "devicon-cplusplus-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "CSS3", icon: "devicon-css3-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "Java", icon: "devicon-java-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "HTML5", icon: "devicon-html5-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "JavaScript", icon: "devicon-javascript-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "Kotlin", icon: "devicon-kotlin-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "Markdown", icon: "devicon-markdown-original", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "Python", icon: "devicon-python-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },
  { name: "PHP", icon: "devicon-php-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Languages" },

  // Frameworks & Libraries
  { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "Flutter", icon: "devicon-flutter-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "jQuery", icon: "devicon-jquery-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "Laravel", icon: "devicon-laravel-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "Node.js", icon: "devicon-nodejs-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "React", icon: "devicon-react-original", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "Vue.js", icon: "devicon-vuejs-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "NumPy", icon: "devicon-numpy-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "Pandas", icon: "devicon-pandas-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "scikit-learn", icon: "devicon-scikitlearn-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },
  { name: "TensorFlow", icon: "devicon-tensorflow-original", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Frameworks & Libraries" },

  // Tools & Platforms
  { name: "Netlify", icon: "devicon-netlify-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Tools & Platforms" },
  { name: "Vercel", icon: "devicon-vercel-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Tools & Platforms" },
  { name: "Docker", icon: "devicon-docker-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Tools & Platforms" },
  { name: "GitHub", icon: "devicon-github-original", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Tools & Platforms" },
  { name: "Jupyter", icon: "devicon-jupyter-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Tools & Platforms" },
  { name: "MySQL", icon: "devicon-mysql-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Tools & Platforms" },
  { name: "Trello", icon: "devicon-trello-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Tools & Platforms" },
  { name: "Notion", icon: "devicon-notion-plain", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Tools & Platforms" },
  { name: "LaTeX", icon: "devicon-latex-original", color: "#00f0ff", glowColor: "rgba(0, 240, 255, 0.5)", category: "Tools & Platforms" }
];

export const SYSTEM_PROMPT = `
You are the "Digital Twin" of ${PROFILE.name}. You are embedded in his portfolio website.
Your goal is to impress recruiters and fellow engineers.
Answer questions based strictly on the provided context (projects, skills, experience).
Style: Professional but slightly "cyberpunk" and witty. Use technical terminology correctly.
If asked about a project, provide details from the context.
If asked about contact info, refer to the social links.
Keep responses concise (under 100 words) unless asked for elaboration.
Current Context:
Name: ${PROFILE.name}
Bio: ${PROFILE.bio}
Projects: ${PROJECTS.map(p => `${p.title}: ${p.description} (Stack: ${p.techStack.join(', ')})`).join('; ')}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company}`).join('; ')}
`;