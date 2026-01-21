"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, Map, BarChart3, Globe, CheckCircle } from 'lucide-react';

const MarketResearch = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Search className="w-4 h-4" />
            <span>Market Intelligence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Real Estate Market Research & Trends
          </h2>
          <p className="text-blue-50 text-lg max-w-2xl">
            Master the art of analyzing real estate markets to make informed investment decisions
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Search className="w-6 h-6 text-blue-600" />
            Why Market Research Matters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-slate-700">
            <p>
              Real estate is highly location-specific and cyclical. Proper market research helps you:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Identify undervalued markets before they boom</li>
              <li>• Avoid overpriced or saturated areas</li>
              <li>• Understand demand-supply dynamics</li>
              <li>• Time your entry and exit strategically</li>
              <li>• Maximize rental yield and appreciation potential</li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
              <p className="text-sm font-semibold text-blue-900">💡 Key Insight:</p>
              <p className="text-sm text-slate-700 mt-1">
                The difference between a 12% annual appreciation and 3% often comes down to choosing the right location at the right time.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Map className="w-6 h-6 text-indigo-600" />
            How to Research a Real Estate Market
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Infrastructure Development</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Check upcoming metro/highway projects</li>
                  <li>• New commercial hubs or IT parks</li>
                  <li>• Proposed airports or railway stations</li>
                  <li>• Educational institutions and hospitals</li>
                  <li>• Smart city projects and development plans</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Price Trends Analysis</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Compare prices over last 5 years</li>
                  <li>• Check price per sq ft trends</li>
                  <li>• Identify areas with steady appreciation</li>
                  <li>• Avoid areas with declining prices</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Demand-Supply Indicators</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Inventory levels (unsold stock)</li>
                  <li>• Time to sell properties</li>
                  <li>• New project launches vs absorption</li>
                  <li>• Rental demand and vacancy rates</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Economic & Employment Growth</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Job creation in the area</li>
                  <li>• Corporate office expansions</li>
                  <li>• Migration patterns</li>
                  <li>• Startup ecosystem growth</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Regulatory & Policy Environment</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• RERA registration status</li>
                  <li>• Master plan changes</li>
                  <li>• FSI/FAR regulations</li>
                  <li>• Tax incentives or restrictions</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Key Market Indicators to Track
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-slate-900">Indicator</th>
                  <th className="text-left p-3 font-semibold text-slate-900">What It Shows</th>
                  <th className="text-left p-3 font-semibold text-slate-900">Good Sign</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-medium">Price Appreciation</td>
                  <td className="p-3 text-slate-700">Historical growth rate</td>
                  <td className="p-3 text-green-700">8-12% annually</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Rental Yield</td>
                  <td className="p-3 text-slate-700">Annual rent/property value</td>
                  <td className="p-3 text-green-700">2.5-4% for residential</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Inventory Overhang</td>
                  <td className="p-3 text-slate-700">Months to sell unsold units</td>
                  <td className="p-3 text-green-700">Below 12 months</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Absorption Rate</td>
                  <td className="p-3 text-slate-700">Speed of sales</td>
                  <td className="p-3 text-green-700">Above 70%</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Price-to-Income Ratio</td>
                  <td className="p-3 text-slate-700">Affordability</td>
                  <td className="p-3 text-green-700">4-6x annual income</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Construction Activity</td>
                  <td className="p-3 text-slate-700">New launches</td>
                  <td className="p-3 text-green-700">Steady, not excessive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            Emerging vs Saturated Markets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 text-lg">Emerging Markets 🚀</h4>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-slate-900">Characteristics:</p>
                <ul className="space-y-1 text-slate-700 ml-4">
                  <li>• Low to moderate current prices</li>
                  <li>• Infrastructure under development</li>
                  <li>• Growing employment opportunities</li>
                  <li>• Government focus areas</li>
                  <li>• High appreciation potential</li>
                </ul>
                <p className="font-medium text-slate-900 mt-3">Risk Level:</p>
                <p className="text-slate-700">Higher (development may get delayed)</p>
                <p className="font-medium text-slate-900 mt-2">Expected Returns:</p>
                <p className="text-slate-700">12-20% annually</p>
                <p className="font-medium text-slate-900 mt-2">Best For:</p>
                <p className="text-slate-700">Long-term investors (7+ years)</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700 text-lg">Saturated Markets 🏢</h4>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-slate-900">Characteristics:</p>
                <ul className="space-y-1 text-slate-700 ml-4">
                  <li>• High current prices</li>
                  <li>• Well-developed infrastructure</li>
                  <li>• Established neighborhoods</li>
                  <li>• Limited new supply</li>
                  <li>• Steady but moderate appreciation</li>
                </ul>
                <p className="font-medium text-slate-900 mt-3">Risk Level:</p>
                <p className="text-slate-700">Lower (stable established areas)</p>
                <p className="font-medium text-slate-900 mt-2">Expected Returns:</p>
                <p className="text-slate-700">5-8% annually</p>
                <p className="font-medium text-slate-900 mt-2">Best For:</p>
                <p className="text-slate-700">Rental income, stability seekers</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Globe className="w-6 h-6 text-orange-600" />
            Data Sources & Research Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Online Property Portals</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-700">
                <li>• MagicBricks - Price trends, locality reviews</li>
                <li>• 99acres - Market analysis, demand index</li>
                <li>• Housing.com - Price heat maps</li>
                <li>• Makaan.com - Comparative analysis</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Government & Official Sources</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-700">
                <li>• RERA website - Project registrations</li>
                <li>• Municipal Corporation - Master plans</li>
                <li>• Land Registry - Sale deed values</li>
                <li>• Census data - Population growth</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Research Reports & Analytics</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-700">
                <li>• Knight Frank - Market reports</li>
                <li>• Anarock - Research insights</li>
                <li>• JLL India - Trend analysis</li>
                <li>• Cushman & Wakefield - Forecasts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">On-Ground Research</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Visit multiple projects in the area</li>
                <li>• Talk to local brokers</li>
                <li>• Interact with existing residents</li>
                <li>• Check actual rent being paid</li>
                <li>• Observe traffic, connectivity, amenities</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Market Research Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Analyzed price trends for last 5 years</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Checked upcoming infrastructure projects</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Reviewed inventory and absorption rates</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Assessed rental demand and yields</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Visited locality multiple times (day/night)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Talked to residents and local brokers</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Verified all claims about upcoming projects</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Compared with 2-3 alternative locations</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Example: Evaluating Two Locations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-white">
                <tr>
                  <th className="text-left p-3 font-semibold text-slate-900">Parameter</th>
                  <th className="text-left p-3 font-semibold text-slate-900">Location A (Emerging)</th>
                  <th className="text-left p-3 font-semibold text-slate-900">Location B (Established)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3 font-medium">Current Price/sq ft</td>
                  <td className="p-3 text-slate-700">₹4,500</td>
                  <td className="p-3 text-slate-700">₹8,500</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">5-Year Appreciation</td>
                  <td className="p-3 text-green-700">15% annually</td>
                  <td className="p-3 text-slate-700">6% annually</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Rental Yield</td>
                  <td className="p-3 text-slate-700">2%</td>
                  <td className="p-3 text-green-700">3.5%</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Infrastructure</td>
                  <td className="p-3 text-slate-700">Under development</td>
                  <td className="p-3 text-green-700">Fully developed</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Inventory Overhang</td>
                  <td className="p-3 text-orange-700">18 months</td>
                  <td className="p-3 text-green-700">8 months</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Best For</td>
                  <td className="p-3 text-slate-700">Capital appreciation</td>
                  <td className="p-3 text-slate-700">Immediate rental income</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketResearch;
