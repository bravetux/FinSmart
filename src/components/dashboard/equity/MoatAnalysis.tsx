"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldCheck, TrendingUp, Calculator, Layers, Zap, ArrowRight } from 'lucide-react';

const MoatAnalysis = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Moat Analysis: Finding Durable Advantages
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            An economic moat is a structural feature that allows a firm to sustain competitive advantages over its competitors, thereby protecting its long-term profits.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-blue-600" /> Financial Parameters to Identify Moats
        </h3>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Metric</TableHead>
                <TableHead>What it Measures</TableHead>
                <TableHead>Moat Indication</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold text-blue-700">RoIC</TableCell>
                <TableCell>Return on Invested Capital</TableCell>
                <TableCell>Consistently high RoIC (above cost of capital) indicates a strong moat.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-emerald-700">PAT Margin</TableCell>
                <TableCell>Profit After Tax Margin</TableCell>
                <TableCell>High and stable margins suggest pricing power and cost efficiency.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-purple-700">Asset Turnover</TableCell>
                <TableCell>Revenue generated per unit of assets</TableCell>
                <TableCell>High turnover indicates efficient use of assets, often seen in capital-light businesses.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-orange-700">FCF Yield</TableCell>
                <TableCell>Free Cash Flow Yield</TableCell>
                <TableCell>High FCF relative to market cap means the company generates plenty of cash after expenses.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-6 h-6 text-purple-600" /> The DuPont Analysis Framework
        </h3>
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="pt-6 space-y-4">
            <p className="text-purple-800 leading-relaxed">
              DuPont Analysis breaks down Return on Equity (ROE) into three components: Profit Margin, Asset Turnover, and Financial Leverage. Moat companies typically achieve high ROE through high margins or high asset turnover, rather than relying heavily on debt (leverage).
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white rounded-xl border border-purple-100">
                <p className="font-bold text-lg text-slate-900">Margin</p>
                <p className="text-xs text-slate-500">PAT Margin</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-purple-100">
                <p className="font-bold text-lg text-slate-900">Turnover</p>
                <p className="text-xs text-slate-500">Asset Turnover</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-purple-100">
                <p className="font-bold text-lg text-slate-900">Return</p>
                <p className="text-xs text-slate-500">ROA / ROE / RoIC</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-xl font-bold flex items-center gap-3">
          <Zap className="w-6 h-6 text-amber-400" /> The Moat Test
        </h4>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          A company with a true moat should be able to maintain high RoIC and margins even when competitors try to enter its market. Look for consistency over 5-10 years.
        </p>
      </div>
    </div>
  );
};

export default MoatAnalysis;