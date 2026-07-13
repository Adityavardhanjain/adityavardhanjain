'use client';

import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { siteConfig, safeString } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.04)]">
      <div className="container-content">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <p className="text-sm text-[#5a6a7a] text-center sm:text-left">
            © {new Date().getFullYear()} {safeString(siteConfig.name, 'Adityavardhan Jain')}
          </p>
          
          {/* Center - Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm" aria-label="Footer navigation">
            <a href="#home" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Home</a>
            <a href="#about" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Profile</a>
            <a href="#projects" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Projects</a>
            <a href="#research" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Research</a>
            <a href="#contact" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Contact</a>
          </nav>
          
          {/* Right - Social Links */}
          <div className="flex gap-3">
            <a 
              href={safeString(siteConfig.github, '#')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 text-[#5a6a7a] hover:text-[#3b82f6] bg-[#0a1120] border border-[rgba(255,255,255,0.04)] rounded-lg hover:border-[#3b82f6]/30 transition-all touch-target"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href={safeString(siteConfig.linkedin, '#')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 text-[#5a6a7a] hover:text-[#3b82f6] bg-[#0a1120] border border-[rgba(255,255,255,0.04)] rounded-lg hover:border-[#3b82f6]/30 transition-all touch-target"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
