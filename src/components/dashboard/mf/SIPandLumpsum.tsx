"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Combine, ArrowRight, Zap, ShieldCheck, Target } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const portfolio = [
  { name: 'Lumpsum (Core)', value: 70, color: '#3b82f6' },
  { name: 'SIP (Growth)', value: 30, color: '#10b981' },
];

// Illustrative data comparing Pure SIP vs Hybrid (Lumpsum + SIP) over 20 years
const wealthData = [
  { year: 0, pureSIP: 0, hybrid: 500000 }, 
  { year: 5, pureSIP: 824000, hybrid: 1300000 },
  { year: 10, pureSIP: 2320000, hybrid: 3500000 },
  { year: 15, pureSIP: 5040000, hybrid: 6800000 },
  { year: 20, pureSIP: 9980000, hybrid: 12500000 },
];

const SIPandLumpsum = () => {
  const { currency } = useCurrency();

  const steps = [
    { icon: <Zap className="w-6 h-6 text-blue-600" />, title: "Lumpsum Start", description: `Invest a large sum (${currency.symbol}X) when markets are favorable or you receive a bonus.` },
    { icon: <ArrowRight className="w-6 h-6 text-slate-400" />, title: "Transition", description: "Move from one-time investment to regular discipline." },
    { icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />, title: "SIP Discipline", description: `Continue monthly investments (${currency.symbol}Y) regardless of market volatility.` },
    { icon: <Target className="w-6 h-6 text-purple-600" />, title: "Goal Achieved", description: "Benefit from both compounding (Lumpsum) and averaging (SIP)." },
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Header */}
      <div className="flex gap-4 items-start">
        <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
          <Combine className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-3xl font-bold">The "Hybrid" Strategy</h3>
          <p className="text-lg text-slate-600 mt-1">Combining Lumpsum and SIP offers the best of both worlds: capitalizing on opportunities while maintaining discipline.</p>
        </div>
      </div>

      {/* Benefits Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-blue-800">Mitigate Timing Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-700">Lumpsum gets you in the market immediately, while SIP averages out the cost over time, reducing the risk of investing at a market peak.</p>
          </CardContent>
        </Card>
        <Card className="bg-emerald-50 border-emerald-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-emerald-800">Maximize Compounding</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-emerald-700">The initial large sum starts compounding immediately, giving your wealth a significant head start compared to starting only with SIP.</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-purple-800">Financial Flexibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-700">Allows you to deploy sudden surplus funds (bonus, inheritance) efficiently while maintaining regular, affordable monthly contributions.</p>
          </CardContent>
        </Card>
      </section>

      {/* Infographic: The Combined Flow */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">How the Hybrid Strategy Works</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-4 hover:shadow-lg transition-shadow relative">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mx-auto shadow-inner">
                {step.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6 bg-white rounded-full p-0.5 border border-slate-200" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Wealth Creation Comparison Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Wealth Creation Comparison (20 Years @ 12% CAGR)</CardTitle>
          <p className="text-sm text-slate-500">Hybrid strategy provides a significant head start due to early compounding of the lumpsum amount.</p>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={wealthData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis tickFormatter={(value) => `${currency.symbol}${value/1000000}M`} stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                formatter={(value, name) => [`${currency.symbol}${(Number(value)).toLocaleString()}`, name]} 
              />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="hybrid" name="Hybrid (Lumpsum + SIP)" stroke="#3b82f6" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="pureSIP" name="Pure SIP" stroke="#10b981" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Ideal Portfolio Structure Chart (Existing) */}
      <Card>
        <CardHeader>
          <CardTitle>Ideal Portfolio Structure</CardTitle>
          <p className="text-sm text-slate-500">A common allocation for moderate-to-aggressive investors.</p>
        </CardHeader>
        <CardContent className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolio}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {portfolio.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SIPandLumpsum;