"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp,
  TrendingDown,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Target,
  Shield,
  Brain,
  Calculator
} from 'lucide-react';

const WhenToTakeLoans = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Brain className="w-4 h-4" />
            <span>Smart Borrowing Decisions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            When to Take a Loan vs When to Avoid
          </h2>
          <p className="text-emerald-50 text-lg max-w-2xl">
            Not all debt is bad, and not all situations warrant avoiding loans. Understanding when to borrow and when to save can make or break your financial future.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Good Debt vs Bad Debt */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">The Fundamental Principle: Good Debt vs Bad Debt</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          The key question isn't "Should I take a loan?" but rather "Will this loan make me richer or poorer?"
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                <CardTitle className="text-xl text-emerald-900">Good Debt</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Debt that helps you build wealth or generate income over time. The asset you buy appreciates or produces returns higher than the loan cost.
              </p>
              <div className="p-4 bg-white rounded-lg border border-emerald-100 space-y-3">
                <p className="text-xs font-bold text-emerald-700 mb-2">✓ Examples of Good Debt</p>
                <ul className="text-xs text-slate-600 space-y-2 ml-4 list-disc">
                  <li><strong>Home Loan for Self-Residence:</strong> Builds equity, provides shelter, tax benefits, and property typically appreciates 5-8% annually</li>
                  <li><strong>Education Loan:</strong> Increases earning potential (e.g., MBA can boost salary by 2-3x)</li>
                  <li><strong>Business Loan with ROI &gt; Interest:</strong> If business returns 20% and loan costs 12%, you profit 8%</li>
                  <li><strong>Investment Property Loan:</strong> Rental income covers EMI + provides capital appreciation</li>
                </ul>
              </div>
              <div className="p-4 bg-emerald-100 rounded-lg border border-emerald-200">
                <p className="text-xs font-bold text-emerald-800">The Test</p>
                <p className="text-xs text-slate-700">Does this loan create an asset that grows in value OR generates income &gt; loan cost?</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-6 h-6 text-red-600" />
                <CardTitle className="text-xl text-red-900">Bad Debt</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Debt used for consumption or assets that depreciate. The purchased item loses value immediately, leaving you with only the debt burden.
              </p>
              <div className="p-4 bg-white rounded-lg border border-red-100 space-y-3">
                <p className="text-xs font-bold text-red-700 mb-2">✗ Examples of Bad Debt</p>
                <ul className="text-xs text-slate-600 space-y-2 ml-4 list-disc">
                  <li><strong>Personal Loan for Vacation:</strong> Memories don't generate income, loan costs you 18-24% interest</li>
                  <li><strong>Car Loan for Luxury Vehicle:</strong> Car depreciates 15-20% per year, you're paying interest on a declining asset</li>
                  <li><strong>Credit Card Debt for Shopping:</strong> 40% interest on consumables that provide no future value</li>
                  <li><strong>Loan for Wedding/Party:</strong> One-time event funded by years of EMI payments</li>
                </ul>
              </div>
              <div className="p-4 bg-red-100 rounded-lg border border-red-200">
                <p className="text-xs font-bold text-red-800">The Test</p>
                <p className="text-xs text-slate-700">Will this purchase be worth less than the loan amount in 1 year? That's bad debt.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* When You SHOULD Take a Loan */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-emerald-700 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6" /> When You SHOULD Take a Loan
        </h3>

        <div className="space-y-4">
          {[
            {
              title: "1. You're Buying Your First Home",
              icon: <Target className="w-6 h-6 text-emerald-600" />,
              conditions: [
                "EMI is ≤ 30-40% of your monthly take-home salary",
                "You have 20% down payment saved",
                "Property is in a location with appreciation potential",
                "You plan to live there for at least 5-7 years",
                "Interest rate is competitive (currently 8-9%)"
              ],
              math: "Example: Salary ₹1 Lakh/month → Max EMI ₹40,000. At 8.5% for 20 years = ₹50 Lakh loan capacity.",
              verdict: "Home loans are the BEST loans. They build equity, provide tax benefits, and property typically appreciates."
            },
            {
              title: "2. Education Loan with Strong ROI",
              icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
              conditions: [
                "Course has proven placement record (85%+ success rate)",
                "Expected salary increase justifies the debt (e.g., MBA from top institute)",
                "Repayment can start within 1-2 years of graduation",
                "Total debt is ≤ 1-2 years of expected post-degree salary"
              ],
              math: "Example: ₹20 Lakh MBA loan. Pre-MBA salary ₹8L → Post-MBA ₹20L. Extra ₹12L/year easily covers ₹25,000 EMI.",
              verdict: "Investing in high-quality education is one of the best ROI decisions. Interest is 100% tax-deductible."
            },
            {
              title: "3. Business Loan with Proven Model",
              icon: <DollarSign className="w-6 h-6 text-purple-600" />,
              conditions: [
                "Business is already profitable (not for startup)",
                "Clear expansion plan with projected ROI &gt; loan interest",
                "You have 2-3 years of financial track record",
                "Loan is for growth, not to cover losses",
                "Can service EMI from business cash flow without personal funds"
              ],
              math: "Example: ₹10L loan at 14%. Your expansion generates ₹2L extra profit/year (20% ROI). Net gain = ₹60,000/year.",
              verdict: "Good business debt accelerates growth. But ONLY if you already have a working, profitable model."
            },
            {
              title: "4. Emergency Medical Needs (No Other Option)",
              icon: <Shield className="w-6 h-6 text-red-600" />,
              conditions: [
                "True medical emergency requiring immediate funds",
                "No emergency fund or insurance coverage available",
                "No cheaper alternatives (family help, employer loan)",
                "You have a clear repayment plan within 1-2 years"
              ],
              math: "Example: ₹5L surgery needed urgently. Take gold loan (10% interest) instead of credit card (40% interest).",
              verdict: "Health > Wealth. But prioritize lowest-interest options: Gold Loan &gt; Personal Loan &gt; Credit Card."
            },
            {
              title: "5. Consolidating High-Interest Debt",
              icon: <Calculator className="w-6 h-6 text-orange-600" />,
              conditions: [
                "You have multiple credit card debts at 36-40% interest",
                "Personal loan interest is significantly lower (e.g., 12-15%)",
                "You commit to NOT using credit cards again",
                "Total debt is manageable and payable within 2-3 years"
              ],
              math: "Example: ₹5L credit card debt at 40% = ₹2L interest/year. ₹5L personal loan at 14% = ₹70K/year. Save ₹1.3L!",
              verdict: "Debt consolidation makes sense ONLY if you fix the spending problem. Otherwise, you'll end up with both loans AND credit card debt."
            }
          ].map((item, i) => (
            <Card key={i} className="border-emerald-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-700 mb-2">✓ Green Light Conditions</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    {item.conditions.map((cond, j) => <li key={j}>{cond}</li>)}
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-700 mb-1">📊 The Math</p>
                  <p className="text-xs text-slate-600">{item.math}</p>
                </div>
                <div className="p-4 bg-emerald-100 rounded-lg">
                  <p className="text-xs font-bold text-emerald-800">💡 Verdict: <span className="font-normal">{item.verdict}</span></p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* When You Should NOT Take a Loan */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-red-700 flex items-center gap-2">
          <XCircle className="w-6 h-6" /> When You Should NOT Take a Loan
        </h3>

        <div className="space-y-4">
          {[
            {
              title: "1. For Lifestyle Consumption",
              icon: <XCircle className="w-6 h-6 text-red-600" />,
              reasons: [
                "Personal loan for vacation/destination wedding",
                "Credit card debt for shopping, gadgets, lifestyle",
                "Loan for luxury car when affordable car suffices",
                "Borrowing for home renovation that's not urgent"
              ],
              reality: "A ₹3 Lakh vacation funded by personal loan at 18% costs you ₹54,000 in interest per year. You're paying ₹4,500/month for a memory.",
              alternative: "Save for 12-18 months and pay cash. Delayed gratification builds wealth."
            },
            {
              title: "2. To Invest in Markets",
              icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
              reasons: [
                "Never take a loan to invest in stocks, crypto, or mutual funds",
                "Markets are volatile — you can lose capital while owing interest",
                "Leverage amplifies losses as much as gains",
                "No guaranteed returns to cover loan EMIs"
              ],
              reality: "Example: Borrow ₹10L at 12% to invest in stocks. Market crashes 30%. You lose ₹3L + owe ₹1.2L annual interest. Double loss.",
              alternative: "Invest only your own savings. If you don't have savings, you're not ready to invest."
            },
            {
              title: "3. When You Already Have High Debt",
              icon: <TrendingDown className="w-6 h-6 text-red-600" />,
              reasons: [
                "Existing EMIs are &gt; 50% of your monthly income",
                "You're using credit cards to pay bills/other EMIs",
                "You have multiple personal loans already",
                "Your credit score is below 650 (indicates stress)"
              ],
              reality: "Taking more debt to service existing debt = debt trap. It's a downward spiral that ends in default.",
              alternative: "Freeze all new borrowing. Focus on paying off highest-interest debts first. Seek credit counseling if needed."
            },
            {
              title: "4. For Someone Else's Dream",
              icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
              reasons: [
                "Being a guarantor for a friend/relative's loan",
                "Funding a family member's business idea with personal loan",
                "Taking loan for someone's wedding/education against your comfort",
                "Co-signing a loan for someone with bad credit"
              ],
              reality: "80% of co-signed/guarantor loans end badly. If they default, YOU pay. Your credit score, your assets at risk.",
              alternative: "Help within your means. If you can't gift the money outright, you shouldn't loan it."
            },
            {
              title: "5. When You Have No Emergency Fund",
              icon: <Shield className="w-6 h-6 text-red-600" />,
              reasons: [
                "You don't have 6 months of expenses saved",
                "One job loss/medical emergency will default the loan",
                "No backup income source",
                "No health/term insurance in place"
              ],
              reality: "Example: You take ₹10L car loan. Lose job 6 months later. Can't pay EMI, car repossessed, credit ruined.",
              alternative: "Build emergency fund FIRST (₹3-6 Lakh). Then insurance. Only then consider loans for wants."
            },
            {
              title: "6. For a Depreciating Asset You Can't Afford",
              icon: <TrendingDown className="w-6 h-6 text-red-600" />,
              reasons: [
                "Car worth ₹15L when your annual income is ₹5L",
                "Gadgets/electronics that lose 30% value immediately",
                "Furniture/appliances that don't generate income",
                "Second car/bike when first one is sufficient"
              ],
              reality: "A ₹15L car depreciates to ₹9L in 3 years, but you've paid ₹18L (including interest). You lost ₹9L.",
              alternative: "Buy what you can afford in cash. If you can't pay cash, you can't afford it."
            }
          ].map((item, i) => (
            <Card key={i} className="border-red-200 bg-red-50/50 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <CardTitle className="text-lg text-red-900">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-2">🚫 Red Flags</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    {item.reasons.map((reason, j) => <li key={j}>{reason}</li>)}
                  </ul>
                </div>
                <div className="p-4 bg-red-100 rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-800 mb-1">💸 The Reality</p>
                  <p className="text-xs text-slate-700">{item.reality}</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-700 mb-1">✓ Better Alternative</p>
                  <p className="text-xs text-slate-600">{item.alternative}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* The Decision Framework */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">The 5-Question Loan Decision Framework</h3>
        <p className="text-sm text-slate-600">Before taking ANY loan, ask yourself these questions:</p>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            {
              q: "1. Need or Want?",
              answer: "If it's a want (vacation, luxury), save cash. If it's a need (home, education), consider loan.",
              color: "blue"
            },
            {
              q: "2. Can I Afford EMI?",
              answer: "EMI should be ≤ 40% of monthly income. Calculate total debt obligation, not just this loan.",
              color: "emerald"
            },
            {
              q: "3. Does It Build Wealth?",
              answer: "Will this asset appreciate or generate income &gt; loan cost? If no, avoid.",
              color: "purple"
            },
            {
              q: "4. What If I Lose Income?",
              answer: "Do I have 6-month emergency fund? If no, don't take the loan yet.",
              color: "orange"
            },
            {
              q: "5. Is There a Cheaper Way?",
              answer: "Can I save and buy in cash? Use existing savings? Borrow from family interest-free?",
              color: "red"
            }
          ].map((item, i) => (
            <Card key={i} className={`border-${item.color}-200 bg-${item.color}-50/50 p-4`}>
              <div className="space-y-2">
                <p className={`text-sm font-bold text-${item.color}-900`}>{item.q}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final Golden Rules */}
      <div className="p-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold">Golden Rules for Beginners</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-bold text-emerald-100">✓ DO Take Loans For:</p>
            <ul className="text-xs text-white space-y-1 list-disc ml-4">
              <li>Appreciating assets (home, education with ROI)</li>
              <li>Income-generating investments (business expansion)</li>
              <li>True emergencies (medical, when no other option)</li>
              <li>When interest cost &lt; asset return/income gain</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-bold text-red-200">✗ DON'T Take Loans For:</p>
            <ul className="text-xs text-white space-y-1 list-disc ml-4">
              <li>Consumption/lifestyle (vacation, shopping, parties)</li>
              <li>Depreciating assets you can't afford (luxury car)</li>
              <li>Market speculation (stocks, crypto)</li>
              <li>When total EMIs &gt; 50% of income</li>
            </ul>
          </div>
        </div>
        <div className="pt-4 border-t border-white/20">
          <p className="text-emerald-100 font-semibold text-center">
            "If you wouldn't be comfortable buying it with cash, you shouldn't buy it with debt."
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhenToTakeLoans;
