"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  TrendingDown, 
  FileText, 
  Shield, 
  Percent,
  Home,
  Plane,
  Heart,
  GraduationCap,
  AlertCircle,
  CheckCircle,
  DollarSign,
  ArrowRight,
  Lightbulb,
  Scale
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const IncomeOptimization = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Calculator className="w-12 h-12 text-orange-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Income Optimization & Tax Savings</h2>
          <p className="text-lg text-orange-100 max-w-2xl">
            It's not just what you earn, but what you keep. Maximize your take-home pay through smart salary structuring and tax planning.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* CTC vs In-Hand Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-orange-600" /> Understanding CTC vs In-Hand Salary
        </h3>
        
        <Card className="border-orange-200 shadow-lg">
          <CardHeader>
            <CardTitle>The Salary Math Everyone Should Know</CardTitle>
            <CardDescription>CTC ≠ What hits your bank account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-slate-50 p-6 rounded-lg space-y-4">
              <div className="text-center space-y-2">
                <p className="text-2xl font-bold text-slate-900">{currency.symbol}12,00,000 CTC</p>
                <p className="text-sm text-slate-600">(Annual Cost to Company)</p>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-slate-400" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Basic Salary (40-50%)</span>
                  <span className="font-semibold">{currency.symbol}5,00,000</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">HRA (House Rent Allowance)</span>
                  <span className="font-semibold">{currency.symbol}2,50,000</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Special Allowances</span>
                  <span className="font-semibold">{currency.symbol}2,00,000</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Employer PF (12%)</span>
                  <span className="font-semibold text-green-600">+ {currency.symbol}60,000</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Other Benefits (Insurance, Bonus)</span>
                  <span className="font-semibold">{currency.symbol}1,90,000</span>
                </div>
                
                <div className="border-t-2 border-slate-300 pt-2 mt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Employee PF Deduction (-12%)</span>
                    <span className="font-semibold text-red-600">- {currency.symbol}60,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Professional Tax</span>
                    <span className="font-semibold text-red-600">- {currency.symbol}2,400</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Income Tax (TDS)</span>
                    <span className="font-semibold text-red-600">- {currency.symbol}1,20,000</span>
                  </div>
                </div>

                <div className="border-t-2 border-green-600 pt-3 mt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Actual In-Hand (Monthly)</span>
                    <span className="text-2xl font-bold text-green-600">~{currency.symbol}68,000</span>
                  </div>
                  <p className="text-xs text-slate-500 text-right mt-1">({currency.symbol}8.16L annual)</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-slate-700"><strong>Key Insight:</strong> {currency.symbol}12L CTC ≈ {currency.symbol}68K/month in-hand (68%). The 32% difference goes to taxes, PF, and insurance. This is why negotiating CTC and optimizing salary structure matters!</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Salary Structure Optimization Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" /> Salary Structure Optimization
        </h3>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="hra" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">HRA (House Rent Allowance) - Maximize It</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">What is HRA?</p>
                    <p className="text-sm text-slate-600">Tax-exempt allowance provided by employer for housing expenses. If you pay rent, HRA reduces your taxable income significantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">HRA Exemption Calculation</p>
                    <p className="text-sm text-slate-600">Minimum of:</p>
                    <ul className="text-xs text-slate-600 ml-4 mt-1 space-y-1">
                      <li>• Actual HRA received</li>
                      <li>• Actual rent paid - 10% of basic salary</li>
                      <li>• 50% of basic (metro) or 40% (non-metro)</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-blue-900">Example:</p>
                  <p className="text-sm text-slate-700 mt-1">Basic: {currency.symbol}50K/month | HRA: {currency.symbol}25K | Rent paid: {currency.symbol}15K</p>
                  <p className="text-sm text-slate-700 mt-1">Exemption = Min({currency.symbol}25K, {currency.symbol}10K, {currency.symbol}25K) = {currency.symbol}10K/month tax-free</p>
                  <p className="text-sm text-slate-700 font-semibold mt-2">Annual tax savings: {currency.symbol}1.2L × 30% = {currency.symbol}36,000!</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Pro Tips</p>
                    <p className="text-sm text-slate-600">1. Always get rent receipts from landlord (PAN if rent &gt; {currency.symbol}1L/year)</p>
                    <p className="text-sm text-slate-600 mt-1">2. If living with parents, pay them rent (create rental agreement)</p>
                    <p className="text-sm text-slate-600 mt-1">3. Not available for those living in own house</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="lta" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Plane className="w-5 h-5 text-teal-600" />
                <span className="font-semibold">LTA (Leave Travel Allowance)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">What is LTA?</p>
                    <p className="text-sm text-slate-600">Allowance for domestic travel with family. Tax-exempt if you actually travel and submit proof (tickets, boarding passes).</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How Much Can You Claim?</p>
                    <p className="text-sm text-slate-600">Minimum of actual LTA amount or actual travel cost. Can be claimed twice in a block of 4 years. Current block: 2022-2025.</p>
                  </div>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-teal-900">Example:</p>
                  <p className="text-sm text-slate-700 mt-1">LTA component: {currency.symbol}20K/year | You travel to Goa, spend {currency.symbol}15K on tickets</p>
                  <p className="text-sm text-slate-700 font-semibold mt-2">{currency.symbol}15K is tax-free! Tax saved: {currency.symbol}4,500 (at 30% slab)</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Important Notes</p>
                    <p className="text-sm text-slate-600">• Only domestic travel (within India)</p>
                    <p className="text-sm text-slate-600 mt-1">• Only travel fare exempt (not hotel, food)</p>
                    <p className="text-sm text-slate-600 mt-1">• Submit tickets & boarding passes to HR</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="nps" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">NPS (National Pension System) - Extra 80C</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">What is NPS?</p>
                    <p className="text-sm text-slate-600">Government retirement savings scheme. Contributions get tax deductions under 80CCD(1B) - additional {currency.symbol}50K over 80C limit!</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Tax Benefit Math</p>
                    <p className="text-sm text-slate-600">80C: {currency.symbol}1.5L deduction | 80CCD(1B): Additional {currency.symbol}50K deduction</p>
                    <p className="text-sm text-slate-600 mt-1">Total: {currency.symbol}2L investment → Save {currency.symbol}60K tax (at 30% slab)</p>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-purple-900">Employer NPS vs Self-Contribution:</p>
                  <p className="text-sm text-slate-700 mt-1"><strong>Employer contribution:</strong> Up to 10% of salary (basic + DA) - additional deduction under 80CCD(2)</p>
                  <p className="text-sm text-slate-700 mt-1"><strong>Self-contribution:</strong> Eligible for 80CCD(1B) - {currency.symbol}50K extra deduction</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Important Considerations</p>
                    <p className="text-sm text-slate-600">• Locked till age 60 (limited partial withdrawal)</p>
                    <p className="text-sm text-slate-600 mt-1">• 60% of corpus taxable at withdrawal</p>
                    <p className="text-sm text-slate-600 mt-1">• Good for retirement planning, not emergency funds</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="standard" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Percent className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Standard Deduction - Automatic {currency.symbol}50K Benefit</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">What is Standard Deduction?</p>
                    <p className="text-sm text-slate-600">Flat {currency.symbol}50,000 deduction available to ALL salaried individuals (both old & new tax regime). No documentation needed!</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Tax Savings</p>
                    <p className="text-sm text-slate-600">Reduces taxable income by {currency.symbol}50K → Save {currency.symbol}15K tax (at 30% slab)</p>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm text-green-900">Example:</p>
                  <p className="text-sm text-slate-700 mt-1">Gross salary: {currency.symbol}10L → After standard deduction: {currency.symbol}9.5L → Pay tax on {currency.symbol}9.5L only</p>
                </div>
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Pro Tip</p>
                    <p className="text-sm text-slate-600">Your employer automatically applies this while calculating TDS. You don't need to do anything - it's built-in!</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Tax Saving Instruments Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-green-600" /> Tax-Saving Instruments (Section 80C)
        </h3>
        
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle>How to Save {currency.symbol}1.5 Lakh Under 80C</CardTitle>
            <CardDescription>Max deduction: {currency.symbol}1,50,000 → Save up to {currency.symbol}46,800 tax (at 30% + cess)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-3 font-semibold">Instrument</th>
                    <th className="text-left p-3 font-semibold">Returns</th>
                    <th className="text-left p-3 font-semibold">Lock-in</th>
                    <th className="text-left p-3 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3">
                      <p className="font-semibold">EPF (Employee Provident Fund)</p>
                      <p className="text-xs text-slate-600">Mandatory 12% contribution</p>
                    </td>
                    <td className="p-3">8.15%</td>
                    <td className="p-3">Till retirement</td>
                    <td className="p-3 text-xs">Automatic, safe, good returns</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <p className="font-semibold">PPF (Public Provident Fund)</p>
                      <p className="text-xs text-slate-600">Invest {currency.symbol}500-1.5L/year</p>
                    </td>
                    <td className="p-3">7.1%</td>
                    <td className="p-3">15 years</td>
                    <td className="p-3 text-xs">Safe, EEE status, long-term</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <p className="font-semibold">ELSS (Equity Linked Savings Scheme)</p>
                      <p className="text-xs text-slate-600">Mutual fund equity investment</p>
                    </td>
                    <td className="p-3">12-15%*</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3 text-xs">Best returns, shortest lock-in</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <p className="font-semibold">Life Insurance Premium</p>
                      <p className="text-xs text-slate-600">Term insurance premiums</p>
                    </td>
                    <td className="p-3">N/A</td>
                    <td className="p-3">Till maturity</td>
                    <td className="p-3 text-xs">Protection + tax benefit</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <p className="font-semibold">Home Loan Principal</p>
                      <p className="text-xs text-slate-600">Principal portion of EMI</p>
                    </td>
                    <td className="p-3">N/A</td>
                    <td className="p-3">Loan tenure</td>
                    <td className="p-3 text-xs">Home buyers</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <p className="font-semibold">Tax Saver FD</p>
                      <p className="text-xs text-slate-600">5-year bank fixed deposit</p>
                    </td>
                    <td className="p-3">6-7%</td>
                    <td className="p-3">5 years</td>
                    <td className="p-3 text-xs">Conservative, safe</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 bg-green-50 p-4 rounded-lg space-y-2">
              <p className="font-semibold text-sm text-green-900">Recommended 80C Strategy:</p>
              <p className="text-sm text-slate-700">1. EPF auto-deduction: ~{currency.symbol}60K/year (if salary {currency.symbol}50K/month)</p>
              <p className="text-sm text-slate-700">2. ELSS: {currency.symbol}50K (best returns, shortest lock-in)</p>
              <p className="text-sm text-slate-700">3. Term insurance: {currency.symbol}10-15K</p>
              <p className="text-sm text-slate-700">4. PPF: Remaining to reach {currency.symbol}1.5L</p>
              <p className="text-sm font-semibold text-green-900 mt-2">Total tax saved: {currency.symbol}46,800 (at 30% slab) + growing your wealth!</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Deductions Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-600" /> Other Key Deductions
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600" />
                Section 80D: Health Insurance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="space-y-2">
                <p className="text-sm"><strong>Self, spouse, children:</strong> Up to {currency.symbol}25K</p>
                <p className="text-sm"><strong>Parents (below 60):</strong> Additional {currency.symbol}25K</p>
                <p className="text-sm"><strong>Parents (above 60):</strong> Additional {currency.symbol}50K</p>
                <p className="text-sm"><strong>Preventive health checkup:</strong> {currency.symbol}5K (within above limits)</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg mt-3">
                <p className="text-sm font-semibold">Max Deduction: {currency.symbol}1,00,000</p>
                <p className="text-xs text-slate-700 mt-1">(Self {currency.symbol}25K + Senior parents {currency.symbol}50K + Your parents' checkup {currency.symbol}5K + Senior status {currency.symbol}20K extra if you're 60+)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Section 80E: Education Loan Interest
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="space-y-2">
                <p className="text-sm"><strong>Deduction:</strong> Full interest paid on education loan</p>
                <p className="text-sm"><strong>Period:</strong> 8 years from start of repayment</p>
                <p className="text-sm"><strong>For whom:</strong> Self, spouse, children, or student you're legal guardian of</p>
                <p className="text-sm"><strong>Course:</strong> Any higher education (after 12th) in India or abroad</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg mt-3">
                <p className="text-sm font-semibold">Example: Pay {currency.symbol}80K interest → Full {currency.symbol}80K deduction</p>
                <p className="text-xs text-slate-700 mt-1">Tax saved: {currency.symbol}24K (at 30% slab). No upper limit!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <Home className="w-5 h-5 text-green-600" />
                Section 24: Home Loan Interest
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="space-y-2">
                <p className="text-sm"><strong>Self-occupied property:</strong> Up to {currency.symbol}2,00,000/year</p>
                <p className="text-sm"><strong>Rented property:</strong> No limit (full interest deductible)</p>
                <p className="text-sm"><strong>First-time buyers:</strong> Additional {currency.symbol}1.5L under 80EEA (conditions apply)</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg mt-3">
                <p className="text-sm font-semibold">Example: Home loan EMI {currency.symbol}40K/month</p>
                <p className="text-xs text-slate-700 mt-1">Interest portion ~{currency.symbol}2.4L/year → Claim {currency.symbol}2L deduction under 24 + principal under 80C</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                Section 80CCD(1B): NPS Additional
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="space-y-2">
                <p className="text-sm"><strong>Deduction:</strong> Additional {currency.symbol}50,000 over 80C</p>
                <p className="text-sm"><strong>Investment:</strong> National Pension System (NPS)</p>
                <p className="text-sm"><strong>Benefit:</strong> Retirement corpus + tax saving</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg mt-3">
                <p className="text-sm font-semibold">Total possible: 80C ({currency.symbol}1.5L) + 80CCD(1B) ({currency.symbol}50K) = {currency.symbol}2L</p>
                <p className="text-xs text-slate-700 mt-1">Tax saved: {currency.symbol}62,400 (at 30% + cess)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Old vs New Tax Regime Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Scale className="w-6 h-6 text-indigo-600" /> Old vs New Tax Regime: Which to Choose?
        </h3>
        
        <Card className="border-indigo-200 shadow-lg">
          <CardHeader>
            <CardTitle>Comparing Tax Regimes (FY 2024-25)</CardTitle>
            <CardDescription>New regime has lower rates but no deductions. Old regime has higher rates but allows deductions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-slate-900 flex items-center gap-2">
                  <Badge>Old Regime</Badge>
                </h4>
                <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm"><strong>Rates:</strong></p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4">
                    <li>• Up to {currency.symbol}2.5L: Nil</li>
                    <li>• {currency.symbol}2.5-5L: 5%</li>
                    <li>• {currency.symbol}5-10L: 20%</li>
                    <li>• Above {currency.symbol}10L: 30%</li>
                  </ul>
                  <p className="text-sm mt-3"><strong>Benefits:</strong></p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4">
                    <li>• 80C: {currency.symbol}1.5L</li>
                    <li>• 80D: {currency.symbol}25-1L</li>
                    <li>• 80CCD(1B): {currency.symbol}50K</li>
                    <li>• HRA, LTA, etc.</li>
                    <li>• Standard deduction: {currency.symbol}50K</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-900">Best For:</p>
                  <p className="text-xs text-slate-700 mt-1">Those with investments in 80C, health insurance, NPS, home loan, or high HRA. Generally better if deductions &gt; {currency.symbol}2.5L</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg text-slate-900 flex items-center gap-2">
                  <Badge variant="secondary">New Regime</Badge>
                </h4>
                <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm"><strong>Rates:</strong></p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4">
                    <li>• Up to {currency.symbol}3L: Nil</li>
                    <li>• {currency.symbol}3-7L: 5%</li>
                    <li>• {currency.symbol}7-10L: 10%</li>
                    <li>• {currency.symbol}10-12L: 15%</li>
                    <li>• {currency.symbol}12-15L: 20%</li>
                    <li>• Above {currency.symbol}15L: 30%</li>
                  </ul>
                  <p className="text-sm mt-3"><strong>Benefits:</strong></p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4">
                    <li>• Standard deduction: {currency.symbol}50K</li>
                    <li>• NO other deductions allowed</li>
                    <li>• Lower tax rates</li>
                    <li>• Simpler filing</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900">Best For:</p>
                  <p className="text-xs text-slate-700 mt-1">Those with minimal investments, no home loan, low HRA, or income {currency.symbol}7-15L range. Generally better if deductions &lt; {currency.symbol}1.5L</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <p className="font-semibold text-sm text-indigo-900 mb-2">Quick Decision Tree:</p>
              <p className="text-sm text-slate-700">• Have home loan interest &gt; {currency.symbol}2L? → Old regime</p>
              <p className="text-sm text-slate-700 mt-1">• Claim HRA + 80C + 80D totaling &gt; {currency.symbol}2.5L? → Old regime</p>
              <p className="text-sm text-slate-700 mt-1">• Minimal deductions & income {currency.symbol}7-12L? → New regime</p>
              <p className="text-sm text-slate-700 mt-1">• Calculate both ways annually - you can switch every year!</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Working with CA Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-amber-600" /> Working with a Chartered Accountant (CA)
        </h3>
        
        <Card className="border-amber-200 shadow-lg">
          <CardHeader>
            <CardTitle>When to Hire a CA for Tax Planning</CardTitle>
            <CardDescription>Professional help can save you more than it costs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">You SHOULD hire a CA if:</p>
                  <ul className="text-sm text-slate-600 ml-4 mt-1 space-y-1">
                    <li>• Annual income &gt; {currency.symbol}15L (complexity increases)</li>
                    <li>• Multiple income sources (salary + rental + business + capital gains)</li>
                    <li>• Own a business or freelance (GST, TDS, advance tax)</li>
                    <li>• Have capital gains from stocks/real estate</li>
                    <li>• Claiming losses to carry forward</li>
                    <li>• International income or assets</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">You can DIY if:</p>
                  <ul className="text-sm text-slate-600 ml-4 mt-1 space-y-1">
                    <li>• Single salaried income source</li>
                    <li>• Employer handles TDS correctly</li>
                    <li>• Simple 80C investments (EPF, ELSS, PPF)</li>
                    <li>• Total income &lt; {currency.symbol}10L</li>
                    <li>• No capital gains or business income</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-sm text-amber-900">Cost vs Benefit:</p>
              <p className="text-sm text-slate-700 mt-1">CA fees: {currency.symbol}2-5K for simple ITR | {currency.symbol}5-15K for complex cases</p>
              <p className="text-sm text-slate-700 mt-1">Value: Maximize deductions, avoid penalties, optimize tax structure, ensure compliance</p>
              <p className="text-sm font-semibold text-slate-900 mt-2">If they save you {currency.symbol}20-50K in tax, the {currency.symbol}5K fee is worth it!</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default IncomeOptimization;
