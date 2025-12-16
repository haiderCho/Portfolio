import React from 'react';
import ExperienceContent from '@/components/Experience';
import { useTheme } from '@/context/ThemeContext';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6 bg-cyber-dark/30 border-y border-cyber-dim/30 section-glow">
      <div className="max-w-7xl mx-auto w-full">
        {/* The title and content are now handled within ExperienceContent,
            which is expected to use theme variables and dynamic titles as per the instruction. */}
        <ExperienceContent />
      </div>
    </section>
  );
};

export default Experience;
