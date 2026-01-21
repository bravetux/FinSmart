"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Target, CheckCircle, XCircle, Star, TrendingUp } from 'lucide-react';

const FundSelection = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Search className="w-4 h-4" />
            <span>Smart Selection</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            How to Select the Right Mutual Fund
          </h2>
          <p className="text-blue-50 text-lg max-w-2xl">
            With 2000+ schemes available, choosing the right fund requires a systematic approach.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Target className="w-6 h-6 text-indigo-600" />
            Step-by-Step Selection Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Define Your Goal & Time Horizon</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Short-term (1-3 years): Debt/Liquid funds</li>
                  <li>• Medium-term (3-5 years): Hybrid/Balanced funds</li>
                  <li>• Long-term (5+ years): Equity funds</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Check Consistency (3-5 Year Returns)</h4>
                <p className="text-sm text-slate-700">Look for funds that consistently beat their benchmark and category average, not just one-year wonders.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Analyze Risk-Adjusted Returns</h4>
                <p className="text-sm text-slate-700">Use Sharpe Ratio, Standard Deviation, and Sortino Ratio to assess if returns justify the risk taken.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Check Expense Ratio</h4>
                <p className="text-sm text-slate-700">Lower is better. For equity: Below 1.5% (direct), For debt: Below 0.7%</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Evaluate Fund Manager Track Record</h4>
                <p className="text-sm text-slate-700">Check manager's experience, tenure with fund, and performance in previous funds.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Review Portfolio & Holdings</h4>
                <p className="text-sm text-slate-700">Check top 10 holdings, sector allocation, and whether the fund sticks to its stated mandate.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">7</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Compare with Peers & Benchmark</h4>
                <p className="text-sm text-slate-700">Fund should beat category average and benchmark over 3-5 years.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <CheckCircle className="w-5 h-5 text-green-600" />
            What to Look For (Green Flags)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Consistent top-quartile performance (3-5 years)</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Lower expense ratio than category average</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Experienced fund manager (5+ years)</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Large AUM (₹1000+ cr) but not too large</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Diversified portfolio (30-50 stocks)</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Good downside protection (low drawdowns)</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Sticks to investment mandate</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">Reputed AMC with good track record</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-red-200 bg-red-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <XCircle className="w-5 h-5 text-red-600" />
            What to Avoid (Red Flags)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-700"><strong>Chasing last year's best performer</strong> - Past returns don't guarantee future success</span>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-700"><strong>New fund offers (NFO)</strong> - No track record to evaluate</span>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-700"><strong>High expense ratio</strong> - Eats into your returns</span>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700"><strong>Frequent fund manager changes</strong> - Indicates instability</span>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-700"><strong>Very small AUM</strong> (below ₹100 cr) - Liquidity issues</span>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-slate-700"><strong>Too many stocks</strong> (200+) - Over-diversification, closet indexing</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 bg-blue-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Quick Decision Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-5 bg-white rounded-lg border-2 border-blue-200">
            <p className="font-semibold text-slate-900 mb-3">The 5-Point Checklist:</p>
            <ol className="space-y-2 text-sm text-slate-700">
              <li><strong>1. Performance:</strong> Beats benchmark + category average (3-5 years) ✓</li>
              <li><strong>2. Risk:</strong> Acceptable volatility for your risk appetite ✓</li>
              <li><strong>3. Cost:</strong> Low expense ratio (direct plan preferred) ✓</li>
              <li><strong>4. Manager:</strong> Experienced, stable, good track record ✓</li>
              <li><strong>5. Portfolio:</strong> Diversified, sticks to mandate ✓</li>
            </ol>
            <p className="text-xs text-slate-600 mt-4 italic">If a fund ticks all 5 boxes, it's a strong candidate for investment.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundSelection;
