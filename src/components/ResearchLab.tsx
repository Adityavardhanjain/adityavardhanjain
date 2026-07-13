'use client';

import { useState } from 'react';
import { researchDirections, publications, safeString, safeUrl } from '@/lib/data';

// Research topic positions for constellation visualization - viewBox 700x430
// Positions with 70-80 unit padding from edges
const topicPositions = [
  { id: 'ai-verification', x: 140, y: 90, connections: ['world-models', 'intelligent-agents', 'multimodal-reasoning'], label: ['AI', 'Verification'], labelPos: 'left' },
  { id: 'world-models', x: 200, y: 170, connections: ['ai-verification', 'intelligent-agents', 'bci'], label: ['World', 'Models'], labelPos: 'left' },
  { id: 'intelligent-agents', x: 280, y: 120, connections: ['ai-verification', 'world-models', 'multimodal-reasoning'], label: ['Intelligent', 'Agents'], labelPos: 'top' },
  { id: 'multimodal-reasoning', x: 380, y: 80, connections: ['ai-verification', 'intelligent-agents', 'ai-science'], label: ['Multimodal', 'Reasoning'], labelPos: 'top' },
  { id: 'bci', x: 150, y: 300, connections: ['world-models', 'ai-science'], label: ['Brain–Computer', 'Interfaces'], labelPos: 'left' },
  { id: 'ai-science', x: 500, y: 180, connections: ['multimodal-reasoning', 'bci', 'space-intelligence'], label: ['AI for', 'Science'], labelPos: 'right' },
  { id: 'space-intelligence', x: 560, y: 320, connections: ['ai-science'], label: ['Space', 'Intelligence'], labelPos: 'right' },
];

// Central node position
const centerNode = { x: 350, y: 215 };

