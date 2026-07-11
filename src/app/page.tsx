'use client';

import dynamic from 'next/dynamic';
import { Navigation, CommandCenter, ResearcherProfile, MissionArchive, ResearchLab, SystemsMatrix, MissionTimeline, TransmissionCenter, Footer } from '@/components';

// Dynamic import for StarField to avoid SSR issues
const StarField = dynamic(() => import('@/components/StarField'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#07090f]" />,
});

export default function Home() {
  return (
    <>
      {/* Star Field Background */}
      <StarField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
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
