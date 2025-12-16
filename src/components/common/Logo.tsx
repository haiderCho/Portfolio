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

  // Fallback
  return <div className={`rounded-full bg-red-500 ${className}`} />;
};

export default Logo;
