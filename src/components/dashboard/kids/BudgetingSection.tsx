"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  PieChart, 
  PiggyBank, 
  Gift,
  ArrowRight,
  Zap,
  CheckCircle2,
  XCircle
} from 'lucide-react';

const BudgetingSection = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-emerald-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <PieChart className="w-4 h-4" />
            <span>Be a Money Manager</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Needs vs. Wants: The Smart Choice
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Having money is great, but knowing how to spend it is a superpower! Learn the difference between what you "Must Have" and what you "Want to Have."
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Needs vs Wants Table */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-emerald-100 bg-emerald-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <CheckCircle2 className="w-6 h-6" /> Needs (Must Haves)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600">Things you absolutely need to stay healthy, safe, and learn.</p>
            <div className="grid grid-cols-2 gap-3">
              {['Healthy Food', 'A Home', 'Warm Clothes', 'School Books', 'Medicine', 'Water'].map((item) => (
                <div key={item} className="p-3 bg-white rounded-xl border border-emerald-200 text-center text-xs font-bold text-emerald-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-100 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Star className="w-6 h-6" /> Wants (Nice to Haves)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600">Things that are fun to have, but you can live without them.</p>
            <div className="grid grid-cols-2 gap-3">
              {['Video Games', 'Ice Cream', 'New Toys', 'Movie Tickets', 'Designer Shoes', 'Fancy Tablets'].map((item) => (
                <div key={item} className="p-3 bg-white rounded-xl border border-blue-200 text-center text-xs font-bold text-blue-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* The 3-Jar Method */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-center">The Magic 3-Jar Method</h3>
        <p className="text-slate-500 text-center max-w-2xl mx-auto">
          Whenever you get money (like for your birthday or chores), split it into three jars to manage it like a pro!
        </p>
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-white rounded-[2rem] shadow-lg border border-slate-100 text-center space-y-4 group hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
              <PiggyBank className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Save Jar (50%)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">For your BIG dreams, like a new bike or your future college fund.</p>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full w-1/2 bg-blue-500" />
            </div>
          </div>

          <div className="p-6 bg-white rounded-[2rem] shadow-lg border border-slate-100 text-center space-y-4 group hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Spend Jar (40%)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">For your weekly "Wants" like a candy bar, a comic book, or a small toy.</p>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full w-[40%] bg-emerald-500" />
            </div>
          </div>

          <div className="p-6 bg-white rounded-[2rem] shadow-lg border border-slate-100 text-center space-y-4 group hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto">
              <Gift className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Give Jar (10%)</h4>
            <p className="text-xs text-slate-500 leading-relaxed">For helping others, like buying a gift for a friend or donating to a charity.</p>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full w-[10%] bg-rose-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Tip */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] flex items-center gap-6">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm">
          <Zap className="w-8 h-8 text-amber-400" />
        </div>
        <div>
          <h4 className="text-xl font-bold">The 24-Hour Rule</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Really want that new toy? Wait 24 hours before buying it. If you still want it tomorrow, then it might be worth it. Often, the "Want" disappears overnight!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetingSection;