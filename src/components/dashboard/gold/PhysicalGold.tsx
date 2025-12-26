"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, Lock, ShoppingBag, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';

const PhysicalGold = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="flex items-start gap-4">
        <div className="bg-amber-100 p-3 rounded-2xl text-amber-700">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Physical Gold</h2>
          <p className="text-slate-600 mt-1">The traditional way of buying gold in the form of jewelry, coins, and bullion.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Gem className="w-5 h-5 text-amber-600" />
            Popular Forms
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center font-bold text-slate-400">01</div>
              <div>
                <h4 className="font-bold">Jewelry</h4>
                <p className="text-xs text-slate-500">Most common form, involves "making charges" (10-25%).</p>
              </div>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center font-bold text-slate-400">02</div>
              <div>
                <h4 className="font-bold">Coins & Bars</h4>
                <p className="text-xs text-slate-500">Higher purity (24K), lower making charges than jewelry.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Lock className="w-5 h-5 text-slate-600" />
            Storage & Security
          </h3>
          <Card className="bg-slate-900 text-white border-none shadow-xl">
            <CardContent className="pt-6 space-y-4">
              <div className="flex gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <p className="text-sm text-slate-300">Requires physical safety (Bank lockers or Home safes).</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="text-xs font-bold text-amber-400 uppercase mb-1">Key Tip</p>
                <p className="text-xs text-slate-300">Always buy "BIS Hallmarked" gold to ensure purity levels.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-emerald-100 bg-emerald-50/30">
          <CardHeader>
            <CardTitle className="text-emerald-700 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Pros
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <p>• Tangible asset you can hold and use.</p>
            <p>• No counterparty risk.</p>
            <p>• Deeply ingrained in cultural traditions.</p>
          </CardContent>
        </Card>
        <Card className="border-red-100 bg-red-50/30">
          <CardHeader>
            <CardTitle className="text-red-700 flex items-center gap-2">
              <XCircle className="w-5 h-5" /> Cons
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <p>• Making charges reduce actual gold value.</p>
            <p>• Storage costs and theft risk.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PhysicalGold;