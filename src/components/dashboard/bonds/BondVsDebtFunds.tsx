"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Scale, 
  TrendingUp, 
  DollarSign, 
  FileText,
  Clock,
  Percent,
  ShieldCheck,
  AlertCircle,
  Target,
  Lightbulb,
  CheckCircle,
  XCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const BondVsDebtFunds = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Comparison</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Bonds vs Debt Mutual Funds</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Understand the key differences between direct bonds and debt mutual funds. 
            Compare costs, liquidity, tax treatment, and more to make the right choice for your portfolio.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Comprehensive Comparison Table */}
        <Card className="border-l-4 border-l-indigo-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Complete Comparison</CardTitle>
            </div>
            <CardDescription>Side-by-side analysis of all key factors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-indigo-100 dark:bg-indigo-900/30">
                    <th className="border p-3 text-left">Feature</th>
                    <th className="border p-3 text-left">Direct Bonds</th>
                    <th className="border p-3 text-left">Debt Mutual Funds</th>
                    <th className="border p-3 text-center">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Minimum Investment</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p>{formatCurrency(10000)} - {formatCurrency(100000)}</p>
                        <p className="text-xs text-muted-foreground">Higher barrier to entry</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">{formatCurrency(500)} - {formatCurrency(1000)}</p>
                        <p className="text-xs text-green-600">Very accessible</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Debt Funds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Returns Predictability</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">Fully Predictable</p>
                        <p className="text-xs">Know exact returns upfront (if held to maturity)</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p>Variable</p>
                        <p className="text-xs text-muted-foreground">NAV fluctuates daily, returns uncertain</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Bonds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Costs (TER/Brokerage)</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">0.1% - 0.5%</p>
                        <p className="text-xs">One-time brokerage, no recurring cost</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p>0.5% - 2% per year</p>
                        <p className="text-xs text-muted-foreground">TER eats into returns annually</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Bonds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Liquidity</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p>Low to Moderate</p>
                        <p className="text-xs text-muted-foreground">May need to wait for buyer, price impact</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">High</p>
                        <p className="text-xs text-green-600">Redeem anytime at current NAV</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Debt Funds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Diversification</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p>Need large capital</p>
                        <p className="text-xs text-muted-foreground">₹10L+ needed for 5-10 bonds</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">Instant Diversification</p>
                        <p className="text-xs text-green-600">Fund holds 30-50+ bonds</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Debt Funds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Management</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p>Self-Managed</p>
                        <p className="text-xs text-muted-foreground">You track, monitor, reinvest</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">Professional Management</p>
                        <p className="text-xs text-green-600">Fund manager handles everything</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Debt Funds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Taxation</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">Better</p>
                        <p className="text-xs">Interest: Slab rate<br/>LTCG: 10% (after 1 year)</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p>Less Favorable (Post Apr 2023)</p>
                        <p className="text-xs text-muted-foreground">All gains at slab rate</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Bonds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Credit Risk</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p>Concentrated</p>
                        <p className="text-xs text-muted-foreground">If bond defaults, 100% loss on that bond</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">Diluted</p>
                        <p className="text-xs text-green-600">One default = 2-3% impact only</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Debt Funds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">SIP Facility</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-red-600">Not Available</p>
                        <p className="text-xs">Lumpsum investment only</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">Available</p>
                        <p className="text-xs text-green-600">Invest monthly via SIP</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Debt Funds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Transparency</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="text-green-600 font-bold">100% Clear</p>
                        <p className="text-xs text-green-600">You know exactly what you own</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p>Monthly Disclosure</p>
                        <p className="text-xs text-muted-foreground">Holdings change, need to track</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Bonds</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Best For</td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="font-medium">Large Investors</p>
                        <p className="text-xs">₹10L+, hold-to-maturity, goal-based</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div className="space-y-1">
                        <p className="font-medium">Small/Regular Investors</p>
                        <p className="text-xs">SIP, liquidity needs, {'<'}₹10L</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge variant="outline">Depends</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Direct Bonds - Pros & Cons */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Direct Bonds: Detailed Analysis</CardTitle>
            </div>
            <CardDescription>When direct bond investment makes sense</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Advantages
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Fixed, Predictable Returns</p>
                      <p className="text-xs text-muted-foreground">
                        If you buy 7% bond and hold to maturity, you get exactly 7% per year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Lower Costs</p>
                      <p className="text-xs text-muted-foreground">
                        0.1-0.5% one-time brokerage vs 0.5-2% annual TER in funds
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Better Tax Treatment</p>
                      <p className="text-xs text-muted-foreground">
                        LTCG at 10% after 1 year (vs slab rate in debt funds post-2023)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">4</Badge>
                    <div>
                      <p className="font-medium">No Redemption Pressure</p>
                      <p className="text-xs text-muted-foreground">
                        Funds may have to sell bonds at bad prices if many investors redeem
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">5</Badge>
                    <div>
                      <p className="font-medium">Alignment with Goals</p>
                      <p className="text-xs text-muted-foreground">
                        Match bond maturity exactly to your goal date
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">6</Badge>
                    <div>
                      <p className="font-medium">Full Control</p>
                      <p className="text-xs text-muted-foreground">
                        You decide which bonds, when to buy/sell, reinvestment strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  Disadvantages
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">1</Badge>
                    <div>
                      <p className="font-medium">High Minimum Investment</p>
                      <p className="text-xs text-muted-foreground">
                        Need ₹10,000-₹1,00,000 per bond. ₹10L+ for proper diversification
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Poor Liquidity</p>
                      <p className="text-xs text-muted-foreground">
                        Corporate bonds hard to sell. May get poor price or wait days/weeks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Manual Effort Required</p>
                      <p className="text-xs text-muted-foreground">
                        Need to research, monitor ratings, track maturities, reinvest
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">4</Badge>
                    <div>
                      <p className="font-medium">Concentrated Risk</p>
                      <p className="text-xs text-muted-foreground">
                        If one bond defaults, major portion of investment lost
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">5</Badge>
                    <div>
                      <p className="font-medium">No SIP Option</p>
                      <p className="text-xs text-muted-foreground">
                        Can't do monthly investments. Requires lumpsum
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">6</Badge>
                    <div>
                      <p className="font-medium">Complex for Beginners</p>
                      <p className="text-xs text-muted-foreground">
                        Need knowledge of YTM, ratings, bond types, platforms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Debt Funds - Pros & Cons */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Debt Mutual Funds: Detailed Analysis</CardTitle>
            </div>
            <CardDescription>When debt funds are the better choice</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Advantages
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Low Minimum Investment</p>
                      <p className="text-xs text-muted-foreground">
                        Start with just ₹500-₹1,000. SIP from ₹500/month
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Instant Diversification</p>
                      <p className="text-xs text-muted-foreground">
                        Fund holds 30-50+ bonds across issuers, reducing risk
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">3</Badge>
                    <div>
                      <p className="font-medium">High Liquidity</p>
                      <p className="text-xs text-muted-foreground">
                        Redeem anytime, money in account in 1-3 days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">4</Badge>
                    <div>
                      <p className="font-medium">Professional Management</p>
                      <p className="text-xs text-muted-foreground">
                        Expert fund manager handles bond selection, monitoring, trades
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">5</Badge>
                    <div>
                      <p className="font-medium">SIP Facility</p>
                      <p className="text-xs text-muted-foreground">
                        Invest monthly, benefit from rupee cost averaging
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">6</Badge>
                    <div>
                      <p className="font-medium">Convenience</p>
                      <p className="text-xs text-muted-foreground">
                        No need to track bonds, maturities, reinvestment - all automated
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  Disadvantages
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Unpredictable Returns</p>
                      <p className="text-xs text-muted-foreground">
                        NAV fluctuates daily. Can't be sure of exact returns
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Higher Costs</p>
                      <p className="text-xs text-muted-foreground">
                        0.5-2% annual TER reduces returns every year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Worse Taxation (Post-2023)</p>
                      <p className="text-xs text-muted-foreground">
                        All gains taxed at slab rate. No indexation benefit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">4</Badge>
                    <div>
                      <p className="font-medium">Redemption Risk</p>
                      <p className="text-xs text-muted-foreground">
                        If many investors redeem, fund may sell bonds at bad prices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">5</Badge>
                    <div>
                      <p className="font-medium">Fund Manager Risk</p>
                      <p className="text-xs text-muted-foreground">
                        Poor decisions (IL&FS exposure) can hurt all investors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">6</Badge>
                    <div>
                      <p className="font-medium">Exit Load</p>
                      <p className="text-xs text-muted-foreground">
                        0.25-1% if redeemed before 90-365 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost Comparison */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Cost Comparison: Real Numbers</CardTitle>
            </div>
            <CardDescription>How costs impact your returns over time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Example: {formatCurrency(1000000)} invested for 5 years</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-bold mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    Direct Bonds
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Investment:</span>
                      <span className="font-bold">{formatCurrency(1000000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Brokerage (0.25%):</span>
                      <span className="text-red-600">-{formatCurrency(2500)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span>Net Investment:</span>
                      <span className="font-bold">{formatCurrency(997500)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Annual Return (7.5%):</span>
                      <span className="font-bold">{formatCurrency(74813)}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="font-bold">Value after 5 years:</span>
                      <span className="font-bold text-green-600">{formatCurrency(1431344)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Total Gain:</span>
                      <span className="font-bold text-green-600">{formatCurrency(431344)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                    Debt Mutual Fund
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Investment:</span>
                      <span className="font-bold">{formatCurrency(1000000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Entry Load:</span>
                      <span className="text-green-600">NIL (₹0)</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span>Net Investment:</span>
                      <span className="font-bold">{formatCurrency(1000000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gross Return (7.5%):</span>
                      <span>{formatCurrency(75000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TER (1.2% p.a.):</span>
                      <span className="text-red-600">-{formatCurrency(9000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Net Annual Return:</span>
                      <span className="font-bold">{formatCurrency(66000)} (6.3%)</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="font-bold">Value after 5 years:</span>
                      <span className="font-bold text-orange-600">{formatCurrency(1358070)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Total Gain:</span>
                      <span className="font-bold text-orange-600">{formatCurrency(358070)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Cost Difference:</span>
                  <span className="font-bold text-lg text-red-600">{formatCurrency(73274)} less in debt fund</span>
                </div>
                <p className="text-sm mt-2">Direct bonds save ~17% more wealth over 5 years due to lower costs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liquidity Comparison */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Liquidity: How Fast Can You Exit?</CardTitle>
            </div>
            <CardDescription>Understanding redemption process and timing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Direct Bonds</h4>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-medium mb-2">Government Bonds (G-Secs)</p>
                    <ul className="text-sm space-y-1">
                      <li>• Moderate liquidity</li>
                      <li>• Can sell in 1-2 days</li>
                      <li>• May get 0.1-0.3% below fair price</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-medium mb-2">PSU/Top Corporate Bonds</p>
                    <ul className="text-sm space-y-1">
                      <li>• Limited liquidity</li>
                      <li>• May take 3-7 days to find buyer</li>
                      <li>• Price impact: 0.5-1%</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-medium mb-2">Other Corporate Bonds</p>
                    <ul className="text-sm space-y-1">
                      <li>• Poor liquidity</li>
                      <li>• Can take weeks to sell</li>
                      <li>• May need to take 2-5% haircut</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Debt Mutual Funds</h4>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-medium mb-2">Liquid Funds</p>
                    <ul className="text-sm space-y-1">
                      <li>• <span className="text-green-600 font-bold">Instant liquidity</span></li>
                      <li>• Redeem anytime</li>
                      <li>• Money in 1 day (T+1)</li>
                      <li>• No price impact</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-medium mb-2">Other Debt Funds</p>
                    <ul className="text-sm space-y-1">
                      <li>• <span className="text-green-600 font-bold">High liquidity</span></li>
                      <li>• Redeem anytime</li>
                      <li>• Money in 2-3 days</li>
                      <li>• Exit load if within lock-in</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-medium mb-2">Key Advantage</p>
                    <ul className="text-sm space-y-1">
                      <li>• Fund has many investors</li>
                      <li>• Always has cash for redemptions</li>
                      <li>• No need to find buyer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                Winner: Debt Mutual Funds (for liquidity)
              </h4>
              <p className="text-sm">
                If you might need money urgently, debt funds are clearly superior. 
                However, if you're investing for specific goal and can hold to maturity, 
                bond liquidity doesn't matter much.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tax Comparison */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Percent className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Taxation Comparison</CardTitle>
            </div>
            <CardDescription>Post-April 2023 tax rules</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-indigo-100 dark:bg-indigo-900/30">
                    <th className="border p-3 text-left">Income Type</th>
                    <th className="border p-3 text-left">Direct Bonds</th>
                    <th className="border p-3 text-left">Debt Mutual Funds</th>
                    <th className="border p-3 text-center">Better For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Interest/Coupon Income</td>
                    <td className="border p-3">
                      <div>
                        <p>Taxed at slab rate</p>
                        <p className="text-xs text-muted-foreground">(10%, 20%, or 30%)</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div>
                        <p>N/A (reflected in NAV)</p>
                        <p className="text-xs text-muted-foreground">No separate interest</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge variant="outline">Same</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Short-Term Capital Gains</td>
                    <td className="border p-3">
                      <div>
                        <p>Taxed at slab rate</p>
                        <p className="text-xs text-muted-foreground">If sold before 1 year</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div>
                        <p>Taxed at slab rate</p>
                        <p className="text-xs text-muted-foreground">If redeemed before 3 years</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge variant="outline">Same</Badge>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Long-Term Capital Gains</td>
                    <td className="border p-3">
                      <div>
                        <p className="text-green-600 font-bold">10% (without indexation)</p>
                        <p className="text-xs text-green-600">After holding 1 year</p>
                      </div>
                    </td>
                    <td className="border p-3">
                      <div>
                        <p className="text-red-600">Taxed at slab rate</p>
                        <p className="text-xs text-red-600">After April 2023 - no indexation</p>
                      </div>
                    </td>
                    <td className="border p-3 text-center">
                      <Badge className="bg-green-600">Bonds</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">Tax Impact Example (30% Tax Bracket)</h4>
              <div className="space-y-4">
                <p className="text-sm">
                  Investment: {formatCurrency(1000000)} for 5 years | Capital Gain: {formatCurrency(200000)}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-2">Direct Bond (LTCG)</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Capital Gain:</span>
                        <span>{formatCurrency(200000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax (10%):</span>
                        <span className="text-red-600">-{formatCurrency(20000)}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t font-bold">
                        <span>After-tax Gain:</span>
                        <span className="text-green-600">{formatCurrency(180000)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-2">Debt Fund (Slab Rate)</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Capital Gain:</span>
                        <span>{formatCurrency(200000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax (30%):</span>
                        <span className="text-red-600">-{formatCurrency(60000)}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t font-bold">
                        <span>After-tax Gain:</span>
                        <span className="text-red-600">{formatCurrency(140000)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Tax Saving with Bonds:</span>
                    <span className="font-bold text-green-600">{formatCurrency(40000)} (29% more wealth)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to Choose What */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Decision Matrix: When to Choose What</CardTitle>
            </div>
            <CardDescription>Make the right choice for your situation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Choose Direct Bonds When...
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">You have ₹10L+ to invest</p>
                          <p className="text-sm text-muted-foreground">
                            Need sufficient capital to diversify across 5-10 bonds
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">You can hold to maturity</p>
                          <p className="text-sm text-muted-foreground">
                            Know exact goal date and won't need money before that
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">You want predictable returns</p>
                          <p className="text-sm text-muted-foreground">
                            Need to know exact returns upfront for planning
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">You're in 30% tax bracket</p>
                          <p className="text-sm text-muted-foreground">
                            10% LTCG tax significantly better than slab rate
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">You want to minimize costs</p>
                          <p className="text-sm text-muted-foreground">
                            One-time brokerage vs annual TER saves money long-term
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">You can research and monitor</p>
                          <p className="text-sm text-muted-foreground">
                            Comfortable checking ratings, tracking maturities
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Choose Debt Mutual Funds When...
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">You're investing {'<'}₹10L</p>
                          <p className="text-sm text-muted-foreground">
                            Can't afford minimum bond amounts or diversification
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">You want SIP facility</p>
                          <p className="text-sm text-muted-foreground">
                            Prefer investing ₹5,000-₹10,000 monthly
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">You need high liquidity</p>
                          <p className="text-sm text-muted-foreground">
                            May need to withdraw money anytime without delay
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">You want professional management</p>
                          <p className="text-sm text-muted-foreground">
                            Don't have time/knowledge to research bonds
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">You value convenience</p>
                          <p className="text-sm text-muted-foreground">
                            Prefer hands-off approach, no tracking needed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">Goal timeline is uncertain</p>
                          <p className="text-sm text-muted-foreground">
                            Not sure exactly when you'll need the money
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Hybrid Approach (Best of Both)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <p className="font-medium mb-4">Use both strategically for different needs:</p>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="font-medium mb-2">70% Direct Bonds (₹7L)</p>
                        <ul className="text-sm space-y-1 ml-6">
                          <li>• Core long-term portfolio</li>
                          <li>• Laddered maturities for specific goals</li>
                          <li>• Higher returns, better tax treatment</li>
                          <li>• Government + AAA corporates</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <p className="font-medium mb-2">30% Debt Funds (₹3L)</p>
                        <ul className="text-sm space-y-1 ml-6">
                          <li>• Emergency fund + flexible money</li>
                          <li>• Liquid fund for instant access</li>
                          <li>• SIP for monthly investments</li>
                          <li>• High liquidity maintained</li>
                        </ul>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                        <p className="font-bold text-green-700 dark:text-green-300">
                          ✓ Best of both worlds: Predictability + Flexibility
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-indigo-500 shadow-lg bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-1">1</Badge>
                  <p className="text-sm">Direct bonds better for ₹10L+, hold-to-maturity investors</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-1">2</Badge>
                  <p className="text-sm">Debt funds ideal for {'<'}₹10L, SIP, and liquidity needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-1">3</Badge>
                  <p className="text-sm">Bonds save 1-1.5% annually in costs vs debt funds</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-1">4</Badge>
                  <p className="text-sm">Post-2023: Bonds have better tax treatment (10% LTCG)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-violet-600 mt-1">5</Badge>
                  <p className="text-sm">Debt funds offer instant liquidity, bonds take days to sell</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-violet-600 mt-1">6</Badge>
                  <p className="text-sm">Bonds give predictable returns, debt funds have variable NAV</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-violet-600 mt-1">7</Badge>
                  <p className="text-sm">Hybrid approach (70% bonds + 30% funds) often best</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-violet-600 mt-1">8</Badge>
                  <p className="text-sm">Choose based on amount, goals, liquidity needs, tax bracket</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default BondVsDebtFunds;
