"use client";

import React from 'react';
import { TrendingUp, ShieldCheck, Zap, LineChart, Coins } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Internal icon helper
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const paths = [
  {
    title: "Step 1: Financial Foundation",
    desc: "Clear high-interest debt and build an emergency fund covering 6 months of expenses.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Step 2: Protection",
    desc: "Secure your future with adequate health and term insurance to protect your wealth from shocks.",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    title: "Step 3: Systematic Growth",
    desc: "Start SIPs in diversified mutual funds or index funds to benefit from compounding.",
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50"
  },
  {
    title: "Step 4: Diversification",
    desc: "Expand into Gold, Real Estate (REITs), and Global markets to balance your portfolio.",
    icon: <GlobeIcon className="w-6 h-6 text-orange-600" />,
    color: "bg-orange-50"
  }
];

const Roadmap = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
          <Coins className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">The 4-Step Wealth Path</h2>
      </div>
      <p className="text-lg text-slate-600">
        Wealth isn't built overnight. It's a journey of discipline, patience, and smart decisions.
      </p>
      <div className="grid gap-6">
        {paths.map((path, i) => (
          <Card key={i} className="border-none shadow-lg overflow-hidden flex flex-col md:flex-row items-center group">
            <div className={`p-8 ${path.color} flex items-center justify-center self-stretch transition-colors`}>
              {path.icon}
            </div>
            <CardContent className="p-8 flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{path.title}</h3>
              <p className="text-slate-600">{path.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;