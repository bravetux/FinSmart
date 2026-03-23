"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Calculator,
  BookOpen,
  TrendingDown,
  BadgeIndianRupee
} from 'lucide-react';

const TaxSavingOverview = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Tax Saving Investments</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Tax-Saving Toolkit
          </h2>
          <p className="text-emerald-50 text-lg max-w-2xl">
            Paying taxes is your duty. But paying MORE taxes than you legally need to? That's just leaving money on the table. Let's fix that.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Old vs New Tax Regime */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-emerald-600" /> Old Tax Regime vs New Tax Regime
        </h3>
        <p className="text-sm text-slate-600">India gives you a choice every year. Pick the one that costs you less. Here's the plain-English breakdown:</p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-900">Old Tax Regime</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">Lower tax rates — but ONLY if you claim deductions and exemptions. More paperwork, more savings.</p>
              <div className="p-3 bg-white rounded-lg border border-blue-100">
                <p className="text-xs font-bold text-blue-800 mb-2">Best for you if you have:</p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc ml-4">
                  <li>A home loan (interest + principal deductions)</li>
                  <li>HRA (House Rent Allowance) in your salary</li>
                  <li>80C investments like PPF, ELSS, LIC</li>
                  <li>Health insurance premiums (80D)</li>
                  <li>NPS contributions (extra ₹50K deduction)</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <p className="text-xs text-blue-900">Allows all deductions — 80C, 80D, HRA, LTA, home loan interest, standard deduction, and more.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-emerald-900">New Tax Regime</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">Flat lower tax rates. No deductions needed. Simpler to file, but you give up the savings from deductions.</p>
              <div className="p-3 bg-white rounded-lg border border-emerald-100">
                <p className="text-xs font-bold text-emerald-800 mb-2">Best for you if:</p>
                <ul className="text-xs text-slate-600 space-y-1 list-disc ml-4">
                  <li>You have no home loan or major deductions</li>
                  <li>You're young and just starting out</li>
                  <li>You prefer simplicity over tax planning</li>
                  <li>Your total deductions are under ₹3.75 lakh</li>
                </ul>
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <p className="text-xs text-emerald-900">Offers ₹75,000 standard deduction + NPS employer contribution — but most other deductions are gone.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-1">
            <Lightbulb className="w-4 h-4" /> The Simple Decision Rule
          </p>
          <p className="text-sm text-slate-700">
            If your total eligible deductions (80C + 80D + HRA + home loan interest + NPS etc.) add up to more than <strong>₹3.75 lakh</strong>, the Old Regime almost always gives you a lower tax bill. Run the numbers both ways — it takes 10 minutes.
          </p>
        </div>
      </section>

      {/* The Big Deductions */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BadgeIndianRupee className="w-6 h-6 text-emerald-600" /> The Big Deductions — Explained Clearly
        </h3>
        <p className="text-sm text-slate-600">These are the legal ways the government lets you reduce your taxable income. Each rupee of deduction saves you tax at your slab rate.</p>

        <div className="space-y-4">
          {[
            {
              section: "Section 80C",
              limit: "₹1,50,000 / year",
              color: "emerald",
              headline: "Your Biggest Weapon",
              desc: "This single section can save you up to ₹46,800 in taxes (30% slab). It covers many investments you may already be making.",
              items: [
                "EPF (Employee Provident Fund) — auto-deducted from your salary every month",
                "PPF (Public Provident Fund) deposits — government-backed, tax-free returns",
                "ELSS Mutual Funds — market-linked, 3-year lock-in, highest return potential",
                "LIC premium payments (life insurance)",
                "Home loan principal repayment",
                "Children's school/college tuition fees (up to 2 children)"
              ]
            },
            {
              section: "Section 80D",
              limit: "₹25,000 self + ₹25,000 parents",
              color: "blue",
              headline: "Health Insurance Premiums",
              desc: "Pay for health insurance and get a tax break. If your parents are senior citizens (60+), their limit goes up to ₹50,000.",
              items: [
                "Your own health insurance premium: up to ₹25,000",
                "Spouse and children: included in the ₹25,000",
                "Parents' health insurance: additional ₹25,000 (₹50,000 if they are senior citizens)",
                "Preventive health check-up: up to ₹5,000 within the above limits"
              ]
            },
            {
              section: "Section 80CCD(1B)",
              limit: "₹50,000 EXTRA (above 80C)",
              color: "purple",
              headline: "NPS — The Hidden Gem Deduction",
              desc: "This is over and above your ₹1.5L 80C limit. So total deduction potential = ₹2L. Perfect for people in 30% tax bracket.",
              items: [
                "Contribute to NPS Tier 1 account",
                "₹50,000 extra deduction — not counted in 80C",
                "Someone in 30% tax bracket saves ₹15,600 in tax on this alone",
                "Available to both salaried and self-employed"
              ]
            },
            {
              section: "Section 24(b)",
              limit: "Up to ₹2,00,000 / year",
              color: "orange",
              headline: "Home Loan Interest Deduction",
              desc: "The interest part of your home loan EMI is deductible — up to ₹2 lakh per year for a self-occupied property. This is separate from 80C (which covers the principal).",
              items: [
                "Only applies to a self-occupied property (where you live)",
                "For let-out properties, full interest is deductible (no ₹2L cap)",
                "Property must be completed within 5 years of loan start",
                "You need a certificate from your bank showing interest paid"
              ]
            },
            {
              section: "Standard Deduction",
              limit: "₹50,000 flat",
              color: "teal",
              headline: "Free Money for Salaried People",
              desc: "No proof needed. No investment required. Every salaried employee gets ₹50,000 knocked off their taxable income — automatically.",
              items: [
                "Available to ALL salaried employees",
                "No bills, no receipts, no documentation needed",
                "Replaces the old transport allowance + medical reimbursement",
                "Saves up to ₹15,600 for someone in 30% tax bracket"
              ]
            }
          ].map((item, i) => (
            <Card key={i} className={`border-${item.color}-200 shadow-sm`}>
              <CardContent className="p-5">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className={`flex-shrink-0 px-3 py-1.5 bg-${item.color}-100 rounded-lg text-center min-w-[140px]`}>
                    <p className={`text-xs font-bold text-${item.color}-800`}>{item.section}</p>
                    <p className={`text-sm font-bold text-${item.color}-900 mt-0.5`}>{item.limit}</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-bold text-slate-900">{item.headline}</p>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                    <ul className="text-xs text-slate-600 space-y-0.5 list-disc ml-4">
                      {item.items.map((pt, j) => <li key={j}>{pt}</li>)}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Math Example */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-emerald-600" /> Quick Math: From ₹12L Salary to ₹6.5L Taxable Income
        </h3>
        <Card className="border-slate-200 shadow-md">
          <CardContent className="p-6">
            <p className="text-sm text-slate-600 mb-4">Imagine a salaried employee earning ₹12 lakh per year. Here's how smart deductions cut their tax bill dramatically:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-emerald-600 text-white">
                    <th className="p-3 text-left rounded-tl-lg">Item</th>
                    <th className="p-3 text-right">Amount</th>
                    <th className="p-3 text-right rounded-tr-lg">Running Taxable Income</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "Gross salary", amount: "+₹12,00,000", running: "₹12,00,000", bg: "bg-white" },
                    { item: "Standard Deduction (Section 16)", amount: "−₹50,000", running: "₹11,50,000", bg: "bg-emerald-50" },
                    { item: "Section 80C (PPF + ELSS + EPF)", amount: "−₹1,50,000", running: "₹10,00,000", bg: "bg-white" },
                    { item: "Section 80D (health insurance)", amount: "−₹25,000", running: "₹9,75,000", bg: "bg-emerald-50" },
                    { item: "Section 80CCD(1B) — NPS contribution", amount: "−₹50,000", running: "₹9,25,000", bg: "bg-white" },
                    { item: "Section 24(b) — Home loan interest", amount: "−₹2,00,000", running: "₹7,25,000", bg: "bg-emerald-50" },
                    { item: "HRA (if applicable, estimated)", amount: "−₹75,000", running: "₹6,50,000", bg: "bg-white" },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t ${row.bg}`}>
                      <td className="p-3 text-slate-700">{row.item}</td>
                      <td className="p-3 text-right font-semibold text-slate-800">{row.amount}</td>
                      <td className="p-3 text-right font-bold text-emerald-700">{row.running}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-emerald-400 bg-emerald-100">
                    <td className="p-3 font-bold text-emerald-900">Final Taxable Income</td>
                    <td className="p-3"></td>
                    <td className="p-3 text-right font-bold text-emerald-900 text-lg">₹6,50,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs font-bold text-amber-800">The Result</p>
              <p className="text-xs text-slate-700 mt-1">
                Without planning: Tax on ₹12L ≈ ₹1,72,500. After deductions: Tax on ₹6.5L ≈ ₹32,500.
                <strong className="text-emerald-700"> Saving: ₹1,40,000+ — legally!</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Salaried vs Self-employed */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-blue-600" /> Salaried vs Self-Employed: Which Deductions Apply?
        </h3>
        <Card className="border-slate-200 shadow-md">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left">Deduction</th>
                    <th className="p-3 text-center">Salaried</th>
                    <th className="p-3 text-center">Self-Employed / Business</th>
                    <th className="p-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { ded: "Standard Deduction (₹50K)", sal: true, se: false, note: "Only for salary/pension income" },
                    { ded: "Section 80C (₹1.5L)", sal: true, se: true, note: "Both can invest in PPF, ELSS etc." },
                    { ded: "Section 80D (Health Insurance)", sal: true, se: true, note: "Available to all" },
                    { ded: "Section 80CCD(1B) — NPS ₹50K", sal: true, se: true, note: "Open eNPS account online" },
                    { ded: "HRA Exemption", sal: true, se: false, note: "Only if HRA is in salary structure" },
                    { ded: "Section 24(b) — Home Loan Interest", sal: true, se: true, note: "Must own & occupy the property" },
                    { ded: "LTA (Leave Travel Allowance)", sal: true, se: false, note: "Only if part of salary package" },
                    { ded: "Business Expenses Deduction", sal: false, se: true, note: "Phone, internet, office, travel etc." },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white border-t" : "bg-slate-50 border-t"}>
                      <td className="p-3 font-medium text-slate-800">{row.ded}</td>
                      <td className="p-3 text-center">
                        {row.sal
                          ? <span className="text-emerald-600 font-bold">Yes</span>
                          : <span className="text-red-400">No</span>}
                      </td>
                      <td className="p-3 text-center">
                        {row.se
                          ? <span className="text-emerald-600 font-bold">Yes</span>
                          : <span className="text-red-400">No</span>}
                      </td>
                      <td className="p-3 text-slate-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final Rule */}
      <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <AlertTriangle className="w-8 h-8" />
          The Golden Rule of Tax Saving
        </h4>
        <p className="text-emerald-50 text-base">
          Always calculate your tax liability under BOTH regimes before filing. It takes about 10 minutes using the Income Tax website's calculator — and it can save you tens of thousands of rupees. Your CA or the official IT portal at <strong>incometax.gov.in</strong> has a free regime comparison tool.
        </p>
        <div className="grid md:grid-cols-3 gap-4 pt-2">
          {[
            { step: "Step 1", action: "List all your eligible deductions" },
            { step: "Step 2", action: "Calculate tax under Old Regime using deductions" },
            { step: "Step 3", action: "Compare with New Regime — pick the lower number" },
          ].map((s, i) => (
            <div key={i} className="p-4 bg-white/15 rounded-xl backdrop-blur-sm">
              <p className="text-xs font-bold text-emerald-200">{s.step}</p>
              <p className="text-sm text-white mt-1">{s.action}</p>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-white/20 text-center">
          <p className="text-emerald-100 font-semibold text-lg">
            "Tax planning is not about cheating the system. It's about reading the rulebook — and the government wrote it so you could save."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxSavingOverview;
