'use client';

import { siteConfig } from '@/lib/data';

export default function CommandCenter() {
  return (
    <section id="home" className="min-h-[100svh] flex items-center relative overflow-hidden">
      {/* Subtle atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-gradient-radial from-[rgba(59,130,246,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content w-full relative z-10 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left Column - 60% width */}
          <div className="lg:col-span-3 space-y-8">
            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-[#8899aa] tracking-wide">AVAILABLE FOR AI, DATA & RESEARCH COLLABORATIONS</span>
            </div>
            
            {/* Name - Per spec: spans with display:block, white-space:nowrap for first name */}
            <h1 className="text-hero-name font-bold text-[#f0f4f8] leading-none">
              <span className="block text-nowrap">Adityavardhan</span>
              <span className="block">Jain</span>
            </h1>
            
            {/* Professional Identity */}
            <p className="text-hero-role text-[#c8d4e3] tracking-wide">
              Data Analyst · AI/ML Engineer · Researcher
            </p>
            
            {/* Biography - Single concise paragraph per spec */}
            <p className="text-body text-[#8899aa] max-w-xl leading-relaxed">
              I build intelligent systems at the intersection of data, machine learning, and research—from large-scale analytics and agentic AI to computer vision and brain–computer interfaces.
            </p>
            
            {/* Three compact highlights per spec */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                <span className="text-sm text-[#8899aa]">Google — Data Analytics Apprentice</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                <span className="text-sm text-[#8899aa]">3+ years building AI and data systems</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
                <span className="text-sm text-[#8899aa]">Research in intelligent systems and BCI</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
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
                className="btn btn-secondary"
              >
                View Résumé
              </a>
              <a 
                href="#contact" 
                className="text-[#8899aa] hover:text-[#f0f4f8] font-medium transition-colors duration-300 text-nowrap"
              >
                Start a Conversation
              </a>
            </div>
          </div>
          
          {/* Right Column - 40% width - Orbital Visual */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center relative">
            <div 
              className="relative w-full"
              style={{ maxWidth: 'min(100%, 360px)' }}
            >
              {/* Outermost atmospheric glow - lower contrast per spec */}
              <div className="absolute inset-[-25%] rounded-full bg-gradient-radial from-[rgba(59,130,246,0.05)] via-transparent to-transparent blur-xl" />
              
              {/* Outer orbital path - slow rotation */}
              <div className="absolute inset-0 rounded-full border border-[rgba(59,130,246,0.08)] animate-orbital" style={{ animationDuration: '120s' }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#6366f1] shadow-lg shadow-[#3b82f6]/20" />
                </div>
              </div>
              
              {/* Second orbital path - reverse */}
              <div className="absolute inset-[14%] rounded-full border border-[rgba(99,102,241,0.06)] animate-orbital-reverse" style={{ animationDuration: '80s' }}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2">
                  <div className="w-2 h-2 rounded-full bg-[#6366f1] shadow-lg shadow-[#6366f1]/10" />
                </div>
              </div>
              
              {/* Third orbital path */}
              <div className="absolute inset-[28%] rounded-full border border-[rgba(59,130,246,0.05)] animate-orbital" style={{ animationDuration: '50s' }}>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#60a5fd]" />
                </div>
              </div>
              
              {/* Fourth orbital path */}
              <div className="absolute inset-[42%] rounded-full border border-[rgba(59,130,246,0.04)] animate-orbital-reverse" style={{ animationDuration: '35s' }}>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1">
                  <div className="w-1 h-1 rounded-full bg-[#93c5fd]" />
                </div>
              </div>
              
              {/* Center sphere - larger and cleaner per spec */}
              <div className="absolute inset-[52%] rounded-full bg-gradient-to-br from-[#0a1120] via-[#0d1828] to-[#060c18] border border-[rgba(255,255,255,0.06)] shadow-2xl shadow-[rgba(59,130,246,0.08)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-[rgba(59,130,246,0.06)] to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-[#f0f4f8] tracking-tight">AJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Orbital - smaller, below content */}
      <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div 
          className="relative"
          style={{ width: 'min(60vw, 200px)' }}
        >
          <div className="absolute inset-0 rounded-full border border-[rgba(59,130,246,0.06)] animate-orbital" style={{ animationDuration: '120s' }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#6366f1]" />
            </div>
          </div>
          <div className="absolute inset-[20%] rounded-full border border-[rgba(99,102,241,0.05)] animate-orbital-reverse" style={{ animationDuration: '80s' }}>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
            </div>
          </div>
          <div className="absolute inset-[40%] rounded-full bg-gradient-to-br from-[#0a1120] via-[#0d1828] to-[#060c18] border border-[rgba(255,255,255,0.05)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-[#f0f4f8] tracking-tight">AJ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
