"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, ShieldCheck, Zap, ExternalLink, Image as ImageIcon, Search, Coins, Target, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ValueInvesting = () => {
  const imageId = "1zWVdRi5BQGMENn78LohVDTjCHSq87JzR";
  const contrarianId = "1yBX_fqxrCzS-CxhDTu8WFwvAWdXpIP_2";
  const imageUrl = `https://drive.google.com/uc?id=${imageId}&export=download`;
  const viewUrl = `https://drive.google.com/file/d/${imageId}/view?usp=sharing`;
  const contrarianViewUrl = `https://drive.google.com/file/d/${contrarianId}/view?usp=drive_link`;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Coins className="w-4 h-4" />
            <span>The Warren Buffett Way</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Value Investing Philosophy
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Value investing is the practice of buying stocks that trade for less than their intrinsic value. It's about finding bargains in the stock market.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Tabs defaultValue="principles" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="principles">Core Principles</TabsTrigger>
          <TabsTrigger value="visual">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Visual Analysis
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="principles" className="space-y-12">
          {/* Section: Value Investors & Contrarian Mindset */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" /> Value Investors
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                  Value investors generally have a <strong>contrarian mindset</strong>. What does it mean? They’re not afraid to go against the crowd. 
                  They often invest in out-of-favor stocks that others do not want to invest in at the moment. 
                  They invest in these companies believing that the demand for this stock will come back when the situation changes.
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2 shrink-0 border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={() => window.open(contrarianViewUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4" /> View Visual Diagram
              </Button>
            </div>
          </section>

          {/* Section 1: Core Concepts */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" /> The Value Investor's Toolbox
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-blue-100 bg-blue-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-blue-600" /> Intrinsic Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The "true" worth of a company based on its assets, earnings, and future potential. Value investors believe market prices eventually catch up to intrinsic value.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-100 bg-emerald-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" /> Margin of Safety
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Buying a stock at a significant discount to its intrinsic value. This provides a "buffer" that protects you from losses if your analysis is slightly wrong.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 2: Key Indicators */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-purple-600" /> Identifying Value
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-slate-50 text-primary rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-bold">Low P/E Ratio</h4>
                <p className="text-xs text-slate-500">Buying companies whose earnings are high relative to their share price.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-slate-50 text-primary rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-bold">High Dividend Yield</h4>
                <p className="text-xs text-slate-500">Focusing on companies that share a significant portion of profits with shareholders.</p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl space-y-3">
                <div className="w-10 h-10 bg-slate-50 text-primary rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="font-bold">Consistent FCF</h4>
                <p className="text-xs text-slate-500">Prioritizing businesses that generate real cash, not just accounting profits.</p>
              </div>
            </div>
          </section>

          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
            <h4 className="text-xl font-bold mb-4">"Price is what you pay, value is what you get."</h4>
            <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
              Value investing requires immense patience. Sometimes, the market ignores a great company for years. Your job is to stay disciplined until the gap between price and value closes.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="visual">
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-emerald-600">
                  <ImageIcon className="w-5 h-5" />
                  Value Investing Matrix
                </CardTitle>
                <CardDescription>
                  A visual framework for assessing investment opportunities.
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
                  alt="Value Investing Framework" 
                  className="max-w-full h-auto min-w-[300px] md:min-w-[800px] rounded-lg shadow-sm border border-slate-200 bg-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ValueInvesting;