'use client';

import { motion } from 'framer-motion';
import { researchDirections, publications, currentResearchTransmission } from '@/lib/data';

export default function ResearchLab() {
  return (
    <section id="research" className="py-20 px-6">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">Exploration</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Research & Publications
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Exploring the frontiers of artificial intelligence, computational neuroscience, 
            and intelligent systems.
          </p>
        </motion.div>
        
        {/* Current Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 p-6 bg-[#151921] border border-white/5 rounded-xl"
        >
          <div className="flex items-start gap-4 mb-4">
            <span className="px-3 py-1 text-xs text-blue-400 bg-blue-400/10 rounded-full">Research Concept</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-100 mb-3">
            {currentResearchTransmission.title}
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            {currentResearchTransmission.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {currentResearchTransmission.keywords.map((keyword) => (
              <span key={keyword} className="tag">{keyword}</span>
            ))}
          </div>
        </motion.div>
        
        {/* Publications */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-100 mb-6">Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-5 bg-[#151921] border border-white/5 rounded-xl hover:border-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h4 className="text-base font-medium text-gray-100">{pub.title}</h4>
                  <span className="px-2 py-1 text-xs text-emerald-400 bg-emerald-400/10 rounded-full">Published</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{pub.venue} · {pub.year}</p>
                <p className="text-sm text-gray-400">{pub.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Research Directions */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100 mb-6">Research Interests</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchDirections.slice(0, 6).map((direction, index) => (
              <motion.div
                key={direction.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 bg-[#151921] border border-white/5 rounded-xl hover:border-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-200">{direction.title}</h4>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    direction.status === 'active' ? 'text-emerald-400 bg-emerald-400/10' :
                    direction.status === 'exploring' ? 'text-blue-400 bg-blue-400/10' :
                    'text-gray-500 bg-gray-500/10'
                  }`}>
                    {direction.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">{direction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
