"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { 
  Wallet, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  UserCheck, 
  RefreshCw, 
  Search,
  ArrowRightLeft,
  ShieldCheck,
  TrendingDown
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const data = [
  { name: 'Fixed Deposit (6%)', value: 179000, color: '#94a3b8' },
  { name: 'Mutual Fund (12%)', value: 310000, color: '#60a5fa' },
  { name: 'Mutual Fund (15%)', value: 404000, color: '#3b82f6' },
];

const Lumpsum = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Introduction & Chart */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            Investing a large sum of money in one go. While SIP is about discipline, Lumpsum is about <strong>opportunity</strong> and <strong>surplus management</strong>.
          </p>
          
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 space-y-4">
            <div className="flex items-center gap-3 text-blue-900 font-bold">
              <UserCheck className="w-6 h-6" />
              <h3>Who is it for?</h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                Investors with sudden surplus (Bonus, Inheritance, Property sale).
              </li>
              <li className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                Long-term investors (5-10+ years) who can handle market swings.
              </li>
              <li className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                Experienced investors who can identify when markets are undervalued.
              </li>
            </ul>
          </div>
        </div>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle>Wealth after 10 Years ({currency.symbol}100,000 Invested)</CardTitle>
            <p className="text-sm text-slate-500">Comparing Lumpsum growth across different asset classes.</p>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  formatter={(value) => [`${currency.symbol}${(Number(value)).toLocaleString()}`, 'Final Value']} 
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={60}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Critical Warning: Short Term Trap */}
      <section className="bg-red-50 border border-red-100 rounded-[2.5rem] p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-20 h-20 rounded-3xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-900">The Short-Term Equity Trap</h3>
            <p className="text-red-800 leading-relaxed">
              If you need your money back in <strong>less than 3 years</strong>, avoid Lumpsum investments in Equity Mutual Funds. Short-term volatility can wipe out 10-20% of your capital exactly when you need it.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/50 px-4 py-2 rounded-xl text-sm font-medium text-red-900 border border-red-200">
                ❌ No Equity for &lt; 3 Years
              </div>
              <div className="bg-white/50 px-4 py-2 rounded-xl text-sm font-medium text-emerald-900 border border-emerald-200">
                ✅ Use Debt or Liquid Funds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Better Planning: The STP Strategy */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-blue-600" />
          A Smarter Way: The STP Bridge
        </h3>
        <p className="text-slate-600">Don't want to risk it all at once? Use a Systematic Transfer Plan (STP).</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3 text-center">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
              <Wallet className="w-5 h-5 text-slate-600" />
            </div>
            <h4 className="font-bold">1. Lumpsum in Debt</h4>
            <p className="text-xs text-slate-500">Park your big surplus in a safe, low-risk Liquid/Debt fund.</p>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRightLeft className="w-8 h-8 text-blue-200 hidden md:block" />
            <TrendingDown className="w-8 h-8 text-blue-200 md:hidden" />
          </div>
          <div className="p-6 bg-white border border-blue-200 rounded-2xl space-y-3 text-center shadow-sm shadow-blue-50">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold">2. Monthly Transfer</h4>
            <p className="text-xs text-slate-500">Automatically move small portions to an Equity fund every month.</p>
          </div>
        </div>
      </section>

      {/* Dos and Don'ts */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-emerald-100 bg-emerald-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <CheckCircle2 className="w-5 h-5" /> Dos of Lumpsum
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Check Market Valuations (P/E ratio) before investing.",
              "Have a minimum time horizon of 5-7 years for equity.",
              "Invest when the market has corrected significantly (e.g., 10-15% drop).",
              "Diversify across 2-3 different fund categories."
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-red-100 bg-red-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <XCircle className="w-5 h-5" /> Don'ts of Lumpsum
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Don't invest your entire emergency fund in one go.",
              "Don't try to time the absolute 'bottom' of the market (impossible).",
              "Don't ignore the 'Exit Load' if you might need funds soon.",
              "Don't invest just because everyone else is (FOMO)."
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* What to look out for */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Search className="w-6 h-6 text-blue-600" />
          What to look out for?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <h4 className="font-bold mb-2">Expense Ratio</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Lower is better. A 1% difference might seem small, but over 10 years, it can cost you thousands in lost returns.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <h4 className="font-bold mb-2">Portfolio Overlap</h4>
            <p className="text-sm text-slate-500 leading-relaxed">Ensure your new lumpsum fund doesn't invest in the same stocks as your existing SIPs.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200">
            <h4 className="font-bold mb-2">Market P/E</h4>
            <p className="text-sm text-slate-500 leading-relaxed">If Market P/E is high (e.g. &gt;25), consider staggered entry (STP) rather than a single lumpsum.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lumpsum;