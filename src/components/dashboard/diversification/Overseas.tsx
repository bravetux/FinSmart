"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  TrendingUp, 
  DollarSign, 
  Building2, 
  Wallet, 
  ShieldCheck,
  BarChart3,
  Landmark,
  Coins,
  AlertCircle,
  CheckCircle2,
  IndianRupee
} from "lucide-react";

const Overseas = () => {
  return (
    <div className="space-y-10 pb-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Globe className="w-4 h-4" />
            <span>Global Investment Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Overseas Investment from India
          </h2>
          <p className="text-blue-50 text-lg max-w-3xl">
            Take your capital global while staying firmly inside RBI's rulebook. Old-school discipline, new-age access—let's break it down, step by step.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Investment Options Overview */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-600" /> Investment Options at a Glance
        </h3>
        <p className="text-sm text-slate-600">
          From stocks to real estate, here are all the ways Indians can invest globally, each with its own access route, risk profile, and regulatory framework.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Foreign Stocks & ETFs",
              access: "Via Indian or foreign brokers",
              examples: "Apple, Microsoft, Tesla, S&P 500 ETF, Nasdaq ETF",
              minInvest: "₹500 onwards",
              liquidity: "High",
              risk: "Medium to High",
              color: "blue"
            },
            {
              icon: <Wallet className="w-6 h-6" />,
              title: "International Mutual Funds",
              access: "Through Indian AMCs",
              examples: "US Equity Funds, Global Tech Funds, Emerging Market Funds",
              minInvest: "₹100 SIP onwards",
              liquidity: "High",
              risk: "Medium",
              color: "purple"
            },
            {
              icon: <Building2 className="w-6 h-6" />,
              title: "Foreign Real Estate",
              access: "Direct purchase or REITs",
              examples: "US Property, Dubai Real Estate, Global REIT ETFs",
              minInvest: "₹50L+ (direct), ₹500 (REITs)",
              liquidity: "Low (direct), High (REITs)",
              risk: "Medium to High",
              color: "orange"
            },
            {
              icon: <Coins className="w-6 h-6" />,
              title: "Foreign Bonds",
              access: "Foreign brokers or bond platforms",
              examples: "US Treasury Bonds, Corporate Bonds, Global Bond ETFs",
              minInvest: "₹1L onwards",
              liquidity: "Medium",
              risk: "Low to Medium",
              color: "emerald"
            },
            {
              icon: <DollarSign className="w-6 h-6" />,
              title: "Foreign Currency Accounts",
              access: "Banks with forex services",
              examples: "USD accounts, EUR accounts, Multi-currency wallets",
              minInvest: "₹1L onwards",
              liquidity: "High",
              risk: "Low (FX risk only)",
              color: "amber"
            },
            {
              icon: <Landmark className="w-6 h-6" />,
              title: "Foreign Startups/PE",
              access: "Angel networks, PE funds",
              examples: "US startups, Foreign VC funds, Global PE opportunities",
              minInvest: "₹25L+ (typically)",
              liquidity: "Very Low",
              risk: "Very High",
              color: "red"
            }
          ].map((option, i) => (
            <Card key={i} className={`border-${option.color}-200 bg-${option.color}-50/30 shadow-md hover:shadow-lg transition-shadow`}>
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg bg-${option.color}-100 flex items-center justify-center text-${option.color}-700 mb-3`}>
                  {option.icon}
                </div>
                <CardTitle className="text-lg text-slate-900">{option.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-xs">
                  <div>
                    <p className="font-semibold text-slate-700">Access:</p>
                    <p className="text-slate-600">{option.access}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700">Examples:</p>
                    <p className="text-slate-600">{option.examples}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className={`p-2 bg-white rounded-lg border border-${option.color}-100`}>
                      <p className="text-[10px] font-semibold text-slate-700">Min. Investment</p>
                      <p className={`text-xs font-bold text-${option.color}-700`}>{option.minInvest}</p>
                    </div>
                    <div className={`p-2 bg-white rounded-lg border border-${option.color}-100`}>
                      <p className="text-[10px] font-semibold text-slate-700">Liquidity</p>
                      <p className={`text-xs font-bold text-${option.color}-700`}>{option.liquidity}</p>
                    </div>
                  </div>
                  <div className={`p-2 bg-${option.color}-100 rounded-lg`}>
                    <p className="text-[10px] font-semibold text-slate-700">Risk Level</p>
                    <p className={`text-xs font-bold text-${option.color}-800`}>{option.risk}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">Quick Comparison Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-3 text-left font-semibold">Investment Type</th>
                <th className="p-3 text-left font-semibold">Best For</th>
                <th className="p-3 text-left font-semibold">Access Difficulty</th>
                <th className="p-3 text-left font-semibold">Tax Treatment</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">Foreign Stocks/ETFs</td>
                <td className="p-3">Active investors, diversification</td>
                <td className="p-3 text-emerald-700">Easy (Indian brokers)</td>
                <td className="p-3">20% LTCG + TCS</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-3 font-medium">International MFs</td>
                <td className="p-3">Beginners, hands-off investors</td>
                <td className="p-3 text-emerald-700">Very Easy</td>
                <td className="p-3">20% LTCG + TCS</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Foreign Real Estate</td>
                <td className="p-3">HNIs, long-term wealth</td>
                <td className="p-3 text-red-700">Difficult</td>
                <td className="p-3">Complex (local + India)</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-3 font-medium">Foreign Bonds</td>
                <td className="p-3">Conservative investors</td>
                <td className="p-3 text-amber-700">Moderate</td>
                <td className="p-3">20% LTCG + TCS</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Forex Accounts</td>
                <td className="p-3">Currency diversification</td>
                <td className="p-3 text-emerald-700">Easy</td>
                <td className="p-3">Gains taxable at slab</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-3 font-medium">Foreign Startups/PE</td>
                <td className="p-3">Ultra HNIs, risk appetite</td>
                <td className="p-3 text-red-700">Very Difficult</td>
                <td className="p-3">20% LTCG + complex</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* LRS Framework */}
      <Card className="border-blue-200 bg-blue-50/50 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            The Legal Backbone: LRS (Liberalised Remittance Scheme)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-700">
          <p className="text-sm">
            India doesn't block overseas investing—it regulates it smartly through the RBI's framework.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <p className="text-sm font-bold text-blue-800 mb-3">Key Rules</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Governed by Reserve Bank of India</li>
                  <li>Under Liberalised Remittance Scheme</li>
                  <li><strong className="text-blue-700">Limit: USD 250,000 per financial year per person</strong></li>
                  <li>Family of 4 = USD 1 million combined per year</li>
                  <li>No restrictions on frequency of remittances</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-white rounded-lg border border-blue-100">
                <p className="text-sm font-bold text-emerald-800 mb-3">What's Covered</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Foreign stocks & ETFs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Overseas mutual funds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Foreign bonds & fixed deposits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Property abroad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Startup investments & PE funds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Education expenses abroad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-100 rounded-lg border border-blue-200">
            <p className="text-sm font-bold text-blue-900">
              👉 Translation: If it's legal and within the USD 250K limit, you're good to go.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Practical Ways to Invest */}
      <Card className="border-slate-200 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">Practical Ways to Invest Abroad (Pick Your Weapon)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-slate-700">
          
          {/* Option A */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-blue-700">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">A</span>
              Indian Brokers with Global Access (Beginner-friendly)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="font-semibold text-sm mb-2">Popular Platforms:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm">
                    <li>Vested Finance</li>
                    <li>INDmoney</li>
                    <li>Groww</li>
                    <li>Winvesta</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="font-semibold text-sm mb-2">How it works:</p>
                  <ol className="list-decimal pl-5 space-y-1.5 text-sm">
                    <li>Open account (PAN + KYC)</li>
                    <li>Link Indian bank</li>
                    <li>USD remittance under LRS</li>
                    <li>Buy US stocks/ETFs (Apple, S&P 500, Nasdaq)</li>
                  </ol>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="font-semibold text-sm text-emerald-900 mb-2">✓ Pros:</p>
                  <ul className="text-sm text-slate-700 space-y-1 list-disc ml-4">
                    <li>Simple, low learning curve</li>
                    <li>Indian interface & support</li>
                    <li>Handles LRS compliance automatically</li>
                    <li>Start with small amounts</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="font-semibold text-sm text-red-900 mb-2">✗ Cons:</p>
                  <ul className="text-sm text-slate-700 space-y-1 list-disc ml-4">
                    <li>Slightly higher FX & platform fees</li>
                    <li>Limited to US markets mostly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Option B */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-purple-700">
              <span className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">B</span>
              Direct Foreign Broker Accounts (Power-user mode)
            </h3>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <p className="font-semibold text-sm mb-2">Popular choice: Interactive Brokers</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <p className="font-semibold text-sm mb-2">Why pros love this:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm">
                  <li>Ultra-low brokerage</li>
                  <li>Access to 100+ global markets</li>
                  <li>Serious tools (options, bonds, futures)</li>
                  <li>Direct custody of assets</li>
                </ul>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-semibold text-sm mb-2 text-amber-900">Reality check:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                  <li>More paperwork & setup complexity</li>
                  <li>You handle remittance + compliance yourself</li>
                  <li>Steeper learning curve</li>
                </ul>
                <p className="mt-3 text-sm font-medium text-slate-800">
                  This is not a weekend hobby—this is institutional-grade investing.
                </p>
              </div>
            </div>
          </div>

          {/* Option C */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-emerald-700">
              <span className="bg-emerald-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">C</span>
              GIFT City Route (India's global gateway 🇮🇳➡️🌐)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <p className="font-semibold text-sm mb-2">Via:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm">
                  <li>GIFT City, Gujarat</li>
                  <li>NSE IFSC</li>
                </ul>
                <p className="font-semibold text-sm mt-4 mb-2">You can invest in:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm">
                  <li>US stocks</li>
                  <li>Global ETFs</li>
                  <li>Dollar-denominated instruments</li>
                </ul>
              </div>

              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="font-semibold text-sm mb-2 text-emerald-900">Why this matters:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                  <li>Indian jurisdiction (easier compliance)</li>
                  <li>Lower regulatory friction</li>
                  <li>Still evolving, but big future upside</li>
                  <li>No TCS on initial investment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option D */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-blue-700">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">D</span>
              International Mutual Funds via India (Hands-off style)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <p className="font-semibold text-sm mb-2">Available through Indian AMCs:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm">
                  <li>US equity funds</li>
                  <li>Global tech funds</li>
                  <li>Nasdaq / S&P 500 feeder funds</li>
                  <li>Emerging markets funds</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-semibold text-sm mb-2 text-blue-900">Good for:</p>
                <p className="text-sm text-slate-700">
                  People who want global exposure without daily stock-picking drama. SIP-friendly, beginner-friendly, zero remittance hassle.
                </p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Taxes */}
      <Card className="border-amber-200 bg-amber-50/50 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <IndianRupee className="w-6 h-6 text-amber-600" />
            Taxes — The Part Everyone Tries to Ignore (Don't)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-slate-700">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-amber-100">
              <p className="font-semibold text-sm mb-3 text-amber-800">🔹 At the time of remittance</p>
              <p className="font-semibold text-sm">TCS (Tax Collected at Source):</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm mt-2">
                <li>20% on remittance amount</li>
                <li>Not an extra tax—just advance tax collection</li>
                <li>Adjustable/refundable in ITR</li>
                <li>Cash-flow pain upfront</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-lg border border-amber-100">
              <p className="font-semibold text-sm mb-3 text-amber-800">🔹 On gains</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Short-term (&lt;24 months):</strong> Taxed at your income slab rate</li>
                <li><strong>Long-term (≥24 months):</strong> 20% with indexation benefit</li>
                <li><strong>Dividends:</strong> Taxed at slab rate in India</li>
                <li><strong>DTAA benefits:</strong> US taxes withheld can be adjusted against Indian tax</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-amber-100 rounded-lg border border-amber-300">
            <p className="text-sm font-bold text-amber-900">
              📌 Bottom line: Overseas investing is tax-heavy if you're sloppy. Precision matters. Keep records of all transactions, FX rates, and remittances.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Risk Management */}
      <Card className="border-red-200 bg-red-50/50 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-600" />
            Risk Management — Don't YOLO Internationally
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-700">
          <p className="font-semibold text-sm">Let's be brutally honest:</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border border-red-100">
              <p className="text-xs font-bold text-red-800 mb-2">Currency Risk</p>
              <p className="text-xs text-slate-600">
                Rupee depreciation helps returns, but appreciation can wipe gains. FX cuts both ways.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-red-100">
              <p className="text-xs font-bold text-red-800 mb-2">Regulatory Changes</p>
              <p className="text-xs text-slate-600">
                LRS limits, TCS rates, or tax laws can change. Stay updated.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-red-100">
              <p className="text-xs font-bold text-red-800 mb-2">Market Correlation</p>
              <p className="text-xs text-slate-600">
                Foreign markets aren't always greener. Sometimes they crash harder.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl border border-red-200">
            <p className="font-semibold text-base text-slate-900 mb-2">Classic rule (still undefeated):</p>
            <p className="text-sm text-slate-800">
              Keep <strong>10–25% of portfolio overseas</strong> for diversification—not ego. The goal is risk reduction, not bragging rights.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Starter Strategy */}
      <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            A Sane Starter Strategy (Battle-tested)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-700">
          <p className="font-semibold text-sm">If you want clarity, not chaos:</p>
          
          <div className="space-y-3">
            {[
              { pct: "60–70%", desc: "Indian equity & debt (home advantage)" },
              { pct: "15–20%", desc: "US index ETFs (S&P 500 / Nasdaq 100)" },
              { pct: "5–10%", desc: "Global thematic funds (tech, healthcare, emerging markets)" },
              { pct: "Rest", desc: "Gold / bonds / liquidity buffer" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-white rounded-lg border border-emerald-100">
                <div className="bg-emerald-600 text-white px-3 py-2 rounded-lg font-bold text-sm shrink-0">
                  {item.pct}
                </div>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-emerald-100 rounded-lg border border-emerald-200 mt-4">
            <p className="font-semibold text-sm text-emerald-900">
              Old wisdom + global exposure = long-term compounding machine.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Final Word */}
      <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold">Final Word</h4>
        <p className="text-slate-300 text-lg leading-relaxed">
          Overseas investing isn't about chasing hype—it's about <strong>currency diversification, geopolitical balance, and valuation arbitrage.</strong>
        </p>
        <p className="text-slate-300 leading-relaxed">
          Do it calmly, do it legally, and let time do the heavy lifting. The world is your oyster, but discipline is still your compass.
        </p>
      </div>
    </div>
  );
};

export default Overseas;
