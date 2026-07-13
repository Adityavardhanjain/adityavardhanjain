'use client';

import { DownloadIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function CommandCenter() {
  return (
    <section id="home" className="min-h-[100svh] flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.15)] to-transparent md:via-[rgba(3,8,16,0.25)]" />
      
      {/* Background radial glow - subtle atmospheric effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[800px] md:h-[800px] bg-gradient-radial from-[rgba(59,130,246,0.04)] md:from-[rgba(59,130,246,0.06)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start lg:items-center py-8 lg:py-16">
          {/* Left Column - Main Content */}
          <div className="space-y-6 lg:space-y-8 max-w-xl">
            {/* Section annotation */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-[11px] text-[#3b82f6] tracking-widest uppercase">00 / ORBIT</span>
              <span className="hidden sm:inline font-mono text-[11px] text-[#5a6a7a] tracking-widest uppercase">DATA · INTELLIGENCE · RESEARCH</span>
            </div>
            
            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-[#8899aa] tracking-wide">Active Mission</span>
            </div>
            
            {/* Name */}
            <h1 className="text-hero-name font-bold text-[#f0f4f8] text-wrap">
              Adityavardhan<br />Jain
            </h1>
            
            {/* Professional Identity */}
            <p className="text-hero-role text-[#c8d4e3] font-light tracking-wide">
              Data Analyst · AIML Engineer · Researcher
            </p>
            
            {/* Value Proposition */}
            <div className="space-y-4 text-[#8899aa]">
              <p className="text-hero-description">
                I&apos;m someone who is deeply driven by curiosity: about systems, data, intelligence, and how things work at scale. My journey so far has been shaped by a strong foundation in ML and data analytics, with growing hands-on experience in machine learning, cloud technologies, and large-scale data systems.
              </p>
              <p className="text-hero-description hidden sm:block">
                Professionally, I&apos;ve spent time building and working with data-intensive applications, designing pipelines, handling complex datasets, and extracting insights that matter. Beyond execution, I&apos;m particularly interested in understanding why systems are built the way they are, whether it&apos;s distributed architectures, ML models, or scalable infrastructure.
              </p>
              <p className="text-hero-description hidden md:block">
                Currently, I&apos;m focused on evolving into my role as an apprentice at Google where I can contribute to building intelligent, scalable systems, while continuing to deepen my understanding of machine learning, distributed computing, and research-driven problem solving.
              </p>
            </div>
            
            {/* Capability Labels */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Advanced Analytics', 'AI Engineering', 'Computer Vision', 'ML Research', 'Generative AI', 'Agentic AI'].map((capability) => (
                <span
                  key={capability}
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-[#8899aa] bg-[#0a1120] border border-[rgba(255,255,255,0.06)] rounded-lg"
                >
                  {capability}
                </span>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 pt-2">
              <a 
                href="#projects" 
                className="btn btn-primary"
              >
                Explore My Work
              </a>
              <a 
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8899aa] hover:text-[#f0f4f8] font-medium transition-colors duration-300"
              >
                View Résumé
                <DownloadIcon className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="text-[#8899aa] hover:text-[#f0f4f8] font-medium transition-colors duration-300"
              >
                Start a Conversation
              </a>
            </div>
            
            {/* Professional Credibility */}
            <p className="text-xs sm:text-sm text-[#5a6a7a] pt-6 border-t border-[rgba(255,255,255,0.04)]">
              Google · Tatvic Analytics · ACM-published Research · IIST Indore
            </p>
          </div>
          
          {/* Right Column - Enhanced Orbital Visual */}
          <div className="hidden lg:flex items-center justify-center relative pt-8 lg:pt-0">
            <div 
              className="relative w-full max-w-sm xl:max-w-md aspect-square"
              style={{ maxWidth: 'min(100%, 400px)' }}
            >
              {/* Outermost atmospheric glow */}
              <div className="absolute inset-[-20%] rounded-full bg-gradient-radial from-[rgba(59,130,246,0.08)] via-transparent to-transparent blur-xl" />
              
              {/* Outer orbital path - slow rotation */}
              <div className="absolute inset-0 rounded-full border border-[rgba(59,130,246,0.12)] animate-orbital" style={{ animationDuration: '120s' }}>
                {/* Satellite node 1 */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#6366f1] shadow-lg shadow-[#3b82f6]/30" />
                </div>
              </div>
              
              {/* Second orbital path - medium rotation, reverse */}
              <div className="absolute inset-[12%] rounded-full border border-[rgba(99,102,241,0.1)] animate-orbital-reverse" style={{ animationDuration: '80s' }}>
                {/* Satellite node 2 */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2">
                  <div className="w-2 h-2 rounded-full bg-[#6366f1] shadow-lg shadow-[#6366f1]/20" />
                </div>
              </div>
              
              {/* Third orbital path - faster rotation */}
              <div className="absolute inset-[24%] rounded-full border border-[rgba(59,130,246,0.08)] animate-orbital" style={{ animationDuration: '50s' }}>
                {/* Satellite node 3 */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#60a5fd]" />
                </div>
              </div>
              
              {/* Inner orbital path */}
              <div className="absolute inset-[36%] rounded-full border border-[rgba(59,130,246,0.06)] animate-orbital-reverse" style={{ animationDuration: '35s' }}>
                {/* Satellite node 4 */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1">
                  <div className="w-1 h-1 rounded-full bg-[#93c5fd]" />
                </div>
              </div>
              
              {/* Center sphere - AJ identity */}
              <div className="absolute inset-[48%] rounded-full bg-gradient-to-br from-[#0a1120] via-[#0d1828] to-[#060c18] border border-[rgba(255,255,255,0.08)] shadow-2xl shadow-[rgba(59,130,246,0.1)]">
                {/* Rim light effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-[rgba(59,130,246,0.1)] to-transparent" />
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl xl:text-5xl font-bold text-[#f0f4f8] tracking-tight">AJ</span>
                </div>
              </div>
              
              {/* Subtle telemetry labels */}
              <div className="absolute top-8 right-8 font-mono text-[10px] text-[#3b82f6]/40 tracking-widest uppercase hidden xl:block">
                Core<br/>Active
              </div>
              <div className="absolute bottom-8 left-8 font-mono text-[10px] text-[#3b82f6]/30 tracking-widest uppercase hidden xl:block">
                System<br/>Online
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Orbital Visual - appears below content */}
      <div className="lg:hidden flex items-center justify-center pt-8 pb-4">
        <div 
          className="relative"
          style={{ width: 'min(82vw, 280px)' }}
        >
          {/* Outermost atmospheric glow */}
          <div className="absolute inset-[-15%] rounded-full bg-gradient-radial from-[rgba(59,130,246,0.06)] via-transparent to-transparent blur-lg" />
          
          {/* Outer orbital path */}
          <div className="absolute inset-0 rounded-full border border-[rgba(59,130,246,0.1)] animate-orbital" style={{ animationDuration: '120s' }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#6366f1]" />
            </div>
          </div>
          
          {/* Second orbital path */}
          <div className="absolute inset-[14%] rounded-full border border-[rgba(99,102,241,0.08)] animate-orbital-reverse" style={{ animationDuration: '80s' }}>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
            </div>
          </div>
          
          {/* Third orbital path */}
          <div className="absolute inset-[28%] rounded-full border border-[rgba(59,130,246,0.06)] animate-orbital" style={{ animationDuration: '50s' }}>
            <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1">
              <div className="w-1 h-1 rounded-full bg-[#60a5fd]" />
            </div>
          </div>
          
          {/* Center sphere */}
          <div className="absolute inset-[42%] rounded-full bg-gradient-to-br from-[#0a1120] via-[#0d1828] to-[#060c18] border border-[rgba(255,255,255,0.06)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-[rgba(59,130,246,0.08)] to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-[#f0f4f8] tracking-tight">AJ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
