'use client';

import { experiences, achievements, safeString, safeArray } from '@/lib/data';

// Experience Entry Component - per spec: max-width 850px
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
    <div className="relative max-w-[850px]">
      {/* Timeline indicator */}
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-3 h-3 rounded-full flex-shrink-0 ${isFirst ? 'bg-[#3b82f6] shadow-lg shadow-[#3b82f6]/30' : 'bg-[#1a2a40]'}`} />
        <p className="font-mono text-sm text-[#3b82f6] tracking-wide">{period}</p>
      </div>
      
      <div className="pl-7">
        {/* Organization & Role */}
        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-[#f0f4f8] tracking-tight mb-1">{organization}</h3>
          <p className="text-base text-[#c8d4e3] mb-1">{title}</p>
          <p className="text-sm text-[#5a6a7a]">{location}</p>
        </div>
        
        {/* Impact Metrics - per spec: metrics only where credible */}
        {impactMetrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 mb-4">
            {impactMetrics.map((metric, i) => {
              const m = metric as Record<string, unknown>;
              return (
                <div key={i}>
                  <p className="text-xl sm:text-2xl font-bold text-[#f0f4f8] tracking-tight">{safeString(m.value)}</p>
                  <p className="text-xs text-[#5a6a7a]">{safeString(m.label)}</p>
                </div>
              );
            })}
          </div>
        )}
        
        {/* Description */}
        <p className="text-body text-[#8899aa] leading-relaxed mb-4 max-w-[700px]">
          {description}
        </p>
        
        {/* Impact Highlights - per spec: max 3 bullets */}
        {highlights.length > 0 && (
          <div className="space-y-2">
            {highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#3b82f6] flex-shrink-0" />
                <p className="text-sm text-[#8899aa] leading-relaxed">{safeString(highlight)}</p>
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
    <div className="card">
      <p className="font-mono text-xs text-[#3b82f6] tracking-widest mb-2">{year}</p>
      <h4 className="text-sm font-semibold text-[#f0f4f8] mb-1 leading-snug">
        {title}
      </h4>
      <p className="text-xs text-[#5a6a7a]">
        {organization}
      </p>
    </div>
  );
}

export default function MissionTimeline() {
  return (
    <section id="experience" className="section relative">
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
        
        <div className="mb-12">
          <h2 className="text-section-title font-bold text-[#f0f4f8]">Work History</h2>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(59,130,246,0.3)] via-[rgba(59,130,246,0.1)] to-transparent" />
          
          <div className="space-y-12 sm:space-y-16">
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
        <div className="mt-20 pt-12 border-t border-[rgba(255,255,255,0.04)]">
          <div className="section-label mb-8">
            <span className="section-label-number">06 / Milestones</span>
            <div className="section-label-line" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0">
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
