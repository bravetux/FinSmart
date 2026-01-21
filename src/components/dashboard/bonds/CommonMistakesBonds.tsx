"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  AlertTriangle, 
  TrendingDown, 
  XCircle,
  ShieldAlert,
  Target,
  Lightbulb,
  CheckCircle,
  Clock,
  DollarSign,
  BarChart3,
  FileText,
  AlertCircle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const CommonMistakesBonds = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Common Mistakes</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Bond Investment Mistakes</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Learn from the most common mistakes investors make with bonds. Avoid these pitfalls 
            to protect your capital and maximize returns. Real examples and practical solutions included.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Mistake #1: Chasing Yield Without Checking Credit Rating */}
        <Card className="border-l-4 border-l-red-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingDown className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Mistake #1: Chasing Yield, Ignoring Credit Risk</CardTitle>
            </div>
            <CardDescription>The most expensive mistake in bond investing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                The Mistake
              </h4>
              <p className="text-sm mb-4">
                Investors often get tempted by high-yield bonds (10-12%) without realizing these come 
                from lower-rated companies with significant default risk. "Extra 3-4% yield" sounds 
                attractive until you lose 100% of your principal in a default.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Real Example:</p>
                <p className="text-sm">
                  <strong>DHFL Bonds (2019):</strong> Offered 9.5% yield when AAA bonds yielded 7%. 
                  Many investors chased the extra 2.5%. Result: DHFL defaulted, bonds traded at 
                  20-30 paise per rupee. Investors lost 70-80% of capital.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-orange-600" />
                Why It Happens
              </h4>
              <ul className="space-y-2 text-sm ml-6">
                <li>• Lack of understanding about credit ratings</li>
                <li>• Focus only on returns, not risk-adjusted returns</li>
                <li>• Belief that "all bonds are safe"</li>
                <li>• Sales pitch focusing on high yields</li>
                <li>• Not reading credit rating reports</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                The Solution
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Stick to AAA or AA+ bonds</p>
                  <p className="text-xs">These have lowest default risk. The extra 1-2% from lower-rated bonds isn't worth the risk.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Compare risk-adjusted returns</p>
                  <p className="text-xs">AAA bond at 7.5% is better than A-rated bond at 10% due to safety premium.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Read rating rationale</p>
                  <p className="text-xs">Don't just see "AA" rating - read WHY it's AA and not AAA. Check rating outlook.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Rule of thumb</p>
                  <p className="text-xs">If yield is 2%+ higher than G-Sec, there's significant credit risk involved.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mistake #2: Ignoring Liquidity */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Mistake #2: Not Checking Bond Liquidity</CardTitle>
            </div>
            <CardDescription>Difficulty in selling when you need cash</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                The Mistake
              </h4>
              <p className="text-sm mb-4">
                Many bonds, especially corporate bonds, have very low trading volumes. When you need 
                to sell urgently, you might not find buyers or have to sell at steep discounts (5-10% below fair value).
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Real Example:</p>
                <p className="text-sm mb-2">
                  Investor bought {formatCurrency(1000000)} of a small PSU's AA+ bond at 8% YTM. 
                  After 6 months, needed money urgently for medical emergency.
                </p>
                <div className="mt-3 space-y-1 text-xs">
                  <p>• Fair value: {formatCurrency(1040000)} (with accrued interest)</p>
                  <p>• No buyers found for 2 weeks</p>
                  <p>• Finally sold at {formatCurrency(960000)} (8% discount)</p>
                  <p className="text-red-600 font-bold">• Loss: {formatCurrency(80000)} due to illiquidity</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                The Solution
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Check trading volumes before buying</p>
                  <p className="text-xs">Look for bonds with regular trading activity. G-Secs and large PSU bonds have best liquidity.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Maintain emergency fund separately</p>
                  <p className="text-xs">Don't invest emergency money in bonds. Keep 6-12 months expenses in liquid funds/savings account.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Prefer larger bond issues</p>
                  <p className="text-xs">Issues of {currency.symbol}500+ crore have better liquidity than {currency.symbol}50-{currency.symbol}100 crore issues.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Plan to hold till maturity</p>
                  <p className="text-xs">Only buy bonds you can afford to hold till maturity. Don't rely on selling in secondary market.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mistake #3: Misunderstanding YTM */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Mistake #3: Misunderstanding Yield to Maturity (YTM)</CardTitle>
            </div>
            <CardDescription>Confusing YTM with guaranteed returns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                The Mistake
              </h4>
              <p className="text-sm mb-4">
                Investors think "8% YTM" means guaranteed 8% annual return. In reality, YTM assumes:
              </p>
              <ul className="space-y-2 text-sm ml-6 mb-4">
                <li>1. You hold till maturity (no early sale)</li>
                <li>2. All coupon payments are reinvested at the same 8% rate</li>
                <li>3. No default occurs</li>
              </ul>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Real Scenario:</p>
                <p className="text-sm mb-2">
                  You buy 10-year bond with 8% coupon at par (8% YTM). If interest rates fall to 6% 
                  after 2 years, your coupon reinvestment happens at 6%, not 8%.
                </p>
                <div className="mt-3 space-y-1 text-xs">
                  <p>• Assumed YTM: 8%</p>
                  <p>• Actual realized yield after 10 years: ~7.2%</p>
                  <p className="text-orange-600 font-bold">• Shortfall due to reinvestment risk</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                The Solution
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Understand YTM is a theoretical return</p>
                  <p className="text-xs">It's your expected return IF you hold to maturity and reinvest at same rates.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ For guaranteed returns, look at coupon rate</p>
                  <p className="text-xs">8% coupon bond will definitely pay you 8% annual interest. That's guaranteed (if no default).</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Consider reinvestment risk</p>
                  <p className="text-xs">In falling rate environment, your realized yield will be lower than YTM.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-semibold mb-2">✓ Zero-coupon bonds avoid this</p>
                  <p className="text-xs">No coupon = no reinvestment risk. Your YTM is locked in at purchase.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive List of Mistakes */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">All Common Bond Mistakes</CardTitle>
            </div>
            <CardDescription>Complete checklist with solutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Mistake #4: Panic Selling Before Maturity
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                    <p className="text-sm mb-4">
                      When interest rates rise, bond prices fall. Investors panic and sell, locking in losses.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Example:</p>
                      <p className="text-sm">
                        You bought {formatCurrency(1000000)} bond at 7% YTM. Rates rise to 8%. Your bond's 
                        market value drops to {formatCurrency(930000)}. You panic and sell, losing {formatCurrency(70000)}.
                      </p>
                      <p className="text-xs text-red-600 mt-2">
                        <strong>Wrong move!</strong> If you held till maturity, you'd still get full {formatCurrency(1000000)} + all coupons.
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">✓ Solution:</p>
                    <ul className="text-xs space-y-1 ml-6">
                      <li>• Mark-to-market losses are ONLY paper losses if you don't sell</li>
                      <li>• Hold till maturity for guaranteed returns (assuming no default)</li>
                      <li>• Rising rates = opportunity to buy MORE bonds at higher yields</li>
                      <li>• Only sell if fundamentals deteriorate (credit downgrade)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-orange-600" />
                    Mistake #5: Over-Concentration in Single Issuer
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                    <p className="text-sm mb-4">
                      Putting all money in one company's bonds, even if AAA-rated. If that company faces 
                      issues, your entire bond portfolio is at risk.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Example:</p>
                      <p className="text-sm">
                        Investor put entire {formatCurrency(5000000)} in IL&FS bonds because they were AAA-rated 
                        and offered good yields. When IL&FS defaulted in 2018, lost majority of investment.
                      </p>
                      <p className="text-xs text-red-600 mt-2">
                        Even AAA ratings can be wrong. Diversification is critical.
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">✓ Solution:</p>
                    <ul className="text-xs space-y-1 ml-6">
                      <li>• Limit single issuer exposure to 15-20% of bond portfolio</li>
                      <li>• Diversify across 5-8 different issuers minimum</li>
                      <li>• Mix government and corporate bonds</li>
                      <li>• Spread across sectors (banking, power, infra, etc.)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-yellow-600" />
                    Mistake #6: Ignoring Interest Rate Cycle
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                    <p className="text-sm mb-4">
                      Buying long-duration bonds when rates are at peak (about to fall) or short-duration 
                      bonds when rates are at bottom (about to rise).
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Wrong Timing Examples:</p>
                      <ul className="text-xs space-y-2">
                        <li>• Buying 10Y bonds at 6% when RBI is about to cut rates (could've waited for 7-8%)</li>
                        <li>• Buying 1Y T-Bills at 7% when rates are rising (could've locked 8-9% in long bonds)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">✓ Solution:</p>
                    <ul className="text-xs space-y-1 ml-6">
                      <li>• <strong>Rising Rate Environment:</strong> Buy short-duration bonds (1-3Y), wait for peak to buy long bonds</li>
                      <li>• <strong>Falling Rate Environment:</strong> Lock in long-duration bonds (7-10Y) at high rates</li>
                      <li>• <strong>Uncertain:</strong> Use bond laddering to average out rate changes</li>
                      <li>• Watch RBI repo rate decisions and forward guidance</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-green-600" />
                    Mistake #7: Not Diversifying Maturities
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <p className="text-sm mb-4">
                      Buying all bonds with same maturity date. When all mature together, you face 
                      reinvestment risk if rates are low at that time.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Example:</p>
                      <p className="text-sm">
                        2018: Bought 5 different bonds, all maturing in 2028. All locked at 8-8.5% YTM.
                      </p>
                      <p className="text-sm mt-2">
                        2028: All bonds mature together. But rates have fallen to 6%. Now stuck reinvesting 
                        entire corpus at much lower rates.
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">✓ Solution: Bond Laddering</p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-2">
                      <p className="text-xs mb-2">Spread maturities across different years:</p>
                      <ul className="text-xs space-y-1 ml-6">
                        <li>• 20% in 2025 bonds</li>
                        <li>• 20% in 2026 bonds</li>
                        <li>• 20% in 2027 bonds</li>
                        <li>• 20% in 2028 bonds</li>
                        <li>• 20% in 2029 bonds</li>
                      </ul>
                      <p className="text-xs mt-2">Each year, reinvest matured amount at prevailing rates. Averages out rate risk.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-purple-600" />
                    Mistake #8: Ignoring Tax Implications
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <p className="text-sm mb-4">
                      Not considering that bond interest is taxed at your income tax slab rate. A "9% bond" 
                      might give you only 6.3% post-tax if you're in 30% bracket.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Comparison:</p>
                      <table className="w-full text-xs mt-2">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Bond Type</th>
                            <th className="text-right p-2">YTM</th>
                            <th className="text-right p-2">Post-Tax (30% bracket)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Taxable bond</td>
                            <td className="text-right p-2">9.0%</td>
                            <td className="text-right p-2">6.3%</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Tax-free bond</td>
                            <td className="text-right p-2">5.5%</td>
                            <td className="text-right p-2 font-bold text-green-600">5.5%</td>
                          </tr>
                          <tr>
                            <td className="p-2">G-Sec (slightly taxable)</td>
                            <td className="text-right p-2">7.2%</td>
                            <td className="text-right p-2">5.0%</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="text-xs text-orange-600 mt-3">
                        For 30% tax bracket, tax-free bonds better than many taxable bonds!
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">✓ Solution:</p>
                    <ul className="text-xs space-y-1 ml-6">
                      <li>• Always calculate post-tax returns before comparing bonds</li>
                      <li>• If in 30% bracket, consider tax-free bonds (NHAI, IRFC, PFC, REC)</li>
                      <li>• Capital gains also taxed: STCG at slab rate, LTCG at 12.5%</li>
                      <li>• Consider tax loss harvesting opportunities</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-teal-600" />
                    Mistake #9: Not Reading Bond Prospectus/Term Sheet
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
                    <p className="text-sm mb-4">
                      Buying bonds without reading important details like call/put options, covenants, 
                      security/unsecured nature, etc.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Hidden Clauses That Matter:</p>
                      <ul className="text-xs space-y-2 ml-4">
                        <li>• <strong>Call Option:</strong> Issuer can redeem early if rates fall (you lose high yield)</li>
                        <li>• <strong>Put Option:</strong> You can sell back to issuer (good for you)</li>
                        <li>• <strong>Unsecured:</strong> No collateral backing - higher risk</li>
                        <li>• <strong>Subordinated:</strong> Last in line for recovery in default</li>
                        <li>• <strong>Step-up/Step-down:</strong> Coupon rate changes over time</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">✓ Solution:</p>
                    <ul className="text-xs space-y-1 ml-6">
                      <li>• Always read the term sheet before buying</li>
                      <li>• Check if bond is callable (avoid if you want guaranteed long-term income)</li>
                      <li>• Prefer secured bonds over unsecured</li>
                      <li>• Understand seniority (senior bonds safer than subordinated)</li>
                      <li>• Look for negative covenants (restrictions on issuer to protect you)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-pink-600" />
                    Mistake #10: Buying Based on Past Ratings (Not Current)
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
                    <p className="text-sm mb-4">
                      Assuming a bond is safe because it "was" AAA-rated, without checking for recent downgrades.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Example:</p>
                      <p className="text-sm">
                        Yes Bank AT1 bonds were rated AAA when issued. By 2020, downgraded to D (default). 
                        Many investors still held thinking "it was AAA".
                      </p>
                      <p className="text-xs text-red-600 mt-2">
                        <strong>Result:</strong> Complete write-off. ₹10,000 crore worth of bonds written to zero.
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">✓ Solution:</p>
                    <ul className="text-xs space-y-1 ml-6">
                      <li>• Check CURRENT rating before buying and periodically after</li>
                      <li>• Set alerts for rating changes on bonds you hold</li>
                      <li>• If downgraded to A or below, consider selling immediately</li>
                      <li>• "Negative outlook" on rating is early warning sign</li>
                      <li>• Multiple agencies downgrading = serious red flag</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-indigo-600" />
                    Mistake #11: Confusing Bonds with FDs
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                    <p className="text-sm mb-4">
                      Treating bonds like fixed deposits. FDs are principal-protected by DICGC (up to {formatCurrency(500000)}). 
                      Bonds have price volatility and credit risk.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">Key Differences:</p>
                      <table className="w-full text-xs mt-2">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Feature</th>
                            <th className="text-center p-2">FD</th>
                            <th className="text-center p-2">Bond</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Principal Safety</td>
                            <td className="text-center p-2">✓ (DICGC)</td>
                            <td className="text-center p-2">✗ (Credit risk)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Price Volatility</td>
                            <td className="text-center p-2">None</td>
                            <td className="text-center p-2">Yes (MTM)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Early Exit</td>
                            <td className="text-center p-2">Penalty</td>
                            <td className="text-center p-2">Market Price</td>
                          </tr>
                          <tr>
                            <td className="p-2">Returns</td>
                            <td className="text-center p-2">Fixed</td>
                            <td className="text-center p-2">Variable (if sold early)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">✓ Solution:</p>
                    <ul className="text-xs space-y-1 ml-6">
                      <li>• Understand bonds are securities, not deposits</li>
                      <li>• If you want FD-like safety, stick to G-Secs or AAA PSU bonds</li>
                      <li>• Accept price volatility if selling before maturity</li>
                      <li>• Corporate bonds carry credit risk unlike bank FDs</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-red-600" />
                    Mistake #12: Not Monitoring Held Bonds
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                    <p className="text-sm mb-4">
                      "Set and forget" approach. Not tracking company performance, rating changes, news, 
                      or market developments.
                    </p>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold mb-2">What to Monitor:</p>
                      <ul className="text-xs space-y-2 ml-4">
                        <li>• <strong>Quarterly Results:</strong> Is company profitable? Debt increasing?</li>
                        <li>• <strong>Rating Reviews:</strong> Any downgrades or outlook changes?</li>
                        <li>• <strong>News:</strong> Management changes, legal issues, sector problems</li>
                        <li>• <strong>Interest Payments:</strong> Are coupons being paid on time?</li>
                        <li>• <strong>Market Price:</strong> Significant drop may indicate credit concerns</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-sm">✓ Solution:</p>
                    <ul className="text-xs space-y-1 ml-6">
                      <li>• Review bond portfolio at least quarterly</li>
                      <li>• Set Google Alerts for company names you've invested in</li>
                      <li>• Subscribe to rating agency notifications</li>
                      <li>• If see warning signs, exit even at small loss (better than big loss later)</li>
                      <li>• Keep track of coupon payment dates</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Quick Checklist */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Pre-Purchase Checklist</CardTitle>
            </div>
            <CardDescription>Run through this before buying any bond</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg mb-4">Before Buying:</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Credit rating is AAA or AA+ (minimum)</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Checked rating outlook (not negative)</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Read term sheet/prospectus</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Verified bond is not callable (if seeking long-term income)</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Checked trading liquidity (volume)</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Calculated post-tax returns</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg mb-4">Portfolio Check:</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Single issuer won't exceed 15-20% of portfolio</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Maturity dates are well-spread (laddering)</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Portfolio has mix of govt and corporate bonds</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Can hold till maturity (have emergency fund separately)</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Interest rate timing is favorable</span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <span>Understand all risks involved</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-red-500 shadow-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">1</Badge>
                  <p className="text-sm">Never chase yield without checking credit rating - that extra 2-3% can cost you 100%</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">2</Badge>
                  <p className="text-sm">Check liquidity before buying - illiquid bonds can't be sold when you need cash</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">3</Badge>
                  <p className="text-sm">YTM is theoretical return, not guaranteed - reinvestment risk applies</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">4</Badge>
                  <p className="text-sm">Hold till maturity to avoid mark-to-market losses from rate changes</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">5</Badge>
                  <p className="text-sm">Diversify across issuers (8-10 minimum) - even AAA can default</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">6</Badge>
                  <p className="text-sm">Time bond purchases with interest rate cycle for better returns</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">7</Badge>
                  <p className="text-sm">Use bond laddering - spread maturities to average out reinvestment rates</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">8</Badge>
                  <p className="text-sm">Always calculate post-tax returns - tax can reduce returns by 30%</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">9</Badge>
                  <p className="text-sm">Read term sheet - call options, security, covenants matter</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">10</Badge>
                  <p className="text-sm">Monitor current ratings, not past ratings - downgrades happen</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">11</Badge>
                  <p className="text-sm">Bonds are NOT FDs - they have price volatility and credit risk</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-600 mt-1">12</Badge>
                  <p className="text-sm">Review portfolio quarterly - track company performance and ratings</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default CommonMistakesBonds;
