"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LogOut, AlertCircle, TrendingDown, Target, CheckCircle2, XCircle, AlertTriangle, BarChart3, Clock, Repeat } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const ExitStrategy = () => {
  const { currency } = useCurrency();

  const sellScenarios = [
    {
      title: "Fundamental Deterioration",
      icon: <TrendingDown className="w-5 h-5 text-red-600" />,
      color: "red",
      examples: [
        "Business moat is weakening (new competitors, pricing power lost)",
        "Management changes (key executives leaving, governance issues)",
        "Consistent decline in ROE/ROCE for 3+ consecutive quarters",
        "Rising debt levels without proportional revenue growth",
        "Legal troubles or regulatory issues"
      ],
      action: "Sell gradually or completely. Don't wait for full recovery."
    },
    {
      title: "Valuation Overshoot",
      icon: <AlertCircle className="w-5 h-5 text-orange-600" />,
      color: "orange",
      examples: [
        "Stock trading at 5-10x its historical P/E average",
        "P/E > 50 with no exceptional growth story",
        "Market euphoria (everyone talking about the stock)",
        "Stock has run up 200-300% in 6-12 months",
        "Your position has become >20% of your portfolio"
      ],
      action: "Book partial profits (20-50%). Let rest ride with trailing stop-loss."
    },
    {
      title: "Better Opportunities",
      icon: <Target className="w-5 h-5 text-blue-600" />,
      color: "blue",
      examples: [
        "Found another stock with 3x better risk-reward",
        "Sector rotation (e.g., cyclicals to defensives)",
        "Rebalancing portfolio (reducing overweight positions)",
        "Found quality stock at deep discount",
        "Current stock has become fairly valued"
      ],
      action: "Sell partially or fully. Opportunity cost matters."
    },
    {
      title: "Rebalancing Needs",
      icon: <Repeat className="w-5 h-5 text-emerald-600" />,
      color: "emerald",
      examples: [
        "Equity allocation has gone from 70% to 85% due to bull run",
        "Single stock has become 25% of your portfolio",
        "Sector concentration too high (>30% in one sector)",
        "Time to book profits and shift to debt for stability",
        "Portfolio review indicates imbalance"
      ],
      action: "Sell to restore original asset allocation."
    }
  ];

  const neverSellReasons = [
    {
      reason: "Market Panic / Crash",
      icon: <XCircle className="w-5 h-5 text-red-600" />,
      description: "Don't sell just because the market is falling 10-20%. If the business fundamentals are intact, crashes are buying opportunities.",
      example: "COVID crash in March 2020 — Nifty fell 40% but recovered within 6 months. Those who sold regretted."
    },
    {
      reason: "Minor Quarterly Miss",
      icon: <XCircle className="w-5 h-5 text-orange-600" />,
      description: "One bad quarter doesn't mean the business is failing. Look at trends over 3-4 quarters before reacting.",
      example: "Stock falls 15% on earnings miss. But if revenue is growing and debt is manageable, stay invested."
    },
    {
      reason: "Friend/Expert Said So",
      icon: <XCircle className="w-5 h-5 text-purple-600" />,
      description: "Never sell (or buy) based on tips. Your research and conviction should guide your decisions.",
      example: "Your neighbor says 'Tech stocks are done!' — but you know your IT stock is undervalued. Don't panic sell."
    },
    {
      reason: "Price Target Hit",
      icon: <XCircle className="w-5 h-5 text-blue-600" />,
      description: "If the business is performing better than expected, revise your target upward. Don't sell winners prematurely.",
      example: "You bought at ₹500 with target ₹750. But stock is at ₹800 and fundamentals are stronger. Don't sell mechanically."
    }
  ];

  const trailingStopLoss = {
    definition: "A dynamic stop-loss that moves up with the stock price but never moves down. Locks in profits while giving room for upside.",
    howItWorks: [
      {
        step: "1. Set Initial Stop-Loss",
        description: "Buy stock at ₹1,000. Set stop-loss at 10% below = ₹900.",
        price: "₹1,000"
      },
      {
        step: "2. Stock Rises",
        description: "Stock hits ₹1,200. Move stop-loss to 10% below = ₹1,080.",
        price: "₹1,200"
      },
      {
        step: "3. Stock Rises Again",
        description: "Stock hits ₹1,500. Move stop-loss to 10% below = ₹1,350.",
        price: "₹1,500"
      },
      {
        step: "4. Stock Falls",
        description: "Stock falls to ₹1,350. Stop-loss triggers. You exit with 35% profit instead of riding it down.",
        price: "₹1,350"
      }
    ],
    benefits: [
      "Protects profits during downturns",
      "Removes emotion from selling decisions",
      "Lets winners run while cutting losses",
      "Works great in bull markets"
    ],
    limitations: [
      "Can get stopped out in volatile markets",
      "Doesn't work well in choppy sideways markets",
      "Requires discipline to adjust regularly"
    ]
  };

  const profitBookingStrategies = [
    {
      name: "Scale-Out Method",
      description: "Sell in tranches as stock rises",
      example: "Stock up 50% → Sell 20%. Up 100% → Sell another 30%. Keep 50% for long term.",
      bestFor: "Volatile or mid-cap stocks",
      badge: "Popular"
    },
    {
      name: "Fixed % Profit Target",
      description: "Book profits when stock hits predetermined target",
      example: "Target is 30% gain. Stock reaches it → sell 50% and hold rest with trailing SL.",
      bestFor: "Short-term trades",
      badge: "Simple"
    },
    {
      name: "Rebalancing-Based",
      description: "Sell when position becomes too large",
      example: "Stock becomes 20% of portfolio due to rally → sell down to 10%.",
      bestFor: "Diversified portfolios",
      badge: "Balanced"
    },
    {
      name: "Time-Based Exit",
      description: "Review and exit after holding for X years",
      example: "Held for 5 years. Reassess if thesis still holds. If not, exit.",
      bestFor: "Long-term investors",
      badge: "Disciplined"
    }
  ];

  const exitChecklist = [
    { check: "Has the company's moat weakened?", critical: true },
    { check: "Are margins declining for 3+ quarters?", critical: true },
    { check: "Is debt rising faster than revenue?", critical: true },
    { check: "Has management integrity come into question?", critical: true },
    { check: "Is the stock trading at 2-3x historical valuation?", critical: false },
    { check: "Has my portfolio allocation become imbalanced?", critical: false },
    { check: "Is there a better opportunity with higher risk-reward?", critical: false },
    { check: "Am I selling based on fear/panic or rational analysis?", critical: true }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-red-600 via-orange-600 to-pink-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <LogOut className="w-4 h-4" />
            <span>Exit Strategy</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            When & How to Exit
          </h2>
          <p className="text-orange-100 text-lg max-w-xl">
            Knowing when to sell is just as important as knowing when to buy. A well-planned exit can protect your capital and maximize gains.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* The Hardest Decision */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Why Selling is Harder Than Buying</h3>
        <Card className="border-orange-200 bg-orange-50/50 shadow-md">
          <CardContent className="pt-6 space-y-4">
            <p className="text-slate-600 leading-relaxed">
              Most investors spend hours researching before buying but sell on impulse. The truth? 
              <strong> Selling is harder because it involves confronting mistakes, battling greed, or letting go of winners.</strong>
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-orange-100">
                <h4 className="font-bold text-orange-900 text-sm mb-2">Emotional Attachment</h4>
                <p className="text-xs text-orange-800">
                  "This stock gave me 2x returns — I can't sell it now!" (even when overvalued)
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-orange-100">
                <h4 className="font-bold text-orange-900 text-sm mb-2">Fear of Missing Out</h4>
                <p className="text-xs text-orange-800">
                  "What if it doubles again after I sell?" (prevents profit booking)
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-orange-100">
                <h4 className="font-bold text-orange-900 text-sm mb-2">Loss Aversion</h4>
                <p className="text-xs text-orange-800">
                  Holding losing stocks hoping they'll recover (they often don't)
                </p>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-orange-200">
              <p className="text-sm font-bold text-orange-900 mb-2">The Solution:</p>
              <p className="text-xs text-orange-700">
                Have a <strong>predefined exit strategy</strong> before you buy. Write down your sell triggers. 
                Revisit them every quarter. Remove emotion from the equation.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* When to Sell */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" /> Valid Reasons to Sell
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {sellScenarios.map((scenario, i) => (
            <Card key={i} className={`border-${scenario.color}-200 hover:shadow-lg transition-shadow`}>
              <CardHeader className={`bg-${scenario.color}-50/50 border-b`}>
                <div className="flex items-start justify-between mb-2">
                  <div className={`p-2 bg-white rounded-lg border border-${scenario.color}-100`}>
                    {scenario.icon}
                  </div>
                  <Badge className={`bg-${scenario.color}-600`}>Valid</Badge>
                </div>
                <CardTitle className="text-lg">{scenario.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-700 uppercase">Examples:</p>
                  <ul className="space-y-1.5">
                    {scenario.examples.map((example, j) => (
                      <li key={j} className="flex gap-2 text-xs text-slate-600">
                        <span className={`text-${scenario.color}-500 mt-0.5`}>•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-3 bg-${scenario.color}-50 rounded-xl border border-${scenario.color}-100`}>
                  <p className="text-xs font-bold text-slate-800 mb-1">Action Plan:</p>
                  <p className="text-xs text-slate-700">{scenario.action}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* When NOT to Sell */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <XCircle className="w-6 h-6 text-red-600" /> Invalid Reasons to Sell
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {neverSellReasons.map((item, i) => (
            <Card key={i} className="border-red-200 bg-red-50/50 shadow-md">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <CardTitle className="text-base text-red-800">{item.reason}</CardTitle>
                </div>
                <CardDescription className="text-red-700">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="p-3 bg-white rounded-xl border border-red-100">
                  <p className="text-xs font-bold text-slate-800 mb-1">Example:</p>
                  <p className="text-xs text-slate-600 italic">{item.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="p-6 bg-red-100 rounded-2xl border border-red-200">
          <p className="text-sm font-bold text-red-900 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Golden Rule
          </p>
          <p className="text-sm text-red-800">
            If you wouldn't buy more of the stock at its current price, you probably shouldn't be holding it.
          </p>
        </div>
      </section>

      {/* Trailing Stop-Loss */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-blue-600" /> Trailing Stop-Loss Strategy
        </h3>
        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">What is a Trailing Stop-Loss?</CardTitle>
            <CardDescription className="text-blue-700">{trailingStopLoss.definition}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* How it Works */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-blue-900 uppercase">How It Works:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {trailingStopLoss.howItWorks.map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-bold text-blue-900">{item.step}</p>
                      <Badge className="bg-blue-600">{item.price}</Badge>
                    </div>
                    <p className="text-xs text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits & Limitations */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-xs font-bold text-emerald-900 uppercase mb-2">Benefits:</p>
                <ul className="space-y-1">
                  {trailingStopLoss.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                <p className="text-xs font-bold text-orange-900 uppercase mb-2">Limitations:</p>
                <ul className="space-y-1">
                  {trailingStopLoss.limitations.map((limitation, i) => (
                    <li key={i} className="flex gap-2 text-xs text-slate-600">
                      <AlertTriangle className="w-3 h-3 text-orange-600 shrink-0 mt-0.5" />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm font-bold text-blue-900 mb-2">💡 Pro Tip:</p>
          <p className="text-xs text-blue-800">
            Use 10-15% trailing SL for large-cap stable stocks. Use 20-25% for volatile mid-caps. 
            Adjust based on the stock's typical price swings (volatility).
          </p>
        </div>
      </section>

      {/* Profit Booking Strategies */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-emerald-600" /> Profit Booking Strategies
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {profitBookingStrategies.map((strategy, i) => (
            <Card key={i} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{strategy.name}</CardTitle>
                  <Badge variant="outline">{strategy.badge}</Badge>
                </div>
                <CardDescription>{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-900 mb-1">Example:</p>
                  <p className="text-xs text-emerald-800 italic">{strategy.example}</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-900 mb-1">Best For:</p>
                  <p className="text-xs text-slate-700">{strategy.bestFor}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Exit Checklist */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Clock className="w-6 h-6 text-indigo-600" />
          Before You Sell: The Exit Checklist
        </h3>
        <div className="space-y-3">
          {exitChecklist.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.critical ? 'bg-red-100' : 'bg-blue-100'}`}>
                {item.critical ? (
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                )}
              </div>
              <p className="text-sm text-slate-700 flex-1">{item.check}</p>
              {item.critical && (
                <Badge className="bg-red-600 text-xs">Critical</Badge>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-indigo-100 rounded-xl border border-indigo-200">
          <p className="text-sm font-bold text-indigo-900 mb-2">Decision Framework:</p>
          <p className="text-xs text-indigo-800">
            If you answered "Yes" to any <strong>critical</strong> question, consider selling immediately. 
            If you answered "Yes" to 2+ non-critical questions, review your position and consider partial exit.
          </p>
        </div>
      </section>

      {/* Real-Life Example */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Real-Life Exit Example</h3>
        <Card className="border-purple-200 bg-purple-50/50 shadow-md">
          <CardHeader className="bg-purple-100 border-b">
            <CardTitle className="text-lg text-purple-800">Case Study: ABC Ltd.</CardTitle>
            <CardDescription className="text-purple-700">How to execute a proper exit</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-xl border border-purple-100">
                <p className="text-xs font-bold text-purple-900 mb-2">Stage 1: Initial Purchase (Jan 2020)</p>
                <p className="text-xs text-slate-600">
                  Bought ABC Ltd at <strong>{currency.symbol}500</strong> based on strong ROE (25%), low debt, and market leadership.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-purple-100">
                <p className="text-xs font-bold text-purple-900 mb-2">Stage 2: Growth Phase (Jan 2021)</p>
                <p className="text-xs text-slate-600">
                  Stock hits <strong>{currency.symbol}1,000</strong> (100% gain). Fundamentals still strong. Set trailing SL at 15% = {currency.symbol}850.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-purple-100">
                <p className="text-xs font-bold text-purple-900 mb-2">Stage 3: Peak Euphoria (Dec 2021)</p>
                <p className="text-xs text-slate-600">
                  Stock hits <strong>{currency.symbol}2,000</strong> (300% gain). P/E now 55 vs historical 25. Move trailing SL to {currency.symbol}1,700. Book 30% profits.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-purple-100">
                <p className="text-xs font-bold text-purple-900 mb-2">Stage 4: Exit Trigger (Mar 2022)</p>
                <p className="text-xs text-slate-600">
                  Debt increased 40% in one quarter. Management announced dilution. ROE dropped to 18%. 
                  <strong className="text-red-600"> Sell remaining position at {currency.symbol}1,900</strong>.
                </p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <p className="text-xs font-bold text-emerald-900 mb-2">Result:</p>
                <p className="text-xs text-emerald-800">
                  Total profit: ~250% over 2 years. Exited before stock crashed to {currency.symbol}1,200 by Jun 2022. 
                  <strong> Exit strategy saved {currency.symbol}700 per share.</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Rebalancing Triggers */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Repeat className="w-6 h-6 text-teal-600" /> Rebalancing as Exit Strategy
        </h3>
        <Card className="border-teal-200 bg-teal-50/50 shadow-md">
          <CardContent className="pt-6 space-y-4">
            <p className="text-slate-600 leading-relaxed">
              Sometimes the best exit isn't about stock quality — it's about portfolio balance. 
              When a winning stock grows to dominate your portfolio, selling to rebalance is prudent risk management.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-teal-100">
                <p className="text-xs font-bold text-teal-900 uppercase mb-2">Trigger 1</p>
                <p className="text-xs text-slate-600">
                  Single stock becomes <strong>&gt;20% of portfolio</strong> → Sell down to 10-15%
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-teal-100">
                <p className="text-xs font-bold text-teal-900 uppercase mb-2">Trigger 2</p>
                <p className="text-xs text-slate-600">
                  Equity allocation goes from <strong>70% to 85%</strong> → Book profits to restore 70:30
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-teal-100">
                <p className="text-xs font-bold text-teal-900 uppercase mb-2">Trigger 3</p>
                <p className="text-xs text-slate-600">
                  Sector concentration <strong>&gt;30%</strong> → Diversify to reduce risk
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The Psychology of Selling */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-[2.5rem] p-8 md:p-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <AlertCircle className="w-7 h-7" />
          The Psychology of Selling
        </h3>
        <div className="space-y-4 text-slate-200">
          <p className="leading-relaxed">
            Humans are wired to avoid regret. We hold losers hoping they'll recover (avoiding regret of loss realization) 
            and sell winners too early (avoiding regret of giving back gains). This is called the <strong className="text-white">disposition effect</strong>.
          </p>
          <p className="leading-relaxed">
            The antidote? <strong className="text-white">Have a plan before you buy.</strong> Write down:
          </p>
          <ul className="space-y-2 pl-6">
            <li className="flex gap-2 text-sm">
              <span className="text-emerald-400">•</span>
              Why did I buy this stock? (Thesis)
            </li>
            <li className="flex gap-2 text-sm">
              <span className="text-emerald-400">•</span>
              At what price/scenario will I sell? (Exit triggers)
            </li>
            <li className="flex gap-2 text-sm">
              <span className="text-emerald-400">•</span>
              How will I measure if my thesis is still valid? (Quarterly review)
            </li>
          </ul>
          <div className="p-4 bg-white/10 rounded-xl border border-white/20 mt-6">
            <p className="text-sm italic">
              "The stock market is a device for transferring money from the impatient to the patient. But also from those who don't know when to exit to those who do." 
              — Adapted from Warren Buffett
            </p>
          </div>
        </div>
      </section>

      {/* Final Wisdom */}
      <div className="p-8 bg-gradient-to-r from-orange-100 to-pink-100 rounded-[2.5rem] border border-orange-200">
        <p className="text-center text-slate-800 text-base italic">
          💡 <strong>Remember:</strong> The goal isn't to sell at the absolute peak (impossible to predict). 
          The goal is to sell when your investment thesis changes, fundamentals weaken, or risk-reward becomes unfavorable. 
          <br /><br />
          <strong className="text-orange-800">Protect your capital first. Maximize gains second.</strong>
        </p>
      </div>
    </div>
  );
};

export default ExitStrategy;
