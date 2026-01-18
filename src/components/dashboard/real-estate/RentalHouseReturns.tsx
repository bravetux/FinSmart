"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Home, Scale, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const RentalHouseReturns = () => {
  // Using the most reliable direct link format for public Google Drive files
  const imageId = "1aGct9D6fIF7eqlpXmMDogMHXs690cHdS";
  const imageUrl = `https://drive.google.com/uc?id=${imageId}&export=download`;
  const viewUrl = `https://drive.google.com/file/d/${imageId}/view?usp=sharing`;

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
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Home className="w-5 h-5 text-indigo-600" />
              The Financial Flowchart
            </CardTitle>
            <CardDescription>
              James (Renter & Investor) vs. Jacob (Buyer) long-term wealth creation.
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={() => window.open(viewUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4" /> View Original
          </Button>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto bg-slate-50 rounded-xl p-4 md:p-8 flex flex-col items-center">
            <img 
              src={imageUrl} 
              alt="Rent vs. Buy Financial Flowchart" 
              className="max-w-full h-auto min-w-[300px] md:min-w-[800px] rounded-lg shadow-sm border border-slate-200 bg-white"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // If direct link fails, show a helpful message inside the UI
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.error-msg')) {
                  const msg = document.createElement('div');
                  msg.className = 'error-msg text-center p-8 space-y-4';
                  msg.innerHTML = `
                    <p class="text-slate-500 text-sm">Google Drive is preventing direct preview of this image.</p>
                    <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm">Click 'View Original' above to see it</button>
                  `;
                  parent.appendChild(msg);
                }
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