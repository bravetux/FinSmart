"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, AlertTriangle, Receipt, TrendingUp } from 'lucide-react';

const HiddenCosts = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Receipt className="w-4 h-4" />
            <span>Complete Cost Breakdown</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Hidden Costs in Real Estate
          </h2>
          <p className="text-purple-50 text-lg max-w-2xl">
            Budget for the full picture - property price is just the beginning
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-purple-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <DollarSign className="w-6 h-6 text-purple-600" />
            Complete Cost Breakdown (₹50 Lakh Property Example)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-purple-100 border-b border-purple-300">
                  <th className="text-left p-3 text-purple-900 font-semibold">Cost Component</th>
                  <th className="text-left p-3 text-purple-900 font-semibold">Amount Range</th>
                  <th className="text-left p-3 text-purple-900 font-semibold">% of Property</th>
                  <th className="text-left p-3 text-purple-900 font-semibold">When Payable</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-purple-50">
                  <td className="p-3 font-semibold">Property Price</td>
                  <td className="p-3 font-semibold text-slate-900">₹50,00,000</td>
                  <td className="p-3 font-semibold text-slate-900">100%</td>
                  <td className="p-3 text-slate-700">As per payment plan</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Stamp Duty</td>
                  <td className="p-3 text-slate-700">₹2,50,000 - ₹3,50,000</td>
                  <td className="p-3 text-red-700 font-medium">5-7%</td>
                  <td className="p-3 text-slate-700">At registration</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Registration Charges</td>
                  <td className="p-3 text-slate-700">₹50,000 - ₹75,000</td>
                  <td className="p-3 text-red-700 font-medium">1-1.5%</td>
                  <td className="p-3 text-slate-700">At registration</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">GST (Under-Construction)</td>
                  <td className="p-3 text-slate-700">₹2,50,000 (5% on ₹50L)</td>
                  <td className="p-3 text-red-700 font-medium">5%</td>
                  <td className="p-3 text-slate-700">During construction</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Brokerage/Commission</td>
                  <td className="p-3 text-slate-700">₹50,000 - ₹1,00,000</td>
                  <td className="p-3 text-red-700 font-medium">1-2%</td>
                  <td className="p-3 text-slate-700">At booking</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Legal Fees (Lawyer)</td>
                  <td className="p-3 text-slate-700">₹15,000 - ₹30,000</td>
                  <td className="p-3 text-red-700 font-medium">0.3-0.6%</td>
                  <td className="p-3 text-slate-700">Before registration</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Home Loan Processing Fee</td>
                  <td className="p-3 text-slate-700">₹10,000 - ₹40,000</td>
                  <td className="p-3 text-red-700 font-medium">0.25-1%</td>
                  <td className="p-3 text-slate-700">At loan approval</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Property Insurance (Annual)</td>
                  <td className="p-3 text-slate-700">₹10,000 - ₹15,000</td>
                  <td className="p-3 text-red-700 font-medium">0.2-0.3%</td>
                  <td className="p-3 text-slate-700">At possession</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Maintenance Deposit (1-2 years)</td>
                  <td className="p-3 text-slate-700">₹24,000 - ₹48,000</td>
                  <td className="p-3 text-red-700 font-medium">-</td>
                  <td className="p-3 text-slate-700">At possession</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Electricity/Water Connection</td>
                  <td className="p-3 text-slate-700">₹10,000 - ₹20,000</td>
                  <td className="p-3 text-red-700 font-medium">-</td>
                  <td className="p-3 text-slate-700">After possession</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Interior Work (Basic)</td>
                  <td className="p-3 text-slate-700">₹3,00,000 - ₹5,00,000</td>
                  <td className="p-3 text-red-700 font-medium">6-10%</td>
                  <td className="p-3 text-slate-700">After possession</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Furniture & Appliances</td>
                  <td className="p-3 text-slate-700">₹2,00,000 - ₹4,00,000</td>
                  <td className="p-3 text-red-700 font-medium">4-8%</td>
                  <td className="p-3 text-slate-700">Before moving in</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="p-3">Packers & Movers</td>
                  <td className="p-3 text-slate-700">₹15,000 - ₹30,000</td>
                  <td className="p-3 text-red-700 font-medium">-</td>
                  <td className="p-3 text-slate-700">Moving day</td>
                </tr>
                <tr className="bg-red-100 font-semibold">
                  <td className="p-3 text-red-900">TOTAL ADDITIONAL COSTS</td>
                  <td className="p-3 text-red-900">₹10,84,000 - ₹18,08,000</td>
                  <td className="p-3 text-red-900">22-36%</td>
                  <td className="p-3 text-red-900">Various stages</td>
                </tr>
                <tr className="bg-red-200 font-bold">
                  <td className="p-3 text-red-900">TOTAL PROJECT COST</td>
                  <td className="p-3 text-red-900">₹60,84,000 - ₹68,08,000</td>
                  <td className="p-3 text-red-900">122-136%</td>
                  <td className="p-3 text-red-900">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-red-900 font-semibold">⚠️ Key Insight:</p>
            <p className="text-sm text-slate-700">
              For a ₹50 lakh property, you'll actually need <strong>₹60-68 lakh</strong> total. Many buyers budget only for property price and face financial stress when these costs hit.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Receipt className="w-6 h-6 text-orange-600" />
            Stamp Duty & Registration Charges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-3">State-Wise Stamp Duty Rates (2024)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-orange-100 border-b border-orange-300">
                      <th className="text-left p-3 text-orange-900 font-semibold">State</th>
                      <th className="text-left p-3 text-orange-900 font-semibold">Male</th>
                      <th className="text-left p-3 text-orange-900 font-semibold">Female</th>
                      <th className="text-left p-3 text-orange-900 font-semibold">Registration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-orange-50">
                      <td className="p-3">Maharashtra</td>
                      <td className="p-3 text-slate-700">6-7%</td>
                      <td className="p-3 text-green-700 font-medium">5-6%</td>
                      <td className="p-3 text-slate-700">1%</td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="p-3">Karnataka</td>
                      <td className="p-3 text-slate-700">5%</td>
                      <td className="p-3 text-green-700 font-medium">3%</td>
                      <td className="p-3 text-slate-700">1%</td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="p-3">Tamil Nadu</td>
                      <td className="p-3 text-slate-700">7%</td>
                      <td className="p-3 text-green-700 font-medium">7%</td>
                      <td className="p-3 text-slate-700">4%</td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="p-3">Delhi</td>
                      <td className="p-3 text-slate-700">6%</td>
                      <td className="p-3 text-green-700 font-medium">4%</td>
                      <td className="p-3 text-slate-700">1%</td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="p-3">Gujarat</td>
                      <td className="p-3 text-slate-700">4.9%</td>
                      <td className="p-3 text-green-700 font-medium">4.9%</td>
                      <td className="p-3 text-slate-700">0.6%</td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="p-3">West Bengal</td>
                      <td className="p-3 text-slate-700">6-7%</td>
                      <td className="p-3 text-green-700 font-medium">6-7%</td>
                      <td className="p-3 text-slate-700">1%</td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="p-3">Rajasthan</td>
                      <td className="p-3 text-slate-700">6%</td>
                      <td className="p-3 text-green-700 font-medium">5%</td>
                      <td className="p-3 text-slate-700">1%</td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="p-3">Uttar Pradesh</td>
                      <td className="p-3 text-slate-700">7%</td>
                      <td className="p-3 text-green-700 font-medium">6%</td>
                      <td className="p-3 text-slate-700">1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">💡 Smart Tip: Buy in Female Name</h4>
              <p className="text-sm text-slate-700">
                In many states, stamp duty is 1-2% lower if property is in woman's name. For ₹50L property, this saves ₹50k-₹1L! Consider joint ownership with wife as first owner.
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Example: Maharashtra - Male pays 7%, Female pays 6% = ₹50,000 savings on ₹50L property
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Stamp Duty Calculated On</h4>
              <p className="text-sm text-slate-700">
                <strong>Higher of:</strong> Agreement value OR Government ready reckoner rate (circle rate/jantri/guidance value)
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Even if you buy for ₹45L but government rate is ₹50L, you'll pay stamp duty on ₹50L
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            GST on Real Estate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-slate-900 mb-3">GST Applicability (2024)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-100 border-b border-blue-300">
                      <th className="text-left p-3 text-blue-900 font-semibold">Property Type</th>
                      <th className="text-left p-3 text-blue-900 font-semibold">GST Rate</th>
                      <th className="text-left p-3 text-blue-900 font-semibold">Calculated On</th>
                      <th className="text-left p-3 text-blue-900 font-semibold">Example (₹50L)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">Under-Construction (Non-Affordable)</td>
                      <td className="p-3 text-red-700 font-semibold">5%</td>
                      <td className="p-3 text-slate-700">Total property value</td>
                      <td className="p-3 text-red-700 font-medium">₹2,50,000</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">Under-Construction (Affordable*)</td>
                      <td className="p-3 text-green-700 font-semibold">1%</td>
                      <td className="p-3 text-slate-700">Total property value</td>
                      <td className="p-3 text-green-700 font-medium">₹50,000</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">Ready-to-Move (OC received)</td>
                      <td className="p-3 text-green-700 font-semibold">NIL</td>
                      <td className="p-3 text-slate-700">-</td>
                      <td className="p-3 text-green-700 font-medium">₹0</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">Resale Property</td>
                      <td className="p-3 text-green-700 font-semibold">NIL</td>
                      <td className="p-3 text-slate-700">-</td>
                      <td className="p-3 text-green-700 font-medium">₹0</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="p-3">Commercial Property</td>
                      <td className="p-3 text-red-700 font-semibold">12%</td>
                      <td className="p-3 text-slate-700">Total property value</td>
                      <td className="p-3 text-red-700 font-medium">₹6,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">*Affordable Housing Definition</h4>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• Carpet area: Up to 60 sq m (645 sq ft) in metros</li>
                <li>• Carpet area: Up to 90 sq m (968 sq ft) in non-metros</li>
                <li>• Property value: Up to ₹45 lakh</li>
              </ul>
              <p className="text-xs text-slate-600 mt-2">
                If your property meets ALL criteria, you pay only 1% GST instead of 5%
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Important GST Points</h4>
              <ul className="text-sm text-slate-700 space-y-1 ml-4">
                <li>• GST is over and above property price (not included in quoted price usually)</li>
                <li>• No GST if Occupation Certificate (OC) received - Buy ready property to save GST</li>
                <li>• Builder passes GST to buyer - cannot be claimed back</li>
                <li>• GST paid during construction, increases your total cost by 5%</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">💡 Smart Strategy</h4>
              <p className="text-sm text-slate-700">
                <strong>Scenario 1:</strong> Under-construction ₹50L + 5% GST = ₹52.5L total<br/>
                <strong>Scenario 2:</strong> Ready-to-move ₹52L (no GST) = ₹52L total
              </p>
              <p className="text-xs text-green-800 mt-2 font-medium">
                Often better to buy ready property slightly higher than under-construction + GST!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            Recurring Costs (Often Forgotten)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-red-100 border-b border-red-300">
                    <th className="text-left p-3 text-red-900 font-semibold">Cost Item</th>
                    <th className="text-left p-3 text-red-900 font-semibold">Frequency</th>
                    <th className="text-left p-3 text-red-900 font-semibold">Typical Amount</th>
                    <th className="text-left p-3 text-red-900 font-semibold">Annual Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-red-50">
                    <td className="p-3">Society Maintenance</td>
                    <td className="p-3 text-slate-700">Monthly</td>
                    <td className="p-3 text-slate-700">₹2,000-5,000/month</td>
                    <td className="p-3 text-red-700 font-medium">₹24,000-60,000</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="p-3">Property Tax</td>
                    <td className="p-3 text-slate-700">Annual/Half-yearly</td>
                    <td className="p-3 text-slate-700">0.2-1% of value</td>
                    <td className="p-3 text-red-700 font-medium">₹10,000-50,000</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="p-3">Home Insurance Premium</td>
                    <td className="p-3 text-slate-700">Annual</td>
                    <td className="p-3 text-slate-700">₹10,000-15,000</td>
                    <td className="p-3 text-red-700 font-medium">₹10,000-15,000</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="p-3">Repairs & Maintenance</td>
                    <td className="p-3 text-slate-700">Ongoing</td>
                    <td className="p-3 text-slate-700">1% of value/year</td>
                    <td className="p-3 text-red-700 font-medium">₹30,000-50,000</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="p-3">Painting (Full)</td>
                    <td className="p-3 text-slate-700">Every 5-7 years</td>
                    <td className="p-3 text-slate-700">₹1-1.5 lakh</td>
                    <td className="p-3 text-red-700 font-medium">₹15,000-20,000</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="p-3">Pest Control</td>
                    <td className="p-3 text-slate-700">Quarterly</td>
                    <td className="p-3 text-slate-700">₹1,500-2,500/service</td>
                    <td className="p-3 text-red-700 font-medium">₹6,000-10,000</td>
                  </tr>
                  <tr className="hover:bg-red-50">
                    <td className="p-3">Deep Cleaning</td>
                    <td className="p-3 text-slate-700">Bi-annually</td>
                    <td className="p-3 text-slate-700">₹5,000-8,000/service</td>
                    <td className="p-3 text-red-700 font-medium">₹10,000-16,000</td>
                  </tr>
                  <tr className="bg-red-200 font-semibold">
                    <td className="p-3 text-red-900" colSpan={3}>TOTAL ANNUAL RECURRING COST</td>
                    <td className="p-3 text-red-900">₹1,05,000-2,21,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-red-900 font-semibold">Reality Check:</p>
              <p className="text-sm text-slate-700">
                Owning a ₹50 lakh property costs ₹1-2 lakh/year in maintenance. Many compare ₹20k rent vs ₹35k EMI, but forget these ₹10-15k/month additional costs!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Receipt className="w-6 h-6 text-indigo-600" />
            Other Often-Missed Costs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-900 mb-2">1. Brokerage Fees</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>Rate:</strong> 1-2% of property value (negotiable)</p>
                <p><strong>For ₹50L property:</strong> ₹50,000-1,00,000</p>
                <p className="text-xs text-slate-600 mt-1">
                  💡 Tip: Try direct builder purchase or negotiate brokerage to 0.5-1%
                </p>
              </div>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-900 mb-2">2. Club/Amenity Membership</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>What:</strong> One-time charge for clubhouse, gym, pool access</p>
                <p><strong>Cost:</strong> ₹50,000-2,00,000 (premium societies)</p>
                <p className="text-xs text-slate-600 mt-1">
                  ⚠️ Often not mentioned upfront, springs up at possession time
                </p>
              </div>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-900 mb-2">3. Preferential Location Charges (PLC)</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>What:</strong> Extra for corner flat, park-facing, higher floor</p>
                <p><strong>Cost:</strong> ₹1-5 lakh (5-10% of base price)</p>
                <p className="text-xs text-slate-600 mt-1">
                  💡 Negotiate: Ground floor often has NEGATIVE PLC (discount)
                </p>
              </div>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-900 mb-2">4. Car Parking Charges</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>Covered parking:</strong> ₹1-3 lakh per slot</p>
                <p><strong>Open parking:</strong> ₹50,000-1,50,000 per slot</p>
                <p className="text-xs text-slate-600 mt-1">
                  ⚠️ Check if 1 parking included in price or separate charge
                </p>
              </div>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-900 mb-2">5. Home Loan Insurance</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>What:</strong> Life insurance to cover loan if borrower dies</p>
                <p><strong>Cost:</strong> ₹15,000-40,000/year (depends on age, loan)</p>
                <p className="text-xs text-slate-600 mt-1">
                  💡 Tip: Buy separate term plan (cheaper) instead of bank's offering
                </p>
              </div>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-900 mb-2">6. Vastu/Feng Shui Corrections</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>What:</strong> Changes to align with vastu - door direction, colors, etc.</p>
                <p><strong>Cost:</strong> ₹20,000-1,00,000 (if you follow vastu strictly)</p>
                <p className="text-xs text-slate-600 mt-1">
                  💡 Better: Choose vastu-compliant property from start
                </p>
              </div>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-900 mb-2">7. Pre-Delivery Inspection (PDI) Fixes</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>What:</strong> Repairs for defects found during pre-delivery inspection</p>
                <p><strong>Cost:</strong> ₹20,000-1,00,000 (builder should fix, but may not)</p>
                <p className="text-xs text-slate-600 mt-1">
                  ⚠️ Budget for self-correction if builder delays/refuses fixes
                </p>
              </div>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
              <h4 className="font-semibold text-indigo-900 mb-2">8. Tenant Finding Cost (For Rental)</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>What:</strong> Commission to broker to find tenant</p>
                <p><strong>Cost:</strong> 1 month's rent</p>
                <p className="text-xs text-slate-600 mt-1">
                  Example: ₹20k rent property = ₹20k to broker every 2-3 years
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Hidden Cost Budget Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-900 mb-3">Before You Buy, Confirm Budget For:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">Property price + 6-8% stamp duty & registration</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">5% GST (if under-construction)</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">1-2% brokerage (or negotiate to zero)</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">₹15-30k lawyer fees + ₹10-15k for loan processing</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">6-10% of property value for interiors</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">4-8% for furniture & appliances</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">Parking charges (if not included)</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">Club membership + 1-2 years maintenance advance</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">Emergency fund = 5% of property value</span>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-slate-700">Monthly recurring: Maintenance + property tax + insurance</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded border border-green-300">
              <p className="text-sm text-green-900 font-semibold">Golden Rule of Budgeting:</p>
              <p className="text-sm text-slate-700 mt-1">
                Total budget should be property price × 1.4 to 1.5 (140-150% of quoted price)
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Example: ₹50L property → Budget ₹70-75L total to avoid financial stress
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HiddenCosts;
