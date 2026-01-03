"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Shield, 
  Heart, 
  DollarSign, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  RefreshCcw, 
  Zap 
} from 'lucide-react';
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

      {/* Policy Jargon Introduction */}
      <div className="space-y-4 pt-6">
        <h3 className="text-2xl font-bold text-slate-900">Policy Jargon Decoded</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          Buying insurance is hard; reading the policy document is harder. Most people draw a blank at the jargon. To uncomplicate things, we’ve broken down common insurance terms using real-world scenarios so you know exactly what you’re paying for.
        </p>
      </div>

      {/* 1. The "Deal-Breakers": What to Avoid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-red-700 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" /> The "Deal-Breakers": What to Avoid
        </h3>
        <p className="text-sm text-red-800 leading-relaxed">
          These features might lower your premium today but could cost you lakhs during a medical emergency.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Co-payment */}
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-red-900">1. Co-payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-white rounded-lg border border-red-100">
                <p className="text-xs font-bold text-red-700 mb-1">The Trap</p>
                <p className="text-xs text-slate-600">You save ₹1,800 on your annual premium by agreeing to a 20% co-pay.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-red-100">
                <p className="text-xs font-bold text-red-700 mb-1">The Reality</p>
                <p className="text-xs text-slate-600">You get a ₹2 Lakh hospital bill. The insurer pays ₹1,60,000; you pay ₹40,000 out of pocket.</p>
              </div>
              <div className="pt-2 border-t border-red-100">
                <p className="text-xs font-bold text-red-900 flex items-center gap-1">
                  Verdict: <XCircle className="w-3 h-3" /> Avoid.
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Only consider this for senior citizens where premiums are otherwise unaffordable.</p>
              </div>
            </CardContent>
          </Card>

          {/* Room Rent Caps */}
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-red-900">2. Room Rent Caps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-white rounded-lg border border-red-100">
                <p className="text-xs font-bold text-red-700 mb-1">The Trap</p>
                <p className="text-xs text-slate-600">A policy with a room rent limit (e.g., 1% of the sum insured).</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-red-100">
                <p className="text-xs font-bold text-red-700 mb-1">The Reality</p>
                <p className="text-xs text-slate-600">If your limit is ₹5,000 but you pick a room costing ₹10,000, the insurer may only pay 50% of your entire bill (surgeons, tests, etc.) due to proportionate deduction.</p>
              </div>
              <div className="pt-2 border-t border-red-100">
                <p className="text-xs font-bold text-red-900 flex items-center gap-1">
                  Verdict: <XCircle className="w-3 h-3" /> Avoid.
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Always choose a policy with "No Room Rent Caps" or "Single Private A/C Room" eligibility.</p>
              </div>
            </CardContent>
          </Card>

          {/* Disease-wise Sub-limits */}
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-red-900">3. Disease-wise Sub-limits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-white rounded-lg border border-red-100">
                <p className="text-xs font-bold text-red-700 mb-1">The Trap</p>
                <p className="text-xs text-slate-600">A high cover (e.g., ₹10 Lakh) at a suspiciously low price.</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-red-100">
                <p className="text-xs font-bold text-red-700 mb-1">The Reality</p>
                <p className="text-xs text-slate-600">The policy may cap specific treatments (e.g., only ₹2 Lakh for heart surgery). You’ll pay the balance for expensive procedures.</p>
              </div>
              <div className="pt-2 border-t border-red-100">
                <p className="text-xs font-bold text-red-900 flex items-center gap-1">
                  Verdict: <XCircle className="w-3 h-3" /> Avoid.
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Look for policies with no sub-limits on specific illnesses.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. The "Essentials": What to Look For */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-emerald-700 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" /> The "Essentials": What to Look For
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Ensure these features are included to maximize your protection.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Low Waiting Periods", icon: <Clock className="w-6 h-6 text-blue-600" />, desc: "Most policies don't cover pre-existing diseases (PED) for 2–4 years. Seek the shortest possible wait (ideally 1–2 years)." },
            { title: "Pre & Post Hospitalization", icon: <Calendar className="w-6 h-6 text-purple-600" />, desc: "Covers costs like MRIs, blood tests, and follow-up meds 30–60 days before and after your hospital stay." },
            { title: "Restoration Benefit", icon: <RefreshCcw className="w-6 h-6 text-orange-600" />, desc: "If you exhaust your limit (e.g., ₹5 Lakh), the insurer 'refills' it for the next illness. Critical for family floater plans." },
            { title: "Daycare Treatments", icon: <Zap className="w-6 h-6 text-emerald-600" />, desc: "Modern surgeries (cataracts, dialysis, appendicitis) often take less than 24 hours. Ensure your policy covers these." },
          ].map((item, i) => (
            <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. The "Good-to-Haves": The Added Bonuses */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
          <Heart className="w-6 h-6 text-blue-600" /> The "Good-to-Haves": The Added Bonuses
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          These features add value but shouldn't be the primary reason you buy a policy.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "No Claim Bonus (NCB)", desc: "Increases your cover (often 10–50%) for every year you don't make a claim." },
            { title: "Free Health Checkups", desc: "A nice-to-have perk that usually pays for itself if you use it annually." },
            { title: "Alternative Treatments (AYUSH)", desc: "Covers Ayurveda, Yoga, Unani, Siddha, and Homeopathy, provided it's at a government-certified facility." },
            { title: "Domiciliary Expense", desc: "Covers treatment at home if a hospital bed is unavailable or the patient cannot be moved." },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-slate-100 rounded-xl border border-slate-200 flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Proceed with Caution: Maternity & OPD */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-700 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-600" /> Proceed with Caution
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-amber-200 bg-amber-50/50 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-amber-900">Maternity Coverage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-amber-800 leading-relaxed">
                Often comes with high premiums and long waiting periods (3–4 years).
              </p>
              <div className="p-3 bg-white rounded-lg border border-amber-100">
                <p className="text-xs font-bold text-amber-700 mb-1">Math Check</p>
                <p className="text-xs text-slate-600">Calculate if the extra premium paid over the waiting period is less than the actual cost of delivery before opting in.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-amber-200 bg-amber-50/50 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-amber-900">OPD (Outpatient Department)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-amber-800 leading-relaxed">
                Reimburses doctor consultations. Since insurers know you will use this, they usually bake the cost (plus a margin) into your premium.
              </p>
              <div className="p-3 bg-white rounded-lg border border-amber-100">
                <p className="text-xs font-bold text-amber-700 mb-1">Verdict</p>
                <p className="text-xs text-slate-600">It’s often cheaper to pay for consultations yourself rather than paying the inflated premium for OPD coverage.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Actionable Tip */}
      <div className="p-8 bg-indigo-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-xl font-bold">The Golden Rule of Health Insurance</h4>
        <p className="text-indigo-200 text-sm max-w-2xl leading-relaxed">
          Buy health insurance early, even when you are young and healthy. Premiums are lowest when you are young, and you avoid long waiting periods for pre-existing conditions later in life.
        </p>
      </div>
    </div>
  );
};

export default HealthInsurance;