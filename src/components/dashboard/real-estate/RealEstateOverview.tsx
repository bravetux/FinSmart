"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TrendingUp, ShieldCheck } from 'lucide-react';

const RealEstateOverview = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-emerald-600 text-white p-8 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Building2 className="w-12 h-12 text-emerald-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Real Estate Investing</h2>
          <p className="text-lg text-emerald-100 max-w-2xl">
            A tangible asset class that offers rental income potential and long-term capital appreciation.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-emerald-100 bg-emerald-50/30">
          <CardHeader>
            <TrendingUp className="w-8 h-8 text-emerald-600 mb-2" />
            <CardTitle className="text-lg">Capital Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Property values historically appreciate over the long term, building significant equity.</p>
          </CardContent>
        </Card>
        <Card className="border-blue-100 bg-blue-50/30">
          <CardHeader>
            <Building2 className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle className="text-lg">Passive Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Rental yields provide a steady stream of monthly cash flow to investors.</p>
          </CardContent>
        </Card>
        <Card className="border-amber-100 bg-amber-50/30">
          <CardHeader>
            <ShieldCheck className="w-8 h-8 text-amber-600 mb-2" />
            <CardTitle className="text-lg">Tangible Asset</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">Unlike stocks, real estate is a physical asset with inherent utility and value.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RealEstateOverview;