"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Landmark, 
  Users, 
  Bus, 
  TreeDeciduous, 
  Shield,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const CommunityPot = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Users className="w-4 h-4" />
            <span>Sharing for the Community</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Community Pot: Understanding Taxes
          </h2>
          <p className="text-blue-50 text-lg max-w-xl">
            Taxes are small contributions everyone makes so we can all enjoy big things together, like roads, schools, and parks!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* The Cookie Tax Analogy */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Landmark className="text-purple-500" /> The Cookie Tax Analogy
        </h3>
        <Card className="border-2 border-purple-100 bg-purple-50/50 p-8 rounded-[2.5rem]">
          <div className="grid md:grid-cols-3 gap-6 text-center items-center">
            <div className="space-y-2">
              <p className="text-4xl">🍪</p>
              <h4 className="font-bold">Your Earnings</h4>
              <p className="text-sm text-slate-600">You bake 10 cookies.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <ArrowRight className="w-8 h-8 text-purple-400" />
              <p className="text-xs font-bold text-purple-600 mt-2">Contribute 1 Cookie (Tax)</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl">🏗️</p>
              <h4 className="font-bold">The Playground</h4>
              <p className="text-sm text-slate-600">All cookies are used to build a big playground for everyone!</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Where Taxes Go */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <CheckCircle2 className="text-emerald-500" /> What Taxes Pay For
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md bg-white p-6 text-center">
            <Bus className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Roads & Transport</CardTitle>
            <p className="text-xs text-slate-500">Making sure buses and cars can drive safely.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 text-center">
            <TreeDeciduous className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Parks & Clean Air</CardTitle>
            <p className="text-xs text-slate-500">Keeping our environment healthy and beautiful.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 text-center">
            <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <CardTitle className="text-lg">Safety & Police</CardTitle>
            <p className="text-xs text-slate-500">Paying the people who keep us safe at night.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CommunityPot;