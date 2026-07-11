'use client';

import { experiences, achievements } from '@/lib/data';

export default function MissionTimeline() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-[#666666] mb-4">Experience</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Work History
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id}>
              <p className="text-sm text-[#666666] mb-1">{exp.period}</p>
              <h3 className="text-lg font-medium mb-1">{exp.title}</h3>
              <p className="text-sm text-[#3b82f6] mb-2">{exp.organization} · {exp.location}</p>
              <p className="text-[#a0a0a0] text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.slice(0, 5).map((achievement) => (
              <div key={achievement.id} className="flex gap-3">
                <span className="text-[#666666]">{achievement.year}</span>
                <div>
                  <p className="text-[#a0a0a0]">{achievement.title}</p>
                  <p className="text-sm text-[#666666]">{achievement.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
