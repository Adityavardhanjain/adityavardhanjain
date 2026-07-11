'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { 
  BootSequence, 
  Navigation, 
  CommandCenter, 
  ResearcherProfile, 
  MissionArchive, 
  ResearchLab, 
  SystemsMatrix, 
  MissionTimeline, 
  TransmissionCenter,
  Footer 
} from '@/components';

// Dynamic import for StarField to avoid SSR issues with Three.js
const StarFieldDynamic = dynamic(() => import('@/components/StarField'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#030810]" />,
});

export default function Home() {
  const [showBoot, setShowBoot] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBootComplete = () => {
    setShowBoot(false);
  };

  // Don't render boot sequence during SSR
  if (!isClient) {
    return (
      <div className="fixed inset-0 bg-[#030810] flex items-center justify-center">
        <div className="text-cyan-400 font-mono text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* Boot Sequence */}
      {showBoot && <BootSequence onComplete={handleBootComplete} />}
      
      {/* Space Background */}
      <StarFieldDynamic />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className={`relative z-10 ${showBoot ? 'invisible' : 'visible'}`}>
        {/* Command Center - Home */}
        <CommandCenter />
        
        {/* Researcher Profile - About */}
        <ResearcherProfile />
        
        {/* Mission Archive - Projects */}
        <MissionArchive />
        
        {/* Research Lab */}
        <ResearchLab />
        
        {/* Systems Matrix - Skills */}
        <SystemsMatrix />
        
        {/* Mission Timeline - Experience */}
        <MissionTimeline />
        
        {/* Transmission Center - Contact */}
        <TransmissionCenter />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}
