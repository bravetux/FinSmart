"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Target,
  Shield,
  BarChart3,
  PiggyBank,
  Zap,
  Calendar,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    label: "Pillar 1 — Guaranteed",
    color: "bg-emerald-50 border-emerald-200",
    headerColor: "text-emerald-800",
    badgeColor: "bg-emerald-100 text-emerald-800",
    items: [
      { name: "EPF", desc: "Employer + employee contributions. ~8.15% p.a. Do NOT withdraw on job change." },
      { name: "PPF", desc: "₹1.5L/year. 15-year lock-in. 100% tax-free returns. Sovereign guarantee." },
      { name: "NPS", desc: "Market-linked but disciplined. Extra ₹50K deduction under 80CCD(1B)." },
    ],
  },
  {
    label: "Pillar 2 — Growth",
    color: "bg-blue-50 border-blue-200",
    headerColor: "text-blue-800",
    badgeColor: "bg-blue-100 text-blue-800",
    items: [
      { name: "Equity Mutual Funds via SIP", desc: "The single largest corpus builder. Start early, stay consistent, never stop." },
      { name: "Index Funds", desc: "Low-cost, broad market exposure. Nifty 50 / Nifty Next 50 index funds." },
      { name: "Direct Equity (optional)", desc: "Only if you have knowledge and discipline. Keep to <20% of portfolio." },
    ],
  },
  {
    label: "Pillar 3 — Passive Income",
    color: "bg-purple-50 border-purple-200",
    headerColor: "text-purple-800",
    badgeColor: "bg-purple-100 text-purple-800",
    items: [
      { name: "Rental Income", desc: "Real estate that generates monthly cash flow. Supplement, not replace, equity." },
      { name: "Dividends", desc: "Dividend-paying stocks or equity savings funds for steady income in retirement." },
      { name: "Bonds / SGB", desc: "Sovereign Gold Bonds and government securities for stability post-60." },
    ],
  },
];

const sipComparison = [
  { age: "Start at 25", sip: "~₹5,000/month", years: "35 years", multiplier: "1x effort" },
  { age: "Start at 35", sip: "~₹15,000/month", years: "25 years", multiplier: "3x effort" },
  { age: "Start at 45", sip: "~₹45,000/month", years: "15 years", multiplier: "9x effort" },
];

const phases = [
  {
    phase: "Accumulation",
    span: "Age 25–50",
    icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    color: "bg-emerald-50 border-emerald-200",
    titleColor: "text-emerald-800",
    points: [
      "80–90% equity allocation — time is your biggest asset",
      "Maximize SIP every year; increase by 10% annually",
      "Build all three pillars simultaneously",
      "Reinvest every bonus, windfall, and salary hike increment",
    ],
  },
  {
    phase: "Preservation",
    span: "Age 50–60",
    icon: <Shield className="w-5 h-5 text-blue-600" />,
    color: "bg-blue-50 border-blue-200",
    titleColor: "text-blue-800",
    points: [
      "Gradually shift to 50–60% equity, rest in debt/hybrid",
      "Stop taking new financial risks — protect what you've built",
      "Review and consolidate all investments",
      "Ensure health insurance is robust and up to date",
    ],
  },
  {
    phase: "Distribution",
    span: "Age 60+",
    icon: <PiggyBank className="w-5 h-5 text-purple-600" />,
    color: "bg-purple-50 border-purple-200",
    titleColor: "text-purple-800",
    points: [
      "Live off SWP (Systematic Withdrawal Plan) at 4% per year",
      "Keep 30–40% in equity to beat inflation over 25–30 more years",
      "Use Pillar 3 passive income to reduce corpus withdrawals",
      "Annual review to adjust withdrawal rate if needed",
    ],
  },
];

const mistakes = [
  { title: '"EPF will be enough"', desc: "At ₹30K/month salary for 30 years, your EPF corpus at retirement is unlikely to cover even 10 years of expenses adjusted for inflation." },
  { title: "Withdrawing EPF on job change", desc: "This is the single most common and most damaging retirement mistake. Keep the EPF, transfer it to your new employer." },
  { title: "Stopping SIPs in a crash", desc: "Market crashes are when your SIP buys the most units for the same rupee. Stopping is exactly the wrong move." },
  { title: "No or inadequate health insurance", desc: "One serious illness can drain ₹10–20L. This wipes out years of disciplined savings in weeks." },
  { title: "Underestimating inflation", desc: "₹50,000/month today = ₹2.7 lakh/month in 25 years at 7% inflation. Your corpus must account for this." },
];

