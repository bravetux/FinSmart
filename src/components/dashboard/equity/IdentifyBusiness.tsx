"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, TrendingUp, Scale, DollarSign, Calculator, ExternalLink, Image as ImageIcon, FileText, ShieldAlert } from 'lucide-react';
import { Button } from "@/components/ui/button";

const IdentifyBusiness = () => {
  const imageId = "108QghHNHs4JcEYD94oSsoS5-2-rWAqm6";
  const imageUrl = `https://drive.google.com/uc?id=${imageId}&export=download`;
  const viewUrl = `https://drive.google.com/file/d/${imageId}/view?usp=drive_link`;

  const concepts = [
    {
      title: "Cash Flow (FCF)",
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
      desc: "Free Cash Flow (FCF) is the cash a company generates after accounting for cash outflows to support operations and maintain its capital assets. It represents the true disposable cash available to shareholders.",
      color: "bg-emerald-50"
    },
    {
      title: "Cash Flow Growth",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      desc: "The rate at which a company's Free Cash Flow increases over time. Consistent, high FCF growth is a strong indicator of a durable competitive advantage (moat) and efficient management.",
      color: "bg-blue-50"
    },
    {
      title: "Cash Flow Risk",
      icon: <ShieldAlert className="w-5 h-5 text-red-600" />,
      desc: "The risk that a company's cash generation might be volatile or insufficient to cover its obligations (debt, dividends, capital expenditure). High debt or cyclical industries often carry higher FCF risk.",
      color: "bg-red-50"
    },
    {
      title: "Terminal Value",
      icon: <Calculator className="w-5 h-5 text-purple-600" />,
      desc: "In valuation, Terminal Value represents the estimated value of a company's cash flows beyond the explicit forecast period (usually 5-10 years). It assumes the company grows at a stable, perpetual rate thereafter.",
      color: "bg-purple-50"
    },
    {
      title: "Company Value",
      icon: <Scale className="w-5 h-5 text-amber-600" />,
      desc: "The intrinsic value of a company, often calculated using Discounted Cash Flow (DCF) analysis, which sums the present value of all expected future Free Cash Flows (including the Terminal Value).",
      color: "bg-amber-50"
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <FileText className="w-4 h-4" />
            <span>Valuation Drivers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Identify the Business: Cash Flow & Value
          </h2>
          <p className="text-indigo-50 text-lg max-w-xl">
            The true value of any business is the cash it generates over its lifetime. Understanding cash flow is the foundation of intrinsic valuation.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-indigo-600" /> Core Cash Flow Concepts
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept, i) => (
            <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className={`p-2 rounded-lg w-fit mb-2 ${concept.color}`}>
                  {concept.icon}
                </div>
                <CardTitle className="text-lg">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">{concept.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-indigo-600">
              <ImageIcon className="w-5 h-5" />
              Visual Guide: Cash Flow & Valuation
            </CardTitle>
            <CardDescription>
              A visual breakdown of how Free Cash Flow drives the intrinsic value of a company.
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={() => window.open(viewUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4" /> View Original Guide
          </Button>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto bg-slate-50 rounded-xl p-4 md:p-8 flex flex-col items-center">
            <img 
              src={imageUrl} 
              alt="Cash Flow and Valuation Diagram" 
              className="max-w-full h-auto min-w-[300px] md:min-w-[800px] rounded-lg shadow-sm border border-slate-200 bg-white"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // If direct link fails, show a helpful message inside the UI
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent && !parent.querySelector('.error-msg')) {
                  const msg = document.createElement('div');
                  msg.className = 'error-msg text-center p-8 space-y-4';
                  msg.innerHTML = `
                    <p class="text-slate-500 text-sm">Google Drive is preventing direct preview of this image.</p>
                    <button class="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold text-sm" onclick="window.open('${viewUrl}', '_blank')">Click 'View Original Guide' to see it</button>
                  `;
                  parent.appendChild(msg);
                }
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdentifyBusiness;