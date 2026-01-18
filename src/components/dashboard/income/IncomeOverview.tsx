"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wallet, ExternalLink, TrendingUp, Lightbulb, Briefcase } from 'lucide-react';
import { Button } from "@/components/ui/button";

const IncomeOverview = () => {
  const imageId = "1x3P9QLs4SXGcf-uzLrlotXFZzX3-QJFa";
  const imageUrl = `https://drive.google.com/uc?id=${imageId}&export=download`;
  const viewUrl = `https://drive.google.com/file/d/${imageId}/view?usp=sharing`;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Wallet className="w-12 h-12 text-indigo-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Income & Wealth Creation</h2>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Understanding the roadmap to financial independence through diversified income streams and strategic planning.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              The Financial Roadmap
            </CardTitle>
            <CardDescription>
              A visual guide to building and managing your income streams.
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
              alt="Financial Income Roadmap" 
              className="max-w-full h-auto min-w-[300px] md:min-w-[800px] rounded-lg shadow-sm border border-slate-200 bg-white"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-none shadow-md bg-white p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Briefcase className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold">Active vs Passive</h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The roadmap highlights the transition from active income to passive income.
          </p>
        </Card>
        <Card className="border-none shadow-md bg-white p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Lightbulb className="w-5 h-5 text-emerald-600" />
            </div>
            <h4 className="font-bold">Strategic Pillars</h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Focus on increasing primary income while building secondary buckets.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default IncomeOverview;