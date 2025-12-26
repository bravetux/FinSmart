"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  ShieldCheck, 
  Wallet, 
  Users, 
  ArrowRight, 
  Info, 
  Landmark,
  Briefcase,
  History,
  AlertCircle,
  HelpCircle,
  Zap,
  RefreshCcw,
  ReceiptText,
  MousePointer2
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const BondsOverview = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-blue-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap gap-3">
             <Badge className="bg-blue-500/30 text-blue-100 hover:bg-blue-500/40 border-none px-3 py-1">
               Debt Category
             </Badge>
             <Badge className="bg-emerald-500/30 text-emerald-100 hover:bg-emerald-500/40 border-none px-3 py-1">
               High Credit Rating
             </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
            Mastering Corporate Bond Funds
          </h2>
          <p className="text-blue-100 text-lg max-w-xl">
            Learn how to lend to the nation's strongest corporations and earn stable, superior returns.
          </p>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 opacity-20 hidden md:block">
          <Landmark size={240} strokeWidth={0.5} />
        </div>
      </section>

      {/* Introduction */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">What are Corporate Bond Funds?</h3>
          <p className="text-slate-600 leading-relaxed text-lg">
            Corporate bond funds are a sub of the debt funds category that lend at least <strong>80% of their money</strong> to corporations with the best credit ratings possible.
          </p>
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <p className="text-blue-800 leading-relaxed">
              This rating is only granted to organisations that are financially sound and have a good likelihood of repaying lenders on schedule.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-none bg-indigo-50 shadow-sm">
            <CardContent className="pt-6">
              <TrendingUp className="w-8 h-8 text-indigo-600 mb-2" />
              <h4 className="font-bold text-slate-900">8-10% Yield</h4>
              <p className="text-xs text-slate-500">Average expected returns</p>
            </CardContent>
          </Card>
          <Card className="border-none bg-emerald-50 shadow-sm">
            <CardContent className="pt-6">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-2" />
              <h4 className="font-bold text-slate-900">High Purity</h4>
              <p className="text-xs text-slate-500">80% in top-rated bonds</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold">Features of Corporate Bond Mutual Funds</h3>
          <p className="text-slate-500">Why they stand out in the debt market.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: <TrendingUp className="text-emerald-500" />, 
              title: "Superior Returns", 
              desc: "Ensure significantly higher returns (8-10%) than government-held bonds which only provide approximately half." 
            },
            { 
              icon: <Zap className="text-blue-500" />, 
              title: "High Liquidity", 
              desc: "Short-term in nature and can be sold easily, allowing you to convert investment to cash whenever needed." 
            },
            { 
              icon: <ShieldCheck className="text-purple-500" />, 
              title: "Lower Risk", 
              desc: "Associated risk is lower than shares as these pose a financial obligation (liability) to the company." 
            },
            { 
              icon: <History className="text-orange-500" />, 
              title: "Diverse Tenures", 
              desc: "Distinguished by fund tenure and credit ratings, catering to short, medium, and long-term goals." 
            }
          ].map((feature, i) => (
            <Card key={i} className="border-slate-100 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-2">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent><p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Types and Working */}
      <div className="grid lg:grid-cols-2 gap-8">
        <section className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-600" />
            Types of Corporate Bond Funds
          </h3>
          <div className="space-y-4">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">1</div>
              <div>
                <h4 className="font-bold">Top-rated Public Sector</h4>
                <p className="text-sm text-slate-500 mt-1">Companies with incredibly high CRISIL ratings, generally Navratnas.</p>
              </div>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">2</div>
              <div>
                <h4 className="font-bold">AA- Rated Entities</h4>
                <p className="text-sm text-slate-500 mt-1">Companies having slightly lower but still stable credit ratings.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <RefreshCcw className="w-6 h-6 text-emerald-600" />
            How They Work?
          </h3>
          <Card className="border-emerald-100 bg-emerald-50/30">
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                They operate just like standard mutual funds. An increase in the value of a corporate bond in the portfolio increases the <strong>NAV</strong> of the fund, thereby realizing profits.
              </p>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl text-xs font-medium text-emerald-800 border border-emerald-100">
                <AlertCircle className="w-4 h-4" />
                A fall in NAV value has a contrary effect on the aggregate value.
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* How to Invest */}
      <section className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">How to Invest?</h3>
            <p className="text-slate-400">You can invest through FinSmart or other asset management companies.</p>
            <div className="space-y-4">
              {[
                "Sign up or register with the application",
                "Complete the KYC procedure",
                "Pick mutual funds of your choice",
                "Deposit the funds for your investment"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">{i+1}</div>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col justify-center text-center space-y-4">
            <MousePointer2 className="w-12 h-12 text-blue-400 mx-auto" />
            <h4 className="text-xl font-bold">Ready to Diversify?</h4>
            <p className="text-sm text-slate-400">Start your corporate debt journey today with fixed returns and low risk.</p>
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 mt-4">Get Started</Button>
          </div>
        </div>
      </section>

      {/* Taxation Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <ReceiptText className="w-6 h-6 text-orange-600" />
          Taxation Rules
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-orange-100 bg-orange-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Short-Term (STCG)</CardTitle>
              <CardDescription>Holding &lt; 3 Years</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Tax is calculated using your <strong>applicable income tax slab rate</strong>.</p>
            </CardContent>
          </Card>
          <Card className="border-orange-100 bg-orange-50/50">
            <CardHeader>
              <CardTitle className="text-lg">Long-Term (LTCG)</CardTitle>
              <CardDescription>Holding &gt; 3 Years</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Taxed at <strong>20%</strong> after the indexation benefit is applied.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto space-y-8">
        <h3 className="text-3xl font-bold text-center flex items-center justify-center gap-3">
          <HelpCircle className="w-8 h-8 text-indigo-600" /> FAQs
        </h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is corporate bond fund meaning?</AccordionTrigger>
            <AccordionContent>
              A corporate bond is a type of financial security that a corporation issues to raise funds for business requirements. Corporate bond funds are mutual funds that primarily invest in these securities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Who should invest in corporate bonds?</AccordionTrigger>
            <AccordionContent>
              These funds are likely to suit investors who are risk-averse, seek diversification, and those looking for a steady source of income.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What is the investment tenure of a corporate bond?</AccordionTrigger>
            <AccordionContent>
              Such mutual funds invest in medium to long-term corporate debentures and bonds. Consider it as a long-term investment instrument.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Are corporate bonds profitable?</AccordionTrigger>
            <AccordionContent>
              Yes. Bond prices can grow and fall in the market. If a mutual fund purchases a bond and its price rises, it can make money in addition to interest income. However, it can also go the other way.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Why Do Companies Issue Corporate Bonds?</AccordionTrigger>
            <AccordionContent>
              Companies issue them to raise funds from investors for business expansion or debt financing, which is common alongside stock issuance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default BondsOverview;