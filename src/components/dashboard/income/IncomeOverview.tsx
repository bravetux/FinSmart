"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Wallet, 
  ExternalLink, 
  TrendingUp, 
  Lightbulb, 
  Briefcase, 
  Minus, 
  Plus, 
  Equal, 
  ArrowRight, 
  ShieldCheck, 
  PiggyBank, 
  Landmark,
  CircleDollarSign
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const IncomeOverview = () => {
  const imageId = "1x3P9QLs4SXGcf-uzLrlotXFZzX3-QJFa";
  const imageUrl = `https://drive.google.com/uc?id=${imageId}&export=download`;
  const viewUrl = `https://drive.google.com/file/d/${imageId}/view?usp=sharing`;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Wallet className="w-12 h-12 text-indigo-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Income & Wealth Creation</h2>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Building wealth isn't just about how much you earn; it's about the systems you put in place to keep and grow your money.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* The Wealth Equations Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-indigo-600" /> The Wealth Equations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Equation 1: Savings */}
          <Card className="border-none shadow-lg bg-white overflow-hidden">
            <div className="h-2 bg-blue-500" />
            <CardHeader>
              <CardTitle className="text-xl">The Cash Flow Rule</CardTitle>
              <CardDescription>Your daily financial behavior determines your capacity to build wealth.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Income</p>
                </div>
                <Minus className="w-4 h-4 text-slate-300" />
                <div className="text-center">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <CircleDollarSign className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Expenses</p>
                </div>
                <Equal className="w-4 h-4 text-slate-300" />
                <div className="text-center">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <PiggyBank className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Savings</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                "Savings is the surplus left after you meet your needs and wants. This surplus is the raw material for building your future."
              </p>
            </CardContent>
          </Card>

          {/* Equation 2: Net Worth */}
          <Card className="border-none shadow-lg bg-white overflow-hidden">
            <div className="h-2 bg-indigo-500" />
            <CardHeader>
              <CardTitle className="text-xl">The Net Worth Rule</CardTitle>
              <CardDescription>The true measure of wealth is what you own minus what you owe.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-center">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Assets</p>
                </div>
                <Minus className="w-4 h-4 text-slate-300" />
                <div className="text-center">
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Liabilities</p>
                </div>
                <Equal className="w-4 h-4 text-slate-300" />
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-1">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Wealth</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed italic">
                "Wealth is the net result of your assets (things that put money in your pocket) minus your liabilities (things that take money out)."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Transformation Journey */}
      <section className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold">The Wealth Transformation</h3>
            <p className="text-slate-400 text-sm">How your active effort becomes passive freedom.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto border border-blue-500/30">
                <PiggyBank className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg">1. Consistent Savings</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  By controlling expenses, you generate a surplus every month.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-slate-700 hidden md:block" />
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto border border-emerald-500/30">
                <Landmark className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-lg">2. Strategic Investing</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  You deploy your savings into Assets (Equity, Gold, Real Estate) that grow over time.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
            <p className="text-sm text-slate-300 font-medium italic">
              "The goal is to grow your Assets until they generate enough income to cover your Expenses. That is Financial Freedom."
            </p>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10">
          <TrendingUp size={300} />
        </div>
      </section>

      {/* The Roadmap Image */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-indigo-600" />
              Visualizing the Roadmap
            </CardTitle>
            <CardDescription>
              A bird's eye view of how these concepts connect in the real world.
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={() => window.open(viewUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4" /> View Original
          </Button>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto bg-slate-50 rounded-xl p-4 md:p-8 flex flex-col items-center">
            <img 
              src={imageUrl} 
              alt="Financial Income Roadmap" 
              className="max-w-full h-auto min-w-[300px] md:min-w-[800px] rounded-lg shadow-sm border border-slate-200 bg-white"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncomeOverview;