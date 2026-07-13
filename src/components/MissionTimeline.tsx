'use client';

import { experiences, achievements, safeString, safeArray } from '@/lib/data';

// Experience Entry Component
interface ExperienceEntryProps {
  experience: Record<string, unknown>;
  isFirst: boolean;
}

function ExperienceEntry({ experience, isFirst }: ExperienceEntryProps) {
  const title = safeString(experience.title, 'Unknown Position');
  const organization = safeString(experience.organization, 'Unknown Organization');
  const location = safeString(experience.location, 'Location not specified');
  const period = safeString(experience.period, '');
  const description = safeString(experience.description);
  const highlights = safeArray(experience.highlights);
  const impactMetrics = safeArray(experience.impactMetrics);
  
  return (
    <div className="relative pl-8 sm:pl-0">
      {/* Timeline dot - desktop */}
      <div className="hidden sm:flex items-center gap-4 mb-6">
        <div className={`w-3 h-3 rounded-full flex-shrink-0 ${isFirst ? 'bg-[#3b82f6] shadow-lg shadow-[#3b82f6]/30' : 'bg-[#1a2a40]'}`} />
        <p className="font-mono text-sm font-medium text-[#3b82f6] tracking-wide">{period}</p>
      </div>
      
      {/* Content */}
      <div className="sm:pl-12">
        {/* Organization & Role */}
        <div className="mb-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f0f4f8] tracking-tight mb-1 text-wrap">{organization}</h3>
          <p className="text-lg sm:text-xl text-[#c8d4e3] mb-1">{title}</p>
          <p className="text-sm text-[#5a6a7a]">{location}</p>
        </div>
        
        {/* Mobile date - visible only on mobile */}
        <p className="sm:hidden font-mono text-xs text-[#3b82f6] mb-4">{period}</p>
        
        {/* Impact Metrics */}
        {impactMetrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-5 sm:py-6 mb-6 sm:mb-8">
            {impactMetrics.map((metric, i) => {
              const m = metric as Record<string, unknown>;
              return (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#f0f4f8] tracking-tight">{safeString(m.value)}</p>
                  <p className="text-xs sm:text-sm text-[#5a6a7a] mt-1 text-wrap">{safeString(m.label)}</p>
                </div>
              );
            })}
          </div>
        )}
        
        {/* Description */}
        <p className="text-[#8899aa] text-body leading-relaxed max-w-3xl mb-6 sm:mb-8 text-wrap">
          {description}
        </p>
        
        {/* Impact Highlights */}
        {highlights.length > 0 && (
          <div className="space-y-3">
            {highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-4 min-w-0">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#3b82f6] flex-shrink-0" />
                <p className="text-[#8899aa] leading-relaxed text-wrap min-w-0">{safeString(highlight)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Achievement Card Component
interface AchievementCardProps {
  achievement: Record<string, unknown>;
}

function AchievementCard({ achievement }: AchievementCardProps) {
  const title = safeString(achievement.title, 'Untitled Achievement');
  const organization = safeString(achievement.organization, 'Unknown Organization');
  const year = safeString(achievement.year, '');
  
  return (
    <div 
      className="p-4 sm:p-6 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all min-w-0"
    >
      <p className="font-mono text-[10px] sm:text-xs text-[#3b82f6] tracking-widest mb-2 sm:mb-3">{year}</p>
      <h4 className="text-sm sm:text-base font-semibold text-[#f0f4f8] mb-1 leading-snug text-wrap">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-[#5a6a7a] text-wrap">
        {organization}
      </p>
    </div>
  );
}

export default function MissionTimeline() {
  return (
    <section id="experience" className="py-[var(--section-spacing)] relative">
      {/* Readability mask behind content */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-[rgba(3,8,16,0.3)] to-transparent" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(59,130,246,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">05 / Flight Log</span>
          <div className="section-label-line" />
        </div>
        
        <div className="mb-12 sm:mb-16">
          <h2 className="text-section-heading font-bold text-[#f0f4f8] text-wrap">Work History</h2>
        </div>
        
        {/* Editorial Timeline */}
        <div className="relative">
          {/* Timeline track - subtle orbital path line - desktop only */}
          <div 
            className="hidden sm:block absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(59,130,246,0.3)] via-[rgba(59,130,246,0.1)] to-transparent" 
          />
          
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {experiences.map((exp, index) => (
              <ExperienceEntry 
                key={exp.id} 
                experience={exp as unknown as Record<string, unknown>} 
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
        
        {/* Achievements & Recognition */}
        <div className="mt-20 sm:mt-24 pt-12 sm:pt-16 border-t border-[rgba(255,255,255,0.04)]">
          <div className="section-label mb-8 sm:mb-12">
            <span className="section-label-number">06 / Milestones</span>
            <div className="section-label-line" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 min-w-0">
            {achievements.slice(0, 6).map((achievement) => (
              <AchievementCard 
                key={achievement.id} 
                achievement={achievement as unknown as Record<string, unknown>}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
