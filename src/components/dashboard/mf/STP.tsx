"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRightLeft, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Layers, 
  RefreshCcw, 
  Info,
  Scale,
  Percent,
  History,
  AlertTriangle,
  Briefcase
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const STP = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold tracking-tight">Systematic Transfer Plan (STP)</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          The ultimate strategy to "park and play." Shift your money automatically from safe debt funds to growth-oriented equity funds.
        </p>
      </div>

      {/* The Mechanism Infographic */}
      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          <div className="flex flex-col items-center gap-4 w-full max-w-[200px]">
            <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center border-2 border-slate-100">
              <ShieldCheck className="w-10 h-10 text-slate-600" />
            </div>
            <div className="text-center">
              <h4 className="font-bold">Source Fund</h4>
              <p className="text-xs text-slate-500">Usually Liquid/Debt</p>
              <Badge variant="secondary" className="mt-2">Safe Parking</Badge>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-200 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
              <ArrowRightLeft className="w-12 h-12 text-blue-500 mx-4" />
              {[1, 2, 3].map(i => (
                <div key={i} className="w-2 h-2 rounded-full bg-blue-200 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Automatic Transfer</span>
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-[200px]">
            <div className="w-20 h-20 rounded-2xl bg-blue-600 shadow-lg shadow-blue-200 flex items-center justify-center">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h4 className="font-bold">Target Fund</h4>
              <p className="text-xs text-slate-500">Usually Equity</p>
              <Badge className="bg-green-100 text-green-700 mt-2 hover:bg-green-100 border-none">Wealth Creation</Badge>
            </div>
          </div>
        </div>
        <p className="text-center text-sm font-medium text-slate-500 mt-8 italic">
          *Note: Transfers only work within the same Asset Management Company (AMC).
        </p>
      </div>

      {/* STP Types */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-2">
              <Layers className="text-orange-600 w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Fixed STP</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              Transfer a predetermined fixed amount regularly. Best for predictable, disciplined investing.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-2">
              <RefreshCcw className="text-blue-600 w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Flexible STP</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              Determine the amount on the go based on market volatility or predicted performance.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-2">
              <Zap className="text-green-600 w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Capital Appreciation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              Only the profit (gains) from your source fund is transferred. Your principal stays safe.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* The Rulebook (Features) */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-600" />
            The STP Rulebook
          </h3>
          <div className="space-y-4">
            {[
              { label: "Minimum Investment", value: "₹12,000 (typical AMC requirement)", icon: <Briefcase /> },
              { label: "Minimum Transfers", value: "At least 6 transfers required", icon: <History /> },
              { label: "Entry Load", value: "Zero (No charges to join)", icon: <Percent /> },
              { label: "Exit Load", value: "Up to 2% (0% for Liquid to Equity)", icon: <AlertTriangle /> },
            ].map((rule, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                  {React.cloneElement(rule.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{rule.label}</p>
                  <p className="font-medium text-slate-800">{rule.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6">
          <h3 className="text-xl font-bold">Why Investors Love It</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="mt-1 bg-green-500/20 p-1 rounded-full"><TrendingUp className="w-4 h-4 text-green-400" /></div>
              <div>
                <p className="font-bold">Higher Returns</p>
                <p className="text-sm text-slate-400">Maximize profits by shifting to more profitable ventures during market swings.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 bg-blue-500/20 p-1 rounded-full"><Scale className="w-4 h-4 text-blue-400" /></div>
              <div>
                <p className="font-bold">Market Stability</p>
                <p className="text-sm text-slate-400">Ensures safe-keeping of funds in debt during high volatility.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 bg-purple-500/20 p-1 rounded-full"><RefreshCcw className="w-4 h-4 text-purple-400" /></div>
              <div>
                <p className="font-bold">Rupee Cost Averaging</p>
                <p className="text-sm text-slate-400">Buy more when prices are low, sell when they increase.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Taxability Alert */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="p-4 bg-white rounded-xl shadow-sm">
          <Percent className="w-10 h-10 text-amber-600" />
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-amber-900">Taxability Check</h4>
          <p className="text-sm text-amber-800 leading-relaxed">
            Every transfer is considered a <strong>Redemption</strong>. 
            Gains are subject to tax: <span className="font-bold">15%</span> for Short Term (&lt;3 years) or variable for Long Term based on your income slab.
          </p>
        </div>
      </div>

      {/* Who should invest */}
      <div className="text-center bg-blue-50 rounded-3xl p-10 space-y-4 border border-blue-100">
        <h3 className="text-2xl font-bold">Is STP for you?</h3>
        <p className="text-slate-600 max-w-xl mx-auto">
          Ideal for those with limited resources who want high returns without timing the market. 
          Also perfect for risk-averse investors wanting to shift to safer debt instruments during market crashes.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Badge className="px-4 py-1.5 bg-blue-600">Long-term Focus</Badge>
          <Badge className="px-4 py-1.5 bg-blue-600">Disciplined Saving</Badge>
        </div>
      </div>
    </div>
  );
};

export default STP;