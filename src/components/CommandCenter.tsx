'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DownloadIcon, MailIcon } from '@/components/ui/SocialIcons';
import { siteConfig, ctaButtons } from '@/lib/data';

export default function CommandCenter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* System Status */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6 }} className="font-mono text-xs text-cyan-500/60 space-y-1">
            <p>SYS_INIT: OK</p>
            <p>COORDS: {siteConfig.coordinates}</p>
            <p>STATUS: ACTIVE</p>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tight"
          >
            <span className="block">ADITYAVARDHAN</span>
            <span className="block text-cyan-400">JAIN</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-slate-400 font-mono"
          >
            {siteConfig.title}
          </motion.p>
          
          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed"
          >
            {siteConfig.tagline}
          </motion.p>
          
          {/* Research Telemetry */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-wrap justify-center gap-2 mt-6"
          >
            {siteConfig.researchDomains.map((domain, index) => (
              <motion.span
                key={domain}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="px-3 py-1 text-xs font-mono text-cyan-400/80 border border-cyan-500/20 rounded-full hover:border-cyan-500/40 transition-colors"
              >
                {domain}
              </motion.span>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-6"
          >
            {ctaButtons.map((cta) => (
              <motion.a
                key={cta.id}
                href={cta.href}
                className="group relative px-6 py-3 font-mono text-sm tracking-wider overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0.5 bg-[#030810] rounded" />
                <span className="relative flex items-center gap-2 text-slate-300 group-hover:text-cyan-400 transition-colors">
                  {cta.label}
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </span>
              </motion.a>
            ))}
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-6 pt-8"
          >
            <motion.a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-500 hover:text-slate-300 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-500 hover:text-slate-300 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`mailto:${siteConfig.email}`}
              className="p-3 text-slate-500 hover:text-slate-300 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email Contact"
            >
              <MailIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-500 hover:text-slate-300 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download Resume"
            >
              <DownloadIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs font-mono tracking-widest">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
