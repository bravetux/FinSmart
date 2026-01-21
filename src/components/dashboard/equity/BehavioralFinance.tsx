"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, AlertTriangle, Eye, Target, Anchor, TrendingUp, Users, BookOpen, CheckCircle2, Zap } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const BehavioralFinance = () => {
  const biases = [
    {
      name: "Confirmation Bias",
      icon: <Eye className="w-5 h-5 text-blue-600" />,
      description: "Seeking information that confirms your existing beliefs while ignoring contradictory evidence",
      example: "You bought a stock at ₹500. It falls to ₹400. You only read articles praising the company and ignore analyst downgrades.",
      remedy: "Actively seek opposing viewpoints. Ask: 'What if I'm wrong?'"
    },
    {
      name: "Anchoring Bias",
      icon: <Anchor className="w-5 h-5 text-purple-600" />,
      description: "Fixating on a specific reference point (usually your purchase price) and making decisions based on it",
      example: "You bought at ₹1000. Stock is now ₹600 with poor fundamentals, but you hold because 'it will come back to ₹1000.'",
      remedy: "Evaluate the stock based on current fundamentals, not your entry price."
    },
    {
      name: "Recency Bias",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      description: "Giving too much weight to recent events and assuming they'll continue indefinitely",
      example: "Market has gone up for 6 months straight, so you believe it will keep going up and invest heavily at the top.",
      remedy: "Study historical cycles. Recent trend ≠ future certainty."
    },
    {
      name: "Herd Mentality",
      icon: <Users className="w-5 h-5 text-orange-600" />,
      description: "Following the crowd without independent analysis, assuming 'everyone can't be wrong'",
      example: "Your neighbor made 50% in a penny stock, so you buy it without research. Later it crashes.",
      remedy: "Do your own research. Remember: crowd is usually wrong at extremes."
    },
    {
      name: "Loss Aversion",
      icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
      description: "The pain of losing money is psychologically twice as powerful as the pleasure of gaining it",
      example: "You hold a losing stock forever hoping it recovers, but quickly sell winners to 'lock in' small gains.",
      remedy: "Cut losers early, let winners run. Use stop-losses systematically."
    },
    {
      name: "Overconfidence Bias",
      icon: <Zap className="w-5 h-5 text-yellow-600" />,
      description: "Believing you know more than you do, leading to excessive risk-taking or overtrading",
      example: "You made money on 3 trades, so you think you've 'cracked the market' and start trading with higher stakes.",
      remedy: "Track your win rate honestly. Stay humble. Markets will humble you."
    }
  ];

  const emotions = [
    { emotion: "Fear", when: "Market crashes, bad news", action: "Panic selling at bottoms", counter: "Remember: Fear creates the best buying opportunities" },
    { emotion: "Greed", when: "Market euphoria, everyone profiting", action: "Buying overvalued stocks at tops", counter: "Remember: Be fearful when others are greedy" },
    { emotion: "Hope", when: "Holding a losing position", action: "Refusing to accept losses", counter: "Hope is not a strategy. Cut your losses" },
    { emotion: "Regret", when: "Missing a rally or selling early", action: "FOMO buying or revenge trading", counter: "Focus on your process, not missed opportunities" }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Brain className="w-4 h-4" />
            <span>Investor Psychology</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Behavioral Finance & Psychology
          </h2>
          <p className="text-purple-100 text-lg max-w-xl">
            Your biggest enemy in investing isn't the market — it's your own mind. Learn to recognize and overcome the psychological traps that destroy wealth.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Why It Matters */}
      <section className="bg-amber-50 border border-amber-100 rounded-[2.5rem] p-8 md:p-12">
        <div className="flex items-start gap-6">
          <div className="p-3 bg-amber-500 rounded-2xl text-white shrink-0">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-amber-900">The Paradox of Investing</h3>
            <p className="text-amber-800 leading-relaxed">
              Investing is simple, but not easy. The math is straightforward: Buy low, sell high. Hold quality. Be patient. 
              Yet <strong>95% of retail investors underperform the market</strong>. Why?
            </p>
            <p className="text-amber-800 leading-relaxed font-medium">
              Because human psychology is wired for survival, not wealth creation. Our instincts tell us to run from danger (sell in crashes) 
              and chase what's working (buy in bubbles). Successful investing requires going against these instincts.
            </p>
          </div>
        </div>
      </section>

      {/* Common Biases */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" /> The 6 Deadly Biases
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Recognize these mental traps that cause even smart people to make terrible investment decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {biases.map((bias, i) => (
            <Card key={i} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {bias.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">Bias #{i + 1}</Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{bias.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">{bias.description}</p>

                <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                  <p className="text-[10px] font-bold text-red-800 uppercase mb-1">Example</p>
                  <p className="text-[10px] text-red-700 leading-relaxed italic">{bias.example}</p>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-[10px] font-bold text-emerald-800 uppercase mb-1">The Fix</p>
                  <p className="text-[10px] text-emerald-700 leading-relaxed font-medium">{bias.remedy}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Emotions Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-600" /> The Emotional Cycle
        </h3>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-bold">Emotion</th>
                    <th className="text-left p-3 font-bold">When It Strikes</th>
                    <th className="text-left p-3 font-bold">Bad Action</th>
                    <th className="text-left p-3 font-bold">Counter-Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  {emotions.map((item, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-3 font-bold text-indigo-700">{item.emotion}</td>
                      <td className="p-3 text-slate-600">{item.when}</td>
                      <td className="p-3 text-red-700">{item.action}</td>
                      <td className="p-3 text-emerald-700 font-medium">{item.counter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Decision Framework */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" /> Building a Decision Framework
        </h3>
        <p className="text-slate-600 max-w-3xl">
          Since emotions can't be eliminated, create systems that bypass them. Here's a framework used by successful investors:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">Before You Buy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Write down your thesis (why you're buying)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Set a price target based on fundamentals</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Define your exit criteria (both profit and loss)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Decide position size (max 5% of portfolio)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Wait 24 hours before executing (cooling period)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50/50">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-800">While You Hold</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Review quarterly earnings vs your thesis</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Track if fundamentals are improving or deteriorating</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Ignore daily price movements (check weekly at most)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Journal your emotions when tempted to sell</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /> Rebalance only at set intervals (6-12 months)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800">When to Sell</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Your original thesis is broken (fundamentals changed)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Stock is 50%+ overvalued vs intrinsic value</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> You found a significantly better opportunity</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Stop-loss triggered (protect capital)</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Position size exceeded 10% due to gains</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-lg text-red-800">Never Sell Because</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" /> Price went down (if thesis intact)</li>
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" /> You're bored or anxious</li>
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" /> Someone on TV said so</li>
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" /> You need to 'do something'</li>
                <li className="flex gap-2"><AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" /> Fear of missing out on another stock</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Journaling */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">The Power of Journaling</h3>
            <p className="text-slate-600 leading-relaxed">
              Keep an investment journal. Write down:
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2"><span>•</span> Why you bought (thesis)</li>
              <li className="flex gap-2"><span>•</span> What you expected to happen</li>
              <li className="flex gap-2"><span>•</span> How you felt at the time</li>
              <li className="flex gap-2"><span>•</span> Why you sold (or are still holding)</li>
              <li className="flex gap-2"><span>•</span> What you learned from mistakes</li>
            </ul>
            <p className="text-sm text-slate-600 italic">
              Reviewing your journal reveals patterns in your decision-making and helps you learn from both wins and losses.
            </p>
          </div>
          <div className="flex-1">
            <div className="p-8 bg-white rounded-2xl border-2 border-dashed border-slate-200 shadow-sm">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-center text-xs text-slate-500 italic">
                "I don't look to jump over 7-foot bars: I look around for 1-foot bars that I can step over."
              </p>
              <p className="text-center text-xs text-slate-700 font-bold mt-2">— Warren Buffett</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem]">
        <h4 className="text-xl font-bold mb-4">"The investor's chief problem—and even his worst enemy—is likely to be himself."</h4>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
          — Benjamin Graham, The Intelligent Investor
        </p>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mt-4">
          Master your psychology before you master the market. All the fundamental and technical knowledge in the world won't help if you can't control your emotions.
        </p>
      </div>
    </div>
  );
};

export default BehavioralFinance;
