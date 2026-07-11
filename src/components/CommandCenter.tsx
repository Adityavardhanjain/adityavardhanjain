'use client';

import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function CommandCenter() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(59,130,246,0.08)] via-transparent to-transparent pointer-events-none" />
      
      <div className="container-content w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-[#94a3b8] tracking-wide">Available for opportunities</span>
            </div>
            
            {/* Name */}
            <h1 className="text-hero-name font-bold text-[#f0f4f8]">
              Adityavardhan<br />Jain
            </h1>
            
            {/* Professional Identity */}
            <p className="text-hero-role text-[#cbd5e1] font-light">
              AI/ML Engineer · Data Analyst · Research Enthusiast
            </p>
            
            {/* Value Proposition */}
            <p className="text-hero-description text-[#94a3b8]">
              Building intelligent systems at the intersection of artificial intelligence, 
              data, human cognition, and real-world impact.
            </p>
            
            {/* Capability Labels - Reduced to 4 */}
            <div className="flex flex-wrap gap-3">
              {['AI/ML', 'Data Analytics', 'Intelligent Systems', 'Research'].map((capability) => (
                <span
                  key={capability}
                  className="px-4 py-2 text-sm font-medium text-[#94a3b8] bg-[#0c1220] border border-[rgba(255,255,255,0.08)] rounded"
                >
                  {capability}
                </span>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#projects" 
                className="group px-8 py-4 bg-[#3b82f6] text-[#030810] rounded-lg font-semibold hover:bg-[#60a5fd] transition-all duration-300"
              >
                Explore My Work
              </a>
              <div className="flex items-center gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-4 text-[#94a3b8] hover:text-[#f0f4f8] font-medium transition-colors"
                >
                  Contact Me
                </a>
                <span className="text-[#475569]">·</span>
                <a 
                  href={siteConfig.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-4 text-[#94a3b8] hover:text-[#f0f4f8] font-medium transition-colors"
                >
                  View Résumé
                  <DownloadIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Professional Credibility Line */}
            <p className="text-sm text-[#64748b] pt-4 border-t border-[rgba(255,255,255,0.06)]">
              Google · Tatvic Analytics · Codenscious Technologies
            </p>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Orbital Visual */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[rgba(59,130,246,0.2)] animate-spin" style={{ animationDuration: '60s' }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#3b82f6] shadow-lg shadow-[#3b82f6]/30" />
              </div>
              
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-[rgba(59,130,246,0.15)] animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#60a5fd] shadow-lg shadow-[#60a5fd]/20" />
              </div>
              
              {/* Inner ring */}
              <div className="absolute inset-16 rounded-full border border-[rgba(59,130,246,0.1)] animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#93c5fd]" />
              </div>
              
              {/* Center */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#0c1220] to-[#111827] flex items-center justify-center border border-[rgba(255,255,255,0.08)]">
                <div className="text-6xl font-bold text-[#f0f4f8]">AJ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
