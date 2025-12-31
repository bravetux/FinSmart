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
  Calculator,
  Info
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

  // Data for the table (5 cycles)
  const circulationData = [
    { 
      date: "2-Apr-2020", 
      deposit: initialDeposit, 
      reserve: initialDeposit * reserveRatio, 
      loan: initialDeposit * (1 - reserveRatio), 
      description: "Round 1 (Bank A): Initial Deposit Received" 
    },
    { 
      date: "5-Apr-2020", 
      deposit: initialDeposit * (1 - reserveRatio), 
      reserve: initialDeposit * (1 - reserveRatio) * reserveRatio, 
      loan: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio), 
      description: "Round 2 (Bank B): Loan 1 (9,000) is deposited by recipient" 
    },
    { 
      date: "10-Apr-2020", 
      deposit: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio), 
      reserve: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio) * reserveRatio, 
      loan: initialDeposit * (1 - reserveRatio) * (1 - reserveRatio) * (1 - reserveRatio), 
      description: "Round 3 (Bank C): Loan 2 (8,100) is deposited by recipient" 
    },
    { 
      date: "15-Apr-2020", 
      deposit: initialDeposit * Math.pow((1 - reserveRatio), 3), 
      reserve: initialDeposit * Math.pow((1 - reserveRatio), 3) * reserveRatio, 
      loan: initialDeposit * Math.pow((1 - reserveRatio), 4), 
      description: "Round 4 (Bank D): Loan 3 (7,290) is deposited by recipient" 
    },
    { 
      date: "20-Apr-2020", 
      deposit: initialDeposit * Math.pow((1 - reserveRatio), 4), 
      reserve: initialDeposit * Math.pow((1 - reserveRatio), 4) * reserveRatio, 
      loan: initialDeposit * Math.pow((1 - reserveRatio), 5), 
      description: "Round 5 (Bank E): Loan 4 (6,561) is deposited by recipient" 
    },
  ];

  const formatCurrency = (amount: number) => `${currency.symbol}${Math.round(amount).toLocaleString()}`;
  const totalCirculation = initialDeposit / reserveRatio;

  // Calculate cumulative totals for the first 5 rounds
  const cumulativeDeposit = circulationData.reduce((sum, step) => sum + step.deposit, 0);
  const cumulativeLoan = circulationData.reduce((sum, step) => sum + step.loan, 0);
  const cumulativeReserve = circulationData.reduce((sum, step) => sum + step.reserve, 0);


  // Profit Calculation for 16 months (1.33 years)
  // Assumptions: Loan Interest Rate (LIR) = 10%, Deposit Interest Rate (DIR) = 4%
  const timeInYears = 16 / 12;
  const loanAmount = circulationData[0].loan; // 9000
  const depositAmount = circulationData[0].deposit; // 10000

  const interestEarned = loanAmount * 0.10 * timeInYears; 
  const interestPaid = depositAmount * 0.04 * timeInYears; 

  const netProfit = interestEarned - interestPaid; 

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

      {/* Core Concept & Formula */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Repeat className="text-blue-500" /> The Fractional Reserve Rule (10% Reserve)
        </h3>
        <Card className="border-2 border-blue-100 bg-blue-50/50 p-8 rounded-[2.5rem]">
          <div className="space-y-4">
            <p className="text-blue-800 leading-relaxed">
              When you deposit money, the bank only keeps a small part (the <strong>Reserve</strong>, 10%) safe, and loans out the rest. This loaned money is then deposited in another bank, starting the cycle again!
            </p>
            <div className="p-4 bg-white rounded-xl border border-blue-200">
              <h4 className="font-bold text-slate-900 mb-2">The Money Multiplier Formula</h4>
              <p className="text-sm text-slate-600">
                The maximum amount of money that can be created is calculated by:
              </p>
              <div className="text-center py-3">
                <span className="text-xl font-extrabold text-blue-600">
                  Money Multiplier = 1 / Reserve Ratio = 1 / 0.10 = 10
                </span>
              </div>
              <p className="text-xs text-slate-500 italic">
                Total Potential Money Created = Initial Deposit ({formatCurrency(initialDeposit)}) x Multiplier (10) = {formatCurrency(totalCirculation)}
              </p>
            </div>
          </div>
        </Card>
      </section>
      
      {/* Clarification Section */}
      <Card className="bg-emerald-50 border-emerald-100 p-6 flex items-start gap-4">
        <Info className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-slate-900 mb-2">Money Creation vs. Bank Profit</h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            This table shows <strong>Money Creation</strong> (how the total money supply grows). The principal amount of the loan (e.g., {formatCurrency(9000)}) is deposited by the borrower/recipient, creating a new deposit in the banking system.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mt-2">
            The bank's <strong>Profit</strong>, however, comes only from the interest charged on the loan, minus the interest paid on the deposit (as shown in the calculation below).
          </p>
        </div>
      </Card>

      {/* Circulation Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Coins className="text-emerald-500" /> Circulation Example: The First 5 Rounds
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
              <TableRow className="bg-slate-100">
                <TableCell colSpan={2} className="font-bold text-slate-900">Cumulative Money Created (Total Deposits)</TableCell>
                <TableCell className="text-right font-bold text-blue-700">{formatCurrency(cumulativeDeposit)}</TableCell>
                <TableCell className="text-right font-bold text-emerald-700">{formatCurrency(cumulativeLoan)}</TableCell>
                <TableCell className="text-right font-bold text-red-700">{formatCurrency(cumulativeReserve)}</TableCell>
              </TableRow>
              <TableRow className="bg-slate-50">
                <TableCell colSpan={2} className="font-bold text-slate-900">Theoretical Maximum</TableCell>
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