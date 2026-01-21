"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Users, ClipboardCheck, XCircle, TrendingUp } from 'lucide-react';

const LoanEligibility = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <FileCheck className="w-4 h-4" />
            <span>Loan Approval</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Loan Eligibility & Process
          </h2>
          <p className="text-cyan-50 text-lg max-w-2xl">
            Everything you need to know about getting your home loan approved
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <ClipboardCheck className="w-6 h-6 text-cyan-600" />
            Eligibility Criteria
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-slate-900">Criterion</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Salaried</th>
                    <th className="text-left p-3 font-semibold text-slate-900">Self-Employed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">Age</td>
                    <td className="p-3 text-slate-700">21-65 years</td>
                    <td className="p-3 text-slate-700">25-70 years</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Min. Income</td>
                    <td className="p-3 text-slate-700">₹25,000/month (Metro)</td>
                    <td className="p-3 text-slate-700">₹3 lakh/year profit</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Work Experience</td>
                    <td className="p-3 text-slate-700">2+ years (6 months current job)</td>
                    <td className="p-3 text-slate-700">3+ years in business</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Credit Score</td>
                    <td className="p-3 text-green-700" colSpan={2}>750+ (Excellent), 650-749 (Good), Below 650 (Difficult)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Debt-to-Income</td>
                    <td className="p-3 text-slate-700" colSpan={2}>Total EMIs should not exceed 50% of income</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Nationality</td>
                    <td className="p-3 text-slate-700" colSpan={2}>Indian citizen or NRI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Loan Amount Calculation</h4>
                <p className="text-sm text-slate-700 mb-2">Banks use multiplier method:</p>
                <ul className="space-y-1 text-sm text-slate-700 ml-4">
                  <li>• Gross monthly income × 60</li>
                  <li>• Or Net monthly income × 5 years × 12</li>
                </ul>
                <div className="mt-3 bg-white p-3 rounded">
                  <p className="text-xs text-slate-600">Example:</p>
                  <p className="text-sm text-slate-700">Monthly income: ₹1,00,000</p>
                  <p className="text-sm font-semibold text-blue-700">Max loan: ₹60,00,000</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Factors Affecting Eligibility</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>✓ Higher income = Higher eligibility</li>
                  <li>✓ Good credit score = Better terms</li>
                  <li>✓ Stable employment = More confidence</li>
                  <li>✓ Lower existing EMIs = More room</li>
                  <li>✓ Co-applicant = Increased eligibility</li>
                  <li>✓ Younger age = Longer tenure option</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <FileCheck className="w-6 h-6 text-purple-600" />
            Documents Required
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-purple-700 text-lg">For Salaried Individuals</h4>
              
              <div>
                <p className="font-medium text-slate-900 mb-2">Identity & Address Proof:</p>
                <ul className="space-y-1 text-sm text-slate-700 ml-4">
                  <li>• PAN Card (mandatory)</li>
                  <li>• Aadhaar Card</li>
                  <li>• Passport</li>
                  <li>• Driving License</li>
                  <li>• Voter ID</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-slate-900 mb-2">Income Proof:</p>
                <ul className="space-y-1 text-sm text-slate-700 ml-4">
                  <li>• Last 6 months salary slips</li>
                  <li>• Form 16 for last 2 years</li>
                  <li>• 6 months bank statement</li>
                  <li>• Employment certificate</li>
                  <li>• Offer letter (if recently joined)</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-slate-900 mb-2">Property Documents:</p>
                <ul className="space-y-1 text-sm text-slate-700 ml-4">
                  <li>• Sale agreement</li>
                  <li>• Property documents</li>
                  <li>• Builder-buyer agreement</li>
                  <li>• Allotment letter</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-blue-700 text-lg">For Self-Employed</h4>
              
              <div>
                <p className="font-medium text-slate-900 mb-2">Identity & Address Proof:</p>
                <ul className="space-y-1 text-sm text-slate-700 ml-4">
                  <li>• Same as salaried</li>
                  <li>• Business registration certificate</li>
                  <li>• GST registration</li>
                  <li>• Shop & establishment license</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-slate-900 mb-2">Income Proof:</p>
                <ul className="space-y-1 text-sm text-slate-700 ml-4">
                  <li>• ITR for last 3 years</li>
                  <li>• Profit & Loss statement</li>
                  <li>• Balance sheet (audited)</li>
                  <li>• 12 months bank statement</li>
                  <li>• CA certified financials</li>
                  <li>• Business continuity proof</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-slate-900 mb-2">Property Documents:</p>
                <ul className="space-y-1 text-sm text-slate-700 ml-4">
                  <li>• Same as salaried</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-sm font-semibold text-yellow-900">💡 Pro Tip:</p>
            <p className="text-sm text-slate-700 mt-1">
              Keep all documents ready in both original and photocopy before applying. Self-attested copies speed up the process.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Loan Approval Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Application & Initial Screening</h4>
                <p className="text-sm text-slate-700">Submit application with basic documents. Bank checks credit score and preliminary eligibility.</p>
                <p className="text-xs text-slate-600 mt-1">Timeline: 1-2 days</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Document Verification</h4>
                <p className="text-sm text-slate-700">Bank verifies income, employment, and identity documents. May request additional documents.</p>
                <p className="text-xs text-slate-600 mt-1">Timeline: 3-5 days</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Property Valuation</h4>
                <p className="text-sm text-slate-700">Bank-appointed valuer inspects property to determine market value and legal status.</p>
                <p className="text-xs text-slate-600 mt-1">Timeline: 5-7 days</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Legal & Technical Verification</h4>
                <p className="text-sm text-slate-700">Lawyer checks property title, encumbrances, and approvals. Technical team verifies construction quality.</p>
                <p className="text-xs text-slate-600 mt-1">Timeline: 7-15 days</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Sanction Letter</h4>
                <p className="text-sm text-slate-700">If approved, bank issues sanction letter with terms, loan amount, interest rate, and validity (usually 6 months).</p>
                <p className="text-xs text-slate-600 mt-1">Timeline: 1-2 days after verification</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Loan Agreement & Disbursement</h4>
                <p className="text-sm text-slate-700">Sign loan agreement, complete formalities, and funds are disbursed to seller or developer.</p>
                <p className="text-xs text-slate-600 mt-1">Timeline: 3-5 days</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
              <p className="font-semibold text-blue-900 mb-2">Total Timeline:</p>
              <p className="text-sm text-slate-700">Typically 2-4 weeks for complete approval and disbursement, assuming all documents are in order.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <XCircle className="w-6 h-6 text-red-600" />
            Common Rejection Reasons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Low Credit Score (Below 650)</p>
                <p className="text-xs text-slate-700">History of defaults, late payments, or high credit utilization</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Insufficient Income or High Existing EMIs</p>
                <p className="text-xs text-slate-700">Debt-to-income ratio exceeds 50%</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Unstable Employment History</p>
                <p className="text-xs text-slate-700">Frequent job changes or gaps in employment</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Property Legal Issues</p>
                <p className="text-xs text-slate-700">Clear title not available, pending litigations, or approval issues</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Incomplete or False Documentation</p>
                <p className="text-xs text-slate-700">Missing documents or information that doesn't match verification</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Property Valuation Lower Than Expected</p>
                <p className="text-xs text-slate-700">Market value assessed lower than purchase price</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Age Factor</p>
                <p className="text-xs text-slate-700">Older applicants may get shorter tenure or lower amounts</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Property in Negative List Area</p>
                <p className="text-xs text-slate-700">Banks have list of areas/builders they don't lend for</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Users className="w-6 h-6 text-orange-600" />
            Tips to Increase Eligibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">1. Add a Co-Applicant</h4>
              <p className="text-sm text-slate-700">Spouse, parents, or siblings can be co-applicants. Their income adds to eligibility.</p>
              <div className="bg-green-50 p-3 rounded mt-2 text-sm">
                <p className="text-slate-700">Example: Your income ₹60,000 + Spouse's ₹40,000 = ₹1,00,000 combined</p>
                <p className="text-green-700 font-semibold">Loan eligibility can increase by 30-40%</p>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">2. Improve Credit Score</h4>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Pay all EMIs and credit card bills on time for 6-12 months</li>
                <li>• Reduce credit card utilization below 30%</li>
                <li>• Don't apply for multiple loans simultaneously</li>
                <li>• Clear any outstanding dues</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">3. Close Existing Loans</h4>
              <p className="text-sm text-slate-700">Pay off smaller personal loans or credit card debt to reduce EMI burden.</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">4. Opt for Longer Tenure</h4>
              <p className="text-sm text-slate-700">20-30 year tenure reduces EMI, making you eligible for higher loan amount. You can always prepay later.</p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">5. Show Additional Income Sources</h4>
              <ul className="space-y-1 text-sm text-slate-700 ml-4">
                <li>• Rental income from other properties</li>
                <li>• Interest/dividend income</li>
                <li>• Freelance or consultancy income</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">6. Increase Down Payment</h4>
              <p className="text-sm text-slate-700">Higher down payment = Lower loan requirement = Better approval chances</p>
            </div>

            <div className="border-l-4 border-indigo-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">7. Choose RERA Approved Property</h4>
              <p className="text-sm text-slate-700">Banks prefer RERA registered projects - faster approval and better terms.</p>
            </div>

            <div className="border-l-4 border-pink-600 pl-4">
              <h4 className="font-semibold text-slate-900 mb-2">8. Apply During Bank Offers</h4>
              <p className="text-sm text-slate-700">Festival seasons often have relaxed eligibility criteria and better rates.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-slate-900">Pre-Approval Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Credit score checked (Aim for 750+)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">All documents ready and verified</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Existing EMIs within control (below 40%)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Property has clear title and RERA registration</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Employment stable (2+ years experience)</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Down payment funds arranged</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-slate-700">Compared rates from 3-4 banks</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanEligibility;
