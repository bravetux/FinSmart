"use client";

import React, { useState } from 'react';
import BuildWealthSidebar from '@/components/BuildWealthSidebar';
import Roadmap from '@/components/buildwealth/Roadmap';
import Milestones from '@/components/buildwealth/Milestones';
import PPP from '@/components/buildwealth/PPP';
import Mindset from '@/components/buildwealth/Mindset';
import Wisdom from '@/components/buildwealth/Wisdom';
import RealEstate from '@/components/buildwealth/RealEstate';

const sectionComponents: { [key: string]: React.FC } = {
  roadmap: Roadmap,
  milestones: Milestones,
  realestate: RealEstate,
  ppp: PPP,
  mindset: Mindset,
  wisdom: Wisdom,
};

const BuildWealthPage = () => {
  const [currentSection, setCurrentSection] = useState('roadmap');
  const CurrentComponent = sectionComponents[currentSection] || Roadmap;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <BuildWealthSidebar 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection} 
      />
      <main className="flex-1 p-6 md:p-10 lg:p-12">
        <CurrentComponent />
      </main>
    </div>
  );
};

export default BuildWealthPage;