"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ShieldAlert, 
  TrendingDown, 
  Scale, 
  TrendingUp, 
  Zap, 
  Briefcase, 
  Globe, 
  Building2, 
  Gem, 
  ArrowRightLeft,
  CheckCircle2
} from 'lucide-react';
import FundTypeCard from './FundTypeCard';

const riskBasedFunds = [
  {
    title: "Very Low-Risk Funds",
    icon: <TrendingDown className="w-5 h-5" />,
    mandate: "Aims to protect capital by investing primarily in short-term debt instruments like Treasury Bills and government securities.",
    riskLevel: "Low" as const,
    pros: ["Highest capital safety", "Steady, predictable returns", "Ideal for emergency funds"],
    cons: ["Lowest returns potential", "Returns barely beat inflation", "Taxed as per slab"]
  },
  {
    title: "Low-Risk Funds",
    icon: <ShieldAlert className="w-5 h-5" />,
    mandate: "Invests in high-quality bonds and money market instruments (e.g., Liquid Funds, Ultra Short Duration Funds).",
    riskLevel: "Low" as const,
    pros: ["High liquidity", "Better returns than savings accounts", "Suitable for short-term goals (up to 1 year)"],
    cons: ["Returns fluctuate daily", "Marginal interest rate risk", "Taxed as per slab"]
  },
  {
    title: "Medium-Risk Funds",
    icon: <Scale className="w-5 h-5" />,
    mandate: "Strikes a balance between risk and return, often including hybrid schemes or short/medium duration debt funds.",
    riskLevel: "Moderate" as const,
    pros: ["Balanced risk-reward profile", "Suitable for medium-term goals (3-5 years)", "Automatic rebalancing (in hybrid types)"],
    cons: ["Moderate volatility", "May underperform pure equity in bull runs", "Taxation can be complex"]
  },
  {
    title: "High-Risk Funds",
    icon: <TrendingUp className="w-5 h-5" />,
    mandate: "Primarily invests in equities (e.g., pure equity funds). Suitable for aggressive investors with a long time horizon.",
    riskLevel: "Very High" as const,
    pros: ["Maximum capital appreciation potential", "Equity taxation benefits", "Outperforms in bull markets"],
    cons: ["Highest volatility", "Significant risk of capital loss", "Requires 7+ year horizon"]
  },
  {
    title: "Specialized Mutual Funds (e.g., ESG)",
    icon: <Zap className="w-5 h-5" />,
    mandate: "Focuses on particular themes or strategies, such as ESG (Environmental, Social, and Governance) or innovation.",
    riskLevel: "High" as const,
    pros: ["Exposure to specific market trends", "Aligns investment with values (ESG)", "High growth potential if theme succeeds"],
    cons: ["Concentration risk (limited universe)", "Performance depends entirely on theme success", "Can be volatile"]
  },
  {
    title: "Sector Funds",
    icon: <Briefcase className="w-5 h-5" />,
    mandate: "Invests at least 80% in companies operating in a specific industry or sector (e.g., Banking, Tech, Pharma).",
    riskLevel: "Very High" as const,
    pros: ["Targeted gains during sector boom", "High returns potential", "Specialized exposure"],
    cons: ["Zero diversification", "Extreme risk during sectoral downturns", "Requires market timing expertise"]
  },
  {
    title: "Emerging Market Funds",
    icon: <Globe className="w-5 h-5" />,
    mandate: "Invests in developing economies with high growth potential (e.g., Brazil, China, India).",
    riskLevel: "Very High" as const,
    pros: ["High growth potential", "Low correlation with developed markets", "Access to high-growth economies"],
    cons: ["Extreme volatility", "Political and currency risks", "High regulatory uncertainty"]
  },
  {
    title: "International Funds",
    icon: <Globe className="w-5 h-5" />,
    mandate: "Invests in companies listed on foreign stock exchanges, providing geographical diversification.",
    riskLevel: "High" as const,
    pros: ["Geographical diversification", "Hedge against domestic market risk", "Exposure to global leaders"],
    cons: ["Currency fluctuation risk", "Taxed as debt fund (in India)", "Higher expense ratio"]
  },
  {
    title: "Real Estate Funds",
    icon: <Building2 className="w-5 h-5" />,
    mandate: "Invests in companies that operate in the real estate sector (developers, property-related industries).",
    riskLevel: "High" as const,
    pros: ["Capitalize on real estate boom", "No physical property management", "Diversification benefit"],
    cons: ["Illiquidity risk (real estate cycles)", "High sensitivity to interest rates", "Sectoral concentration risk"]
  },
  {
    title: "Commodity-focused Stock Funds",
    icon: <Gem className="w-5 h-5" />,
    mandate: "Invests in companies related to commodities like oil, gold, or metals, benefiting from rising commodity prices.",
    riskLevel: "Very High" as const,
    pros: ["Hedge against inflation", "Benefits from global demand spikes", "High returns during commodity supercycles"],
    cons: ["High volatility due to global supply/demand", "Cyclical performance", "Requires specialized knowledge"]
  },
  {
    title: "Market Neutral Funds",
    icon: <ArrowRightLeft className="w-5 h-5" />,
    mandate: "Uses long and short positions to mitigate market risk, aiming for consistent returns regardless of overall market direction.",
    riskLevel: "Low" as const,
    pros: ["Low correlation with market", "Consistent, stable returns", "Protects capital during crashes"],
    cons: ["Returns are generally low", "Complex strategy/high expense ratio", "Risk of failed hedging"]
  },
  {
    title: "Asset Allocation Funds (Balanced Advantage)",
    icon: <Scale className="w-5 h-5" />,
    mandate: "Dynamically adjusts allocations between equities and debt based on market conditions (e.g., P/E ratio) to balance risk and reward.",
    riskLevel: "Moderate" as const,
    pros: ["Automatic risk management", "Reduces risk during market peaks", "Tax efficient rebalancing"],
    cons: ["Manager risk (depends on manager foresight)", "May miss peak market gains", "Complex strategy"]
  }
];

const RiskBasedFunds = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Introduction Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-orange-600 text-white border-none shadow-xl overflow-hidden relative">
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl flex items-center gap-3">
              <ShieldAlert className="w-6 h-6" /> Risk Based & Specialized Funds
            </CardTitle>
            <CardDescription className="text-orange-100">
              These funds are classified either by their inherent risk profile (Low to High) or by their specialized investment mandate (Sector, Global, etc.).
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 flex gap-4 mt-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <CheckCircle2 className="w-4 h-4" /> Profile Matching
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <Zap className="w-4 h-4" /> Specialized Exposure
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
               Specialized funds should only form a small part of your portfolio (satellite allocation). Your core portfolio should be built around Low, Medium, and High-Risk funds that match your overall time horizon and risk tolerance.
             </p>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Risk & Specialized Categories</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riskBasedFunds.map((fund, index) => (
            <FundTypeCard key={index} {...fund} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RiskBasedFunds;