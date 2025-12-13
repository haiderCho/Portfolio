import React from 'react';
import { Github, ChevronDown } from 'lucide-react';
import { PROFILE } from '@/constants';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-dim border border-cyber-primary/30 text-cyber-primary text-xs font-mono mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
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
              className="px-8 py-3 bg-cyber-primary text-black font-bold rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] active:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-all font-mono"
            >
              INITIATE_VIEW
            </button>
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyber-dim hover:border-cyber-primary active:border-cyber-primary text-cyber-text rounded transition-all font-mono flex items-center gap-2"
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
10101 FOYTRIX 10101
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
  );
};

export default Hero;
