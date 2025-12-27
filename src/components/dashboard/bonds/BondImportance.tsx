"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShieldAlert, 
  Tag, 
  Target, 
  Droplets, 
  Scale, 
  Activity, 
  Zap, 
  Info,
  Building2,
  Globe,
  PieChart
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const importancePoints = [
  {
    title: "1. Risk Assessment",
    description: "Provides a standardized framework for assessing risk. A 'AAA' rating signifies the highest safety, while a 'D' rating indicates the issuer is in default.",
    icon: <ShieldAlert className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-50",
    border: "border-emerald-100"
  },
  {
    title: "2. Pricing of Bonds",
    description: "Ratings heavily influence yield. Lower-rated bonds (e.g., BBB @ 5%) must offer higher yields to compensate for risk compared to higher-rated ones (e.g., AA @ 3%).",
    icon: <Tag className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    title: "3. Investment Decisions",
    description: "Conservative investors (like pension funds with 'A' minimum mandates) seek high ratings, while risk-tolerant ones chase higher returns in lower grades.",
    icon: <Target className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50",
    border: "border-purple-100"
  },
  {
    title: "4. Market Liquidity",
    description: "Higher-rated bonds are more liquid and easier to sell, which is critical during market stress when investors need to liquidate assets quickly.",
    icon: <Droplets className="w-6 h-6 text-sky-600" />,
    color: "bg-sky-50",
    border: "border-sky-100"
  },
  {
    title: "5. Regulatory Impact",
    description: "Ratings determine capital requirements. Banks must hold varying amounts of capital against bonds based on their specific credit rating.",
    icon: <Scale className="w-6 h-6 text-slate-600" />,
    color: "bg-slate-50",
    border: "border-slate-100"
  },
  {
    title: "6. Economic Indicators",
    description: "The distribution of ratings serves as a macro indicator. High ratings suggest stability, while surges in downgrades can signal economic distress.",
    icon: <Activity className="w-6 h-6 text-orange-600" />,
    color: "bg-orange-50",
    border: "border-orange-100"
  },
  {
    title: "7. Issuer Behavior",
    description: "Issuers maintain fiscal discipline to avoid downgrades and higher borrowing costs, essentially forcing better financial management.",
    icon: <Zap className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50",
    border: "border-amber-100"
  }
];

const BondImportance = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Intro Hero Card */}
      <Card className="bg-slate-900 text-white border-none shadow-xl overflow-hidden relative">
        <CardContent className="p-8 md:p-12 relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <Badge variant="outline" className="text-blue-400 border-blue-400">The Global Standard</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Why Credit Ratings are the Pulse of the Bond Market
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Provided by agencies like <span className="text-white font-semibold">CRISIL, Moody's, and S&P</span>, ratings are more than symbols. 
              They are the distilled essence of an issuer's creditworthiness, influencing everything from interest rates to capital flow.
            </p>
          </div>
        </CardContent>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 -mr-24 -mt-24 rounded-full blur-3xl" />
      </Card>

      {/* Grid of Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {importancePoints.map((point, i) => (
          <Card key={i} className={cn("border-none shadow-sm hover:shadow-md transition-all", point.color, point.border)}>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-2">
                {point.icon}
              </div>
              <CardTitle className="text-lg">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
            </CardContent>
          </Card>
        ))}

        {/* Closing Thought Card */}
        <Card className="lg:col-span-2 border-dashed border-2 border-slate-200 bg-white flex items-center">
          <CardContent className="p-8 flex gap-6 items-center">
            <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shrink-0">
              <PieChart className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900">The Bottom Line</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Ratings guide the flow of capital and shape the economic landscape. 
                Whether you're a conservative pensioner or an aggressive trader, 
                understanding these nuances is essential for navigating the bond market.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default BondImportance;