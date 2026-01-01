"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, BarChart3, Zap, TrendingUp, TrendingDown, Target, Info, AlertCircle } from 'lucide-react';

const TechnicalAnalysis = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Price Action</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Technical Analysis
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Predicting future price movements by studying past market data, primarily price and volume.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Core Philosophies */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
          <h4 className="font-bold">Market Discounts Everything</h4>
          <p className="text-xs text-slate-500">The current price reflects all known information, including fundamentals and news.</p>
        </div>
        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h4 className="font-bold">Price Moves in Trends</h4>
          <p className="text-xs text-slate-500">Prices are more likely to continue in a trend (Up, Down, or Sideways) than to reverse.</p>
        </div>
        <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
            <Info className="w-6 h-6" />
          </div>
          <h4 className="font-bold">History Repeats Itself</h4>
          <p className="text-xs text-slate-500">People react similarly to market events, creating recognizable patterns on charts.</p>
        </div>
      </section>

      {/* Support & Resistance */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-emerald-100 bg-emerald-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-800">
              <Target className="w-5 h-5 text-emerald-600" /> Support (Floor)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-emerald-900 leading-relaxed">
              A price level where a downtrend tends to pause due to a concentration of demand (buying power).
            </p>
            <div className="p-3 bg-white/60 rounded-xl border border-emerald-100 text-xs text-emerald-700 italic">
              Analogy: A bouncy floor. When the price hits it, it usually bounces back up.
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-100 bg-red-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertCircle className="w-5 h-5 text-red-600" /> Resistance (Ceiling)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-red-900 leading-relaxed">
              A price level where an uptrend tends to pause or reverse due to a concentration of supply (selling power).
            </p>
            <div className="p-3 bg-white/60 rounded-xl border border-red-100 text-xs text-red-700 italic">
              Analogy: A ceiling. The price struggles to break through it and often drops.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Types & Volume */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">The Visual Language</h3>
          <p className="text-slate-500">How traders "read" the market.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                <LineChart className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h4 className="font-bold">Candlestick Charts</h4>
                <p className="text-xs text-slate-500">The most popular chart type. Shows the Open, High, Low, and Close price for a specific time period.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h4 className="font-bold">Volume</h4>
                <p className="text-xs text-slate-500">The number of shares traded. High volume confirms the strength of a price move.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] flex items-start gap-6 border border-white/10">
        <AlertCircle className="w-8 h-8 text-amber-400 shrink-0" />
        <div className="space-y-2">
          <h4 className="text-xl font-bold">Technical vs. Fundamental</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Technical analysis is often used for <strong>short-term trading</strong>, while fundamental analysis is used for <strong>long-term investing</strong>. Many pros use both: Fundamental to pick *what* to buy, and Technical to pick *when* to buy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalAnalysis;