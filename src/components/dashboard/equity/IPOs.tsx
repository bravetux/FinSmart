"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Zap, Building2, Landmark, HelpCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const IPOs = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-orange-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Rocket className="w-4 h-4" />
            <span>Going Public</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Initial Public Offerings (IPOs)
          </h2>
          <p className="text-orange-50 text-lg max-w-xl">
            The transition of a private company to a public company. It's the first time you can buy shares directly from the company.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Why go public? */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Why do companies launch an IPO?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
             <Zap className="w-8 h-8 text-orange-500" />
             <h4 className="font-bold">Raise Capital</h4>
             <p className="text-xs text-slate-500">To get cash for building new factories, expanding to new countries, or paying off debt.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
             <Building2 className="w-8 h-8 text-blue-500" />
             <h4 className="font-bold">Exit for Founders</h4>
             <p className="text-xs text-slate-500">To allow early investors and founders to sell their shares and get rewarded for their hard work.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
             <Landmark className="w-8 h-8 text-emerald-500" />
             <h4 className="font-bold">Brand Visibility</h4>
             <p className="text-xs text-slate-500">Being listed on an exchange improves the company's reputation and credibility with banks and customers.</p>
          </Card>
        </div>
      </section>

      {/* IPO Process */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
        <h3 className="text-2xl font-bold mb-8">The IPO Journey</h3>
        <div className="relative">
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
          <div className="space-y-12">
            {[
              { title: "DRHP", desc: "The company files a 'Draft Red Herring Prospectus' with SEBI, explaining their business and financials." },
              { title: "Price Band", desc: "The company announces the price range at which you can bid for shares (e.g., ₹500 - ₹510)." },
              { title: "Bidding (Subscription)", desc: "The IPO opens for 3-4 days. You apply for a 'Lot' of shares through your broker or bank." },
              { title: "Allotment", desc: "If the IPO is 'Over-subscribed,' you might not get shares. They are allotted via a lottery for retail investors." },
              { title: "Listing Day", desc: "The shares start trading on the Stock Exchange. This is when 'Listing Gains' (or losses) happen!" }
            ].map((step, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-xs font-bold text-orange-600 z-10 shadow-sm">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900">{step.title}</h4>
                <p className="text-sm text-slate-500 max-w-xl">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <Card className="border-dashed border-2 bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-indigo-600" /> How to Apply (Retail)
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <ShieldCheck className="w-5 h-5 text-emerald-500" />
               <p className="text-sm text-slate-600 font-medium">You need a **Demat Account**.</p>
            </div>
            <div className="flex items-center gap-3">
               <CheckCircle2 className="w-5 h-5 text-emerald-500" />
               <p className="text-sm text-slate-600 font-medium">Apply via **ASBA** (Applications Supported by Blocked Amount) through your bank app.</p>
            </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
             <h5 className="font-bold text-indigo-900 text-xs uppercase mb-2">Pro Tip</h5>
             <p className="text-xs text-indigo-800 leading-relaxed">Only apply for IPOs of companies with strong fundamentals and reasonable valuations. Don't chase "Grey Market Premium" (GMP) blindly!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IPOs;