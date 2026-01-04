import { Project } from '@/types/schemas';
import { Github, ExternalLink, GitFork, Star, Terminal, BookOpen, Layers, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn utility exists, usually does in current stacks. If not I'll use template literals.

// Fallback for cn if not present (I'll implement basic string logic inside for safety)
const classNames = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isHero = project.variant === 'hero';
  const isShowcase = project.variant === 'showcase';
  const isWriting = project.variant === 'writing';

  // Base card styles
  const baseCardStyles = "relative p-6 rounded-lg transition-all group overflow-hidden border";
  
  // Variant specific styles
  const variantStyles = {
    hero: `bg-cyber-panel/80 border-cyber-primary/50 hover:border-cyber-primary hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.2)]`,
    showcase: `bg-white/5 border-cyber-dim hover:bg-white/10 hover:border-cyber-secondary/50 backdrop-blur-sm`,
    writing: `bg-cyber-black border-cyber-dim hover:border-cyber-text/50`,
    standard: `bg-cyber-panel border-cyber-dim hover:border-cyber-primary/50`
  };

  const currentStyle = variantStyles[project.variant || 'standard'];

  return (
    <div
      className={classNames(baseCardStyles, currentStyle, "card-shine", isHero ? "md:min-h-[300px]" : "min-h-[250px]")}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Decorative Elements */}
      {isHero && (
         <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 to-transparent pointer-events-none" />
      )}
      <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors rounded-l-lg 
        ${isHero ? 'bg-cyber-primary' : 'bg-cyber-dim group-hover:bg-cyber-primary'}`} 
      />

      {/* Header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex items-center gap-2">
            {isHero && <Star className="w-4 h-4 text-cyber-primary fill-cyber-primary animate-pulse" />}
            {isShowcase && <Monitor className="w-4 h-4 text-cyber-secondary" />}
            {isWriting && <BookOpen className="w-4 h-4 text-cyber-muted" />}
            
            <span className={classNames(
                "text-xs font-mono px-2 py-1 rounded border",
                isHero ? "bg-cyber-primary/10 border-cyber-primary text-cyber-primary" : "bg-cyber-dark border-cyber-dim text-cyber-muted"
            )}>
            {project.category}
            </span>
        </div>
        
        <div className="flex items-center gap-3 text-cyber-muted text-xs">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" /> {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-3 h-3" /> {project.forks}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className={classNames(
            "font-bold text-[var(--color-cyber-text)] mb-3 transition-colors font-sans group-hover:text-[var(--color-cyber-primary)]",
            isHero ? "text-3xl" : "text-xl"
        )}>
            {project.title}
        </h3>

        <p className={classNames(
            "text-cyber-muted mb-6 leading-relaxed",
            isHero ? "text-lg max-w-2xl" : "text-sm min-h-[60px]"
        )}>
            {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
            {project.tech?.slice(0, isHero ? 8 : 4).map((tech) => (
               <span
                key={tech}
                className={classNames(
                    "text-xs px-2 py-1 rounded border transition-all cursor-default",
                    isHero 
                        ? "bg-cyber-primary/10 border-cyber-primary/30 text-cyber-primary" 
                        : "bg-cyber-dark border-cyber-dim text-cyber-muted hover:text-cyber-primary hover:border-cyber-primary/50"
                )}
               >
                 {tech}
               </span> 
            ))}
            {project.tech && project.tech.length > (isHero ? 8 : 4) && (
                <span className="text-xs px-2 py-1 text-cyber-muted">+{project.tech.length - (isHero ? 8 : 4)}</span>
            )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-auto">
            <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(
                "flex items-center gap-2 text-sm font-mono transition-colors",
                isHero 
                    ? "bg-cyber-primary/10 px-4 py-2 rounded text-cyber-primary hover:bg-cyber-primary hover:text-black border border-cyber-primary" 
                    : "text-cyber-text hover:text-cyber-primary"
            )}
            >
            <Github className="w-4 h-4" />
            <span>{isWriting ? 'READ DOCS' : 'SOURCE'}</span>
            </a>
            
            {project.demoUrl && (
            <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cyber-text hover:text-cyber-primary active:text-cyber-primary transition-colors font-mono"
            >
                <ExternalLink className="w-4 h-4" />
                <span>DEPLOY</span>
            </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
