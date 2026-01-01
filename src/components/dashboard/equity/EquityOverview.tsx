"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Building2, Landmark, ArrowRightLeft, Zap, ShieldCheck } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const EquityOverview = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <LineChart className="w-4 h-4" />
            <span>Ownership & Growth</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Stock Market Universe
          </h2>
          <p className="text-blue-100 text-lg max-w-xl">
            Equity represents ownership in a company. When you buy a stock, you become a part-owner (shareholder) and participate in the company's success.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Primary vs Secondary Market */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Primary Market
            </CardTitle>
            <CardDescription>Where securities are created.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <p>This is where a company issues new shares to the public for the first time through an <strong>IPO (Initial Public Offering)</strong>.</p>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-xs text-amber-800">
              The money from investors goes <strong>directly to the company</strong> to fund growth.
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-blue-500" /> Secondary Market
            </CardTitle>
            <CardDescription>Where investors trade existing shares.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <p>This is what most people mean by "the stock market." Investors buy and sell shares from <strong>each other</strong> on exchanges.</p>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-800">
              The company is <strong>not involved</strong> in these transactions; the price is determined by supply and demand.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Exchanges and Regulators */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Landmark className="w-6 h-6 text-indigo-600" /> The Ecosystem
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold">NSE</div>
            <h4 className="font-bold">National Stock Exchange</h4>
            <p className="text-xs text-slate-500">The largest exchange in India. Known for the <strong>Nifty 50</strong> index.</p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold">BSE</div>
            <h4 className="font-bold">Bombay Stock Exchange</h4>
            <p className="text-xs text-slate-500">The oldest exchange in Asia. Known for the <strong>Sensex</strong> index.</p>
          </div>
          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
            <ShieldCheck className="w-10 h-10 text-emerald-400" />
            <h4 className="font-bold">SEBI</h4>
            <p className="text-xs text-slate-400">The "Market Watchdog" that ensures rules are followed and investors are protected.</p>
          </div>
        </div>
      </section>

      {/* Why Equity? */}
      <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
        <h4 className="text-xl font-bold text-blue-900 mb-4">Why Invest in Equity?</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h5 className="font-bold text-blue-800 text-sm">Wealth Creation</h5>
            <p className="text-xs text-blue-700 leading-relaxed">Historically, equity has outperformed inflation and fixed-income assets over long periods (10+ years).</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-bold text-blue-800 text-sm">Dividends</h5>
            <p className="text-xs text-blue-700 leading-relaxed">Some companies share a part of their profits with shareholders through regular cash payouts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquityOverview;