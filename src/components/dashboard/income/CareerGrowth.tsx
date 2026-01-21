"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  Target, 
  Users, 
  Code, 
  Award, 
  LineChart,
  Rocket,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Building2,
  Zap,
  Lightbulb
} from 'lucide-react';
import { useCurrency } from "@/context/CurrencyContext";

const CareerGrowth = () => {
  const { currency } = useCurrency();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-center shadow-xl relative overflow-hidden">
        <div className="z-10 bg-white/20 p-4 rounded-3xl backdrop-blur-sm">
          <Rocket className="w-12 h-12 text-purple-100" />
        </div>
        <div className="z-10 space-y-2">
          <h2 className="text-3xl font-bold">Career Growth & Income Acceleration</h2>
          <p className="text-lg text-purple-100 max-w-2xl">
            Your career is your most valuable asset. Strategic career moves can 2-3x your income in a few years.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Career Paths Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-600" /> Career Progression Paths
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                Individual Contributor (IC) Path
              </CardTitle>
              <CardDescription>Deep expertise, technical leadership, high impact</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">Entry</Badge>
                  <div>
                    <p className="font-semibold">Junior/Associate ({currency.symbol}3-6 LPA)</p>
                    <p className="text-sm text-slate-600">Learn fundamentals, execution under guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">Mid</Badge>
                  <div>
                    <p className="font-semibold">Senior ({currency.symbol}8-15 LPA)</p>
                    <p className="text-sm text-slate-600">Own features, mentor juniors, technical decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">Senior</Badge>
                  <div>
                    <p className="font-semibold">Staff/Principal ({currency.symbol}20-40 LPA)</p>
                    <p className="text-sm text-slate-600">Architecture decisions, org-wide impact</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">Top</Badge>
                  <div>
                    <p className="font-semibold">Distinguished/Fellow ({currency.symbol}50L+)</p>
                    <p className="text-sm text-slate-600">Industry expert, strategic technical vision</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-slate-700"><strong>Pros:</strong> No people management, deep technical work, flexibility, high compensation at senior levels</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-br from-orange-50 to-rose-50">
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                Management Path
              </CardTitle>
              <CardDescription>Team building, strategy, organizational impact</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">Entry</Badge>
                  <div>
                    <p className="font-semibold">Team Lead ({currency.symbol}10-18 LPA)</p>
                    <p className="text-sm text-slate-600">Lead small team, execution + people management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">Mid</Badge>
                  <div>
                    <p className="font-semibold">Manager ({currency.symbol}18-30 LPA)</p>
                    <p className="text-sm text-slate-600">Manage multiple teams, planning & strategy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">Senior</Badge>
                  <div>
                    <p className="font-semibold">Senior Manager/Director ({currency.symbol}35-60 LPA)</p>
                    <p className="text-sm text-slate-600">Department ownership, cross-functional leadership</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">Top</Badge>
                  <div>
                    <p className="font-semibold">VP/CXO ({currency.symbol}60L-2Cr+)</p>
                    <p className="text-sm text-slate-600">Business unit ownership, company strategy</p>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-slate-700"><strong>Pros:</strong> Larger org impact, leadership skills, equity opportunities, broader business exposure</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Salary Negotiation Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-green-600" /> Salary Negotiation Strategies
        </h3>
        
        <Card className="border-green-200 shadow-lg">
          <CardHeader>
            <CardTitle>Master the Art of Negotiation</CardTitle>
            <CardDescription>Most people leave 20-30% on the table by not negotiating effectively</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="research">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <LineChart className="w-4 h-4" />
                    Do Your Research
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p className="text-slate-700">Know your market value before any conversation:</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 ml-4">
                    <li>Check Glassdoor, AmbitionBox, Levels.fyi for salary data</li>
                    <li>Talk to peers in similar roles (anonymously if needed)</li>
                    <li>Consider location, company size, and industry standards</li>
                    <li>Factor in your experience, skills, and achievements</li>
                  </ul>
                  <div className="bg-green-50 p-3 rounded-lg mt-3">
                    <p className="text-sm font-semibold text-green-900">Example: Senior Software Engineer in Bangalore</p>
                    <p className="text-sm text-slate-700 mt-1">Early-stage startup: {currency.symbol}15-25 LPA | Mid-size: {currency.symbol}20-35 LPA | FAANG: {currency.symbol}40-70 LPA</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="timing">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Timing is Everything
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <p className="text-slate-700">Best times to negotiate:</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                      <div>
                        <p className="font-semibold text-sm">New Job Offer</p>
                        <p className="text-sm text-slate-600">Highest leverage - they want you, haven't committed yet</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                      <div>
                        <p className="font-semibold text-sm">Annual Review/Promotion</p>
                        <p className="text-sm text-slate-600">Expected time, backed by performance data</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                      <div>
                        <p className="font-semibold text-sm">Role Change/Increased Responsibility</p>
                        <p className="text-sm text-slate-600">Taking on more = deserving more compensation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                      <div>
                        <p className="font-semibold text-sm">Competing Offer</p>
                        <p className="text-sm text-slate-600">Leverage (use carefully, may backfire if bluffing)</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tactics">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Negotiation Tactics
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <p className="font-semibold text-sm">1. Never give first number</p>
                      <p className="text-sm text-slate-600">Let them anchor. If forced: "I'm looking for market rate for my experience level"</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <p className="font-semibold text-sm">2. Ask for more than you want</p>
                      <p className="text-sm text-slate-600">If you want {currency.symbol}20L, ask for {currency.symbol}23-25L. Leave negotiation room.</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <p className="font-semibold text-sm">3. Focus on total compensation</p>
                      <p className="text-sm text-slate-600">Not just base salary: signing bonus, stocks/ESOPs, bonuses, benefits</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <p className="font-semibold text-sm">4. Use data, not emotions</p>
                      <p className="text-sm text-slate-600">"Based on market data for my role and experience..." not "I need more money"</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 py-2">
                      <p className="font-semibold text-sm">5. Be willing to walk away</p>
                      <p className="text-sm text-slate-600">Your strongest leverage. If the offer doesn't meet your minimum, politely decline.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* High-Value Skills Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-blue-600" /> Skills That Increase Earning Potential
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardTitle className="text-lg">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Cloud (AWS/Azure/GCP):</strong> +30-50% premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>AI/ML/Data Science:</strong> High demand, {currency.symbol}15-40 LPA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Cybersecurity:</strong> Growing field, strong pay</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>DevOps/SRE:</strong> Critical role, good compensation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Blockchain/Web3:</strong> Niche, high potential</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-purple-50 to-pink-50">
              <CardTitle className="text-lg">Business Skills</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Product Management:</strong> {currency.symbol}20-50 LPA range</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Sales (B2B):</strong> Uncapped earning potential</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Data Analytics:</strong> Decision-making critical</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Project Management (PMP):</strong> Universal demand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Digital Marketing:</strong> Revenue-driving skill</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-br from-orange-50 to-amber-50">
              <CardTitle className="text-lg">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Communication:</strong> Essential for leadership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Negotiation:</strong> Directly impacts your pay</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Leadership:</strong> Unlock management roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Problem Solving:</strong> Core value driver</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                  <span className="text-sm"><strong>Emotional Intelligence:</strong> Team dynamics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job Switching vs Staying */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-indigo-600" /> Job Switching vs Staying: The Math
        </h3>
        
        <Card className="border-indigo-200 shadow-lg">
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-3 font-semibold">Scenario</th>
                    <th className="text-left p-3 font-semibold">Salary Growth</th>
                    <th className="text-left p-3 font-semibold">Pros</th>
                    <th className="text-left p-3 font-semibold">Cons</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-semibold">Staying (Internal Growth)</td>
                    <td className="p-3">7-15% annual</td>
                    <td className="p-3">
                      <ul className="text-xs space-y-1">
                        <li>• Stability & known culture</li>
                        <li>• Deep relationships</li>
                        <li>• Less risk</li>
                      </ul>
                    </td>
                    <td className="p-3">
                      <ul className="text-xs space-y-1">
                        <li>• Slower growth</li>
                        <li>• May hit ceiling</li>
                        <li>• Limited new learning</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Switching Jobs</td>
                    <td className="p-3">20-50% jump</td>
                    <td className="p-3">
                      <ul className="text-xs space-y-1">
                        <li>• Significant pay jump</li>
                        <li>• New learning & exposure</li>
                        <li>• Fresh opportunities</li>
                      </ul>
                    </td>
                    <td className="p-3">
                      <ul className="text-xs space-y-1">
                        <li>• Start from scratch</li>
                        <li>• Adaptation period</li>
                        <li>• Risk of bad culture fit</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 bg-indigo-50 p-4 rounded-lg space-y-3">
              <p className="font-semibold text-slate-900">The 2-Year Rule:</p>
              <p className="text-sm text-slate-700">Stay at least 2 years to show commitment, gain depth, and have impact. Less than 2 years looks like job-hopping. After 2 years, evaluate: Am I growing? Is compensation competitive? Do I see a path forward?</p>
              <p className="text-sm text-slate-700 mt-2"><strong>Red Flag:</strong> If switching doesn't give 25%+ jump or clear growth opportunity, reconsider.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Industry Comparison */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-teal-600" /> Industry & Sector Comparison
        </h3>
        
        <Card className="border-teal-200 shadow-lg">
          <CardHeader>
            <CardTitle>Where Does the Money Flow? (India)</CardTitle>
            <CardDescription>Average salary ranges for mid-level professionals (3-6 years experience)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-semibold">FAANG / Top Tech (Google, Microsoft, Amazon)</p>
                  <p className="text-xs text-slate-600">Software Engineering</p>
                </div>
                <Badge className="bg-green-600">{currency.symbol}35-70 LPA</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-semibold">Financial Services (Investment Banking, PE)</p>
                  <p className="text-xs text-slate-600">Analyst/Associate</p>
                </div>
                <Badge className="bg-blue-600">{currency.symbol}25-50 LPA</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div>
                  <p className="font-semibold">Management Consulting (MBB, Big 4)</p>
                  <p className="text-xs text-slate-600">Consultant</p>
                </div>
                <Badge className="bg-purple-600">{currency.symbol}20-40 LPA</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div>
                  <p className="font-semibold">Product Companies (Unicorns, Series B+)</p>
                  <p className="text-xs text-slate-600">Product/Engineering</p>
                </div>
                <Badge className="bg-orange-600">{currency.symbol}18-35 LPA</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-semibold">Service Companies (TCS, Infosys, Wipro)</p>
                  <p className="text-xs text-slate-600">Software Development</p>
                </div>
                <Badge className="bg-slate-600">{currency.symbol}8-18 LPA</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="font-semibold">Traditional Sectors (Manufacturing, Retail)</p>
                  <p className="text-xs text-slate-600">Management/Operations</p>
                </div>
                <Badge className="bg-yellow-600">{currency.symbol}6-15 LPA</Badge>
              </div>
            </div>
            <div className="mt-4 p-4 bg-teal-50 rounded-lg">
              <p className="text-sm text-slate-700"><AlertCircle className="w-4 h-4 inline mr-1" /> <strong>Note:</strong> These are averages. Your actual salary depends on company, role, location, skills, and negotiation. Top performers earn significantly more.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Certifications Worth It */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-6 h-6 text-amber-600" /> Certifications Worth Investing In
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-200 shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                High ROI Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="space-y-2">
                <p className="font-semibold text-sm">AWS Certified Solutions Architect</p>
                <p className="text-xs text-slate-600">Cost: ~{currency.symbol}15,000 | Value: +20-30% salary | Demand: Very High</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm">PMP (Project Management Professional)</p>
                <p className="text-xs text-slate-600">Cost: ~{currency.symbol}30,000 | Value: Global recognition | Demand: High</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm">CFA (Chartered Financial Analyst)</p>
                <p className="text-xs text-slate-600">Cost: ~{currency.symbol}2.5L total | Value: Finance gold standard | Demand: High</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Google Cloud Professional Architect</p>
                <p className="text-xs text-slate-600">Cost: ~{currency.symbol}20,000 | Value: Growing demand | Demand: High</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Low ROI / Overrated
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="space-y-2">
                <p className="font-semibold text-sm">Most "online certificates"</p>
                <p className="text-xs text-slate-600">Coursera/Udemy completion certificates have limited value. Skills matter more than certificate.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Language courses (without fluency)</p>
                <p className="text-xs text-slate-600">Certificate doesn't prove proficiency. Actual ability to communicate matters.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Generic MBA from Tier-3 colleges</p>
                <p className="text-xs text-slate-600">High cost ({currency.symbol}5-15L), low ROI. Better to gain work experience or target top schools.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Most "Certified" designations</p>
                <p className="text-xs text-slate-600">Unless industry-recognized (like CPA, CA), many certifications are marketing fluff.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-slate-900 mb-2">The Real Test: Portfolio &gt; Certificate</p>
                <p className="text-sm text-slate-700">In most fields (especially tech), what you can BUILD and SHOW matters more than what certificate you have. Focus on projects, GitHub, portfolio, case studies, and real-world impact over collecting certificates.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default CareerGrowth;
