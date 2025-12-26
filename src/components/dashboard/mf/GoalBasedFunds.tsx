"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Target, 
  ReceiptText, 
  DollarSign, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Gem,
  CheckCircle2
} from 'lucide-react';
import FundTypeCard from './FundTypeCard';

const goalBasedFunds = [
  {
    title: "ELSS (Tax Saving) Funds",
    icon: <ReceiptText className="w-5 h-5" />,
    mandate: "Invests in equities and comes with tax benefits under Section 80C (up to ₹1.5 lakh). Requires a 3-year lock-in period.",
    riskLevel: "High" as const,
    pros: ["Tax saving benefit (80C)", "High growth potential", "Shortest lock-in among 80C options"],
    cons: ["3-year lock-in period", "Subject to equity market volatility", "Returns are not guaranteed"]
  },
  {
    title: "Liquid Funds",
    icon: <DollarSign className="w-5 h-5" />,
    mandate: "Invests in short-term debt instruments (maturity up to 91 days). Used for emergency funds and short-term parking.",
    riskLevel: "Low" as const,
    pros: ["Highest liquidity (T+1 settlement)", "Better returns than savings A/C", "Low risk for short duration"],
    cons: ["Lowest returns among debt funds", "Returns fluctuate daily", "Taxed as per slab"]
  },
  {
    title: "Capital Protection Funds",
    icon: <ShieldCheck className="w-5 h-5" />,
    mandate: "Invests mostly in debt (to protect principal) and partially in equity (for growth). Close-ended structure.",
    riskLevel: "Moderate" as const,
    pros: ["Principal protection focus", "Low volatility", "Modest capital appreciation"],
    cons: ["Returns are capped", "Complex structure", "No liquidity (close-ended)"]
  },
  {
    title: "Fixed Maturity Funds (FMF)",
    icon: <ReceiptText className="w-5 h-5" />,
    mandate: "Close-ended debt funds that invest in debt securities matching the scheme’s defined tenure (e.g., 3 years).",
    riskLevel: "Low" as const,
    pros: ["Defined maturity date", "Predictable returns", "Low risk if held till maturity"],
    cons: ["No liquidity (close-ended)", "Returns depend on interest rates at launch", "Taxed as debt"]
  },
  {
    title: "Income Funds",
    icon: <DollarSign className="w-5 h-5" />,
    mandate: "Debt funds that primarily invest in high-rated debt securities (corporate bonds, G-Secs) focusing on regular income.",
    riskLevel: "Moderate" as const,
    pros: ["Regular income stream", "Capital preservation focus", "Suitable for risk-averse investors"],
    cons: ["Interest rate risk (duration risk)", "Lower growth than equity", "Requires medium-term horizon"]
  },
  {
    title: "Growth Funds",
    icon: <TrendingUp className="w-5 h-5" />,
    mandate: "Pure equity funds focusing on companies with high growth potential. Objective is maximum capital appreciation over the long term.",
    riskLevel: "Very High" as const,
    pros: ["Maximum capital appreciation", "High returns potential over long term", "Equity taxation benefits"],
    cons: ["Highest volatility", "Significant risk of capital loss", "Requires 7+ year horizon"]
  },
  {
    title: "Funds of Funds (FoF)",
    icon: <Layers className="w-5 h-5" />,
    mandate: "Invests in units of other mutual fund schemes (domestic or international) instead of direct assets.",
    riskLevel: "Moderate" as const,
    pros: ["Diversification across multiple funds", "Simplified portfolio management", "Access to specialized funds"],
    cons: ["Higher expense ratio (double layer of fees)", "Complex taxation (often taxed as debt)", "Performance depends on underlying funds"]
  },
  {
    title: "Gold Funds",
    icon: <Gem className="w-5 h-5" />,
    mandate: "Invests in Gold ETFs and tracks the market price of physical gold. Used as a hedge against inflation.",
    riskLevel: "Moderate" as const,
    pros: ["Hedge against inflation/market crash", "No physical storage risk", "High liquidity"],
    cons: ["No capital growth (only tracks gold price)", "Returns can be flat for long periods", "Taxed as non-equity asset"]
  }
];

const GoalBasedFunds = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Introduction Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-blue-600 text-white border-none shadow-xl overflow-hidden relative">
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="w-6 h-6" /> Goal Based Funds
            </CardTitle>
            <CardDescription className="text-blue-100">
              These categories help investors choose funds for specific financial milestones like tax saving, retirement, or child education.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 flex gap-4 mt-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <CheckCircle2 className="w-4 h-4" /> Milestone Alignment
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <ShieldCheck className="w-4 h-4" /> Risk Matching
             </div>
          </CardContent>
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
        </Card>

        <Card className="border-emerald-100 bg-emerald-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-emerald-800">Key Takeaway</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-xs text-emerald-700 leading-relaxed">
               The time horizon of your goal dictates the fund type. Short-term goals (1-3 years) require low-risk debt funds (like Liquid Funds), while long-term goals (7+ years) benefit from high-risk equity funds (like Growth Funds/ELSS).
             </p>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Goal-Oriented Fund Categories</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goalBasedFunds.map((fund, index) => (
            <FundTypeCard key={index} {...fund} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GoalBasedFunds;