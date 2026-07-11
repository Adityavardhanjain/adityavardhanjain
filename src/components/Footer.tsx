'use client';

import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.06)]">
      <div className="container-content">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <p className="text-sm text-[#64748b]">
            © {new Date().getFullYear()} {siteConfig.name}. Built with purpose.
          </p>
          
          {/* Center - Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-[#64748b] hover:text-[#94a3b8] transition-colors">Home</a>
            <a href="#about" className="text-[#64748b] hover:text-[#94a3b8] transition-colors">About</a>
            <a href="#projects" className="text-[#64748b] hover:text-[#94a3b8] transition-colors">Projects</a>
            <a href="#contact" className="text-[#64748b] hover:text-[#94a3b8] transition-colors">Contact</a>
          </div>
          
          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a 
              href={siteConfig.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-[#64748b] hover:text-[#3b82f6] bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-lg hover:border-[#3b82f6]/30 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href={siteConfig.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-[#64748b] hover:text-[#3b82f6] bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-lg hover:border-[#3b82f6]/30 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
