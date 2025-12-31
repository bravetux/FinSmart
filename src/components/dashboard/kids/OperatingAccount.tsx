"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserPlus, 
  Smartphone, 
  BookOpen, 
  CreditCard, 
  PenTool, 
  ShieldCheck,
  Globe,
  Zap,
  CheckCircle2
} from 'lucide-react';

const OperatingAccount = () => {
  const steps = [
    { 
      title: "Grab your IDs", 
      desc: "Ask your parents for your Aadhar card or Birth Certificate. They will also need their PAN card!", 
      icon: <ShieldCheck className="w-5 h-5" /> 
    },
    { 
      title: "Visit the Bank", 
      desc: "Go to a bank branch or open it on a tablet at home. It's like signing up for a new game!", 
      icon: <Globe className="w-5 h-5" /> 
    },
    { 
      title: "Fill the Forms", 
      desc: "The bank will ask for your name and photo. This is called 'KYC' – which means 'Know Your Customer'.", 
      icon: <PenTool className="w-5 h-5" /> 
    },
    { 
      title: "First Deposit", 
      desc: "Put your first few coins or notes into the account to activate the magic!", 
      icon: <Zap className="w-5 h-5" /> 
    }
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-indigo-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <UserPlus className="w-4 h-4" />
            <span>Getting Started</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            How to Open Your First Account
          </h2>
          <p className="text-indigo-50 text-lg max-w-xl">
            Ready to become a bank member? Opening an account is your first step toward financial freedom!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Steps Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">4 Steps to Your New Account</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <Card key={i} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
                  {step.icon}
                </div>
                <CardTitle className="text-base">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Superpowers Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold text-slate-900">Your Banking Superpowers</h3>
          <p className="text-slate-500">Once your account is open, you get all these cool tools!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Passbook</CardTitle>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">The Money Diary</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">A little book that records every time you put money in or take it out. It's the story of your savings!</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Mobile Banking</CardTitle>
                <p className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">Bank in your Pocket</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Use a phone app to check how much money you have, even while you're at the playground!</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Debit Card</CardTitle>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">The Magic Plastic</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Use this at an ATM to get cash or at the store to pay for toys. It uses only the money you have saved.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <PenTool className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Cheque Book</CardTitle>
                <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Paper Money</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">You can write a special note (a cheque) to pay someone big amounts of money without carrying cash.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Netbanking</CardTitle>
                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Internet Power</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">Log in to the bank's website to send money to friends or pay bills from your computer.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Credit Card</CardTitle>
                <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">The Promise Card</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 leading-relaxed">
                This lets you "borrow" money for a month. You must pay it back on time, or the bank gets unhappy! Only for grown-ups.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Tip */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] flex items-center gap-6">
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
          <ShieldCheck className="w-8 h-8 text-emerald-400" />
        </div>
        <div>
          <h4 className="text-xl font-bold">The Golden Rule of Safety</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Never, ever share your <strong>PIN</strong> or <strong>Password</strong> with anyone, not even someone who says they work at the bank!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OperatingAccount;