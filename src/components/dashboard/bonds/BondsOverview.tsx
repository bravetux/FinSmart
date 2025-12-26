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
  ArrowUpRight,
  Landmark,
  Briefcase,
  History,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const topBonds = [
  {
    issuer: "KRAZYBEE SERVICES LIMITED",
    coupon: "10.50%",
    maturity: "Dec 2027",
    rating: "CRISIL A",
    yield: "11.30%",
    price: 99616.07,
    type: "Secured - Regular"
  },
  {
    issuer: "MANBA FINANCE LIMITED",
    coupon: "10.95%",
    maturity: "Oct 2027",
    rating: "CARE BBB+",
    yield: "11.25%",
    price: 100648.00,
    type: "Secured - Regular"
  },
  {
    issuer: "INDEL MONEY LIMITED",
    coupon: "9.75%",
    maturity: "Oct 2027",
    rating: "IVR A-",
    yield: "11.25%",
    price: 983.30,
    type: "Secured - Regular"
  }
];

const BondsOverview = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap gap-3">
             <Badge className="bg-blue-500/30 text-blue-100 hover:bg-blue-500/40 border-none px-3 py-1">
               350K+ Downloads
             </Badge>
             <Badge className="bg-emerald-500/30 text-emerald-100 hover:bg-emerald-500/40 border-none px-3 py-1">
               Rated & Listed
             </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
            Earn Up to 12%* returns on Corporate Bonds in India
          </h2>
          <p className="text-blue-100 text-lg max-w-xl">
            Diversify beyond stocks and FDs with lower risk and higher yields. Start investing with just {currency.symbol}10,000.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8">
              Start Investing Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Download App
            </Button>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 opacity-20 hidden md:block">
          <Landmark size={240} strokeWidth={0.5} />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-slate-900">{currency.symbol}5,000 Cr+*</p>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Investment Done</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-slate-900">3,50,000+*</p>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Registered Users</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
          <p className="text-3xl font-bold text-slate-900">{currency.symbol}10,000</p>
          <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-1">Min. Investment</p>
        </div>
      </div>

      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">What are Corporate Bonds?</h3>
          <p className="text-slate-600 leading-relaxed">
            Corporate bonds are SEBI regulated fixed-income debt securities issued by Companies, State Entities, NBFC’s or Banks to raise funds for business expansion, operations, or refinancing debt.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium">
            When you invest, you're essentially lending money to the issuer in exchange for regular interest payments (coupon) and the return of your principal at maturity.
          </p>
        </div>

        <Card className="bg-slate-50 border-none shadow-inner p-8 relative">
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-xl">
             <Info className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 mb-6">Example Investment</h4>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
              <span className="text-slate-500">You Invest</span>
              <span className="text-xl font-bold text-primary">{currency.symbol}1,00,000</span>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="text-slate-300 w-8 h-8" />
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border-l-4 border-emerald-500">
              <span className="text-slate-500">Annual Coupon (10%)</span>
              <span className="text-xl font-bold text-emerald-600">{currency.symbol}10,000 / year</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-6 text-center italic">
            *Receive interest until the bond matures, then get your {currency.symbol}1,00,000 back.
          </p>
        </Card>
      </section>

      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold">Why Invest in Corporate Bonds?</h3>
          <p className="text-slate-500">Better risk-reward compared to traditional investments.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <TrendingUp className="text-emerald-500" />, title: "Higher Returns", desc: "Generally offer higher fixed returns than traditional fixed investments and Government Bonds." },
            { icon: <ShieldCheck className="text-blue-500" />, title: "Portfolio Diversification", desc: "Not affected by equity market volatility making them ideal for balanced returns." },
            { icon: <Landmark className="text-purple-500" />, title: "SEBI-Regulated", desc: "Listed Corporate Bonds are well-regulated making them a trusted choice for investors." },
            { icon: <History className="text-orange-500" />, title: "Consistent Income", desc: "Provide regular income through fixed interest payments paid at predictable intervals." },
            { icon: <Wallet className="text-slate-700" />, title: "Accessible", desc: "Now easily accessible to retail investors with minimum investments as low as Rs.10,000." }
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

      <section className="bg-slate-50 rounded-[2.5rem] p-12">
        <h3 className="text-3xl font-bold text-center mb-12">Who Should Invest?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Briefcase />, title: "Salaried Professionals", desc: "Secure a steady source of passive income." },
            { icon: <Users />, title: "Retirees & Risk Averse", desc: "Get fixed returns without stock market volatility." },
            { icon: <TrendingUp />, title: "HNI & Wealth Builders", desc: "Diversify into fixed-income for portfolio stability." },
            { icon: <ShieldCheck />, title: "First-Time Investors", desc: "A safer entry into the investment market." }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white text-primary flex items-center justify-center mx-auto shadow-sm">{item.icon}</div>
              <h4 className="font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Top Corporate Bonds Available</h3>
          <Button variant="ghost" className="text-primary gap-2">View All Bonds <ArrowRight className="w-4 h-4" /></Button>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {topBonds.map((bond, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition-all border-slate-200">
              <CardHeader className="bg-slate-50/50 border-b pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-white border-slate-300 text-[10px]">{bond.rating}</Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full"><ArrowUpRight className="w-4 h-4" /></Button>
                </div>
                <CardTitle className="text-md leading-tight">{bond.issuer}</CardTitle>
                <CardDescription className="text-xs">{bond.type}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div><p className="text-[10px] text-slate-400 uppercase font-bold">Coupon</p><p className="font-bold text-slate-900">{bond.coupon}</p></div>
                  <div><p className="text-[10px] text-slate-400 uppercase font-bold">Maturity</p><p className="font-bold text-slate-900">{bond.maturity}</p></div>
                  <div><p className="text-[10px] text-slate-400 uppercase font-bold">Yield</p><p className="font-bold text-emerald-600">{bond.yield}</p></div>
                  <div><p className="text-[10px] text-slate-400 uppercase font-bold">Price</p><p className="font-bold text-slate-900">{currency.symbol}{bond.price.toLocaleString()}</p></div>
                </div>
                <Button className="w-full">Invest Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto space-y-8">
        <h3 className="text-3xl font-bold text-center flex items-center justify-center gap-3"><HelpCircle className="w-8 h-8 text-primary" /> FAQs</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Which is the best corporate bond in India?</AccordionTrigger>
            <AccordionContent>There is no single “best” corporate bond, as it depends on your investment goals and risk appetite.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is corporate bond better than FD?</AccordionTrigger>
            <AccordionContent>Corporate bonds often offer higher interest rates than bank FDs but carry slightly higher risk.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What are the risks of corporate bonds?</AccordionTrigger>
            <AccordionContent>Primary risks include Credit Risk, Interest Rate Risk, and Liquidity Risk.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default BondsOverview;