"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Zap, ArrowRightLeft, Scale, ShieldAlert, Swords, ArrowDown, ArrowUp, ArrowLeft, ArrowRight, UserPlus, ShoppingCart, Truck, Repeat } from 'lucide-react';
import { cn } from "@/lib/utils";

const SectorCompetition = () => {
  const forces = [
    {
      id: "entrants",
      title: "Threat of New Entry",
      icon: <UserPlus className="w-5 h-5" />,
      desc: "How easy is it for new competitors to enter the market?",
      details: ["Setup costs", "Brand loyalty", "Patents", "Government policy"],
      color: "border-orange-200 bg-orange-50 text-orange-900",
      iconColor: "text-orange-600",
      position: "top"
    },
    {
      id: "suppliers",
      title: "Bargaining Power of Suppliers",
      icon: <Truck className="w-5 h-5" />,
      desc: "How much power do suppliers have to raise prices?",
      details: ["Number of suppliers", "Size of suppliers", "Switching costs", "Uniqueness of service"],
      color: "border-blue-200 bg-blue-50 text-blue-900",
      iconColor: "text-blue-600",
      position: "left"
    },
    {
      id: "buyers",
      title: "Bargaining Power of Buyers",
      icon: <ShoppingCart className="w-5 h-5" />,
      desc: "How much power do customers have to drive prices down?",
      details: ["Number of customers", "Order size", "Price sensitivity", "Availability of info"],
      color: "border-emerald-200 bg-emerald-50 text-emerald-900",
      iconColor: "text-emerald-600",
      position: "right"
    },
    {
      id: "substitutes",
      title: "Threat of Substitution",
      icon: <Repeat className="w-5 h-5" />,
      desc: "How likely are customers to switch to alternatives?",
      details: ["Relative price performance", "Switching costs", "Customer inclination"],
      color: "border-purple-200 bg-purple-50 text-purple-900",
      iconColor: "text-purple-600",
      position: "bottom"
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Swords className="w-4 h-4" />
            <span>Competitive Analysis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Five Forces of Competition
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            A framework to analyze the competitive environment of an industry, developed by Michael E. Porter.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">Industry Infographic</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Each force influences the industry's long-term profitability. High pressure in any area can squeeze company margins.
          </p>
        </div>

        {/* Infographic Layout */}
        <div className="relative max-w-4xl mx-auto p-4 md:p-12 min-h-[600px] flex items-center justify-center">
          
          {/* Central Hub - Rivalry */}
          <div className="z-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-900 border-8 border-white shadow-2xl flex flex-col items-center justify-center text-center p-6 text-white group hover:scale-105 transition-transform cursor-default">
            <Swords className="w-8 h-8 md:w-12 md:h-12 text-blue-400 mb-3" />
            <h4 className="text-sm md:text-lg font-black leading-tight">RIVALRY AMONG EXISTING COMPETITORS</h4>
            <div className="mt-2 h-0.5 w-12 bg-blue-500 group-hover:w-24 transition-all" />
          </div>

          {/* Desktop Force Cards (Hidden on mobile) */}
          <div className="hidden md:block">
            {forces.map((force) => (
              <div 
                key={force.id}
                className={cn(
                  "absolute z-10 w-72 p-5 rounded-2xl border-2 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl",
                  force.color,
                  force.position === 'top' && "bottom-full mb-12 left-1/2 -translate-x-1/2",
                  force.position === 'bottom' && "top-full mt-12 left-1/2 -translate-x-1/2",
                  force.position === 'left' && "right-full mr-12 top-1/2 -translate-y-1/2",
                  force.position === 'right' && "left-full ml-12 top-1/2 -translate-y-1/2"
                )}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn("p-1.5 rounded-lg bg-white/50", force.iconColor)}>
                    {force.icon}
                  </div>
                  <h5 className="font-bold text-sm">{force.title}</h5>
                </div>
                <p className="text-[11px] opacity-80 leading-relaxed mb-3">{force.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {force.details.map((d, i) => (
                    <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-black/5 font-medium">
                      {d}
                    </span>
                  ))}
                </div>

                {/* Arrows pointing to center */}
                <div className={cn(
                  "absolute flex items-center justify-center text-slate-300",
                  force.position === 'top' && "top-full left-1/2 -translate-x-1/2 h-12",
                  force.position === 'bottom' && "bottom-full left-1/2 -translate-x-1/2 h-12 rotate-180",
                  force.position === 'left' && "left-full top-1/2 -translate-y-1/2 w-12 -rotate-90",
                  force.position === 'right' && "right-full top-1/2 -translate-y-1/2 w-12 rotate-90"
                )}>
                  <ArrowDown className="w-8 h-8 animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Force Cards (Hidden on desktop) */}
          <div className="md:hidden absolute inset-0 -z-10 bg-slate-50/50 rounded-3xl" />
        </div>

        {/* Mobile-only list view */}
        <div className="grid md:hidden grid-cols-1 gap-4 px-4">
          {forces.map((force) => (
            <Card key={force.id} className={cn("border-l-4", force.color)}>
              <CardHeader className="p-4">
                <div className="flex items-center gap-3">
                  <div className={force.iconColor}>{force.icon}</div>
                  <CardTitle className="text-base">{force.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-xs mb-3">{force.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {force.details.map((d, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-black/5">
                      {d}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Strategic Implication */}
      <div className="bg-blue-50 border border-blue-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg">
          <Zap className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-blue-900">Why should an investor care?</h4>
          <p className="text-sm text-blue-800 leading-relaxed">
            A high threat in any of these areas (like powerful suppliers or low entry barriers) indicates that a company's profits are vulnerable. 
            <strong> Moat Analysis</strong> (next section) helps you identify companies that have built shields against these five forces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectorCompetition;