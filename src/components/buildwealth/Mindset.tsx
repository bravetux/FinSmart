"use client";

import React from 'react';
import { 
  Brain, 
  Timer, 
  Compass, 
  Lightbulb, 
  TrendingDown, 
  Users, 
  ShoppingCart, 
  AlertTriangle,
  Target,
  Zap,
  Shield,
  XCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mindsetPoints = [
  {
    title: "Delayed Gratification",
    desc: "The ability to resist a small reward now for a much larger one later is the #1 predictor of financial success.",
    icon: <Timer className="w-5 h-5 text-amber-600" />,
    color: "bg-amber-50"
  },
  {
    title: "Long-term Thinking",
    desc: "Wealth is built over decades, not days. Train your mind to ignore short-term noise and focus on compounding.",
    icon: <Compass className="w-5 h-5 text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    title: "Continuous Learning",
    desc: "Your greatest asset is your knowledge. Stay curious about how money works and how the world changes.",
    icon: <Lightbulb className="w-5 h-5 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Discipline over Emotion",
    desc: "Don't let fear or greed drive your decisions. Stick to your plan even when the market feels chaotic.",
    icon: <Brain className="w-5 h-5 text-purple-600" />,
    color: "bg-purple-50"
  }
];

const Mindset = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 p-8 md:p-12 text-white shadow-2xl">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
            <Brain className="w-4 h-4" />
            Psychology of Wealth Building
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Master Your Money Mindset</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            Before you invest your money, invest in your mindset. <strong>95% of investing is psychology, only 5% is strategy.</strong> These mental models separate wealth builders from wealth destroyers.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Core 4 Principles */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">The 4 Core Principles</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Delayed Gratification",
              desc: "The ability to resist a small reward now for a much larger one later is the #1 predictor of financial success.",
              example: "Skip ₹5K/month Starbucks → ₹6L in 10 years @ 12% return",
              icon: <Timer className="w-5 h-5" />,
              color: "amber"
            },
            {
              title: "Long-term Thinking",
              desc: "Wealth is built over decades, not days. Train your mind to ignore short-term noise and focus on compounding.",
              example: "2020 crash: -40%. Those who held: +120% by 2024.",
              icon: <Compass className="w-5 h-5" />,
              color: "blue"
            },
            {
              title: "Continuous Learning",
              desc: "Your greatest asset is your knowledge. Stay curious about how money works and how the world changes.",
              example: "1 hour/week of financial reading = ₹50L+ extra wealth over career",
              icon: <Lightbulb className="w-5 h-5" />,
              color: "emerald"
            },
            {
              title: "Discipline over Emotion",
              desc: "Don't let fear or greed drive your decisions. Stick to your plan even when the market feels chaotic.",
              example: "SIP investors outperform 90% of traders who try to time the market",
              icon: <Brain className="w-5 h-5" />,
              color: "purple"
            }
          ].map((point, i) => (
            <Card key={i} className={`border-${point.color}-200 bg-${point.color}-50/50 shadow-sm hover:shadow-md transition-shadow`}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`bg-${point.color}-100 text-${point.color}-700 p-2 rounded-lg`}>
                    {point.icon}
                  </div>
                  <CardTitle className="text-base text-slate-900">{point.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                <p className="text-xs text-slate-500 italic">💡 {point.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Behavioral Biases */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-700">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">5 Deadly Behavioral Biases</h2>
        </div>
        <p className="text-sm text-slate-600">These psychological traps destroy wealth. Recognize them, avoid them.</p>
        
        <div className="space-y-4">
          {[
            {
              bias: "Loss Aversion",
              desc: "The pain of losing ₹10,000 is psychologically 2x stronger than the joy of gaining ₹10,000.",
              trap: "Selling winners too early, holding losers too long (\"it will recover\")",
              fix: "Set stop-loss rules before you invest. Accept small losses to protect big gains.",
              severity: "🔴 Deadly",
              color: "red"
            },
            {
              bias: "Recency Bias",
              desc: "You give too much weight to recent events and assume recent trends will continue forever.",
              trap: "2021: \"Crypto will 100x!\" → Bought at peak. 2022: -70% crash.",
              fix: "Study 30-year history, not last 3 months. Market cycles repeat.",
              severity: "🟠 High Risk",
              color: "orange"
            },
            {
              bias: "Herd Mentality",
              desc: "Following the crowd feels safe, but crowds are usually wrong at market extremes.",
              trap: "Everyone buying stocks in bull peak, everyone selling in bear bottom",
              fix: "\"Be fearful when others are greedy, greedy when others are fearful\" - Buffett",
              severity: "🟠 High Risk",
              color: "orange"
            },
            {
              bias: "Confirmation Bias",
              desc: "You seek information that confirms what you already believe and ignore contradictory evidence.",
              trap: "Bought a stock, then only read positive news about it while ignoring red flags",
              fix: "Actively seek opposing views. Ask \"What if I'm wrong?\"",
              severity: "🟡 Medium Risk",
              color: "yellow"
            },
            {
              bias: "Overconfidence",
              desc: "90% of traders think they're above average. 90% lose money. Math doesn't add up.",
              trap: "\"I can time the market\" → trading frequently → losing to transaction costs",
              fix: "Track your actual returns. Most people underperform index funds.",
              severity: "🟡 Medium Risk",
              color: "yellow"
            }
          ].map((item, i) => (
            <Card key={i} className="border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        {item.bias}
                        <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-600">
                          {item.severity}
                        </span>
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <p className="text-xs font-bold text-red-900 mb-1 flex items-center gap-1">
                        <XCircle className="w-3 h-3" /> The Trap
                      </p>
                      <p className="text-xs text-red-700">{item.trap}</p>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <p className="text-xs font-bold text-emerald-900 mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> The Fix
                      </p>
                      <p className="text-xs text-emerald-700">{item.fix}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Lifestyle Inflation Traps */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-700">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Lifestyle Inflation: The Silent Wealth Killer</h2>
        </div>
        
        <Card className="border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900">The Trap</h3>
              <p className="text-sm text-slate-700">
                You get a <strong>₹5L salary hike</strong>. Your brain says "I deserve this new car/bigger house/international vacation." 
                Your lifestyle expands to match your income. <strong>Net result: Still living paycheck to paycheck at ₹20 LPA.</strong>
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border-2 border-pink-200">
              <h4 className="text-sm font-bold text-pink-900 mb-3">The Math</h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span>Salary: ₹10L → ₹15L (50% hike)</span>
                  <span className="font-bold text-emerald-600">+₹5L</span>
                </div>
                <div className="flex justify-between">
                  <span>If you inflate lifestyle by 100% of hike:</span>
                  <span className="font-bold text-red-600">₹0 extra savings</span>
                </div>
                <div className="flex justify-between">
                  <span>If you save 50% of hike (₹2.5L/year):</span>
                  <span className="font-bold text-emerald-600">₹50L in 10 years</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900">Common Lifestyle Inflation Traps</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { trap: "Car Upgrade (₹15L loan)", cost: "₹30K EMI × 5 years = ₹18L → Could be ₹40L invested" },
                  { trap: "Moving to Bigger House", cost: "₹20K extra rent × 10 years = ₹24L → Could be ₹55L invested" },
                  { trap: "Eating Out 3x/week", cost: "₹15K/month × 10 years = ₹18L → Could be ₹42L invested" },
                  { trap: "Premium Subscriptions Stack", cost: "₹5K/month × 10 years = ₹6L → Could be ₹14L invested" }
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white rounded-lg border border-rose-200">
                    <p className="text-xs font-bold text-slate-900">{item.trap}</p>
                    <p className="text-xs text-red-600 mt-1">{item.cost}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-emerald-100 rounded-xl border border-emerald-300">
              <h4 className="text-sm font-bold text-emerald-900 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" /> The Defense Strategy
              </h4>
              <ul className="text-xs text-emerald-900 space-y-1">
                <li>• <strong>50/50 Rule:</strong> For every ₹1L salary increase, save ₹50K more, enjoy ₹50K more</li>
                <li>• <strong>Automate First:</strong> Increase SIP on the day you get your hike (before lifestyle adjusts)</li>
                <li>• <strong>Delay Gratification:</strong> Wait 6 months before making big purchases with new income</li>
                <li>• <strong>Track Net Worth, Not Income:</strong> A ₹30 LPA earner with ₹0 savings is poorer than ₹12 LPA earner with ₹25L corpus</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FOMO & Comparison Traps */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">FOMO & Social Comparison Trap</h2>
        </div>

        <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="p-4 bg-white rounded-xl border-2 border-cyan-200">
              <h3 className="text-sm font-bold text-cyan-900 mb-2">The Social Media Illusion</h3>
              <div className="space-y-3 text-xs text-slate-700">
                <p>Friend posts: "Just bought my 3rd property! 🏠💰 #blessed"</p>
                <p className="text-red-600">What you don't see: ₹80L loan, 20-year EMI, father's ₹50L help, leveraged to the neck</p>
                <p>Colleague: "Made ₹5L in crypto this month! 🚀"</p>
                <p className="text-red-600">What you don't see: Lost ₹8L last year, only shares wins, survivorship bias</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-600" /> FOMO Triggers
                </h4>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li>• "Everyone is buying stocks, I'm missing out"</li>
                  <li>• "Crypto just 10x, I need to jump in NOW"</li>
                  <li>• "My friends drive BMWs, I need one too"</li>
                  <li>• "Colleague earning ₹50L, I'm only at ₹25L"</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Reality Checks
                </h4>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li>• Markets peak when "everyone" is buying (danger zone)</li>
                  <li>• Crypto 10x stories ignore the 90% who lost money</li>
                  <li>• BMW = depreciating asset + ₹30K/month EMI</li>
                  <li>• Compare your Year 1 to your Year 5, not to others</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl border border-emerald-300">
              <h4 className="text-sm font-bold text-emerald-900 mb-2">The Antidote</h4>
              <ul className="text-xs text-emerald-900 space-y-1">
                <li>• <strong>Compete with your past self,</strong> not with strangers on Instagram</li>
                <li>• <strong>Unfollow financial flex accounts</strong> that trigger FOMO and comparison</li>
                <li>• <strong>Focus on your financial independence number,</strong> not others' lifestyles</li>
                <li>• <strong>Remember:</strong> Visible consumption (car, watch) ≠ Invisible wealth (investments, peace of mind)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Market Crash Psychology */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700">
            <TrendingDown className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Surviving Market Crashes: Mental Toughness Guide</h2>
        </div>

        <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg">
          <CardContent className="p-6 space-y-5">
            <div className="p-4 bg-white rounded-xl border-2 border-indigo-200">
              <h3 className="text-sm font-bold text-indigo-900 mb-3">What Happens in a Crash</h3>
              <div className="space-y-2 text-xs text-slate-700">
                <p>📉 Your ₹10L portfolio drops to ₹6L overnight (-40%)</p>
                <p>😰 Every news channel: "Worst crash since 2008! More pain ahead!"</p>
                <p>👥 Friends/family: "I told you stocks are risky, sell everything!"</p>
                <p>🧠 Your brain: "PANIC! SELL NOW! SAVE WHAT'S LEFT!"</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                <h4 className="text-sm font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> Wrong Moves (Emotional)
                </h4>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• Panic selling at the bottom (₹6L)</li>
                  <li>• Stopping SIP when market is cheap</li>
                  <li>• Checking portfolio 10x/day (torture)</li>
                  <li>• Making decisions based on news headlines</li>
                  <li>• Believing "this time is different"</li>
                </ul>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <h4 className="text-sm font-bold text-emerald-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Right Moves (Disciplined)
                </h4>
                <ul className="text-xs text-emerald-700 space-y-1">
                  <li>• Hold everything, change nothing</li>
                  <li>• Continue SIP (buying at discount!)</li>
                  <li>• Check portfolio once a month max</li>
                  <li>• Study history: all crashes recovered</li>
                  <li>• Bonus money? Invest MORE at low prices</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900">Historical Crash Recovery Times</h4>
              <div className="space-y-2">
                {[
                  { crash: "2020 COVID Crash (-40%)", recovery: "6 months", gain: "+120% by 2024" },
                  { crash: "2008 Financial Crisis (-60%)", recovery: "3 years", gain: "+400% by 2020" },
                  { crash: "2000 Dot-com Bubble (-50%)", recovery: "7 years", gain: "+300% by 2020" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-indigo-200">
                    <div className="text-xs">
                      <p className="font-bold text-slate-900">{item.crash}</p>
                      <p className="text-slate-600 mt-1">Recovery: {item.recovery} • Then: {item.gain}</p>
                    </div>
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl">
              <h4 className="text-sm font-bold mb-2">The Ultimate Mental Model</h4>
              <p className="text-xs leading-relaxed">
                <strong>"Crashes are sales, not catastrophes."</strong> When Nifty 50 drops 40%, it's like your favorite stock trading at 40% off. 
                The investors who got rich didn't avoid crashes—they <strong>bought during</strong> them while everyone else panicked.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The Patience Compound */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">The Psychology of Compounding Patience</h2>
        </div>

        <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <p className="text-sm text-slate-700">
              <strong>Why most people fail at wealth building:</strong> They expect linear growth. 
              Compounding is exponential—<strong>nothing happens for years, then everything happens at once.</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  phase: "Years 1-5",
                  title: "The Frustration Phase",
                  desc: "Save ₹10K/month × 5 years = ₹6L corpus. Feels slow. Friends making more in crypto gambling.",
                  emotion: "😤 Impatient",
                  color: "red"
                },
                {
                  phase: "Years 6-12",
                  title: "The Momentum Phase",
                  desc: "₹6L grows to ₹25L. Returns start matching your contributions. Starting to feel real.",
                  emotion: "🙂 Hopeful",
                  color: "yellow"
                },
                {
                  phase: "Years 13-20",
                  title: "The Explosion Phase",
                  desc: "₹25L becomes ₹1Cr. Your money makes more than your job. Compounding dominates. Magic happens.",
                  emotion: "🤯 Amazed",
                  color: "emerald"
                }
              ].map((item, i) => (
                <div key={i} className={`p-4 bg-${item.color}-50 rounded-xl border-2 border-${item.color}-200`}>
                  <div className="text-xs font-bold text-slate-600 mb-1">{item.phase}</div>
                  <h3 className={`text-md font-bold text-${item.color === 'yellow' ? 'amber' : item.color}-900 mb-2`}>{item.title}</h3>
                  <p className="text-xs text-slate-700 mb-3">{item.desc}</p>
                  <div className={`text-2xl text-center p-2 bg-white rounded-lg border border-${item.color}-200`}>
                    {item.emotion}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl">
              <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                The Mindset Shift That Changes Everything
              </h4>
              <p className="text-xs leading-relaxed mb-3">
                Most people quit in Years 1-5 because they don't see "results." The wealthy understand: 
                <strong> The first decade is planting seeds. The second decade is harvesting the forest.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <p className="font-bold">Warren Buffett's Wealth</p>
                  <p className="mt-1">99% accumulated after age 50. He's been investing since age 11.</p>
                </div>
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <p className="font-bold">Charlie Munger's Advice</p>
                  <p className="mt-1">"The first $100K is a b*tch. After that, it's just math."</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final Mindset Checklist */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <Zap className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Your Daily Mental Checklist</h2>
        </div>

        <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Am I making this decision with logic or emotion?",
                "Would I still do this if the market crashes 40% tomorrow?",
                "Am I following my plan, or reacting to noise?",
                "Is this purchase bringing lasting value or instant gratification?",
                "Am I comparing myself to my past or to others' highlight reels?",
                "Have I automated my investments, or am I relying on willpower?",
                "Am I focused on my financial independence number or keeping up with peers?",
                "Can I sleep peacefully with this investment decision?"
              ].map((question, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-700">{question}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl shadow-2xl">
        <h3 className="text-xl font-bold mb-3">Remember: Psychology > Strategy</h3>
        <p className="text-sm text-purple-100 mb-4 max-w-2xl">
          The difference between ₹10 Crore and ₹0 at retirement isn't intelligence or strategy—it's <strong>mental discipline, patience, and avoiding emotional mistakes</strong>. 
          Master your mind first, money follows.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm text-sm">
            ✓ Know your biases
          </div>
          <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm text-sm">
            ✓ Resist lifestyle inflation
          </div>
          <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm text-sm">
            ✓ Ignore FOMO
          </div>
          <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm text-sm">
            ✓ Stay disciplined in crashes
          </div>
          <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm text-sm">
            ✓ Trust the compound curve
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mindset;