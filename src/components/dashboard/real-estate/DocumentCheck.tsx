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
  UserCheck,
  Map,
  BadgeCheck
} from 'lucide-react';

const DocumentCheck = () => {
  const documents = [
    {
      title: "Title Deed",
      icon: <BadgeCheck className="w-5 h-5" />,
      desc: "Confirms ownership and clear marketable title without legal disputes."
    },
    {
      title: "Sale Deed",
      icon: <FileText className="w-5 h-5" />,
      desc: "The primary legal document that transfers ownership from seller to buyer."
    },
    {
      title: "Building Plan Approval",
      icon: <Building2 className="w-5 h-5" />,
      desc: "Ensures construction complies with building regulations and zoning laws."
    },
    {
      title: "Encumbrance Certificate (EC)",
      icon: <ShieldCheck className="w-5 h-5" />,
      desc: "Verifies property is free from mortgages, loans, or legal liabilities."
    },
    {
      title: "Tax Receipts",
      icon: <Receipt className="w-5 h-5" />,
      desc: "Ensures all property taxes and maintenance dues are cleared by the seller."
    },
    {
      title: "NOCs (No Objection Certificates)",
      icon: <ClipboardCheck className="w-5 h-5" />,
      desc: "Certificates from water, electricity, fire, and development boards."
    },
    {
      title: "Agreement to Sell",
      icon: <Stamp className="w-5 h-5" />,
      desc: "Preliminary agreement outlining terms, price, and payment schedule."
    },
    {
      title: "Builder-Buyer Agreement",
      icon: <Scale className="w-5 h-5" />,
      desc: "Comprehensive document governing rights and obligations of both parties."
    },
    {
      title: "Survey & Land Records",
      icon: <Map className="w-5 h-5" />,
      desc: "Verification of land boundaries, area, and encroachment status."
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="p-4 bg-white rounded-xl shadow-sm">
          <AlertTriangle className="w-8 h-8 text-amber-600" />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-amber-900">Why Check Documents?</h4>
          <p className="text-sm text-amber-800 leading-relaxed">
            Buying property is a significant financial milestone. Meticulous verification minimizes the risk of legal title issues or financial liabilities.
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
    </div>
  );
};

export default DocumentCheck;