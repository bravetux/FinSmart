"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp } from 'lucide-react';

const IndexFunds = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Index Funds</h2>
        <p className="text-blue-50 text-lg mt-4">Simple, low-cost way to match market returns</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            What are Index Funds?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700">
            Index funds replicate a market index (like Nifty 50 or Sensex) by investing in the same stocks in the same proportion. Low cost, passive management.
          </p>
          <div className="p-5 bg-blue-50 rounded-xl">
            <h4 className="font-semibold mb-2">Popular Index Funds:</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Nifty 50 Index Funds (tracks top 50 companies)</li>
              <li>• Sensex Index Funds (tracks top 30 BSE companies)</li>
              <li>• Nifty Next 50 (51st to 100th companies)</li>
              <li>• Nifty Midcap 150, Smallcap 250</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Benefits of Index Funds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
              <span className="text-sm"><strong>Very low expense ratio</strong> (0.05% - 0.30%)</span>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
              <span className="text-sm"><strong>Guaranteed market returns</strong> - You get what the market gives</span>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
              <span className="text-sm"><strong>No fund manager risk</strong> - Purely rule-based</span>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
              <span className="text-sm"><strong>Perfect for beginners</strong> - Simple and transparent</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndexFunds;
