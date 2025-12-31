"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  Smartphone, 
  ShieldCheck, 
  Lock,
  Zap,
  Banknote
} from 'lucide-react';

const BankServices = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Introduction */}
      <div className="bg-purple-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>Digital Magic</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Cool Things Banks Do For You
          </h2>
          <p className="text-purple-50 text-lg max-w-xl">
            Besides keeping your money safe, banks have some pretty cool gadgets and services that make life easier!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-none shadow-md bg-white">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Banknote className="w-6 h-6" />
            </div>
            <div>
              <CardTitle>ATMs</CardTitle>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">The Cash Machine</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              Think of an ATM as a magic cash box. You put in your card, type your secret code (PIN), and it gives you cash from your account—even in the middle of the night!
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <CardTitle>UPI & Mobile Apps</CardTitle>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Digital Payments</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              In India, we have UPI! It lets your parents pay for ice cream or toys just by scanning a code with their phone. It moves money from their bank to the shop instantly.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <CardTitle>Safe Lockers</CardTitle>
              <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">The Fortress</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              Some people keep their gold or important documents in a "Locker" inside the bank's big steel vault. It's the safest place in the world!
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <CardTitle>Debit Cards</CardTitle>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Plastic Money</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 leading-relaxed">
              Instead of carrying a heavy bag of coins, people carry a small plastic card. When they swipe it, the bank pays for them using their own money!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankServices;