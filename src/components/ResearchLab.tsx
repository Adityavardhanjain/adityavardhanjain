'use client';

import { researchDirections, publications, currentResearchTransmission } from '@/lib/data';

export default function ResearchLab() {
  return (
    <section id="research" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-[#666666] mb-4">Research</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Interests & Work
        </h2>
        
        {/* Research Interests */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Research Interests</h3>
          <div className="flex flex-wrap gap-2">
            {researchDirections.slice(0, 8).map((direction) => (
              <span key={direction.id} className="px-3 py-1.5 text-sm text-[#a0a0a0] border border-[rgba(255,255,255,0.08)] rounded">
                {direction.title}
              </span>
            ))}
          </div>
        </div>
        
        {/* Publications */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Publications</h3>
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.id} className="p-4 border border-[rgba(255,255,255,0.08)] rounded-lg">
                <h4 className="font-medium mb-1">{pub.title}</h4>
                <p className="text-sm text-[#666666] mb-2">{pub.venue} · {pub.year}</p>
                <p className="text-sm text-[#a0a0a0]">{pub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
