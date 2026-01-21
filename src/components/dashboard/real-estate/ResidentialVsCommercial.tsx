import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Scale, TrendingUp, AlertCircle } from "lucide-react";

const ResidentialVsCommercial = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-3">Residential vs Commercial Real Estate</h1>
        <p className="text-lg opacity-90">
          Comprehensive comparison to help you choose the right investment type
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5" />
            Quick Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left p-3">Parameter</th>
                  <th className="text-left p-3">Residential</th>
                  <th className="text-left p-3">Commercial</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Rental Yield</td>
                  <td className="p-3">2-3% (metros)<br/>3-4% (Tier-2)</td>
                  <td className="p-3 text-green-600 font-medium">6-9%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Capital Appreciation</td>
                  <td className="p-3 text-green-600 font-medium">8-12%</td>
                  <td className="p-3">6-8%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Lease Duration</td>
                  <td className="p-3">11 months (typical)</td>
                  <td className="p-3 text-green-600 font-medium">3-9 years</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Stamp Duty</td>
                  <td className="p-3 text-green-600 font-medium">5-7%</td>
                  <td className="p-3">7-10%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">GST Applicable</td>
                  <td className="p-3 text-green-600 font-medium">No (resale)<br/>GST on under-construction</td>
                  <td className="p-3">Yes (Rental income 18% GST)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Tenant Type</td>
                  <td className="p-3">Individuals/Families</td>
                  <td className="p-3">Businesses/Corporates</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Liquidity</td>
                  <td className="p-3 text-green-600 font-medium">Higher</td>
                  <td className="p-3">Lower</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Maintenance</td>
                  <td className="p-3">Owner responsibility (mostly)</td>
                  <td className="p-3 text-green-600 font-medium">Tenant responsibility (usually)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Rental Escalation</td>
                  <td className="p-3">5-10% annually (negotiable)</td>
                  <td className="p-3 text-green-600 font-medium">10-15% every 3 years (contractual)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Home Loan Interest</td>
                  <td className="p-3 text-green-600 font-medium">Up to ₹2L deduction (Sec 24b)</td>
                  <td className="p-3">Full deduction as business expense</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Entry Cost</td>
                  <td className="p-3 text-green-600 font-medium">Lower (₹30L-2Cr)</td>
                  <td className="p-3">Higher (₹50L-5Cr+)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              Residential Real Estate
            </CardTitle>
            <CardDescription>Ideal for: First-time investors, capital appreciation focus</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-green-600">✓ Advantages</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><strong>1. Higher Liquidity:</strong> Easier to sell, larger buyer pool</li>
                <li><strong>2. Better Appreciation:</strong> 8-12% annually in growing areas</li>
                <li><strong>3. Lower Entry Cost:</strong> Starts from ₹30-40 lakhs</li>
                <li><strong>4. Emotional Appeal:</strong> Easier to market to families</li>
                <li><strong>5. Multiple Uses:</strong> Can live in, rent out, or sell</li>
                <li><strong>6. Tax Benefits:</strong> Home loan deductions, HRA exemption</li>
                <li><strong>7. Wider Choice:</strong> More options across price ranges</li>
                <li><strong>8. Simpler Regulations:</strong> Less complex documentation</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-red-600">✗ Disadvantages</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><strong>1. Lower Rental Yield:</strong> Only 2-3% in metros</li>
                <li><strong>2. Tenant Turnover:</strong> Frequent changes (11-month leases)</li>
                <li><strong>3. Maintenance Burden:</strong> Owner typically handles repairs</li>
                <li><strong>4. Rental Income Uncertainty:</strong> Vacancy periods common</li>
                <li><strong>5. Furnishing Costs:</strong> May need to furnish for better rent</li>
                <li><strong>6. Society Restrictions:</strong> Rules on tenants, renovations</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Best For:</h3>
              <ul className="text-sm space-y-1 text-slate-700">
                <li>• First-time real estate investors</li>
                <li>• Those prioritizing capital appreciation</li>
                <li>• Planning to use property in future</li>
                <li>• Looking for easier exit options</li>
                <li>• Limited investment capital (₹30L-1Cr)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-green-600" />
              Commercial Real Estate
            </CardTitle>
            <CardDescription>Ideal for: High net-worth investors, income generation focus</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-green-600">✓ Advantages</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><strong>1. Higher Rental Yield:</strong> 6-9% returns</li>
                <li><strong>2. Long Lease Terms:</strong> 3-9 years with lock-in</li>
                <li><strong>3. Corporate Tenants:</strong> Reliable rent payments</li>
                <li><strong>4. Tenant Maintenance:</strong> Most repairs handled by tenant</li>
                <li><strong>5. Rental Escalation:</strong> Contractual 10-15% increase</li>
                <li><strong>6. No Furnishing:</strong> Bare shell or tenant fit-out</li>
                <li><strong>7. GST Input Credit:</strong> If you're a business</li>
                <li><strong>8. Security Deposits:</strong> 6-12 months upfront</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-red-600">✗ Disadvantages</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><strong>1. Higher Entry Cost:</strong> Minimum ₹50L-1Cr</li>
                <li><strong>2. Lower Liquidity:</strong> Smaller buyer pool</li>
                <li><strong>3. GST on Rent:</strong> 18% GST applicable</li>
                <li><strong>4. Higher Stamp Duty:</strong> 7-10% vs 5-7%</li>
                <li><strong>5. Business Cycle Risk:</strong> Affected by economic downturns</li>
                <li><strong>6. Location Critical:</strong> Must be in business districts</li>
                <li><strong>7. Vacancy Risk:</strong> Longer time to find new tenant</li>
                <li><strong>8. Complex Agreements:</strong> Detailed lease negotiations</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Best For:</h3>
              <ul className="text-sm space-y-1 text-slate-700">
                <li>• High net-worth individuals (₹1Cr+ capital)</li>
                <li>• Those seeking regular income</li>
                <li>• Long-term investment horizon (10+ years)</li>
                <li>• Business owners (GST credit benefit)</li>
                <li>• Can handle lower liquidity</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Financial Comparison Example
          </CardTitle>
          <CardDescription>₹1 Crore investment scenario</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-600">Residential Property</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-slate-50">
                  <span>Property Value:</span>
                  <span className="font-medium">₹1,00,00,000</span>
                </div>
                <div className="flex justify-between p-2">
                  <span>Monthly Rent (2.5%):</span>
                  <span className="font-medium">₹20,833</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50">
                  <span>Annual Rental Income:</span>
                  <span className="font-medium">₹2,50,000</span>
                </div>
                <div className="flex justify-between p-2">
                  <span>Property Tax + Maintenance:</span>
                  <span className="text-red-600">-₹50,000</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50">
                  <span>Vacancy Period (1 month):</span>
                  <span className="text-red-600">-₹20,000</span>
                </div>
                <div className="flex justify-between p-2 bg-blue-100 font-semibold">
                  <span>Net Rental Yield:</span>
                  <span className="text-blue-600">1.8% (₹1,80,000)</span>
                </div>
                <div className="flex justify-between p-2">
                  <span>Capital Appreciation (10%):</span>
                  <span className="text-green-600 font-medium">+₹10,00,000</span>
                </div>
                <div className="flex justify-between p-2 bg-green-100 font-semibold">
                  <span>Total Returns (Year 1):</span>
                  <span className="text-green-600">11.8%</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-green-600">Commercial Property</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-slate-50">
                  <span>Property Value:</span>
                  <span className="font-medium">₹1,00,00,000</span>
                </div>
                <div className="flex justify-between p-2">
                  <span>Monthly Rent (7%):</span>
                  <span className="font-medium">₹58,333</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50">
                  <span>Annual Rental Income:</span>
                  <span className="font-medium">₹7,00,000</span>
                </div>
                <div className="flex justify-between p-2">
                  <span>Property Tax:</span>
                  <span className="text-red-600">-₹30,000</span>
                </div>
                <div className="flex justify-between p-2 bg-slate-50">
                  <span>GST on Rent (18%):</span>
                  <span className="text-red-600">-₹1,26,000</span>
                </div>
                <div className="flex justify-between p-2 bg-green-100 font-semibold">
                  <span>Net Rental Yield:</span>
                  <span className="text-green-600">5.4% (₹5,44,000)</span>
                </div>
                <div className="flex justify-between p-2">
                  <span>Capital Appreciation (7%):</span>
                  <span className="text-green-600 font-medium">+₹7,00,000</span>
                </div>
                <div className="flex justify-between p-2 bg-green-100 font-semibold">
                  <span>Total Returns (Year 1):</span>
                  <span className="text-green-600">12.4%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-slate-600">
              <strong>Note:</strong> Commercial shows higher immediate returns due to rental income, while residential may provide better long-term appreciation. GST can be claimed as input credit if you're a registered business.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Decision Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Choose Residential If:</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>✓ First-time real estate investor</li>
                <li>✓ Investment capital: ₹30L-1Cr</li>
                <li>✓ Want better capital appreciation (8-12%)</li>
                <li>✓ Need flexibility to live in future</li>
                <li>✓ Prefer higher liquidity for exit</li>
                <li>✓ Comfortable with lower rental yield (2-3%)</li>
                <li>✓ Want simpler tax and legal compliance</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Choose Commercial If:</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>✓ Have ₹50L+ investment capital</li>
                <li>✓ Primary goal is rental income (6-9% yield)</li>
                <li>✓ Prefer stable, long-term tenants</li>
                <li>✓ Can handle lower liquidity</li>
                <li>✓ Comfortable with business cycle risks</li>
                <li>✓ Have GST registration (input credit benefit)</li>
                <li>✓ 10+ year investment horizon</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Hybrid Strategy:</h3>
              <p className="text-sm text-slate-700 mb-2">
                Many investors build a balanced portfolio:
              </p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• <strong>Primary Residence:</strong> Own home to live in</li>
                <li>• <strong>1-2 Residential:</strong> For capital appreciation + moderate rent</li>
                <li>• <strong>1 Commercial:</strong> For higher rental income</li>
                <li>• <strong>REITs/Fractional:</strong> For diversification + liquidity</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResidentialVsCommercial;
