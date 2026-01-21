"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Target, 
  Award, 
  TrendingUp,
  Shield,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Info,
  Scale,
  Calendar,
  Layers
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const BondSelection = () => {
  const { currency } = useCurrency();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Selection Criteria</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Bond Selection Criteria</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Master the art of selecting the right bonds for your portfolio. Learn the critical factors 
            that determine bond quality, safety, and suitability for your investment goals.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Credit Rating - Most Important */}
        <Card className="border-l-4 border-l-orange-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">1. Credit Rating (Most Important)</CardTitle>
            </div>
            <CardDescription>The single most critical factor in bond selection</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Why Credit Rating is #1 Priority</h4>
              <p className="text-muted-foreground mb-4">
                Credit rating assesses the issuer's ability to repay debt. It's determined by agencies 
                like CRISIL, ICRA, and CARE after analyzing the company's financials, industry position, 
                and ability to generate cash flows.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded">
                <p className="font-semibold mb-2">Golden Rule:</p>
                <p className="text-red-600 font-medium">
                  Never invest in bonds rated below BBB- unless you're an experienced investor with 
                  high risk appetite. The extra 2-3% yield is not worth losing your capital.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="border p-3 text-left font-bold">Rating</th>
                    <th className="border p-3 text-left font-bold">Quality</th>
                    <th className="border p-3 text-left font-bold">Default Probability</th>
                    <th className="border p-3 text-left font-bold">Typical Yield Premium</th>
                    <th className="border p-3 text-left font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-bold">AAA</td>
                    <td className="border p-3">Highest Safety</td>
                    <td className="border p-3">&lt;0.1%</td>
                    <td className="border p-3">G-Sec + 0.5-1.5%</td>
                    <td className="border p-3 text-green-600 font-medium">✓ Excellent - Buy freely</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-bold">AA+, AA, AA-</td>
                    <td className="border p-3">High Grade</td>
                    <td className="border p-3">0.1-0.5%</td>
                    <td className="border p-3">G-Sec + 1-2%</td>
                    <td className="border p-3 text-green-600 font-medium">✓ Good - Safe choice</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-bold">A+, A, A-</td>
                    <td className="border p-3">Upper Medium Grade</td>
                    <td className="border p-3">0.5-2%</td>
                    <td className="border p-3">G-Sec + 2-3%</td>
                    <td className="border p-3 text-blue-600 font-medium">• OK if diversified (&lt;20%)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-bold">BBB+, BBB, BBB-</td>
                    <td className="border p-3">Lower Medium Grade</td>
                    <td className="border p-3">2-5%</td>
                    <td className="border p-3">G-Sec + 3-4%</td>
                    <td className="border p-3 text-yellow-600 font-medium">⚠ Risky - Small allocation only</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-bold">BB & below</td>
                    <td className="border p-3">Speculative/Junk</td>
                    <td className="border p-3">&gt;5%</td>
                    <td className="border p-3">G-Sec + 4%+</td>
                    <td className="border p-3 text-red-600 font-medium">✗ Avoid completely</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-green-800 dark:text-green-400">Conservative Portfolio</h5>
                <ul className="text-sm space-y-1">
                  <li>• 80%+ AAA rated</li>
                  <li>• 20% AA rated</li>
                  <li>• 0% below AA</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-blue-800 dark:text-blue-400">Moderate Portfolio</h5>
                <ul className="text-sm space-y-1">
                  <li>• 50% AAA rated</li>
                  <li>• 30% AA rated</li>
                  <li>• 20% A rated (max)</li>
                </ul>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-400">Aggressive Portfolio</h5>
                <ul className="text-sm space-y-1">
                  <li>• 30% AAA rated</li>
                  <li>• 40% AA rated</li>
                  <li>• 30% A/BBB (high risk)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Yield Comparison */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">2. Yield Comparison</CardTitle>
            </div>
            <CardDescription>Comparing returns - but not at the cost of safety</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              <strong>Yield to Maturity (YTM)</strong> is the most important yield metric. It represents 
              the total annual return if you hold the bond until maturity, accounting for coupon payments 
              and any capital gain/loss.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">How to Compare Yields:</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Compare Similar Ratings First</p>
                    <p className="text-sm text-muted-foreground">
                      Only compare AAA bonds with AAA bonds. Comparing AAA (8%) with BBB (11%) is unfair 
                      - the extra 3% is compensation for higher risk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Match Maturity Periods</p>
                    <p className="text-sm text-muted-foreground">
                      A 10-year bond naturally yields more than a 3-year bond. Compare bonds with 
                      similar maturities for fair assessment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Use YTM, Not Coupon Rate</p>
                    <p className="text-sm text-muted-foreground">
                      A 10% coupon bond bought at premium (₹1,05,000) may yield less than an 8% coupon 
                      bond bought at discount (₹95,000). Always compare YTM.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="border p-3 text-left font-bold">Bond</th>
                    <th className="border p-3 text-left font-bold">Rating</th>
                    <th className="border p-3 text-left font-bold">Maturity</th>
                    <th className="border p-3 text-left font-bold">Coupon</th>
                    <th className="border p-3 text-left font-bold">Price</th>
                    <th className="border p-3 text-left font-bold">YTM</th>
                    <th className="border p-3 text-left font-bold">Choice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Bond A</td>
                    <td className="border p-3">AAA</td>
                    <td className="border p-3">5 years</td>
                    <td className="border p-3">8.5%</td>
                    <td className="border p-3">₹1,00,000</td>
                    <td className="border p-3 font-bold text-green-600">8.5%</td>
                    <td className="border p-3">✓ Safe, decent yield</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3">Bond B</td>
                    <td className="border p-3">AAA</td>
                    <td className="border p-3">5 years</td>
                    <td className="border p-3">9.0%</td>
                    <td className="border p-3">₹1,02,500</td>
                    <td className="border p-3 font-bold text-green-600">8.3%</td>
                    <td className="border p-3">Bond A is better</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Bond C</td>
                    <td className="border p-3">AA</td>
                    <td className="border p-3">5 years</td>
                    <td className="border p-3">9.5%</td>
                    <td className="border p-3">₹1,00,000</td>
                    <td className="border p-3 font-bold text-blue-600">9.5%</td>
                    <td className="border p-3">Good if diversified</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3">Bond D</td>
                    <td className="border p-3">BBB</td>
                    <td className="border p-3">5 years</td>
                    <td className="border p-3">11.0%</td>
                    <td className="border p-3">₹1,00,000</td>
                    <td className="border p-3 font-bold text-yellow-600">11.0%</td>
                    <td className="border p-3">⚠ Extra yield = extra risk</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2 text-yellow-800 dark:text-yellow-400">
                <AlertCircle className="h-5 w-5" />
                Don't Chase High Yields Blindly
              </h5>
              <p className="text-sm text-muted-foreground">
                If a bond offers 2-3% higher yield than similar maturity bonds, it's usually because 
                of higher credit risk. Question: "Is the extra 2% worth risking my capital?" Usually, no.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Maturity Matching */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">3. Maturity Matching with Goals</CardTitle>
            </div>
            <CardDescription>Align bond maturity with your financial goals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Match your bond's maturity date with when you'll need the money. This strategy minimizes 
              interest rate risk and ensures capital is available when required.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
                <h4 className="font-bold mb-3">Financial Goal Examples</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Goal: House down payment in 3 years</p>
                    <p className="text-muted-foreground">✓ Buy 3-year bonds maturing in 2027</p>
                  </div>
                  <div>
                    <p className="font-semibold">Goal: Child's education in 7 years</p>
                    <p className="text-muted-foreground">✓ Buy 7-year bonds maturing in 2031</p>
                  </div>
                  <div>
                    <p className="font-semibold">Goal: Retirement income in 15 years</p>
                    <p className="text-muted-foreground">✓ Buy 15-year bonds maturing in 2039</p>
                  </div>
                  <div>
                    <p className="font-semibold">Goal: Emergency fund (1 year)</p>
                    <p className="text-muted-foreground">✓ Buy T-Bills (91/182/364 days)</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
                <h4 className="font-bold mb-3">Why Maturity Matching Matters</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Avoids selling bonds before maturity (price risk)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Guarantees capital availability when needed</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Eliminates interest rate risk at goal date</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Simplifies financial planning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2 text-red-800 dark:text-red-400">
                <AlertCircle className="h-5 w-5" />
                Avoid Maturity Mismatch
              </h5>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Wrong:</strong> Buying 10-year bonds when you need money in 3 years
              </p>
              <p className="text-sm text-muted-foreground">
                If interest rates rise, bond price falls. You'll have to sell at a loss or wait 7 extra 
                years. Match maturity to avoid this problem.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Issuer Quality */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">4. Issuer Quality & Reputation</CardTitle>
            </div>
            <CardDescription>Look beyond ratings - research the company</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Even within the same rating category, some issuers are better than others. Research the 
              company's fundamentals, business model, and market position.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Factors to Check:</h4>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Company Size & Market Cap</p>
                      <p className="text-sm text-muted-foreground">
                        Larger, established companies are generally safer
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Industry Position</p>
                      <p className="text-sm text-muted-foreground">
                        Market leader or top 3? Competitive advantages?
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Financial Health</p>
                      <p className="text-sm text-muted-foreground">
                        Debt-to-equity ratio, interest coverage, profit trends
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">Management Quality</p>
                      <p className="text-sm text-muted-foreground">
                        Track record, corporate governance, transparency
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Preferred Issuer Types:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800">Highest Safety</Badge>
                    <div>
                      <p className="font-medium">PSU & Government-backed</p>
                      <p className="text-muted-foreground">NTPC, PFC, REC, NHAI, IRFC</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">High Safety</Badge>
                    <div>
                      <p className="font-medium">Blue-chip Corporates</p>
                      <p className="text-muted-foreground">HDFC, Bajaj Finance, L&T, Tata Motors</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Moderate Safety</Badge>
                    <div>
                      <p className="font-medium">Mid-cap Established Companies</p>
                      <p className="text-muted-foreground">Check rating & financials carefully</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-red-100 text-red-800">Avoid</Badge>
                    <div>
                      <p className="font-medium">New/Small Companies, Startups</p>
                      <p className="text-muted-foreground">High risk even with decent rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liquidity Considerations */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">5. Liquidity Considerations</CardTitle>
            </div>
            <CardDescription>Ability to sell bonds before maturity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Liquidity refers to how easily you can sell a bond in the secondary market before maturity. 
              Some bonds trade actively; others have no buyers when you want to sell.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="border p-3 text-left font-bold">Bond Type</th>
                    <th className="border p-3 text-left font-bold">Liquidity</th>
                    <th className="border p-3 text-left font-bold">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Government Securities (G-Sec)</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">Excellent</Badge>
                    </td>
                    <td className="border p-3">Can sell anytime easily</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3">Treasury Bills</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">Excellent</Badge>
                    </td>
                    <td className="border p-3">Very liquid, short tenure anyway</td>
                  </tr>
                  <tr>
                    <td className="border p-3">AAA PSU Bonds (NTPC, PFC)</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">Good</Badge>
                    </td>
                    <td className="border p-3">Large issue size, active trading</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3">Blue-chip Corporate Bonds</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">Good</Badge>
                    </td>
                    <td className="border p-3">HDFC, Bajaj, L&T - reasonably liquid</td>
                  </tr>
                  <tr>
                    <td className="border p-3">State Development Loans</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Moderate</Badge>
                    </td>
                    <td className="border p-3">Less liquid than G-Sec</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3">Mid-cap Corporate Bonds</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-orange-100 text-orange-800">Low</Badge>
                    </td>
                    <td className="border p-3">May be difficult to sell</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Tax-Free Bonds</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-orange-100 text-orange-800">Low</Badge>
                    </td>
                    <td className="border p-3">Long tenure, infrequent trading</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">If You Need Liquidity</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Choose G-Sec or PSU bonds</li>
                  <li>• Check trading volumes before buying</li>
                  <li>• Prefer recently issued bonds</li>
                  <li>• Buy larger issue sizes (₹500 cr+)</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">If You Can Hold Till Maturity</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Liquidity doesn't matter much</li>
                  <li>• Can consider less liquid bonds</li>
                  <li>• Focus on credit rating & yield</li>
                  <li>• May get slightly better yields</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diversification */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-pink-600" />
              <CardTitle className="text-2xl">6. Diversification Strategy</CardTitle>
            </div>
            <CardDescription>Don't put all eggs in one bond basket</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Even if you invest in AAA-rated bonds, diversification is crucial. Companies can be 
              downgraded unexpectedly. Spread your risk across multiple issuers, sectors, and maturities.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3">By Issuer</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Don't invest more than 10-15% in any single issuer
                </p>
                <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded text-sm">
                  <p><strong>Example:</strong></p>
                  <p>₹10 lakh portfolio:</p>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• 5-7 different issuers</li>
                    <li>• Max ₹1-1.5 lakh per issuer</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3">By Sector</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Spread across different industries to avoid sector risk
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm">
                  <p><strong>Example Mix:</strong></p>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• 30% Financial services</li>
                    <li>• 25% Infrastructure/PSU</li>
                    <li>• 25% Manufacturing</li>
                    <li>• 20% Others</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3">By Maturity</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Create a bond ladder with staggered maturities
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-sm">
                  <p><strong>Example Ladder:</strong></p>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• 25% maturing in 2025</li>
                    <li>• 25% maturing in 2027</li>
                    <li>• 25% maturing in 2029</li>
                    <li>• 25% maturing in 2031</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2 text-red-800 dark:text-red-400">
                <AlertCircle className="h-5 w-5" />
                Common Diversification Mistakes
              </h5>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span><strong>Over-concentration:</strong> 50% in one company because it has best yield</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span><strong>Sector clustering:</strong> All bonds from NBFC sector (2018 crisis example)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span><strong>Maturity clustering:</strong> All bonds maturing in same year (reinvestment risk)</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Bond Selection Checklist */}
        <Card className="shadow-lg border-l-4 border-l-purple-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Complete Bond Selection Checklist</CardTitle>
            </div>
            <CardDescription>Use this checklist before buying any bond</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { category: "Credit Quality", items: [
                  "Is the bond rated AAA or AA by reputable agencies?",
                  "Has the rating been stable or improving?",
                  "Is the issuer a reputed, established company or PSU?"
                ]},
                { category: "Yield Analysis", items: [
                  "Is the YTM competitive for this rating category?",
                  "Am I comparing bonds with similar ratings and maturities?",
                  "Is high yield justified or a red flag?"
                ]},
                { category: "Maturity & Goal Alignment", items: [
                  "Does maturity match my financial goal timeline?",
                  "Can I hold till maturity without needing the money?",
                  "Is the tenure suitable for my investment horizon?"
                ]},
                { category: "Issuer Quality", items: [
                  "Is the company financially healthy (check debt ratios)?",
                  "Is it a market leader in its industry?",
                  "Does it have good corporate governance?"
                ]},
                { category: "Liquidity", items: [
                  "Can I sell this bond if needed before maturity?",
                  "What is the trading volume?",
                  "Is it listed on NSE/BSE?"
                ]},
                { category: "Diversification", items: [
                  "Am I investing less than 15% in this issuer?",
                  "Do I have exposure to different sectors?",
                  "Are my maturities well-staggered?"
                ]}
              ].map((section, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">{section.category}</h5>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-2 text-sm">
                        <input type="checkbox" className="mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                <span>Credit rating is the #1 factor - stick to AAA/AA bonds for safety</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Compare YTM (not coupon) for bonds with similar ratings and maturities</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Match bond maturity with your financial goal timeline</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Research issuer quality beyond ratings - prefer PSUs and blue-chips</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Consider liquidity if you might need to sell before maturity</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Diversify across issuers, sectors, and maturities - never concentrate in one bond</span>
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default BondSelection;
