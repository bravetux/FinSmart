"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PMS = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">Portfolio Management Services (PMS)</h2>
        <p className="text-sm text-slate-600 mt-1">Customized, actively-managed portfolios for high-net-worth investors.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Who is it for?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>High-net-worth individuals (HNI) seeking a tailored, actively-managed equity portfolio.</li>
              <li>Investors who want concentrated strategies, direct holdings, and bespoke risk controls.</li>
              <li>Those comfortable with higher volatility and who can commit capital for multi-year horizons.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What to expect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Concentrated stock portfolios managed by a professional portfolio manager.</li>
              <li>Potential for outperformance versus a passive benchmark, but with higher tracking error and drawdowns.</li>
              <li>Regular reporting, tax lot management, and potential for customized risk limits.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Charges you will incur</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li><strong>Management fee:</strong> Typically 1%–2% p.a. of assets under management (AUM).</li>
              <li><strong>Performance fee:</strong> Often 10%–20% of upside above a pre-agreed hurdle (high watermark common).</li>
              <li><strong>Transaction & custody costs:</strong> Brokerage, STT (where applicable), custodian fees, and admin costs.</li>
              <li><strong>Exit costs:</strong> Some managers may charge exit or redemption fees for early withdrawals.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxation (general guidance)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Tax treatment depends on the underlying assets and holding period:
            </p>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2 mt-2">
              <li>Equity positions held in the PMS generally follow equity capital gains rules (short-term vs long-term) — consult a tax advisor for jurisdiction-specific rates.</li>
              <li>If the manager uses debt, offshore instruments or derivatives, parts of returns may be taxed differently (slab rates or long-term capital gains rules with indexation).</li>
              <li>Performance fees may be treated as business income for the manager; investors are taxed on their capital gains/interest/dividends as applicable.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">Always verify with a tax professional—rules change and depend on local law.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Typical entry limits & suitability</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Minimum investment: commonly ₹50 lakh (varies by manager and jurisdiction).</li>
              <li>Recommended horizon: 3–7+ years depending on strategy.</li>
              <li>Suitable for investors who want tailored exposure and can tolerate concentrated risk.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default PMS;