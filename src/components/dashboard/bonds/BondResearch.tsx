"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, PieChart, Landmark, CheckCircle2 } from 'lucide-react';

const researchSteps = [
  {
    title: "1. Read the Rating Report",
    description: "Don't just look at 'AAA'. Read the agency's rationale. Look for phrases like 'Positive Outlook' or 'Stable'.",
    icon: <FileText className="w-5 h-5 text-blue-600" />
  },
  {
    title: "2. Check Interest Coverage Ratio",
    description: "Ensure the company earns enough profit to pay its interest at least 2-3 times over.",
    icon: <PieChart className="w-5 h-5 text-emerald-600" />
  },
  {
    title: "3. Understand the Purpose",
    description: "Is the money for building a new factory (growth) or paying off old debt (potential red flag)?",
    icon: <Search className="w-5 h-5 text-purple-600" />
  },
  {
    title: "4. Look at the Promoters",
    description: "Research the parent company or the group behind the issuer. A strong pedigree adds a layer of safety.",
    icon: <Landmark className="w-5 h-5 text-amber-600" />
  }
];

const BondResearch = () => {
  return (
    <section className="space-y-8 py-12 border-t">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold text-slate-900">How to Research Bond Issuers</h3>
        <p className="text-slate-500">Become a pro at vetting companies before lending them your money.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          {researchSteps.map((step, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                {step.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Card className="bg-slate-900 text-white border-none p-8">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-xl">The 3-Point Checklist</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300"><strong>Is it Listed?</strong> Listed bonds have higher transparency and disclosure requirements from SEBI.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300"><strong>Is it Secured?</strong> Secured bonds are backed by company assets, giving you more protection in case of liquidation.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-300"><strong>Recent Defaults?</strong> Check if the company or its group companies have defaulted on any payments in the last 3 years.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BondResearch;