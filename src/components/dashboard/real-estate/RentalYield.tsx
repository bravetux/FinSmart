"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Percent, TrendingUp, AlertTriangle } from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const RentalYield = () => {
  const { currency } = useCurrency();
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [annualRent, setAnnualRent] = useState(240000);
  const [annualExpenses, setAnnualExpenses] = useState(30000);
  
  const grossYield = (annualRent / propertyValue) * 100;
  const netYield = ((annualRent - annualExpenses) / propertyValue) * 100;
  
  // Helper to format with Indian commas for display inside input
  const formatWithCommas = (val: number) => {
    return new Intl.NumberFormat('en-IN').format(val);
  };

  // Helper to parse string back to number
  const handleInputChange = (val: string, setter: (n: number) => void) => {
    // Remove commas and parse
    const numericValue = parseInt(val.replace(/,/g, ''), 10);
    if (!isNaN(numericValue)) {
      setter(numericValue);
    } else if (val === '') {
      setter(0);
    }
  };

  // Handle Up/Down arrow keys for 10,000 steps
  const handleKeyDown = (e: React.KeyboardEvent, currentVal: number, setter: (n: number) => void) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setter(currentVal + 10000);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setter(Math.max(0, currentVal - 10000));
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency.code,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Percent className="w-4 h-4" />
            <span>Profitability Metric</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Rental Yield Calculation</h2>
          <p className="text-emerald-50 text-lg max-w-xl">
            Rental yield is the return you earn from rental income relative to the property's cost. Always calculate the Net Yield!
          </p>
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
            <CardDescription>Adjust values using arrow keys (±10,000) or type directly.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-1 gap-6">
              {/* Property Value */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="value" className="text-slate-700 font-semibold">Property Value</Label>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    {formatCurrency(propertyValue)}
                  </span>
                </div>
                <Input 
                  id="value" 
                  type="text" 
                  value={formatWithCommas(propertyValue)} 
                  onChange={(e) => handleInputChange(e.target.value, setPropertyValue)}
                  onKeyDown={(e) => handleKeyDown(e, propertyValue, setPropertyValue)}
                  className="font-mono text-lg"
                  placeholder="Enter property value"
                />
              </div>

              {/* Annual Rent */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="rent" className="text-slate-700 font-semibold">Annual Rent</Label>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {formatCurrency(annualRent)}
                  </span>
                </div>
                <Input 
                  id="rent" 
                  type="text" 
                  value={formatWithCommas(annualRent)} 
                  onChange={(e) => handleInputChange(e.target.value, setAnnualRent)}
                  onKeyDown={(e) => handleKeyDown(e, annualRent, setAnnualRent)}
                  className="font-mono text-lg"
                  placeholder="Enter annual rent"
                />
              </div>

              {/* Annual Expenses */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="expenses" className="text-slate-700 font-semibold">Annual Expenses</Label>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                    {formatCurrency(annualExpenses)}
                  </span>
                </div>
                <Input 
                  id="expenses" 
                  type="text" 
                  value={formatWithCommas(annualExpenses)} 
                  onChange={(e) => handleInputChange(e.target.value, setAnnualExpenses)}
                  onKeyDown={(e) => handleKeyDown(e, annualExpenses, setAnnualExpenses)}
                  className="font-mono text-lg"
                  placeholder="Enter annual expenses"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 pt-6 border-t">
              <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 space-y-1">
                <p className="text-[10px] text-blue-600 uppercase font-bold tracking-wider">Gross Rental Yield</p>
                <p className="text-3xl font-black text-blue-800">{grossYield.toFixed(2)}%</p>
                <p className="text-[10px] text-blue-400">Total Rent / Property Value</p>
              </div>
              <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-1 shadow-sm">
                <p className="text-[10px] text-emerald-600 uppercase font-bold tracking-wider">Net Rental Yield</p>
                <p className="text-3xl font-black text-emerald-800">{netYield.toFixed(2)}%</p>
                <p className="text-[10px] text-emerald-400">(Rent - Expenses) / Property Value</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Yield Interpretation */}
        <div className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-slate-600" />
                What is a Good Yield?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>A typical residential property in major Indian cities yields <span className="font-bold text-slate-900">2% to 4%</span>.</p>
              <p>Commercial properties (offices, warehouses) often yield higher, typically <span className="font-bold text-slate-900">6% to 10%</span>.</p>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800">
                  If the yield is too high (e.g., &gt;12%), investigate the property's location and tenant quality, as high yield often signals high risk.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="p-6 bg-slate-900 rounded-[2rem] text-white">
            <h4 className="font-bold text-sm mb-2">Pro Tip</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              When calculating yield, always factor in <span className="text-white">vacancy periods</span>. If a house is empty for 1 month, your yield drops significantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalYield;