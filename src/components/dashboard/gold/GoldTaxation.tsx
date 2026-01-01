"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Percent, ShieldCheck, FileText, Gem, AlertTriangle, Zap } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const taxationData = [
  {
    type: "Sovereign Gold Bonds (SGB)",
    holding: "8 Years (Maturity)",
    stcg: "N/A",
    ltcg: "Exempt from tax",
    note: "Interest (2.5% annual) is taxed as per income slab.",
    color: "bg-emerald-50 text-emerald-700"
  },
  {
    type: "Sovereign Gold Bonds (SGB)",
    holding: "5-8 Years (Premature Exit)",
    stcg: "N/A",
    ltcg: "20% with indexation benefit",
    note: "Interest (2.5% annual) is taxed as per income slab.",
    color: "bg-blue-50 text-blue-700"
  },
  {
    type: "Gold ETFs & Funds",
    holding: "< 3 Years",
    stcg: "Taxed as per income slab",
    ltcg: "N/A",
    note: "Treated as non-equity assets.",
    color: "bg-amber-50 text-amber-700"
  },
  {
    type: "Gold ETFs & Funds",
    holding: "> 3 Years",
    stcg: "N/A",
    ltcg: "20% with indexation benefit",
    note: "Indexation adjusts purchase cost for inflation.",
    color: "bg-amber-50 text-amber-700"
  },
  {
    type: "Physical Gold (Jewelry/Coins)",
    holding: "< 3 Years",
    stcg: "Taxed as per income slab",
    ltcg: "N/A",
    note: "Making charges are not deductible.",
    color: "bg-red-50 text-red-700"
  },
  {
    type: "Physical Gold (Jewelry/Coins)",
    holding: "> 3 Years",
    stcg: "N/A",
    ltcg: "20% with indexation benefit",
    note: "Indexation benefit applies to the cost of acquisition.",
    color: "bg-red-50 text-red-700"
  }
];

const GoldTaxation = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Percent className="w-4 h-4" />
            <span>Tax Implications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Taxation of Gold Investments
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            The tax treatment varies significantly based on the form of gold (Physical, ETF, or SGB) and your holding period.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Table className="w-6 h-6 text-blue-600" /> Capital Gains Summary
        </h3>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[20%]">Investment Type</TableHead>
                <TableHead className="w-[15%]">Holding Period</TableHead>
                <TableHead className="w-[15%]">STCG (&lt; 3 Yrs)</TableHead>
                <TableHead className="w-[15%]">LTCG (&gt; 3 Yrs)</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {taxationData.map((item, i) => (
                <TableRow key={i} className={item.color}>
                  <TableCell className="font-bold text-slate-900 flex items-center gap-2">
                    {item.type.includes('SGB') ? <FileText className="w-4 h-4" /> : item.type.includes('ETF') ? <Zap className="w-4 h-4" /> : <Gem className="w-4 h-4" />}
                    {item.type}
                  </TableCell>
                  <TableCell className="font-medium">{item.holding}</TableCell>
                  <TableCell>{item.stcg}</TableCell>
                  <TableCell>{item.ltcg}</TableCell>
                  <TableCell className="text-xs text-slate-600">{item.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-emerald-100 bg-emerald-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700">
              <ShieldCheck className="w-5 h-5" /> The SGB Advantage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <p>SGBs are the most tax-efficient form of gold investment because the capital gains at maturity (8 years) are completely tax-free.</p>
          </CardContent>
        </Card>
        <Card className="border-red-100 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="w-5 h-5" /> Physical Gold Warning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <p>When selling physical gold, the tax is calculated on the sale price minus the purchase price. You cannot deduct making charges or GST paid during purchase.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoldTaxation;