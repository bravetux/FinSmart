"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Scale } from 'lucide-react';

const HybridFunds = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Card className="min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-white border-dashed border-2">
        <div className="bg-slate-100 p-4 rounded-full mb-4">
          <Scale className="w-8 h-8 text-slate-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Hybrid Funds</h3>
        <p className="text-slate-500 max-w-sm">
          Content on Hybrid Funds (e.g., Balanced Advantage, Aggressive Hybrid) is coming soon!
        </p>
      </Card>
    </div>
  );
};

export default HybridFunds;