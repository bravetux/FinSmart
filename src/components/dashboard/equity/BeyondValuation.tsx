"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Brain, Globe, Leaf, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const factors = [
  {
    title: "Behavioral Economics",
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    desc: "Understanding investor psychology, biases (like FOMO or panic selling), and how they affect market efficiency and price movements."
  },
  {
    title: "Geopolitics & Culture",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    desc: "Analyzing the impact of international relations, trade wars, domestic political stability, and cultural consumption patterns on long-term business success."
  },
  {
    title: "ESG (Environmental, Social, Governance)",
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    desc: "Assessing a company's sustainability practices, social impact, and management structure. Poor ESG scores can lead to future regulatory risks."
  },
  {
    title: "Data Analytics and AI",
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    desc: "Leveraging big data, machine learning, and AI to predict consumer trends, optimize supply chains, and gain a competitive edge."
  }
];

const BeyondValuation = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Search className="w-4 h-4" />
            <span>Qualitative Edge</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Beyond Price Valuation
          </h2>
          <p className="text-indigo-50 text-lg max-w-xl">
            True long-term investing requires integrating traditional fundamental analysis with forward-looking qualitative factors that define future growth and risk.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-600" /> Integrating Modern Factors
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {factors.map((factor, i) => (
            <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg w-fit">
                    {factor.icon}
                  </div>
                  <CardTitle className="text-lg">{factor.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">{factor.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex items-start gap-6">
        <ArrowRight className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
        <div>
          <h4 className="text-xl font-bold text-blue-900">The Future of Analysis</h4>
          <p className="text-sm text-blue-800 leading-relaxed mt-2">
            While financial statements tell you where a company has been, these qualitative factors predict where it is going. Ignoring them means missing the biggest risks and opportunities of the next decade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeyondValuation;