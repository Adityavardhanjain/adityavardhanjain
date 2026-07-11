'use client';

import { useState } from 'react';
import { researchDirections, publications } from '@/lib/data';

// Research topic positions for constellation visualization
const topicPositions = [
  { id: 'world-models', x: 25, y: 30, connections: ['llm-verification', 'intelligent-agents'] },
  { id: 'llm-verification', x: 45, y: 20, connections: ['world-models', 'ai-reasoning'] },
  { id: 'intelligent-agents', x: 35, y: 50, connections: ['world-models', 'multimodal-intelligence'] },
  { id: 'ai-reasoning', x: 65, y: 25, connections: ['llm-verification', 'multimodal-intelligence'] },
  { id: 'multimodal-intelligence', x: 70, y: 50, connections: ['ai-reasoning', 'intelligent-agents'] },
  { id: 'comp-neuroscience', x: 20, y: 70, connections: ['bci'] },
  { id: 'bci', x: 40, y: 80, connections: ['comp-neuroscience'] },
];

function ResearchConstellation() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);
  
  const activeDirection = researchDirections.find(d => d.id === activeTopic || d.id === hoveredTopic);
  
  return (
    <div className="relative">
      {/* SVG Constellation */}
      <svg viewBox="0 0 100 100" className="w-full aspect-square" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines */}
        {topicPositions.map(topic => (
          topic.connections.map(connId => {
            const target = topicPositions.find(t => t.id === connId);
            if (!target) return null;
            const isActive = activeTopic === topic.id || activeTopic === connId || hoveredTopic === topic.id || hoveredTopic === connId;
            return (
              <line
                key={`${topic.id}-${connId}`}
                x1={topic.x}
                y1={topic.y}
                x2={target.x}
                y2={target.y}
                stroke={isActive ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.06)'}
                strokeWidth={isActive ? 0.5 : 0.3}
                className="transition-all duration-300"
              />
            );
          })
        ))}
        
        {/* Topic nodes */}
        {topicPositions.map(topic => {
          const direction = researchDirections.find(d => d.id === topic.id);
          if (!direction) return null;
          const isActive = activeTopic === topic.id || hoveredTopic === topic.id;
          const isConnected = topicPositions.some(t => 
            t.connections.includes(topic.id) && (activeTopic === t.id || hoveredTopic === t.id)
          );
          
          return (
            <g key={topic.id}>
              {/* Node circle */}
              <circle
                cx={topic.x}
                cy={topic.y}
                r={isActive ? 4 : 2.5}
                fill={isActive ? '#3b82f6' : isConnected ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.2)'}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredTopic(topic.id)}
                onMouseLeave={() => setHoveredTopic(null)}
                onClick={() => setActiveTopic(activeTopic === topic.id ? null : topic.id)}
                tabIndex={0}
                role="button"
                aria-label={direction.title}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveTopic(activeTopic === topic.id ? null : topic.id);
                  }
                }}
              />
              {/* Glow effect for active */}
              {isActive && (
                <circle
                  cx={topic.x}
                  cy={topic.y}
                  r={6}
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.3)"
                  className="animate-pulse-slow"
                />
              )}
            </g>
          );
        })}
      </svg>
      
      {/* Active topic info */}
      {(activeTopic || hoveredTopic) && activeDirection && (
        <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
          <div className="bg-[#0a1120] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 max-w-xs pointer-events-auto">
            <p className="font-mono text-[10px] text-[#3b82f6] tracking-widest uppercase mb-1">
              {activeDirection.status}
            </p>
            <h4 className="text-sm font-semibold text-[#f0f4f8] mb-2">{activeDirection.title}</h4>
            <p className="text-xs text-[#8899aa] leading-relaxed">{activeDirection.description}</p>
          </div>
        </div>
      )}
      
      {/* Mobile fallback - accessible list */}
      <div className="hidden mt-6 space-y-3">
        {researchDirections.slice(0, 6).map((direction) => (
          <div 
            key={direction.id}
            className="p-4 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-lg"
          >
            <p className="font-mono text-[10px] text-[#3b82f6]/70 tracking-widest uppercase mb-1">
              {direction.status}
            </p>
            <h4 className="text-sm font-semibold text-[#f0f4f8] mb-1">{direction.title}</h4>
            <p className="text-xs text-[#5a6a7a] leading-relaxed">{direction.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ResearchLab() {
  return (
    <section id="research" className="py-[var(--section-spacing)] relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(99,102,241,0.04)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">03 / Deep-Field Research</span>
          <div className="section-label-line" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Research Constellation */}
          <div>
            <h2 className="text-section-heading font-bold text-[#f0f4f8] mb-4">Research Interests</h2>
            <p className="text-[#8899aa] text-sm mb-8">
              Exploring the intersection of artificial intelligence, neuroscience, and intelligent systems.
            </p>
            <ResearchConstellation />
          </div>
          
          {/* Right - Publications */}
          <div>
            <h2 className="text-section-heading font-bold text-[#f0f4f8] mb-4">Publications</h2>
            
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="p-6 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl hover:border-[rgba(255,255,255,0.1)] transition-all">
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
                  <p className="text-[#8899aa] text-sm leading-relaxed">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
