import React from 'react';
import { Github, ChevronDown } from 'lucide-react';
import { PROFILE } from '@/constants';
import { useTheme } from '@/context/ThemeContext';

const Hero = () => {
  const { themeConfig } = useTheme();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--color-cyber-dim)] border border-[var(--color-cyber-primary)]/30 text-[var(--color-cyber-primary)] text-xs font-mono mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-current animate-pulse shadow-[0_0_8px_currentColor]"></span>
            {themeConfig.greetingText}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-sans leading-tight glitch-text">
            {PROFILE.name.replace('_', ' ')}
          </h1>
          <h2 className="text-2xl text-[var(--color-cyber-muted)] font-mono">
            {`<${PROFILE.title} />`}
          </h2>
          <p className="text-lg text-[var(--color-cyber-text)]/80 max-w-xl leading-relaxed">
            {PROFILE.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[var(--color-cyber-primary)] text-[var(--color-cyber-black)] font-bold rounded hover:shadow-[0_0_20px_var(--color-cyber-dim)] active:shadow-[0_0_20px_var(--color-cyber-dim)] transition-all font-mono"
            >
              {themeConfig.sectionTitles.hero}
            </button>
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[var(--color-cyber-dim)] hover:border-[var(--color-cyber-primary)] active:border-[var(--color-cyber-primary)] text-[var(--color-cyber-text)] rounded transition-all font-mono flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GITHUB
            </a>
          </div>
        </div>

        {/* Hero Visual - Abstract ASCII/Data Representation */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="w-80 h-80 relative border border-[var(--color-cyber-dim)] rounded-full flex items-center justify-center animate-[var(--animate-spin-slow)]">
            <div className="absolute inset-0 border border-[var(--color-cyber-dim)] rounded-full transform rotate-45" />
            <div className="absolute inset-4 border border-dashed border-[var(--color-cyber-primary)]/30 rounded-full" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-cyber-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute font-mono text-[10px] whitespace-pre leading-none animate-[var(--animate-float)]" style={{ color: 'var(--color-ascii-art, var(--color-cyber-primary))', opacity: 0.7 }}>
            {themeConfig.heroAscii}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cyber-muted" />
      </div>
    </section>
  );
};

export default Hero;
