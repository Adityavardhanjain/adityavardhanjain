'use client';

import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Quote */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-100 mb-1">
              <span className="text-gray-100">AJ</span>
              <span className="text-blue-400">.</span>
            </p>
            <p className="text-sm text-gray-500">
              Building intelligent systems.
            </p>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {['About', 'Projects', 'Research', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-gray-200 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-gray-200 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-gray-200 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2 text-gray-500 hover:text-gray-200 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
