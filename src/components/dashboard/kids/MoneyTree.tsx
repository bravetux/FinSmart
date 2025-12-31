"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  TreeDeciduous, 
  Snowflake, 
  Clock,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const MoneyTree = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <TreeDeciduous className="w-4 h-4" />
            <span>The Growth Secret</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Money Tree: Basic Investing
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Investing is like planting a seed. You give it time and water (money), and it grows into a big tree that gives you more seeds!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Compounding Analogy */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Snowflake className="text-blue-500" /> The Snowball Effect
        </h3>
        <Card className="border-2 border-blue-100 bg-blue-50/50 p-8 rounded-[2.5rem]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-blue-900">What is Compounding?</h4>
              <p className="text-blue-800 leading-relaxed">
                Imagine rolling a small snowball (your first savings). As it rolls, it picks up more snow (interest). The bigger the snowball gets, the faster it picks up even MORE snow! That's compounding—your earnings start earning their own money.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-40 h-40">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-blue-300" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-blue-200" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-blue-400" />
                <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white animate-pulse" />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Basic Stock Concept */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <TrendingUp className="text-purple-500" /> Owning a Piece of the Pie
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">What is a Stock?</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              A stock is a tiny piece of ownership in a big company (like the one that makes your favorite video game). When the company does well, your tiny piece of ownership becomes more valuable!
            </p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">The Golden Rule of Time</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              The most important ingredient for compounding is <strong>Time</strong>. The earlier you start planting your seeds, the bigger your money tree will be when you grow up.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MoneyTree;