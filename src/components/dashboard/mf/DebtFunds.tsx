"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DollarSign, ShieldCheck, Clock, TrendingDown, ArrowRightLeft, Scale, Zap, ReceiptText, Building2 } from 'lucide-react';
import FundTypeCard from './FundTypeCard';

const debtCategories = [
  {
    title: 'Overnight Fund',
    icon: <Clock className="w-5 h-5" />,
    mandate: 'Invests in overnight securities having a maturity of 1 day.',
    riskLevel: 'Low' as const,
    pros: ['Highest liquidity', 'Safest debt option', 'No interest rate risk'],
    cons: ['Lowest returns', 'Only for 1-day parking', 'Taxed as per slab']
  },
  {
    title: 'Liquid Fund',
    icon: <DollarSign className="w-5 h-5" />,
    mandate: 'Invests in Debt and money market securities with a maturity of up to 91 days only.',
    riskLevel: 'Low' as const,
    pros: ['High liquidity (T+1 settlement)', 'Better returns than savings account', 'No exit load'],
    cons: ['Returns fluctuate daily', 'Marginal interest rate risk', 'Taxed as per slab']
  },
  {
    title: 'Ultra Short Duration Fund',
    icon: <Clock className="w-5 h-5" />,
    mandate: 'Invests in debt and money market instruments with Macaulay duration between 3 months and 6 months.',
    riskLevel: 'Low' as const,
    pros: ['Higher returns than Liquid funds', 'Suitable for 3-6 month goals'],
    cons: ['Slight interest rate risk', 'Credit risk exposure', 'May have exit load']
  },
  {
    title: 'Low Duration Fund',
    icon: <Clock className="w-5 h-5" />,
    mandate: 'Invests in instruments with Macaulay duration between 6 months and 12 months.',
    riskLevel: 'Moderate' as const,
    pros: ['Good balance of risk and return', 'Suitable for 6-12 month goals'],
    cons: ['Moderate interest rate risk', 'Higher credit risk', 'More volatile than liquid funds']
  },
  {
    title: 'Money Market Fund',
    icon: <DollarSign className="w-5 h-5" />,
    mandate: 'Invests in Money Market instruments with maturity up to 1 year.',
    riskLevel: 'Low' as const,
    pros: ['Invests in high-quality instruments', 'Good for short-term parking (up to 1 year)'],
    cons: ['Interest rate sensitivity', 'Limited capital appreciation']
  },
  {
    title: 'Short Duration Fund',
    icon: <Clock className="w-5 h-5" />,
    mandate: 'Invests in instruments with Macaulay duration between 1 year and 3 years.',
    riskLevel: 'Moderate' as const,
    pros: ['Better returns than shorter duration funds', 'Suitable for 1-3 year goals'],
    cons: ['Higher interest rate risk', 'Moderate credit risk', 'More volatile']
  },
  {
    title: 'Medium Duration Fund',
    icon: <Clock className="w-5 h-5" />,
    mandate: 'Invests in debt and money market instruments with a Macaulay duration of between 3 and 4 years.',
    riskLevel: 'Moderate' as const,
    pros: ['Higher potential returns', 'Benefits from falling interest rates'],
    cons: ['Significant interest rate risk', 'Higher volatility', 'Longer lock-in needed']
  },
  {
    title: 'Medium to Long Duration Fund',
    icon: <Clock className="w-5 h-5" />,
    mandate: 'Invests in Debt & Money Market instruments with Macaulay duration between 4- 7 years.',
    riskLevel: 'High' as const,
    pros: ['High returns potential', 'Maximum benefit from rate cuts'],
    cons: ['Very high interest rate risk', 'High volatility', 'Requires long time horizon']
  },
  {
    title: 'Long Duration Fund',
    icon: <Clock className="w-5 h-5" />,
    mandate: 'Invests in Debt & Money Market instruments with Macaulay duration of more than 7 years.',
    riskLevel: 'Very High' as const,
    pros: ['Highest potential returns in debt', 'Best for long-term rate cycle bets'],
    cons: ['Extreme interest rate risk', 'Highest volatility among debt funds']
  },
  {
    title: 'Dynamic Bond Funds',
    icon: <ArrowRightLeft className="w-5 h-5" />,
    mandate: 'Fund manager actively manages duration based on interest rate outlook.',
    riskLevel: 'Moderate' as const,
    pros: ['Can adapt to rate cycles', 'Potential to outperform fixed duration funds'],
    cons: ['Manager risk (depends on manager foresight)', 'High expense ratio', 'Unpredictable duration']
  },
  {
    title: 'Corporate Bond Fund',
    icon: <Building2 className="w-5 h-5" />,
    mandate: 'Invests predominantly (80% of total portfolio) in high-rated corporate bonds.',
    riskLevel: 'Moderate' as const,
    pros: ['High credit quality (AAA/AA+)', 'Stable returns', 'Better yield than Gilt funds'],
    cons: ['Lower yield than credit risk funds', 'Concentration risk in corporate sector']
  },
  {
    title: 'Credit Risk Fund',
    icon: <TrendingDown className="w-5 h-5" />,
    mandate: 'Invests at least 65% of its portfolio in below highest-rated instruments.',
    riskLevel: 'High' as const,
    pros: ['Higher yields/returns', 'Exploits mispriced credit risk'],
    cons: ['High risk of default (credit events)', 'High volatility', 'Requires careful research']
  },
  {
    title: 'Banking and PSU Fund',
    icon: <ShieldCheck className="w-5 h-5" />,
    mandate: 'Invests predominantly (80% of total assets) in Debt instruments of banks, Public Sector Undertakings, and Public Financial Institutions.',
    riskLevel: 'Low' as const,
    pros: ['High safety (backed by government/banks)', 'Good liquidity', 'Low credit risk'],
    cons: ['Returns capped by government/bank rates', 'Limited diversification']
  },
  {
    title: 'Gilt Fund',
    icon: <ReceiptText className="w-5 h-5" />,
    mandate: 'Invests at least 80% of its assets in government securities (G-Secs).',
    riskLevel: 'High' as const,
    pros: ['Zero credit risk (Sovereign guarantee)', 'High sensitivity to interest rate changes (upside)'],
    cons: ['Extreme interest rate risk', 'High volatility', 'Not suitable for short term']
  },
  {
    title: 'Gilt Fund with 10-year constant duration',
    icon: <ReceiptText className="w-5 h-5" />,
    mandate: 'Invests at least 80% of its assets in government securities with a maturity of 10 years.',
    riskLevel: 'Very High' as const,
    pros: ['Pure play on long-term interest rate movements', 'Zero credit risk'],
    cons: ['Highest interest rate risk', 'Very high volatility', 'Only for experts']
  },
  {
    title: 'Floater Fund',
    icon: <Zap className="w-5 h-5" />,
    mandate: 'Invests at least 65% of its assets in floating rate instruments.',
    riskLevel: 'Moderate' as const,
    pros: ['Protects capital when interest rates rise', 'Low volatility', 'Low duration risk'],
    cons: ['Lower returns when rates are stable or falling', 'Complex structure']
  },
];

const DebtFunds = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Introduction Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-emerald-600 text-white border-none shadow-xl overflow-hidden relative">
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl flex items-center gap-3">
              <DollarSign className="w-6 h-6" /> Debt Funds
            </CardTitle>
            <CardDescription className="text-emerald-100">
              Debt funds invest in fixed-income instruments like government securities, corporate bonds, and money market instruments. They offer predictable returns but react to interest rate changes.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 flex gap-4 mt-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <ShieldCheck className="w-4 h-4" /> Capital Preservation
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <Clock className="w-4 h-4" /> Short to Medium Term Goals
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
               Debt funds are generally less volatile than equity funds and are suitable for investors with a low-risk appetite or short-term financial goals (up to 3 years).
             </p>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">SEBI Categorization of Debt Funds</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {debtCategories.map((fund, index) => (
            <FundTypeCard key={index} {...fund} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DebtFunds;