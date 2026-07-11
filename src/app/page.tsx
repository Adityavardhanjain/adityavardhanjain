'use client';

import { Navigation, CommandCenter, ResearcherProfile, MissionArchive, ResearchLab, SystemsMatrix, MissionTimeline, TransmissionCenter, Footer } from '@/components';

export default function Home() {
  return (
    <>
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
