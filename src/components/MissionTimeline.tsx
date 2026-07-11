'use client';

import { experiences, achievements } from '@/lib/data';

export default function MissionTimeline() {
  return (
    <section id="experience" className="py-[var(--section-spacing)] bg-[#070b14]">
      <div className="container-content">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-[#3b82f6] tracking-widest uppercase">05</span>
          <div className="h-px bg-[rgba(255,255,255,0.06)] flex-1 max-w-xs"></div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-section-heading font-bold text-[#f0f4f8]">Work History</h2>
        </div>
        
        {/* Editorial Timeline */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16">
              {/* Left - Date */}
              <div className="lg:text-right">
                <p className="text-sm font-medium text-[#3b82f6] tracking-wide whitespace-nowrap">{exp.period}</p>
              </div>
              
              {/* Center - Timeline Indicator */}
              <div className="hidden lg:flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-[#3b82f6]' : 'bg-[#1e3a5f]'}`} />
                {index < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-[rgba(255,255,255,0.06)] mt-2" />
                )}
              </div>
              
              {/* Right - Content */}
              <div className="space-y-4">
                {/* Organization */}
                <div className="space-y-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#f0f4f8]">{exp.organization}</h3>
                  <p className="text-lg text-[#cbd5e1]">{exp.title}</p>
                  <p className="text-sm text-[#64748b]">{exp.location}</p>
                </div>
                
                {/* Description */}
                <p className="text-[#94a3b8] text-body leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
                
                {/* Highlights - Impact Metrics */}
                {exp.highlights.length > 0 && (
                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    {exp.highlights.map((highlight, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-3 p-4 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-lg"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-[#3b82f6] flex-shrink-0" />
                        <p className="text-[#94a3b8] text-sm leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Achievements & Recognition */}
        <div className="mt-24 pt-16 border-t border-[rgba(255,255,255,0.06)]">
          <h3 className="text-section-heading font-bold text-[#f0f4f8] mb-8">Achievements & Recognition</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.slice(0, 6).map((achievement) => (
              <div 
                key={achievement.id} 
                className="p-6 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all"
              >
                <p className="text-xs font-medium text-[#3b82f6] tracking-widest mb-3">{achievement.year}</p>
                <h4 className="text-base font-semibold text-[#f0f4f8] mb-1 leading-snug">
                  {achievement.title}
                </h4>
                <p className="text-sm text-[#64748b]">
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
