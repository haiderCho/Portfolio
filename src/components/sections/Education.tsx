import React from 'react';
import EducationContent from '@/components/Education';
import { useTheme } from '@/context/ThemeContext';

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <EducationContent />
      </div>
    </section>
  );
};

export default Education;
