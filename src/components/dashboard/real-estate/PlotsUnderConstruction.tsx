"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Construction, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

const PlotsUnderConstruction = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Map className="w-4 h-4" />
            <span>Alternative Investments</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Plots & Under-Construction Properties
          </h2>
          <p className="text-yellow-50 text-lg max-w-2xl">
            Different dynamics, different risks - understand before investing
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Map className="w-6 h-6 text-yellow-600" />
            Investing in Plots/Land
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">Advantages ✅</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>Lower initial cost:</strong> ₹20-40L can get you started</li>
                  <li>• <strong>No maintenance:</strong> Empty land = no upkeep costs</li>
                  <li>• <strong>Higher appreciation potential:</strong> 15-25% in emerging areas</li>
                  <li>• <strong>Flexible usage:</strong> Build when ready, your design</li>
                  <li>• <strong>Less competition:</strong> Many prefer ready properties</li>
                  <li>• <strong>Loan obligatory construction:</strong> Must build within 2-3 years</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-3">Disadvantages ❌</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>No rental income:</strong> Dead investment until you build</li>
                  <li>• <strong>Lower home loan LTV:</strong> Only 60-70% financing</li>
                  <li>• <strong>No immediate tax benefits:</strong> Benefits after construction</li>
                  <li>• <strong>Encroachment risk:</strong> Need regular monitoring</li>
                  <li>• <strong>Liquidity issues:</strong> Takes longer to sell</li>
                  <li>• <strong>Legal complexities:</strong> More due diligence needed</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">Key Factors to Check Before Buying Plot:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-slate-900 mb-2">Legal Checks:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Clear title - 30 years history</li>
                    <li>• NA (Non-Agricultural) converted</li>
                    <li>• RERA approved layout</li>
                    <li>• Encumbrance certificate</li>
                    <li>• Power of attorney validity</li>
                    <li>• No litigation/disputes</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900 mb-2">Physical Checks:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Visit multiple times</li>
                    <li>• Check survey numbers match</li>
                    <li>• Verify dimensions on ground</li>
                    <li>• Check road access</li>
                    <li>• Water & electricity availability</li>
                    <li>• Soil quality (if building)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Best Locations for Plot Investment:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-slate-900">Location Type</th>
                      <th className="text-left p-3 font-semibold text-slate-900">Appreciation</th>
                      <th className="text-left p-3 font-semibold text-slate-900">Risk</th>
                      <th className="text-left p-3 font-semibold text-slate-900">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3">Near upcoming metro/highway</td>
                      <td className="p-3 text-green-700 font-semibold">20-30%</td>
                      <td className="p-3 text-green-700">Low</td>
                      <td className="p-3">3-5 years</td>
                    </tr>
                    <tr>
                      <td className="p-3">IT corridor expansion area</td>
                      <td className="p-3 text-green-700 font-semibold">25-35%</td>
                      <td className="p-3 text-yellow-700">Medium</td>
                      <td className="p-3">5-7 years</td>
                    </tr>
                    <tr>
                      <td className="p-3">Government smart city projects</td>
                      <td className="p-3 text-green-700 font-semibold">30-40%</td>
                      <td className="p-3 text-orange-700">Medium-High</td>
                      <td className="p-3">7-10 years</td>
                    </tr>
                    <tr>
                      <td className="p-3">Agricultural conversion zone</td>
                      <td className="p-3 text-green-700 font-semibold">40-60%</td>
                      <td className="p-3 text-red-700">High</td>
                      <td className="p-3">10+ years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-semibold text-yellow-900 mb-2">⚠️ Red Flags - Don't Buy Plot If:</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Seller can't produce original documents</li>
                <li>• Too cheap compared to area (usually trapped)</li>
                <li>• In Gram Panchayat land (legal issues)</li>
                <li>• No clear road access</li>
                <li>• Disputed area or litigation pending</li>
                <li>• Seller pressuring for quick decision</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Construction className="w-6 h-6 text-orange-600" />
            Under-Construction Properties
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">Benefits of Buying Under-Construction</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>Lower price:</strong> 10-20% cheaper than ready properties</li>
                  <li>• <strong>Payment flexibility:</strong> Construction-linked plan</li>
                  <li>• <strong>Appreciation during construction:</strong> 15-25%</li>
                  <li>• <strong>Choice of units:</strong> Best floors, corners available</li>
                  <li>• <strong>Modern amenities:</strong> Latest designs, technology</li>
                  <li>• <strong>Customization options:</strong> Some modifications possible</li>
                  <li>• <strong>Pre-launch offers:</strong> Maximum discounts</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-3">Risks & Challenges</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>Delay risk:</strong> 1-3 years delay common</li>
                  <li>• <strong>Builder bankruptcy:</strong> Project may never complete</li>
                  <li>• <strong>Quality concerns:</strong> Final product may differ</li>
                  <li>• <strong>EMI + rent burden:</strong> Pay both during construction</li>
                  <li>• <strong>No rental income:</strong> 3-5 years wait</li>
                  <li>• <strong>Market risk:</strong> Prices may fall during construction</li>
                  <li>• <strong>Cost escalation:</strong> Additional charges by builder</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Ready vs Under-Construction Comparison:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-slate-900">Parameter</th>
                      <th className="text-left p-3 font-semibold text-slate-900">Ready Property</th>
                      <th className="text-left p-3 font-semibold text-slate-900">Under-Construction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-medium">Price</td>
                      <td className="p-3 text-orange-700">₹60 lakh</td>
                      <td className="p-3 text-green-700">₹50 lakh (17% cheaper)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Possession</td>
                      <td className="p-3 text-green-700">Immediate</td>
                      <td className="p-3 text-orange-700">2-4 years wait</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Rental Income</td>
                      <td className="p-3 text-green-700">From day 1</td>
                      <td className="p-3 text-red-700">None (3-4 years loss)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Payment</td>
                      <td className="p-3 text-orange-700">Full/Heavy EMI</td>
                      <td className="p-3 text-green-700">Staggered, lower EMI initially</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Tax Benefits</td>
                      <td className="p-3 text-green-700">Immediate</td>
                      <td className="p-3 text-orange-700">After possession</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Risk</td>
                      <td className="p-3 text-green-700">Low (see before buy)</td>
                      <td className="p-3 text-red-700">High (delays, quality)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Maintenance</td>
                      <td className="p-3 text-orange-700">May need soon</td>
                      <td className="p-3 text-green-700">New, no issues 5-7 years</td>
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
            <Calendar className="w-6 h-6 text-purple-600" />
            Payment Plans Explained
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-3 rounded">
              <h4 className="font-semibold text-blue-900 mb-2">1. Construction-Linked Plan (CLP) - Most Popular</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>How it works:</strong> Pay as construction progresses</p>
                <div className="mt-2 bg-white p-3 rounded border">
                  <p className="font-medium text-slate-900 mb-1">Typical Schedule:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• On booking: 10-15%</li>
                    <li>• On excavation: 5%</li>
                    <li>• On plinth completion: 10%</li>
                    <li>• On each floor completion: 5% per floor</li>
                    <li>• On roof/brickwork: 15%</li>
                    <li>• On finishing/handover: 30-40%</li>
                  </ul>
                </div>
                <p className="text-green-700 font-semibold mt-2">Best for: Genuine buyers, lower EMI burden initially</p>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-4 bg-green-50 p-3 rounded">
              <h4 className="font-semibold text-green-900 mb-2">2. Time-Linked Plan (TLP)</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>How it works:</strong> Pay in installments over time, irrespective of construction</p>
                <p className="mt-1">Example: 10% booking + 15% every 6 months for 36 months</p>
                <p className="text-orange-700 font-semibold mt-2">Risk: Pay even if construction delays</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-600 pl-4 bg-purple-50 p-3 rounded">
              <h4 className="font-semibold text-purple-900 mb-2">3. Down Payment Plan (Subvention Scheme)</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>How it works:</strong> Pay 10-20% down payment, builder pays your EMI till possession</p>
                <div className="mt-2 bg-white p-3 rounded border">
                  <p className="font-medium text-slate-900">Example:</p>
                  <p className="text-slate-700">Property: ₹50 lakh</p>
                  <p className="text-slate-700">Down payment: ₹10 lakh (20%)</p>
                  <p className="text-slate-700">Loan: ₹40 lakh</p>
                  <p className="text-green-700">Builder pays your ₹36,000 EMI for 3 years (₹12.96 lakh)</p>
                  <p className="text-slate-700 mt-1 text-xs">*You start EMI after possession</p>
                </div>
                <p className="text-yellow-700 font-semibold mt-2">Catch: Usually 5-10% more expensive than normal price</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-600 pl-4 bg-orange-50 p-3 rounded">
              <h4 className="font-semibold text-orange-900 mb-2">4. Flexi Payment Plan</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p><strong>How it works:</strong> Pay 20-30% upfront, balance on possession</p>
                <p>Example: 25% now + 75% after 3 years</p>
                <p className="text-blue-700 font-semibold mt-2">Good for: Those with lump sum now, prefer lower EMI later</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-semibold text-yellow-900 mb-2">💡 Pro Tip:</p>
              <p className="text-sm text-slate-700">
                Construction-linked plan (CLP) is safest - you pay only when you see progress. Avoid paying too much upfront. 
                In case of delay/default, easier to negotiate or exit with CLP.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Possession Timelines & Delays
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Realistic Timelines:</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between p-2 bg-white rounded">
                  <span>Low-rise (G+4):</span>
                  <span className="font-semibold">18-24 months</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span>Mid-rise (G+10):</span>
                  <span className="font-semibold">24-30 months</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span>High-rise (G+20):</span>
                  <span className="font-semibold">36-48 months</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded">
                  <span>Township project:</span>
                  <span className="font-semibold">48-72 months</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">Common Delay Reasons:</h4>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Approval delays from authorities</li>
                <li>• Environmental clearances pending</li>
                <li>• Builder cash flow issues</li>
                <li>• Labor shortages</li>
                <li>• Covid-like disruptions</li>
                <li>• Litigation/disputes</li>
                <li>• Poor planning by builder</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">What to Do If Delayed:</h4>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-green-600 pl-3">
                  <p className="font-medium text-slate-900">Step 1: Check Agreement</p>
                  <p className="text-slate-700">Read possession clause - builders usually give 6-12 months grace period</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-3">
                  <p className="font-medium text-slate-900">Step 2: Demand Compensation</p>
                  <p className="text-slate-700">As per RERA: ₹5-10 per sq ft per month delay compensation</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-3">
                  <p className="font-medium text-slate-900">Step 3: File RERA Complaint</p>
                  <p className="text-slate-700">If delay &gt; 6 months beyond grace period, file formal complaint</p>
                </div>
                <div className="border-l-4 border-orange-600 pl-3">
                  <p className="font-medium text-slate-900">Step 4: Demand Refund</p>
                  <p className="text-slate-700">As per agreement, get refund with interest if project not delivered</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900 mb-2">✅ Protect Yourself:</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Buy only RERA registered projects</li>
                <li>• Check builder's past delivery record</li>
                <li>• Read agreement carefully - possession clause</li>
                <li>• Visit site quarterly to check progress</li>
                <li>• Join buyer WhatsApp groups for updates</li>
                <li>• Keep all payment receipts safely</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            Builder Selection Criteria
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">✅ Good Builder Indicators:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• <strong>Track record:</strong> 10+ years, delivered 5+ projects on time</li>
                <li>• <strong>Financial health:</strong> Positive cash flow, low debt</li>
                <li>• <strong>RERA compliance:</strong> All projects registered, regular updates</li>
                <li>• <strong>Customer reviews:</strong> Positive feedback from past buyers</li>
                <li>• <strong>Transparent pricing:</strong> No hidden charges</li>
                <li>• <strong>Quality focus:</strong> Uses reputed contractors, materials</li>
                <li>• <strong>After-sales service:</strong> Responds to complaints</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-900 mb-2">🚩 Red Flags:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• New builder with no track record</li>
                <li>• History of delayed projects</li>
                <li>• Multiple litigations pending</li>
                <li>• No RERA registration</li>
                <li>• Overpromising amenities (Olympic size pool in budget project!)</li>
                <li>• Pressure tactics for booking</li>
                <li>• Reluctant to show sample flat/quality</li>
                <li>• Poor response to queries</li>
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Builder Type</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Characteristics</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Risk Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">Tier-1 (DLF, Godrej, Prestige)</td>
                    <td className="p-3 text-slate-700 text-xs">Premium, timely, expensive</td>
                    <td className="p-3 text-green-700 font-semibold">Very Low</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Tier-2 (Regional brands)</td>
                    <td className="p-3 text-slate-700 text-xs">Good track record, competitive</td>
                    <td className="p-3 text-yellow-700 font-semibold">Low</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Tier-3 (Local builders)</td>
                    <td className="p-3 text-slate-700 text-xs">Hit or miss, lower price</td>
                    <td className="p-3 text-orange-700 font-semibold">Medium</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">New/Unknown</td>
                    <td className="p-3 text-slate-700 text-xs">No track record, risky</td>
                    <td className="p-3 text-red-700 font-semibold">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Under-Construction Buyer Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Builder track record verified (past projects visited)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">RERA registration confirmed</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Construction-linked payment plan chosen</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Site visited and construction progress checked</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Agreement read thoroughly - possession clause noted</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Can afford EMI + rent for 3-4 years</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Hidden costs (GST, PLC, etc.) accounted for</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Delay compensation clause exists in agreement</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlotsUnderConstruction;
