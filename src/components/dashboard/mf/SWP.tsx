"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowDownToLine, Clock, UserCheck, Repeat, DollarSign, ArrowRight } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const swpData = [
  { month: 0, balance: 10000000 },
  { month: 12, balance: 10200000 },
  { month: 24, balance: 10450000 },
  { month: 36, balance: 10700000 },
  { month: 48, balance: 11000000 },
];

const INITIAL_CORPUS = 10000000; // 1 Crore
const WITHDRAWAL_RATE = 0.04; // 4%
const MONTHLY_WITHDRAWAL = (INITIAL_CORPUS * WITHDRAWAL_RATE) / 12;

const SWP = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Header */}
      <div className="bg-blue-600 text-white p-8 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl">
        <ArrowDownToLine className="w-12 h-12 text-blue-100 shrink-0" />
        <div>
          <h2 className="text-3xl font-bold">Systematic Withdrawal Plan (SWP)</h2>
          <p className="text-lg text-blue-100 mt-2">The "DIY Pension Plan". You get a fixed monthly payout from your investment while the remaining corpus continues to grow.</p>
        </div>
      </div>

      {/* Who is it for & Infographic */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <UserCheck className="w-5 h-5 text-blue-600" /> Who is SWP for?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <p>SWP is ideal for investors who have accumulated a large corpus and are now entering the distribution phase (e.g., retirement).</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <strong>Retirees:</strong> Provides a steady, tax-efficient income stream.
              </li>
              <li className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <strong>Passive Income Seekers:</strong> Allows withdrawal of profits while preserving the principal.
              </li>
              <li className="flex items-start gap-2">
                <Repeat className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                <strong>Goal Completion:</strong> Systematically liquidate funds for a specific goal (e.g., child's college tuition).
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-slate-50 border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">SWP Flow</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center h-full py-6">
            <div className="flex items-center justify-between w-full max-w-md">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg">
                  <DollarSign className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium">Investment Corpus</p>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400 shrink-0" />
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                  <Repeat className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium">Fixed Monthly Payout</p>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400 shrink-0" />
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto shadow-lg">
                  <Clock className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium">Remaining Corpus Grows</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 4% Rule Example */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">The 4% Withdrawal Rule Example</h3>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Case Study: {currency.symbol}1 Crore Portfolio</CardTitle>
            <CardDescription className="text-blue-700">
              The 4% rule suggests withdrawing 4% of your initial portfolio value in the first year, adjusted for inflation annually thereafter, to ensure the corpus lasts for 30 years.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-xl border border-blue-100 space-y-1">
              <p className="text-xs text-slate-500 uppercase font-semibold">Initial Corpus</p>
              <p className="text-2xl font-bold text-slate-900">{currency.symbol}{INITIAL_CORPUS.toLocaleString()}</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-blue-100 space-y-1">
              <p className="text-xs text-slate-500 uppercase font-semibold">Annual Withdrawal (4%)</p>
              <p className="text-2xl font-bold text-slate-900">{currency.symbol}{(INITIAL_CORPUS * WITHDRAWAL_RATE).toLocaleString()}</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-blue-100 space-y-1">
              <p className="text-xs text-slate-500 uppercase font-semibold">Monthly Income (SWP)</p>
              <p className="text-2xl font-bold text-slate-900">{currency.symbol}{MONTHLY_WITHDRAWAL.toFixed(0).toLocaleString()}</p>
            </div>
            <div className="md:col-span-3 p-4 bg-blue-100 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Key Insight:</strong> If your portfolio generates an average return higher than 4% + inflation, your corpus will likely remain intact or even grow, providing sustainable income.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Existing Chart */}
      <Card>
        <CardHeader>
          <CardTitle>SWP in Action: Corpus Growth (Illustrative)</CardTitle>
          <CardDescription>Example showing corpus growth even after regular withdrawals.</CardDescription>
        </CardHeader>
        <CardContent className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={swpData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickFormatter={(val) => `Month ${val}`} />
              <YAxis tickFormatter={(val) => `${currency.symbol}${val/1000000}M`} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                formatter={(val) => [`${currency.symbol}${Number(val).toLocaleString()}`, 'Balance']} 
              />
              <Area type="monotone" dataKey="balance" stroke="#3b82f6" fill="#dbeafe" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SWP;