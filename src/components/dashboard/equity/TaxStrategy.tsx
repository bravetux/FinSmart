"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Receipt, TrendingUp, Calendar, Calculator, Coins, AlertTriangle, CheckCircle2, Target, Zap } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const TaxStrategy = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Receipt className="w-4 h-4" />
            <span>Tax Optimization</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Equity Tax Strategy
          </h2>
          <p className="text-emerald-100 text-lg max-w-xl">
            It's not what you earn, it's what you keep. Understanding equity taxation and optimization strategies can save you lakhs over your investing lifetime.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Tax Rates Summary */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-blue-600" /> Current Tax Rates (2026)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* STCG */}
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Zap className="w-6 h-6 text-red-600" />
                <Badge variant="destructive">Higher Tax</Badge>
              </div>
              <CardTitle className="text-xl text-red-800">Short-Term Capital Gains (STCG)</CardTitle>
              <CardDescription className="text-red-700">Holding Period &lt; 12 months</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-xl border border-red-100">
                <p className="text-3xl font-bold text-red-600 mb-1">20%</p>
                <p className="text-xs text-red-700">Flat rate on gains</p>
              </div>
              <div className="p-3 bg-red-100 rounded-xl">
                <p className="text-xs font-bold text-red-900 uppercase mb-1">Example</p>
                <p className="text-xs text-red-800">
                  Buy at {currency.symbol}1,00,000 → Sell at {currency.symbol}1,20,000 after 8 months<br/>
                  Gain: {currency.symbol}20,000 | Tax: {currency.symbol}4,000 (20%)<br/>
                  <strong>Net Gain: {currency.symbol}16,000</strong>
                </p>
              </div>
              <div className="p-3 bg-slate-100 rounded-xl">
                <p className="text-xs text-slate-700">
                  <strong>Also applies to:</strong> Intraday trading, F&O trading
                </p>
              </div>
            </CardContent>
          </Card>

          {/* LTCG */}
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                <Badge className="bg-emerald-600">Lower Tax</Badge>
              </div>
              <CardTitle className="text-xl text-emerald-800">Long-Term Capital Gains (LTCG)</CardTitle>
              <CardDescription className="text-emerald-700">Holding Period ≥ 12 months</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-xl border border-emerald-100">
                <p className="text-3xl font-bold text-emerald-600 mb-1">12.5%</p>
                <p className="text-xs text-emerald-700">On gains above {currency.symbol}1,25,000</p>
                <p className="text-[10px] text-emerald-600 mt-1">First {currency.symbol}1,25,000 TAX-FREE per year</p>
              </div>
              <div className="p-3 bg-emerald-100 rounded-xl">
                <p className="text-xs font-bold text-emerald-900 uppercase mb-1">Example</p>
                <p className="text-xs text-emerald-800">
                  Total LTCG: {currency.symbol}1,75,000 in a year<br/>
                  Taxable amount: {currency.symbol}1,75,000 - {currency.symbol}1,25,000 = {currency.symbol}50,000<br/>
                  Tax: {currency.symbol}6,250 (12.5% of {currency.symbol}50,000)<br/>
                  <strong>Net Gain: {currency.symbol}1,68,750</strong>
                </p>
              </div>
              <div className="p-3 bg-slate-100 rounded-xl">
                <p className="text-xs text-slate-700">
                  <strong>No indexation benefit</strong> (removed in recent budgets)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* STT */}
      <section className="bg-amber-50 border border-amber-100 rounded-[2.5rem] p-8">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-amber-900">Securities Transaction Tax (STT)</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              STT is a tax levied by the government on every equity transaction (buy/sell) done through recognized stock exchanges. 
              It's deducted automatically by your broker at the time of transaction.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-3 bg-white rounded-xl border border-amber-100">
                <p className="text-xs font-bold text-amber-900">Equity Delivery</p>
                <p className="text-lg font-bold text-amber-700">0.1%</p>
                <p className="text-[10px] text-amber-600">On sell side only</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-100">
                <p className="text-xs font-bold text-amber-900">Intraday</p>
                <p className="text-lg font-bold text-amber-700">0.025%</p>
                <p className="text-[10px] text-amber-600">On both buy and sell</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-100">
                <p className="text-xs font-bold text-amber-900">F&O</p>
                <p className="text-lg font-bold text-amber-700">0.0125%</p>
                <p className="text-[10px] text-amber-600">On sell side</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax-Loss Harvesting */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-600" /> Tax-Loss Harvesting
        </h3>
        <Card className="border-purple-200 bg-purple-50/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-purple-800">What is Tax-Loss Harvesting?</CardTitle>
            <CardDescription className="text-purple-700">A strategy to offset capital gains by booking losses</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              Tax-loss harvesting involves selling stocks at a loss to offset capital gains from winners, thereby reducing your overall tax liability.
            </p>

            <div className="p-4 bg-white rounded-xl border border-purple-100 space-y-3">
              <h4 className="font-bold text-purple-900 text-sm">How It Works</h4>
              <div className="space-y-2 text-xs text-slate-600">
                <p className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">1.</span>
                  You have Stock A with {currency.symbol}50,000 gain and Stock B with {currency.symbol}30,000 loss
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">2.</span>
                  Sell both before March 31 (financial year-end)
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">3.</span>
                  Net capital gain = {currency.symbol}50,000 - {currency.symbol}30,000 = {currency.symbol}20,000
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">4.</span>
                  Pay tax only on {currency.symbol}20,000 instead of {currency.symbol}50,000
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <p className="text-xs font-bold text-emerald-900 uppercase mb-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> When to Use
                </p>
                <ul className="space-y-1 text-xs text-emerald-800">
                  <li className="flex gap-2"><span>•</span> You have significant capital gains in the year</li>
                  <li className="flex gap-2"><span>•</span> Some holdings are in loss with poor outlook</li>
                  <li className="flex gap-2"><span>•</span> Near financial year-end (Jan-March)</li>
                </ul>
              </div>
              <div className="p-3 bg-red-100 rounded-xl">
                <p className="text-xs font-bold text-red-900 uppercase mb-2 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Watch Out
                </p>
                <ul className="space-y-1 text-xs text-red-800">
                  <li className="flex gap-2"><span>•</span> Don't sell quality stocks just for tax savings</li>
                  <li className="flex gap-2"><span>•</span> Consider transaction costs (brokerage + STT)</li>
                  <li className="flex gap-2"><span>•</span> Can't claim loss if you rebuy within 30 days (wash sale)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-xs font-bold text-blue-900 uppercase mb-2">Pro Strategy: Rebuy Immediately</p>
              <p className="text-xs text-blue-800 leading-relaxed">
                If you believe in a stock's long-term potential but want to book a loss, you can sell it and rebuy it the next day 
                (or after 1-2 days to be safe). This resets your cost basis while harvesting the tax loss. 
                <strong> Note:</strong> Some tax experts suggest waiting 30+ days to avoid scrutiny, though Indian tax laws don't explicitly define "wash sale" rules.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 54F */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Coins className="w-6 h-6 text-orange-600" /> Section 54F: Save Tax by Buying Property
        </h3>
        <Card className="border-orange-200 bg-orange-50/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-orange-800">What is Section 54F?</CardTitle>
            <CardDescription className="text-orange-700">Exemption on LTCG if invested in residential property</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              Section 54F allows you to claim exemption on Long-Term Capital Gains from shares/equity if you invest the proceeds 
              in buying or constructing a residential house property.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Conditions</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                    Must invest in residential property within 1 year before or 2 years after sale (or construct within 3 years)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                    You should not own more than one house on the date of transfer
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                    Cannot sell the new property for 3 years (else exemption reversed)
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-xl border border-orange-100 space-y-2">
                <p className="text-xs font-bold text-orange-900 uppercase">Example</p>
                <p className="text-xs text-orange-800 leading-relaxed">
                  You sell stocks with LTCG of {currency.symbol}50,00,000.<br/>
                  You invest {currency.symbol}50,00,000 in buying a house.<br/>
                  <strong>Tax saved: 12.5% of {currency.symbol}48,75,000 = {currency.symbol}6,09,375</strong><br/>
                  (After {currency.symbol}1,25,000 exemption)
                </p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-amber-900 uppercase mb-1">Important Notes</p>
                <ul className="space-y-1 text-xs text-amber-800">
                  <li className="flex gap-2"><span>•</span> Proportionate exemption if you invest only part of the gains</li>
                  <li className="flex gap-2"><span>•</span> You can use Capital Gain Account Scheme to park funds until investment</li>
                  <li className="flex gap-2"><span>•</span> Commercial property doesn't qualify (must be residential)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tax Planning Calendar */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-600" /> Tax Planning Calendar
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <Badge className="w-fit mb-2">Jan - March</Badge>
              <CardTitle className="text-lg">Year-End Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> Review all trades for the year</li>
                <li className="flex gap-2"><span>•</span> Execute tax-loss harvesting</li>
                <li className="flex gap-2"><span>•</span> Book profits strategically to use {currency.symbol}1.25L exemption</li>
                <li className="flex gap-2"><span>•</span> Complete Section 54F investments</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <Badge className="w-fit mb-2">Apr - July</Badge>
              <CardTitle className="text-lg">ITR Filing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> Collect all broker statements</li>
                <li className="flex gap-2"><span>•</span> File ITR-2 (for capital gains)</li>
                <li className="flex gap-2"><span>•</span> Keep proof of tax-saving investments</li>
                <li className="flex gap-2"><span>•</span> Verify Form 26AS and AIS</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <Badge className="w-fit mb-2">Year-Round</Badge>
              <CardTitle className="text-lg">Ongoing Habits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> Prefer LTCG over STCG (hold 12+ months)</li>
                <li className="flex gap-2"><span>•</span> Track cost basis of all holdings</li>
                <li className="flex gap-2"><span>•</span> Maintain investment journal</li>
                <li className="flex gap-2"><span>•</span> Avoid frequent churning (higher taxes)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-red-50 border border-red-100 rounded-[2.5rem] p-8">
        <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" /> Common Tax Mistakes to Avoid
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Selling winners within 11 months (triggers STCG at 20% vs 12.5% LTCG)",
            "Not utilizing the ₹1.25L LTCG exemption every year (it doesn't carry forward)",
            "Forgetting to report losses (can be carried forward for 8 years)",
            "Not maintaining proper records of purchase price and dates",
            "Trading excessively and incurring high STCG taxes",
            "Not filing ITR even if income is below taxable limit (can't carry forward losses)"
          ].map((mistake, i) => (
            <div key={i} className="flex items-start gap-2 p-3 bg-white rounded-xl border border-red-100">
              <span className="text-red-600 shrink-0">❌</span>
              <p className="text-xs text-red-800">{mistake}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Wisdom */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem]">
        <h4 className="text-xl font-bold mb-4">"In this world, nothing is certain except death and taxes."</h4>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mb-4">
          — Benjamin Franklin
        </p>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
          You can't avoid taxes, but you can minimize them legally through smart planning. The difference between paying 20% and 12.5% on your gains 
          can mean lakhs of rupees over a lifetime. Consult a qualified CA for personalized advice.
        </p>
      </div>
    </div>
  );
};

export default TaxStrategy;
