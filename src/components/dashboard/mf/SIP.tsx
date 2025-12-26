"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Repeat, Zap, TrendingUp } from 'lucide-react';

const compoundingData = [
  { year: 0, invested: 0, wealth: 0 },
  { year: 5, invested: 600000, wealth: 824000 },
  { year: 10, invested: 1200000, wealth: 2320000 },
  { year: 15, invested: 1800000, wealth: 5040000 },
  { year: 20, invested: 2400000, wealth: 9980000 },
];

const SIP = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-blue-600 text-white border-none">
          <CardHeader className="pb-2">
            <Repeat className="w-8 h-8 mb-2 opacity-80" />
            <CardTitle className="text-lg">What is SIP?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-100">Systematic Investment Plan. You invest a fixed amount regularly (monthly) instead of a big one-time amount.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-emerald-600 text-white border-none">
          <CardHeader className="pb-2">
            <Zap className="w-8 h-8 mb-2 opacity-80" />
            <CardTitle className="text-lg">The "Magic" Benefit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-emerald-100">Rupee Cost Averaging. You buy more units when markets are low and fewer when they are high.</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-600 text-white border-none">
          <CardHeader className="pb-2">
            <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
            <CardTitle className="text-lg">Compounding</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-100">The longer you stay, the more your money's interest earns its own interest.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Power of Compounding (SIP @ $10,000/mo)</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={compoundingData}>
              <defs>
                <linearGradient id="colorWealth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => `$${value/1000000}M`} />
              <Tooltip formatter={(value) => [`$${(Number(value)).toLocaleString()}`, 'Value']} />
              <Area type="monotone" dataKey="wealth" stroke="#3b82f6" fillOpacity={1} fill="url(#colorWealth)" />
              <Area type="monotone" dataKey="invested" stroke="#94a3b8" fill="#f1f5f9" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SIP;