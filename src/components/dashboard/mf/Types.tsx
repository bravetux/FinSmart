"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Info, AlertTriangle } from 'lucide-react';

const data = [
  { name: 'Liquid/Debt', risk: 2, return: 6, color: '#10b981' },
  { name: 'Hybrid', risk: 5, return: 10, color: '#f59e0b' },
  { name: 'Equity (Large Cap)', risk: 7, return: 12, color: '#3b82f6' },
  { name: 'Equity (Mid/Small)', risk: 9, return: 15, color: '#ef4444' },
];

const TypesOfMF = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Risk vs Reward Spectrum</CardTitle>
            <CardDescription>Visualizing how different fund types balance safety and growth.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-3 border rounded-lg shadow-lg">
                          <p className="font-bold">{payload[0].payload.name}</p>
                          <p className="text-sm">Risk Score: {payload[0].payload.risk}/10</p>
                          <p className="text-sm">Avg Return: {payload[0].payload.return}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="return" radius={[0, 4, 4, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-4">
            <Info className="w-6 h-6 text-blue-600 shrink-0" />
            <div>
              <h4 className="font-bold text-blue-900">What are Mutual Funds?</h4>
              <p className="text-sm text-blue-700">Think of it as a 'potluck dinner'. Everyone brings a small dish (money), and a professional chef (Fund Manager) organizes the meal so everyone gets a balanced plate.</p>
            </div>
          </div>
          <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl flex gap-4">
            <AlertTriangle className="w-6 h-6 text-orange-600 shrink-0" />
            <div>
              <h4 className="font-bold text-orange-900">Key Rule</h4>
              <p className="text-sm text-orange-700">Higher the potential return, higher the risk. Never put money you need next month into Equity funds!</p>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Comparing Fund Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Invests In</TableHead>
                <TableHead>Ideal Duration</TableHead>
                <TableHead>Best For</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Equity Funds</TableCell>
                <TableCell>Company Shares (Stocks)</TableCell>
                <TableCell>5+ Years</TableCell>
                <TableCell>Wealth creation, Long-term goals</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Debt Funds</TableCell>
                <TableCell>Govt Bonds, Corporate FDs</TableCell>
                <TableCell>1 - 3 Years</TableCell>
                <TableCell>Stability, Regular income</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Hybrid Funds</TableCell>
                <TableCell>Mix of Stocks & Bonds</TableCell>
                <TableCell>3 - 5 Years</TableCell>
                <TableCell>Moderate growth with safety</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TypesOfMF;