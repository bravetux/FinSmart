"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Users, FileCheck, AlertTriangle } from 'lucide-react';

const RiskMitigation = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Protect Your Investment</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Risk Mitigation Strategies
          </h2>
          <p className="text-blue-50 text-lg max-w-2xl">
            Comprehensive strategies to protect your real estate investment
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-blue-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Diversification in Real Estate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-3">Why Diversify Real Estate Holdings?</h3>
              <p className="text-sm text-slate-700 mb-4">
                Don't put all your wealth in one property. Diversification reduces concentration risk and provides multiple income streams.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-100 border-b border-blue-300">
                      <th className="text-left p-3 text-blue-900 font-semibold">Strategy</th>
                      <th className="text-left p-3 text-blue-900 font-semibold">How It Works</th>
                      <th className="text-left p-3 text-blue-900 font-semibold">Risk Reduction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-blue-50">
                      <td className="p-3 font-medium">Geographic Diversification</td>
                      <td className="p-3 text-slate-700">Own properties in 2-3 different cities or areas within city</td>
                      <td className="p-3 text-green-700">Protects from local market downturns, city-specific issues</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3 font-medium">Asset Type Diversification</td>
                      <td className="p-3 text-slate-700">Mix residential + commercial, or apartment + plot</td>
                      <td className="p-3 text-green-700">Different asset classes perform differently in cycles</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3 font-medium">Purpose Diversification</td>
                      <td className="p-3 text-slate-700">One for self-use + one for rental income</td>
                      <td className="p-3 text-green-700">Rental income cushions if one property vacant</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3 font-medium">Segment Diversification</td>
                      <td className="p-3 text-slate-700">Budget segment (₹30-50L) + Premium (₹1Cr+)</td>
                      <td className="p-3 text-green-700">Budget properties have higher liquidity</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3 font-medium">Indirect RE Investment</td>
                      <td className="p-3 text-slate-700">REITs + physical property ownership</td>
                      <td className="p-3 text-green-700">REIT provides liquidity, physical gives control</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Example Diversified Portfolio</h4>
              <div className="text-sm text-slate-700 space-y-2">
                <p><strong>Total Investment: ₹2 Crore</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• ₹80L - 2 BHK Mumbai (Self-use) - 40%</li>
                  <li>• ₹60L - Commercial office Pune (Rental) - 30%</li>
                  <li>• ₹40L - Plot in Bangalore (Long-term) - 20%</li>
                  <li>• ₹20L - REIT units (Liquidity) - 10%</li>
                </ul>
                <p className="text-blue-900 font-medium mt-3">
                  Result: Balanced exposure, multiple income sources, mix of liquidity levels
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Shield className="w-6 h-6 text-green-600" />
            Insurance Coverage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-3">Types of Property Insurance</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-900 mb-2">1. Home Structure Insurance (Fire & Allied Perils)</h4>
                  <div className="text-sm text-slate-700 space-y-1">
                    <p><strong>Covers:</strong> Fire, lightning, explosion, earthquake, flood, storm, riots, terrorism</p>
                    <p><strong>Sum Insured:</strong> Equal to property reconstruction cost (not market value)</p>
                    <p><strong>Cost:</strong> ₹10,000-15,000/year for ₹50L property</p>
                    <p className="text-green-800 font-medium mt-2">✓ Mandatory for home loan properties</p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-900 mb-2">2. Contents Insurance (Household Items)</h4>
                  <div className="text-sm text-slate-700 space-y-1">
                    <p><strong>Covers:</strong> Furniture, electronics, jewelry, personal belongings</p>
                    <p><strong>Sum Insured:</strong> Based on total value of contents</p>
                    <p><strong>Cost:</strong> ₹5,000-8,000/year for ₹10L contents</p>
                    <p className="text-green-800 font-medium mt-2">✓ Separate from structure insurance</p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-900 mb-2">3. Tenant/Public Liability Insurance</h4>
                  <div className="text-sm text-slate-700 space-y-1">
                    <p><strong>Covers:</strong> Injury to third party on your property, legal liabilities</p>
                    <p><strong>Sum Insured:</strong> ₹10-50 lakh coverage</p>
                    <p><strong>Cost:</strong> ₹2,000-4,000/year</p>
                    <p className="text-green-800 font-medium mt-2">✓ Important if renting out property</p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-900 mb-2">4. Title Insurance</h4>
                  <div className="text-sm text-slate-700 space-y-1">
                    <p><strong>Covers:</strong> Legal costs if ownership challenged, title defects discovered</p>
                    <p><strong>Sum Insured:</strong> Property value</p>
                    <p><strong>Cost:</strong> One-time premium of 0.5-1% of property value</p>
                    <p className="text-green-800 font-medium mt-2">✓ Recommended for resale properties with complex ownership history</p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <h4 className="font-semibold text-green-900 mb-2">5. Loss of Rent Insurance</h4>
                  <div className="text-sm text-slate-700 space-y-1">
                    <p><strong>Covers:</strong> Rental income if property uninhabitable due to insured event</p>
                    <p><strong>Coverage Period:</strong> Usually 12-24 months</p>
                    <p><strong>Cost:</strong> ₹3,000-5,000/year</p>
                    <p className="text-green-800 font-medium mt-2">✓ Critical for income-generating properties</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Common Insurance Mistakes to Avoid</h4>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• Under-insuring property (₹50L coverage for ₹1Cr property)</li>
                <li>• Not updating sum insured with appreciation</li>
                <li>• Skipping contents insurance</li>
                <li>• Not reading exclusions (e.g., basement flooding may not be covered)</li>
                <li>• Letting policy lapse - restart requires fresh inspection</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            Emergency Fund for Property
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-3">Why Property Needs Separate Emergency Fund?</h3>
              <p className="text-sm text-slate-700 mb-4">
                Property comes with unexpected expenses - major repairs, tenant defaults, legal issues. Having a dedicated fund prevents distress sales.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-orange-100 border-b border-orange-300">
                    <th className="text-left p-3 text-orange-900 font-semibold">Emergency Scenario</th>
                    <th className="text-left p-3 text-orange-900 font-semibold">Typical Cost</th>
                    <th className="text-left p-3 text-orange-900 font-semibold">Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-orange-50">
                    <td className="p-3">Major Waterproofing/Seepage Repair</td>
                    <td className="p-3 text-slate-700">₹1-2 lakh</td>
                    <td className="p-3 text-slate-700">Once in 7-10 years</td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="p-3">Plumbing/Electrical System Overhaul</td>
                    <td className="p-3 text-slate-700">₹50,000-1 lakh</td>
                    <td className="p-3 text-slate-700">Once in 10-15 years</td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="p-3">Painting & Repairs (Full flat)</td>
                    <td className="p-3 text-slate-700">₹1-1.5 lakh</td>
                    <td className="p-3 text-slate-700">Every 5-7 years</td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="p-3">Tenant Default (3 months rent loss)</td>
                    <td className="p-3 text-slate-700">₹60,000-1.5 lakh</td>
                    <td className="p-3 text-slate-700">Unpredictable</td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="p-3">Legal Notice/Court Case Defense</td>
                    <td className="p-3 text-slate-700">₹50,000-2 lakh</td>
                    <td className="p-3 text-slate-700">Rare but possible</td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="p-3">Special Society Levy (Major repair)</td>
                    <td className="p-3 text-slate-700">₹1-3 lakh</td>
                    <td className="p-3 text-slate-700">Once in 10-15 years</td>
                  </tr>
                  <tr className="hover:bg-orange-50">
                    <td className="p-3">Property Tax / Penalty Arrears</td>
                    <td className="p-3 text-slate-700">₹20,000-1 lakh</td>
                    <td className="p-3 text-slate-700">If overlooked</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3">Recommended Emergency Fund Size</h4>
              <div className="text-sm text-slate-700 space-y-2">
                <p><strong>Self-Use Property:</strong> 3-5% of property value</p>
                <p className="ml-4">Example: ₹50L property → ₹1.5-2.5L emergency fund</p>
                
                <p className="mt-3"><strong>Rental Property:</strong> 8-10% of property value OR 6 months' rent</p>
                <p className="ml-4">Example: ₹40L property, ₹20k rent → ₹3-4L emergency fund</p>

                <p className="mt-3"><strong>Where to Keep:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Liquid fund / Debt mutual fund (accessible in 1-2 days)</li>
                  <li>• Fixed Deposit with premature withdrawal facility</li>
                  <li>• Don't keep in illiquid assets or long lock-in instruments</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Users className="w-6 h-6 text-purple-600" />
            Professional Advisors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-3">Build Your Property Advisory Team</h3>
              <p className="text-sm text-slate-700 mb-4">
                Real estate transactions involve legal, technical, and financial complexities. Having trusted professionals reduces risk significantly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <h4 className="font-semibold text-purple-900">Property Lawyer</h4>
                </div>
                <p className="text-xs text-slate-700 mb-2"><strong>Role:</strong> Title verification, agreement drafting, dispute resolution</p>
                <p className="text-xs text-slate-700 mb-2"><strong>When to use:</strong> Every property transaction, no exception</p>
                <p className="text-xs text-slate-700 mb-2"><strong>Cost:</strong> ₹10,000-50,000 depending on property value</p>
                <p className="text-xs text-green-700 font-medium"><strong>ROI:</strong> Prevents ₹10-50 lakh losses from legal issues</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <h4 className="font-semibold text-purple-900">Structural Engineer</h4>
                </div>
                <p className="text-xs text-slate-700 mb-2"><strong>Role:</strong> Property inspection, structural integrity check</p>
                <p className="text-xs text-slate-700 mb-2"><strong>When to use:</strong> Resale properties, old buildings (15+ years)</p>
                <p className="text-xs text-slate-700 mb-2"><strong>Cost:</strong> ₹5,000-15,000 for inspection report</p>
                <p className="text-xs text-green-700 font-medium"><strong>ROI:</strong> Identifies ₹5-20 lakh repair needs before buying</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <h4 className="font-semibold text-purple-900">Property Valuer (Registered)</h4>
                </div>
                <p className="text-xs text-slate-700 mb-2"><strong>Role:</strong> Fair market value assessment, bank approval</p>
                <p className="text-xs text-slate-700 mb-2"><strong>When to use:</strong> Checking if price is fair, loan applications</p>
                <p className="text-xs text-slate-700 mb-2"><strong>Cost:</strong> ₹3,000-10,000 for valuation report</p>
                <p className="text-xs text-green-700 font-medium"><strong>ROI:</strong> Prevents overpaying by 10-20%</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <h4 className="font-semibold text-purple-900">Chartered Accountant (CA)</h4>
                </div>
                <p className="text-xs text-slate-700 mb-2"><strong>Role:</strong> Tax planning, capital gains calculation, returns filing</p>
                <p className="text-xs text-slate-700 mb-2"><strong>When to use:</strong> Sale/purchase planning, tax optimization</p>
                <p className="text-xs text-slate-700 mb-2"><strong>Cost:</strong> ₹5,000-25,000 for consultation & filing</p>
                <p className="text-xs text-green-700 font-medium"><strong>ROI:</strong> Saves lakhs in taxes through proper planning</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <h4 className="font-semibold text-purple-900">Property Management Company</h4>
                </div>
                <p className="text-xs text-slate-700 mb-2"><strong>Role:</strong> Tenant management, rent collection, maintenance</p>
                <p className="text-xs text-slate-700 mb-2"><strong>When to use:</strong> Rental properties, especially if you're in different city</p>
                <p className="text-xs text-slate-700 mb-2"><strong>Cost:</strong> 1-1.5 months' rent annually (5-10% of rent)</p>
                <p className="text-xs text-green-700 font-medium"><strong>ROI:</strong> Ensures timely rent, reduces vacancy period</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3 mb-2">
                  <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <h4 className="font-semibold text-purple-900">Financial Advisor (SEBI RIA)</h4>
                </div>
                <p className="text-xs text-slate-700 mb-2"><strong>Role:</strong> Overall portfolio balance, real estate allocation</p>
                <p className="text-xs text-slate-700 mb-2"><strong>When to use:</strong> Before major property decision, portfolio review</p>
                <p className="text-xs text-slate-700 mb-2"><strong>Cost:</strong> ₹10,000-50,000 for comprehensive planning</p>
                <p className="text-xs text-green-700 font-medium"><strong>ROI:</strong> Ensures property fits your overall financial goals</p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ When Advisor Cost Is Worth It</h4>
              <p className="text-sm text-slate-700">
                Spending ₹50,000 on advisors for a ₹50 lakh property = just 0.1% of value. But it can prevent mistakes worth ₹5-10 lakh (10-20% of value). Always have at least lawyer + engineer review before buying.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <FileCheck className="w-6 h-6 text-indigo-600" />
            Legal Protection Strategies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-semibold text-indigo-900 mb-2">1. Proper Documentation</h4>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>• Keep original sale deed in bank locker</li>
                  <li>• Maintain copies of all payments (cheques, RTGS receipts)</li>
                  <li>• Scan and digitally backup all documents</li>
                  <li>• Get documents notarized/attested when possible</li>
                </ul>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-semibold text-indigo-900 mb-2">2. Thorough Agreement Clauses</h4>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>• Include penalty clause for builder delays (₹5-10/sq ft/month)</li>
                  <li>• Exit clause if possession delayed beyond X months</li>
                  <li>• Clear specification of what's included (fixtures, fittings)</li>
                  <li>• Dispute resolution mechanism (arbitration preferred over court)</li>
                </ul>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-semibold text-indigo-900 mb-2">3. Registration & Legal Compliance</h4>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>• Register sale deed within 4 months of signing</li>
                  <li>• Pay stamp duty & registration immediately (no delays)</li>
                  <li>• Get property mutation done in municipal records</li>
                  <li>• Transfer utility connections to your name (electricity, water)</li>
                </ul>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-semibold text-indigo-900 mb-2">4. RERA Protection (Under-Construction)</h4>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>• Verify project RERA registration on official website</li>
                  <li>• Complaint can be filed if possession delayed</li>
                  <li>• Builder must keep 70% funds in escrow account</li>
                  <li>• RERA tribunal gives faster judgments than civil court</li>
                </ul>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-semibold text-indigo-900 mb-2">5. Consumer Court Option</h4>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>• Property transaction is a "service", covered by Consumer Protection Act</li>
                  <li>• Can file complaint against builder for deficiency in service</li>
                  <li>• Faster than civil court, lower legal costs</li>
                  <li>• Compensation for harassment, mental agony possible</li>
                </ul>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                <h4 className="font-semibold text-indigo-900 mb-2">6. Title Insurance (For Resale Properties)</h4>
                <ul className="text-sm text-slate-700 space-y-1 ml-4">
                  <li>• One-time premium, protects against title defects discovered later</li>
                  <li>• Covers legal defense costs if ownership challenged</li>
                  <li>• Especially useful for properties with complex ownership history</li>
                  <li>• Cost: 0.5-1% of property value (₹50k for ₹50L property)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">🚨 Red Alert: Never Skip These</h4>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• Never make cash payments (everything via cheque/RTGS only)</li>
                <li>• Never sign blank papers or incomplete agreements</li>
                <li>• Never believe verbal promises - get everything in writing</li>
                <li>• Never skip lawyer review to save ₹10-20k</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Risk Mitigation Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Diversified real estate portfolio (not all wealth in one property)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Comprehensive property insurance (structure + contents)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Emergency fund = 5-10% of property value in liquid assets</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Property lawyer verified all legal documents</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Structural engineer inspected property (for resale)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">All payments done via banking channels (zero cash)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Agreement has clear penalty clause for delays</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Property registered in municipal records (mutation done)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Have trusted advisors (lawyer, CA, engineer contacts saved)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Annual review of insurance coverage & property condition</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskMitigation;