const checklist = [
  "Activate NPS today — extra ₹50K deduction under 80CCD(1B) and forced discipline",
  "Log in to EPFO portal and verify your current EPF balance and nomination",
  "Start or increase a SIP — even ₹1,000 more per month adds lakhs over 20 years",
  "Buy or upgrade your health insurance — at least ₹10L family floater",
  "Calculate your retirement number using the formula below and write it down",
];

const RetirementPlanning = () => {
  return (
    <div className="space-y-10 pb-12 animate-in fade-in duration-500">

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Target className="w-4 h-4" />
            <span>Retirement Planning</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            How Much Do You Need to Retire?
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl">
            Most Indians rely on EPF + children + prayers for retirement. That's not a plan. Let's build a real one — with numbers, strategy, and a clear roadmap.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Why it's uniquely challenging */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Why Retirement is Uniquely Challenging in India</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "No Universal Pension", desc: "Unlike the UK or USA, India has no government pension for private sector employees. You are entirely on your own." },
            { title: "EPF is Not Enough", desc: "EPF returns ~8.15% p.a. but the corpus at retirement rarely covers 20+ years of inflation-adjusted expenses." },
            { title: "Rising Life Expectancy", desc: "You need to fund 25–30 years of retirement. Retiring at 60 means planning to age 85–90." },
            { title: "The Inflation Trap", desc: "₹50,000/month today will need ₹2.7 lakh/month in 25 years at 7% inflation. This triples your required corpus." },
          ].map((item, i) => (
            <Card key={i} className="border-amber-200 bg-amber-50/60 shadow-sm">
              <CardContent className="p-5">
                <p className="font-bold text-slate-800 mb-1">{item.title}</p>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Corpus Formula */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-blue-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">The Retirement Corpus Formula</h3>
        </div>
        <Card className="border-blue-200 shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-5">
            <p className="font-semibold text-lg">Three Steps to Your Magic Number</p>
          </div>
          <CardContent className="p-6 space-y-4">
            {[
              { step: "Step 1", title: "Estimate monthly expenses at retirement", desc: "Use today's money. What would you need per month to live comfortably? Include rent/EMI-free living, food, travel, medical, leisure." },
              { step: "Step 2", title: "Adjust for inflation", desc: "Multiply today's monthly expense by (1.07)^N, where N = years to retirement. At 7% inflation for 25 years, multiply by ~5.43." },
              { step: "Step 3", title: "Apply the 4% Safe Withdrawal Rule", desc: "Corpus = Annual retirement expenses × 25. This is the amount that, invested in a balanced fund at 8–10%, can sustain 4% withdrawals indefinitely." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                  <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Worked Example */}
            <div className="mt-4 p-5 bg-slate-900 text-white rounded-xl space-y-3">
              <p className="text-sm font-semibold text-slate-300 uppercase tracking-wide">Worked Example</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Today's monthly expenses: <strong className="text-white">₹60,000</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Inflate at 7% for 25 years: <strong className="text-white">₹3.26 lakh/month</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Annual expense at retirement: <strong className="text-white">₹39.1 lakh/year</strong></span>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-700">
                  <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-lg font-bold text-emerald-400">Target Corpus = ₹39.1L × 25 = <span className="text-white">₹9.78 Crore</span></span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4% Rule */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Zap className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">The 4% Safe Withdrawal Rate — Explained Simply</h3>
        </div>
        <Card className="border-emerald-200 bg-emerald-50/50 shadow-sm">
          <CardContent className="p-6 space-y-3">
            <p className="text-slate-700">
              If your retirement corpus is invested in a <strong>balanced fund earning 8–10% per year</strong>, and you withdraw only <strong>4% of the corpus per year</strong> (increasing with inflation), the mathematics show your money will last <strong>25–30+ years without running out.</strong>
            </p>
            <div className="grid md:grid-cols-3 gap-3 pt-2">
              {[
                { label: "Corpus", value: "₹9.78 Crore", sub: "invested in balanced fund" },
                { label: "Annual Withdrawal", value: "₹39.1 Lakh", sub: "= 4% of corpus" },
                { label: "Duration", value: "25–30+ Years", sub: "mathematically safe" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-emerald-100 text-center">
                  <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-emerald-700">{item.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Three Pillars */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
            <Shield className="w-5 h-5 text-purple-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">The Three Pillars of Retirement</h3>
        </div>
        <div className="space-y-4">
          {pillars.map((pillar, i) => (
            <Card key={i} className={`border shadow-sm ${pillar.color}`}>
              <CardContent className="p-6">
                <Badge className={`mb-4 ${pillar.badgeColor} border-0`}>{pillar.label}</Badge>
                <div className="grid md:grid-cols-3 gap-3">
                  {pillar.items.map((item, j) => (
                    <div key={j} className="p-3 bg-white rounded-lg border border-white/80 shadow-sm">
                      <p className="text-sm font-bold text-slate-800 mb-1">{item.name}</p>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Power of Starting Early */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
            <Clock className="w-5 h-5 text-orange-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">The Power of Starting Early</h3>
        </div>
        <p className="text-slate-600">SIP required to build a <strong>₹5 Crore corpus by age 60</strong> at 12% CAGR:</p>
        <div className="grid md:grid-cols-3 gap-4">
          {sipComparison.map((row, i) => (
            <Card
              key={i}
              className={`shadow-md border-2 ${i === 0 ? "border-emerald-400 bg-emerald-50" : i === 1 ? "border-amber-400 bg-amber-50" : "border-red-400 bg-red-50"}`}
            >
              <CardContent className="p-6 text-center space-y-2">
                <p className="font-bold text-slate-800">{row.age}</p>
                <p className={`text-3xl font-extrabold ${i === 0 ? "text-emerald-700" : i === 1 ? "text-amber-700" : "text-red-700"}`}>{row.sip}</p>
                <p className="text-xs text-slate-500">{row.years} @ 12% CAGR</p>
                <Badge className={`text-xs ${i === 0 ? "bg-emerald-100 text-emerald-800" : i === 1 ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800"} border-0`}>
                  {row.multiplier}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic text-center">Starting just 10 years late means 3x more monthly effort to reach the same goal.</p>
      </section>

      {/* Three Phases */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-indigo-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Three Phases of Retirement Planning</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {phases.map((phase, i) => (
            <Card key={i} className={`border shadow-sm ${phase.color}`}>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  {phase.icon}
                  <div>
                    <p className={`font-bold ${phase.titleColor}`}>{phase.phase}</p>
                    <p className="text-xs text-slate-500">{phase.span}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Common Retirement Mistakes</h3>
        </div>
        <div className="space-y-3">
          {mistakes.map((mistake, i) => (
            <div key={i} className="flex gap-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">{mistake.title}</p>
                <p className="text-sm text-slate-600 mt-0.5">{mistake.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Corpus Calculator */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-slate-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Estimate Your Retirement Corpus</h3>
        </div>
        <Card className="border-slate-200 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Your Inputs</p>
                {[
                  { label: "Current Age", placeholder: "e.g. 30" },
                  { label: "Target Retirement Age", placeholder: "e.g. 60" },
                  { label: "Current Monthly Expenses (₹)", placeholder: "e.g. 60,000" },
                  { label: "Expected Inflation Rate (%)", placeholder: "e.g. 7" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="text-xs font-semibold text-slate-500 mb-1 block">{field.label}</label>
                    <div className="w-full h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 flex items-center text-sm text-slate-400">
                      {field.placeholder}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Your Target</p>
                <div className="p-5 bg-slate-900 text-white rounded-xl space-y-4 text-center">
                  <p className="text-sm text-slate-400">Based on 30-year-old with ₹60,000/month expenses retiring at 60</p>
                  <div>
                    <p className="text-sm text-slate-400">Inflation-adjusted monthly expense</p>
                    <p className="text-3xl font-bold text-white">₹3.26 Lakh</p>
                  </div>
                  <div className="pt-3 border-t border-slate-700">
                    <p className="text-sm text-slate-400">Retirement Corpus Required</p>
                    <p className="text-4xl font-extrabold text-emerald-400">₹9.78 Crore</p>
                  </div>
                  <p className="text-xs text-slate-500">Using 4% Safe Withdrawal Rate</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Action Checklist */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Your Action Checklist: Do These This Month</h3>
        </div>
        <Card className="border-emerald-200 bg-emerald-50/40 shadow-sm">
          <CardContent className="p-6 space-y-3">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-emerald-100">
                <div className="w-6 h-6 rounded-full border-2 border-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-emerald-600">{i + 1}</span>
                </div>
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

    </div>
  );
};

export default RetirementPlanning;
