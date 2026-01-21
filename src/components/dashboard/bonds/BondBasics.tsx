"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  BookOpen, 
  TrendingUp, 
  ShieldCheck, 
  Scale, 
  AlertCircle,
  Info,
  CheckCircle,
  DollarSign,
  Calendar,
  Award,
  Target,
  Briefcase
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const BondBasics = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Fundamentals</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Bond Basics</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Master the fundamental concepts of bonds - the cornerstone of fixed income investing. 
            Learn what bonds are, how they work, and why they deserve a place in your portfolio.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* What are Bonds */}
        <Card className="border-l-4 border-l-blue-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Info className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">What are Bonds?</CardTitle>
            </div>
            <CardDescription>Understanding the basic concept of bond investments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                A <strong>bond</strong> is essentially a loan that you (the investor) give to an entity (the issuer), 
                which can be a government, corporation, or other organization. In return for lending your money, 
                the issuer promises to:
              </p>
              <ul className="space-y-2 ml-6">
                <li>Pay you regular interest (called coupon payments) at fixed intervals</li>
                <li>Return the principal amount (face value) when the bond matures</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
                Simple Example
              </h4>
              <p className="mb-4">
                You buy a bond with:
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li><strong>Face Value:</strong> {formatCurrency(100000)}</li>
                <li><strong>Coupon Rate:</strong> 8% per year</li>
                <li><strong>Maturity:</strong> 5 years</li>
              </ul>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <p className="font-medium mb-2">What you receive:</p>
                <ul className="space-y-1">
                  <li>• Annual interest: {formatCurrency(8000)} (for 5 years)</li>
                  <li>• Principal at maturity: {formatCurrency(100000)}</li>
                  <li>• <strong>Total received:</strong> {formatCurrency(140000)}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Bond Components */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Key Bond Components</CardTitle>
            </div>
            <CardDescription>Understanding the fundamental elements of a bond</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">1. Face Value (Par Value)</h4>
                  <p className="text-muted-foreground">
                    The principal amount that will be repaid at maturity. Typically {formatCurrency(1000)} 
                    or {formatCurrency(100000)} in India. This is the amount the issuer borrows and must return.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">2. Coupon Rate</h4>
                  <p className="text-muted-foreground">
                    The annual interest rate paid by the issuer, expressed as a percentage of face value. 
                    A 10% coupon on {formatCurrency(100000)} bond = {formatCurrency(10000)} annual interest.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">3. Maturity Date</h4>
                  <p className="text-muted-foreground">
                    The date when the bond expires and the principal is repaid. Can range from 1 year 
                    to 30+ years. Short-term (&lt;5 years), Medium-term (5-10 years), Long-term (&gt;10 years).
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">4. Issuer</h4>
                  <p className="text-muted-foreground">
                    The entity borrowing money (Government, PSU, or Corporation). The issuer's 
                    creditworthiness determines the bond's risk and interest rate.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">5. Coupon Payment Frequency</h4>
                  <p className="text-muted-foreground">
                    How often interest is paid - typically annually, semi-annually, or quarterly. 
                    Most Indian bonds pay interest semi-annually or annually.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">6. Credit Rating</h4>
                  <p className="text-muted-foreground">
                    Assessment of the issuer's ability to repay (AAA to D). Higher ratings mean 
                    lower risk but also lower interest rates.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bond vs Equity Comparison */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Bonds vs Equity: Key Differences</CardTitle>
            </div>
            <CardDescription>Understanding the distinct characteristics of each asset class</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="border p-3 text-left font-bold">Aspect</th>
                    <th className="border p-3 text-left font-bold">Bonds</th>
                    <th className="border p-3 text-left font-bold">Equity (Stocks)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">What you are</td>
                    <td className="border p-3">Lender/Creditor</td>
                    <td className="border p-3">Owner/Shareholder</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Returns</td>
                    <td className="border p-3">Fixed interest payments (predictable)</td>
                    <td className="border p-3">Dividends + capital appreciation (variable)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Risk Level</td>
                    <td className="border p-3">Lower (especially govt bonds)</td>
                    <td className="border p-3">Higher (market volatility)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Priority in Bankruptcy</td>
                    <td className="border p-3">Paid first (senior claim)</td>
                    <td className="border p-3">Paid last (residual claim)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Maturity</td>
                    <td className="border p-3">Fixed maturity date</td>
                    <td className="border p-3">Perpetual (no maturity)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Income Stability</td>
                    <td className="border p-3">Highly stable and predictable</td>
                    <td className="border p-3">Uncertain (company dependent)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Voting Rights</td>
                    <td className="border p-3">No voting rights</td>
                    <td className="border p-3">Voting rights in company decisions</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Typical Returns</td>
                    <td className="border p-3">6-12% per year</td>
                    <td className="border p-3">12-15%+ per year (historical)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Inflation Protection</td>
                    <td className="border p-3">Limited (fixed returns)</td>
                    <td className="border p-3">Better (growth potential)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Suitable For</td>
                    <td className="border p-3">Conservative investors, retirees</td>
                    <td className="border p-3">Growth-oriented, long-term investors</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Why Invest in Bonds */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Why Invest in Bonds?</CardTitle>
            </div>
            <CardDescription>Key benefits of including bonds in your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">1. Predictable Income Stream</h4>
                    <p className="text-muted-foreground">
                      Regular fixed interest payments provide steady cash flow, ideal for retirees 
                      or those seeking passive income. You know exactly how much you'll receive and when.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">2. Capital Preservation</h4>
                    <p className="text-muted-foreground">
                      Unlike stocks, bonds return your principal at maturity. High-quality bonds 
                      (AAA/AA) offer near-guaranteed capital protection, making them safer than equities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">3. Portfolio Diversification</h4>
                    <p className="text-muted-foreground">
                      Bonds typically move inversely to stocks. When equity markets fall, bonds 
                      often rise, providing balance and reducing overall portfolio volatility.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">4. Lower Volatility</h4>
                    <p className="text-muted-foreground">
                      Bond prices are more stable than stocks. While they do fluctuate with 
                      interest rates, the movements are typically much smaller than equity swings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">5. Higher Priority in Default</h4>
                    <p className="text-muted-foreground">
                      Bondholders are paid before shareholders in case of bankruptcy. You have a 
                      legal claim on the company's assets, providing better downside protection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">6. Better Than Bank FDs (Sometimes)</h4>
                    <p className="text-muted-foreground">
                      Corporate bonds often offer 1-3% higher returns than bank fixed deposits, 
                      especially for longer tenures. Tax-free bonds can be even more attractive.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">7. Laddering Strategy</h4>
                    <p className="text-muted-foreground">
                      Create a "bond ladder" with staggered maturities to manage reinvestment 
                      risk and maintain liquidity while earning higher yields.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">8. Goal-Based Investing</h4>
                    <p className="text-muted-foreground">
                      Match bond maturities to your financial goals. Need money in 5 years? 
                      Buy a 5-year bond and know exactly what you'll have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bond Terminology */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-orange-600" />
              <CardTitle className="text-2xl">Essential Bond Terminology</CardTitle>
            </div>
            <CardDescription>Key terms every bond investor must understand</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  Yield to Maturity (YTM)
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    The total return you'll earn if you hold the bond until maturity, considering 
                    both coupon payments and any capital gain/loss. YTM is more important than 
                    coupon rate when comparing bonds.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <strong>Example:</strong> If you buy a 10% coupon bond at ₹95,000 (discount), 
                    your YTM will be higher than 10% because you'll also make ₹5,000 when it 
                    matures at ₹1,00,000.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  Current Yield
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    Annual interest payment divided by the current market price. Simple but doesn't 
                    account for capital gains at maturity.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <strong>Formula:</strong> Current Yield = (Annual Coupon Payment / Current Price) × 100
                    <br />
                    <strong>Example:</strong> ₹10,000 coupon / ₹95,000 price = 10.53%
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Accrued Interest
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    Interest that has accumulated since the last coupon payment. When you buy a 
                    bond between coupon dates, you must pay the seller the accrued interest.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <strong>Example:</strong> Bond pays ₹10,000 annual coupon. You buy it 3 months 
                    after last payment. You pay ₹2,500 accrued interest (3/12 × ₹10,000) to the seller.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  Duration
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    Measures how sensitive a bond's price is to interest rate changes. Higher 
                    duration = higher interest rate risk. Expressed in years.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <strong>Rule of thumb:</strong> If duration is 5 years and interest rates rise 
                    by 1%, bond price falls by approximately 5%.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">
                  Call Provision
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    Some bonds can be "called" (redeemed early) by the issuer before maturity. 
                    This happens when interest rates fall and the issuer wants to refinance at lower rates.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <strong>Impact:</strong> You get your principal back early but lose future high 
                    coupon payments. Always check if a bond has a call provision before investing.
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold">
                  Put Provision
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    Gives YOU the right to sell the bond back to the issuer before maturity at face 
                    value. This is favorable for investors as it provides an exit option.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-semibold">
                  Secured vs Unsecured Bonds
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    <strong>Secured:</strong> Backed by specific assets (land, equipment). Safer 
                    because you have claim on collateral if issuer defaults.
                  </p>
                  <p>
                    <strong>Unsecured (Debentures):</strong> No collateral backing. Higher risk, 
                    so they typically offer higher interest rates.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-semibold">
                  Premium, Discount, and Par
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    <strong>At Par:</strong> Bond trading at face value (₹1,00,000 bond costs ₹1,00,000)
                  </p>
                  <p>
                    <strong>At Premium:</strong> Trading above face value (₹1,05,000). Happens when 
                    coupon rate &gt; market rates.
                  </p>
                  <p>
                    <strong>At Discount:</strong> Trading below face value (₹95,000). Happens when 
                    coupon rate &lt; market rates.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg font-semibold">
                  Tenor
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    The length of time until the bond matures. Same as "term to maturity". 
                    Short tenor (1-3 years), Medium tenor (3-7 years), Long tenor (7+ years).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-lg font-semibold">
                  Spread
                </AccordionTrigger>
                <AccordionContent className="text-base space-y-2">
                  <p>
                    The difference in yield between a corporate bond and a risk-free government 
                    bond of similar maturity. Spread compensates for credit risk.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded">
                    <strong>Example:</strong> If 10-year G-Sec yields 7% and a corporate bond yields 
                    9.5%, the spread is 2.5% or 250 basis points.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-green-500 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Bonds are loans you give to issuers in exchange for regular interest and principal repayment</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Key components: Face value, coupon rate, maturity, issuer, and credit rating</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Bonds offer lower risk and predictable returns compared to stocks but also lower growth potential</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>They provide portfolio diversification, capital preservation, and steady income</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Understanding YTM, duration, and credit ratings is essential for bond investing</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Bonds are ideal for conservative investors, retirees, and those seeking predictable cash flows</span>
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default BondBasics;
