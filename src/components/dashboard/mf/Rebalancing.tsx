"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from 'lucide-react';

const Rebalancing = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Portfolio Rebalancing</h2>
        <p className="text-blue-50 text-lg mt-4">Maintaining your target asset allocation</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><RefreshCw className="w-6 h-6 text-blue-600" />What is Rebalancing?</CardTitle></CardHeader><CardContent className="space-y-4"><p className="text-slate-700">Over time, your portfolio's asset allocation drifts due to market movements. Rebalancing brings it back to target.</p><div className="p-5 bg-blue-50 rounded-xl"><h4 className="font-semibold mb-2">Example:</h4><p className="text-sm text-slate-700">Target: 70% Equity, 30% Debt<br/>After 1 year: 80% Equity (grew), 20% Debt<br/><strong>Action:</strong> Sell some equity, buy debt to restore 70:30</p></div><p className="text-sm text-slate-600 mt-4"><strong>When to rebalance?</strong> Once a year or when allocation drifts by 10%+</p></CardContent></Card>
    </div>
  );
};
export default Rebalancing;
