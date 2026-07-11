'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DownloadIcon, MailIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function CommandCenter() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-900/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container max-w-3xl mx-auto text-center relative z-10">
        {/* Status indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-500">Available for opportunities</span>
        </div>
        
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
        >
          <span className="text-gray-100">Adityavardhan</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Jain
          </span>
        </motion.h1>
        
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-gray-400 mb-6"
        >
          AI/ML Engineer · Data Analyst · Research Enthusiast
        </motion.p>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building intelligent systems at the intersection of artificial intelligence, 
          data, human cognition, and real-world impact.
        </motion.p>
        
        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {siteConfig.researchDomains.map((domain) => (
            <span
              key={domain}
              className="px-4 py-2 text-sm text-gray-400 bg-gray-800/50 border border-gray-700/50 rounded-full hover:border-gray-600 hover:text-gray-300 transition-colors"
            >
              {domain}
            </span>
          ))}
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:text-gray-300 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-gray-600 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:text-gray-300 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-gray-600 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="p-3 text-gray-500 hover:text-gray-300 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-gray-600 transition-all"
            aria-label="Email"
          >
            <MailIcon className="w-5 h-5" />
          </a>
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:text-gray-300 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-gray-600 transition-all"
            aria-label="Resume"
          >
            <DownloadIcon className="w-5 h-5" />
          </a>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-600"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
