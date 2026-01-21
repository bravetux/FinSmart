"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from 'lucide-react';

const TaxOptimization = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Tax Optimization Strategies</h2>
        <p className="text-indigo-50 text-lg mt-4">Maximize post-tax returns from mutual funds</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><TrendingUp className="w-6 h-6 text-indigo-600" />Smart Tax Strategies</CardTitle></CardHeader><CardContent><div className="space-y-4 text-sm"><div className="p-4 bg-blue-50 rounded-lg"><h4 className="font-semibold mb-2">1. Hold for Long Term</h4><p className="text-slate-700">Equity funds: Hold 1+ year for 12.5% LTCG (vs 20% STCG)<br/>Debt funds: All gains taxed as per slab now</p></div><div className="p-4 bg-green-50 rounded-lg"><h4 className="font-semibold mb-2">2. Use ₹1.25L LTCG Exemption</h4><p className="text-slate-700">Equity LTCG up to ₹1.25 lakh per year is tax-free. Harvest gains strategically.</p></div><div className="p-4 bg-purple-50 rounded-lg"><h4 className="font-semibold mb-2">3. Growth Over Dividend</h4><p className="text-slate-700">Growth option is more tax-efficient than dividend option in most cases.</p></div><div className="p-4 bg-amber-50 rounded-lg"><h4 className="font-semibold mb-2">4. Tax Loss Harvesting</h4><p className="text-slate-700">Sell loss-making funds to offset capital gains and reduce tax.</p></div></div></CardContent></Card>
    </div>
  );
};
export default TaxOptimization;
