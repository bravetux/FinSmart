"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Zap,
  TrendingDown,
  Gift,
  CreditCard,
  Home,
  PiggyBank,
  Calculator,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Target,
  Shield,
  Ban
} from 'lucide-react';

const LoanClosure = () => {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [extraEMIs, setExtraEMIs] = useState(2);

  const calculateEMI = (principal: number, rate: number, months: number) => {
    const r = rate / 12 / 100;
    return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  };

  const regularEMI = calculateEMI(loanAmount, interestRate, tenure * 12);
  const regularTotalInterest = (regularEMI * tenure * 12) - loanAmount;

  const calculateWithExtraEMIs = () => {
    let balance = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const regularMonthlyEMI = calculateEMI(loanAmount, interestRate, tenure * 12);
    let totalPaid = 0;
    let months = 0;
    
    while (balance > 0 && months < tenure * 12) {
      const interest = balance * monthlyRate;
      const principal = regularMonthlyEMI - interest;
      balance -= principal;
      totalPaid += regularMonthlyEMI;
      months++;
      
      // Extra EMIs per year
      if (months % 12 === 0 && extraEMIs > 0) {
        for (let i = 0; i < extraEMIs && balance > 0; i++) {
          balance -= regularMonthlyEMI;
          totalPaid += regularMonthlyEMI;
        }
      }
    }
    
    return {
      months,
      years: (months / 12).toFixed(1),
      totalInterest: totalPaid - loanAmount,
      savings: regularTotalInterest - (totalPaid - loanAmount)
    };
  };

  const withExtra = calculateWithExtraEMIs();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Target className="w-4 h-4" />
            <span>Debt Freedom Strategies</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Loan Closure Smart Tips
          </h2>
          <p className="text-emerald-50 text-lg max-w-2xl">
            Proven strategies to close your loans 5-10 years early and save lakhs in interest. Small actions, massive impact.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Extra EMI Calculator */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-emerald-600" /> Strategy #1: Extra EMI Payments
        </h3>
        <p className="text-sm text-slate-600">
          Paying just 1-2 extra EMIs per year can cut your loan tenure by 30-40% and save lakhs in interest!
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-emerald-900">Calculate Your Savings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-slate-700">Loan Amount (₹)</Label>
                <Input 
                  type="number" 
                  value={loanAmount} 
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-slate-700">Interest Rate (%)</Label>
                <Input 
                  type="number" 
                  step="0.1"
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-slate-700">Tenure (Years)</Label>
                <Input 
                  type="number" 
                  value={tenure} 
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-slate-700">Extra EMIs per Year</Label>
                <Input 
                  type="number" 
                  value={extraEMIs} 
                  onChange={(e) => setExtraEMIs(Number(e.target.value))}
                  className="text-sm"
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-md text-slate-800">Regular Payment Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Monthly EMI:</span>
                  <span className="font-bold text-slate-900">₹{regularEMI.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Tenure:</span>
                  <span className="font-bold text-slate-900">{tenure} years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Total Interest:</span>
                  <span className="font-bold text-red-600">₹{regularTotalInterest.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-md text-emerald-900">With {extraEMIs} Extra EMIs/Year</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">New Tenure:</span>
                  <span className="font-bold text-emerald-700">{withExtra.years} years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Time Saved:</span>
                  <span className="font-bold text-emerald-700">{(tenure - Number(withExtra.years)).toFixed(1)} years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Total Interest:</span>
                  <span className="font-bold text-emerald-700">₹{withExtra.totalInterest.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                </div>
                <div className="pt-3 mt-3 border-t border-emerald-200">
                  <div className="flex justify-between text-base">
                    <span className="font-bold text-emerald-900">💰 You Save:</span>
                    <span className="font-bold text-emerald-700 text-lg">₹{withExtra.savings.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-900">
                <strong>💡 Pro Tip:</strong> Pay extra EMIs in the first 5 years for maximum impact. Early payments kill more interest!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Strategy */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Gift className="w-6 h-6 text-purple-600" /> Strategy #2: Use Bonuses & Windfalls
        </h3>
        <p className="text-sm text-slate-600">
          Every bonus, tax refund, or gift you receive is an opportunity to slash years off your loan. Don't spend it—invest it in debt freedom.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Annual Bonus",
              desc: "Use 70-100% of your annual bonus for loan prepayment",
              example: "₹2L bonus → ₹1.5L to loan = 2-3 years saved on ₹30L loan",
              impact: "High Impact"
            },
            {
              title: "Tax Refunds",
              desc: "ITR refunds, TDS refunds—prepay instead of spending",
              example: "₹50K refund every year for 5 years = ₹5L+ interest saved",
              impact: "Medium Impact"
            },
            {
              title: "Gifts & Inheritance",
              desc: "Monetary gifts, maturity proceeds—close debt first",
              example: "₹5L inheritance → pay to loan vs EMIs = ₹8L interest saved",
              impact: "Very High Impact"
            }
          ].map((item, i) => (
            <Card key={i} className="border-purple-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-md text-purple-900">{item.title}</CardTitle>
                <span className={`text-xs px-2 py-1 rounded-full inline-block ${
                  item.impact === 'Very High Impact' ? 'bg-red-100 text-red-700' :
                  item.impact === 'High Impact' ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'
                }`}>{item.impact}</span>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-slate-700">{item.desc}</p>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                  <p className="text-[10px] font-semibold text-purple-800 mb-1">Example:</p>
                  <p className="text-[10px] text-slate-700">{item.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-200">
          <h4 className="text-md font-bold text-purple-900 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            The 70-30 Windfall Rule
          </h4>
          <p className="text-sm text-slate-700">
            When you receive unexpected money: <strong>70% to debt repayment, 30% for yourself</strong>. This balances loan closure with enjoying life. As debt decreases, flip to 30-70.
          </p>
        </div>
      </section>

      {/* Debt Conversion Strategy */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-orange-600" /> Strategy #3: High-Interest to Low-Interest Conversion
        </h3>
        <p className="text-sm text-slate-600">
          If you have expensive debt (credit cards, personal loans), convert them to cheaper alternatives. Interest rate is the enemy!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                High-Interest Debt Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-xs font-bold text-slate-900 mb-2">Credit Card Outstanding: ₹3,00,000</p>
                  <div className="space-y-1 text-xs text-slate-700">
                    <p>• Interest rate: <strong className="text-red-700">36-42% per annum</strong></p>
                    <p>• Monthly interest: <strong className="text-red-700">₹9,000-10,500</strong></p>
                    <p>• If paying minimum (5%): <strong className="text-red-700">Takes 15+ years!</strong></p>
                    <p>• Total interest paid: <strong className="text-red-700">₹12,00,000+</strong></p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-red-700">
                  <AlertCircle className="w-4 h-4" />
                  <p className="text-xs font-bold">You pay ₹4 for every ₹1 borrowed!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Conversion Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-emerald-100">
                  <p className="text-xs font-bold text-slate-900 mb-2">Convert to Personal Loan: ₹3,00,000</p>
                  <div className="space-y-1 text-xs text-slate-700">
                    <p>• Interest rate: <strong className="text-emerald-700">12-16% per annum</strong></p>
                    <p>• Tenure: <strong className="text-emerald-700">3 years</strong></p>
                    <p>• Monthly EMI: <strong className="text-emerald-700">₹10,000-11,000</strong></p>
                    <p>• Total interest: <strong className="text-emerald-700">₹60,000-70,000</strong></p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <p className="text-xs font-bold">Save ₹11,30,000+ in interest!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="p-6 bg-orange-100 rounded-xl border border-orange-300">
          <h4 className="text-md font-bold text-orange-900 mb-3">When to Convert Debt</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-xs font-bold text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                DO Convert When:
              </p>
              <ul className="text-xs text-slate-700 space-y-1 ml-6 list-disc">
                <li>Credit card balance &gt; ₹1L for 6+ months</li>
                <li>Interest rate difference &gt; 15%</li>
                <li>You have stable income & good credit score</li>
                <li>Total EMI stays under 40% of income</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-red-800 flex items-center gap-2">
                <Ban className="w-4 h-4" />
                DON'T Convert When:
              </p>
              <ul className="text-xs text-slate-700 space-y-1 ml-6 list-disc">
                <li>You'll continue using credit cards recklessly</li>
                <li>Can't afford the EMI comfortably</li>
                <li>Personal loan rate &gt; 18% (not worth it)</li>
                <li>Balance is small (can clear in 3-6 months)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EPF/PF/NPS Strategy */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Home className="w-6 h-6 text-blue-600" /> Strategy #4: Use EPF/PF/NPS for Home Loan Closure
        </h3>
        <p className="text-sm text-slate-600">
          Your retirement corpus can be partially used for home loan repayment. Rules allow it, math supports it, peace of mind is priceless.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-blue-200 bg-blue-50/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-md text-blue-900">EPF Withdrawal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-800">Allowed For:</p>
                <ul className="text-xs text-slate-700 space-y-1 ml-4 list-disc">
                  <li>Purchase of house/flat</li>
                  <li>Construction of house</li>
                  <li>Repayment of housing loan</li>
                </ul>
              </div>
              <div className="p-3 bg-white rounded-lg border border-blue-100">
                <p className="text-[10px] font-bold text-blue-800 mb-1">Limits:</p>
                <p className="text-[10px] text-slate-700">
                  • Up to 36 times monthly salary (after 5 years service)<br/>
                  • For loan repayment: Maximum balance available<br/>
                  • Can withdraw multiple times
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <p className="text-[10px] font-bold text-blue-800">Tax: Tax-free if used for home</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-md text-indigo-900">PPF Loan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-800">PPF Loan Option:</p>
                <ul className="text-xs text-slate-700 space-y-1 ml-4 list-disc">
                  <li>Available after 3 years</li>
                  <li>Up to 25% of balance 2 years ago</li>
                  <li>Interest: PPF rate + 1% (currently ~8%)</li>
                  <li>Repay within 36 months</li>
                </ul>
              </div>
              <div className="p-3 bg-white rounded-lg border border-indigo-100">
                <p className="text-[10px] font-bold text-indigo-800 mb-1">Use Case:</p>
                <p className="text-[10px] text-slate-700">
                  Take PPF loan at 8%, close home loan at 9-10%. Net saving: 1-2% on that amount.
                </p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-lg">
                <p className="text-[10px] font-bold text-indigo-800">Smart arbitrage play!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-md text-purple-900">NPS Withdrawal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-800">Partial Withdrawal:</p>
                <ul className="text-xs text-slate-700 space-y-1 ml-4 list-disc">
                  <li>After 3 years of contribution</li>
                  <li>Up to 25% of your contribution</li>
                  <li>Allowed for home purchase</li>
                  <li>Maximum 3 withdrawals before 60</li>
                </ul>
              </div>
              <div className="p-3 bg-white rounded-lg border border-purple-100">
                <p className="text-[10px] font-bold text-purple-800 mb-1">Tax:</p>
                <p className="text-[10px] text-slate-700">
                  Taxable as per your income slab
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <p className="text-[10px] font-bold text-purple-800">Use cautiously—it's your retirement!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl border border-blue-200">
          <h4 className="text-md font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Should You Use Retirement Funds for Loans?
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs font-bold text-emerald-800">✓ Makes Sense When:</p>
              <ul className="text-xs text-slate-700 space-y-1 ml-4 list-disc">
                <li>Home loan interest &gt; EPF/NPS returns (9-10% loan vs 8% EPF)</li>
                <li>Only 5-7 years left on home loan (finish it off!)</li>
                <li>Outstanding balance is small (₹5-10L)</li>
                <li>You're 10+ years away from retirement</li>
                <li>Mental peace &gt; 1-2% return difference</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-red-800">✗ Avoid When:</p>
              <ul className="text-xs text-slate-700 space-y-1 ml-4 list-disc">
                <li>You're within 5 years of retirement</li>
                <li>Loan interest is lower than fund returns</li>
                <li>Withdrawing will deplete your retirement corpus</li>
                <li>You have other sources for prepayment</li>
                <li>Withdrawal attracts heavy taxes (NPS)</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
            <p className="text-xs text-slate-800">
              <strong>💡 Smart Move:</strong> Use EPF for final home loan closure (last ₹5-10L) to become debt-free before retirement. The psychological benefit is worth more than compounding!
            </p>
          </div>
        </div>
      </section>

      {/* Loan Closure Priority */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-red-600" /> Which Loan to Close First?
        </h3>
        <p className="text-sm text-slate-600">When you have money for prepayment, this is the order of priority:</p>

        <div className="space-y-4">
          {[
            {
              priority: 1,
              loan: "Credit Card Debt",
              rate: "36-42%",
              reason: "Highest interest rate. Kills wealth fastest. Close IMMEDIATELY.",
              action: "Pay full outstanding even if you need to take personal loan",
              color: "red"
            },
            {
              priority: 2,
              loan: "Personal Loans",
              rate: "11-24%",
              reason: "Unsecured, high interest, no tax benefits. Second highest killer.",
              action: "Prepay aggressively. Clear within 1-2 years max.",
              color: "orange"
            },
            {
              priority: 3,
              loan: "Car Loans",
              rate: "8-12%",
              reason: "Depreciating asset with moderate interest. No tax benefits.",
              action: "Close early if possible. Car value drops, debt doesn't.",
              color: "amber"
            },
            {
              priority: 4,
              loan: "Education Loans",
              rate: "7-12%",
              reason: "Moderate interest, but has tax benefits under 80E (₹1.5L deduction).",
              action: "Take 3-5 years. Claim tax benefits, then prepay.",
              color: "yellow"
            },
            {
              priority: 5,
              loan: "Home Loans",
              rate: "8-10%",
              reason: "Lowest interest, tax benefits (₹2L under 24b + 80C), appreciating asset.",
              action: "Take full tenure if rate &lt; 9%. Prepay only excess cash.",
              color: "emerald"
            }
          ].map((item) => (
            <Card key={item.priority} className={`border-${item.color}-200 bg-${item.color}-50/30 shadow-sm`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-${item.color}-600 text-white font-bold text-lg shrink-0`}>
                    {item.priority}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-md font-bold text-slate-900">{item.loan}</h4>
                      <span className={`text-sm font-bold text-${item.color}-700`}>{item.rate}</span>
                    </div>
                    <p className="text-xs text-slate-700">{item.reason}</p>
                    <div className={`p-3 bg-${item.color}-100 rounded-lg border border-${item.color}-200`}>
                      <p className="text-xs font-semibold text-slate-800">
                        <ArrowRight className="w-3 h-3 inline mr-1" />
                        {item.action}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Action Plan */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-600" /> Your 90-Day Loan Closure Action Plan
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              phase: "Days 1-30",
              title: "Assess & Plan",
              color: "blue",
              tasks: [
                "List all loans with rates & balances",
                "Calculate prepayment charges (if any)",
                "Identify high-interest debt (>15%)",
                "Review EPF/PPF balance eligibility",
                "Set loan closure timeline"
              ]
            },
            {
              phase: "Days 31-60",
              title: "Execute Strategy",
              color: "purple",
              tasks: [
                "Convert credit card debt to personal loan",
                "Set up automatic extra EMI (1-2/year)",
                "Apply bonus/windfall rule (70-30)",
                "If eligible, initiate EPF withdrawal",
                "Contact bank for prepayment process"
              ]
            },
            {
              phase: "Days 61-90",
              title: "Optimize & Track",
              color: "emerald",
              tasks: [
                "Make first extra EMI payment",
                "Set calendar reminders for annual prepayment",
                "Track reduced tenure monthly",
                "Celebrate small milestones (₹1L paid)",
                "Plan next quarter's prepayment"
              ]
            }
          ].map((phase, i) => (
            <Card key={i} className={`border-${phase.color}-200 shadow-md`}>
              <CardHeader className={`bg-${phase.color}-50 pb-3`}>
                <div className="space-y-1">
                  <p className="text-xs text-slate-600 font-medium">{phase.phase}</p>
                  <CardTitle className="text-md text-slate-900">{phase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  {phase.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className={`w-3 h-3 text-${phase.color}-600 shrink-0 mt-0.5`} />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final Wisdom */}
      <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <PiggyBank className="w-8 h-8" />
          The Debt Freedom Mindset
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-sm font-bold text-emerald-100">Golden Rules:</p>
            <ul className="text-xs text-white space-y-1.5 list-disc ml-4">
              <li><strong>Interest is your enemy.</strong> Every ₹100 prepaid today saves ₹200+ in future interest.</li>
              <li><strong>Time is your weapon.</strong> First 5 years of loan = 70% interest. Attack early!</li>
              <li><strong>Automate prepayment.</strong> Set it and forget it. Manual discipline fails.</li>
              <li><strong>Celebrate milestones.</strong> Every ₹1L paid off, every year reduced—acknowledge progress.</li>
              <li><strong>Debt-free = true wealth.</strong> No EMIs = freedom to invest, take risks, live stress-free.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-bold text-emerald-100">Real-World Impact:</p>
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm space-y-2">
              <p className="text-xs text-white">
                <strong>₹50L home loan at 9% for 20 years:</strong><br/>
                • Regular plan: Pay ₹95L (₹45L interest)<br/>
                • 2 extra EMIs/year: Pay ₹70L (₹20L interest)<br/>
                • Close in 13 years vs 20 years
              </p>
              <p className="text-base font-bold text-yellow-300 mt-3">
                ₹25 LAKH SAVED + 7 YEARS OF FREEDOM
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-white/20 text-center">
          <p className="text-emerald-100 font-semibold text-lg">
            "A loan is a promise. Keep it short, keep it smart, keep your freedom."
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanClosure;
