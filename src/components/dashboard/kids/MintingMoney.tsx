"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Banknote, 
  ArrowRight, 
  Repeat, 
  Zap, 
  Coins, 
  Building2,
  ShieldCheck,
  Calculator
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MintingMoney = () => {
  const { currency } = useCurrency();
  const initialDeposit = 10000;
  const reserveRatio = 0.10; // 10%

  // Data for the table (3 cycles)
  const circulationData = [
    { 
      date: "2-Apr-2020", 
      deposit: initialDeposit, 
      reserve: initialDeposit * reserveRatio, 
      loan: initialDeposit * (1 - reserveRatio), 
      round: 1, 
      description: "You deposit money (Bank A)" 
    },
    { 
      date: "5-Apr-2020", 
      deposit: initialDeposit * (1 - reserveRatio), 
      reserve: initialDeposit * (1 - reserveRatio) * reserveRatio, 
      loan: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio), 
      round: 2, 
      description: "Loan 1 is spent and deposited (Bank B)" 
    },
    { 
      date: "10-Apr-2020", 
      deposit: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio), 
      reserve: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio) * reserveRatio, 
      loan: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio) * (1 - reserveRatio), 
      round: 3, 
      description: "Loan 2 is spent and deposited (Bank C)" 
    },
  ];

  const formatCurrency = (amount: number) => `${currency.symbol}${Math.round(amount).toLocaleString()}`;
  const totalCirculation = initialDeposit / reserveRatio;

  // Profit Calculation for 16 months (1.33 years)
  // Assumptions: Loan Interest Rate (LIR) = 10%, Deposit Interest Rate (DIR) = 4%
  // We calculate profit based on the initial deposit and the first loan (Round 1)
  const timeInYears = 16 / 12;
  const loanAmount = circulationData[0].loan; // 9000
  const depositAmount = circulationData[0].deposit; // 10000

  const interestEarned = loanAmount * 0.10 * timeInYears; // 9000 * 0.10 * 1.333 = 1200
  const interestPaid = depositAmount * 0.04 * timeInYears; // 10000 * 0.04 * 1.333 = 533.33

  const netProfit = interestEarned - interestPaid; // 666.67

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>The Money Multiplier</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Minting Money: The Bank's Magic Trick
          </h2>
          <p className="text-indigo-50 text-lg max-w-xl">
            Banks don't just keep your money safe; they use a clever trick to make the economy grow by circulating the same money many times!
          </p>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10">
          <Banknote size={300} />
        </div>
      </div>

      {/* Core Concept */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Repeat className="text-blue-500" /> The Fractional Reserve Rule (10% Reserve)
        </h3>
        <Card className="border-2 border-blue-100 bg-blue-50/50 p-8 rounded-[2.5rem]">
          <div className="space-y-4">
            <p className="text-blue-800 leading-relaxed">
              When you deposit money, the bank only keeps a small part (the <strong>Reserve</strong>, 10%) safe, and loans out the rest. This loaned money is then deposited in another bank, starting the cycle again!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-4 bg-white rounded-xl border border-blue-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-slate-900">{formatCurrency(initialDeposit)}</p>
                <p className="text-xs text-slate-500">Initial Deposit</p>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400" />
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">90%</p>
                <p className="text-xs text-slate-500">Loaned Out</p>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-400" />
              <div className="text-center">
                <p className="text-3xl font-bold text-red-600">10%</p>
                <p className="text-xs text-slate-500">Kept in Reserve</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Circulation Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Coins className="text-emerald-500" /> Circulation Example: The First 3 Rounds
        </h3>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">New Deposit</TableHead>
                <TableHead className="text-right">Loaned Out (90%)</TableHead>
                <TableHead className="text-right">Reserve (10%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {circulationData.map((step, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{step.date}</TableCell>
                  <TableCell>{step.description}</TableCell>
                  <TableCell className="text-right font-medium">{formatCurrency(step.deposit)}</TableCell>
                  <TableCell className="text-right text-emerald-600 font-bold">{formatCurrency(step.loan)}</TableCell>
                  <TableCell className="text-right text-red-600">{formatCurrency(step.reserve)}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-slate-50">
                <TableCell colSpan={2} className="font-bold text-slate-900">Total Potential Money Created</TableCell>
                <TableCell colSpan={3} className="text-right font-extrabold text-xl text-blue-600">
                  {formatCurrency(totalCirculation)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Profit Calculation Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Calculator className="text-purple-500" /> Bank Profit Calculation
        </h3>
        <Card className="bg-purple-50 border-purple-100 p-8 rounded-[2.5rem]">
          <CardTitle className="text-xl text-purple-800 mb-4">
            Profit from Initial Deposit ({circulationData[0].date} to 2-Aug-2021)
          </CardTitle>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 uppercase font-semibold">Interest Earned (10% LIR)</p>
              <p className="text-2xl font-bold text-emerald-600">{formatCurrency(interestEarned)}</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <p className="text-xs text-slate-500 uppercase font-semibold">Interest Paid (4% DIR)</p>
              <p className="text-2xl font-bold text-red-600">{formatCurrency(interestPaid)}</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border-2 border-purple-300">
              <p className="text-xs text-slate-500 uppercase font-semibold">Net Profit (16 Months)</p>
              <p className="text-2xl font-bold text-purple-900">{formatCurrency(netProfit)}</p>
            </div>
          </div>
          <p className="text-xs text-purple-700 mt-6 italic text-center">
            *This is a simplified calculation based on the initial deposit and the first loan created from it over 16 months.
          </p>
        </Card>
      </section>

      {/* Why this is good (Existing Section) */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Building2 className="text-purple-500" /> Why Banks Do This
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">Helps the Economy</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              This process allows people to take loans for houses, cars, and businesses, which helps the whole country grow faster.
            </p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">How Banks Make Profit</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              The bank earns interest on the money they loan out, and they use a small part of that profit to pay you interest on your savings!
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MintingMoney;