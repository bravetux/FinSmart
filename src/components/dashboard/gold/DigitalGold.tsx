"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Percent, ShieldCheck, History, Calendar, CheckCircle2, UserCheck, AlertTriangle } from 'lucide-react';

const DigitalGold = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold tracking-tight">Sovereign Gold Bonds (SGB)</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          The government-backed way to earn from gold.
        </p>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="p-4 bg-white rounded-xl shadow-sm">
          <AlertTriangle className="w-8 h-8 text-orange-600" />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-orange-900">Issue Status</h4>
          <p className="text-sm text-orange-800 leading-relaxed font-medium">
            Important: Sovereign Gold Bonds are currently no longer being issued for new subscriptions. Existing bonds can still be traded on secondary markets.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
          <Percent className="w-8 h-8 text-blue-600 mx-auto" />
          <h4 className="text-xl font-bold">2.5%</h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Annual Interest</p>
        </div>
        <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
          <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
          <h4 className="text-xl font-bold">Sovereign</h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Backed by RBI</p>
        </div>
        <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
          <Calendar className="w-8 h-8 text-purple-600 mx-auto" />
          <h4 className="text-xl font-bold">8 Years</h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Tenure</p>
        </div>
        <div className="p-6 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
          <History className="w-8 h-8 text-orange-600 mx-auto" />
          <h4 className="text-xl font-bold">5th Year</h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Exit Option</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-slate-200 shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50 border-b">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              SGB Structure
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-sm text-slate-600">
            <p>Issued by the <strong>RBI</strong>. Safest way to own digital gold.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Denominated in units of 1 gram.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Maturity after 8 years with 2.5% annual interest.</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50 border-b">
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-600" />
              Who is it for?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>Ideal for <strong>long-term investors</strong> looking for fixed income plus gold appreciation.</p>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-800">Tax benefit: Capital gains at maturity (8 years) are tax-exempt for individuals.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-red-900">Liquidity & Redemption</h4>
          <p className="text-sm text-red-800 leading-relaxed">
            SGBs have a <strong>lock-in period of 5 years</strong>. Premature redemption is possible after the 5th year, while final maturity occurs after 8 years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalGold;