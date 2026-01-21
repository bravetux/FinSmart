import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

const BuilderResearch = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-3">Builder & Developer Research</h1>
        <p className="text-lg opacity-90">
          How to evaluate and choose a reliable builder for your property purchase
        </p>
      </div>

      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600">
            <AlertCircle className="w-5 h-5" />
            Why Builder Research is Critical
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold mb-2">Timely Delivery</h3>
              <p className="text-sm text-slate-600">
                Poor builders delay projects by 2-5 years. Your money locked + rent paid + stress.
              </p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2">Quality Construction</h3>
              <p className="text-sm text-slate-600">
                Substandard quality leads to seepage, cracks, and expensive repairs within years.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold mb-2">Legal Compliance</h3>
              <p className="text-sm text-slate-600">
                Unreliable builders skip approvals, making properties unsellable and loan-ineligible.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Builder Evaluation Criteria
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">1. Track Record & Experience</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">What to Check:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>Years in Business:</strong> Minimum 10+ years preferred</li>
                  <li>✓ <strong>Number of Projects:</strong> Completed at least 5+ projects</li>
                  <li>✓ <strong>Project Scale:</strong> Similar size/type to what you're buying</li>
                  <li>✓ <strong>Geographic Presence:</strong> Active in the same city/region</li>
                  <li>✓ <strong>Awards & Recognition:</strong> Industry awards, certifications</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-green-50 rounded">
                  <h4 className="font-medium text-sm mb-2">Tier-1 Builders (Safest):</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Godrej Properties</li>
                    <li>• DLF</li>
                    <li>• Prestige Group</li>
                    <li>• Sobha Limited</li>
                    <li>• Brigade Group</li>
                    <li>• Lodha Developers</li>
                    <li>• L&T Realty</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <h4 className="font-medium text-sm mb-2">Check Points:</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Listed on stock exchange</li>
                    <li>• Credit rating (CRISIL/ICRA)</li>
                    <li>• Financial stability</li>
                    <li>• Debt levels (not overleveraged)</li>
                    <li>• Transparent operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">2. Delivery Track Record</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">Critical Metrics:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>On-Time Delivery Rate:</strong> Check last 5 projects</li>
                  <li>✓ <strong>Average Delay:</strong> Good builders: 0-6 months, Average: 6-18 months, Bad: 2-5 years</li>
                  <li>✓ <strong>Project Completion:</strong> No abandoned or stalled projects</li>
                  <li>✓ <strong>Occupancy Certificate:</strong> All projects have received OC</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-2">How to Verify:</h4>
                <ol className="text-sm text-slate-600 space-y-1">
                  <li>1. Visit builder's completed projects (2-3 year old buildings)</li>
                  <li>2. Talk to existing residents about quality & experience</li>
                  <li>3. Check Google reviews & housing forums (99acres, MagicBricks)</li>
                  <li>4. Verify possession dates from RERA website</li>
                  <li>5. Check if OC/CC issued for previous projects</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">3. Financial Health</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">Why It Matters:</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Financially weak builders may abandon projects mid-way, leaving buyers stranded.
                </p>
                <h4 className="font-medium mb-2">What to Check:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>Credit Rating:</strong> AA or above from CRISIL/ICRA/CARE</li>
                  <li>✓ <strong>Debt-to-Equity Ratio:</strong> Should be below 1.5</li>
                  <li>✓ <strong>Ongoing Projects:</strong> Not too many (overextension risk)</li>
                  <li>✓ <strong>Bank Tie-ups:</strong> Approved by major banks for home loans</li>
                  <li>✓ <strong>No Insolvency:</strong> Not under IBC/NCLT proceedings</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium mb-2">Where to Check:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Company website (investor relations section)</li>
                  <li>• BSE/NSE (if listed company)</li>
                  <li>• Ministry of Corporate Affairs (MCA portal)</li>
                  <li>• Credit rating agency websites</li>
                  <li>• Business news and reports</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">4. Legal Compliance & Approvals</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">Mandatory Registrations:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>RERA Registration:</strong> Every project must be RERA registered (mandatory since 2016)</li>
                  <li>✓ <strong>Company Registration:</strong> Registered with RoC, valid GST</li>
                  <li>✓ <strong>Previous Litigations:</strong> Check court cases against builder</li>
                  <li>✓ <strong>Consumer Complaints:</strong> Check National Consumer Forum records</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium mb-2">Verify on RERA Website:</h4>
                <ol className="text-sm text-slate-600 space-y-1">
                  <li>1. Visit state RERA website (e.g., maharera.mahaonline.gov.in)</li>
                  <li>2. Search project by name or RERA number</li>
                  <li>3. Check project status: "Registered" and "Active"</li>
                  <li>4. Verify completion date committed</li>
                  <li>5. Check for complaints filed by buyers</li>
                  <li>6. Download all uploaded documents</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">5. Construction Quality</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">How to Assess:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>Visit Completed Projects:</strong> Check 2-3 year old buildings for quality</li>
                  <li>✓ <strong>Talk to Residents:</strong> Ask about seepage, cracks, finishing quality</li>
                  <li>✓ <strong>Inspect Sample Flat:</strong> Check flooring, fittings, paint, plumbing</li>
                  <li>✓ <strong>Structural Engineer:</strong> Hire one for major purchase (₹10-20K)</li>
                  <li>✓ <strong>Specifications:</strong> Verify promised brands/materials actually used</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-green-50 rounded">
                  <h4 className="font-medium text-sm mb-2">Good Signs:</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>✓ No seepage/dampness in old projects</li>
                    <li>✓ Quality fittings and fixtures</li>
                    <li>✓ Well-maintained common areas</li>
                    <li>✓ Branded materials used</li>
                    <li>✓ Happy existing residents</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 rounded">
                  <h4 className="font-medium text-sm mb-2">Red Flags:</h4>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>✗ Cracks in walls/ceilings</li>
                    <li>✗ Seepage within 1-2 years</li>
                    <li>✗ Poor plumbing/drainage</li>
                    <li>✗ Substandard materials</li>
                    <li>✗ Complaints about builder quality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-indigo-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">6. Customer Service & After-Sales</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">What to Check:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>Defect Liability Period:</strong> Minimum 1 year warranty</li>
                  <li>✓ <strong>Complaint Redressal:</strong> Dedicated helpline/portal</li>
                  <li>✓ <strong>Response Time:</strong> Issues fixed within 7-15 days</li>
                  <li>✓ <strong>Handover Quality:</strong> Complete finishing, all promised amenities</li>
                  <li>✓ <strong>Documentation:</strong> All docs provided on time</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-2">Test Customer Service:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Call their customer care - check responsiveness</li>
                  <li>• Email queries - see response time</li>
                  <li>• Visit existing projects - talk to residents</li>
                  <li>• Check online reviews on housing portals</li>
                  <li>• Social media presence and response</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Builder Reputation Sources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Online Resources:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• <strong>RERA Website:</strong> Official project details, complaints</li>
                  <li>• <strong>99acres/MagicBricks:</strong> User reviews and ratings</li>
                  <li>• <strong>Google Reviews:</strong> Search "Builder Name + Reviews"</li>
                  <li>• <strong>Consumer Forums:</strong> Complaint history</li>
                  <li>• <strong>Social Media:</strong> Facebook groups, Twitter mentions</li>
                  <li>• <strong>News Articles:</strong> Search builder name on Google News</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">Offline Research:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Visit 2-3 completed projects</li>
                  <li>• Talk to 5-10 existing flat owners</li>
                  <li>• Meet society office bearers</li>
                  <li>• Consult local property dealers</li>
                  <li>• Check with bank loan officers</li>
                  <li>• Speak with competing builders</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2">Key Questions to Ask Existing Owners:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>1. Was possession on time?</li>
                  <li>2. How long did it take to get OC?</li>
                  <li>3. Any quality issues after moving in?</li>
                  <li>4. How was builder's response to complaints?</li>
                  <li>5. Were all promised amenities delivered?</li>
                  <li>6. Any hidden costs or surprise charges?</li>
                  <li>7. Would you buy from this builder again?</li>
                  <li>8. Any legal/documentation issues?</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold mb-2">Warning Signs:</h3>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>✗ Multiple negative reviews online</li>
                  <li>✗ Unhappy residents in completed projects</li>
                  <li>✗ Stalled or abandoned projects</li>
                  <li>✗ Litigation against builder</li>
                  <li>✗ Poor ratings on housing portals</li>
                  <li>✗ Financial distress news</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Builder Tier Classification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-green-700 mb-2">Tier-1: Premium Builders (Lowest Risk)</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium mb-2">Characteristics:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• 20+ years experience</li>
                    <li>• Listed on stock exchange</li>
                    <li>• AA+ credit rating</li>
                    <li>• Pan-India presence</li>
                    <li>• On-time delivery record</li>
                    <li>• Premium pricing (10-20% higher)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Examples:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• DLF, Godrej Properties</li>
                    <li>• Prestige, Sobha</li>
                    <li>• Brigade, Lodha</li>
                    <li>• L&T Realty</li>
                    <li>• Risk: Very Low</li>
                    <li>• Premium: Worth paying</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-700 mb-2">Tier-2: Established Regional Builders (Moderate Risk)</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium mb-2">Characteristics:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• 10-20 years experience</li>
                    <li>• Strong regional presence</li>
                    <li>• Good credit rating (A/AA)</li>
                    <li>• 10+ completed projects</li>
                    <li>• Reasonable track record</li>
                    <li>• Competitive pricing</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Evaluation:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Deep due diligence required</li>
                    <li>• Visit completed projects</li>
                    <li>• Check delivery timelines</li>
                    <li>• Verify financial health</li>
                    <li>• Risk: Moderate</li>
                    <li>• Can be good value</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-yellow-700 mb-2">Tier-3: New/Small Builders (High Risk)</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-medium mb-2">Characteristics:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Less than 10 years</li>
                    <li>• Limited track record</li>
                    <li>• Few completed projects</li>
                    <li>• Local/micro-market presence</li>
                    <li>• Attractive pricing (20-30% lower)</li>
                    <li>• Financial uncertainty</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Caution:</p>
                  <ul className="text-red-600 space-y-1">
                    <li>• High delay risk</li>
                    <li>• Quality concerns</li>
                    <li>• May not complete project</li>
                    <li>• Avoid for primary residence</li>
                    <li>• Risk: Very High</li>
                    <li>• Only if heavily discounted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Builder Research Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold mb-3">Complete Evaluation Process:</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Years in business (min 10+ preferred)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Number of completed projects (min 5+)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>On-time delivery track record verified</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Visited 2-3 completed projects</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Spoken to 5-10 existing flat owners</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>RERA registration verified</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Financial health checked (credit rating, debt levels)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>No major litigation or consumer complaints</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Online reviews checked (3+ platforms)</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Construction quality inspected</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Customer service responsiveness tested</span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span>Bank approval for home loans confirmed</span>
              </label>
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-700 mb-2">Final Decision:</h3>
            <p className="text-sm text-slate-600">
              <strong>Pay 10-20% premium for Tier-1 builder rather than risking Tier-3 builder.</strong> The peace of mind, 
              timely possession, and quality are worth it. Your money will be locked for 2-3 years minimum - choose wisely!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BuilderResearch;
