'use client';

import { experiences, achievements } from '@/lib/data';

export default function MissionTimeline() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-16">
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Header */}
        <p className="text-sm text-[#94a3b8] mb-4">Experience</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-[#f0f4f8]">
          Work History
        </h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgba(96,165,250,0.2)]" />
          
          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#60a5fa] ring-4 ring-[#07090f]" />
                
                {/* Date */}
                <p className="text-sm text-[#94a3b8] mb-1 whitespace-nowrap">{exp.period}</p>
                
                {/* Title */}
                <h3 className="text-lg font-medium mb-0.5 text-[#f0f4f8]">{exp.title}</h3>
                
                {/* Company & Location */}
                <p className="text-sm text-[#60a5fa] mb-3 break-words">
                  {exp.organization} · {exp.location}
                </p>
                
                {/* Description */}
                <p className="text-[#94a3b8] text-sm mb-3">{exp.description}</p>
                
                {/* Bullet Highlights */}
                {exp.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                        <span className="text-[#60a5fa] mt-1.5 flex-shrink-0">
                          <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 6 6">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements & Recognition */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold mb-6 text-[#f0f4f8]">Achievements & Recognition</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.slice(0, 6).map((achievement) => (
              <div 
                key={achievement.id} 
                className="p-4 bg-[#0f1923] border border-[rgba(255,255,255,0.08)] rounded-xl"
              >
                <p className="text-xs text-[#94a3b8] mb-1 whitespace-nowrap">{achievement.year}</p>
                <h4 className="text-sm font-medium text-[#f0f4f8] mb-0.5 leading-snug">
                  {achievement.title}
                </h4>
                <p className="text-xs text-[#64748b] leading-snug">
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
