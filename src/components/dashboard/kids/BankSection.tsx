"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  ShieldCheck, 
  CreditCard, 
  Coins,
  ArrowRight,
  Landmark,
  UserCheck,
  TrendingUp
} from 'lucide-react';

const BankSection = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-sky-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Building2 className="w-4 h-4" />
            <span>Safe & Sound</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Meet the Bank: Your Money's Home
          </h2>
          <p className="text-sky-50 text-lg max-w-xl">
            A bank is more than just a big building. It's a super-safe place that looks after your money and helps you use it easily.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-8 opacity-20 hidden md:block">
          <Landmark size={200} />
        </div>
      </div>

      {/* RBI - The Principal */}
      <section className="bg-indigo-900 text-white rounded-[2.5rem] p-8 md:p-12 border border-indigo-800 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-24 h-24 rounded-3xl bg-indigo-500 flex items-center justify-center shrink-0 shadow-lg">
            <Landmark className="w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">RBI: The "Big Boss" of All Banks</h3>
            <p className="text-indigo-200 leading-relaxed">
              In India, the <strong>Reserve Bank of India (RBI)</strong> is like the <strong>Principal of a school</strong>. 
              Every other bank is like a student. The RBI makes the rules to make sure all banks behave properly and keep your money safe!
            </p>
            <div className="flex gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider">👮 Makes the Rules</div>
              <div className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider">🏦 Watches Everyone</div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Services */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">What Does a Bank Do For You?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Savings Account</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-500 leading-relaxed">A safe digital "locker" for your money where it stays until you need it.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                <CreditCard className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Cards & ATMs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-500 leading-relaxed">Magic cards that let you take money out from machines (ATMs) anytime!</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Earning Interest</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-500 leading-relaxed">The bank gives you a tiny "Thank You" gift of extra money for keeping your savings with them.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                <UserCheck className="w-5 h-5" />
              </div>
              <CardTitle className="text-base">Helping with Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-500 leading-relaxed">Lending money to people who need to buy big things, like a house or a car.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works simple flow */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 text-center border border-slate-100">
        <h3 className="text-xl font-bold mb-8">How the Bank Keeps the World Moving</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="space-y-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Coins className="text-emerald-500" />
            </div>
            <p className="text-xs font-bold">You Put Money In</p>
          </div>
          <ArrowRight className="hidden md:block text-slate-300" />
          <div className="space-y-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Building2 className="text-blue-500" />
            </div>
            <p className="text-xs font-bold">Bank Keeps it Safe</p>
          </div>
          <ArrowRight className="hidden md:block text-slate-300" />
          <div className="space-y-2">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
              <UserCheck className="text-purple-500" />
            </div>
            <p className="text-xs font-bold">Bank Lends to Others</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankSection;