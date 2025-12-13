import { Experience, Skill, Education, Profile } from '@/types';

export const PROFILE: Profile = {
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

export const SKILLS: Skill[] = [
  { name: "Python", level: 85, category: "Languages" },
  { name: "C++", level: 65, category: "Languages" },
  { name: "Java", level: 85, category: "Languages" },
  { name: "Rust", level: 35, category: "Languages" },
  { name: "TypeScript", level: 65, category: "Languages" },
  { name: "React", level: 80, category: "Frameworks" },
  { name: "Node.js", level: 75, category: "Frameworks" },
  { name: "TensorFlow", level: 55, category: "Frameworks" },
  { name: "PyTorch", level: 55, category: "Frameworks" },
  { name: "Docker", level: 60, category: "Tools" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "SQL", level: 80, category: "Tools" },
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
Projects: (Ask the user to browse the Projects section for details)
Skills: ${SKILLS.map(s => s.name).join(', ')}
Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company}`).join('; ')}
`;