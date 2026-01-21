"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Receipt, 
  Calculator, 
  Percent, 
  FileText,
  TrendingUp,
  Calendar,
  ShieldCheck,
  AlertCircle,
  Target,
  Lightbulb,
  DollarSign,
  Clock
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const BondTaxation = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Receipt className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Tax Planning</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Bond Taxation in India</h1>
          <p className="text-xl text-yellow-100 max-w-3xl">
            Master the complete tax treatment of bonds - interest income, capital gains, TDS, 
            tax-free bonds, and ITR filing. Save taxes legally with detailed examples and calculations.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Interest Income Taxation */}
        <Card className="border-l-4 border-l-yellow-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Percent className="h-6 w-6 text-yellow-600" />
              <CardTitle className="text-2xl">Interest Income from Bonds</CardTitle>
            </div>
            <CardDescription>How coupon payments are taxed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Interest (coupon) income from bonds is added to your total income and taxed 
                at your <strong>applicable income tax slab rate</strong>. This is true for both 
                government bonds and corporate bonds.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Tax Slab Rates (FY 2025-26)</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-yellow-100 dark:bg-yellow-900/30">
                      <th className="border p-3 text-left">Annual Income</th>
                      <th className="border p-3 text-center">Old Regime Tax Rate</th>
                      <th className="border p-3 text-center">New Regime Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">Up to {formatCurrency(250000)}</td>
                      <td className="border p-3 text-center font-bold">Nil</td>
                      <td className="border p-3 text-center font-bold">Nil</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">{formatCurrency(250000)} - {formatCurrency(500000)}</td>
                      <td className="border p-3 text-center">5%</td>
                      <td className="border p-3 text-center">5%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">{formatCurrency(500000)} - {formatCurrency(1000000)}</td>
                      <td className="border p-3 text-center">20%</td>
                      <td className="border p-3 text-center">10%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">{formatCurrency(1000000)} - {formatCurrency(1250000)}</td>
                      <td className="border p-3 text-center">30%</td>
                      <td className="border p-3 text-center">15%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">{formatCurrency(1250000)} - {formatCurrency(1500000)}</td>
                      <td className="border p-3 text-center">30%</td>
                      <td className="border p-3 text-center">20%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">Above {formatCurrency(1500000)}</td>
                      <td className="border p-3 text-center">30%</td>
                      <td className="border p-3 text-center font-bold">30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs mt-3 text-muted-foreground">Plus: 4% Cess on tax amount</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-yellow-600" />
                Interest Income Tax Example
              </h4>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-3">Your Details:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Annual Salary Income: {formatCurrency(1200000)}</li>
                    <li>• Bond Holdings: {formatCurrency(1000000)} at 8% coupon</li>
                    <li>• Annual Interest Income: {formatCurrency(80000)}</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                  <p className="font-medium mb-3">Tax Calculation (New Regime):</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Income:</span>
                      <span>{formatCurrency(1200000)} + {formatCurrency(80000)} = {formatCurrency(1280000)}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <p className="font-medium mb-2">Tax Breakdown:</p>
                      <div className="space-y-1 ml-4">
                        <div className="flex justify-between">
                          <span>On first {formatCurrency(250000)}:</span>
                          <span>Nil</span>
                        </div>
                        <div className="flex justify-between">
                          <span>On next {formatCurrency(250000)} @ 5%:</span>
                          <span>{formatCurrency(12500)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>On next {formatCurrency(500000)} @ 10%:</span>
                          <span>{formatCurrency(50000)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>On next {formatCurrency(250000)} @ 15%:</span>
                          <span>{formatCurrency(37500)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>On remaining {formatCurrency(30000)} @ 20%:</span>
                          <span>{formatCurrency(6000)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                      <span>Total Tax:</span>
                      <span>{formatCurrency(106000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Add: 4% Cess</span>
                      <span>{formatCurrency(4240)}</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                      <span>Final Tax Liability:</span>
                      <span className="text-red-600">{formatCurrency(110240)}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Tax on Bond Interest:</p>
                  <p className="text-sm">
                    Additional tax due to {formatCurrency(80000)} interest ≈ {formatCurrency(16240)} (15-20% effective rate)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Capital Gains Taxation */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
              <CardTitle className="text-2xl">Capital Gains on Bond Sale</CardTitle>
            </div>
            <CardDescription>When you sell bonds before maturity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                If you sell a bond before maturity at a profit, you realize capital gains. 
                The tax treatment depends on your holding period.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Capital Gains Tax Rules</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-yellow-100 dark:bg-yellow-900/30">
                      <th className="border p-3 text-left">Holding Period</th>
                      <th className="border p-3 text-left">Gain Type</th>
                      <th className="border p-3 text-left">Tax Rate</th>
                      <th className="border p-3 text-left">Indexation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">
                        <div className="font-semibold">Less than 12 months</div>
                        <div className="text-xs text-muted-foreground">Short-term</div>
                      </td>
                      <td className="border p-3">Short-Term Capital Gains (STCG)</td>
                      <td className="border p-3">
                        <div className="font-bold">As per slab rate</div>
                        <div className="text-xs">(10%, 20%, or 30%)</div>
                      </td>
                      <td className="border p-3 text-center">
                        <Badge className="bg-red-600">No</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">
                        <div className="font-semibold">12 months or more</div>
                        <div className="text-xs text-muted-foreground">Long-term</div>
                      </td>
                      <td className="border p-3">Long-Term Capital Gains (LTCG)</td>
                      <td className="border p-3">
                        <div className="font-bold text-green-600">10% (without indexation)</div>
                        <div className="text-xs text-muted-foreground">OR</div>
                        <div className="font-bold text-blue-600">20% (with indexation)</div>
                      </td>
                      <td className="border p-3 text-center">
                        <Badge className="bg-green-600">Yes (Optional)</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">Capital Gains Examples</h4>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base font-semibold">
                    Short-Term Capital Gains (STCG)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                      <p className="font-medium mb-3">Scenario:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Bought bond: January 2025 at {formatCurrency(100000)}</li>
                        <li>• Sold bond: October 2025 at {formatCurrency(107000)}</li>
                        <li>• Holding Period: 9 months (short-term)</li>
                        <li>• Capital Gain: {formatCurrency(7000)}</li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                      <p className="font-medium mb-2">Tax Calculation (30% slab):</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>STCG:</span>
                          <span>{formatCurrency(7000)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax @ 30%:</span>
                          <span>{formatCurrency(2100)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Add: 4% Cess:</span>
                          <span>{formatCurrency(84)}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-bold">
                          <span>Total Tax:</span>
                          <span className="text-red-600">{formatCurrency(2184)}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-bold text-base">
                          <span>After-tax Profit:</span>
                          <span className="text-green-600">{formatCurrency(4816)}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base font-semibold">
                    Long-Term Capital Gains (LTCG) - Without Indexation
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p className="font-medium mb-3">Scenario:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Bought bond: January 2023 at {formatCurrency(100000)}</li>
                        <li>• Sold bond: March 2026 at {formatCurrency(112000)}</li>
                        <li>• Holding Period: 3 years 2 months (long-term)</li>
                        <li>• Capital Gain: {formatCurrency(12000)}</li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                      <p className="font-medium mb-2">Tax Calculation (10% flat rate):</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>LTCG:</span>
                          <span>{formatCurrency(12000)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax @ 10%:</span>
                          <span>{formatCurrency(1200)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Add: 4% Cess:</span>
                          <span>{formatCurrency(48)}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-bold">
                          <span>Total Tax:</span>
                          <span className="text-red-600">{formatCurrency(1248)}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-bold text-base">
                          <span>After-tax Profit:</span>
                          <span className="text-green-600">{formatCurrency(10752)}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base font-semibold">
                    Long-Term Capital Gains (LTCG) - With Indexation
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="font-medium mb-3">Same Scenario as above:</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Purchase Price: {formatCurrency(100000)} (Jan 2023)</li>
                        <li>• Sale Price: {formatCurrency(112000)} (Mar 2026)</li>
                        <li>• CII for FY 2022-23: 331</li>
                        <li>• CII for FY 2025-26: 363 (assumed)</li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                      <p className="font-medium mb-2">Tax Calculation (20% with indexation):</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Indexed Cost:</span>
                          <span>{formatCurrency(100000)} × (363/331) = {formatCurrency(109667)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Indexed LTCG:</span>
                          <span>{formatCurrency(112000)} - {formatCurrency(109667)} = {formatCurrency(2333)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax @ 20%:</span>
                          <span>{formatCurrency(467)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Add: 4% Cess:</span>
                          <span>{formatCurrency(19)}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-bold">
                          <span>Total Tax:</span>
                          <span className="text-red-600">{formatCurrency(486)}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-bold text-base">
                          <span>After-tax Profit:</span>
                          <span className="text-green-600">{formatCurrency(11514)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg mt-3">
                      <p className="font-bold text-sm">
                        ✓ With indexation: {formatCurrency(486)} tax | Without indexation: {formatCurrency(1248)} tax
                      </p>
                      <p className="text-sm mt-1">
                        Indexation saves {formatCurrency(762)} in this case! Choose whichever is lower.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>

        {/* Tax-Free Bonds */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-yellow-600" />
              <CardTitle className="text-2xl">Tax-Free Bonds</CardTitle>
            </div>
            <CardDescription>No tax on interest income</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Tax-free bonds are issued by government-backed entities like NHAI, REC, IRFC, PFC. 
                The interest earned is <strong>completely exempt from income tax</strong> under Section 10(15)(iv)(h).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  Benefits
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Interest fully tax-exempt (all slabs)</li>
                  <li>• Ideal for high tax bracket investors</li>
                  <li>• AAA-rated government backing</li>
                  <li>• Long tenure (10-20 years)</li>
                  <li>• Listed on exchange (can be sold)</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Limitations
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Lower coupon rates (5-5.5% typically)</li>
                  <li>• Not issued frequently (every 2-3 years)</li>
                  <li>• Capital gains still taxable</li>
                  <li>• Long lock-in (10-15 years)</li>
                  <li>• Poor secondary market liquidity</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">Tax-Free vs Taxable Bonds</h4>
              <div className="space-y-4">
                <p className="text-sm">Investment: {formatCurrency(1000000)} for 10 years (30% tax bracket)</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Tax-Free Bond @ 5.5%</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Annual Interest:</span>
                        <span>{formatCurrency(55000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax:</span>
                        <span className="text-green-600 font-bold">NIL</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Post-tax Return:</span>
                        <span className="text-green-600">5.50%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>10-year income:</span>
                        <span className="font-bold">{formatCurrency(550000)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="font-medium mb-3">Taxable Bond @ 7.5%</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Annual Interest:</span>
                        <span>{formatCurrency(75000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax (30%):</span>
                        <span className="text-red-600">-{formatCurrency(22500)}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Post-tax Return:</span>
                        <span className="text-blue-600">5.25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>10-year income:</span>
                        <span className="font-bold">{formatCurrency(525000)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                  <p className="font-bold">
                    Tax-free bonds better for 30% bracket: Extra {formatCurrency(25000)} over 10 years!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Who Should Buy Tax-Free Bonds?</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-medium text-green-600">✓ Good For:</p>
                  <ul className="space-y-1 ml-6">
                    <li>• Investors in 30% tax bracket</li>
                    <li>• Long-term investors (10+ years)</li>
                    <li>• Conservative investors wanting govt backing</li>
                    <li>• HNIs with large taxable income</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-red-600">✗ Not Suitable For:</p>
                  <ul className="space-y-1 ml-6">
                    <li>• Investors in 0-10% tax bracket</li>
                    <li>• Those needing liquidity in 5 years</li>
                    <li>• Investors seeking higher returns</li>
                    <li>• Young investors (better equity options)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* TDS on Bonds */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-yellow-600" />
              <CardTitle className="text-2xl">TDS (Tax Deducted at Source)</CardTitle>
            </div>
            <CardDescription>When and how TDS is deducted</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">TDS Rules for Bonds</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-2">Government Bonds (G-Secs, T-Bills, SDLs)</p>
                  <p className="text-sm text-green-600 font-bold">✓ No TDS deducted on interest</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-2">Corporate Bonds & NCDs</p>
                  <div className="text-sm space-y-2">
                    <p><strong>TDS Rate:</strong> 10% (if interest exceeds ₹5,000 per year)</p>
                    <p><strong>Exemption:</strong> Submit Form 15G (income below taxable limit) or Form 15H (senior citizens)</p>
                    <p><strong>Lower TDS:</strong> Can submit Form 13 to request lower/nil TDS if total income below taxable limit</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-2">Tax-Free Bonds</p>
                  <p className="text-sm text-green-600 font-bold">✓ No TDS deducted (interest is tax-exempt)</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">TDS Example</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Scenario:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Corporate bond: {formatCurrency(500000)} at 8% coupon</li>
                    <li>• Annual interest: {formatCurrency(40000)}</li>
                    <li>• TDS applicable: Yes (exceeds ₹5,000)</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                  <p className="font-medium mb-2">What Happens:</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Gross Interest:</span>
                      <span>{formatCurrency(40000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TDS @ 10%:</span>
                      <span className="text-red-600">-{formatCurrency(4000)}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Net Credit to Account:</span>
                      <span>{formatCurrency(36000)}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Important:</p>
                  <ul className="text-sm space-y-1">
                    <li>• TDS of {formatCurrency(4000)} can be claimed as credit when filing ITR</li>
                    <li>• If actual tax liability is less, you'll get refund</li>
                    <li>• Download Form 26AS or AIS to verify TDS credit</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ITR Filing */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Receipt className="h-6 w-6 text-yellow-600" />
              <CardTitle className="text-2xl">Tax Filing & ITR Reporting</CardTitle>
            </div>
            <CardDescription>How to report bond income in your tax return</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Reporting in ITR-2 Form</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-3">Interest Income from Bonds</p>
                  <div className="text-sm space-y-2">
                    <p><strong>Section:</strong> Income from Other Sources</p>
                    <p><strong>Schedule:</strong> Schedule OS (Other Sources)</p>
                    <p><strong>Details to Provide:</strong></p>
                    <ul className="ml-6 space-y-1">
                      <li>• Name of issuer</li>
                      <li>• Type of bond</li>
                      <li>• Total interest received</li>
                      <li>• TDS deducted (if any)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-3">Capital Gains from Bond Sale</p>
                  <div className="text-sm space-y-2">
                    <p><strong>Section:</strong> Capital Gains</p>
                    <p><strong>Schedule:</strong> Schedule CG (Capital Gains)</p>
                    <p><strong>For LTCG:</strong></p>
                    <ul className="ml-6 space-y-1">
                      <li>• Purchase date and price</li>
                      <li>• Sale date and price</li>
                      <li>• If using indexation: Cost Inflation Index</li>
                      <li>• Indexed cost of acquisition</li>
                      <li>• Long-term capital gains</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="font-medium mb-3">Tax-Free Bond Interest</p>
                  <div className="text-sm space-y-2">
                    <p><strong>Section:</strong> Exempt Income</p>
                    <p><strong>Schedule:</strong> Schedule EI (Exempt Income)</p>
                    <p><strong>Note:</strong> Must be reported even though tax-exempt for proper record-keeping</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">Documents Required for ITR</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-yellow-600 mt-1">1</Badge>
                    <div className="text-sm">
                      <p className="font-medium">Interest Certificates</p>
                      <p className="text-muted-foreground">From bond issuer/depository</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-yellow-600 mt-1">2</Badge>
                    <div className="text-sm">
                      <p className="font-medium">Form 26AS / AIS</p>
                      <p className="text-muted-foreground">Shows TDS deducted</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-yellow-600 mt-1">3</Badge>
                    <div className="text-sm">
                      <p className="font-medium">Bank Statements</p>
                      <p className="text-muted-foreground">Interest credit entries</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-yellow-600 mt-1">4</Badge>
                    <div className="text-sm">
                      <p className="font-medium">Contract Notes</p>
                      <p className="text-muted-foreground">For bond purchases/sales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-yellow-600 mt-1">5</Badge>
                    <div className="text-sm">
                      <p className="font-medium">Demat Holding Statement</p>
                      <p className="text-muted-foreground">Bond holdings details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-yellow-600 mt-1">6</Badge>
                    <div className="text-sm">
                      <p className="font-medium">CII Table</p>
                      <p className="text-muted-foreground">For indexation calculation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Pro Tips for Tax Filing
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Maintain detailed records of all bond transactions</li>
                <li>• Save interest certificates and TDS certificates</li>
                <li>• For LTCG, calculate both methods (with/without indexation) and choose lower tax</li>
                <li>• Report tax-free bond interest in exempt income section</li>
                <li>• Claim TDS credit properly using Form 26AS</li>
                <li>• Consider hiring CA if portfolio is complex ({formatCurrency(500000)}+)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-yellow-500 shadow-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-yellow-600 mt-1">1</Badge>
                  <p className="text-sm">Interest income taxed at slab rate (10%, 20%, or 30%)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-yellow-600 mt-1">2</Badge>
                  <p className="text-sm">LTCG taxed at 10% or 20% with indexation (whichever is lower)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-yellow-600 mt-1">3</Badge>
                  <p className="text-sm">Tax-free bonds ideal for 30% tax bracket investors</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-yellow-600 mt-1">4</Badge>
                  <p className="text-sm">TDS @ 10% on corporate bonds (can claim credit)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-600 mt-1">5</Badge>
                  <p className="text-sm">Hold bonds 12+ months to get LTCG benefit (10% vs 30%)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-600 mt-1">6</Badge>
                  <p className="text-sm">No TDS on government bonds - simpler tax treatment</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-600 mt-1">7</Badge>
                  <p className="text-sm">Report all bond income in ITR even if tax-exempt</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-amber-600 mt-1">8</Badge>
                  <p className="text-sm">Keep detailed records: certificates, 26AS, contract notes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default BondTaxation;
