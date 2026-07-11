'use client';

import { DownloadIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function CommandCenter() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.2)] to-transparent" />
      
      {/* Background radial glow - subtle atmospheric effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[rgba(59,130,246,0.06)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center py-24">
          {/* Left Column - Main Content */}
          <div className="space-y-8 max-w-xl">
            {/* Section annotation */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#3b82f6] tracking-widest uppercase">00 / ORBIT</span>
              <span className="font-mono text-xs text-[#5a6a7a] tracking-widest uppercase">DATA · INTELLIGENCE · RESEARCH</span>
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
            <h1 className="text-hero-name font-bold text-[#f0f4f8]">
              Adityavardhan<br />Jain
            </h1>
            
            {/* Professional Identity */}
            <p className="text-hero-role text-[#c8d4e3] font-light tracking-wide">
              Data Analyst · AI Engineer · Researcher
            </p>
            
            {/* Value Proposition */}
            <p className="text-hero-description text-[#8899aa]">
              I build data and intelligent systems that transform complex information into reliable decisions—from enterprise analytics and agentic automation to computer vision and brain-computer interfaces.
            </p>
            
            {/* Capability Labels */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['Advanced Analytics', 'Machine Learning', 'Computer Vision', 'BCI Research'].map((capability) => (
                <span
                  key={capability}
                  className="px-4 py-2 text-sm font-medium text-[#8899aa] bg-[#0a1120] border border-[rgba(255,255,255,0.06)] rounded"
                >
                  {capability}
                </span>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a 
                href="#projects" 
                className="group px-8 py-4 bg-[#3b82f6] text-[#030810] rounded font-semibold hover:bg-[#60a5fd] transition-all duration-300"
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
            <p className="text-sm text-[#5a6a7a] pt-6 border-t border-[rgba(255,255,255,0.04)]">
              Google · Tatvic Analytics · ACM-published Research
            </p>
          </div>
          
          {/* Right Column - Enhanced Orbital Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square">
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
                  <span className="text-5xl font-bold text-[#f0f4f8] tracking-tight">AJ</span>
                </div>
              </div>
              
              {/* Subtle telemetry labels */}
              <div className="absolute top-8 right-8 font-mono text-[10px] text-[#3b82f6]/40 tracking-widest uppercase">
                Core<br/>Active
              </div>
              <div className="absolute bottom-8 left-8 font-mono text-[10px] text-[#3b82f6]/30 tracking-widest uppercase">
                System<br/>Online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
