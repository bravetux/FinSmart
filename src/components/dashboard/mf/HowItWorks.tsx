"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Workflow, Users, Building2, TrendingUp, ArrowRightLeft, Wallet, Target, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Workflow className="w-4 h-4" />
            <span>Behind the Scenes</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            How Mutual Funds Actually Work
          </h2>
          <p className="text-purple-50 text-lg max-w-2xl">
            A detailed look at the mechanics of mutual fund investing and how your money grows.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* The Flow */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-900">The Mutual Fund Journey</CardTitle>
          <CardDescription>From your investment to returns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Investors Pool Money</h3>
                <p className="text-slate-700 mb-3">
                  Thousands of investors (retail and institutional) contribute money to a mutual fund scheme. Each investor buys "units" of the fund.
                </p>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-slate-700">
                    <strong>Example:</strong> If a fund's NAV is ₹50 and you invest ₹10,000, you get 200 units (₹10,000 ÷ ₹50).
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Asset Management Company (AMC)</h3>
                <p className="text-slate-700 mb-3">
                  The AMC (like SBI MF, HDFC MF, ICICI Prudential) creates and manages the fund. They appoint a fund manager who decides where to invest.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-semibold text-slate-900">AMC's Role</p>
                    <ul className="text-xs text-slate-600 mt-1 space-y-1">
                      <li>• Launch & manage schemes</li>
                      <li>• Hire fund managers</li>
                      <li>• Handle operations</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-semibold text-slate-900">Fund Manager's Role</p>
                    <ul className="text-xs text-slate-600 mt-1 space-y-1">
                      <li>• Research stocks/bonds</li>
                      <li>• Buy & sell securities</li>
                      <li>• Rebalance portfolio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Investment in Securities</h3>
                <p className="text-slate-700 mb-3">
                  The pooled money is invested in a portfolio of securities based on the fund's objective.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Equity Funds:</strong> Invest in stocks (shares of companies)</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Debt Funds:</strong> Invest in bonds, government securities, corporate debt</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Hybrid Funds:</strong> Mix of equity and debt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">4. NAV Changes Daily</h3>
                <p className="text-slate-700 mb-3">
                  As stock/bond prices change, the Net Asset Value (NAV) of the fund changes. NAV is calculated at the end of each trading day.
                </p>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <p className="text-sm text-slate-700">
                    <strong>NAV Formula:</strong> (Total Assets - Total Liabilities) ÷ Number of Outstanding Units
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <ArrowRightLeft className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">5. Continuous Buying & Selling</h3>
                <p className="text-slate-700 mb-3">
                  Investors can buy (invest) or sell (redeem) units on any business day. The AMC processes these transactions at the day's NAV.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <p className="text-sm font-semibold text-slate-900">Purchase</p>
                    <p className="text-xs text-slate-600 mt-1">You get units = Investment Amount ÷ NAV</p>
                  </div>
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <p className="text-sm font-semibold text-slate-900">Redemption</p>
                    <p className="text-xs text-slate-600 mt-1">You receive = Units × NAV (minus exit load if any)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">6. You Earn Returns</h3>
                <p className="text-slate-700 mb-3">
                  Your returns come from capital appreciation (NAV increase) and dividends/interest earned by the fund.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Growth Option:</strong> NAV increases, you sell at a higher price</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Dividend Option:</strong> Fund distributes profits periodically (NAV reduces by dividend amount)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Entities */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-900">Key Players in Mutual Funds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-slate-900 mb-2">SEBI (Regulator)</h4>
              <p className="text-sm text-slate-600">Securities and Exchange Board of India regulates all mutual funds and protects investor interests.</p>
            </div>
            <div className="p-5 bg-green-50 rounded-xl border border-green-200">
              <h4 className="font-semibold text-slate-900 mb-2">AMC (Manager)</h4>
              <p className="text-sm text-slate-600">Asset Management Company creates schemes, hires fund managers, handles operations.</p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-slate-900 mb-2">Fund Manager</h4>
              <p className="text-sm text-slate-600">Professional who researches and decides where to invest the pooled money.</p>
            </div>
            <div className="p-5 bg-orange-50 rounded-xl border border-orange-200">
              <h4 className="font-semibold text-slate-900 mb-2">Custodian</h4>
              <p className="text-sm text-slate-600">Holds the securities (stocks/bonds) on behalf of the fund for safekeeping.</p>
            </div>
            <div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
              <h4 className="font-semibold text-slate-900 mb-2">Registrar (RTA)</h4>
              <p className="text-sm text-slate-600">Maintains investor records, processes transactions, sends statements (e.g., CAMS, KFintech).</p>
            </div>
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-semibold text-slate-900 mb-2">Distributor/Platform</h4>
              <p className="text-sm text-slate-600">Helps you invest (banks, online platforms, advisors) - may charge commission.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowItWorks;
