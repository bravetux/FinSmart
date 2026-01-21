"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Users, 
  Scale,
  Calculator,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Building2,
  Percent,
  Shield
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const Freelancing = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Laptop className="w-12 h-12 text-cyan-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Freelancing & Consulting</h2>
          <p className="text-lg text-cyan-100 max-w-2xl">
            Turn your expertise into income. Work on your terms, set your rates, and build a portfolio career.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Getting Started Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-cyan-600" /> Getting Started with Freelancing
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-cyan-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardTitle className="text-lg">Step 1: Identify Your Skill</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm text-slate-600">What do you do in your day job? That's your freelancing skill!</p>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                <li>• Software developer → Freelance coding</li>
                <li>• Designer → UI/UX, graphics work</li>
                <li>• Writer → Content writing</li>
                <li>• Marketer → Digital marketing</li>
                <li>• Accountant → Bookkeeping, tax prep</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardTitle className="text-lg">Step 2: Build Portfolio</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm text-slate-600">Show, don't just tell. Create sample work:</p>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                <li>• 3-5 portfolio pieces</li>
                <li>• GitHub repos (developers)</li>
                <li>• Behance/Dribbble (designers)</li>
                <li>• Medium articles (writers)</li>
                <li>• Case studies (consultants)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardTitle className="text-lg">Step 3: Choose Platform</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm text-slate-600">Where to find clients:</p>
              <ul className="text-sm text-slate-600 space-y-1 ml-4">
                <li>• Upwork, Freelancer (general)</li>
                <li>• Toptal, Turing (tech)</li>
                <li>• 99designs (design)</li>
                <li>• LinkedIn (professional network)</li>
                <li>• Direct outreach to businesses</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Strategies Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-green-600" /> Pricing Your Services
        </h3>
        
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle>Hourly vs Project-Based: Which to Choose?</CardTitle>
            <CardDescription>Different pricing models for different situations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Hourly Pricing
                </h4>
                <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">When to Use</p>
                      <p className="text-xs text-slate-600">Unclear scope, ongoing work, maintenance, retainer clients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Pros</p>
                      <p className="text-xs text-slate-600">Fair for both sides, easy to track, scope changes don't hurt you</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Cons</p>
                      <p className="text-xs text-slate-600">Income capped by hours, penalized for efficiency, hourly tracking overhead</p>
                    </div>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <p className="font-semibold text-sm">Typical Rates (India):</p>
                    <p className="text-xs text-slate-700 mt-1">Junior: {currency.symbol}500-1000/hr</p>
                    <p className="text-xs text-slate-700">Mid-level: {currency.symbol}1000-2000/hr</p>
                    <p className="text-xs text-slate-700">Expert: {currency.symbol}2000-5000/hr</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Project-Based Pricing
                </h4>
                <div className="bg-purple-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">When to Use</p>
                      <p className="text-xs text-slate-600">Clear deliverables, fixed scope, one-time projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Pros</p>
                      <p className="text-xs text-slate-600">Rewarded for efficiency, predictable income, client knows total cost</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Cons</p>
                      <p className="text-xs text-slate-600">Scope creep risk, underestimation hurts, all-or-nothing payment</p>
                    </div>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <p className="font-semibold text-sm">Typical Rates (India):</p>
                    <p className="text-xs text-slate-700 mt-1">Small project: {currency.symbol}10-30K</p>
                    <p className="text-xs text-slate-700">Medium project: {currency.symbol}30-80K</p>
                    <p className="text-xs text-slate-700">Large project: {currency.symbol}80K-3L+</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="font-semibold text-sm text-green-900 mb-2">Pro Pricing Formula:</p>
              <p className="text-sm text-slate-700">1. Estimate hours needed (be realistic, add 30% buffer)</p>
              <p className="text-sm text-slate-700">2. Multiply by your hourly rate</p>
              <p className="text-sm text-slate-700">3. Add value premium (if you're solving a high-value problem)</p>
              <p className="text-sm text-slate-700 mt-2"><strong>Example:</strong> 40 hours × {currency.symbol}1500/hr × 1.25 (value) = {currency.symbol}75,000 project price</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Building Client Base Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Users className="w-6 h-6 text-indigo-600" /> Building a Client Base
        </h3>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="first-client" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Getting Your First 3 Clients</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Badge>1</Badge>
                  <div>
                    <p className="font-semibold text-sm">Start with Your Network</p>
                    <p className="text-sm text-slate-600">Tell friends, family, ex-colleagues you're freelancing. Ask if they know anyone who needs your service. Warm intros have highest conversion.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>2</Badge>
                  <div>
                    <p className="font-semibold text-sm">Offer Discounted "Beta" Projects</p>
                    <p className="text-sm text-slate-600">Price at 50% off for first 3 clients in exchange for testimonials and case studies. Get reviews &gt; get money initially.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>3</Badge>
                  <div>
                    <p className="font-semibold text-sm">Apply to 20+ Gigs Daily</p>
                    <p className="text-sm text-slate-600">On Upwork/Freelancer, send personalized proposals. Expect 2-5% response rate. Volume game initially.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>4</Badge>
                  <div>
                    <p className="font-semibold text-sm">Cold Outreach on LinkedIn</p>
                    <p className="text-sm text-slate-600">Find businesses in your niche. Send personalized DMs offering specific value. "I noticed X on your website, I can help improve it by Y."</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-blue-900">Reality Check:</p>
                <p className="text-sm text-slate-700 mt-1">Getting first clients takes 1-3 months. Expect rejections. First few projects might be underpaid. Focus on building reputation, not maximizing income initially.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scaling" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Scaling from 3 to 10+ Clients</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Leverage Testimonials</p>
                    <p className="text-sm text-slate-600">After each project, ask for detailed testimonial + LinkedIn recommendation. Display prominently on profiles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Raise Rates Gradually</p>
                    <p className="text-sm text-slate-600">Every 5-10 projects, increase rates by 20-30%. Old clients stay at old rates. New clients pay premium.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Ask for Referrals</p>
                    <p className="text-sm text-slate-600">Happy clients are your best salespeople. "Do you know anyone else who might need this service?" Offer referral bonus.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Niche Down</p>
                    <p className="text-sm text-slate-600">Instead of "web developer," become "Shopify expert for fashion brands." Niche = less competition + higher rates.</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="retaining" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Retaining Long-Term Clients</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Over-deliver on First Project</p>
                    <p className="text-sm text-slate-600">Exceed expectations initially. Ship early, add bonus features. First impression = repeat business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Propose Retainer Arrangements</p>
                    <p className="text-sm text-slate-600">"Instead of project-by-project, how about {currency.symbol}30K/month for X hours?" Predictable income for you, priority access for them.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Proactive Communication</p>
                    <p className="text-sm text-slate-600">Weekly updates, flag issues early, suggest improvements. Don't wait for client to chase you.</p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-purple-900">The 80/20 Rule:</p>
                <p className="text-sm text-slate-700 mt-1">80% of your income will come from 20% of your clients. Identify your top clients and treat them like gold. One {currency.symbol}50K/month retainer client &gt; ten {currency.symbol}5K one-off projects.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Managing Irregular Income Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-orange-600" /> Managing Irregular Income
        </h3>
        
        <Card className="border-orange-200 shadow-lg">
          <CardHeader>
            <CardTitle>Freelancing's Biggest Challenge: Cash Flow</CardTitle>
            <CardDescription>One month {currency.symbol}1L, next month {currency.symbol}20K. How to handle it?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">The Freelancer's Budget Formula</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">1. Calculate average monthly income (last 6 months)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">2. Budget based on 70% of average (safety buffer)</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">3. Excess months → Transfer to savings/emergency fund</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">4. Lean months → Dip into buffer, don't panic</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="font-semibold text-sm">Do This:</p>
                  <ul className="text-xs text-slate-600 space-y-1 mt-1">
                    <li>• Maintain 3-6 months emergency fund</li>
                    <li>• Invoice immediately after delivery</li>
                    <li>• Follow up on late payments aggressively</li>
                    <li>• Accept 50% advance for large projects</li>
                    <li>• Diversify client base (don't depend on 1-2)</li>
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold text-sm">Don't Do This:</p>
                  <ul className="text-xs text-slate-600 space-y-1 mt-1">
                    <li>• Lifestyle inflation in good months</li>
                    <li>• Large EMIs based on best-case income</li>
                    <li>• Mixing personal & business finances</li>
                    <li>• Not saving for taxes (30% of income)</li>
                    <li>• Quitting day job without 6-month runway</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contracts & Agreements Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" /> Contracts & Agreements
        </h3>
        
        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle>Protecting Yourself Legally</CardTitle>
            <CardDescription>Handshake deals are recipe for disaster. Always have a written agreement.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">Essential Contract Elements:</p>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p><strong>Scope of Work:</strong> Exactly what you'll deliver (features, deliverables, timeline)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p><strong>Payment Terms:</strong> Amount, milestone payments, payment method, late fee clause</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p><strong>Timeline:</strong> Start date, milestone dates, final delivery date</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p><strong>Revision Policy:</strong> How many rounds of revisions included? Extra revision charges?</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p><strong>Termination Clause:</strong> How either party can exit. Refund/payment for partial work?</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p><strong>IP Rights:</strong> Who owns the work? Full transfer or license?</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p><strong>Confidentiality:</strong> NDA if working with sensitive information</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600" />
                  Red Flags (Walk Away If...)
                </p>
                <ul className="text-sm text-slate-700 space-y-1 mt-2 ml-4">
                  <li>• Client refuses to sign any agreement</li>
                  <li>• "We'll pay you after we see results" (no upfront)</li>
                  <li>• Vague scope: "Build a website" (what kind? how many pages? features?)</li>
                  <li>• Unrealistic timeline: "Need full app in 1 week"</li>
                  <li>• Pay only in "exposure" or "equity" (unless you REALLY believe in it)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-sm text-green-900">Pro Tip: Use Templates</p>
                <p className="text-sm text-slate-700 mt-1">Don't write from scratch. Use contract templates from Bonsai, AND.CO, or get a basic one drafted by a lawyer once. Customize per project. Saves time & ensures nothing is missed.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tax for Freelancers Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Percent className="w-6 h-6 text-purple-600" /> Income Tax & GST for Freelancers
        </h3>
        
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle>Tax Compliance for Freelancers (India)</CardTitle>
            <CardDescription>Don't let taxes surprise you at year-end</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="income-tax">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    Income Tax (Section 44ADA - Presumptive Taxation)
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-sm">What is 44ADA?</p>
                    <p className="text-sm text-slate-700 mt-1">Simplified taxation for professionals with turnover &lt; {currency.symbol}50L/year. You can declare 50% of gross receipts as profit without maintaining detailed books.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Example:</p>
                    <p className="text-sm text-slate-700">Annual freelancing income: {currency.symbol}8,00,000</p>
                    <p className="text-sm text-slate-700">Presumptive profit (50%): {currency.symbol}4,00,000</p>
                    <p className="text-sm text-slate-700">Taxable income: {currency.symbol}4,00,000 (pay tax on this)</p>
                    <p className="text-sm font-semibold text-slate-900 mt-2">Tax saved vs full {currency.symbol}8L taxation: ~{currency.symbol}1,20,000!</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg mt-3">
                    <p className="text-sm text-slate-700"><AlertCircle className="w-4 h-4 inline mr-1" /> <strong>Important:</strong> If you claim presumptive taxation, you can't claim expenses separately. It's 50% profit, period. Good if your expenses are &lt;50%, bad if they're &gt;50%.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="advance-tax">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Advance Tax (Pay Quarterly)
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <p className="text-sm text-slate-700">If your tax liability is &gt; {currency.symbol}10K/year, you must pay advance tax in 4 installments:</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-sm">• By June 15: 15% of estimated annual tax</p>
                    <p className="text-sm">• By Sept 15: 45% of estimated annual tax</p>
                    <p className="text-sm">• By Dec 15: 75% of estimated annual tax</p>
                    <p className="text-sm">• By March 15: 100% of estimated annual tax</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg mt-3">
                    <p className="text-sm text-slate-700"><strong>Miss advance tax?</strong> Interest of 1% per month (12% annual) on shortfall. Don't ignore!</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gst">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    GST Registration
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">When is GST registration required?</p>
                    <p className="text-sm text-slate-700">• Turnover &gt; {currency.symbol}20L/year ({currency.symbol}10L for special states)</p>
                    <p className="text-sm text-slate-700">• Providing services to clients outside India (mandatory from first rupee)</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-semibold text-sm">GST Rate for Services: 18%</p>
                    <p className="text-sm text-slate-700 mt-1">You charge client {currency.symbol}1,18,000 ({currency.symbol}1L + 18% GST). You keep {currency.symbol}1L, pay {currency.symbol}18K to government.</p>
                  </div>
                  <div className="space-y-2 mt-3">
                    <p className="font-semibold text-sm">GST Compliance:</p>
                    <p className="text-sm text-slate-700">• File GSTR-3B monthly (summary of sales/purchases)</p>
                    <p className="text-sm text-slate-700">• File GSTR-1 monthly (detailed invoices)</p>
                    <p className="text-sm text-slate-700">• Hire CA if turnover &gt; {currency.symbol}40L (compliance gets complex)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="bg-purple-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-sm text-purple-900 mb-2">Tax Planning Tips for Freelancers:</p>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• Set aside 30% of every payment for taxes</li>
                <li>• Maintain separate bank account for business</li>
                <li>• Keep all invoices and payment receipts</li>
                <li>• If expenses &gt;50%, don't opt for 44ADA, maintain proper books</li>
                <li>• Invest in 80C instruments to reduce tax burden</li>
                <li>• Consult CA once annual income crosses {currency.symbol}10L</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tools Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-teal-600" /> Essential Freelancer Tools
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-teal-200 shadow-lg">
            <CardHeader className="bg-teal-50">
              <CardTitle className="text-lg">Finding Work</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm"><strong>Upwork:</strong> General freelancing</p>
              <p className="text-sm"><strong>Toptal:</strong> Top 3% talent (vetted)</p>
              <p className="text-sm"><strong>Freelancer.in:</strong> Indian market focus</p>
              <p className="text-sm"><strong>LinkedIn:</strong> Professional networking</p>
              <p className="text-sm"><strong>AngelList:</strong> Startup jobs/contracts</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg">Managing Projects</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm"><strong>Notion/Trello:</strong> Project tracking</p>
              <p className="text-sm"><strong>Toggl:</strong> Time tracking</p>
              <p className="text-sm"><strong>Slack/Teams:</strong> Client communication</p>
              <p className="text-sm"><strong>Google Drive:</strong> File sharing</p>
              <p className="text-sm"><strong>Calendly:</strong> Meeting scheduling</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-lg">Invoicing & Payments</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-2">
              <p className="text-sm"><strong>Zoho Invoice:</strong> Indian invoicing</p>
              <p className="text-sm"><strong>PayPal:</strong> International payments</p>
              <p className="text-sm"><strong>Razorpay:</strong> Indian payment gateway</p>
              <p className="text-sm"><strong>Wise:</strong> Low-fee international transfers</p>
              <p className="text-sm"><strong>Bonsai/AND.CO:</strong> All-in-one</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Freelancing;
