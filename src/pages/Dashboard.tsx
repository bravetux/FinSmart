"use client";

import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowUpRight, LineChart } from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('mutual-funds');

  const getSectionTitle = (id: string) => {
    const titles: Record<string, string> = {
      'mutual-funds': 'Mutual Funds',
      'equity': 'Equity Markets',
      'gold': 'Gold Investment',
      'real-estate': 'Real Estate',
      'bonds': 'Bond Markets',
      'pms': 'Portfolio Management Services (PMS)',
      'aif': 'Alternative Investment Funds (AIF)',
      'sif': 'Specialized Investment Funds (SIF)',
      'bitcoin': 'Bitcoin & Crypto Assets',
      'overseas': 'Overseas Investment'
    };
    return titles[id] || 'Dashboard';
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <DashboardSidebar currentSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{getSectionTitle(activeSection)}</h1>
            <p className="text-slate-500 mt-1">Track and manage your {activeSection.replace('-', ' ')} portfolio.</p>
          </div>
          <Button className="gap-2">
            Explore {getSectionTitle(activeSection)} <ArrowUpRight className="w-4 h-4" />
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Value</CardDescription>
              <CardTitle className="text-2xl">$12,450.00</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-emerald-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-1" /> +2.4% this month
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Average Yield</CardDescription>
              <CardTitle className="text-2xl">8.2%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-slate-400 text-sm italic">Estimated annual return</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Risk Profile</CardDescription>
              <CardTitle className="text-2xl">Moderate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-1">
                <div className="bg-orange-500 h-full w-[60%] rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white border-dashed border-2">
            <div className="bg-slate-50 p-4 rounded-full mb-4">
              <LineChart className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No active investments found</h3>
            <p className="text-slate-500 max-w-sm mb-6">
              You haven't added any {getSectionTitle(activeSection)} to your tracker yet. Start by exploring our top-rated options.
            </p>
            <Button variant="outline">Learn the Basics</Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;