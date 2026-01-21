"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Building2, MapPin, Zap, Clock } from 'lucide-react';

const AppreciationFactors = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Value Growth</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Property Appreciation Factors
          </h2>
          <p className="text-orange-50 text-lg max-w-2xl">
            Understanding what drives real estate value appreciation over time
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Building2 className="w-6 h-6 text-orange-600" />
            Key Drivers of Property Appreciation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">1. Location & Connectivity</h4>
              <p className="text-sm text-slate-700 mb-2">The #1 factor determining appreciation</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• <strong>Proximity to CBD/IT hubs:</strong> 10-20 km range ideal</li>
                <li>• <strong>Metro connectivity:</strong> Properties within 1 km of metro see 15-20% premium</li>
                <li>• <strong>Arterial roads & highways:</strong> Better connectivity = higher demand</li>
                <li>• <strong>Airport proximity:</strong> 30-45 min travel time preferred</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded mt-2">
                <p className="text-xs font-semibold text-blue-900">Impact: 30-40% of total appreciation</p>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">2. Infrastructure Development</h4>
              <p className="text-sm text-slate-700 mb-2">Upcoming projects create massive appreciation</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• <strong>New metro lines:</strong> 25-50% appreciation within 2-3 years</li>
                <li>• <strong>Flyovers & expressways:</strong> Reduces travel time, increases demand</li>
                <li>• <strong>New hospitals/schools:</strong> Family-friendly appeal</li>
                <li>• <strong>Malls & commercial complexes:</strong> Lifestyle amenities</li>
              </ul>
              <div className="bg-green-50 p-3 rounded mt-2">
                <p className="text-xs font-semibold text-green-900">Impact: 20-30% of total appreciation</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">3. Employment & Economic Growth</h4>
              <p className="text-sm text-slate-700 mb-2">Job creation drives housing demand</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• <strong>IT parks & SEZs:</strong> Bangalore, Pune, Hyderabad examples</li>
                <li>• <strong>Manufacturing hubs:</strong> Gujarat, Tamil Nadu success stories</li>
                <li>• <strong>Startup ecosystem:</strong> Creates young, affluent buyers</li>
                <li>• <strong>Service sector growth:</strong> BPO, KPO centers</li>
              </ul>
              <div className="bg-purple-50 p-3 rounded mt-2">
                <p className="text-xs font-semibold text-purple-900">Impact: 15-25% of total appreciation</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">4. Supply-Demand Dynamics</h4>
              <p className="text-sm text-slate-700 mb-2">Limited supply + high demand = price surge</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• <strong>Constrained supply:</strong> Limited land availability in prime areas</li>
                <li>• <strong>FSI restrictions:</strong> Limits new construction</li>
                <li>• <strong>Migration patterns:</strong> People moving to cities</li>
                <li>• <strong>Population growth:</strong> Natural demand increase</li>
              </ul>
              <div className="bg-orange-50 p-3 rounded mt-2">
                <p className="text-xs font-semibold text-orange-900">Impact: 10-20% of total appreciation</p>
              </div>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">5. Government Policies & Schemes</h4>
              <p className="text-sm text-slate-700 mb-2">Policy changes can accelerate or slow growth</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• <strong>Smart city initiatives:</strong> Massive infrastructure funding</li>
                <li>• <strong>RERA implementation:</strong> Increased buyer confidence</li>
                <li>• <strong>PMAY subsidies:</strong> Boosts affordable housing</li>
                <li>• <strong>SEZ status:</strong> Tax benefits attract companies</li>
              </ul>
              <div className="bg-red-50 p-3 rounded mt-2">
                <p className="text-xs font-semibold text-red-900">Impact: 5-15% of total appreciation</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Zap className="w-6 h-6 text-blue-600" />
            Infrastructure Development Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-700">
              Real-life examples of how infrastructure changed property values:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Area</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Infrastructure</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Before</th>
                    <th className="text-left p-3 font-semibold text-slate-900">After</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Appreciation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">Gurgaon DLF</td>
                    <td className="p-3 text-slate-700">Rapid Metro</td>
                    <td className="p-3">₹6,000/sqft</td>
                    <td className="p-3">₹10,000/sqft</td>
                    <td className="p-3 text-green-700 font-semibold">67%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Noida Extension</td>
                    <td className="p-3 text-slate-700">Aqua Line Metro</td>
                    <td className="p-3">₹2,500/sqft</td>
                    <td className="p-3">₹4,200/sqft</td>
                    <td className="p-3 text-green-700 font-semibold">68%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Bangalore Whitefield</td>
                    <td className="p-3 text-slate-700">IT Corridor + Metro</td>
                    <td className="p-3">₹3,500/sqft</td>
                    <td className="p-3">₹7,000/sqft</td>
                    <td className="p-3 text-green-700 font-semibold">100%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Pune Hinjewadi</td>
                    <td className="p-3 text-slate-700">IT Hub Development</td>
                    <td className="p-3">₹2,800/sqft</td>
                    <td className="p-3">₹6,500/sqft</td>
                    <td className="p-3 text-green-700 font-semibold">132%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Mumbai Thane</td>
                    <td className="p-3 text-slate-700">MTHL + Metro</td>
                    <td className="p-3">₹12,000/sqft</td>
                    <td className="p-3">₹18,000/sqft</td>
                    <td className="p-3 text-green-700 font-semibold">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold text-blue-900">💡 Key Lesson:</p>
              <p className="text-sm text-slate-700 mt-1">
                Buy 2-3 years BEFORE infrastructure completes. Once operational, prices have already surged. 
                The biggest gains come from anticipation, not realization.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <MapPin className="w-6 h-6 text-green-600" />
            Location Premiums
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-700">
              How much extra you pay (or gain) based on specific location attributes:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-3">Positive Premiums</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>Within 500m of metro:</strong> +20-25%</li>
                  <li>• <strong>Park/Lake facing:</strong> +15-20%</li>
                  <li>• <strong>Gated community:</strong> +10-15%</li>
                  <li>• <strong>Near good schools:</strong> +10-12%</li>
                  <li>• <strong>Brand name builder:</strong> +8-12%</li>
                  <li>• <strong>Corner plot/higher floor:</strong> +5-10%</li>
                  <li>• <strong>Vastu compliant:</strong> +5-8%</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-900 mb-3">Negative Factors</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• <strong>Near industrial area:</strong> -15-20%</li>
                  <li>• <strong>High crime locality:</strong> -10-15%</li>
                  <li>• <strong>Poor connectivity:</strong> -10-15%</li>
                  <li>• <strong>Water scarcity area:</strong> -8-12%</li>
                  <li>• <strong>Disputed land:</strong> -20-30%</li>
                  <li>• <strong>Ground floor (noise):</strong> -5-8%</li>
                  <li>• <strong>No parking:</strong> -5-10%</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm font-semibold text-yellow-900">Example Calculation:</p>
              <div className="space-y-1 text-sm text-slate-700 mt-2">
                <p>Base price in area: ₹5,000/sqft</p>
                <p>+ Metro connectivity: +₹1,000 (20%)</p>
                <p>+ Park facing: +₹750 (15%)</p>
                <p>+ Brand builder: +₹500 (10%)</p>
                <p className="font-semibold text-green-700 mt-2">Actual price: ₹7,250/sqft (45% premium!)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Clock className="w-6 h-6 text-purple-600" />
            Market Cycles & Timing
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-700">
              Real estate moves in cycles. Understanding where we are in the cycle is crucial:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-green-600 pl-4 bg-green-50 p-3 rounded">
                <h4 className="font-semibold text-green-900 mb-2">Recovery Phase (Best Time to Buy)</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Prices bottomed out, starting to stabilize</li>
                  <li>• Low inventory levels</li>
                  <li>• Buyers cautious but sentiment improving</li>
                  <li>• High rental yields (10-15% off peak prices)</li>
                  <li><strong>Action:</strong> Buy aggressively, maximum upside potential</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-3 rounded">
                <h4 className="font-semibold text-blue-900 mb-2">Expansion Phase (Good Time to Buy)</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Prices rising steadily (8-12% annually)</li>
                  <li>• New projects launching</li>
                  <li>• Good absorption rates</li>
                  <li>• Easy home loan availability</li>
                  <li><strong>Action:</strong> Buy for end-use or long-term investment</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-600 pl-4 bg-orange-50 p-3 rounded">
                <h4 className="font-semibold text-orange-900 mb-2">Peak Phase (Caution Zone)</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Rapid price increases (15%+ annually)</li>
                  <li>• Too many new projects</li>
                  <li>• Everyone wants to buy/invest</li>
                  <li>• Media hype and speculation</li>
                  <li><strong>Action:</strong> Consider selling if you own, avoid buying</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-600 pl-4 bg-red-50 p-3 rounded">
                <h4 className="font-semibold text-red-900 mb-2">Correction Phase (Wait Period)</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Prices declining or flat</li>
                  <li>• High unsold inventory</li>
                  <li>• Sellers desperate, buyers absent</li>
                  <li>• Negative sentiment</li>
                  <li><strong>Action:</strong> Wait for bottom, accumulate cash for recovery phase</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm font-semibold text-purple-900">Current Market (2026):</p>
              <p className="text-sm text-slate-700 mt-1">
                Most Indian metros are in <strong>Expansion Phase</strong> after recovering from 2020 lows. 
                Tier-2 cities showing strong recovery. Best opportunities in emerging suburbs of major cities.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            Historical Appreciation Rates (India)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">City/Tier</th>
                    <th className="text-left p-3 font-semibold text-slate-900">10-Year CAGR</th>
                    <th className="text-left p-3 font-semibold text-slate-900">20-Year CAGR</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">Mumbai (Prime)</td>
                    <td className="p-3 text-green-700">6-8%</td>
                    <td className="p-3 text-green-700">10-12%</td>
                    <td className="p-3 text-slate-700 text-xs">Mature, stable growth</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Delhi NCR</td>
                    <td className="p-3 text-green-700">7-9%</td>
                    <td className="p-3 text-green-700">11-13%</td>
                    <td className="p-3 text-slate-700 text-xs">Metro boost in 2000s</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Bangalore</td>
                    <td className="p-3 text-green-700">9-11%</td>
                    <td className="p-3 text-green-700">13-15%</td>
                    <td className="p-3 text-slate-700 text-xs">IT boom driven</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Pune</td>
                    <td className="p-3 text-green-700">8-10%</td>
                    <td className="p-3 text-green-700">12-14%</td>
                    <td className="p-3 text-slate-700 text-xs">IT + Auto hub</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Hyderabad</td>
                    <td className="p-3 text-green-700">10-12%</td>
                    <td className="p-3 text-green-700">14-16%</td>
                    <td className="p-3 text-slate-700 text-xs">Fastest growing metro</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Tier-2 Cities</td>
                    <td className="p-3 text-green-700">11-15%</td>
                    <td className="p-3 text-green-700">15-20%</td>
                    <td className="p-3 text-slate-700 text-xs">Emerging markets</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Best Performing Segments</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Tier-2 city prime locations: 15-20%</li>
                  <li>• Metro corridor areas: 12-18%</li>
                  <li>• IT hub periphery: 13-16%</li>
                  <li>• Gated communities: 10-14%</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Underperformers</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Over-supplied suburbs: 2-4%</li>
                  <li>• Older buildings (no redevelopment): 3-5%</li>
                  <li>• Areas with poor infrastructure: 4-6%</li>
                  <li>• Builder bankruptcies: Negative returns</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold text-blue-900">💡 Important Note:</p>
              <p className="text-sm text-slate-700 mt-1">
                Past performance doesn't guarantee future returns. However, areas with strong fundamentals 
                (connectivity, employment, infrastructure) consistently outperform. Target 8-12% long-term appreciation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Appreciation Analysis Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Check upcoming metro/infrastructure within 5 km</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Verify employment hubs nearby (10 km radius)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Analyze supply-demand in micro-market</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Check historical appreciation (5-10 years)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Assess current market cycle phase</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Compare with similar properties in area</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Consider government development plans</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppreciationFactors;
