import React from 'react';
import { Layers, Cpu, Monitor } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { PROFILE } from '@/constants';

const About = () => {
  const { themeConfig } = useTheme();
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-cyber-dark/30 border-y border-cyber-dim/30 section-glow">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <Layers className="w-8 h-8 text-cyber-secondary" />
          <h2 className="text-3xl font-bold text-[var(--color-cyber-text)]">{themeConfig.sectionTitles.about}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-[var(--color-cyber-text)]/80 leading-relaxed text-lg">
            <p>
              <strong className="text-[var(--color-cyber-text)]">Philosophy:</strong> I treat code as a living organism. It requires structure to survive, but adaptability to thrive. My approach to software engineering combines rigorous type safety with creative problem-solving.
            </p>
            <p>
              <strong className="text-[var(--color-cyber-text)]">Focus:</strong> Currently exploring the intersection of distributed systems and generative AI. I am particularly interested in how LLMs can be optimized for edge computing environments (WebGPU/WASM).
            </p>
          </div>
          <div className="p-6 bg-cyber-dark border-l-2 border-cyber-secondary h-fit">
            <h3 className="text-cyber-secondary font-mono mb-4 text-sm">LATEST_COMMIT_LOG</h3>
            <div className="space-y-3 font-mono text-xs text-cyber-muted">
              <p className="flex gap-2"><span className="text-cyber-secondary">&gt;</span> Refactored Neural-Vortex rendering pipeline</p>
              <p className="flex gap-2"><span className="text-cyber-secondary">&gt;</span> Integrated Multi-Provider AI (Gemini, Groq, DeepSeek, OpenRouter)</p>
              <p className="flex gap-2"><span className="text-cyber-secondary">&gt;</span> Optimized Docker containers for 30% smaller footprint</p>
            </div>
          </div>
        </div>

        {/* Current Workspace */}
        <div className="mt-12 p-6 bg-cyber-dark border-l-2 border-cyber-secondary">
          <h3 className="text-cyber-secondary font-mono mb-6 text-lg flex items-center gap-2">
            <Monitor className="w-5 h-5" />
            CURRENT_WORKSPACE
          </h3>
          <div className="flex flex-wrap gap-3 items-center">
            {/* Windows 11 */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyber-dark border border-cyber-dim hover:border-cyber-secondary hover:shadow-[0_0_10px_rgba(112,0,255,0.3)] hover:scale-105 active:border-cyber-secondary active:shadow-[0_0_10px_rgba(112,0,255,0.3)] active:scale-105 rounded text-xs font-mono transition-all cursor-pointer">
              <i className="devicon-windows11-original text-cyber-secondary" style={{ fontSize: '16px' }}></i>
              <span className="text-cyber-text">Windows 11 PRO</span>
            </div>

            {/* Intel CPU */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyber-dark border border-cyber-dim hover:border-cyber-secondary hover:shadow-[0_0_10px_rgba(112,0,255,0.3)] hover:scale-105 active:border-cyber-secondary active:shadow-[0_0_10px_rgba(112,0,255,0.3)] active:scale-105 rounded text-xs font-mono transition-all cursor-pointer">
              <i className="si si-intel text-cyber-secondary" style={{ fontSize: '16px' }}></i>
              <span className="text-cyber-text">i7 11th Gen</span>
            </div>

            {/* RAM */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyber-dark border border-cyber-dim hover:border-cyber-secondary hover:shadow-[0_0_10px_rgba(112,0,255,0.3)] hover:scale-105 active:border-cyber-secondary active:shadow-[0_0_10px_rgba(112,0,255,0.3)] active:scale-105 rounded text-xs font-mono transition-all cursor-pointer">
              <i className="si si-corsair text-cyber-secondary" style={{ fontSize: '16px' }}></i>
              <span className="text-cyber-text">32GB RAM</span>
            </div>

            {/* NVIDIA GPU */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyber-dark border border-cyber-dim hover:border-cyber-secondary hover:shadow-[0_0_10px_rgba(112,0,255,0.3)] hover:scale-105 active:border-cyber-secondary active:shadow-[0_0_10px_rgba(112,0,255,0.3)] active:scale-105 rounded text-xs font-mono transition-all cursor-pointer">
              <i className="si si-nvidia text-cyber-secondary" style={{ fontSize: '16px' }}></i>
              <span className="text-cyber-text">RTX 3060</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
