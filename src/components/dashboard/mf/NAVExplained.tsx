"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DollarSign, Calculator, TrendingUp, AlertCircle, Info, Zap, ArrowUpDown } from 'lucide-react';

const NAVExplained = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Calculator className="w-4 h-4" />
            <span>The Price Tag</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            NAV: The Price of Your Mutual Fund
          </h2>
          <p className="text-emerald-50 text-lg max-w-2xl">
            Understanding Net Asset Value - the most important number in mutual fund investing.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* What is NAV */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <DollarSign className="w-6 h-6 text-emerald-600" />
            What is NAV?
          </CardTitle>
          <CardDescription>Net Asset Value explained simply</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-emerald-50 rounded-xl border-2 border-emerald-200">
            <p className="text-lg text-slate-900 font-semibold mb-2">
              NAV = Net Asset Value = Price of One Unit of the Mutual Fund
            </p>
            <p className="text-slate-700">
              Think of NAV like the price of a single share in a company. It tells you how much one unit of the mutual fund costs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">The Formula</h3>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-center text-lg font-mono text-slate-900 mb-4">
                NAV = (Total Assets - Total Liabilities) ÷ Total Outstanding Units
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-emerald-700">Total Assets</p>
                  <p className="text-slate-600">Market value of all stocks, bonds, cash held by the fund</p>
                </div>
                <div>
                  <p className="font-semibold text-red-700">Total Liabilities</p>
                  <p className="text-slate-600">Expenses, fees, other obligations of the fund</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-700">Outstanding Units</p>
                  <p className="text-slate-600">Total number of units held by all investors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Real Example</h3>
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-slate-700 mb-3"><strong>Suppose:</strong></p>
              <ul className="space-y-1 text-sm text-slate-700 mb-4">
                <li>• Total Assets = ₹100 crore (stocks + bonds + cash)</li>
                <li>• Total Liabilities = ₹2 crore (management fees, expenses)</li>
                <li>• Outstanding Units = 2 crore</li>
              </ul>
              <p className="text-base font-semibold text-slate-900">
                NAV = (₹100 cr - ₹2 cr) ÷ 2 cr = ₹98 ÷ 2 cr = <span className="text-emerald-600">₹49 per unit</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How NAV Changes */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <ArrowUpDown className="w-6 h-6 text-blue-600" />
            How Does NAV Change?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            NAV is calculated at the end of every trading day (around 9-10 PM). It changes based on the market value of the fund's holdings.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-green-50 rounded-xl border border-green-200">
              <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">NAV Increases When:</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Stock/bond prices rise</li>
                <li>• Dividends/interest received</li>
                <li>• Fund sells stocks at a profit</li>
                <li>• Overall market goes up</li>
              </ul>
            </div>
            <div className="p-5 bg-red-50 rounded-xl border border-red-200">
              <TrendingUp className="w-8 h-8 text-red-600 mb-3 rotate-180" />
              <h4 className="font-semibold text-slate-900 mb-2">NAV Decreases When:</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Stock/bond prices fall</li>
                <li>• Expenses/fees deducted</li>
                <li>• Fund sells stocks at a loss</li>
                <li>• Overall market goes down</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* NAV and Your Returns */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-900">NAV and Your Returns</CardTitle>
          <CardDescription>How you make money</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-slate-900 mb-3">Investment Scenario:</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>Day 1 (Purchase):</strong></p>
                <p className="pl-4">• You invest ₹10,000</p>
                <p className="pl-4">• NAV = ₹50</p>
                <p className="pl-4">• You get: ₹10,000 ÷ ₹50 = <strong>200 units</strong></p>
                
                <p className="mt-4"><strong>After 1 Year (Redemption):</strong></p>
                <p className="pl-4">• NAV = ₹60</p>
                <p className="pl-4">• Your investment value = 200 units × ₹60 = <strong className="text-green-600">₹12,000</strong></p>
                <p className="pl-4">• Your profit = ₹12,000 - ₹10,000 = <strong className="text-green-600">₹2,000 (20% return)</strong></p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Myths */}
      <Card className="border-amber-200 bg-amber-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            Common NAV Myths - Busted!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-b border-amber-200 pb-4">
              <p className="font-semibold text-red-700 mb-1">❌ Myth: "Low NAV funds are cheaper, so buy them"</p>
              <p className="text-sm text-slate-700">
                <strong>Reality:</strong> NAV doesn't matter! A fund with NAV ₹10 is NOT cheaper than one with NAV ₹100. What matters is the percentage return. Both can give 15% returns regardless of NAV.
              </p>
            </div>
            
            <div className="border-b border-amber-200 pb-4">
              <p className="font-semibold text-red-700 mb-1">❌ Myth: "High NAV means expensive"</p>
              <p className="text-sm text-slate-700">
                <strong>Reality:</strong> High NAV simply means the fund has been around longer and performed well. It's like saying a stock at ₹2000 is expensive - not true if it keeps growing!
              </p>
            </div>
            
            <div className="pb-2">
              <p className="font-semibold text-red-700 mb-1">❌ Myth: "Wait for NAV to drop before investing"</p>
              <p className="text-sm text-slate-700">
                <strong>Reality:</strong> This is like waiting for a stock to fall before buying. You can't time the market. Focus on the fund's quality, not NAV level.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-blue-200 bg-blue-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Zap className="w-5 h-5 text-blue-600" />
            Key Takeaways
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span><strong>NAV = Price per unit</strong> - It changes daily based on market value</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span><strong>Ignore NAV level</strong> - ₹10 NAV vs ₹100 NAV doesn't matter</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span><strong>Focus on returns</strong> - A ₹200 NAV fund giving 15% is better than a ₹20 NAV fund giving 8%</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <span><strong>NAV ≠ Fund Quality</strong> - Evaluate based on portfolio, fund manager, consistency, not NAV</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">5.</span>
              <span><strong>Your profit</strong> = (Exit NAV - Entry NAV) × Units held</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default NAVExplained;
