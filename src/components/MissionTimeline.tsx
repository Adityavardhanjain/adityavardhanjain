'use client';

import content from '@/lib/content';
import type { Experience, Achievement } from '@/lib/content';

// Experience Entry Component - per spec: max-width 850px
interface ExperienceEntryProps {
  experience: Experience;
}

function ExperienceEntry({ experience }: ExperienceEntryProps) {
  return (
    <div className="relative max-w-[850px]">
      {/* Timeline indicator */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-3.5 h-3.5 flex-shrink-0 bg-[#0B0D17] border-2 border-[#00D4FF] shadow-[0_0_0_4px_rgba(0,212,255,0.12)]" />
        <p className="font-mono text-sm text-[#00D4FF] tracking-wide">{experience.period}</p>
      </div>
      
      <div className="pl-7">
        {/* Organization & Role */}
        <div className="mb-4">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f0f4f8] tracking-tight leading-snug mb-2">{experience.organization}</h3>
          <p className="font-mono text-sm tracking-[0.08em] uppercase text-[#00D4FF]/90 mb-2">{experience.title}</p>
          <p className="text-sm text-[#5a6a7a]">{experience.location}</p>
        </div>
        
        {/* Impact Metrics - per spec: metrics only where credible */}
        {experience.impactMetrics && experience.impactMetrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 mb-3">
            {experience.impactMetrics.map((metric, i) => (
              <div key={i}>
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Description */}
        <p className="text-body text-[#8899aa] leading-relaxed mb-3 max-w-[700px]">
          {experience.description}
        </p>
        
        {/* Impact Highlights - per spec: max 3 bullets, spaced for skimming */}
        {experience.highlights.length > 0 && (
          <div className="space-y-3">
            {experience.highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-1.5 flex-shrink-0 border border-[#00D4FF] rotate-45" />
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
      <p className="font-mono text-[0.6875rem] text-[#00D4FF] tracking-[0.15em] mb-3">{achievement.year}</p>
      <h4 className="font-serif text-base font-semibold text-[#f0f4f8] mb-1 leading-snug">
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
      {/* Hairline accent rail - replaces gradient blobs */}
      <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-[#00D4FF]/30 via-[#00D4FF]/10 to-transparent" aria-hidden="true" />
      
      <div className="container-content relative z-10">
        <div className="section-heading">
          <h2 className="text-section-title font-bold text-[#f0f4f8]">{experience.title}</h2>
          <p className="section-eyebrow">{experience.sectionLabel}</p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(0,212,255,0.3)] via-[rgba(0,212,255,0.1)] to-transparent" />
          
          <div className="space-y-14 sm:space-y-20">
            {experience.items.map((exp) => (
              <ExperienceEntry 
                key={exp.id} 
                experience={exp} 
              />
            ))}
          </div>
        </div>
        
        {/* Achievements & Recognition */}
        <div className="mt-16 pt-10 border-t border-[rgba(255,255,255,0.04)]">
          <h3 className="text-card-title text-[#f0f4f8] mb-6">{experience.achievements.sectionLabel}</h3>
          
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
