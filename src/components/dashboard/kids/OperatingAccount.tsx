"use client";

import React, { useState } from 'react';
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
  CheckCircle2,
  XCircle,
  Info,
  ShieldAlert,
  X
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const OperatingAccount = () => {
  const [selectedPower, setSelectedPower] = useState<any>(null);

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

  const superpowers = [
    {
      id: 'passbook',
      title: "Passbook",
      label: "The Money Diary",
      icon: <BookOpen className="w-6 h-6" />,
      color: "blue",
      details: "A small notebook where the bank prints every transaction. It's like a history book for your money!",
      dos: ["Keep it in a safe, dry place.", "Get it updated at the bank every month.", "Check if all numbers are correct."],
      donts: ["Don't scribble on the pages.", "Don't share it with strangers.", "Don't leave it lying around."],
      regulations: "This is your primary record. If you lose it, you must tell the bank immediately to get a new one."
    },
    {
      id: 'mobile',
      title: "Mobile Banking",
      label: "Bank in your Pocket",
      icon: <Smartphone className="w-6 h-6" />,
      color: "purple",
      details: "An app on your phone that lets you check your balance and send money without going to the bank.",
      dos: ["Use a strong password or fingerprint.", "Log out every time you finish.", "Check your balance once a week."],
      donts: ["Don't use public Wi-Fi (like at a cafe).", "Don't share your login details.", "Don't click on strange links in messages."],
      regulations: "Only use the bank's official app. The bank will never ask for your password via phone or email."
    },
    {
      id: 'debit',
      title: "Debit Card",
      label: "The Magic Plastic",
      icon: <CreditCard className="w-6 h-6" />,
      color: "emerald",
      details: "A card used to take cash from ATMs or pay at shops. It uses money you ALREADY have in your account.",
      dos: ["Keep your PIN secret (only you should know!).", "Cover the keypad while typing your PIN.", "Keep the card in your wallet."],
      donts: ["Don't write the PIN on the card.", "Don't let anyone else use your card.", "Don't scratch the black stripe or chip."],
      regulations: "If your card is lost, call the bank 'Hotline' to block it instantly. This prevents anyone else from using it."
    },
    {
      id: 'cheque',
      title: "Cheque Book",
      label: "Paper Money",
      icon: <PenTool className="w-6 h-6" />,
      color: "orange",
      details: "Special papers used to pay big amounts. You write the amount and sign it, and the bank pays for you.",
      dos: ["Write the name and date carefully.", "Draw two lines on the top corner for safety.", "Keep the record slip updated."],
      donts: ["Don't leave blank spaces after the name or amount.", "Don't sign a blank cheque (very dangerous!).", "Don't fold or crumple the cheques."],
      regulations: "A cheque is a legal promise. Writing a cheque when you don't have enough money is a serious mistake!"
    },
    {
      id: 'netbanking',
      title: "Netbanking",
      label: "Internet Power",
      icon: <Globe className="w-6 h-6" />,
      color: "indigo",
      details: "Using the bank's website to manage your account from a computer. Very powerful and fast!",
      dos: ["Always type the bank's website address yourself.", "Look for the 'Padlock' icon in the browser.", "Change your password regularly."],
      donts: ["Don't use 'Remember Password' on public computers.", "Don't share your OTP (One Time Password).", "Don't ignore bank alert emails."],
      regulations: "Always use Two-Factor Authentication (OTP). This is a second layer of safety required by the RBI."
    },
    {
      id: 'credit',
      title: "Credit Card",
      label: "The Promise Card",
      icon: <CreditCard className="w-6 h-6" />,
      color: "red",
      details: "Lets you borrow money to pay now and pay back later. Only for grown-ups because it needs discipline!",
      dos: ["Pay the full bill on time.", "Track your spending every day.", "Use it only for things you can afford."],
      donts: ["Don't treat it like free money.", "Don't skip a payment (you'll have to pay extra!).", "Don't reach your maximum limit."],
      regulations: "The bank charges very high interest if you don't pay on time. It's a short-term loan meant for convenience."
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
          <p className="text-slate-500">Click on any card to learn the secret rules and safety tips!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {superpowers.map((power) => (
            <Card 
              key={power.id} 
              className="border-none shadow-md bg-white hover:scale-105 transition-all cursor-pointer group"
              onClick={() => setSelectedPower(power)}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                  power.color === 'blue' && "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                  power.color === 'purple' && "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
                  power.color === 'emerald' && "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
                  power.color === 'orange' && "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
                  power.color === 'indigo' && "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
                  power.color === 'red' && "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
                )}>
                  {power.icon}
                </div>
                <div>
                  <CardTitle className="text-lg">{power.title}</CardTitle>
                  <p className={cn(
                    "text-[10px] font-bold uppercase tracking-widest",
                    power.color === 'blue' && "text-blue-600",
                    power.color === 'purple' && "text-purple-600",
                    power.color === 'emerald' && "text-emerald-600",
                    power.color === 'orange' && "text-orange-600",
                    power.color === 'indigo' && "text-indigo-600",
                    power.color === 'red' && "text-red-600",
                  )}>{power.label}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{power.details}</p>
                <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Learn More <Info className="w-3 h-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Detailed Info Dialog */}
      <Dialog open={!!selectedPower} onOpenChange={() => setSelectedPower(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-slate-100 rounded-2xl text-primary">
                {selectedPower?.icon}
              </div>
              <div>
                <DialogTitle className="text-2xl">{selectedPower?.title}</DialogTitle>
                <DialogDescription className="font-bold text-primary/60">{selectedPower?.label}</DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-8 pt-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-500" /> What is it?
              </h4>
              <p className="text-slate-600 leading-relaxed">{selectedPower?.details}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> The "Do" List
                </h4>
                <ul className="space-y-3">
                  {selectedPower?.dos.map((item: string, i: number) => (
                    <li key={i} className="flex gap-2 text-sm text-emerald-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> The "Don't" List
                </h4>
                <ul className="space-y-3">
                  {selectedPower?.donts.map((item: string, i: number) => (
                    <li key={i} className="flex gap-2 text-sm text-red-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden">
              <h4 className="font-bold mb-3 flex items-center gap-2 relative z-10">
                <ShieldAlert className="w-5 h-5 text-amber-400" /> Safety Rule (Regulation)
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed relative z-10">
                {selectedPower?.regulations}
              </p>
              <ShieldCheck className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5" />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Security Footer Tip */}
      <div className="bg-slate-100 text-slate-900 p-8 rounded-[2.5rem] flex items-center gap-6 border border-slate-200">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
          <ShieldCheck className="w-8 h-8 text-emerald-500" />
        </div>
        <div>
          <h4 className="text-xl font-bold">The Golden Rule of Safety</h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            Never, ever share your <strong>PIN</strong> or <strong>Password</strong> with anyone, not even someone who says they work at the bank!
          </p>
        </div>
      </div>
    </div>
  );
};

// Helper for class merging if not available globally in this specific file
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default OperatingAccount;