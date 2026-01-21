"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from 'lucide-react';

const Diversification = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-green-600 to-teal-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Diversification in Mutual Funds</h2>
        <p className="text-green-50 text-lg mt-4">Don't put all eggs in one basket</p>
      </div>
      <Card><CardHeader><CardTitle className="flex items-center gap-2"><PieChart className="w-6 h-6 text-green-600" />Why Diversify?</CardTitle></CardHeader><CardContent><p className="text-slate-700 mb-4">Diversification reduces risk by spreading investments across multiple assets, sectors, and fund categories.</p><div className="space-y-2 text-sm"><p>• <strong>Across Asset Classes:</strong> Equity, Debt, Gold</p><p>• <strong>Across Market Caps:</strong> Large, Mid, Small cap</p><p>• <strong>Across Sectors:</strong> IT, Banking, Pharma, etc.</p><p>• <strong>Across Fund Houses:</strong> Don't invest only in one AMC</p></div></CardContent></Card>
    </div>
  );
};
export default Diversification;
