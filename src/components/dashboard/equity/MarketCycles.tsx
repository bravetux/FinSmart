"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, Clock, ArrowUpCircle, ArrowDownCircle, Minus, Target, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const MarketCycles = () => {
  const phases = [
    {
      phase: "Accumulation",
      icon: <ArrowUpCircle className="w-6 h-6 text-emerald-600" />,
      sentiment: "Fear → Hope",
      description: "Market has bottomed out. Smart money (institutions, value investors) start buying quietly while retail investors are still fearful.",
      characteristics: [
        "Low volume, flat prices",
        "Negative news still dominates",
        "PE ratios are low, valuations attractive",
        "Most retail investors have exited"
      ],
      strategy: "Best time to BUY. Build positions in quality stocks at discounts.",
      emotion: "Skepticism",
      color: "emerald"
    },
    {
      phase: "Markup (Bull Run)",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
      sentiment: "Hope → Optimism → Excitement",
      description: "Prices start rising consistently. Good news increases. More investors join. This is the longest phase and where most wealth is created.",
      characteristics: [
        "Rising prices with increasing volume",
        "Positive earnings reports",
        "Media coverage turns positive",
        "New investors enter market"
      ],
      strategy: "HOLD your positions. Let winners run. Avoid selling too early.",
      emotion: "Confidence → Greed",
      color: "blue"
    },
    {
      phase: "Distribution",
      icon: <ArrowDownCircle className="w-6 h-6 text-orange-600" />,
      sentiment: "Euphoria → Anxiety",
      description: "Market peaks. Smart money starts exiting. Retail investors are most bullish. Volatility increases. Valuations stretched.",
      characteristics: [
        "High volume but prices stagnate",
        "Everyone talking about stocks",
        "IPOs oversubscribed 100x",
        "High PE ratios, expensive valuations"
      ],
      strategy: "Book partial profits. Tighten stop-losses. Reduce exposure gradually.",
      emotion: "Euphoria → Complacency",
      color: "orange"
    },
    {
      phase: "Markdown (Bear Market)",
      icon: <TrendingDown className="w-6 h-6 text-red-600" />,
      sentiment: "Fear → Panic → Capitulation",
      description: "Prices fall sharply. Bad news increases. Panic selling. This is when retail investors lose the most by selling at bottoms.",
      characteristics: [
        "Heavy selling, high volatility",
        "Negative news dominates",
        "Investor sentiment very negative",
        "Margin calls, forced selling"
      ],
      strategy: "Preserve capital. Build shopping list. Don't panic sell quality stocks.",
      emotion: "Fear → Despair",
      color: "red"
    }
  ];

  const bullVsBear = {
    bull: {
      title: "Bull Market",
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      definition: "A market where prices are rising or expected to rise, typically 20%+ from recent lows.",
      characteristics: [
        "Investor optimism high",
        "Economic indicators improving",
        "Corporate profits rising",
        "Low unemployment",
        "Easy credit availability"
      ],
      duration: "Usually 2-5 years (longer than bears)",
      tip: "The time to make money. Stay invested, let compounding work."
    },
    bear: {
      title: "Bear Market",
      icon: <TrendingDown className="w-8 h-8 text-red-600" />,
      definition: "A market where prices fall 20%+ from recent highs, accompanied by widespread pessimism.",
      characteristics: [
        "Investor pessimism widespread",
        "Economic slowdown/recession fears",
        "Corporate profit warnings",
        "Rising unemployment",
        "Credit tightening"
      ],
      duration: "Usually 6-18 months (shorter but painful)",
      tip: "The time to buy quality. Don't panic, follow your shopping list."
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Activity className="w-4 h-4" />
            <span>Market Psychology</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Understanding Market Cycles
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Markets move in predictable cycles driven by investor psychology and economic fundamentals. Learning to recognize these phases is crucial for timing your entries and exits.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Bull vs Bear */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" /> Bull Market vs Bear Market
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bull Market */}
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                {bullVsBear.bull.icon}
                <Badge className="bg-emerald-600">{bullVsBear.bull.duration}</Badge>
              </div>
              <CardTitle className="text-xl text-emerald-800">{bullVsBear.bull.title}</CardTitle>
              <CardDescription className="text-emerald-700">{bullVsBear.bull.definition}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-bold text-emerald-900 uppercase">Characteristics</p>
                <ul className="space-y-1">
                  {bullVsBear.bull.characteristics.map((char, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 bg-white rounded-xl border border-emerald-100">
                <p className="text-xs font-bold text-emerald-800 uppercase mb-1">Strategy</p>
                <p className="text-xs text-emerald-700 italic">{bullVsBear.bull.tip}</p>
              </div>
            </CardContent>
          </Card>

          {/* Bear Market */}
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                {bullVsBear.bear.icon}
                <Badge variant="destructive">{bullVsBear.bear.duration}</Badge>
              </div>
              <CardTitle className="text-xl text-red-800">{bullVsBear.bear.title}</CardTitle>
              <CardDescription className="text-red-700">{bullVsBear.bear.definition}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-bold text-red-900 uppercase">Characteristics</p>
                <ul className="space-y-1">
                  {bullVsBear.bear.characteristics.map((char, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <AlertTriangle className="w-3 h-3 text-red-600 shrink-0 mt-0.5" />
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 bg-white rounded-xl border border-red-100">
                <p className="text-xs font-bold text-red-800 uppercase mb-1">Strategy</p>
                <p className="text-xs text-red-700 italic">{bullVsBear.bear.tip}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The 4 Phases */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">The 4 Market Cycle Phases</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Markets don't move linearly. They cycle through predictable phases driven by emotions and fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {phases.map((phase, i) => {
            const colorClasses = {
              emerald: "border-emerald-200 bg-emerald-50/50",
              blue: "border-blue-200 bg-blue-50/50",
              orange: "border-orange-200 bg-orange-50/50",
              red: "border-red-200 bg-red-50/50"
            };

            const textColorClasses = {
              emerald: "text-emerald-800",
              blue: "text-blue-800",
              orange: "text-orange-800",
              red: "text-red-800"
            };

            return (
              <Card key={i} className={`${colorClasses[phase.color]} shadow-md hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-white rounded-lg">
                      {phase.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Phase {i + 1}
                    </Badge>
                  </div>
                  <CardTitle className={`text-xl ${textColorClasses[phase.color]}`}>
                    {phase.phase}
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {phase.sentiment}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{phase.description}</p>

                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-900 uppercase">What You'll See</p>
                    <ul className="space-y-1">
                      {phase.characteristics.map((char, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Minus className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="text-xs font-bold text-slate-800 uppercase mb-1">Your Action</p>
                    <p className="text-xs text-slate-700 font-medium">{phase.strategy}</p>
                  </div>

                  <div className="p-2 bg-slate-100 rounded-lg text-center">
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Dominant Emotion</p>
                    <p className="text-sm font-bold text-slate-800">{phase.emotion}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Cycle Visualization */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-purple-600" /> The Cycle in Motion
        </h3>
        <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-lg">
          <CardContent className="pt-8">
            <div className="relative h-64 flex items-center justify-center">
              {/* Circular representation */}
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border-8 border-dashed border-slate-200" />
                
                {/* Phase markers */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="p-3 bg-emerald-500 rounded-full text-white shadow-lg">
                    <ArrowUpCircle className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-center mt-2">Accumulation</p>
                </div>
                
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  <div className="p-3 bg-blue-500 rounded-full text-white shadow-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-center mt-2">Markup</p>
                </div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="p-3 bg-orange-500 rounded-full text-white shadow-lg">
                    <ArrowDownCircle className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-center mt-2">Distribution</p>
                </div>
                
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="p-3 bg-red-500 rounded-full text-white shadow-lg">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-center mt-2">Markdown</p>
                </div>

                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs font-bold text-slate-600">Market Cycle</p>
                    <p className="text-[10px] text-slate-400">Repeats Endlessly</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Key Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> What You Can Control
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><span>•</span> Your emotions and discipline</li>
              <li className="flex gap-2"><span>•</span> Your position sizing</li>
              <li className="flex gap-2"><span>•</span> When you choose to buy/sell</li>
              <li className="flex gap-2"><span>•</span> Your research and preparation</li>
              <li className="flex gap-2"><span>•</span> Your time horizon</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="text-lg text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> What You Cannot Control
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><span>•</span> Which phase the market is in</li>
              <li className="flex gap-2"><span>•</span> How long a phase will last</li>
              <li className="flex gap-2"><span>•</span> Other investors' behavior</li>
              <li className="flex gap-2"><span>•</span> News events and macro shocks</li>
              <li className="flex gap-2"><span>•</span> Short-term price movements</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Final Wisdom */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem]">
        <h4 className="text-xl font-bold mb-4">"The market is a device for transferring money from the impatient to the patient."</h4>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
          Cycles are inevitable. Your job isn't to predict them perfectly — it's to prepare for them mentally and financially. 
          The investors who win are those who can hold through the Markdown phase and buy during Accumulation, 
          even when every instinct screams otherwise.
        </p>
      </div>
    </div>
  );
};

export default MarketCycles;
