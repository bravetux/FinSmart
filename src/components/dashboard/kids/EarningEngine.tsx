"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  Lightbulb, 
  DollarSign, 
  Users, 
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight
} from 'lucide-react';

const EarningEngine = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-purple-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Briefcase className="w-4 h-4" />
            <span>The Value Exchange</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Earning Engine: How to Get Money
          </h2>
          <p className="text-purple-50 text-lg max-w-xl">
            Money is a reward for solving a problem or helping someone. Learn how to turn your ideas into coins!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Active vs Passive Income */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Zap className="text-amber-500" /> Two Ways to Earn
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-none shadow-md bg-white p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold">Active Income</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              This is when you trade your time for money. If you stop working (like doing chores or walking a dog), the money stops too.
            </p>
            <div className="mt-4 text-xs font-bold text-blue-600">Example: Chores, Babysitting, Lemonade Stand (while you are there)</div>
          </Card>
          <Card className="border-none shadow-md bg-white p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold">Passive Income</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              This is when your money or your idea works for you, even when you are sleeping or playing. It keeps earning!
            </p>
            <div className="mt-4 text-xs font-bold text-emerald-600">Example: Selling a digital drawing, Renting out a toy, Interest from the bank</div>
          </Card>
        </div>
      </section>

      {/* Kid-preneur Path */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Users className="text-blue-500" /> The Kid-preneur Path
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Idea</h4>
            <p className="text-xs text-slate-500">What problem can you solve? (e.g., neighbors need help with recycling)</p>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="text-slate-300 hidden md:block" />
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Profit</h4>
            <p className="text-xs text-slate-500">Charge more than it costs you to do the job (Expenses).</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarningEngine;