import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '@/constants';
import { useTheme } from '@/context/ThemeContext';

const Contact = () => {
  const { themeConfig } = useTheme();
  return (
    <section id="contact" className="py-8 px-6 bg-cyber-black border-t border-cyber-dim relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl font-bold mb-4 glitch-text text-[var(--color-cyber-text)]">{themeConfig.sectionTitles.contact}</h2>
        <p className="text-[var(--color-cyber-muted)] mb-6 max-w-xl mx-auto text-sm">
          Open for collaboration on AI infrastructure and high-performance web applications.
        </p>

        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-block px-6 py-2 border border-cyber-dim rounded hover:border-cyber-primary hover:bg-cyber-primary/10 text-cyber-primary font-mono text-sm transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:scale-105 active:border-cyber-primary active:bg-cyber-primary/10 active:shadow-[0_0_20px_rgba(0,240,255,0.6)] active:scale-105"
          >
            ACCESS_BLOG_ARCHIVE
          </Link>
        </div>

        <div className="flex justify-center gap-6">
          <a href={PROFILE.social.github} className="p-3 rounded-full bg-cyber-panel border border-cyber-dim hover:border-cyber-primary hover:text-cyber-primary active:border-cyber-primary active:text-cyber-primary transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href={PROFILE.social.linkedin} className="p-3 rounded-full bg-cyber-panel border border-cyber-dim hover:border-cyber-primary hover:text-cyber-primary active:border-cyber-primary active:text-cyber-primary transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:nafizhc@gmail.com`} className="p-3 rounded-full bg-cyber-panel border border-cyber-dim hover:border-cyber-primary hover:text-cyber-primary active:border-cyber-primary active:text-cyber-primary transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-8 font-mono text-[10px] text-cyber-dim">
          <p>SYSTEM ID: Foytrix_Core_V2.4.0</p>
          <p>© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
