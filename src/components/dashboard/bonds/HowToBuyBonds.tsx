"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ShoppingCart,
  TrendingUp,
  Building2,
  Users,
  CheckCircle,
  AlertCircle,
  Info,
  Award,
  FileText,
  CreditCard,
  Smartphone,
  Globe
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const HowToBuyBonds = () => {
  const { currency } = useCurrency();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Buying Guide</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">How to Buy Bonds</h1>
          <p className="text-xl text-violet-100 max-w-3xl">
            A comprehensive guide to purchasing bonds in India - from opening accounts to placing 
            orders. Learn about primary and secondary markets, platforms, and the complete buying process.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Primary vs Secondary Market */}
        <Card className="border-l-4 border-l-violet-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-violet-600" />
              <CardTitle className="text-2xl">Primary vs Secondary Market</CardTitle>
            </div>
            <CardDescription>Two ways to buy bonds - understand the difference</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-violet-200 dark:border-violet-800 rounded-lg p-6">
                <div className="bg-violet-100 dark:bg-violet-900/30 p-3 rounded-lg mb-4 inline-block">
                  <Building2 className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Primary Market</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Buy bonds directly from the issuer when they're first released
                </p>
                
                <div className="space-y-3 mb-4">
                  <h5 className="font-semibold">How it works:</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-violet-600 mt-1">•</span>
                      <span>Company/Government announces new bond issue</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-600 mt-1">•</span>
                      <span>Open subscription window (usually 3-10 days)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-600 mt-1">•</span>
                      <span>You apply through broker/platform</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-600 mt-1">•</span>
                      <span>Allotment if demand exceeds supply</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-600 mt-1">•</span>
                      <span>Money goes to the issuer</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <h5 className="font-semibold text-green-800 dark:text-green-400 mb-2">Advantages</h5>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Buy at face value (₹1,000 or ₹10,000)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>No premium/discount pricing</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Lower transaction costs</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Full coupon from day one</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mt-3">
                  <h5 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">Limitations</h5>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <span>Limited availability (when issues happen)</span>
                    </li>
                    <li className="flex gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <span>May not get full allocation</span>
                    </li>
                    <li className="flex gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <span>Short subscription window</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mb-4 inline-block">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Secondary Market</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Buy bonds from other investors who want to sell
                </p>
                
                <div className="space-y-3 mb-4">
                  <h5 className="font-semibold">How it works:</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Bonds already issued, traded on exchanges</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Browse available bonds on platform</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Check current market price & yield</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Place buy order through broker</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Money goes to the seller (not issuer)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <h5 className="font-semibold text-green-800 dark:text-green-400 mb-2">Advantages</h5>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Buy anytime (not limited to issue dates)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Wide selection of bonds available</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Can compare multiple options</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Sometimes available at discount</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mt-3">
                  <h5 className="font-semibold text-yellow-800 dark:text-yellow-400 mb-2">Limitations</h5>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <span>May pay premium over face value</span>
                    </li>
                    <li className="flex gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <span>Need to pay accrued interest</span>
                    </li>
                    <li className="flex gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <span>Liquidity varies by bond</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                Which Should You Choose?
              </h5>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Primary Market:</strong> If you know a good bond issue is coming and you're ready 
                to invest immediately. Best for new investors as prices are straightforward.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Secondary Market:</strong> For most ongoing investing. Offers flexibility to buy 
                anytime and compare multiple options. Most bonds are purchased this way.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* RBI Retail Direct Platform */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-2xl">RBI Retail Direct Platform</CardTitle>
            </div>
            <CardDescription>Buy government bonds directly from RBI - zero cost</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">What is RBI Retail Direct?</h4>
              <p className="text-muted-foreground mb-4">
                A platform launched by Reserve Bank of India in November 2021 to allow retail investors 
                to directly invest in Government Securities (G-Sec, T-Bills, SDL, SGB) without any 
                intermediaries or charges.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Available Bonds:</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Government Securities (G-Sec)</li>
                    <li>• Treasury Bills (T-Bills)</li>
                    <li>• State Development Loans (SDL)</li>
                    <li>• Sovereign Gold Bonds (SGB)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Key Benefits:</h5>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Zero account opening fees</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>No transaction charges</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Fully online process</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Direct from RBI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Step-by-Step Registration Process</h4>
              
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold mb-1">Visit Website</h5>
                    <p className="text-sm text-muted-foreground">
                      Go to <a href="https://rbiretaildirect.org.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        rbiretaildirect.org.in
                      </a> and click "Register"
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold mb-1">Provide Basic Details</h5>
                    <p className="text-sm text-muted-foreground mb-2">Enter:</p>
                    <ul className="text-sm space-y-1">
                      <li>• PAN Card number</li>
                      <li>• Date of Birth</li>
                      <li>• Email ID</li>
                      <li>• Mobile number</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold mb-1">Complete KYC</h5>
                    <p className="text-sm text-muted-foreground mb-2">Choose one method:</p>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Aadhaar-based e-KYC</strong> (fastest - instant)</li>
                      <li>• Video-based KYC</li>
                      <li>• In-person verification</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold mb-1">Link Bank Account</h5>
                    <p className="text-sm text-muted-foreground">
                      Link your savings/current bank account for payments and interest credits. 
                      Bank must be registered with your PAN.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold mb-1">Account Activation</h5>
                    <p className="text-sm text-muted-foreground">
                      Once KYC is approved, your Retail Direct Gilt (RDG) account is activated. 
                      You'll receive login credentials. Start investing immediately!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 text-green-800 dark:text-green-400">
                💡 Pro Tip
              </h5>
              <p className="text-sm text-muted-foreground">
                RBI Retail Direct is the BEST way to buy government bonds. It's official, secure, 
                and completely free. No platform can beat this for G-Sec, T-Bills, and SDL.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stock Exchanges (NSE/BSE) */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Stock Exchanges (NSE/BSE)</CardTitle>
            </div>
            <CardDescription>Buy corporate and government bonds through your stock broker</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Both NSE and BSE have dedicated bond trading platforms where listed bonds can be bought 
              and sold just like stocks.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  What You Need
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Demat account (to hold bonds electronically)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Trading account (to place buy/sell orders)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Bank account (linked for payments)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Stock broker platform access</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-orange-600" />
                  Costs Involved
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Brokerage:</strong> 0.1-0.5% of transaction value</li>
                  <li><strong>Demat Charges:</strong> ₹300-600/year (AMC)</li>
                  <li><strong>Transaction Charges:</strong> NSE/BSE fees</li>
                  <li><strong>GST:</strong> 18% on brokerage</li>
                  <li className="pt-2 border-t text-muted-foreground">
                    Total cost: ~0.15-0.7% per transaction
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">How to Buy Bonds on NSE/BSE:</h4>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="step-1">
                  <AccordionTrigger>Step 1: Login to Your Trading Platform</AccordionTrigger>
                  <AccordionContent className="text-sm space-y-2">
                    <p>Access your broker's trading platform (Zerodha, Upstox, ICICI Direct, etc.)</p>
                    <p>Navigate to the "Bonds" or "Debt" section (varies by broker)</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-2">
                  <AccordionTrigger>Step 2: Search for Bonds</AccordionTrigger>
                  <AccordionContent className="text-sm space-y-2">
                    <p>Search by:</p>
                    <ul className="ml-6 space-y-1">
                      <li>• ISIN code (unique bond identifier)</li>
                      <li>• Issuer name (HDFC, NTPC, etc.)</li>
                      <li>• Bond type (Corporate, G-Sec, SDL)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-3">
                  <AccordionTrigger>Step 3: Check Bond Details</AccordionTrigger>
                  <AccordionContent className="text-sm space-y-2">
                    <p>Before buying, verify:</p>
                    <ul className="ml-6 space-y-1">
                      <li>• Credit rating (AAA/AA preferred)</li>
                      <li>• Yield to Maturity (YTM)</li>
                      <li>• Current market price</li>
                      <li>• Maturity date</li>
                      <li>• Accrued interest</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-4">
                  <AccordionTrigger>Step 4: Place Buy Order</AccordionTrigger>
                  <AccordionContent className="text-sm space-y-2">
                    <p>Enter quantity (usually in multiples of face value)</p>
                    <p>Choose order type (Market or Limit)</p>
                    <p>Confirm and place order</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="step-5">
                  <AccordionTrigger>Step 5: Payment & Settlement</AccordionTrigger>
                  <AccordionContent className="text-sm space-y-2">
                    <p>Payment is debited from linked bank account</p>
                    <p>Bonds credited to demat account in T+1 or T+2 days</p>
                    <p>Future interest payments auto-credited to bank</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h5 className="font-semibold mb-2 flex items-center gap-2 text-yellow-800 dark:text-yellow-400">
                <AlertCircle className="h-5 w-5" />
                Limitations
              </h5>
              <ul className="space-y-1 text-sm">
                <li>• Limited selection (not all bonds are actively traded)</li>
                <li>• Poor liquidity for many bonds</li>
                <li>• Interface not bond-focused (designed for stocks)</li>
                <li>• Difficult to compare multiple bonds</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Bond Platforms */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Bond Platforms (GoldenPi, IndiaBonds, Wint Wealth)</CardTitle>
            </div>
            <CardDescription>Specialized platforms designed specifically for bond investing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              These are dedicated bond platforms that aggregate bonds from multiple sources and 
              provide user-friendly interfaces specifically designed for fixed-income investing.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-r-lg">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  GoldenPi
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  One of India's largest bond platforms with wide selection
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Features:</p>
                    <ul className="space-y-1">
                      <li>• 500+ bonds available</li>
                      <li>• Easy comparison tools</li>
                      <li>• Yield calculator</li>
                      <li>• Educational content</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Costs:</p>
                    <ul className="space-y-1">
                      <li>• No platform fees</li>
                      <li>• Transaction charges: 0.2-0.5%</li>
                      <li>• Demat AMC: ₹300/year</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  IndiaBonds
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  NSE-backed platform with institutional-grade bond access
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Features:</p>
                    <ul className="space-y-1">
                      <li>• NSE-listed bonds</li>
                      <li>• Real-time pricing</li>
                      <li>• Portfolio tracking</li>
                      <li>• Research reports</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Costs:</p>
                    <ul className="space-y-1">
                      <li>• Platform fee: ₹999/year</li>
                      <li>• Transaction charges apply</li>
                      <li>• Demat charges separate</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  Wint Wealth
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Modern bond investing app with clean UI and curated selection
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Features:</p>
                    <ul className="space-y-1">
                      <li>• Mobile-first design</li>
                      <li>• Curated high-quality bonds</li>
                      <li>• Goal-based recommendations</li>
                      <li>• Simple onboarding</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Costs:</p>
                    <ul className="space-y-1">
                      <li>• No platform fees</li>
                      <li>• Transaction: 0.1-0.25%</li>
                      <li>• Demat free for 1st year</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">Why Use Bond Platforms?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Easy comparison of multiple bonds side-by-side</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Built-in yield calculators and tools</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Curated selection of quality bonds</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Educational content and research</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Better UX than stock broker platforms</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Dedicated customer support for bonds</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demat Account Requirements */}
        <Card className="shadow-lg border-l-4 border-l-indigo-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Demat Account Requirements</CardTitle>
            </div>
            <CardDescription>Why you need a demat account and how to open one</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3">What is a Demat Account?</h4>
              <p className="text-muted-foreground mb-4">
                A Demat (Dematerialized) account holds your bonds electronically, just like a bank 
                account holds money. It's mandatory for buying/selling bonds (except through RBI Retail Direct).
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold mb-2">Benefits:</h5>
                  <ul className="space-y-1">
                    <li>• No physical certificates to store</li>
                    <li>• No risk of loss/theft/forgery</li>
                    <li>• Easy transfer and trading</li>
                    <li>• Automatic interest credits</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Costs:</h5>
                  <ul className="space-y-1">
                    <li>• Opening: ₹0 (most brokers)</li>
                    <li>• AMC: ₹300-600/year</li>
                    <li>• Transaction: ₹5-20 per trade</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">How to Open a Demat Account:</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Choose a Depository Participant (DP)</p>
                    <p className="text-sm text-muted-foreground">
                      Banks (HDFC, ICICI, SBI) or brokers (Zerodha, Upstox, Groww)
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Submit Documents</p>
                    <p className="text-sm text-muted-foreground">
                      PAN Card, Aadhaar, Bank proof, Photo, Signature
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Complete e-KYC</p>
                    <p className="text-sm text-muted-foreground">
                      Video verification or Aadhaar-based e-KYC (10-15 minutes)
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Account Activation</p>
                    <p className="text-sm text-muted-foreground">
                      Typically activated within 24-48 hours. You'll receive Demat account number.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> If you already have a demat account for stocks, the SAME account 
                can be used for bonds. No need to open a separate one!
              </p>
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
                <span>Primary market = buy at issue price; Secondary market = buy anytime from other investors</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>RBI Retail Direct is BEST for government bonds - zero charges, direct from RBI</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Bond platforms (GoldenPi, Wint Wealth) offer best experience for corporate bonds</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>NSE/BSE work but have poor liquidity and limited selection for bonds</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Demat account is mandatory for most bond purchases (except RBI Retail Direct)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Total costs: 0.15-0.7% for transactions + ₹300-600/year for demat AMC</span>
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default HowToBuyBonds;
