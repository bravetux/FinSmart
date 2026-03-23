"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Settings,
  Lightbulb,
  Lock,
  BadgeIndianRupee,
  PieChart
} from 'lucide-react';

const NPS = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 to-rose-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Tax Saving Investments</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            NPS: Build Your Own Pension
          </h2>
          <p className="text-orange-50 text-lg max-w-2xl">
            National Pension System — contribute during your working years, get a monthly pension in retirement. Extra tax benefit that goes beyond 80C.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* What is NPS */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-orange-600" /> What is NPS?
        </h3>
        <Card className="border-orange-200 bg-orange-50/40 shadow-md">
          <CardContent className="p-6 space-y-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              The <strong>National Pension System (NPS)</strong> is a market-linked retirement savings scheme regulated by <strong>PFRDA</strong> (Pension Fund Regulatory and Development Authority) — the pension equivalent of SEBI. You contribute money during your working life, it gets invested in market assets (stocks, bonds), and on retirement you receive a portion as lump sum and the rest as a monthly pension.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-orange-200 text-center">
                <p className="text-3xl font-bold text-orange-600">~0.09%</p>
                <p className="text-xs font-bold text-slate-800 mt-1">Fund Management Fee</p>
                <p className="text-[10px] text-slate-500 mt-1">One of the lowest fees of any investment product in the world</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-orange-200 text-center">
                <p className="text-3xl font-bold text-rose-600">₹2L</p>
                <p className="text-xs font-bold text-slate-800 mt-1">Max Tax Deduction</p>
                <p className="text-[10px] text-slate-500 mt-1">₹1.5L via 80CCD(1) + extra ₹50K via 80CCD(1B)</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-orange-200 text-center">
                <p className="text-3xl font-bold text-emerald-600">60%</p>
                <p className="text-xs font-bold text-slate-800 mt-1">Tax-Free at Retirement</p>
                <p className="text-[10px] text-slate-500 mt-1">60% of corpus withdrawn at 60 is completely tax-free</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tier 1 vs Tier 2 */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Lock className="w-6 h-6 text-blue-600" /> Tier 1 vs Tier 2: Two Different Accounts
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50/40 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-900">Tier 1 — The Pension Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">This is the main NPS account. All the tax benefits live here. Money is locked till age 60 — that's the deal.</p>
              <div className="space-y-2">
                {[
                  { label: "Minimum contribution", value: "₹1,000/year" },
                  { label: "Lock-in", value: "Till age 60" },
                  { label: "Tax benefit", value: "80CCD(1) + 80CCD(1B)" },
                  { label: "Mandatory to open", value: "Yes — Tier 2 requires Tier 1 first" },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-white rounded border border-blue-100">
                    <p className="text-xs text-slate-600">{r.label}</p>
                    <p className="text-xs font-bold text-blue-800">{r.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-slate-800">Tier 2 — The Flexible Savings Wallet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">Optional. Think of it as a mutual fund account linked to your NPS. No lock-in, but no extra tax benefit either.</p>
              <div className="space-y-2">
                {[
                  { label: "Minimum contribution", value: "₹250/year" },
                  { label: "Lock-in", value: "None — withdraw anytime" },
                  { label: "Tax benefit", value: "None (except for govt employees)" },
                  { label: "Why use it?", value: "Low-cost fund investing, flexibility" },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-slate-50 rounded border border-slate-100">
                    <p className="text-xs text-slate-600">{r.label}</p>
                    <p className="text-xs font-bold text-slate-800">{r.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Asset Classes */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <PieChart className="w-6 h-6 text-orange-600" /> Where Your Money Goes: The Asset Classes
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { cls: "E — Equity", color: "rose", max: "Up to 75%", risk: "High", returns: "12–14% (long-term)", desc: "Invests in stocks of Indian companies. Highest growth potential but also the most volatile." },
            { cls: "C — Corporate Bonds", color: "blue", max: "Up to 100%", risk: "Medium", returns: "7–9%", desc: "Loans to large companies. Safer than stocks. Moderate, steady returns." },
            { cls: "G — Govt Securities", color: "emerald", max: "Up to 100%", risk: "Low", returns: "6–8%", desc: "Government bonds. Safest option. Lower but stable returns. Good for near-retirement." },
            { cls: "A — Alternatives", color: "purple", max: "Up to 5%", risk: "Medium-High", returns: "Varies", desc: "REITs (Real Estate Investment Trusts) and InvITs. Diversifies beyond traditional assets." },
          ].map((a, i) => (
            <Card key={i} className={`border-${a.color}-200 shadow-sm`}>
              <CardContent className="p-4 space-y-2">
                <p className={`text-sm font-bold text-${a.color}-800`}>{a.cls}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${a.color}-100 text-${a.color}-700 font-semibold`}>{a.risk} Risk</span>
                  <span className="text-[10px] text-slate-500">{a.max}</span>
                </div>
                <p className="text-xs font-semibold text-slate-700">Est. Returns: {a.returns}</p>
                <p className="text-[11px] text-slate-500">{a.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Auto vs Active Choice */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Settings className="w-6 h-6 text-slate-600" /> Auto Choice vs Active Choice
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/40 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-emerald-900">Auto Choice (Lifecycle Fund)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">The system automatically manages your allocation. At age 25, you might be 75% in equity. By age 55, you're mostly in safe bonds. The older you get, the more conservative the fund becomes.</p>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <p className="text-xs font-bold text-emerald-800">Best for:</p>
                <p className="text-xs text-slate-700 mt-1">Hands-off investors who don't want to think about rebalancing. The fund does it for you — automatically and sensibly.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/40 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-blue-900">Active Choice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">You manually decide how to split your money between E, C, G, and A. You can change this allocation once per year.</p>
              <div className="p-3 bg-blue-100 rounded-lg">
                <p className="text-xs font-bold text-blue-800">Best for:</p>
                <p className="text-xs text-slate-700 mt-1">Investors who follow markets and want control. If you're in your 30s and comfortable with risk, going 75% equity (max allowed) has historically given the best long-term returns.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BadgeIndianRupee className="w-6 h-6 text-emerald-600" /> Tax Benefits: The Real Numbers
        </h3>
        <Card className="border-orange-200 shadow-md">
          <CardContent className="p-6 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                <p className="text-xs font-bold text-orange-800 mb-2">80CCD(1) — Within your 80C limit</p>
                <p className="text-sm font-bold text-slate-900">Up to ₹1,50,000</p>
                <p className="text-xs text-slate-600 mt-1">Contributions to NPS Tier 1 up to ₹1.5L count towards your 80C limit. If you've already maxed out 80C via EPF/ELSS, this section doesn't add extra benefit.</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300">
                <p className="text-xs font-bold text-emerald-800 mb-2">80CCD(1B) — ABOVE your 80C limit</p>
                <p className="text-sm font-bold text-slate-900">Additional ₹50,000</p>
                <p className="text-xs text-slate-600 mt-1">This is over and above 80C. Even if 80C is fully used, you can STILL claim this extra ₹50K. Total deduction possible: <strong className="text-emerald-700">₹2,00,000</strong>.</p>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-xs font-bold text-amber-800 mb-2">Real Money Saved — For Someone in 30% Tax Bracket</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-amber-200">
                      <th className="p-2 text-left">Deduction</th>
                      <th className="p-2 text-right">Amount</th>
                      <th className="p-2 text-right">Tax Saved (30%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t bg-white">
                      <td className="p-2">80CCD(1) — NPS in 80C bucket</td>
                      <td className="p-2 text-right">₹1,50,000</td>
                      <td className="p-2 text-right text-emerald-700 font-semibold">₹46,800</td>
                    </tr>
                    <tr className="border-t bg-amber-50">
                      <td className="p-2 font-bold">80CCD(1B) — Extra NPS deduction</td>
                      <td className="p-2 text-right font-bold">₹50,000</td>
                      <td className="p-2 text-right text-emerald-700 font-bold">₹15,600</td>
                    </tr>
                    <tr className="border-t bg-amber-100">
                      <td className="p-2 font-bold">Total</td>
                      <td className="p-2 text-right font-bold">₹2,00,000</td>
                      <td className="p-2 text-right font-bold text-emerald-800">₹62,400/year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* At Retirement */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-orange-600" /> At Retirement (Age 60)
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          <Card className="border-emerald-200 bg-emerald-50/40 shadow-sm">
            <CardContent className="p-5 space-y-2">
              <p className="text-lg font-bold text-emerald-800">60% Lump Sum Withdrawal</p>
              <p className="text-xs font-bold text-emerald-600">Completely Tax-Free</p>
              <p className="text-sm text-slate-700">You can withdraw up to 60% of your accumulated corpus as a lump sum. No tax on this amount — it comes to you clean.</p>
              <div className="p-3 bg-white rounded-lg border border-emerald-200 mt-3">
                <p className="text-xs text-slate-600">Example: If corpus = ₹1 crore, you get ₹60 lakh tax-free in hand.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-orange-200 bg-orange-50/40 shadow-sm">
            <CardContent className="p-5 space-y-2">
              <p className="text-lg font-bold text-orange-800">40% Goes into an Annuity</p>
              <p className="text-xs font-bold text-orange-600">Taxable as Income When Received</p>
              <p className="text-sm text-slate-700">At least 40% must be used to buy an annuity — a monthly pension for life. The pension income is taxable as regular income in the year you receive it.</p>
              <div className="p-3 bg-white rounded-lg border border-orange-200 mt-3">
                <p className="text-xs text-slate-600">Annuity rates vary. Typically 5–6% of the annuity corpus per year as pension. You can choose the annuity plan that suits you best.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <PieChart className="w-6 h-6 text-blue-600" /> NPS vs PPF vs ELSS — Side by Side
        </h3>
        <Card className="border-slate-200 shadow-md">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">NPS</th>
                    <th className="p-3 text-center">PPF</th>
                    <th className="p-3 text-center">ELSS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Expected Returns", nps: "9–12% (market)", ppf: "7.1% (guaranteed)", elss: "10–14% (market)" },
                    { f: "Risk", nps: "Moderate (diversified)", ppf: "Zero (govt backed)", elss: "High (equity)" },
                    { f: "Lock-in", nps: "Till age 60", ppf: "15 years", elss: "3 years" },
                    { f: "80C Deduction", nps: "Yes (₹1.5L max)", ppf: "Yes (₹1.5L max)", elss: "Yes (₹1.5L max)" },
                    { f: "Extra Tax Deduction", nps: "Yes — ₹50K (80CCD1B)", ppf: "No", elss: "No" },
                    { f: "Tax on Maturity", nps: "60% tax-free; 40% annuity taxed", ppf: "100% tax-free", elss: "10% LTCG above ₹1L" },
                    { f: "Liquidity", nps: "Very low (age 60)", ppf: "Partial from year 7", elss: "High after 3 years" },
                    { f: "Best For", nps: "30% tax bracket, retirement planning", ppf: "Safe, long-term savings", elss: "Wealth creation, flexibility" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white border-t" : "bg-slate-50 border-t"}>
                      <td className="p-3 font-medium text-slate-800">{row.f}</td>
                      <td className="p-3 text-center text-orange-700">{row.nps}</td>
                      <td className="p-3 text-center text-blue-700">{row.ppf}</td>
                      <td className="p-3 text-center text-purple-700">{row.elss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Who it's for + How to open */}
      <div className="p-8 bg-gradient-to-br from-orange-500 to-rose-600 rounded-[2.5rem] text-white space-y-5">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <Lightbulb className="w-8 h-8" />
          Is NPS Right for You?
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-bold text-orange-100 mb-2">NPS is great if you are:</p>
            <div className="space-y-2">
              {[
                "In the 30% tax bracket — the ₹50K extra deduction = ₹15,600 saved",
                "A long-term, disciplined saver with a 15–30 year horizon",
                "Looking for the lowest-cost market-linked retirement product",
                "Wanting to build a pension, not just a lump sum"
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <p className="text-xs text-orange-50">{p}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-orange-100 mb-2">NPS may not suit you if you:</p>
            <div className="space-y-2">
              {[
                "Need the money before age 60 (very limited early withdrawal options)",
                "Dislike the mandatory annuity requirement (40% becomes monthly pension)",
                "Are in a lower tax bracket where the extra deduction saves less"
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                  <p className="text-xs text-orange-100">{p}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-white/15 rounded-xl">
              <p className="text-xs font-bold text-white">How to Open:</p>
              <p className="text-xs text-orange-100 mt-1">Visit <strong>enps.nsdl.com</strong> — fully online. You need Aadhaar + PAN + a bank account. Takes 15 minutes.</p>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-white/20 text-center">
          <p className="text-orange-100 font-semibold text-lg">
            "NPS gives you the extra ₹50,000 deduction that no other 80C investment can. For someone in 30% tax bracket, that alone pays for years of contributions."
          </p>
        </div>
      </div>
    </div>
  );
};

export default NPS;
