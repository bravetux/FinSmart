"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Building2, 
  TrendingUp, 
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  Award,
  Target,
  DollarSign,
  Lock,
  Unlock,
  ShoppingCart
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const CorporateBonds = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Corporate Debt</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Corporate Bonds</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn about corporate bonds - debt instruments issued by private companies offering 
            higher yields than government securities. Understand the risk-return tradeoff and 
            how to select quality corporate bonds.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* What are Corporate Bonds */}
        <Card className="border-l-4 border-l-blue-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Info className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">What are Corporate Bonds?</CardTitle>
            </div>
            <CardDescription>Understanding debt securities issued by private companies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Corporate bonds are <strong>debt securities issued by private companies</strong> to raise 
                capital for business expansion, working capital, acquisitions, or refinancing existing debt. 
                When you buy a corporate bond, you're lending money to the company in exchange for regular 
                interest payments and return of principal at maturity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Why Companies Issue Bonds
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Cheaper than equity:</strong> No dilution of ownership</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Tax benefit:</strong> Interest is tax-deductible for company</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Fixed obligation:</strong> Unlike dividends, interest must be paid</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Large amounts:</strong> Can raise significant capital quickly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Why Investors Buy Corporate Bonds
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Higher yields:</strong> 1-4% more than government bonds</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Fixed income:</strong> Predictable cash flows</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Priority over equity:</strong> Paid first in bankruptcy</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Diversification:</strong> Different from stocks/govt bonds</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-yellow-600" />
                Example: Bajaj Finance Corporate Bond
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Issuer:</strong> Bajaj Finance Limited</p>
                  <p><strong>Face Value:</strong> {formatCurrency(100000)}</p>
                  <p><strong>Coupon Rate:</strong> 8.75% per annum</p>
                  <p><strong>Maturity:</strong> 5 years</p>
                </div>
                <div>
                  <p><strong>Credit Rating:</strong> AAA (highest)</p>
                  <p><strong>Interest Payment:</strong> Semi-annual</p>
                  <p><strong>Annual Interest:</strong> {formatCurrency(8750)}</p>
                  <p><strong>Total Interest (5 years):</strong> {formatCurrency(43750)}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Public vs Private Placement */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Public vs Private Placement</CardTitle>
            </div>
            <CardDescription>Two ways companies issue corporate bonds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Public Issue</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Bonds offered to the general public through stock exchanges
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Characteristics:</h5>
                    <ul className="space-y-1 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Listed on NSE/BSE</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Available to retail investors</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Can be traded on exchanges</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Better liquidity (usually)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Lower minimum investment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                    <p className="text-sm"><strong>Min Investment:</strong> Usually {formatCurrency(10000)} - {formatCurrency(100000)}</p>
                    <p className="text-sm"><strong>Who can buy:</strong> Anyone with demat account</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Lock className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Private Placement</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Bonds sold to select group of institutional/HNI investors
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Characteristics:</h5>
                    <ul className="space-y-1 text-sm">
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Not listed (usually)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Only for qualified buyers (QIB)</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Limited or no trading</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Lower liquidity</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Higher minimum investment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded">
                    <p className="text-sm"><strong>Min Investment:</strong> {formatCurrency(1000000)}+ (1 crore)</p>
                    <p className="text-sm"><strong>Who can buy:</strong> Institutions, HNIs, mutual funds</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note for retail investors:</strong> Focus on publicly issued bonds available on 
                platforms like NSE/BSE, GoldenPi, or IndiaBonds. Private placement bonds are typically 
                out of reach for individual investors due to high minimum amounts.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Secured vs Unsecured */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Secured vs Unsecured Bonds</CardTitle>
            </div>
            <CardDescription>Understanding collateral backing and safety levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="border p-3 text-left font-bold">Aspect</th>
                    <th className="border p-3 text-left font-bold">Secured Bonds</th>
                    <th className="border p-3 text-left font-bold">Unsecured Bonds (Debentures)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Collateral</td>
                    <td className="border p-3">Backed by specific assets (property, equipment, receivables)</td>
                    <td className="border p-3">No collateral - based on company's creditworthiness</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Safety Level</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">Higher Safety</Badge>
                    </td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Lower Safety</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Interest Rate</td>
                    <td className="border p-3">Lower (7.5-9%)</td>
                    <td className="border p-3">Higher (9-12%)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">In Case of Default</td>
                    <td className="border p-3">Assets can be liquidated to recover your money</td>
                    <td className="border p-3">No specific assets - general claim on company</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Priority in Bankruptcy</td>
                    <td className="border p-3">Paid first (after secured creditors)</td>
                    <td className="border p-3">Paid after all secured creditors</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Recovery Rate</td>
                    <td className="border p-3">60-90% (if default occurs)</td>
                    <td className="border p-3">20-40% (if default occurs)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Best For</td>
                    <td className="border p-3">Conservative investors, capital protection focus</td>
                    <td className="border p-3">Those seeking higher yields, can tolerate risk</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-green-600" />
                  Secured Bond Example
                </h5>
                <div className="text-sm space-y-2">
                  <p><strong>HDFC Ltd Secured NCD</strong></p>
                  <p>• Secured by mortgage of properties</p>
                  <p>• Rating: AAA</p>
                  <p>• Coupon: 8.25%</p>
                  <p className="text-green-600 font-medium pt-2">
                    ✓ Your investment is backed by real assets
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <Unlock className="h-5 w-5 text-yellow-600" />
                  Unsecured Bond Example
                </h5>
                <div className="text-sm space-y-2">
                  <p><strong>Tech Company Unsecured NCD</strong></p>
                  <p>• No specific collateral</p>
                  <p>• Rating: AA</p>
                  <p>• Coupon: 10.50%</p>
                  <p className="text-yellow-600 font-medium pt-2">
                    ⚠ Higher return compensates for higher risk
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credit Rating Importance */}
        <Card className="shadow-lg border-l-4 border-l-orange-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Credit Rating: The Most Important Factor</CardTitle>
            </div>
            <CardDescription>How ratings determine safety and returns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Credit ratings assess a company's ability to repay debt. <strong>NEVER invest in corporate 
              bonds without checking the credit rating.</strong> It's the single most important factor.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="border p-3 text-left font-bold">Rating</th>
                    <th className="border p-3 text-left font-bold">Safety</th>
                    <th className="border p-3 text-left font-bold">Typical Yield</th>
                    <th className="border p-3 text-left font-bold">Default Risk</th>
                    <th className="border p-3 text-left font-bold">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-bold">AAA</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">Highest</Badge>
                    </td>
                    <td className="border p-3">8.0-9.0%</td>
                    <td className="border p-3">Extremely low</td>
                    <td className="border p-3 text-green-600">✓ Safe for all investors</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-bold">AA+, AA, AA-</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">High</Badge>
                    </td>
                    <td className="border p-3">8.5-9.5%</td>
                    <td className="border p-3">Very low</td>
                    <td className="border p-3 text-green-600">✓ Good for conservative investors</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-bold">A+, A, A-</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">Adequate</Badge>
                    </td>
                    <td className="border p-3">9.0-10.5%</td>
                    <td className="border p-3">Low</td>
                    <td className="border p-3 text-blue-600">• Consider with diversification</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-bold">BBB+, BBB, BBB-</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Moderate</Badge>
                    </td>
                    <td className="border p-3">10.5-12.0%</td>
                    <td className="border p-3">Moderate</td>
                    <td className="border p-3 text-yellow-600">⚠ Only for risk-takers, small allocation</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-bold">BB & below</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-red-100 text-red-800">High Risk</Badge>
                    </td>
                    <td className="border p-3">12%+</td>
                    <td className="border p-3">High to Very High</td>
                    <td className="border p-3 text-red-600">✗ Avoid (junk bonds)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-red-800 dark:text-red-400">
                <AlertTriangle className="h-5 w-5" />
                Critical Warning
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Bonds rated BB or below are "junk bonds" - high risk of default</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Don't chase high yields from low-rated bonds - you might lose your capital</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Stick to AAA/AA rated bonds for safety, A rating maximum if you diversify</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Where to Buy Corporate Bonds */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ShoppingCart className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Where to Buy Corporate Bonds</CardTitle>
            </div>
            <CardDescription>Platforms and channels for retail investors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3">1. Stock Exchanges (NSE/BSE)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Buy listed corporate bonds through your stock broker's platform
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Need: Demat + Trading account</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Limited selection available</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Brokerage charges apply</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3">2. Bond Platforms</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Specialized platforms: GoldenPi, IndiaBonds, Wint Wealth
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>User-friendly interface</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Wide selection, easy comparison</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Educational resources included</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3">3. Primary Market (NCD Issues)</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Subscribe to new bond issues through your broker
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Buy at issue price (no premium)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Application like IPO process</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Limited window (7-10 days)</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3">4. Bond Mutual Funds</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Indirect exposure through debt mutual funds
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Professional management</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Instant diversification</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Expense ratio applies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">💡 Best Option for Beginners</h5>
              <p className="text-sm text-muted-foreground">
                Start with <strong>bond platforms like GoldenPi or Wint Wealth</strong>. They offer 
                curated selection, easy comparison tools, and educational content. As you gain experience, 
                you can explore exchange-traded bonds for potentially better prices.
              </p>
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
                <span>Corporate bonds offer 1-4% higher yields than government bonds but carry credit risk</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>ALWAYS check credit rating - stick to AAA/AA rated bonds for safety</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Secured bonds are safer than unsecured as they're backed by collateral</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Public issues are accessible to retail investors; private placements require ₹1 crore+</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Avoid junk bonds (BB and below) - high yields come with high default risk</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Use bond platforms like GoldenPi or IndiaBonds for easy access and comparison</span>
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default CorporateBonds;
