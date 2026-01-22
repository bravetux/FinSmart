"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calculator,
  TrendingUp,
  Calendar,
  Percent,
  DollarSign,
  AlertCircle,
  PieChart,
  Clock,
  Zap
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HowLoansWork = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(10);

  // EMI Calculation
  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    
    if (r === 0) return P / n;
    
    const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(EMI);
  };

  const emi = calculateEMI();
  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - loanAmount;
  const interestPercentage = (totalInterest / loanAmount * 100).toFixed(1);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Calculator className="w-4 h-4" />
            <span>Understanding the Mechanics</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            How Loans Work: The Complete Guide
          </h2>
          <p className="text-blue-50 text-lg max-w-2xl">
            Demystifying EMIs, interest calculations, amortization, and the hidden costs that banks don't explain upfront. Master the math before you borrow.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* EMI Calculator */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Interactive EMI Calculator</h3>
        <Card className="border-blue-200 bg-blue-50/30 shadow-lg">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                <Input 
                  id="loan-amount"
                  type="number" 
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="text-lg font-semibold"
                />
                <input 
                  type="range" 
                  min="100000" 
                  max="10000000" 
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest-rate">Interest Rate (% per annum)</Label>
                <Input 
                  id="interest-rate"
                  type="number" 
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="text-lg font-semibold"
                  step="0.1"
                />
                <input 
                  type="range" 
                  min="5" 
                  max="24" 
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tenure">Tenure (Years)</Label>
                <Input 
                  id="tenure"
                  type="number" 
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="text-lg font-semibold"
                />
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-white border-blue-200">
                <CardContent className="p-4">
                  <p className="text-xs text-slate-600 mb-1">Monthly EMI</p>
                  <p className="text-2xl font-bold text-blue-700">₹{emi.toLocaleString('en-IN')}</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-emerald-200">
                <CardContent className="p-4">
                  <p className="text-xs text-slate-600 mb-1">Principal Amount</p>
                  <p className="text-2xl font-bold text-emerald-700">₹{(loanAmount/100000).toFixed(1)}L</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-orange-200">
                <CardContent className="p-4">
                  <p className="text-xs text-slate-600 mb-1">Total Interest</p>
                  <p className="text-2xl font-bold text-orange-700">₹{(totalInterest/100000).toFixed(1)}L</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-purple-200">
                <CardContent className="p-4">
                  <p className="text-xs text-slate-600 mb-1">Total Payment</p>
                  <p className="text-2xl font-bold text-purple-700">₹{(totalPayment/100000).toFixed(1)}L</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm font-bold text-amber-800">
                💡 Reality Check: You'll pay {interestPercentage}% extra (₹{(totalInterest/100000).toFixed(1)} Lakh) over {tenure} years in interest!
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* What is EMI */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">What is EMI?</h3>
        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Equated Monthly Installment (EMI)</h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  A fixed payment amount you make to the lender every month until the loan is fully repaid. It consists of two components: Principal (loan amount) + Interest (cost of borrowing).
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <p className="text-xs font-bold text-emerald-700 mb-2">✓ Why EMI?</p>
                    <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                      <li>Makes large purchases affordable by spreading cost</li>
                      <li>Fixed monthly payment = easier budgeting</li>
                      <li>Builds credit history if paid on time</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-xs font-bold text-red-700 mb-2">⚠️ The Trap</p>
                    <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                      <li>You pay MUCH more than the original price</li>
                      <li>Missed EMIs = penalty + credit score damage</li>
                      <li>First years = mostly interest, little principal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* EMI Formula Explained */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">The EMI Formula (For the Curious)</h3>
        <Card className="border-indigo-200 bg-indigo-50/50 shadow-sm">
          <CardContent className="p-6 space-y-4">
            <div className="p-6 bg-white rounded-lg border border-indigo-200">
              <p className="text-center text-lg font-mono mb-4">
                EMI = [P × r × (1+r)ⁿ] / [(1+r)ⁿ-1]
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-bold text-indigo-700">P =</p>
                  <p className="text-slate-600">Principal loan amount</p>
                </div>
                <div>
                  <p className="font-bold text-indigo-700">r =</p>
                  <p className="text-slate-600">Monthly interest rate (annual rate ÷ 12 ÷ 100)</p>
                </div>
                <div>
                  <p className="font-bold text-indigo-700">n =</p>
                  <p className="text-slate-600">Total number of months (years × 12)</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-indigo-100 rounded-lg">
              <p className="text-xs font-bold text-indigo-800 mb-2">Example Calculation</p>
              <p className="text-xs text-slate-700">
                Loan: ₹10,00,000 | Interest: 10% p.a. | Tenure: 10 years<br/>
                Monthly rate (r) = 10 ÷ 12 ÷ 100 = 0.008333<br/>
                Months (n) = 10 × 12 = 120<br/>
                <strong>EMI = ₹13,215</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Amortization Explained */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Understanding Amortization</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Your EMI is fixed, but the proportion of principal vs interest changes every month. Early payments are mostly interest; later payments are mostly principal.
        </p>

        <Card className="border-orange-200 bg-orange-50/50 shadow-md">
          <CardContent className="p-6 space-y-4">
            <h4 className="text-lg font-bold text-orange-900">Sample Amortization Schedule</h4>
            <p className="text-xs text-slate-600">₹10 Lakh loan at 10% for 10 years (EMI: ₹13,215)</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-white border-b-2 border-orange-200">
                    <th className="p-3 text-left font-medium">Month</th>
                    <th className="p-3 text-right font-medium">EMI</th>
                    <th className="p-3 text-right font-medium">Principal</th>
                    <th className="p-3 text-right font-medium">Interest</th>
                    <th className="p-3 text-right font-medium">Balance</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b bg-white">
                    <td className="p-3">Month 1</td>
                    <td className="p-3 text-right">₹13,215</td>
                    <td className="p-3 text-right text-emerald-700">₹4,882</td>
                    <td className="p-3 text-right text-red-700">₹8,333</td>
                    <td className="p-3 text-right">₹9,95,118</td>
                  </tr>
                  <tr className="border-b bg-orange-50">
                    <td className="p-3">Month 12</td>
                    <td className="p-3 text-right">₹13,215</td>
                    <td className="p-3 text-right text-emerald-700">₹5,345</td>
                    <td className="p-3 text-right text-red-700">₹7,870</td>
                    <td className="p-3 text-right">₹9,39,451</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="p-3">Month 60</td>
                    <td className="p-3 text-right">₹13,215</td>
                    <td className="p-3 text-right text-emerald-700">₹8,148</td>
                    <td className="p-3 text-right text-red-700">₹5,067</td>
                    <td className="p-3 text-right">₹6,02,847</td>
                  </tr>
                  <tr className="border-b bg-orange-50">
                    <td className="p-3">Month 110</td>
                    <td className="p-3 text-right">₹13,215</td>
                    <td className="p-3 text-right text-emerald-700">₹12,136</td>
                    <td className="p-3 text-right text-red-700">₹1,079</td>
                    <td className="p-3 text-right">₹1,27,859</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <td className="p-3 font-bold">Month 120</td>
                    <td className="p-3 text-right">₹13,215</td>
                    <td className="p-3 text-right text-emerald-700 font-bold">₹13,105</td>
                    <td className="p-3 text-right text-red-700">₹110</td>
                    <td className="p-3 text-right font-bold">₹0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white rounded-lg border border-orange-200">
                <p className="text-xs font-bold text-orange-700 mb-2">🔴 Early Years (Front-loaded Interest)</p>
                <p className="text-xs text-slate-600">
                  In Year 1, out of ₹1,58,580 paid, only ₹60,000 goes to principal. ₹98,580 is pure interest!
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-orange-200">
                <p className="text-xs font-bold text-emerald-700 mb-2">🟢 Later Years (Principal Heavy)</p>
                <p className="text-xs text-slate-600">
                  By Year 10, most of your EMI reduces the loan amount. That's why prepayment in early years saves the most.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interest Types */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Types of Interest Rates</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Percent className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-xl text-blue-900">Fixed Interest Rate</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700 leading-relaxed">
                Interest rate stays the same for the entire loan tenure. Your EMI never changes.
              </p>
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <p className="text-xs font-bold text-emerald-700 mb-1">✓ Advantages</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Predictable monthly payments</li>
                  <li>Protected from rate hikes</li>
                  <li>Easier budgeting</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <p className="text-xs font-bold text-red-700 mb-1">✗ Disadvantages</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Usually 0.5-1% higher than floating</li>
                  <li>Can't benefit if market rates drop</li>
                  <li>Higher prepayment penalties</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-100 rounded-lg">
                <p className="text-xs font-bold text-blue-800">Best For: Risk-averse borrowers, unstable income, expectation of rising rates</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-xl text-purple-900">Floating/Variable Interest Rate</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700 leading-relaxed">
                Interest rate linked to market benchmark (repo rate, MCLR). EMI changes with rate revisions.
              </p>
              <div className="p-4 bg-white rounded-lg border border-purple-100">
                <p className="text-xs font-bold text-emerald-700 mb-1">✓ Advantages</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Lower rates initially</li>
                  <li>Benefit from rate cuts</li>
                  <li>Lower/no prepayment penalty</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-purple-100">
                <p className="text-xs font-bold text-red-700 mb-1">✗ Disadvantages</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>EMI can increase unexpectedly</li>
                  <li>Difficult to budget long-term</li>
                  <li>Risk of affordability issues</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg">
                <p className="text-xs font-bold text-purple-800">Best For: Long-tenure loans (home loans), expectation of falling rates, flexibility needed</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-red-700 flex items-center gap-2">
          <AlertCircle className="w-6 h-6" /> Hidden Costs Banks Don't Highlight
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: <DollarSign className="w-5 h-5 text-orange-600" />,
              title: "Processing Fees",
              cost: "1-3% of loan amount",
              example: "₹10L loan = ₹10,000-₹30,000 upfront",
              tip: "Negotiate this or choose banks with lower/zero fees"
            },
            {
              icon: <Zap className="w-5 h-5 text-red-600" />,
              title: "Prepayment Penalty",
              cost: "2-5% of outstanding amount",
              example: "Prepay ₹2L = ₹4,000-₹10,000 penalty",
              tip: "Floating rate loans usually have nil prepayment charges"
            },
            {
              icon: <Clock className="w-5 h-5 text-purple-600" />,
              title: "Late Payment Charges",
              cost: "₹500-₹1,500 + 2-4% penalty interest",
              example: "Miss one ₹13K EMI = ₹500 fee + extra interest",
              tip: "Set auto-debit to never miss payments"
            },
            {
              icon: <Percent className="w-5 h-5 text-blue-600" />,
              title: "Loan Insurance",
              cost: "0.5-1% of loan amount annually",
              example: "₹10L loan = ₹5,000-₹10,000/year",
              tip: "Often optional, but pushed as mandatory. Read fine print"
            },
            {
              icon: <PieChart className="w-5 h-5 text-emerald-600" />,
              title: "Conversion Fees",
              cost: "₹2,000-₹5,000",
              example: "Switching fixed to floating or vice versa",
              tip: "Choose wisely initially to avoid this cost"
            },
            {
              icon: <Calculator className="w-5 h-5 text-yellow-600" />,
              title: "Stamp Duty & Legal",
              cost: "0.5-2% in most states",
              example: "₹50L home loan = ₹25,000-₹1,00,000",
              tip: "One-time cost, varies by state. Factor into budget"
            }
          ].map((item, i) => (
            <Card key={i} className="border-slate-200 shadow-sm">
              <CardContent className="p-5 space-y-2">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                <p className="text-xs text-red-700 font-semibold">{item.cost}</p>
                <p className="text-xs text-slate-600 italic">{item.example}</p>
                <div className="pt-2 border-t border-slate-200">
                  <p className="text-[10px] text-emerald-700">💡 {item.tip}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-sm font-bold text-amber-800 mb-1">🚨 Reality Check</p>
          <p className="text-xs text-slate-700">
            These "small" charges add up to ₹50,000-₹1,00,000 on a ₹10 Lakh loan! Always ask for a total cost breakdown in writing before signing.
          </p>
        </div>
      </section>

      {/* Key Takeaways */}
      <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold">Key Takeaways for Beginners</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm text-blue-50">
            <li className="flex items-start gap-2">
              <span className="shrink-0">✓</span>
              <span>EMI = fixed monthly payment (principal + interest)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0">✓</span>
              <span>Early years = mostly interest, later years = mostly principal</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0">✓</span>
              <span>Floating rates are cheaper but risky; fixed rates give certainty</span>
            </li>
          </ul>
          <ul className="space-y-2 text-sm text-blue-50">
            <li className="flex items-start gap-2">
              <span className="shrink-0">✓</span>
              <span>Prepayment in early years saves maximum interest</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0">✓</span>
              <span>Hidden costs can add 2-10% to total loan cost</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0">✓</span>
              <span>Always calculate total cost, not just EMI affordability</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowLoansWork;
