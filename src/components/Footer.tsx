'use client';

import { motion } from 'framer-motion';
import { Satellite } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-cyan-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Satellite className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-sm text-cyan-400/80">{siteConfig.systemId}</span>
            </div>
            <p className="text-slate-400 text-sm italic">
              &ldquo;Exploring Intelligence, One Dataset at a Time.&rdquo;
            </p>
          </motion.div>
          
          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-500"
          >
            {['About', 'Projects', 'Research', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.toUpperCase()}
              </a>
            ))}
          </motion.nav>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2 text-slate-500 hover:text-slate-300 transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-6 border-t border-cyan-500/10 text-center"
        >
          <p className="text-xs font-mono text-slate-600">
            © {new Date().getFullYear()} {siteConfig.name}. All systems operational.
          </p>
          <p className="text-[10px] font-mono text-slate-700 mt-2">
            Built with curiosity, code, and a passion for discovery.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