function ResearchConstellation() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);
  
  const activeDirection = researchDirections.find(d => d.id === activeTopic || d.id === hoveredTopic);
  
  // Helper to get label offset
  const getLabelOffset = (labelPos: string, isActive: boolean) => {
    const baseOffset = isActive ? 50 : 45;
    switch (labelPos) {
      case 'left': return { x: -baseOffset, y: 5, textAnchor: 'end' as const };
      case 'right': return { x: baseOffset, y: 5, textAnchor: 'start' as const };
      case 'top': return { x: 0, y: -baseOffset, textAnchor: 'middle' as const };
      default: return { x: baseOffset, y: 5, textAnchor: 'start' as const };
    }
  };
  
  return (
    <div className="research-visualization">
      {/* SVG Constellation - properly sized viewBox with all content inside */}
      <svg 
        viewBox="0 0 700 430" 
        width="100%"
        role="img"
        aria-label="Research interests connected around intelligent systems"
      >
        {/* Connection lines from center to outer nodes */}
        {topicPositions.map(topic => {
          const isActive = activeTopic === topic.id || hoveredTopic === topic.id;
          return (
            <line
              key={`center-${topic.id}`}
              x1={centerNode.x}
              y1={centerNode.y}
              x2={topic.x}
              y2={topic.y}
              stroke={isActive ? 'rgba(59, 130, 246, 0.6)' : 'rgba(255, 255, 255, 0.15)'}
              strokeWidth={isActive ? 1.5 : 1}
              className="transition-all duration-300"
            />
          );
        })}
        
        {/* Connection lines between outer nodes */}
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
                stroke={isActive ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.08)'}
                strokeWidth={isActive ? 1.2 : 0.8}
                className="transition-all duration-300"
              />
            );
          })
        ))}
        
        {/* Central node - INTELLIGENT SYSTEMS */}
        <circle
          cx={centerNode.x}
          cy={centerNode.y}
          r={45}
          fill="#0a1120"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth={2}
        />
        <circle
          cx={centerNode.x}
          cy={centerNode.y}
          r={40}
          fill="none"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth={1}
        />
        <text
          x={centerNode.x}
          y={centerNode.y - 6}
          textAnchor="middle"
          className="pointer-events-none select-none"
          style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', fontWeight: 600, fill: '#f0f4f8', letterSpacing: '0.1em' }}
        >
          INTELLIGENT
        </text>
        <text
          x={centerNode.x}
          y={centerNode.y + 10}
          textAnchor="middle"
          className="pointer-events-none select-none"
          style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: '11px', fontWeight: 600, fill: '#f0f4f8', letterSpacing: '0.1em' }}
        >
          SYSTEMS
        </text>
        
        {/* Outer topic nodes */}
        {topicPositions.map(topic => {
          const isActive = activeTopic === topic.id || hoveredTopic === topic.id;
          const isConnected = topicPositions.some(t => 
            t.connections.includes(topic.id) && (activeTopic === t.id || hoveredTopic === t.id)
          );
          const nodeRadius = isActive ? 34 : 30;
          const labelOffset = getLabelOffset(topic.labelPos, isActive);
          
          return (
            <g key={topic.id}>
              {/* Node circle */}
              <circle
                cx={topic.x}
                cy={topic.y}
                r={nodeRadius}
                fill={isActive ? 'rgba(59, 130, 246, 0.2)' : '#0a1120'}
                stroke={isActive ? 'rgba(59, 130, 246, 0.8)' : isConnected ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.2)'}
                strokeWidth={isActive ? 2 : 1.5}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredTopic(topic.id)}
                onMouseLeave={() => setHoveredTopic(null)}
                onClick={() => setActiveTopic(activeTopic === topic.id ? null : topic.id)}
              />
              
              {/* Active indicator ring */}
              {isActive && (
                <circle
                  cx={topic.x}
                  cy={topic.y}
                  r={nodeRadius + 6}
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth={1.5}
                  className="animate-pulse-slow"
                />
              )}
              
              {/* Labels inside nodes */}
              {topic.label.map((line, i) => (
                <text
                  key={`${topic.id}-label-${i}`}
                  x={topic.x + (topic.labelPos === 'left' ? -12 : topic.labelPos === 'right' ? 12 : 0)}
                  y={topic.y + (i === 0 ? -4 : 12)}
                  textAnchor={topic.labelPos === 'left' ? 'end' : topic.labelPos === 'right' ? 'start' : 'middle'}
                  className="pointer-events-none select-none transition-all duration-300"
                  style={{ 
                    fontFamily: 'var(--font-jetbrains), monospace', 
                    fontSize: '9px', 
                    fontWeight: 500, 
                    fill: isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.7)'
                  }}
                >
                  {line}
                </text>
              ))}
              
              {/* External label offset (for longer labels that need more space) */}
              <text
                x={topic.x + labelOffset.x}
                y={topic.y + labelOffset.y}
                textAnchor={labelOffset.textAnchor}
                className="pointer-events-none select-none transition-all duration-300"
                style={{ 
                  fontFamily: 'var(--font-jetbrains), monospace', 
                  fontSize: '10px', 
                  fontWeight: 600, 
                  fill: isActive ? '#3b82f6' : 'rgba(255, 255, 255, 0.5)'
                }}
              >
                {topic.label.join(' ')}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Active topic info panel */}
      {activeDirection && (
        <div className="research-info-panel">
          <p className="font-mono text-[10px] text-[#3b82f6] tracking-widest uppercase mb-2">
            {safeString(activeDirection.status, 'exploring').toUpperCase()}
          </p>
          <h4 className="text-base font-semibold text-[#f0f4f8] mb-2">{safeString(activeDirection.title)}</h4>
          <p className="text-sm text-[#8899aa] leading-relaxed">{safeString(activeDirection.description)}</p>
        </div>
      )}
      
      {/* Mobile fallback - research interest grid */}
      <div className="research-interest-grid md:hidden">
        {researchDirections.slice(0, 6).map((direction) => (
          <div 
            key={direction.id}
            className="research-interest-card"
          >
            <p className="font-mono text-[10px] text-[#3b82f6]/70 tracking-widest uppercase mb-1">
              {safeString(direction.status, 'exploring').toUpperCase()}
            </p>
            <h4 className="text-sm font-semibold text-[#f0f4f8] mb-1">{safeString(direction.title)}</h4>
            <p className="text-xs text-[#5a6a7a] leading-relaxed line-clamp-2">{safeString(direction.description)}</p>
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
    <div className="publication-card">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="publication-title">{title}</h3>
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
    <section id="research" className="research-section relative">
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
        
        <div className="research-layout">
          {/* Left - Research Constellation */}
          <div className="research-column">
            <h2 className="text-section-title font-bold text-[#f0f4f8] mb-4">Research Interests</h2>
            <p className="text-body text-[#8899aa] mb-6">
              Exploring the intersection of artificial intelligence, neuroscience, and intelligent systems.
            </p>
            <ResearchConstellation />
          </div>
          
          {/* Right - Publications */}
          <div className="publications-column">
            <h2 className="text-section-title font-bold text-[#f0f4f8] mb-6">Publications</h2>
            <div className="publications-list">
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
