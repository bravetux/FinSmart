"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  TrendingUp, 
  ShieldCheck, 
  LineChart,
  Zap,
  Globe
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Path2BuildWealth = () => {
  const navigate = useNavigate();

  const paths = [
    {
      title: "Step 1: Financial Foundation",
      desc: "Clear high-interest debt and build an emergency fund covering 6 months of expenses.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Step 2: Protection",
      desc: "Secure your future with adequate health and term insurance to protect your wealth from shocks.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Step 3: Systematic Growth",
      desc: "Start SIPs in diversified mutual funds or index funds to benefit from compounding.",
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "Step 4: Diversification",
      desc: "Expand into Gold, Real Estate (REITs), and Global markets to balance your portfolio.",
      icon: <Globe className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Button 
          variant="ghost" 
          className="gap-2 mb-4" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Button>

        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
            <LineChart className="w-4 h-4" />
            <span>The Roadmap to Freedom</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Your Path to Build Wealth</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Wealth isn't built overnight. It's a journey of discipline, patience, and smart decisions.
          </p>
        </header>

        <div className="grid gap-6 mt-12">
          {paths.map((path, i) => (
            <Card key={i} className="border-none shadow-lg overflow-hidden flex flex-col md:flex-row items-center">
              <div className={`p-8 ${path.color} flex items-center justify-center`}>
                {path.icon}
              </div>
              <CardContent className="p-8 flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{path.title}</h3>
                <p className="text-slate-600">{path.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-bold">Ready to take the first step?</h2>
            <p className="text-slate-400">Jump into your learning dashboard to start mastering these concepts.</p>
            <div className="pt-4">
              <Button size="lg" className="px-10" onClick={() => navigate('/dashboard')}>
                Go to Dashboard
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
        </section>
      </div>
    </div>
  );
};

export default Path2BuildWealth;