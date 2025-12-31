"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, ShieldCheck, Zap, TrendingUp, AlertCircle, FileText } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const GoldOverview = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-amber-600 text-white p-8 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Gem className="w-12 h-12 text-amber-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Gold: The Eternal Asset</h2>
          <p className="text-lg text-amber-100 max-w-2xl">
            A safe haven in times of uncertainty. Gold provides high liquidity and acts as a powerful hedge against inflation.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-amber-100 bg-amber-50/30">
          <CardHeader>
            <ShieldCheck className="w-8 h-8 text-amber-600 mb-2" />
            <CardTitle className="text-lg">Inflation Hedge</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Gold returns historically move in line with inflation, preserving your purchasing power over decades.</p>
          </CardContent>
        </Card>
        <Card className="border-blue-100 bg-blue-50/30">
          <CardHeader>
            <Zap className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle className="text-lg">High Liquidity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Gold is universally recognized and can be converted to cash quickly.</p>
          </CardContent>
        </Card>
        <Card className="border-emerald-100 bg-emerald-50/30">
          <CardHeader>
            <TrendingUp className="w-8 h-8 text-emerald-600 mb-2" />
            <CardTitle className="text-lg">Crisis Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">When stock markets fall, gold often rises or stays stable, acting as a portfolio insurance policy.</p>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Ways to Own Gold</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Physical", icon: <Gem />, desc: "Jewelry, coins, and bars. Tangible but involves storage risks." },
            { title: "Gold ETF", icon: <Zap />, desc: "Paper gold tracking market prices. High liquidity, no storage hassle." },
            { title: "Sovereign Bonds", icon: <FileText />, desc: "Govt issued bonds. Earns 2.5% interest + gold price appreciation. Redemtion maturity after 8 years, Premature redemption is after 5 years. This bond is no longer issued." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col items-center text-center space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Card className="border-dashed border-2 bg-slate-50">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-slate-400" />
            <CardTitle className="text-lg">Required Documents (KYC)</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h5 className="font-bold text-sm text-slate-700">Physical Gold (&gt; {currency.symbol}2 Lakhs)</h5>
            <p className="text-xs text-slate-500">Requires PAN Card for large purchases.</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-bold text-sm text-slate-700">Digital / ETFs / SGB</h5>
            <p className="text-xs text-slate-500">Aadhar, PAN, Voter ID, or Passport. Requires Demat account for ETFs.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoldOverview;