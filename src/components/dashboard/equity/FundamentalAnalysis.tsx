"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, Search, TrendingUp, Scale, Info, PieChart, Briefcase } from 'lucide-react';

const FundamentalAnalysis = () => {
  const ratios = [
    {
      name: "P/E Ratio",
      label: "Price to Earnings",
      desc: "Compares current price to annual profit per share.",
      good: "Usually lower is better (undervalued), but high can mean growth.",
      icon: <Calculator className="w-4 h-4 text-blue-500" />
    },
    {
      name: "ROE",
      label: "Return on Equity",
      desc: "Measures how efficiently a company uses shareholders' money.",
      good: "Ideally 15-20%+ consistently.",
      icon: <TrendingUp className="w-4 h-4 text-emerald-500" />
    },
    {
      name: "Debt-to-Equity",
      label: "D/E Ratio",
      desc: "Measures company's debt relative to its equity.",
      good: "Ideally < 1. High debt increases bankruptcy risk.",
      icon: <Scale className="w-4 h-4 text-red-500" />
    },
    {
      name: "Dividend Yield",
      label: "Yield %",
      desc: "Annual dividend payout per share divided by price.",
      good: "A regular income stream; higher is better for value investors.",
      icon: <PieChart className="w-4 h-4 text-purple-500" />
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Search className="w-4 h-4" />
            <span>Value Investing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Fundamental Analysis
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            The study of a company's "Intrinsic Value" by looking at its business, financials, and competition. Buy the business, not just the stock price!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Core Ratios Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ratios.map((ratio, i) => (
          <Card key={i} className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="p-2 bg-slate-50 rounded-lg w-fit mb-2">
                {ratio.icon}
              </div>
              <CardTitle className="text-lg">{ratio.name}</CardTitle>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{ratio.label}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-slate-500">{ratio.desc}</p>
              <div className="p-2 bg-slate-50 rounded-lg text-[10px] font-medium text-slate-700 italic">
                {ratio.good}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* The Three Statements */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">The "Financial Trio"</h3>
        <p className="text-slate-600">Every serious fundamental analyst checks these three documents in the Annual Report:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
               <Briefcase className="w-5 h-5 text-blue-600" /> Income Statement
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">Shows revenue, expenses, and profit over a period. Answer: <strong>Is the company making money?</strong></p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
               <Scale className="w-5 h-5 text-indigo-600" /> Balance Sheet
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">Shows assets and liabilities at a point in time. Answer: <strong>What does the company own and owe?</strong></p>
          </div>
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-4">
            <h4 className="font-bold text-lg flex items-center gap-2">
               <TrendingUp className="w-5 h-5 text-emerald-600" /> Cash Flow
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">Shows the actual cash moving in and out. Answer: <strong>Is the profit backed by real cash?</strong></p>
          </div>
        </div>
      </section>

      {/* Qualitative Analysis */}
      <div className="bg-amber-50 border border-amber-100 p-8 rounded-[2.5rem]">
        <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          <Info className="w-6 h-6" /> Beyond the Numbers
        </h4>
        <p className="text-sm text-amber-800 leading-relaxed mb-6">
          Fundamental analysis isn't just math. You must also check the <strong>Qualitative</strong> aspects:
        </p>
        <ul className="grid sm:grid-cols-2 gap-4 text-xs text-amber-800 font-medium">
          <li className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
            <strong>Moat:</strong> Does the company have a competitive advantage (e.g., Brand, Patent)?
          </li>
          <li className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
            <strong>Management:</strong> Are the leaders honest and competent?
          </li>
          <li className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
            <strong>Industry Trends:</strong> Is the sector growing or dying (e.g., EVs vs. Coal)?
          </li>
          <li className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
            <strong>Regulation:</strong> Could government policy hurt the business?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FundamentalAnalysis;