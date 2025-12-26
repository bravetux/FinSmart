"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wallet } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const data = [
  { name: 'Fixed Deposit (6%)', value: 179000 },
  { name: 'Mutual Fund (12%)', value: 310000 },
  { name: 'Mutual Fund (15%)', value: 404000 },
];

const Lumpsum = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold">Lumpsum Investment</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-4 p-4 rounded-xl border bg-white shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Wallet className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">When to do it?</h4>
                <p className="text-sm text-slate-600">When you have a surplus (Bonus, inheritance) and the market is undervalued.</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Wealth after 10 Years ({currency.symbol}100,000 Invested)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis hide />
                <Tooltip formatter={(value) => [`${currency.symbol}${(Number(value)).toLocaleString()}`, 'Final Value']} />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Lumpsum;