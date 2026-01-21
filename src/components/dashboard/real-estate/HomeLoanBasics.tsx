"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Percent, Calendar, IndianRupee, TrendingDown } from 'lucide-react';

const HomeLoanBasics = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Home className="w-4 h-4" />
            <span>Home Financing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Home Loan Basics
          </h2>
          <p className="text-emerald-50 text-lg max-w-2xl">
            Understanding home loans can save you lakhs of rupees over the loan tenure
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Home className="w-6 h-6 text-emerald-600" />
            Types of Home Loans
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-emerald-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">1. Home Purchase Loan</h4>
              <p className="text-sm text-slate-700 mb-2">Most common type - for buying a new or resale property</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Loan amount: Up to 90% of property value</li>
                <li>• Tenure: Up to 30 years</li>
                <li>• Interest rate: 8.5% - 9.5% (as of 2026)</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">2. Home Construction Loan</h4>
              <p className="text-sm text-slate-700 mb-2">For constructing a house on owned plot</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Disbursed in stages as construction progresses</li>
                <li>• Requires construction plans and approvals</li>
                <li>• Slightly higher interest rates</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">3. Home Extension/Improvement Loan</h4>
              <p className="text-sm text-slate-700 mb-2">For renovating or extending existing property</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Smaller loan amounts</li>
                <li>• Shorter tenure (5-15 years)</li>
                <li>• Requires ownership proof</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">4. Plot Purchase Loan</h4>
              <p className="text-sm text-slate-700 mb-2">For buying land (with construction obligation)</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Lower LTV ratio (60-70%)</li>
                <li>• Must start construction within 2-3 years</li>
                <li>• Limited tax benefits initially</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">5. Balance Transfer/Top-Up Loan</h4>
              <p className="text-sm text-slate-700 mb-2">Switching to better rates or additional funds</p>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Lower interest rates</li>
                <li>• Additional funds available</li>
                <li>• Processing charges apply</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Percent className="w-6 h-6 text-blue-600" />
            Fixed vs Floating Interest Rates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-700 text-lg">Fixed Rate 🔒</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-slate-900">How it works:</p>
                  <p className="text-slate-700">Interest rate remains constant throughout the tenure</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Advantages:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• EMI remains same - easy budgeting</li>
                    <li>• Protection from rate hikes</li>
                    <li>• Peace of mind</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Disadvantages:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Usually 0.5-1% higher than floating</li>
                    <li>• Can't benefit from rate cuts</li>
                    <li>• Less flexibility</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-medium text-slate-900">Best for:</p>
                  <p className="text-slate-700">Risk-averse borrowers expecting rate hikes</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 text-lg">Floating Rate 📊</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-slate-900">How it works:</p>
                  <p className="text-slate-700">Interest rate linked to repo rate/MCLR - changes periodically</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Advantages:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• Lower initial rates</li>
                    <li>• Benefit from rate cuts</li>
                    <li>• More popular and competitive</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Disadvantages:</p>
                  <ul className="space-y-1 text-slate-700 ml-4">
                    <li>• EMI can increase with rate hikes</li>
                    <li>• Uncertainty in budgeting</li>
                    <li>• Tenure may increase</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-medium text-slate-900">Best for:</p>
                  <p className="text-slate-700">Long-term borrowers, stable rate environment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-sm font-semibold text-yellow-900">💡 Popular Choice:</p>
            <p className="text-sm text-slate-700 mt-1">
              Most borrowers (80%+) opt for floating rates due to lower initial rates and long-term benefits. Some banks offer hybrid loans with fixed rate for first 2-3 years.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Calendar className="w-6 h-6 text-purple-600" />
            Loan Tenure Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-700">
              Home loan tenure typically ranges from 5 to 30 years. Choosing the right tenure impacts both EMI and total interest paid.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Tenure</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Monthly EMI</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Total Interest</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Total Payment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">10 years</td>
                    <td className="p-3 text-slate-700">₹48,251</td>
                    <td className="p-3 text-red-700">₹17,90,120</td>
                    <td className="p-3 text-slate-700">₹57,90,120</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">15 years</td>
                    <td className="p-3 text-slate-700">₹38,449</td>
                    <td className="p-3 text-orange-700">₹29,20,820</td>
                    <td className="p-3 text-slate-700">₹69,20,820</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">20 years</td>
                    <td className="p-3 text-slate-700">₹33,654</td>
                    <td className="p-3 text-orange-700">₹40,76,960</td>
                    <td className="p-3 text-slate-700">₹80,76,960</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="p-3 font-medium">25 years</td>
                    <td className="p-3 text-green-700">₹31,011</td>
                    <td className="p-3 text-red-700">₹53,03,300</td>
                    <td className="p-3 text-slate-700">₹93,03,300</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">30 years</td>
                    <td className="p-3 text-green-700">₹29,557</td>
                    <td className="p-3 text-red-700">₹66,40,520</td>
                    <td className="p-3 text-slate-700">₹1,06,40,520</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 italic">*Example: ₹40 lakh loan at 9% interest</p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-900 mb-2">Shorter Tenure (10-15 years)</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>✓ Save lakhs in interest</li>
                  <li>✓ Become debt-free faster</li>
                  <li>✗ Higher monthly EMI</li>
                  <li>✗ Less cash flow for investments</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-900 mb-2">Longer Tenure (20-30 years)</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>✓ Lower monthly EMI</li>
                  <li>✓ Better cash flow</li>
                  <li>✗ Pay significantly more interest</li>
                  <li>✗ Long debt obligation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <IndianRupee className="w-6 h-6 text-orange-600" />
            Down Payment Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <p className="text-sm font-semibold text-orange-900">Standard LTV (Loan-to-Value) Ratios:</p>
              <ul className="space-y-2 text-sm text-slate-700 mt-3">
                <li>• <strong>Property value up to ₹30 lakh:</strong> 90% loan (10% down payment)</li>
                <li>• <strong>Property value ₹30-75 lakh:</strong> 80% loan (20% down payment)</li>
                <li>• <strong>Property value above ₹75 lakh:</strong> 75% loan (25% down payment)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Example Calculation:</h4>
              <div className="bg-white p-4 border rounded-lg">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Property Value:</div>
                  <div className="font-semibold">₹50,00,000</div>
                  <div>LTV Ratio:</div>
                  <div className="font-semibold">80%</div>
                  <div>Maximum Loan:</div>
                  <div className="font-semibold text-blue-700">₹40,00,000</div>
                  <div>Down Payment Required:</div>
                  <div className="font-semibold text-orange-700">₹10,00,000 (20%)</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900">Additional Costs to Budget For:</h4>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Stamp duty & registration: 5-7% of property value</li>
                <li>• GST on under-construction: 5% (on non-land portion)</li>
                <li>• Home loan processing fee: 0.25-1% of loan amount</li>
                <li>• Property insurance: ₹5,000-15,000/year</li>
                <li>• Legal & valuation charges: ₹10,000-30,000</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-900">💡 Smart Tip:</p>
              <p className="text-sm text-slate-700 mt-1">
                Higher down payment = Lower EMI + Less interest + Better loan terms. Aim for at least 20-25% down payment if possible.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingDown className="w-6 h-6 text-red-600" />
            Tax Benefits on Home Loans
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Section</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Component</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Max Deduction</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Conditions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">80C</td>
                    <td className="p-3 text-slate-700">Principal repayment</td>
                    <td className="p-3 text-green-700">₹1,50,000</td>
                    <td className="p-3 text-slate-700 text-xs">Part of overall 80C limit</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">24(b)</td>
                    <td className="p-3 text-slate-700">Interest on loan</td>
                    <td className="p-3 text-green-700">₹2,00,000</td>
                    <td className="p-3 text-slate-700 text-xs">Self-occupied property</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">80EEA</td>
                    <td className="p-3 text-slate-700">Additional interest</td>
                    <td className="p-3 text-green-700">₹1,50,000</td>
                    <td className="p-3 text-slate-700 text-xs">First-time buyer, affordable housing</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">24(b)</td>
                    <td className="p-3 text-slate-700">Interest (Let-out)</td>
                    <td className="p-3 text-green-700">No limit</td>
                    <td className="p-3 text-slate-700 text-xs">Rented out property</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="font-semibold text-slate-900 mb-2">Maximum Tax Benefit Example:</p>
              <div className="space-y-1 text-sm text-slate-700">
                <p>• Principal repayment (80C): ₹1,50,000</p>
                <p>• Interest payment (24b): ₹2,00,000</p>
                <p>• Additional interest (80EEA): ₹1,50,000</p>
                <p className="font-semibold text-green-700 mt-2">Total deduction: Up to ₹5,00,000</p>
                <p className="text-xs italic mt-2">*For 30% tax bracket: Saves up to ₹1,50,000 in taxes annually</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900">Important Conditions:</h4>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Property should not be sold within 5 years (else benefits reversed)</li>
                <li>• Benefits available from year of possession</li>
                <li>• Pre-EMI interest can be claimed in 5 equal installments</li>
                <li>• Joint loan = Both borrowers can claim full deduction</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Quick Decision Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-slate-900">Choose Fixed Rate if:</p>
              <ul className="space-y-1 text-slate-700 ml-4 mt-1">
                <li>✓ You expect interest rates to rise</li>
                <li>✓ You want predictable EMIs</li>
                <li>✓ Shorter loan tenure (5-10 years)</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Choose Floating Rate if:</p>
              <ul className="space-y-1 text-slate-700 ml-4 mt-1">
                <li>✓ You want lower initial rates</li>
                <li>✓ Long tenure loan (20+ years)</li>
                <li>✓ Stable or declining rate environment</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Choose Longer Tenure if:</p>
              <ul className="space-y-1 text-slate-700 ml-4 mt-1">
                <li>✓ You want lower EMI</li>
                <li>✓ You can invest surplus at higher returns</li>
                <li>✓ Your income will grow significantly</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeLoanBasics;
