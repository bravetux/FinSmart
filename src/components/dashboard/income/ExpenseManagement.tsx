"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  PieChart, 
  TrendingDown, 
  Smartphone,
  ShoppingCart,
  AlertCircle,
  CheckCircle,
  Target,
  DollarSign,
  CreditCard,
  Home,
  Car,
  Coffee,
  Zap,
  Calculator,
  FileText,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const ExpenseManagement = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <PieChart className="w-12 h-12 text-emerald-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Managing Expenses Wisely</h2>
          <p className="text-lg text-emerald-100 max-w-2xl">
            It's not about how much you earn. It's about how much you keep. Master expense management to accelerate wealth building.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 -mr-24 -mb-24 rounded-full blur-3xl" />
      </div>

      {/* 50/30/20 Rule Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-emerald-600" /> The 50/30/20 Rule: Simple Budgeting Framework
        </h3>
        
        <Card className="border-emerald-200 shadow-lg">
          <CardHeader>
            <CardTitle>Allocate Every Rupee with Purpose</CardTitle>
            <CardDescription>The most popular budgeting framework for a reason</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-3">The 50/30/20 Breakdown:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl shrink-0">50%</div>
                  <div>
                    <p className="font-semibold text-slate-900">Needs (Essentials)</p>
                    <p className="text-sm text-slate-700">Rent/EMI, groceries, utilities, insurance, minimum loan payments, transportation, phone bill</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl shrink-0">30%</div>
                  <div>
                    <p className="font-semibold text-slate-900">Wants (Lifestyle)</p>
                    <p className="text-sm text-slate-700">Dining out, entertainment, subscriptions, shopping, hobbies, vacations, gadgets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-cyan-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl shrink-0">20%</div>
                  <div>
                    <p className="font-semibold text-slate-900">Savings & Debt Repayment</p>
                    <p className="text-sm text-slate-700">Emergency fund, investments (SIP, stocks, FD), extra loan payments, retirement savings</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-3">Real Example: {currency.symbol}60,000 Monthly Salary (Take-Home)</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-white rounded">
                  <span className="text-sm text-slate-700">50% Needs</span>
                  <span className="font-semibold text-slate-900">{currency.symbol}30,000</span>
                </div>
                <div className="text-xs text-slate-600 ml-4 space-y-0.5">
                  <p>• Rent: {currency.symbol}15,000</p>
                  <p>• Groceries: {currency.symbol}6,000</p>
                  <p>• Utilities + Phone: {currency.symbol}3,000</p>
                  <p>• Insurance: {currency.symbol}2,000</p>
                  <p>• Transport: {currency.symbol}4,000</p>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-white rounded mt-2">
                  <span className="text-sm text-slate-700">30% Wants</span>
                  <span className="font-semibold text-slate-900">{currency.symbol}18,000</span>
                </div>
                <div className="text-xs text-slate-600 ml-4 space-y-0.5">
                  <p>• Dining out: {currency.symbol}5,000</p>
                  <p>• Entertainment (OTT, movies): {currency.symbol}2,000</p>
                  <p>• Shopping/Personal care: {currency.symbol}6,000</p>
                  <p>• Weekend activities: {currency.symbol}5,000</p>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-white rounded mt-2">
                  <span className="text-sm text-slate-700">20% Savings</span>
                  <span className="font-semibold text-slate-900">{currency.symbol}12,000</span>
                </div>
                <div className="text-xs text-slate-600 ml-4 space-y-0.5">
                  <p>• Mutual Fund SIP: {currency.symbol}8,000</p>
                  <p>• Emergency fund top-up: {currency.symbol}4,000</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">What If You Can't Hit 50/30/20?</p>
              <div className="space-y-2">
                <p className="text-sm text-slate-700"><strong>If Needs &gt; 50%:</strong> High rent city? Consider roommates, cheaper area, or work from home. Look for ways to reduce fixed costs.</p>
                <p className="text-sm text-slate-700"><strong>If Savings &lt; 20%:</strong> Start with 10%, gradually increase. Even 5% is better than nothing. Automate it (auto-debit SIP) so you don't "forget."</p>
                <p className="text-sm text-slate-700"><strong>If Wants &gt; 30%:</strong> This is where most people leak money. Track for 1 month - you'll be shocked. Cut 10% and redirect to savings.</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-yellow-900 mb-2"><AlertCircle className="w-4 h-4 inline mr-1" /> Adjust for Your Life Stage:</p>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• <strong>20s, Living with parents:</strong> 40/20/40 (save aggressively while you can)</li>
                <li>• <strong>30s, Family + Home Loan:</strong> 60/20/20 (needs increase, stay disciplined)</li>
                <li>• <strong>40s+, Established:</strong> 50/20/30 (reduce wants, increase savings for retirement)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Expense Tracking Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-blue-600" /> Expense Tracking: You Can't Manage What You Don't Measure
        </h3>
        
        <Card className="border-blue-200 shadow-lg">
          <CardHeader>
            <CardTitle>Track Every Rupee for 30 Days</CardTitle>
            <CardDescription>The single most eye-opening financial exercise</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">Why Track Expenses?</p>
              <p className="text-sm text-slate-700">Most people have NO idea where their money goes. "I earn well but nothing is left at month-end" - sound familiar? Tracking reveals the truth. That daily {currency.symbol}200 coffee is {currency.symbol}6,000/month = {currency.symbol}72,000/year!</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">How to Track (Choose One Method):</p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="apps" className="border rounded-lg px-4">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">Expense Tracking Apps (Easiest)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Badge>Best</Badge>
                        <div>
                          <p className="text-sm font-semibold">Walnut / ET Money / Money Manager</p>
                          <p className="text-xs text-slate-600">Auto-reads SMS, categorizes expenses, free, simple UI</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Badge variant="secondary">Advanced</Badge>
                        <div>
                          <p className="text-sm font-semibold">1Money / Spendee</p>
                          <p className="text-xs text-slate-600">Manual entry but powerful analytics, budgets, goals</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Badge variant="outline">For Couples</Badge>
                        <div>
                          <p className="text-sm font-semibold">Splitwise / Honeydue</p>
                          <p className="text-xs text-slate-600">Track shared expenses, split bills, sync between partners</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg mt-3">
                      <p className="text-sm"><strong>Pro Tip:</strong> Use app that auto-reads bank SMS. Manual entry = you'll quit in 3 days.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="spreadsheet" className="border rounded-lg px-4">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">Google Sheets / Excel (Full Control)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <p className="font-semibold text-sm">Simple Template Structure:</p>
                      <div className="overflow-x-auto mt-2">
                        <table className="text-xs w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Date</th>
                              <th className="text-left p-2">Category</th>
                              <th className="text-left p-2">Description</th>
                              <th className="text-right p-2">Amount</th>
                            </tr>
                          </thead>
                          <tbody className="text-slate-700">
                            <tr className="border-b">
                              <td className="p-2">01-Jan</td>
                              <td className="p-2">Food</td>
                              <td className="p-2">Swiggy lunch</td>
                              <td className="text-right p-2">{currency.symbol}350</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">01-Jan</td>
                              <td className="p-2">Transport</td>
                              <td className="p-2">Uber to office</td>
                              <td className="text-right p-2">{currency.symbol}150</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-2">02-Jan</td>
                              <td className="p-2">Shopping</td>
                              <td className="p-2">Amazon impulse buy</td>
                              <td className="text-right p-2">{currency.symbol}1,200</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm">Add pivot tables and charts for category-wise monthly analysis. Download bank statements and copy-paste transactions.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="notebook" className="border rounded-lg px-4">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold">Pen & Paper (Old School)</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <p className="text-sm text-slate-700">Keep a small notebook. Every expense, write it down immediately. End of day, categorize. End of month, sum up by category.</p>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm"><strong>Works well if:</strong> You prefer physical writing, don't want to share financial data with apps, like the tactile feeling.</p>
                      <p className="text-sm mt-2"><strong>Drawback:</strong> No auto-categorization, no charts, manual calculation. But builds incredible awareness.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-sm text-yellow-900 mb-2">The 30-Day Challenge:</p>
              <ol className="text-sm text-slate-700 space-y-1 ml-4">
                <li>1. Track EVERY expense for 30 days (even {currency.symbol}10 parking fee)</li>
                <li>2. Don't change behavior, just observe</li>
                <li>3. At month-end, categorize and analyze</li>
                <li>4. Identify "leak categories" (usually food delivery, subscriptions, impulse buys)</li>
                <li>5. Set realistic reduction targets for next month</li>
              </ol>
              <p className="text-sm text-slate-700 mt-3 font-semibold">Guaranteed: You'll find {currency.symbol}5,000-10,000 of wasteful spending you can redirect to savings.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Lifestyle Inflation Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-red-600" /> Lifestyle Inflation: The Silent Wealth Killer
        </h3>
        
        <Card className="border-red-200 shadow-lg">
          <CardHeader>
            <CardTitle>Why Raises Don't Make You Richer</CardTitle>
            <CardDescription>Breaking the earn more = spend more cycle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">What is Lifestyle Inflation?</p>
              <p className="text-sm text-slate-700">You get a raise. Suddenly, economy flights become business class. Swiggy becomes daily habit. {currency.symbol}30K phone upgrades to {currency.symbol}80K. You earn more but save the same (or less). Net result? No wealth building despite higher income.</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">The Trap in Action:</p>
              <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">Scenario 1: Lifestyle Inflation (Common)</p>
                  <div className="text-xs text-slate-700 space-y-1">
                    <div className="flex items-center justify-between">
                      <span>Salary at 25:</span>
                      <span className="font-semibold">{currency.symbol}5L/year ({currency.symbol}40K/month)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Savings:</span>
                      <span>{currency.symbol}8K/month (20%)</span>
                    </div>
                    <div className="border-t border-slate-300 my-2"></div>
                    <div className="flex items-center justify-between">
                      <span>Salary at 35:</span>
                      <span className="font-semibold">{currency.symbol}20L/year ({currency.symbol}1.6L/month)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Savings:</span>
                      <span>{currency.symbol}30K/month (18.75% - slightly decreased!)</span>
                    </div>
                    <div className="border-t border-slate-300 my-2"></div>
                    <div className="flex items-center justify-between text-red-700">
                      <span className="font-semibold">Result:</span>
                      <span className="font-semibold">Income 4x, savings only 3.75x. Lost opportunity!</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg space-y-2">
                  <p className="text-sm font-semibold text-green-900">Scenario 2: Controlled Lifestyle (Rare)</p>
                  <div className="text-xs text-slate-700 space-y-1">
                    <div className="flex items-center justify-between">
                      <span>Salary at 25:</span>
                      <span className="font-semibold">{currency.symbol}5L/year, saves {currency.symbol}8K/month (20%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Salary at 35:</span>
                      <span className="font-semibold">{currency.symbol}20L/year, saves {currency.symbol}64K/month (40%)</span>
                    </div>
                    <div className="border-t border-green-300 my-2"></div>
                    <div className="flex items-center justify-between text-green-700">
                      <span className="font-semibold">Strategy:</span>
                      <span className="font-semibold">Lifestyle grew modestly, savings doubled as %</span>
                    </div>
                    <div className="flex items-center justify-between text-green-700">
                      <span className="font-semibold">10-year savings difference:</span>
                      <span className="font-semibold">{currency.symbol}40L+ more!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">How to Combat Lifestyle Inflation:</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>The 50% Rule:</strong> Every raise/bonus, save at least 50% before upgrading lifestyle</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Automate raises:</strong> Got {currency.symbol}10K raise? Immediately increase SIP by {currency.symbol}5K (auto-debit)</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Delay gratification:</strong> Want to upgrade something? Wait 3 months. Still want it? Then buy.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Track savings rate, not savings amount:</strong> Goal is to increase % saved as income grows</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <p className="text-sm text-slate-700"><strong>Upgrade selectively:</strong> Choose 1-2 areas that truly matter to you, stay frugal elsewhere</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-purple-900 mb-2"><Lightbulb className="w-4 h-4 inline mr-1" /> The Hedonic Treadmill:</p>
              <p className="text-sm text-slate-700">Psychological truth: Upgrading from {currency.symbol}30K phone to {currency.symbol}80K gives you joy for 2 weeks. Then it's your new normal. But the {currency.symbol}50K you spent? Could've become {currency.symbol}2L in 10 years. Choose experiences that compound (health, skills, relationships) over stuff that depreciates.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Value-Based Spending Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-600" /> Value-Based Spending Philosophy
        </h3>
        
        <Card className="border-yellow-200 shadow-lg">
          <CardHeader>
            <CardTitle>Spend on What You Value, Cut the Rest</CardTitle>
            <CardDescription>It's not about being cheap. It's about being intentional.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2">The Core Principle:</p>
              <p className="text-sm text-slate-700">Identify what brings you genuine joy and fulfillment. Spend generously there. For everything else? Be ruthlessly frugal. Don't be the person with {currency.symbol}1L phone living in a depressing apartment, or driving a luxury car while eating instant noodles daily.</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-sm">Examples of Value-Based Spending:</p>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900">Person A: Fitness Enthusiast</p>
                  <p className="text-sm text-slate-700 mt-1">Splurges: {currency.symbol}3K/month gym, {currency.symbol}5K health supplements, {currency.symbol}15K quality running shoes annually</p>
                  <p className="text-sm text-slate-700">Frugal: {currency.symbol}10K phone, cooks at home, no car, cheap clothes</p>
                  <p className="text-sm text-green-700 mt-1"><strong>Result:</strong> Excellent health, high energy, productive, happy</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900">Person B: Travel Lover</p>
                  <p className="text-sm text-slate-700 mt-1">Splurges: {currency.symbol}1L annual travel budget (experiences, memories, growth)</p>
                  <p className="text-sm text-slate-700">Frugal: Old laptop, budget smartphone, no fancy dinners, packed lunches</p>
                  <p className="text-sm text-green-700 mt-1"><strong>Result:</strong> Rich experiences, broadened perspective, incredible memories</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900">Person C: Learning & Growth</p>
                  <p className="text-sm text-slate-700 mt-1">Splurges: {currency.symbol}50K annual courses/certifications, {currency.symbol}2K/month books & audible</p>
                  <p className="text-sm text-slate-700">Frugal: No subscriptions, rarely eats out, public transport, basic wardrobe</p>
                  <p className="text-sm text-green-700 mt-1"><strong>Result:</strong> Career acceleration, income growth, intellectual fulfillment</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-blue-900 mb-2">The Value-Based Spending Test:</p>
              <p className="text-sm text-slate-700 mb-2">Before any discretionary purchase, ask:</p>
              <ol className="text-sm text-slate-700 space-y-1 ml-4">
                <li>1. Does this align with my core values?</li>
                <li>2. Will I remember/use this 6 months from now?</li>
                <li>3. Is this the best use of this money toward my goals?</li>
                <li>4. Am I buying this to impress others or for genuine need/joy?</li>
              </ol>
              <p className="text-sm text-slate-700 mt-2">If 3+ answers are "no" → don't buy.</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-green-900 mb-2">The Freedom Mindset:</p>
              <p className="text-sm text-slate-700">Every unnecessary expense is a vote for less freedom. That {currency.symbol}5L car on EMI? That's 2 years of financial stress + opportunity cost of {currency.symbol}8-10L (invested equivalent). Ask: "Would I rather have this thing, or more financial freedom?"</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Big 3 Expenses Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Home className="w-6 h-6 text-indigo-600" /> The Big 3: Housing, Transportation, Food
        </h3>
        
        <Card className="border-indigo-200 shadow-lg">
          <CardHeader>
            <CardTitle>These 3 Categories Determine Your Financial Future</CardTitle>
            <CardDescription>Get these right, and everything else is easy</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="housing">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-indigo-600" />
                    <span className="font-semibold">Housing: 25-30% of Income (Max)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="font-semibold text-sm">Rule of Thumb:</p>
                    <p className="text-sm text-slate-700 mt-1">Rent/EMI should not exceed 30% of take-home. If earning {currency.symbol}60K/month → max {currency.symbol}18K rent or EMI.</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Strategies to Optimize:</p>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• <strong>Roommates:</strong> {currency.symbol}20K apartment / 2 = {currency.symbol}10K each. Saves {currency.symbol}1.2L/year.</li>
                      <li>• <strong>Location tradeoff:</strong> Live 30 min farther, save {currency.symbol}8K/month = {currency.symbol}96K/year.</li>
                      <li>• <strong>Home loan:</strong> Longer tenure = lower EMI but higher interest. Balance liquidity vs cost.</li>
                      <li>• <strong>Negotiate rent:</strong> Annual lease renewal? Ask for 5-10% reduction or no increase.</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-red-900"><strong>Warning:</strong> House-poor is real. Fancy apartment leaves no money for investing, experiences, or emergencies. Choose sensibly.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transport">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold">Transportation: 10-15% of Income (Max)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-sm">The Car Trap:</p>
                    <p className="text-sm text-slate-700 mt-1">{currency.symbol}10L car on 5-year loan = {currency.symbol}20K EMI + {currency.symbol}5K fuel + {currency.symbol}3K maintenance + {currency.symbol}1.5K insurance = {currency.symbol}29.5K/month = {currency.symbol}3.5L/year!</p>
                    <p className="text-sm text-slate-700 mt-2">Alternative: Metro/bus ({currency.symbol}3K) + occasional cab ({currency.symbol}2K) = {currency.symbol}5K/month = saves {currency.symbol}2.9L/year!</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Smart Transportation Choices:</p>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• <strong>WFH/Hybrid:</strong> Live anywhere, minimal commute cost</li>
                      <li>• <strong>Two-wheeler:</strong> {currency.symbol}1L bike vs {currency.symbol}10L car = {currency.symbol}9L saved</li>
                      <li>• <strong>Used vehicle:</strong> 3-year old car loses 40% value, still runs perfectly</li>
                      <li>• <strong>Carpool:</strong> Share cab with colleague, split cost</li>
                      <li>• <strong>Weekend rental:</strong> Monthly trips? Zoomcar/Drivezy cheaper than ownership</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-900"><strong>When to buy car:</strong> After emergency fund + {currency.symbol}20L investments OR when income is 3x car cost. Not before.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="food">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-orange-600" />
                    <span className="font-semibold">Food: 15-20% of Income</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="font-semibold text-sm">The Food Delivery Trap:</p>
                    <div className="text-sm text-slate-700 mt-1 space-y-1">
                      <p>Lunch: {currency.symbol}200 × 25 days = {currency.symbol}5,000</p>
                      <p>Dinner: {currency.symbol}300 × 20 days = {currency.symbol}6,000</p>
                      <p>Coffee/snacks: {currency.symbol}150 × 25 days = {currency.symbol}3,750</p>
                      <p className="font-semibold text-orange-700 mt-2">Total: {currency.symbol}14,750/month on food alone!</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-sm text-green-900">The Home Cooking Alternative:</p>
                    <div className="text-sm text-slate-700 mt-1 space-y-1">
                      <p>Groceries: {currency.symbol}6,000/month</p>
                      <p>Occasional eating out (2x/week): {currency.symbol}3,000</p>
                      <p>Office lunch (dabba/canteen): {currency.symbol}2,500</p>
                      <p className="font-semibold text-green-700 mt-2">Total: {currency.symbol}11,500/month</p>
                      <p className="font-semibold text-green-800 mt-2">Savings: {currency.symbol}3,250/month = {currency.symbol}39,000/year!</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Balanced Food Strategy:</p>
                    <ul className="text-sm text-slate-700 space-y-1 ml-4">
                      <li>• Cook 5 days, order 2 days (weekends)</li>
                      <li>• Meal prep on Sunday for whole week</li>
                      <li>• Brew coffee at home (₹10 vs ₹200)</li>
                      <li>• Pack lunch 3-4 days/week</li>
                      <li>• Special restaurant meals 2x/month (truly enjoy them)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Budgeting Tools Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-teal-600" /> Budgeting Tools & Techniques
        </h3>
        
        <Card className="border-teal-200 shadow-lg">
          <CardHeader>
            <CardTitle>Choose Your Budgeting System</CardTitle>
            <CardDescription>Different methods for different personalities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">Zero-Based Budget</p>
                <p className="text-sm text-slate-700">Every rupee has a job. Income - expenses - savings = 0. Most disciplined but time-intensive.</p>
                <p className="text-xs text-teal-700 mt-2"><strong>Best for:</strong> Detail-oriented people, those serious about FIRE</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">Envelope System (Digital)</p>
                <p className="text-sm text-slate-700">Allocate money to categories at month start. When envelope is empty, stop spending in that category.</p>
                <p className="text-xs text-blue-700 mt-2"><strong>Best for:</strong> Overspenders, visual learners</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">Pay Yourself First</p>
                <p className="text-sm text-slate-700">Auto-debit savings/investments on salary day. Spend whatever is left guilt-free.</p>
                <p className="text-xs text-purple-700 mt-2"><strong>Best for:</strong> Naturally frugal people, beginners</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2">Anti-Budget (Spending Cap)</p>
                <p className="text-sm text-slate-700">Set max spending limit per month. Don't track categories, just stay under the number.</p>
                <p className="text-xs text-amber-700 mt-2"><strong>Best for:</strong> People who hate tracking, good with money intuitively</p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-4">
              <p className="font-semibold text-sm text-green-900 mb-2">The Best System?</p>
              <p className="text-sm text-slate-700">The one you'll actually follow. Try each for 2 months, see what sticks. Budgeting is personal - there's no universal "best" method.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Emergency vs Planned Expenses */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-red-600" /> Emergency vs Planned Expenses
        </h3>
        
        <Card className="border-red-200 shadow-lg">
          <CardHeader>
            <CardTitle>Learn the Difference (Most People Don't)</CardTitle>
            <CardDescription>Misclassifying kills financial progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2 text-red-900">True Emergencies:</p>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>• Medical emergency (accident, hospitalization)</li>
                  <li>• Job loss</li>
                  <li>• Urgent home repair (water leak, broken window)</li>
                  <li>• Vehicle breakdown (if needed for work)</li>
                  <li>• Family crisis requiring immediate funds</li>
                </ul>
                <p className="text-xs text-red-700 mt-2"><strong>Funded by:</strong> Emergency fund (liquid savings)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-sm mb-2 text-blue-900">Planned "Surprises":</p>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>• Car insurance renewal (you know it's coming)</li>
                  <li>• Weddings/birthdays (plan ahead)</li>
                  <li>• Annual subscriptions</li>
                  <li>• Festival shopping</li>
                  <li>• Vehicle servicing</li>
                </ul>
                <p className="text-xs text-blue-700 mt-2"><strong>Funded by:</strong> Sinking funds (separate savings for known future expenses)</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-sm text-yellow-900 mb-2">Create Sinking Funds:</p>
              <p className="text-sm text-slate-700 mb-2">Upcoming big expense? Save monthly in advance:</p>
              <div className="text-sm text-slate-700 space-y-1">
                <p>• <strong>Sister's wedding in 12 months:</strong> Need {currency.symbol}60K → Save {currency.symbol}5K/month</p>
                <p>• <strong>Laptop replacement in 18 months:</strong> Need {currency.symbol}90K → Save {currency.symbol}5K/month</p>
                <p>• <strong>Annual vacation:</strong> Want {currency.symbol}1L trip → Save {currency.symbol}8.3K/month</p>
              </div>
              <p className="text-sm text-slate-700 mt-3">When the expense arrives, you have cash ready. No emergency fund raid, no credit card debt, no stress.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ExpenseManagement;
