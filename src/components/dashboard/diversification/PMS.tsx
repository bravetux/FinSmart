"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PMS = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold">Portfolio Management Services (PMS)</h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Customized, professionally managed portfolios for high-net-worth investors who want concentrated and tailored equity exposure.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Who is this for?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>High net worth individuals (HNI) and family offices seeking customized equity portfolios.</li>
              <li>Investors who prefer discretionary active management with high conviction bets.</li>
              <li>Those comfortable with lower liquidity and concentrated exposures for potential outperformance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What to expect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              PMS offers an actively managed, often concentrated portfolio (20–50 stocks) aligned to a strategy (value, growth, sectoral). Potential for higher upside but also higher volatility versus diversified mutual funds.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Typical charges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Management fee: ~1.0% - 2.0% p.a. (may vary by manager).</li>
              <li>Performance fee: often 10%–20% of outperformance over benchmark (high-water mark or hurdle may apply).</li>
              <li>Custody, transaction, and reporting fees may be extra.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxation & liquidity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Tax treatment typically follows the underlying securities (e.g., listed equities): short-term gains taxed per income slab and long-term gains taxed under capital gains rules in your jurisdiction. Liquidity: selling may take longer and be subject to market conditions; PMS minimum lock-ins may apply.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Entry limits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              In many markets (India included), PMS is targeted at HNIs — common minimums are around ₹25 lakh (INR 2.5M) or higher depending on the manager. Exact minimums vary by firm.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-sm text-slate-600">
        <p>
          Note: PMS is best when you want a bespoke, actively managed equity allocation and can tolerate concentration risk and reduced liquidity. Speak with the manager about fee structures, benchmark, lock-ins, and past performance before committing.
        </p>
      </div>
    </div>
  );
};

export default PMS;