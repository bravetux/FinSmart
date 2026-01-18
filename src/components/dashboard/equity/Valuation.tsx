"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, TrendingUp, BookOpen, Layers, Info, ArrowRight, ExternalLink, Image as ImageIcon, Search, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useCurrency } from "@/context/CurrencyContext";

const Valuation = () => {
  const { currency } = useCurrency();

  const beyondValuationImageId = "1ed0_HrYf9WMhTfVa-CJEJK2MrmP_Gtgg";
  const beyondValuationImageUrl = `https://drive.google.com/uc?id=${beyondValuationImageId}&export=download`;
  const beyondValuationViewUrl = `https://drive.google.com/file/d/${beyondValuationImageId}/view?usp=sharing`;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Calculator className="w-4 h-4" />
            <span>Core Definitions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Valuation Fundamentals
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Understanding the layers of a company's worth. From the original start-up value to the volatile swings of the open market.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Definitions Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-orange-200 bg-orange-50/30">
          <CardHeader>
            <CardTitle className="text-lg text-orange-800">Face Value</CardTitle>
            <CardDescription className="text-orange-700/70">The Starting Point</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-600">The nominal value assigned to a share when the company is first incorporated.</p>
            <div className="p-2 bg-white rounded-lg border border-orange-100">
              <p className="text-[10px] font-bold text-orange-800 uppercase">Computation</p>
              <p className="text-xs font-mono">Set at start-up; usually {currency.symbol}1, {currency.symbol}2, {currency.symbol}5, or {currency.symbol}10.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-200 bg-emerald-50/30">
          <CardHeader>
            <CardTitle className="text-lg text-emerald-800">Book Value</CardTitle>
            <CardDescription className="text-emerald-700/70">The Accounting Worth</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-600">Represents the net worth of the company according to its financial statements.</p>
            <div className="p-2 bg-white rounded-lg border border-emerald-100">
              <p className="text-[10px] font-bold text-emerald-800 uppercase">Computation</p>
              <p className="text-xs font-mono">Face Value + Reserves & Surplus (per share)</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800">Market Value</CardTitle>
            <CardDescription className="text-blue-700/70">The Public Price</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-600">The current price at which a share is trading on the stock exchange.</p>
            <div className="p-2 bg-white rounded-lg border border-blue-100">
              <p className="text-[10px] font-bold text-blue-800 uppercase">Computation</p>
              <p className="text-xs font-mono">Current Market Price (determined by buyers/sellers)</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visual Infographic Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">The Valuation Stack</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">Visualizing how components build up to form the total Market Value.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
          
          {/* Brackets and Labels - Left side */}
          <div className="relative hidden md:block h-[450px] w-48">
            {/* Market Value Bracket */}
            <div className="absolute top-0 right-0 h-full w-4 border-y-2 border-l-2 border-red-500 rounded-l-xl">
               <div className="absolute top-1/2 right-full mr-4 -translate-y-1/2 text-right">
                  <p className="text-red-600 font-black text-xl leading-tight">MARKET<br/>VALUE</p>
               </div>
            </div>
            {/* Book Value Bracket */}
            <div className="absolute bottom-0 right-8 h-[280px] w-3 border-y-2 border-l-2 border-blue-400 rounded-l-lg">
               <div className="absolute top-1/2 right-full mr-3 -translate-y-1/2 text-right">
                  <p className="text-blue-500 font-bold text-sm whitespace-nowrap">Book<br/>Value</p>
               </div>
            </div>
          </div>

          {/* The Stacked Bar */}
          <div className="flex flex-col w-64 md:w-80 shadow-2xl rounded-xl overflow-hidden border-4 border-white">
            {/* Top: Growth/Volatility */}
            <div className="h-40 bg-[#2d1b4e] p-4 flex flex-col justify-center border-b-2 border-white/10 group transition-all hover:flex-[1.2]">
               <h4 className="text-white font-bold text-center">Value Built Up with Time</h4>
            </div>
            {/* Middle: Reserves */}
            <div className="h-44 bg-[#6ab04c] p-4 flex flex-col justify-center border-b-2 border-white/20">
               <h4 className="text-white font-bold text-center">Reserves per share</h4>
            </div>
            {/* Bottom: Face Value */}
            <div className="h-28 bg-[#f0932b] p-4 flex flex-col justify-center">
               <h4 className="text-white font-bold text-center">Face Value</h4>
            </div>
          </div>

          {/* Detailed Captions - Right side */}
          <div className="space-y-12 max-w-sm px-6 md:px-0">
             <div className="relative pl-6 border-l-2 border-slate-200">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-300" />
                <h5 className="font-bold text-slate-800">Remains Very Volatile</h5>
                <p className="text-xs text-slate-500 mt-1">In Bull market it grows. In Bear market it shrinks.</p>
             </div>
             <div className="relative pl-6 border-l-2 border-slate-200">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-300" />
                <h5 className="font-bold text-slate-800">Reserves grows with time</h5>
                <p className="text-xs text-slate-500 mt-1">When profit of company is added here, reserves grows.</p>
             </div>
             <div className="relative pl-6 border-l-2 border-slate-200">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-300" />
                <h5 className="font-bold text-slate-800">Remains mostly constant</h5>
                <p className="text-xs text-slate-500 mt-1">Value built during start-up.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Strategic Insight */}
      <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-lg">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
          <Layers className="w-8 h-8" />
        </div>
        <div className="space-y-2 flex-1">
          <h4 className="text-xl font-bold">The Investor's Lens</h4>
          <p className="text-blue-100 text-sm leading-relaxed">
            Successful value investors look for companies where the <strong>Market Value</strong> is close to or even lower than the <strong>Book Value</strong>, provided the company has strong earnings potential. This creates a "Margin of Safety."
          </p>
        </div>
      </div>

      {/* NEW SECTION: Beyond Valuation */}
      <section className="space-y-8 pt-8 border-t">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-slate-900">Beyond Valuation</h3>
            <p className="text-lg text-slate-600 max-w-2xl">
              True investing isn't just about spreadsheets and P/E ratios. It's about looking at the qualitative factors that define a company's future durability.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="gap-2 shrink-0"
            onClick={() => window.open(beyondValuationViewUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4" /> View Original Guide
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="border-slate-200 shadow-md overflow-hidden">
            <CardHeader className="bg-slate-50/50 border-b">
              <CardTitle className="flex items-center gap-2 text-indigo-600">
                <ImageIcon className="w-5 h-5" />
                Qualitative Edge Visual
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-slate-100 rounded-xl p-4 flex justify-center border border-slate-200">
                <img 
                  src={beyondValuationImageUrl} 
                  alt="Beyond Valuation Factors" 
                  className="max-w-full h-auto rounded-lg shadow-sm bg-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const msg = document.createElement('div');
                      msg.className = 'text-center py-8 text-slate-400 text-sm italic';
                      msg.innerText = 'Click "View Original Guide" to see the visual factor breakdown.';
                      parent.appendChild(msg);
                    }
                  }}
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Economic Moat", icon: <ShieldCheck className="text-emerald-500" />, desc: "Is there a barrier protecting the business from competitors? (Brand, network, or cost advantage)." },
                { title: "Management Quality", icon: <Search className="text-blue-500" />, desc: "Are the leaders honest and efficient? Check their historical capital allocation decisions." },
                { title: "Industry Tailwinds", icon: <TrendingUp className="text-purple-500" />, desc: "Is the sector growing? A great company in a dying industry is still a risky bet." }
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-start gap-4">
                  <div className="p-2 bg-slate-50 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
              <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4" /> The Qualitative Filter
              </h4>
              <p className="text-xs text-indigo-800 leading-relaxed">
                Quantitative analysis (Valuation) tells you if the price is right. Qualitative analysis (Beyond Valuation) tells you if the company is right. <strong>Never buy based on only one.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Valuation;