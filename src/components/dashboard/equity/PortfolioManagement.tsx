"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, TrendingUp, Scale, ShieldCheck, Target, Zap, RefreshCcw, Calculator } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const PortfolioManagement = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <PieChart className="w-4 h-4" />
            <span>Active Management</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Portfolio Management & Risk
          </h2>
          <p className="text-indigo-50 text-lg max-w-xl">
            Building wealth is 20% stock picking and 80% portfolio management. Learn how to structure your holdings to maximize returns and minimize permanent loss.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Core Concepts */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-indigo-600" /> Position Sizing
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader><CardTitle className="text-lg">The 5% Rule (Max)</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>Never allocate more than 5% of your total portfolio value to a single stock, especially if you are a beginner or intermediate investor.</p>
              <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-800 uppercase">Why?</p>
                <p className="text-xs text-indigo-700">Limits the impact of a single stock failure. If a 5% position goes to zero, your total portfolio loss is only 5%.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader><CardTitle className="text-lg">The 15-20 Stock Limit</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>Holding too many stocks (over 20) leads to 'diworsification'—you dilute your best ideas and can't track them effectively.</p>
              <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-800 uppercase">Focus</p>
                <p className="text-xs text-indigo-700">Concentrate your capital in your 10-15 highest conviction, high-quality ideas.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rebalancing */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <RefreshCcw className="w-6 h-6 text-emerald-600" /> Portfolio Rebalancing
        </h3>
        <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
          <CardContent className="pt-6 space-y-4">
            <p className="text-emerald-800 leading-relaxed">
              Rebalancing means periodically adjusting your portfolio back to your original target asset allocation (e.g., 60% Equity / 40% Debt).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-emerald-100">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600" /> Why Rebalance?
                </h4>
                <p className="text-xs text-slate-600 mt-1">It forces you to **sell high** (trimming winners) and **buy low** (adding to underperforming assets), automatically managing risk.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-emerald-100">
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-emerald-600" /> When to Rebalance?
                </h4>
                <p className="text-xs text-slate-600 mt-1">Either **Time-based** (e.g., every 6 or 12 months) or **Threshold-based** (when an asset class deviates by 5-10%).</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Risk Management */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-red-600" /> Risk Management Essentials
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-red-200 bg-red-50/50 shadow-sm">
            <CardHeader><CardTitle className="text-lg text-red-800">Stop-Loss (The Exit Plan)</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p>A pre-determined price point where you automatically sell a stock to limit losses. Essential for traders, optional but wise for long-term investors.</p>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50/50 shadow-sm">
            <CardHeader><CardTitle className="text-lg text-red-800">Cash Allocation</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p>Always hold 5-15% of your portfolio in cash or liquid funds. This "dry powder" allows you to capitalize on market crashes without selling other assets.</p>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50/50 shadow-sm">
            <CardHeader><CardTitle className="text-lg text-red-800">Avoid Leverage</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-600">
              <p>Never borrow money (margin trading) to buy stocks. Leverage magnifies gains but can lead to catastrophic, permanent losses during downturns.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PortfolioManagement;