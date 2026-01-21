"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  PieChart, 
  Target, 
  TrendingUp, 
  Users,
  Calendar,
  RefreshCw,
  Shield,
  Lightbulb,
  BarChart3,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const BondPortfolio = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <PieChart className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Portfolio Strategy</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Bond Portfolio Construction</h1>
          <p className="text-xl text-teal-100 max-w-3xl">
            Build a well-diversified bond portfolio tailored to your age, goals, and risk tolerance. 
            Learn asset allocation rules, rebalancing strategies, and see sample portfolios for every life stage.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Asset Allocation */}
        <Card className="border-l-4 border-l-teal-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <PieChart className="h-6 w-6 text-teal-600" />
              <CardTitle className="text-2xl">Bond Allocation in Your Portfolio</CardTitle>
            </div>
            <CardDescription>How much should you allocate to bonds?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                The percentage of bonds in your portfolio depends on your age, risk tolerance, 
                financial goals, and investment horizon. Bonds provide stability and income, 
                while equities offer growth potential.
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Classic Asset Allocation Rules</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-bold mb-2">Age-Based Rule</h5>
                  <p className="text-sm mb-3">Traditional approach linking age to bond allocation</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <p className="font-mono text-sm"><strong>Bond % = Your Age</strong></p>
                    <p className="text-xs mt-2">Example: 40 years old → 40% bonds, 60% equities</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-bold mb-2">Modified Rule</h5>
                  <p className="text-sm mb-3">Adjusted for longer lifespans and better health</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                    <p className="font-mono text-sm"><strong>Bond % = Age - 10</strong></p>
                    <p className="text-xs mt-2">Example: 40 years old → 30% bonds, 70% equities</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                  <h5 className="font-bold mb-2">110 Rule</h5>
                  <p className="text-sm mb-3">More aggressive, suitable for growth seekers</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                    <p className="font-mono text-sm"><strong>Bond % = 110 - Age</strong></p>
                    <p className="text-xs mt-2">Example: 40 years old → 70% bonds, 30% equities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">Allocation by Age Group</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal-100 dark:bg-teal-900/30">
                      <th className="border p-3 text-left">Age Group</th>
                      <th className="border p-3 text-left">Life Stage</th>
                      <th className="border p-3 text-center">Bonds %</th>
                      <th className="border p-3 text-center">Equities %</th>
                      <th className="border p-3 text-left">Rationale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">20-30</td>
                      <td className="border p-3">Early Career</td>
                      <td className="border p-3 text-center font-bold">10-20%</td>
                      <td className="border p-3 text-center font-bold">80-90%</td>
                      <td className="border p-3 text-sm">Long horizon, can take risks</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">30-40</td>
                      <td className="border p-3">Family Building</td>
                      <td className="border p-3 text-center font-bold">20-30%</td>
                      <td className="border p-3 text-center font-bold">70-80%</td>
                      <td className="border p-3 text-sm">Balance growth with stability</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">40-50</td>
                      <td className="border p-3">Peak Earning</td>
                      <td className="border p-3 text-center font-bold">30-40%</td>
                      <td className="border p-3 text-center font-bold">60-70%</td>
                      <td className="border p-3 text-sm">Protect accumulated wealth</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">50-60</td>
                      <td className="border p-3">Pre-Retirement</td>
                      <td className="border p-3 text-center font-bold">40-60%</td>
                      <td className="border p-3 text-center font-bold">40-60%</td>
                      <td className="border p-3 text-sm">Reduce risk, preserve capital</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">60+</td>
                      <td className="border p-3">Retirement</td>
                      <td className="border p-3 text-center font-bold">60-80%</td>
                      <td className="border p-3 text-center font-bold">20-40%</td>
                      <td className="border p-3 text-sm">Income focus, capital safety</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Goal-Based Allocation */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-teal-600" />
              <CardTitle className="text-2xl">Goal-Based Bond Selection</CardTitle>
            </div>
            <CardDescription>Match bonds to your financial goals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Short-Term Goals (1-3 years)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Examples:</p>
                    <ul className="space-y-1 text-sm ml-6">
                      <li>• Down payment for house</li>
                      <li>• Wedding expenses</li>
                      <li>• Car purchase</li>
                      <li>• Emergency fund supplement</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-medium mb-3">Recommended Bonds:</p>
                    <ul className="space-y-2 text-sm">
                      <li>✓ <strong>Treasury Bills:</strong> 91-day, 182-day, 364-day T-Bills</li>
                      <li>✓ <strong>Short-term G-Secs:</strong> 1-3 year government bonds</li>
                      <li>✓ <strong>Liquid Corporate Bonds:</strong> AAA-rated, 1-2 year maturity</li>
                      <li>✓ <strong>SDL (State Development Loans):</strong> Short duration</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-2">Expected Returns:</p>
                    <p className="text-sm">6.5% - 7.5% per annum (minimal risk)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Medium-Term Goals (3-7 years)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Examples:</p>
                    <ul className="space-y-1 text-sm ml-6">
                      <li>• Child's education (school)</li>
                      <li>• Major home renovation</li>
                      <li>• Starting a business</li>
                      <li>• Debt repayment planning</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-medium mb-3">Recommended Bonds:</p>
                    <ul className="space-y-2 text-sm">
                      <li>✓ <strong>Medium-term G-Secs:</strong> 4-7 year government bonds</li>
                      <li>✓ <strong>PSU Bonds:</strong> AAA-rated PSUs (NTPC, NHAI, PFC)</li>
                      <li>✓ <strong>Corporate Bonds:</strong> AA+ and above, 5-7 year maturity</li>
                      <li>✓ <strong>Tax-Free Bonds:</strong> If in 30% tax bracket</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-2">Expected Returns:</p>
                    <p className="text-sm">7.0% - 8.0% per annum (low risk)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Long-Term Goals (7+ years)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Examples:</p>
                    <ul className="space-y-1 text-sm ml-6">
                      <li>• Retirement corpus</li>
                      <li>• Child's higher education</li>
                      <li>• Child's marriage</li>
                      <li>• Wealth creation</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-medium mb-3">Recommended Bonds:</p>
                    <ul className="space-y-2 text-sm">
                      <li>✓ <strong>Long-term G-Secs:</strong> 10-30 year government bonds</li>
                      <li>✓ <strong>Infrastructure Bonds:</strong> Long tenure, stable cash flow</li>
                      <li>✓ <strong>Bond Laddering:</strong> Spread across 10-15 year ladder</li>
                      <li>✓ <strong>Mix with Equities:</strong> 50-70% equities for growth</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-2">Expected Returns:</p>
                    <p className="text-sm">7.5% - 8.5% per annum (moderate risk with growth)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Retirement Income (Ongoing)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Requirements:</p>
                    <ul className="space-y-1 text-sm ml-6">
                      <li>• Regular monthly income</li>
                      <li>• Capital preservation</li>
                      <li>• Minimal volatility</li>
                      <li>• Liquidity for emergencies</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-medium mb-3">Recommended Strategy:</p>
                    <ul className="space-y-2 text-sm">
                      <li>✓ <strong>Bond Ladder:</strong> 10-year ladder with annual maturities</li>
                      <li>✓ <strong>Senior Citizen Savings Scheme:</strong> Up to ₹30L</li>
                      <li>✓ <strong>Monthly Income Bonds:</strong> Regular coupon payments</li>
                      <li>✓ <strong>G-Secs Priority:</strong> 60-70% in government securities</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-2">Expected Returns:</p>
                    <p className="text-sm">7.0% - 7.8% per annum (very low risk, steady income)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Diversification Strategy */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-teal-600" />
              <CardTitle className="text-2xl">Bond Portfolio Diversification</CardTitle>
            </div>
            <CardDescription>Don't put all eggs in one basket</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Diversify by Issuer
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">Government Bonds (40-50%)</p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• G-Secs, T-Bills</li>
                      <li>• State Development Loans (SDLs)</li>
                      <li>• RBI Floating Rate Bonds</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">PSU Bonds (25-30%)</p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• NTPC, PFC, REC, IRFC</li>
                      <li>• NHAI, Power Grid</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">Corporate Bonds (20-30%)</p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Banks (HDFC, ICICI, SBI)</li>
                      <li>• Large caps (Tata, Reliance, Bajaj)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  Diversify by Maturity
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">Short-term (20-30%)</p>
                    <p className="text-xs">1-3 years for liquidity and near-term goals</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">Medium-term (30-40%)</p>
                    <p className="text-xs">3-7 years for balanced duration and yield</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">Long-term (30-40%)</p>
                    <p className="text-xs">7-15 years for higher yields and stability</p>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded mt-3">
                    <p className="font-medium text-xs">📊 Creates natural ladder effect</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  Diversify by Type
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">Fixed Rate Bonds (60-70%)</p>
                    <p className="text-xs">Predictable income, lock in rates</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">Floating Rate Bonds (20-30%)</p>
                    <p className="text-xs">Protection against rising rates</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">Tax-Free Bonds (10-20%)</p>
                    <p className="text-xs">If in 30% tax bracket</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/10 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-600" />
                  Diversify by Rating
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">AAA Bonds (50-60%)</p>
                    <p className="text-xs">Highest safety, slightly lower yields</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">AA+ to AA Bonds (30-40%)</p>
                    <p className="text-xs">Good safety, better yields</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="font-medium mb-2">Avoid Below AA-</p>
                    <p className="text-xs text-red-600">Higher risk not worth the yield</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Diversification Rules
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p>No single issuer should exceed 10-15% of bond portfolio</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p>Have bonds maturing in different years (laddering)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p>Mix government and corporate bonds</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p>Include both fixed and floating rate bonds</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p>Maintain minimum 5-7 different bond holdings</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <p>Diversify across sectors (banks, infra, PSU)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Portfolios */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-teal-600" />
              <CardTitle className="text-2xl">Sample Bond Portfolios by Age</CardTitle>
            </div>
            <CardDescription>Real-world portfolio examples</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Age 30: Aggressive Growth Portfolio
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Investment Amount: {formatCurrency(1000000)}</p>
                    <p className="text-sm mb-4"><strong>Overall Allocation:</strong> 80% Equities, 20% Bonds</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="font-medium mb-3">Bond Portion ({formatCurrency(200000)}):</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <span>3Y G-Sec</span>
                          <span className="font-bold">{formatCurrency(80000)} (40%)</span>
                        </div>
                        <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                          <span>5Y NTPC Bond (AAA)</span>
                          <span className="font-bold">{formatCurrency(60000)} (30%)</span>
                        </div>
                        <div className="flex justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                          <span>7Y HDFC Bank Bond (AAA)</span>
                          <span className="font-bold">{formatCurrency(60000)} (30%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-medium mb-2">Expected Returns:</p>
                    <p className="text-sm">Bonds: 7.2% | Overall Portfolio: 11-13% (with equities)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Age 40: Balanced Portfolio
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Investment Amount: {formatCurrency(2500000)}</p>
                    <p className="text-sm mb-4"><strong>Overall Allocation:</strong> 65% Equities, 35% Bonds</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="font-medium mb-3">Bond Portion ({formatCurrency(875000)}):</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <span>2Y G-Sec</span>
                          <span className="font-bold">{formatCurrency(175000)} (20%)</span>
                        </div>
                        <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                          <span>5Y SDL</span>
                          <span className="font-bold">{formatCurrency(175000)} (20%)</span>
                        </div>
                        <div className="flex justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                          <span>7Y PFC Bond (AAA)</span>
                          <span className="font-bold">{formatCurrency(175000)} (20%)</span>
                        </div>
                        <div className="flex justify-between p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                          <span>10Y G-Sec</span>
                          <span className="font-bold">{formatCurrency(175000)} (20%)</span>
                        </div>
                        <div className="flex justify-between p-2 bg-teal-50 dark:bg-teal-900/20 rounded">
                          <span>8Y ICICI Bank Bond (AA+)</span>
                          <span className="font-bold">{formatCurrency(175000)} (20%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-medium mb-2">Expected Returns:</p>
                    <p className="text-sm">Bonds: 7.5% | Overall Portfolio: 10-12% (with equities)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Age 55: Pre-Retirement Portfolio
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Investment Amount: {formatCurrency(5000000)}</p>
                    <p className="text-sm mb-4"><strong>Overall Allocation:</strong> 45% Equities, 55% Bonds</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="font-medium mb-3">Bond Portion ({formatCurrency(2750000)}) - 10-Rung Ladder:</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <span>1Y G-Sec</span>
                          <span className="font-bold">{formatCurrency(275000)}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                          <span>2Y G-Sec</span>
                          <span className="font-bold">{formatCurrency(275000)}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                          <span>3Y SBI Bond</span>
                          <span className="font-bold">{formatCurrency(275000)}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                          <span>4Y NTPC Bond</span>
                          <span className="font-bold">{formatCurrency(275000)}</span>
                        </div>
                        <div className="flex justify-between p-2 bg-teal-50 dark:bg-teal-900/20 rounded">
                          <span>5Y-10Y: Similar pattern</span>
                          <span className="font-bold">{formatCurrency(275000)} each</span>
                        </div>
                      </div>
                      <p className="text-xs mt-3 text-muted-foreground">
                        Ladder provides {formatCurrency(275000)} liquidity annually
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-medium mb-2">Expected Returns:</p>
                    <p className="text-sm">Bonds: 7.6% | Overall Portfolio: 9-10% (with equities)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Age 65: Retirement Portfolio
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Investment Amount: {formatCurrency(8000000)}</p>
                    <p className="text-sm mb-4"><strong>Overall Allocation:</strong> 25% Equities, 75% Bonds</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="font-medium mb-3">Bond Portion ({formatCurrency(6000000)}):</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <span>Senior Citizen Savings (SCSS)</span>
                          <span className="font-bold">{formatCurrency(3000000)} (50%)</span>
                        </div>
                        <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                          <span>10Y Bond Ladder (G-Secs)</span>
                          <span className="font-bold">{formatCurrency(2000000)} (33%)</span>
                        </div>
                        <div className="flex justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                          <span>Short-term bonds (1-3Y)</span>
                          <span className="font-bold">{formatCurrency(600000)} (10%)</span>
                        </div>
                        <div className="flex justify-between p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                          <span>Monthly Income Bonds</span>
                          <span className="font-bold">{formatCurrency(400000)} (7%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <p className="font-medium mb-2">Expected Returns & Income:</p>
                    <p className="text-sm">Bonds: 7.8% | Monthly Income: ~{formatCurrency(39000)}</p>
                    <p className="text-sm mt-2">Overall Portfolio: 8-9% (with equities for inflation protection)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Rebalancing */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <RefreshCw className="h-6 w-6 text-teal-600" />
              <CardTitle className="text-2xl">Portfolio Rebalancing</CardTitle>
            </div>
            <CardDescription>Maintaining target allocation over time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Rebalancing brings your portfolio back to target allocation after market movements 
                or life changes. It forces you to "sell high, buy low" systematically.
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">When to Rebalance</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    Time-Based
                  </h5>
                  <p className="text-sm mb-2">Rebalance at fixed intervals</p>
                  <ul className="text-xs space-y-1">
                    <li>• Annually (most common)</li>
                    <li>• Semi-annually</li>
                    <li>• Quarterly (for active investors)</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    Threshold-Based
                  </h5>
                  <p className="text-sm mb-2">Rebalance when drift exceeds limit</p>
                  <ul className="text-xs space-y-1">
                    <li>• 5% drift from target</li>
                    <li>• 10% drift (less frequent)</li>
                    <li>• Combines with annual review</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-purple-600" />
                    Life Event-Based
                  </h5>
                  <p className="text-sm mb-2">Rebalance after major changes</p>
                  <ul className="text-xs space-y-1">
                    <li>• Job change or promotion</li>
                    <li>• Marriage or children</li>
                    <li>• Inheritance received</li>
                    <li>• Approaching retirement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">Rebalancing Example</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-3">Initial Portfolio (40 years old):</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Target: 30% Bonds, 70% Equities</span>
                      <span className="font-bold">{formatCurrency(1000000)} total</span>
                    </div>
                    <div className="flex justify-between ml-4">
                      <span>Bonds:</span>
                      <span>{formatCurrency(300000)} (30%)</span>
                    </div>
                    <div className="flex justify-between ml-4">
                      <span>Equities:</span>
                      <span>{formatCurrency(700000)} (70%)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-3">After 1 Year (Equities surged 20%, Bonds 7%):</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Portfolio Value:</span>
                      <span className="font-bold">{formatCurrency(1161000)}</span>
                    </div>
                    <div className="flex justify-between ml-4">
                      <span>Bonds:</span>
                      <span>{formatCurrency(321000)} (27.7%) ❌ Below target</span>
                    </div>
                    <div className="flex justify-between ml-4">
                      <span>Equities:</span>
                      <span>{formatCurrency(840000)} (72.3%) ❌ Above target</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-3">Rebalancing Action:</p>
                  <div className="space-y-2 text-sm">
                    <p>• <strong>Sell equities:</strong> {formatCurrency(840000)} - {formatCurrency(812700)} = {formatCurrency(27300)}</p>
                    <p>• <strong>Buy bonds:</strong> {formatCurrency(348300)} - {formatCurrency(321000)} = {formatCurrency(27300)}</p>
                    <div className="mt-3 pt-3 border-t">
                      <p className="font-bold">After Rebalancing:</p>
                      <div className="flex justify-between ml-4 mt-1">
                        <span>Bonds:</span>
                        <span className="text-green-600">{formatCurrency(348300)} (30%) ✓</span>
                      </div>
                      <div className="flex justify-between ml-4">
                        <span>Equities:</span>
                        <span className="text-green-600">{formatCurrency(812700)} (70%) ✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-teal-500 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-teal-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-teal-600 mt-1">1</Badge>
                  <p className="text-sm">Bond allocation should increase with age (Age-10 rule)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-teal-600 mt-1">2</Badge>
                  <p className="text-sm">Match bond selection to your specific financial goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-teal-600 mt-1">3</Badge>
                  <p className="text-sm">Diversify across issuers, maturities, types, and ratings</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-teal-600 mt-1">4</Badge>
                  <p className="text-sm">No single issuer should exceed 10-15% of bond portfolio</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-cyan-600 mt-1">5</Badge>
                  <p className="text-sm">Laddering is ideal for retirees seeking regular income</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-cyan-600 mt-1">6</Badge>
                  <p className="text-sm">Rebalance annually or when allocation drifts 5%+</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-cyan-600 mt-1">7</Badge>
                  <p className="text-sm">Government bonds should form 40-50% of bond portfolio</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-cyan-600 mt-1">8</Badge>
                  <p className="text-sm">Keep 20-30% in short-term bonds for liquidity</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default BondPortfolio;
