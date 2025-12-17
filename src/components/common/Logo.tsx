import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  const { currentTheme } = useTheme();

  // Cyber (Default) - Original SVG Logo
  if (currentTheme === 'cyber') {
    return (
      <img 
        src={`${import.meta.env.BASE_URL}assets/icons/logo-bold.svg`} 
        alt="Cyber Logo" 
        className={className}
        style={{ filter: 'drop-shadow(0 0 5px var(--color-cyber-primary))' }}
      />
    );
  }

  // Minimal - Clean Circle with Letter
  if (currentTheme === 'minimal') {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="var(--primary)" strokeWidth="2.5" />
        <path d="M11 22V10L21 22V10" stroke="var(--text-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Synthwave - Sunset/Triangle
  if (currentTheme === 'synthwave') {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L2 28H30L16 2Z" stroke="var(--primary)" strokeWidth="2" fill="var(--color-cyber-dark)" />
        <circle cx="16" cy="18" r="6" fill="var(--secondary)" />
        <path d="M2 28H30" stroke="var(--primary)" strokeWidth="3" />
        <path d="M4 24H28" stroke="var(--primary)" strokeWidth="1" />
      </svg>
    );
  }

  // Terminal - Square Prompt
  if (currentTheme === 'terminal') {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="28" height="24" stroke="var(--primary)" strokeWidth="2" />
        <path d="M8 10L14 16L8 22" stroke="var(--primary)" strokeWidth="2" strokeLinecap="square" />
        <line x1="16" y1="22" x2="24" y2="22" stroke="var(--primary)" strokeWidth="2" />
      </svg>
    );
  }

  // Midnight - Moon/Star
  if (currentTheme === 'midnight') {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16C6 10.4772 10.4772 6 16 6C16.89 6 17.75 6.13 18.57 6.37C17.62 7.72 17.15 9.4 17.5 11" stroke="var(--primary)" strokeWidth="2" />
        <path d="M22 6L23 9L26 10L23 11L22 14L21 11L18 10L21 9L22 6Z" fill="var(--secondary)" />
      </svg>
    );
  }

  // Gamer - Retro Controller
  if (currentTheme === 'gamer') {
    return (
      <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Controller Body */}
        <rect x="2" y="8" width="28" height="16" rx="4" stroke="var(--primary)" strokeWidth="2" fill="var(--color-cyber-panel)" />
        {/* D-Pad */}
        <path d="M6 16H10M8 14V18" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
        {/* Action Buttons */}
        <circle cx="22" cy="17" r="1.5" fill="var(--primary)" />
        <circle cx="26" cy="15" r="1.5" fill="var(--primary)" />
        {/* Select/Start */}
        <rect x="14" y="20" width="4" height="1" fill="var(--primary)" rx="0.5" />
      </svg>
    );
  }

  // Forest - Leaf
  if (currentTheme === 'forest') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="var(--color-cyber-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    );
  }

  // Coffee - Cup
  if (currentTheme === 'coffee') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="var(--color-cyber-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" x2="6" y1="2" y2="4" />
        <line x1="10" x2="10" y1="2" y2="4" />
        <line x1="14" x2="14" y1="2" y2="4" />
      </svg>
    );
  }

  // Blueprint - Grid/Square with Ruler lines
  if (currentTheme === 'blueprint') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="var(--color-cyber-primary)" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    );
  }

  // Noir - Diamond
  if (currentTheme === 'noir') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="var(--color-cyber-primary)" strokeWidth="1.5">
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3v6" />
        <path d="M13 3v6" />
      </svg>
    );
  }

  // Nordic - Mountain
  if (currentTheme === 'nordic') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="var(--color-cyber-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    );
  }

  // Sakura - Flower
  if (currentTheme === 'sakura') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="var(--color-cyber-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }

  // Dracula - Bat
  if (currentTheme === 'dracula') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="var(--color-cyber-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    );
  }

  // Ocean - Anchor
  if (currentTheme === 'ocean') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="var(--color-cyber-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="22" x2="12" y2="8" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      </svg>
    );
  }

  // Brutal - Block Text
  if (currentTheme === 'brutal') {
    return (
      <div className={`${className} flex items-center justify-center bg-black text-white font-black text-xl border-2 border-transparent`}>
        N.
      </div>
    );
  }

  // Fallback
  return <div className={`rounded-full bg-red-500 ${className}`} />;
};

export default Logo;
