"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Flag, Shield, Eye } from 'lucide-react';

const RedFlags = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-red-700 to-rose-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Flag className="w-4 h-4" />
            <span>Warning Signs</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Red Flags in Property Deals
          </h2>
          <p className="text-red-50 text-lg max-w-2xl">
            Identify warning signs early and walk away from bad deals
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-red-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            Deal-Level Red Flags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-700">
              <Flag className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-1">Price Too Good to Be True</h4>
                <p className="text-sm text-slate-700 mb-2">Property priced 20-30% below market rate without clear reason</p>
                <div className="bg-white p-3 rounded border text-xs space-y-1">
                  <p className="text-slate-700"><strong>Why suspicious:</strong> Could indicate title issues, legal disputes, structural problems</p>
                  <p className="text-red-700"><strong>Action:</strong> Extra due diligence needed. Check why it's cheap. If no clear answer, walk away.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-700">
              <Flag className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-1">Urgency Pressure ("Offer Valid Today Only")</h4>
                <p className="text-sm text-slate-700 mb-2">Agent/builder creating artificial urgency to force quick decision</p>
                <div className="bg-white p-3 rounded border text-xs space-y-1">
                  <p className="text-slate-700"><strong>Why suspicious:</strong> Prevents you from doing due diligence, hides problems</p>
                  <p className="text-red-700"><strong>Action:</strong> Never decide under pressure. Good deals can wait 7-15 days for verification.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-700">
              <Flag className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-1">Cash Component Demanded</h4>
                <p className="text-sm text-slate-700 mb-2">Seller insists on part payment in cash to save on taxes</p>
                <div className="bg-white p-3 rounded border text-xs space-y-1">
                  <p className="text-slate-700"><strong>Why suspicious:</strong> Illegal, limits your loan, reduces your legal protection, can't claim full value</p>
                  <p className="text-red-700"><strong>Action:</strong> Refuse cash deals. Insist on complete white payment with cheque/RTGS.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-700">
              <Flag className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-1">Reluctance to Show Original Documents</h4>
                <p className="text-sm text-slate-700 mb-2">Seller delays or avoids showing original papers, offers photocopies only</p>
                <div className="bg-white p-3 rounded border text-xs space-y-1">
                  <p className="text-slate-700"><strong>Why suspicious:</strong> Documents may be fake, or property has legal issues</p>
                  <p className="text-red-700"><strong>Action:</strong> Demand originals. If delayed beyond 2-3 days, consider it major red flag.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-700">
              <Flag className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-1">Multiple Owners or Complex Ownership</h4>
                <p className="text-sm text-slate-700 mb-2">Property has 5-6 co-owners, including minors, or unclear inheritance</p>
                <div className="bg-white p-3 rounded border text-xs space-y-1">
                  <p className="text-slate-700"><strong>Why suspicious:</strong> Dispute risk high, one owner can block sale later, complex paperwork</p>
                  <p className="text-red-700"><strong>Action:</strong> Get written consent from ALL owners. Verify relationship. Consider avoiding.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-700">
              <Flag className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-1">Property Sold Multiple Times Recently</h4>
                <p className="text-sm text-slate-700 mb-2">Property changed hands 3-4 times in last 2 years</p>
                <div className="bg-white p-3 rounded border text-xs space-y-1">
                  <p className="text-slate-700"><strong>Why suspicious:</strong> Could indicate hidden problems - noise, neighbors, structural issues</p>
                  <p className="text-red-700"><strong>Action:</strong> Investigate why. Talk to previous owners if possible. High turnover = problem.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-700">
              <Flag className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-1">Unregistered Agreement, Power of Attorney Sale</h4>
                <p className="text-sm text-slate-700 mb-2">Sale through PoA instead of direct owner, or unregistered agreements</p>
                <div className="bg-white p-3 rounded border text-xs space-y-1">
                  <p className="text-slate-700"><strong>Why suspicious:</strong> PoA can be revoked, real owner may dispute later</p>
                  <p className="text-red-700"><strong>Action:</strong> Prefer buying from direct owner. If PoA unavoidable, verify thoroughly with lawyer.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Eye className="w-6 h-6 text-orange-600" />
            Seller Red Flags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-orange-100 border-b border-orange-300">
                  <th className="text-left p-3 text-orange-900 font-semibold">Seller Behavior</th>
                  <th className="text-left p-3 text-orange-900 font-semibold">Why It's a Red Flag</th>
                  <th className="text-left p-3 text-orange-900 font-semibold">Your Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-orange-50">
                  <td className="p-3">Avoids direct meetings, always sends agent</td>
                  <td className="p-3 text-slate-700">May not be real owner, or hiding something</td>
                  <td className="p-3 text-red-700 font-medium">Insist on meeting owner directly</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-3">Gives vague answers about neighborhood</td>
                  <td className="p-3 text-slate-700">May know about problems - noise, water, disputes</td>
                  <td className="p-3 text-red-700 font-medium">Talk to neighbors directly</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-3">In extreme hurry to sell ("need money urgently")</td>
                  <td className="p-3 text-slate-700">Could be genuine OR trying to offload problem quickly</td>
                  <td className="p-3 text-red-700 font-medium">Extra due diligence needed</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-3">Changes story about why selling</td>
                  <td className="p-3 text-slate-700">Lying about real reason - could be property issue</td>
                  <td className="p-3 text-red-700 font-medium">Dig deeper, verify claims</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-3">Reluctant to give past electricity/maintenance bills</td>
                  <td className="p-3 text-slate-700">May be high charges, pending dues, or power issues</td>
                  <td className="p-3 text-red-700 font-medium">Demand bills, check for dues</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-3">Won't allow inspection by your engineer</td>
                  <td className="p-3 text-slate-700">Structural problems, seepage, or foundation issues</td>
                  <td className="p-3 text-red-700 font-medium">Walk away. Inspection is non-negotiable</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-3">Insists on seeing inside only once, very quickly</td>
                  <td className="p-3 text-slate-700">Hiding something - water damage, cracks, smell</td>
                  <td className="p-3 text-red-700 font-medium">Visit multiple times, different times of day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Shield className="w-6 h-6 text-blue-600" />
            Legal Red Flags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-900">Encumbrance Certificate Shows Loans/Mortgages</h4>
                  <p className="text-sm text-slate-700">Property has existing loans or is mortgaged to bank</p>
                  <div className="bg-white p-3 rounded border text-xs mt-2">
                    <p><strong className="text-red-700">Risk:</strong> Loan must be cleared before sale. If not cleared, bank can claim property.</p>
                    <p className="mt-1"><strong className="text-green-700">Safe approach:</strong> Seller clears loan BEFORE receiving full payment. Get NOC from bank.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-900">Title Not Clear for 30 Years Back</h4>
                  <p className="text-sm text-slate-700">Cannot verify ownership chain beyond 10-15 years</p>
                  <div className="bg-white p-3 rounded border text-xs mt-2">
                    <p><strong className="text-red-700">Risk:</strong> Some distant heir may claim ownership later.</p>
                    <p className="mt-1"><strong className="text-green-700">Safe approach:</strong> Demand 30-year clear title. If not available, walk away or get title insurance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-900">Property Not Registered with RERA (Under-Construction)</h4>
                  <p className="text-sm text-slate-700">Builder hasn't registered project with Real Estate Authority</p>
                  <div className="bg-white p-3 rounded border text-xs mt-2">
                    <p><strong className="text-red-700">Risk:</strong> No legal protection, delays common, builder can change terms.</p>
                    <p className="mt-1"><strong className="text-green-700">Safe approach:</strong> Buy only RERA-registered projects. Verify on official RERA website.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-900">Agricultural Land Being Sold as Residential Plot</h4>
                  <p className="text-sm text-slate-700">Land use not converted from agricultural to residential</p>
                  <div className="bg-white p-3 rounded border text-xs mt-2">
                    <p><strong className="text-red-700">Risk:</strong> Can't build house, illegal construction, municipal action, no services.</p>
                    <p className="mt-1"><strong className="text-green-700">Safe approach:</strong> Verify land use certificate, zoning, and conversion approval from authorities.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-900">Occupancy Certificate (OC) Not Available</h4>
                  <p className="text-sm text-slate-700">Builder completed construction but no OC from municipality</p>
                  <div className="bg-white p-3 rounded border text-xs mt-2">
                    <p><strong className="text-red-700">Risk:</strong> Property technically illegal to occupy, may not get home loan, resale difficulty.</p>
                    <p className="mt-1"><strong className="text-green-700">Safe approach:</strong> Don't buy without OC. If builder promises "OC coming soon", don't believe.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-900">Society Has Unpaid Dues or Legal Cases</h4>
                  <p className="text-sm text-slate-700">Housing society in legal battle or has large unpaid maintenance</p>
                  <div className="bg-white p-3 rounded border text-xs mt-2">
                    <p><strong className="text-red-700">Risk:</strong> You'll inherit the problem, special levies, amenities shut down.</p>
                    <p className="mt-1"><strong className="text-green-700">Safe approach:</strong> Get NOC from society, check their financial records, talk to committee members.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-900">Missing Approvals (Building Plan, Fire NOC, etc.)</h4>
                  <p className="text-sm text-slate-700">Construction done without proper municipal approvals</p>
                  <div className="bg-white p-3 rounded border text-xs mt-2">
                    <p><strong className="text-red-700">Risk:</strong> Municipal demolition risk, can't get loans, legal troubles.</p>
                    <p className="mt-1"><strong className="text-green-700">Safe approach:</strong> Verify ALL approvals: Building plan, fire NOC, environment clearance (if needed).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            Builder Red Flags (Under-Construction)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ No Past Projects Delivered</h4>
              <p className="text-sm text-slate-700">First-time builder or no completed projects</p>
              <p className="text-xs text-red-700 mt-2"><strong>Risk Level: EXTREME</strong> - Project abandonment risk very high</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Delays in Past Projects</h4>
              <p className="text-sm text-slate-700">Builder's previous projects delayed by 3-5 years</p>
              <p className="text-xs text-red-700 mt-2"><strong>Risk Level: HIGH</strong> - Expect similar delays in current project</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Negative Reviews Online</h4>
              <p className="text-sm text-slate-700">Multiple complaints on consumer forums about builder</p>
              <p className="text-xs text-red-700 mt-2"><strong>Risk Level: HIGH</strong> - Pattern of poor customer service and quality</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Unclear Possession Timeline</h4>
              <p className="text-sm text-slate-700">Builder gives vague dates like "within 3-4 years"</p>
              <p className="text-xs text-red-700 mt-2"><strong>Risk Level: MEDIUM</strong> - Lack of confidence or planning in completion</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Changes in Project Plan</h4>
              <p className="text-sm text-slate-700">Builder keeps modifying layout, amenities, or tower count</p>
              <p className="text-xs text-red-700 mt-2"><strong>Risk Level: MEDIUM</strong> - Financial or approval issues likely</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Asking for Cash Payment</h4>
              <p className="text-sm text-slate-700">Builder insists on part payment in cash</p>
              <p className="text-xs text-red-700 mt-2"><strong>Risk Level: EXTREME</strong> - Illegal, reduces your protection, walk away immediately</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ No Site Progress Visible</h4>
              <p className="text-sm text-slate-700">Project launched 2 years ago but minimal construction done</p>
              <p className="text-xs text-red-700 mt-2"><strong>Risk Level: HIGH</strong> - Builder may lack funds or approvals to proceed</p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Salesperson Overpromising</h4>
              <p className="text-sm text-slate-700">"Metro coming in 1 year", "Area will develop rapidly", etc.</p>
              <p className="text-xs text-red-700 mt-2"><strong>Risk Level: MEDIUM</strong> - Verify every claim independently from govt sources</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Flag className="w-6 h-6 text-purple-600" />
            Location Red Flags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded border-l-4 border-purple-600">
              <AlertTriangle className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Property Built on Wetland/Lake Bed</p>
                <p className="text-slate-700 text-xs mt-1">Flooding risk, foundation issues, legal problems. Verify land history.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded border-l-4 border-purple-600">
              <AlertTriangle className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Near High-Tension Power Lines or Mobile Towers</p>
                <p className="text-slate-700 text-xs mt-1">Health concerns, EMF radiation, resale difficulty, lower appreciation.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded border-l-4 border-purple-600">
              <AlertTriangle className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Property in Litigation-Prone Area</p>
                <p className="text-slate-700 text-xs mt-1">Many properties in area have ownership disputes. Talk to neighbors first.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded border-l-4 border-purple-600">
              <AlertTriangle className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">No Basic Infrastructure (Water, Roads, Electricity)</p>
                <p className="text-slate-700 text-xs mt-1">Builder promises "coming soon" but no concrete plans visible.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded border-l-4 border-purple-600">
              <AlertTriangle className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Declining Neighborhood</p>
                <p className="text-slate-700 text-xs mt-1">Many "For Sale" boards, businesses closing, people moving out.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded border-l-4 border-purple-600">
              <AlertTriangle className="w-5 h-5 text-purple-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Isolated Location (No Community Nearby)</p>
                <p className="text-slate-700 text-xs mt-1">Safety concerns, difficult to get tenants, poor resale value.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Red Flag Action Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-green-900 mb-3">When you spot a red flag:</p>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Document the red flag in writing</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Ask direct questions to seller/builder</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Get written clarification, not verbal promises</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Consult property lawyer about the specific red flag</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Research similar cases online/consumer forums</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">If multiple red flags (2+), walk away immediately</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Don't let sunk costs (token paid) cloud judgment</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Trust your instincts - if it feels wrong, it probably is</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white rounded border border-green-300">
            <p className="text-sm text-green-900 font-semibold">Golden Rule:</p>
            <p className="text-xs text-slate-700 mt-1">Better to walk away from 10 good deals than get stuck in 1 bad deal. Property is a huge commitment - be 100% sure.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RedFlags;
