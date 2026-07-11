'use client';

import { motion } from 'framer-motion';

export default function ResearcherProfile() {
  return (
    <section id="about" className="py-20 px-6 bg-[#13161d]">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <p className="text-sm text-gray-500 mb-2">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
              Building intelligent systems at the intersection of AI, data, and human cognition.
            </h2>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I am an AI and Machine Learning engineer, data analyst, and research enthusiast 
                interested in building intelligent systems that connect advanced computation with 
                meaningful real-world applications.
              </p>
              <p>
                My work spans machine learning, computer vision, natural language processing, 
                generative AI, data analytics, and brain-computer interfaces. I enjoy working 
                on ambitious interdisciplinary problems—from decoding neural activity and predicting 
                outcomes using EEG signals to developing computer-vision systems for infrastructure 
                monitoring.
              </p>
              <p>
                My long-term interests include artificial intelligence research, world models, 
                intelligent agents, computational neuroscience, and space technology.
              </p>
            </div>
            
            {/* Interest Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['AI Research', 'Machine Learning', 'Computer Vision', 'Brain-Computer Interfaces', 'NLP', 'Data Science'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm text-gray-400 bg-gray-800/50 border border-gray-700/50 rounded-full hover:border-gray-600 hover:text-gray-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#151921] border border-white/5 rounded-xl p-6">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">AJ</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100">Adityavardhan Jain</h3>
                  <p className="text-sm text-gray-500">AI/ML Engineer</p>
                </div>
              </div>
              
              {/* Details */}
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-sm text-gray-500">Location</span>
                  <span className="text-sm text-gray-300">Hyderabad, India</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-sm text-gray-500">Education</span>
                  <span className="text-sm text-gray-300">Computer Science</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-sm text-gray-500">Focus</span>
                  <span className="text-sm text-blue-400">BCI & AI Systems</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-sm text-gray-500">Status</span>
                  <span className="flex items-center gap-2 text-sm text-emerald-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
