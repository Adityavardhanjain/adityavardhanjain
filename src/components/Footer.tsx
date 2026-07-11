'use client';

import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#64748b]">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex gap-4">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#60a5fa] transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#60a5fa] transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
