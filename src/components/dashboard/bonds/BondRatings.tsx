"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShieldCheck, 
  ShieldAlert, 
  AlertTriangle, 
  Zap, 
  BookOpen,
  Info
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ratingTypes = [
  {
    grade: "AAA",
    label: "Highest Safety",
    description: "Bonds with this rating scale are considered to have the highest degree of safety and carry the lowest credit risk regarding timely servicing of financial obligations.",
    example: "Government bonds or top-tier blue-chip corporate entities.",
    color: "bg-emerald-100 text-emerald-700",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
  },
  {
    grade: "AA",
    label: "High Safety",
    description: "Bonds with this rating scale are considered to have a high degree of safety and carry very low credit risk.",
    example: "Strong established companies with very stable financials.",
    color: "bg-blue-100 text-blue-700",
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  },
  {
    grade: "A",
    label: "Adequate Safety",
    description: "Bonds with this rating are considered to have an adequate degree of safety and carry low credit risk. They are more susceptible to changing economic conditions.",
    example: "Reputable companies with good growth but some exposure to market cycles.",
    color: "bg-sky-100 text-sky-700",
    icon: <ShieldCheck className="w-6 h-6 text-sky-600" />
  },
  {
    grade: "BBB",
    label: "Moderate Safety",
    description: "Bonds with this rating are considered to have moderate degree of safety and carry moderate credit risk.",
    example: "Medium-grade companies that are generally stable but carry speculative elements.",
    color: "bg-amber-100 text-amber-700",
    icon: <ShieldAlert className="w-6 h-6 text-amber-600" />
  },
  {
    grade: "BB",
    label: "Moderate Risk of Default",
    description: "Bonds with this rating are considered to have moderate risk of default regarding timely servicing of financial obligations.",
    example: "Companies in volatile industries or with rising debt levels.",
    color: "bg-orange-100 text-orange-700",
    icon: <AlertTriangle className="w-6 h-6 text-orange-600" />
  },
  {
    grade: "B",
    label: "High Risk of Default",
    description: "Bonds with this rating are considered to have a high risk of default. Interest and principal payments are currently being met but are sensitive to adverse conditions.",
    example: "Companies with weak financial health or highly leveraged balance sheets.",
    color: "bg-red-50 text-red-600",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />
  },
  {
    grade: "C",
    label: "Very High Risk of Default",
    description: "Bonds with this rating are considered to have a very high risk of default. The issuer is highly vulnerable to non-payment.",
    example: "Entities in significant financial distress or restructuring.",
    color: "bg-red-100 text-red-700",
    icon: <AlertTriangle className="w-6 h-6 text-red-700" />
  },
  {
    grade: "D",
    label: "Default / Imminent Default",
    description: "Bonds with this rating are in default or are expected to default very soon.",
    example: "The issuer has already failed to pay interest or principal on time.",
    color: "bg-slate-900 text-white",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />
  }
];

const BondRatings = () => {
  return (
    <section className="space-y-12 py-12 border-t">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h3 className="text-3xl font-bold text-slate-900">CRISIL Credit Rating Scale</h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          Credit rating is a financial indicator representing the creditworthiness and quality of a bond. 
          Understanding these scales is critical for assessing default risk.
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
                {rating.example && (
                  <div className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-xs italic text-slate-500">
                      <span className="font-bold text-slate-700 not-italic">Typically: </span>
                      {rating.example}
                    </p>
                  </div>
                )}
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
             <h4 className="text-2xl font-bold">The Standard Language of Risk</h4>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
            Ratings like <span className="text-white font-bold">AAA</span> and <span className="text-white font-bold">AA</span> indicate the highest degrees of safety. 
            As you move down the scale toward <span className="text-white font-bold">C</span> and <span className="text-white font-bold">D</span>, the probability of default increases significantly. 
            Conservative investors should ideally stick to 'A' and above.
          </p>
        </div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

// Helper for class merging
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default BondRatings;