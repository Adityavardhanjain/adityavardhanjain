'use client';

import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.04)]">
      <div className="container-content">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <p className="text-sm text-[#5a6a7a]">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          
          {/* Center - Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Home</a>
            <a href="#about" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Profile</a>
            <a href="#projects" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Missions</a>
            <a href="#research" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Research</a>
            <a href="#contact" className="text-[#5a6a7a] hover:text-[#8899aa] transition-colors">Contact</a>
          </div>
          
          {/* Right - Social Links */}
          <div className="flex gap-3">
            <a 
              href={siteConfig.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-[#5a6a7a] hover:text-[#3b82f6] bg-[#0a1120] border border-[rgba(255,255,255,0.04)] rounded-lg hover:border-[#3b82f6]/30 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href={siteConfig.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-[#5a6a7a] hover:text-[#3b82f6] bg-[#0a1120] border border-[rgba(255,255,255,0.04)] rounded-lg hover:border-[#3b82f6]/30 transition-all"
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
