"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Zap, ArrowRightLeft, Scale, ShieldAlert, Swords } from 'lucide-react';

const SectorCompetition = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Swords className="w-4 h-4" />
            <span>Market Dynamics</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Sector Competition Analysis
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Understanding the forces that shape competition within an industry is key to identifying companies with sustainable profit potential.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            The Five Forces of Competition
          </CardTitle>
          <CardDescription>
            This model helps analyze the attractiveness and profitability of a sector based on five key competitive forces.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex justify-center mb-8">
            <div className="max-w-3xl w-full">
              {/* Assuming the image is placed in the public folder */}
              <img 
                src="/sector-competition.jpeg" 
                alt="Sector Competition Diagram - Porter's Five Forces" 
                className="w-full h-auto rounded-xl shadow-md border border-slate-100"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">1</span>
                New Entry
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                The threat of new competitors entering the market. High barriers (like high setup costs or patents) protect existing players.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">2</span>
                Strong Suppliers
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                The bargaining power of suppliers. If suppliers are few or powerful, they can raise prices and squeeze company margins.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">3</span>
                Strong Buyers
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                The bargaining power of customers. If buyers have many choices, they can demand lower prices and better quality.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">4</span>
                Threat of Substitution
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                The risk of customers switching to alternative products or services (e.g., streaming services replacing cable TV).
              </p>
            </div>

            <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 space-y-2 lg:col-span-2">
              <h4 className="font-bold text-blue-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">5</span>
                Competition within Companies
              </h4>
              <p className="text-xs text-blue-700 leading-relaxed">
                The intensity of rivalry among existing competitors. High rivalry often leads to price wars and higher marketing expenses.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectorCompetition;