"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Layers, 
  Building2, 
  Scale, 
  TrendingUp, 
  Rocket, 
  Coins, 
  SearchCode, 
  MoveLeft, 
  Target, 
  Briefcase, 
  ReceiptText,
  ShieldCheck,
  Zap
} from 'lucide-react';
import FundTypeCard from './FundTypeCard';

const equityFunds = [
  {
    title: "Multi-Cap Funds",
    icon: <Layers className="w-5 h-5" />,
    mandate: "Invest at least 65% in equity across Large, Mid, and Small Cap stocks.",
    riskLevel: "High" as const,
    pros: ["All-market exposure", "Dynamic rebalancing", "Diversified risk"],
    cons: ["Higher volatility", "Manager dependent", "Mandatory small-cap exposure"]
  },
  {
    title: "Large Cap Funds",
    icon: <Building2 className="w-5 h-5" />,
    mandate: "Invest at least 80% in top 100 companies by market cap.",
    riskLevel: "Moderate" as const,
    pros: ["Stable returns", "High liquidity", "Relatively lower risk"],
    cons: ["Lower growth potential", "Hard to beat benchmark", "Lower alpha"]
  },
  {
    title: "Large & Mid Cap Funds",
    icon: <Scale className="w-5 h-5" />,
    mandate: "At least 35% in Large Cap and 35% in Mid Cap stocks.",
    riskLevel: "High" as const,
    pros: ["Balance of stability & growth", "Optimal diversification", "Better risk-reward"],
    cons: ["Moderate volatility", "Mid-cap drag in bear markets", "Complex selection"]
  },
  {
    title: "Mid Cap Funds",
    icon: <TrendingUp className="w-5 h-5" />,
    mandate: "At least 65% in Mid Cap stocks (ranked 101st – 250th).",
    riskLevel: "Very High" as const,
    pros: ["Higher growth potential", "Future blue-chips", "Outperforms in bull runs"],
    cons: ["Significant volatility", "Liquidity risks", "Long gestation period"]
  },
  {
    title: "Small Cap Funds",
    icon: <Rocket className="w-5 h-5" />,
    mandate: "At least 65% in Small Cap stocks (ranked 251th onwards).",
    riskLevel: "Very High" as const,
    pros: ["Multibagger potential", "High alpha creation", "Low stock overlap"],
    cons: ["Extremely high risk", "High drawdowns", "Highly illiquid stocks"]
  },
  {
    title: "Dividend Yield Funds",
    icon: <Coins className="w-5 h-5" />,
    mandate: "At least 65% in dividend-yielding stocks.",
    riskLevel: "Moderate" as const,
    pros: ["Passive income", "Lower downside", "Better during volatility"],
    cons: ["Slow growth", "Sector concentration", "Tax inefficiency (dividends)"]
  },
  {
    title: "Value Funds",
    icon: <SearchCode className="w-5 h-5" />,
    mandate: "Follows a value strategy; at least 65% in undervalued stocks.",
    riskLevel: "High" as const,
    pros: ["Margin of safety", "Long-term wealth", "Contrarian upside"],
    cons: ["Value traps", "Long waiting periods", "Underperforms in momentum"]
  },
  {
    title: "Contra Funds",
    icon: <MoveLeft className="w-5 h-5" />,
    mandate: "Invests 65% in stocks currently out of favor with the market.",
    riskLevel: "High" as const,
    pros: ["Buying low", "Unique portfolio", "High recovery gains"],
    cons: ["Patience required", "Wrong timing risk", "High psychological stress"]
  },
  {
    title: "Focused Funds",
    icon: <Target className="w-5 h-5" />,
    mandate: "Max 30 stocks; at least 65% in equity.",
    riskLevel: "Very High" as const,
    pros: ["High conviction bets", "Superior returns", "No fluff in portfolio"],
    cons: ["Concentration risk", "High impact of single failure", "Extreme volatility"]
  },
  {
    title: "Sectoral / Thematic",
    icon: <Briefcase className="w-5 h-5" />,
    mandate: "At least 80% in a particular sector or theme.",
    riskLevel: "Very High" as const,
    pros: ["Targeted gains", "Cyclical play", "Specialized exposure"],
    cons: ["Zero diversification", "Sectoral downturn risk", "Requires timing"]
  },
  {
    title: "ELSS Funds",
    icon: <ReceiptText className="w-5 h-5" />,
    mandate: "At least 80% in equity. 3-year lock-in period.",
    riskLevel: "High" as const,
    pros: ["Tax savings (80C)", "Wealth + Tax benefit", "Shortest lock-in"],
    cons: ["No exit for 3 years", "Equity market risk", "Limited liquidity"]
  }
];

const TypesOfMF = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-blue-600 text-white border-none shadow-xl overflow-hidden relative">
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl">The Equity Landscape</CardTitle>
            <CardDescription className="text-blue-100">
              Equity Mutual Funds are categorized by SEBI based on where they invest. Choosing the right category is more important than choosing the right fund.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 flex gap-4 mt-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <ShieldCheck className="w-4 h-4" /> Goal-Based Selection
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <Zap className="w-4 h-4" /> Risk Assessment
             </div>
          </CardContent>
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
        </Card>

        <Card className="border-orange-100 bg-orange-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-orange-800">Key Takeaway</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-xs text-orange-700 leading-relaxed">
               Always align fund categories with your time horizon. <strong>Small/Mid caps</strong> need 7+ years, while <strong>Large caps</strong> can be considered for 2+ year horizons.
             </p>
          </CardContent>
        </Card>
      </div>

      {/* Fund Type Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900">Equity Categories</h3>
          <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">11 Categories</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equityFunds.map((fund, index) => (
            <FundTypeCard key={index} {...fund} />
          ))}
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-center text-white space-y-4">
        <h4 className="text-xl font-bold">Which one is for you?</h4>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
          The best strategy often involves a mix. A core portfolio of <strong>Large Caps</strong> for stability, and a satellite portfolio of <strong>Mid/Small Caps</strong> for aggressive growth.
        </p>
      </div>
    </div>
  );
};

export default TypesOfMF;