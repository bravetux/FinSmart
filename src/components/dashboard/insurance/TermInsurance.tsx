"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, DollarSign, Clock, AlertTriangle, CheckCircle2, Heart } from "lucide-react";

const TermInsurance = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero */}
      <div className="bg-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Pure Protection for Your Family & Business</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Term Insurance: Securing Your Family's Future
          </h2>
          <p className="text-blue-100 text-lg max-w-xl">
            A straightforward, high-coverage protection plan designed to replace lost income and preserve the financial future of those who depend on you.
          </p>
        </div>
      </div>

      {/* Self-employed emphasis */}
      <Card className="p-6">
        <CardContent>
          <h3 className="text-xl font-bold mb-3">Why this matters for the self-employed</h3>
          <p className="text-slate-700 leading-relaxed">
            For self-employed individuals, there is no corporate safety net — no EPF, no group insurance, and no paid leave. Your income depends entirely on your health and ability to work. Term insurance isn't just a "good-to-have"; it is the ultimate hedge against the loss of your business and your family's financial security.
          </p>
        </CardContent>
      </Card>

      {/* How Term Insurance Works */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">🏗️ How Term Insurance Works</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border shadow-sm">
            <h4 className="font-semibold">Death Benefit</h4>
            <p className="text-sm text-slate-600">If you pass away during the policy term, your nominee receives the full Sum Assured.</p>
          </div>
          <div className="p-4 bg-white rounded-lg border shadow-sm">
            <h4 className="font-semibold">No Survival Benefit</h4>
            <p className="text-sm text-slate-600">There is usually no payout if you survive the term (unless you choose the expensive "Return of Premium" variant).</p>
          </div>
          <div className="p-4 bg-white rounded-lg border shadow-sm">
            <h4 className="font-semibold">Fixed Premiums</h4>
            <p className="text-sm text-slate-600">Your premium amount is locked in from day one for the entire duration.</p>
          </div>
        </div>
      </section>

      {/* Premium table */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">📊 Leading Plans & Estimated Premiums (₹1 Crore Cover)</h3>
        <p className="text-sm text-slate-600">Premiums are for non-smoking males, covered up to age 70.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left bg-slate-100">
                <th className="p-3 font-medium">Age</th>
                <th className="p-3 font-medium">Max Life (Smart Total)</th>
                <th className="p-3 font-medium">HDFC Life (Click2Protect)</th>
                <th className="p-3 font-medium">ICICI Pru (iProtect)</th>
                <th className="p-3 font-medium">Bajaj Allianz (eTouch)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">25</td>
                <td className="p-3">~₹9,700</td>
                <td className="p-3">~₹10,500</td>
                <td className="p-3">~₹10,200</td>
                <td className="p-3">~₹10,000</td>
              </tr>
              <tr className="border-t bg-white">
                <td className="p-3 font-medium">35</td>
                <td className="p-3">~₹15,400</td>
                <td className="p-3">~₹17,000</td>
                <td className="p-3">~₹16,500</td>
                <td className="p-3">~₹16,000</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">45</td>
                <td className="p-3">~₹31,000</td>
                <td className="p-3">~₹34,000</td>
                <td className="p-3">~₹33,500</td>
                <td className="p-3">~₹32,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Essential checklist */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">📋 Essential Checklist for Self-Employed Buyers</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-4">
            <CardContent>
              <h4 className="font-semibold">1. How Much Cover Do You Need?</h4>
              <ul className="list-disc ml-5 mt-2 text-sm text-slate-600 space-y-2">
                <li>Aim for a Sum Assured that covers: 10–25x your annual income.</li>
                <li>Include outstanding business loans (with personal guarantees).</li>
                <li>Plan for future milestones (children’s education, marriage) adjusted for inflation.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardContent>
              <h4 className="font-semibold">2. Documentation (The Financial Paperwork)</h4>
              <ul className="list-disc ml-5 mt-2 text-sm text-slate-600 space-y-2">
                <li><strong>Income Proof:</strong> 2–3 years of ITRs and CA-certified computation. Only "Business/Profession" income counts (not capital gains or interest).</li>
                <li><strong>KYC:</strong> PAN Card, Aadhaar, and a recent photograph.</li>
                <li><strong>Bank Records:</strong> 6 months of bank statements and a cancelled cheque.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardContent>
              <h4 className="font-semibold">3. Choosing the Right Payment Term</h4>
              <ul className="list-disc ml-5 mt-2 text-sm text-slate-600 space-y-2">
                <li><strong>Limited Pay:</strong> Pay for 5, 10, or 15 years but stay covered until 70 — recommended for self-employed to finish commitments during peak earning years.</li>
                <li><strong>Regular Pay:</strong> Pay every year for the entire policy duration — best if you prefer lower annual outgoings.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardContent>
              <h4 className="font-semibold">🛡️ Critical Riders (Add-ons)</h4>
              <ul className="list-disc ml-5 mt-2 text-sm text-slate-600 space-y-2">
                <li><strong>Waiver of Premium:</strong> Future premiums are waived if you become critically ill or disabled, keeping the policy active.</li>
                <li><strong>Critical Illness Rider:</strong> Pays a lump sum upon diagnosis of major illnesses (cancer, heart attack) to help with cash flow.</li>
                <li><strong>Accidental Disability Cover:</strong> Provides a payout if you permanently lose the ability to work due to an accident.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pro-tips */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">💡 Pro-Tips for Successful Approval</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4">
            <CardContent>
              <h4 className="font-semibold">File Accurate ITRs</h4>
              <p className="text-sm text-slate-600 mt-2">Insurers look at Net Profit, not Gross Turnover. Low declared income = Low insurance eligibility.</p>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardContent>
              <h4 className="font-semibold">No ITR? Consider Proxy Plans</h4>
              <p className="text-sm text-slate-600 mt-2">Look for "proxy-based underwriting" plans (e.g., Bajaj iSecure II) that assess lifestyle via credit scores, bank balances, or asset proxies.</p>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardContent>
              <h4 className="font-semibold">Choose Duration Wisely</h4>
              <p className="text-sm text-slate-600 mt-2">Don't buy cover only until 85 — a practical target is cover until age 65–70, the period by which most liabilities are cleared and dependents become self-sufficient.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 p-4 bg-slate-50 rounded-lg border">
          <p className="text-sm text-slate-700">
            Don't leave your business's future to chance. If you're unsure which income documents to submit or which rider fits your business model, I can help evaluate your situation and recommend the most appropriate plan and riders.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermInsurance;