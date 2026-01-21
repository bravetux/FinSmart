"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calculator, DollarSign, BarChart3, PieChart } from 'lucide-react';

const ROIAnalysis = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Investment Analysis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            ROI & Cash Flow Analysis
          </h2>
          <p className="text-green-50 text-lg max-w-2xl">
            Calculate and evaluate the true returns from your real estate investment
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Calculator className="w-6 h-6 text-green-600" />
            Return on Investment (ROI) Calculation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-semibold text-slate-900 mb-3">Basic ROI Formula:</p>
              <div className="bg-white p-4 rounded border text-center">
                <p className="font-mono text-lg">ROI = [(Current Value - Total Investment) / Total Investment] × 100</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Comprehensive Example:</h4>
              <div className="bg-white p-4 border rounded-lg space-y-4">
                <div>
                  <p className="font-medium text-slate-900 mb-2">Initial Investment (Year 2020):</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-700">Property Purchase Price:</div>
                    <div className="font-semibold">₹50,00,000</div>
                    <div className="text-slate-700">Stamp Duty & Registration:</div>
                    <div className="font-semibold">₹3,00,000</div>
                    <div className="text-slate-700">Brokerage:</div>
                    <div className="font-semibold">₹1,00,000</div>
                    <div className="text-slate-700">Interior/Furnishing:</div>
                    <div className="font-semibold">₹5,00,000</div>
                    <div className="text-slate-700 border-t pt-2 font-semibold">Total Investment:</div>
                    <div className="font-semibold text-blue-700 border-t pt-2">₹59,00,000</div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-slate-900 mb-2">Current Scenario (Year 2026 - After 6 years):</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-700">Current Market Value:</div>
                    <div className="font-semibold text-green-700">₹80,00,000</div>
                    <div className="text-slate-700">Rental Income Earned:</div>
                    <div className="font-semibold">₹10,80,000</div>
                    <div className="text-slate-700">Maintenance Paid:</div>
                    <div className="font-semibold text-red-700">-₹2,40,000</div>
                    <div className="text-slate-700 border-t pt-2 font-semibold">Net Rental Income:</div>
                    <div className="font-semibold border-t pt-2">₹8,40,000</div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded">
                  <p className="font-semibold text-green-900 mb-2">ROI Calculation:</p>
                  <div className="space-y-1 text-sm text-slate-700">
                    <p>Capital Appreciation = ₹80,00,000 - ₹59,00,000 = ₹21,00,000</p>
                    <p>Net Rental Income = ₹8,40,000</p>
                    <p>Total Gain = ₹21,00,000 + ₹8,40,000 = ₹29,40,000</p>
                    <p className="text-green-700 font-bold text-lg mt-2">
                      ROI = (29,40,000 / 59,00,000) × 100 = 49.83%
                    </p>
                    <p className="text-green-700 font-semibold">
                      Annualized ROI = 49.83% / 6 years = 8.3% per year
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <DollarSign className="w-6 h-6 text-blue-600" />
            Cash-on-Cash Returns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">What is Cash-on-Cash Return?</p>
              <p className="text-sm text-slate-700">
                Measures the annual return on the actual cash invested (down payment), particularly useful when using leverage (home loan).
              </p>
              <div className="bg-white p-3 rounded mt-3 text-center">
                <p className="font-mono text-sm">CoC Return = (Annual Cash Flow / Total Cash Invested) × 100</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Example with Home Loan:</h4>
              <div className="bg-white p-4 border rounded-lg space-y-4">
                <div>
                  <p className="font-medium text-slate-900 mb-2">Purchase Details:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-700">Property Value:</div>
                    <div className="font-semibold">₹60,00,000</div>
                    <div className="text-slate-700">Down Payment (30%):</div>
                    <div className="font-semibold">₹18,00,000</div>
                    <div className="text-slate-700">Loan Amount (70%):</div>
                    <div className="font-semibold">₹42,00,000</div>
                    <div className="text-slate-700">Other Costs (stamp duty, etc):</div>
                    <div className="font-semibold">₹4,00,000</div>
                    <div className="text-slate-700 border-t pt-2 font-semibold">Total Cash Invested:</div>
                    <div className="font-semibold text-blue-700 border-t pt-2">₹22,00,000</div>
                  </div>
                </div>

                <div>
                  <p className="font-medium text-slate-900 mb-2">Annual Cash Flow:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-700">Annual Rent Received:</div>
                    <div className="font-semibold text-green-700">₹2,40,000</div>
                    <div className="text-slate-700">Annual EMI Paid:</div>
                    <div className="font-semibold text-red-700">-₹4,32,000</div>
                    <div className="text-slate-700">Maintenance Charges:</div>
                    <div className="font-semibold text-red-700">-₹36,000</div>
                    <div className="text-slate-700">Property Tax:</div>
                    <div className="font-semibold text-red-700">-₹12,000</div>
                    <div className="text-slate-700 border-t pt-2">Net Annual Cash Flow:</div>
                    <div className="font-semibold border-t pt-2 text-red-700">-₹2,40,000</div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded">
                  <p className="font-semibold text-yellow-900 mb-2">Analysis:</p>
                  <p className="text-sm text-slate-700">
                    Negative cash flow of ₹20,000/month initially. However, benefits include:
                  </p>
                  <ul className="text-sm text-slate-700 mt-2 space-y-1 ml-4">
                    <li>• Principal repayment builds equity (₹1,50,000/year)</li>
                    <li>• Property appreciation (assumed 8-10%/year)</li>
                    <li>• Tax benefits on interest (₹50,000-1,00,000/year)</li>
                    <li>• Rental increases 5-7% annually</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded">
                  <p className="font-semibold text-green-900 mb-2">After 5 Years:</p>
                  <div className="space-y-1 text-sm text-slate-700">
                    <p>Property Value: ₹88,50,000 (8% CAGR)</p>
                    <p>Loan Outstanding: ₹35,00,000</p>
                    <p>Your Equity: ₹53,50,000</p>
                    <p>Cash Invested: ₹22,00,000 + ₹12,00,000 (negative cashflow) = ₹34,00,000</p>
                    <p className="text-green-700 font-bold mt-2">
                      Net Gain: ₹53,50,000 - ₹34,00,000 = ₹19,50,000 (57% return in 5 years)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            Internal Rate of Return (IRR) for Real Estate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="font-semibold text-purple-900 mb-2">What is IRR?</p>
              <p className="text-sm text-slate-700">
                IRR is the annualized rate of return that considers the timing of all cash flows - initial investment, 
                ongoing expenses, rental income, and final sale proceeds. It's the most accurate measure for long-term investments.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">IRR Calculation Example:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-slate-900">Year</th>
                      <th className="text-left p-3 font-semibold text-slate-900">Cash Outflow</th>
                      <th className="text-left p-3 font-semibold text-slate-900">Cash Inflow</th>
                      <th className="text-left p-3 font-semibold text-slate-900">Net Cash Flow</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3">Year 0</td>
                      <td className="p-3 text-red-700">-₹60,00,000</td>
                      <td className="p-3">₹0</td>
                      <td className="p-3 font-semibold text-red-700">-₹60,00,000</td>
                    </tr>
                    <tr>
                      <td className="p-3">Year 1</td>
                      <td className="p-3 text-red-700">-₹50,000</td>
                      <td className="p-3 text-green-700">₹2,40,000</td>
                      <td className="p-3 font-semibold text-green-700">+₹1,90,000</td>
                    </tr>
                    <tr>
                      <td className="p-3">Year 2</td>
                      <td className="p-3 text-red-700">-₹50,000</td>
                      <td className="p-3 text-green-700">₹2,52,000</td>
                      <td className="p-3 font-semibold text-green-700">+₹2,02,000</td>
                    </tr>
                    <tr>
                      <td className="p-3">Year 3</td>
                      <td className="p-3 text-red-700">-₹50,000</td>
                      <td className="p-3 text-green-700">₹2,65,000</td>
                      <td className="p-3 font-semibold text-green-700">+₹2,15,000</td>
                    </tr>
                    <tr>
                      <td className="p-3">Year 4</td>
                      <td className="p-3 text-red-700">-₹50,000</td>
                      <td className="p-3 text-green-700">₹2,78,000</td>
                      <td className="p-3 font-semibold text-green-700">+₹2,28,000</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="p-3">Year 5</td>
                      <td className="p-3 text-red-700">-₹50,000</td>
                      <td className="p-3 text-green-700">₹2,92,000 + ₹88,50,000*</td>
                      <td className="p-3 font-semibold text-green-700">+₹91,42,000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-slate-600 italic mt-2">*Sale proceeds in Year 5</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <p className="font-semibold text-green-900 mb-2">IRR Calculation Result:</p>
                <p className="text-sm text-slate-700">Using financial calculator or Excel IRR function:</p>
                <p className="text-green-700 font-bold text-lg mt-1">IRR = 14.2% per annum</p>
                <p className="text-xs text-slate-600 mt-2">This beats most equity mutual funds and provides inflation hedge!</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">IRR Benchmarks:</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• <strong>Below 10%:</strong> Poor investment, better alternatives available</li>
                <li>• <strong>10-12%:</strong> Average, comparable to long-term equity returns</li>
                <li>• <strong>12-15%:</strong> Good investment with decent appreciation</li>
                <li>• <strong>Above 15%:</strong> Excellent, indicates emerging market or undervalued property</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <PieChart className="w-6 h-6 text-orange-600" />
            Total Cost of Ownership
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-700">
              Many investors forget ongoing costs. Here's a comprehensive breakdown of all costs over 10 years:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Cost Component</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Frequency</th>
                    <th className="text-left p-3 font-semibold text-slate-900">10-Year Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3">Purchase Price</td>
                    <td className="p-3 text-slate-700">One-time</td>
                    <td className="p-3 font-semibold">₹50,00,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">Stamp Duty & Registration</td>
                    <td className="p-3 text-slate-700">One-time</td>
                    <td className="p-3 font-semibold">₹3,00,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">Home Loan Interest</td>
                    <td className="p-3 text-slate-700">Monthly</td>
                    <td className="p-3 font-semibold text-red-700">₹28,00,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">Maintenance Charges</td>
                    <td className="p-3 text-slate-700">Monthly (₹4,000)</td>
                    <td className="p-3 font-semibold">₹4,80,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">Property Tax</td>
                    <td className="p-3 text-slate-700">Annual</td>
                    <td className="p-3 font-semibold">₹1,20,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">Repairs & Renovation</td>
                    <td className="p-3 text-slate-700">Periodic</td>
                    <td className="p-3 font-semibold">₹5,00,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">Insurance</td>
                    <td className="p-3 text-slate-700">Annual</td>
                    <td className="p-3 font-semibold">₹80,000</td>
                  </tr>
                  <tr>
                    <td className="p-3">Vacancy Periods</td>
                    <td className="p-3 text-slate-700">Lost rent</td>
                    <td className="p-3 font-semibold">₹2,00,000</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="p-3 font-bold">Total Cost</td>
                    <td className="p-3"></td>
                    <td className="p-3 font-bold text-orange-700">₹94,80,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p className="font-semibold text-orange-900 mb-2">⚠️ Key Insight:</p>
              <p className="text-sm text-slate-700">
                True cost is almost double the purchase price! Always factor in these costs when calculating returns. 
                A property that seems profitable might actually be barely breaking even.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Calculator className="w-6 h-6 text-red-600" />
            Break-Even Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-700">
              How long until your property investment breaks even (considering all costs and appreciation)?
            </p>

            <div className="bg-white p-4 border rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-3">Scenario Analysis:</h4>
              
              <div className="space-y-3 text-sm">
                <div className="bg-slate-50 p-3 rounded">
                  <p className="font-medium text-slate-900">Investment Details:</p>
                  <p className="text-slate-700">Total Investment: ₹60,00,000</p>
                  <p className="text-slate-700">Annual Net Cost (EMI - Rent): ₹2,40,000</p>
                  <p className="text-slate-700">Expected Appreciation: 8% per year</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="text-left p-2">Year</th>
                        <th className="text-left p-2">Property Value</th>
                        <th className="text-left p-2">Cumulative Cost</th>
                        <th className="text-left p-2">Net Position</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="p-2">0</td>
                        <td className="p-2">₹60,00,000</td>
                        <td className="p-2">₹60,00,000</td>
                        <td className="p-2 text-red-700">₹0</td>
                      </tr>
                      <tr>
                        <td className="p-2">3</td>
                        <td className="p-2">₹75,58,000</td>
                        <td className="p-2">₹67,20,000</td>
                        <td className="p-2 text-green-700">+₹8,38,000</td>
                      </tr>
                      <tr>
                        <td className="p-2">5</td>
                        <td className="p-2">₹88,16,000</td>
                        <td className="p-2">₹72,00,000</td>
                        <td className="p-2 text-green-700">+₹16,16,000</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="p-2 font-bold">7</td>
                        <td className="p-2 font-semibold">₹1,02,82,000</td>
                        <td className="p-2">₹76,80,000</td>
                        <td className="p-2 font-bold text-green-700">+₹26,02,000</td>
                      </tr>
                      <tr>
                        <td className="p-2">10</td>
                        <td className="p-2">₹1,29,46,000</td>
                        <td className="p-2">₹84,00,000</td>
                        <td className="p-2 font-bold text-green-700">+₹45,46,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-900">Break-Even Point: ~3-4 years</p>
                  <p className="text-slate-700 mt-1">
                    After this, property value exceeds all costs paid. By year 10, you're up ₹45+ lakhs!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">ROI Analysis Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Calculate total investment including all costs</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Project realistic appreciation (7-10% for metros)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Include rental income and growth</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Account for all ongoing expenses</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Calculate IRR for accurate returns</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Compare with alternative investments (stocks, MF)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Factor in illiquidity and effort required</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ROIAnalysis;
