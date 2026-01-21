"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Users, PiggyBank, TrendingUp, Shield, Zap, CheckCircle, AlertCircle, Target } from 'lucide-react';

const Overview = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <BookOpen className="w-4 h-4" />
            <span>Getting Started</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Mutual Funds: Your Gateway to Smart Investing
          </h2>
          <p className="text-blue-50 text-lg max-w-2xl">
            Pool your money with thousands of investors, managed by professionals, to build wealth systematically.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* What are Mutual Funds */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Users className="w-6 h-6 text-blue-600" />
            What is a Mutual Fund?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            A mutual fund is a professionally managed investment vehicle that pools money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <h4 className="font-semibold text-slate-900 mb-1">Pooled Investment</h4>
              <p className="text-sm text-slate-600">Many investors contribute to a common fund</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <Target className="w-8 h-8 text-green-600 mb-2" />
              <h4 className="font-semibold text-slate-900 mb-1">Professional Management</h4>
              <p className="text-sm text-slate-600">Expert fund managers make investment decisions</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <Shield className="w-8 h-8 text-purple-600 mb-2" />
              <h4 className="font-semibold text-slate-900 mb-1">Diversified Portfolio</h4>
              <p className="text-sm text-slate-600">Invest in multiple assets to reduce risk</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How It Works - Simple Flow */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-900">How Does It Work?</CardTitle>
          <CardDescription>A simple flow of mutual fund investment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-slate-900">You Invest Money</h4>
                <p className="text-sm text-slate-600">You buy "units" of the mutual fund with your investment amount</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-slate-900">Fund Manager Invests</h4>
                <p className="text-sm text-slate-600">The pooled money is invested in stocks, bonds, or other securities</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-slate-900">Portfolio Grows (or Falls)</h4>
                <p className="text-sm text-slate-600">The value of your units changes based on market performance</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-slate-900">You Redeem or Hold</h4>
                <p className="text-sm text-slate-600">Sell your units anytime (subject to exit load) or continue investing</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Benefits */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Why Invest in Mutual Funds?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Professional Management</h4>
                  <p className="text-sm text-slate-600">Expert fund managers research and manage investments for you</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Diversification</h4>
                  <p className="text-sm text-slate-600">Invest in 30-50+ stocks with small amounts, reducing risk</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Low Investment Amount</h4>
                  <p className="text-sm text-slate-600">Start with as little as ₹500 via SIP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Liquidity</h4>
                  <p className="text-sm text-slate-600">Redeem your investment anytime (except ELSS funds)</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Regulated & Transparent</h4>
                  <p className="text-sm text-slate-600">Regulated by SEBI with mandatory disclosures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Systematic Investment (SIP)</h4>
                  <p className="text-sm text-slate-600">Invest regularly to benefit from rupee cost averaging</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Tax Efficiency</h4>
                  <p className="text-sm text-slate-600">Better tax treatment compared to bank FDs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Flexibility</h4>
                  <p className="text-sm text-slate-600">Choose from thousands of schemes across categories</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Considerations */}
      <Card className="border-amber-200 bg-amber-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            Things to Keep in Mind
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span className="text-slate-700"><strong>Market Risk:</strong> Returns are not guaranteed; they fluctuate with market conditions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span className="text-slate-700"><strong>Costs Matter:</strong> Pay attention to expense ratios and exit loads</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span className="text-slate-700"><strong>Past Performance ≠ Future Returns:</strong> Historical returns don't guarantee future success</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span className="text-slate-700"><strong>Long-term Investment:</strong> Best results come from staying invested for 5+ years</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="border-blue-200 bg-blue-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Zap className="w-5 h-5 text-blue-600" />
            Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-slate-700">
              1. <strong>Understand Types:</strong> Learn about Equity, Debt, and Hybrid funds<br/>
              2. <strong>Learn NAV:</strong> Understand how mutual fund pricing works<br/>
              3. <strong>Direct vs Regular:</strong> Choose the right investment mode<br/>
              4. <strong>Start Small:</strong> Begin with a SIP in an index fund or balanced fund
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
