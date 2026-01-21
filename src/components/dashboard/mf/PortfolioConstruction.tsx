"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from 'lucide-react';

const PortfolioConstruction = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Portfolio Construction</h2>
        <p className="text-indigo-50 text-lg mt-4">Building a balanced mutual fund portfolio</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><Briefcase className="w-6 h-6 text-indigo-600" />Asset Allocation Strategy</CardTitle></CardHeader><CardContent className="space-y-4"><p className="text-slate-700">Build a diversified portfolio based on your age, goals, and risk appetite.</p><div className="p-5 bg-blue-50 rounded-xl"><h4 className="font-semibold mb-2">Sample Portfolios:</h4><div className="space-y-3 text-sm"><p><strong>Aggressive (Age: 20-35):</strong> 80% Equity + 20% Debt</p><p><strong>Moderate (Age: 35-50):</strong> 60% Equity + 40% Debt</p><p><strong>Conservative (Age: 50+):</strong> 40% Equity + 60% Debt</p></div></div></CardContent></Card>
    </div>
  );
};
export default PortfolioConstruction;
