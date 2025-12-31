"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PiggyBank, 
  Store, 
  TrendingUp, 
  ArrowRightLeft,
  CheckCircle2,
  Zap
} from 'lucide-react';

const BankAccounts = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Introduction */}
      <div className="bg-emerald-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <PiggyBank className="w-4 h-4" />
            <span>Pick Your Pocket</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Different Types of Accounts
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Just like you have different pockets for your toys and your school supplies, banks have different "pockets" called accounts for different needs!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Savings Account */}
        <Card className="border-none shadow-lg bg-white overflow-hidden group">
          <div className="h-2 bg-blue-500" />
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <PiggyBank className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl">1. Savings Account</CardTitle>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">"The Growing Piggy Bank"</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              This is the most common account. It's for regular people who want to keep their money safe and watch it grow a little bit every month.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span>Earns Interest (Bonus Money!)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Great for Kids and Parents</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span>Safe place for your pocket money</span>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-[10px] text-blue-800 font-bold uppercase mb-1">Simple Rule</p>
              <p className="text-xs text-blue-700 italic">"Put money in, let it sit, and the bank gives you a little extra as a gift!"</p>
            </div>
          </CardContent>
        </Card>

        {/* Current Account */}
        <Card className="border-none shadow-lg bg-white overflow-hidden group">
          <div className="h-2 bg-purple-500" />
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Store className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl">2. Current Account</CardTitle>
            <p className="text-sm font-bold text-purple-600 uppercase tracking-widest">"The Business Wallet"</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              This account is for shopkeepers, schools, and offices. They need to pay for things and receive money many times a day!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <ArrowRightLeft className="w-4 h-4 text-purple-500" />
                <span>Unlimited Transactions</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-500" />
                <span>Used by the Supermarket and Toy Store</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Zap className="w-4 h-4 text-purple-500" />
                <span>Usually gives no extra interest</span>
              </div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
              <p className="text-[10px] text-purple-800 font-bold uppercase mb-1">Simple Rule</p>
              <p className="text-xs text-purple-700 italic">"Good for moving lots of money quickly, but don't expect a gift from the bank!"</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankAccounts;