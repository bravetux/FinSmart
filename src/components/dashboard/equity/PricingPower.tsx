"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, TrendingUp, Scale, ShieldCheck, Tag, AlertTriangle, CheckCircle2, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PricingPower = () => {
  const imageId = "1WpVh0GdRatfLTqCOr245vz1R0GebhpuI";
  const imageUrl = `https://drive.google.com/uc?id=${imageId}&export=download`;
  const viewUrl = `https://drive.google.com/file/d/${imageId}/view?usp=sharing`;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Tag className="w-4 h-4" />
            <span>The Inflation Shield</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Pricing Power of Companies
          </h2>
          <p className="text-blue-50 text-lg max-w-xl">
            Pricing power is the ability of a company to raise prices without losing customers or market share. This is a hallmark of a strong business.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Tabs defaultValue="concept" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="concept">Concept & Sources</TabsTrigger>
          <TabsTrigger value="visual">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Visual Guide
            </div>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="concept" className="space-y-12">
          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-600" /> Why Pricing Power Matters
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-emerald-100 bg-emerald-50/50">
                <CardHeader><CardTitle className="text-lg text-emerald-800">Stable Earnings</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-slate-600">Allows the company to maintain profit margins even when raw material costs rise.</p></CardContent>
              </Card>
              <Card className="border-blue-100 bg-blue-50/50">
                <CardHeader><CardTitle className="text-lg text-blue-800">Competitive Advantage</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-slate-600">A strong moat protects the business from aggressive competition and price wars.</p></CardContent>
              </Card>
              <Card className="border-purple-100 bg-purple-50/50">
                <CardHeader><CardTitle className="text-lg text-purple-800">Resilience</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-slate-600">These companies perform better during economic downturns and high inflation periods.</p></CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-blue-600" /> Sources of Pricing Power
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Strong Brand", desc: "Customers pay a premium for trust and reputation (e.g., Apple, Asian Paints).", icon: <Zap /> },
                { label: "Unique Product/IP", desc: "Patents, proprietary technology, or unique formulations (e.g., Pharma, specialized chemicals).", icon: <Scale /> },
                { label: "Switching Cost", desc: "It's expensive or difficult for customers to switch to a competitor (e.g., enterprise software).", icon: <AlertTriangle /> },
                { label: "Network Effect", desc: "The product becomes more valuable as more people use it (e.g., social media, payment networks).", icon: <CheckCircle2 /> }
              ].map((source, i) => (
                <Card key={i} className="border-slate-200 shadow-sm">
                  <CardHeader className="pb-2">
                    <div className="p-2 bg-slate-50 rounded-lg w-fit mb-2 text-blue-600">
                      {source.icon}
                    </div>
                    <CardTitle className="text-lg">{source.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-500 leading-relaxed">{source.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="visual">
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Tag className="w-5 h-5" />
                  Pricing Power Visual Analysis
                </CardTitle>
                <CardDescription>
                  A deep dive into how companies maintain their edge.
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
                  alt="Pricing Power Analysis" 
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

export default PricingPower;