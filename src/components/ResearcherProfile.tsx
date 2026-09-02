'use client';

import content from '@/lib/content';

export default function ResearcherProfile() {
  const { about } = content;
  
  return (
    <section id="about" className="section relative">
      {/* Hairline accent rail - replaces gradient blobs */}
      <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-[#00D4FF]/30 via-[#00D4FF]/10 to-transparent" aria-hidden="true" />
      
      <div className="container-content relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-w-0">
          {/* Left - Large Statement */}
          <div className="min-w-0">
            <div className="section-heading">
              <p className="section-eyebrow">{about.sectionLabel}</p>
              <h2 className="text-section-title font-bold text-[#f0f4f8] leading-tight text-wrap mt-1">
                {about.headline}
              </h2>
            </div>
          </div>
          
          {/* Right - Two concise paragraphs + right-aligned metrics column aligned to bottom */}
          <div className="min-w-0">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 md:items-end">
              {/* Paragraphs */}
              <div className="space-y-6 min-w-0 flex-1">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-body text-[#8899aa] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Metric stats - right-aligned column, vertically aligned with text block bottom */}
              <div className="flex flex-col gap-5 md:gap-6 md:items-end md:text-right min-w-0 md:border-l md:border-[rgba(255,255,255,0.08)] md:pl-8">
                {about.metrics.map((metric, index) => (
                  <div key={index}>
                    <p className="metric-value whitespace-nowrap">{metric.value}</p>
                    <p className="metric-label">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
