"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target,
  Shield,
  TrendingUp,
  Award,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Scale,
  RefreshCw
} from 'lucide-react';

const SmartBorrowing = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Lightbulb className="w-4 h-4" />
            <span>Master the Art of Borrowing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Smart Borrowing & Loan Management
          </h2>
          <p className="text-purple-50 text-lg max-w-2xl">
            Strategies to minimize loan costs, maximize credit score, negotiate better rates, and escape debt faster. Knowledge banks don't want you to have.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Affordability Rule */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-600" /> How Much Can You Really Afford?
        </h3>
        <Card className="border-purple-200 bg-purple-50/50 shadow-md">
          <CardContent className="p-6 space-y-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              Banks calculate your eligibility based on income, but that doesn't mean you SHOULD borrow that much. Follow the 40-20-10 Rule:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg border border-purple-200">
                <p className="text-2xl font-bold text-purple-700 mb-1">40%</p>
                <p className="text-xs font-bold text-slate-900 mb-2">Total Debt Limit</p>
                <p className="text-xs text-slate-600">All EMIs combined should NOT exceed 40% of your monthly take-home pay</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-purple-200">
                <p className="text-2xl font-bold text-blue-700 mb-1">20%</p>
                <p className="text-xs font-bold text-slate-900 mb-2">Down Payment</p>
                <p className="text-xs text-slate-600">Save at least 20% of asset value before taking a loan. Never go 100% financed</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-purple-200">
                <p className="text-2xl font-bold text-emerald-700 mb-1">10%</p>
                <p className="text-xs font-bold text-slate-900 mb-2">Interest Savings Goal</p>
                <p className="text-xs text-slate-600">Aim to prepay 10% of principal annually to cut interest dramatically</p>
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs font-bold text-amber-800 mb-1">Example: ₹50,000 Monthly Income</p>
              <p className="text-xs text-slate-700">
                • Max EMI: ₹20,000 (40%)<br/>
                • For ₹10L car: Save ₹2L first, borrow ₹8L<br/>
                • Prepayment target: ₹80,000/year (saves lakhs in interest)
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Credit Score Mastery */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-6 h-6 text-emerald-600" /> Building & Protecting Your Credit Score
        </h3>
        <p className="text-sm text-slate-600">Your credit score (300-900) determines if you get loans and at what rate. Even a 50-point difference can save lakhs.</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-emerald-900">✓ How to Build an Excellent Score (750+)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: "Pay 100% On Time, Every Time", desc: "35% of score. Even ONE late payment drops score by 50-100 points.", priority: "Critical" },
                { title: "Keep Credit Utilization Below 30%", desc: "If credit limit is ₹1L, use only ₹30K. Shows you're not desperate.", priority: "High" },
                { title: "Maintain Credit Mix", desc: "Have both secured (home loan) and unsecured (credit card). Diversity helps.", priority: "Medium" },
                { title: "Don't Close Old Accounts", desc: "Longer credit history = better score. Keep your first credit card active.", priority: "Medium" },
                { title: "Limit Hard Inquiries", desc: "Each loan application = score dip. Apply only when serious.", priority: "Medium" }
              ].map((item, i) => (
                <div key={i} className="p-3 bg-white rounded-lg border border-emerald-100">
                  <p className="text-xs font-bold text-slate-900">{item.title}</p>
                  <p className="text-[10px] text-slate-600 mt-1">{item.desc}</p>
                  <span className={`text-[9px] px-2 py-0.5 rounded-full inline-block mt-1 ${
                    item.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                    item.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>{item.priority}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-slate-900">Score Impact on Interest Rates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="p-2 text-left">Score Range</th>
                      <th className="p-2 text-left">Rating</th>
                      <th className="p-2 text-right">Rate Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t bg-emerald-50">
                      <td className="p-2 font-semibold">750-900</td>
                      <td className="p-2">Excellent</td>
                      <td className="p-2 text-right text-emerald-700">Base rate (8%)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-semibold">700-749</td>
                      <td className="p-2">Good</td>
                      <td className="p-2 text-right text-blue-700">+0.5% (8.5%)</td>
                    </tr>
                    <tr className="border-t bg-white">
                      <td className="p-2 font-semibold">650-699</td>
                      <td className="p-2">Fair</td>
                      <td className="p-2 text-right text-orange-700">+1.5% (9.5%)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2 font-semibold">&lt;650</td>
                      <td className="p-2">Poor</td>
                      <td className="p-2 text-right text-red-700">+3% or rejected</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs font-bold text-slate-800 mb-1">💰 Real Cost Example</p>
                <p className="text-xs text-slate-600">
                  ₹50L home loan for 20 years:<br/>
                  • Score 780 (8%) = Total interest: ₹42L<br/>
                  • Score 680 (9.5%) = Total interest: ₹53L<br/>
                  <strong className="text-red-700">₹11 LAKH difference!</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Negotiation Strategies */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Scale className="w-6 h-6 text-blue-600" /> Negotiating Better Loan Terms
        </h3>
        <p className="text-sm text-slate-600">Most people accept the first offer. Smart borrowers negotiate and save lakhs. Here's how:</p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "1. Shop Around (Minimum 3 Banks)",
              tips: [
                "Get written quotes from at least 3 lenders",
                "Compare not just rate, but processing fees, prepayment terms",
                "Use online aggregators (BankBazaar, Paisabazaar) for quick comparison",
                "Check your employer's tie-ups — often 0.5-1% lower rates"
              ],
              power: "Banks compete. If Bank A quotes 8.5%, tell Bank B. They'll often match or beat it."
            },
            {
              title: "2. Leverage Your Relationship",
              tips: [
                "Existing customers get preferential rates (0.25-0.5% lower)",
                "Salary account holders qualify for better terms",
                "Bundle loans (e.g., home + car from same bank) for discounts",
                "High balance/investments = negotiating power"
              ],
              power: "Banks value loyalty. If you've banked for 5+ years with good history, ask for relationship pricing."
            },
            {
              title: "3. Ask for Fee Waivers",
              tips: [
                "Processing fees (often waived during festive offers)",
                "Prepayment penalty (negotiate zero prepayment on floating rates)",
                "Insurance bundling (decline if you have better options)",
                "Documentation charges (often negotiable)"
              ],
              power: "Fees are pure profit for banks. They have flexibility. Simply asking can save ₹10,000-₹50,000."
            },
            {
              title: "4. Choose the Right Timing",
              tips: [
                "End of financial quarter (banks have targets)",
                "Festive seasons (Diwali, New Year offers)",
                "When RBI cuts repo rates (floating rates drop)",
                "During bank promotional campaigns"
              ],
              power: "Timing can get you 0.25-0.75% lower rates or cashback offers worth thousands."
            }
          ].map((item, i) => (
            <Card key={i} className="border-blue-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-md text-blue-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-xs text-slate-600 space-y-1 list-disc ml-4">
                  {item.tips.map((tip, j) => <li key={j}>{tip}</li>)}
                </ul>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-[10px] font-bold text-blue-800">🎯 Negotiation Power: <span className="font-normal">{item.power}</span></p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Prepayment Strategies */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-600" /> Prepayment Strategies (The Interest Killer)
        </h3>
        <p className="text-sm text-slate-600">Prepaying even small amounts in early years can cut YEARS off your loan and save lakhs in interest.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-orange-200 bg-orange-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-orange-900">Why Prepayment is Powerful</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-orange-100">
                <p className="text-xs font-bold text-orange-700 mb-2">Example: ₹50L Home Loan @ 8% for 20 years</p>
                <div className="space-y-2 text-xs text-slate-700">
                  <p><strong>No prepayment:</strong></p>
                  <p className="ml-4">• EMI: ₹41,822<br/>• Total interest: ₹50,37,280</p>
                  <p className="mt-2"><strong>Prepay ₹1L every year:</strong></p>
                  <p className="ml-4">• Tenure: 13 years (7 years less!)<br/>• Total interest: ₹31,45,000<br/>• <strong className="text-emerald-700">Savings: ₹18.9 LAKH</strong></p>
                </div>
              </div>
              <div className="p-4 bg-orange-100 rounded-lg">
                <p className="text-xs font-bold text-orange-800">The Math Behind It</p>
                <p className="text-xs text-slate-700 mt-1">
                  Early EMIs are 70-80% interest. When you prepay, 100% goes to principal. You're killing future interest before it accrues.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-emerald-900">Smart Prepayment Strategies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: "Windfall Strategy", desc: "Use bonuses, tax refunds, gifts for prepayment instead of spending" },
                { title: "Salary Increment Rule", desc: "When salary increases, add 50% of increment to EMI as prepayment" },
                { title: "Lump Sum Beats Small Sums", desc: "₹1L once a year > ₹8,333/month due to reduced compounding" },
                { title: "Reduce Tenure, Not EMI", desc: "When you prepay, keep EMI same and reduce tenure. Saves more interest" },
                { title: "Prioritize High-Interest Debt", desc: "Pay off 18% personal loan before 8% home loan" }
              ].map((item, i) => (
                <div key={i} className="p-3 bg-white rounded-lg border border-emerald-100">
                  <p className="text-xs font-bold text-slate-900">{item.title}</p>
                  <p className="text-[10px] text-slate-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Debt Consolidation */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-purple-600" /> When to Refinance or Consolidate Debt
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-purple-200 bg-purple-50/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-purple-900">Loan Refinancing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">Switching your loan to another lender offering better terms.</p>
              <div className="p-4 bg-white rounded-lg border border-purple-100">
                <p className="text-xs font-bold text-emerald-700 mb-2">✓ Refinance When:</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Market rates drop by 1-2% below your current rate</li>
                  <li>Your credit score improved by 100+ points</li>
                  <li>Savings &gt; refinancing costs within 1-2 years</li>
                  <li>At least 5+ years remaining on loan tenure</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg">
                <p className="text-xs font-bold text-purple-800">Example</p>
                <p className="text-xs text-slate-700">
                  ₹30L loan at 10% → refinance to 8.5%<br/>
                  Annual savings: ₹45,000<br/>
                  Refinance cost: ₹30,000<br/>
                  Break-even: 8 months ✓
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-blue-900">Debt Consolidation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">Combining multiple high-interest loans into one lower-rate loan.</p>
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <p className="text-xs font-bold text-emerald-700 mb-2">✓ Consolidate When:</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Have 3+ credit cards with 36-40% interest</li>
                  <li>Multiple personal loans eating 50%+ of income</li>
                  <li>Can get consolidation loan at much lower rate</li>
                  <li>Committed to NOT accumulating new debt</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-100 rounded-lg">
                <p className="text-xs font-bold text-blue-800">Example</p>
                <p className="text-xs text-slate-700">
                  3 credit cards: ₹2L @ 40% = ₹80K interest<br/>
                  Personal loan: ₹2L @ 14% = ₹28K interest<br/>
                  <strong className="text-emerald-700">Save ₹52,000/year!</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Red Flags */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-red-700 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" /> Warning Signs You're in Debt Trouble
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "EMIs exceed 50% of monthly income",
            "Using credit cards to pay other EMIs",
            "Borrowing from friends/family to cover expenses",
            "Only paying minimum due on credit cards",
            "Applying for multiple loans simultaneously",
            "Missing EMI payments even once",
            "Credit score dropped below 650",
            "Can't save anything after EMIs",
            "Taking loans to invest (leverage)"
          ].map((warning, i) => (
            <div key={i} className="p-4 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-700">{warning}</p>
            </div>
          ))}
        </div>
        <div className="p-6 bg-red-100 rounded-xl border border-red-300">
          <p className="text-sm font-bold text-red-900 mb-2">🚨 If 2+ apply: You're in a debt spiral. Act NOW.</p>
          <p className="text-xs text-red-800">
            1. Stop all new borrowing immediately<br/>
            2. Create debt repayment plan (highest interest first)<br/>
            3. Cut non-essential expenses by 30-50%<br/>
            4. Consider credit counseling (nonprofits offer free advice)<br/>
            5. Negotiate with lenders BEFORE defaulting
          </p>
        </div>
      </section>

      {/* Final Wisdom */}
      <div className="p-8 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <Shield className="w-8 h-8" />
          The Ultimate Borrowing Wisdom
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm font-bold text-purple-100">For Beginners:</p>
            <ul className="text-xs text-white space-y-1 list-disc ml-4">
              <li>Borrow only for assets that appreciate or generate income</li>
              <li>Total EMIs ≤ 40% of income. Never break this rule.</li>
              <li>Build credit score to 750+ before big loans (home, business)</li>
              <li>Always negotiate. Banks expect it and have flexibility.</li>
              <li>Prepay aggressively in first 5 years of loan</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-bold text-purple-100">Advanced Strategy:</p>
            <ul className="text-xs text-white space-y-1 list-disc ml-4">
              <li>Use loan calculators BEFORE applying, not after</li>
              <li>Understand amortization: early prepayment = maximum savings</li>
              <li>Refinance when rate drops 1%+ or score improves 100+</li>
              <li>Never be a guarantor. 80% of guarantors end up paying.</li>
              <li>Debt is a tool, not a lifestyle. Exit fast, don't get comfortable.</li>
            </ul>
          </div>
        </div>
        <div className="pt-4 border-t border-white/20 text-center">
          <p className="text-purple-100 font-semibold text-lg">
            "The best loan is the one you pay off early. The second best is the one you never took."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartBorrowing;
