import React, { useState, useEffect } from 'react';

import { Project, ProgrammingLanguage } from '@/types';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useSystemBoot } from '@/hooks/useSystemBoot';
import { useTheme } from '@/context/ThemeContext';
import Logo from '@/components/common/Logo';
import SakuraRain from '@/components/effects/SakuraRain';

const NavItem = ({ id, label, activeSection, setActiveSection }: { id: string, label: string, activeSection: string, setActiveSection: (id: string) => void }) => (
  <button
    onClick={() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }}
    className={`px-4 py-2 font-mono text-sm transition-all border-b-2 ${activeSection === id
      ? 'border-[var(--color-cyber-primary)] text-[var(--color-cyber-primary)]'
      : 'border-transparent text-[var(--color-cyber-muted)] hover:text-[var(--color-cyber-text)] active:text-[var(--color-cyber-text)]'
      }`}
  >
    {label}
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

  const { themeConfig } = useTheme();

  if (!booted) {
    return (
      <div className="h-screen w-full bg-[var(--color-cyber-black)] flex flex-col items-center justify-center font-mono text-[var(--color-cyber-primary)] p-4 transition-colors duration-300">
        {/* Logo */}
        <div className="w-32 h-32 mb-8 animate-[var(--animate-pulse-fast)] flex items-center justify-center">
          <Logo className="w-full h-full" />
        </div>

        <div className="w-64 border-2 border-[var(--color-cyber-dim)] p-1 mb-4">
          <div className="h-2 bg-[var(--color-cyber-primary)] loading-bar" />
        </div>
        <div className="text-sm animate-pulse">
          INITIALIZING {themeConfig.label.toUpperCase()} CORE...
        </div>
        <div className="mt-2 text-xs text-[var(--color-cyber-muted)]">
          LOADING MODULES: [ REACT, TAILWIND, D3 ]
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-cyber-black text-cyber-text overflow-x-hidden selection:bg-cyber-primary selection:text-black">
      {/* Sakura Petal Effect */}
      {themeConfig.id === 'sakura' && <SakuraRain />}

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-cyber-black)]/80 backdrop-blur-md border-b border-[var(--color-cyber-dim)] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <Logo className="w-8 h-8 animate-[var(--animate-pulse-fast)]" />
            <span className="font-mono">NafizHC</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex gap-1 xl:gap-2">
              <NavItem id="home" label={themeConfig.navLabels.home} activeSection={activeSection} setActiveSection={setActiveSection} />
              <NavItem id="experience" label={themeConfig.navLabels.experience} activeSection={activeSection} setActiveSection={setActiveSection} />
              <NavItem id="education" label={themeConfig.navLabels.education} activeSection={activeSection} setActiveSection={setActiveSection} />
              <NavItem id="skills" label={themeConfig.navLabels.skills} activeSection={activeSection} setActiveSection={setActiveSection} />
              <NavItem id="projects" label={themeConfig.navLabels.projects} activeSection={activeSection} setActiveSection={setActiveSection} />
              <NavItem id="about" label={themeConfig.navLabels.about} activeSection={activeSection} setActiveSection={setActiveSection} />
              <NavItem id="contact" label={themeConfig.navLabels.contact} activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
            
            <ThemeSwitcher />
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