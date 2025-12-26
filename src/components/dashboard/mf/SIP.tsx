"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Repeat, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  Clock, 
  ShieldAlert,
  ArrowRight,
  UserCheck,
  Search,
  MousePointer2,
  CreditCard
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const compoundingData = [
  { year: 0, invested: 0, wealth: 0 },
  { year: 5, invested: 600000, wealth: 824000 },
  { year: 10, invested: 1200000, wealth: 2320000 },
  { year: 15, invested: 1800000, wealth: 5040000 },
  { year: 20, invested: 2400000, wealth: 9980000 },
];

const SIP = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Top Value Propositions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-blue-600 text-white border-none shadow-lg">
          <CardHeader className="pb-2">
            <Repeat className="w-8 h-8 mb-2 opacity-80" />
            <CardTitle className="text-lg">What is SIP?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-100 leading-relaxed">Systematic Investment Plan. You invest a fixed amount regularly (monthly) instead of a big one-time amount.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-emerald-600 text-white border-none shadow-lg">
          <CardHeader className="pb-2">
            <Zap className="w-8 h-8 mb-2 opacity-80" />
            <CardTitle className="text-lg">The "Magic" Benefit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-emerald-100 leading-relaxed">Rupee Cost Averaging. You buy more units when markets are low and fewer when they are high.</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-600 text-white border-none shadow-lg">
          <CardHeader className="pb-2">
            <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
            <CardTitle className="text-lg">Compounding</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-100 leading-relaxed">The longer you stay, the more your money's interest earns its own interest.</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Chart */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Power of Compounding (SIP @ {currency.symbol}10,000/mo)</CardTitle>
          <p className="text-sm text-slate-500">Wealth grows exponentially over time. Patience is your greatest asset.</p>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={compoundingData}>
              <defs>
                <linearGradient id="colorWealth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis tickFormatter={(value) => `${currency.symbol}${value/1000000}M`} stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                formatter={(value) => [`${currency.symbol}${(Number(value)).toLocaleString()}`, 'Value']} 
              />
              <Area type="monotone" dataKey="wealth" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorWealth)" />
              <Area type="monotone" dataKey="invested" stroke="#cbd5e1" fill="#f8fafc" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Evaluation and Expectations Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            When to Evaluate?
          </h3>
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <p className="text-slate-700 leading-relaxed">
              Don't check your portfolio daily. <strong>Evaluate your SIPs every year.</strong> Markets fluctuate daily, but fundamental performance is best measured annually. Check if your fund is consistently beating its benchmark.
            </p>
          </div>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-slate-900">Past is Not the Future</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Past performance is a guide, not a guarantee. 15% returns in the last 3 years doesn't mean the next 3 years will be identical. Focus on the fund manager's strategy and consistency.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-6 h-6 text-emerald-600" />
            The Bear Market Mindset
          </h3>
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <p className="text-slate-700 leading-relaxed">
              Investors' <strong>patience is key</strong> to wealth building, especially in bear markets. When prices fall, your SIP buys more units at a discount. Stopping your SIP during a crash is the most common mistake that kills long-term wealth.
            </p>
          </div>
        </div>
      </div>

      {/* Dos and Don'ts Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-emerald-100 bg-emerald-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <CheckCircle2 className="w-5 h-5" /> Dos of SIP Investing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Start as early as possible to maximize compounding.",
              "Link your SIP to a long-term goal (e.g., Retirement).",
              "Increase (Top-up) your SIP amount as your income grows.",
              "Stay invested for at least 5-7 years in equity funds."
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
              <XCircle className="w-5 h-5" /> Don'ts of SIP Investing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Don't stop SIPs because the market is 'too high' or 'too low'.",
              "Don't panic and withdraw during short-term volatility.",
              "Don't ignore the hidden costs (Expense Ratio).",
              "Don't choose funds solely based on last 6 months returns."
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Infographic: How to Start */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">How to Start Your SIP Journey</h3>
          <p className="text-slate-500">Four simple steps to financial independence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />
          
          {[
            { icon: <UserCheck />, label: "Complete KYC", desc: "Submit your ID and address proof online." },
            { icon: <Search />, label: "Pick a Category", desc: "Choose Debt or Equity based on your goal." },
            { icon: <MousePointer2 />, label: "Choose a Fund", desc: "Select a fund with a solid track record." },
            { icon: <CreditCard />, label: "Set Autopay", desc: "Link your bank for automatic monthly debits." }
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-4 hover:shadow-md transition-shadow relative">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-200">
                {step.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">{step.label}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
              {i < 3 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 bg-white rounded-full p-0.5" />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SIP;