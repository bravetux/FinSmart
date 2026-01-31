"use client";

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BuildWealthSidebar from '@/components/BuildWealthSidebar';
import Roadmap from '@/components/buildwealth/Roadmap';
import Milestones from '@/components/buildwealth/Milestones';
import PPP from '@/components/buildwealth/PPP';
import Mindset from '@/components/buildwealth/Mindset';
import Wisdom from '@/components/buildwealth/Wisdom';
import RealEstate from '@/components/buildwealth/RealEstate'; // New component

const sectionComponents: { [key: string]: React.FC } = {
  roadmap: Roadmap,
  milestones: Milestones,
  ppp: PPP,
  mindset: Mindset,
  wisdom: Wisdom,
  realestate: RealEstate,
};

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine initial section from URL hash, default to 'roadmap'
  const initialSection = location.hash.substring(1) || 'roadmap';
  const [currentSection, setCurrentSection] = useState(initialSection);

  useEffect(() => {
    // Update URL hash when section changes
    navigate(`#${currentSection}`, { replace: true });
  }, [currentSection, navigate]);

  const handleSectionChange = (sectionId: string) => {
    setCurrentSection(sectionId);
  };

  const CurrentComponent = sectionComponents[currentSection] || Roadmap;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <BuildWealthSidebar 
        currentSection={currentSection} 
        onSectionChange={handleSectionChange} 
      />
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <CurrentComponent />
        </div>
      </main>
    </div>
  );
};

export default Index;