"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from 'lucide-react';

const RiskManagement = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-amber-600 to-yellow-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Risk Management in Mutual Funds</h2>
        <p className="text-amber-50 text-lg mt-4">Protect your capital while growing wealth</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><Shield className="w-6 h-6 text-amber-600" />Types of Risks</CardTitle></CardHeader><CardContent><div className="space-y-3 text-sm"><p><strong>Market Risk:</strong> Overall market decline affects equity funds</p><p><strong>Credit Risk:</strong> Default by bond issuers (debt funds)</p><p><strong>Interest Rate Risk:</strong> Rising rates reduce bond values</p><p><strong>Liquidity Risk:</strong> Unable to sell units quickly</p><p><strong>Concentration Risk:</strong> Too much in one sector/stock</p><div className="p-5 bg-amber-50 rounded-xl border border-amber-200 mt-4"><h4 className="font-semibold text-amber-900 mb-2">How to Manage Risk:</h4><ul className="space-y-1 text-slate-700"><li>• Diversify across asset classes</li><li>• Match investments to time horizon</li><li>• Avoid high-risk funds if you can't handle volatility</li><li>• Keep emergency fund separate</li><li>• Review and rebalance regularly</li></ul></div></div></CardContent></Card>
    </div>
  );
};
export default RiskManagement;
