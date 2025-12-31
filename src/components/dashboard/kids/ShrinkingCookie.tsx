"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cookie, 
  Clock, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const ShrinkingCookie = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-red-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <TrendingDown className="w-4 h-4" />
            <span>The Price Puzzle</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Shrinking Cookie: Understanding Inflation
          </h2>
          <p className="text-red-50 text-lg max-w-xl">
            Inflation means that over time, your money buys less stuff. It's like your favorite cookie shrinking every year!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Analogy */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Cookie className="text-orange-500" /> The Time Machine Lesson
        </h3>
        <Card className="border-2 border-orange-100 bg-orange-50/50 p-8 rounded-[2.5rem]">
          <div className="grid md:grid-cols-3 gap-6 text-center items-center">
            <div className="space-y-2">
              <p className="text-4xl">👵</p>
              <h4 className="font-bold">Grandma's Time</h4>
              <p className="text-sm text-slate-600">A toy car cost <strong>{currency.symbol}10</strong>.</p>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl">🧑</p>
              <h4 className="font-bold">Today</h4>
              <p className="text-sm text-slate-600">The same toy car costs <strong>{currency.symbol}20</strong>.</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white rounded-xl border border-orange-200 text-center">
            <p className="text-sm font-medium text-orange-800">
              The toy didn't change, but the value of the money did! This is inflation.
            </p>
          </div>
        </Card>
      </section>

      {/* Why it matters */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <AlertTriangle className="text-red-500" /> Why Saving in a Jar is Risky
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" /> The Jar Saver
            </CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              If you keep {currency.symbol}100 in a jar for 10 years, you still have {currency.symbol}100. But that {currency.symbol}100 buys much less because of inflation!
            </p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> The Smart Saver
            </CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              If you put {currency.symbol}100 in a bank or investment, it earns interest and grows bigger than the shrinking cookie, protecting your money!
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ShrinkingCookie;