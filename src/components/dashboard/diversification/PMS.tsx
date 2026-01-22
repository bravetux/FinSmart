"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Shield,
  AlertTriangle,
  CheckCircle2,
  Target,
  Award,
  BarChart3,
  Clock
} from "lucide-react";

const PMS = () => {
  return (
    <div className="space-y-10 pb-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Briefcase className="w-4 h-4" />
            <span>Portfolio Management Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            PMS: Bespoke Wealth Management
          </h2>
          <p className="text-indigo-50 text-lg max-w-3xl">
            Customized, professionally managed portfolios for high-net-worth investors who want concentrated and tailored equity exposure with dedicated fund manager attention.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Key Highlights */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-6 h-6 text-indigo-600" /> What Makes PMS Different
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Customized Strategy",
              desc: "Your portfolio is built specifically for you—not a cookie-cutter solution. Aligned to your risk appetite, goals, and preferences.",
              color: "blue"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Dedicated Management",
              desc: "Direct access to fund managers. Your capital gets personalized attention, not lost in a crowd of thousands.",
              color: "purple"
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "Concentrated Portfolio",
              desc: "Typically 20-50 high-conviction stocks. More focused than mutual funds, higher potential returns (and risks).",
              color: "indigo"
            }
          ].map((item, i) => (
            <Card key={i} className={`border-${item.color}-200 bg-${item.color}-50/50 shadow-md hover:shadow-lg transition-shadow`}>
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center text-${item.color}-700 mb-3`}>
                  {item.icon}
                </div>
                <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Who Is This For */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" /> Is PMS Right for You?
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Perfect For
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "High Net Worth Individuals (HNIs) with ₹50L+ to invest",
                "Family offices seeking customized equity portfolios",
                "Investors who prefer active management with high conviction bets",
                "Those comfortable with concentrated exposures for potential outperformance",
                "Sophisticated investors who understand market volatility"
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
                "Beginner investors without market understanding",
                "Those seeking guaranteed returns or capital protection",
                "Investors who need high liquidity and quick exits",
                "Risk-averse individuals uncomfortable with volatility",
                "Anyone with investment horizon less than 3-5 years"
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
          <TrendingUp className="w-6 h-6 text-blue-600" /> What to Expect
        </h3>

        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">Portfolio Structure</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">Stock Count</p>
                    <p className="text-sm text-slate-600">20-50 carefully selected stocks (concentrated approach)</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">Strategy Types</p>
                    <p className="text-sm text-slate-600">Value, Growth, Sectoral, Momentum, Thematic</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">Rebalancing</p>
                    <p className="text-sm text-slate-600">Active monitoring and tactical adjustments by manager</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">Performance Characteristics</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-emerald-700 mb-1">✓ Potential Upside</p>
                    <p className="text-sm text-slate-600">Higher than diversified mutual funds due to concentration</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-amber-700 mb-1">⚠ Volatility</p>
                    <p className="text-sm text-slate-600">Higher short-term fluctuations vs. broad market indices</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-blue-700 mb-1">⏱ Time Horizon</p>
                    <p className="text-sm text-slate-600">Minimum 3-5 years recommended for best results</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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
                <FileText className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Management Fee</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-2xl font-bold text-amber-700">1.0% - 2.0%</p>
              <p className="text-xs text-slate-600">Per annum on assets under management (AUM)</p>
              <div className="pt-2 mt-2 border-t border-amber-200">
                <p className="text-xs text-slate-500">Example: ₹50L portfolio = ₹50K-₹1L annual fee</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                <TrendingUp className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Performance Fee</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-2xl font-bold text-purple-700">10% - 20%</p>
              <p className="text-xs text-slate-600">Of outperformance over benchmark (high-water mark/hurdle may apply)</p>
              <div className="pt-2 mt-2 border-t border-purple-200">
                <p className="text-xs text-slate-500">Only paid when manager beats the market</p>
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
                <li>• Transaction charges</li>
                <li>• Reporting & admin fees</li>
                <li>• GST on all fees</li>
              </ul>
              <div className="pt-2 mt-2 border-t border-slate-200">
                <p className="text-xs text-slate-500">Varies by PMS provider</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="p-4 bg-amber-100 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>💡 Cost Tip:</strong> Total PMS costs (2-3% annually) are higher than mutual funds (1-1.5%). The extra cost is justified only if the manager consistently outperforms the benchmark by 3-5%+.
          </p>
        </div>
      </section>

      {/* Taxation & Liquidity */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-emerald-600" /> Taxation & Liquidity
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-emerald-900">Tax Treatment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-emerald-100">
                <p className="text-xs font-bold text-slate-800 mb-2">Listed Equity Holdings</p>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc ml-4">
                  <li><strong>Short-term (&lt;1 year):</strong> 15% STCG tax</li>
                  <li><strong>Long-term (≥1 year):</strong> 10% LTCG tax on gains above ₹1 lakh</li>
                  <li>Securities Transaction Tax (STT) applies</li>
                </ul>
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <p className="text-xs text-emerald-900">
                  <strong>Note:</strong> Tax follows underlying securities. PMS structure itself is tax-transparent.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-blue-900">Liquidity Considerations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <p className="text-xs font-bold text-slate-800 mb-2">Exit Process</p>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc ml-4">
                  <li>Selling may take 3-7 days (market conditions apply)</li>
                  <li>Some PMS have minimum lock-in periods (1-3 years)</li>
                  <li>Early exit may attract penalties or reduced returns</li>
                  <li>Illiquid stocks in portfolio may delay full exit</li>
                </ul>
              </div>
              <div className="p-3 bg-amber-100 rounded-lg">
                <p className="text-xs text-amber-900">
                  <strong>⚠ Important:</strong> Not suitable for emergency funds or short-term goals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-indigo-600" /> Entry Requirements
        </h3>

        <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-2xl font-bold">
                ₹
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Minimum Investment (SEBI Regulated)</p>
                <p className="text-4xl font-bold text-indigo-700">₹50 Lakh</p>
                <p className="text-lg text-slate-500">(INR 5 Million)</p>
              </div>
              <div className="pt-4 space-y-2">
                <p className="text-sm text-slate-700">
                  Some managers may have higher minimums (₹1 crore+) depending on their strategy and reputation.
                </p>
                <div className="p-4 bg-white rounded-lg border border-indigo-200">
                  <p className="text-xs text-indigo-900">
                    <strong>Regulatory Note:</strong> SEBI mandates ₹50L minimum to ensure PMS is accessible only to sophisticated investors who can absorb the risks.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* When to Choose PMS */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-purple-600" /> When to Choose PMS Over Mutual Funds
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 to-purple-100">
                <th className="p-4 text-left font-bold text-slate-900">Factor</th>
                <th className="p-4 text-left font-bold text-purple-900">PMS</th>
                <th className="p-4 text-left font-bold text-blue-900">Mutual Funds</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              <tr className="border-t">
                <td className="p-3 font-semibold">Minimum Investment</td>
                <td className="p-3 text-purple-700">₹50 lakh</td>
                <td className="p-3 text-blue-700">₹500 (SIP), ₹5,000 (lumpsum)</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-3 font-semibold">Customization</td>
                <td className="p-3 text-purple-700">✓ Fully customized to your needs</td>
                <td className="p-3 text-slate-600">✗ Standard portfolio for all</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-semibold">Portfolio Size</td>
                <td className="p-3 text-purple-700">20-50 stocks (concentrated)</td>
                <td className="p-3 text-blue-700">50-100+ stocks (diversified)</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-3 font-semibold">Manager Access</td>
                <td className="p-3 text-purple-700">✓ Direct interaction possible</td>
                <td className="p-3 text-slate-600">✗ No direct access</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-semibold">Annual Costs</td>
                <td className="p-3 text-purple-700">2-3% (mgmt + performance)</td>
                <td className="p-3 text-blue-700">1-1.5% (expense ratio)</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-3 font-semibold">Liquidity</td>
                <td className="p-3 text-amber-700">Lower (3-7 days, lock-ins)</td>
                <td className="p-3 text-emerald-700">Higher (1-3 days)</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-semibold">Volatility</td>
                <td className="p-3 text-amber-700">Higher (concentrated bets)</td>
                <td className="p-3 text-blue-700">Lower (diversified)</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-3 font-semibold">Best For</td>
                <td className="p-3 text-purple-700">HNIs, sophisticated investors</td>
                <td className="p-3 text-blue-700">All investors, beginners</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <Briefcase className="w-8 h-8" />
          Bottom Line
        </h4>
        <p className="text-indigo-100 text-lg leading-relaxed">
          PMS is best when you want a <strong>bespoke, actively managed equity allocation</strong> and can tolerate concentration risk and reduced liquidity.
        </p>
        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
          <p className="text-sm text-white">
            <strong>Before committing:</strong> Speak with the manager about fee structures, benchmark comparisons, lock-in periods, and past performance track record. Review at least 5-7 years of audited returns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PMS;