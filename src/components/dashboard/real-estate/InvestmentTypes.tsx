import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Landmark, Target, TrendingUp, Shield } from "lucide-react";

const InvestmentTypes = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-3">Real Estate Investment Types</h1>
        <p className="text-lg opacity-90">
          Understanding different real estate investment options and their objectives
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Investment Objectives
          </CardTitle>
          <CardDescription>Define your goals before investing in real estate</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Primary Residence</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Own home to live in</li>
                <li>• Build equity over time</li>
                <li>• Tax benefits (HRA exemption, home loan deduction)</li>
                <li>• No rental income but saves rent</li>
                <li>• Long-term appreciation</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Rental Income</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Regular monthly cash flow</li>
                <li>• Rental yield: 2-4% in metros, 3-6% in Tier-2</li>
                <li>• Tenant management required</li>
                <li>• Property maintenance costs</li>
                <li>• Rental income taxable</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Capital Appreciation</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Long-term value growth</li>
                <li>• Historical: 8-12% annually in good locations</li>
                <li>• Location is most critical factor</li>
                <li>• 5+ year holding period recommended</li>
                <li>• Market cycles affect returns</li>
              </ul>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold mb-2">Portfolio Diversification</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Hedge against inflation</li>
                <li>• Low correlation with equity markets</li>
                <li>• Tangible asset ownership</li>
                <li>• Combines rental yield + appreciation</li>
                <li>• 15-25% allocation in portfolio</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Types of Real Estate Investments
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">1. Residential Real Estate</h3>
              <p className="text-sm text-slate-600 mb-3">
                Properties designed for living purposes
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Apartments/Flats</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Most liquid option</li>
                    <li>• Lower maintenance</li>
                    <li>• Society amenities</li>
                    <li>• Monthly maintenance charges</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Independent Houses</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Complete ownership</li>
                    <li>• No society constraints</li>
                    <li>• Higher maintenance</li>
                    <li>• Better land appreciation</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Villas/Row Houses</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Premium segment</li>
                    <li>• Gated community benefits</li>
                    <li>• Higher investment</li>
                    <li>• Limited rental demand</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">2. Commercial Real Estate</h3>
              <p className="text-sm text-slate-600 mb-3">
                Properties for business purposes
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Office Spaces</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Higher rental yields (6-9%)</li>
                    <li>• Long-term leases (3-9 years)</li>
                    <li>• Corporate tenants</li>
                    <li>• Higher entry cost</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Retail Shops</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Location critical</li>
                    <li>• High footfall areas</li>
                    <li>• Rental escalation clauses</li>
                    <li>• Business cycle dependent</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Warehouses</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Growing e-commerce demand</li>
                    <li>• Lower per sq ft cost</li>
                    <li>• Outskirt locations</li>
                    <li>• Industrial tenants</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">3. Land/Plots</h3>
              <p className="text-sm text-slate-600 mb-3">
                Vacant land for future development
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Agricultural Land</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Lower cost per acre</li>
                    <li>• Potential for conversion</li>
                    <li>• Tax implications on sale</li>
                    <li>• Limited liquidity</li>
                    <li>• Legal complexities</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Residential Plots</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Build as per requirement</li>
                    <li>• High appreciation potential</li>
                    <li>• No rental income</li>
                    <li>• Holding costs (property tax)</li>
                    <li>• Zoning regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">4. Alternative Real Estate Investments</h3>
              <p className="text-sm text-slate-600 mb-3">
                Indirect real estate exposure
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">REITs</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Stock market listed</li>
                    <li>• Min investment: ₹10K-50K</li>
                    <li>• High liquidity</li>
                    <li>• 90% income distributed</li>
                    <li>• Professional management</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Fractional Ownership</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Own part of premium property</li>
                    <li>• Lower entry (₹25L-50L)</li>
                    <li>• Platform managed</li>
                    <li>• Exit via platform or other investors</li>
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 rounded">
                  <h4 className="font-medium mb-2">Real Estate Funds</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• AIF Category II</li>
                    <li>• Min: ₹1 Crore</li>
                    <li>• Institutional grade assets</li>
                    <li>• 3-5 year lock-in</li>
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
            <TrendingUp className="w-5 h-5" />
            Expected Returns Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Investment Type</th>
                  <th className="text-left p-3">Rental Yield</th>
                  <th className="text-left p-3">Capital Appreciation</th>
                  <th className="text-left p-3">Liquidity</th>
                  <th className="text-left p-3">Min Investment</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium">Residential Flat</td>
                  <td className="p-3">2-3%</td>
                  <td className="p-3">8-10%</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">₹30L - ₹2Cr</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Commercial Office</td>
                  <td className="p-3">6-9%</td>
                  <td className="p-3">6-8%</td>
                  <td className="p-3">Low</td>
                  <td className="p-3">₹50L - ₹5Cr</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Retail Shop</td>
                  <td className="p-3">5-8%</td>
                  <td className="p-3">7-9%</td>
                  <td className="p-3">Low-Medium</td>
                  <td className="p-3">₹40L - ₹3Cr</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">Plots</td>
                  <td className="p-3">0%</td>
                  <td className="p-3">10-15%</td>
                  <td className="p-3">Low</td>
                  <td className="p-3">₹20L - ₹1Cr</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium">REITs</td>
                  <td className="p-3">5-7%</td>
                  <td className="p-3">4-6%</td>
                  <td className="p-3">High</td>
                  <td className="p-3">₹10K - ₹50K</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Fractional</td>
                  <td className="p-3">4-6%</td>
                  <td className="p-3">6-8%</td>
                  <td className="p-3">Medium</td>
                  <td className="p-3">₹25L - ₹50L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Key Considerations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold">Before You Invest:</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Define clear investment objectives</li>
                <li>✓ Assess your investment horizon (5+ years recommended)</li>
                <li>✓ Consider liquidity needs</li>
                <li>✓ Evaluate financing options and costs</li>
                <li>✓ Factor in additional costs (stamp duty, registration, etc.)</li>
                <li>✓ Understand tax implications</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Investment Mix Strategy:</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• <strong>Primary Residence:</strong> First priority if renting</li>
                <li>• <strong>REITs/Fractional:</strong> Start with ₹25L-50L for exposure</li>
                <li>• <strong>Second Property:</strong> Only after emergency fund + other goals</li>
                <li>• <strong>Commercial:</strong> For higher rental yield with higher capital</li>
                <li>• <strong>Plots:</strong> Long-term appreciation play (10+ years)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestmentTypes;
