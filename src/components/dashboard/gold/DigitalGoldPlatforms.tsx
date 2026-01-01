"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Smartphone, Lock, AlertTriangle, Percent, ArrowRight } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const DigitalGoldPlatforms = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-purple-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Smartphone className="w-4 h-4" />
            <span>Commercial Platforms</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Digital Gold: UPI Apps & Wallets
          </h2>
          <p className="text-purple-50 text-lg max-w-xl">
            Buy gold instantly through apps like PhonePe, Paytm, and Google Pay. Convenient, but comes with unique risks.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Zap className="w-5 h-5 text-purple-600" /> How it Works
            </CardTitle>
            <CardDescription>Instant purchase and storage in digital vaults.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <p>You buy gold in small denominations (as low as {currency.symbol}1) from a platform that partners with a gold provider (e.g., MMTC-PAMP or Augmont).</p>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
              <Lock className="w-5 h-5 text-purple-600 shrink-0" />
              <p className="text-xs text-purple-800">The gold is stored in a secure vault on your behalf, and you receive a digital certificate.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/50 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="w-5 h-5" /> Key Risks & Warnings
            </CardTitle>
            <CardDescription className="text-red-700">Important differences from ETFs and SGBs.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-red-800">
            <p>• **Regulatory Gap:** Digital gold is NOT regulated by SEBI or RBI, unlike ETFs and SGBs.</p>
            <p>• **Storage Fees:** Providers may charge storage fees after a certain period (e.g., 5 years).</p>
            <p>• **Spread:** The difference between the buy and sell price is often higher than in ETFs, reducing your profit.</p>
            <p>• **Maximum Limit:** Some platforms impose a maximum investment limit (e.g., {currency.symbol}2 Lakhs).</p>
          </CardContent>
        </Card>
      </div>

      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-xl font-bold flex items-center gap-3">
          <Percent className="w-6 h-6 text-amber-400" /> Taxation
        </h4>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Digital gold is taxed exactly like Physical Gold and Gold ETFs (LTCG after 3 years with indexation; STCG as per slab). However, GST (3%) is applied at the time of purchase.
        </p>
      </div>
    </div>
  );
};

export default DigitalGoldPlatforms;