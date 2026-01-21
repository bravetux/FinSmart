"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale } from 'lucide-react';

const ActiveVsPassive = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Active vs Passive Investing</h2>
        <p className="text-violet-50 text-lg mt-4">The great debate in mutual fund investing</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle>Active Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-700">Fund manager actively selects stocks to beat the benchmark index.</p>
            <div>
              <h5 className="font-semibold text-green-900 mb-1">Pros:</h5>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Potential to beat market returns</li>
                <li>• Active risk management</li>
                <li>• Flexibility in stock selection</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-900 mb-1">Cons:</h5>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Higher expense ratio (1-2.5%)</li>
                <li>• Most funds underperform benchmark</li>
                <li>• Fund manager risk</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle>Passive Management</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-700">Replicates an index - no active stock picking.</p>
            <div>
              <h5 className="font-semibold text-green-900 mb-1">Pros:</h5>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Very low expense ratio (0.05-0.5%)</li>
                <li>• Guaranteed market returns</li>
                <li>• No fund manager risk</li>
                <li>• Transparent & predictable</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-900 mb-1">Cons:</h5>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Cannot beat the market</li>
                <li>• No downside protection</li>
                <li>• Must accept market volatility</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-purple-200 bg-purple-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-purple-600" />
            Which One to Choose?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-slate-700">
            <p><strong>Choose Passive (Index/ETF) if:</strong></p>
            <ul className="pl-6 space-y-1">
              <li>• You want low-cost, hassle-free investing</li>
              <li>• You're a beginner</li>
              <li>• You're investing for the long term (10+ years)</li>
              <li>• You believe most active funds can't beat the index</li>
            </ul>
            <p className="mt-4"><strong>Choose Active if:</strong></p>
            <ul className="pl-6 space-y-1">
              <li>• You've identified consistently outperforming funds</li>
              <li>• You want sector-specific or thematic exposure</li>
              <li>• You prefer small/mid-cap funds (harder to replicate passively)</li>
            </ul>
            <p className="mt-4 font-semibold text-purple-900">Recommended Approach: <span className="text-green-700">Core-Satellite Strategy</span></p>
            <p>70% in passive (index funds) + 30% in carefully selected active funds for alpha generation.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveVsPassive;
