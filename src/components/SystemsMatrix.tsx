'use client';

import { skills } from '@/lib/data';

export default function SystemsMatrix() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-[#666666] mb-4">Skills</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Technical Skills
        </h2>
        
        <div className="space-y-6">
          {skills.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-medium text-[#666666] mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm text-[#a0a0a0] border border-[rgba(255,255,255,0.08)] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
