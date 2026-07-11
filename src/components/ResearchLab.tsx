'use client';

import { researchDirections, publications } from '@/lib/data';

export default function ResearchLab() {
  return (
    <section id="research" className="py-[var(--section-spacing)] bg-[#070b14]">
      <div className="container-content">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-[#3b82f6] tracking-widest uppercase">03</span>
          <div className="h-px bg-[rgba(255,255,255,0.06)] flex-1 max-w-xs"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Research Interests */}
          <div>
            <h2 className="text-section-heading font-bold text-[#f0f4f8] mb-8">Research Interests</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {researchDirections.slice(0, 8).map((direction) => (
                <div 
                  key={direction.id}
                  className="p-5 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[#3b82f6]/30 transition-all"
                >
                  <h3 className="text-base font-semibold text-[#f0f4f8] mb-2">{direction.title}</h3>
                  {direction.description && (
                    <p className="text-sm text-[#64748b] leading-relaxed">{direction.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Publications */}
          <div>
            <h2 className="text-section-heading font-bold text-[#f0f4f8] mb-8">Publications</h2>
            
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="p-6 bg-[#0c1220] border border-[rgba(255,255,255,0.06)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-[#f0f4f8] leading-tight">{pub.title}</h3>
                    {pub.link && (
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#3b82f6] hover:text-[#60a5fd] transition-colors flex-shrink-0"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-[#3b82f6] mb-3">{pub.venue} · {pub.year}</p>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
