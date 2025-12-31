"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Banknote, 
  ArrowRightLeft, 
  ShoppingCart, 
  Smile,
  Zap,
  History
} from 'lucide-react';

const MoneySection = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Introduction */}
      <div className="bg-amber-400 text-amber-950 p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 text-amber-900 text-sm font-bold backdrop-blur-sm">
            <Zap className="w-4 h-4 fill-current" />
            <span>Power Up Your Brain!</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            What is Money, Anyway?
          </h2>
          <p className="text-amber-900 text-lg max-w-xl font-medium">
            Is it just paper and coins? Nope! Money is like a "magic ticket" that everyone agrees to use to get things they want and need.
          </p>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10">
          <Banknote size={300} />
        </div>
      </div>

      {/* The Barter Story */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <History className="text-orange-500" /> Before Money: The Trading Game
        </h3>
        <Card className="border-2 border-orange-100 bg-orange-50/50">
          <CardContent className="pt-6 space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Imagine you have a <strong>shiny red apple</strong>, but you really want a <strong>toy car</strong>. You have to find someone who has a toy car AND wants an apple. This is called <strong>Barter</strong>.
            </p>
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-orange-200">
                <span className="text-4xl block mb-2">🍎</span>
                <span className="text-xs font-bold uppercase text-orange-600">Your Apple</span>
              </div>
              <ArrowRightLeft className="w-8 h-8 text-orange-400" />
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-orange-200">
                <span className="text-4xl block mb-2">🏎️</span>
                <span className="text-xs font-bold uppercase text-orange-600">Their Car</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 italic text-center">
              "Money was invented because finding the perfect trade was too hard!"
            </p>
          </CardContent>
        </Card>
      </section>

      {/* The Three Jobs of Money */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="bg-blue-50 border-none shadow-sm">
          <CardHeader className="text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">
              <ArrowRightLeft className="w-6 h-6" />
            </div>
            <CardTitle className="text-lg">Trading Tool</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-slate-600 text-sm">
            You use it to buy things like pizza, books, or video games without needing to trade your toys!
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 border-none shadow-sm">
          <CardHeader className="text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mx-auto mb-2">
              <Smile className="w-6 h-6" />
            </div>
            <CardTitle className="text-lg">Price Tag</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-slate-600 text-sm">
            It tells you how much something is worth. A candy bar might be $1, and a bike might be $100.
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-none shadow-sm">
          <CardHeader className="text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center mx-auto mb-2">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <CardTitle className="text-lg">Savings Jar</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-slate-600 text-sm">
            You can keep it and use it later. It doesn't rot like an apple or break like a toy!
          </CardContent>
        </Card>
      </section>

      {/* Fun Conclusion */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] text-center space-y-4">
        <h4 className="text-xl font-bold">The Golden Rule</h4>
        <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
          Remember: Money is just a tool. It's not about how much you have, but about how wisely you use it to help yourself and others!
        </p>
      </div>
    </div>
  );
};

export default MoneySection;