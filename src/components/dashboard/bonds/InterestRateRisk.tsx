"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  ShieldAlert, 
  Clock,
  Calculator,
  ArrowUpDown,
  LineChart,
  Target,
  Lightbulb,
  Activity
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const InterestRateRisk = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Risk Management</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Interest Rate Risk</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Understand the inverse relationship between interest rates and bond prices. 
            Master duration, convexity, and strategies to manage interest rate risk in your bond portfolio.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Inverse Relationship */}
        <Card className="border-l-4 border-l-orange-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ArrowUpDown className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">The Inverse Relationship</CardTitle>
            </div>
            <CardDescription>How interest rates affect bond prices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Interest rate risk is the risk that bond prices will fall when interest rates rise, 
                and vice versa. This is the most fundamental risk in bond investing.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                The Golden Rule
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-red-600" />
                    <h5 className="font-bold">Interest Rates ↑</h5>
                  </div>
                  <p className="text-red-800 dark:text-red-200">Bond Prices ↓</p>
                  <p className="text-sm mt-2">When rates rise, existing bonds with lower coupon rates become less attractive</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="h-5 w-5 text-green-600" />
                    <h5 className="font-bold">Interest Rates ↓</h5>
                  </div>
                  <p className="text-green-800 dark:text-green-200">Bond Prices ↑</p>
                  <p className="text-sm mt-2">When rates fall, existing bonds with higher coupon rates become more valuable</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-orange-600" />
                Practical Example
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="mb-3">You buy a 10-year bond at face value:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• Face Value: {formatCurrency(100000)}</li>
                    <li>• Coupon Rate: 7% per year</li>
                    <li>• Annual Interest: {formatCurrency(7000)}</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Scenario: Interest rates rise to 9%</p>
                  <p className="mb-3">New bonds offer 9% coupon. Your 7% bond is less attractive.</p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-red-500">
                    <p className="font-medium mb-1">Market Value drops to: ~{formatCurrency(87000)}</p>
                    <p className="text-sm text-muted-foreground">
                      Loss of {formatCurrency(13000)} (13%) if you sell before maturity
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Scenario: Interest rates fall to 5%</p>
                  <p className="mb-3">New bonds offer only 5% coupon. Your 7% bond is more attractive.</p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-500">
                    <p className="font-medium mb-1">Market Value rises to: ~{formatCurrency(116000)}</p>
                    <p className="text-sm text-muted-foreground">
                      Gain of {formatCurrency(16000)} (16%) if you sell before maturity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Duration Concept */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Duration: Measuring Interest Rate Sensitivity</CardTitle>
            </div>
            <CardDescription>Understanding duration and modified duration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                <strong>Duration</strong> measures the weighted average time to receive all cash flows from a bond. 
                More importantly, it indicates how sensitive a bond's price is to interest rate changes.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Key Duration Concepts</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">1. Macaulay Duration</h5>
                  <p className="text-sm mb-2">
                    Weighted average time (in years) to receive cash flows. 
                    Considers present value of all coupon payments and principal.
                  </p>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded mt-2">
                    <p className="text-sm"><strong>Formula:</strong> Duration = Σ (t × PV of Cash Flow) / Bond Price</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">2. Modified Duration</h5>
                  <p className="text-sm mb-2">
                    Directly measures price sensitivity to interest rate changes.
                  </p>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded mt-2">
                    <p className="text-sm"><strong>Formula:</strong> Modified Duration = Macaulay Duration / (1 + YTM/n)</p>
                    <p className="text-sm mt-2"><strong>Price Change:</strong> ≈ -Modified Duration × Change in Yield</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-orange-600" />
                Duration Calculation Example
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="mb-3">Bond Details:</p>
                  <ul className="space-y-1 ml-6">
                    <li>• Face Value: {formatCurrency(100000)}</li>
                    <li>• Coupon Rate: 8% (semi-annual)</li>
                    <li>• Years to Maturity: 5 years</li>
                    <li>• YTM: 8% (trading at par)</li>
                    <li>• <strong>Macaulay Duration: 4.22 years</strong></li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-3">Modified Duration Calculation:</p>
                  <div className="space-y-2 text-sm">
                    <p>Modified Duration = 4.22 / (1 + 0.08/2)</p>
                    <p>Modified Duration = 4.22 / 1.04</p>
                    <p className="text-lg font-bold text-blue-600">Modified Duration = 4.06 years</p>
                  </div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-3">What this means:</p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>If interest rates rise by 1%:</strong>
                    </p>
                    <p className="text-sm ml-4">
                      Price Change = -4.06 × 1% = <span className="text-red-600 font-bold">-4.06%</span>
                    </p>
                    <p className="text-sm ml-4">
                      New Price = {formatCurrency(100000)} × 0.9594 = <span className="font-bold">{formatCurrency(95940)}</span>
                    </p>
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm">
                        <strong>If interest rates fall by 1%:</strong>
                      </p>
                      <p className="text-sm ml-4">
                        Price Change = -4.06 × (-1%) = <span className="text-green-600 font-bold">+4.06%</span>
                      </p>
                      <p className="text-sm ml-4">
                        New Price = {formatCurrency(100000)} × 1.0406 = <span className="font-bold">{formatCurrency(104060)}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Duration Properties */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Key Duration Properties</CardTitle>
            </div>
            <CardDescription>Factors affecting bond duration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Longer Maturity = Higher Duration</h4>
                <ul className="space-y-2 text-sm">
                  <li>• 1-year bond: Duration ≈ 1 year</li>
                  <li>• 5-year bond: Duration ≈ 4.2 years</li>
                  <li>• 10-year bond: Duration ≈ 7.5 years</li>
                  <li>• 30-year bond: Duration ≈ 18 years</li>
                </ul>
                <p className="text-sm mt-3 text-blue-800 dark:text-blue-200">
                  More sensitive to rate changes
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Higher Coupon = Lower Duration</h4>
                <ul className="space-y-2 text-sm">
                  <li>• 4% coupon: Duration = 8.5 years</li>
                  <li>• 6% coupon: Duration = 7.8 years</li>
                  <li>• 8% coupon: Duration = 7.2 years</li>
                  <li>• 10% coupon: Duration = 6.7 years</li>
                </ul>
                <p className="text-sm mt-3 text-green-800 dark:text-green-200">
                  (For same 10-year maturity)
                </p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Duration Rules of Thumb</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <p>Zero-coupon bonds have duration equal to their maturity (highest interest rate risk)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <p>Duration is always less than maturity (except for zero-coupon bonds)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <p>Higher yield bonds have lower duration (less price volatility)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  <p>Duration decreases as bond approaches maturity</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Convexity */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Activity className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Convexity: Beyond Duration</CardTitle>
            </div>
            <CardDescription>Understanding the curvature of bond price-yield relationship</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                <strong>Convexity</strong> measures the curvature in the relationship between bond prices and yields. 
                Duration assumes a linear relationship, but the actual relationship is curved (convex).
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Why Convexity Matters</h4>
              <div className="space-y-4">
                <p>Convexity provides a more accurate price change estimate for large yield changes:</p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm font-mono mb-3">
                    Price Change = (-Duration × ΔYield) + (½ × Convexity × ΔYield²)
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded">
                      <p className="font-medium mb-1">Positive Convexity (Good)</p>
                      <p className="text-xs">• Price increases more when yields fall</p>
                      <p className="text-xs">• Price decreases less when yields rise</p>
                    </div>
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded">
                      <p className="font-medium mb-1">Higher Convexity = Better</p>
                      <p className="text-xs">• More price appreciation potential</p>
                      <p className="text-xs">• Less downside risk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">Convexity Example</h4>
              <div className="space-y-4">
                <div>
                  <p className="mb-3">Bond with:</p>
                  <ul className="space-y-1 ml-6">
                    <li>• Price: {formatCurrency(100000)}</li>
                    <li>• Modified Duration: 5.0</li>
                    <li>• Convexity: 28.5</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-3">Scenario: Interest rates rise by 2%</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Duration estimate only:</strong></p>
                    <p className="ml-4">Price Change = -5.0 × 2% = -10%</p>
                    <p className="ml-4">New Price = {formatCurrency(90000)}</p>
                    
                    <p className="mt-3"><strong>Duration + Convexity estimate:</strong></p>
                    <p className="ml-4">Price Change = (-5.0 × 2%) + (½ × 28.5 × 0.02²)</p>
                    <p className="ml-4">= -10% + 0.57% = -9.43%</p>
                    <p className="ml-4 text-green-600 font-bold">New Price = {formatCurrency(90570)}</p>
                    <p className="ml-4 text-sm text-green-600">
                      Convexity reduces loss by {formatCurrency(570)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Managing Interest Rate Risk */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Managing Interest Rate Risk</CardTitle>
            </div>
            <CardDescription>Strategies to protect your bond portfolio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  1. Bond Laddering
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <p>Spread investments across different maturities:</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>• Buy bonds maturing in 1, 2, 3, 4, and 5 years</li>
                      <li>• When 1-year bond matures, reinvest in new 5-year bond</li>
                      <li>• Maintains steady income while reducing rate risk</li>
                      <li>• Provides liquidity at regular intervals</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  2. Barbell Strategy
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <p>Combine short-term and long-term bonds:</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>• 50% in 1-2 year bonds (low duration, less risk)</li>
                      <li>• 50% in 10+ year bonds (higher yield)</li>
                      <li>• Avoid intermediate maturities</li>
                      <li>• Better than bullet strategy in volatile markets</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  3. Duration Matching
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <p>Match bond duration to your investment horizon:</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>• Need money in 5 years? Buy bonds with 5-year duration</li>
                      <li>• Immunizes portfolio against rate changes</li>
                      <li>• Lock in current yield for your time horizon</li>
                      <li>• Ideal for goal-based investing</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  4. Hold to Maturity
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <p>The simplest strategy - eliminates interest rate risk:</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>• Buy bonds and hold until maturity</li>
                      <li>• Price fluctuations don't matter (you get face value)</li>
                      <li>• Receive all coupon payments as expected</li>
                      <li>• Only credit risk remains (issuer default)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">
                  5. Floating Rate Bonds
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <p>Bonds with variable interest rates:</p>
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>• Coupon adjusts periodically based on benchmark rate</li>
                      <li>• Low duration (typically 0.1 to 0.5 years)</li>
                      <li>• Minimal price volatility when rates change</li>
                      <li>• Good hedge against rising rates</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Rate Cycle Impact */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <LineChart className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Interest Rate Cycle Impact</CardTitle>
            </div>
            <CardDescription>How different rate environments affect bonds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-100 dark:bg-orange-900/30">
                    <th className="border p-3 text-left">Rate Environment</th>
                    <th className="border p-3 text-left">Bond Performance</th>
                    <th className="border p-3 text-left">Best Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3">
                      <div className="font-semibold text-red-600">Rising Rates</div>
                      <div className="text-sm text-muted-foreground">RBI hiking rates</div>
                    </td>
                    <td className="border p-3">
                      <ul className="text-sm space-y-1">
                        <li>• Bond prices fall</li>
                        <li>• Longer duration bonds suffer more</li>
                        <li>• Capital losses if sold</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="text-sm space-y-1">
                        <li>✓ Stick to short duration (1-3 years)</li>
                        <li>✓ Floating rate bonds</li>
                        <li>✓ Wait for higher yields before buying long bonds</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3">
                      <div className="font-semibold text-green-600">Falling Rates</div>
                      <div className="text-sm text-muted-foreground">RBI cutting rates</div>
                    </td>
                    <td className="border p-3">
                      <ul className="text-sm space-y-1">
                        <li>• Bond prices rise</li>
                        <li>• Longer duration bonds gain more</li>
                        <li>• Capital appreciation opportunities</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="text-sm space-y-1">
                        <li>✓ Lock in longer duration (7-10 years)</li>
                        <li>✓ Fixed rate bonds</li>
                        <li>✓ Consider selling for capital gains</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3">
                      <div className="font-semibold text-blue-600">Stable Rates</div>
                      <div className="text-sm text-muted-foreground">No major changes</div>
                    </td>
                    <td className="border p-3">
                      <ul className="text-sm space-y-1">
                        <li>• Steady coupon income</li>
                        <li>• Minimal price volatility</li>
                        <li>• Predictable returns</li>
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="text-sm space-y-1">
                        <li>✓ Laddering strategy</li>
                        <li>✓ Hold to maturity</li>
                        <li>✓ Focus on credit quality</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                Real-World Example: Indian Rate Cycle (2022-2024)
              </h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-2">May 2022 - Feb 2023: Rising Rate Phase</p>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• RBI raised repo rate from 4.0% to 6.5% (250 bps)</li>
                    <li>• 10-year G-Sec yield rose from 7.0% to 7.5%</li>
                    <li>• Bond prices fell 5-8% depending on duration</li>
                    <li>• Investors who held short duration bonds fared better</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-2">2024: Stable Rate Environment</p>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Repo rate maintained at 6.5%</li>
                    <li>• Bond markets stabilized</li>
                    <li>• Good time for laddering and hold-to-maturity strategies</li>
                    <li>• Yields attractive compared to FDs (7-8% range)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-orange-500 shadow-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">1</Badge>
                  <p className="text-sm">Interest rates and bond prices move in opposite directions - always</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">2</Badge>
                  <p className="text-sm">Duration measures price sensitivity: higher duration = more volatility</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">3</Badge>
                  <p className="text-sm">Longer maturity and lower coupon bonds have higher duration</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">4</Badge>
                  <p className="text-sm">Convexity provides additional upside when rates fall</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">5</Badge>
                  <p className="text-sm">Hold to maturity eliminates interest rate risk completely</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">6</Badge>
                  <p className="text-sm">Laddering and barbell strategies help manage rate uncertainty</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">7</Badge>
                  <p className="text-sm">Match bond duration to your investment time horizon</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">8</Badge>
                  <p className="text-sm">Consider floating rate bonds during rising rate cycles</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default InterestRateRisk;
