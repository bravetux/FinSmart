"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Car, 
  GraduationCap, 
  HandCoins,
  History,
  ArrowRight
} from 'lucide-react';

const BankLoans = () => {
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
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-blue-600">1</div>
            <h4 className="font-bold">Borrow</h4>
            <p className="text-xs text-slate-500">The bank gives you the money you need now.</p>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="text-slate-300 hidden md:block" />
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-blue-600">2</div>
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
              <Home className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Home Loan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-500">For building or buying a castle for your family to live in!</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
              <Car className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Car Loan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-500">For getting that new set of wheels to zoom around town.</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
              <GraduationCap className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Education Loan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-500">To pay for big schools or college to feed your super-brain!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankLoans;