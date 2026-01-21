"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from 'lucide-react';

const CommonMistakes = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-red-600 to-rose-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Common Mutual Fund Mistakes</h2>
        <p className="text-red-50 text-lg mt-4">Learn from others' errors and avoid these pitfalls</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-red-600" />Top 10 Mistakes to Avoid</CardTitle></CardHeader><CardContent><div className="space-y-3 text-sm text-slate-700"><p>1. <strong>Chasing past returns:</strong> Last year's winner often becomes next year's loser</p><p>2. <strong>Investing in too many funds:</strong> Over-diversification dilutes returns</p><p>3. <strong>Choosing regular over direct:</strong> Losing 1% annually to commissions</p><p>4. <strong>Stopping SIP during market crash:</strong> Missing the best buying opportunity</p><p>5. <strong>Not having clear goals:</strong> Investing without purpose</p><p>6. <strong>Panic selling:</strong> Exiting during temporary market downturns</p><p>7. <strong>Ignoring expense ratio:</strong> High costs eat your returns</p><p>8. <strong>Investing in NFOs blindly:</strong> No track record to evaluate</p><p>9. <strong>Not reviewing portfolio:</strong> Holding underperformers forever</p><p>10. <strong>Timing the market:</strong> Trying to predict highs and lows</p></div></CardContent></Card>
    </div>
  );
};
export default CommonMistakes;
