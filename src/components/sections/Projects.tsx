import React from 'react';
import { Code } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/types';
import { useTheme } from '@/context/ThemeContext';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { themeConfig } = useTheme();
  return (
    <section id="projects" className="min-h-screen flex items-center py-24 px-6 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-end gap-4 mb-12 border-b border-cyber-dim pb-4">
          <Code className="w-8 h-8 text-cyber-primary" />
          <h2 className="text-3xl font-bold text-[var(--color-cyber-text)]">{themeConfig.sectionTitles.projects}</h2>
          <span className="text-cyber-muted font-mono text-sm mb-1 ml-auto">Index: {projects.length} items</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
