"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flag } from 'lucide-react';

const RedFlags = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-rose-600 to-red-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Red Flags in Mutual Funds</h2>
        <p className="text-rose-50 text-lg mt-4">Warning signs to watch out for</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><Flag className="w-6 h-6 text-red-600" />Warning Signs</CardTitle></CardHeader><CardContent><div className="space-y-3"><div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600"><p className="font-semibold text-red-900 mb-1">🚩 Frequent Fund Manager Changes</p><p className="text-sm text-slate-700">Indicates instability or poor management</p></div><div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600"><p className="font-semibold text-red-900 mb-1">🚩 Consistently High Expense Ratio</p><p className="text-sm text-slate-700">Eating into your returns year after year</p></div><div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600"><p className="font-semibold text-red-900 mb-1">🚩 3+ Years of Underperformance</p><p className="text-sm text-slate-700">Losing to benchmark and peers consistently</p></div><div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600"><p className="font-semibold text-red-900 mb-1">🚩 Sudden Strategy Change</p><p className="text-sm text-slate-700">Fund deviating from stated investment mandate</p></div><div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600"><p className="font-semibold text-red-900 mb-1">🚩 Very High Concentration</p><p className="text-sm text-slate-700">Top 10 holdings exceeding 50-60% of portfolio</p></div></div></CardContent></Card>
    </div>
  );
};
export default RedFlags;
