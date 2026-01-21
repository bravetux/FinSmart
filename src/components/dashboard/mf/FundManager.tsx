"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, TrendingUp } from 'lucide-react';

const FundManager = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">Fund Manager Analysis</h2>
        <p className="text-purple-50 text-lg mt-4">The person behind your portfolio's success.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-600" />
            Why Fund Manager Matters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700">
            The fund manager is responsible for selecting stocks, timing entries/exits, and managing risk. Their decisions directly impact your returns.
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-slate-900 mb-2">Key Things to Check:</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Experience & Tenure (5+ years preferred)</li>
                <li>• Track record in previous funds</li>
                <li>• Investment philosophy & strategy</li>
                <li>• Performance in different market cycles</li>
                <li>• Frequency of fund manager changes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What Makes a Great Fund Manager?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-green-50 rounded-xl">
              <Target className="w-8 h-8 text-green-600 mb-3" />
              <h4 className="font-semibold mb-2">Consistency</h4>
              <p className="text-sm text-slate-600">Delivers returns across bull and bear markets</p>
            </div>
            <div className="p-5 bg-blue-50 rounded-xl">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-semibold mb-2">Discipline</h4>
              <p className="text-sm text-slate-600">Sticks to investment mandate and philosophy</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundManager;
