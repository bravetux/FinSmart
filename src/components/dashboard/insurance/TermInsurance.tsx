"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  DollarSign, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Heart, 
  Briefcase, 
  ReceiptText, 
  Scale, 
  HandCoins,
  Wrench,
  Calculator,
  FileText,
  ArrowRight
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const premiumData = [
  { age: 25, maxLife: '~₹9,700', hdfcLife: '~₹10,500', iciciPru: '~₹10,200', bajajAllianz: '~₹10,000' },
  { age: 35, maxLife: '~₹15,400', hdfcLife: '~₹17,000', iciciPru: '~₹16,500', bajajAllianz: '~₹16,000' },
  { age: 45, maxLife: '~₹31,000', hdfcLife: '~₹34,000', iciciPru: '~₹33,500', bajajAllianz: '~₹32,000' },
];

const TermInsurance = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section - Self-Employed Focus */}
      <div className="bg-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Briefcase className="w-4 h-4" />
            <span>Self-Employed Focus</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Term Insurance: Securing Your Family's Future
          </h2>
          <p className="text-blue-50 text-lg max-w-xl">
            For self-employed individuals, there is no corporate safety net—no EPF, no group insurance, and no paid leave. Your income depends entirely on your health and ability to work. Term insurance isn't just a "good-to-have"; it is the ultimate hedge against the loss of your business and your family's financial security.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* How Term Insurance Works */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Wrench className="w-6 h-6 text-blue-600" /> How Term Insurance Works
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-blue-100 bg-blue-50/50 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Death Benefit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you pass away during the policy term, your nominee receives the full Sum Assured.
              </p>
            </CardContent>
          </Card>
          <Card className="border-red-100 bg-red-50/50 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-red-800 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> No Survival Benefit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                There is usually no payout if you survive the term (unless you choose the more expensive "Return of Premium" variant).
              </p>
            </CardContent>
          </Card>
          <Card className="border-emerald-100 bg-emerald-50/50 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-emerald-800 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Fixed Premiums
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your premium amount is locked in from day one for the entire duration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Premium Comparison Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-purple-600" /> Leading Plans & Estimated Premiums (₹1 Crore Cover)
        </h3>
        <p className="text-sm text-slate-600">Premiums are for non-smoking males, covered up to age 70 (Annual Premium).</p>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Age</TableHead>
                <TableHead>Max Life (Smart Total)</TableHead>
                <TableHead>HDFC Life (Click2Protect)</TableHead>
                <TableHead>ICICI Pru (iProtect)</TableHead>
                <TableHead>Bajaj Allianz (eTouch)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {premiumData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-bold">{row.age}</TableCell>
                  <TableCell>{row.maxLife}</TableCell>
                  <TableCell>{row.hdfcLife}</TableCell>
                  <TableCell>{row.iciciPru}</TableCell>
                  <TableCell>{row.bajajAllianz}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Essential Checklist for Self-Employed Buyers */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-emerald-600" /> Essential Checklist for Self-Employed Buyers
        </h3>
        
        {/* 1. How Much Cover */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              1. How Much Cover Do You Need?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                Aim for a Sum Assured that covers 10–25x your annual income.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                Outstanding Business Loans (with personal guarantees).
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                Future Milestones (Children’s education, marriage) adjusted for inflation.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 2. Documentation */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              2. Documentation (The Financial Paperwork)
            </CardTitle>
            <CardDescription>Insurers are stricter with self-employed applicants.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ReceiptText className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                Income Proof: 2–3 years of ITRs and CA-certified computation. Only "Business/Profession" income counts.
              </li>
              <li className="flex items-start gap-2">
                <Scale className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                KYC: PAN Card, Aadhaar, and a recent photograph.
              </li>
              <li className="flex items-start gap-2">
                <HandCoins className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                Bank Records: 6 months of bank statements and a cancelled cheque.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* 3. Choosing the Right Payment Term */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              3. Choosing the Right Payment Term
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 space-y-1">
              <h4 className="font-bold text-blue-900">Limited Pay</h4>
              <p className="text-xs">Pay for 5, 10, or 15 years but stay covered until 70. Recommended for self-employed individuals to finish commitments during peak earning years.</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 space-y-1">
              <h4 className="font-bold text-emerald-900">Regular Pay</h4>
              <p className="text-xs">Pay every year for the entire policy duration. Best if you prefer lower annual outgoings.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Critical Riders (Add-ons) */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-red-600" /> Critical Riders (Add-ons)
        </h3>
        <p className="text-sm text-slate-600">Since your business stops when you do, consider these riders:</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Waiver of Premium", desc: "Future premiums are waived if you become critically ill or disabled, keeping the policy active.", icon: <AlertTriangle className="w-5 h-5 text-orange-600" /> },
            { title: "Critical Illness Rider", desc: "Pays a lump sum upon diagnosis of major illnesses (Cancer, Heart Attack) to help with cash flow.", icon: <Heart className="w-5 h-5 text-pink-600" /> },
            { title: "Accidental Disability Cover", desc: "Provides a payout if you permanently lose the ability to work due to an accident.", icon: <Users className="w-5 h-5 text-blue-600" /> }
          ].map((rider, i) => (
            <Card key={i} className="border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {rider.icon}
                  </div>
                  <CardTitle className="text-lg">{rider.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">{rider.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pro-Tips for Successful Approval */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-600" /> Pro-Tips for Successful Approval
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-amber-100 bg-amber-50/50 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-amber-900">File Accurate ITRs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-800 leading-relaxed">
                Insurers look at Net Profit, not Gross Turnover. Low declared income = Low insurance eligibility.
              </p>
            </CardContent>
          </Card>
          <Card className="border-amber-100 bg-amber-50/50 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-amber-900">Policy Duration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-800 leading-relaxed">
                Don't buy cover until age 85. Cover yourself until age 65–70—the age by which most liabilities are cleared and dependents are self-sufficient.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 border-slate-200 bg-slate-50/50 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-slate-900">No ITR?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                Look for "Proxy-based Underwriting" plans (e.g., Bajaj iSecure II) that assess your lifestyle via credit scores, bank balances, or car value.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TermInsurance;