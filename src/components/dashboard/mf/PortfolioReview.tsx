"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck } from 'lucide-react';

const PortfolioReview = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Portfolio Review</h2>
        <p className="text-purple-50 text-lg mt-4">Regular health check for your investments</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><ClipboardCheck className="w-6 h-6 text-purple-600" />Why Review Regularly?</CardTitle></CardHeader><CardContent className="space-y-4"><p className="text-slate-700">Review your mutual fund portfolio every 6-12 months to ensure it aligns with your goals.</p><div className="space-y-2 text-sm"><h4 className="font-semibold">What to Check:</h4><ul className="space-y-1 text-slate-700"><li>• Fund performance vs benchmark</li><li>• Expense ratio changes</li><li>• Fund manager changes</li><li>• Portfolio overlap across funds</li><li>• Goal progress tracking</li><li>• Underperforming funds (exit if needed)</li></ul></div></CardContent></Card>
    </div>
  );
};
export default PortfolioReview;
