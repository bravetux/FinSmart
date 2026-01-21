"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Calculator, 
  TrendingUp,
  TrendingDown,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Info,
  Award,
  BarChart3,
  ArrowUpDown
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const YieldCalculations = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-sky-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Mathematics</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Bond Yields Explained</h1>
          <p className="text-xl text-cyan-100 max-w-3xl">
            Master the mathematics of bond yields - from simple current yield to complex YTM calculations. 
            Understand the inverse relationship between price and yield, and learn how to calculate returns accurately.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Current Yield */}
        <Card className="border-l-4 border-l-cyan-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-cyan-600" />
              <CardTitle className="text-2xl">Current Yield</CardTitle>
            </div>
            <CardDescription>The simplest yield calculation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">What is Current Yield?</h4>
              <p className="text-muted-foreground mb-4">
                Current Yield is the annual coupon payment divided by the current market price of the bond. 
                It tells you what percentage return you're getting on your investment based on interest alone.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-cyan-500">
                <p className="font-bold text-lg mb-2">Formula:</p>
                <p className="text-xl font-mono">
                  Current Yield = (Annual Coupon Payment / Current Market Price) × 100
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Example 1: Bond at Par</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Face Value:</strong> {formatCurrency(100000)}</p>
                  <p><strong>Coupon Rate:</strong> 8% per annum</p>
                  <p><strong>Annual Coupon:</strong> {formatCurrency(8000)}</p>
                  <p><strong>Current Price:</strong> {formatCurrency(100000)} (at par)</p>
                  <hr className="my-3" />
                  <p className="text-base"><strong>Calculation:</strong></p>
                  <p className="font-mono">= (8,000 / 1,00,000) × 100</p>
                  <p className="font-mono">= 0.08 × 100</p>
                  <p className="text-green-600 font-bold text-lg mt-2">= 8.00%</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    When bond trades at par, current yield equals coupon rate
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Example 2: Bond at Discount</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Face Value:</strong> {formatCurrency(100000)}</p>
                  <p><strong>Coupon Rate:</strong> 8% per annum</p>
                  <p><strong>Annual Coupon:</strong> {formatCurrency(8000)}</p>
                  <p><strong>Current Price:</strong> {formatCurrency(95000)} (discount)</p>
                  <hr className="my-3" />
                  <p className="text-base"><strong>Calculation:</strong></p>
                  <p className="font-mono">= (8,000 / 95,000) × 100</p>
                  <p className="font-mono">= 0.0842 × 100</p>
                  <p className="text-blue-600 font-bold text-lg mt-2">= 8.42%</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    At discount, current yield &gt; coupon rate
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Example 3: Bond at Premium</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Face Value:</strong> {formatCurrency(100000)}</p>
                  <p><strong>Coupon Rate:</strong> 8% per annum</p>
                  <p><strong>Annual Coupon:</strong> {formatCurrency(8000)}</p>
                  <p><strong>Current Price:</strong> {formatCurrency(105000)} (premium)</p>
                  <hr className="my-3" />
                  <p className="text-base"><strong>Calculation:</strong></p>
                  <p className="font-mono">= (8,000 / 1,05,000) × 100</p>
                  <p className="font-mono">= 0.0762 × 100</p>
                  <p className="text-orange-600 font-bold text-lg mt-2">= 7.62%</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    At premium, current yield &lt; coupon rate
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  Limitation of Current Yield
                </h4>
                <p className="text-sm text-muted-foreground">
                  Current yield only considers annual interest income. It <strong>ignores</strong>:
                </p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• Capital gain/loss at maturity</li>
                  <li>• Time value of money</li>
                  <li>• Reinvestment of coupons</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  For accurate comparison, always use <strong>Yield to Maturity (YTM)</strong> instead.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Yield to Maturity (YTM) */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Yield to Maturity (YTM)</CardTitle>
            </div>
            <CardDescription>The most important yield metric - total return if held till maturity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">What is YTM?</h4>
              <p className="text-muted-foreground mb-4">
                <strong>Yield to Maturity (YTM)</strong> is the total return you'll earn on a bond if you:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Buy at current market price</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Hold until maturity</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Reinvest all coupon payments at the same YTM rate</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                YTM accounts for both coupon income AND capital gain/loss, making it the most comprehensive 
                yield measure. This is the number you should compare when evaluating bonds.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">YTM Formula (Approximation)</h4>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-mono text-sm mb-3">
                  YTM ≈ [C + (F - P) / N] / [(F + P) / 2] × 100
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-xs">
                  <div>
                    <p><strong>C</strong> = Annual coupon payment</p>
                    <p><strong>F</strong> = Face value</p>
                  </div>
                  <div>
                    <p><strong>P</strong> = Current price</p>
                    <p><strong>N</strong> = Years to maturity</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                *This is an approximation. Exact YTM requires solving a complex equation using trial and error 
                or financial calculators. Most platforms show pre-calculated YTM.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-lg">YTM Calculation Examples:</h4>
              
              {/* Example 1 */}
              <div className="border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-900/20 p-6 rounded-r-lg">
                <h5 className="font-bold mb-3">Example 1: Bond Purchased at Discount</h5>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Given:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Face Value (F) = {formatCurrency(100000)}</li>
                      <li>• Current Price (P) = {formatCurrency(95000)}</li>
                      <li>• Coupon Rate = 8% per annum</li>
                      <li>• Annual Coupon (C) = {formatCurrency(8000)}</li>
                      <li>• Years to Maturity (N) = 5 years</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Calculation:</p>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm space-y-1">
                      <p className="font-mono">YTM ≈ [8,000 + (1,00,000 - 95,000)/5]</p>
                      <p className="font-mono pl-8">/ [(1,00,000 + 95,000)/2]</p>
                      <p className="font-mono">= [8,000 + 1,000] / 97,500</p>
                      <p className="font-mono">= 9,000 / 97,500</p>
                      <p className="font-mono">= 0.0923 × 100</p>
                      <p className="text-green-600 font-bold text-lg mt-2">YTM ≈ 9.23%</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      YTM &gt; Coupon rate because you bought at discount
                    </p>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 dark:bg-orange-900/20 p-6 rounded-r-lg">
                <h5 className="font-bold mb-3">Example 2: Bond Purchased at Premium</h5>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Given:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Face Value (F) = {formatCurrency(100000)}</li>
                      <li>• Current Price (P) = {formatCurrency(108000)}</li>
                      <li>• Coupon Rate = 10% per annum</li>
                      <li>• Annual Coupon (C) = {formatCurrency(10000)}</li>
                      <li>• Years to Maturity (N) = 4 years</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Calculation:</p>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm space-y-1">
                      <p className="font-mono">YTM ≈ [10,000 + (1,00,000 - 1,08,000)/4]</p>
                      <p className="font-mono pl-8">/ [(1,00,000 + 1,08,000)/2]</p>
                      <p className="font-mono">= [10,000 - 2,000] / 1,04,000</p>
                      <p className="font-mono">= 8,000 / 1,04,000</p>
                      <p className="font-mono">= 0.0769 × 100</p>
                      <p className="text-orange-600 font-bold text-lg mt-2">YTM ≈ 7.69%</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      YTM &lt; Coupon rate because you paid premium
                    </p>
                  </div>
                </div>
              </div>

              {/* Example 3 */}
              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-r-lg">
                <h5 className="font-bold mb-3">Example 3: Bond at Par</h5>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Given:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Face Value (F) = {formatCurrency(100000)}</li>
                      <li>• Current Price (P) = {formatCurrency(100000)}</li>
                      <li>• Coupon Rate = 9% per annum</li>
                      <li>• Annual Coupon (C) = {formatCurrency(9000)}</li>
                      <li>• Years to Maturity (N) = 7 years</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Calculation:</p>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm space-y-1">
                      <p className="font-mono">YTM ≈ [9,000 + (1,00,000 - 1,00,000)/7]</p>
                      <p className="font-mono pl-8">/ [(1,00,000 + 1,00,000)/2]</p>
                      <p className="font-mono">= [9,000 + 0] / 1,00,000</p>
                      <p className="font-mono">= 9,000 / 1,00,000</p>
                      <p className="font-mono">= 0.09 × 100</p>
                      <p className="text-blue-600 font-bold text-lg mt-2">YTM = 9.00%</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      When at par, YTM = Coupon rate = Current yield
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Yield to Call (YTC) */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Yield to Call (YTC)</CardTitle>
            </div>
            <CardDescription>For callable bonds - yield if bond is called early</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">What is Yield to Call?</h4>
              <p className="text-muted-foreground mb-4">
                Some bonds have a <strong>call provision</strong> that allows the issuer to redeem the bond 
                before maturity (usually after a certain date). If interest rates fall, companies may "call" 
                their bonds to refinance at lower rates.
              </p>
              <p className="text-muted-foreground">
                <strong>Yield to Call (YTC)</strong> calculates your return if the bond is called on the 
                first call date instead of being held to maturity. For callable bonds, always check both 
                YTM and YTC - your actual return will be the lower of the two.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 bg-red-50 dark:bg-red-900/20 p-6 rounded-r-lg">
              <h5 className="font-bold mb-4">Example: Callable Bond Calculation</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Bond Details:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Face Value = {formatCurrency(100000)}</li>
                    <li>• Current Price = {formatCurrency(104000)}</li>
                    <li>• Coupon Rate = 10%</li>
                    <li>• Annual Coupon = {formatCurrency(10000)}</li>
                    <li>• Maturity = 10 years</li>
                    <li>• Call Date = 3 years</li>
                    <li>• Call Price = {formatCurrency(102000)}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">YTC Calculation:</p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm space-y-1">
                    <p className="font-mono text-xs">YTC ≈ [10,000 + (1,02,000 - 1,04,000)/3]</p>
                    <p className="font-mono text-xs pl-6">/ [(1,02,000 + 1,04,000)/2]</p>
                    <p className="font-mono text-xs">= [10,000 - 667] / 1,03,000</p>
                    <p className="font-mono text-xs">= 9,333 / 1,03,000</p>
                    <p className="font-mono text-xs">= 0.0906 × 100</p>
                    <p className="text-red-600 font-bold text-base mt-2">YTC ≈ 9.06%</p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded mt-3 text-xs">
                    <p>If held to maturity (10 years):</p>
                    <p className="font-semibold">YTM ≈ 9.35%</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Worst case:</strong> Bond gets called, you earn 9.06%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2 text-yellow-800 dark:text-yellow-400">
                <AlertCircle className="h-5 w-5" />
                Important for Investors
              </h5>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>Always ask if a bond is callable before buying</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>For callable bonds, assume you'll earn the lower of YTM or YTC</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>Bonds are more likely to be called when interest rates fall</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600 mt-0.5">•</span>
                  <span>You lose future high coupon payments if bond is called</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Price vs Yield Inverse Relationship */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ArrowUpDown className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Price vs Yield: The Inverse Relationship</CardTitle>
            </div>
            <CardDescription>Why bond prices fall when interest rates rise</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">The Fundamental Rule</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-red-500">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="h-6 w-6 text-red-600" />
                    <h5 className="font-bold text-red-600">Interest Rates ↑</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">When market interest rates increase:</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-600" />
                      <span>Bond Prices Fall ↓</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span>Bond Yields Rise ↑</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingDown className="h-6 w-6 text-green-600" />
                    <h5 className="font-bold text-green-600">Interest Rates ↓</h5>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">When market interest rates decrease:</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span>Bond Prices Rise ↑</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingDown className="h-4 w-4 text-red-600" />
                      <span>Bond Yields Fall ↓</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Why Does This Happen?</h4>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h5 className="font-semibold mb-3">Scenario: Interest Rates Rise</h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Initial Situation:</p>
                    <ul className="space-y-1">
                      <li>• You own a bond: 8% coupon, Face Value {formatCurrency(100000)}</li>
                      <li>• Market rate: 8%</li>
                      <li>• Your bond trades at par: {formatCurrency(100000)}</li>
                    </ul>
                  </div>

                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded">
                    <p className="font-semibold mb-2 text-red-800 dark:text-red-400">
                      After Rate Increase:
                    </p>
                    <ul className="space-y-1">
                      <li>• Market rate rises to 10%</li>
                      <li>• New bonds offer 10% coupon</li>
                      <li>• Your 8% bond is less attractive</li>
                      <li>• No one wants to buy at {formatCurrency(100000)}</li>
                    </ul>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded">
                    <p className="font-semibold mb-2 text-green-800 dark:text-green-400">
                      Market Adjustment:
                    </p>
                    <ul className="space-y-1">
                      <li>• Your bond price drops to ~{formatCurrency(82000)}</li>
                      <li>• At this price, YTM ≈ 10% (matches market)</li>
                      <li>• Now competitive with new 10% bonds</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h5 className="font-semibold mb-3">Scenario: Interest Rates Fall</h5>
                <div className="space-y-3 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">Initial Situation:</p>
                    <ul className="space-y-1">
                      <li>• You own a bond: 10% coupon, Face Value {formatCurrency(100000)}</li>
                      <li>• Market rate: 10%</li>
                      <li>• Your bond trades at par: {formatCurrency(100000)}</li>
                    </ul>
                  </div>

                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-800 dark:text-blue-400">
                      After Rate Decrease:
                    </p>
                    <ul className="space-y-1">
                      <li>• Market rate falls to 7%</li>
                      <li>• New bonds offer only 7% coupon</li>
                      <li>• Your 10% bond is very attractive</li>
                      <li>• High demand for your bond</li>
                    </ul>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded">
                    <p className="font-semibold mb-2 text-green-800 dark:text-green-400">
                      Market Adjustment:
                    </p>
                    <ul className="space-y-1">
                      <li>• Your bond price rises to ~{formatCurrency(120000)}</li>
                      <li>• At this price, YTM ≈ 7% (matches market)</li>
                      <li>• You can sell at profit if needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="border p-3 text-left font-bold">Market Interest Rate</th>
                    <th className="border p-3 text-left font-bold">8% Coupon Bond Price</th>
                    <th className="border p-3 text-left font-bold">YTM</th>
                    <th className="border p-3 text-left font-bold">Your Gain/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">12%</td>
                    <td className="border p-3 text-red-600">₹66,000 (34% discount)</td>
                    <td className="border p-3">~12%</td>
                    <td className="border p-3 text-red-600">-34% if sold</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3">10%</td>
                    <td className="border p-3 text-orange-600">₹82,000 (18% discount)</td>
                    <td className="border p-3">~10%</td>
                    <td className="border p-3 text-orange-600">-18% if sold</td>
                  </tr>
                  <tr>
                    <td className="border p-3">8%</td>
                    <td className="border p-3 font-bold">₹1,00,000 (at par)</td>
                    <td className="border p-3">8%</td>
                    <td className="border p-3">No gain/loss</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3">6%</td>
                    <td className="border p-3 text-green-600">₹1,20,000 (20% premium)</td>
                    <td className="border p-3">~6%</td>
                    <td className="border p-3 text-green-600">+20% if sold</td>
                  </tr>
                  <tr>
                    <td className="border p-3">4%</td>
                    <td className="border p-3 text-green-600">₹1,42,000 (42% premium)</td>
                    <td className="border p-3">~4%</td>
                    <td className="border p-3 text-green-600">+42% if sold</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Accrued Interest */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Info className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Accrued Interest</CardTitle>
            </div>
            <CardDescription>Understanding the interest component when buying/selling bonds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">What is Accrued Interest?</h4>
              <p className="text-muted-foreground mb-4">
                When you buy a bond between coupon payment dates, the seller has earned interest for the 
                days they held the bond. You must pay this <strong>accrued interest</strong> to the seller, 
                in addition to the bond's market price.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-orange-500">
                <p className="font-bold mb-2">Formula:</p>
                <p className="font-mono text-sm">
                  Accrued Interest = (Annual Coupon / 365) × Days Since Last Payment
                </p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 dark:bg-orange-900/20 p-6 rounded-r-lg">
              <h5 className="font-bold mb-4">Example Calculation</h5>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Bond Details:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Face Value = {formatCurrency(100000)}</li>
                    <li>• Coupon Rate = 9% per annum</li>
                    <li>• Annual Coupon = {formatCurrency(9000)}</li>
                    <li>• Payment Frequency = Semi-annual</li>
                    <li>• Last Payment = January 1, 2024</li>
                    <li>• Purchase Date = April 1, 2024</li>
                    <li>• Days Held by Seller = 90 days</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Calculation:</p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm space-y-2">
                    <p className="font-mono">Accrued Interest</p>
                    <p className="font-mono">= (9,000 / 365) × 90</p>
                    <p className="font-mono">= 24.66 × 90</p>
                    <p className="text-orange-600 font-bold text-base mt-2">
                      = {formatCurrency(2219)}
                    </p>
                    <hr className="my-2" />
                    <p className="text-xs"><strong>Total Payment:</strong></p>
                    <p className="text-xs">Bond Price + Accrued Interest</p>
                    <p className="text-xs">= {formatCurrency(100000)} + {formatCurrency(2219)}</p>
                    <p className="font-bold">{formatCurrency(102219)}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    On next coupon date (July 1), you'll receive full {formatCurrency(4500)} coupon 
                    for 6 months, even though you only held for 3 months.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Why Accrued Interest is Fair
              </h5>
              <p className="text-sm text-muted-foreground mb-2">
                Think of it as a settlement mechanism:
              </p>
              <ul className="text-sm space-y-1">
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Seller earned interest for 90 days they held the bond</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>You pay them this earned portion upfront</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>On coupon date, you receive full payment for 180 days</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Net effect: You earn for only the days you held the bond</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-green-500 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Current Yield = Annual Coupon / Current Price (simple but incomplete)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>YTM is the MOST IMPORTANT metric - accounts for all returns including capital gains</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>For callable bonds, check YTC as well - you'll earn the lower of YTM or YTC</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Bond prices and yields move inversely - rates up = prices down, rates down = prices up</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Accrued interest must be paid when buying bonds between coupon dates</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Always compare YTM, not coupon rates, when evaluating bonds</span>
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default YieldCalculations;
