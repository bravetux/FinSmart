"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, TrendingDown, RefreshCw, Layers } from 'lucide-react';

const risks = [
  {
    title: "Credit / Default Risk",
    description: "The risk that the company might not be able to pay back the interest or the principal amount on time.",
    icon: <AlertCircle className="text-red-500" />
  },
  {
    title: "Interest Rate Risk",
    description: "Bond prices fall when market interest rates rise. If you sell before maturity, you might get back less than you invested.",
    icon: <TrendingDown className="text-orange-500" />
  },
  {
    title: "Liquidity Risk",
    description: "Bonds are harder to sell than stocks. You might not find a buyer immediately if you need your money back urgently.",
    icon: <RefreshCw className="text-blue-500" />
  },
  {
    title: "Reinvestment Risk",
    description: "The risk that you won't be able to reinvest your interest payments at the same high rate when they are paid out.",
    icon: <Layers className="text-purple-500" />
  }
];

const BondRisks = () => {
  return (
    <section className="space-y-8 py-12 border-t">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold text-slate-900">Risks to Watch Out For</h3>
        <p className="text-slate-500">No investment is 100% safe. Here's what can go wrong with bonds.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {risks.map((risk, i) => (
          <Card key={i} className="border-slate-100 flex items-start p-6 gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
              {React.cloneElement(risk.icon as React.ReactElement, { className: "w-6 h-6" })}
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900">{risk.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{risk.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BondRisks;