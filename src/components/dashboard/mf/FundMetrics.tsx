"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, Percent, TrendingUp, Scale, Info, Zap } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

// Helper for class merging
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const FundMetrics = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Calculator className="w-4 h-4" />
            <span>The Numbers Game</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Fund Metrics: How to Compare Funds
          </h2>
          <p className="text-blue-50 text-lg max-w-xl">
            Don't choose a fund based only on past returns. Use these key metrics to understand risk, cost, and manager skill.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Core Metrics: NAV and Expense Ratio */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Info className="w-5 h-5 text-blue-600" /> Net Asset Value (NAV)
            </CardTitle>
            <CardDescription>The price of one unit of the mutual fund.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              NAV is calculated daily by dividing the total value of the fund's assets (minus liabilities) by the number of outstanding units.
            </p>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-xs font-bold text-blue-800 uppercase mb-1">Key Insight</p>
              <p className="text-xs text-blue-700">A lower NAV does NOT mean the fund is cheaper or better. Focus on the percentage change in NAV (returns), not the absolute value.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Percent className="w-5 h-5 text-red-600" /> Expense Ratio (ER)
            </CardTitle>
            <CardDescription>The annual fee charged by the fund house to manage the fund.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Expressed as a percentage of the fund's total assets. This fee is deducted daily from the NAV.
            </p>
            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-xs font-bold text-red-800 uppercase mb-1">Actionable Tip</p>
              <p className="text-xs text-red-700">Always choose Direct Plans over Regular Plans, as Direct Plans have a significantly lower Expense Ratio (ER) because they cut out distributor commissions.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Ratios */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-600" /> Advanced Performance Ratios
        </h3>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Ratio</TableHead>
                <TableHead>What it Measures</TableHead>
                <TableHead>Interpretation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold text-emerald-700">Alpha</TableCell>
                <TableCell>Fund Manager's Skill</TableCell>
                <TableCell>Measures the fund's excess return compared to its benchmark. Positive Alpha means the manager added value.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-blue-700">Beta</TableCell>
                <TableCell>Market Sensitivity</TableCell>
                <TableCell>Measures volatility relative to the market. Beta &gt; 1 means the fund is more volatile than the market (higher risk).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-purple-700">Sharpe Ratio</TableCell>
                <TableCell>Risk-Adjusted Return</TableCell>
                <TableCell>Measures return per unit of risk taken. A higher Sharpe Ratio is always better.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold text-orange-700">Standard Deviation</TableCell>
                <TableCell>Total Volatility</TableCell>
                <TableCell>Measures how much the fund's returns deviate from its average return. Higher SD means higher risk.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Final Tip */}
      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-xl font-bold flex items-center gap-3">
          <Zap className="w-6 h-6 text-amber-400" /> The Golden Rule of Selection
        </h4>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Focus on funds with a consistently high <strong>Sharpe Ratio</strong> and positive <strong>Alpha</strong> over a 5-year period. This indicates the fund manager is generating returns efficiently without taking excessive risk.
        </p>
      </div>
    </div>
  );
};

export default FundMetrics;