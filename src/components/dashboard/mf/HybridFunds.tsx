"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Shield, 
  Scale, 
  Zap, 
  TrendingUp, 
  Layers, 
  ArrowRightLeft, 
  Briefcase, 
  Coins,
  CheckCircle2
} from 'lucide-react';
import FundTypeCard from './FundTypeCard';

const hybridFunds = [
  {
    title: "Conservative Hybrid Funds",
    icon: <Shield className="w-5 h-5" />,
    mandate: "Invests predominantly in debt instruments (75%-90%), and the remaining in equity (10%-25%). Focus on capital preservation.",
    riskLevel: "Moderate" as const,
    pros: ["High stability", "Low volatility", "Better than pure debt returns"],
    cons: ["Limited growth potential", "Taxed as debt fund", "Interest rate risk"]
  },
  {
    title: "Balanced Hybrid Funds",
    icon: <Scale className="w-5 h-5" />,
    mandate: "Invests between 40% and 60% of total assets in equity and 40% to 60% in debt instruments. No arbitrage is permitted.",
    riskLevel: "Moderate" as const,
    pros: ["Balanced risk-reward", "Suitable for medium-term goals (3-5 years)", "Automatic rebalancing"],
    cons: ["Moderate volatility", "Taxed as equity fund (if equity > 65%)", "May underperform pure equity in bull runs"]
  },
  {
    title: "Aggressive Hybrid Funds",
    icon: <TrendingUp className="w-5 h-5" />,
    mandate: "Invests between 65% and 80% in equity, and 20% to 35% in debt. Focus on growth with a debt cushion.",
    riskLevel: "High" as const,
    pros: ["High growth potential", "Equity taxation benefits", "Debt cushion reduces extreme downside"],
    cons: ["High volatility", "Significant market risk", "Requires long time horizon (5+ years)"]
  },
  {
    title: "Dynamic Asset Allocation Funds (Balanced Advantage)",
    icon: <ArrowRightLeft className="w-5 h-5" />,
    mandate: "Allocation to equity and debt changes dynamically according to market conditions (e.g., P/E ratio).",
    riskLevel: "Moderate" as const,
    pros: ["Market timing managed by fund manager", "Reduces risk during market peaks", "Tax efficient rebalancing"],
    cons: ["Manager risk (depends on manager foresight)", "May miss peak market gains", "Complex strategy"]
  },
  {
    title: "Multi-Asset Allocation Funds",
    icon: <Layers className="w-5 h-5" />,
    mandate: "Invests in at least three different asset classes (e.g., Equity, Debt, Gold), with a minimum allocation of 10% in each.",
    riskLevel: "Moderate" as const,
    pros: ["Excellent diversification across asset classes", "Lower correlation risk", "Stable returns profile"],
    cons: ["Lower overall returns potential", "Higher expense ratio", "Taxation depends on highest allocation"]
  },
  {
    title: "Arbitrage Funds",
    icon: <Zap className="w-5 h-5" />,
    mandate: "Follows an arbitrage strategy (exploiting price differences between cash and futures markets). At least 65% in equity.",
    riskLevel: "Low" as const,
    pros: ["Market neutral (low risk)", "Equity taxation benefits", "High liquidity"],
    cons: ["Returns are low (similar to liquid funds)", "Returns depend on arbitrage opportunities", "Risk of failed arbitrage"]
  },
  {
    title: "Equity Savings Funds",
    icon: <Briefcase className="w-5 h-5" />,
    mandate: "Combines equity (long-term), debt, and arbitrage. At least 65% equity/arbitrage, 10% debt.",
    riskLevel: "Moderate" as const,
    pros: ["Low volatility due to arbitrage/debt", "Equity taxation benefits", "Better returns than pure debt"],
    cons: ["Complex structure", "Lower returns than pure equity", "Arbitrage opportunities can dry up"]
  }
];

const HybridFunds = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Introduction Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-purple-600 text-white border-none shadow-xl overflow-hidden relative">
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Coins className="w-6 h-6" /> Hybrid Funds
            </CardTitle>
            <CardDescription className="text-purple-100">
              Hybrid mutual funds combine equity and debt investments to balance risk and return. They provide diversification within a single portfolio by combining equity’s growth potential with debt’s stability.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 flex gap-4 mt-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <CheckCircle2 className="w-4 h-4" /> Balanced Risk Profile
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <Scale className="w-4 h-4" /> Automatic Rebalancing
             </div>
          </CardContent>
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
        </Card>

        <Card className="border-slate-200 bg-slate-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-800">Key Takeaway</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-xs text-slate-700 leading-relaxed">
               Hybrid funds are excellent for investors who want exposure to equity growth but cannot tolerate the high volatility of pure equity funds. They are often used for medium-term goals (3-7 years).
             </p>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">SEBI Categorization of Hybrid Funds</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hybridFunds.map((fund, index) => (
            <FundTypeCard key={index} {...fund} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HybridFunds;