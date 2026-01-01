"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Percent, Building2, ReceiptText, ShieldCheck, AlertTriangle } from 'lucide-react';

const RealEstateTaxation = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Percent className="w-4 h-4" />
            <span>Tax & Deductions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Real Estate Taxation
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Understanding capital gains and rental income tax is crucial for calculating the true profitability of property investment.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <ReceiptText className="w-6 h-6 text-blue-600" /> Capital Gains on Sale
        </h3>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[20%]">Category</TableHead>
                <TableHead className="w-[20%]">Holding Period</TableHead>
                <TableHead className="w-[20%]">Tax Rate</TableHead>
                <TableHead>Key Feature</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-red-50/50">
                <TableCell className="font-bold text-slate-900">Short-Term Capital Gain (STCG)</TableCell>
                <TableCell>&lt; 24 Months</TableCell>
                <TableCell>As per Income Slab</TableCell>
                <TableCell className="text-xs text-slate-600">Gains are added to your total income.</TableCell>
              </TableRow>
              <TableRow className="bg-emerald-50/50">
                <TableCell className="font-bold text-slate-900">Long-Term Capital Gain (LTCG)</TableCell>
                <TableCell>&gt; 24 Months</TableCell>
                <TableCell>20%</TableCell>
                <TableCell className="text-xs text-slate-600">Benefit of indexation is available to reduce taxable gain.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-emerald-600" /> Taxation of Rental Income
        </h3>
        <Card className="border-emerald-100 bg-emerald-50/50">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Tax Rule</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Rental income is taxed under the head "Income from House Property" and is added to your total income, taxed at your applicable slab rate.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-emerald-200">
              <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Standard Deduction</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  You can claim a flat 30% deduction on the Net Annual Value (NAV) of the property, regardless of your actual expenses (maintenance, repairs, etc.).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default RealEstateTaxation;