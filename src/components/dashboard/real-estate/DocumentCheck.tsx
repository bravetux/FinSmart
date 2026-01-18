"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  ShieldCheck, 
  Building2, 
  AlertTriangle, 
  Scale, 
  ClipboardCheck,
  Receipt,
  Stamp,
  Map,
  BadgeCheck,
  Key,
  Home
} from 'lucide-react';

const DocumentCheck = () => {
  const documents = [
    {
      title: "1. Title Deed (Mother Deed)",
      icon: <BadgeCheck className="w-5 h-5" />,
      desc: "The most important document. It traces the history of ownership and confirms a clear, marketable title without legal disputes."
    },
    {
      title: "2. Sale Deed",
      icon: <FileText className="w-5 h-5" />,
      desc: "The primary legal document registered with the Sub-Registrar that transfers final ownership from the seller to the buyer."
    },
    {
      title: "3. Encumbrance Certificate (EC)",
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: "Mandatory proof from the sub-registrar's office that the property is free from any mortgages, legal claims, or unpaid loans."
    },
    {
      title: "4. Tax Receipts",
      icon: <Receipt className="w-5 h-5" />,
      desc: "Verify that all taxes are paid to the local body. Must include Property Tax, Drainage Tax, and Water Tax receipts for the latest year."
    },
    {
      title: "5. Building Plan Approval",
      icon: <Building2 className="w-5 h-5" />,
      desc: "Approval from the local municipal authority ensuring the construction complies with building regulations and zoning laws."
    },
    {
      title: "6. Occupancy Certificate (OC)",
      icon: <Home className="w-5 h-5" />,
      desc: "Issued after construction is finished, certifying the building is safe to live in and built according to the approved plan."
    },
    {
      title: "7. NOCs (No Objection Certificates)",
      icon: <ClipboardCheck className="w-5 h-5" />,
      desc: "Clearances from various departments including Fire Safety, Electricity Board (EB), and Water Supply & Sewage Boards."
    },
    {
      title: "8. Agreement to Sell",
      icon: <Stamp className="w-5 h-5" />,
      desc: "The foundational contract that outlines the price, payment schedule, and terms before the final Sale Deed is signed."
    },
    {
      title: "9. Possession Letter",
      icon: <Key className="w-5 h-5" />,
      desc: "The document issued by the developer or seller handing over physical control of the property to the buyer."
    },
    {
      title: "10. Survey & Land Records",
      icon: <Map className="w-5 h-5" />,
      desc: "Verification of physical land boundaries, area measurements, and checking for any encroachments using Govt land records."
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm">
        <div className="p-4 bg-white rounded-xl shadow-sm">
          <AlertTriangle className="w-8 h-8 text-amber-600" />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-amber-900">Why Check Documents?</h4>
          <p className="text-sm text-amber-800 leading-relaxed">
            Property is a high-value asset. Missing even one of these 'priority' documents can lead to legal battles or make the property impossible to sell later.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow border-slate-200">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-50 rounded-lg text-blue-600">
                  {doc.icon}
                </div>
                <CardTitle className="text-base">{doc.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 leading-relaxed">{doc.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="p-8 bg-slate-900 rounded-[2.5rem] text-center text-white space-y-4">
        <h4 className="text-xl font-bold">Pro Legal Tip</h4>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
          Always hire a professional **Property Lawyer** to perform a legal scrutiny of these documents before paying any token amount. Digital copies are good for initial checks, but only original physical copies count for final verification.
        </p>
      </div>
    </div>
  );
};

export default DocumentCheck;