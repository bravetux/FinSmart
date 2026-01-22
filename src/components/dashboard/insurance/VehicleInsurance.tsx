"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Car, 
  Shield, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Wrench,
  Users,
  FileText,
  TrendingUp
} from 'lucide-react';

const VehicleInsurance = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Car className="w-4 h-4" />
            <span>Protecting Your Vehicle</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Vehicle Insurance: Essential Protection for First-Time Buyers
          </h2>
          <p className="text-orange-50 text-lg max-w-2xl">
            Vehicle insurance is not just legally mandatory in India — it's your financial shield against accidents, theft, natural disasters, and third-party liabilities. Understanding the right coverage can save you lakhs.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Why Vehicle Insurance is Mandatory */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Why Vehicle Insurance is Required</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
            <Shield className="w-8 h-8 text-orange-600" />
            <h4 className="font-bold">Legal Requirement</h4>
            <p className="text-xs text-slate-500">Third-party insurance is mandatory under the Motor Vehicles Act, 1988. Driving without insurance can lead to fines up to ₹2,000 and/or 3 months imprisonment.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
            <DollarSign className="w-8 h-8 text-emerald-600" />
            <h4 className="font-bold">Financial Protection</h4>
            <p className="text-xs text-slate-500">Accidents can cost lakhs in repairs, medical bills, and legal liabilities. Insurance protects your savings from catastrophic expenses.</p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6 space-y-3">
            <Users className="w-8 h-8 text-blue-600" />
            <h4 className="font-bold">Third-Party Protection</h4>
            <p className="text-xs text-slate-500">Covers damages to other people's property, injuries, or even death caused by your vehicle — liabilities that can run into crores.</p>
          </Card>
        </div>
      </section>

      {/* Types of Vehicle Insurance */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Types of Vehicle Insurance</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Understanding the difference between these two types is crucial for first-time buyers.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Third-Party Insurance */}
          <Card className="border-blue-200 bg-blue-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-xl text-blue-900">1. Third-Party (TP) Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-blue-100 space-y-2">
                <p className="text-sm font-bold text-blue-700">What It Covers</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Injuries or death to other people</li>
                  <li>Damage to other people's vehicles or property</li>
                  <li>Legal liabilities arising from accidents</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-blue-100 space-y-2">
                <p className="text-sm font-bold text-blue-700">What It Doesn't Cover</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Damage to YOUR vehicle</li>
                  <li>Theft of your vehicle</li>
                  <li>Personal injuries to you</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-blue-100">
                <p className="text-xs font-bold text-blue-900 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Cost: ₹2,000–₹5,000/year
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Legally mandatory. Lower premium but limited protection.</p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehensive Insurance */}
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-600" />
                <CardTitle className="text-xl text-emerald-900">2. Comprehensive Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-emerald-100 space-y-2">
                <p className="text-sm font-bold text-emerald-700">What It Covers</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Everything in Third-Party coverage</li>
                  <li>Damage to YOUR vehicle (accidents, fire, natural disasters)</li>
                  <li>Theft of your vehicle</li>
                  <li>Personal accident cover for the owner-driver</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-emerald-100 space-y-2">
                <p className="text-sm font-bold text-emerald-700">What It Doesn't Cover (by default)</p>
                <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                  <li>Engine damage due to water ingress (requires add-on)</li>
                  <li>Wear and tear / consumables (requires add-on)</li>
                  <li>Depreciation on parts (requires Zero Depreciation add-on)</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-emerald-100">
                <p className="text-xs font-bold text-emerald-900 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Cost: ₹8,000–₹25,000/year
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Recommended for new vehicles. Complete protection with higher premium.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Add-ons */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-emerald-700 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" /> Essential Add-ons for First-Time Buyers
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          These add-ons enhance your comprehensive insurance and are worth considering based on your vehicle's age and usage.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-lg">Zero Depreciation Cover</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed">
                In a standard policy, the insurer deducts depreciation on replaced parts (plastic, metal, rubber). With zero depreciation, you get the full claim amount without any deduction.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg border">
                <p className="text-xs font-bold text-slate-700 mb-1">Example</p>
                <p className="text-xs text-slate-600">A bumper repair costs ₹20,000. Without Zero Dep, you pay ₹10,000 after 50% depreciation. With Zero Dep, the insurer pays ₹20,000.</p>
              </div>
              <p className="text-xs text-emerald-700 font-semibold">✓ Highly recommended for vehicles less than 5 years old</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Wrench className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-lg">Engine Protection Cover</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed">
                Covers engine damage due to water ingress (common during monsoons), oil leakage, or hydrostatic lock. Standard policies exclude this.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg border">
                <p className="text-xs font-bold text-slate-700 mb-1">Reality Check</p>
                <p className="text-xs text-slate-600">Engine repairs can cost ₹50,000–₹2,00,000. This add-on typically costs ₹1,000–₹3,000/year.</p>
              </div>
              <p className="text-xs text-emerald-700 font-semibold">✓ Essential if you live in flood-prone areas or drive through waterlogged roads</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-lg">Roadside Assistance</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed">
                Provides 24x7 emergency services like towing, flat tire replacement, fuel assistance, and battery jumpstart.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg border">
                <p className="text-xs font-bold text-slate-700 mb-1">Added Benefit</p>
                <p className="text-xs text-slate-600">Most insurers include this for free or charge ₹200–₹500/year. Very useful for long-distance travelers.</p>
              </div>
              <p className="text-xs text-emerald-700 font-semibold">✓ Nice-to-have for peace of mind during road trips</p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-red-600" />
                <CardTitle className="text-lg">Return to Invoice (RTI)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-slate-600 leading-relaxed">
                If your vehicle is stolen or completely damaged beyond repair (total loss), RTI ensures you get the full invoice value instead of the depreciated Insured Declared Value (IDV).
              </p>
              <div className="p-3 bg-slate-50 rounded-lg border">
                <p className="text-xs font-bold text-slate-700 mb-1">Example</p>
                <p className="text-xs text-slate-600">You bought a car for ₹10 Lakh. After 3 years, IDV is ₹6 Lakh. With RTI, you get ₹10 Lakh on total loss.</p>
              </div>
              <p className="text-xs text-emerald-700 font-semibold">✓ Recommended for expensive vehicles (₹15 Lakh+) less than 3 years old</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Avoid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-red-700 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" /> Common Mistakes First-Time Buyers Make
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-red-900">Choosing the Cheapest Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-slate-600">
                Low premium often means low IDV (Insured Declared Value). If your vehicle is stolen or totaled, you'll get much less than its actual market value.
              </p>
              <div className="pt-2 border-t border-red-100">
                <p className="text-xs font-bold text-red-900 flex items-center gap-1">
                  <XCircle className="w-3 h-3" /> Avoid: Always verify IDV before buying
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-red-900">Not Declaring Modifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-slate-600">
                Custom parts, CNG/LPG kits, or accessories must be declared. If you don't, claims related to these will be rejected.
              </p>
              <div className="pt-2 border-t border-red-100">
                <p className="text-xs font-bold text-red-900 flex items-center gap-1">
                  <XCircle className="w-3 h-3" /> Avoid: Declare all modifications upfront
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-red-900">Letting Your Policy Lapse</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-slate-600">
                If your policy expires and you renew after 90 days, you'll lose No Claim Bonus (NCB) and need a vehicle inspection. Plus, you're legally at risk during the lapse period.
              </p>
              <div className="pt-2 border-t border-red-100">
                <p className="text-xs font-bold text-red-900 flex items-center gap-1">
                  <XCircle className="w-3 h-3" /> Avoid: Set renewal reminders
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* No Claim Bonus */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-blue-700">Understanding No Claim Bonus (NCB)</h3>
        <Card className="border-blue-200 bg-blue-50/50 shadow-md">
          <CardContent className="p-6 space-y-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              NCB is a discount on your premium for every claim-free year. It can go up to 50% after 5 consecutive years without claims, saving you thousands annually.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left bg-white">
                    <th className="p-3 font-medium border">Claim-Free Years</th>
                    <th className="p-3 font-medium border">NCB Discount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border">
                    <td className="p-3 border">1st Year</td>
                    <td className="p-3 border text-emerald-700 font-semibold">20%</td>
                  </tr>
                  <tr className="border bg-white">
                    <td className="p-3 border">2nd Year</td>
                    <td className="p-3 border text-emerald-700 font-semibold">25%</td>
                  </tr>
                  <tr className="border">
                    <td className="p-3 border">3rd Year</td>
                    <td className="p-3 border text-emerald-700 font-semibold">35%</td>
                  </tr>
                  <tr className="border bg-white">
                    <td className="p-3 border">4th Year</td>
                    <td className="p-3 border text-emerald-700 font-semibold">45%</td>
                  </tr>
                  <tr className="border">
                    <td className="p-3 border">5th Year+</td>
                    <td className="p-3 border text-emerald-700 font-semibold">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <p className="text-xs font-bold text-blue-700 mb-1">Pro Tip</p>
              <p className="text-xs text-slate-600">NCB is linked to you, not the vehicle. If you sell your car and buy a new one, you can transfer your NCB to the new policy.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Claim Process */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">How to File a Claim (Step-by-Step)</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-4 bg-white shadow-sm border-l-4 border-l-blue-600">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h4 className="font-bold text-sm">Inform Immediately</h4>
              <p className="text-xs text-slate-600">Call your insurer within 24-48 hours of the incident. Register an FIR if there's theft or third-party injury.</p>
            </div>
          </Card>

          <Card className="p-4 bg-white shadow-sm border-l-4 border-l-emerald-600">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h4 className="font-bold text-sm">Document Everything</h4>
              <p className="text-xs text-slate-600">Take photos/videos of the damage from multiple angles. Get a surveyor's inspection report from your insurer.</p>
            </div>
          </Card>

          <Card className="p-4 bg-white shadow-sm border-l-4 border-l-orange-600">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <h4 className="font-bold text-sm">Choose Garage</h4>
              <p className="text-xs text-slate-600">Select from network garages (cashless repair) or your preferred garage (reimbursement mode).</p>
            </div>
          </Card>

          <Card className="p-4 bg-white shadow-sm border-l-4 border-l-purple-600">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <h4 className="font-bold text-sm">Submit Documents</h4>
              <p className="text-xs text-slate-600">Provide: Claim form, policy copy, driving license, RC, FIR (if applicable), and repair bills.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Golden Rules */}
      <div className="p-8 bg-gradient-to-br from-orange-600 to-orange-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold">Golden Rules for First-Time Vehicle Insurance Buyers</h4>
        <ul className="space-y-2 text-orange-50">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Always buy Comprehensive Insurance</strong> for new vehicles — don't rely only on mandatory Third-Party coverage.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Add Zero Depreciation</strong> and <strong>Engine Protection</strong> if your vehicle is less than 5 years old.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Verify the IDV</strong> (Insured Declared Value) — it should match your vehicle's current market value.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Renew on time</strong> to preserve your No Claim Bonus and avoid inspection hassles.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <span><strong>Compare policies</strong> on claim settlement ratio and network garages, not just premium.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleInsurance;
