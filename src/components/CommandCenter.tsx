'use client';

import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function CommandCenter() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Adityavardhan Jain
        </h1>
        
        {/* Title */}
        <p className="text-lg sm:text-xl text-[#a0a0a0] mb-6">
          AI/ML Engineer · Data Analyst · Research Enthusiast
        </p>
        
        {/* Description */}
        <p className="text-[#666666] max-w-lg mx-auto mb-10 leading-relaxed">
          Building intelligent systems at the intersection of artificial intelligence, 
          data, human cognition, and real-world impact.
        </p>
        
        {/* Research Areas */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {siteConfig.researchDomains.map((domain) => (
            <span
              key={domain}
              className="px-3 py-1.5 text-sm text-[#a0a0a0] border border-[rgba(255,255,255,0.08)] rounded"
            >
              {domain}
            </span>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-medium hover:bg-[#2563eb] transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-[rgba(255,255,255,0.15)] text-[#a0a0a0] rounded-lg font-medium hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-colors"
          >
            Get in Touch
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-3">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[#666666] hover:text-white border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(255,255,255,0.15)] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[#666666] hover:text-white border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(255,255,255,0.15)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="p-3 text-[#666666] hover:text-white border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(255,255,255,0.15)] transition-colors"
            aria-label="Email"
          >
            <MailIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[#666666] hover:text-white border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(255,255,255,0.15)] transition-colors"
            aria-label="Resume"
          >
            <DownloadIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
