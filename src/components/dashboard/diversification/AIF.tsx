"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIF = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-2">
        <p className="text-sm text-slate-600 max-w-2xl">
          Alternative Investment Funds (AIF) are pooled investment vehicles (private funds) that pursue strategies outside traditional mutual funds — private equity, venture capital, credit, real assets, and hedge strategies.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Who is this for?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Accredited and high-net-worth investors, family offices, and institutional investors.</li>
              <li>Investors seeking differentiated returns, low correlation with public markets, or private assets exposure.</li>
              <li>Those comfortable with long lock-ins, limited liquidity, and higher operational complexity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What to expect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              AIFs pursue specialized strategies: venture capital (early-stage equity), private equity (buyouts), credit funds, distressed assets, real estate, and niche hedge strategies. Expect illiquidity, long lock-in periods, and potential for outsized returns (and losses).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Typical charges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Management fee: typically 1.5%–2.5% p.a. (varies by strategy).</li>
              <li>Performance / carry: often 10%–25% of profits above a hurdle rate.</li>
              <li>Setup, legal, admin and monitoring fees may also apply.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxation & structure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Tax treatment depends on the fund structure and asset class. Private equity and real asset gains may be taxed as capital gains (long-term vs short-term). Carried interest and fund-level taxation can be complex—consult a tax specialist for jurisdiction-specific guidance.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Entry limits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              AIFs are typically aimed at institutional/HNI investors. Minimums can range from ~₹25 lakh for some funds to ₹1 crore or more for private equity and specialized strategies — exact minimums vary by firm.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-sm text-slate-600">
        <p>
          Note: AIFs can play a powerful role in diversification but require long investment horizons, deep due diligence, and a clear understanding of liquidity constraints and fee structures.
        </p>
      </div>
    </div>
  );
};

export default AIF;