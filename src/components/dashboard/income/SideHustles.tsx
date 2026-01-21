"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Laptop, 
  Users, 
  Video, 
  BookOpen,
  ShoppingBag,
  Code,
  Palette,
  FileText,
  AlertCircle,
  CheckCircle,
  Calculator,
  Scale
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const SideHustles = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Zap className="w-12 h-12 text-emerald-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Side Hustles & Multiple Income Streams</h2>
          <p className="text-lg text-emerald-100 max-w-2xl">
            Don't put all your eggs in one basket. Build additional income streams to accelerate wealth creation and reduce risk.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Why Side Income Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-600" /> Why Build Side Income?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-emerald-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                Financial Security
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-600">If you lose your job or face a pay cut, side income provides a safety net. Diversified income reduces risk.</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Accelerate Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-600">Extra {currency.symbol}20-50K/month can pay off loans faster, build emergency fund, or boost investments significantly.</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-600" />
                Skill Development
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-600">Side hustles let you explore new skills, test business ideas, and build expertise outside your day job.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Side Hustles Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Laptop className="w-6 h-6 text-teal-600" /> Types of Side Hustles
        </h3>
        
        <Card className="border-teal-200 shadow-lg">
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-3 font-semibold">Side Hustle</th>
                    <th className="text-left p-3 font-semibold">Time/Week</th>
                    <th className="text-left p-3 font-semibold">Earning Potential</th>
                    <th className="text-left p-3 font-semibold">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold">Freelance Development</span>
                      </div>
                    </td>
                    <td className="p-3">10-20 hrs</td>
                    <td className="p-3 font-semibold text-green-600">{currency.symbol}30K-1L/month</td>
                    <td className="p-3"><Badge>Medium</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Palette className="w-4 h-4 text-purple-600" />
                        <span className="font-semibold">Design (UI/UX, Graphics)</span>
                      </div>
                    </td>
                    <td className="p-3">10-15 hrs</td>
                    <td className="p-3 font-semibold text-green-600">{currency.symbol}20K-60K/month</td>
                    <td className="p-3"><Badge>Medium</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-orange-600" />
                        <span className="font-semibold">Content Writing</span>
                      </div>
                    </td>
                    <td className="p-3">8-15 hrs</td>
                    <td className="p-3 font-semibold text-green-600">{currency.symbol}15K-50K/month</td>
                    <td className="p-3"><Badge variant="secondary">Easy</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-indigo-600" />
                        <span className="font-semibold">Consulting/Coaching</span>
                      </div>
                    </td>
                    <td className="p-3">5-10 hrs</td>
                    <td className="p-3 font-semibold text-green-600">{currency.symbol}25K-1L/month</td>
                    <td className="p-3"><Badge>Medium</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-red-600" />
                        <span className="font-semibold">YouTube/Content Creation</span>
                      </div>
                    </td>
                    <td className="p-3">10-20 hrs</td>
                    <td className="p-3 font-semibold text-green-600">{currency.symbol}0-2L/month</td>
                    <td className="p-3"><Badge variant="destructive">Hard</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-teal-600" />
                        <span className="font-semibold">Online Teaching/Tutoring</span>
                      </div>
                    </td>
                    <td className="p-3">8-12 hrs</td>
                    <td className="p-3 font-semibold text-green-600">{currency.symbol}15K-40K/month</td>
                    <td className="p-3"><Badge variant="secondary">Easy</Badge></td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-pink-600" />
                        <span className="font-semibold">E-commerce/Dropshipping</span>
                      </div>
                    </td>
                    <td className="p-3">15-25 hrs</td>
                    <td className="p-3 font-semibold text-green-600">{currency.symbol}10K-1L+/month</td>
                    <td className="p-3"><Badge variant="destructive">Hard</Badge></td>
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
          <Code className="w-6 h-6 text-blue-600" /> Detailed Breakdown: Popular Side Hustles
        </h3>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="freelancing" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Freelancing (Development, Design, Writing)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Platforms to Start</p>
                    <p className="text-sm text-slate-600">Upwork, Fiverr, Freelancer, Toptal (for top developers), 99designs (designers)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How to Price</p>
                    <p className="text-sm text-slate-600">Hourly: {currency.symbol}500-3000/hr (beginners to experts) | Project-based: {currency.symbol}10K-1L+ depending on complexity</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Time Commitment</p>
                    <p className="text-sm text-slate-600">Flexible. Start with 5-10 hrs/week, scale to 20+ as you get more clients.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Challenges</p>
                    <p className="text-sm text-slate-600">Building initial reputation (takes 3-6 months), irregular income, client management</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-blue-900">Pro Tip:</p>
                <p className="text-sm text-slate-700 mt-1">Start with lower rates to build reviews and portfolio. Once you have 10+ positive reviews, increase rates by 30-50%.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="consulting" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-indigo-600" />
                <span className="font-semibold">Consulting & Coaching</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">What Can You Consult On?</p>
                    <p className="text-sm text-slate-600">Your day job expertise! Marketing, tech, finance, HR, operations, product management, etc.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Finding Clients</p>
                    <p className="text-sm text-slate-600">LinkedIn outreach, networking events, referrals from colleagues, Clarity.fm, platforms like GLG, AlphaSights</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Pricing</p>
                    <p className="text-sm text-slate-600">Hourly: {currency.symbol}2000-10000/hr | Monthly retainer: {currency.symbol}25K-2L+ for ongoing work</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Requirements</p>
                    <p className="text-sm text-slate-600">5+ years experience in your domain, strong personal brand, proven results/case studies</p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-indigo-900">Pro Tip:</p>
                <p className="text-sm text-slate-700 mt-1">Offer free 15-min consultation calls to build trust. Close deals on value delivered, not hours spent.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="content" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-red-600" />
                <span className="font-semibold">Content Creation (YouTube, Instagram, Blog)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Revenue Streams</p>
                    <p className="text-sm text-slate-600">Ad revenue, sponsorships, affiliate marketing, digital products, brand deals</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Realistic Timeline</p>
                    <p className="text-sm text-slate-600">0-6 months: {currency.symbol}0 (building) | 6-12 months: {currency.symbol}5-20K | 1-2 years: {currency.symbol}30K-1L+ (if successful)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">YouTube Specifics</p>
                    <p className="text-sm text-slate-600">Need 1000 subscribers + 4000 watch hours for monetization. ~{currency.symbol}1-3 per 1000 views (India)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Reality Check</p>
                    <p className="text-sm text-slate-600">10-20 hrs/week commitment, takes 1-2 years to see significant income. 90% quit before seeing results.</p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-red-900">Pro Tip:</p>
                <p className="text-sm text-slate-700 mt-1">Don't expect quick money. Build for passion and value first. Monetization follows audience, not the other way around.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="teaching" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-teal-600" />
                <span className="font-semibold">Online Teaching & Tutoring</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">What to Teach</p>
                    <p className="text-sm text-slate-600">Academic subjects (for students), professional skills (for working professionals), hobbies (music, art, fitness)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Platforms</p>
                    <p className="text-sm text-slate-600">Udemy, Teachable, Skillshare (courses) | Vedantu, Chegg, Unacademy (live tutoring) | Your own website</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Pricing Models</p>
                    <p className="text-sm text-slate-600">Live 1:1: {currency.symbol}500-2000/hr | Group classes: {currency.symbol}200-500/student/session | Pre-recorded courses: {currency.symbol}500-5000/course</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Best For</p>
                    <p className="text-sm text-slate-600">Teachers, subject matter experts, anyone with a skill worth teaching. Low barrier to entry.</p>
                  </div>
                </div>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-teal-900">Pro Tip:</p>
                <p className="text-sm text-slate-700 mt-1">Start with 1:1 tutoring to understand student needs, then create scalable courses to reach more people with same effort.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ecommerce" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-pink-600" />
                <span className="font-semibold">E-commerce & Dropshipping</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Models</p>
                    <p className="text-sm text-slate-600">Own inventory (handmade, sourced products) | Dropshipping (no inventory) | Print on demand | Amazon FBA</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Platforms</p>
                    <p className="text-sm text-slate-600">Amazon, Flipkart, Meesho, Shopify (own store), Instagram/Facebook (social commerce)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Initial Investment</p>
                    <p className="text-sm text-slate-600">Dropshipping: {currency.symbol}10-30K | Own inventory: {currency.symbol}50K-2L+ | High risk, high time commitment</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Challenges</p>
                    <p className="text-sm text-slate-600">High competition, logistics, customer service, returns, marketing costs can eat into margins</p>
                  </div>
                </div>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-pink-900">Pro Tip:</p>
                <p className="text-sm text-slate-700 mt-1">Start small with dropshipping or print-on-demand to test market. Only invest heavily once you validate demand.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Active vs Passive Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-orange-600" /> Active vs Passive Side Income
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-50 to-amber-50">
              <CardTitle className="text-lg">Active Side Income</CardTitle>
              <CardDescription>Trade time for money (hourly/project-based)</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <p className="text-sm">Immediate income (work today, earn today)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <p className="text-sm">Predictable earnings once established</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                <p className="text-sm">Limited scalability (capped by hours in a day)</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                <p className="text-sm">Stop working = income stops</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg mt-3">
                <p className="text-xs font-semibold">Examples: Freelancing, consulting, tutoring, gig work</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50">
              <CardTitle className="text-lg">Passive Side Income</CardTitle>
              <CardDescription>Upfront effort, ongoing income with minimal work</CardDescription>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <p className="text-sm">Scalable (sell to 1 or 1000 with same effort)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <p className="text-sm">Earn while you sleep (truly passive)</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                <p className="text-sm">Significant upfront time/money investment</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                <p className="text-sm">No income for months (delayed gratification)</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg mt-3">
                <p className="text-xs font-semibold">Examples: Online courses, digital products, affiliate marketing, ad revenue, rental income</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-slate-900 mb-2">The Hybrid Approach (Recommended)</p>
                <p className="text-sm text-slate-700">Start with <strong>active income</strong> (freelancing/consulting) to earn quickly and validate your skills. Once you have consistent clients, invest that income into building <strong>passive income</strong> streams (courses, products) that scale without your time.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tax Implications Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-purple-600" /> Tax Implications of Side Income
        </h3>
        
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle>Understanding Tax on Side Income (India)</CardTitle>
            <CardDescription>Don't ignore taxes - it can lead to penalties and notices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">All income is taxable</p>
                <p className="text-sm text-slate-700">Freelancing, consulting, ad revenue, rental income - everything must be declared in your ITR.</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-semibold text-sm">Tax Slabs (Old Regime):</p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• Up to {currency.symbol}2.5L: No tax</li>
                  <li>• {currency.symbol}2.5L - {currency.symbol}5L: 5%</li>
                  <li>• {currency.symbol}5L - {currency.symbol}10L: 20%</li>
                  <li>• Above {currency.symbol}10L: 30%</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mt-3">
                <p className="font-semibold text-sm flex items-center gap-2">
                  <Scale className="w-4 h-4 text-yellow-600" />
                  Presumptive Taxation for Freelancers (Section 44ADA)
                </p>
                <p className="text-sm text-slate-700 mt-2">If your professional income is less than {currency.symbol}50L/year, you can declare 50% of gross income as profit (simplified taxation). No need to maintain detailed books.</p>
                <p className="text-sm text-slate-700 mt-1"><strong>Example:</strong> Earn {currency.symbol}5L from freelancing → Declare {currency.symbol}2.5L as profit → Pay tax only on {currency.symbol}2.5L</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50">
                <p className="font-semibold text-sm text-red-900">GST Registration Required?</p>
                <p className="text-sm text-slate-700 mt-1">If turnover exceeds {currency.symbol}20L/year ({currency.symbol}10L for special category states), GST registration is mandatory. Below that, it's optional but beneficial for claiming input credits.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* When to Scale Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" /> When to Scale vs When to Stop
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Scale When...
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Earning {currency.symbol}30K+/month consistently for 6+ months</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>More demand than you can handle (waitlists forming)</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Clients asking for more services (clear product-market fit)</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>You enjoy the work and see long-term potential</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>You have capital to invest in growth</span>
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Stop/Pivot When...
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Not earning enough after 6-12 months of effort</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Burning out - affecting health or day job performance</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>No product-market fit (constantly chasing clients)</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>You dread the work (no passion or interest left)</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Better opportunities emerged elsewhere</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SideHustles;
