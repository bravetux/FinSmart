"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, AlertCircle, IndianRupee, Zap } from 'lucide-react';

const EMIPlanning = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Calculator className="w-4 h-4" />
            <span>Smart Planning</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            EMI Planning & Affordability
          </h2>
          <p className="text-purple-50 text-lg max-w-2xl">
            Calculate, plan, and optimize your home loan EMI for financial stability
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Calculator className="w-6 h-6 text-purple-600" />
            EMI Calculation Formula
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-semibold text-slate-900 mb-3">EMI Formula:</p>
              <div className="bg-white p-4 rounded border text-center">
                <p className="font-mono text-lg">EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]</p>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <p>Where:</p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>P</strong> = Principal loan amount</li>
                  <li>• <strong>R</strong> = Monthly interest rate (Annual Rate / 12 / 100)</li>
                  <li>• <strong>N</strong> = Number of monthly installments</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Step-by-Step Example:</h4>
              <div className="bg-white p-4 border rounded-lg space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm border-b pb-3">
                  <div className="text-slate-700">Loan Amount (P):</div>
                  <div className="font-semibold">₹40,00,000</div>
                  <div className="text-slate-700">Annual Interest Rate:</div>
                  <div className="font-semibold">9%</div>
                  <div className="text-slate-700">Loan Tenure:</div>
                  <div className="font-semibold">20 years (240 months)</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-slate-900">Calculation:</p>
                  <p className="text-slate-700">Monthly Interest Rate (R) = 9 / 12 / 100 = 0.0075</p>
                  <p className="text-slate-700">Number of months (N) = 20 × 12 = 240</p>
                  <p className="text-slate-700 font-mono">(1+R)^N = (1.0075)^240 = 6.0092</p>
                  <p className="text-slate-700 font-mono">EMI = [40,00,000 × 0.0075 × 6.0092] / [6.0092 - 1]</p>
                  <p className="text-slate-700 font-mono">EMI = [1,80,276] / [5.0092]</p>
                  <p className="text-green-700 font-bold text-lg mt-2">EMI = ₹35,994</p>
                </div>

                <div className="bg-blue-50 p-3 rounded mt-3">
                  <p className="text-sm font-semibold text-blue-900">Total Payment Over 20 Years:</p>
                  <p className="text-sm text-slate-700">Total Amount = ₹35,994 × 240 = ₹86,38,560</p>
                  <p className="text-sm text-slate-700">Total Interest = ₹86,38,560 - ₹40,00,000 = <span className="text-red-700 font-semibold">₹46,38,560</span></p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <IndianRupee className="w-6 h-6 text-green-600" />
            Affordability Calculator - The 40% Rule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-semibold text-green-900 mb-2">Golden Rule:</p>
              <p className="text-slate-700 text-sm">
                Your total EMI (including all loans) should not exceed <strong>40% of your monthly in-hand income</strong>. 
                This ensures financial stability and emergency cushion.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Affordability Example:</h4>
              <div className="bg-white p-4 border rounded-lg">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="col-span-2 bg-blue-50 p-3 rounded">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-slate-700">Monthly In-hand Income:</div>
                      <div className="font-semibold">₹1,00,000</div>
                      <div className="text-slate-700">Existing EMIs (car loan):</div>
                      <div className="font-semibold">₹15,000</div>
                    </div>
                  </div>
                  
                  <div className="col-span-2 border-t pt-3 mt-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-slate-700">40% of income:</div>
                      <div className="font-semibold">₹40,000</div>
                      <div className="text-slate-700">Available for home loan:</div>
                      <div className="font-semibold text-green-700">₹25,000</div>
                    </div>
                  </div>

                  <div className="col-span-2 bg-green-50 p-3 rounded mt-2">
                    <p className="font-semibold text-green-900 mb-2">Maximum Affordable Loan:</p>
                    <p className="text-slate-700 text-sm">At 9% for 20 years, EMI of ₹25,000</p>
                    <p className="text-green-700 font-bold text-lg">≈ ₹28 lakh loan amount</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Monthly Income</th>
                    <th className="text-left p-3 font-semibold text-slate-900">40% Limit</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Max Affordable Loan*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3">₹50,000</td>
                    <td className="p-3 text-green-700">₹20,000</td>
                    <td className="p-3 font-semibold">₹22 lakh</td>
                  </tr>
                  <tr>
                    <td className="p-3">₹75,000</td>
                    <td className="p-3 text-green-700">₹30,000</td>
                    <td className="p-3 font-semibold">₹33 lakh</td>
                  </tr>
                  <tr>
                    <td className="p-3">₹1,00,000</td>
                    <td className="p-3 text-green-700">₹40,000</td>
                    <td className="p-3 font-semibold">₹44 lakh</td>
                  </tr>
                  <tr>
                    <td className="p-3">₹1,50,000</td>
                    <td className="p-3 text-green-700">₹60,000</td>
                    <td className="p-3 font-semibold">₹66 lakh</td>
                  </tr>
                  <tr>
                    <td className="p-3">₹2,00,000</td>
                    <td className="p-3 text-green-700">₹80,000</td>
                    <td className="p-3 font-semibold">₹88 lakh</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-slate-600 italic mt-2">*Assuming 9% interest, 20 years tenure, no other EMIs</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            Impact of Interest Rate Changes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-700">
              For floating rate loans, interest rate changes significantly impact your EMI or tenure. Here's how a 
              ₹40 lakh loan over 20 years is affected:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Interest Rate</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Monthly EMI</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Total Interest</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Difference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-green-50">
                    <td className="p-3 font-medium">8.0%</td>
                    <td className="p-3 text-slate-700">₹33,458</td>
                    <td className="p-3 text-slate-700">₹40,30,000</td>
                    <td className="p-3 text-green-700">-₹6,08,560</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="p-3 font-medium">8.5%</td>
                    <td className="p-3 text-slate-700">₹34,540</td>
                    <td className="p-3 text-slate-700">₹42,90,000</td>
                    <td className="p-3 text-green-700">-₹3,48,560</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">9.0% (Base)</td>
                    <td className="p-3 text-slate-700">₹35,994</td>
                    <td className="p-3 text-slate-700">₹46,38,560</td>
                    <td className="p-3 text-slate-700">Baseline</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="p-3 font-medium">9.5%</td>
                    <td className="p-3 text-slate-700">₹37,287</td>
                    <td className="p-3 text-slate-700">₹49,48,880</td>
                    <td className="p-3 text-red-700">+₹3,10,320</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="p-3 font-medium">10.0%</td>
                    <td className="p-3 text-slate-700">₹38,601</td>
                    <td className="p-3 text-slate-700">₹52,64,240</td>
                    <td className="p-3 text-red-700">+₹6,25,680</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-semibold text-yellow-900 mb-2">⚠️ Key Insight:</p>
              <p className="text-sm text-slate-700">
                A 1% increase in interest rate can increase your total interest payment by ₹3-4 lakhs on a ₹40 lakh loan. 
                That's why prepayment and rate negotiation are crucial!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Zap className="w-6 h-6 text-blue-600" />
            Prepayment Strategies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Strategy 1: Reduce EMI</h4>
                <p className="text-sm text-slate-700 mb-2">Prepay and keep tenure same, lower your monthly EMI</p>
                <div className="bg-blue-50 p-3 rounded text-sm">
                  <p className="text-slate-700"><strong>Best for:</strong> Those needing better monthly cash flow</p>
                  <p className="text-slate-700 mt-1"><strong>Benefit:</strong> More breathing room in budget</p>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Strategy 2: Reduce Tenure (Recommended)</h4>
                <p className="text-sm text-slate-700 mb-2">Prepay and keep EMI same, reduce loan duration</p>
                <div className="bg-green-50 p-3 rounded text-sm">
                  <p className="text-slate-700"><strong>Best for:</strong> Maximizing interest savings</p>
                  <p className="text-slate-700 mt-1"><strong>Benefit:</strong> Save lakhs in interest, become debt-free faster</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Prepayment Impact Example:</h4>
              <div className="bg-white p-4 border rounded-lg">
                <div className="space-y-3 text-sm">
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded">
                    <div className="text-slate-700">Original Loan:</div>
                    <div className="font-semibold">₹40 lakh @ 9% for 20 years</div>
                    <div className="text-slate-700">Monthly EMI:</div>
                    <div className="font-semibold">₹35,994</div>
                    <div className="text-slate-700">Total Interest:</div>
                    <div className="font-semibold text-red-700">₹46,38,560</div>
                  </div>

                  <div className="border-t pt-3">
                    <p className="font-semibold text-slate-900 mb-2">After ₹5 lakh prepayment in Year 5:</p>
                    
                    <div className="grid md:grid-cols-2 gap-3 mt-2">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-medium text-blue-900 mb-1">Option A: Reduce EMI</p>
                        <p className="text-slate-700">New EMI: ₹31,456</p>
                        <p className="text-slate-700">Tenure: Remains 15 years</p>
                        <p className="text-green-700 font-semibold">Interest Saved: ₹10,85,000</p>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-medium text-green-900 mb-1">Option B: Reduce Tenure ⭐</p>
                        <p className="text-slate-700">EMI: Remains ₹35,994</p>
                        <p className="text-slate-700">New Tenure: 11.5 years</p>
                        <p className="text-green-700 font-semibold">Interest Saved: ₹14,25,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">When to Prepay:</h4>
              <ul className="space-y-2 text-sm text-slate-700 ml-4">
                <li>• <strong>Early years:</strong> Maximum impact as interest component is highest</li>
                <li>• <strong>Bonus/windfall:</strong> Use annual bonuses for prepayment</li>
                <li>• <strong>Interest rate hike:</strong> Prepay to counter increased rates</li>
                <li>• <strong>Extra income:</strong> Rental income, side business profits</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p className="font-semibold text-orange-900 mb-2">💡 Pro Tip:</p>
              <p className="text-sm text-slate-700">
                For loans above 8%, prepayment gives better returns than most debt investments. Make prepayment a priority 
                in your early earning years (30-40 age group) when income is growing.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <AlertCircle className="w-6 h-6 text-red-600" />
            Common EMI Planning Mistakes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Maxing out EMI limit</p>
                <p className="text-sm text-slate-700">Leaving no buffer for emergencies or lifestyle expenses</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Ignoring other financial goals</p>
                <p className="text-sm text-slate-700">Not balancing home loan with retirement, children's education</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Choosing only based on EMI</p>
                <p className="text-sm text-slate-700">Not considering total interest outgo over tenure</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Not planning for rate hikes</p>
                <p className="text-sm text-slate-700">Floating rate loans can increase by 1-2% - plan for buffer</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Ignoring prepayment opportunity</p>
                <p className="text-sm text-slate-700">Not utilizing bonuses/increments for prepayment</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Smart EMI Planning Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">EMI is within 40% of in-hand income</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Buffer for 10-15% rate increase accounted</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Emergency fund of 6 months expenses maintained</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Other financial goals not compromised</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Prepayment strategy planned (10% annually)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Adequate life and health insurance in place</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EMIPlanning;
