"use client";

import React from 'react';
import { Globe, IndianRupee, DollarSign, ShoppingCart, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PPP = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
          <Globe className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Purchasing Power Parity (PPP)</h2>
      </div>

      <Card className="border-none shadow-xl bg-slate-900 text-white overflow-hidden relative">
        <CardContent className="p-8 md:p-12 relative z-10">
          <p className="text-xl font-bold text-blue-400 mb-6 italic">PPP = Purchasing Power Parity</p>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            Sounds fancy. It’s actually very simple.
          </p>

          <div className="space-y-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Imagine this:</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <IndianRupee className="w-5 h-5" />
                    <span className="font-bold">India</span>
                  </div>
                  <p className="text-slate-400">Your father gives you ₹100.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-400">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-bold">USA</span>
                  </div>
                  <p className="text-slate-400">Your cousin gets $1.</p>
                </div>
              </div>
            </div>

            <div className="text-center py-4">
              <p className="text-xl font-bold">Both amounts look different. But the real question is:</p>
              <p className="text-2xl text-blue-400 font-black mt-2">What can you buy with that money in your own country?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-emerald-500/30">
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-400">In India, ₹100 can buy:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-slate-300">
                  <p>• Snacks + Chai</p>
                  <p>• Mobile recharge</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-red-500/30">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">In the USA, $1 can buy:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-slate-300">
                  <p>• Maybe a small candy</p>
                  <p>• Not even a metro ticket</p>
                </CardContent>
              </Card>
            </div>

            <div className="p-6 bg-blue-600 rounded-2xl text-center shadow-lg shadow-blue-900/50">
              <p className="text-lg leading-relaxed">
                So even though ₹100 ≠ $1 in exchange rate, 
                <br />
                <span className="font-bold text-white">₹100 has more “buying power” in India.</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 pt-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">That buying power is PPP.</p>
                <p className="text-slate-400 mt-2 font-serif italic text-lg">"PPP measures pain"</p>
              </div>
            </div>
          </div>
        </CardContent>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </Card>
    </div>
  );
};

export default PPP;