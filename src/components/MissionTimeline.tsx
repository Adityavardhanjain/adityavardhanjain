'use client';

import content from '@/lib/content';
import type { Experience, Achievement } from '@/lib/content';

// Experience Entry Component - per spec: max-width 850px
interface ExperienceEntryProps {
  experience: Experience;
  isFirst: boolean;
}

function ExperienceEntry({ experience, isFirst }: ExperienceEntryProps) {
  return (
    <div className="relative max-w-[850px]">
      {/* Timeline indicator */}
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-3 h-3 rounded-full flex-shrink-0 ${isFirst ? 'bg-[#3b82f6] shadow-lg shadow-[#3b82f6]/30' : 'bg-[#1a2a40]'}`} />
        <p className="font-mono text-sm text-[#3b82f6] tracking-wide">{experience.period}</p>
      </div>
      
      <div className="pl-7">
        {/* Organization & Role */}
        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-[#f0f4f8] tracking-tight mb-1">{experience.organization}</h3>
          <p className="text-base text-[#c8d4e3] mb-1">{experience.title}</p>
          <p className="text-sm text-[#5a6a7a]">{experience.location}</p>
        </div>
        
        {/* Impact Metrics - per spec: metrics only where credible */}
        {experience.impactMetrics && experience.impactMetrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 mb-4">
            {experience.impactMetrics.map((metric, i) => (
              <div key={i}>
                <p className="text-xl sm:text-2xl font-bold text-[#f0f4f8] tracking-tight">{metric.value}</p>
                <p className="text-xs text-[#5a6a7a]">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Description */}
        <p className="text-body text-[#8899aa] leading-relaxed mb-4 max-w-[700px]">
          {experience.description}
        </p>
        
        {/* Impact Highlights - per spec: max 3 bullets */}
        {experience.highlights.length > 0 && (
          <div className="space-y-2">
            {experience.highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#3b82f6] flex-shrink-0" />
                <p className="text-sm text-[#8899aa] leading-relaxed">{highlight}</p>
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
  achievement: Achievement;
}

function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="card">
      <p className="font-mono text-xs text-[#3b82f6] tracking-widest mb-2">{achievement.year}</p>
      <h4 className="text-sm font-semibold text-[#f0f4f8] mb-1 leading-snug">
        {achievement.title}
      </h4>
      <p className="text-xs text-[#5a6a7a]">
        {achievement.organization}
      </p>
    </div>
  );
}

export default function MissionTimeline() {
  const { experience } = content;
  
  return (
    <section id="experience" className="section relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(59,130,246,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">{experience.sectionLabel}</span>
          <div className="section-label-line" />
        </div>
        
        <div className="mb-12">
          <h2 className="text-section-title font-bold text-[#f0f4f8]">{experience.title}</h2>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(59,130,246,0.3)] via-[rgba(59,130,246,0.1)] to-transparent" />
          
          <div className="space-y-12 sm:space-y-16">
            {experience.items.map((exp, index) => (
              <ExperienceEntry 
                key={exp.id} 
                experience={exp} 
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
        
        {/* Achievements & Recognition */}
        <div className="mt-20 pt-12 border-t border-[rgba(255,255,255,0.04)]">
          <div className="section-label mb-8">
            <span className="section-label-number">{experience.achievements.sectionLabel}</span>
            <div className="section-label-line" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0">
            {experience.achievements.items.slice(0, 6).map((achievement) => (
              <AchievementCard 
                key={achievement.id} 
                achievement={achievement}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
