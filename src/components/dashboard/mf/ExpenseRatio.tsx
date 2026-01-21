"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Percent, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';

const ExpenseRatio = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">Expense Ratio: The Silent Wealth Killer</h2>
          <p className="text-red-50 text-lg max-w-2xl">
            Every rupee paid in fees is a rupee not compounding for you. Over 20 years, even 0.5% matters!
          </p>
        </div>
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Percent className="w-6 h-6 text-red-600" />
            What is Expense Ratio?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700">
            The expense ratio is the annual fee charged by mutual funds to cover operating costs, including fund management fees, administrative expenses, and distribution costs. It's expressed as a percentage of your investment.
          </p>
          <div className="p-5 bg-red-50 rounded-xl border border-red-200">
            <p className="font-semibold text-slate-900 mb-2">Example:</p>
            <p className="text-sm text-slate-700">
              If you invest ₹1,00,000 in a fund with 2% expense ratio, you pay ₹2,000 annually. This is automatically deducted from the fund's assets (reflected in NAV).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle>Components of Expense Ratio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Fund Management Fee (Largest component)</p>
                <p className="text-sm text-slate-600">Fee paid to fund managers for research and stock selection</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Distribution & Commission</p>
                <p className="text-sm text-slate-600">Commission to distributors (0% in direct plans)</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Administrative Costs</p>
                <p className="text-sm text-slate-600">Registrar fees, custodian charges, audit costs</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">Marketing & Selling Expenses</p>
                <p className="text-sm text-slate-600">Advertising, branding, investor education</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            SEBI Limits on Expense Ratio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-700 mb-3">SEBI has capped maximum expense ratios based on fund type and AUM:</p>
          <ul className="space-y-1 text-sm text-slate-700">
            <li>• <strong>Equity Funds:</strong> Maximum 2.25% (for first ₹500 cr AUM)</li>
            <li>• <strong>Debt Funds:</strong> Maximum 2.00%</li>
            <li>• <strong>Index Funds:</strong> Maximum 1.00%</li>
            <li>• <strong>ETFs:</strong> Maximum 1.00%</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-green-600" />
            Long-Term Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-5 bg-white rounded-xl border-2 border-green-200">
            <p className="font-semibold text-slate-900 mb-3">₹10,000 monthly SIP for 20 years @ 12% returns:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-xs text-red-800 font-bold mb-1">2.5% Expense</p>
                <p className="text-2xl font-bold text-red-700">₹69.5L</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="text-xs text-orange-800 font-bold mb-1">1.5% Expense</p>
                <p className="text-2xl font-bold text-orange-700">₹81.2L</p>
              </div>
              <div className="p-4 bg-green-100 rounded-lg border-2 border-green-300">
                <p className="text-xs text-green-800 font-bold mb-1">0.5% Expense</p>
                <p className="text-2xl font-bold text-green-700">₹92.7L</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 italic text-center">Lower expense ratio = More wealth!</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle>Smart Investor Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ Always choose <strong>Direct plans</strong> (0.8-1% lower expense)</li>
            <li>✓ For equity funds, look for expense ratio <strong>below 1.5%</strong></li>
            <li>✓ For debt funds, look for expense ratio <strong>below 0.7%</strong></li>
            <li>✓ Index funds should have expense ratio <strong>below 0.3%</strong></li>
            <li>✓ Compare expense ratios within the same category</li>
            <li>✓ Lower is better, but don't compromise on fund quality</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseRatio;
