"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CreditCard,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  TrendingDown,
  Shield,
  Zap,
  Clock
} from 'lucide-react';

const CreditCards = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-600 to-purple-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <CreditCard className="w-4 h-4" />
            <span>Smart Money Management</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Credit Cards: The Double-Edged Sword
          </h2>
          <p className="text-violet-50 text-lg max-w-2xl">
            Used right — free rewards, better credit score, purchase protection. Used wrong — a debt trap with 42% annual interest. Here's everything you must know.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* How Credit Cards Work */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-violet-600" /> How Credit Cards Actually Work
        </h3>
        <Card className="border-violet-200 bg-violet-50/40 shadow-md">
          <CardContent className="p-6 space-y-5">
            <p className="text-sm text-slate-700">
              You swipe your card → The bank pays the merchant instantly → You owe the bank → You have <strong>30–50 days to repay</strong> with zero interest. This window is called the <strong>interest-free period</strong> — and it's only free if you pay in full.
            </p>
            <div className="overflow-x-auto">
              <div className="min-w-[520px] relative">
                <p className="text-xs font-bold text-slate-600 mb-3">The Billing Cycle — Visualised</p>
                <div className="flex items-center gap-0">
                  {[
                    { label: "Day 1", sub: "Billing cycle starts", color: "bg-violet-500" },
                    { label: "Day 30", sub: "Statement generated", color: "bg-indigo-500" },
                    { label: "Day 45–50", sub: "Payment due date", color: "bg-emerald-500" },
                  ].map((step, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className={`w-full h-3 ${step.color} ${i === 0 ? 'rounded-l-full' : i === 2 ? 'rounded-r-full' : ''}`} />
                      <p className="text-xs font-bold text-slate-800 mt-2">{step.label}</p>
                      <p className="text-[10px] text-slate-500 text-center">{step.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg border border-violet-200">
                  <p className="text-xs text-slate-600">Any purchase you make during the cycle appears in the statement. The due date is typically 15–20 days after statement generation. <strong>Pay the full amount by the due date and you pay ZERO interest.</strong></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The Minimum Payment Trap */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-red-700 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" /> The Minimum Payment Trap — Show Me the Math
        </h3>
        <Card className="border-red-300 bg-red-50/50 shadow-md">
          <CardContent className="p-6 space-y-5">
            <p className="text-sm text-slate-700">
              Every credit card statement shows a "Minimum Amount Due" — usually 5% of the outstanding balance or ₹250, whichever is higher. Paying only this feels manageable. Here's the brutal truth:
            </p>
            <div className="p-4 bg-white rounded-xl border border-red-200">
              <p className="text-sm font-bold text-red-800 mb-3">Scenario: ₹50,000 balance at 42% p.a. (3.5% per month)</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="p-2 text-left">Month</th>
                      <th className="p-2 text-right">Opening Balance</th>
                      <th className="p-2 text-right">Interest (3.5%)</th>
                      <th className="p-2 text-right">Min. Payment</th>
                      <th className="p-2 text-right">Principal Repaid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { m: "Month 1", ob: "₹50,000", int: "₹1,750", pay: "₹2,500", prin: "₹750 only!" },
                      { m: "Month 2", ob: "₹49,250", int: "₹1,724", pay: "₹2,463", prin: "₹739" },
                      { m: "Month 3", ob: "₹48,511", int: "₹1,698", pay: "₹2,426", prin: "₹728" },
                      { m: "Month 6", ob: "~₹45,900", int: "~₹1,607", pay: "~₹2,295", prin: "~₹688" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white border-t" : "bg-red-50 border-t"}>
                        <td className="p-2 font-medium">{row.m}</td>
                        <td className="p-2 text-right">{row.ob}</td>
                        <td className="p-2 text-right text-red-700 font-semibold">{row.int}</td>
                        <td className="p-2 text-right">{row.pay}</td>
                        <td className="p-2 text-right text-red-600 font-bold">{row.prin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded-lg border border-red-300">
                <p className="text-xs font-bold text-red-900">The Brutal Result</p>
                <p className="text-xs text-slate-700 mt-1">
                  At this rate, it takes <strong>over 2 years</strong> to pay off ₹50,000 — and you'll pay <strong>₹30,000+ in extra interest</strong>. You borrowed ₹50,000 and it ends up costing ₹80,000+.
                </p>
              </div>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300">
              <p className="text-xs font-bold text-emerald-800">The Solution is Simple</p>
              <p className="text-xs text-slate-700 mt-1">Pay the <strong>FULL outstanding balance</strong> every month — not the minimum. If you can't afford to pay in full, you can't afford to have spent that money. The credit card is not extra income; it's a loan you must repay monthly.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Credit Utilization */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-blue-600" /> Credit Utilization: The CIBIL Score Rule
        </h3>
        <Card className="border-blue-200 shadow-sm">
          <CardContent className="p-6 space-y-4">
            <p className="text-sm text-slate-700">
              <strong>Credit utilization</strong> = (Amount you've used ÷ Total credit limit) × 100. Your CIBIL score — the number banks use to decide if you get a loan — is directly affected by this ratio.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { range: "0–30%", label: "Good Zone", color: "emerald", desc: "Scores climb. You look financially responsible." },
                { range: "31–50%", label: "Warning Zone", color: "amber", desc: "Score starts to dip. Banks get slightly cautious." },
                { range: "50%+", label: "Danger Zone", color: "red", desc: "Significant score drop. Looks like financial stress." },
              ].map((z, i) => (
                <div key={i} className={`p-4 bg-${z.color}-50 rounded-xl border border-${z.color}-200`}>
                  <p className={`text-xl font-bold text-${z.color}-700`}>{z.range}</p>
                  <p className={`text-xs font-bold text-${z.color}-800 mt-0.5`}>{z.label}</p>
                  <p className="text-xs text-slate-600 mt-1">{z.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-xs font-bold text-blue-800">Practical Example</p>
              <p className="text-xs text-slate-700 mt-1">Your card limit is ₹1,00,000. Keep your monthly balance below <strong>₹30,000</strong>. If you regularly spend more, ask the bank to increase your credit limit (same spending, lower utilization ratio).</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Good vs Bad */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-slate-600" /> When Credit Cards Are GOOD vs DANGEROUS
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/40 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Credit Cards Are Your Friend When...
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { title: "Cashback Rewards", desc: "1–5% back on grocery, fuel, dining purchases. On ₹5,000/month spending, that's ₹600–3,000 saved per year — for free." },
                { title: "Travel Rewards", desc: "Lounge access (worth ₹1,500+/visit), air miles, hotel upgrades. Frequent travellers get enormous value." },
                { title: "Building CIBIL Score", desc: "Regular on-time payments are the fastest way to build credit history. A good CIBIL score saves lakhs on future home loans." },
                { title: "Purchase Protection", desc: "Some premium cards cover theft or accidental damage on recent purchases. Free insurance, basically." },
                { title: "Zero-cost EMIs", desc: "Buy a ₹60,000 laptop on 6-month interest-free EMI. You're spreading the payment, not adding cost." },
              ].map((pt, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">{pt.title}</p>
                    <p className="text-[11px] text-slate-500">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/40 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-red-900 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Credit Cards Become Dangerous When...
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { title: "You Treat It as Extra Money", desc: "It's not income. Every rupee you spend is a loan. If you wouldn't pay cash for it, don't charge it." },
                { title: "Cash Advances", desc: "Withdrawing cash from ATM using your credit card: 3–5% fee PLUS interest from day ONE with no grace period. Extremely expensive." },
                { title: "Ignoring the Statement", desc: "Fraudulent charges, duplicate transactions, incorrect fees — reviewing your statement monthly catches these early." },
                { title: "Minimum Payment Trap", desc: "Already shown above: paying only the minimum on ₹50,000 costs ₹30,000 extra. Never do this." },
                { title: "Chasing Rewards While Overspending", desc: "Getting 2% cashback while spending 20% more? You're losing. Rewards only make sense if spending is already planned." },
              ].map((pt, i) => (
                <div key={i} className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">{pt.title}</p>
                    <p className="text-[11px] text-slate-500">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5 Golden Rules */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-500" /> 5 Golden Rules of Credit Cards
        </h3>
        <div className="space-y-3">
          {[
            {
              num: "1",
              rule: "Pay the FULL balance every month — no exceptions",
              detail: "Not 90%, not 99%. The full amount. The moment you carry a balance, interest kicks in at 42% p.a. — one of the highest rates on any financial product in India.",
              color: "emerald"
            },
            {
              num: "2",
              rule: "Never use your credit card for a cash advance",
              detail: "Cash advances have zero grace period + 2.5–3.5% upfront fee. Even if you repay tomorrow, you've already lost money. Use a debit card or UPI instead.",
              color: "red"
            },
            {
              num: "3",
              rule: "Keep utilization below 30% of your credit limit",
              detail: "This protects your CIBIL score. If needed, request a credit limit increase — it lowers your utilization ratio without changing spending.",
              color: "blue"
            },
            {
              num: "4",
              rule: "Have maximum 1–2 credit cards",
              detail: "More cards = more statements to track, more temptation, more annual fees. One primary card for rewards and one for backup is all you need.",
              color: "amber"
            },
            {
              num: "5",
              rule: "Review your statement every single month",
              detail: "Takes 5 minutes. Catches fraud early. Keeps you aware of spending patterns. Banks won't chase fraudulent charges if you report them late.",
              color: "purple"
            },
          ].map((rule, i) => (
            <div key={i} className={`p-5 bg-${rule.color}-50 rounded-xl border border-${rule.color}-200 flex items-start gap-4`}>
              <div className={`flex-shrink-0 w-9 h-9 bg-${rule.color}-600 text-white rounded-full flex items-center justify-center font-bold text-base`}>
                {rule.num}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{rule.rule}</p>
                <p className="text-xs text-slate-600 mt-1">{rule.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Red Flag Signs */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-red-700 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" /> Red Flag Signs You're Misusing Your Card
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "You can't remember what you spent on without checking the statement",
            "You feel like you have 'more money' because you have a credit card",
            "You're paying interest charges every single month",
            "You're using one credit card to pay the bill of another",
            "You use it for daily groceries and can't pay the bill on time",
            "You maxed out your card and asked for a limit increase to spend more",
            "You've missed a payment due date even once",
            "Your total card spending regularly exceeds your monthly savings",
          ].map((flag, i) => (
            <div key={i} className="p-4 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700">{flag}</p>
            </div>
          ))}
        </div>
        <div className="p-5 bg-red-100 rounded-xl border border-red-300">
          <p className="text-sm font-bold text-red-900 mb-2">If 2+ of these apply to you — take action now.</p>
          <p className="text-xs text-red-800">
            Step 1: Stop using the card immediately. Cut spending to essentials only.<br />
            Step 2: Calculate the exact outstanding balance and interest being charged.<br />
            Step 3: Pay off the highest-interest card first (the avalanche method).<br />
            Step 4: Set up auto-debit for FULL balance — so you never miss again.
          </p>
        </div>
      </section>

      {/* Card Types for Beginners */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-violet-600" /> Starter Card Categories in India
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              type: "Cashback Cards",
              example: "Examples: HDFC MoneyBack type cards",
              best: "Best for everyday spenders",
              desc: "Give 1–5% cashback on online shopping, groceries, fuel. Simple and straightforward. Great first card.",
              color: "violet"
            },
            {
              type: "Online Shopping Cards",
              example: "Examples: Cards tied to major e-commerce platforms",
              best: "Best for online shoppers",
              desc: "Extra rewards (5–10%) on e-commerce platforms. If you shop heavily on Flipkart or Amazon, these deliver real value.",
              color: "blue"
            },
            {
              type: "Fuel & Utility Cards",
              example: "Examples: Co-branded fuel station cards",
              best: "Best for daily commuters",
              desc: "Fuel surcharge waiver (saves 1% on every litre), plus some bill payment rewards. Great if you drive daily.",
              color: "emerald"
            },
          ].map((c, i) => (
            <Card key={i} className={`border-${c.color}-200 shadow-sm`}>
              <CardContent className="p-4 space-y-2">
                <p className={`text-sm font-bold text-${c.color}-800`}>{c.type}</p>
                <p className={`text-[10px] text-${c.color}-600 font-medium`}>{c.example}</p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full bg-${c.color}-100 text-${c.color}-700 font-semibold`}>{c.best}</span>
                <p className="text-xs text-slate-600">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-xs text-slate-500 italic">Note: These are category descriptions, not specific product recommendations. Always compare current offers and annual fees before applying. Use aggregator sites like BankBazaar to compare live options.</p>
      </section>

      {/* Final Wisdom */}
      <div className="p-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <Lightbulb className="w-8 h-8" />
          The Credit Card Mindset
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-bold text-violet-100 mb-2">The Winning Approach:</p>
            <ul className="text-xs text-white space-y-1 list-disc ml-4">
              <li>Use it like a debit card — only spend what you have in your bank</li>
              <li>Set up auto-pay for full balance so you never pay interest</li>
              <li>Use it for planned purchases — not impulse buys</li>
              <li>Check your statement every month without fail</li>
              <li>Think of rewards as a bonus — never the reason to spend</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-violet-100 mb-2">The One Number That Matters:</p>
            <div className="p-4 bg-white/15 rounded-xl">
              <p className="text-3xl font-bold text-white">42%</p>
              <p className="text-xs text-violet-100 mt-1">Annual interest rate on most Indian credit cards. That's higher than any personal loan, higher than most business loans. Never let that number work against you.</p>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-white/20 text-center">
          <p className="text-violet-100 font-semibold text-lg">
            "A credit card is a 0% loan if you pay in full — and a 42% debt trap if you don't. Same card, completely different outcome."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
