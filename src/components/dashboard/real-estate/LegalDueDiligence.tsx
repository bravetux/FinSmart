import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, AlertTriangle, Scale, Shield, CheckCircle } from "lucide-react";

const LegalDueDiligence = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-3">Legal Due Diligence</h1>
        <p className="text-lg opacity-90">
          Critical legal checks before buying property - avoid expensive mistakes
        </p>
      </div>

      <Card className="border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            Why Legal Due Diligence is Critical
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">Avoid Fraud</h3>
              <p className="text-sm text-slate-600">
                10-15% properties in India have title disputes. Verify ownership to avoid losing money.
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-700 mb-2">Loan Approval</h3>
              <p className="text-sm text-slate-600">
                Banks reject loans for properties with legal issues. Clear title is mandatory.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-700 mb-2">Future Sale</h3>
              <p className="text-sm text-slate-600">
                Legal issues make property unsellable. Buyers will discover problems during their due diligence.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="w-5 h-5" />
            Essential Documents to Verify
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">1. Title Deed (Sale Deed)</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">What to Check:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>Owner Name:</strong> Matches seller's name on Aadhaar/PAN</li>
                  <li>✓ <strong>Property Description:</strong> Exact plot/flat number, area, boundaries</li>
                  <li>✓ <strong>Stamp Duty Paid:</strong> Receipt of stamp duty and registration charges</li>
                  <li>✓ <strong>Registration Date:</strong> Deed registered at Sub-Registrar office</li>
                  <li>✓ <strong>Encumbrances:</strong> No mortgage, lien, or other claims</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-700 mb-2">Red Flags:</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>✗ Unregistered sale agreement (not legally valid)</li>
                  <li>✗ Name mismatch between documents</li>
                  <li>✗ Multiple corrections/overwriting</li>
                  <li>✗ Missing registration number</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">2. Encumbrance Certificate (EC)</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">What It Is:</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Certificate showing all transactions of the property for last 13-30 years. 
                  Ensures no hidden mortgages, liens, or legal disputes.
                </p>
                <h4 className="font-medium mb-2">What to Check:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>Chain of Ownership:</strong> Clear lineage of all previous owners</li>
                  <li>✓ <strong>No Pending Loans:</strong> No mortgage registered against property</li>
                  <li>✓ <strong>No Court Cases:</strong> No litigation or disputes recorded</li>
                  <li>✓ <strong>All Sales Registered:</strong> Every transfer properly documented</li>
                  <li>✓ <strong>Verify for 30 Years:</strong> Get EC for maximum possible period</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-2">How to Obtain:</h4>
                <ol className="text-sm text-slate-600 space-y-1">
                  <li>1. Visit Sub-Registrar office where property is registered</li>
                  <li>2. Submit application with property details</li>
                  <li>3. Pay fee: ₹100-500 per document</li>
                  <li>4. Issued in 2-7 days</li>
                  <li>5. Online available in most states (e.g., igrsnet.gov.in)</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">3. Approved Building Plan</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">What to Verify:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>Municipal Approval:</strong> Plan sanctioned by local development authority</li>
                  <li>✓ <strong>Construction as per Plan:</strong> No unauthorized modifications</li>
                  <li>✓ <strong>FSI/FAR Compliance:</strong> Floor space index within limits</li>
                  <li>✓ <strong>Setback Rules:</strong> Margins from plot boundaries maintained</li>
                  <li>✓ <strong>Fire Safety Norms:</strong> Compliance for buildings {'>'} 15m height</li>
                  <li>✓ <strong>Parking Requirements:</strong> Adequate parking as per norms</li>
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-medium text-red-700 mb-2">Consequences of Non-Compliance:</h4>
                <ul className="text-sm text-red-600 space-y-1">
                  <li>• Municipal demolition notice</li>
                  <li>• Unable to get completion certificate</li>
                  <li>• Banks refuse loans</li>
                  <li>• Legal action and penalties</li>
                  <li>• Cannot sell or rent legally</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">4. Occupancy/Completion Certificate (OC/CC)</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">What It Is:</h4>
                <p className="text-sm text-slate-600 mb-3">
                  Certificate issued by municipal corporation after building inspection, 
                  confirming construction is as per approved plan and safe for occupation.
                </p>
                <h4 className="font-medium mb-2">Critical Points:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>Mandatory for New Buildings:</strong> Without OC, it's illegal to occupy</li>
                  <li>✓ <strong>Water & Electricity:</strong> Permanent connections require OC</li>
                  <li>✓ <strong>Loan Approval:</strong> Banks insist on OC for home loans</li>
                  <li>✓ <strong>Builder Responsibility:</strong> Builder should provide OC before possession</li>
                  <li>✓ <strong>Check Validity:</strong> OC should be for entire building, not partial</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium mb-2">If OC Not Available:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Get written commitment from builder with timeline</li>
                  <li>• Hold back 5-10% payment until OC received</li>
                  <li>• Avoid pre-2005 properties without OC (harder to obtain)</li>
                  <li>• Consider 10-15% discount for no-OC properties</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">5. Khata Certificate & Property Tax Receipts</h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">What to Check:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>✓ <strong>Khata/Mutation:</strong> Property registered in seller's name with municipal records</li>
                  <li>✓ <strong>Property Tax Paid:</strong> All taxes paid up to current year</li>
                  <li>✓ <strong>No Outstanding Dues:</strong> No pending water, electricity, or maintenance bills</li>
                  <li>✓ <strong>Property ID Number:</strong> Matches across all documents</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50 rounded">
                  <h4 className="font-medium text-sm mb-2">Urban Property (City/Town):</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Khata Extract (Bangalore)</li>
                    <li>• Property Card (Mumbai)</li>
                    <li>• Nakal (Delhi)</li>
                    <li>• Demand & Receipt (Chennai)</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <h4 className="font-medium text-sm mb-2">Rural/Agricultural Land:</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• 7/12 Extract (Maharashtra)</li>
                    <li>• ROR (Record of Rights)</li>
                    <li>• Patta (Tamil Nadu)</li>
                    <li>• Fard (North India)</li>
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
            <Scale className="w-5 h-5" />
            Additional Legal Verifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2">6. Power of Attorney (if applicable)</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>✓ Notarized and registered POA</li>
                  <li>✓ Specific for property sale (not general POA)</li>
                  <li>✓ Original owner signature verification</li>
                  <li>✓ Valid reason for POA (NRI, elderly, medical)</li>
                  <li>✓ POA holder identity proof</li>
                  <li className="text-red-600 font-medium">⚠️ Extra caution needed for POA transactions</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">7. Society Documents (for Apartments)</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>✓ Society Registration Certificate</li>
                  <li>✓ Share Certificate in seller's name</li>
                  <li>✓ NOC from Society for transfer</li>
                  <li>✓ Maintenance dues clearance</li>
                  <li>✓ Society bylaws and rules</li>
                  <li>✓ Pending litigations against society</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">8. Land Use Certificate</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>✓ Land use matches property type (residential/commercial)</li>
                  <li>✓ Conversion certificate (if agricultural to non-agricultural)</li>
                  <li>✓ Verify with municipal master plan</li>
                  <li>✓ No acquisition or reservation notice</li>
                  <li>✓ RERA registration (for under-construction)</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold mb-2">9. Court & Litigation Search</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>✓ Search property address in local courts</li>
                  <li>✓ Check for pending lawsuits</li>
                  <li>✓ Verify seller not declared insolvent</li>
                  <li>✓ No family disputes or partition cases</li>
                  <li>✓ Online court records check (e.g., ecourts.gov.in)</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Hire a Lawyer: When & How
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-2">Mandatory for:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• First-time property buyers</li>
                  <li>• High-value properties (₹50L+)</li>
                  <li>• Old properties (15+ years)</li>
                  <li>• Properties with multiple previous owners</li>
                  <li>• Agricultural/land purchases</li>
                  <li>• POA transactions</li>
                  <li>• Any legal complications</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Services Provided:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Title search (30-year chain)</li>
                  <li>• Document verification</li>
                  <li>• Legal opinion report</li>
                  <li>• Draft/review sale agreement</li>
                  <li>• Coordinate with registration</li>
                  <li>• Attend registration process</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2">How to Choose:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>✓ Specialized in property law</li>
                  <li>✓ Local expertise (same city/state)</li>
                  <li>✓ Bar Council registered</li>
                  <li>✓ 5+ years experience</li>
                  <li>✓ Positive references</li>
                  <li>✓ Clear fee structure</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold mb-2">Typical Costs:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Title search: ₹5,000-15,000</li>
                  <li>• Legal opinion: ₹10,000-25,000</li>
                  <li>• Full service: ₹25,000-1,00,000</li>
                  <li>• Usually 0.5-1% of property value</li>
                  <li>• Worth every rupee for peace of mind</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Legal Due Diligence Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-3">Step-by-Step Process:</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>1. Seller Verification:</strong> Aadhaar, PAN, address proof match with title deed</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>2. Title Deed:</strong> Original registered sale deed with seller as owner</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>3. Encumbrance Certificate:</strong> Obtain EC for 30 years, verify chain of ownership</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>4. Approved Plan:</strong> Sanctioned building plan from municipal authority</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>5. Completion Certificate:</strong> OC/CC for building (if post-2005 construction)</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>6. Khata/Tax Records:</strong> Property registered, all taxes paid till date</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>7. Society NOC:</strong> Share certificate, NOC, maintenance clearance (apartments)</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>8. Land Use Certificate:</strong> Confirm residential/commercial land use</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>9. Court Search:</strong> No pending litigation on property or seller</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>10. Lawyer Opinion:</strong> Get written legal opinion from property lawyer</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>11. Bank Valuation:</strong> Bank's technical and legal verification (if loan)</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span><strong>12. Sale Agreement:</strong> Review draft agreement before signing</span>
                </label>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">Never Buy If:</h3>
              <ul className="text-sm text-red-600 space-y-1">
                <li>✗ Seller refuses to provide any document</li>
                <li>✗ Encumbrance certificate shows disputes/mortgages</li>
                <li>✗ Name mismatch across documents</li>
                <li>✗ No occupancy certificate (post-2005 building)</li>
                <li>✗ Property under litigation</li>
                <li>✗ Unapproved construction/violations</li>
                <li>✗ Lawyer advises against purchase</li>
              </ul>
              <p className="mt-3 text-sm font-semibold">
                Better to lose ₹50,000 in due diligence than ₹50 lakhs in a bad property!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LegalDueDiligence;
