"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  Zap, 
  Building2, 
  Landmark, 
  Search,
  BookOpen
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ratingTypes = [
  {
    grade: "AAA",
    label: "Highest Safety",
    description: "This is the highest rating and indicates the strongest degree of safety regarding timely servicing of financial obligations. Bonds with 'AAA' ratings are considered to have the lowest risk of default.",
    example: "A government bond with a stable economic backdrop might receive a 'AAA' rating.",
    color: "bg-emerald-100 text-emerald-700",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
  },
  {
    grade: "AA",
    label: "High Safety",
    description: "These instruments are considered to have a high degree of safety and very low credit risk, but their risk is slightly higher than 'AAA' rated instruments.",
    example: "Corporate bonds from a company with strong financials and a positive outlook might be rated 'AA'.",
    color: "bg-blue-100 text-blue-700",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    grade: "A",
    label: "Adequate Safety",
    description: "Instruments with this rating have an adequate degree of safety and low credit risk. They are somewhat more susceptible to changes in circumstances and economic conditions.",
    example: "A municipal bond with good fiscal management but facing economic headwinds might be rated 'A'.",
    color: "bg-sky-100 text-sky-700",
    icon: <ShieldCheck className="w-6 h-6 text-sky-600" />
  },
  {
    grade: "BBB",
    label: "Moderate Safety",
    description: "These instruments offer a moderate degree of safety and moderate credit risk. They are considered medium-grade and may possess certain speculative characteristics.",
    example: "A corporate bond from an industry facing disruption might receive a 'BBB' rating.",
    color: "bg-amber-100 text-amber-700",
    icon: <ShieldAlert className="w-6 h-6 text-amber-600" />
  },
  {
    grade: "BB, B, C, D",
    label: "Moderate to High Risk",
    description: "Ratings from 'BB' to 'D' range from instruments that have a moderate risk to those that are in default or expected to be in default soon.",
    example: "A company experiencing significant financial distress or undergoing restructuring might find its bonds rated in this range.",
    color: "bg-red-100 text-red-700",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />
  }
];

const BondRatings = () => {
  return (
    <section className="space-y-12 py-12 border-t">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h3 className="text-3xl font-bold text-slate-900">CRISIL Rating Scale</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          Understanding the nuances of CRISIL's rating scale is essential for both issuers and investors. 
          Here's an in-depth look at the rating hierarchy:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {ratingTypes.map((rating, i) => (
          <Card key={i} className="border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row">
              <div className={cn("md:w-48 flex flex-col items-center justify-center p-8 gap-3", rating.color)}>
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  {rating.icon}
                </div>
                <span className="text-2xl font-black tracking-tighter">{rating.grade}</span>
              </div>
              <CardContent className="flex-1 p-8 space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{rating.label}</h4>
                  <p className="text-slate-600 leading-relaxed">{rating.description}</p>
                </div>
                <div className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-sm italic text-slate-500">
                    <span className="font-bold text-slate-700 not-italic">Example: </span>
                    {rating.example}
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 mt-12 relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-blue-500 rounded-lg">
               <BookOpen className="w-6 h-6 text-white" />
             </div>
             <h4 className="text-2xl font-bold">Why the Rating Scale Matters</h4>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
            The scale acts as a common language that bridges the gap between complex financial data and actionable investment decisions. 
            It enables a more transparent and efficient bond market, allowing issuers to gauge market perception while 
            empowering investors to make informed decisions based on perceived risk and return profiles.
          </p>
        </div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

// Helper for class merging if not available globally in this specific file
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default BondRatings;