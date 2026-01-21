"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, TrendingUp, Users, FileText, AlertCircle } from 'lucide-react';

const CommercialRealEstate = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Building className="w-4 h-4" />
            <span>Commercial Investment</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Commercial Real Estate Investment
          </h2>
          <p className="text-indigo-50 text-lg max-w-2xl">
            Higher yields, professional tenants, but different dynamics than residential
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Building className="w-6 h-6 text-indigo-600" />
            Commercial vs Residential Investment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-slate-900">Parameter</th>
                  <th className="text-left p-3 font-semibold text-slate-900">Commercial</th>
                  <th className="text-left p-3 font-semibold text-slate-900">Residential</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-medium">Rental Yield</td>
                  <td className="p-3 text-green-700 font-semibold">6-10%</td>
                  <td className="p-3 text-slate-700">2-4%</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Capital Appreciation</td>
                  <td className="p-3 text-slate-700">6-8%</td>
                  <td className="p-3 text-green-700 font-semibold">8-12%</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Tenant Type</td>
                  <td className="p-3 text-green-700">Businesses (more stable)</td>
                  <td className="p-3 text-slate-700">Individuals (varied)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Lease Duration</td>
                  <td className="p-3 text-green-700">3-9 years (lock-in)</td>
                  <td className="p-3 text-slate-700">11 months (flexible)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Maintenance</td>
                  <td className="p-3 text-green-700">Tenant responsibility</td>
                  <td className="p-3 text-orange-700">Owner responsibility</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Vacancy Risk</td>
                  <td className="p-3 text-orange-700">Higher (6-12 months)</td>
                  <td className="p-3 text-green-700">Lower (1-3 months)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Initial Investment</td>
                  <td className="p-3 text-red-700">Higher (₹50L+)</td>
                  <td className="p-3 text-green-700">Lower (₹30L+)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Liquidity</td>
                  <td className="p-3 text-red-700">Lower (niche buyers)</td>
                  <td className="p-3 text-green-700">Higher (mass market)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Home Loan Availability</td>
                  <td className="p-3 text-orange-700">Limited, higher rates</td>
                  <td className="p-3 text-green-700">Easy, lower rates</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Tax Benefits</td>
                  <td className="p-3 text-red-700">No home loan benefits</td>
                  <td className="p-3 text-green-700">80C + 24(b) benefits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Building className="w-6 h-6 text-blue-600" />
            Types of Commercial Properties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">1. Office Spaces</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-slate-900 mb-1">Types:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• IT/Business parks</li>
                    <li>• Standalone offices</li>
                    <li>• Co-working spaces</li>
                    <li>• Virtual offices</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">Characteristics:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Rental yield: 7-9%</li>
                    <li>• Lease: 3-5 years</li>
                    <li>• Best locations: SEZ, IT corridors</li>
                    <li>• Tenant: Companies, startups</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">2. Retail Spaces</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-slate-900 mb-1">Types:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Shopping mall units</li>
                    <li>• High street shops</li>
                    <li>• Standalone stores</li>
                    <li>• Food courts</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">Characteristics:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Rental yield: 6-8%</li>
                    <li>• Lease: 3-9 years</li>
                    <li>• Best locations: High footfall areas</li>
                    <li>• Tenant: Retailers, F&B</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">3. Warehouses & Industrial</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-slate-900 mb-1">Types:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Logistics parks</li>
                    <li>• Cold storage</li>
                    <li>• Manufacturing units</li>
                    <li>• Godowns</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">Characteristics:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Rental yield: 8-10%</li>
                    <li>• Lease: 5-10 years</li>
                    <li>• Best locations: Highway access</li>
                    <li>• Tenant: E-commerce, manufacturers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">4. Hospitality</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-slate-900 mb-1">Types:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Hotels</li>
                    <li>• Serviced apartments</li>
                    <li>• Resorts</li>
                    <li>• Guest houses</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-1">Characteristics:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Rental yield: 8-12%</li>
                    <li>• Lease: 5-15 years</li>
                    <li>• Best locations: Tourist/business hubs</li>
                    <li>• Tenant: Hotel chains, operators</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <FileText className="w-6 h-6 text-green-600" />
            Commercial Lease Structures
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">1. Triple Net Lease (NNN) - Most Common</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>Tenant pays:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Base rent</li>
                  <li>• Property taxes</li>
                  <li>• Insurance</li>
                  <li>• Maintenance & repairs</li>
                </ul>
                <p className="mt-2"><strong>Owner gets:</strong> Pure rental income with minimal responsibilities</p>
                <p className="text-green-700 font-semibold mt-2">Best for: Hands-off investors</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">2. Gross Lease</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>Tenant pays:</strong> Fixed rent (all-inclusive)</p>
                <p><strong>Owner pays:</strong> All operating expenses, taxes, insurance, maintenance</p>
                <p className="text-blue-700 font-semibold mt-2">Best for: Small shops, office cabins</p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-3">3. Percentage Lease</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>Structure:</strong> Base rent + % of tenant's revenue</p>
                <p><strong>Example:</strong> ₹50,000/month + 5% of sales</p>
                <p className="text-purple-700 font-semibold mt-2">Best for: Retail spaces, malls</p>
              </div>
            </div>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Lease Component</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">Lock-in Period</td>
                    <td className="p-3 text-slate-700">Minimum 3 years (neither party can exit)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Rent Escalation</td>
                    <td className="p-3 text-slate-700">5-15% every 3 years (pre-negotiated)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Security Deposit</td>
                    <td className="p-3 text-slate-700">6-12 months rent (vs 2-3 months in residential)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Notice Period</td>
                    <td className="p-3 text-slate-700">3-6 months before lease end</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Fit-out Period</td>
                    <td className="p-3 text-slate-700">1-3 months rent-free for tenant setup</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Users className="w-6 h-6 text-orange-600" />
            Tenant Management in Commercial
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Finding Good Tenants:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• <strong>Corporate clients preferred:</strong> MNCs, established brands</li>
                <li>• <strong>Check creditworthiness:</strong> GST returns, financials, references</li>
                <li>• <strong>Industry stability:</strong> IT/pharma better than restaurants</li>
                <li>• <strong>Track record:</strong> Previous lease compliance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Due Diligence Checklist:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 p-2 bg-slate-50 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">Company registration documents verified</span>
                </div>
                <div className="flex items-start gap-2 p-2 bg-slate-50 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">Last 2 years financial statements reviewed</span>
                </div>
                <div className="flex items-start gap-2 p-2 bg-slate-50 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">GST and tax compliance checked</span>
                </div>
                <div className="flex items-start gap-2 p-2 bg-slate-50 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">Personal guarantees from directors obtained</span>
                </div>
                <div className="flex items-start gap-2 p-2 bg-slate-50 rounded">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">Post-dated cheques for entire tenure collected</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Vacancy Management:</h4>
              <p className="text-sm text-slate-700 mb-2">Commercial vacancies can last 6-12 months. Plan for it:</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Keep property in move-in condition</li>
                <li>• List 6 months before current lease ends</li>
                <li>• Be flexible on fit-out period</li>
                <li>• Consider rent-free period for good tenant</li>
                <li>• Maintain emergency fund for EMI during vacancy</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Higher Rental Yields - The Big Advantage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900 mb-2">Commercial vs Residential Comparison:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-3">
                <div className="bg-white p-3 rounded border">
                  <p className="font-semibold text-slate-900 mb-2">Residential Property</p>
                  <div className="space-y-1 text-sm text-slate-700">
                    <p>Property Value: ₹50,00,000</p>
                    <p>Monthly Rent: ₹15,000</p>
                    <p>Annual Rent: ₹1,80,000</p>
                    <p className="font-semibold text-orange-700">Yield: 3.6%</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="font-semibold text-slate-900 mb-2">Commercial Office</p>
                  <div className="space-y-1 text-sm text-slate-700">
                    <p>Property Value: ₹50,00,000</p>
                    <p>Monthly Rent: ₹35,000</p>
                    <p>Annual Rent: ₹4,20,000</p>
                    <p className="font-semibold text-green-700">Yield: 8.4%</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-green-700 font-semibold mt-3 text-center">
                Commercial generates 2.3x more rental income!
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Why Higher Yields?</h4>
              <ul className="space-y-2 text-sm text-slate-700 ml-4">
                <li>• Business expense (tenant can claim as deduction)</li>
                <li>• Location premium (prime business areas)</li>
                <li>• Professional tenants (less negotiation)</li>
                <li>• Long-term stability (businesses don't relocate often)</li>
                <li>• Lower appreciation expectations (yield-focused)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">Cash Flow Example (10-Year):</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-white">
                    <tr>
                      <th className="text-left p-2">Parameter</th>
                      <th className="text-left p-2">Residential</th>
                      <th className="text-left p-2">Commercial</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-2">Total Rent (10 years)</td>
                      <td className="p-2">₹22,00,000</td>
                      <td className="p-2 text-green-700 font-semibold">₹51,00,000</td>
                    </tr>
                    <tr>
                      <td className="p-2">Maintenance Burden</td>
                      <td className="p-2 text-red-700">Owner pays</td>
                      <td className="p-2 text-green-700">Tenant pays</td>
                    </tr>
                    <tr>
                      <td className="p-2">Vacancy Impact</td>
                      <td className="p-2">Lower</td>
                      <td className="p-2 text-orange-700">Higher</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <AlertCircle className="w-6 h-6 text-red-600" />
            Commercial Property Risks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Higher Vacancy Risk</p>
                <p className="text-xs text-slate-700">Can take 6-18 months to find tenant. EMI continues.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Economic Sensitivity</p>
                <p className="text-xs text-slate-700">Recessions hit commercial harder - businesses downsize/close</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Lower Liquidity</p>
                <p className="text-xs text-slate-700">Smaller buyer pool, takes longer to sell</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Limited Home Loan Options</p>
                <p className="text-xs text-slate-700">Higher interest rates (10-12%), lower LTV (50-60%)</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Location Dependency</p>
                <p className="text-xs text-slate-700">Wrong location = permanent vacancy. Need prime commercial area</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">No Tax Benefits</p>
                <p className="text-xs text-slate-700">Can't claim 80C or 24(b) deductions like residential</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Tenant Default Risk</p>
                <p className="text-xs text-slate-700">Business failure = lost rent + legal hassles</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Commercial Investment Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Prime commercial location verified</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Target yield 7%+ confirmed</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Emergency fund for 12-month vacancy</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Tenant creditworthiness assessed</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Lease agreement drafted by lawyer</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Property has all commercial approvals</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Compared residential vs commercial returns</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommercialRealEstate;
