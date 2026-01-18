"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Scale, Timer, TrendingUp, ExternalLink, ShieldCheck, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";

const EquityLaws = () => {
  const guideId = "1OnluaRytw0RCRhCVJ4stHPMwTSMtQrbD";
  const viewUrl = `https://drive.google.com/file/d/${guideId}/view?usp=drive_link`;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Scale className="w-4 h-4" />
            <span>Foundational Principles</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Laws of Equity
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Success in the stock market isn't just about picking winners; it's about following timeless laws that govern wealth creation.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Main Feature: Law of Long Term Thinking */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm overflow-hidden relative group">
        <div className="space-y-4 relative z-10">
          <div className="p-3 bg-blue-50 rounded-2xl w-fit text-blue-600">
            <Timer className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-slate-900">The Law of Long Term Thinking</h3>
            <p className="text-slate-500 max-w-md leading-relaxed">
              Markets are voting machines in the short run, but weighing machines in the long run. Understand the mechanics of wealth through time.
            </p>
          </div>
          <Button 
            variant="default" 
            size="lg" 
            className="gap-2 bg-blue-600 hover:bg-blue-700 h-12 px-8 rounded-xl font-bold transition-all transform active:scale-95"
            onClick={() => window.open(viewUrl, '_blank')}
          >
            <ExternalLink className="w-5 h-5" /> View Visual Guide
          </Button>
        </div>
        
        <div className="hidden lg:flex flex-1 justify-end">
           <div className="w-64 h-64 bg-slate-50 rounded-full flex items-center justify-center border-8 border-white shadow-inner group-hover:scale-105 transition-transform duration-500">
              <TrendingUp size={120} className="text-blue-200" />
           </div>
        </div>
      </section>

      {/* Supporting Concepts */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-none shadow-md bg-white p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">Capital Preservation</h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1. The power of compounding requires a base that isn't destroyed by unnecessary risks.
          </p>
        </Card>
        
        <Card className="border-none shadow-md bg-white p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">Emotional Discipline</h4>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The market is designed to transfer money from the active to the patient. Mastering your emotions is more important than mastering your spreadsheets.
          </p>
        </Card>
      </div>

      <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 text-center">
        <p className="text-sm text-blue-800 font-medium italic">
          "The stock market is a device for transferring money from the impatient to the patient." — Warren Buffett
        </p>
      </div>
    </div>
  );
};

export default EquityLaws;