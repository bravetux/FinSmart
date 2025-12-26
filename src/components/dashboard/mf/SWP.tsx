"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowDownToLine } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const swpData = [
  { month: 1, balance: 1000000 },
  { month: 6, balance: 1020000 },
  { month: 12, balance: 1045000 },
  { month: 18, balance: 1070000 },
  { month: 24, balance: 1100000 },
];

const SWP = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-blue-50 p-8 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center">
        <ArrowDownToLine className="w-12 h-12 text-blue-600" />
        <div>
          <h2 className="text-3xl font-bold">Systematic Withdrawal Plan (SWP)</h2>
          <p className="text-lg text-slate-600 mt-2">The "DIY Pension Plan". You get a fixed monthly payout from your investment.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>SWP in Action: Passive Income</CardTitle>
        </CardHeader>
        <CardContent className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={swpData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(val) => `${currency.symbol}${val/1000}k`} />
              <Tooltip formatter={(val) => [`${currency.symbol}${Number(val).toLocaleString()}`, 'Balance']} />
              <Area type="monotone" dataKey="balance" stroke="#3b82f6" fill="#dbeafe" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SWP;