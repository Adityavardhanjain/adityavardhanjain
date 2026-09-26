'use client';

import { useState } from 'react';
import type { KnowledgeMap } from '@/lib/data/knowledgeMaps';

export default function KnowledgeGraph({ map }: { map: KnowledgeMap }) {
  const [activeNode, setActiveNode] = useState(map.nodes[0].id);
  const active = map.nodes.find((node) => node.id === activeNode) ?? map.nodes[0];

  return (
    <div className="knowledge-graph" role="group" aria-label={map.title}>
      <div className="knowledge-graph__topline">
        <span>{map.caption}</span>
        <span className="graph-live"><i aria-hidden="true" /> INTERACTIVE</span>
      </div>
      <div className="knowledge-graph__field">
        <svg className="knowledge-graph__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {map.links.map(([from, to]) => {
            const start = map.nodes.find((node) => node.id === from);
            const end = map.nodes.find((node) => node.id === to);
            if (!start || !end) return null;
            const highlighted = activeNode === from || activeNode === to;

            return (
              <line
                key={`${from}-${to}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                className={highlighted ? 'is-connected' : ''}
              />
            );
          })}
        </svg>
        {map.nodes.map((node) => (
          <button
            key={node.id}
            type="button"
            className={`knowledge-node${activeNode === node.id ? ' is-active' : ''}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            aria-pressed={activeNode === node.id}
            onFocus={() => setActiveNode(node.id)}
            onMouseEnter={() => setActiveNode(node.id)}
            onClick={() => setActiveNode(node.id)}
          >
            <span className="knowledge-node__dot" aria-hidden="true" />
            <span className="knowledge-node__label">{node.label}</span>
          </button>
        ))}
      </div>
      <div className="knowledge-graph__readout" aria-live="polite">
        <span className="knowledge-graph__readout-label">{active.label}</span>
        <p>{active.description}</p>
      </div>
    </div>
  );
}