"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  TrendingUp, 
  DollarSign, 
  Building2, 
  Palmtree, 
  BookOpen,
  Video,
  FileCode,
  Music,
  Camera,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  Clock,
  Target,
  Calculator
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const PassiveIncome = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Palmtree className="w-12 h-12 text-blue-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Building Passive Income Streams</h2>
          <p className="text-lg text-blue-100 max-w-2xl">
            The dream: earning money while you sleep. The reality: it takes significant upfront effort, but the payoff is worth it.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Myths vs Reality Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-blue-600" /> Passive Income: Myths vs Reality
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-red-50 to-orange-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                The Myths (Unrealistic)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <div>
                  <p className="font-semibold text-sm">Zero effort, instant money</p>
                  <p className="text-xs text-slate-600">Reality: Passive income requires massive upfront work</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <div>
                  <p className="font-semibold text-sm">Get rich quick schemes</p>
                  <p className="text-xs text-slate-600">Reality: Building real passive income takes 1-3 years</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <div>
                  <p className="font-semibold text-sm">100% passive, never touch it again</p>
                  <p className="text-xs text-slate-600">Reality: Requires maintenance, updates, and management</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <div>
                  <p className="font-semibold text-sm">Anyone can do it easily</p>
                  <p className="text-xs text-slate-600">Reality: Requires specific skills, capital, or both</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                The Reality (Achievable)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Earn while doing other things</p>
                  <p className="text-xs text-slate-600">Once set up, income flows without active hours</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Scalable beyond your time</p>
                  <p className="text-xs text-slate-600">Sell to 1 or 10,000 with same effort</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Long-term wealth building</p>
                  <p className="text-xs text-slate-600">Compounds over time with reinvestment</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <p className="font-semibold text-sm">Financial freedom enabler</p>
                  <p className="text-xs text-slate-600">Reduces dependence on salary/active work</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Passive Income Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-indigo-600" /> Types of Passive Income Streams
        </h3>
        
        <Card className="border-indigo-200 shadow-lg">
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-3 font-semibold">Income Stream</th>
                    <th className="text-left p-3 font-semibold">Initial Effort</th>
                    <th className="text-left p-3 font-semibold">Capital Needed</th>
                    <th className="text-left p-3 font-semibold">Monthly Potential</th>
                    <th className="text-left p-3 font-semibold">Passiveness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-semibold">Rental Income (Real Estate)</td>
                    <td className="p-3"><Badge variant="destructive">Very High</Badge></td>
                    <td className="p-3">{currency.symbol}20L-1Cr+</td>
                    <td className="p-3 text-green-600 font-semibold">{currency.symbol}15K-50K</td>
                    <td className="p-3"><Badge>80%</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Dividend Income (Stocks)</td>
                    <td className="p-3"><Badge variant="secondary">Low</Badge></td>
                    <td className="p-3">{currency.symbol}10L-50L+</td>
                    <td className="p-3 text-green-600 font-semibold">{currency.symbol}3K-15K</td>
                    <td className="p-3"><Badge>95%</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Interest (Bonds/FDs)</td>
                    <td className="p-3"><Badge variant="secondary">Very Low</Badge></td>
                    <td className="p-3">{currency.symbol}5L-25L+</td>
                    <td className="p-3 text-green-600 font-semibold">{currency.symbol}2K-10K</td>
                    <td className="p-3"><Badge>100%</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Online Courses</td>
                    <td className="p-3"><Badge variant="destructive">Very High</Badge></td>
                    <td className="p-3">{currency.symbol}10K-50K</td>
                    <td className="p-3 text-green-600 font-semibold">{currency.symbol}10K-1L+</td>
                    <td className="p-3"><Badge>70%</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Digital Products (eBooks, Templates)</td>
                    <td className="p-3"><Badge>High</Badge></td>
                    <td className="p-3">{currency.symbol}5K-20K</td>
                    <td className="p-3 text-green-600 font-semibold">{currency.symbol}5K-50K</td>
                    <td className="p-3"><Badge>85%</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">YouTube Ad Revenue</td>
                    <td className="p-3"><Badge variant="destructive">Very High</Badge></td>
                    <td className="p-3">{currency.symbol}10K-30K</td>
                    <td className="p-3 text-green-600 font-semibold">{currency.symbol}5K-2L+</td>
                    <td className="p-3"><Badge>60%</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Affiliate Marketing</td>
                    <td className="p-3"><Badge>High</Badge></td>
                    <td className="p-3">{currency.symbol}5K-15K</td>
                    <td className="p-3 text-green-600 font-semibold">{currency.symbol}5K-1L+</td>
                    <td className="p-3"><Badge>75%</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Royalties (Books, Music, Photos)</td>
                    <td className="p-3"><Badge variant="destructive">Very High</Badge></td>
                    <td className="p-3">{currency.symbol}5K-20K</td>
                    <td className="p-3 text-green-600 font-semibold">{currency.symbol}1K-50K</td>
                    <td className="p-3"><Badge>90%</Badge></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Detailed Breakdown Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-teal-600" /> Detailed Breakdown: Popular Streams
        </h3>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="rental" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-orange-600" />
                <span className="font-semibold">Rental Income from Real Estate</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How It Works</p>
                    <p className="text-sm text-slate-600">Buy property (apartment, commercial space, land), rent it out, receive monthly rental income minus expenses.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Returns Example</p>
                    <p className="text-sm text-slate-600">Buy {currency.symbol}50L property → Monthly rent {currency.symbol}15-20K → 3.6-4.8% rental yield + appreciation</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Pros</p>
                    <p className="text-sm text-slate-600">Tangible asset, appreciation over time, inflation hedge, leverage (loans available)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Cons</p>
                    <p className="text-sm text-slate-600">High capital requirement, illiquid, tenant issues, maintenance costs, vacancy risk</p>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-orange-900">Best For:</p>
                <p className="text-sm text-slate-700 mt-1">Those with {currency.symbol}20L+ capital, looking for stable monthly income + long-term appreciation. Not recommended as first investment.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dividends" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Dividend Income from Stocks</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How It Works</p>
                    <p className="text-sm text-slate-600">Invest in dividend-paying stocks/ETFs. Companies distribute profits as dividends quarterly/annually.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Returns Example</p>
                    <p className="text-sm text-slate-600">{currency.symbol}20L in dividend aristocrats → 3-5% yield → {currency.symbol}5-8K/month passive income</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Good Dividend Stocks (India)</p>
                    <p className="text-sm text-slate-600">ITC, Coal India, ONGC, Power Grid, Vedanta (high dividend yield stocks)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Important Notes</p>
                    <p className="text-sm text-slate-600">Dividends taxed as per slab. Focus on quality companies. Don't chase high yields blindly (may be unsustainable).</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-green-900">Best For:</p>
                <p className="text-sm text-slate-700 mt-1">Those with {currency.symbol}10L+ to invest, seeking quarterly income + capital appreciation. More liquid than real estate.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="interest" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Interest Income (Bonds, FDs, Debt Funds)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How It Works</p>
                    <p className="text-sm text-slate-600">Invest in fixed-income instruments. Receive guaranteed interest payments monthly/quarterly/annually.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Returns</p>
                    <p className="text-sm text-slate-600">Bank FDs: 6-7% | Corporate Bonds: 7-9% | Govt Bonds: 7-7.5% | Debt MFs: 7-9% (post-tax)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Example</p>
                    <p className="text-sm text-slate-600">{currency.symbol}15L in FD at 7% → {currency.symbol}8,750/month interest income (pre-tax)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Tax Treatment</p>
                    <p className="text-sm text-slate-600">Interest fully taxable as per slab. TDS applicable. Long-term debt funds get indexation benefit.</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-blue-900">Best For:</p>
                <p className="text-sm text-slate-700 mt-1">Conservative investors, retirees needing stable income, parking emergency funds. Safest but lowest returns.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="courses" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Online Courses & Digital Products</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How It Works</p>
                    <p className="text-sm text-slate-600">Create once, sell forever. Build a course/eBook/template, market it, earn from each sale with minimal ongoing work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Initial Effort</p>
                    <p className="text-sm text-slate-600">100-300 hours to create quality course. 50-100 hours for digital product. Requires expertise in a valuable skill.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Earning Potential</p>
                    <p className="text-sm text-slate-600">Price: {currency.symbol}500-5000/course | Sell 50-200/month → {currency.symbol}25K-1L/month passive income</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Platforms</p>
                    <p className="text-sm text-slate-600">Udemy (marketplace), Teachable (your platform), Gumroad (digital products), Podia, Skillshare</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Ongoing Work</p>
                    <p className="text-sm text-slate-600">Marketing, updating content, answering student questions, running ads (5-10 hrs/week)</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-purple-900">Best For:</p>
                <p className="text-sm text-slate-700 mt-1">Experts with in-demand skills, good communicators, willing to put in 3-6 months of upfront work for long-term payoff.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="youtube" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-red-600" />
                <span className="font-semibold">YouTube Ad Revenue & Sponsorships</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How It Works</p>
                    <p className="text-sm text-slate-600">Create videos, build audience, monetize through ads + sponsorships. Old videos continue earning indefinitely.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calculator className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Ad Revenue Math</p>
                    <p className="text-sm text-slate-600">India: ~{currency.symbol}1-3 per 1000 views | 100K views/month → {currency.symbol}10-30K from ads alone</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Additional Revenue</p>
                    <p className="text-sm text-slate-600">Sponsorships ({currency.symbol}10K-1L+ per video), affiliate marketing, selling own products/courses</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Reality Check</p>
                    <p className="text-sm text-slate-600">Takes 1-2 years to build audience. Requires consistency (1-2 videos/week). 90% quit before seeing results.</p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-red-900">Best For:</p>
                <p className="text-sm text-slate-700 mt-1">Passionate creators, comfortable on camera, have unique insights/entertainment value, willing to play the long game.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="royalties" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Music className="w-5 h-5 text-pink-600" />
                <span className="font-semibold">Royalties (Books, Music, Photos, Art)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <FileCode className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Books (Self-Publishing)</p>
                    <p className="text-sm text-slate-600">Amazon Kindle: 35-70% royalty | Sell 50-200 books/month at {currency.symbol}99-299 → {currency.symbol}3-20K/month</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Music className="w-4 h-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Music</p>
                    <p className="text-sm text-slate-600">Spotify, YouTube Music, Apple Music → {currency.symbol}0.2-0.5 per stream. Need thousands of streams for meaningful income.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Camera className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Stock Photos/Videos</p>
                    <p className="text-sm text-slate-600">Shutterstock, Adobe Stock, Getty Images → {currency.symbol}20-200 per download. Upload 500+ high-quality assets.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Reality</p>
                    <p className="text-sm text-slate-600">Very few make significant income. Requires exceptional quality and volume. True passive once created.</p>
                  </div>
                </div>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-pink-900">Best For:</p>
                <p className="text-sm text-slate-700 mt-1">Creative professionals (writers, musicians, photographers) with portfolio of high-quality work. Side income, not primary.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Tax Treatment Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-amber-600" /> Tax Treatment of Passive Income
        </h3>
        
        <Card className="border-amber-200 shadow-lg">
          <CardHeader>
            <CardTitle>How Different Passive Income is Taxed (India)</CardTitle>
            <CardDescription>Understanding tax implications helps you optimize your strategy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-semibold text-sm">Rental Income</p>
                  <p className="text-xs text-slate-600">Taxed as "Income from House Property"</p>
                </div>
                <Badge>30% deduction + slab rate</Badge>
              </div>
              <div className="flex items-start justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-semibold text-sm">Dividend Income</p>
                  <p className="text-xs text-slate-600">Taxed as per income slab (post Apr 2020)</p>
                </div>
                <Badge>Slab rate (TDS if &gt;{currency.symbol}5K)</Badge>
              </div>
              <div className="flex items-start justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-semibold text-sm">Interest Income (FD/Bonds)</p>
                  <p className="text-xs text-slate-600">Fully taxable as "Other Income"</p>
                </div>
                <Badge>Slab rate (TDS if &gt;{currency.symbol}40K)</Badge>
              </div>
              <div className="flex items-start justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-semibold text-sm">Course/Digital Product Sales</p>
                  <p className="text-xs text-slate-600">Business income or professional income</p>
                </div>
                <Badge>Slab rate (44ADA if &lt;{currency.symbol}50L)</Badge>
              </div>
              <div className="flex items-start justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-semibold text-sm">YouTube/Ad Revenue</p>
                  <p className="text-xs text-slate-600">Business income</p>
                </div>
                <Badge>Slab rate (GST if &gt;{currency.symbol}20L)</Badge>
              </div>
              <div className="flex items-start justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-semibold text-sm">Royalties</p>
                  <p className="text-xs text-slate-600">Taxed as "Income from Other Sources"</p>
                </div>
                <Badge>Slab rate (10% TDS)</Badge>
              </div>
            </div>
            <div className="mt-4 p-4 bg-amber-50 rounded-lg">
              <p className="text-sm text-slate-700"><AlertCircle className="w-4 h-4 inline mr-1" /> <strong>Key Tip:</strong> Maintain proper books for business income. Claim legitimate expenses to reduce taxable income. Consult CA for tax optimization.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Realistic Timeline Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-teal-600" /> Realistic Timeline to Build Passive Income
        </h3>
        
        <Card className="border-teal-200 shadow-lg">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-center">
                  <Badge className="w-full">Months 0-6</Badge>
                </div>
                <div>
                  <p className="font-semibold text-sm">Learning & Building Phase</p>
                  <p className="text-sm text-slate-600">No income. Heavy time investment. Creating assets, learning skills, building foundation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-center">
                  <Badge className="w-full" variant="secondary">Months 6-12</Badge>
                </div>
                <div>
                  <p className="font-semibold text-sm">Early Income Phase</p>
                  <p className="text-sm text-slate-600">{currency.symbol}5-20K/month. First sales, building audience, iterating based on feedback.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-center">
                  <Badge className="w-full" variant="secondary">Year 1-2</Badge>
                </div>
                <div>
                  <p className="font-semibold text-sm">Growth Phase</p>
                  <p className="text-sm text-slate-600">{currency.symbol}20-50K/month. Optimization, scaling, reinvesting profits, building systems.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-center">
                  <Badge className="w-full bg-green-600">Year 2-3</Badge>
                </div>
                <div>
                  <p className="font-semibold text-sm">Mature Passive Income</p>
                  <p className="text-sm text-slate-600">{currency.symbol}50K-1L+/month. Truly passive, minimal intervention, focus on new streams.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-teal-50 rounded-lg">
              <p className="font-semibold text-sm text-teal-900 mb-2">The Compound Effect</p>
              <p className="text-sm text-slate-700">Each passive income stream you build makes the next one easier. Your first stream might take 18 months. Your third might take 6 months. Skills, audience, and systems compound.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default PassiveIncome;
