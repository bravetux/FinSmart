import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, Scale, FileText } from "lucide-react";

const PropertyValuation = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-3">Property Valuation Methods</h1>
        <p className="text-lg opacity-90">
          Learn how to accurately assess property value before buying
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5" />
            Why Property Valuation Matters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Avoid Overpaying</h3>
              <p className="text-sm text-slate-600">
                Ensure you're paying fair market value, not inflated developer/seller prices
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">Negotiate Better</h3>
              <p className="text-sm text-slate-600">
                Data-backed valuation gives you negotiating power to get 5-10% discount
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Loan Approval</h3>
              <p className="text-sm text-slate-600">
                Banks sanction loans based on property valuation, not asking price
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Valuation Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">1. Comparative Market Analysis (CMA)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Most common method: Compare with similar properties sold recently in the same area
            </p>
            
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">How It Works:</h4>
                <ol className="text-sm text-slate-600 space-y-1">
                  <li>1. Find 3-5 similar properties (comparable "comps") sold in last 3-6 months</li>
                  <li>2. Ensure they're within 500m radius, similar size, age, amenities</li>
                  <li>3. Calculate average price per sq ft</li>
                  <li>4. Adjust for differences (floor, facing, condition, amenities)</li>
                  <li>5. Apply adjustment to get estimated value</li>
                </ol>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium mb-2">Example Calculation:</h4>
                <div className="text-sm space-y-2">
                  <p className="font-medium">Target Property: 1000 sq ft, 3 BHK, 5th floor</p>
                  <table className="w-full mt-2">
                    <thead className="text-xs">
                      <tr className="border-b">
                        <th className="text-left p-1">Comp</th>
                        <th className="text-left p-1">Sold Price</th>
                        <th className="text-left p-1">Size</th>
                        <th className="text-left p-1">₹/sq ft</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b">
                        <td className="p-1">A: 4th floor</td>
                        <td className="p-1">₹65L</td>
                        <td className="p-1">1000 sq ft</td>
                        <td className="p-1">₹6,500</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1">B: 7th floor</td>
                        <td className="p-1">₹68L</td>
                        <td className="p-1">1000 sq ft</td>
                        <td className="p-1">₹6,800</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1">C: 5th floor</td>
                        <td className="p-1">₹67L</td>
                        <td className="p-1">1000 sq ft</td>
                        <td className="p-1">₹6,700</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-2">Average: ₹6,667/sq ft × 1000 sq ft = <strong className="text-blue-600">₹66.67 Lakhs</strong></p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-2">Adjustment Factors:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Add Value (+):</p>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Higher floor: +2-5%</li>
                      <li>• Corner flat: +3-5%</li>
                      <li>• Better view: +2-3%</li>
                      <li>• Vastu compliant: +2-3%</li>
                      <li>• Renovated/modern: +5-10%</li>
                      <li>• Better amenities: +3-5%</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Reduce Value (-):</p>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Ground floor: -5-10%</li>
                      <li>• Road facing/noisy: -3-5%</li>
                      <li>• Older property: -5-15%</li>
                      <li>• Needs repair: -10-20%</li>
                      <li>• No parking: -5-8%</li>
                      <li>• Legal issues: -15-30%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">2. Income/Investment Method</h3>
            <p className="text-sm text-slate-600 mb-3">
              Used for rental properties: Value based on income generation potential
            </p>
            
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">Formula:</h4>
                <div className="text-sm space-y-2">
                  <p className="font-mono bg-white p-2 rounded">
                    Property Value = Annual Rental Income / Expected Rental Yield (%)
                  </p>
                  <p className="text-slate-600">Or</p>
                  <p className="font-mono bg-white p-2 rounded">
                    Value = Monthly Rent × 12 × Rent Multiplier
                  </p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium mb-2">Example:</h4>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>Property rents for: <strong>₹25,000/month</strong></p>
                  <p>Annual rental income: ₹25,000 × 12 = <strong>₹3,00,000</strong></p>
                  <p>Expected rental yield in area: <strong>3%</strong></p>
                  <p className="pt-2 border-t">
                    Estimated Value = ₹3,00,000 / 0.03 = <strong className="text-green-600">₹1 Crore</strong>
                  </p>
                  <p className="text-xs">Alternatively: ₹25,000 × 400 (multiplier for 3% yield) = ₹1 Cr</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium mb-2">Typical Rent Multipliers by City:</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Mumbai: 350-450 (2-2.5% yield)</li>
                      <li>• Bangalore: 350-400 (2.5-3% yield)</li>
                      <li>• Delhi NCR: 300-350 (3-3.5% yield)</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Pune: 250-300 (3.5-4% yield)</li>
                      <li>• Hyderabad: 250-300 (3.5-4% yield)</li>
                      <li>• Tier-2 cities: 200-250 (4-5% yield)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">3. Ready Reckoner Rate (Circle Rate)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Government-mandated minimum property value for stamp duty calculation
            </p>
            
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">Key Points:</h4>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Set by state government revenue department</li>
                  <li>• Updated annually (usually April)</li>
                  <li>• Varies by locality, road width, type of property</li>
                  <li>• Stamp duty = Higher of (transaction value OR circle rate)</li>
                  <li>• Typically 20-40% lower than actual market rates</li>
                  <li>• Used as base reference, not accurate market value</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium mb-2">How to Use:</h4>
                <ol className="text-sm text-slate-600 space-y-1">
                  <li>1. Check official state website (e.g., igr.up.gov.in for UP)</li>
                  <li>2. Enter locality, property type, area</li>
                  <li>3. Circle rate gives you floor price</li>
                  <li>4. Market rate typically 1.3-1.5x of circle rate</li>
                  <li>5. Use as negotiation starting point</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-lg mb-3">4. Cost Method (for New/Under-Construction)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Calculate based on land value + construction cost
            </p>
            
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h4 className="font-medium mb-2">Formula:</h4>
                <div className="text-sm space-y-2">
                  <p className="font-mono bg-white p-2 rounded">
                    Property Value = Land Value + (Built-up Area × Construction Cost/sq ft) + Builder Profit
                  </p>
                </div>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-medium mb-2">Typical Construction Costs (2024):</h4>
                <div className="text-sm text-slate-600 space-y-2">
                  <ul>
                    <li>• Basic finish: ₹1,200-1,500/sq ft</li>
                    <li>• Standard finish: ₹1,500-2,000/sq ft</li>
                    <li>• Premium finish: ₹2,000-3,000/sq ft</li>
                    <li>• Luxury finish: ₹3,000-5,000/sq ft</li>
                  </ul>
                  <p className="mt-3 text-xs italic">
                    Note: Add 25-40% builder profit + 10-15% marketing/overheads to basic cost
                  </p>
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
            Online Valuation Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold mb-2">Popular Platforms:</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• <strong>MagicBricks:</strong> Free property valuation tool</li>
                <li>• <strong>99acres:</strong> Price trends and comparative analysis</li>
                <li>• <strong>Housing.com:</strong> Locality price insights</li>
                <li>• <strong>NoBroker:</strong> AI-powered valuation</li>
                <li>• <strong>Square Yards:</strong> Property value estimator</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold mb-2">Limitations:</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Based on limited data, not always accurate</li>
                <li>• Don't account for specific property condition</li>
                <li>• May have outdated information</li>
                <li>• Use as starting point, not final value</li>
                <li>• Always verify with physical inspection</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Professional Valuation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold mb-2">When to Hire Professional Valuers:</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• High-value properties (₹1Cr+)</li>
                <li>• Commercial properties</li>
                <li>• Properties with legal complications</li>
                <li>• Bank loan requirements (mandatory)</li>
                <li>• Inheritance/partition cases</li>
                <li>• Court-related valuations</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold mb-2">Approved Valuers:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Government-approved valuers</li>
                  <li>• Bank-empaneled valuers</li>
                  <li>• Chartered engineers</li>
                  <li>• RICS-certified valuers</li>
                  <li>Cost: ₹5,000-25,000 based on property value</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <h3 className="font-semibold mb-2">Valuation Report Includes:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Property details and measurements</li>
                  <li>• Comparative market analysis</li>
                  <li>• Location and amenity assessment</li>
                  <li>• Legal document verification</li>
                  <li>• Fair market value estimate</li>
                  <li>• Forced sale value (for bank)</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Valuation Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-3">Step-by-Step Process:</h3>
              <ol className="space-y-2 text-sm text-slate-700">
                <li>☐ <strong>1. Gather Data:</strong> Get property details, size, age, amenities</li>
                <li>☐ <strong>2. Research Comps:</strong> Find 5+ similar recent sales within 500m</li>
                <li>☐ <strong>3. Check Circle Rate:</strong> Verify government-mandated minimum value</li>
                <li>☐ <strong>4. Calculate CMA:</strong> Average comps + adjustments</li>
                <li>☐ <strong>5. Income Method:</strong> Verify with rental yield calculation</li>
                <li>☐ <strong>6. Online Tools:</strong> Cross-verify with 2-3 platforms</li>
                <li>☐ <strong>7. Physical Inspection:</strong> Check actual condition</li>
                <li>☐ <strong>8. Negotiate:</strong> Use valuation data to negotiate 5-10% discount</li>
                <li>☐ <strong>9. Bank Valuation:</strong> Get official valuation for loan</li>
                <li>☐ <strong>10. Final Decision:</strong> Proceed only if all valuations align</li>
              </ol>
            </div>

            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold mb-2">Red Flags:</h3>
              <ul className="text-sm text-red-600 space-y-1">
                <li>✗ Asking price 20%+ above market comps</li>
                <li>✗ Seller refuses third-party valuation</li>
                <li>✗ No recent sales in the area (liquidity issue)</li>
                <li>✗ Property listed for 1+ years (overpriced)</li>
                <li>✗ Rental yield below 2% in metros (overvalued)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyValuation;
