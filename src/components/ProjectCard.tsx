import React from 'react';
import { Project } from '@/types';
import { Github, ExternalLink, GitFork, Star, Terminal } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className="group relative bg-cyber-panel border border-cyber-dim hover:border-cyber-primary active:border-cyber-primary rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-1 active:transform active:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] active:shadow-[0_0_20px_rgba(0,240,255,0.1)] overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyber-primary/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity" />

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

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-primary group-active:text-cyber-primary transition-colors font-sans">
        {project.title}
      </h3>

      <p className="text-cyber-muted text-sm mb-6 leading-relaxed min-h-[60px]">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => {
          const getIconInfo = (t: string): { class: string; type: 'devicon' | 'si' } | null => {
            const lower = t.toLowerCase();

            // Languages
            if (lower === 'assembly') return { class: 'si-assemblyscript', type: 'si' };
            if (lower === 'c') return { class: 'devicon-c-plain', type: 'devicon' };
            if (lower === 'c++') return { class: 'devicon-cplusplus-plain', type: 'devicon' };
            if (lower === 'c#') return { class: 'devicon-csharp-plain', type: 'devicon' };
            if (lower === 'css' || lower === 'css3') return { class: 'devicon-css3-plain', type: 'devicon' };
            if (lower === 'html' || lower === 'html5') return { class: 'devicon-html5-plain', type: 'devicon' };
            if (lower === 'java') return { class: 'devicon-java-plain', type: 'devicon' };
            if (lower === 'javascript') return { class: 'devicon-javascript-plain', type: 'devicon' };
            if (lower === 'kotlin') return { class: 'devicon-kotlin-plain', type: 'devicon' };
            if (lower === 'php') return { class: 'devicon-php-plain', type: 'devicon' };
            if (lower === 'python') return { class: 'devicon-python-plain', type: 'devicon' };
            if (lower === 'r') return { class: 'devicon-r-plain', type: 'devicon' };
            if (lower === 'rust') return { class: 'devicon-rust-plain', type: 'devicon' };
            if (lower === 'typescript') return { class: 'devicon-typescript-plain', type: 'devicon' };

            // Frameworks & Libraries - Web
            if (lower === 'react') return { class: 'devicon-react-original', type: 'devicon' };
            if (lower === 'nodejs' || lower === 'node.js') return { class: 'devicon-nodejs-plain', type: 'devicon' };
            if (lower === 'vue' || lower === 'vuejs' || lower === 'vue.js') return { class: 'devicon-vuejs-plain', type: 'devicon' };
            if (lower === 'angular') return { class: 'devicon-angular-plain', type: 'devicon' };
            if (lower === 'bootstrap') return { class: 'devicon-bootstrap-plain', type: 'devicon' };
            if (lower === 'tailwind' || lower === 'tailwindcss') return { class: 'devicon-tailwindcss-plain', type: 'devicon' };
            if (lower === 'jquery') return { class: 'devicon-jquery-plain', type: 'devicon' };
            if (lower === 'laravel') return { class: 'devicon-laravel-plain', type: 'devicon' };
            if (lower === 'flask') return { class: 'devicon-flask-original', type: 'devicon' };
            if (lower === 'django') return { class: 'devicon-django-plain', type: 'devicon' };
            if (lower === 'streamlit') return { class: 'devicon-streamlit-plain', type: 'devicon' };

            // Frameworks & Libraries - ML/AI
            if (lower === 'tensorflow') return { class: 'devicon-tensorflow-original', type: 'devicon' };
            if (lower === 'pytorch') return { class: 'devicon-pytorch-plain', type: 'devicon' };
            if (lower === 'keras') return { class: 'devicon-keras-plain', type: 'devicon' };
            if (lower === 'numpy') return { class: 'devicon-numpy-plain', type: 'devicon' };
            if (lower === 'pandas') return { class: 'devicon-pandas-plain', type: 'devicon' };
            if (lower === 'scikit-learn' || lower === 'sklearn') return { class: 'devicon-scikitlearn-plain', type: 'devicon' };
            if (lower === 'opencv') return { class: 'devicon-opencv-plain', type: 'devicon' };
            if (lower === 'matplotlib') return { class: 'devicon-matplotlib-plain', type: 'devicon' };
            if (lower === 'hugging face' || lower === 'huggingface') return { class: 'si-huggingface', type: 'si' };
            if (lower === 'jax') return { class: 'devicon-python-plain', type: 'devicon' };
            if (lower === 'weights & biases' || lower === 'wandb') return { class: 'si-weightsandbiases', type: 'si' };
            if (lower === 'yolov8' || lower === 'yolo') return { class: 'si-yolo', type: 'si' };
            if (lower === 'tensorboard') return { class: 'devicon-tensorflow-original', type: 'devicon' };
            if (lower.includes('nltk') || lower.includes('seaborn')) return { class: 'devicon-python-plain', type: 'devicon' };

            // Tools & Platforms
            if (lower === 'docker') return { class: 'devicon-docker-plain', type: 'devicon' };
            if (lower === 'git') return { class: 'devicon-git-plain', type: 'devicon' };
            if (lower === 'github') return { class: 'devicon-github-original', type: 'devicon' };
            if (lower === 'mysql') return { class: 'devicon-mysql-plain', type: 'devicon' };
            if (lower === 'postgresql' || lower === 'postgres') return { class: 'devicon-postgresql-plain', type: 'devicon' };
            if (lower === 'mongodb' || lower === 'mongo') return { class: 'devicon-mongodb-plain', type: 'devicon' };
            if (lower === 'jupyter notebook' || lower === 'jupyter') return { class: 'devicon-jupyter-plain', type: 'devicon' };
            if (lower === 'linux') return { class: 'devicon-linux-plain', type: 'devicon' };
            if (lower === 'vscode' || lower === 'visual studio code') return { class: 'devicon-vscode-plain', type: 'devicon' };

            // Algorithms & Concepts (no specific icon)
            if (lower.includes('algorithm') || lower.includes('pruning') || lower.includes('minimax')) return null;
            if (lower.includes('resnet') || lower.includes('xgboost') || lower.includes('alpha-beta')) return null;

            return null;
          };

          const iconInfo = getIconInfo(tech);

          return (
            <span key={tech} className="flex items-center gap-1.5 text-xs text-cyber-text/80 bg-cyber-dark px-2 py-1 rounded border border-cyber-dim/50 hover:border-cyber-primary active:border-cyber-primary transition-all hover:scale-105 active:scale-95 cursor-default hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] hover:text-cyber-primary">
              {iconInfo ? (
                <i className={`${iconInfo.type === 'si' ? 'si' : ''} ${iconInfo.class} text-cyber-primary`} style={{ fontSize: '14px' }}></i>
              ) : (
                <Terminal className="w-3 h-3" />
              )}
              {tech}
            </span>
          );
        })}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-cyber-dim">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-cyber-text hover:text-cyber-primary active:text-cyber-primary transition-colors"
        >
          <Github className="w-4 h-4" />
          <span className="font-mono">SOURCE</span>
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-cyber-text hover:text-cyber-primary active:text-cyber-primary transition-colors"
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