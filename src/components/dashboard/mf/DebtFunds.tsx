"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, ShieldCheck, Clock } from 'lucide-react';

const debtCategories = [
  { id: 1, category: 'Overnight Fund', description: 'Invests in overnight securities having a maturity of 1 day' },
  { id: 2, category: 'Liquid Fund', description: 'Invests in Debt and money market securities with a maturity of up to 91 days only' },
  { id: 3, category: 'Ultra Short Duration Fund', description: 'Invests in debt and money market instruments with Macaulay duration between 3 months and 6 months' },
  { id: 4, category: 'Low Duration Fund', description: 'Invests in instruments with Macaulay duration between 6 months and 12 months.' },
  { id: 5, category: 'Money Market Fund', description: 'Invests in Money Market instruments with maturity up to 1 year' },
  { id: 6, category: 'Short Duration Fund', description: 'Invests in instruments with Macaulay duration between 1 year and 3 years.' },
  { id: 7, category: 'Medium Duration Fund', description: 'Invests in debt and money market instruments with a Macaulay duration of between 3 and 4 years.' },
  { id: 8, category: 'Medium to Long Duration Fund', description: 'Invests in Debt & Money Market instruments with Macaulay duration between 4- 7 years' },
  { id: 9, category: 'Long Duration Fund', description: 'Invests in Debt & Money Market instruments with Macaulay duration of more than 7 years' },
  { id: 10, category: 'Dynamic Bond Funds', description: 'Invest in debt and money market instruments across durations.' },
  { id: 11, category: 'Corporate Bond Fund', description: 'Invests predominantly (80% of total portfolio) in high-rated corporate bonds.' },
  { id: 12, category: 'Credit Risk Fund', description: 'Invests at least 65% of its portfolio in below highest-rated instruments.' },
  { id: 13, category: 'Banking and PSU Fund', description: 'Invests predominantly (80% of total assets) in Debt instruments of banks, Public Sector Undertakings, and Public Financial Institutions.' },
  { id: 14, category: 'Gilt Fund', description: 'Invests at least 80% of its assets in government securities.' },
  { id: 15, category: 'Gilt Fund with 10-year constant duration', description: 'Invests at least 80% of its assets in government securities with a maturity of 10 years.' },
  { id: 16, category: 'Floater Fund', description: 'Invests at least 65% of its assets in floating rate instruments.' },
];

const DebtFunds = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Introduction Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-emerald-600 text-white border-none shadow-xl overflow-hidden relative">
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl flex items-center gap-3">
              <DollarSign className="w-6 h-6" /> Debt Funds
            </CardTitle>
            <CardDescription className="text-emerald-100">
              Debt funds invest in fixed-income instruments like government securities, corporate bonds, and money market instruments. They offer predictable returns but react to interest rate changes.
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 flex gap-4 mt-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <ShieldCheck className="w-4 h-4" /> Capital Preservation
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm">
               <Clock className="w-4 h-4" /> Short to Medium Term Goals
             </div>
          </CardContent>
          {/* Decorative pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
        </Card>

        <Card className="border-blue-100 bg-blue-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-blue-800">Key Takeaway</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-xs text-blue-700 leading-relaxed">
               Debt funds are generally less volatile than equity funds and are suitable for investors with a low-risk appetite or short-term financial goals (up to 3 years).
             </p>
          </CardContent>
        </Card>
      </div>

      {/* Categories Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">SEBI Categorization of Debt Funds</h3>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">S. No.</TableHead>
                  <TableHead className="w-[200px]">Category of Schemes</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {debtCategories.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell className="font-semibold text-slate-800">{item.category}</TableCell>
                    <TableCell className="text-sm text-slate-600">{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default DebtFunds;