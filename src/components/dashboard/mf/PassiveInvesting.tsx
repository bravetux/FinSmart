"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, Zap, Scale, ShieldCheck, Percent, BarChart3, Info } from 'lucide-react';

// Helper for class merging
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const PassiveInvesting = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Scale className="w-4 h-4" />
            <span>Low Cost, High Efficiency</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Passive Investing: Index Funds & ETFs
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Why pay a fund manager when you can simply track the market? Passive funds aim to match the market return at minimal cost.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Active vs Passive Comparison */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Active vs. Passive: The Core Difference</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-100 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Active Management</CardTitle>
              <CardDescription className="text-blue-700">Aims to beat the market (generate Alpha).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600">
              <p>• Requires high research and manager skill.</p>
              <p>• High Expense Ratio (1.5% - 2.5%).</p>
              <p>• High risk of underperforming the benchmark.</p>
            </CardContent>
          </Card>
          <Card className="border-emerald-100 bg-emerald-50/50">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-800">Passive Management</CardTitle>
              <CardDescription className="text-emerald-700">Aims to match the market (zero Alpha).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600">
              <p>• Requires minimal management intervention.</p>
              <p>• Very Low Expense Ratio (0.1% - 0.5%).</p>
              <p>• Guaranteed to perform exactly like the index.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Index Funds vs ETFs */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Index Funds vs. ETFs</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-purple-600" /> Index Funds
              </CardTitle>
              <CardDescription>A type of mutual fund that tracks a specific index (e.g., Nifty 50).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>• Purchased at the end-of-day NAV.</p>
              <p>• No Demat account required (if bought directly from AMC).</p>
              <p>• Best for long-term SIP investors who don't need daily trading flexibility.</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-600" /> Exchange Traded Funds (ETFs)
              </CardTitle>
              <CardDescription>Traded like stocks on the exchange throughout the day.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>• Requires a Demat account to buy and sell.</p>
              <p>• Can be traded instantly at real-time prices.</p>
              <p>• Best for investors who want to trade frequently or deploy large sums instantly.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Passive Metrics */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Key Passive Metrics</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 space-y-2">
            <h4 className="font-bold text-blue-900 flex items-center gap-2">
              <Percent className="w-5 h-5 text-blue-600" /> Tracking Error
            </h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              Measures how closely the fund's returns match the index it tracks. A lower tracking error (ideally &lt; 0.5%) is better, indicating high efficiency.
            </p>
          </div>
          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-2">
            <h4 className="font-bold text-amber-400 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" /> The Long-Term Winner
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Over 10+ years, most actively managed funds fail to beat their passive benchmarks after accounting for the higher expense ratio. Passive funds are often the simplest and most reliable long-term choice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PassiveInvesting;