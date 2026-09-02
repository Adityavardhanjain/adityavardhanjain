'use client';

import content from '@/lib/content';

export default function SystemsMatrix() {
  const { skills } = content;
  
  // Get all skills from categories for the secondary inventory
  const allSkills = skills.categories.flatMap(cat => cat.skills);
  
  return (
    <section id="skills" className="section relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[rgba(0,212,255,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        <div className="section-heading">
          <h2 className="text-section-title font-bold text-[#f0f4f8] mb-4">{skills.title}</h2>
          <p className="section-eyebrow">{skills.sectionLabel}</p>
          <p className="text-body text-[#8899aa] max-w-2xl">
            {skills.subtitle}
          </p>
        </div>
        
        {/* Five Capability Groups - per spec: responsive card grid, 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 min-w-0">
          {skills.categories.map((category) => (
            <div key={category.id} className="card">
              <h3 className="text-card-title font-semibold text-[#f0f4f8] mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs text-[#8899aa] bg-[#0d0e1a] rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Full Systems Inventory - Expandable */}
        <details className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.08)]">
          <summary className="cursor-pointer list-none">
            <div className="flex items-center gap-2">
              <h3 className="text-sm text-[#b9c7d8] mb-0 hover:text-[#f4f7fb] transition-colors">
                View full skills inventory
              </h3>
              <span className="text-[#5a6a7a]">
                <svg className="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </summary>
          <div className="flex flex-wrap gap-2 pt-6">
            {allSkills.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs text-[#5a6a7a] bg-[#10121f] rounded">
                {tech}
              </span>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
