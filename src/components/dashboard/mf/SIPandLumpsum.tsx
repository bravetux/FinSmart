"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Combine } from 'lucide-react';

const portfolio = [
  { name: 'Lumpsum (Core)', value: 70, color: '#3b82f6' },
  { name: 'SIP (Growth)', value: 30, color: '#10b981' },
];

const SIPandLumpsum = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
          <Combine className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">The "Hybrid" Strategy</h3>
          <p className="text-slate-600 mt-1">Start with a Lumpsum and continue with a SIP to build wealth brick-by-brick.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ideal Portfolio Structure</CardTitle>
        </CardHeader>
        <CardContent className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolio}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {portfolio.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default SIPandLumpsum;