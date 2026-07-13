'use client';

import { useState } from 'react';
import { researchDirections, publications, safeString, safeUrl } from '@/lib/data';

// Research topic positions for constellation visualization
const topicPositions = [
  { id: 'world-models', x: 20, y: 25, connections: ['llm-verification', 'intelligent-agents'], label: 'World Models' },
  { id: 'llm-verification', x: 40, y: 15, connections: ['world-models', 'ai-reasoning'], label: 'LLM Verification' },
  { id: 'intelligent-agents', x: 30, y: 45, connections: ['world-models', 'multimodal-intelligence'], label: 'Intelligent Agents' },
  { id: 'ai-reasoning', x: 60, y: 20, connections: ['llm-verification', 'multimodal-intelligence'], label: 'AI Reasoning' },
  { id: 'multimodal-intelligence', x: 65, y: 45, connections: ['ai-reasoning', 'intelligent-agents'], label: 'Multimodal Intelligence' },
  { id: 'comp-neuroscience', x: 15, y: 70, connections: ['bci'], label: 'Comp Neuroscience' },
  { id: 'bci', x: 35, y: 80, connections: ['comp-neuroscience'], label: 'BCI' },
  { id: 'ai-space', x: 75, y: 75, connections: [], label: 'AI for Space' },
];

function ResearchConstellation() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);
  
  const activeDirection = researchDirections.find(d => d.id === activeTopic || d.id === hoveredTopic);
  
  return (
    <div className="relative">
      {/* SVG Constellation - improved contrast per spec */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-full max-w-[400px] mx-auto aspect-square hidden md:block" 
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Research interests constellation diagram"
      >
        {/* Connection lines - increased contrast */}
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
                stroke={isActive ? 'rgba(59, 130, 246, 0.7)' : 'rgba(255, 255, 255, 0.2)'}
                strokeWidth={isActive ? 0.6 : 0.4}
                className="transition-all duration-300"
              />
            );
          })
        ))}
        
        {/* Topic nodes - increased visibility */}
        {topicPositions.map(topic => {
          const isActive = activeTopic === topic.id || hoveredTopic === topic.id;
          const isConnected = topicPositions.some(t => 
            t.connections.includes(topic.id) && (activeTopic === t.id || hoveredTopic === t.id)
          );
          
          return (
            <g key={topic.id}>
              <circle
                cx={topic.x}
                cy={topic.y}
                r={isActive ? 5 : 3.5}
                fill={isActive ? '#3b82f6' : isConnected ? 'rgba(59, 130, 246, 0.7)' : 'rgba(255, 255, 255, 0.4)'}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredTopic(topic.id)}
                onMouseLeave={() => setHoveredTopic(null)}
                onClick={() => setActiveTopic(activeTopic === topic.id ? null : topic.id)}
              />
              {isActive && (
                <circle
                  cx={topic.x}
                  cy={topic.y}
                  r={8}
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.5)"
                  className="animate-pulse-slow"
                />
              )}
              {/* Labels - increased contrast per spec */}
              <text
                x={topic.x + (topic.x > 50 ? 7 : -7)}
                y={topic.y + 4}
                fontSize="4.5"
                fill={isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.6)'}
                textAnchor={topic.x > 50 ? 'start' : 'end'}
                className="transition-all duration-300 pointer-events-none select-none"
                style={{ fontFamily: 'monospace' }}
              >
                {topic.label}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Center node label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
        <div className="bg-[#0a1120] border border-[rgba(59,130,246,0.3)] rounded-full px-4 py-2">
          <span className="font-mono text-xs text-[#f0f4f8]">INTELLIGENT SYSTEMS</span>
        </div>
      </div>
      
      {/* Active topic info panel */}
      {activeDirection && (
        <div className="mt-4 p-4 bg-[#0a1120]/90 backdrop-blur-sm border border-[rgba(255,255,255,0.08)] rounded-xl">
          <p className="font-mono text-[10px] text-[#3b82f6] tracking-widest uppercase mb-2">
            {safeString(activeDirection.status, 'exploring').toUpperCase()}
          </p>
          <h4 className="text-base font-semibold text-[#f0f4f8] mb-2">{safeString(activeDirection.title)}</h4>
          <p className="text-sm text-[#8899aa] leading-relaxed">{safeString(activeDirection.description)}</p>
        </div>
      )}
      
      {/* Mobile fallback - two-column chip grid per spec */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:hidden">
        {researchDirections.slice(0, 6).map((direction) => (
          <div 
            key={direction.id}
            className="p-4 bg-[#0a1120] border border-[rgba(255,255,255,0.05)] rounded-xl"
          >
            <p className="font-mono text-[10px] text-[#3b82f6]/70 tracking-widest uppercase mb-1">
              {safeString(direction.status, 'exploring').toUpperCase()}
            </p>
            <h4 className="text-sm font-semibold text-[#f0f4f8] mb-1">{safeString(direction.title)}</h4>
            <p className="text-xs text-[#5a6a7a] leading-relaxed">{safeString(direction.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Publication Card Component - separate cards per spec
interface PublicationCardProps {
  publication: Record<string, unknown>;
}

function PublicationCard({ publication }: PublicationCardProps) {
  const title = safeString(publication.title, 'Untitled Publication');
  const venue = safeString(publication.venue);
  const year = safeString(publication.year);
  const description = safeString(publication.description);
  const link = safeUrl(publication.link);
  
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-card-title font-semibold text-[#f0f4f8] leading-tight">{title}</h3>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#3b82f6] hover:text-[#60a5fd] transition-colors flex-shrink-0"
            aria-label="View publication"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-sm font-mono text-[#3b82f6]">{venue}</span>
        {venue && year && <span className="text-xs text-[#5a6a7a]">·</span>}
        {year && <span className="text-sm font-mono text-[#5a6a7a]">{year}</span>}
      </div>
      <p className="text-body text-[#8899aa] leading-relaxed">{description}</p>
    </div>
  );
}

export default function ResearchLab() {
  return (
    <section id="research" className="section relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-[rgba(99,102,241,0.04)] via-transparent to-transparent" />
      </div>
      
      <div className="container-content relative z-10">
        {/* Section Label */}
        <div className="section-label">
          <span className="section-label-number">03 / Deep-Field Research</span>
          <div className="section-label-line" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 min-w-0">
          {/* Left - Research Constellation */}
          <div className="min-w-0">
            <h2 className="text-section-title font-bold text-[#f0f4f8] mb-4">Research Interests</h2>
            <p className="text-body text-[#8899aa] mb-6">
              Exploring the intersection of artificial intelligence, neuroscience, and intelligent systems.
            </p>
            <ResearchConstellation />
          </div>
          
          {/* Right - Publications */}
          <div className="min-w-0">
            <h2 className="text-section-title font-bold text-[#f0f4f8] mb-6">Publications</h2>
            {/* Two separate cards per spec */}
            <div className="space-y-4">
              {publications.map((pub) => (
                <PublicationCard key={pub.id} publication={pub as unknown as Record<string, unknown>} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
