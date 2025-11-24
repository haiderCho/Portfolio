import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, GitFork, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="group relative bg-cyber-panel border border-cyber-dim hover:border-cyber-primary rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyber-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-mono px-2 py-1 rounded bg-cyber-dark border border-cyber-dim text-cyber-primary">
          {project.category}
        </span>
        <div className="flex items-center gap-3 text-cyber-muted text-xs">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" /> {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-3 h-3" /> {project.forks}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors font-sans">
        {project.title}
      </h3>
      
      <p className="text-cyber-muted text-sm mb-6 leading-relaxed min-h-[60px]">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span key={tech} className="text-xs text-cyber-text/80 bg-cyber-dark px-2 py-1 rounded border border-cyber-dim/50">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-cyber-dim">
        <a 
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-cyber-text hover:text-cyber-primary transition-colors"
        >
          <Github className="w-4 h-4" />
          <span className="font-mono">SOURCE</span>
        </a>
        {project.demoUrl && (
          <a 
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-cyber-text hover:text-cyber-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="font-mono">DEPLOY</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;