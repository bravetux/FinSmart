"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Rocket, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Lock, 
  Shield,
  AlertTriangle,
  CheckCircle2,
  Target,
  Clock,
  Zap,
  Building
} from "lucide-react";

const AIF = () => {
  return (
    <div className="space-y-10 pb-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Rocket className="w-4 h-4" />
            <span>Alternative Investment Funds</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            AIF: Beyond Traditional Investing
          </h2>
          <p className="text-purple-50 text-lg max-w-3xl">
            Alternative Investment Funds (AIFs) are pooled investment vehicles that pursue strategies outside traditional mutual funds — private equity, venture capital, credit, real assets, and hedge strategies.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* AIF Categories */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-600" /> AIF Categories (SEBI Classification)
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              category: "Category I",
              icon: <Building className="w-6 h-6" />,
              types: ["Venture Capital", "Angel Funds", "Infrastructure Funds", "Social Venture Funds"],
              focus: "Early-stage, startups, socially/economically desirable sectors",
              color: "blue"
            },
            {
              category: "Category II",
              icon: <TrendingUp className="w-6 h-6" />,
              types: ["Private Equity", "Debt Funds", "Fund of Funds"],
              focus: "Private equity, debt, real estate without leverage",
              color: "purple"
            },
            {
              category: "Category III",
              icon: <Zap className="w-6 h-6" />,
              types: ["Hedge Funds", "PIPE Funds"],
              focus: "Complex strategies using leverage, derivatives, short selling",
              color: "pink"
            }
          ].map((cat, i) => (
            <Card key={i} className={`border-${cat.color}-200 bg-${cat.color}-50/50 shadow-md hover:shadow-lg transition-shadow`}>
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl bg-${cat.color}-100 flex items-center justify-center text-${cat.color}-700 mb-3`}>
                  {cat.icon}
                </div>
                <CardTitle className="text-lg text-slate-900">{cat.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-700">Fund Types:</p>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {cat.types.map((type, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-3 bg-${cat.color}-100 rounded-lg`}>
                  <p className="text-xs text-slate-700">
                    <strong>Focus:</strong> {cat.focus}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Who Is This For */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-6 h-6 text-pink-600" /> Who Should Invest in AIFs?
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Ideal Candidates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Accredited & high-net-worth investors (HNIs)",
                "Family offices and institutional investors",
                "Seeking differentiated returns & low correlation with public markets",
                "Comfortable with 3-10 year lock-ins and illiquidity",
                "Access to private assets, startups, real estate",
                "Those who understand complex strategies and risks"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Not Recommended For
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Retail investors or first-time investors",
                "Those needing liquidity or regular income",
                "Risk-averse individuals seeking capital protection",
                "Investors without understanding of private markets",
                "Anyone not meeting ₹1 crore minimum investment",
                "Those expecting quick returns or easy exits"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Rocket className="w-6 h-6 text-purple-600" /> What to Expect from AIFs
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "High Returns Potential",
              desc: "15-25% IRR for PE/VC, potentially higher for Category III hedge strategies",
              icon: <TrendingUp className="w-5 h-5" />,
              color: "emerald"
            },
            {
              title: "Long Lock-Ins",
              desc: "3-10 years typical for PE/VC. Category III may have shorter lock-ins (1-3 years)",
              icon: <Lock className="w-5 h-5" />,
              color: "amber"
            },
            {
              title: "Illiquidity",
              desc: "No daily redemptions. Exit only via fund liquidation, secondary sale, or IPO",
              icon: <Clock className="w-5 h-5" />,
              color: "red"
            },
            {
              title: "Complexity",
              desc: "Derivatives, leverage, private deals, distressed assets — not simple",
              icon: <Zap className="w-5 h-5" />,
              color: "purple"
            }
          ].map((item, i) => (
            <Card key={i} className={`border-${item.color}-200 bg-${item.color}-50/50 shadow-sm`}>
              <CardHeader className="pb-3">
                <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center text-${item.color}-700 mb-2`}>
                  {item.icon}
                </div>
                <CardTitle className="text-md text-slate-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Costs & Charges */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-amber-600" /> Costs & Charges
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-amber-200 bg-amber-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-2">
                <DollarSign className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Management Fee</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-2xl font-bold text-amber-700">1.5% - 2.5%</p>
              <p className="text-xs text-slate-600">Per annum on committed capital or AUM (varies by strategy)</p>
              <div className="pt-2 mt-2 border-t border-amber-200">
                <p className="text-xs text-slate-500">Example: ₹1 Cr commitment = ₹1.5-2.5L annual fee</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                <TrendingUp className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Performance / Carry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-2xl font-bold text-purple-700">10% - 25%</p>
              <p className="text-xs text-slate-600">Of profits above hurdle rate (typically 8-10% IRR threshold)</p>
              <div className="pt-2 mt-2 border-t border-purple-200">
                <p className="text-xs text-slate-500">Only paid on realized gains, not unrealized</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-slate-50 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 mb-2">
                <Shield className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Other Charges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="text-xs text-slate-600 space-y-1.5">
                <li>• Setup & legal fees</li>
                <li>• Administration fees</li>
                <li>• Audit & compliance</li>
                <li>• Exit/transaction fees</li>
                <li>• Monitoring fees</li>
              </ul>
              <div className="pt-2 mt-2 border-t border-slate-200">
                <p className="text-xs text-slate-500">Can add 0.5-1% to total cost</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="p-4 bg-amber-100 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>💰 Total Cost Reality:</strong> AIFs are expensive—expect 2-4% annual drag on returns. The high fees are justified only if the fund delivers IRRs of 18%+ consistently.
          </p>
        </div>
      </section>

      {/* Taxation */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" /> Taxation & Structure
        </h3>

        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">Tax Treatment</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">Private Equity/VC</p>
                    <p className="text-sm text-slate-600">Long-term capital gains (LTCG) at 20% with indexation after 36 months for unlisted shares</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">Hedge Funds</p>
                    <p className="text-sm text-slate-600">Depends on underlying assets—equity, debt, or derivatives taxation applies</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">Real Assets</p>
                    <p className="text-sm text-slate-600">Real estate/infrastructure gains taxed as capital gains, indexation benefits available</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">Complex Structures</h4>
                <div className="p-4 bg-white rounded-lg border border-blue-100 space-y-2">
                  <p className="text-xs text-slate-700">
                    • Carried interest taxation varies<br/>
                    • Fund-level vs pass-through taxation<br/>
                    • International structures add complexity<br/>
                    • Offshore fund domiciles (Mauritius, Singapore)<br/>
                    • TDS on distributions may apply
                  </p>
                </div>
                <div className="p-3 bg-red-100 rounded-lg border border-red-200">
                  <p className="text-xs text-red-900">
                    <strong>⚠ Critical:</strong> AIF taxation is extremely complex. Consult a CA specializing in private funds before investing.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Entry Requirements */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-purple-600" /> Entry Requirements
        </h3>

        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white text-2xl font-bold">
                ₹
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Minimum Investment (SEBI Standard)</p>
                <p className="text-4xl font-bold text-purple-700">₹1 Crore</p>
                <p className="text-lg text-slate-500">(INR 10 Million)</p>
              </div>
              <div className="pt-4 space-y-3">
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-purple-100">
                    <p className="text-xs font-bold text-slate-700">Category I & II</p>
                    <p className="text-lg font-bold text-purple-700">₹1 Cr</p>
                    <p className="text-xs text-slate-500">Some allow ₹25L for angels</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-purple-100">
                    <p className="text-xs font-bold text-slate-700">Category III</p>
                    <p className="text-lg font-bold text-purple-700">₹1 Cr</p>
                    <p className="text-xs text-slate-500">Standard for hedge funds</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-purple-100">
                    <p className="text-xs font-bold text-slate-700">Top PE Funds</p>
                    <p className="text-lg font-bold text-purple-700">₹5-10 Cr</p>
                    <p className="text-xs text-slate-500">Premium funds higher</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-200">
                  <p className="text-xs text-purple-900">
                    <strong>SEBI Rule:</strong> ₹1 crore ensures only sophisticated investors with sufficient risk capital participate in alternative strategies.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Due Diligence Checklist */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" /> Due Diligence Checklist
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Fund Manager Quality",
              items: [
                "Track record: 10+ years in private markets",
                "Past fund IRRs vs benchmark",
                "Team stability and depth",
                "Investment philosophy alignment"
              ]
            },
            {
              title: "Strategy & Risk",
              items: [
                "Investment thesis clarity",
                "Portfolio concentration limits",
                "Use of leverage (if any)",
                "Downside protection mechanisms"
              ]
            },
            {
              title: "Terms & Structure",
              items: [
                "Lock-in period and liquidity windows",
                "Fee structure (2/20 model?)",
                "High-water mark for carry",
                "Exit rights and transfer restrictions"
              ]
            },
            {
              title: "Regulatory & Legal",
              items: [
                "SEBI registration verification",
                "Fund structure (trust/LLP/company)",
                "Custodian and auditor reputation",
                "Compliance history and disclosures"
              ]
            }
          ].map((section, i) => (
            <Card key={i} className="border-emerald-200 bg-emerald-50/30 shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-md text-emerald-900">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 bg-gradient-to-br from-purple-900 to-pink-900 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <Rocket className="w-8 h-8" />
          The AIF Reality Check
        </h4>
        <p className="text-purple-100 text-lg leading-relaxed">
          AIFs can deliver exceptional returns (20%+ IRR) but come with <strong>illiquidity, complexity, and high fees</strong>. Only 10-20% of funds consistently beat public market returns after fees.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-white">
              <strong>✓ Allocate AIFs only if:</strong><br/>
              • You have ₹5+ crore investable wealth<br/>
              • Can lock away 10-15% for 5-10 years<br/>
              • Understand private market risks<br/>
              • Have done thorough due diligence
            </p>
          </div>
          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-white">
              <strong>✗ Avoid AIFs if:</strong><br/>
              • This is your primary investment<br/>
              • You need liquidity or regular income<br/>
              • First-time investor in alternatives<br/>
              • Can't afford to lose the capital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIF;