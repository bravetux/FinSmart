"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Heart, 
  Car, 
  Building2, 
  Users,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  Target,
  Clock,
  DollarSign
} from 'lucide-react';

const InsuranceOverview = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Foundation of Financial Security</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Insurance 101: Your First Line of Defense
          </h2>
          <p className="text-blue-50 text-lg max-w-2xl">
            Before investing in stocks, mutual funds, or real estate, you must secure your foundation. Insurance isn't just a product — it's the safety net that prevents financial catastrophe from destroying everything you build.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 -ml-12 -mb-12 rounded-full blur-3xl" />
      </div>

      {/* Why Insurance Comes First */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Why Insurance Must Come BEFORE Investing</h3>
        <p className="text-lg text-slate-700 leading-relaxed">
          Many first-time earners make a critical mistake: they rush to invest in stocks or mutual funds without adequate insurance. Here's the harsh reality — <strong>one medical emergency, accident, or lawsuit can wipe out years of investment gains in a single day.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <CardTitle className="text-xl text-red-900">Without Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-sm font-bold text-red-700 mb-2">Scenario: Medical Emergency</p>
                  <p className="text-xs text-slate-600">
                    You've diligently invested ₹10 Lakh in mutual funds over 5 years. A heart surgery costs ₹8 Lakh. You're forced to liquidate your investments at a loss, pay capital gains tax, and drain your savings.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-sm font-bold text-red-700 mb-2">Result</p>
                  <p className="text-xs text-slate-600">
                    Your wealth journey resets to zero. You lose not just money, but also the power of compounding and years of financial progress.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <CardTitle className="text-xl text-emerald-900">With Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 bg-white rounded-lg border border-emerald-100">
                  <p className="text-sm font-bold text-emerald-700 mb-2">Scenario: Medical Emergency</p>
                  <p className="text-xs text-slate-600">
                    Same heart surgery costs ₹8 Lakh. Your health insurance (premium: ₹15,000/year) covers the entire bill. Your ₹10 Lakh investment portfolio remains untouched and continues compounding.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-emerald-100">
                  <p className="text-sm font-bold text-emerald-700 mb-2">Result</p>
                  <p className="text-xs text-slate-600">
                    You recover without financial stress. Your wealth-building journey continues uninterrupted. Insurance just paid for itself 50x over.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The 4 Pillars of Insurance */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">The 4 Pillars of Personal Insurance</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Think of insurance as a 4-legged table. Remove even one leg, and your financial security becomes unstable. Here's what every first-time buyer must have:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Health Insurance */}
          <Card className="border-red-200 bg-gradient-to-br from-red-50 to-red-100/50 shadow-lg hover:shadow-xl transition-shadow group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-red-900 mb-2">Health Insurance</h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  Protects your savings from medical emergencies, hospitalizations, and surgeries that can cost lakhs.
                </p>
                <div className="pt-3 border-t border-red-200">
                  <p className="text-xs font-semibold text-red-700">Priority: #1 Critical</p>
                  <p className="text-[10px] text-slate-500 mt-1">Start with ₹5-10 Lakh cover</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Term Insurance */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-lg hover:shadow-xl transition-shadow group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">Term Insurance</h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  Replaces your income if you pass away, ensuring your family/dependents don't face financial hardship.
                </p>
                <div className="pt-3 border-t border-blue-200">
                  <p className="text-xs font-semibold text-blue-700">Priority: #1 Critical</p>
                  <p className="text-[10px] text-slate-500 mt-1">Cover = 10-25x annual income</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Insurance */}
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 shadow-lg hover:shadow-xl transition-shadow group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-orange-900 mb-2">Vehicle Insurance</h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  Legally mandatory. Protects you from repair costs, theft, and third-party liabilities that can run into lakhs.
                </p>
                <div className="pt-3 border-t border-orange-200">
                  <p className="text-xs font-semibold text-orange-700">Priority: Mandatory</p>
                  <p className="text-[10px] text-slate-500 mt-1">Comprehensive for new vehicles</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Insurance */}
          <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100/50 shadow-lg hover:shadow-xl transition-shadow group">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-indigo-900 mb-2">Business Insurance</h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  For entrepreneurs: Covers property damage, liability claims, and business interruption — risks salaried people don't face.
                </p>
                <div className="pt-3 border-t border-indigo-200">
                  <p className="text-xs font-semibold text-indigo-700">Priority: If Self-Employed</p>
                  <p className="text-[10px] text-slate-500 mt-1">Start with Public Liability</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insurance Priority Framework */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          Insurance Priority Framework for First-Time Buyers
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          If you're just starting out and can't afford all types of insurance at once, follow this priority sequence:
        </p>

        <div className="space-y-4">
          {/* Priority 1 */}
          <Card className="border-l-4 border-l-red-600 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-bold text-red-900">Health Insurance (Immediate)</h4>
                  <p className="text-sm text-slate-700">
                    Non-negotiable. Medical costs are unpredictable and can bankrupt you. Start with ₹5 Lakh minimum, ₹10 Lakh ideal. Buy before age 30 to lock in low premiums and avoid pre-existing disease waiting periods.
                  </p>
                  <div className="pt-2">
                    <p className="text-xs text-red-700 font-semibold">✓ Even if you're young and healthy, buy NOW</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Priority 2 */}
          <Card className="border-l-4 border-l-blue-600 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-bold text-blue-900">Term Insurance (If You Have Dependents)</h4>
                  <p className="text-sm text-slate-700">
                    Critical if anyone depends on your income — parents, spouse, children, or business partners. Buy ₹1 Crore cover for ~₹10,000/year at age 25-30. The younger you buy, the cheaper it is for life.
                  </p>
                  <div className="pt-2">
                    <p className="text-xs text-blue-700 font-semibold">✓ Skip only if you're single with zero dependents and no loans</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Priority 3 */}
          <Card className="border-l-4 border-l-orange-600 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-bold text-orange-900">Vehicle Insurance (If You Own a Vehicle)</h4>
                  <p className="text-sm text-slate-700">
                    Third-party is legally mandatory. But if your vehicle is less than 5 years old, comprehensive insurance with Zero Depreciation is a must. Accidents and repairs are expensive — don't risk it.
                  </p>
                  <div className="pt-2">
                    <p className="text-xs text-orange-700 font-semibold">✓ Mandatory by law — driving without insurance = fines/jail</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Priority 4 */}
          <Card className="border-l-4 border-l-indigo-600 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-bold text-indigo-900">Business Insurance (If Self-Employed)</h4>
                  <p className="text-sm text-slate-700">
                    Entrepreneurs don't have corporate safety nets. Start with Public Liability and Property Insurance. Add Professional Indemnity if you provide services, Product Liability if you sell goods.
                  </p>
                  <div className="pt-2">
                    <p className="text-xs text-indigo-700 font-semibold">✓ One lawsuit can shut down your business — don't skip this</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Myths Debunked */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          Common Myths First-Time Buyers Believe
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 bg-slate-50">
              <CardTitle className="text-lg text-red-700">❌ Myth: "I'm young and healthy, I don't need insurance"</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Reality:</strong> Young age is the BEST time to buy insurance. Premiums are lowest, no pre-existing diseases, and you lock in rates for life. Waiting until you're sick or older means sky-high premiums or rejection.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 bg-slate-50">
              <CardTitle className="text-lg text-red-700">❌ Myth: "My company health insurance is enough"</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Reality:</strong> Corporate health insurance vanishes when you quit, get laid off, or retire. What if you fall sick between jobs? Always have a personal health policy as backup.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 bg-slate-50">
              <CardTitle className="text-lg text-red-700">❌ Myth: "Insurance is an investment"</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Reality:</strong> Insurance is PROTECTION, not an investment. Avoid ULIPs and money-back policies that mix insurance with investment — they're expensive and give poor returns. Buy pure term insurance and invest separately.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3 bg-slate-50">
              <CardTitle className="text-lg text-red-700">❌ Myth: "I'll buy insurance later when I have more money"</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Reality:</strong> "Later" often means when you already have health issues, making insurance expensive or unavailable. A ₹10,000/year term policy bought at 25 vs 35 can save you lakhs over your lifetime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Reality Check */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-emerald-600" />
          The Real Cost: Less Than You Think
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Most first-time buyers overestimate insurance costs. Here's the reality for a 25-30 year old:
        </p>

        <Card className="border-emerald-200 bg-emerald-50/50 shadow-lg">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b-2 border-emerald-200">
                    <th className="p-3 font-medium">Insurance Type</th>
                    <th className="p-3 font-medium">Coverage</th>
                    <th className="p-3 font-medium">Annual Premium</th>
                    <th className="p-3 font-medium">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-emerald-100">
                    <td className="p-3">Health Insurance</td>
                    <td className="p-3">₹10 Lakh</td>
                    <td className="p-3 font-semibold text-emerald-700">₹8,000–₹15,000</td>
                    <td className="p-3 text-slate-600">₹667–₹1,250</td>
                  </tr>
                  <tr className="border-b border-emerald-100 bg-white">
                    <td className="p-3">Term Insurance</td>
                    <td className="p-3">₹1 Crore</td>
                    <td className="p-3 font-semibold text-emerald-700">₹10,000–₹12,000</td>
                    <td className="p-3 text-slate-600">₹833–₹1,000</td>
                  </tr>
                  <tr className="border-b border-emerald-100">
                    <td className="p-3">Vehicle (Comprehensive)</td>
                    <td className="p-3">₹8 Lakh car</td>
                    <td className="p-3 font-semibold text-emerald-700">₹12,000–₹18,000</td>
                    <td className="p-3 text-slate-600">₹1,000–₹1,500</td>
                  </tr>
                  <tr className="bg-emerald-100 font-bold">
                    <td className="p-3" colSpan={2}>Total Monthly Cost</td>
                    <td className="p-3 text-emerald-700">₹30,000–₹45,000/year</td>
                    <td className="p-3 text-emerald-700">₹2,500–₹3,750/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg border border-emerald-200">
              <p className="text-sm font-bold text-emerald-700 mb-1">Reality Check</p>
              <p className="text-xs text-slate-600">
                For the price of 2-3 restaurant outings per month, you get complete financial protection. That's less than most people spend on streaming subscriptions. Can you afford NOT to have insurance?
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Action Plan */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-blue-600" />
          Your 30-Day Insurance Action Plan
        </h3>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-5 bg-white shadow-sm border-t-4 border-t-blue-600">
            <div className="space-y-3">
              <div className="text-2xl font-bold text-blue-600">Week 1</div>
              <h4 className="font-bold text-sm">Research & Compare</h4>
              <ul className="text-xs text-slate-600 space-y-1 list-disc ml-4">
                <li>Compare 3-4 health insurance policies</li>
                <li>Check claim settlement ratios</li>
                <li>Read policy exclusions</li>
              </ul>
            </div>
          </Card>

          <Card className="p-5 bg-white shadow-sm border-t-4 border-t-emerald-600">
            <div className="space-y-3">
              <div className="text-2xl font-bold text-emerald-600">Week 2</div>
              <h4 className="font-bold text-sm">Buy Health Insurance</h4>
              <ul className="text-xs text-slate-600 space-y-1 list-disc ml-4">
                <li>Choose the best policy</li>
                <li>Complete medical questionnaire honestly</li>
                <li>Pay premium and get policy document</li>
              </ul>
            </div>
          </Card>

          <Card className="p-5 bg-white shadow-sm border-t-4 border-t-orange-600">
            <div className="space-y-3">
              <div className="text-2xl font-bold text-orange-600">Week 3</div>
              <h4 className="font-bold text-sm">Add Term Insurance</h4>
              <ul className="text-xs text-slate-600 space-y-1 list-disc ml-4">
                <li>Calculate coverage needed (10-25x income)</li>
                <li>Compare term plans</li>
                <li>Buy online for lowest premiums</li>
              </ul>
            </div>
          </Card>

          <Card className="p-5 bg-white shadow-sm border-t-4 border-t-purple-600">
            <div className="space-y-3">
              <div className="text-2xl font-bold text-purple-600">Week 4</div>
              <h4 className="font-bold text-sm">Complete the Protection</h4>
              <ul className="text-xs text-slate-600 space-y-1 list-disc ml-4">
                <li>Renew/upgrade vehicle insurance</li>
                <li>Add business insurance (if applicable)</li>
                <li>Set calendar reminders for renewals</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Final Golden Rule */}
      <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <Shield className="w-8 h-8" />
          The Ultimate Rule for First-Time Buyers
        </h4>
        <p className="text-blue-50 text-lg leading-relaxed">
          <strong>"Insure what you cannot afford to lose."</strong>
        </p>
        <p className="text-blue-100 text-sm leading-relaxed max-w-3xl">
          Can you afford a ₹10 Lakh medical bill out of pocket? Can your family survive financially if your income stops tomorrow? Can you rebuild your business after a fire? If the answer is NO, then you need insurance NOW — not someday, not when you're older, not after your next salary hike. The best time to buy insurance was 5 years ago. The second-best time is today.
        </p>
      </div>
    </div>
  );
};

export default InsuranceOverview;
