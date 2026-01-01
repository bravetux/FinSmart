"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank, Coins, TrendingUp, ArrowRight, Building2, Lock, Gift, Zap, Star, Laptop } from 'lucide-react';

const PiggyBankSection = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <PiggyBank className="w-4 h-4" />
            <span>Small Steps, Big Dreams</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">The Magic of Your Piggy Bank</h2>
          <p className="text-rose-50 text-lg max-w-xl font-medium">
            Every giant treasure starts with a single coin. Learn how to turn your small change into a growing fortune!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-8 opacity-20 hidden md:block">
          <Coins size={200} />
        </div>
      </div>
      
      {/* Saving at Home */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Star className="text-amber-500" />
          Phase 1: The Home Piggy Bank
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md bg-white">
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto mb-2">
                <Coins className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-600 text-sm">
              Save your pocket money, birthday gifts, or coins you find. Don't spend them all at once!
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-white">
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-2">
                <Lock className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">Wait</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-600 text-sm">
              Be patient. Resisting the urge to buy small candies now means you can buy a big Lego set later!
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-white">
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-2">
                <Zap className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">Fill it Up</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-slate-600 text-sm">
              Watch your piggy bank get heavier. Once it's full, it's time for the next adventure!
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Moving to the Bank */}
      <section className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold">Phase 2: Moving to the Big Bank</h3>
            <p className="text-slate-400 leading-relaxed">
              When your piggy bank is full, ask your parents to take you to a real bank. This is where the true magic happens!
            </p>
            <div className="flex items-center gap-4 py-4">
              <div className="p-4 bg-white/5 rounded-2xl text-center">
                <PiggyBank className="w-10 h-10 text-pink-400 mx-auto mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Full Home Jar</p>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-600" />
              <div className="p-4 bg-white/5 rounded-2xl text-center border border-white/10">
                <Building2 className="w-10 h-10 text-blue-400 mx-auto mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Savings Account</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Why use a Real Bank?
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                It's safer than keeping it in a jar at home.
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                You get a tiny "Interest" gift every month.
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                You can use cool digital tools to see your money grow.
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Fixed Deposits */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <TrendingUp className="text-emerald-500" />
          Phase 3: The Super Piggy Bank (FD)
        </h3>
        <Card className="border-2 border-emerald-100 bg-emerald-50/50 p-8 md:p-12 rounded-[2.5rem]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-emerald-900">What is a Fixed Deposit?</h4>
              <p className="text-emerald-800 leading-relaxed">
                Imagine telling the bank: "I won't touch this money for one whole year." The bank will say: "Thank you! Because you are so patient, we will give you a <strong>Bigger Interest Gift</strong>!"
              </p>
              <div className="bg-white/60 p-4 rounded-2xl border border-emerald-200">
                <p className="text-xs font-bold text-emerald-900 uppercase mb-1">Kid's Secret Tip</p>
                <p className="text-xs text-emerald-700">The longer you "Lock" your money in an FD, the more it grows on its own!</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-emerald-100 flex items-center justify-center animate-pulse">
                  <Gift className="w-16 h-16 text-emerald-600" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-emerald-100">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Demat Account */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Laptop className="text-blue-500" />
          Phase 4: The Wealth Machine (Demat Account)
        </h3>
        <Card className="border-2 border-blue-100 bg-blue-50/50 p-8 md:p-12 rounded-[2.5rem]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-900">What is a Demat Account?</h4>
              <p className="text-blue-800 leading-relaxed">
                A Demat account is like a digital locker for your investments. Just like your savings account holds your money, a Demat account holds your shares, gold, and other investments in electronic form.
              </p>
              <div className="bg-white/60 p-4 rounded-2xl border border-blue-200">
                <p className="text-xs font-bold text-blue-900 uppercase mb-1">Kid's Secret Tip</p>
                <p className="text-xs text-blue-700">You can start investing in gold with as little as ₹20-100! This is where your real wealth-building journey begins.</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Stocks</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Gold</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">ETFs</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
                  <Laptop className="w-16 h-16 text-blue-600" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-blue-100">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default PiggyBankSection;