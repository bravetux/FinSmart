"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Pill, Pin, TrendingUp, Globe, ShieldCheck, Zap, AlertTriangle, CheckCircle2, FlaskConical, Handshake, BarChart3, Wallet } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const Scrips = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <BarChart3 className="w-4 h-4" />
            <span>Investment Watchlist</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Details of Company that I track
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Deep-dive analysis into core portfolio holdings and high-conviction opportunities.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Column 1: Dr. Reddy’s Laboratories */}
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
          <CardHeader className="bg-blue-50/50 border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Pill className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="bg-white text-blue-600 border-blue-200">Global Pharma</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">Dr. Reddy’s Laboratories</CardTitle>
            <CardDescription className="text-blue-600 font-medium">Quiet Progress, Global Opportunity</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 flex-1">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <FlaskConical className="w-4 h-4 text-blue-500" /> Regulatory Progress
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> USFDA issued a pre-approval inspection letter for Hyderabad biologics facility.</li>
                <li className="flex gap-2"><span>•</span> Normal step before product approvals, not a warning.</li>
                <li className="flex gap-2"><span>•</span> Moving closer to US biologics launches.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Globe className="w-4 h-4 text-blue-500" /> European Expansion
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> EC approved AVT03 (biosimilar for bone health).</li>
                <li className="flex gap-2"><span>•</span> Enables sales across Europe and EEA markets.</li>
                <li className="flex gap-2"><span>•</span> Strengthens presence in high-value biosimilars.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Handshake className="w-4 h-4 text-blue-500" /> Partnerships
              </h4>
              <p className="text-xs text-slate-600">AVT03 developed with Alvotech. Focus on biologics creates better pricing power and long-term revenue visibility.</p>
            </div>

            <div className="pt-4 border-t mt-auto">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <h5 className="font-bold text-blue-900 text-[10px] uppercase mb-1">Key Message</h5>
                <p className="text-[10px] text-blue-800 leading-relaxed italic">Laying groundwork for biologics growth. Good opportunity to accumulate before approvals translate into earnings.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Column 2: Zydus Lifesciences */}
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
          <CardHeader className="bg-emerald-50/50 border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-emerald-600 rounded-lg text-white">
                <Pill className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="bg-white text-emerald-600 border-emerald-200">Next Leader</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">Zydus Lifesciences</CardTitle>
            <CardDescription className="text-emerald-600 font-medium">Building the Next Pharma Giant</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 flex-1">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Handshake className="w-4 h-4 text-emerald-500" /> Global Partnerships
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> Deal with Formycon for Keytruda biosimilar (US & Canada).</li>
                <li className="flex gap-2"><span>•</span> Oncology support with RK Pharma (US).</li>
                <li className="flex gap-2"><span>•</span> US rights for NUFYMCO (Lucentis biosimilar).</li>
                <li className="flex gap-2"><span>•</span> Tie-up with Myriad Genetics for cancer testing.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <FlaskConical className="w-4 h-4 text-emerald-500" /> Pipeline Strength
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> USFDA approvals for diabetes & hormone therapies.</li>
                <li className="flex gap-2"><span>•</span> Positive Phase-3 for Saroglitazar (liver disease).</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <BarChart3 className="w-4 h-4 text-emerald-500" /> Financials
              </h4>
              <p className="text-xs text-slate-600">Q2 FY26 revenue up 17% YoY. 25+ product launches planned.</p>
            </div>

            <div className="pt-4 border-t mt-auto">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <h5 className="font-bold text-emerald-900 text-[10px] uppercase mb-1">Key Insight</h5>
                <p className="text-[10px] text-emerald-800 leading-relaxed italic">Moving into higher-value therapies. A compelling stock to accumulate at current levels.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Column 3: Castrol India */}
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
          <CardHeader className="bg-slate-50 border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-slate-900 rounded-lg text-white">
                <Pin className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="bg-white text-slate-900 border-slate-300">Cash Cow</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">Castrol India</CardTitle>
            <CardDescription className="text-slate-600 font-medium">Reliable Compounder</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Financials</p>
                <p className="text-[11px] text-slate-700 font-medium flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-500" /> Debt-Free</p>
                <p className="text-[11px] text-slate-700 font-medium flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-500" /> High ROE/ROCE</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Returns</p>
                <p className="text-[11px] text-slate-700 font-medium flex items-center gap-1"><Wallet className="w-3 h-3 text-blue-500" /> Top Dividends</p>
                <p className="text-[11px] text-slate-700 font-medium flex items-center gap-1"><TrendingUp className="w-3 h-3 text-blue-500" /> Stable Margins</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Zap className="w-4 h-4 text-amber-500" /> Advantages
              </h4>
              <p className="text-xs text-slate-600">Dominant brand equity. Deep distribution. Ability to pass on cost inflation.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-red-500" /> Risks
              </h4>
              <p className="text-xs text-slate-600">Auto-cycle dependency. Long-term EV adoption transition risk.</p>
            </div>

            <div className="pt-4 border-t mt-auto">
              <div className="p-3 bg-slate-100 rounded-xl border border-slate-200">
                <h5 className="font-bold text-slate-900 text-[10px] uppercase mb-1">Thesis</h5>
                <p className="text-[10px] text-slate-700 leading-relaxed italic">Ideal for core stability. Won't make headlines, but quietly compounds wealth and pays you to wait.</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Scrips;