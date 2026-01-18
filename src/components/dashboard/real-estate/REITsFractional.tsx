"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Scale, Zap, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const REITsFractional = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Scale className="w-4 h-4" />
            <span>Modern Investing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            REITs & Fractional Ownership
          </h2>
          <p className="text-blue-50 text-lg max-w-xl">
            Invest in high-value commercial properties without needing millions in capital.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* REITs Card */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Building2 className="w-5 h-5 text-emerald-600" /> Real Estate Investment Trusts (REITs)
            </CardTitle>
            <CardDescription>Invest in a portfolio of income-generating properties (like commercial offices or malls).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 space-y-2">
              <h4 className="font-bold text-emerald-900 flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4" /> Key Features
              </h4>
              <ul className="space-y-1 text-xs text-emerald-800">
                <li>• Traded on stock exchanges (High Liquidity).</li>
                <li>• Mandatory distribution of 90% of income to unitholders.</li>
                <li>• Minimum investment is low (around {currency.symbol}10,000 - {currency.symbol}50,000).</li>
              </ul>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <TrendingUp className="w-4 h-4 text-slate-400 shrink-0" />
              <p>REITs provide both capital appreciation and regular dividend income.</p>
            </div>
          </CardContent>
        </Card>

        {/* Fractional Ownership Card */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Users className="w-5 h-5 text-purple-600" /> Fractional Ownership
            </CardTitle>
            <CardDescription>Multiple investors collectively own a single high-value property.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 space-y-2">
              <h4 className="font-bold text-purple-900 flex items-center gap-2 text-sm">
                <Zap className="w-4 h-4" /> Key Features
              </h4>
              <ul className="space-y-1 text-xs text-purple-800">
                <li>• Direct ownership of a specific asset (e.g., a commercial floor).</li>
                <li>• Higher entry barrier than REITs (typically {currency.symbol}1 Lakh+).</li>
                <li>• Lower liquidity compared to REITs (exit usually via platform resale).</li>
              </ul>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
              <p>Ideal for investors seeking higher rental yields and direct exposure to premium assets.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-xl font-bold">The Liquidity Advantage</h4>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Both REITs and Fractional Ownership solve the biggest problem of traditional real estate: **illiquidity**. You can buy and sell your stake much faster than selling an entire house.
        </p>
      </div>
    </div>
  );
};

export default REITsFractional;