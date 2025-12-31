"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Banknote, 
  ArrowRight, 
  Repeat, 
  Zap, 
  Coins, 
  Building2,
  ShieldCheck
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const MintingMoney = () => {
  const { currency } = useCurrency();
  const initialDeposit = 10000;
  const reserveRatio = 0.10; // 10%

  const steps = [
    { deposit: initialDeposit, reserve: initialDeposit * reserveRatio, loan: initialDeposit * (1 - reserveRatio), round: 1 },
    { deposit: initialDeposit * (1 - reserveRatio), reserve: initialDeposit * (1 - reserveRatio) * reserveRatio, loan: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio), round: 2 },
    { deposit: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio), reserve: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio) * reserveRatio, loan: initialDeposit * (1 - (1 - reserveRatio) * (1 - reserveRatio) * reserveRatio), round: 3 },
  ];

  const formatCurrency = (amount: number) => `${currency.symbol}${Math.round(amount).toLocaleString()}`;
  const totalCirculation = initialDeposit / reserveRatio;

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>The Money Multiplier</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Minting Money: The Bank's Magic Trick
          </h2>
          <p className="text-indigo-50 text-lg max-w-xl">
            Banks don't just keep your money safe; they use a clever trick to make the economy grow by circulating the same money many times!
          </p>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10">
          <Banknote size={300} />
        </div>
      </div>

      {/* Core Concept */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Repeat className="text-blue-500" /> The Fractional Reserve Rule
        </h3>
        <Card className="border-2 border-blue-100 bg-blue-50/50 p-8 rounded-[2.5rem]">
          <div className="space-y-4">
            <p className="text-blue-800 leading-relaxed">
              When you deposit money, the bank doesn't keep all of it. They only keep a small part (called the <strong>Reserve</strong>, usually around 10%) safe, and loan out the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-4 bg-white rounded-xl border border-blue-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">{formatCurrency(initialDeposit)}</p>
                <p className="text-xs text-slate-500">Initial Deposit</p>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400" />
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">90%</p>
                <p className="text-xs text-slate-500">Loaned Out</p>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400" />
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">10%</p>
                <p className="text-xs text-slate-500">Kept in Reserve</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Circulation Example */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Coins className="text-emerald-500" /> Circulation Example: Starting with {formatCurrency(initialDeposit)}
        </h3>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <Card key={i} className="border-slate-200 shadow-sm">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-sm text-slate-600">
                    {step.round}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Round {step.round}</p>
                    <p className="text-xs text-slate-500">New Deposit: {formatCurrency(step.deposit)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-emerald-600">Loaned Out</p>
                  <p className="text-xl font-bold">{formatCurrency(step.loan)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="p-6 bg-slate-900 text-white rounded-2xl text-center space-y-2">
          <p className="text-lg font-bold">The Final Magic</p>
          <p className="text-slate-300">
            The original {formatCurrency(initialDeposit)} can eventually create up to 
            <span className="text-amber-400 font-extrabold text-2xl mx-2">{formatCurrency(totalCirculation)}</span> 
            in total money circulating in the economy!
          </p>
        </div>
      </section>

      {/* Why this is good */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Building2 className="text-purple-500" /> Why Banks Do This
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">Helps the Economy</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              This process allows people to take loans for houses, cars, and businesses, which helps the whole country grow faster.
            </p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">How Banks Make Profit</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              The bank earns interest on the money they loan out, and they use a small part of that profit to pay you interest on your savings!
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MintingMoney;