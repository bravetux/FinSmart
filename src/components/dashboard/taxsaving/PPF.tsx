"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Lock,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Landmark,
  Lightbulb,
  BadgeIndianRupee
} from 'lucide-react';

const PPF = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Tax Saving Investments</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            PPF: The Government's Triple Tax-Free Gift
          </h2>
          <p className="text-blue-50 text-lg max-w-2xl">
            Public Provident Fund — a government-backed savings scheme. As safe as it gets. Your investment, your interest, and your maturity amount — all tax-free.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* What is PPF */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Landmark className="w-6 h-6 text-blue-600" /> What is PPF?
        </h3>
        <Card className="border-blue-200 bg-blue-50/40 shadow-md">
          <CardContent className="p-6 space-y-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              PPF stands for <strong>Public Provident Fund</strong>. It's a savings and investment scheme launched by the Government of India. When you invest in PPF, you are essentially lending money to the Government of India — which is why it's 100% safe. The government pays you interest and guarantees your principal.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-blue-200 text-center">
                <p className="text-3xl font-bold text-blue-700">7.1%</p>
                <p className="text-xs font-bold text-slate-800 mt-1">Current Interest Rate (p.a.)</p>
                <p className="text-[10px] text-slate-500 mt-1">Reviewed every quarter by the government. Currently steady at 7.1%.</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-blue-200 text-center">
                <p className="text-3xl font-bold text-indigo-700">15 yrs</p>
                <p className="text-xs font-bold text-slate-800 mt-1">Lock-in Period</p>
                <p className="text-[10px] text-slate-500 mt-1">Extendable in 5-year blocks after maturity — no upper limit on extension.</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-blue-200 text-center">
                <p className="text-3xl font-bold text-emerald-700">EEE</p>
                <p className="text-xs font-bold text-slate-800 mt-1">Triple Tax Exempt</p>
                <p className="text-[10px] text-slate-500 mt-1">The rarest status in Indian finance. Investment, interest, and maturity — all tax-free.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* EEE Advantage */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-600" /> The EEE Advantage — What "Triple Tax-Free" Actually Means
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              label: "E1 — Exempt at Entry",
              title: "Your investment is deductible",
              desc: "Every rupee you put into PPF (up to ₹1.5L/year) qualifies as a Section 80C deduction. At 30% tax slab, investing ₹1.5L saves you ₹46,800 in tax upfront.",
              color: "blue"
            },
            {
              label: "E2 — Exempt During Growth",
              title: "Interest is completely tax-free",
              desc: "The 7.1% interest credited every year to your account is NOT added to your taxable income. In an FD, that interest is taxed at your slab rate. Not here.",
              color: "emerald"
            },
            {
              label: "E3 — Exempt at Maturity",
              title: "Full withdrawal is tax-free",
              desc: "When the account matures after 15 years, the entire amount — principal + all interest — comes to you with zero tax. No capital gains, no income tax, nothing.",
              color: "purple"
            }
          ].map((e, i) => (
            <Card key={i} className={`border-${e.color}-200 bg-${e.color}-50/50 shadow-md`}>
              <CardContent className="p-5 space-y-2">
                <span className={`text-xs px-2 py-0.5 rounded-full bg-${e.color}-100 text-${e.color}-800 font-bold`}>{e.label}</span>
                <p className="text-sm font-bold text-slate-900 mt-2">{e.title}</p>
                <p className="text-xs text-slate-600">{e.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-1">
            <Lightbulb className="w-4 h-4" /> The Real Effective Return
          </p>
          <p className="text-sm text-slate-700">
            For someone in the <strong>30% tax bracket</strong>, a 7.1% tax-free return is equivalent to earning <strong>~10.1% from a taxable instrument</strong> (like an FD). Because with an FD at 7.1%, you'd pay 30% tax on interest — keeping only ~5%. With PPF, you keep all 7.1%.
          </p>
        </div>
      </section>

      {/* Rules */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Lock className="w-6 h-6 text-blue-600" /> Rules You Need to Know
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-slate-800">Contribution Rules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Minimum per year", value: "₹500", note: "Miss this and account gets frozen" },
                { label: "Maximum per year", value: "₹1,50,000", note: "Any amount above this earns NO interest" },
                { label: "Payment frequency", value: "Any time", note: "Lump sum or installments — up to 12/year" },
                { label: "Account type", value: "1 per person", note: "You can also open one in a minor child's name" },
              ].map((r, i) => (
                <div key={i} className="flex items-start justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div>
                    <p className="text-xs font-bold text-slate-800">{r.label}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{r.note}</p>
                  </div>
                  <span className="text-sm font-bold text-blue-700 ml-3 shrink-0">{r.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-slate-800">Liquidity Rules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { label: "Loan against PPF", value: "Year 3–6", note: "Borrow up to 25% of balance at end of year 2. Low interest." },
                { label: "Partial withdrawal", value: "From Year 7", note: "Withdraw up to 50% of balance at end of year 4" },
                { label: "Premature closure", value: "After Year 5", note: "Allowed only for medical/education emergencies. 1% interest penalty." },
                { label: "Full withdrawal", value: "After Year 15", note: "Complete maturity — take everything tax-free" },
              ].map((r, i) => (
                <div key={i} className="flex items-start justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div>
                    <p className="text-xs font-bold text-slate-800">{r.label}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{r.note}</p>
                  </div>
                  <span className="text-sm font-bold text-blue-700 ml-3 shrink-0 text-right">{r.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Should Use PPF */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" /> Who Should Use PPF?
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          <Card className="border-emerald-200 bg-emerald-50/40 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-emerald-800">PPF is ideal if you are...</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                "A conservative investor who wants guaranteed, safe returns",
                "In the 20% or 30% income tax bracket — the tax savings are significant",
                "Building a retirement corpus over 15-30 years with zero market risk",
                "Supplementing your EPF/NPS with a separate guaranteed fund",
                "Opening for a minor child — 15 years starts now, long compounding horizon"
              ].map((pt, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700">{pt}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/40 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-red-800">PPF is NOT ideal if you...</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                "Might need the money within the next 15 years (it's locked up)",
                "Are in the 0% tax bracket — the tax benefit doesn't help you",
                "Want market-linked returns — 7.1% is steady but equity gives more over 15+ years",
                "Already have ₹1.5L covered by EPF deductions — limited additional 80C room",
              ].map((pt, i) => (
                <div key={i} className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700">{pt}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BadgeIndianRupee className="w-6 h-6 text-blue-600" /> PPF vs FD vs ELSS — Quick Comparison
        </h3>
        <Card className="border-slate-200 shadow-md">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3 text-center">PPF</th>
                    <th className="p-3 text-center">Fixed Deposit</th>
                    <th className="p-3 text-center">ELSS (Tax-Saver MF)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Safety", ppf: "Govt Guaranteed", fd: "Bank Guaranteed (DICGC up to ₹5L)", elss: "Market Risk" },
                    { feature: "Expected Returns", ppf: "~7.1% (guaranteed)", fd: "~6.5–7.5%", elss: "10–14% (not guaranteed)" },
                    { feature: "Tax on Returns", ppf: "Fully Tax-Free", fd: "Taxed as income", elss: "10% LTCG above ₹1L/year" },
                    { feature: "Lock-in", ppf: "15 years", fd: "Flexible (5-yr for tax saver)", elss: "3 years (shortest among 80C)" },
                    { feature: "80C Benefit", ppf: "Yes", fd: "Yes (only 5-yr tax-saver FD)", elss: "Yes" },
                    { feature: "Liquidity", ppf: "Partial from Year 7", fd: "Penalty on early exit", elss: "After 3 years, full liquidity" },
                    { feature: "Best For", ppf: "Safe, long-term, retirement", fd: "Conservative, short-medium term", elss: "Aggressive, long-term wealth" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white border-t" : "bg-slate-50 border-t"}>
                      <td className="p-3 font-medium text-slate-800">{row.feature}</td>
                      <td className="p-3 text-center text-blue-700 font-semibold">{row.ppf}</td>
                      <td className="p-3 text-center text-slate-600">{row.fd}</td>
                      <td className="p-3 text-center text-purple-700">{row.elss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Power of PPF Math */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-indigo-600" /> The Power of PPF: Real Numbers
        </h3>
        <Card className="border-indigo-200 bg-indigo-50/40 shadow-md">
          <CardContent className="p-6">
            <p className="text-sm text-slate-600 mb-5">Invest the maximum ₹1,50,000 every year for 15 years at 7.1% interest:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <div className="p-4 bg-white rounded-xl border border-indigo-200 text-center">
                <p className="text-2xl font-bold text-slate-700">₹22,50,000</p>
                <p className="text-xs text-slate-500 mt-1">Total amount invested (₹1.5L × 15)</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-indigo-200 text-center">
                <p className="text-2xl font-bold text-indigo-700">₹18,18,000</p>
                <p className="text-xs text-slate-500 mt-1">Tax-free interest earned</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 text-center">
                <p className="text-2xl font-bold text-emerald-700">₹40,68,000</p>
                <p className="text-xs text-slate-500 mt-1">Maturity amount — all yours, zero tax</p>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs font-bold text-amber-800">Plus: Tax saved on investments</p>
              <p className="text-xs text-slate-700 mt-1">
                If you're in the 30% tax bracket, investing ₹1.5L/year saved you ₹46,800 in tax every year.
                Over 15 years, that's <strong className="text-emerald-700">₹7,02,000 in tax savings</strong> — on top of the ₹18.18L in interest. The real total benefit is enormous.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How to Open */}
      <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <Landmark className="w-8 h-8" />
          How to Open a PPF Account
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-bold text-blue-100 mb-2">Where to Open:</p>
            <ul className="text-xs text-white space-y-1 list-disc ml-4">
              <li>SBI (State Bank of India) — most branches, online available</li>
              <li>Post Office (India Post) — all post offices across India</li>
              <li>Most major banks: HDFC, ICICI, Axis, PNB, Bank of Baroda</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-blue-100 mb-2">What You Need:</p>
            <ul className="text-xs text-white space-y-1 list-disc ml-4">
              <li>PAN card</li>
              <li>Aadhaar card</li>
              <li>Passport-size photo</li>
              <li>Opening deposit: as low as ₹500</li>
              <li>Online option: via net banking (SBI, HDFC, ICICI etc.)</li>
            </ul>
          </div>
        </div>
        <div className="pt-4 border-t border-white/20 text-center">
          <p className="text-blue-100 font-semibold text-lg">
            "7.1% guaranteed, completely tax-free, backed by the Government of India. PPF is the most underrated investment product in the country."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PPF;
