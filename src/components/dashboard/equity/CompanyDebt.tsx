"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, Zap, TrendingUp, AlertCircle, Calculator, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CompanyDebt = () => {
  const imageId = "1W956i_3g8_fQCCuGgO3PaciJB2eQS9VH";
  const imageUrl = `https://drive.google.com/uc?id=${imageId}&export=download`;
  const viewUrl = `https://drive.google.com/file/d/${imageId}/view?usp=sharing`;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Scale className="w-4 h-4" />
            <span>Financial Leverage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Corporate Debt Analysis
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Debt is a double-edged sword. Used wisely, it fuels growth; used poorly, it leads to bankruptcy. Learn how to spot the difference.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Tabs defaultValue="leverage" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="leverage">Leverage & Ratios</TabsTrigger>
          <TabsTrigger value="visual">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Visual Guide
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="leverage" className="space-y-12">
          {/* Section 1: How Companies Leverage Debt */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber-500" /> How Companies Leverage Debt
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl">
              Leverage is using borrowed capital (debt) to increase the potential return of an investment. 
              If a company can borrow money at 8% interest and use it to grow a project that earns 15%, 
              it has successfully "leveraged" its equity.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-100 bg-blue-50/30">
                <CardHeader><CardTitle className="text-lg">The Expansion Fuel</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">Companies use debt to fund new factories, R&D, or acquisitions without diluting existing shareholders by issuing more stock.</p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100 bg-emerald-50/30">
                <CardHeader><CardTitle className="text-lg">Tax Efficiency</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">In many jurisdictions, interest payments on debt are tax-deductible, reducing the company's overall tax burden compared to equity funding.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 2: Healthy Ratios */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-blue-600" /> Healthy Debt Ratios
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-slate-800">1. Debt-to-Equity (D/E) Ratio</h4>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-2">Calculation</p>
                  <code className="text-sm block p-2 bg-slate-50 rounded">Total Liabilities / Shareholders' Equity</code>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-slate-600"><strong>Healthy Range:</strong> Generally below 1.0.</p>
                    <p className="text-xs text-slate-500">A ratio of 2.0+ means for every $1 the owners put in, they owe $2. This is high risk.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg text-slate-800">2. Interest Coverage Ratio</h4>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <p className="text-xs font-bold text-emerald-600 uppercase mb-2">Calculation</p>
                  <code className="text-sm block p-2 bg-slate-50 rounded">EBIT (Operating Profit) / Interest Expense</code>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-slate-600"><strong>Healthy Range:</strong> Above 3.0.</p>
                    <p className="text-xs text-slate-500">Tells you how many times the company can pay its interest with its current profits.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-red-900">Context Matters</h4>
              <p className="text-sm text-red-800 leading-relaxed">
                Debt norms vary by industry. A software company should have <strong>near zero debt</strong>, while an infrastructure or banking company might naturally carry high leverage. Always compare a company's debt to its industry peers.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="visual">
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <ImageIcon className="w-5 h-5" />
                  Debt Visual Analysis
                </CardTitle>
                <CardDescription>
                  Deep dive into corporate debt structures.
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                onClick={() => window.open(viewUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4" /> View Original
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="overflow-x-auto bg-slate-50 rounded-xl p-4 md:p-8 flex flex-col items-center">
                <img 
                  src={imageUrl} 
                  alt="Debt Analysis" 
                  className="max-w-full h-auto min-w-[300px] md:min-w-[800px] rounded-lg shadow-sm border border-slate-200 bg-white"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyDebt;