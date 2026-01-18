"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Globe, 
  Coins, 
  Landmark, 
  FileText, 
  Scale,
  Zap
} from 'lucide-react';

const MacroAnalysis = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Globe className="w-4 h-4" />
            <span>Top-Down Analysis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Economic & Macro Analysis
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Understand how the "Big Picture" affects individual companies. Successful investors track these trends to anticipate market shifts.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Economic Indicators Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-600" /> Economic Indicators
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="p-2 bg-blue-50 rounded-lg w-fit mb-2 text-blue-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">1. Key Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Identify important metrics like <strong>GDP growth rate</strong>, <strong>inflation rate</strong>, unemployment rate, consumer confidence, and industrial production.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="p-2 bg-indigo-50 rounded-lg w-fit mb-2 text-indigo-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">2. Industry Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Analyze how these broad indicators specifically affect the industry in which a company operates (e.g., high interest rates hurting real estate).
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="p-2 bg-emerald-50 rounded-lg w-fit mb-2 text-emerald-600">
                <Users className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">3. Consumer Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Monitor patterns in how people spend. This directly impacts companies in sectors like <strong>Retail</strong>, <strong>Leisure</strong>, and <strong>Automobiles</strong>.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="p-2 bg-purple-50 rounded-lg w-fit mb-2 text-purple-600">
                <Zap className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">4. Business Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Assess business investment trends to understand potential growth opportunities for B2B companies and capital equipment manufacturers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 lg:col-span-2 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="p-2 bg-amber-50 rounded-lg w-fit mb-2 text-amber-600">
                <Coins className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">5. Currency and Inflation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Consider how <strong>currency fluctuations</strong> and <strong>inflation</strong> affect companies engaged in international trade, their pricing decisions, and input costs (raw materials).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Macroeconomic Analysis Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Scale className="w-6 h-6 text-emerald-600" /> Macroeconomic Analysis
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                <Landmark className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">1. Interest Rates (RBI Policies)</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Analyze RBI’s bank policies. Higher interest rates increase borrowing costs, which can lower company profits and discourage consumer loans.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">2. Fiscal Policies</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Consider government spending and tax rates. Infrastructure spending helps construction companies, while high corporate taxes can reduce earnings.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">3. Global Economic Trends</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Be aware of global shifts. War, oil price changes, or economic slowdowns in the US/China can influence Indian export and IT companies.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900">4. Industry Sensitivity</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Understand the cycle. <strong>Cyclical</strong> industries (like Steel) do well in booms, while <strong>Defensive</strong> industries (like FMCG or Pharma) stay steady during downturns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Thought */}
      <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 text-center">
        <p className="text-sm text-blue-800 font-medium italic">
          "The macro determines the trend, but the fundamentals determine the individual winners."
        </p>
      </div>
    </div>
  );
};

export default MacroAnalysis;