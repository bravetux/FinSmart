"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Clock,
  Target,
  TrendingUp,
  Scale,
  Sparkles,
  BookOpen,
  CheckCircle,
  XCircle,
  AlertCircle,
  Lightbulb,
  Heart,
  Zap,
  Trophy,
  DollarSign,
  PiggyBank,
  LineChart
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const WealthMindset = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Brain className="w-12 h-12 text-purple-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Developing a Wealth-Building Mindset</h2>
          <p className="text-lg text-purple-100 max-w-2xl">
            Your relationship with money determines your financial future. Master these mental models to build lasting wealth.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 -ml-32 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Table of Contents */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            Table of Contents
          </CardTitle>
          <CardDescription>Jump to any section</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            <a href="#delayed-gratification" className="flex items-center gap-2 p-3 rounded-lg hover:bg-purple-50 transition-colors group">
              <Clock className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-slate-700 group-hover:text-purple-600 font-medium">Delayed Gratification</span>
            </a>
            <a href="#assets-vs-liabilities" className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
              <Scale className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-slate-700 group-hover:text-blue-600 font-medium">Assets vs Liabilities</span>
            </a>
            <a href="#time-value-money" className="flex items-center gap-2 p-3 rounded-lg hover:bg-amber-50 transition-colors group">
              <Zap className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-slate-700 group-hover:text-amber-600 font-medium">Time Value of Money</span>
            </a>
            <a href="#long-term-thinking" className="flex items-center gap-2 p-3 rounded-lg hover:bg-teal-50 transition-colors group">
              <Target className="w-4 h-4 text-teal-600" />
              <span className="text-sm text-slate-700 group-hover:text-teal-600 font-medium">Long-Term Thinking</span>
            </a>
            <a href="#comparison-trap" className="flex items-center gap-2 p-3 rounded-lg hover:bg-pink-50 transition-colors group">
              <Sparkles className="w-4 h-4 text-pink-600" />
              <span className="text-sm text-slate-700 group-hover:text-pink-600 font-medium">Avoiding Comparison Trap</span>
            </a>
            <a href="#financial-mistakes" className="flex items-center gap-2 p-3 rounded-lg hover:bg-orange-50 transition-colors group">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span className="text-sm text-slate-700 group-hover:text-orange-600 font-medium">Learning from Mistakes</span>
            </a>
            <a href="#smart-goals" className="flex items-center gap-2 p-3 rounded-lg hover:bg-indigo-50 transition-colors group">
              <Target className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-slate-700 group-hover:text-indigo-600 font-medium">SMART Financial Goals</span>
            </a>
            <a href="#financial-literacy" className="flex items-center gap-2 p-3 rounded-lg hover:bg-green-50 transition-colors group">
              <BookOpen className="w-4 h-4 text-green-600" />
              <span className="text-sm text-slate-700 group-hover:text-green-600 font-medium">Financial Literacy</span>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Delayed Gratification Section */}
      <section id="delayed-gratification" className="space-y-6 scroll-mt-20">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-purple-600" /> Delayed Gratification: The Wealth Superpower
        </h3>
        
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle>Small Sacrifices Now, Big Freedom Later</CardTitle>
            <CardDescription>The marshmallow test for adults</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">What is Delayed Gratification?</p>
              <p className="text-sm text-slate-700">Resisting the temptation of immediate reward to gain a more substantial reward later. In finance: sacrificing consumption today to build wealth for tomorrow. The difference between "I want it now" and "I'll build to afford it."</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">Real-World Wealth Trade-offs:</p>
              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Scenario: The {currency.symbol}5 Lakh Decision</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-red-900 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Instant Gratification
                      </p>
                      <p className="text-xs text-slate-700 mt-2">Buy {currency.symbol}5L car at age 25</p>
                      <ul className="text-xs text-slate-600 mt-2 space-y-1 ml-3">
                        <li>• Drive fancy car: 5-7 years</li>
                        <li>• Car value at 32: {currency.symbol}1.5-2L</li>
                        <li>• Total cost (EMI + maintenance): {currency.symbol}7L+</li>
                        <li>• Net result: Asset depreciated</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-green-900 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" /> Delayed Gratification
                      </p>
                      <p className="text-xs text-slate-700 mt-2">Invest {currency.symbol}5L in mutual funds at age 25</p>
                      <ul className="text-xs text-slate-600 mt-2 space-y-1 ml-3">
                        <li>• Use metro/bike for 7 years</li>
                        <li>• Investment value at 32: {currency.symbol}8.5L (12% CAGR)</li>
                        <li>• At 40: {currency.symbol}20L+</li>
                        <li>• Buy better car at 32 in cash</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-green-700 font-semibold mt-3">The patient person ends up with both wealth AND the car. The impatient person has neither.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900 mb-2">The Compound Effect of Small Delays:</p>
                  <div className="space-y-2">
                    <div className="text-sm text-slate-700">
                      <p className="font-semibold">Daily {currency.symbol}200 coffee → Cook at home ({currency.symbol}20)</p>
                      <p className="text-xs text-slate-600">Save {currency.symbol}180/day × 25 days = {currency.symbol}4,500/month</p>
                      <p className="text-xs text-green-700 font-semibold">Invested for 20 years: {currency.symbol}53L+ (@12% return)</p>
                    </div>
                    <div className="text-sm text-slate-700 mt-2">
                      <p className="font-semibold">Weekend pub nights ({currency.symbol}3K × 2) → Home parties ({currency.symbol}500)</p>
                      <p className="text-xs text-slate-600">Save {currency.symbol}5,500/month</p>
                      <p className="text-xs text-green-700 font-semibold">Invested for 20 years: {currency.symbol}65L+ (@12% return)</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 mt-3">Small sacrifices compound into life-changing wealth. But only if you have the discipline to delay.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-yellow-900 mb-2">Training Your Delayed Gratification Muscle:</p>
              <ol className="text-sm text-slate-700 space-y-1 ml-4">
                <li>1. <strong>30-day rule:</strong> Want something expensive? Wait 30 days. Still want it? Then consider.</li>
                <li>2. <strong>Visualize future self:</strong> Will 40-year-old you thank you for this decision?</li>
                <li>3. <strong>Calculate opportunity cost:</strong> This {currency.symbol}50K gadget = {currency.symbol}2.5L in 15 years</li>
                <li>4. <strong>Small wins:</strong> Delay small purchases (skip daily snack) to build the habit</li>
                <li>5. <strong>Automate savings:</strong> Money invested first = no willpower needed</li>
              </ol>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg">
              <p className="font-semibold text-sm text-purple-900 mb-2"><Lightbulb className="w-4 h-4 inline mr-1" /> The Paradox:</p>
              <p className="text-sm text-slate-700">Those who can delay gratification end up enjoying MORE gratification later. The person who waits to buy a car in cash enjoys it guilt-free, with no EMI stress. The person who buys on impulse is stressed and house-poor for years.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Assets vs Liabilities Section */}
      <section id="assets-vs-liabilities" className="space-y-6 scroll-mt-20">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Scale className="w-6 h-6 text-blue-600" /> Assets vs Liabilities: Know the Difference
        </h3>
        
        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle>Rich People Buy Assets, Poor People Buy Liabilities</CardTitle>
            <CardDescription>Simple truth that changes everything</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">The Definitions That Matter:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded-lg border-2 border-green-300">
                  <p className="text-sm font-semibold text-green-900 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> ASSET
                  </p>
                  <p className="text-sm text-slate-700 mt-2">Puts money IN your pocket over time. Generates income or appreciates in value.</p>
                  <p className="text-xs text-green-700 font-semibold mt-2">You OWN it, it PAYS you</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg border-2 border-red-300">
                  <p className="text-sm font-semibold text-red-900 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 rotate-180" /> LIABILITY
                  </p>
                  <p className="text-sm text-slate-700 mt-2">Takes money OUT of your pocket over time. Costs money to maintain or depreciates.</p>
                  <p className="text-xs text-red-700 font-semibold mt-2">You OWN it, you PAY it</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">Classification Examples (Reality Check):</p>
              <div className="space-y-2">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">ASSETS (Build These)</p>
                      <ul className="text-xs text-slate-700 mt-1 space-y-0.5 ml-3">
                        <li>• Stocks, mutual funds, index funds (grow wealth)</li>
                        <li>• Rental property (generates monthly income)</li>
                        <li>• Business/side hustle (produces income)</li>
                        <li>• Skills & certifications (increase earning power)</li>
                        <li>• Gold/bonds (store value, beat inflation)</li>
                        <li>• Dividend-paying investments (passive income)</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">LIABILITIES (Minimize These)</p>
                      <ul className="text-xs text-slate-700 mt-1 space-y-0.5 ml-3">
                        <li>• Car (depreciates + maintenance + insurance + fuel)</li>
                        <li>• Self-occupied home (EMI + maintenance, no income)</li>
                        <li>• Personal loans, credit card debt (interest drains wealth)</li>
                        <li>• Expensive gadgets (depreciate fast, no return)</li>
                        <li>• Subscriptions you don't use (monthly cash drain)</li>
                        <li>• Designer clothes/accessories (depreciate to zero)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-yellow-900 mb-2"><AlertCircle className="w-4 h-4 inline mr-1" /> The Big Misconceptions:</p>
              <div className="space-y-2">
                <div className="text-sm text-slate-700">
                  <p className="font-semibold">❌ "My house is my biggest asset"</p>
                  <p className="text-xs text-slate-600 ml-4">NO. If you live in it, it's a liability (EMI + maintenance + tax, no income). Only rental property or house you plan to sell for profit = asset.</p>
                </div>
                <div className="text-sm text-slate-700">
                  <p className="font-semibold">❌ "My car is an asset"</p>
                  <p className="text-xs text-slate-600 ml-4">NO. Unless it's an Uber/Ola car generating income. Personal car loses 20-40% value in 3 years + costs money monthly = pure liability.</p>
                </div>
                <div className="text-sm text-slate-700">
                  <p className="font-semibold">❌ "I need to look successful to be successful"</p>
                  <p className="text-xs text-slate-600 ml-4">NO. Luxury watch, designer clothes, fancy car = liabilities. Successful people prioritize assets first, liabilities later (if at all).</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-green-900 mb-2">The Wealth-Building Strategy:</p>
              <ol className="text-sm text-slate-700 space-y-2 ml-4">
                <li>1. <strong>Age 20-30:</strong> Buy ONLY assets. Minimize liabilities. Live frugal. Accumulate wealth.</li>
                <li>2. <strong>Age 30-40:</strong> Assets start generating income. Now you can afford some liabilities (if you must).</li>
                <li>3. <strong>Age 40+:</strong> Asset income covers lifestyle. Buy liabilities guilt-free with asset-generated cash.</li>
              </ol>
              <p className="text-sm text-slate-700 mt-3 font-semibold">The poor do it in reverse: Buy liabilities first (car, gadgets), wonder why they can't build wealth.</p>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">The Mental Shift:</p>
              <p className="text-sm text-slate-700">Before ANY purchase, ask: "Is this an asset or liability?" If liability: "Can I delay this until my assets can pay for it?" This one habit separates wealthy mindset from broke mindset.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Time Value of Money Section */}
      <section id="time-value-money" className="space-y-6 scroll-mt-20">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-600" /> Time Value of Money: Your Secret Weapon
        </h3>
        
        <Card className="border-amber-200 shadow-lg">
          <CardHeader>
            <CardTitle>Why Starting Early Changes Everything</CardTitle>
            <CardDescription>Compound interest: The 8th wonder of the world</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">The Core Concept:</p>
              <p className="text-sm text-slate-700">{currency.symbol}1,000 today is worth MORE than {currency.symbol}1,000 next year. Why? Because today's {currency.symbol}1,000 can be invested and grow. Money has earning potential. Time is money's multiplier.</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">The Power of Starting Early:</p>
              <div className="bg-slate-50 p-4 rounded-lg space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">Person A: The Early Bird</p>
                  <ul className="text-xs text-slate-700 space-y-1 ml-4">
                    <li>• Starts investing at age 25</li>
                    <li>• Invests {currency.symbol}5,000/month for 10 years (till 35)</li>
                    <li>• Total invested: {currency.symbol}6L</li>
                    <li>• Then STOPS investing, lets it grow</li>
                    <li className="text-green-700 font-semibold pt-2">At age 60: {currency.symbol}2.28 Crore (@12% return)</li>
                  </ul>
                </div>
                <div className="border-t border-slate-300"></div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">Person B: The Late Starter</p>
                  <ul className="text-xs text-slate-700 space-y-1 ml-4">
                    <li>• Starts investing at age 35 (same age A stopped)</li>
                    <li>• Invests {currency.symbol}5,000/month for 25 years (till 60)</li>
                    <li>• Total invested: {currency.symbol}15L (2.5x more than A!)</li>
                    <li>• Invests consistently till retirement</li>
                    <li className="text-orange-700 font-semibold pt-2">At age 60: {currency.symbol}1.89 Crore (@12% return)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-900">The Shocking Result:</p>
                  <p className="text-xs text-slate-700 mt-1">Person A invested LESS ({currency.symbol}6L vs {currency.symbol}15L), for SHORTER time (10 years vs 25 years), but ended up with MORE ({currency.symbol}2.28Cr vs {currency.symbol}1.89Cr).</p>
                  <p className="text-xs text-green-700 font-semibold mt-2">The 10-year head start was worth {currency.symbol}39L+ more at retirement!</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">Compounding Calculator Example:</p>
              <div className="space-y-3">
                <div className="text-sm text-slate-700">
                  <p className="font-semibold">Invest {currency.symbol}10,000/month for 30 years @12% return:</p>
                  <div className="bg-white p-3 rounded mt-2 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Total invested (your money):</span>
                      <span className="font-semibold">{currency.symbol}36 Lakh</span>
                    </div>
                    <div className="flex justify-between text-green-700 font-semibold">
                      <span>Wealth created by compounding:</span>
                      <span>{currency.symbol}3.14 Crore</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-green-800 pt-2 border-t">
                      <span>Total corpus:</span>
                      <span>{currency.symbol}3.50 Crore</span>
                    </div>
                  </div>
                  <p className="text-xs text-blue-700 mt-2">You contributed 10%. Compounding contributed 90%. Time did the heavy lifting.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-red-900 mb-2">The Cost of Delay:</p>
              <p className="text-sm text-slate-700">Delaying investment by just 5 years can cost you CRORES at retirement. "I'll start next year" is the most expensive sentence in personal finance.</p>
              <div className="bg-white p-3 rounded mt-2">
                <div className="text-xs text-slate-700 space-y-1">
                  <div className="flex justify-between">
                    <span>Start at 25 → Corpus at 60:</span>
                    <span className="font-semibold">{currency.symbol}3.50 Cr</span>
                  </div>
                  <div className="flex justify-between text-orange-700">
                    <span>Start at 30 → Corpus at 60:</span>
                    <span className="font-semibold">{currency.symbol}1.99 Cr</span>
                  </div>
                  <div className="flex justify-between text-red-700 font-semibold pt-2 border-t">
                    <span>Cost of 5-year delay:</span>
                    <span>{currency.symbol}1.51 Cr</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-green-900 mb-2">The Action Steps:</p>
              <ol className="text-sm text-slate-700 space-y-1 ml-4">
                <li>1. Start TODAY, even if it's just {currency.symbol}500/month</li>
                <li>2. Increase investment with every salary raise</li>
                <li>3. Never touch long-term investments for 20+ years</li>
                <li>4. Understand: Every year you wait costs exponentially more</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Long-Term Thinking Section */}
      <section id="long-term-thinking" className="space-y-6 scroll-mt-20">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-teal-600" /> Long-Term Thinking in a Short-Term World
        </h3>
        
        <Card className="border-teal-200 shadow-lg">
          <CardHeader>
            <CardTitle>Play the Long Game</CardTitle>
            <CardDescription>Wealth is a marathon, not a sprint</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">Why Long-Term Thinking Wins:</p>
              <p className="text-sm text-slate-700">Stock market crashes? Long-term investor doesn't care - it recovers in 3-5 years. Economy in recession? Long-term thinker sees buying opportunity. Social media flexing? Long-term builder ignores, stays focused on 10-year goals.</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="stock" className="border rounded-lg px-4">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <LineChart className="w-4 h-4 text-teal-600" />
                    <span className="font-semibold">Stock Market: Time Beats Timing</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <p className="font-semibold text-sm">Historical Data (Nifty 50):</p>
                    <div className="text-xs text-slate-700 space-y-1 mt-2">
                      <div className="flex justify-between">
                        <span>1-year holding period:</span>
                        <span className="text-red-600">40% chance of loss</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5-year holding period:</span>
                        <span className="text-orange-600">15% chance of loss</span>
                      </div>
                      <div className="flex justify-between">
                        <span>10-year holding period:</span>
                        <span className="text-green-600">5% chance of loss</span>
                      </div>
                      <div className="flex justify-between">
                        <span>15+ year holding period:</span>
                        <span className="text-green-700 font-semibold">0% chance of loss (historically)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700">Long-term investing isn't risky. Short-term speculation is. Time in the market &gt; Timing the market.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="career" className="border rounded-lg px-4">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-purple-600" />
                    <span className="font-semibold">Career: Build Skills, Not Just Salary</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-slate-700"><strong>Short-term thinker:</strong> Switches jobs every year for 20% raise, learns nothing, plateaus at {currency.symbol}15L/year by 35.</p>
                    <p className="text-sm text-slate-700 mt-2"><strong>Long-term thinker:</strong> Spends 3-5 years building deep expertise, becomes specialist, reaches {currency.symbol}40L+/year by 35 with job security.</p>
                  </div>
                  <p className="text-sm text-slate-700">Optimize for learning in 20s, earning in 30s, compounding in 40s+.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="lifestyle" className="border rounded-lg px-4">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-600" />
                    <span className="font-semibold">Lifestyle: Sustainable &gt; Flashy</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-slate-700"><strong>Short-term thinker:</strong> {currency.symbol}25L salary, {currency.symbol}15L car, {currency.symbol}40K rent, no savings. Looks rich, actually broke. One job loss away from disaster.</p>
                    <p className="text-sm text-slate-700 mt-2"><strong>Long-term thinker:</strong> {currency.symbol}25L salary, {currency.symbol}3L used car, {currency.symbol}20K rent, saves {currency.symbol}12L/year. Looks middle-class, actually building wealth. Financial freedom by 40.</p>
                  </div>
                  <p className="text-sm text-slate-700">Who do you want to be at 50? The flashy 30-year-old who's now stressed, or the frugal 30-year-old who's now free?</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">How to Develop Long-Term Thinking:</p>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• Set 10-year goals, not just annual targets</li>
                <li>• Ask "Where will this decision lead in 5 years?"</li>
                <li>• Ignore short-term market noise, social media flexing</li>
                <li>• Track progress annually, not daily/monthly</li>
                <li>• Surround yourself with long-term thinkers, not get-rich-quick chasers</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Comparison Trap Section */}
      <section id="comparison-trap" className="space-y-6 scroll-mt-20">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-pink-600" /> Avoiding the Comparison Trap
        </h3>
        
        <Card className="border-pink-200 shadow-lg">
          <CardHeader>
            <CardTitle>Stop Comparing, Start Compounding</CardTitle>
            <CardDescription>Your only competition is your past self</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">The Comparison Trap:</p>
              <p className="text-sm text-slate-700">Friend buys BMW → You feel inadequate → You buy car on EMI → Now you're broke. Colleague takes Maldives vacation → You book expensive trip on credit card → Debt cycle begins. Social media shows highlight reels → You try to match → Financial stress.</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">The Reality Behind the Facade:</p>
              <div className="space-y-2">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900">What You See:</p>
                  <ul className="text-xs text-slate-700 ml-4 mt-1 space-y-0.5">
                    <li>• New car, expensive watch, luxury vacation posts</li>
                    <li>• "Living my best life" captions</li>
                    <li>• Fancy restaurants, weekend getaways</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-900">What You Don't See:</p>
                  <ul className="text-xs text-slate-700 ml-4 mt-1 space-y-0.5">
                    <li>• {currency.symbol}30K monthly EMI stress</li>
                    <li>• Credit card debt at 3% monthly interest</li>
                    <li>• Zero emergency fund, zero investments</li>
                    <li>• Living paycheck to paycheck despite high salary</li>
                    <li>• Anxiety about job loss (can't afford to quit)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-green-900 mb-2">The Better Comparison:</p>
              <p className="text-sm text-slate-700 mb-2">Don't compare yourself to others. Compare yourself to your past self:</p>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• Am I saving more than last year?</li>
                <li>• Is my net worth growing?</li>
                <li>• Did I learn new skills this quarter?</li>
                <li>• Am I less stressed about money than 6 months ago?</li>
                <li>• Am I closer to financial freedom than last year?</li>
              </ul>
              <p className="text-sm text-green-700 font-semibold mt-2">If answers are "yes" → You're winning, regardless of what others do.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">Social Media Detox for Finances:</p>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• Unfollow luxury/lifestyle accounts that trigger FOMO</li>
                <li>• Follow financial education accounts instead</li>
                <li>• Remember: Social media = curated highlights, not reality</li>
                <li>• The richest people you know probably don't post about it</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-purple-900 mb-2"><Lightbulb className="w-4 h-4 inline mr-1" /> The Wealth Mindset:</p>
              <p className="text-sm text-slate-700">"I don't need to look rich. I want to BE rich." - Looking rich costs money. Being rich makes money. Choose wisely.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Learning from Mistakes Section */}
      <section id="financial-mistakes" className="space-y-6 scroll-mt-20">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-600" /> Learning from Financial Mistakes
        </h3>
        
        <Card className="border-orange-200 shadow-lg">
          <CardHeader>
            <CardTitle>Fail Forward, Learn Fast</CardTitle>
            <CardDescription>Mistakes are expensive teachers - learn from them (and others')</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">Why Financial Mistakes Are Valuable:</p>
              <p className="text-sm text-slate-700">Lost {currency.symbol}50K in a bad stock pick at 25? Painful lesson, but cheap tuition for wisdom that prevents {currency.symbol}10L loss at 40. The key: LEARN from it, don't repeat it.</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">Common Financial Mistakes & Lessons:</p>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-600">❌ Mistake: Bought expensive car on EMI at first job</p>
                  <p className="text-xs text-slate-600 ml-4 mt-1">Consequence: {currency.symbol}20K EMI ate 40% of salary. Couldn't save. Felt trapped.</p>
                  <p className="text-xs text-green-700 ml-4 mt-1 font-semibold">✓ Lesson: Never buy depreciating asset on loan. Cash only, or don't buy.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-600">❌ Mistake: Didn't start SIP, waited for "right time"</p>
                  <p className="text-xs text-slate-600 ml-4 mt-1">Consequence: Market kept rising. Never found entry point. Lost 5 years of compounding.</p>
                  <p className="text-xs text-green-700 ml-4 mt-1 font-semibold">✓ Lesson: There's no perfect time. Start now, even if amount is small.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-600">❌ Mistake: Invested heavily in single stock (hot tip from friend)</p>
                  <p className="text-xs text-slate-600 ml-4 mt-1">Consequence: Company went bankrupt. Lost {currency.symbol}2L (entire savings at the time).</p>
                  <p className="text-xs text-green-700 ml-4 mt-1 font-semibold">✓ Lesson: Diversify ALWAYS. Never bet everything on one horse.</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-red-600">❌ Mistake: No emergency fund, then got hospitalized</p>
                  <p className="text-xs text-slate-600 ml-4 mt-1">Consequence: Had to break FD, pay penalty, liquidate investments at loss to pay bills.</p>
                  <p className="text-xs text-green-700 ml-4 mt-1 font-semibold">✓ Lesson: Emergency fund is non-negotiable. Build it BEFORE investing.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">How to Learn Without Losing Money:</p>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>1. <strong>Read financial memoirs:</strong> Learn from others' {currency.symbol}10Cr mistakes for free</li>
                <li>2. <strong>Start small:</strong> Test strategies with {currency.symbol}1K before committing {currency.symbol}1L</li>
                <li>3. <strong>Join communities:</strong> Reddit personal finance, finance forums - learn from collective experience</li>
                <li>4. <strong>Track your decisions:</strong> Journal why you made each financial choice. Review annually.</li>
                <li>5. <strong>Admit mistakes quickly:</strong> Wrong stock pick? Sell at 10% loss, not 50% loss</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-green-900 mb-2">The Growth Mindset:</p>
              <p className="text-sm text-slate-700">Fixed mindset: "I'm bad with money. I always fail." → Stops trying → Stays broke.</p>
              <p className="text-sm text-slate-700 mt-2">Growth mindset: "I made a mistake. What can I learn?" → Adjusts strategy → Gradually improves → Achieves wealth.</p>
              <p className="text-sm text-green-700 font-semibold mt-2">Every wealthy person has made financial mistakes. Difference? They learned, adapted, continued.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* SMART Financial Goals Section */}
      <section id="smart-goals" className="space-y-6 scroll-mt-20">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-indigo-600" /> Setting SMART Financial Goals
        </h3>
        
        <Card className="border-indigo-200 shadow-lg">
          <CardHeader>
            <CardTitle>Dreams Without Goals Are Just Wishes</CardTitle>
            <CardDescription>Turn vague hopes into concrete action plans</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">Why SMART Goals Work:</p>
              <p className="text-sm text-slate-700">Vague goal: "I want to be rich" → No action, no progress. SMART goal: "Save {currency.symbol}10L for home down payment in 3 years by investing {currency.symbol}25K/month" → Clear action, measurable progress, achievable.</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">The SMART Framework:</p>
              <div className="space-y-2">
                <div className="bg-slate-50 p-3 rounded-lg flex items-start gap-3">
                  <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">S</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Specific</p>
                    <p className="text-xs text-slate-700">Not "save money" → "Save {currency.symbol}5L for emergency fund"</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">M</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Measurable</p>
                    <p className="text-xs text-slate-700">Track progress: {currency.symbol}1L saved (20% complete). Can measure monthly.</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex items-start gap-3">
                  <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">A</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Achievable</p>
                    <p className="text-xs text-slate-700">Realistic: Save {currency.symbol}10K/month on {currency.symbol}50K salary → Possible. Save {currency.symbol}40K → Impossible.</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">R</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Relevant</p>
                    <p className="text-xs text-slate-700">Aligns with life goals: Saving for home down payment (getting married) = Relevant.</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg flex items-start gap-3">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">T</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Time-bound</p>
                    <p className="text-xs text-slate-700">Deadline: Achieve by Dec 2027 (3 years). Creates urgency, enables planning.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">Example: Transforming Vague to SMART</p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-red-600">❌ Vague Goal: "I want to retire early"</p>
                  <p className="text-xs text-slate-600 ml-4">Problem: No clarity on "early" or how much needed. Can't plan action.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-600">✓ SMART Goal: "Achieve financial independence by age 45 with {currency.symbol}3Cr corpus"</p>
                  <p className="text-xs text-slate-600 ml-4">Specific: {currency.symbol}3Cr corpus</p>
                  <p className="text-xs text-slate-600 ml-4">Measurable: Track net worth quarterly</p>
                  <p className="text-xs text-slate-600 ml-4">Achievable: Need to invest {currency.symbol}45K/month for 20 years @12%</p>
                  <p className="text-xs text-slate-600 ml-4">Relevant: Want to travel, pursue hobbies without work stress</p>
                  <p className="text-xs text-slate-600 ml-4">Time-bound: 20 years from now (age 45)</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-green-900 mb-2">Your Financial Goals Worksheet:</p>
              <div className="space-y-2 text-xs text-slate-700">
                <p><strong>Short-term (1-2 years):</strong> Emergency fund, vacation, certification</p>
                <p><strong>Mid-term (3-7 years):</strong> Home down payment, car, wedding</p>
                <p><strong>Long-term (10+ years):</strong> Retirement, kids' education, financial freedom</p>
                <p className="text-sm text-slate-700 mt-2">Write each goal in SMART format. Break into monthly action items. Review quarterly.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Financial Literacy Importance */}
      <section id="financial-literacy" className="space-y-6 scroll-mt-20">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-600" /> Financial Literacy: Your Best Investment
        </h3>
        
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle>The ROI of Financial Education</CardTitle>
            <CardDescription>Knowledge compounds faster than money</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">Why Financial Literacy Matters:</p>
              <p className="text-sm text-slate-700">A single book ({currency.symbol}500) teaches tax optimization → Save {currency.symbol}50K/year → That's 100x ROI in year 1. A YouTube video (free) explains SIP → Start investing → {currency.symbol}50L wealth in 25 years. Financial education isn't an expense, it's the highest-return investment.</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">Areas to Learn (Priority Order):</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Badge>1</Badge>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Personal Finance Basics</p>
                    <p className="text-xs text-slate-600">Budgeting, emergency fund, insurance, debt management</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>2</Badge>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Investment Fundamentals</p>
                    <p className="text-xs text-slate-600">SIP, mutual funds, stocks, asset allocation, risk management</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>3</Badge>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Tax Planning</p>
                    <p className="text-xs text-slate-600">80C, 80D, HRA, NPS, new vs old regime optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>4</Badge>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Advanced Investing</p>
                    <p className="text-xs text-slate-600">Stock analysis, portfolio rebalancing, real estate, gold</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>5</Badge>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Retirement Planning</p>
                    <p className="text-xs text-slate-600">Corpus calculation, withdrawal strategy, FIRE movement</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">Free Learning Resources:</p>
              <ul className="text-xs text-slate-700 space-y-1 ml-4">
                <li>• <strong>Books:</strong> Rich Dad Poor Dad, Psychology of Money, The Intelligent Investor</li>
                <li>• <strong>YouTube:</strong> Zerodha Varsity, Pranjal Kamra, CA Rachana Ranade, Labour Law Advisor</li>
                <li>• <strong>Blogs:</strong> Freefincal, Capitalmind, ET Money blog</li>
                <li>• <strong>Courses:</strong> Varsity by Zerodha (completely free), NSE Academy courses</li>
                <li>• <strong>Podcasts:</strong> Paisa Vaisa, The Seen and the Unseen (economics)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-yellow-900 mb-2">30-Minute Daily Learning Habit:</p>
              <p className="text-sm text-slate-700">Dedicate 30 min/day to financial education. In 1 year = 180 hours of learning. Enough to go from complete beginner to financially literate. In 3 years, you'll know more than 90% of people. That knowledge = avoided mistakes + better decisions + {currency.symbol}Crores over lifetime.</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-purple-900 mb-2"><Sparkles className="w-4 h-4 inline mr-1" /> The Mindset Shift:</p>
              <p className="text-sm text-slate-700">Financial literacy isn't about becoming a stock market expert or day trader. It's about: understanding where your money goes, making informed decisions, avoiding scams and bad products, optimizing taxes, building sustainable wealth. That's it. Simple, but life-changing.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default WealthMindset;
