'use client';

import content from '@/lib/content';

export default function ResearcherProfile() {
  const { about } = content;
  
  return (
    <section id="about" className="section relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[150vw] h-[400px] bg-gradient-radial from-[rgba(0,212,255,0.03)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-w-0">
          {/* Left - Large Statement */}
          <div className="min-w-0">
            <h2 className="text-section-title font-bold text-[#f0f4f8] leading-tight text-wrap">
              {about.headline}
            </h2>
            <p className="section-eyebrow mt-4">{about.sectionLabel}</p>
          </div>
          
          {/* Right - Two concise paragraphs + Metrics */}
          <div className="space-y-6 min-w-0">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-body text-[#8899aa] leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            {/* Four compact metrics per spec */}
            <div className="grid grid-cols-2 gap-6 pt-8 mt-4 border-t border-[rgba(255,255,255,0.06)]">
              {about.metrics.map((metric, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-[#f0f4f8] tracking-tight">{metric.value}</p>
                  <p className="text-sm text-[#5a6a7a] mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
