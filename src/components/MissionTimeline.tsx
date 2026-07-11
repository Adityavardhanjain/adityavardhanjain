'use client';

import { experiences, achievements } from '@/lib/data';

export default function MissionTimeline() {
  return (
    <section id="experience" className="py-[var(--section-spacing)] relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(59,130,246,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">05 / Flight Log</span>
          <div className="section-label-line" />
        </div>
        
        <div className="mb-16">
          <h2 className="text-section-heading font-bold text-[#f0f4f8]">Work History</h2>
        </div>
        
        {/* Editorial Timeline - Fixed Layout */}
        <div className="relative">
          {/* Timeline track - subtle orbital path line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(59,130,246,0.3)] via-[rgba(59,130,246,0.1)] to-transparent hidden lg:block" />
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden lg:flex items-center gap-6 mb-6">
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${index === 0 ? 'bg-[#3b82f6] shadow-lg shadow-[#3b82f6]/30' : 'bg-[#1a2a40]'}`} />
                  <p className="font-mono text-sm font-medium text-[#3b82f6] tracking-wide">{exp.period}</p>
                </div>
                
                {/* Content - Full width editorial layout */}
                <div className="lg:pl-12">
                  {/* Organization & Role */}
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-[#f0f4f8] tracking-tight mb-2">
                      {exp.organization}
                    </h3>
                    <p className="text-xl text-[#c8d4e3] mb-1">{exp.title}</p>
                    <p className="text-sm text-[#5a6a7a]">{exp.location}</p>
                  </div>
                  
                  {/* Mobile date - visible only on mobile */}
                  <p className="lg:hidden font-mono text-xs text-[#3b82f6] mb-4">{exp.period}</p>
                  
                  {/* Description */}
                  <p className="text-[#8899aa] text-body leading-relaxed max-w-3xl mb-8">
                    {exp.description}
                  </p>
                  
                  {/* Impact Highlights - Large readable format */}
                  {exp.highlights.length > 0 && (
                    <div className="space-y-4">
                      {exp.highlights.map((highlight, i) => (
                        <div 
                          key={i}
                          className="flex items-start gap-4 p-5 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-lg"
                        >
                          <div className="w-2 h-2 mt-2 rounded-full bg-[#3b82f6] flex-shrink-0" />
                          <p className="text-[#8899aa] leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements & Recognition - Separate section */}
        <div className="mt-24 pt-16 border-t border-[rgba(255,255,255,0.04)]">
          <div className="section-label mb-12">
            <span className="section-label-number">06 / Milestones</span>
            <div className="section-label-line" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.slice(0, 6).map((achievement) => (
              <div 
                key={achievement.id} 
                className="p-6 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all"
              >
                <p className="font-mono text-xs text-[#3b82f6] tracking-widest mb-3">{achievement.year}</p>
                <h4 className="text-base font-semibold text-[#f0f4f8] mb-1 leading-snug">
                  {achievement.title}
                </h4>
                <p className="text-sm text-[#5a6a7a]">
                  {achievement.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
