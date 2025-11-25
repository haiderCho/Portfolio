import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, ChevronDown, Terminal as TerminalIcon, Database, Layers } from 'lucide-react';
import TerminalChat from './components/TerminalChat';
import ProjectCard from './components/ProjectCard';
import SkillRadar from './components/SkillRadar';
import Education from './components/Education';
import { PROFILE, PROJECTS, EXPERIENCE } from './constants';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Simulate system boot sequence
    const timer = setTimeout(() => {
      setBooted(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!booted) {
    return (
      <div className="h-screen w-full bg-cyber-black flex flex-col items-center justify-center font-mono text-cyber-primary p-4">
        <div className="w-64 border-2 border-cyber-dim p-1 mb-4">
          <div className="h-2 bg-cyber-primary animate-[width_1.5s_ease-in-out_forwards]" style={{ width: '0%' }} />
        </div>
        <div className="text-sm animate-pulse">
          INITIALIZING NEXUS CORE...
        </div>
        <div className="mt-2 text-xs text-cyber-muted">
          LOADING MODULES: [ REACT, TAILWIND, GEMINI_API, D3 ]
        </div>
      </div>
    );
  }

  const NavItem = ({ id, label }: { id: string, label: string }) => (
    <button
      onClick={() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }}
      className={`px-4 py-2 font-mono text-sm transition-all border-b-2 ${activeSection === id
        ? 'border-cyber-primary text-cyber-primary'
        : 'border-transparent text-cyber-muted hover:text-cyber-text'
        }`}
    >
      {`// ${label}`}
    </button>
  );

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
            <div className="w-3 h-3 bg-cyber-primary rounded-full animate-pulse" />
            <span className="font-mono">NafizHC</span>
          </div>
          <div className="hidden md:flex gap-2">
            <NavItem id="home" label="ROOT" />
            <NavItem id="education" label="EDUCATION" />
            <NavItem id="skills" label="TECH_STACK" />
            <NavItem id="projects" label="PROJECTS" />
            <NavItem id="about" label="SYSTEM" />
            <NavItem id="contact" label="UPLINK" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">

        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded bg-cyber-dim border border-cyber-primary/30 text-cyber-primary text-xs font-mono mb-4">
                SYSTEM STATUS: ONLINE
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-sans leading-tight glitch-text">
                {PROFILE.name.replace('_', ' ')}
              </h1>
              <h2 className="text-2xl text-cyber-muted font-mono">
                {`<${PROFILE.title} />`}
              </h2>
              <p className="text-lg text-cyber-text/80 max-w-xl leading-relaxed">
                {PROFILE.bio}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-cyber-primary text-black font-bold rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all font-mono"
                >
                  INITIATE_VIEW
                </button>
                <a
                  href={PROFILE.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-cyber-dim hover:border-cyber-primary text-cyber-text rounded transition-all font-mono flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GITHUB
                </a>
              </div>
            </div>

            {/* Hero Visual - Abstract ASCII/Data Representation */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="w-80 h-80 relative border border-cyber-dim rounded-full flex items-center justify-center animate-spin-slow">
                <div className="absolute inset-0 border border-cyber-dim rounded-full transform rotate-45" />
                <div className="absolute inset-4 border border-dashed border-cyber-primary/30 rounded-full" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyber-primary/5 rounded-full blur-3xl" />
              <div className="absolute font-mono text-[10px] text-cyber-primary/40 whitespace-pre leading-none">
                {`
      10101010101010
    10101  NEXUS  10101
   10101   CORE    10101
    10101 SYSTEM  10101
      10101010101010
                `}
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-cyber-muted" />
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="min-h-screen flex items-center py-20 px-6 bg-cyber-dark/30 border-y border-cyber-dim/30">
          <div className="max-w-7xl mx-auto w-full">
            <Education />
          </div>
        </section>

        {/* SKILLS & TECH STACK SECTION */}
        <section id="skills" className="min-h-screen flex items-center py-24 px-6">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skills Radar */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Database className="w-6 h-6 text-cyber-primary" />
                <h2 className="text-2xl font-bold">Tech_Stack_Matrix</h2>
              </div>
              <div className="bg-cyber-panel border border-cyber-dim rounded-lg p-6 relative">
                <SkillRadar />
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <TerminalIcon className="w-6 h-6 text-cyber-primary" />
                <h2 className="text-2xl font-bold">Experience_Log</h2>
              </div>
              <div className="grid gap-4">
                {EXPERIENCE.map((exp) => (
                  <div key={exp.id} className="p-4 border border-cyber-dim rounded hover:border-cyber-primary/50 transition-colors">
                    <div className="text-cyber-primary font-mono text-xs mb-1">{exp.period}</div>
                    <div className="font-bold text-white mb-1">{exp.role}</div>
                    <div className="text-cyber-muted text-sm">{exp.company}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="min-h-screen flex items-center py-24 px-6 bg-cyber-dark/50">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-end gap-4 mb-12 border-b border-cyber-dim pb-4">
              <Code className="w-8 h-8 text-cyber-primary" />
              <h2 className="text-3xl font-bold text-white">Project_Repositories</h2>
              <span className="text-cyber-muted font-mono text-sm mb-1 ml-auto">Index: {PROJECTS.length} items</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM ARCHITECTURE / ABOUT */}
        <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-cyber-dark/30 border-y border-cyber-dim/30">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-8">
              <Layers className="w-8 h-8 text-cyber-secondary" />
              <h2 className="text-3xl font-bold text-white">System_Architecture</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6 text-cyber-text/90 leading-relaxed font-light text-lg">
                <p>
                  <strong className="text-white">Philosophy:</strong> I treat code as a living organism. It requires structure to survive, but adaptability to thrive. My approach to software engineering combines rigorous type safety with creative problem-solving.
                </p>
                <p>
                  <strong className="text-white">Focus:</strong> Currently exploring the intersection of distributed systems and generative AI. I am particularly interested in how LLMs can be optimized for edge computing environments (WebGPU/WASM).
                </p>
              </div>
              <div className="p-6 bg-cyber-dark border-l-2 border-cyber-secondary h-fit">
                <h3 className="text-cyber-secondary font-mono mb-4 text-sm">LATEST_COMMIT_LOG</h3>
                <div className="space-y-3 font-mono text-xs text-cyber-muted">
                  <p className="flex gap-2"><span className="text-cyber-secondary">&gt;</span> Refactored Neural-Vortex rendering pipeline</p>
                  <p className="flex gap-2"><span className="text-cyber-secondary">&gt;</span> Integrated Gemini 2.5 Flash for real-time analysis</p>
                  <p className="flex gap-2"><span className="text-cyber-secondary">&gt;</span> Optimized Docker containers for 30% smaller footprint</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <section id="contact" className="py-8 px-6 bg-cyber-black border-t border-cyber-dim relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl font-bold mb-4 glitch-text">Establish_Uplink</h2>
            <p className="text-cyber-muted mb-6 max-w-xl mx-auto text-sm">
              Open for collaboration on AI infrastructure and high-performance web applications.
            </p>

            <div className="flex justify-center gap-6">
              <a href={PROFILE.social.github} className="p-3 rounded-full bg-cyber-panel border border-cyber-dim hover:border-cyber-primary hover:text-cyber-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href={PROFILE.social.linkedin} className="p-3 rounded-full bg-cyber-panel border border-cyber-dim hover:border-cyber-primary hover:text-cyber-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:contact@example.com`} className="p-3 rounded-full bg-cyber-panel border border-cyber-dim hover:border-cyber-primary hover:text-cyber-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8 font-mono text-[10px] text-cyber-dim">
              <p>SYSTEM ID: {PROFILE.name}_V1.0.0</p>
              <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </section>

      </main>

      {/* Floating Chat Terminal */}
      <TerminalChat />
    </div>
  );
}

export default App;