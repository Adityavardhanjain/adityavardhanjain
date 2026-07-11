'use client';

import { researchDirections, publications } from '@/lib/data';

export default function ResearchLab() {
  return (
    <section id="research" className="py-32 px-6 md:px-12 lg:px-16">
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-sm text-[#94a3b8] mb-4">Research</p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#f0f4f8]">
          Interests & Work
        </h2>
        
        {/* Research Interests */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-[#94a3b8] mb-4">Research Interests</h3>
          <div className="flex flex-wrap gap-2">
            {researchDirections.slice(0, 8).map((direction) => (
              <span key={direction.id} className="px-4 py-2 text-sm text-[#94a3b8] bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.15)] rounded-full">
                {direction.title}
              </span>
            ))}
          </div>
        </div>
        
        {/* Publications */}
        <div>
          <h3 className="text-sm font-medium text-[#94a3b8] mb-4">Publications</h3>
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.id} className="p-5 bg-[#0f1923] border border-[rgba(255,255,255,0.08)] rounded-xl">
                <h4 className="font-medium mb-1 text-[#f0f4f8]">{pub.title}</h4>
                <p className="text-sm text-[#94a3b8] mb-2">{pub.venue} · {pub.year}</p>
                <p className="text-sm text-[#94a3b8]">{pub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
