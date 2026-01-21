"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, XCircle, ThumbsDown, TrendingDown } from 'lucide-react';

const CommonMistakes = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-red-600 to-rose-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Learn from Others</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Common Real Estate Mistakes
          </h2>
          <p className="text-red-50 text-lg max-w-2xl">
            Learn from others' expensive errors and protect your investment
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <XCircle className="w-6 h-6 text-red-600" />
            Top 15 Real Estate Mistakes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Buying Without Research</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Purchasing based on builder's brochure or agent's promises without independent verification
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Overpaying by 20-30%, buying in poor location, stuck with bad investment</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Research for minimum 3 months, visit area 5+ times, compare prices, check past appreciation</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Ignoring Legal Due Diligence</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Skipping title verification, encumbrance check, or RERA registration to save ₹10-20k
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Property disputes, ownership challenges, years of litigation, complete loss possible</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Hire property lawyer, verify 30-year title history, check all approvals, confirm RERA registration</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Over-Leveraging (Excessive Home Loan)</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Taking maximum possible loan without considering financial stress
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Financial strain, no savings, one job loss = default risk, forced sale at loss</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Keep EMI below 40% income, maintain 6-month emergency fund, leave room for other goals</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Emotional Buying (Falling in Love with Property)</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Making decision based on emotions rather than investment logic
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Overpaying, ignoring red flags, buying beyond means, poor returns</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Treat as investment, compare 3-4 options, sleep on decision, take family/friend opinion</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Ignoring Hidden Costs</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Budget only for property price, forget stamp duty, registration, GST, brokerage
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Suddenly need ₹5-8 lakh more, forced to borrow from friends/family, financial stress</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Add 8-10% to property cost for hidden charges, maintain separate buffer fund</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Buying Only for Tax Benefits</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Purchase decision driven solely by tax savings without investment analysis
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Save ₹1 lakh in tax but lose ₹10 lakh in poor investment, stuck with bad property</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Tax benefits are bonus, not main criteria. Focus on location, appreciation, rental yield first</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">7</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Trusting Verbal Promises</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Believing builder/agent promises about amenities, infrastructure not in writing
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Promised metro never comes, amenities not delivered, no legal recourse</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Get everything in agreement, verify infrastructure from govt websites, don't rely on hearsay</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">8</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Timing the Market Perfectly</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Waiting for absolute bottom, trying to predict exact peak for exit
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Missing good opportunities, paralysis by analysis, paying rent while waiting</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Buy when you find good value + have funds, don't try to time perfectly. Time IN market &gt; Timing market</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">9</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Ignoring Resale Value & Liquidity</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Buying unique property that appeals only to you
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Property takes years to sell, have to accept 20-30% discount, liquidity crisis</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Buy mainstream 2-3 BHK, good location, standard layout. Think like future buyer</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">10</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Not Reading the Agreement</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Signing without reading fine print, hidden charges, possession clauses
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Surprise charges, unfavorable terms, no recourse in delays, penalty clauses against you</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Read every page, take home to review, lawyer should verify, negotiate unfair terms</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">11</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Buying Under-Construction from Unknown Builder</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Attracted by low price, ignore builder's lack of track record
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Project abandoned, builder bankrupt, years of legal battle, total loss of investment</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Buy only from reputed builders with proven delivery record. Check past projects.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">12</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Compromising on Location for Size</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Choosing 3 BHK in bad location over 2 BHK in prime area
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Poor appreciation (3-4% vs 10-12%), difficulty in renting/selling, daily commute pain</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Location &gt; Size. Small flat in prime area beats large flat in remote area every time</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">13</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Not Inspecting Property Physically</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Buying based on photos, videos, virtual tours only
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Unpleasant surprises - noise, neighbors, actual condition, ventilation issues</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Visit minimum 3 times - morning, evening, weekend. Check from all angles.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">14</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Expecting Unrealistic Returns</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Believing property will double in 2-3 years like it did in 2000-2010
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Disappointment, holding too long, missing other opportunities, over-investment</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Realistic expectation: 8-12% annual appreciation. Target 50-75% gain in 5-7 years</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">15</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Neglecting Property Insurance</h4>
                <p className="text-sm text-slate-700 mb-2">
                  Skip insurance to save ₹10-15k annually
                </p>
                <div className="bg-white p-3 rounded border text-sm">
                  <p className="font-medium text-red-900">Impact:</p>
                  <p className="text-slate-700">Fire/earthquake/flood = complete loss of ₹50+ lakh investment</p>
                  <p className="font-medium text-green-900 mt-2">Solution:</p>
                  <p className="text-slate-700">Buy comprehensive home insurance, covers structure + contents. Small cost for peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <ThumbsDown className="w-6 h-6 text-orange-600" />
            Bad Investment Scenarios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3">Real-Life Example 1: Location Mistake</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>Buyer:</strong> Rohit, 32, IT professional</p>
                <p><strong>Purchase:</strong> ₹35 lakh 3 BHK in outskirts (2015)</p>
                <p><strong>Reason:</strong> Wanted big house, compromised on location</p>
                <p><strong>Reality after 8 years:</strong></p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Property value: ₹42 lakh (just 20% gain in 8 years)</li>
                  <li>• 2 hours daily commute wasted = Health issues</li>
                  <li>• Failed to rent for 3 years</li>
                  <li>• Similar 2 BHK in city center: ₹40L → ₹90L (2.25x)</li>
                </ul>
                <p className="text-red-700 font-semibold mt-2">Lesson: Location matters more than size</p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3">Real-Life Example 2: Builder Default</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>Buyer:</strong> Priya, 38, Bank Manager</p>
                <p><strong>Purchase:</strong> ₹50 lakh apartment, under-construction (2017)</p>
                <p><strong>Reason:</strong> 20% cheaper, believed in builder's "upcoming metro" promise</p>
                <p><strong>Reality after 6 years:</strong></p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Project still incomplete (promised 2020, now 2027?)</li>
                  <li>• Paid ₹35 lakh so far</li>
                  <li>• Paying rent + EMI both (₹25k + ₹38k = ₹63k/month)</li>
                  <li>• RERA case filed, builder in debt</li>
                  <li>• Recovery uncertain</li>
                </ul>
                <p className="text-red-700 font-semibold mt-2">Lesson: Don't buy from untested builders</p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3">Real-Life Example 3: Over-Leverage</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><strong>Buyer:</strong> Amit & Neha, 30, Combined income ₹1.2L</p>
                <p><strong>Purchase:</strong> ₹75 lakh home, ₹60 lakh loan (2019)</p>
                <p><strong>Reason:</strong> Bank approved, wanted dream home</p>
                <p><strong>Reality:</strong></p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• EMI: ₹55,000 (46% of income)</li>
                  <li>• Amit lost job during COVID</li>
                  <li>• Missed 4 EMIs, credit score ruined</li>
                  <li>• Forced to sell at ₹68 lakh (loss situation)</li>
                  <li>• Could have bought ₹50L property comfortably</li>
                </ul>
                <p className="text-red-700 font-semibold mt-2">Lesson: Don't max out loan eligibility</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingDown className="w-6 h-6 text-red-600" />
            Financial Mistakes with Real Estate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Using retirement corpus for down payment</p>
                <p className="text-slate-700 text-xs">Leaves you with no retirement backup</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Stopping all other investments (SIP, PPF) for EMI</p>
                <p className="text-slate-700 text-xs">All eggs in one basket - no diversification</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Buying second property when first EMI ongoing</p>
                <p className="text-slate-700 text-xs">Extreme financial stress, one emergency = default on both</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Withdrawing emergency fund for down payment</p>
                <p className="text-slate-700 text-xs">Any emergency forces you to take costly personal loan</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Taking personal loan for down payment</p>
                <p className="text-slate-700 text-xs">Two EMIs running, effective interest 12-14%, can't sustain</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900">Selling good investments (stocks/MF) at loss for property</p>
                <p className="text-slate-700 text-xs">Crystallizing losses, missing future gains</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Mistake-Prevention Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Researched location for minimum 3 months</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Complete legal due diligence done by lawyer</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">EMI below 40% of income, emergency fund intact</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Decided rationally, not emotionally</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Budgeted for all hidden costs (stamp duty, etc.)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Agreement read fully, lawyer verified</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Property visited 5+ times at different times</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Builder has proven track record</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Prioritized location over size/amenities</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Have realistic return expectations (8-12%)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommonMistakes;
