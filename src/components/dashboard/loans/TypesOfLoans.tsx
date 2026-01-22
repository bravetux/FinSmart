"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  GraduationCap, 
  Car, 
  CreditCard, 
  User, 
  Gem,
  Building2,
  Shield,
  Percent,
  TrendingUp,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

const TypesOfLoans = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Building2 className="w-4 h-4" />
            <span>Understanding Loan Products</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Types of Loans: A Beginner's Guide
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl">
            Not all loans are created equal. Understanding the different types helps you choose the right financing option for your needs and avoid costly mistakes.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Secured vs Unsecured Loans */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Two Main Categories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-600" />
                <CardTitle className="text-xl text-emerald-900">Secured Loans</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Backed by collateral (an asset like property, vehicle, or gold). If you can't repay, the lender can seize the asset.
              </p>
              <div className="p-4 bg-white rounded-lg border border-emerald-100">
                <p className="text-xs font-bold text-emerald-700 mb-2">✓ Advantages</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Lower interest rates (7-10% typically)</li>
                  <li>Higher loan amounts available</li>
                  <li>Longer repayment tenure options</li>
                  <li>Easier approval for people with limited credit history</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-emerald-100">
                <p className="text-xs font-bold text-red-700 mb-2">✗ Disadvantages</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Risk of losing your asset if you default</li>
                  <li>Lengthy approval process with documentation</li>
                  <li>Processing and valuation fees</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-xl text-orange-900">Unsecured Loans</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                No collateral required. Lenders rely solely on your creditworthiness, income, and repayment history.
              </p>
              <div className="p-4 bg-white rounded-lg border border-orange-100">
                <p className="text-xs font-bold text-emerald-700 mb-2">✓ Advantages</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Quick approval and disbursal (1-7 days)</li>
                  <li>No risk to your assets</li>
                  <li>Minimal documentation required</li>
                  <li>Flexible end-use (for personal loans)</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-orange-100">
                <p className="text-xs font-bold text-red-700 mb-2">✗ Disadvantages</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Very high interest rates (11-24% or more)</li>
                  <li>Lower loan amounts (₹10-15 Lakh max typically)</li>
                  <li>Shorter repayment tenure (1-5 years)</li>
                  <li>Requires excellent credit score for best rates</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Individual Loan Types */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Common Loan Types Explained</h3>

        {/* Home Loan */}
        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Home className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl text-blue-900">1. Home Loan (Housing Loan)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 mb-2">Purpose</p>
                  <p className="text-xs text-slate-600">Purchase, construct, renovate, or extend residential property.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 mb-2">Interest Rate</p>
                  <p className="text-xs text-slate-600">7.5% - 9.5% per annum</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 mb-2">Loan Amount</p>
                  <p className="text-xs text-slate-600">Up to 80-90% of property value (LTV ratio)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 mb-2">Tenure</p>
                  <p className="text-xs text-slate-600">Up to 30 years</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-700 mb-2">✓ When to Take</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Buying your first home for self-residence</li>
                    <li>Real estate investment for rental income</li>
                    <li>Interest rates are at historic lows</li>
                    <li>EMI ≤ 30-40% of take-home salary</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-700 mb-2">✗ When to Avoid</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Job/income instability</li>
                    <li>Property prices are artificially inflated</li>
                    <li>Can't afford 20% down payment</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-100 rounded-lg border border-blue-200">
                  <p className="text-xs font-bold text-blue-700 mb-2">💰 Tax Benefits</p>
                  <p className="text-xs text-slate-600">₹2 Lakh on interest (Sec 24b) + ₹1.5 Lakh on principal (Sec 80C)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Loan */}
        <Card className="border-purple-200 bg-purple-50/50 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <User className="w-6 h-6 text-purple-600" />
              <CardTitle className="text-xl text-purple-900">2. Personal Loan</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <p className="text-xs font-bold text-purple-700 mb-2">Purpose</p>
                  <p className="text-xs text-slate-600">Any personal need - medical emergency, wedding, debt consolidation, travel, home renovation.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <p className="text-xs font-bold text-purple-700 mb-2">Interest Rate</p>
                  <p className="text-xs text-slate-600">10.5% - 24% per annum (based on credit score)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <p className="text-xs font-bold text-purple-700 mb-2">Loan Amount</p>
                  <p className="text-xs text-slate-600">₹50,000 - ₹40 Lakh</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <p className="text-xs font-bold text-purple-700 mb-2">Tenure</p>
                  <p className="text-xs text-slate-600">1 - 5 years</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-700 mb-2">✓ When to Take</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Medical emergency with no health insurance</li>
                    <li>Consolidating high-interest credit card debt</li>
                    <li>Immediate cash need with clear repayment plan</li>
                    <li>Business opportunity with high ROI</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-700 mb-2">✗ When to Avoid</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>For luxury purchases (vacation, gadgets)</li>
                    <li>To fund investments (never borrow to invest)</li>
                    <li>Already have existing EMIs &gt; 40% of income</li>
                    <li>No emergency fund in place</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs font-bold text-amber-700 mb-1">⚠️ Beginner's Warning</p>
              <p className="text-xs text-slate-600">Personal loans are the most expensive unsecured loans. Use only as a last resort and pay off as quickly as possible.</p>
            </div>
          </CardContent>
        </Card>

        {/* Car Loan */}
        <Card className="border-orange-200 bg-orange-50/50 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Car className="w-6 h-6 text-orange-600" />
              <CardTitle className="text-xl text-orange-900">3. Car/Vehicle Loan</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-orange-100">
                  <p className="text-xs font-bold text-orange-700 mb-2">Purpose</p>
                  <p className="text-xs text-slate-600">Purchase new or used cars, two-wheelers, or commercial vehicles.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-orange-100">
                  <p className="text-xs font-bold text-orange-700 mb-2">Interest Rate</p>
                  <p className="text-xs text-slate-600">7.5% - 13% per annum (new car), 12-16% (used car)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-orange-100">
                  <p className="text-xs font-bold text-orange-700 mb-2">Loan Amount</p>
                  <p className="text-xs text-slate-600">Up to 80-90% of on-road price</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-orange-100">
                  <p className="text-xs font-bold text-orange-700 mb-2">Tenure</p>
                  <p className="text-xs text-slate-600">1 - 7 years</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-700 mb-2">✓ When to Take</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Need a vehicle for work/business income</li>
                    <li>Have 20-30% down payment saved</li>
                    <li>EMI + running costs ≤ 15% of income</li>
                    <li>Interest rate &lt; 10% (good deal)</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-700 mb-2">✗ When to Avoid</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Buying for status/luxury (not necessity)</li>
                    <li>Can't afford at least 20% down payment</li>
                    <li>Public transport is adequate for your needs</li>
                    <li>Already have high debt obligations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs font-bold text-amber-700 mb-1">💡 Smart Tip</p>
              <p className="text-xs text-slate-600">A car is a depreciating asset. It loses 15-20% value every year. Consider if you really need to borrow for it.</p>
            </div>
          </CardContent>
        </Card>

        {/* Education Loan */}
        <Card className="border-indigo-200 bg-indigo-50/50 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
              <CardTitle className="text-xl text-indigo-900">4. Education Loan</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-indigo-100">
                  <p className="text-xs font-bold text-indigo-700 mb-2">Purpose</p>
                  <p className="text-xs text-slate-600">Higher education expenses - tuition, hostel, books, equipment, travel for study abroad.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-indigo-100">
                  <p className="text-xs font-bold text-indigo-700 mb-2">Interest Rate</p>
                  <p className="text-xs text-slate-600">8% - 12% per annum (India), 9-14% (abroad)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-indigo-100">
                  <p className="text-xs font-bold text-indigo-700 mb-2">Loan Amount</p>
                  <p className="text-xs text-slate-600">Up to ₹10 Lakh (India), ₹20-30 Lakh (abroad)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-indigo-100">
                  <p className="text-xs font-bold text-indigo-700 mb-2">Tenure</p>
                  <p className="text-xs text-slate-600">5 - 15 years (repayment starts after course + 6 months)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-700 mb-2">✓ When to Take</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Pursuing degree with high earning potential (MBA, Engineering, Medicine)</li>
                    <li>No scholarships or family support available</li>
                    <li>Course ROI justifies the debt</li>
                    <li>Strong academic record (better terms)</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-700 mb-2">✗ When to Avoid</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Course has poor job placement record</li>
                    <li>Better free/cheaper alternatives exist</li>
                    <li>Pursuing education just for "passion" with no earning plan</li>
                  </ul>
                </div>
                <div className="p-4 bg-indigo-100 rounded-lg border border-indigo-200">
                  <p className="text-xs font-bold text-indigo-700 mb-2">💰 Tax Benefits</p>
                  <p className="text-xs text-slate-600">Interest paid is 100% tax-deductible under Section 80E (no upper limit)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gold Loan */}
        <Card className="border-yellow-200 bg-yellow-50/50 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Gem className="w-6 h-6 text-yellow-600" />
              <CardTitle className="text-xl text-yellow-900">5. Gold Loan</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-yellow-100">
                  <p className="text-xs font-bold text-yellow-700 mb-2">Purpose</p>
                  <p className="text-xs text-slate-600">Short-term emergency cash needs against gold jewelry/coins as collateral.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-yellow-100">
                  <p className="text-xs font-bold text-yellow-700 mb-2">Interest Rate</p>
                  <p className="text-xs text-slate-600">7% - 12% per annum</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-yellow-100">
                  <p className="text-xs font-bold text-yellow-700 mb-2">Loan Amount</p>
                  <p className="text-xs text-slate-600">Up to 75% of gold value (LTV ratio)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-yellow-100">
                  <p className="text-xs font-bold text-yellow-700 mb-2">Tenure</p>
                  <p className="text-xs text-slate-600">3 months - 3 years</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-700 mb-2">✓ When to Take</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Emergency medical expenses</li>
                    <li>Business working capital crunch</li>
                    <li>Cheaper than personal loan/credit card</li>
                    <li>Fast approval (same day disbursal)</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-700 mb-2">✗ When to Avoid</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>For non-urgent consumption needs</li>
                    <li>Can't repay within 1-2 years</li>
                    <li>Gold has sentimental value you can't risk</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs font-bold text-amber-700 mb-1">⚠️ Risk Warning</p>
              <p className="text-xs text-slate-600">If you don't repay, the lender can auction your gold. Only take if you're 100% sure of repayment ability.</p>
            </div>
          </CardContent>
        </Card>

        {/* Credit Card */}
        <Card className="border-red-200 bg-red-50/50 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-red-600" />
              <CardTitle className="text-xl text-red-900">6. Credit Cards (Revolving Credit)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-2">Purpose</p>
                  <p className="text-xs text-slate-600">Short-term credit for everyday purchases with interest-free period (20-50 days).</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-2">Interest Rate</p>
                  <p className="text-xs text-slate-600">36% - 48% per annum (if you carry balance)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-2">Credit Limit</p>
                  <p className="text-xs text-slate-600">₹20,000 - ₹10 Lakh+ (based on income)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-2">Tenure</p>
                  <p className="text-xs text-slate-600">Revolving (no fixed tenure)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-700 mb-2">✓ When to Use</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>For convenience and rewards (pay full balance)</li>
                    <li>Building credit score (responsible use)</li>
                    <li>Emergency expenses (pay off within 45 days)</li>
                    <li>Travel insurance and fraud protection</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-700 mb-2">✗ When to Avoid</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Can't pay full balance every month</li>
                    <li>Prone to impulsive spending</li>
                    <li>Using it for cash withdrawals (3-4% fees)</li>
                    <li>Already have debt problems</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 bg-red-100 rounded-lg border border-red-300">
              <p className="text-xs font-bold text-red-800 mb-1">🚨 DANGER ZONE</p>
              <p className="text-xs text-red-700">Credit cards have the HIGHEST interest rates of all loans. NEVER carry a balance. If you can't pay in full, you're using it wrong.</p>
            </div>
          </CardContent>
        </Card>

        {/* Business Loan */}
        <Card className="border-slate-200 bg-slate-50/50 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-slate-600" />
              <CardTitle className="text-xl text-slate-900">7. Business Loan</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-700 mb-2">Purpose</p>
                  <p className="text-xs text-slate-600">Working capital, equipment purchase, business expansion, inventory financing.</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-700 mb-2">Interest Rate</p>
                  <p className="text-xs text-slate-600">9% - 18% per annum (varies by business risk)</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-700 mb-2">Loan Amount</p>
                  <p className="text-xs text-slate-600">₹50,000 - ₹5 Crore+</p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-700 mb-2">Tenure</p>
                  <p className="text-xs text-slate-600">1 - 10 years</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-700 mb-2">✓ When to Take</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Business has proven profit track record (2-3 years)</li>
                    <li>Clear ROI projection &gt; loan cost</li>
                    <li>Expansion opportunity with market demand</li>
                    <li>Seasonal working capital needs</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-700 mb-2">✗ When to Avoid</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Startup with no revenue (use equity funding)</li>
                    <li>Business is already loss-making</li>
                    <li>Can't provide collateral or guarantor</li>
                    <li>Using it to cover personal expenses</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs font-bold text-blue-700 mb-1">💼 For Beginners</p>
              <p className="text-xs text-slate-600">Keep business and personal finances separate. Never mix business loans with personal spending.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Comparison Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Quick Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="text-left bg-slate-100">
                <th className="p-4 font-medium">Loan Type</th>
                <th className="p-4 font-medium">Interest Rate</th>
                <th className="p-4 font-medium">Typical Amount</th>
                <th className="p-4 font-medium">Tenure</th>
                <th className="p-4 font-medium">Collateral</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-semibold">Home Loan</td>
                <td className="p-4 text-emerald-700">7.5-9.5%</td>
                <td className="p-4">₹10L - ₹5Cr</td>
                <td className="p-4">30 years</td>
                <td className="p-4">✓ Property</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-4 font-semibold">Personal Loan</td>
                <td className="p-4 text-red-700">10.5-24%</td>
                <td className="p-4">₹50K - ₹40L</td>
                <td className="p-4">5 years</td>
                <td className="p-4">✗ None</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Car Loan</td>
                <td className="p-4 text-orange-700">7.5-13%</td>
                <td className="p-4">₹2L - ₹50L</td>
                <td className="p-4">7 years</td>
                <td className="p-4">✓ Vehicle</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-4 font-semibold">Education Loan</td>
                <td className="p-4 text-blue-700">8-12%</td>
                <td className="p-4">₹5L - ₹30L</td>
                <td className="p-4">15 years</td>
                <td className="p-4">± Depends</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Gold Loan</td>
                <td className="p-4 text-yellow-700">7-12%</td>
                <td className="p-4">₹25K - ₹25L</td>
                <td className="p-4">3 years</td>
                <td className="p-4">✓ Gold</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-4 font-semibold">Credit Card</td>
                <td className="p-4 text-red-700 font-bold">36-48%</td>
                <td className="p-4">Revolving</td>
                <td className="p-4">No limit</td>
                <td className="p-4">✗ None</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-semibold">Business Loan</td>
                <td className="p-4 text-purple-700">9-18%</td>
                <td className="p-4">₹50K - ₹5Cr+</td>
                <td className="p-4">10 years</td>
                <td className="p-4">± Depends</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Golden Rule */}
      <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold">The Golden Rule of Borrowing</h4>
        <p className="text-slate-300 text-lg">
          <strong>"Borrow for assets that appreciate or generate income. Never borrow for consumption or depreciating assets."</strong>
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-sm font-bold text-emerald-400 mb-2">✓ Good Debt</p>
            <ul className="text-xs text-slate-300 space-y-1 list-disc ml-4">
              <li>Home loan for self-residence or rental property</li>
              <li>Education loan with strong ROI potential</li>
              <li>Business loan for profitable expansion</li>
            </ul>
          </div>
          <div className="p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-sm font-bold text-red-400 mb-2">✗ Bad Debt</p>
            <ul className="text-xs text-slate-300 space-y-1 list-disc ml-4">
              <li>Personal loan for vacation or wedding</li>
              <li>Credit card debt for shopping/lifestyle</li>
              <li>Car loan for luxury vehicle beyond means</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOfLoans;
