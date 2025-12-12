import React from "react";
import { ExternalLink, Globe } from "lucide-react";

interface LinkPreviewCardProps {
  url: string;
  title: string;
  description?: string;
  image?: string;
  siteName?: string;
  className?: string; // Allow custom classes for flexibility
}

const LinkPreviewCard: React.FC<LinkPreviewCardProps> = ({
  url,
  title,
  description,
  image,
  siteName,
  className = "",
}) => {
  // Extract domain for display if siteName is not provided
  const domain = siteName || new URL(url).hostname.replace("www.", "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col md:flex-row w-full max-w-2xl 
        bg-cyber-panel/50 border border-cyber-primary/20 rounded-lg overflow-hidden
        hover:border-cyber-primary/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]
        transition-all duration-300 ease-out ${className}`}
    >
      {/* Image Section */}
      {image && (
        <div className="w-full md:w-48 h-48 md:h-auto shrink-0 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay for small screens to ensure text readability if needed (optional design choice, kept clean for now) */}
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col p-4 md:p-5 flex-grow justify-between gap-3">
        <div>
          <h3 className="text-lg font-sans font-bold text-cyber-text truncate pr-2 group-hover:text-cyber-primary transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-cyber-muted mt-2 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Footer: Domain and Icon */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-primary/80">
            <Globe size={14} />
            <span>{domain}</span>
          </div>
          <ExternalLink
            size={16}
            className="text-cyber-muted group-hover:text-cyber-primary transition-colors transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </a>
  );
};

export default LinkPreviewCard;
