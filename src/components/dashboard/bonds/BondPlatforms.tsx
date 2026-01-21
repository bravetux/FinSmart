"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Store, 
  Building2, 
  Shield, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  FileText,
  Target,
  Lightbulb,
  CreditCard,
  Users,
  BarChart3
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const BondPlatforms = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Store className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Platforms</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Bond Trading Platforms</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Discover the best platforms to buy and trade bonds in India. Compare RBI Retail Direct, 
            NSE/BSE goBID, GoldenPi, IndiaBonds, and Wint Wealth with detailed features and step-by-step guides.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Platform Comparison Table */}
        <Card className="border-l-4 border-l-green-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Platform Comparison</CardTitle>
            </div>
            <CardDescription>Detailed comparison of all major bond platforms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-green-100 dark:bg-green-900/30">
                    <th className="border p-3 text-left">Feature</th>
                    <th className="border p-3 text-left">RBI Retail Direct</th>
                    <th className="border p-3 text-left">NSE/BSE goBID</th>
                    <th className="border p-3 text-left">GoldenPi</th>
                    <th className="border p-3 text-left">IndiaBonds</th>
                    <th className="border p-3 text-left">Wint Wealth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Bonds Available</td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">G-Secs, SDLs, T-Bills</div>
                      <div className="text-xs">Govt bonds only</div>
                    </td>
                    <td className="border p-3">
                      <div>G-Secs, SDLs, T-Bills</div>
                      <div className="text-xs">Govt bonds only</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">G-Secs + Corporates</div>
                      <div className="text-xs">Wide selection</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Corporates mainly</div>
                      <div className="text-xs">PSU & Private</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Curated Bonds</div>
                      <div className="text-xs">AAA+ corporates</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Account Opening Fee</td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">₹0 (Free)</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">₹0 (Free)</div>
                    </td>
                    <td className="border p-3">₹0 (Free)</td>
                    <td className="border p-3">₹0 (Free)</td>
                    <td className="border p-3">₹0 (Free)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Transaction Fees</td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">₹0 (Free)</div>
                    </td>
                    <td className="border p-3">
                      <div>0.01% - 0.1%</div>
                      <div className="text-xs">Via broker</div>
                    </td>
                    <td className="border p-3">
                      <div>0.1% - 0.3%</div>
                      <div className="text-xs">Min ₹100</div>
                    </td>
                    <td className="border p-3">
                      <div>0.15% - 0.35%</div>
                      <div className="text-xs">Plus GST</div>
                    </td>
                    <td className="border p-3">
                      <div>0.1% - 0.25%</div>
                      <div className="text-xs">Plus GST</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Minimum Investment</td>
                    <td className="border p-3">
                      <div>₹10,000</div>
                      <div className="text-xs">G-Secs/SDLs</div>
                    </td>
                    <td className="border p-3">
                      <div>₹10,000</div>
                      <div className="text-xs">Varies by bond</div>
                    </td>
                    <td className="border p-3">
                      <div>₹10,000</div>
                      <div className="text-xs">Varies by bond</div>
                    </td>
                    <td className="border p-3">
                      <div>₹10,000</div>
                      <div className="text-xs">Varies by bond</div>
                    </td>
                    <td className="border p-3">
                      <div>₹10,000</div>
                      <div className="text-xs">Some bonds ₹25K+</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Research & Tools</td>
                    <td className="border p-3">
                      <div>Basic</div>
                      <div className="text-xs">Simple interface</div>
                    </td>
                    <td className="border p-3">
                      <div>Limited</div>
                      <div className="text-xs">Via broker</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Excellent</div>
                      <div className="text-xs">YTM calculator, filters</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Good</div>
                      <div className="text-xs">Rating analysis</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Very Good</div>
                      <div className="text-xs">Curated picks</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">User Interface</td>
                    <td className="border p-3">
                      <div>Government portal</div>
                      <div className="text-xs">Functional but basic</div>
                    </td>
                    <td className="border p-3">
                      <div>Exchange platform</div>
                      <div className="text-xs">Technical</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Modern, intuitive</div>
                      <div className="text-xs">User-friendly</div>
                    </td>
                    <td className="border p-3">
                      <div>Professional</div>
                      <div className="text-xs">Feature-rich</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Clean, simple</div>
                      <div className="text-xs">Beginner-friendly</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Customer Support</td>
                    <td className="border p-3">
                      <div>Email support</div>
                      <div className="text-xs">Helpdesk</div>
                    </td>
                    <td className="border p-3">
                      <div>Via broker</div>
                      <div className="text-xs">Depends on broker</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Email, Chat, Phone</div>
                      <div className="text-xs">Responsive</div>
                    </td>
                    <td className="border p-3">
                      <div>Email, Phone</div>
                      <div className="text-xs">Good support</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Email, Chat, Phone</div>
                      <div className="text-xs">Excellent</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Demat Account</td>
                    <td className="border p-3">
                      <div className="text-green-600 font-bold">Not Required</div>
                      <div className="text-xs">RBI Gilt account</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-red-600">Required</div>
                      <div className="text-xs">Existing Demat</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-red-600">Required</div>
                      <div className="text-xs">Can help open</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-red-600">Required</div>
                      <div className="text-xs">Can help open</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-red-600">Required</div>
                      <div className="text-xs">Partner with DPs</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border p-3 font-semibold">Best For</td>
                    <td className="border p-3">
                      <div className="text-sm">Govt bonds only</div>
                      <div className="text-xs">Zero fees</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-sm">Existing traders</div>
                      <div className="text-xs">Have broker already</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-sm">Wide selection</div>
                      <div className="text-xs">Research tools</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-sm">Corporate bonds</div>
                      <div className="text-xs">Professional traders</div>
                    </td>
                    <td className="border p-3">
                      <div className="text-sm">Beginners</div>
                      <div className="text-xs">Curated picks</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Individual Platform Details */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Platform Details & Features</CardTitle>
            </div>
            <CardDescription>In-depth look at each platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    RBI Retail Direct
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4">Overview</h4>
                    <p className="text-sm mb-4">
                      Official RBI platform for retail investors to buy government securities directly 
                      without intermediaries. Launched in 2021 to democratize govt bond investing.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Pros
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✓ Completely FREE - no charges</li>
                          <li>✓ Direct from RBI - highest credibility</li>
                          <li>✓ No demat account needed</li>
                          <li>✓ Zero credit risk (govt bonds)</li>
                          <li>✓ Simple and secure</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-red-600" />
                          Cons
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✗ Only govt securities (no corporates)</li>
                          <li>✗ Basic interface, limited features</li>
                          <li>✗ Secondary market selling cumbersome</li>
                          <li>✗ Limited research tools</li>
                          <li>✗ No mobile app initially</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                    <h5 className="font-semibold mb-4">Available Securities</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>G-Secs:</strong> 1Y to 40Y maturity government bonds</li>
                      <li>• <strong>T-Bills:</strong> 91-day, 182-day, 364-day treasury bills</li>
                      <li>• <strong>SDLs:</strong> State Development Loans from various states</li>
                      <li>• <strong>SGBs:</strong> Sovereign Gold Bonds (when issued)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h5 className="font-semibold mb-4">Best For:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Investors wanting only government securities</li>
                      <li>✓ Those who want zero-cost investing</li>
                      <li>✓ Conservative investors prioritizing safety</li>
                      <li>✓ Long-term hold-to-maturity investors</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Store className="h-5 w-5 text-orange-600" />
                    NSE/BSE goBID Platform
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4">Overview</h4>
                    <p className="text-sm mb-4">
                      Official bond trading platform by NSE and BSE for government securities. 
                      Requires working through registered brokers but offers exchange-backed security.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Pros
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✓ Exchange-backed platform</li>
                          <li>✓ Access through existing broker</li>
                          <li>✓ Good liquidity in secondary market</li>
                          <li>✓ Transparent pricing</li>
                          <li>✓ Regulated by SEBI</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-red-600" />
                          Cons
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✗ Requires demat account</li>
                          <li>✗ Broker charges apply (0.01-0.1%)</li>
                          <li>✗ Only govt securities</li>
                          <li>✗ Interface varies by broker</li>
                          <li>✗ Learning curve for beginners</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                    <h5 className="font-semibold mb-4">Participating Brokers</h5>
                    <p className="text-sm mb-3">Major brokers offering goBID access:</p>
                    <ul className="space-y-1 text-sm ml-6">
                      <li>• Zerodha (₹0 for delivery trades)</li>
                      <li>• Upstox (₹20 per order)</li>
                      <li>• ICICI Direct</li>
                      <li>• HDFC Securities</li>
                      <li>• Angel One</li>
                      <li>• 5paisa</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h5 className="font-semibold mb-4">Best For:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Existing traders with demat accounts</li>
                      <li>✓ Those wanting secondary market liquidity</li>
                      <li>✓ Investors comfortable with broker platforms</li>
                      <li>✓ Active traders who buy/sell frequently</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-yellow-600" />
                    GoldenPi
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4">Overview</h4>
                    <p className="text-sm mb-4">
                      Leading fintech platform for bonds with widest selection including govt and corporate bonds. 
                      Excellent research tools and user-friendly interface make it popular among retail investors.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Pros
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✓ Widest bond selection (govt + corporate)</li>
                          <li>✓ Excellent research & filters</li>
                          <li>✓ User-friendly interface</li>
                          <li>✓ YTM calculator built-in</li>
                          <li>✓ Good customer support</li>
                          <li>✓ Educational content</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-red-600" />
                          Cons
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✗ Requires demat account</li>
                          <li>✗ Transaction fees (0.1-0.3%)</li>
                          <li>✗ Some bonds have high minimums</li>
                          <li>✗ GST on brokerage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                    <h5 className="font-semibold mb-4">Key Features</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Bond Universe:</strong> 500+ bonds (G-Secs, SDLs, PSU, Corporate)</li>
                      <li>• <strong>Filters:</strong> By rating, maturity, issuer, YTM</li>
                      <li>• <strong>Research:</strong> Credit ratings, issue details, comparisons</li>
                      <li>• <strong>Notifications:</strong> New bond alerts, maturity reminders</li>
                      <li>• <strong>Pricing:</strong> 0.1% for G-Secs, 0.2-0.3% for corporates</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h5 className="font-semibold mb-4">Best For:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Investors wanting both govt and corporate bonds</li>
                      <li>✓ Those who value research tools</li>
                      <li>✓ Investors building diversified bond portfolio</li>
                      <li>✓ People comfortable with moderate fees for better service</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-purple-600" />
                    IndiaBonds
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4">Overview</h4>
                    <p className="text-sm mb-4">
                      Professional bond trading platform with focus on corporate bonds. 
                      Established player with strong relationships with bond issuers and underwriters.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Pros
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✓ Strong corporate bond selection</li>
                          <li>✓ Access to primary issuances</li>
                          <li>✓ Detailed rating analysis</li>
                          <li>✓ Professional platform</li>
                          <li>✓ Good support for HNIs</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-red-600" />
                          Cons
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✗ Requires demat account</li>
                          <li>✗ Higher fees (0.15-0.35%)</li>
                          <li>✗ Interface more complex</li>
                          <li>✗ Not beginner-friendly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                    <h5 className="font-semibold mb-4">Specialty</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Primary Market:</strong> Early access to new bond issues</li>
                      <li>• <strong>Corporate Focus:</strong> PSU and top-rated private bonds</li>
                      <li>• <strong>Research:</strong> In-depth credit analysis and reports</li>
                      <li>• <strong>HNI Service:</strong> Dedicated RM for large investors</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h5 className="font-semibold mb-4">Best For:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>✓ HNIs and serious bond investors</li>
                      <li>✓ Those focused on corporate bonds</li>
                      <li>✓ Investors wanting primary market access</li>
                      <li>✓ People comfortable with professional platforms</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-teal-600" />
                    Wint Wealth
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4">Overview</h4>
                    <p className="text-sm mb-4">
                      Modern fintech startup making bonds accessible to retail investors. 
                      Curated selection, clean UI, and excellent customer service make it beginner-friendly.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Pros
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✓ Curated high-quality bonds</li>
                          <li>✓ Clean, intuitive interface</li>
                          <li>✓ Excellent customer support</li>
                          <li>✓ Educational content & webinars</li>
                          <li>✓ Beginner-friendly</li>
                          <li>✓ Fast onboarding</li>
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-semibold mb-3 flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-red-600" />
                          Cons
                        </h5>
                        <ul className="text-sm space-y-1">
                          <li>✗ Requires demat account</li>
                          <li>✗ Transaction fees (0.1-0.25%)</li>
                          <li>✗ Limited bond selection (curated)</li>
                          <li>✗ Newer platform (less track record)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
                    <h5 className="font-semibold mb-4">Unique Features</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Curation:</strong> Only AAA and AA+ bonds listed</li>
                      <li>• <strong>Education:</strong> Weekly webinars on bond investing</li>
                      <li>• <strong>Support:</strong> Dedicated WhatsApp support</li>
                      <li>• <strong>Simplicity:</strong> Easiest platform for beginners</li>
                      <li>• <strong>Community:</strong> Active investor community</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <h5 className="font-semibold mb-4">Best For:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>✓ First-time bond investors</li>
                      <li>✓ Those wanting curated, safe bonds</li>
                      <li>✓ Investors valuing excellent support</li>
                      <li>✓ People who want simple, clean experience</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Account Opening Guide */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Step-by-Step Account Opening</CardTitle>
            </div>
            <CardDescription>How to get started on each platform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  RBI Retail Direct Account Opening
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h5 className="font-semibold mb-4">Documents Required:</h5>
                    <ul className="text-sm space-y-1 ml-6">
                      <li>• PAN Card (mandatory)</li>
                      <li>• Aadhaar Card (for eKYC)</li>
                      <li>• Bank account details (savings account)</li>
                      <li>• Email ID and mobile number</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Visit RBI Retail Direct Website</p>
                        <p className="text-sm text-muted-foreground">
                          Go to https://rbiretaildirect.org.in and click "Register"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Enter PAN and Personal Details</p>
                        <p className="text-sm text-muted-foreground">
                          Provide PAN, name, DOB, email, mobile number
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Complete eKYC via Aadhaar</p>
                        <p className="text-sm text-muted-foreground">
                          OTP-based Aadhaar authentication (instant verification)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Link Bank Account</p>
                        <p className="text-sm text-muted-foreground">
                          Enter bank account details, verify with penny drop test
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Account Activated!</p>
                        <p className="text-sm text-muted-foreground">
                          Receive login credentials via email. Start investing in G-Secs!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <p className="font-bold text-sm">⏱️ Time to Activate: 15-30 minutes (instant if eKYC works)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  GoldenPi / Wint Wealth Account Opening
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                    <h5 className="font-semibold mb-4">Documents Required:</h5>
                    <ul className="text-sm space-y-1 ml-6">
                      <li>• PAN Card</li>
                      <li>• Aadhaar Card</li>
                      <li>• Bank account proof (cancelled cheque/statement)</li>
                      <li>• Signature specimen</li>
                      <li>• Income proof (if needed for higher limits)</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Register on Platform</p>
                        <p className="text-sm text-muted-foreground">
                          Visit website, click "Sign Up", enter email/mobile
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Complete KYC</p>
                        <p className="text-sm text-muted-foreground">
                          Upload PAN, Aadhaar, selfie - eKYC via DigiLocker or Aadhaar OTP
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Open/Link Demat Account</p>
                        <p className="text-sm text-muted-foreground">
                          If you don't have demat, platform partners will open one (CDSL/NSDL)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Bank Account Verification</p>
                        <p className="text-sm text-muted-foreground">
                          Link bank account for fund transfers (penny drop verification)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Start Investing!</p>
                        <p className="text-sm text-muted-foreground">
                          Browse bonds, select, place order - funds debited from bank
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <p className="font-bold text-sm">⏱️ Time to Activate: 1-2 days (demat opening may take 2-3 days if new)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Platform Recommendation */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Which Platform Should You Choose?</CardTitle>
            </div>
            <CardDescription>Decision guide based on your needs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h4 className="font-semibold text-lg">Choose RBI Retail Direct If:</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>You only want government securities (G-Secs, T-Bills, SDLs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>You want absolutely zero fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>You don't want to open demat account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-blue-600" />
                    <span>You're a buy-and-hold investor</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/10 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                  <h4 className="font-semibold text-lg">Choose GoldenPi If:</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-yellow-600" />
                    <span>You want widest selection (govt + corporate bonds)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-yellow-600" />
                    <span>You value research tools and bond filters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-yellow-600" />
                    <span>You're building diversified bond portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-yellow-600" />
                    <span>You're comfortable paying 0.1-0.3% for better service</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-900/10 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                  <h4 className="font-semibold text-lg">Choose Wint Wealth If:</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-teal-600" />
                    <span>You're a beginner to bond investing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-teal-600" />
                    <span>You want curated, safe bond picks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-teal-600" />
                    <span>You value excellent customer support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-teal-600" />
                    <span>You prefer simple, clean interface</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-purple-600" />
                  <h4 className="font-semibold text-lg">Choose IndiaBonds If:</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-600" />
                    <span>You're a high net worth investor (HNI)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-600" />
                    <span>You focus primarily on corporate bonds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-600" />
                    <span>You want access to primary issuances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-purple-600" />
                    <span>You need dedicated relationship manager</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-green-600" />
                Smart Strategy: Use Multiple Platforms
              </h4>
              <div className="space-y-3 text-sm">
                <p>Many experienced investors use 2-3 platforms to get best of all worlds:</p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>RBI Retail Direct:</strong> For G-Secs (zero cost)</li>
                  <li>• <strong>GoldenPi/Wint Wealth:</strong> For corporate bonds</li>
                  <li>• <strong>NSE goBID:</strong> For secondary market trading (if needed)</li>
                </ul>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-3">
                  <p className="font-medium mb-2">Example Split:</p>
                  <p className="text-xs">60% G-Secs via RBI Retail Direct + 40% Corporate bonds via GoldenPi</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-green-500 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 mt-1">1</Badge>
                  <p className="text-sm">RBI Retail Direct is free but only for govt securities</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 mt-1">2</Badge>
                  <p className="text-sm">GoldenPi offers widest selection with great research tools</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 mt-1">3</Badge>
                  <p className="text-sm">Wint Wealth is most beginner-friendly with curated picks</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-600 mt-1">4</Badge>
                  <p className="text-sm">All platforms (except RBI) require demat account</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-emerald-600 mt-1">5</Badge>
                  <p className="text-sm">Transaction fees range from 0% (RBI) to 0.35% (IndiaBonds)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-emerald-600 mt-1">6</Badge>
                  <p className="text-sm">Account opening takes 15 mins (RBI) to 2-3 days (others)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-emerald-600 mt-1">7</Badge>
                  <p className="text-sm">Using multiple platforms gives best of all worlds</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-emerald-600 mt-1">8</Badge>
                  <p className="text-sm">Choose based on bond type, fees, features, and ease of use</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default BondPlatforms;
