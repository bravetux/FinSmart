"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Scale } from 'lucide-react';

const RentalHouseReturns = () => {
  // Converted Google Drive link for direct image display
  const imageUrl = "https://drive.google.com/uc?export=view&id=1aGct9D6fIF7eqlpXmMDogMHXs690cHdS";

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
          <div className="overflow-x-auto bg-slate-50 rounded-xl p-4 md:p-8 flex justify-center">
            <img 
              src={imageUrl} 
              alt="Rent vs. Buy Financial Flowchart" 
              className="max-w-full h-auto min-w-[300px] md:min-w-[800px] rounded-lg shadow-sm border border-slate-200 bg-white"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/1200x800/f8fafc/64748b?text=Please+ensure+the+Google+Drive+file+is+set+to+'Anyone+with+the+link'";
              }}
            />
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-700 italic">
              Note: This analysis compares the long-term compounding effect of investing surplus capital into high-growth assets (Renter) versus building equity in a single physical asset (Buyer).
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RentalHouseReturns;