"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Layers, 
  TrendingUp, 
  Calendar, 
  DollarSign,
  Calculator,
  RefreshCw,
  Users,
  Lightbulb,
  Target,
  Shield,
  CheckCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const BondLaddering = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Strategy</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Bond Laddering Strategy</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Master the art of bond laddering - a time-tested strategy that provides steady income, 
            reduces reinvestment risk, and maintains liquidity. Perfect for retirees and conservative investors.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* What is Bond Laddering */}
        <Card className="border-l-4 border-l-purple-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">What is Bond Laddering?</CardTitle>
            </div>
            <CardDescription>Understanding the ladder strategy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                <strong>Bond laddering</strong> is an investment strategy where you buy bonds with different 
                maturity dates spread evenly over time. As each bond matures, you reinvest the proceeds into 
                a new longer-term bond, maintaining the ladder structure.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-purple-600" />
                Simple Illustration
              </h4>
              <div className="space-y-3">
                <p className="mb-4">Instead of investing {formatCurrency(500000)} in one 5-year bond:</p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-3">Create a 5-Year Ladder:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                      <span>{formatCurrency(100000)} in 1-year bond</span>
                      <Badge variant="outline">Matures 2027</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                      <span>{formatCurrency(100000)} in 2-year bond</span>
                      <Badge variant="outline">Matures 2028</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                      <span>{formatCurrency(100000)} in 3-year bond</span>
                      <Badge variant="outline">Matures 2029</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                      <span>{formatCurrency(100000)} in 4-year bond</span>
                      <Badge variant="outline">Matures 2030</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-red-50 dark:bg-red-900/20 rounded">
                      <span>{formatCurrency(100000)} in 5-year bond</span>
                      <Badge variant="outline">Matures 2031</Badge>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg mt-4">
                  <p className="font-medium mb-2">Result:</p>
                  <p className="text-sm">
                    • One bond matures every year<br/>
                    • Provides annual liquidity without selling<br/>
                    • Can reinvest at current market rates<br/>
                    • Average duration: 3 years (vs 5 years for single bond)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits of Laddering */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Benefits of Bond Laddering</CardTitle>
            </div>
            <CardDescription>Why this strategy works so well</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-lg">Reduced Reinvestment Risk</h4>
                </div>
                <p className="text-sm mb-3">
                  By staggering maturities, you don't have to reinvest all your money at once. 
                  If rates are low when one bond matures, only a portion needs reinvestment.
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                  <p className="font-medium mb-1">Example:</p>
                  <p>Single {formatCurrency(500000)} bond maturing in low-rate environment = all money locked at low rates</p>
                  <p className="mt-2 text-blue-600">Ladder: Only {formatCurrency(100000)} affected annually</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <h4 className="font-semibold text-lg">Steady Cash Flow</h4>
                </div>
                <p className="text-sm mb-3">
                  Regular bond maturities provide predictable liquidity. Perfect for retirees 
                  who need periodic access to capital without selling bonds.
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                  <p className="font-medium mb-1">Example:</p>
                  <p>10-bond ladder: One bond matures annually</p>
                  <p className="mt-2 text-green-600">Access to {formatCurrency(100000)} every year without market risk</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                  <h4 className="font-semibold text-lg">Interest Rate Flexibility</h4>
                </div>
                <p className="text-sm mb-3">
                  Laddering protects you in both rising and falling rate environments. 
                  You benefit from higher rates when bonds mature and can be reinvested.
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                  <p className="font-medium mb-1">Rising Rates:</p>
                  <p className="text-purple-600">Maturing bonds can be reinvested at higher yields</p>
                  <p className="font-medium mt-2 mb-1">Falling Rates:</p>
                  <p className="text-purple-600">Existing long-term bonds locked in higher rates</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-6 w-6 text-orange-600" />
                  <h4 className="font-semibold text-lg">Reduced Duration Risk</h4>
                </div>
                <p className="text-sm mb-3">
                  Ladders have lower average duration than single long-term bonds. 
                  This means less price volatility when interest rates change.
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded text-sm">
                  <p className="font-medium mb-1">Comparison:</p>
                  <p>Single 10-year bond: Duration ≈ 7.5 years</p>
                  <p className="mt-2 text-orange-600">10-year ladder: Average duration ≈ 5 years (33% less risk)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Construction */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Building Your Bond Ladder: Step-by-Step</CardTitle>
            </div>
            <CardDescription>How to construct a ladder from scratch</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Step 1: Determine Your Investment Amount & Time Horizon
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Questions to Ask:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• How much total capital do you want to invest?</li>
                      <li>• How long is your investment horizon? (5, 10, 15 years?)</li>
                      <li>• How frequently do you need access to funds?</li>
                      <li>• What's your risk tolerance?</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-medium mb-2">Example Decision:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Total Investment: {formatCurrency(5000000)}</li>
                      <li>• Time Horizon: 10 years</li>
                      <li>• Liquidity Need: Annual access preferred</li>
                      <li>• Risk Tolerance: Low (stick to govt bonds and AAA corporates)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Step 2: Choose Number of Rungs (Bonds)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Common Ladder Structures:</p>
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <p className="font-medium">5-Year Ladder (5 rungs)</p>
                        <p className="text-sm text-muted-foreground">Bonds maturing in years 1, 2, 3, 4, 5</p>
                        <p className="text-sm mt-1"><strong>Best for:</strong> Short-term goals, higher liquidity needs</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <p className="font-medium">10-Year Ladder (10 rungs)</p>
                        <p className="text-sm text-muted-foreground">Bonds maturing in years 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</p>
                        <p className="text-sm mt-1"><strong>Best for:</strong> Retirement income, balanced approach</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <p className="font-medium">15-Year Ladder (15 rungs)</p>
                        <p className="text-sm text-muted-foreground">Bonds maturing annually for 15 years</p>
                        <p className="text-sm mt-1"><strong>Best for:</strong> Long-term planning, maximizing yields</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Step 3: Allocate Capital Across Rungs
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Two Common Approaches:</p>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Equal Weighting (Recommended)</h5>
                        <p className="text-sm mb-2">Divide capital equally across all rungs</p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                          <p className="text-sm"><strong>Example:</strong> {formatCurrency(5000000)} ÷ 10 rungs = {formatCurrency(500000)} per bond</p>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Barbell Weighting (Advanced)</h5>
                        <p className="text-sm mb-2">More in short and long bonds, less in middle</p>
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded">
                          <p className="text-sm"><strong>Example:</strong> 35% in 1-3 year bonds, 15% in 4-7 year, 50% in 8-10 year bonds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Step 4: Select Bonds for Each Rung
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Bond Selection Criteria:</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-orange-600 mt-1">1</Badge>
                        <div>
                          <p className="font-medium">Credit Quality</p>
                          <p className="text-muted-foreground">Stick to AAA/AA+ rated bonds or government securities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge className="bg-orange-600 mt-1">2</Badge>
                        <div>
                          <p className="font-medium">Maturity Matching</p>
                          <p className="text-muted-foreground">Buy bonds that mature exactly when you need liquidity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge className="bg-orange-600 mt-1">3</Badge>
                        <div>
                          <p className="font-medium">Diversification</p>
                          <p className="text-muted-foreground">Don't put multiple rungs in same issuer's bonds</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge className="bg-orange-600 mt-1">4</Badge>
                        <div>
                          <p className="font-medium">Yield Optimization</p>
                          <p className="text-muted-foreground">Within same rating, choose higher-yielding bonds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">
                  Step 5: Execute & Monitor
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Implementation:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Purchase all bonds within a short timeframe (1-2 weeks)</li>
                      <li>• Keep detailed records: ISIN, maturity dates, yields</li>
                      <li>• Set calendar reminders for maturity dates</li>
                      <li>• Monitor credit ratings quarterly</li>
                      <li>• Plan reinvestment strategy before each maturity</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Detailed Example */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Comprehensive Example: ₹50L Bond Ladder</CardTitle>
            </div>
            <CardDescription>Building a 10-year ladder step-by-step</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Initial Setup (January 2026)</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-purple-100 dark:bg-purple-900/30">
                      <th className="border p-3 text-left">Rung</th>
                      <th className="border p-3 text-left">Maturity</th>
                      <th className="border p-3 text-left">Bond Details</th>
                      <th className="border p-3 text-right">Investment</th>
                      <th className="border p-3 text-right">Coupon</th>
                      <th className="border p-3 text-right">Annual Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">1</td>
                      <td className="border p-3">Jan 2027</td>
                      <td className="border p-3">1Y G-Sec</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">6.8%</td>
                      <td className="border p-3 text-right">{formatCurrency(34000)}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">2</td>
                      <td className="border p-3">Jan 2028</td>
                      <td className="border p-3">2Y G-Sec</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">7.0%</td>
                      <td className="border p-3 text-right">{formatCurrency(35000)}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">3</td>
                      <td className="border p-3">Jan 2029</td>
                      <td className="border p-3">3Y HDFC Bank</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">7.3%</td>
                      <td className="border p-3 text-right">{formatCurrency(36500)}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">4</td>
                      <td className="border p-3">Jan 2030</td>
                      <td className="border p-3">4Y NTPC</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">7.5%</td>
                      <td className="border p-3 text-right">{formatCurrency(37500)}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">5</td>
                      <td className="border p-3">Jan 2031</td>
                      <td className="border p-3">5Y G-Sec</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">7.2%</td>
                      <td className="border p-3 text-right">{formatCurrency(36000)}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">6</td>
                      <td className="border p-3">Jan 2032</td>
                      <td className="border p-3">6Y Bajaj Finance</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">7.8%</td>
                      <td className="border p-3 text-right">{formatCurrency(39000)}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">7</td>
                      <td className="border p-3">Jan 2033</td>
                      <td className="border p-3">7Y L&T</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">7.9%</td>
                      <td className="border p-3 text-right">{formatCurrency(39500)}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">8</td>
                      <td className="border p-3">Jan 2034</td>
                      <td className="border p-3">8Y G-Sec</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">7.4%</td>
                      <td className="border p-3 text-right">{formatCurrency(37000)}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">9</td>
                      <td className="border p-3">Jan 2035</td>
                      <td className="border p-3">9Y Power Grid</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">8.0%</td>
                      <td className="border p-3 text-right">{formatCurrency(40000)}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">10</td>
                      <td className="border p-3">Jan 2036</td>
                      <td className="border p-3">10Y G-Sec</td>
                      <td className="border p-3 text-right">{formatCurrency(500000)}</td>
                      <td className="border p-3 text-right">7.6%</td>
                      <td className="border p-3 text-right">{formatCurrency(38000)}</td>
                    </tr>
                    <tr className="bg-purple-100 dark:bg-purple-900/30 font-bold">
                      <td colSpan={3} className="border p-3">TOTAL</td>
                      <td className="border p-3 text-right">{formatCurrency(5000000)}</td>
                      <td className="border p-3 text-right">7.45% avg</td>
                      <td className="border p-3 text-right">{formatCurrency(372500)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Year 1 Income (2026)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Annual Coupons:</span>
                    <span className="font-bold">{formatCurrency(372500)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Income:</span>
                    <span className="font-bold">{formatCurrency(31042)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>Average Yield:</span>
                    <span className="font-bold text-green-600">7.45%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  Portfolio Metrics
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Average Duration:</span>
                    <span className="font-bold">5.5 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diversification:</span>
                    <span className="font-bold">7 issuers</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span>Annual Liquidity:</span>
                    <span className="font-bold text-purple-600">{formatCurrency(500000)}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rebalancing When Bonds Mature */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <RefreshCw className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Rebalancing: When Bonds Mature</CardTitle>
            </div>
            <CardDescription>Maintaining your ladder over time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The beauty of laddering is in the maintenance. As each bond matures, you reinvest 
                the proceeds into a new bond at the long end of the ladder, maintaining the structure.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Rebalancing Example (January 2027)</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-3">What Happens:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Your 1-year G-Sec matures (Rung 1)</li>
                    <li>• You receive principal: {formatCurrency(500000)}</li>
                    <li>• Plus final interest payment: {formatCurrency(34000)}</li>
                    <li>• <strong>Total proceeds: {formatCurrency(534000)}</strong></li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-3">Reinvestment Decision:</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Option 1 (Maintain Ladder):</strong></p>
                    <p className="ml-4">Buy new 10-year bond with {formatCurrency(500000)} (now matures Jan 2037)</p>
                    <p className="ml-4 text-green-600">✓ Keeps ladder intact, steady income continues</p>
                    
                    <p className="mt-3"><strong>Option 2 (Use Proceeds):</strong></p>
                    <p className="ml-4">Spend {formatCurrency(500000)} for major expense</p>
                    <p className="ml-4 text-blue-600">→ Ladder reduces to 9 rungs</p>
                    
                    <p className="mt-3"><strong>Option 3 (Extend Interest):</strong></p>
                    <p className="ml-4">Reinvest both principal ({formatCurrency(500000)}) + interest ({formatCurrency(34000)})</p>
                    <p className="ml-4 text-purple-600">→ Ladder grows over time</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">10-Year Reinvestment Schedule</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border p-3 text-left">Year</th>
                      <th className="border p-3 text-left">Maturing Bond</th>
                      <th className="border p-3 text-left">Proceeds</th>
                      <th className="border p-3 text-left">Reinvestment Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">2027</td>
                      <td className="border p-3">1Y G-Sec</td>
                      <td className="border p-3">{formatCurrency(534000)}</td>
                      <td className="border p-3">Buy new 10Y bond → Matures 2037</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">2028</td>
                      <td className="border p-3">2Y G-Sec</td>
                      <td className="border p-3">{formatCurrency(535000)}</td>
                      <td className="border p-3">Buy new 10Y bond → Matures 2038</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">2029</td>
                      <td className="border p-3">3Y HDFC</td>
                      <td className="border p-3">{formatCurrency(536500)}</td>
                      <td className="border p-3">Buy new 10Y bond → Matures 2039</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">2030</td>
                      <td className="border p-3">4Y NTPC</td>
                      <td className="border p-3">{formatCurrency(537500)}</td>
                      <td className="border p-3">Buy new 10Y bond → Matures 2040</td>
                    </tr>
                    <tr className="bg-blue-50 dark:bg-blue-900/20">
                      <td colSpan={4} className="border p-3 text-center font-medium">
                        Continue pattern annually - ladder perpetually maintained
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Perfect for Retirees */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Why Laddering is Ideal for Retirees</CardTitle>
            </div>
            <CardDescription>Predictable income without market risk</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4">Retiree Benefits</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p><strong>Predictable Cash Flow:</strong> Know exactly when money becomes available</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p><strong>No Forced Selling:</strong> Don't have to sell bonds in down markets</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p><strong>Peace of Mind:</strong> Principal guaranteed (for govt bonds)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p><strong>Simple Management:</strong> Set it and forget it approach</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p><strong>Inflation Protection:</strong> Reinvest at higher rates as they rise</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                <h4 className="font-semibold text-lg mb-4">Retirement Ladder Example</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                    <p className="font-medium mb-2">Scenario:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Retirement corpus: {formatCurrency(10000000)}</li>
                      <li>• Annual expenses: {formatCurrency(600000)}</li>
                      <li>• Strategy: 10-year ladder</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                    <p className="font-medium mb-2">Results:</p>
                    <ul className="text-sm space-y-1">
                      <li>• {formatCurrency(1000000)} matures annually</li>
                      <li>• Use {formatCurrency(600000)} for expenses</li>
                      <li>• Reinvest {formatCurrency(400000)} + interest</li>
                      <li>• Ladder grows over time</li>
                      <li className="text-green-600 font-bold pt-2">→ Income lasts forever!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-purple-500 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 mt-1">1</Badge>
                  <p className="text-sm">Laddering provides steady liquidity without selling bonds</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 mt-1">2</Badge>
                  <p className="text-sm">Reduces reinvestment risk - only small portion affected at a time</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 mt-1">3</Badge>
                  <p className="text-sm">Lower duration than single long-term bond = less volatility</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-600 mt-1">4</Badge>
                  <p className="text-sm">Equal weighting across rungs is simplest and most effective</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-1">5</Badge>
                  <p className="text-sm">Reinvest maturing bonds at long end to maintain ladder</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-1">6</Badge>
                  <p className="text-sm">Perfect strategy for retirees needing predictable income</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-1">7</Badge>
                  <p className="text-sm">Diversify across issuers - don't use same issuer for multiple rungs</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-600 mt-1">8</Badge>
                  <p className="text-sm">Start with 5 or 10-year ladder based on your horizon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default BondLaddering;
