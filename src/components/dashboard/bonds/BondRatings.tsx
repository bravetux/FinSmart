"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ShieldCheck, ShieldAlert, AlertTriangle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const ratingTypes = [
  {
    grade: "AAA",
    label: "Highest Safety",
    description: "Extremely strong capacity to meet financial obligations. Lowest credit risk.",
    color: "bg-emerald-100 text-emerald-700",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
  },
  {
    grade: "AA",
    label: "High Safety",
    description: "Very strong capacity to meet financial obligations. Very low credit risk.",
    color: "bg-blue-100 text-blue-700",
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />
  },
  {
    grade: "A",
    label: "Adequate Safety",
    description: "Strong capacity to meet financial obligations but susceptible to adverse economic conditions.",
    color: "bg-sky-100 text-sky-700",
    icon: <ShieldCheck className="w-5 h-5 text-sky-600" />
  },
  {
    grade: "BBB",
    label: "Moderate Safety",
    description: "Moderate safety; capacity to meet obligations is adequate but changes in circumstances are likely to impair it.",
    color: "bg-amber-100 text-amber-700",
    icon: <ShieldAlert className="w-5 h-5 text-amber-600" />
  },
  {
    grade: "BB & Below",
    label: "Junk / High Yield",
    description: "Speculative grade. Higher risk of default but offers significantly higher interest rates.",
    color: "bg-red-100 text-red-700",
    icon: <AlertTriangle className="w-5 h-5 text-red-600" />
  }
];

const BondRatings = () => {
  return (
    <section className="space-y-8 py-12 border-t">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Understanding Bond Ratings</h3>
        <p className="text-slate-500">Ratings are assigned by agencies like CRISIL, ICRA, and CARE to help you judge safety.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ratingTypes.map((rating, i) => (
          <Card key={i} className="border-slate-100 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center mb-2">
                <div className="p-2 bg-slate-50 rounded-lg">{rating.icon}</div>
                <Badge variant="secondary" className={rating.color}>{rating.grade}</Badge>
              </div>
              <CardTitle className="text-lg">{rating.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 leading-relaxed">{rating.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex items-start gap-4">
        <Star className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
        <div className="space-y-1">
          <h4 className="font-bold text-blue-900">The "Investment Grade" Threshold</h4>
          <p className="text-sm text-blue-800 leading-relaxed">
            Bonds rated <strong>BBB- and above</strong> are considered "Investment Grade." Anything below that is considered "Speculative" or "Junk," meaning the risk of losing your principal is significantly higher.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BondRatings;