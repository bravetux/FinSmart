"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Car, 
  GraduationCap, 
  HandCoins,
  History,
  ArrowRight,
  Sprout,
  Gem,
  Bike,
  Truck,
  ShoppingBag
} from 'lucide-react';

const BankLoans = () => {
  const loans = [
    {
      title: "Home Loan",
      icon: <Home className="w-5 h-5" />,
      desc: "For building or buying a castle for your family to live in!",
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Car Loan",
      icon: <Car className="w-5 h-5" />,
      desc: "For getting that new set of wheels to zoom around town.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Education Loan",
      icon: <GraduationCap className="w-5 h-5" />,
      desc: "To pay for big schools or college to feed your super-brain!",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Personal Loan",
      icon: <ShoppingBag className="w-5 h-5" />,
      desc: "For anything you might need, like a big family celebration or fixed repairs!",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Agri Loan",
      icon: <Sprout className="w-5 h-5" />,
      desc: "Special help for farmers to buy seeds, tools, and big tractors.",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Gold Loan",
      icon: <Gem className="w-5 h-5" />,
      desc: "Using your gold jewelry as a promise to borrow money quickly.",
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Two Wheeler Loan",
      icon: <Bike className="w-5 h-5" />,
      desc: "Specifically for buying a cool bike or a fast scooter.",
      color: "bg-sky-100 text-sky-600"
    },
    {
      title: "Motor Loan",
      icon: <Truck className="w-5 h-5" />,
      desc: "For buying big vehicles like trucks and buses that carry lots of things.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Introduction */}
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <HandCoins className="w-4 h-4" />
            <span>Dream Big</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Loans: Borrowing for Big Dreams
          </h2>
          <p className="text-indigo-50 text-lg max-w-xl">
            Sometimes we want to buy big things like a house or a car, but we don't have enough saved yet. That's when we ask the bank for a loan!
          </p>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10">
          <HandCoins size={300} />
        </div>
      </div>

      <section className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <History className="text-blue-500" /> How Does a Loan Work?
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-blue-600 font-bold">1</div>
            <h4 className="font-bold">Borrow</h4>
            <p className="text-xs text-slate-500">The bank gives you the money you need now.</p>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="text-slate-300 hidden md:block" />
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-blue-600 font-bold">2</div>
            <h4 className="font-bold">Pay Back</h4>
            <p className="text-xs text-slate-500">You pay the bank back a little bit every month.</p>
          </div>
        </div>
        <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
          <p className="text-sm text-blue-800 font-medium">
            <strong>The "Rent" for Money:</strong> When you borrow, you pay back a tiny bit extra called <strong>Interest</strong>. It's like paying "rent" to the bank for using their money!
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loans.map((loan, i) => (
          <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-2", loan.color)}>
                {loan.icon}
              </div>
              <CardTitle className="text-lg">{loan.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-500">{loan.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Helper for class merging
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default BankLoans;