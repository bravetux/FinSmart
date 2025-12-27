"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShieldCheck, 
  ArrowRightLeft, 
  Percent, 
  Star, 
  PhoneOff, 
  Receipt,
  Info,
  AlertTriangle,
  Zap,
  CheckCircle2
} from 'lucide-react';

const considerationPoints = [
  {
    title: "1. Secured vs Unsecured",
    description: "Check whether the bond is secured or unsecured. Typically, this does not apply to G-Secs but only to corporate bonds. A secured bond is backed by charge on assets of the company. The rates may be slightly lower but they are safer than unsecured bonds.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    badge: "Safety First"
  },
  {
    title: "2. Secondary Market Liquidity",
    description: "Check for secondary market liquidity. Most corporate bonds are either liquid or the traders are limited. In case you don’t intend to hold for the full tenure, you must have adequate exit options on the table.",
    icon: <ArrowRightLeft className="w-6 h-6 text-blue-600" />,
    badge: "Exit Strategy"
  },
  {
    title: "3. Coupon Rate Competitiveness",
    description: "Check out if the coupon rate or the rate of interest is competitive. There will be minor differences, but the coupon cannot be off the market. Remember that bonds with coupons lower than the market tend to trade at a discount.",
    icon: <Percent className="w-6 h-6 text-purple-600" />,
    badge: "Market Alignment"
  },
  {
    title: "4. Credit Rating",
    description: "This is perhaps the most important criteria. Typically, the AAA bonds are the safest bonds with very low chance of default. Many investors deliberately go down the rating curve for higher yields, but that can be a dangerous strategy.",
    icon: <Star className="w-6 h-6 text-amber-600" />,
    badge: "Default Risk"
  },
  {
    title: "5. Callability Clause",
    description: "Most long term bonds have a callability clause. If market rates fall sharply, the issuer might call back and redeem the bonds forcibly. If you are counting on high yields for long-term planning, this is a major risk factor.",
    icon: <PhoneOff className="w-6 h-6 text-red-600" />,
    badge: "Forced Redemption"
  },
  {
    title: "6. Post-Tax Yields",
    description: "Bond interest is fully taxable. However, there are tax-free infrastructure bonds like those issued by REC and PFC where the interest is entirely tax-free. Always calculate the yield after taxes.",
    icon: <Receipt className="w-6 h-6 text-sky-600" />,
    badge: "Tax Efficiency"
  }
];

const ThingsToConsider = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest">
            <Info className="w-4 h-4" /> Investor Checklist
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Things to Consider</h2>
          <p className="text-slate-400 text-lg">
            Before investing in any bonds, here is what you need to quickly consider to protect your capital and maximize returns.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {considerationPoints.map((point, i) => (
          <Card key={i} className="border-slate-200 hover:shadow-md transition-all flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="p-3 bg-slate-50 rounded-2xl shadow-sm border border-slate-100">
                {point.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                {point.badge}
              </span>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardTitle className="text-lg font-bold text-slate-900">{point.title}</CardTitle>
              <p className="text-sm text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Critical Warning */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="p-4 bg-white rounded-xl shadow-sm">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-red-900">The "Yield Trap" Warning</h4>
          <p className="text-sm text-red-800 leading-relaxed">
            Never chase yields blindly. A significantly higher yield than the market average often reflects a much higher risk of default. Stick to rated bonds and diversify your holdings.
          </p>
        </div>
      </div>

      {/* Actionable Footer */}
      <div className="p-8 bg-blue-600 rounded-[2rem] text-center text-white space-y-6">
        <h3 className="text-2xl font-bold">Ready to evaluate a bond?</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Calculate Post-Tax Yield
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Verify Asset Backing
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Confirm Credit Rating
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToConsider;