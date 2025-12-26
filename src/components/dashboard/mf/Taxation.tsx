"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Scale, ReceiptText } from 'lucide-react';

const Taxation = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Mutual Fund Taxation</h2>
        <p className="text-lg text-slate-600">
          Let’s understand how mutual fund gains are taxed for equity, debt, and hybrid categories.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Equity Funds */}
        <Card className="border-emerald-200 bg-emerald-50/50 h-full">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              <CardTitle className="text-xl text-emerald-800">Equity Funds</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-700 flex items-center gap-2">
                Short-Term Capital Gain (STCG) <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Holding &lt; 1 Year</Badge>
              </h4>
              <p className="text-sm text-slate-600">
                If you sell equity funds within one year, the profit is considered a short-term capital gain (STCG) and is taxed at 20%.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-700 flex items-center gap-2">
                Long-Term Capital Gain (LTCG) <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">Holding &gt; 1 Year</Badge>
              </h4>
              <p className="text-sm text-slate-600">
                If you hold them for more than a year, the profit becomes a long-term capital gain (LTCG) and is taxed at 12.5% on gains exceeding Rs 1.25 lakh in a financial year.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Debt Funds */}
        <Card className="border-red-200 bg-red-50/50 h-full">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-red-600" />
              <CardTitle className="text-xl text-red-800">Debt Funds</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-red-100">
              <h4 className="font-semibold text-slate-700 mb-1">Taxation Rule</h4>
              <p className="text-sm text-slate-600">
                All capital gains from debt funds, either STCG or LTCG, are added to your total income and taxed according to your income tax slab.
              </p>
            </div>
            <p className="text-xs text-red-600 italic">
              This means the tax rate depends entirely on your personal income bracket.
            </p>
          </CardContent>
        </Card>

        {/* Hybrid Funds */}
        <Card className="border-blue-200 bg-blue-50/50 h-full">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <Scale className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl text-blue-800">Hybrid Funds</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-700">Equity Allocation ≥ 65%</h4>
              <p className="text-sm text-slate-600">
                If a hybrid fund has an equity allocation greater than equal to 65%, they are taxed like an equity fund.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-700">Equity Allocation &lt; 65%</h4>
              <p className="text-sm text-slate-600">
                If it is less than 65%, they are taxed like debt funds based on your income tax slab.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="p-6 bg-slate-100 rounded-xl border border-slate-200 flex items-start gap-4">
        <ReceiptText className="w-5 h-5 text-slate-500 mt-1 shrink-0" />
        <p className="text-sm text-slate-700">
          <span className="font-bold">Disclaimer:</span> Tax laws are subject to change. Always consult a qualified tax advisor for personalized advice based on your jurisdiction and specific financial situation.
        </p>
      </div>
    </div>
  );
};

export default Taxation;