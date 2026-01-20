"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Scale, ShieldCheck, TrendingUp, TrendingDown, AlertTriangle, Calculator, ArrowRightLeft } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const Derivatives = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-red-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>High Risk, High Reward</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Futures & Options (F&O) Basics
          </h2>
          <p className="text-red-50 text-lg max-w-xl">
            Derivatives are financial contracts whose value is derived from an underlying asset (like a stock or index). They are primarily used for hedging risk or high-leverage speculation.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Critical Warning */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] flex items-start gap-6 shadow-lg">
        <AlertTriangle className="w-8 h-8 text-red-400 shrink-0 mt-1" />
        <div className="space-y-2">
          <h4 className="text-xl font-bold">The SEBI Warning</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            **9 out of 10 individual traders in the F&O segment incur net losses.** Derivatives are complex, require deep market knowledge, and should only be approached with risk capital you can afford to lose entirely.
          </p>
        </div>
      </div>

      {/* Futures vs Options */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <ArrowRightLeft className="w-6 h-6 text-blue-600" /> Futures vs. Options
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50/50 shadow-sm">
            <CardHeader><CardTitle className="text-lg text-blue-800">Futures Contract</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>An agreement to buy or sell an asset at a predetermined price on a specified future date.</p>
              <ul className="list-disc ml-5 space-y-1 text-xs">
                <li>**Obligation:** Both parties are obligated to fulfill the contract.</li>
                <li>**Risk:** Unlimited loss potential.</li>
                <li>**Use:** Primarily for hedging or directional bets.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-sm">
            <CardHeader><CardTitle className="text-lg text-emerald-800">Options Contract</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>Gives the buyer the **right**, but not the obligation, to buy (Call) or sell (Put) an asset at a set price.</p>
              <ul className="list-disc ml-5 space-y-1 text-xs">
                <li>**Obligation:** Only the seller (writer) is obligated.</li>
                <li>**Risk (Buyer):** Limited to the premium paid.</li>
                <li>**Use:** Highly versatile for hedging, income generation, or speculation.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Jargon */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-purple-600" /> Essential F&O Jargon
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader><CardTitle className="text-lg">Lot Size</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p>Derivatives are traded in fixed quantities (lots). You cannot buy a single share/unit; you must buy a minimum lot size (e.g., 50 shares).</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader><CardTitle className="text-lg">Margin</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p>The collateral required to open a Futures position. Since you don't pay the full contract value, this leverage magnifies both gains and losses.</p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader><CardTitle className="text-lg">Premium (Options)</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p>The price paid by the buyer to the seller for the right to exercise the option. This is the maximum loss for the buyer.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 text-center">
        <h4 className="text-xl font-bold text-blue-900 mb-4">The Investor's Approach</h4>
        <p className="text-sm text-blue-800 leading-relaxed max-w-2xl mx-auto">
          For long-term wealth creation, focus on **Equity (Cash Segment)**. Derivatives are tools for experienced traders and institutions to manage risk, not for beginners to chase quick profits.
        </p>
      </div>
    </div>
  );
};

export default Derivatives;