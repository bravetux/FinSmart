"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LayoutGrid, Lock, Unlock, Clock, CheckCircle2 } from 'lucide-react';
import FundTypeCard from './FundTypeCard';

const structureFunds = [
  {
    title: "Open-ended Mutual Funds",
    icon: <Unlock className="w-5 h-5" />,
    mandate: "You can invest or redeem your units anytime at the prevailing NAV. These funds have no maturity date and offer high liquidity.",
    riskLevel: "Moderate" as const,
    pros: ["High liquidity (buy/sell anytime)", "Flexibility for investors", "No fixed maturity date"],
    cons: ["Requires constant monitoring", "NAV fluctuates daily", "Subject to market timing risk"]
  },
  {
    title: "Close-ended Mutual Funds",
    icon: <Lock className="w-5 h-5" />,
    mandate: "Have a fixed maturity period and can be purchased only during the NFO (New Fund Offer). Investment is redeemable only after the set period.",
    riskLevel: "High" as const,
    pros: ["Disciplined investing (forced lock-in)", "Fund manager has stable corpus", "May be listed on exchanges for early exit"],
    cons: ["No liquidity during tenure", "Cannot invest after NFO closes", "Returns depend heavily on NFO timing"]
  },
  {
    title: "Interval Mutual Funds",
    icon: <Clock className="w-5 h-5" />,
    mandate: "Allow investing or redeeming only during specific, pre-defined intervals. They combine features of open- and closed-ended funds.",
    riskLevel: "Moderate" as const,
    pros: ["Structured liquidity", "Better management of cash flows for fund manager", "Lower volatility than pure open-ended"],
    cons: ["Limited exit windows", "Not suitable for emergency funds", "Complex structure"]
  },
];

const StructureBasedFunds = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Introduction Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-slate-900 text-white border-none shadow-xl overflow-hidden relative">
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl flex items-center gap-3">
              <LayoutGrid className="w-6 h-6" /> Structure Based Funds
            </CardTitle>
            <CardDescription className="text-slate-300">
              Mutual funds are structured based on when investors can buy or sell units, impacting liquidity and the fund manager's strategy.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 flex gap-4 mt-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <CheckCircle2 className="w-4 h-4" /> Liquidity Management
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <Lock className="w-4 h-4" /> Exit Flexibility
             </div>
          </CardContent>
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
        </Card>

        <Card className="border-blue-100 bg-blue-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-blue-800">Key Takeaway</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-xs text-blue-700 leading-relaxed">
               The structure determines your access to capital. Open-ended funds are best for flexibility, while close-ended funds enforce discipline but restrict liquidity.
             </p>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Fund Structures</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {structureFunds.map((fund, index) => (
            <FundTypeCard key={index} {...fund} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default StructureBasedFunds;