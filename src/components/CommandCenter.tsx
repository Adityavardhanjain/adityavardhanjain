'use client';

import { siteConfig } from '@/lib/data';
import content from '@/lib/content';

export default function CommandCenter() {
  const { hero } = content;

  return (
    <section id="home" className="command-center min-h-[100svh] flex items-center relative overflow-hidden">
      <div className="container-content w-full relative z-10 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-8 items-center">
          {/* Left Column - Mission File */}
          <div className="space-y-6 min-w-0">
            {/* Status readout - mono instrumentation */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
              </span>
              <span className="text-label text-[#6ea8bd]">{hero.statusText}</span>
            </div>

            {/* Name - serif display, first name nowrap per spec */}
            <h1 className="text-hero-name font-bold text-[#f0f4f8] leading-none">
              <span className="block text-nowrap">{siteConfig.name.split(' ')[0]}</span>
              <span className="block">{siteConfig.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            {/* Professional identity - mono readout */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00D4FF]/50" aria-hidden="true" />
              <p className="text-hero-role text-[#c8d4e3]">
                {siteConfig.title}
              </p>
            </div>

            {/* Biography - single concise paragraph */}
            <p className="text-body text-[#8899aa] max-w-xl leading-relaxed">
              {hero.biography}
            </p>

            {/* Highlights - bracketed instrumentation readouts */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 py-2">
              {hero.highlights.map((highlight) => (
                <div key={highlight.id} className="flex items-center gap-2">
                  <span className="text-[#00D4FF] font-mono text-sm">[</span>
                  <span className="text-sm text-[#8899aa]">{highlight.text}</span>
                  <span className="text-[#00D4FF] font-mono text-sm">]</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {hero.ctas.map((cta) => (
                cta.type === 'primary' ? (
                  <a key={cta.id} href={cta.href} className="btn btn-primary">
                    {cta.label}
                  </a>
                ) : cta.type === 'secondary' ? (
                  <a
                    key={cta.id}
                    href={siteConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-quiet"
                  >
                    {cta.label}
                  </a>
                ) : (
                  <a
                    key={cta.id}
                    href={cta.href}
                    className="btn btn-text"
                  >
                    {cta.label}
                  </a>
                )
              ))}
            </div>

            {/* Mobile orbit visual - normal document flow per original comment */}
            <div className="command-center__mobile-orbit lg:hidden" aria-hidden="true">
              <div className="command-center__orbit-shell">
                <div className="absolute inset-0 rounded-full border border-[rgba(0,212,255,0.14)] animate-orbital" style={{ animationDuration: '120s' }} />
                <div className="absolute inset-[20%] rounded-full border border-[rgba(0,212,255,0.10)] animate-orbital-reverse" style={{ animationDuration: '80s' }} />
                <div className="absolute inset-[40%] rounded-full bg-[#0B0D17] border border-[rgba(0,212,255,0.25)] flex items-center justify-center">
                  <span className="font-mono text-sm text-[#00D4FF] tracking-[0.3em]">AJ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission Marker Instrument - fills remaining grid column */}
          <div className="hidden lg:flex items-center justify-center relative min-w-0">
            <div
              className="relative w-full aspect-square text-center"
              style={{ maxWidth: 'min(100%, 420px)' }}
            >
              {/* Bearing tick ring */}
              <div className="absolute inset-0 rounded-full border border-[rgba(0,212,255,0.10)]" />

              {/* Outer orbital path - slow rotation */}
              <div className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.07)] animate-orbital" style={{ animationDuration: '120s' }}>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3">
                  <div className="w-3 h-3 rounded-full bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.7)]" />
                </div>
              </div>

              {/* Second orbital path - reverse */}
              <div className="absolute inset-[14%] rounded-full border border-[rgba(255,255,255,0.05)] animate-orbital-reverse" style={{ animationDuration: '80s' }}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2">
                  <div className="w-2 h-2 rounded-full bg-[#00D4FF] opacity-70" />
                </div>
              </div>

              {/* Third orbital path */}
              <div className="absolute inset-[28%] rounded-full border border-[rgba(0,212,255,0.08)] animate-orbital" style={{ animationDuration: '50s' }}>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_6px_rgba(0,212,255,0.7)]" />
                </div>
              </div>

              {/* Fourth orbital path */}
              <div className="absolute inset-[42%] rounded-full border border-[rgba(255,255,255,0.05)] animate-orbital-reverse" style={{ animationDuration: '35s' }}>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1">
                  <div className="w-1 h-1 rounded-full bg-[#00D4FF]/70" />
                </div>
              </div>

              {/* Center mission marker - square instrument badge, no blur, no gradient blobs */}
              <div className="absolute inset-[46%] bg-[#0B0D17] border border-[rgba(0,212,255,0.3)] flex flex-col items-center justify-center gap-1 shadow-[0_0_12px_rgba(0,212,255,0.15)]">
                <span className="font-mono text-xs text-[#00D4FF] tracking-[0.25em]">AJ</span>
                <span className="w-3 h-px bg-[#00D4FF]/40" />
                <span className="font-mono text-[0.5rem] text-[#5a6a7a] tracking-widest">SYS.ONLINE</span>
              </div>

              {/* Instrument corner readouts */}
              <span className="absolute top-0 left-0 font-mono text-[0.5625rem] text-[#5a6a7a] tracking-widest" aria-hidden="true">27.99N</span>
              <span className="absolute top-0 right-0 font-mono text-[0.5625rem] text-[#5a6a7a] tracking-widest" aria-hidden="true">77.12E</span>
              <span className="absolute bottom-0 left-0 font-mono text-[0.5625rem] text-[#5a6a7a] tracking-widest" aria-hidden="true">ALT +2</span>
              <span className="absolute bottom-0 right-0 font-mono text-[0.5625rem] text-[#5a6a7a] tracking-widest" aria-hidden="true">UPLINK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
