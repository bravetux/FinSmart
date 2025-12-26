"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Info } from 'lucide-react';

interface FundTypeCardProps {
  title: string;
  icon: React.ReactNode;
  mandate: string;
  pros: string[];
  cons: string[];
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
}

const FundTypeCard = ({ title, icon, mandate, pros, cons, riskLevel }: FundTypeCardProps) => {
  const riskColor = {
    'Low': 'bg-emerald-100 text-emerald-700',
    'Moderate': 'bg-blue-100 text-blue-700',
    'High': 'bg-orange-100 text-orange-700',
    'Very High': 'bg-red-100 text-red-700'
  }[riskLevel];

  return (
    <Card className="h-full border-slate-200 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <div className="p-2 bg-slate-50 rounded-lg text-primary">
            {icon}
          </div>
          <Badge variant="secondary" className={riskColor}>
            {riskLevel} Risk
          </Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-slate-50 rounded-lg flex gap-3 items-start">
          <Info className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
          <p className="text-xs text-slate-600 italic leading-relaxed">
            <span className="font-semibold text-slate-900 not-italic">Mandate:</span> {mandate}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Pros</h5>
            <ul className="space-y-1.5">
              {pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-red-600">Cons</h5>
            <ul className="space-y-1.5">
              {cons.map((con, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                  <XCircle className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FundTypeCard;