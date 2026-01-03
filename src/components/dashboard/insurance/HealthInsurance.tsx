"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Heart, DollarSign, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const HealthInsurance = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-red-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Heart className="w-4 h-4" />
            <span>Protecting Your Health</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Health Insurance: Your Financial Safety Net
          </h2>
          <p className="text-red-50 text-lg max-w-xl">
            A contract that pays for medical and surgical expenses incurred by the insured. It protects your savings from unexpected hospital bills.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Key Benefits */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Why Health Insurance is Essential</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
             <Shield className="w-8 h-8 text-red-600" />
             <h4 className="font-bold">Protect Savings</h4>
             <p className="text-xs text-slate-500">Prevents major medical events from wiping out your life savings or retirement corpus.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
             <DollarSign className="w-8 h-8 text-emerald-600" />
             <h4 className="font-bold">Tax Benefits</h4>
             <p className="text-xs text-slate-500">Premiums paid are deductible under Section 80D of the Income Tax Act.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
             <Clock className="w-8 h-8 text-blue-600" />
             <h4 className="font-bold">Timely Treatment</h4>
             <p className="text-xs text-slate-500">Ensures you get the best medical care immediately without worrying about cash flow.</p>
          </Card>
        </div>
      </section>

      {/* Key Terms */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Key Terms to Understand</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" /> Waiting Period
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                The time you must wait after buying the policy before certain illnesses or pre-existing conditions are covered (usually 30 days to 4 years).
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-red-600" /> Co-Pay Clause
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                The percentage of the hospital bill you must pay yourself, while the insurer pays the rest. Look for policies with zero or low co-pay.
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Cashless Facility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                The insurer pays the hospital directly, so you don't have to pay out of pocket (available only at network hospitals).
              </p>
            </CardContent>
          </Card>
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" /> Sum Insured (Coverage)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                The maximum amount the insurance company will pay for your medical expenses in a policy year. Aim for high coverage (e.g., ₹1 Crore).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Actionable Tip */}
      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-xl font-bold">The Golden Rule of Health Insurance</h4>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Buy health insurance early, even when you are young and healthy. Premiums are lowest when you are young, and you avoid long waiting periods for pre-existing conditions later in life.
        </p>
      </div>
    </div>
  );
};

export default HealthInsurance;