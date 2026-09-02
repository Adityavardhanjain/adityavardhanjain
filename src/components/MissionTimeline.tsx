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
        <div className="w-3.5 h-3.5 rounded-full flex-shrink-0 bg-[#00D4FF] shadow-[0_0_0_4px_rgba(0,212,255,0.15),0_0_12px_rgba(0,212,255,0.6)]" />
        <p className="font-mono text-sm text-[#00D4FF] tracking-wide">{experience.period}</p>
      </div>
      
      <div className="pl-7">
        {/* Organization & Role */}
        <div className="mb-4">
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
        
        {/* Impact Highlights - per spec: max 3 bullets, spaced for skimming */}
        {experience.highlights.length > 0 && (
          <div className="space-y-3">
            {experience.highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#00D4FF] shadow-[0_0_6px_rgba(0,212,255,0.9)] flex-shrink-0" />
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
      <p className="font-mono text-xs text-[#00D4FF] tracking-widest mb-2">{achievement.year}</p>
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
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(0,212,255,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        <div className="section-heading">
          <h2 className="text-section-title font-bold text-[#f0f4f8]">{experience.title}</h2>
          <p className="section-eyebrow">{experience.sectionLabel}</p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(0,212,255,0.3)] via-[rgba(0,212,255,0.1)] to-transparent" />
          
          <div className="space-y-12 sm:space-y-16">
            {experience.items.map((exp) => (
              <ExperienceEntry 
                key={exp.id} 
                experience={exp} 
              />
            ))}
          </div>
        </div>
        
        {/* Achievements & Recognition */}
        <div className="mt-20 pt-12 border-t border-[rgba(255,255,255,0.04)]">
          <h3 className="text-card-title text-[#f0f4f8] mb-8">{experience.achievements.sectionLabel}</h3>
          
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
