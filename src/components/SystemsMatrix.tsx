'use client';

import { skills } from '@/lib/data';

export default function SystemsMatrix() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-16 bg-[#0d1421]">
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-sm text-[#94a3b8] mb-4">Skills</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#f0f4f8]">
          Technical Skills
        </h2>
        
        <div className="space-y-6">
          {skills.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-medium text-[#94a3b8] mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 text-sm text-[#94a3b8] bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.15)] rounded-full">
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
