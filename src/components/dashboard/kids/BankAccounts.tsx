"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PiggyBank, 
  Store, 
  TrendingUp, 
  ArrowRightLeft,
  CheckCircle2,
  Zap,
  Info,
  ShieldCheck,
  XCircle,
  Users,
  Baby,
  UserCheck
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCurrency } from "@/context/CurrencyContext";

const BankAccounts = () => {
  const [selectedAccount, setSelectedAccount] = useState<any>(null);
  const { currency } = useCurrency();

  const accountsData = [
    {
      id: 'savings',
      title: "Savings Account",
      label: "The Growing Piggy Bank",
      icon: <PiggyBank className="w-8 h-8" />,
      color: "blue",
      details: "This is a safe place to keep your money while earning a little extra 'Thank You' gift from the bank called interest.",
      types: [
        { name: "Kids' (Minor) Savings", desc: "Specially for children under 18 to learn how to save.", icon: <Baby className="w-4 h-4" /> },
        { name: "Regular Savings", desc: "For grown-ups and students to manage daily money.", icon: <UserCheck className="w-4 h-4" /> },
        { name: "Senior Citizens Savings", desc: "For grandparents, usually with a bigger 'Interest' gift!", icon: <Users className="w-4 h-4" /> }
      ],
      dos: ["Put your gift money in here.", "Check your balance to see it grow.", "Keep saving for your big goals!"],
      donts: ["Don't take money out for every small candy.", "Don't share your account number with strangers."],
      regulations: `The RBI (The Big Boss Bank) says your money is 100% safe here up to ${currency.symbol}5 Lakhs, even if the bank has a bad day!`
    },
    {
      id: 'current',
      title: "Current Account",
      label: "The Business Wallet",
      icon: <Store className="w-8 h-8" />,
      color: "purple",
      details: "Built for businesses and shopkeepers who need to move money many times a day without any limits.",
      types: [
        { name: "Sole Proprietor", desc: "For small shop owners like your local grocer.", icon: <Store className="w-4 h-4" /> },
        { name: "Company Account", desc: "For big offices with many employees.", icon: <Users className="w-4 h-4" /> }
      ],
      dos: ["Use it to pay your shop's electricity bills.", "Receive payments from customers quickly."],
      donts: ["Don't expect to earn 'Interest' gifts here.", "Don't use it as a personal piggy bank."],
      regulations: "Banks must follow strict 'Know Your Business' rules to make sure no one is using the account for naughty things."
    }
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Introduction */}
      <div className="bg-emerald-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <PiggyBank className="w-4 h-4" />
            <span>Pick Your Pocket</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Different Types of Accounts
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Click on an account to see its secret versions and the rules of the game!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {accountsData.map((acc) => (
          <Card 
            key={acc.id} 
            className="border-none shadow-lg bg-white overflow-hidden group cursor-pointer hover:scale-105 transition-all"
            onClick={() => setSelectedAccount(acc)}
          >
            <div className={cn(
              "h-2",
              acc.color === 'blue' ? "bg-blue-500" : "bg-purple-500"
            )} />
            <CardHeader>
              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors",
                acc.color === 'blue' ? "bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white" : "bg-purple-50 text-purple-500 group-hover:bg-purple-500 group-hover:text-white"
              )}>
                {acc.icon}
              </div>
              <CardTitle className="text-2xl">{acc.title}</CardTitle>
              <p className={cn(
                "text-sm font-bold uppercase tracking-widest",
                acc.color === 'blue' ? "text-blue-600" : "text-purple-600"
              )}>{acc.label}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                {acc.details}
              </p>
              <div className="pt-2 flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                View Secret Details <Info className="w-3 h-3" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Info Dialog */}
      <Dialog open={!!selectedAccount} onOpenChange={() => setSelectedAccount(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-slate-100 rounded-2xl text-primary">
                {selectedAccount?.icon}
              </div>
              <div>
                <DialogTitle className="text-2xl">{selectedAccount?.title}</DialogTitle>
                <DialogDescription className="font-bold text-primary/60">{selectedAccount?.label}</DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-8 pt-4">
            {/* Sub-types Section */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" /> Different Flavors of this Account
              </h4>
              <div className="grid gap-3">
                {selectedAccount?.types.map((type: any, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary">
                      {type.icon}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-900">{type.name}</p>
                      <p className="text-xs text-slate-500">{type.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dos and Don'ts */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Good Habits
                </h4>
                <ul className="space-y-3">
                  {selectedAccount?.dos.map((item: string, i: number) => (
                    <li key={i} className="flex gap-2 text-sm text-emerald-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> Things to Avoid
                </h4>
                <ul className="space-y-3">
                  {selectedAccount?.donts.map((item: string, i: number) => (
                    <li key={i} className="flex gap-2 text-sm text-red-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Regulation */}
            <div className="bg-slate-900 text-white p-6 rounded-[2rem] relative overflow-hidden">
              <h4 className="font-bold mb-3 flex items-center gap-2 relative z-10">
                <ShieldCheck className="w-5 h-5 text-emerald-400" /> The "Big Boss" Rule
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed relative z-10 italic">
                "{selectedAccount?.regulations}"
              </p>
              <Zap className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Helper for class merging
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default BankAccounts;