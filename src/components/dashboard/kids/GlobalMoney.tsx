"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  DollarSign, 
  Euro, 
  IndianRupee, 
  ArrowRightLeft,
  CheckCircle2
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const GlobalMoney = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-sky-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Globe className="w-4 h-4" />
            <span>Money Around the World</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Global Money: The Currency Exchange
          </h2>
          <p className="text-sky-50 text-lg max-w-xl">
            Every country has its own "magic ticket" (currency). Learn how they trade and why their values change!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Currency Comparison */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <ArrowRightLeft className="text-blue-500" /> The Trading Game
        </h3>
        <Card className="border-2 border-blue-100 bg-blue-50/50 p-8 rounded-[2.5rem]">
          <div className="grid md:grid-cols-3 gap-6 text-center items-center">
            <div className="space-y-2">
              <IndianRupee className="w-12 h-12 text-slate-700 mx-auto" />
              <h4 className="font-bold">Indian Rupee ({currency.symbol})</h4>
              <p className="text-sm text-slate-600">Our money!</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ArrowRightLeft className="w-8 h-8 text-blue-400" />
              <p className="text-xs font-bold text-blue-600 mt-2">Exchange Rate</p>
            </div>
            <div className="space-y-2">
              <DollarSign className="w-12 h-12 text-slate-700 mx-auto" />
              <h4 className="font-bold">US Dollar ($)</h4>
              <p className="text-sm text-slate-600">America's money!</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white rounded-xl border border-blue-200 text-center">
            <p className="text-sm font-medium text-blue-800">
              Today, 1 US Dollar might be worth 83 Indian Rupees. This value changes every day!
            </p>
          </div>
        </Card>
      </section>

      {/* Why it matters */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500" /> Why Exchange Rates Change
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">Demand</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              If lots of people want to buy things from America, they need US Dollars. High demand makes the Dollar more expensive.
            </p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">Country's Health</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              If a country is doing well (making lots of cool stuff), its money usually becomes stronger compared to others.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GlobalMoney;