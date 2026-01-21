"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Landmark, 
  Shield, 
  TrendingUp, 
  Users,
  CheckCircle,
  Info,
  AlertCircle,
  Award,
  Coins,
  Clock,
  DollarSign,
  FileText
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const GovernmentBonds = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Landmark className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Sovereign Securities</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Government Securities</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Discover the safest investment option in India - Government Securities backed by the 
            sovereign guarantee of the Government of India. Zero default risk, predictable returns.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* G-Sec Overview */}
        <Card className="border-l-4 border-l-emerald-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-emerald-600" />
              <CardTitle className="text-2xl">What are Government Securities (G-Sec)?</CardTitle>
            </div>
            <CardDescription>The foundation of safe fixed-income investing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Government Securities (G-Sec) are debt instruments issued by the <strong>Government of India</strong> 
                to borrow money from the public. They are considered the safest investment because they carry 
                <strong> zero default risk</strong> - backed by the sovereign guarantee of the Government.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  Why G-Sec are Ultra-Safe
                </h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Backed by Government of India's taxing power</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Government can never default (can print money if needed)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Zero credit risk unlike corporate bonds</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Used as benchmark for all other bonds</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Key Characteristics
                </h4>
                <ul className="space-y-2">
                  <li><strong>Typical Yields:</strong> 6.5% - 7.5% per year</li>
                  <li><strong>Maturity:</strong> 1 year to 40 years</li>
                  <li><strong>Coupon Payment:</strong> Semi-annual (twice a year)</li>
                  <li><strong>Minimum Investment:</strong> {formatCurrency(10000)}</li>
                  <li><strong>Trading:</strong> Can be bought/sold before maturity</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="h-5 w-5 text-yellow-600" />
                Popular G-Sec Example
              </h4>
              <div className="text-sm space-y-1">
                <p><strong>7.18% GS 2037</strong> means:</p>
                <ul className="ml-6 space-y-1 mt-2">
                  <li>• Coupon rate of 7.18% per year</li>
                  <li>• Government Security (GS)</li>
                  <li>• Matures in 2037</li>
                  <li>• On {formatCurrency(100000)} investment, you get {formatCurrency(7180)}/year</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Treasury Bills */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">Treasury Bills (T-Bills)</CardTitle>
            </div>
            <CardDescription>Short-term government securities with maturity less than 1 year</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              T-Bills are short-term debt instruments issued by the Government of India for durations 
              up to 364 days. They are issued at a <strong>discount to face value</strong> and don't 
              pay periodic interest.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold mb-2">91-Day T-Bill</h4>
                <p className="text-sm text-muted-foreground">
                  3 months tenure. Most liquid. Used for very short-term parking of funds.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-bold mb-2">182-Day T-Bill</h4>
                <p className="text-sm text-muted-foreground">
                  6 months tenure. Balance of liquidity and returns. Popular for half-yearly goals.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold mb-2">364-Day T-Bill</h4>
                <p className="text-sm text-muted-foreground">
                  Nearly 1 year. Highest yield among T-Bills. Alternative to 1-year FD.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">How T-Bills Work</h4>
              <div className="space-y-4">
                <div>
                  <p className="mb-3"><strong>Example: 91-Day T-Bill</strong></p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                    <ul className="space-y-2">
                      <li><strong>Face Value:</strong> {formatCurrency(100000)} (what you get at maturity)</li>
                      <li><strong>Issue Price:</strong> {formatCurrency(98200)} (what you pay now)</li>
                      <li><strong>Discount:</strong> {formatCurrency(1800)}</li>
                      <li><strong>Tenure:</strong> 91 days</li>
                      <li className="pt-2 border-t">
                        <strong className="text-green-600">Your Gain:</strong> {formatCurrency(1800)} in 91 days
                      </li>
                      <li>
                        <strong className="text-green-600">Annualized Return:</strong> ~7.3%
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> You don't receive interest payments. Your profit is the difference 
                  between purchase price and face value. At maturity, you receive the full face value.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-green-800 dark:text-green-400">
                  Advantages of T-Bills
                </h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Zero default risk</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Highly liquid</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Better than savings account</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Short lock-in period</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-orange-800 dark:text-orange-400">
                  Best Use Cases
                </h5>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Emergency fund parking</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Short-term savings (3-12 months)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Money awaiting deployment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600 mt-0.5">•</span>
                    <span>Alternative to low-interest savings</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* State Development Loans */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">State Development Loans (SDL)</CardTitle>
            </div>
            <CardDescription>State government bonds with slightly higher yields</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              SDL are bonds issued by <strong>State Governments</strong> to fund infrastructure and 
              development projects. They offer 0.25% to 1% higher yields than Central Government bonds.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="border p-3 text-left font-bold">State</th>
                    <th className="border p-3 text-left font-bold">Typical Yield</th>
                    <th className="border p-3 text-left font-bold">Spread over G-Sec</th>
                    <th className="border p-3 text-left font-bold">Fiscal Health</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Maharashtra</td>
                    <td className="border p-3">7.6-7.8%</td>
                    <td className="border p-3">+0.3-0.5%</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">Strong</Badge>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3">Gujarat</td>
                    <td className="border p-3">7.5-7.7%</td>
                    <td className="border p-3">+0.25-0.45%</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">Strong</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Karnataka</td>
                    <td className="border p-3">7.6-7.9%</td>
                    <td className="border p-3">+0.35-0.55%</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">Good</Badge>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3">Tamil Nadu</td>
                    <td className="border p-3">7.7-8.0%</td>
                    <td className="border p-3">+0.45-0.65%</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">Good</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">Rajasthan</td>
                    <td className="border p-3">7.8-8.2%</td>
                    <td className="border p-3">+0.55-0.85%</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Moderate</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">Why Choose SDL?</h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Higher yields than G-Sec (extra 0.25-1%)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Still very safe (state govt backing)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Diversification across states</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Support local development</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  Considerations
                </h5>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-yellow-600 mt-0.5">•</span>
                    <span>Less liquid than G-Sec</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 mt-0.5">•</span>
                    <span>Check state's fiscal health</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 mt-0.5">•</span>
                    <span>Spreads vary by state finances</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 mt-0.5">•</span>
                    <span>Prefer financially strong states</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sovereign Gold Bonds */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Coins className="h-6 w-6 text-yellow-600" />
              <CardTitle className="text-2xl">Sovereign Gold Bonds (SGB)</CardTitle>
            </div>
            <CardDescription>Invest in gold through government-backed bonds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              SGBs are unique government securities denominated in grams of gold. They offer a 
              <strong> better alternative to physical gold</strong> with additional benefits.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Denomination:</strong> 1 gram of gold</li>
                    <li><strong>Interest:</strong> 2.5% per year (on initial value)</li>
                    <li><strong>Tenure:</strong> 8 years (exit after 5 years)</li>
                    <li><strong>Min Investment:</strong> 1 gram</li>
                    <li><strong>Max Investment:</strong> 4 kg (individual)</li>
                    <li><strong>Issue Price:</strong> Based on gold price</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Advantages Over Physical Gold</h5>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>No storage or security concerns</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Additional 2.5% interest income</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>No making charges or GST</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Capital gains tax-exempt at maturity</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Can be used as collateral for loans</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Return Example</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="mb-2"><strong>Scenario:</strong></p>
                    <ul className="space-y-1 text-sm">
                      <li>• Buy: 10 grams at ₹5,000/gram = {formatCurrency(50000)}</li>
                      <li>• Hold: 8 years (till maturity)</li>
                      <li>• Gold price at maturity: ₹7,000/gram</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-green-500">
                    <p className="mb-2"><strong>Your Returns:</strong></p>
                    <ul className="space-y-1 text-sm">
                      <li>• Capital appreciation: {formatCurrency(20000)}</li>
                      <li>• Interest earned (2.5% × 8): {formatCurrency(10000)}</li>
                      <li className="pt-2 border-t font-semibold text-green-600">
                        Total Value: {formatCurrency(80000)}
                      </li>
                      <li className="font-semibold text-green-600">
                        Total Gain: {formatCurrency(30000)} (60% return)
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground mt-3">
                    <strong>Tax Benefit:</strong> Capital gains at maturity are tax-exempt. 
                    If you sell before maturity on exchange, LTCG with indexation applies.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Invest via RBI Retail Direct */}
        <Card className="shadow-lg border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">How to Invest: RBI Retail Direct</CardTitle>
            </div>
            <CardDescription>Step-by-step guide to buying government bonds directly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="font-semibold mb-2">
                  RBI launched "RBI Retail Direct" platform in 2021, allowing retail investors to 
                  buy government bonds directly without intermediaries.
                </p>
                <p className="text-sm text-muted-foreground">
                  Website: <a href="https://rbiretaildirect.org.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://rbiretaildirect.org.in
                  </a>
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="step-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    Step 1: Account Opening
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-2">
                    <p>Visit rbiretaildirect.org.in and click "Register"</p>
                    <p><strong>Documents Required:</strong></p>
                    <ul className="ml-6 space-y-1">
                      <li>• PAN Card</li>
                      <li>• Valid bank account (savings/current)</li>
                      <li>• Mobile number linked to bank</li>
                      <li>• Email address</li>
                    </ul>
                    <p className="text-sm text-muted-foreground pt-2">
                      Process is completely online and paperless. Your Retail Direct Gilt (RDG) 
                      account is opened free of cost.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    Step 2: Complete KYC
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-2">
                    <ul className="space-y-2">
                      <li>• Enter PAN and Aadhaar details</li>
                      <li>• Complete video KYC or in-person verification</li>
                      <li>• Link your bank account for payments</li>
                      <li>• Set up a password and security questions</li>
                    </ul>
                    <p className="text-sm text-muted-foreground pt-2">
                      KYC is one-time. Once approved, you can start investing immediately.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    Step 3: Browse Available Bonds
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-2">
                    <p>After login, you'll see:</p>
                    <ul className="ml-6 space-y-1">
                      <li>• G-Sec (various maturities)</li>
                      <li>• Treasury Bills (91, 182, 364 days)</li>
                      <li>• State Development Loans</li>
                      <li>• Sovereign Gold Bonds (when available)</li>
                    </ul>
                    <p className="mt-2">Each bond shows:</p>
                    <ul className="ml-6 space-y-1">
                      <li>• Coupon rate</li>
                      <li>• Maturity date</li>
                      <li>• Yield (YTM)</li>
                      <li>• Minimum investment</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    Step 4: Place Your Order
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-2">
                    <p><strong>Two Ways to Buy:</strong></p>
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <p className="font-semibold">Primary Market (New Issues)</p>
                        <ul className="ml-6 mt-1 space-y-1 text-sm">
                          <li>• Buy directly from government at issue price</li>
                          <li>• Place non-competitive bid (accept whatever yield is determined)</li>
                          <li>• No brokerage or transaction fees</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white dark:bg-gray-800 p-3 rounded">
                        <p className="font-semibold">Secondary Market (Existing Bonds)</p>
                        <ul className="ml-6 mt-1 space-y-1 text-sm">
                          <li>• Buy bonds already issued, traded on NDS-OM platform</li>
                          <li>• Price may be at premium/discount to face value</li>
                          <li>• Can compare yields and choose best option</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-5">
                  <AccordionTrigger className="text-lg font-semibold">
                    Step 5: Payment & Confirmation
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-2">
                    <ul className="space-y-2">
                      <li>• Payment is debited from your linked bank account via net banking/UPI</li>
                      <li>• You'll receive confirmation email/SMS</li>
                      <li>• Bonds reflect in your RDG account within 1-2 days</li>
                      <li>• Interest is credited directly to your bank account</li>
                    </ul>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded mt-3">
                      <p className="text-sm">
                        <strong>Zero Charges:</strong> No account opening fees, no transaction charges, 
                        no annual maintenance charges. Completely free!
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-6">
                  <AccordionTrigger className="text-lg font-semibold">
                    Step 6: Managing Your Holdings
                  </AccordionTrigger>
                  <AccordionContent className="text-base space-y-2">
                    <p>After purchase, you can:</p>
                    <ul className="ml-6 space-y-1">
                      <li>• View all your bonds in one dashboard</li>
                      <li>• Track interest payments</li>
                      <li>• Sell bonds on secondary market before maturity</li>
                      <li>• Set up auto-reinvestment for maturity proceeds</li>
                      <li>• Download account statements</li>
                    </ul>
                    <p className="text-sm text-muted-foreground pt-2">
                      Your bonds are held in dematerialized form (no physical certificates). 
                      They're safe and can't be lost or stolen.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-green-500 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Government securities carry zero default risk - safest investment in India</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>G-Sec offer 6.5-7.5% returns, T-Bills are for short-term (3-12 months)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>SDL provide 0.25-1% extra yield with state government backing</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Sovereign Gold Bonds combine gold appreciation with 2.5% interest income</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>RBI Retail Direct makes investing in government bonds easy and free of cost</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Ideal for conservative investors, retirees, and capital preservation goals</span>
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default GovernmentBonds;
