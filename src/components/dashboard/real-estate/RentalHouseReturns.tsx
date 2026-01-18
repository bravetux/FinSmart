"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, DollarSign, TrendingUp, Scale } from 'lucide-react';

const RentalHouseReturns = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Scale className="w-12 h-12 text-indigo-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Rent vs. Buy Analysis</h2>
          <p className="text-lg text-indigo-100 max-w-2xl">
            A detailed look at the financial outcomes of renting and investing the difference versus buying a property.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="w-5 h-5 text-indigo-600" />
            The Financial Flowchart
          </CardTitle>
          <CardDescription>
            This diagram illustrates the long-term wealth creation potential for two scenarios: James (Renter & Investor) vs. Jacob (Buyer).
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <img 
              src="/public/does-house-owner-get-8-percent-rent-increase-yoy.jpeg" 
              alt="Rent vs. Buy Financial Flowchart" 
              className="w-full h-auto min-w-[800px] rounded-xl shadow-lg border border-slate-200"
            />
          </div>
          <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-700 italic">
              Note: This analysis highlights the importance of investing the differential amount (EMI - Rent) to maximize long-term wealth, assuming realistic market returns.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RentalHouseReturns;