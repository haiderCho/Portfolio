export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
  stars: number;
  forks: number;
  category: 'AI/ML' | 'Web' | 'Web / Front-end' | 'Systems' | 'Blockchain';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Core' | 'AI/ML';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface SystemState {
  booted: boolean;
  terminalOpen: boolean;
  currentSection: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage?: string;
  content: string;
  readingTime: string;
}

export interface ProgrammingLanguage {
  name: string;
  icon: string;
  color: string;
  glowColor: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms' | 'Operating Systems';
}