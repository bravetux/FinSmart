"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bitcoin as BitcoinIcon, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Shield,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Zap,
  Target,
  XCircle,
  Wallet,
  BarChart3
} from "lucide-react";

const Bitcoin = () => {
  return (
    <div className="space-y-10 pb-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 to-yellow-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <BitcoinIcon className="w-4 h-4" />
            <span>Bitcoin & Crypto Assets</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Bitcoin: High Risk, High Reward
          </h2>
          <p className="text-orange-50 text-lg max-w-3xl">
            Digital assets that can serve as speculative investments, portfolio diversifiers, or long-term stores of value—depending on your view and risk tolerance.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Crypto Investment Realities */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-orange-600" /> Crypto Investment Realities
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Extreme Volatility",
              desc: "50%+ swings in weeks are normal. Bitcoin dropped 80% in 2022, gained 150%+ in 2023.",
              icon: <AlertTriangle className="w-5 h-5" />,
              color: "red",
              stat: "±50-80%"
            },
            {
              title: "Security Critical",
              desc: "You are your own bank. Lost keys = lost funds forever. Exchange hacks happen regularly.",
              icon: <Shield className="w-5 h-5" />,
              color: "amber",
              stat: "$3B+ lost annually"
            },
            {
              title: "High Return Potential",
              desc: "Bitcoin: +20,000% since 2015. Early adopters saw life-changing returns. Past ≠ Future.",
              icon: <TrendingUp className="w-5 h-5" />,
              color: "emerald",
              stat: "20,000%+ (2015-2021)"
            }
          ].map((item, i) => (
            <Card key={i} className={`border-${item.color}-200 bg-${item.color}-50/50 shadow-md`}>
              <CardHeader className="pb-3">
                <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center text-${item.color}-700 mb-2`}>
                  {item.icon}
                </div>
                <CardTitle className="text-md text-slate-900">{item.title}</CardTitle>
                <p className={`text-2xl font-bold text-${item.color}-700 mt-2`}>{item.stat}</p>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="p-4 bg-red-100 rounded-xl border border-red-200">
          <p className="text-sm text-red-900">
            <strong>⚠ Critical Warning:</strong> Crypto is the highest-risk asset class. Never invest money you can't afford to lose. Recommended allocation: 1-5% maximum of portfolio.
          </p>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-6 h-6 text-orange-600" /> Who Should Invest in Crypto?
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Suitable Investors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "High risk tolerance and emotional discipline",
                "Can afford to lose entire investment",
                "Understand blockchain technology basics",
                "Comfortable with self-custody or exchange risks",
                "Long-term investment horizon (5+ years)",
                "Portfolio already has stable foundation (equity, debt, gold)"
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
                <XCircle className="w-5 h-5" />
                Avoid If You Are
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Near retirement or need funds within 3 years",
                "Cannot handle 50-80% portfolio drops",
                "First-time investor without traditional portfolio",
                "Unfamiliar with wallet security (private keys, 2FA)",
                "Looking for guaranteed returns or passive income",
                "Prone to panic selling during market crashes"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-amber-600" /> Security Best Practices
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Hardware Wallet",
              desc: "Ledger/Trezor for long-term holdings. Never share seed phrase. Costs: ₹5K-15K one-time.",
              icon: <Wallet className="w-5 h-5" />,
              color: "emerald",
              priority: "Must Have"
            },
            {
              title: "2FA & Strong Passwords",
              desc: "Use authenticator apps (Google/Authy), not SMS. Unique passwords per exchange. Password manager recommended.",
              icon: <Lock className="w-5 h-5" />,
              color: "blue",
              priority: "Critical"
            },
            {
              title: "Reputable Exchanges",
              desc: "India: WazirX, CoinDCX, ZebPay. Global: Binance, Coinbase (if accessible). Check regulatory compliance.",
              icon: <CheckCircle2 className="w-5 h-5" />,
              color: "purple",
              priority: "Essential"
            },
            {
              title: "Diversify Storage",
              desc: "Split holdings: 70% cold storage (hardware wallet), 30% exchange for liquidity. Never keep all on one platform.",
              icon: <Target className="w-5 h-5" />,
              color: "amber",
              priority: "Risk Mgmt"
            }
          ].map((item, i) => (
            <Card key={i} className={`border-${item.color}-200 bg-${item.color}-50/50 shadow-sm`}>
              <CardHeader className="pb-3">
                <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center text-${item.color}-700 mb-2`}>
                  {item.icon}
                </div>
                <CardTitle className="text-md text-slate-900">{item.title}</CardTitle>
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-${item.color}-100 text-${item.color}-700 mt-2`}>
                  {item.priority}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="p-4 bg-amber-100 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>🔐 Golden Rule:</strong> "Not your keys, not your coins." Exchanges can freeze accounts, get hacked, or go bankrupt. Self-custody for large amounts is non-negotiable.
          </p>
        </div>
      </section>

      {/* Charges & Custody */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-amber-600" /> Charges & Custody Costs
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-amber-200 bg-amber-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 mb-2">
                <DollarSign className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Exchange Trading Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-2xl font-bold text-amber-700">0.05% - 0.5%</p>
              <p className="text-xs text-slate-600">Per trade (maker/taker fees vary by exchange and volume)</p>
              <div className="pt-2 mt-2 border-t border-amber-200">
                <p className="text-xs text-slate-500">Example: ₹1L trade = ₹50-500 fee</p>
              </div>
              <div className="space-y-1 pt-2">
                <p className="text-xs text-slate-600">
                  • Binance: 0.1% (0.075% with BNB)<br/>
                  • Coinbase: 0.5% (higher for small trades)<br/>
                  • Indian exchanges: 0.2-0.3%
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                <TrendingUp className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Network / Withdrawal Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-2xl font-bold text-purple-700">Variable</p>
              <p className="text-xs text-slate-600">Blockchain fees when moving crypto off-exchange (gas fees)</p>
              <div className="pt-2 mt-2 border-t border-purple-200">
                <p className="text-xs text-slate-500">Bitcoin: ₹50-500 | Ethereum: ₹100-2000 (depends on network congestion)</p>
              </div>
              <div className="space-y-1 pt-2">
                <p className="text-xs text-slate-600">
                  • Bitcoin: $1-10 per transaction<br/>
                  • Ethereum: $2-50 (high during peaks)<br/>
                  • Altcoins: Usually lower
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-slate-50 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 mb-2">
                <Wallet className="w-5 h-5" />
              </div>
              <CardTitle className="text-md text-slate-900">Custody Costs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-2xl font-bold text-slate-700">₹5K-15K</p>
              <p className="text-xs text-slate-600">Hardware wallet (Ledger/Trezor) one-time purchase</p>
              <div className="pt-2 mt-2 border-t border-slate-200">
                <p className="text-xs text-slate-500">Optional: Institutional custody services (1-2% annually for large holdings)</p>
              </div>
              <div className="space-y-1 pt-2">
                <p className="text-xs text-slate-600">
                  • Ledger Nano S Plus: ~₹7K<br/>
                  • Trezor Model One: ~₹5K<br/>
                  • Institutional custody: For ₹1Cr+ holdings
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Taxation */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" /> Taxation (India & Global)
        </h3>

        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">India (VDA Taxation)</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">Virtual Digital Assets (VDA)</p>
                    <p className="text-sm text-slate-600"><strong>30% flat tax on gains</strong> (no deductions, no set-off against losses)</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">TDS on Transfers</p>
                    <p className="text-sm text-slate-600">1% TDS on all crypto transactions above ₹10,000 (deducted at source)</p>
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg border border-red-200">
                    <p className="text-xs text-red-900">
                      <strong>⚠ Loss Set-Off Not Allowed:</strong> If you lose ₹1L on BTC and gain ₹1L on ETH, you still pay 30% tax on ₹1L gain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-bold text-blue-900">Global Variations</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">USA</p>
                    <p className="text-sm text-slate-600">Capital gains tax: 0-20% (LTCG), 10-37% (STCG). Losses can offset gains.</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">UAE</p>
                    <p className="text-sm text-slate-600">No capital gains tax on crypto (as of 2024). Tax-free gains attract global investors.</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-100">
                    <p className="text-xs font-bold text-slate-800 mb-1">Singapore</p>
                    <p className="text-sm text-slate-600">No capital gains tax for individuals. Businesses taxed as income (17%).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-100 rounded-lg border border-amber-200">
              <p className="text-xs text-amber-900">
                <strong>📝 Important:</strong> Tax rules change rapidly. Consult a CA specializing in crypto taxation for your jurisdiction before filing returns.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Portfolio Allocation */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-600" /> Portfolio Allocation Guidance
        </h3>

        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-2">Recommended Maximum Allocation</p>
                <p className="text-4xl font-bold text-purple-700">1% - 5%</p>
                <p className="text-lg text-slate-500">of Total Portfolio</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-900 mb-2">Conservative (1-2%)</p>
                  <p className="text-sm text-slate-700">
                    Risk-averse, near retirement, or first-time crypto investor. Treat as "lottery ticket" allocation.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-200 ring-2 ring-purple-400">
                  <p className="text-xs font-bold text-purple-900 mb-2">Moderate (3-5%)</p>
                  <p className="text-sm text-slate-700">
                    Young investor, high risk tolerance, stable financial foundation. Can withstand volatility.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-red-200">
                  <p className="text-xs font-bold text-red-900 mb-2">Aggressive (5-10%)</p>
                  <p className="text-sm text-slate-700">
                    Only if you deeply understand crypto, have ₹50L+ portfolio, and can afford 100% loss.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-red-100 rounded-xl border border-red-200">
                <p className="text-sm text-red-900">
                  <strong>🚨 Never Go Above 10%:</strong> Even crypto billionaires recommend keeping crypto below 10% of net worth due to extreme risk. Diversification is survival.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Exchange Comparison */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-600" /> Indian Exchange Comparison
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50 border-b-2 border-blue-200">
                <th className="p-3 text-left text-sm font-bold text-blue-900">Exchange</th>
                <th className="p-3 text-center text-sm font-bold text-blue-900">Trading Fee</th>
                <th className="p-3 text-center text-sm font-bold text-blue-900">Coins Available</th>
                <th className="p-3 text-center text-sm font-bold text-blue-900">Security</th>
                <th className="p-3 text-center text-sm font-bold text-blue-900">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                { exchange: "WazirX", fee: "0.2%", coins: "200+", security: "2FA, Cold Storage", bestFor: "Beginners (Indian)" },
                { exchange: "CoinDCX", fee: "0.1-0.3%", coins: "500+", security: "2FA, Insurance", bestFor: "Wide coin selection" },
                { exchange: "ZebPay", fee: "0.15%", coins: "70+", security: "2FA, ISO certified", bestFor: "Regulatory compliance" },
                { exchange: "Binance", fee: "0.1%", coins: "600+", security: "2FA, SAFU fund", bestFor: "Global liquidity" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="p-3 text-sm font-medium text-slate-800">{row.exchange}</td>
                  <td className="p-3 text-sm text-center text-slate-700">{row.fee}</td>
                  <td className="p-3 text-sm text-center text-slate-700">{row.coins}</td>
                  <td className="p-3 text-sm text-center text-slate-700">{row.security}</td>
                  <td className="p-3 text-sm text-center text-slate-700">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-blue-100 rounded-xl border border-blue-200">
          <p className="text-sm text-blue-900">
            <strong>💡 Due Diligence:</strong> Verify exchange registration with FIU-IND. Check user reviews, security track record, and withdrawal limits before depositing large amounts.
          </p>
        </div>
      </section>

      {/* Entry Points */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-orange-600" /> Entry Points & Minimum Investment
        </h3>

        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 text-white text-2xl font-bold">
                ₹
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Minimum Entry (Most Exchanges)</p>
                <p className="text-4xl font-bold text-orange-700">₹100</p>
                <p className="text-lg text-slate-500">Start with small amount</p>
              </div>
              <div className="pt-4 space-y-3">
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-green-200">
                    <p className="text-xs font-bold text-slate-700">First-Time Investor</p>
                    <p className="text-lg font-bold text-green-700">₹1K - ₹5K</p>
                    <p className="text-xs text-slate-500">Learn with small capital</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-200">
                    <p className="text-xs font-bold text-slate-700">Moderate Investor</p>
                    <p className="text-lg font-bold text-blue-700">₹50K - ₹2L</p>
                    <p className="text-xs text-slate-500">3-5% of ₹10-50L portfolio</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-purple-200">
                    <p className="text-xs font-bold text-slate-700">Serious Allocation</p>
                    <p className="text-lg font-bold text-purple-700">₹5L - ₹25L</p>
                    <p className="text-xs text-slate-500">5% of ₹1Cr+ portfolio</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-orange-200">
                  <p className="text-xs text-orange-900">
                    <strong>SIP Approach:</strong> Instead of lump sum, invest ₹5K-10K monthly via SIP for 12-24 months to average out volatility (DCA strategy).
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-orange-600 to-amber-600 rounded-[2.5rem] text-white space-y-6 shadow-2xl">
        <h4 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <BitcoinIcon className="w-10 h-10" />
          The Crypto Reality Check
        </h4>
        <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
          Bitcoin has created millionaires and bankrupted speculators. It's <strong className="text-yellow-200">not for everyone</strong>. Only invest if you understand the risks, have emotional discipline, and can afford to lose it all.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-5 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg">
            <p className="text-base text-white font-medium leading-relaxed">
              <strong className="text-yellow-100 text-lg">✓ Green Flags:</strong><br/>
              <span className="block mt-2 space-y-1">
                • You have emergency fund + diversified portfolio<br/>
                • Can hold 5-10 years without panic selling<br/>
                • Understand self-custody (hardware wallets)<br/>
                • Accept 80% drawdowns as "normal"
              </span>
            </p>
          </div>
          <div className="p-5 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg">
            <p className="text-base text-white font-medium leading-relaxed">
              <strong className="text-red-200 text-lg">🚩 Red Flags:</strong><br/>
              <span className="block mt-2 space-y-1">
                • Investing borrowed money or emergency funds<br/>
                • Expecting 10x returns in 6 months<br/>
                • Keeping all crypto on one exchange<br/>
                • Following influencers without research
              </span>
            </p>
          </div>
        </div>
        <div className="p-5 bg-red-700/80 rounded-xl border-2 border-red-300 shadow-lg">
          <p className="text-base text-white font-medium leading-relaxed">
            <strong className="text-yellow-100 text-lg">⚠️ Final Warning:</strong> Regulatory uncertainty in India. Govt could ban/restrict crypto anytime. Extreme price volatility. Exchange hacks. Lost private keys = lost funds forever. <strong className="text-yellow-200">Only invest what you're prepared to lose completely.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bitcoin;
