"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { TrendingUp, BarChart3, Target, Zap, ShieldCheck, Coins, Users, Scale, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const IndexInvesting = () => {
  const majorIndices = [
    {
      name: "Nifty 50",
      exchange: "NSE",
      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
      description: "Top 50 companies by market cap on NSE across 14 sectors",
      represents: "~65% of Indian market cap",
      returns: "~12-14% CAGR (15-year avg)",
      weight: "Market cap weighted"
    },
    {
      name: "Sensex",
      exchange: "BSE",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      description: "30 most established and financially sound companies on BSE",
      represents: "India's oldest & most tracked index",
      returns: "~11-13% CAGR (15-year avg)",
      weight: "Market cap weighted"
    },
    {
      name: "Nifty Next 50",
      exchange: "NSE",
      icon: <Target className="w-5 h-5 text-purple-600" />,
      description: "Next 50 companies after Nifty 50 (future leaders)",
      represents: "Mid-to-large cap growth",
      returns: "~15-18% CAGR (higher risk)",
      weight: "Market cap weighted"
    },
    {
      name: "Nifty Midcap 150",
      exchange: "NSE",
      icon: <Zap className="w-5 h-5 text-orange-600" />,
      description: "150 mid-cap companies with growth potential",
      represents: "Mid-cap segment",
      returns: "~14-17% CAGR (volatile)",
      weight: "Market cap weighted"
    }
  ];

  const activeVsPassive = {
    active: {
      title: "Active Investing",
      description: "Picking individual stocks or actively managed mutual funds",
      pros: [
        "Potential to beat market returns",
        "Flexibility to adapt to market conditions",
        "Can avoid bad companies",
        "Satisfy desire to be 'in control'"
      ],
      cons: [
        "Requires significant time & skill",
        "Higher costs (brokerage, taxes, fund fees)",
        "Emotional decision-making risks",
        "Most active investors underperform index"
      ],
      suitedFor: "Experienced investors with time, skill, and discipline"
    },
    passive: {
      title: "Passive (Index) Investing",
      description: "Buying index funds/ETFs that track market indices",
      pros: [
        "Zero stock-picking stress",
        "Extremely low costs (0.05-0.5% expense ratio)",
        "Guaranteed market returns",
        "Automatic diversification"
      ],
      cons: [
        "Cannot beat the market (only match it)",
        "No flexibility in bear markets",
        "Hold both winners and losers",
        "Less exciting (boring)"
      ],
      suitedFor: "Beginners, busy professionals, long-term wealth builders"
    }
  };

  const indexFundsVsETFs = [
    { aspect: "Structure", indexFund: "Mutual Fund (NAV-based)", etf: "Traded like a stock (real-time price)" },
    { aspect: "Buying", indexFund: "Through AMC or broker (once/day)", etf: "Through Demat account anytime" },
    { aspect: "Minimum Investment", indexFund: "₹100-5,000 (SIP friendly)", etf: "Price of 1 unit (~₹100-500)" },
    { aspect: "Expense Ratio", indexFund: "0.10-0.50%", etf: "0.05-0.30% (slightly lower)" },
    { aspect: "Tracking Error", indexFund: "Slightly higher", etf: "Slightly lower" },
    { aspect: "Liquidity", indexFund: "Redeemed at day-end NAV", etf: "Instant buying/selling" },
    { aspect: "Dividend", indexFund: "Reinvested or paid out", etf: "Paid to Demat account" }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <BarChart3 className="w-4 h-4" />
            <span>Passive Investing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Index Investing & ETFs
          </h2>
          <p className="text-blue-100 text-lg max-w-xl">
            Why pick individual stocks when you can own the entire market? Index investing offers simplicity, low costs, and long-term wealth creation without the stress.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* What are Indices? */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" /> What is an Index?
        </h3>
        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardContent className="pt-6 space-y-4">
            <p className="text-slate-600 leading-relaxed">
              A stock market index is a <strong>benchmark</strong> that tracks the performance of a group of stocks. 
              Think of it as a "shopping basket" representing the overall market or a specific segment.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 text-sm mb-2">How It Works</h4>
                <p className="text-xs text-blue-800 leading-relaxed">
                  If Nifty 50 is at 22,000 today and rises to 22,500 tomorrow, it means the top 50 companies, 
                  on average, gained ~2.3%. You can't "buy" the index directly, but you can buy funds that replicate it.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 text-sm mb-2">Why It Matters</h4>
                <p className="text-xs text-blue-800 leading-relaxed">
                  Indices are used as performance benchmarks. If your portfolio returns 10% but Nifty returned 15%, 
                  you underperformed. Most active investors fail to beat the index consistently.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Major Indices */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-purple-600" /> Major Indian Indices
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {majorIndices.map((index, i) => (
            <Card key={i} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {index.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">{index.exchange}</Badge>
                </div>
                <CardTitle className="text-xl">{index.name}</CardTitle>
                <CardDescription className="text-sm">{index.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <p className="text-[10px] text-slate-500 uppercase">Represents</p>
                    <p className="text-xs font-bold text-slate-800">{index.represents}</p>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg">
                    <p className="text-[10px] text-slate-500 uppercase">Returns</p>
                    <p className="text-xs font-bold text-slate-800">{index.returns}</p>
                  </div>
                </div>
                <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-xs text-blue-800"><strong>Weighting:</strong> {index.weight}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Active vs Passive */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Scale className="w-6 h-6 text-emerald-600" /> Active vs Passive Investing
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Active */}
          <Card className="border-orange-200 bg-orange-50/50 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Users className="w-6 h-6 text-orange-600" />
                <Badge variant="outline" className="bg-white">High Effort</Badge>
              </div>
              <CardTitle className="text-xl text-orange-800">{activeVsPassive.active.title}</CardTitle>
              <CardDescription className="text-orange-700">{activeVsPassive.active.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-bold text-emerald-700 uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Pros
                </p>
                <ul className="space-y-1">
                  {activeVsPassive.active.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-red-700 uppercase flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Cons
                </p>
                <ul className="space-y-1">
                  {activeVsPassive.active.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-red-500 mt-0.5">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 bg-white rounded-xl border border-orange-100">
                <p className="text-xs font-bold text-orange-800 uppercase mb-1">Best For</p>
                <p className="text-xs text-orange-700">{activeVsPassive.active.suitedFor}</p>
              </div>
            </CardContent>
          </Card>

          {/* Passive */}
          <Card className="border-blue-200 bg-blue-50/50 shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <Badge className="bg-blue-600">Recommended</Badge>
              </div>
              <CardTitle className="text-xl text-blue-800">{activeVsPassive.passive.title}</CardTitle>
              <CardDescription className="text-blue-700">{activeVsPassive.passive.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-bold text-emerald-700 uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Pros
                </p>
                <ul className="space-y-1">
                  {activeVsPassive.passive.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-red-700 uppercase flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Cons
                </p>
                <ul className="space-y-1">
                  {activeVsPassive.passive.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-red-500 mt-0.5">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-3 bg-white rounded-xl border border-blue-100">
                <p className="text-xs font-bold text-blue-800 uppercase mb-1">Best For</p>
                <p className="text-xs text-blue-700">{activeVsPassive.passive.suitedFor}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Index Funds vs ETFs */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Coins className="w-6 h-6 text-indigo-600" /> Index Funds vs ETFs
        </h3>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-bold">Aspect</th>
                    <th className="text-left p-3 font-bold text-blue-700">Index Fund</th>
                    <th className="text-left p-3 font-bold text-emerald-700">ETF</th>
                  </tr>
                </thead>
                <tbody>
                  {indexFundsVsETFs.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-3 font-bold text-slate-700">{row.aspect}</td>
                      <td className="p-3 text-slate-600">{row.indexFund}</td>
                      <td className="p-3 text-slate-600">{row.etf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm font-bold text-blue-900 mb-2">Which Should You Choose?</p>
          <ul className="space-y-2 text-xs text-blue-800">
            <li className="flex gap-2"><span>•</span> <strong>Index Funds:</strong> Better for SIP investors, beginners, those without Demat accounts</li>
            <li className="flex gap-2"><span>•</span> <strong>ETFs:</strong> Better for lump-sum investors, traders, those who want instant liquidity</li>
            <li className="flex gap-2"><span>•</span> <strong>Both work equally well</strong> for long-term wealth creation. Pick based on convenience.</li>
          </ul>
        </div>
      </section>

      {/* Popular Index Funds/ETFs */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Popular Index Funds & ETFs in India</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-bold text-blue-700 text-sm">Nifty 50 Trackers</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="p-2 bg-white rounded-lg border">ICICI Pru Nifty Index Fund</li>
              <li className="p-2 bg-white rounded-lg border">UTI Nifty Index Fund</li>
              <li className="p-2 bg-white rounded-lg border">Nippon India ETF Nifty BeES</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-emerald-700 text-sm">Sensex Trackers</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="p-2 bg-white rounded-lg border">SBI BSE Sensex Index Fund</li>
              <li className="p-2 bg-white rounded-lg border">HDFC Index Fund - Sensex Plan</li>
              <li className="p-2 bg-white rounded-lg border">Nippon India ETF Sensex</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-purple-700 text-sm">Next 50 / Midcap</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="p-2 bg-white rounded-lg border">ICICI Pru Nifty Next 50 Index</li>
              <li className="p-2 bg-white rounded-lg border">Motilal Oswal Midcap 150</li>
              <li className="p-2 bg-white rounded-lg border">Nippon India ETF Junior BeES</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-500 italic mt-6">
          💡 <strong>Note:</strong> This is not investment advice. Always check expense ratios, tracking error, and AUM before investing.
        </p>
      </section>

      {/* Sample Portfolio */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-emerald-600" /> Sample Index Portfolio
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 shadow-md">
            <CardHeader className="bg-slate-50/50 border-b">
              <CardTitle className="text-lg">Conservative (Low Risk)</CardTitle>
              <CardDescription>For beginners or risk-averse investors</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Nifty 50 Index Fund</span>
                  <Badge>70%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <span className="text-sm font-medium">Debt/Bond Fund</span>
                  <Badge>30%</Badge>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 italic">
                Expected return: 10-12% with lower volatility
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-md">
            <CardHeader className="bg-slate-50/50 border-b">
              <CardTitle className="text-lg">Aggressive (Higher Risk)</CardTitle>
              <CardDescription>For young investors with long horizon</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Nifty 50 Index Fund</span>
                  <Badge>50%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm font-medium">Nifty Next 50 / Midcap</span>
                  <Badge>30%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                  <span className="text-sm font-medium">Debt/Bond Fund</span>
                  <Badge>20%</Badge>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 italic">
                Expected return: 13-16% with higher volatility
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Case for Index Investing */}
      <section className="bg-indigo-600 text-white rounded-[2.5rem] p-8 md:p-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Clock className="w-7 h-7" />
          The Math Doesn't Lie
        </h3>
        <div className="space-y-4 text-indigo-100">
          <p className="leading-relaxed">
            Studies show that over a 15-year period, <strong className="text-white">85-95% of actively managed funds fail to beat their benchmark index</strong>. 
            This is after accounting for fees, taxes, and transaction costs.
          </p>
          <p className="leading-relaxed">
            A monthly SIP of ₹10,000 in a Nifty 50 index fund for 20 years at 12% CAGR would grow to approximately 
            <strong className="text-white text-xl"> ₹1 Crore</strong>. Simple, boring, effective.
          </p>
          <div className="p-4 bg-white/10 rounded-xl border border-white/20 mt-6">
            <p className="text-sm italic">
              "Don't look for the needle in the haystack. Just buy the haystack!" — Jack Bogle (Founder of Vanguard, pioneer of index investing)
            </p>
          </div>
        </div>
      </section>

      {/* When to Choose Index vs Active */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">When to Choose What?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">Choose Index Investing If:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> You're a beginner</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> You have limited time for research</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> You want simplicity and peace of mind</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> You're investing for 10+ years</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> You want to minimize costs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800">Choose Active Investing If:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> You have proven stock-picking skills</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> You enjoy analyzing companies</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> You can control emotions in volatility</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> You have time to track portfolios actively</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> You're willing to accept higher risk</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
          <p className="text-sm text-slate-700 text-center italic">
            💡 <strong>Hybrid Approach:</strong> Many experienced investors do 70% index + 30% individual stocks. 
            This gives you market returns plus the potential to beat it with high-conviction picks.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IndexInvesting;
