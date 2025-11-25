import { Experience, Project, Skill, Education } from './types';

export const PROFILE = {
  name: "NafizHC",
  title: "AI/ML Developer | Data & Deep Learning Focus",
  tagline: "Turning coffee into code and ideas into reality.",
  bio: "I specialize in Full Stack Development and Machine Learning, with a keen interest in building scalable systems and solving complex problems.",
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
    techStack: ["Jupyter Notebook", "Python", "Pandas", "Scikit-learn"],
    repoUrl: "https://github.com/haiderCho/CSE299-Project-MRS",
    stars: 4,
    forks: 0,
    category: "AI/ML"
  },
  {
    id: "p2",
    title: "USB Access Control",
    description: "A C# application designed to control and monitor USB device access on a system for enhanced security.",
    techStack: ["C#", ".NET", "Windows Forms"],
    repoUrl: "https://github.com/haiderCho/CSE323-Project-UAC",
    stars: 1,
    forks: 0,
    category: "Systems"
  },
  {
    id: "p3",
    title: "Tic-Tac-Toe AI",
    description: "An unbeatable Tic-Tac-Toe AI implemented using the Minimax algorithm with Alpha-Beta pruning.",
    techStack: ["Python", "AI", "Algorithms"],
    repoUrl: "https://github.com/haiderCho/CSE440-Project-TTTAI",
    stars: 1,
    forks: 0,
    category: "AI/ML"
  },
  {
    id: "p4",
    title: "Phishing URL Detection",
    description: "Machine learning model to detect phishing URLs, enhancing cybersecurity by identifying malicious links.",
    techStack: ["Jupyter Notebook", "Python", "Machine Learning"],
    repoUrl: "https://github.com/haiderCho/CSE445-Project-MLPUD",
    stars: 1,
    forks: 0,
    category: "AI/ML"
  },
  {
    id: "p5",
    title: "Freshwater Fish Disease Classification",
    description: "Deep learning model using ResNet50 and transfer learning to classify diseases in freshwater fish from images — aimed at improving aquaculture health monitoring.",
    techStack: ["Jupyter Notebook", "Python", "TensorFlow / Keras", "Scikit-learn", "PIL / NumPy / Pandas", "Matplotlib / Seaborn"],
    repoUrl: "https://github.com/haiderCho/FWFDC",
    stars: 0,
    forks: 0,
    category: "AI/ML"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 90, category: "Core" },
  { name: "JavaScript", level: 65, category: "Frontend" },
  { name: "C#", level: 70, category: "Core" },
  { name: "C++", level: 75, category: "Core" },
  { name: "Java", level: 75, category: "Core" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "HTML5/CSS3", level: 90, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "SQL", level: 75, category: "Backend" },
  { name: "Git/GitHub", level: 95, category: "DevOps" },
  { name: "Docker", level: 60, category: "DevOps" },
  { name: "TensorFlow", level: 75, category: "AI/ML" }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "e1",
    role: "Computer Science Student",
    company: "University",
    period: "Present",
    description: "Working on various personal projects involving AI, Web Development, and System Programming."
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "North South University",
    period: "2020 - Present",
    description: "Major in Artificial Intelligence and Machine Learning. Relevant coursework: Data Structures, Algorithms, AI, Machine Learning, Database Systems."
  }
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