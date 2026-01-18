"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Pill, 
  Pin, 
  TrendingUp, 
  Globe, 
  ShieldCheck, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  FlaskConical, 
  Handshake, 
  BarChart3, 
  Wallet,
  Landmark,
  Truck,
  ArrowDownCircle,
  Building2,
  Construction,
  Target
} from 'lucide-react';
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
            Real-time insights and long-term conviction analysis for my core holdings.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Grid: First Row */}
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
              <p className="text-xs text-slate-600">Approved for AVT03 (bone health) across Europe and EEA markets, strengthening presence in high-value biosimilars.</p>
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
              <p className="text-xs text-slate-600">Exclusive deals with Formycon (Keytruda biosimilar) and RK Pharma (US oncology), plus cancer testing with Myriad Genetics.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <FlaskConical className="w-4 h-4 text-emerald-500" /> Pipeline
              </h4>
              <p className="text-xs text-slate-600">USFDA approvals for diabetes; Phase-3 success for Saroglitazar. 25+ product launches planned.</p>
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
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-slate-600" /> Financial Strength
              </h4>
              <p className="text-xs text-slate-600">Debt-free, cash-rich balance sheet with high ROE/ROCE and dominant brand equity in engine oils.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Wallet className="w-4 h-4 text-slate-600" /> Dividends
              </h4>
              <p className="text-xs text-slate-600">Top-tier dividend yield. Appeals to income-focused investors looking for core portfolio stability.</p>
            </div>
            <div className="pt-4 border-t mt-auto">
              <div className="p-3 bg-slate-100 rounded-xl border border-slate-200">
                <h5 className="font-bold text-slate-900 text-[10px] uppercase mb-1">Thesis</h5>
                <p className="text-[10px] text-slate-700 leading-relaxed italic">Quietly compounds wealth and pays you to wait. Ideal for capital preservation.</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Grid: Second Row (New Scrips) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Column 4: ITC Update */}
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border-t-4 border-t-red-500">
          <CardHeader className="bg-red-50/50 border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-red-600 rounded-lg text-white">
                <ArrowDownCircle className="w-6 h-6" />
              </div>
              <Badge variant="destructive" className="bg-red-600">Tax Shock Opportunity</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">ITC: Buying the "Tax Shock"</CardTitle>
            <CardDescription className="text-red-600 font-medium">Sharpest single day fall since 2020</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 flex-1">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-red-500" /> The News Impact
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> **Tax Surge:** New 40% GST + Excise Duty on cigarettes (Feb 2026).</li>
                <li className="flex gap-2"><span>•</span> **Price Hike:** Retail prices likely to rise 20-30% to offset burden.</li>
                <li className="flex gap-2"><span>•</span> **Reaction:** Heavy selling pressure as market prices in volume risk.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> The Opportunity
              </h4>
              <p className="text-xs text-slate-600">ITC has a proven history of navigating tax hikes by passing costs to consumers. Treat this 8% correction as a strategic entry.</p>
            </div>
            <div className="pt-4 border-t mt-auto">
              <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                <h5 className="font-bold text-red-900 text-[10px] uppercase mb-1">The Goal</h5>
                <p className="text-[10px] text-red-800 leading-relaxed italic">Accumulate for long-term capital growth and superior dividend yield.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Column 5: HDFC Bank */}
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border-t-4 border-t-blue-600">
          <CardHeader className="bg-blue-50/50 border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Landmark className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="bg-white text-blue-600 border-blue-200">Market Leader</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">HDFC Bank</CardTitle>
            <CardDescription className="text-blue-600 font-medium">Buy on Any Dip</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 flex-1">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-blue-500" /> FY26 Performance
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> **Net Profit:** Grew 11% YoY to ₹18,641 crore.</li>
                <li className="flex gap-2"><span>•</span> **Deposits:** Increased 15.1% YoY to ₹27.10 lakh crore.</li>
                <li className="flex gap-2"><span>•</span> **CASA:** Healthy growth reflects retail trust.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Management
              </h4>
              <p className="text-xs text-slate-600">Leadership strengthening with new group heads (Dec 2025). Morgan Stanley maintains Overweight with ₹1,225 target.</p>
            </div>
            <div className="pt-4 border-t mt-auto">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <h5 className="font-bold text-blue-900 text-[10px] uppercase mb-1">Investment View</h5>
                <p className="text-[10px] text-blue-800 leading-relaxed italic">High-quality franchise with consistent growth. Use corrections to add gradually.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Column 6: Tata Motors CV */}
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border-t-4 border-t-orange-600">
          <CardHeader className="bg-orange-50/50 border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-orange-600 rounded-lg text-white">
                <Truck className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="bg-white text-orange-600 border-orange-200">Industrial Alpha</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">Tata Motors (CV Business)</CardTitle>
            <CardDescription className="text-orange-600 font-medium">Pricing Power & Infra Tailwind</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 flex-1">
            <div className="grid grid-cols-2 gap-2 mb-4">
               <div className="bg-slate-50 p-2 rounded-lg text-center">
                 <p className="text-[8px] font-bold text-slate-400">HCV SHARE</p>
                 <p className="text-xs font-bold text-orange-600">~49%</p>
               </div>
               <div className="bg-slate-50 p-2 rounded-lg text-center">
                 <p className="text-[8px] font-bold text-slate-400">FCF GROWTH</p>
                 <p className="text-xs font-bold text-emerald-600">+125%</p>
               </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-xs uppercase tracking-wider">
                <Construction className="w-4 h-4 text-orange-500" /> Moat & Tech
              </h4>
              <p className="text-[11px] text-slate-600">Iveco acquisition provides global optionality. 44 new products launched in FY25 including Hydrogen/EV CVs.</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-xs uppercase tracking-wider">
                <Target className="w-4 h-4 text-orange-500" /> 10-Year Target
              </h4>
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-100 text-center">
                 <p className="text-sm font-black text-orange-700">₹1,400 – ₹1,600</p>
                 <p className="text-[9px] text-orange-600">Based on 12% CAGR Base Case</p>
              </div>
            </div>

            <div className="pt-4 border-t mt-auto">
              <div className="p-3 bg-slate-900 rounded-xl text-white">
                <h5 className="font-bold text-orange-400 text-[10px] uppercase mb-1">Thinking Path</h5>
                <p className="text-[10px] text-slate-300 leading-relaxed italic">Not a trader's stock. A sleep-well-at-night industrial compounder.</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Grid: Third Row (Wipro & Petronet) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Column 7: Wipro Ltd */}
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border-t-4 border-t-purple-600">
          <CardHeader className="bg-purple-50/50 border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-purple-600 rounded-lg text-white">
                <Zap className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="bg-white text-purple-600 border-purple-200">IT Turnaround</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">Wipro Ltd</CardTitle>
            <CardDescription className="text-purple-600 font-medium">Value-Driven IT Opportunity</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 flex-1">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-purple-500" /> Fundamentals
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> Global IT services leader across digital & cloud.</li>
                <li className="flex gap-2"><span>•</span> Debt light with strong cash flows.</li>
                <li className="flex gap-2"><span>•</span> Consistent dividends & stable shareholder returns.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-emerald-500" /> Why Consider Now
              </h4>
              <p className="text-xs text-slate-600">Rising large deal momentum, focus on AI & automation, and attractive valuation entry ahead of expected IT sector recovery in FY25–26.</p>
            </div>
            <div className="pt-4 border-t mt-auto">
              <div className="p-3 bg-purple-50 rounded-xl border border-purple-100">
                <h5 className="font-bold text-purple-900 text-[10px] uppercase mb-1">Peer View</h5>
                <p className="text-[10px] text-purple-800 leading-relaxed italic">Trading at more attractive valuations than TCS, Infosys & HCLTech, supporting future re-rating.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Column 8: Petronet LNG */}
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border-t-4 border-t-indigo-600">
          <CardHeader className="bg-indigo-50/50 border-b pb-4">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <Building2 className="w-6 h-6" />
              </div>
              <Badge variant="outline" className="bg-white text-indigo-600 border-indigo-200">Petrochemical Expansion</Badge>
            </div>
            <CardTitle className="text-xl leading-tight">Petronet LNG</CardTitle>
            <CardDescription className="text-indigo-600 font-medium">Major Growth Phase Initiated</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 flex-1">
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Landmark className="w-4 h-4 text-indigo-500" /> Project Funding
              </h4>
              <p className="text-xs text-slate-600">Secured a ₹12,000 crore loan from SBI & Bank of Baroda to fund the upcoming Petrochemicals Project at Dahej, Gujarat.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Construction className="w-4 h-4 text-indigo-500" /> Project Highlights
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex gap-2"><span>•</span> 750 KTPA Propane Dehydrogenation (PDH) plant.</li>
                <li className="flex gap-2"><span>•</span> 500 KTPA Polypropylene (PP) plant.</li>
                <li className="flex gap-2"><span>•</span> Enhanced propane & ethane handling facilities.</li>
              </ul>
            </div>
            <div className="pt-4 border-t mt-auto">
              <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                <h5 className="font-bold text-indigo-900 text-[10px] uppercase mb-1">Investment View</h5>
                <p className="text-[10px] text-indigo-800 leading-relaxed italic">Entry into higher margin petrochemicals, diversified revenue mix, and long-term visibility backed by strong promoters (GAIL, IOCL, BPCL & ONGC).</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Column 9: Empty slot for future expansion */}
        <Card className="border-dashed border-2 border-slate-300 bg-slate-50 shadow-none flex items-center justify-center h-full min-h-[300px]">
          <div className="text-center text-slate-400 space-y-2">
            <BarChart3 className="w-8 h-8 mx-auto" />
            <p className="text-sm font-medium">Next Scrip Analysis Coming Soon</p>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Scrips;