"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Monitor, Smartphone, RefreshCw, BarChart3, TrendingUp, Info } from 'lucide-react';

const GoldETF = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-xl">
        <div className="bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Zap className="w-12 h-12 text-blue-100" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Gold ETFs & Funds</h2>
          <p className="text-lg text-blue-100 mt-2">The efficiency of paper gold. Track market prices without storage hassle.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>What are Gold ETFs?</CardTitle>
            <CardDescription>Exchange Traded Funds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>Similar to buying physical gold, but you don't actually hold the metal. One unit of ETF is usually equivalent to <strong>1 gram of gold</strong>.</p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
              <Monitor className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
              <p className="text-xs">Requires a Demat account and a brokerage firm.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>What are Gold Funds?</CardTitle>
            <CardDescription>Mutual Funds in Gold Sector</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>Gold funds primarily deal with investing in <strong>gold mining companies</strong> or underlying Gold ETFs.</p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
              <RefreshCw className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
              <p className="text-xs">Easy to set up automated monthly investments (SIPs).</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-600" />
          Why choose Paper Gold?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Smartphone />, label: "Trade Instantly", desc: "Buy/Sell on stock exchanges." },
            { icon: <TrendingUp />, label: "Low Entry", desc: "Start with as little as 1 unit." },
            { icon: <Zap />, label: "No Purity Risk", desc: "Guaranteed 24K purity." },
            { icon: <Monitor />, label: "Zero Making", desc: "No jewelry making charges." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h4 className="font-bold text-sm">{item.label}</h4>
              <p className="text-[10px] text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-amber-50 border border-amber-100 rounded-[2rem] p-8 flex items-start gap-6">
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <Info className="w-6 h-6 text-amber-600" />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-amber-900">Taxation Reminder</h4>
          <p className="text-sm text-amber-800 leading-relaxed">
            Gold ETFs are taxed as per your <strong>Income Tax Slab</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoldETF;