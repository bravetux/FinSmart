"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  TrendingUp, 
  Rocket, 
  Crown,
  Zap,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  PiggyBank,
  BarChart3,
  Wallet,
  Sparkles,
  Users
} from "lucide-react";

const Milestones = () => {
  return (
    <div className="space-y-10 pb-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Target className="w-4 h-4" />
            <span>Wealth Building Milestones</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Journey to ₹1 Crore+
          </h2>
          <p className="text-blue-50 text-lg max-w-3xl">
            Every wealth journey has clear milestones. Here's your roadmap from ₹1 lakh to ₹1 crore and beyond—with actionable strategies for each stage.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Milestone 1: First ₹1 Lakh */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <PiggyBank className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Milestone 1: First ₹1 Lakh</h3>
            <p className="text-sm text-slate-600">The Hardest Milestone — Building the Habit</p>
          </div>
        </div>

        <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-bold text-emerald-900">Core Strategies</h4>
                <div className="space-y-3">
                  {[
                    { title: "Track Every Rupee", desc: "Use apps like Money Manager, Walnut, or Excel. Know where your money goes." },
                    { title: "50/30/20 Rule", desc: "50% needs, 30% wants, 20% savings. Start with even 10% if tight." },
                    { title: "Automate Savings", desc: "Set up auto-transfer on salary day. Pay yourself first before expenses." },
                    { title: "Kill Small Leaks", desc: "₹200/day coffee = ₹6K/month = ₹72K/year. Small cuts compound." }
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-emerald-100">
                      <p className="text-xs font-bold text-slate-800 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-emerald-900">Timeline & Action Plan</h4>
                <div className="p-4 bg-white rounded-lg border border-emerald-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Monthly Income:</span>
                    <span className="text-lg font-bold text-emerald-700">₹30K - ₹50K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Save Monthly:</span>
                    <span className="text-lg font-bold text-emerald-700">₹5K - ₹10K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Timeline:</span>
                    <span className="text-lg font-bold text-emerald-700">10-20 months</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-emerald-100">
                    <p className="text-xs text-slate-600">
                      <strong>Investment:</strong> Start with Liquid/Overnight Fund (Groww, Zerodha Coin). Keep emergency fund liquid, not in FD.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-amber-100 rounded-lg border border-amber-200">
                  <p className="text-xs text-amber-900">
                    <strong>⚡ Hack:</strong> Invest 100% of bonuses, tax refunds, or side income. Don't lifestyle inflate.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Milestone 2: ₹10 Lakh */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Milestone 2: ₹10 Lakh</h3>
            <p className="text-sm text-slate-600">Building Momentum — Diversification Begins</p>
          </div>
        </div>

        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">Core Strategies</h4>
                <div className="space-y-3">
                  {[
                    { title: "Increase Savings Rate", desc: "Move from 20% to 30-40%. Every salary hike = higher SIP amount." },
                    { title: "Start Equity Exposure", desc: "Begin Nifty 50 / Sensex index funds. 60% equity, 40% debt for balanced risk." },
                    { title: "Employer Benefits", desc: "Maximize EPF contribution, use NPS for 80CCD(1B) tax benefit (₹50K extra)." },
                    { title: "Side Income Stream", desc: "Freelancing, part-time work, skills monetization adds ₹5K-15K/month." }
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-blue-100">
                      <p className="text-xs font-bold text-slate-800 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">Timeline & Action Plan</h4>
                <div className="p-4 bg-white rounded-lg border border-blue-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Monthly Income:</span>
                    <span className="text-lg font-bold text-blue-700">₹50K - ₹1L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Save Monthly:</span>
                    <span className="text-lg font-bold text-blue-700">₹15K - ₹30K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Timeline:</span>
                    <span className="text-lg font-bold text-blue-700">3-5 years</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-blue-100">
                    <p className="text-xs text-slate-600">
                      <strong>Investment Mix:</strong> 60% Equity (Index Funds), 30% Debt (PPF/Debt MF), 10% Liquid (Emergency Fund).
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-purple-100 rounded-lg border border-purple-200">
                  <p className="text-xs text-purple-900">
                    <strong>🎯 Focus:</strong> Don't chase stocks. Stick to index funds. At ₹10L, stock picking is risky without expertise.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Milestone 3: ₹25 Lakh */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Milestone 3: ₹25 Lakh</h3>
            <p className="text-sm text-slate-600">Critical Mass — Options Expand</p>
          </div>
        </div>

        <Card className="border-purple-200 bg-purple-50/50 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-bold text-purple-900">Core Strategies</h4>
                <div className="space-y-3">
                  {[
                    { title: "Aggressive Equity", desc: "Move to 70-80% equity allocation. Young investors can handle volatility." },
                    { title: "Add Mid/Small Cap", desc: "10-15% in mid/small cap funds for higher growth. Rest in large cap/index." },
                    { title: "Tax Optimization", desc: "80C (₹1.5L), 80CCD(1B) (₹50K), HRA, home loan interest—save ₹50K+ in taxes." },
                    { title: "Real Estate Down Payment", desc: "Use ₹5-7L as home down payment if buying. Leverage starts working for you." }
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-purple-100">
                      <p className="text-xs font-bold text-slate-800 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-purple-900">Timeline & Action Plan</h4>
                <div className="p-4 bg-white rounded-lg border border-purple-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Monthly Income:</span>
                    <span className="text-lg font-bold text-purple-700">₹1L - ₹1.5L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Save Monthly:</span>
                    <span className="text-lg font-bold text-purple-700">₹30K - ₹50K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Timeline from ₹10L:</span>
                    <span className="text-lg font-bold text-purple-700">3-4 years</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-purple-100">
                    <p className="text-xs text-slate-600">
                      <strong>Investment Mix:</strong> 75% Equity (60% Large/Index, 15% Mid/Small), 20% Debt, 5% Gold ETF.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-indigo-100 rounded-lg border border-indigo-200">
                  <p className="text-xs text-indigo-900">
                    <strong>💎 Wealth Secret:</strong> At ₹25L, compounding starts showing power. A 12% return = ₹3L/year passive growth.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Milestone 4: ₹50 Lakh */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Milestone 4: ₹50 Lakh</h3>
            <p className="text-sm text-slate-600">Upper Middle Class — PMS Access Opens</p>
          </div>
        </div>

        <Card className="border-indigo-200 bg-indigo-50/50 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-bold text-indigo-900">Core Strategies</h4>
                <div className="space-y-3">
                  {[
                    { title: "Consider PMS", desc: "₹50L unlocks Portfolio Management Services. Research before jumping—fees are high (2%+)." },
                    { title: "Direct Stocks (Optional)", desc: "If you've learned, allocate 10-20% to direct stocks. But index still beats most." },
                    { title: "International Diversification", desc: "5-10% in US/Global index funds via Nifty BeES, Motilal S&P 500, or Nasdaq 100." },
                    { title: "Estate Planning Begins", desc: "Nominations, will, term insurance (₹1-2Cr cover). Protect family from risks." }
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-indigo-100">
                      <p className="text-xs font-bold text-slate-800 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-indigo-900">Timeline & Action Plan</h4>
                <div className="p-4 bg-white rounded-lg border border-indigo-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Monthly Income:</span>
                    <span className="text-lg font-bold text-indigo-700">₹1.5L - ₹2.5L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Save Monthly:</span>
                    <span className="text-lg font-bold text-indigo-700">₹50K - ₹80K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Timeline from ₹25L:</span>
                    <span className="text-lg font-bold text-indigo-700">3-4 years</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-indigo-100">
                    <p className="text-xs text-slate-600">
                      <strong>Investment Mix:</strong> 70% Equity (50% Index, 15% Mid/Small, 5% Direct/PMS), 20% Debt, 10% Gold/International.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-amber-100 rounded-lg border border-amber-200">
                  <p className="text-xs text-amber-900">
                    <strong>⚠️ Warning:</strong> Don't lifestyle inflate. ₹50L can evaporate fast with luxury car EMI or overspending.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Milestone 5: ₹1 Crore */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Milestone 5: ₹1 Crore</h3>
            <p className="text-sm text-slate-600">HNI Status — Wealth Compounding Accelerates</p>
          </div>
        </div>

        <Card className="border-amber-200 bg-amber-50/50 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-bold text-amber-900">Core Strategies</h4>
                <div className="space-y-3">
                  {[
                    { title: "Full Diversification", desc: "Equity (60%), Real Estate (15%), Debt (15%), Gold (5%), International (5%). True asset allocation." },
                    { title: "Passive Income Focus", desc: "₹1Cr @ 12% = ₹12L/year passive. Dividend stocks, rental income start making sense." },
                    { title: "AIF/PMS Access", desc: "₹1Cr unlocks Alternative Investment Funds. Private equity, venture capital, hedge funds." },
                    { title: "Tax-Efficient Withdrawals", desc: "LTCG on equity (10% above ₹1L), debt indexation. Plan withdrawals to minimize tax." }
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-amber-100">
                      <p className="text-xs font-bold text-slate-800 mb-1">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-amber-900">Timeline & Action Plan</h4>
                <div className="p-4 bg-white rounded-lg border border-amber-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Monthly Income:</span>
                    <span className="text-lg font-bold text-amber-700">₹2L - ₹4L+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Save Monthly:</span>
                    <span className="text-lg font-bold text-amber-700">₹80K - ₹1.5L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-700">Timeline from ₹50L:</span>
                    <span className="text-lg font-bold text-amber-700">3-5 years</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-amber-100">
                    <p className="text-xs text-slate-600">
                      <strong>Total Journey:</strong> From ₹0 to ₹1Cr typically takes 10-15 years with consistent 30-40% savings rate.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-emerald-100 rounded-lg border border-emerald-200">
                  <p className="text-xs text-emerald-900">
                    <strong>🎉 Congratulations:</strong> You're in the top 1% of Indian households. Financial independence is achievable now.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Middle Class Journey to ₹1 Crore */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Middle Class Path to ₹1 Crore</h3>
            <p className="text-sm text-slate-600">Real-World Example: ₹8 LPA Salary, ₹1 LPA Savings</p>
          </div>
        </div>

        <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-6">
              {/* Starting Point */}
              <div className="p-5 bg-white rounded-xl border-2 border-teal-200 shadow-sm">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Annual Salary</p>
                    <p className="text-3xl font-bold text-teal-700">₹8 LPA</p>
                    <p className="text-xs text-slate-500">₹66,667/month</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Annual Savings</p>
                    <p className="text-3xl font-bold text-teal-700">₹1 LPA</p>
                    <p className="text-xs text-slate-500">₹8,333/month</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Savings Rate</p>
                    <p className="text-3xl font-bold text-teal-700">12.5%</p>
                    <p className="text-xs text-slate-500">Room to improve</p>
                  </div>
                </div>
              </div>

              {/* 25-Year Journey Breakdown */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-teal-900">Your 25-Year Journey to ₹1 Crore</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-teal-100 border-b-2 border-teal-300">
                        <th className="p-3 text-left text-sm font-bold text-teal-900">Year</th>
                        <th className="p-3 text-center text-sm font-bold text-teal-900">Age</th>
                        <th className="p-3 text-center text-sm font-bold text-teal-900">Annual Savings</th>
                        <th className="p-3 text-center text-sm font-bold text-teal-900">Corpus Value</th>
                        <th className="p-3 text-center text-sm font-bold text-teal-900">Annual Returns</th>
                        <th className="p-3 text-center text-sm font-bold text-teal-900">Total Invested</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { year: 1, age: 28, savings: "₹1.0L", corpus: "₹1.12L", returns: "₹0.12L", invested: "₹1L" },
                        { year: 5, age: 32, savings: "₹1.0L", corpus: "₹6.35L", returns: "₹1.35L", invested: "₹5L" },
                        { year: 10, age: 37, savings: "₹1.2L", corpus: "₹17.5L", returns: "₹5.5L", invested: "₹12L" },
                        { year: 15, age: 42, savings: "₹1.5L", corpus: "₹37.3L", returns: "₹15.3L", invested: "₹22L" },
                        { year: 20, age: 47, savings: "₹2.0L", corpus: "₹72.1L", returns: "₹36.1L", invested: "₹36L" },
                        { year: 25, age: 52, savings: "₹2.5L", corpus: "₹1.33Cr", returns: "₹80L", invested: "₹53L" }
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-teal-100 hover:bg-teal-50 ${row.year === 25 ? 'bg-emerald-100 font-bold' : ''}`}>
                          <td className="p-3 text-sm font-medium text-slate-800">{row.year}</td>
                          <td className="p-3 text-sm text-center text-slate-700">{row.age}</td>
                          <td className="p-3 text-sm text-center text-slate-700">{row.savings}</td>
                          <td className="p-3 text-sm text-center font-bold text-teal-700">{row.corpus}</td>
                          <td className="p-3 text-sm text-center text-emerald-700">{row.returns}</td>
                          <td className="p-3 text-sm text-center text-slate-600">{row.invested}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-emerald-100 rounded-xl border border-emerald-200">
                  <p className="text-sm text-emerald-900">
                    <strong>🎯 Success Formula:</strong> Starting at age 28, saving ₹8,333/month (increasing by 5% annually with salary hikes), investing in equity index funds at 12% CAGR, you reach <strong>₹1.33 Crore by age 52</strong>. Your ₹53L investment grows by ₹80L through compounding!
                  </p>
                </div>
              </div>

              {/* Key Assumptions & Reality Check */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-teal-200">
                  <h5 className="text-sm font-bold text-teal-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Key Assumptions
                  </h5>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• <strong>12% CAGR:</strong> Equity index funds (Nifty 50) long-term average</li>
                    <li>• <strong>5% Salary Hike:</strong> Conservative annual increment</li>
                    <li>• <strong>Savings Rate Grows:</strong> From 12.5% to 20% as expenses stabilize</li>
                    <li>• <strong>No Breaks:</strong> Continuous investing for 25 years (hardest part!)</li>
                    <li>• <strong>No Lifestyle Inflation:</strong> Don't upgrade lifestyle with every hike</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-xl border border-teal-200">
                  <h5 className="text-sm font-bold text-teal-900 mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    How to Accelerate
                  </h5>
                  <ul className="text-xs text-slate-700 space-y-2">
                    <li>• <strong>Boost Savings to 20%:</strong> Reach ₹1Cr in 20 years instead of 25</li>
                    <li>• <strong>Side Income:</strong> Freelance/part-time adds ₹10K/month = ₹1Cr in 18 years</li>
                    <li>• <strong>Invest Bonuses 100%:</strong> Annual bonus of ₹1L = save 3 years</li>
                    <li>• <strong>Cut EMIs:</strong> Avoid car loan/personal loans—kills compounding</li>
                    <li>• <strong>Switch Jobs:</strong> 20% salary jump every 3 years beats 5% annual hikes</li>
                  </ul>
                </div>
              </div>

              {/* Month-by-Month Action Plan */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-teal-900">Your Month-by-Month Action Plan</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      phase: "Months 1-6",
                      title: "Foundation",
                      steps: [
                        "Open Zerodha/Groww account",
                        "Start ₹5K SIP in Nifty 50 Index Fund",
                        "Build ₹50K emergency fund in liquid fund",
                        "Track every expense for 3 months"
                      ],
                      color: "blue"
                    },
                    {
                      phase: "Months 7-12",
                      title: "Momentum",
                      steps: [
                        "Increase SIP to ₹8K with increment/bonus",
                        "Add ₹2K in mid-cap index fund",
                        "Complete emergency fund to ₹1L",
                        "Cut 2-3 unnecessary subscriptions"
                      ],
                      color: "purple"
                    },
                    {
                      phase: "Year 2-5",
                      title: "Acceleration",
                      steps: [
                        "Boost total savings to ₹15K/month",
                        "70% equity, 20% debt, 10% gold allocation",
                        "Side income: ₹5-10K/month",
                        "Avoid lifestyle inflation traps"
                      ],
                      color: "emerald"
                    }
                  ].map((item, i) => (
                    <Card key={i} className={`border-${item.color}-200 bg-${item.color}-50/50 shadow-sm`}>
                      <CardHeader className="pb-3">
                        <div className="text-xs font-bold text-slate-600">{item.phase}</div>
                        <CardTitle className="text-md text-slate-900">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-xs text-slate-700 space-y-2">
                          {item.steps.map((step, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className={`text-${item.color}-600 font-bold`}>•</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Reality Check */}
              <div className="p-5 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border-2 border-amber-300">
                <h5 className="text-md font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Reality Check: Common Obstacles
                </h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-900">
                  <div>
                    <p className="font-bold mb-2">❌ What Kills the Plan:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Taking 2-3 year investment breaks (delays by 5+ years)</li>
                      <li>• Buying car on EMI (₹15K/month EMI = losing ₹40L corpus)</li>
                      <li>• Panic selling in market crashes (missing recovery)</li>
                      <li>• Credit card debt @ 36-42% interest (compounds against you)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2">✅ What Makes It Work:</p>
                    <ul className="text-xs space-y-1">
                      <li>• Automating SIP on salary day (no willpower needed)</li>
                      <li>• Never stopping SIP even in bear markets</li>
                      <li>• Living slightly below your means (not at your means)</li>
                      <li>• Celebrating small wins (₹1L, ₹5L, ₹10L milestones)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Final Motivation */}
              <div className="p-5 bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-xl">
                <h5 className="text-lg font-bold mb-2">💪 You CAN Do This</h5>
                <p className="text-sm leading-relaxed">
                  With ₹8 LPA salary, you're earning <strong>more than 90% of India</strong>. The difference between ₹0 and ₹1 Crore is not luck or high salary—it's <strong>discipline, consistency, and time</strong>. Start today. Your 52-year-old self will thank you.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold">25 Years</p>
                    <p className="text-xs">Consistent Investing</p>
                  </div>
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold">₹53 Lakh</p>
                    <p className="text-xs">Your Contribution</p>
                  </div>
                  <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold">₹80 Lakh</p>
                    <p className="text-xs">Compounding Magic</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The Magic of ₹1 Crore Compounding */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
            <Rocket className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">How ₹1 Crore Compounds</h3>
            <p className="text-sm text-slate-600">The Exponential Phase — Wealth Builds Itself</p>
          </div>
        </div>

        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <p className="text-sm text-slate-600">Starting Point</p>
                <p className="text-5xl font-bold text-purple-700">₹1,00,00,000</p>
                <p className="text-lg text-slate-500">Your Wealth Base</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { years: 5, amount: "₹1.76 Cr", return: "12% CAGR", growth: "+₹76L" },
                  { years: 10, amount: "₹3.11 Cr", return: "12% CAGR", growth: "+₹2.11 Cr" },
                  { years: 15, amount: "₹5.47 Cr", return: "12% CAGR", growth: "+₹4.47 Cr" }
                ].map((scenario, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border-2 border-purple-200 shadow-sm">
                    <div className="text-center space-y-2">
                      <p className="text-sm font-bold text-purple-900">After {scenario.years} Years</p>
                      <p className="text-2xl font-bold text-purple-700">{scenario.amount}</p>
                      <p className="text-xs text-slate-600">{scenario.return}</p>
                      <div className="pt-2 mt-2 border-t border-purple-100">
                        <p className="text-xs text-emerald-700 font-bold">{scenario.growth} Growth</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-purple-600 text-white rounded-xl space-y-3">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  The Compounding Magic
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="font-bold">Year 1-5 Growth:</p>
                    <p>₹1Cr → ₹1.76Cr = <strong className="text-yellow-200">₹76L gain</strong></p>
                    <p className="text-xs text-purple-200">Your money earns ₹12L-15L per year passively</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-bold">Year 10-15 Growth:</p>
                    <p>₹3.11Cr → ₹5.47Cr = <strong className="text-yellow-200">₹2.36Cr gain in 5 years</strong></p>
                    <p className="text-xs text-purple-200">Your money earns more than most salaries</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-purple-900">What Changes at ₹1 Crore</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { title: "Passive Income Reality", desc: "₹12L/year @ 12% return covers ₹1L/month lifestyle without working" },
                    { title: "Compounding Dominates", desc: "Investment returns exceed salary savings. Your money works harder than you." },
                    { title: "Options Multiply", desc: "Can take career risks, start business, retire early, or coast to ₹5-10Cr" },
                    { title: "Stress Reduces", desc: "Financial security cushion. Medical emergencies, job loss don't bankrupt you." },
                    { title: "Time Freedom", desc: "Can say NO to bad jobs, toxic bosses, unfulfilling work. Freedom is priceless." },
                    { title: "Generational Wealth Begins", desc: "With discipline, can pass ₹5-10Cr to next generation, ending poverty cycle." }
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-purple-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-slate-800">{item.title}</p>
                          <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The Math: Why First ₹10L is Hardest */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" /> The Math: Why First ₹10L is Hardest
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50 border-b-2 border-blue-200">
                <th className="p-3 text-left text-sm font-bold text-blue-900">Journey Stage</th>
                <th className="p-3 text-center text-sm font-bold text-blue-900">Savings Needed</th>
                <th className="p-3 text-center text-sm font-bold text-blue-900">Returns Help</th>
                <th className="p-3 text-center text-sm font-bold text-blue-900">Timeline</th>
                <th className="p-3 text-center text-sm font-bold text-blue-900">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stage: "₹0 → ₹1L", savings: "₹8K/month", returns: "₹0 (No base)", timeline: "12-15 months", difficulty: "🔴 Hardest" },
                { stage: "₹1L → ₹10L", savings: "₹15K/month", returns: "₹9K/year @ 12%", timeline: "4-5 years", difficulty: "🟠 Very Hard" },
                { stage: "₹10L → ₹25L", savings: "₹30K/month", returns: "₹1.2L/year @ 12%", timeline: "3-4 years", difficulty: "🟡 Hard" },
                { stage: "₹25L → ₹50L", savings: "₹50K/month", returns: "₹3L/year @ 12%", timeline: "3-4 years", difficulty: "🟢 Moderate" },
                { stage: "₹50L → ₹1Cr", savings: "₹80K/month", returns: "₹6L/year @ 12%", timeline: "4-5 years", difficulty: "🔵 Easier" },
                { stage: "₹1Cr → ₹2Cr", savings: "₹1L/month", returns: "₹12L/year @ 12%", timeline: "5-6 years", difficulty: "🟣 Easy (Compounding)" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-3 text-sm font-medium text-slate-800">{row.stage}</td>
                  <td className="p-3 text-sm text-center text-slate-700">{row.savings}</td>
                  <td className="p-3 text-sm text-center text-slate-700">{row.returns}</td>
                  <td className="p-3 text-sm text-center text-slate-700">{row.timeline}</td>
                  <td className="p-3 text-sm text-center font-medium">{row.difficulty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-blue-100 rounded-xl border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>💡 Key Insight:</strong> At ₹0, 100% wealth comes from savings. At ₹1Cr, 50%+ comes from returns. At ₹5Cr, 70%+ is compounding. The first ₹10L is pure grit—after that, math does the work.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2.5rem] text-white space-y-6 shadow-2xl">
        <h4 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <Target className="w-10 h-10" />
          Your Action Plan Starting Today
        </h4>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "If You're at ₹0-1L",
              action: "Track expenses, automate ₹5K SIP in index fund, kill small leaks. Focus: BUILD HABIT."
            },
            {
              title: "If You're at ₹10L-50L",
              action: "Increase equity to 70%, add mid/small cap, boost savings rate to 40%. Focus: ACCELERATE."
            },
            {
              title: "If You're at ₹50L-1Cr",
              action: "Diversify into real estate, international, PMS/AIF. Focus: COMPOUND & PRESERVE."
            }
          ].map((item, i) => (
            <div key={i} className="p-5 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg">
              <p className="text-base text-white font-bold mb-2">{item.title}</p>
              <p className="text-sm text-white leading-relaxed">{item.action}</p>
            </div>
          ))}
        </div>
        <div className="p-5 bg-yellow-500/20 rounded-xl border-2 border-yellow-300">
          <p className="text-base text-white font-medium leading-relaxed">
            <strong className="text-yellow-100 text-lg">⏰ Remember:</strong> Time is your biggest asset. Starting at 25 vs 35 can mean ₹5 Crore difference by 50. Start today, not tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
