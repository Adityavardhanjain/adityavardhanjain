'use client';

export default function ResearcherProfile() {
  return (
    <section id="about" className="py-[var(--section-spacing)] bg-[#070b14]">
      <div className="container-content">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-medium text-[#3b82f6] tracking-widest uppercase">01</span>
          <div className="h-px bg-[rgba(255,255,255,0.06)] flex-1 max-w-xs"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Section Heading */}
          <div>
            <h2 className="text-section-heading font-bold text-[#f0f4f8] leading-tight">
              Building intelligent systems at the intersection of AI, data, and human cognition.
            </h2>
          </div>
          
          {/* Right - Bio Content */}
          <div className="space-y-6 text-[#94a3b8] text-body">
            <p>
              I am an AI and Machine Learning engineer, data analyst, and research enthusiast 
              interested in building intelligent systems that connect advanced computation with 
              meaningful real-world applications.
            </p>
            <p>
              My work spans machine learning, computer vision, natural language processing, 
              generative AI, data analytics, and brain-computer interfaces.
            </p>
            <p>
              My long-term interests include artificial intelligence research, world models, 
              intelligent agents, computational neuroscience, and space technology.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 mt-8 border-t border-[rgba(255,255,255,0.06)]">
              <div>
                <p className="text-3xl font-bold text-[#f0f4f8]">4+</p>
                <p className="text-sm text-[#64748b] mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#f0f4f8]">2</p>
                <p className="text-sm text-[#64748b] mt-1">Publications</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#f0f4f8]">3</p>
                <p className="text-sm text-[#64748b] mt-1">Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
