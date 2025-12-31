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
  XCircle,
  Target,
  ClipboardList
} from 'lucide-react';

const BudgetingSection = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-emerald-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <PieChart className="w-4 h-4" />
            <span>The Budgeting Adventure</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            How to Master Your Money
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Budgeting is like having a "treasure map" for your money. It tells your coins where to go so you don't wonder where they went!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Step 1: Connecting from Piggy Bank */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <PiggyBank className="text-pink-500" /> Step 1: Use Your Piggy Bank Power
        </h3>
        <Card className="border-none shadow-md bg-white p-8 rounded-[2.5rem]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-pink-50 rounded-3xl flex items-center justify-center shrink-0">
              <PiggyBank className="w-12 h-12 text-pink-500" />
            </div>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Remember your <strong>Piggy Bank</strong>? It's great at collecting coins, but it doesn't know what you want to buy. 
                <strong>Budgeting</strong> is the brain that tells your Piggy Bank what to do!
              </p>
              <div className="flex gap-4">
                <div className="bg-slate-50 px-4 py-2 rounded-xl text-xs font-bold text-slate-500">Piggy Bank = The Vault</div>
                <ArrowRight className="w-4 h-4 text-slate-300" />
                <div className="bg-emerald-50 px-4 py-2 rounded-xl text-xs font-bold text-emerald-600">Budget = The Map</div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Step 2: How to Budget */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <ClipboardList className="text-blue-500" /> Step 2: How to Create a Budget
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Set a Goal</h4>
            <p className="text-xs text-slate-500">Decide exactly what you want to buy (like a new game or a bike).</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mx-auto">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Split the Money</h4>
            <p className="text-xs text-slate-500">Use the <strong>3-Jar Method</strong> to decide how much to save and spend.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold">Stick to It</h4>
            <p className="text-xs text-slate-500">Don't spend your "Save Jar" money on candies. That's for your Big Goal!</p>
          </div>
        </div>

        {/* The 3-Jar Method Re-iterated */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-white rounded-[2rem] shadow-lg border border-slate-100 text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
              <PiggyBank className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Save Jar (50%)</h4>
            <p className="text-xs text-slate-500">This goes toward your <strong>Big Goals</strong>.</p>
          </div>
          <div className="p-6 bg-white rounded-[2rem] shadow-lg border border-slate-100 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Spend Jar (40%)</h4>
            <p className="text-xs text-slate-500">For small treats you want <strong>Right Now</strong>.</p>
          </div>
          <div className="p-6 bg-white rounded-[2rem] shadow-lg border border-slate-100 text-center space-y-4">
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto">
              <Gift className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Give Jar (10%)</h4>
            <p className="text-xs text-slate-500">To help others or buy <strong>Gifts</strong>.</p>
          </div>
        </div>
      </section>

      {/* Step 3: Smart Spending */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <ShoppingCart className="text-emerald-500" /> Step 3: Move to Smart Spending
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-emerald-100 bg-emerald-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-700 text-lg">
                <CheckCircle2 className="w-5 h-5" /> Needs (Must Haves)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Food', 'Clothes', 'School', 'Home'].map(n => (
                  <span key={n} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-emerald-600 border border-emerald-100">{n}</span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 text-lg">
                <Star className="w-5 h-5" /> Wants (Nice to Haves)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Toys', 'Candy', 'Video Games', 'Movies'].map(w => (
                  <span key={w} className="px-3 py-1 bg-white rounded-full text-xs font-bold text-blue-600 border border-blue-100">{w}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Actionable Tip */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] flex items-center gap-6">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
          <Zap className="w-8 h-8 text-amber-400" />
        </div>
        <div>
          <h4 className="text-xl font-bold">The Secret Master Plan</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            A budget isn't a "No" to spending. It's a "Yes" to spending on the things that <strong>matter most</strong> to you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetingSection;