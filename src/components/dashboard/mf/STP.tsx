"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRightLeft, ShieldCheck, TrendingUp, Info, CheckCircle2, Calculator } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STP = () => {
  const [amount, setAmount] = useState("100000");
  const [transfer, setTransfer] = useState("5000");

  return (
    <div className="max-w-5xl mx-auto space-y-12 p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Systematic Transfer Plan (STP)</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          The smart way to transition your wealth from stability to growth while managing market volatility.
        </p>
      </div>

      {/* Visual Flow */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 py-12 px-4 bg-slate-50 rounded-3xl border border-slate-100">
        <div className="relative z-10 p-8 bg-white rounded-2xl shadow-xl border border-blue-100 text-center w-full max-w-[240px]">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="text-blue-600" />
          </div>
          <h4 className="font-bold text-slate-900">Debt Fund</h4>
          <p className="text-sm text-slate-500 mt-1">Source (Low Risk)</p>
          <div className="mt-4 pt-4 border-t border-slate-50 font-mono text-blue-600 font-bold">
            Lumpsum Entry
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-blue-500">
            <div className="h-[2px] w-12 bg-blue-200 hidden md:block"></div>
            <ArrowRightLeft className="w-8 h-8 animate-pulse" />
            <div className="h-[2px] w-12 bg-blue-200 hidden md:block"></div>
          </div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Regular Transfers</span>
        </div>

        <div className="relative z-10 p-8 bg-white rounded-2xl shadow-xl border border-emerald-100 text-center w-full max-w-[240px]">
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="text-emerald-600" />
          </div>
          <h4 className="font-bold text-slate-900">Equity Fund</h4>
          <p className="text-sm text-slate-500 mt-1">Target (Growth)</p>
          <div className="mt-4 pt-4 border-t border-slate-50 font-mono text-emerald-600 font-bold">
            Rupee Cost Averaging
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-none shadow-md bg-white">
          <CardHeader>
            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-2">
              <Calculator className="text-orange-600 w-5 h-5" />
            </div>
            <CardTitle className="text-lg">STP Calculator</CardTitle>
            <CardDescription>Estimate your transfer timeline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="lumpsum">Initial Lumpsum</Label>
              <Input 
                id="lumpsum" 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transfer">Monthly Transfer</Label>
              <Input 
                id="transfer" 
                type="number" 
                value={transfer} 
                onChange={(e) => setTransfer(e.target.value)}
              />
            </div>
            <div className="pt-4 p-4 bg-slate-50 rounded-lg">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Transfer Duration:</span>
                <span className="font-bold text-slate-900">{Math.ceil(Number(amount) / Number(transfer))} Months</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border-none shadow-md bg-white">
          <CardHeader>
            <CardTitle>Why choose STP?</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Risk Mitigation", desc: "Reduces the risk of investing a large sum at a market peak." },
              { title: "Better Returns", desc: "Earn debt fund returns on the idle balance while transferring." },
              { title: "Market Averaging", desc: "Automated buying at different market levels (low & high)." },
              { title: "Discipline", desc: "Ensures consistent equity exposure without emotional bias." }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 className="text-emerald-500 w-5 h-5 shrink-0" />
                <div>
                  <h5 className="font-bold text-sm text-slate-900">{benefit.title}</h5>
                  <p className="text-xs text-slate-500 mt-1">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 text-white">
        <div className="flex items-start gap-4 mb-6">
          <Info className="text-blue-400 w-6 h-6 shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold">Expert Tip</h3>
            <p className="text-slate-400 mt-2">
              STPs are most effective during volatile or bearish markets. By spreading your entry over 6-12 months, you ensure you don't catch the "wrong" price.
            </p>
          </div>
        </div>
        <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
          Start an STP Now
        </Button>
      </div>
    </div>
  );
};

export default STP;