"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Scale, 
  Timer, 
  TrendingUp, 
  ExternalLink, 
  ShieldCheck, 
  Brain, 
  BookOpen, 
  Zap, 
  Users, 
  Target, 
  Shield, 
  Coins, 
  Search, 
  Briefcase,
  Clock,
  EyeOff,
  Activity,
  Key,
  Calendar,
  User,
  Compass
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const EquityLaws = () => {
  const guideId = "1OnluaRytw0RCRhCVJ4stHPMwTSMtQrbD";
  const viewUrl = `https://drive.google.com/file/d/${guideId}/view?usp=drive_link`;

  const equityLaws = [
    {
      number: 1,
      title: "Ownership > Trading",
      icon: <Briefcase className="w-5 h-5 text-blue-600" />,
      content: "When you buy equity, you’re buying a business, not a ticker symbol. Prices move daily; businesses compound yearly. If you don’t understand how the company makes money, you’re gambling, not investing. Great stocks feel boring after a while. That’s a feature, not a bug."
    },
    {
      number: 2,
      title: "Time in the Market Beats Timing the Market",
      icon: <Timer className="w-5 h-5 text-emerald-600" />,
      content: "Everyone wants the perfect entry. Nobody gets it consistently. Compounding needs time, not intelligence. Even bad timing works if the holding period is long enough. Most wealth is created in the last few years, not the first few. Selling early is the most expensive mistake in investing."
    },
    {
      number: 3,
      title: "Volatility Is the Price of Admission",
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      content: "If you want equity returns, you must pay in emotional discomfort. Corrections ≠ risk. Permanent loss of capital = risk. If price movement scares you, equity is not your asset class."
    },
    {
      number: 4,
      title: "Concentration Builds Wealth, Diversification Protects It",
      icon: <Target className="w-5 h-5 text-purple-600" />,
      content: "Early phase: Concentration in high-quality businesses builds wealth. Later phase: Diversification protects what you’ve built. Over-diversification is often just lack of conviction dressed up as prudence."
    },
    {
      number: 5,
      title: "Quality Always Wins (Eventually)",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      content: "Bad companies can go up. Good companies stay up. Time exposes frauds and rewards quality (Strong balance sheet, consistent cash flows, ethical promoters, pricing power). Always."
    },
    {
      number: 6,
      title: "Valuation Matters — But Only in the Short Term",
      icon: <Search className="w-5 h-5 text-orange-600" />,
      content: "Overpaying hurts near-term returns. But great businesses grow into valuations. Cheap stocks can stay cheap forever. Buy quality at reasonable prices. Not “cheap at any cost”."
    },
    {
      number: 7,
      title: "The Market Transfers Money from the Impatient to the Patient",
      icon: <Users className="w-5 h-5 text-pink-600" />,
      content: "Most investors don’t lose money because they’re wrong. They lose because they quit early. Fear, greed, boredom — markets weaponize human psychology. Patience is not passive. It’s a competitive advantage."
    },
    {
      number: 8,
      title: "Taxes, Costs & Friction Matter More Than You Think",
      icon: <Coins className="w-5 h-5 text-yellow-600" />,
      content: "Brokerage, STT, LTCG/STCG, and bad churn decisions. What you don’t lose is just as important as what you earn. Your use of Section 54F is a textbook example of respecting this law."
    },
    {
      number: 9,
      title: "You Will Never Feel Smart at the Bottom",
      icon: <Brain className="w-5 h-5 text-red-600" />,
      content: "If you’re comfortable buying, it’s probably not cheap. If it feels terrifying, that’s usually where returns are born. Courage in investing rarely feels heroic in the moment."
    },
    {
      number: 10,
      title: "Simplicity Beats Sophistication",
      icon: <Scale className="w-5 h-5 text-slate-600" />,
      content: "Most wealth is built with a few great stocks, held for a long time, with discipline. Complex strategies mostly enrich brokers, not investors."
    }
  ];

  const longTermLaws = [
    {
      number: 1,
      title: "Time Is the Only Real Edge",
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      content: "Capital, intelligence, access — all are replicable. Time isn’t. Compounding doesn’t respond to effort. It responds to duration. The biggest mistake isn’t being wrong. It’s not staying long enough to be right."
    },
    {
      number: 2,
      title: "Long Term Is a Behavior, Not a Horizon",
      icon: <Brain className="w-5 h-5 text-purple-600" />,
      content: "Long term isn’t “10 years”. Long term is not reacting when you’re tempted to. Not selling in panic, not chasing what’s hot, not changing plans mid-cycle. Most people know the math. Very few master the behavior."
    },
    {
      number: 3,
      title: "What You Don’t Do Matters More Than What You Do",
      icon: <EyeOff className="w-5 h-5 text-slate-600" />,
      content: "In long-term games: Fewer decisions > more decisions. Avoiding mistakes > making big moves. Not selling early. Not overleveraging. Not panicking. Restraint compounds."
    },
    {
      number: 4,
      title: "Compounding Is Asymmetric",
      icon: <Scale className="w-5 h-5 text-emerald-600" />,
      content: "Losses hurt more than gains help. –50% requires +100% to recover. Small, consistent growth beats big, volatile wins. Long-term thinkers play defense first, offense second."
    },
    {
      number: 5,
      title: "Optionality Is Power",
      icon: <Key className="w-5 h-5 text-amber-600" />,
      content: "Long-term winners preserve choices: Liquidity, Low debt, Flexible timelines. Once you’re forced to act, you’ve already lost leverage. Your current structure (pledge > forced sell) respects this law."
    },
    {
      number: 6,
      title: "Progress Is Non-Linear",
      icon: <Activity className="w-5 h-5 text-indigo-600" />,
      content: "Returns don’t arrive evenly. Years of nothing followed by sudden step-ups. Most wealth is created in bursts, not smooth curves. If you quit during flat periods, you miss the payoff."
    },
    {
      number: 7,
      title: "Long Term Thinking Requires Short Term Discipline",
      icon: <Calendar className="w-5 h-5 text-orange-600" />,
      content: "Irony of life: Long-term freedom comes from short-term control. Budgeting. Health. Routine. Rebalancing. Discipline today buys optionality tomorrow."
    },
    {
      number: 8,
      title: "Alignment Beats Optimization",
      icon: <Target className="w-5 h-5 text-red-600" />,
      content: "You don’t need the best strategy. You need the strategy you’ll stick with. A good plan executed consistently beats a perfect plan abandoned midway."
    },
    {
      number: 9,
      title: "Identity Drives Outcomes",
      icon: <User className="w-5 h-5 text-emerald-600" />,
      content: "People don’t act based on goals. They act based on who they believe they are. If you see yourself as a 'long-term investor' → you behave like one. Identity compounds faster than money."
    },
    {
      number: 10,
      title: "Long Term Thinking Is Lonely",
      icon: <Compass className="w-5 h-5 text-sky-600" />,
      content: "You’ll look wrong before you’re proven right. Others will make faster money, noise will tempt you, doubt will creep in. Silence is the cost of admission for high-performance compounding."
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Scale className="w-4 h-4" />
            <span>Foundational Principles</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Laws of Equity
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Success in the stock market isn't just about picking winners; it's about following timeless laws that govern wealth creation.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Main Feature: Law of Long Term Thinking */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm overflow-hidden relative group">
          <div className="space-y-4 relative z-10">
            <div className="p-3 bg-blue-50 rounded-2xl w-fit text-blue-600">
              <Timer className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-slate-900">The Law of Long Term Thinking</h3>
              <p className="text-slate-500 max-w-md leading-relaxed">
                Markets are voting machines in the short run, but weighing machines in the long run. Understand the mechanics of wealth through time.
              </p>
            </div>
            <Button 
              variant="default" 
              size="lg" 
              className="gap-2 bg-blue-600 hover:bg-blue-700 h-12 px-8 rounded-xl font-bold transition-all transform active:scale-95"
              onClick={() => window.open(viewUrl, '_blank')}
            >
              <ExternalLink className="w-5 h-5" /> View Visual Guide
            </Button>
          </div>
          
          <div className="hidden lg:flex flex-1 justify-end">
             <div className="w-64 h-64 bg-slate-50 rounded-full flex items-center justify-center border-8 border-white shadow-inner group-hover:scale-105 transition-transform duration-500">
                <TrendingUp size={120} className="text-blue-200" />
             </div>
          </div>
        </div>
      </section>

      {/* 📜 The Laws of Equity Investing */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
             <BookOpen className="w-8 h-8 text-blue-600" />
             <h3 className="text-3xl font-bold text-slate-900">The Laws of Equity Investing</h3>
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto">Timeless principles for navigating the stock market universe.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equityLaws.map((law) => (
            <Card key={law.number} className="border-slate-100 shadow-sm hover:shadow-md transition-all group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-50 group-hover:bg-blue-500 transition-colors" />
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                    {law.icon}
                  </div>
                  <CardTitle className="text-lg">Law #{law.number}: {law.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">{law.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 🧭 The Laws of Long-Term Thinking & Investing */}
      <section className="space-y-8 border-t pt-16">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
             <Compass className="w-8 h-8 text-emerald-600" />
             <h3 className="text-3xl font-bold text-slate-900">The Laws of Long-Term Thinking & Investing</h3>
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto">Fundamental behaviors that separate successful wealth creators from the crowd.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {longTermLaws.map((law) => (
            <Card key={law.number} className="border-slate-100 shadow-sm hover:shadow-md transition-all group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-50 group-hover:bg-emerald-500 transition-colors" />
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-emerald-50 transition-colors">
                    {law.icon}
                  </div>
                  <CardTitle className="text-lg">Law #{law.number}: {law.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">{law.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 🧠 Final Truth */}
      <section className="bg-indigo-600 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Brain className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-bold">Final Truth</h4>
          </div>
          <div className="space-y-4 max-w-3xl">
            <p className="text-indigo-100 text-lg leading-relaxed">
              Old-school but undefeated. Equity investing rewards:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
               {['Patience', 'Conviction', 'Process'].map((item) => (
                 <div key={item} className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl border border-white/10">
                    <ShieldCheck className="w-5 h-5 text-indigo-300" />
                    <span className="font-bold">{item}</span>
                 </div>
               ))}
            </div>
            <div className="pt-6 border-t border-white/10">
               <p className="text-indigo-200 text-sm font-medium italic">
                 "Not IQ. Not prediction. Not WhatsApp tips."
               </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 -mr-20 -mt-20 rounded-full blur-3xl" />
      </section>

      <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 text-center">
        <p className="text-sm text-blue-800 font-medium italic">
          "The stock market is a device for transferring money from the impatient to the patient." — Warren Buffett
        </p>
      </div>
    </div>
  );
};

export default EquityLaws;