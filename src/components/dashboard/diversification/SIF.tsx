"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SIF = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold">SIF (Structured / Single-Investor Funds)</h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Bespoke or single-investor funds that are structured for a single client or a small group — often highly customized strategies with long horizons.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Who is this for?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Ultra-high-net-worth individuals, family offices, or institutions with bespoke needs.</li>
              <li>Investors wanting tailored exposures, bespoke fees, and custom governance arrangements.</li>
              <li>Those able to accept long lock-ins and bespoke reporting structures.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What to expect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Customized allocations, bespoke risk/return objectives, and direct negotiation of terms. Very limited liquidity, strong alignment between manager and investor, and tailored reporting and exit provisions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Typical charges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Management fee: may be similar or slightly higher than AIFs (1.5%–3.0%).</li>
              <li>Performance / carry: negotiated (commonly 15%–25%).</li>
              <li>One-time setup, legal, reporting and custody fees often borne by investor.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxation & entry limits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Tax treatment depends on the underlying assets and structure—can be capital gains, business income, or pass-through depending on domicile. Entry limits are typically high and negotiated—expect minimums in the high lakhs to crores (₹1 crore+ commonly).
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-sm text-slate-600">
        <p>
          Note: SIFs are for investors who need a tailored solution and have the resources to negotiate terms and tolerate illiquidity. Legal, tax and operational advice is essential before committing capital.
        </p>
      </div>
    </div>
  );
};

export default SIF;