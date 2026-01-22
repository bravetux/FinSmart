"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Shield,
  Zap,
  Target,
  Lock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Clock
} from "lucide-react";

const SIF = () => {
  return (
    <div className="space-y-10 pb-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>New SEBI Category • April 2025</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            SIF: The Middle Ground
          </h2>
          <p className="text-teal-50 text-lg max-w-3xl">
            Specialized Investment Funds (SIF) are SEBI's newest asset class—bridging retail mutual funds and high-ticket PMS with advanced strategies at accessible minimums.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Three-Way Comparison */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-teal-600" /> SIF vs PMS vs Mutual Funds
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-50 border-b-2 border-teal-200">
                <th className="p-3 text-left text-sm font-bold text-teal-900">Factor</th>
                <th className="p-3 text-center text-sm font-bold text-blue-900">Mutual Funds</th>
                <th className="p-3 text-center text-sm font-bold text-teal-900 bg-teal-100">SIF (NEW)</th>
                <th className="p-3 text-center text-sm font-bold text-purple-900">PMS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { factor: "Minimum Investment", mf: "₹500 - ₹5,000", sif: "₹10 Lakh", pms: "₹50 Lakh" },
                { factor: "Regulation", mf: "SEBI (strict)", sif: "SEBI (moderate)", pms: "SEBI (light)" },
                { factor: "Strategies", mf: "Vanilla long-only", sif: "Long-short, derivatives, unlisted", pms: "Fully customized" },
                { factor: "Liquidity", mf: "Daily / T+3", sif: "Daily or interval windows", pms: "Varies by portfolio" },
                { factor: "Unlisted Investments", mf: "Limited (10%)", sif: "Up to 30%", pms: "No limit" },
                { factor: "Derivatives Usage", mf: "Hedging only", sif: "Yes (strategies)", pms: "Yes (unlimited)" },
                { factor: "Management Fee", mf: "0.5% - 2.5%", sif: "1% - 2.5%", pms: "1.5% - 3%" },
                { factor: "Performance Fee", mf: "Rare", sif: "10% - 25% (common)", pms: "10% - 20%" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-3 text-sm font-medium text-slate-800">{row.factor}</td>
                  <td className="p-3 text-sm text-center text-slate-700">{row.mf}</td>
                  <td className="p-3 text-sm text-center font-bold text-teal-800 bg-teal-50/50">{row.sif}</td>
                  <td className="p-3 text-sm text-center text-slate-700">{row.pms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-teal-100 rounded-xl border border-teal-200">
          <p className="text-sm text-teal-900">
            <strong>💡 Sweet Spot:</strong> SIF gives you PMS-like strategies (derivatives, unlisted securities) at 1/5th the minimum investment of PMS, while offering more flexibility than traditional mutual funds.
          </p>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-6 h-6 text-cyan-600" /> Who Should Invest in SIFs?
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Perfect Candidates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "HNIs with ₹10L+ investable capital",
                "Sophisticated investors wanting advanced strategies",
                "Those priced out of PMS (₹50L minimum)",
                "Seeking better returns than vanilla mutual funds",
                "Comfortable with moderate complexity",
                "Understanding of derivatives and unlisted securities"
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
                Not Suitable For
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "First-time retail investors",
                "Those without ₹10 lakh minimum",
                "Investors needing guaranteed returns",
                "Risk-averse individuals",
                "Those unfamiliar with market volatility",
                "Anyone seeking daily liquidity with interval SIFs"
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

      {/* Advanced Strategies */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-600" /> Advanced Strategies Allowed
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Long-Short Equity",
              desc: "Buy undervalued stocks, short overvalued ones. Profit in both directions.",
              icon: <TrendingUp className="w-5 h-5" />,
              color: "blue"
            },
            {
              title: "Derivatives",
              desc: "Options & futures for hedging or generating alpha, not just protection.",
              icon: <Zap className="w-5 h-5" />,
              color: "amber"
            },
            {
              title: "Unlisted Securities",
              desc: "Up to 30% in pre-IPO companies, startups, private placements.",
              icon: <Lock className="w-5 h-5" />,
              color: "purple"
            },
            {
              title: "Sector Rotation",
              desc: "Dynamic allocation across sectors based on market cycles and momentum.",
              icon: <BarChart3 className="w-5 h-5" />,
              color: "emerald"
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

        <div className="p-4 bg-amber-100 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>⚡ Power Move:</strong> These strategies can generate 15-20% CAGR in skilled hands but require expertise. Not all SIF managers deliver—due diligence is critical.
          </p>
        </div>
      </section>

      {/* Structure & Liquidity */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-blue-600" /> Structure & Liquidity Options
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 mb-2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Open-Ended SIF</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">Daily NAV calculation, redemptions processed like mutual funds (T+3 to T+7).</p>
              <div className="p-3 bg-blue-100 rounded-lg">
                <p className="text-xs text-blue-900">
                  <strong>Best For:</strong> Investors wanting liquidity similar to mutual funds while accessing advanced strategies.
                </p>
              </div>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>✓ Daily liquidity</li>
                <li>✓ Flexibility to exit anytime</li>
                <li>✗ May limit certain illiquid strategies</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                <Lock className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Interval SIF</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-700">Redemption windows at fixed intervals (weekly, monthly, quarterly).</p>
              <div className="p-3 bg-purple-100 rounded-lg">
                <p className="text-xs text-purple-900">
                  <strong>Best For:</strong> Investors comfortable with lock-ins who want access to illiquid strategies (unlisted, long-short).
                </p>
              </div>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>✓ Higher return potential</li>
                <li>✓ Enables illiquid strategies</li>
                <li>✗ Limited liquidity windows</li>
              </ul>
            </CardContent>
          </Card>
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
              <p className="text-2xl font-bold text-amber-700">1% - 2.5%</p>
              <p className="text-xs text-slate-600">Per annum, varies by strategy complexity</p>
              <div className="pt-2 mt-2 border-t border-amber-200">
                <p className="text-xs text-slate-500">Example: ₹10L investment = ₹10K-25K annual fee</p>
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
              <p className="text-xs text-slate-600">Of profits above hurdle rate (typically 8-10%)</p>
              <div className="pt-2 mt-2 border-t border-purple-200">
                <p className="text-xs text-slate-500">High-water mark protection standard</p>
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
                <li>• Custody fees</li>
                <li>• Administration fees</li>
                <li>• Legal & setup</li>
                <li>• Audit charges</li>
                <li>• Exit loads (if any)</li>
              </ul>
              <div className="pt-2 mt-2 border-t border-slate-200">
                <p className="text-xs text-slate-500">Typically 0.3-0.5% total</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Taxation */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" /> Taxation
        </h3>

        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">Equity-Oriented SIF</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">If 65%+ in equity</p>
                    <p className="text-sm text-slate-600">LTCG: 10% above ₹1L (held &gt;1 year)<br/>STCG: 15% (held &lt;1 year)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">Debt-Oriented SIF</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">If &lt;65% in equity</p>
                    <p className="text-sm text-slate-600">LTCG: 20% with indexation (held &gt;3 years)<br/>STCG: Per slab rate (held &lt;3 years)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-100 rounded-lg border border-amber-200">
              <p className="text-xs text-amber-900">
                <strong>⚠ Note:</strong> Unlisted securities and derivatives may have different tax treatment. Consult a CA for your specific SIF structure.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Entry Requirements */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-teal-600" /> Entry Requirements
        </h3>

        <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600 text-white text-2xl font-bold">
                ₹
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Typical Minimum Investment</p>
                <p className="text-4xl font-bold text-teal-700">₹10 Lakh</p>
                <p className="text-lg text-slate-500">(INR 1 Million)</p>
              </div>
              <div className="pt-4 space-y-3">
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-700">Mutual Fund</p>
                    <p className="text-lg font-bold text-blue-700">₹500+</p>
                    <p className="text-xs text-slate-500">Retail accessible</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-teal-200 ring-2 ring-teal-400">
                    <p className="text-xs font-bold text-slate-700">SIF (NEW)</p>
                    <p className="text-lg font-bold text-teal-700">₹10L</p>
                    <p className="text-xs text-teal-600">Sweet spot</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-purple-100">
                    <p className="text-xs font-bold text-slate-700">PMS</p>
                    <p className="text-lg font-bold text-purple-700">₹50L</p>
                    <p className="text-xs text-slate-500">HNI focused</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-teal-200">
                  <p className="text-xs text-teal-900">
                    <strong>SEBI Framework:</strong> ₹10 lakh minimum ensures sophisticated investors while remaining more accessible than PMS (₹50L) or AIF (₹1Cr).
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 bg-gradient-to-br from-teal-900 to-cyan-900 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <Sparkles className="w-8 h-8" />
          The SIF Opportunity
        </h4>
        <p className="text-teal-100 text-lg leading-relaxed">
          SIFs unlock <strong>advanced strategies at 1/5th the cost of PMS</strong>. Launched April 2025, this is SEBI's answer to democratizing sophisticated investing for HNIs.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-white">
              <strong>✓ Consider SIF if:</strong><br/>
              • You have ₹10L+ to invest<br/>
              • Want more than vanilla MF returns<br/>
              • Can't meet ₹50L PMS minimum<br/>
              • Understand strategy risks
            </p>
          </div>
          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-white">
              <strong>⚠ Due Diligence Required:</strong><br/>
              • Manager track record (3+ years)<br/>
              • Strategy clarity and risk limits<br/>
              • Fee structure transparency<br/>
              • SEBI registration verification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIF;
