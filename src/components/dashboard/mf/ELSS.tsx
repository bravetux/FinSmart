"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank } from 'lucide-react';

const ELSS = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">ELSS - Tax Saving Mutual Funds</h2>
        <p className="text-green-50 text-lg mt-4">Save tax under Section 80C while growing wealth</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><PiggyBank className="w-6 h-6 text-green-600" />What is ELSS?</CardTitle></CardHeader><CardContent className="space-y-4"><p className="text-slate-700">Equity Linked Savings Scheme (ELSS) are mutual funds that offer tax deduction up to ₹1.5 lakh under Section 80C.</p><div className="grid md:grid-cols-2 gap-6"><div className="p-5 bg-green-50 rounded-xl"><h4 className="font-semibold text-green-900 mb-2">Benefits:</h4><ul className="space-y-1 text-sm text-slate-700"><li>• Tax deduction up to ₹1.5L</li><li>• Shortest lock-in (3 years)</li><li>• Equity exposure for growth</li><li>• Better than FD, PPF, NSC</li></ul></div><div className="p-5 bg-amber-50 rounded-xl"><h4 className="font-semibold text-amber-900 mb-2">Things to Note:</h4><ul className="space-y-1 text-sm text-slate-700"><li>• 3-year lock-in mandatory</li><li>• LTCG tax applicable on exit</li><li>• Market-linked returns (risky)</li><li>• Invest only spare money</li></ul></div></div></CardContent></Card>
    </div>
  );
};
export default ELSS;
