"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart, 
  Search, 
  PawPrint, 
  BookOpen, 
  Leaf,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const AdvancedGiving = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-pink-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Heart className="w-4 h-4" />
            <span>The Joy of Sharing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Advanced Giving: Making a Difference
          </h2>
          <p className="text-pink-50 text-lg max-w-xl">
            Giving money is great, but giving money wisely is even better. Learn how to choose where your "Give Jar" money goes!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* How to Choose */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Search className="text-blue-500" /> Choosing Your Cause
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto">
              <PawPrint className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Animals</h4>
            <p className="text-xs text-slate-500">Helping shelters and protecting wildlife.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Education</h4>
            <p className="text-xs text-slate-500">Buying books or helping kids go to school.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mx-auto">
              <Leaf className="w-6 h-6" />
            </div>
            <h4 className="font-bold">The Planet</h4>
            <p className="text-xs text-slate-500">Planting trees and keeping the oceans clean.</p>
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <CheckCircle2 className="text-emerald-400" /> The Real Reward
          </h3>
          <p className="text-slate-400 leading-relaxed">
            When you give wisely, your money doesn't just disappear—it turns into real-world help. This is called <strong>Philanthropy</strong>, and it's one of the most powerful things money can do!
          </p>
          <div className="pt-4 flex items-center gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white">Track Your Impact</div>
            <ArrowRight className="w-4 h-4 text-slate-600" />
            <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold text-white">Feel Good</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedGiving;