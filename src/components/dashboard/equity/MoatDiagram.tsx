"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowRightLeft, Users, DollarSign, Scale, ShieldCheck } from 'lucide-react';

const moats = [
  {
    title: "Intangible Assets",
    icon: <Zap className="w-6 h-6 text-purple-600" />,
    desc: "Brands, patents, licenses, and regulatory approvals that prevent competitors from replicating the business.",
    color: "bg-purple-50"
  },
  {
    title: "Switching Costs",
    icon: <ArrowRightLeft className="w-6 h-6 text-blue-600" />,
    desc: "The time, effort, or money a customer loses by switching from one product to a competitor's.",
    color: "bg-blue-50"
  },
  {
    title: "Network Effect",
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    desc: "The value of a product or service increases as more people use it (e.g., social media platforms).",
    color: "bg-emerald-50"
  },
  {
    title: "Cost Advantage",
    icon: <DollarSign className="w-6 h-6 text-red-600" />,
    desc: "The ability to produce goods or services at a lower cost than competitors (e.g., superior location, process efficiency).",
    color: "bg-red-50"
  },
  {
    title: "Efficient Scale",
    icon: <Scale className="w-6 h-6 text-amber-600" />,
    desc: "Serving a niche market where limited demand discourages new competitors from entering.",
    color: "bg-amber-50"
  }
];

const MoatDiagram = () => {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h4 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" /> The Five Sources of Economic Moats
        </h4>
        <p className="text-sm text-slate-500">Structural advantages that protect long-term profitability.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moats.map((moat, i) => (
          <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${moat.color} shrink-0`}>
                  {moat.icon}
                </div>
                <CardTitle className="text-lg">{moat.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">{moat.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
        <p className="text-xs text-slate-500 italic">
          These five moats are the core framework used by Morningstar to assess a company's competitive durability.
        </p>
      </div>
    </div>
  );
};

export default MoatDiagram;