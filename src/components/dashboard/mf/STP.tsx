"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightLeft, ShieldCheck, TrendingUp } from 'lucide-react';

const STP = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-3xl font-bold text-center">Systematic Transfer Plan (STP)</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-12">
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 text-center">
          <ShieldCheck className="text-slate-600 mx-auto mb-2" />
          <h4 className="font-bold">Debt Fund</h4>
          <p className="text-sm text-slate-500">Source (Safe)</p>
        </div>
        <ArrowRightLeft className="w-8 h-8 text-slate-300" />
        <div className="p-6 bg-white rounded-2xl shadow-lg border-2 border-blue-100 text-center">
          <TrendingUp className="text-blue-600 mx-auto mb-2" />
          <h4 className="font-bold">Equity Fund</h4>
          <p className="text-sm text-slate-500">Target (Growth)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader><CardTitle>Why use STP?</CardTitle></CardHeader>
          <CardContent>
            <p className="text-slate-600 text-sm">Transfer small amounts from debt to equity to catch market opportunities without timing the market.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default STP;