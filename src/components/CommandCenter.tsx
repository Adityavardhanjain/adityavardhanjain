'use client';

import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function CommandCenter() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(96,165,250,0.03)] via-transparent to-transparent" />
      
      <div className="w-full max-w-5xl mx-auto text-center relative">
        {/* Status indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm text-[#94a3b8]">Available for opportunities</span>
        </div>
        
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-[#f0f4f8]">
          Adityavardhan Jain
        </h1>
        
        {/* Title */}
        <p className="text-lg sm:text-xl text-[#94a3b8] mb-6">
          AI/ML Engineer · Data Analyst · Research Enthusiast
        </p>
        
        {/* Description */}
        <p className="text-[#94a3b8] max-w-xl mx-auto mb-10 leading-relaxed">
          Building intelligent systems at the intersection of artificial intelligence, 
          data, human cognition, and real-world impact.
        </p>
        
        {/* Research Areas */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {siteConfig.researchDomains.map((domain) => (
            <span
              key={domain}
              className="px-4 py-2 text-sm text-[#94a3b8] bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.2)] rounded-full"
            >
              {domain}
            </span>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-[#60a5fa] text-[#07090f] rounded-lg font-semibold hover:bg-[#93c5fd] transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-[rgba(96,165,250,0.3)] text-[#94a3b8] rounded-lg font-semibold hover:text-white hover:border-[#60a5fa] transition-colors"
          >
            Get in Touch
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[#94a3b8] hover:text-[#60a5fa] bg-[rgba(96,165,250,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(96,165,250,0.3)] transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[#94a3b8] hover:text-[#60a5fa] bg-[rgba(96,165,250,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(96,165,250,0.3)] transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="p-3 text-[#94a3b8] hover:text-[#60a5fa] bg-[rgba(96,165,250,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(96,165,250,0.3)] transition-all"
            aria-label="Email"
          >
            <MailIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[#94a3b8] hover:text-[#60a5fa] bg-[rgba(96,165,250,0.05)] border border-[rgba(255,255,255,0.08)] rounded-lg hover:border-[rgba(96,165,250,0.3)] transition-all"
            aria-label="Resume"
          >
            <DownloadIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
