"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeftRight, Percent, TrendingDown, Users, Banknote, CheckCircle, XCircle, Zap } from 'lucide-react';

const DirectVsRegular = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-violet-600 to-purple-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <ArrowLeftRight className="w-4 h-4" />
            <span>Make the Right Choice</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Direct vs Regular Mutual Funds
          </h2>
          <p className="text-violet-50 text-lg max-w-2xl">
            The same fund, two options - and the choice can impact your wealth significantly over time.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* The Difference */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-blue-200 bg-blue-50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Direct Plans
            </CardTitle>
            <CardDescription>Buy directly from AMC</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              You invest directly through the Asset Management Company's website/app or through platforms like MFCentral, without any intermediary.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>Lower expense ratio</strong> (0.5% - 1% less)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>Higher returns</strong> due to lower costs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>No commission</strong> paid to distributors</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>No advisor support</strong> - you manage yourself</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>More effort</strong> required for research & tracking</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900">
              <Users className="w-5 h-5 text-orange-600" />
              Regular Plans
            </CardTitle>
            <CardDescription>Buy through distributor/advisor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              You invest through a distributor (bank, broker, financial advisor) who earns a commission from the AMC.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>Higher expense ratio</strong> (includes distributor commission)</span>
              </div>
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>Lower returns</strong> due to higher costs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>Advisor guidance</strong> for fund selection</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>Less effort</strong> - advisor handles paperwork</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700"><strong>Hand-holding</strong> during market volatility</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Expense Ratio Comparison */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <Percent className="w-6 h-6 text-purple-600" />
            Expense Ratio: The Key Difference
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Fund Type</TableHead>
                <TableHead className="font-semibold">Regular Plan</TableHead>
                <TableHead className="font-semibold">Direct Plan</TableHead>
                <TableHead className="font-semibold text-green-700">You Save</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Equity Funds</TableCell>
                <TableCell>2.0% - 2.5%</TableCell>
                <TableCell className="text-green-700 font-semibold">1.0% - 1.5%</TableCell>
                <TableCell className="text-green-700 font-bold">0.8% - 1.0%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Debt Funds</TableCell>
                <TableCell>1.5% - 2.0%</TableCell>
                <TableCell className="text-green-700 font-semibold">0.5% - 1.0%</TableCell>
                <TableCell className="text-green-700 font-bold">0.8% - 1.0%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Hybrid Funds</TableCell>
                <TableCell>1.8% - 2.2%</TableCell>
                <TableCell className="text-green-700 font-semibold">0.8% - 1.2%</TableCell>
                <TableCell className="text-green-700 font-bold">0.8% - 1.0%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="text-xs text-slate-500 mt-3">* Approximate values; actual expense ratios vary by fund</p>
        </CardContent>
      </Card>

      {/* Impact on Returns */}
      <Card className="border-green-200 bg-green-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-slate-900">
            <TrendingDown className="w-6 h-6 text-green-600" />
            The Long-Term Impact
          </CardTitle>
          <CardDescription>How much difference does 1% expense ratio make?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 bg-white rounded-xl border-2 border-green-200">
            <p className="text-sm text-slate-700 mb-4"><strong>Scenario:</strong> ₹10,000 monthly SIP for 20 years @ 12% annual return</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-xs font-bold text-orange-800 uppercase mb-2">Regular Plan (2% expense)</p>
                <p className="text-sm text-slate-700 mb-1">Effective return: <strong>10%</strong></p>
                <p className="text-sm text-slate-700 mb-1">Total invested: ₹24,00,000</p>
                <p className="text-2xl font-bold text-orange-700 mt-3">₹75,93,733</p>
              </div>
              
              <div className="p-5 bg-green-100 rounded-lg border-2 border-green-300">
                <p className="text-xs font-bold text-green-800 uppercase mb-2">Direct Plan (1% expense)</p>
                <p className="text-sm text-slate-700 mb-1">Effective return: <strong>11%</strong></p>
                <p className="text-sm text-slate-700 mb-1">Total invested: ₹24,00,000</p>
                <p className="text-2xl font-bold text-green-700 mt-3">₹86,52,045</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg text-center">
              <p className="text-sm mb-1">Extra wealth with Direct Plan:</p>
              <p className="text-3xl font-bold">₹10,58,312</p>
              <p className="text-xs mt-2 text-green-100">Just by choosing Direct over Regular!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* When to Choose What */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-900">Which One Should You Choose?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Choose Direct If:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ You can research and select funds yourself</li>
                <li>✓ You understand basic financial concepts</li>
                <li>✓ You prefer DIY investing</li>
                <li>✓ You want maximum returns</li>
                <li>✓ You're comfortable with online platforms</li>
                <li>✓ You can stay disciplined during volatility</li>
              </ul>
            </div>

            <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Choose Regular If:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ You need professional guidance</li>
                <li>✓ You're a complete beginner</li>
                <li>✓ You value hand-holding & support</li>
                <li>✓ You don't have time for research</li>
                <li>✓ You need help with financial planning</li>
                <li>✓ You prefer human interaction</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Where to Invest Direct */}
      <Card className="border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Banknote className="w-5 h-5 text-purple-600" />
            Where to Buy Direct Plans?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-slate-900 mb-1">AMC Websites</h5>
              <p className="text-xs text-slate-600">HDFC MF, SBI MF, ICICI Pru - each AMC's own site</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-slate-900 mb-1">MFCentral</h5>
              <p className="text-xs text-slate-600">One platform for all AMCs (backed by RTAs)</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-slate-900 mb-1">Groww, Zerodha</h5>
              <p className="text-xs text-slate-600">Popular investment platforms (direct plans)</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-slate-900 mb-1">Paytm Money</h5>
              <p className="text-xs text-slate-600">All direct plans, zero commission</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-slate-900 mb-1">ET Money</h5>
              <p className="text-xs text-slate-600">Free platform with goal-based tools</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-semibold text-slate-900 mb-1">Kuvera</h5>
              <p className="text-xs text-slate-600">Direct mutual funds with free advisory</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-blue-200 bg-blue-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-slate-900">
            <Zap className="w-5 h-5 text-blue-600" />
            Bottom Line
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span><strong>Same fund, same portfolio</strong> - Only expense ratio differs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span><strong>Direct plans are better</strong> if you can manage investments yourself</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span><strong>1% difference compounds</strong> to lakhs over 20+ years</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <span><strong>Switching is possible</strong> - You can switch from Regular to Direct (will be considered a redemption + new purchase for tax)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">5.</span>
              <span><strong>Most experienced investors</strong> prefer Direct for maximum wealth creation</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DirectVsRegular;
