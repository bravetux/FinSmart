"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Shield, 
  Briefcase, 
  AlertTriangle, 
  CheckCircle2, 
  Users,
  Flame,
  TrendingUp,
  FileText,
  ShieldAlert,
  Package,
  Zap
} from 'lucide-react';

const BusinessInsurance = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Building2 className="w-4 h-4" />
            <span>Protecting Your Business</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Business Insurance: Safeguarding Your Enterprise
          </h2>
          <p className="text-indigo-50 text-lg max-w-2xl">
            Whether you're a freelancer, small business owner, or running a startup, business insurance protects your livelihood from unexpected events — property damage, legal liabilities, employee injuries, and business interruptions.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Why Business Insurance is Critical */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Why Business Insurance is Essential</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Unlike salaried individuals who have employer-provided safety nets, entrepreneurs carry 100% of the business risk. A single lawsuit, fire, or theft can wipe out years of hard work. Business insurance is your financial armor.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
            <Shield className="w-8 h-8 text-indigo-600" />
            <h4 className="font-bold">Protect Your Assets</h4>
            <p className="text-xs text-slate-500">Covers physical assets like office space, equipment, inventory, and furniture from fire, theft, natural disasters, and vandalism.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
            <Users className="w-8 h-8 text-emerald-600" />
            <h4 className="font-bold">Legal Liability Shield</h4>
            <p className="text-xs text-slate-500">Protects you from lawsuits related to third-party injuries, property damage, professional negligence, or product defects.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h4 className="font-bold">Business Continuity</h4>
            <p className="text-xs text-slate-500">Covers loss of income during forced closures due to natural calamities, ensuring cash flow to pay salaries, rent, and loans.</p>
          </Card>
        </div>
      </section>

      {/* Types of Business Insurance */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Types of Business Insurance for First-Time Entrepreneurs</h3>
        
        <div className="space-y-6">
          {/* Property Insurance */}
          <Card className="border-blue-200 bg-blue-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-xl text-blue-900">1. Property Insurance (Fire & Burglary)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Covers physical assets like office/shop premises, machinery, equipment, inventory, and furniture against fire, explosion, theft, natural calamities (earthquakes, floods), and riots.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 mb-2">What's Covered</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Building structure (if owned)</li>
                    <li>Office equipment (computers, AC, furniture)</li>
                    <li>Inventory and raw materials</li>
                    <li>Machinery and tools</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-blue-100">
                  <p className="text-xs font-bold text-blue-700 mb-2">Real-World Example</p>
                  <p className="text-xs text-slate-600">
                    A boutique store worth ₹15 Lakh catches fire due to short circuit. Property insurance reimburses the full value of damaged inventory and fixtures.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-blue-100">
                <p className="text-xs font-bold text-blue-900">💡 Recommended For: Retail stores, manufacturing units, restaurants, offices with physical inventory</p>
              </div>
            </CardContent>
          </Card>

          {/* Professional Indemnity */}
          <Card className="border-purple-200 bg-purple-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-xl text-purple-900">2. Professional Indemnity Insurance (E&O)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Also known as Errors & Omissions (E&O) Insurance, this protects professionals from lawsuits arising from negligence, mistakes, or failure to deliver services as promised.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <p className="text-xs font-bold text-purple-700 mb-2">Who Needs This</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Doctors, Lawyers, CAs, Architects</li>
                    <li>IT consultants and software developers</li>
                    <li>Financial advisors and insurance agents</li>
                    <li>Marketing agencies and consultants</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-purple-100">
                  <p className="text-xs font-bold text-purple-700 mb-2">Real-World Example</p>
                  <p className="text-xs text-slate-600">
                    A CA files incorrect tax returns for a client, leading to penalties. The client sues for ₹10 Lakh. Professional Indemnity covers legal costs and settlement.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-purple-100">
                <p className="text-xs font-bold text-purple-900">💡 Recommended For: Service-based businesses and professionals who provide advice or expertise</p>
              </div>
            </CardContent>
          </Card>

          {/* Public Liability */}
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-emerald-600" />
                <CardTitle className="text-xl text-emerald-900">3. Public Liability Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Covers legal liabilities arising from third-party injuries or property damage that occur on your business premises or due to your business operations.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-700 mb-2">What's Covered</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Customer injuries on your premises</li>
                    <li>Damage to customer property</li>
                    <li>Legal defense costs and settlements</li>
                    <li>Medical expenses for injured parties</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-700 mb-2">Real-World Example</p>
                  <p className="text-xs text-slate-600">
                    A customer slips on a wet floor in your restaurant and breaks a leg. They sue for ₹5 Lakh. Public Liability covers medical bills and legal costs.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-emerald-100">
                <p className="text-xs font-bold text-emerald-900">💡 Recommended For: Retail shops, restaurants, gyms, salons, event companies, and businesses with walk-in customers</p>
              </div>
            </CardContent>
          </Card>

          {/* Product Liability */}
          <Card className="border-orange-200 bg-orange-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-xl text-orange-900">4. Product Liability Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Protects manufacturers and sellers from lawsuits arising from defective products that cause injury or damage to customers.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-orange-100">
                  <p className="text-xs font-bold text-orange-700 mb-2">Who Needs This</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Food & beverage manufacturers</li>
                    <li>Electronics and appliance makers</li>
                    <li>Cosmetics and skincare brands</li>
                    <li>Toy manufacturers and importers</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-orange-100">
                  <p className="text-xs font-bold text-orange-700 mb-2">Real-World Example</p>
                  <p className="text-xs text-slate-600">
                    A batch of your packaged food causes food poisoning to 20 customers. They sue for ₹25 Lakh collectively. Product Liability covers legal costs and compensation.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-orange-100">
                <p className="text-xs font-bold text-orange-900">💡 Recommended For: D2C brands, manufacturers, importers, and e-commerce sellers</p>
              </div>
            </CardContent>
          </Card>

          {/* Business Interruption */}
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-red-600" />
                <CardTitle className="text-xl text-red-900">5. Business Interruption Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Covers loss of income when your business is forced to shut down temporarily due to fire, natural disasters, or other insured perils. It helps pay for ongoing expenses like rent, salaries, and loan EMIs.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-2">What's Covered</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Lost revenue/profits during closure</li>
                    <li>Fixed costs (rent, salaries, utilities)</li>
                    <li>Loan EMI payments</li>
                    <li>Temporary relocation costs</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-red-100">
                  <p className="text-xs font-bold text-red-700 mb-2">Real-World Example</p>
                  <p className="text-xs text-slate-600">
                    A fire forces your factory to shut down for 3 months. You lose ₹30 Lakh in revenue. Business Interruption Insurance compensates for lost income and fixed expenses.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-red-100">
                <p className="text-xs font-bold text-red-900">💡 Recommended For: Manufacturing units, retail stores, restaurants, and businesses with high fixed costs</p>
              </div>
            </CardContent>
          </Card>

          {/* Cyber Insurance */}
          <Card className="border-slate-200 bg-slate-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-slate-600" />
                <CardTitle className="text-xl text-slate-900">6. Cyber Insurance (Emerging Need)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Protects businesses from losses due to cyberattacks, data breaches, ransomware, and business email compromise (BEC). Increasingly critical for digital businesses.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-700 mb-2">What's Covered</p>
                  <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                    <li>Data breach notification costs</li>
                    <li>Ransomware payments and recovery</li>
                    <li>Business interruption due to cyberattacks</li>
                    <li>Legal costs from customer lawsuits</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-700 mb-2">Real-World Example</p>
                  <p className="text-xs text-slate-600">
                    Hackers breach your e-commerce platform and steal customer data. You face ₹20 Lakh in recovery costs and legal fees. Cyber Insurance covers the expenses.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs font-bold text-slate-900">💡 Recommended For: E-commerce, SaaS, fintech, digital agencies, and businesses handling customer data</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Employee-Related Insurance */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Employee-Related Insurance (If You Have Staff)</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-lg">Group Health Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed">
                Provides health coverage for your employees and their families. Helps attract and retain talent while keeping them financially protected.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg border">
                <p className="text-xs font-bold text-slate-700 mb-1">Tax Benefit</p>
                <p className="text-xs text-slate-600">Premiums paid are 100% tax-deductible as business expenses under Section 37(1) of the Income Tax Act.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-600" />
                <CardTitle className="text-lg">Workmen Compensation Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed">
                Mandatory if you have employees. Covers medical expenses and compensation for employees who get injured or disabled during work.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg border">
                <p className="text-xs font-bold text-slate-700 mb-1">Legal Requirement</p>
                <p className="text-xs text-slate-600">Required under the Workmen's Compensation Act, 1923. Non-compliance can lead to penalties and legal liabilities.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Choosing the Right Coverage */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-indigo-700">How to Choose the Right Business Insurance</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-5 bg-white shadow-sm border-l-4 border-l-indigo-600">
            <div className="space-y-2">
              <h4 className="font-bold text-lg">1. Assess Your Risks</h4>
              <p className="text-sm text-slate-600">
                Identify what can go wrong: physical assets at risk, liability exposure, business continuity threats, and employee-related risks.
              </p>
            </div>
          </Card>

          <Card className="p-5 bg-white shadow-sm border-l-4 border-l-emerald-600">
            <div className="space-y-2">
              <h4 className="font-bold text-lg">2. Start with Basics</h4>
              <p className="text-sm text-slate-600">
                Begin with Property Insurance and Public Liability. Add Professional Indemnity if you're a service provider, and Product Liability if you sell physical goods.
              </p>
            </div>
          </Card>

          <Card className="p-5 bg-white shadow-sm border-l-4 border-l-orange-600">
            <div className="space-y-2">
              <h4 className="font-bold text-lg">3. Bundle for Savings</h4>
              <p className="text-sm text-slate-600">
                Many insurers offer "Business Package Policies" that combine Property, Liability, and Business Interruption at discounted rates — often 20-30% cheaper than buying separately.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-red-700 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" /> Common Mistakes First-Time Business Owners Make
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardContent className="p-5 space-y-3">
              <h4 className="font-bold text-red-900">Underinsuring Assets</h4>
              <p className="text-xs text-slate-600">
                Declaring a lower asset value to save on premiums backfires during claims. Always insure at full replacement value, not depreciated value.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardContent className="p-5 space-y-3">
              <h4 className="font-bold text-red-900">Ignoring Liability Coverage</h4>
              <p className="text-xs text-slate-600">
                A single lawsuit can bankrupt your business. Public and Professional Liability insurance is non-negotiable if you interact with customers or clients.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardContent className="p-5 space-y-3">
              <h4 className="font-bold text-red-900">Not Reading Policy Exclusions</h4>
              <p className="text-xs text-slate-600">
                Policies exclude certain perils (e.g., war, nuclear events, intentional damage). Read the fine print to know what's NOT covered.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Estimated Costs */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Estimated Annual Premiums (India)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="text-left bg-slate-100">
                <th className="p-4 font-medium">Insurance Type</th>
                <th className="p-4 font-medium">Coverage Amount</th>
                <th className="p-4 font-medium">Estimated Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Property Insurance</td>
                <td className="p-4">₹10 Lakh</td>
                <td className="p-4 font-semibold text-emerald-700">₹5,000–₹15,000</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-4">Professional Indemnity</td>
                <td className="p-4">₹25 Lakh</td>
                <td className="p-4 font-semibold text-emerald-700">₹8,000–₹25,000</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Public Liability</td>
                <td className="p-4">₹10 Lakh</td>
                <td className="p-4 font-semibold text-emerald-700">₹3,000–₹10,000</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-4">Product Liability</td>
                <td className="p-4">₹50 Lakh</td>
                <td className="p-4 font-semibold text-emerald-700">₹15,000–₹40,000</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Business Interruption</td>
                <td className="p-4">6 months coverage</td>
                <td className="p-4 font-semibold text-emerald-700">₹10,000–₹30,000</td>
              </tr>
              <tr className="border-t bg-slate-50">
                <td className="p-4">Cyber Insurance</td>
                <td className="p-4">₹25 Lakh</td>
                <td className="p-4 font-semibold text-emerald-700">₹20,000–₹50,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 italic">*Premiums vary based on business type, turnover, location, and claim history</p>
      </section>

      {/* Golden Rules */}
      <div className="p-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold">Golden Rules for Business Insurance</h4>
        <ul className="space-y-2 text-indigo-50">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Don't wait for an incident</strong> — buy insurance when you start your business, not after a crisis.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Prioritize liability coverage</strong> — lawsuits are more devastating than property damage.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Bundle policies</strong> for cost savings — Business Package Policies offer 20-30% discounts.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Review annually</strong> — as your business grows, your insurance needs evolve. Update coverage limits yearly.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Work with a commercial insurance broker</strong> — they understand business-specific risks better than retail agents.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessInsurance;
