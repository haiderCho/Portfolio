import React, { useState, useEffect } from 'react';

import { Project, ProgrammingLanguage } from '@/types';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import { useSystemBoot } from '@/hooks/useSystemBoot';

const NavItem = ({ id, label, activeSection, setActiveSection }: { id: string, label: string, activeSection: string, setActiveSection: (id: string) => void }) => (
  <button
    onClick={() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }}
    className={`px-4 py-2 font-mono text-sm transition-all border-b-2 ${activeSection === id
      ? 'border-cyber-primary text-cyber-primary'
      : 'border-transparent text-cyber-muted hover:text-cyber-text active:text-cyber-text'
      }`}
  >
    {`// ${label}`}
  </button>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [projects, setProjects] = useState<Project[]>([]);
  const [techStack, setTechStack] = useState<ProgrammingLanguage[]>([]);
  const booted = useSystemBoot();

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/projects.json`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to load projects:', err));

    fetch(`${import.meta.env.BASE_URL}data/tech-stack.json`)
      .then(res => res.json())
      .then(data => setTechStack(data))
      .catch(err => console.error('Failed to load tech stack:', err));
  }, []);

  if (!booted) {
    return (
      <div className="h-screen w-full bg-cyber-black flex flex-col items-center justify-center font-mono text-cyber-primary p-4">
        {/* Logo */}
        <div className="w-32 h-32 mb-8 animate-pulse flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}assets/icons/logo-bold.svg`}
            alt="NHC Logo"
            className="w-full h-full"
          />
        </div>

        <div className="w-64 border-2 border-cyber-dim p-1 mb-4">
          <div className="h-2 bg-cyber-primary loading-bar" />
        </div>
        <div className="text-sm animate-pulse">
          INITIALIZING FOYTRIX CORE...
        </div>
        <div className="mt-2 text-xs text-cyber-muted">
          LOADING MODULES: [ REACT, TAILWIND, D3 ]
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-black text-cyber-text overflow-x-hidden selection:bg-cyber-primary selection:text-black">
      {/* Background Matrix/Grid Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.03),transparent_70%)]" />
      </div>

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-cyber-black/80 backdrop-blur-md border-b border-cyber-dim">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <img
              src={`${import.meta.env.BASE_URL}assets/icons/logo-bold.svg`}
              alt="NHC"
              className="w-8 h-8 animate-pulse"
            />
            <span className="font-mono">NafizHC</span>
          </div>
          <div className="hidden md:flex gap-2">
            <NavItem id="home" label="ROOT" activeSection={activeSection} setActiveSection={setActiveSection} />
            <NavItem id="experience" label="EXPERIENCE" activeSection={activeSection} setActiveSection={setActiveSection} />
            <NavItem id="education" label="EDUCATION" activeSection={activeSection} setActiveSection={setActiveSection} />
            <NavItem id="skills" label="TECH_STACK" activeSection={activeSection} setActiveSection={setActiveSection} />
            <NavItem id="projects" label="PROJECTS" activeSection={activeSection} setActiveSection={setActiveSection} />
            <NavItem id="about" label="SYSTEM" activeSection={activeSection} setActiveSection={setActiveSection} />
            <NavItem id="contact" label="UPLINK" activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero />
        <Experience />
        <Education />
        <Skills techStack={techStack} />
        <Projects projects={projects} />
        <About />
        <Contact />
      </main>

      {/* Floating Chat Terminal */}
      {/* 
        NOTE: TerminalChat is currently disabled to prevent API key exposure. 
        Uncomment the line below to enable it if you have configured VITE_GEMINI_API_KEY globally.
      */}
      {/* <TerminalChat /> */}
    </div>
  );
}

export default App;