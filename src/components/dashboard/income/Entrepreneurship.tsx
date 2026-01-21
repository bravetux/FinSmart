"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Lightbulb, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target,
  AlertCircle,
  CheckCircle,
  Building2,
  Scale,
  Calculator,
  Clock,
  Shield,
  Zap,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const Entrepreneurship = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Rocket className="w-12 h-12 text-rose-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Starting Your Own Business</h2>
          <p className="text-lg text-rose-100 max-w-2xl">
            From idea to execution. Build something that solves real problems and creates lasting value.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Entrepreneurship vs Job Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Scale className="w-6 h-6 text-rose-600" /> Entrepreneurship vs Job: The Reality
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                The Salaried Path
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Predictable monthly income</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Benefits: PF, insurance, leave</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Work-life balance (generally)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Lower risk, stable growth</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Limited earning potential (capped)</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Less autonomy and control</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-rose-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-rose-50 to-pink-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <Rocket className="w-5 h-5 text-rose-600" />
                The Entrepreneur Path
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Unlimited earning potential</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Full autonomy and control</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Building equity and assets</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Solving real problems, impact</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">High risk, many fail (80% in 5 years)</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm">Irregular income, long hours, stress</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-purple-200 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <p className="font-semibold text-slate-900 mb-2">The Middle Path: Part-Time Entrepreneurship</p>
                <p className="text-sm text-slate-700">Keep your job, start business on the side. Test the market, build revenue, reduce risk. Only quit when business income &gt; 50% of salary for 6+ months consistently.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Business Idea Validation Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-600" /> Business Ideas & Validation
        </h3>
        
        <Card className="border-yellow-200 shadow-lg">
          <CardHeader>
            <CardTitle>From Idea to Validated Business Concept</CardTitle>
            <CardDescription>Most businesses fail because they build something nobody wants</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="finding-ideas">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Finding Business Ideas
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="space-y-3">
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="font-semibold text-sm">Good ideas come from:</p>
                      <ul className="text-sm text-slate-700 space-y-1 ml-4 mt-2">
                        <li>• Problems YOU face (if you face it, others do too)</li>
                        <li>• Your domain expertise (leverage what you know)</li>
                        <li>• Inefficiencies you notice in your industry</li>
                        <li>• Combining two existing ideas in a new way</li>
                        <li>• Making complex things simple</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 py-2">
                      <p className="font-semibold text-sm text-green-900">Example Good Ideas:</p>
                      <p className="text-sm text-slate-700 mt-1">• SaaS tool for niche industry you worked in</p>
                      <p className="text-sm text-slate-700">• D2C brand in underserved category</p>
                      <p className="text-sm text-slate-700">• Service business leveraging your skill</p>
                      <p className="text-sm text-slate-700">• Aggregator/marketplace for fragmented industry</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <p className="font-semibold text-sm text-red-900">Avoid These Ideas:</p>
                      <p className="text-sm text-slate-700 mt-1">• Another food delivery/cab aggregator (too competitive)</p>
                      <p className="text-sm text-slate-700">• "Facebook but for X" (network effects are hard)</p>
                      <p className="text-sm text-slate-700">• Ideas requiring massive capital (unless you have funding)</p>
                      <p className="text-sm text-slate-700">• Solutions looking for problems</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="validation">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Validating Your Idea
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">The Validation Checklist:</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">1. Talk to 20+ potential customers</p>
                          <p className="text-xs text-slate-600">Do they have this problem? How do they solve it today? Would they pay for your solution?</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">2. Get 10 people to pay you BEFORE you build</p>
                          <p className="text-xs text-slate-600">Pre-orders, deposits, beta access. Money validates better than words.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">3. Build MVP in 1-2 months, not 6-12</p>
                          <p className="text-xs text-slate-600">Minimum Viable Product. Bare essentials to test hypothesis. Polish later.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">4. Launch to 10-50 users first</p>
                          <p className="text-xs text-slate-600">Get feedback, iterate, fix issues. Then scale marketing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm"><AlertCircle className="w-4 h-4 inline mr-1" /> <strong>If you can't get 10 paying customers in 3 months, pivot or quit.</strong> Don't spend years building something nobody wants.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Business Structure Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-indigo-600" /> Business Structure: Sole Proprietorship vs LLP vs Pvt Ltd
        </h3>
        
        <Card className="border-indigo-200 shadow-lg">
          <CardHeader>
            <CardTitle>Choosing the Right Legal Structure</CardTitle>
            <CardDescription>Tax implications, liability, and compliance requirements differ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-3 font-semibold">Aspect</th>
                    <th className="text-left p-3 font-semibold">Sole Proprietorship</th>
                    <th className="text-left p-3 font-semibold">LLP</th>
                    <th className="text-left p-3 font-semibold">Private Limited</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-semibold">Setup Cost</td>
                    <td className="p-3">{currency.symbol}0 (just GST reg)</td>
                    <td className="p-3">{currency.symbol}10-20K</td>
                    <td className="p-3">{currency.symbol}15-30K</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Setup Time</td>
                    <td className="p-3">Immediate</td>
                    <td className="p-3">7-15 days</td>
                    <td className="p-3">10-20 days</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Liability</td>
                    <td className="p-3 text-red-600">Unlimited (personal assets at risk)</td>
                    <td className="p-3 text-green-600">Limited to investment</td>
                    <td className="p-3 text-green-600">Limited to investment</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Compliance</td>
                    <td className="p-3">Minimal (ITR + GST)</td>
                    <td className="p-3">Annual ROC filings</td>
                    <td className="p-3">Extensive (audit, board meetings, ROC)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Taxation</td>
                    <td className="p-3">Personal slab rate (30%+)</td>
                    <td className="p-3">Personal slab rate (30%+)</td>
                    <td className="p-3">Flat 25-30% corporate tax</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Funding</td>
                    <td className="p-3">Difficult (loans only)</td>
                    <td className="p-3">Moderate</td>
                    <td className="p-3">Easy (equity investment)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Credibility</td>
                    <td className="p-3">Low</td>
                    <td className="p-3">Medium</td>
                    <td className="p-3">High</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Best For</td>
                    <td className="p-3">Freelancers, consultants, small businesses</td>
                    <td className="p-3">2-3 partner service businesses</td>
                    <td className="p-3">Startups seeking funding, scaling businesses</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <p className="font-semibold text-sm text-indigo-900 mb-2">Decision Framework:</p>
              <p className="text-sm text-slate-700">• Revenue &lt; {currency.symbol}20L/year, solo? → <strong>Sole Proprietorship</strong></p>
              <p className="text-sm text-slate-700 mt-1">• Revenue {currency.symbol}20L-1Cr, 2-3 partners? → <strong>LLP</strong></p>
              <p className="text-sm text-slate-700 mt-1">• Seeking VC funding or revenue &gt; {currency.symbol}1Cr? → <strong>Private Limited</strong></p>
              <p className="text-sm text-slate-700 mt-1">• High liability risk (manufacturing, healthcare)? → <strong>LLP or Pvt Ltd</strong></p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Capital Requirements Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-green-600" /> Initial Capital Requirements
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-lg">Low Capital ({currency.symbol}50K-2L)</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm font-semibold">Service Businesses:</p>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                <li>• Freelance agency</li>
                <li>• Consulting firm</li>
                <li>• Digital marketing agency</li>
                <li>• Content creation</li>
                <li>• Online tutoring</li>
              </ul>
              <p className="text-sm font-semibold mt-3">Capital needed for:</p>
              <p className="text-xs text-slate-600">Website, tools, initial marketing, 3-month runway</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg">Medium Capital ({currency.symbol}2-10L)</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm font-semibold">Product/Tech Businesses:</p>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                <li>• SaaS product</li>
                <li>• E-commerce store</li>
                <li>• D2C brand</li>
                <li>• Cloud kitchen</li>
                <li>• Content platform</li>
              </ul>
              <p className="text-sm font-semibold mt-3">Capital needed for:</p>
              <p className="text-xs text-slate-600">Development, inventory, marketing, 6-month runway</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 shadow-lg">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-lg">High Capital ({currency.symbol}10L-1Cr+)</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm font-semibold">Capital-Intensive:</p>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                <li>• Manufacturing</li>
                <li>• Physical retail</li>
                <li>• Restaurant chain</li>
                <li>• Hardware products</li>
                <li>• Real estate</li>
              </ul>
              <p className="text-sm font-semibold mt-3">Capital needed for:</p>
              <p className="text-xs text-slate-600">Infrastructure, equipment, inventory, team, 12-month runway</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Revenue Models Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-purple-600" /> Revenue Models
        </h3>
        
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle>How Will You Make Money?</CardTitle>
            <CardDescription>Choose a revenue model that fits your business</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">1. Product Sales (One-Time)</p>
                <p className="text-sm text-slate-700">Sell physical/digital products. Customer pays once.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Examples:</strong> E-commerce, SaaS with lifetime license</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Pros:</strong> Simple, immediate cash | <strong>Cons:</strong> Need constant new customers</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">2. Subscription (Recurring)</p>
                <p className="text-sm text-slate-700">Monthly/annual payments for ongoing access.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Examples:</strong> SaaS, membership sites, subscription boxes</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Pros:</strong> Predictable revenue, high valuation | <strong>Cons:</strong> Churn management</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">3. Commission/Marketplace</p>
                <p className="text-sm text-slate-700">Take % of transactions between buyers/sellers.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Examples:</strong> Airbnb, Uber, Amazon marketplace</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Pros:</strong> Scalable, asset-light | <strong>Cons:</strong> Need both supply and demand</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">4. Advertising/Sponsorship</p>
                <p className="text-sm text-slate-700">Generate audience, monetize through ads/sponsors.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Examples:</strong> Media sites, YouTube, podcasts</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Pros:</strong> Free for users, scales with audience | <strong>Cons:</strong> Need large audience</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">5. Freemium</p>
                <p className="text-sm text-slate-700">Free basic version, paid premium features.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Examples:</strong> Spotify, Dropbox, Canva</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Pros:</strong> Easy user acquisition | <strong>Cons:</strong> Low conversion (2-5%)</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">6. Services/Consulting</p>
                <p className="text-sm text-slate-700">Sell your time/expertise hourly or project-based.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Examples:</strong> Agencies, consultancies, freelancing</p>
                <p className="text-xs text-slate-600 mt-1"><strong>Pros:</strong> Cash flow positive fast | <strong>Cons:</strong> Not scalable (time-bound)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Common Mistakes Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-red-600" /> Common Mistakes & How to Avoid Them
        </h3>
        
        <Card className="border-red-200 shadow-lg">
          <CardHeader>
            <CardTitle>Learn from Others' Failures</CardTitle>
            <CardDescription>Most mistakes are preventable if you know what to watch for</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-sm text-red-900">1. Building for Too Long Without Validation</p>
                <p className="text-sm text-slate-700 mt-1">Spending 6-12 months building perfect product before showing anyone. Ship MVP in 1-2 months, get feedback.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-sm text-red-900">2. Not Understanding Unit Economics</p>
                <p className="text-sm text-slate-700 mt-1">If CAC (customer acquisition cost) &gt; LTV (lifetime value), you're losing money per customer. Many startups burn through capital before realizing this.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-sm text-red-900">3. Hiring Too Fast</p>
                <p className="text-sm text-slate-700 mt-1">Team of 10 when you should be 3. Salary is fixed cost. Hire only when revenue justifies it.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-sm text-red-900">4. Ignoring Cash Flow</p>
                <p className="text-sm text-slate-700 mt-1">Profitability ≠ cash flow. You can be profitable on paper but run out of cash (long payment cycles, inventory locked up).</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-sm text-red-900">5. Copying Competitors Blindly</p>
                <p className="text-sm text-slate-700 mt-1">What works for them may not work for you (different stage, capital, market). Focus on your unique value.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-sm text-red-900">6. Not Setting Up Legal/Financial Properly</p>
                <p className="text-sm text-slate-700 mt-1">No contracts, mixed personal/business finances, ignored taxes. Clean this up from day 1, not when you're big.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Funding Options Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-teal-600" /> Funding Options
        </h3>
        
        <Card className="border-teal-200 shadow-lg">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">1. Bootstrapping (Self-Funded)</p>
                <p className="text-sm text-slate-700">Use personal savings, revenue from business to fund growth.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Pros:</strong> Full control, no dilution | <strong>Cons:</strong> Slow growth, limited capital</p>
                <p className="text-xs font-semibold text-teal-900 mt-2">Best for: Service businesses, lifestyle businesses, capital-efficient models</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">2. Friends & Family</p>
                <p className="text-sm text-slate-700">{currency.symbol}5-25L from people who believe in you.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Pros:</strong> Easier to raise, flexible terms | <strong>Cons:</strong> Personal relationships at risk</p>
                <p className="text-xs font-semibold text-blue-900 mt-2">Best for: Initial proof of concept, first hire, MVP development</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">3. Bank Loans (MSME, Mudra)</p>
                <p className="text-sm text-slate-700">{currency.symbol}10L-1Cr at 8-12% interest. Need collateral.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Pros:</strong> No equity dilution, tax-deductible interest | <strong>Cons:</strong> Fixed repayment, collateral needed</p>
                <p className="text-xs font-semibold text-purple-900 mt-2">Best for: Established businesses with assets, predictable cash flow</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">4. Angel Investors</p>
                <p className="text-sm text-slate-700">{currency.symbol}25L-2Cr from wealthy individuals. Give 5-20% equity.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Pros:</strong> Mentorship, network, validation | <strong>Cons:</strong> Dilution, investor expectations</p>
                <p className="text-xs font-semibold text-orange-900 mt-2">Best for: Tech startups post-MVP with early traction</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">5. Venture Capital</p>
                <p className="text-sm text-slate-700">{currency.symbol}2Cr-50Cr+ from VCs. Give 10-30% equity per round.</p>
                <p className="text-xs text-slate-600 mt-2"><strong>Pros:</strong> Large capital, expertise, credibility | <strong>Cons:</strong> High dilution, pressure to scale fast, exit expectations</p>
                <p className="text-xs font-semibold text-green-900 mt-2">Best for: High-growth tech startups aiming for {currency.symbol}100Cr+ valuation</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-sm text-yellow-900 mb-2"><Lightbulb className="w-4 h-4 inline mr-1" /> Funding Advice:</p>
              <p className="text-sm text-slate-700">Don't raise money just because you can. Funding = giving away ownership + added pressure. Bootstrap as long as possible. Raise only when you have clear use of capital (customer acquisition, inventory, hiring) that will drive revenue growth.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* When to Quit Job Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-amber-600" /> When to Quit Your Job?
        </h3>
        
        <Card className="border-amber-200 shadow-lg">
          <CardHeader>
            <CardTitle>The Full-Time Entrepreneur Decision</CardTitle>
            <CardDescription>Don't quit impulsively. Have a plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-green-900 mb-2">Quit When...</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-slate-700">Business revenue &gt; 50% of salary for 6+ months consistently</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-slate-700">6-12 months of living expenses saved (emergency fund)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-slate-700">Clear path to profitability within 12 months</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-slate-700">Paying customers (not just idea/MVP)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-slate-700">Family on board (if you have dependents)</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-red-900 mb-2">Don't Quit When...</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                  <p className="text-sm text-slate-700">You just have an idea (no validation)</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                  <p className="text-sm text-slate-700">Inconsistent business income (one good month doesn't mean trend)</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                  <p className="text-sm text-slate-700">No emergency fund / financial buffer</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                  <p className="text-sm text-slate-700">Burning out at job (entrepreneurship is harder, not easier)</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                  <p className="text-sm text-slate-700">Large financial obligations (EMI, dependents) without safety net</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">The Middle Path: Negotiate Part-Time or Sabbatical</p>
              <p className="text-sm text-slate-700">Many companies offer unpaid sabbaticals or part-time work. Test waters for 3-6 months before burning bridges completely.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Entrepreneurship;
