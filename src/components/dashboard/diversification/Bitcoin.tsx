"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Bitcoin = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">Bitcoin & Crypto Overview</h2>
        <p className="text-sm text-slate-600 mt-1">Digital, highly volatile asset class — suitable for a small allocation in diversified portfolios.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Who is it for?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Investors with high risk tolerance and a strong understanding of volatility.</li>
              <li>Those seeking exposure to a speculative, non-correlated asset that can offer high upside.</li>
              <li>Investors comfortable with self-custody, security responsibilities, or using reputable custodial services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What to expect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Very high price volatility — large drawdowns are common.</li>
              <li>No yield unless you stake or lend (which introduces counterparty risk).</li>
              <li>Potential for significant capital appreciation, but highly speculative and technology/regulation dependent.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Charges & custody</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li><strong>Exchange fees:</strong> Trading fees and taker/maker fees on exchanges.</li>
              <li><strong>Spread & slippage:</strong> Difference between buy & sell prices and execution slippage.</li>
              <li><strong>Custody fees:</strong> Custodial services (for institutional-grade custody) or hardware wallet costs for self-custody.</li>
              <li><strong>Network fees:</strong> Transaction/gas fees when moving assets on-chain.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxation (general)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Crypto taxation is evolving and varies by country:
            </p>
            <ul className="list-disc ml-5 text-sm text-slate-700 mt-2 space-y-2">
              <li>Many jurisdictions treat crypto as property — capital gains apply on disposals (short-term vs long-term rules may differ).</li>
              <li>Some nations tax crypto at special rates (e.g., flat rates, or tax on every gain) and may levy additional reporting or TDS requirements.</li>
              <li>Staking rewards or lending income may be taxed as ordinary income.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">Check local laws and keep detailed records of trades, transfers, and receipts for tax compliance.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Entry limits & recommended allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>No formal regulatory "minimum" in many retail exchanges; institutional custody often requires larger sums.</li>
              <li>Practical recommendation: keep crypto as a small satellite allocation (e.g., 1%–5% of investable portfolio) unless you have high conviction and risk capacity.</li>
              <li>Plan for long-term volatility and avoid using emergency funds for crypto speculation.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Bitcoin;