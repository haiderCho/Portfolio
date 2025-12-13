import React from 'react';
import { Database } from 'lucide-react';
import SkillRadar from '@/components/SkillRadar';
import ProgrammingLanguages from '@/components/ProgrammingLanguages';
import { ProgrammingLanguage } from '@/types';

interface SkillsProps {
  techStack: ProgrammingLanguage[];
}

const Skills: React.FC<SkillsProps> = ({ techStack }) => {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-cyber-dark/30 border-y border-cyber-dim/30 section-glow">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column: Matrix + Frameworks */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Database className="w-8 h-8 text-cyber-primary" />
              <h2 className="text-3xl font-bold">Tech_Stack_Matrix</h2>
            </div>
            <div className="bg-cyber-panel border border-cyber-dim rounded-lg p-6 relative mb-6">
              <SkillRadar />
            </div>
          </div>

          <ProgrammingLanguages category="Frameworks & Libraries" items={techStack} />
        </div>

        {/* Right Column: Languages + Tools + OS */}
        <div className="space-y-6 pt-[50px]">
          <ProgrammingLanguages category="Languages" items={techStack} />
          <ProgrammingLanguages category="Tools & Platforms" items={techStack} />
          <ProgrammingLanguages category="Operating Systems" items={techStack} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
