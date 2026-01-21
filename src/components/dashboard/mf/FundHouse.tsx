"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Scale } from 'lucide-react';

const FundHouse = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Fund House Comparison</h2>
        <p className="text-teal-50 text-lg mt-4">Understanding different Asset Management Companies (AMCs)</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-teal-600" />
            Top AMCs in India
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {['SBI Mutual Fund', 'HDFC Mutual Fund', 'ICICI Prudential', 'Axis Mutual Fund', 'Kotak Mutual Fund', 'Nippon India MF'].map((amc) => (
              <div key={amc} className="p-4 bg-slate-50 rounded-lg border">
                <p className="font-semibold">{amc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What to Check in an AMC?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Total AUM and market position</li>
            <li>• Track record across categories</li>
            <li>• Fund manager stability</li>
            <li>• Customer service quality</li>
            <li>• Digital platform usability</li>
            <li>• Transparency in operations</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundHouse;
