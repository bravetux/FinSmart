"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from 'lucide-react';

const ExitStrategy = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Exit Strategy</h2>
        <p className="text-red-50 text-lg mt-4">When and how to exit mutual funds</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><LogOut className="w-6 h-6 text-red-600" />When to Exit a Fund?</CardTitle></CardHeader><CardContent className="space-y-3 text-sm"><div className="p-4 bg-red-50 rounded-lg border border-red-200"><h4 className="font-semibold text-red-900 mb-2">Valid Reasons to Exit:</h4><ul className="space-y-1 text-slate-700"><li>• Consistent underperformance (3+ years)</li><li>• Fund manager change</li><li>• Change in investment strategy</li><li>• Goal achieved</li><li>• Better alternatives available</li></ul></div><div className="p-4 bg-green-50 rounded-lg border border-green-200"><h4 className="font-semibold text-green-900 mb-2">Bad Reasons to Exit:</h4><ul className="space-y-1 text-slate-700"><li>• Short-term underperformance (1 year)</li><li>• Market crash (stay invested!)</li><li>• Chasing better returns elsewhere</li></ul></div></CardContent></Card>
    </div>
  );
};
export default ExitStrategy;
