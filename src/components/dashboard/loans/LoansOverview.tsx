"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandCoins, Landmark, Percent, Clock, AlertTriangle, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LoansOverview = () => {
  const visualGuideId = "1oPCNE-5UALChevzMAESDE050bFR-sxGp";
  const viewUrl = `https://drive.google.com/file/d/${visualGuideId}/view?usp=drive_link`;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <HandCoins className="w-4 h-4" />
            <span>Financial Liabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Understanding Loans
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            A loan is money you borrow today to pay for big needs, with a promise to pay it back over time plus interest.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Visual Guide Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">Loan Lifecycle & Structure</h3>
          <p className="text-slate-500">Explore the comprehensive visual breakdown of how loans are structured and processed.</p>
        </div>
        <Button 
          variant="default" 
          size="lg" 
          className="gap-2 shrink-0 bg-indigo-600 hover:bg-indigo-700"
          onClick={() => window.open(viewUrl, '_blank')}
        >
          <ExternalLink className="w-5 h-5" /> View Visual Guide
        </Button>
      </section>

      {/* Key Concepts */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-none shadow-md bg-white">
          <CardHeader>
            <Percent className="w-8 h-8 text-indigo-600 mb-2" />
            <CardTitle className="text-lg">Interest Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">The "rent" you pay for using the bank's money. Can be Fixed (stays same) or Floating (changes with market).</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md bg-white">
          <CardHeader>
            <Clock className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle className="text-lg">Tenure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">The duration of the loan. Longer tenure means smaller monthly payments but higher total interest cost.</p>
          </CardContent>
        </Card>
        <Card className="border-none shadow-md bg-white">
          <CardHeader>
            <ShieldCheck className="w-8 h-8 text-emerald-600 mb-2" />
            <CardTitle className="text-lg">Collateral</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">An asset (like a house or gold) promised to the bank as security in case you cannot repay.</p>
          </CardContent>
        </Card>
      </div>

      {/* Types of Loans Summary */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Landmark className="w-6 h-6 text-indigo-600" /> Common Loan Types
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
              <Zap className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Unsecured Loans</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Personal loans and Credit Cards. No collateral needed but come with very high interest rates.</p>
            </div>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Secured Loans</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Home loans, Car loans, and Gold loans. Backed by assets, offering lower interest rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-red-900">The Debt Trap</h4>
          <p className="text-sm text-red-800 leading-relaxed">
            Borrowing for consumption (wants) rather than investment (needs/assets) can lead to a cycle of debt. Always ensure your EMI (Monthly Payment) is less than 30-40% of your take-home pay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoansOverview;