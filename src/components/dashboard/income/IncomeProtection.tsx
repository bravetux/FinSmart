"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  AlertTriangle, 
  Heart, 
  PiggyBank, 
  Briefcase,
  TrendingDown,
  CheckCircle,
  AlertCircle,
  DollarSign,
  FileText,
  Target,
  Clock,
  LifeBuoy,
  GraduationCap,
  Home
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const IncomeProtection = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Shield className="w-12 h-12 text-red-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Protecting Your Income</h2>
          <p className="text-lg text-red-100 max-w-2xl">
            Your income is your most valuable asset. Protect it against job loss, illness, and life's uncertainties.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Emergency Fund Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <PiggyBank className="w-6 h-6 text-orange-600" /> Emergency Fund: Your Financial Safety Net
        </h3>
        
        <Card className="border-orange-200 shadow-lg">
          <CardHeader>
            <CardTitle>3-6 Months of Expenses: Non-Negotiable</CardTitle>
            <CardDescription>This is the foundation of financial security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">What is an Emergency Fund?</p>
              <p className="text-sm text-slate-700">Liquid cash kept aside ONLY for emergencies: job loss, medical emergencies, urgent home repairs, family crises. Not for vacations, gadgets, or "good deals."</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">How Much Do You Need?</p>
              <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Monthly Expenses (rent, food, EMI, utilities)</span>
                  <span className="font-semibold">{currency.symbol}40,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">× Months of buffer (3-6)</span>
                  <span className="font-semibold">× 6</span>
                </div>
                <div className="border-t-2 border-orange-300 pt-2 flex items-center justify-between">
                  <span className="font-semibold">Emergency Fund Target</span>
                  <span className="text-2xl font-bold text-orange-600">{currency.symbol}2,40,000</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-sm">Choose the Right Number:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Badge>3 months</Badge>
                  <p className="text-sm text-slate-600">If: Stable job, dual income household, no dependents, in-demand skills</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="secondary">6 months</Badge>
                  <p className="text-sm text-slate-600">If: Single income, dependents, niche industry, freelancer/business owner</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="destructive">12 months</Badge>
                  <p className="text-sm text-slate-600">If: High job uncertainty, health issues, sole breadwinner with large family</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-sm text-green-900 mb-2">Where to Keep Emergency Fund?</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm"><strong>Savings Bank Account (50%):</strong> Instant access, 2.5-3.5% interest</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm"><strong>Liquid Mutual Funds (30%):</strong> 1-day withdrawal, 5-6% returns</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm"><strong>FD with sweep-in (20%):</strong> Auto-liquidation when needed, ~6% interest</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-700 mt-3"><AlertCircle className="w-4 h-4 inline mr-1" /> <strong>Don't:</strong> Invest emergency fund in stocks, locked FDs, or real estate. Liquidity &gt; Returns here.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Income Insurance Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-600" /> Income Insurance & Protection
        </h3>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="term" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Term Life Insurance (Essential)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">What is it?</p>
                    <p className="text-sm text-slate-600">If you die during policy term, your family gets lump sum. Pure protection, no investment component.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How Much Cover?</p>
                    <p className="text-sm text-slate-600">10-15x your annual income. If you earn {currency.symbol}10L/year → {currency.symbol}1-1.5Cr cover</p>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm">Cost Example:</p>
                  <p className="text-sm text-slate-700 mt-1">30-year-old, non-smoker, {currency.symbol}1Cr cover for 30 years</p>
                  <p className="text-sm font-semibold text-slate-900 mt-1">Premium: ~{currency.symbol}10-12K/year</p>
                  <p className="text-xs text-slate-600 mt-1">(That's just {currency.symbol}1000/month for {currency.symbol}1Cr protection!)</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Who Needs It?</p>
                    <p className="text-sm text-slate-600">Anyone with financial dependents (spouse, children, parents who depend on your income). Single with no dependents? Optional.</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-900"><strong>Top Insurers:</strong> HDFC Life, ICICI Prudential, Max Life, LIC (buy online for lower premiums)</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="health" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-red-600" />
                <span className="font-semibold">Health Insurance (Critical)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Why Essential?</p>
                    <p className="text-sm text-slate-600">Medical costs can wipe out years of savings. ICU: {currency.symbol}50K-1L/day | Surgery: {currency.symbol}2-10L+ | Without insurance, medical emergency = financial disaster.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How Much Cover?</p>
                    <p className="text-sm text-slate-600">Minimum {currency.symbol}5L for self | {currency.symbol}10L for family (spouse + 2 kids) | {currency.symbol}5L additional for parents</p>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm">Cost Example:</p>
                  <p className="text-sm text-slate-700 mt-1">30-year-old, {currency.symbol}5L cover: ~{currency.symbol}5-7K/year</p>
                  <p className="text-sm text-slate-700">Family floater {currency.symbol}10L: ~{currency.symbol}12-18K/year</p>
                  <p className="text-sm text-slate-700">Parents (60+), {currency.symbol}5L: ~{currency.symbol}20-30K/year</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Key Features to Check:</p>
                    <ul className="text-sm text-slate-600 ml-4 space-y-1">
                      <li>• Claim settlement ratio (&gt;95%)</li>
                      <li>• Room rent limit (opt for no capping)</li>
                      <li>• Pre-existing disease waiting period</li>
                      <li>• Network hospitals in your city</li>
                      <li>• Daycare procedures covered</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="critical" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <span className="font-semibold">Critical Illness Cover (Recommended)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">What is it?</p>
                    <p className="text-sm text-slate-600">Lump sum payout on diagnosis of critical illness (cancer, heart attack, stroke, kidney failure, etc.). Covers income loss during recovery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">How Much & Why?</p>
                    <p className="text-sm text-slate-600">{currency.symbol}25-50L cover. Health insurance covers treatment costs, but what about 6-12 months of no income during recovery? Critical illness cover fills that gap.</p>
                  </div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm">Cost: {currency.symbol}5-10K/year for {currency.symbol}25L cover</p>
                  <p className="text-sm text-slate-700 mt-1">Can be standalone or rider on term insurance (cheaper)</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Who Needs It?</p>
                    <p className="text-sm text-slate-600">Primary breadwinner, family history of critical illnesses, high-stress jobs, age 30+</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="disability" className="border rounded-lg px-4 shadow-sm">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <LifeBuoy className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Disability Insurance (Advanced)</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">What is it?</p>
                    <p className="text-sm text-slate-600">Replaces portion of income if you become disabled (accident, illness) and can't work. Pays monthly income until recovery or retirement.</p>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-semibold text-sm">Reality in India:</p>
                  <p className="text-sm text-slate-700 mt-1">Standalone disability insurance is rare. Usually comes as rider on term insurance. Limited availability and high cost.</p>
                  <p className="text-sm text-slate-700 mt-2"><strong>Alternative:</strong> Critical illness cover + strong emergency fund serves similar purpose.</p>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">For Most People:</p>
                    <p className="text-sm text-slate-600">Focus on term life + health + critical illness first. These cover 90% of income protection needs.</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Job Loss Scenario Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-indigo-600" /> What If You Lose Your Job?
        </h3>
        
        <Card className="border-indigo-200 shadow-lg">
          <CardHeader>
            <CardTitle>The Layoff Survival Guide</CardTitle>
            <CardDescription>Layoffs happen. Here's how to navigate them.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg space-y-3">
              <p className="font-semibold text-sm text-indigo-900">Immediate Actions (Day 1-7):</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Badge>1</Badge>
                  <p className="text-sm text-slate-700"><strong>File for unemployment benefits:</strong> Register with Employment Exchange (if eligible for any govt. schemes)</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>2</Badge>
                  <p className="text-sm text-slate-700"><strong>Understand severance package:</strong> Notice pay, gratuity, PF, encashed leaves - calculate total</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>3</Badge>
                  <p className="text-sm text-slate-700"><strong>Get documents:</strong> Experience letter, relieving letter, Form 16, PF transfer forms</p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>4</Badge>
                  <p className="text-sm text-slate-700"><strong>Update LinkedIn:</strong> "Open to opportunities" - network effects matter</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg space-y-3">
              <p className="font-semibold text-sm text-blue-900">Short-Term Strategy (Week 1-4):</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Activate network:</strong> Inform 50+ contacts. Most jobs come through referrals, not job boards.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Apply aggressively:</strong> 10-20 applications daily. Follow up. Track in spreadsheet.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Consider contract/freelance:</strong> Immediate income while searching for permanent role.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Cut non-essential expenses:</strong> Pause subscriptions, reduce dining out, defer big purchases.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg space-y-3">
              <p className="font-semibold text-sm text-green-900">Long-Term (Month 2+):</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Upskill:</strong> Use downtime to learn in-demand skills. Free courses: Coursera, edX, YouTube</p>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Expand search:</strong> Consider adjacent roles, smaller companies, different industries</p>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Side income:</strong> Freelance, consulting, gig work - bridge the gap</p>
                </div>
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-green-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Mental health:</strong> Job loss is traumatic. Talk to friends, exercise, maintain routine</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-yellow-900 mb-2">Financial Priorities During Unemployment:</p>
              <ol className="text-sm text-slate-700 space-y-1 ml-4">
                <li>1. Use emergency fund (this is what it's for!)</li>
                <li>2. Pause all investments (SIPs, savings) - conserve cash</li>
                <li>3. Pay only minimum EMIs if needed (defer prepayments)</li>
                <li>4. Health insurance - DON'T let it lapse (port to individual policy if losing corporate cover)</li>
                <li>5. As last resort: Partial PF withdrawal (allowed for unemployment)</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Severance Package Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-teal-600" /> Severance Packages & Negotiation
        </h3>
        
        <Card className="border-teal-200 shadow-lg">
          <CardHeader>
            <CardTitle>Understanding & Negotiating Your Exit Package</CardTitle>
            <CardDescription>Don't leave money on the table</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">Standard Severance Components:</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Notice Period Pay</span>
                  <span className="font-semibold">1-3 months salary</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Gratuity (if 5+ years)</span>
                  <span className="font-semibold">15 days × years × last salary</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Encashed Leaves</span>
                  <span className="font-semibold">Unused EL/PL days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">Variable Pay (if applicable)</span>
                  <span className="font-semibold">Pro-rated bonus</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">ESOP/Stock Vesting</span>
                  <span className="font-semibold">Check vesting schedule</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">Negotiation Tips (if layoff, not termination for cause):</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Additional months:</strong> Ask for 1-2 extra months pay. Companies often have flexibility.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Health insurance extension:</strong> Request continuation for 6-12 months (many companies agree)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Outplacement services:</strong> Resume writing, interview prep, job search support</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Non-compete waiver:</strong> Get it in writing if they want you to sign non-compete</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Reference letter:</strong> Positive reference from manager/HR for future employers</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-red-900 mb-2"><AlertCircle className="w-4 h-4 inline mr-1" /> Don't Sign Immediately:</p>
              <p className="text-sm text-slate-700">Take 24-48 hours to review. Consult lawyer if severance is significant ({currency.symbol}5L+). Check for hidden clauses (non-compete, non-disclosure, release of all claims).</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Career Breaks Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-purple-600" /> Career Breaks & Sabbaticals
        </h3>
        
        <Card className="border-purple-200 shadow-lg">
          <CardHeader>
            <CardTitle>Planned Time Off: How to Afford It</CardTitle>
            <CardDescription>Travel, study, family - taking a break without financial stress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg space-y-3">
              <p className="font-semibold text-sm">Financial Planning for Career Break:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Badge>1</Badge>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Calculate Total Cost</p>
                    <p className="text-xs text-slate-600">Living expenses + travel/course fees + emergency buffer for break duration</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>2</Badge>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Save 1.5x the Amount</p>
                    <p className="text-xs text-slate-600">If break costs {currency.symbol}3L, save {currency.symbol}4.5L (things cost more than planned + cushion)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>3</Badge>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Keep Emergency Fund Intact</p>
                    <p className="text-xs text-slate-600">Sabbatical fund is separate from emergency fund (6 months expenses)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge>4</Badge>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Plan Restart Strategy</p>
                    <p className="text-xs text-slate-600">How will you explain gap? Upskilling, family, health - have clear answer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-green-900 mb-2">Types of Productive Career Breaks:</p>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• <strong>Education:</strong> MBA, certifications, skill upgrade (explain as investment in career)</li>
                <li>• <strong>Family:</strong> Childcare, elder care, relocation (legitimate, no stigma)</li>
                <li>• <strong>Health:</strong> Recovery, mental health, wellness (increasingly accepted)</li>
                <li>• <strong>Entrepreneurship:</strong> Starting business (shows initiative even if you return to job)</li>
                <li>• <strong>Volunteering/Non-profit:</strong> Social work, NGO (demonstrates values)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">Making Gap Period Valuable:</p>
              <p className="text-sm text-slate-700">Don't just "take time off." Use it productively: Learn new skill, freelance projects, online courses, volunteering. When you return, you should have something to show - certificate, portfolio, experience - not just "I traveled for a year."</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* PF/ESIC Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Home className="w-6 h-6 text-amber-600" /> PF & ESIC: Your Safety Nets
        </h3>
        
        <Card className="border-amber-200 shadow-lg">
          <CardHeader>
            <CardTitle>Employee Provident Fund & ESI Benefits</CardTitle>
            <CardDescription>Government-mandated safety nets for salaried employees</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="pf">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <PiggyBank className="w-4 h-4" />
                    EPF (Employee Provident Fund) - Retirement + Emergency
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-semibold text-sm">What is EPF?</p>
                    <p className="text-sm text-slate-700 mt-1">12% of basic salary deducted monthly (matched 12% by employer). Grows at 8.15% interest. Meant for retirement but can withdraw in emergencies.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">When Can You Withdraw?</p>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• <strong>Full withdrawal:</strong> Retirement (58+), 2 months unemployment, medical emergency</li>
                      <li>• <strong>Partial withdrawal:</strong> Home purchase/construction, education, medical treatment, marriage</li>
                      <li>• <strong>Advance:</strong> Up to 75% after 1 month unemployment (non-refundable, but treated as withdrawal)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg mt-3">
                    <p className="text-sm"><strong>Pro Tip:</strong> Don't withdraw PF casually. It's your retirement corpus. 8.15% risk-free return is great. Withdraw only in genuine emergencies.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="esic">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    ESIC (Employee State Insurance) - Health & Disability
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-sm">What is ESIC?</p>
                    <p className="text-sm text-slate-700 mt-1">Social security scheme for workers earning &lt; {currency.symbol}21K/month. 0.75% contribution from employee, 3.25% from employer. Provides medical care + cash benefits during sickness/disability.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Benefits:</p>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Free medical treatment at ESI hospitals/dispensaries</li>
                      <li>• Sickness benefit: 70% of wages for 91 days if unable to work</li>
                      <li>• Maternity benefit: 100% wages for 26 weeks</li>
                      <li>• Disability benefit: 90% of wages if permanently disabled</li>
                      <li>• Dependent benefit: Family gets monthly pension if worker dies</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg mt-3">
                    <p className="text-sm"><strong>Note:</strong> Most higher-salaried employees (&gt;{currency.symbol}21K) aren't covered by ESIC. For them, private health insurance is essential.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default IncomeProtection;
