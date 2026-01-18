"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Trophy, 
  TrendingUp, 
  ShieldCheck, 
  Gem, 
  CheckCircle2, 
  BarChart3, 
  Handshake,
  ExternalLink,
  Briefcase
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const qualityHallmarks = [
  {
    title: "Capital Efficiency",
    icon: <BarChart3 className="w-5 h-5 text-emerald-600" />,
    desc: "The ability to generate high returns on every dollar invested back into the business (ROE/ROCE).",
    metrics: ["ROE > 20%", "ROCE > 25%"]
  },
  {
    title: "Earnings Consistency",
    icon: <TrendingUp className="w-5 h-5 text-purple-600" />,
    desc: "Predictable growth in sales and profits over a decade, rather than one-off spikes.",
    metrics: ["10-yr CAGR > 15%", "Positive FCF"]
  },
  {
    title: "Asset Light Model",
    icon: <ShieldCheck className="w-5 h-5 text-orange-600" />,
    desc: "Businesses that don't require massive factories or machinery to grow (e.g., Software, FMCG).",
    metrics: ["Low Capex", "High Operating Cash"]
  },
  {
    title: "Low Debt",
    icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    desc: "Quality businesses typically generate enough cash to fund their own growth without heavy borrowing.",
    metrics: ["D/E < 0.5", "High Interest Coverage"]
  }
];

const QualityAnalysis = () => {
  const goodBusinessId = "108QghHNHs4JcEYD94oSsoS5-2-rWAqm6";
  const managementQualityId = "17hY8pZYKPyoaPk3WKlGSjLVH7g9MiTcC";

  const getDriveViewUrl = (id: string) => `https://drive.google.com/file/d/${id}/view?usp=drive_link`;

  return (
    <div className="space-y-16 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Trophy className="w-4 h-4" />
            <span>The Gold Standard</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Quality Analysis
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Investing in 'Quality' means prioritizing the excellence of the business and its people over short-term price fluctuations.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Section 1: What is a Good Business */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-slate-900">1. What is a Good Business?</h3>
            <p className="text-lg text-slate-600 max-w-2xl">
              Not all businesses are created equal. Some have inherent characteristics that make them vastly superior wealth creators.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="gap-2 shrink-0"
            onClick={() => window.open(getDriveViewUrl(goodBusinessId), '_blank')}
          >
            <ExternalLink className="w-4 h-4" /> View Visual Guide
          </Button>
        </div>
      </section>

      {/* Section 2: Why Management Quality Matters */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-slate-900">2. Why Management Quality Matters</h3>
            <p className="text-lg text-slate-600 max-w-2xl">
              The capital allocators at the top define the company's fate. Good management can turn a fair business into a great one.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="gap-2 shrink-0"
            onClick={() => window.open(getDriveViewUrl(managementQualityId), '_blank')}
          >
            <ExternalLink className="w-4 h-4" /> View Visual Guide
          </Button>
        </div>
      </section>

      {/* Hallmarks Grid */}
      <section className="space-y-8 border-t pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-3xl font-bold text-slate-900">Quantitative Hallmarks</h3>
          <p className="text-slate-500">The measurable signs of an elite business model.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {qualityHallmarks.map((item, i) => (
            <Card key={i} className="border-slate-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg">{item.icon}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.metrics.map((m, idx) => (
                    <span key={idx} className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded-md text-slate-500 uppercase tracking-wider">
                      {m}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* The Management Checklist */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Handshake className="text-blue-600" />
              The Integrity Checklist
            </h3>
            <p className="text-slate-600 text-sm italic">
              "When a management with a reputation for brilliance tackles a business with a reputation for bad economics, it is the reputation of the business that remains intact." — Warren Buffett
            </p>
            <ul className="space-y-3">
              {[
                "Are dividends paid regularly (sharing wealth)?",
                "Is the promoter's skin in the game high?",
                "Are there any related-party transactions (red flags)?",
                "Does the annual letter discuss mistakes openly?",
                "Is executive compensation reasonable and tied to performance?"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
             <div className="relative">
                <div className="w-48 h-48 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Gem className="w-24 h-24 text-emerald-600" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100">
                   <p className="text-xs font-black text-emerald-700 text-center uppercase">Buy &<br/>Hold</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
          <ShieldCheck className="w-8 h-8 text-emerald-400" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xl font-bold">The Quality Premium</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Quality stocks often trade at high valuations (expensive P/E). Investors pay this "premium" for peace of mind, knowing the business is resilient enough to survive economic cycles and grow for decades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityAnalysis;