"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Building2, Landmark, ArrowRightLeft, Zap, ShieldCheck, CreditCard, Receipt } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const EquityOverview = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <LineChart className="w-4 h-4" />
            <span>Ownership & Growth</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">The Stock Market Universe</h2>
          <p className="text-blue-100 text-lg max-w-xl">
            Equity represents ownership in a company. When you buy a stock, you become a part-owner (shareholder) and participate in the company's success.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Demat Account Requirement */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-blue-600" /> Demat Account Requirement
        </h3>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="pt-6">
            <p className="text-blue-800 mb-4">
              A <strong>Demat (Dematerialized) account</strong> is required to purchase equity shares in India. It holds your shares in electronic format, similar to how a bank account holds your money.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-center">Depositories</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 p-4 bg-blue-100 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">C</div>
                      <span className="font-bold">CDSL</span>
                    </div>
                    <p className="text-sm text-blue-700">Central Depository Services Limited</p>
                    <p className="text-xs text-blue-600 mt-1">Works with brokers like Zerodha, Upstox</p>
                  </div>
                  
                  <div className="flex-1 p-4 bg-indigo-100 rounded-xl border border-indigo-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">N</div>
                      <span className="font-bold">NSDL</span>
                    </div>
                    <p className="text-sm text-indigo-700">National Securities Depository Limited</p>
                    <p className="text-xs text-indigo-600 mt-1">Works with brokers like ICICI Direct, Sharekhan</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-center">Regulation</h4>
                <div className="flex flex-col items-center justify-center h-full">
                  <ShieldCheck className="w-12 h-12 text-emerald-600 mb-3" />
                  <p className="text-center text-slate-700">
                    The <strong className="text-emerald-700">Securities and Exchange Board of India (SEBI)</strong> regulates the entire equity market to protect investors and ensure fair practices.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Taxation Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Receipt className="w-6 h-6 text-emerald-600" /> Equity Taxation
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-red-100 bg-red-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-800">
                <Zap className="w-5 h-5" /> Short-Term Capital Gains (STCG)
              </CardTitle>
              <CardDescription className="text-red-700">Holding period &lt; 12 months</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-red-900 leading-relaxed">
                Profits from selling equity shares held for less than 12 months are taxed at <strong>15%</strong> flat rate.
              </p>
              <div className="p-3 bg-white/60 rounded-xl border border-red-100 text-xs text-red-700 italic">
                Example: If you buy shares for ₹1,00,000 and sell them for ₹1,20,000 after 8 months, your gain of ₹20,000 will be taxed at 15% = ₹3,000.
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-emerald-100 bg-emerald-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-800">
                <ShieldCheck className="w-5 h-5" /> Long-Term Capital Gains (LTCG)
              </CardTitle>
              <CardDescription className="text-emerald-700">Holding period ≥ 12 months</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-emerald-900 leading-relaxed">
                Profits from selling equity shares held for 12 months or more are tax-free up to ₹1,00,000. Beyond that, the rate is <strong>10%</strong> without indexation.
              </p>
              <div className="p-3 bg-white/60 rounded-xl border border-emerald-100 text-xs text-emerald-700 italic">
                Example: If you sell shares after 2 years with a gain of ₹1,50,000, you pay 10% tax on ₹50,000 (₹1,50,000 - ₹1,00,000) = ₹5,000.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Primary vs Secondary Market */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Primary Market
            </CardTitle>
            <CardDescription>Where securities are created.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <p>This is where a company issues new shares to the public for the first time through an <strong>IPO (Initial Public Offering)</strong>.</p>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-xs text-amber-800">
              The money from investors goes <strong>directly to the company</strong> to fund growth.
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-blue-500" /> Secondary Market
            </CardTitle>
            <CardDescription>Where investors trade existing shares.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <p>This is what most people mean by "the stock market." Investors buy and sell shares from <strong>each other</strong> on exchanges.</p>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-800">
              The company is <strong>not involved</strong> in these transactions; the price is determined by supply and demand.
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Exchanges and Regulators */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Landmark className="w-6 h-6 text-indigo-600" /> The Ecosystem
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold">NSE</div>
            <h4 className="font-bold">National Stock Exchange</h4>
            <p className="text-xs text-slate-500">The largest exchange in India. Known for the <strong>Nifty 50</strong> index.</p>
          </div>
          
          <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold">BSE</div>
            <h4 className="font-bold">Bombay Stock Exchange</h4>
            <p className="text-xs text-slate-500">The oldest exchange in Asia. Known for the <strong>Sensex</strong> index.</p>
          </div>
          
          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
            <ShieldCheck className="w-10 h-10 text-emerald-400" />
            <h4 className="font-bold">SEBI</h4>
            <p className="text-xs text-slate-400">The "Market Watchdog" that ensures rules are followed and investors are protected.</p>
          </div>
        </div>
      </section>

      {/* Why Equity? */}
      <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
        <h4 className="text-xl font-bold text-blue-900 mb-4">Why Invest in Equity?</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h5 className="font-bold text-blue-800 text-sm">Wealth Creation</h5>
            <p className="text-xs text-blue-700 leading-relaxed">Historically, equity has outperformed inflation and fixed-income assets over long periods (10+ years).</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-bold text-blue-800 text-sm">Dividends</h5>
            <p className="text-xs text-blue-700 leading-relaxed">Some companies share a part of their profits with shareholders through regular cash payouts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquityOverview;