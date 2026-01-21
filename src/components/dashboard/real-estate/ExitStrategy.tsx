"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Calendar, TrendingDown, Droplet, Users } from 'lucide-react';

const ExitStrategy = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-red-600 to-pink-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <LogOut className="w-4 h-4" />
            <span>Smart Exit</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Exit Strategy & Liquidity Planning
          </h2>
          <p className="text-red-50 text-lg max-w-2xl">
            Knowing when and how to sell is as important as buying wisely
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Calendar className="w-6 h-6 text-red-600" />
            When to Sell Your Property
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-4 bg-green-50 p-3 rounded">
              <h4 className="font-semibold text-green-900 mb-2">✅ Good Reasons to Sell</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• <strong>Better investment opportunity:</strong> Found property with higher potential</li>
                <li>• <strong>Life stage change:</strong> Family size, job relocation, retirement</li>
                <li>• <strong>Market peak:</strong> Property significantly overvalued, unsustainable prices</li>
                <li>• <strong>Infrastructure deterioration:</strong> Neighborhood declining, traffic worsening</li>
                <li>• <strong>Liquidity needs:</strong> Emergency funds, children's education, business</li>
                <li>• <strong>Rental yield too low:</strong> 1.5% or below, better to sell and invest elsewhere</li>
                <li>• <strong>Tax optimization:</strong> Completing 2 years for LTCG benefits</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-600 pl-4 bg-red-50 p-3 rounded">
              <h4 className="font-semibold text-red-900 mb-2">❌ Bad Reasons to Sell</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• <strong>Short-term panic:</strong> Market temporary dip, economic uncertainty</li>
                <li>• <strong>Peer pressure:</strong> Friends/family selling, FOMO</li>
                <li>• <strong>Minor price increase:</strong> Selling after just 5-10% gain</li>
                <li>• <strong>Emotional decision:</strong> Anger, frustration without analysis</li>
                <li>• <strong>Unverified rumors:</strong> Hearing negative news without research</li>
                <li>• <strong>Desire for luxury:</strong> Selling good investment for lifestyle upgrade</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">Optimal Holding Period:</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• <strong>Minimum:</strong> 2 years (for LTCG tax benefit)</li>
                <li>• <strong>Ideal:</strong> 5-7 years (capture full appreciation cycle)</li>
                <li>• <strong>Long-term:</strong> 10+ years (maximum compounding)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingDown className="w-6 h-6 text-purple-600" />
            Exit Timing Strategies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">1. Market Cycle Exit</h4>
                <p className="text-sm text-slate-700 mb-2">Sell when market is at or near peak</p>
                <div className="bg-purple-50 p-3 rounded text-sm">
                  <p className="font-medium text-slate-900">Signs of market peak:</p>
                  <ul className="space-y-1 text-slate-700 ml-4 mt-1">
                    <li>• Prices rising 15%+ annually (unsustainable)</li>
                    <li>• Too many new launches, high inventory</li>
                    <li>• Everyone wants to buy/invest (euphoria)</li>
                    <li>• Easy credit, low interest rates encouraging speculation</li>
                    <li>• Media constantly talking about real estate boom</li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">2. Target-Based Exit</h4>
                <p className="text-sm text-slate-700 mb-2">Set clear appreciation targets upfront</p>
                <div className="bg-blue-50 p-3 rounded text-sm">
                  <p className="font-medium text-slate-900">Example targets:</p>
                  <ul className="space-y-1 text-slate-700 ml-4 mt-1">
                    <li>• <strong>Conservative:</strong> 50% appreciation (sell)</li>
                    <li>• <strong>Moderate:</strong> 75-100% appreciation (sell)</li>
                    <li>• <strong>Aggressive:</strong> 150%+ appreciation (sell)</li>
                  </ul>
                  <p className="mt-2 text-slate-700">Stick to targets regardless of emotions</p>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">3. Time-Based Exit</h4>
                <p className="text-sm text-slate-700 mb-2">Pre-decided holding period</p>
                <div className="bg-green-50 p-3 rounded text-sm">
                  <p className="text-slate-700">Decide upfront: "Will hold for 7 years then sell"</p>
                  <p className="text-slate-700 mt-1">Benefits: Disciplined, removes emotion, tax-efficient</p>
                  <p className="text-slate-700 mt-1">Works well with overall financial plan</p>
                </div>
              </div>

              <div className="border-l-4 border-orange-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">4. Opportunity Cost Exit</h4>
                <p className="text-sm text-slate-700 mb-2">When better investment available</p>
                <div className="bg-orange-50 p-3 rounded text-sm">
                  <p className="font-medium text-slate-900">Calculation:</p>
                  <p className="text-slate-700">If property giving 6% returns but you found investment giving 15%, sell and switch</p>
                  <p className="text-slate-700 mt-1">Always factor in transaction costs (5-8%)</p>
                </div>
              </div>

              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">5. Life Stage Exit</h4>
                <p className="text-sm text-slate-700 mb-2">Align with life goals</p>
                <div className="bg-red-50 p-3 rounded text-sm">
                  <p className="text-slate-700">Examples:</p>
                  <ul className="space-y-1 text-slate-700 ml-4 mt-1">
                    <li>• Retirement: Downsize, unlock equity</li>
                    <li>• Children's education: Fund higher studies</li>
                    <li>• Relocation: Job change to different city</li>
                    <li>• Family expansion: Need bigger house</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingDown className="w-6 h-6 text-orange-600" />
            Tax on Capital Gains
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-700 text-lg">Short-Term Capital Gains (STCG)</h4>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-sm">
                  <p className="font-medium text-slate-900">Holding Period: Less than 2 years</p>
                  <p className="text-slate-700 mt-2"><strong>Tax Rate:</strong> As per your income tax slab</p>
                  <div className="mt-3 space-y-1">
                    <p className="text-slate-700">• 30% slab: Pay 30% tax</p>
                    <p className="text-slate-700">• 20% slab: Pay 20% tax</p>
                    <p className="text-slate-700">• 5% slab: Pay 5% tax</p>
                  </div>
                  <p className="mt-3 text-red-700 font-semibold">No indexation benefit available</p>
                </div>
                
                <div className="bg-white p-3 border rounded text-sm">
                  <p className="font-medium text-slate-900">Example:</p>
                  <p className="text-slate-700">Purchase: ₹50 lakh (2024)</p>
                  <p className="text-slate-700">Sale: ₹60 lakh (2025)</p>
                  <p className="text-slate-700">Gain: ₹10 lakh</p>
                  <p className="text-red-700 font-semibold mt-1">Tax @ 30%: ₹3 lakh</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-green-700 text-lg">Long-Term Capital Gains (LTCG)</h4>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-sm">
                  <p className="font-medium text-slate-900">Holding Period: 2 years or more</p>
                  <p className="text-slate-700 mt-2"><strong>Tax Rate:</strong> 20% with indexation benefit</p>
                  <p className="text-slate-700 mt-2"><strong>Indexation:</strong> Adjusts purchase price for inflation</p>
                  <p className="text-green-700 font-semibold mt-2">Significantly reduces tax burden!</p>
                </div>

                <div className="bg-white p-3 border rounded text-sm">
                  <p className="font-medium text-slate-900">Example:</p>
                  <p className="text-slate-700">Purchase: ₹50 lakh (2020), CII: 301</p>
                  <p className="text-slate-700">Sale: ₹80 lakh (2026), CII: 363</p>
                  <p className="text-slate-700">Indexed Cost: ₹50L × 363/301 = ₹60.3L</p>
                  <p className="text-slate-700">Taxable Gain: ₹80L - ₹60.3L = ₹19.7L</p>
                  <p className="text-green-700 font-semibold mt-1">Tax @ 20%: ₹3.94 lakh</p>
                  <p className="text-xs text-slate-600 mt-1">(vs ₹6 lakh without indexation!)</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-semibold text-yellow-900 mb-2">💰 Tax Saving Options (LTCG):</p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• <strong>Section 54:</strong> Buy another residential property within 2 years - NO TAX</li>
                <li>• <strong>Section 54EC:</strong> Invest in specified bonds (NHAI, REC) within 6 months - Exemption up to ₹50 lakh</li>
                <li>• <strong>Section 54F:</strong> Invest entire sale proceeds in residential property - Full exemption</li>
              </ul>
              <p className="text-xs text-slate-600 mt-2 italic">Most people use Section 54 to reinvest in another property tax-free</p>
            </div>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Scenario</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Purchase</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Sale</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Tax</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3">Sell in 1 year</td>
                    <td className="p-3">₹50L</td>
                    <td className="p-3">₹60L</td>
                    <td className="p-3 text-red-700 font-semibold">₹3L (30%)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Sell after 3 years (no reinvest)</td>
                    <td className="p-3">₹50L</td>
                    <td className="p-3">₹70L</td>
                    <td className="p-3 text-orange-700 font-semibold">₹3.4L (20% with indexation)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Sell after 3 years (reinvest Sec 54)</td>
                    <td className="p-3">₹50L</td>
                    <td className="p-3">₹70L</td>
                    <td className="p-3 text-green-700 font-semibold">₹0 (Full exemption!)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Droplet className="w-6 h-6 text-blue-600" />
            Liquidity Planning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">Real Estate Liquidity Challenge:</p>
              <p className="text-sm text-slate-700">
                Unlike stocks/MF, selling property takes time. Typical timeline: 3-12 months. 
                Plan ahead for emergencies.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Time to Sell (Typical):</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-3 bg-green-50 rounded border border-green-200">
                  <span className="text-slate-700">Hot market, prime location:</span>
                  <span className="font-semibold text-green-700">1-3 months</span>
                </div>
                <div className="flex justify-between p-3 bg-blue-50 rounded border border-blue-200">
                  <span className="text-slate-700">Normal market, good location:</span>
                  <span className="font-semibold text-blue-700">3-6 months</span>
                </div>
                <div className="flex justify-between p-3 bg-orange-50 rounded border border-orange-200">
                  <span className="text-slate-700">Slow market or average location:</span>
                  <span className="font-semibold text-orange-700">6-12 months</span>
                </div>
                <div className="flex justify-between p-3 bg-red-50 rounded border border-red-200">
                  <span className="text-slate-700">Poor market, distressed sale:</span>
                  <span className="font-semibold text-red-700">12+ months</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Liquidity Enhancement Strategies:</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-green-600 pl-4">
                  <h5 className="font-medium text-slate-900 text-sm mb-1">1. Keep Emergency Fund Separate</h5>
                  <p className="text-xs text-slate-700">Never rely on property sale for emergencies. Maintain 12 months expenses in liquid funds.</p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-4">
                  <h5 className="font-medium text-slate-900 text-sm mb-1">2. List Property in Advance</h5>
                  <p className="text-xs text-slate-700">If you know you'll sell in 1-2 years, start showcasing early to find right buyer.</p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h5 className="font-medium text-slate-900 text-sm mb-1">3. Keep Property Rent-Ready</h5>
                  <p className="text-xs text-slate-700">Well-maintained property sells faster. Regular upkeep worth the investment.</p>
                </div>

                <div className="border-l-4 border-orange-600 pl-4">
                  <h5 className="font-medium text-slate-900 text-sm mb-1">4. Loan Against Property (LAP)</h5>
                  <p className="text-xs text-slate-700">Emergency option: Get 50-60% property value as loan at 9-11% interest without selling.</p>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h5 className="font-medium text-slate-900 text-sm mb-1">5. Price Realistically</h5>
                  <p className="text-xs text-slate-700">Overpriced properties sit unsold for years. Price 5-10% below market for quick sale.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Users className="w-6 h-6 text-green-600" />
            Succession Planning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-700">
              Plan for property transfer to next generation to avoid disputes and tax complications:
            </p>

            <div className="space-y-3">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">1. Make a Will</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Clearly mention property distribution</li>
                  <li>• Avoid disputes among heirs</li>
                  <li>• Update will after major life events</li>
                  <li>• Keep it with trusted person/lawyer</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">2. Joint Ownership</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Add spouse/children as joint owners</li>
                  <li>• Smooth transition without probate</li>
                  <li>• Both owners can claim tax benefits</li>
                  <li>• Consider implications carefully</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">3. Gifting During Lifetime</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Gift to children/relatives (no tax)</li>
                  <li>• Transfer while you can oversee</li>
                  <li>• Ensures your wishes fulfilled</li>
                  <li>• Lose control over property</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">4. Trust Structure</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Create family trust for properties</li>
                  <li>• Professional management</li>
                  <li>• Tax efficiency</li>
                  <li>• Suitable for large estates</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-semibold text-red-900 mb-2">⚠️ Common Succession Mistakes:</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Not having a will (leads to legal battles)</li>
                <li>• Verbal promises (no legal standing)</li>
                <li>• Delaying planning (sudden death causes chaos)</li>
                <li>• Not updating will after life changes</li>
                <li>• Not informing family about will location</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Exit Planning Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Clear exit strategy defined upfront</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Target appreciation/timeframe decided</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Tax implications calculated</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Alternative investment identified for proceeds</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Property documents ready for quick sale</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Succession plan in place (will made)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Emergency liquidity separate from property</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitStrategy;
