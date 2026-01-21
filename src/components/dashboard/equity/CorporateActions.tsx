"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gift, Users, ShoppingBag, TrendingUp, Percent, Calculator, ArrowRight, AlertCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const CorporateActions = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Gift className="w-4 h-4" />
            <span>Company Announcements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Corporate Actions
          </h2>
          <p className="text-purple-100 text-lg max-w-xl">
            Events initiated by a company that affect its shareholders. Understanding these helps you know when you get free shares, dilution, or opportunities to buy more.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Bonus Shares */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Gift className="w-6 h-6 text-emerald-600" /> Bonus Shares
        </h3>
        <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-emerald-800">What are Bonus Shares?</CardTitle>
            <CardDescription className="text-emerald-700">Free additional shares given to existing shareholders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              A bonus issue is when a company distributes additional shares to existing shareholders for free, proportional to their current holdings. This is done by capitalizing reserves.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl border border-emerald-100 space-y-3">
                <h4 className="font-bold text-slate-900">How It Works</h4>
                <p className="text-xs text-slate-600">
                  If a company announces a <strong>1:1 bonus</strong>, it means for every 1 share you own, you get 1 additional free share.
                </p>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="text-xs font-bold text-emerald-800 uppercase mb-1">Example</p>
                  <p className="text-xs text-emerald-700">
                    You own 100 shares. After a 1:1 bonus, you own 200 shares. Your total investment value remains the same, but the share price typically adjusts downward proportionally.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-emerald-100 space-y-3">
                <h4 className="font-bold text-slate-900">Ratio Examples</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-xs font-bold">1:1</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span className="text-xs">1 bonus per 1 held</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-xs font-bold">1:2</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span className="text-xs">1 bonus per 2 held</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-xs font-bold">2:1</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span className="text-xs">2 bonus per 1 held</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-2">
                <Calculator className="w-4 h-4" /> Price Adjustment Example
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <p className="font-bold text-blue-800">Before Bonus (1:1)</p>
                  <p>Shares: 100 | Price: {currency.symbol}1,000</p>
                  <p className="font-bold">Value: {currency.symbol}1,00,000</p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-blue-800">After Bonus</p>
                  <p>Shares: 200 | Price: {currency.symbol}500</p>
                  <p className="font-bold">Value: {currency.symbol}1,00,000</p>
                </div>
              </div>
              <p className="text-xs text-blue-700 mt-3 italic">
                Your total value doesn't change immediately, but you now own more shares at a lower price.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <p className="text-xs font-bold text-emerald-900 uppercase mb-1">Why Companies Do This</p>
                <ul className="space-y-1 text-xs text-emerald-800">
                  <li className="flex gap-2"><span>•</span> Reward shareholders without cash outflow</li>
                  <li className="flex gap-2"><span>•</span> Increase liquidity (more shares trading)</li>
                  <li className="flex gap-2"><span>•</span> Make shares more affordable</li>
                  <li className="flex gap-2"><span>•</span> Signal confidence in future growth</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-100 rounded-xl">
                <p className="text-xs font-bold text-slate-900 uppercase mb-1">Tax Implication</p>
                <p className="text-xs text-slate-700">
                  Bonus shares are <strong>tax-free</strong> when received. Tax is applicable only when you sell them, based on their holding period.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Rights Issue */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-600" /> Rights Issue
        </h3>
        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800">What is a Rights Issue?</CardTitle>
            <CardDescription className="text-blue-700">Opportunity to buy additional shares at a discounted price</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              A rights issue gives existing shareholders the <strong>right</strong> (but not obligation) to buy additional shares at a price usually lower than the current market price, in proportion to their existing holdings.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl border border-blue-100 space-y-3">
                <h4 className="font-bold text-slate-900">How It Works</h4>
                <p className="text-xs text-slate-600">
                  If a company announces a <strong>1:5 rights issue at {currency.symbol}100</strong>, it means for every 5 shares you own, you can buy 1 additional share at {currency.symbol}100 (even if market price is {currency.symbol}150).
                </p>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs font-bold text-blue-800 uppercase mb-1">Example</p>
                  <p className="text-xs text-blue-700">
                    You own 500 shares. You're eligible to buy 100 more shares (500 ÷ 5) at {currency.symbol}100 each. Total additional investment: {currency.symbol}10,000.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-blue-100 space-y-3">
                <h4 className="font-bold text-slate-900">Your Options</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-slate-50 rounded flex items-start gap-2">
                    <Percent className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold">Subscribe</p>
                      <p className="text-[10px] text-slate-600">Buy the offered shares</p>
                    </div>
                  </div>
                  <div className="p-2 bg-slate-50 rounded flex items-start gap-2">
                    <Percent className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold">Renounce</p>
                      <p className="text-[10px] text-slate-600">Sell your rights in the market</p>
                    </div>
                  </div>
                  <div className="p-2 bg-slate-50 rounded flex items-start gap-2">
                    <Percent className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold">Do Nothing</p>
                      <p className="text-[10px] text-slate-600">Let it lapse (lose opportunity)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 text-sm">Dilution Alert</h4>
                <p className="text-xs text-amber-800 leading-relaxed">
                  If you don't subscribe, your ownership percentage in the company will decrease because new shares are issued. This is called <strong>dilution</strong>.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <p className="text-xs font-bold text-blue-900 uppercase mb-1">Why Companies Do This</p>
                <ul className="space-y-1 text-xs text-blue-800">
                  <li className="flex gap-2"><span>•</span> Raise capital for expansion or debt repayment</li>
                  <li className="flex gap-2"><span>•</span> Reward loyal shareholders with discount</li>
                  <li className="flex gap-2"><span>•</span> Avoid bank loans (cheaper funding)</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-100 rounded-xl">
                <p className="text-xs font-bold text-slate-900 uppercase mb-1">Should You Subscribe?</p>
                <p className="text-xs text-slate-700">
                  Only if you believe in the company's future. Check how they'll use the funds and if the business fundamentals remain strong.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Buyback */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-indigo-600" /> Share Buyback
        </h3>
        <Card className="border-indigo-200 bg-indigo-50/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-indigo-800">What is a Buyback?</CardTitle>
            <CardDescription className="text-indigo-700">Company repurchases its own shares from shareholders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              A buyback occurs when a company offers to buy back its own shares from existing shareholders, usually at a premium to the current market price.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-xl border border-indigo-100 space-y-3">
                <h4 className="font-bold text-slate-900">How It Works</h4>
                <p className="text-xs text-slate-600">
                  Company announces buyback at, say, {currency.symbol}500 when market price is {currency.symbol}450. You can tender your shares and receive {currency.symbol}500 per share (a 11% premium).
                </p>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-xs font-bold text-indigo-800 uppercase mb-1">Example</p>
                  <p className="text-xs text-indigo-700">
                    You own 1,000 shares bought at {currency.symbol}400. Company buys back at {currency.symbol}500. You can sell some/all shares and book profits instantly.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-indigo-100 space-y-3">
                <h4 className="font-bold text-slate-900">Types of Buyback</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-slate-50 rounded">
                    <p className="text-xs font-bold">Open Market</p>
                    <p className="text-[10px] text-slate-600">Company buys shares from stock exchange directly</p>
                  </div>
                  <div className="p-2 bg-slate-50 rounded">
                    <p className="text-xs font-bold">Tender Offer</p>
                    <p className="text-[10px] text-slate-600">Shareholders submit shares to company at fixed price</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <h4 className="font-bold text-emerald-900 text-sm mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> Impact on Remaining Shares
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                When shares are bought back, the total number of shares decreases. This means:
              </p>
              <ul className="space-y-1 text-xs text-emerald-800">
                <li className="flex gap-2"><span>•</span> <strong>EPS increases</strong> (same profit spread over fewer shares)</li>
                <li className="flex gap-2"><span>•</span> Your ownership % increases (without buying more)</li>
                <li className="flex gap-2"><span>•</span> Often leads to stock price appreciation</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <p className="text-xs font-bold text-indigo-900 uppercase mb-1">Why Companies Do This</p>
                <ul className="space-y-1 text-xs text-indigo-800">
                  <li className="flex gap-2"><span>•</span> Excess cash with no good investment options</li>
                  <li className="flex gap-2"><span>•</span> Signal that stock is undervalued</li>
                  <li className="flex gap-2"><span>•</span> Better than dividends for tax-efficient return</li>
                  <li className="flex gap-2"><span>•</span> Increase promoter holding percentage</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-100 rounded-xl">
                <p className="text-xs font-bold text-slate-900 uppercase mb-1">Tax Implication</p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Gains from buyback are taxed as <strong>capital gains</strong> (STCG/LTCG depending on holding period), not as dividend. Usually more tax-efficient.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Comparison Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Quick Comparison</h3>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-bold">Action</th>
                    <th className="text-left p-3 font-bold">You Pay?</th>
                    <th className="text-left p-3 font-bold">Share Count</th>
                    <th className="text-left p-3 font-bold">Good For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-bold text-emerald-700">Bonus</td>
                    <td className="p-3">No (Free)</td>
                    <td className="p-3">Increases</td>
                    <td className="p-3">Rewarding shareholders</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-bold text-blue-700">Rights Issue</td>
                    <td className="p-3">Yes (Discounted)</td>
                    <td className="p-3">Increases if you subscribe</td>
                    <td className="p-3">Raising capital</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-bold text-indigo-700">Buyback</td>
                    <td className="p-3">You Get Paid</td>
                    <td className="p-3">Decreases overall</td>
                    <td className="p-3">Returning excess cash</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default CorporateActions;
