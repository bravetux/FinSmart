"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calculator, ArrowRight, IndianRupee, TrendingUp, Zap } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const FaceValueStockSplit = () => {
  const { currency } = useCurrency();

  const stockData = [
    { name: "Nalco", faceValue: 5.0, sharePrice: 180.0, pFv: 36.0 },
    { name: "Tata Motors", faceValue: 2.0, sharePrice: 1110.0, pFv: 555.0 },
    { name: "BPCL", faceValue: 10.0, sharePrice: 358.0, pFv: 35.8 },
    { name: "Sun Pharma", faceValue: 1.0, sharePrice: 1820.0, pFv: 1820.0 },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-purple-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Calculator className="w-4 h-4" />
            <span>Corporate Actions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Face Value & Stock Splits
          </h2>
          <p className="text-purple-50 text-lg max-w-xl">
            Face Value is the nominal value of a share, set by the company. It is crucial for calculating dividends and stock splits, but irrelevant for market valuation.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* What is Face Value */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <IndianRupee className="w-6 h-6 text-purple-600" /> What is Face Value?
        </h3>
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="pt-6 space-y-4">
            <p className="text-purple-800 leading-relaxed">
              Face Value (FV) is the nominal value assigned to a share by the company's management. It is NOT the market price.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-purple-100">
                <p className="font-bold text-lg text-slate-900">FV = Nominal Value</p>
                <p className="text-xs text-slate-500">Used in accounting and dividend calculation.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-purple-100">
                <p className="font-bold text-lg text-slate-900">Market Price = Real Value</p>
                <p className="text-xs text-slate-500">Determined by supply and demand in the market.</p>
              </div>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl text-white">
              <p className="text-xs font-bold text-amber-400 uppercase mb-1">Key Takeaway</p>
              <p className="text-xs text-slate-300">Focus on company fundamentals, not face value. A stock with {currency.symbol}1 FV is not inherently cheaper than one with {currency.symbol}10 FV.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Face Value and Dividends */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-blue-600" /> Face Value and Dividends
        </h3>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <p className="text-slate-600 leading-relaxed">
              Dividends are usually declared as a percentage of the Face Value, not the market price.
            </p>
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center space-y-4">
              <p className="text-sm font-bold text-blue-800">Example: Stock with FV = {currency.symbol}10, Market Price = {currency.symbol}1000</p>
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold text-slate-900">Dividend Declared = 100%</p>
                <ArrowRight className="w-6 h-6 text-blue-400 my-2" />
                <p className="text-xl font-extrabold text-emerald-600">Dividend Paid = 100% of {currency.symbol}10 = {currency.symbol}10</p>
              </div>
              <p className="text-sm text-slate-600">
                Dividend Yield = ({currency.symbol}10 / {currency.symbol}1000) * 100 = 1%
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Stock Split */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-600" /> Stock Split (FV Change)
        </h3>
        <Card className="border-emerald-200 bg-emerald-50/50">
          <CardContent className="pt-6 space-y-4">
            <p className="text-emerald-800 leading-relaxed">
              A stock split increases the number of shares and reduces the face value and market price proportionally. The total market capitalization remains unchanged.
            </p>
            <div className="grid md:grid-cols-2 gap-6 p-4 bg-white rounded-xl border border-emerald-100">
              <div className="space-y-3 border-r pr-4">
                <h4 className="font-bold text-lg text-slate-900">Before Split (1:10)</h4>
                <p className="text-sm text-slate-600">Face Value: {currency.symbol}10</p>
                <p className="text-sm text-slate-600">Share Price: {currency.symbol}5,000</p>
                <p className="text-sm text-slate-600">No. of Shares: 1 Crore</p>
                <p className="text-sm font-bold text-blue-700">Market Cap: {currency.symbol}5,000 Crore</p>
              </div>
              <div className="space-y-3 pl-4">
                <h4 className="font-bold text-lg text-slate-900">After Split (1:10)</h4>
                <p className="text-sm text-slate-600">Face Value: {currency.symbol}1</p>
                <p className="text-sm text-slate-600">Share Price: {currency.symbol}500</p>
                <p className="text-sm text-slate-600">No. of Shares: 10 Crore</p>
                <p className="text-sm font-bold text-blue-700">Market Cap: {currency.symbol}5,000 Crore</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* P/FV Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Table className="w-6 h-6 text-orange-600" /> Price to Face Value (P/FV)
        </h3>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SL</TableHead>
                <TableHead>Stock Names</TableHead>
                <TableHead className="text-right">Face Value</TableHead>
                <TableHead className="text-right">Share Price (P)</TableHead>
                <TableHead className="text-right">P / FV</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stockData.map((stock, i) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell className="font-medium">{stock.name}</TableCell>
                  <TableCell className="text-right">{stock.faceValue.toFixed(1)}</TableCell>
                  <TableCell className="text-right">{stock.sharePrice.toFixed(1)}</TableCell>
                  <TableCell className="text-right font-bold text-blue-700">{stock.pFv.toFixed(1)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <CardContent className="pt-4">
            <p className="text-xs text-slate-500 italic">
              The P/FV ratio simply shows how many times the market price is greater than the nominal face value. This ratio has no direct bearing on investment quality.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default FaceValueStockSplit;