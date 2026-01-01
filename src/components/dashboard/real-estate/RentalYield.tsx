"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Percent, TrendingUp, AlertTriangle } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const RentalYield = () => {
  const { currency } = useCurrency();
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [annualRent, setAnnualRent] = useState(240000);
  const [annualExpenses, setAnnualExpenses] = useState(30000);
  
  const grossYield = (annualRent / propertyValue) * 100;
  const netYield = ((annualRent - annualExpenses) / propertyValue) * 100;
  
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Percent className="w-4 h-4" />
            <span>Profitability Metric</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight"> Rental Yield Calculation </h2>
          <p className="text-emerald-50 text-lg max-w-xl"> Rental yield is the return you earn from rental income relative to the property's cost. Always calculate the Net Yield! </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calculator Card */}
        <Card className="lg:col-span-2 border-slate-200 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              Yield Calculator
            </CardTitle>
            <CardDescription>Adjust the values to see the impact on your yield.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="value">Property Value ({currency.symbol})</Label>
                <Input 
                  id="value" 
                  type="number" 
                  value={propertyValue} 
                  onChange={(e) => setPropertyValue(Number(e.target.value))} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rent">Annual Rent ({currency.symbol})</Label>
                <Input 
                  id="rent" 
                  type="number" 
                  value={annualRent} 
                  onChange={(e) => setAnnualRent(Number(e.target.value))} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expenses">Annual Expenses ({currency.symbol})</Label>
                <Input 
                  id="expenses" 
                  type="number" 
                  value={annualExpenses} 
                  onChange={(e) => setAnnualExpenses(Number(e.target.value))} 
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 space-y-1">
                <p className="text-xs text-slate-500 uppercase font-semibold">Gross Rental Yield</p>
                <p className="text-3xl font-bold text-blue-800">{grossYield.toFixed(2)}%</p>
                <p className="text-xs text-slate-500">({formatCurrency(annualRent)} / {formatCurrency(propertyValue)})</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 space-y-1">
                <p className="text-xs text-slate-500 uppercase font-semibold">Net Rental Yield</p>
                <p className="text-3xl font-bold text-emerald-800">{netYield.toFixed(2)}%</p>
                <p className="text-xs text-slate-500">({formatCurrency(annualRent - annualExpenses)} / {formatCurrency(propertyValue)})</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Yield Interpretation */}
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-slate-600" />
              What is a Good Yield?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-slate-600">
            <p>A typical residential property in major Indian cities yields 2% to 4%.</p>
            <p>Commercial properties (offices, warehouses) often yield higher, typically 6% to 10%.</p>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800">If the yield is too high (e.g., &gt;12%), investigate the property's location and tenant quality, as high yield often signals high risk.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RentalYield;