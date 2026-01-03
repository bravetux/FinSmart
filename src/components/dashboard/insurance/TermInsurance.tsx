"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Users, DollarSign, Clock, AlertTriangle, CheckCircle2, Heart } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const TermInsurance = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Pure Protection</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Term Insurance: Securing Your Family's Future
          </h2>
          <p className="text-blue-50 text-lg max-w-xl">
            The simplest and purest form of life insurance. It provides a large payout (Sum Assured) to your family if you pass away during the policy term.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Core Concept */}
      <section className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Users className="w-5 h-5 text-blue-600" /> The Core Principle
            </CardTitle>
            <CardDescription>It's a risk cover, not an investment product.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Term insurance is designed to replace your income if you are no longer there to provide for your dependents (spouse, children, parents). Since it offers no maturity benefit, the premiums are extremely low for high coverage.
            </p>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-xs font-bold text-blue-800 uppercase mb-1">Key Metric</p>
              <p className="text-xs text-blue-700">Your Sum Assured should be at least 10-15 times your current annual income.</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-emerald-100 bg-emerald-50/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-800">Tax Benefit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-emerald-900 leading-relaxed">
              Premiums are deductible under <strong>Section 80C</strong> (up to ₹1.5 Lakhs). The final payout to the nominee is completely <strong>tax-free</strong> under Section 10(10D).
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Terms */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Key Terms & Riders</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-red-600" /> Premium
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                The amount you pay regularly (monthly or annually) to keep the policy active. Premiums are fixed for the entire term.
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" /> Policy Term
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                The duration for which the policy provides coverage (e.g., 20 years, or until age 65).
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-600" /> Critical Illness Rider
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                An optional add-on that pays a lump sum if you are diagnosed with a serious illness (like cancer or heart attack), even if you survive.
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" /> Accidental Death Benefit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pays an additional amount (over the Sum Assured) if death occurs due to an accident.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Actionable Tip */}
      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-xl font-bold">The Golden Rule of Term Insurance</h4>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Buy term insurance as soon as you have dependents or take on debt (like a home loan). Lock in a low premium while you are young and healthy, and ensure the term covers your entire earning period.
        </p>
      </div>
    </div>
  );
};

export default TermInsurance;