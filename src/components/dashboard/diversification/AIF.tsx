"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIF = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">AIF (Alternative Investment Funds)</h2>
        <p className="text-sm text-slate-600 mt-1">Privately pooled investment vehicles (private equity, venture capital, private credit, etc.).</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Who is it for?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Accredited or professional investors and HNIs looking for alternative exposures.</li>
              <li>Investors seeking access to private markets, specialist strategies, or longer-dated illiquid investments.</li>
              <li>Those willing to accept limited liquidity in exchange for potential higher risk-adjusted returns.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What to expect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Illiquid investments with lock-ins (multi-year horizons), periodic capital calls, and bespoke risk-return profiles.</li>
              <li>Potential for outsized returns but greater operational and concentration risk compared to public markets.</li>
              <li>Active manager selection and deep due diligence required.</li>
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
              <li><strong>Management fee:</strong> Typically 1%–2.5% p.a. depending on strategy.</li>
              <li><strong>Performance fee / carried interest:</strong> Commonly 10%–30% of profits (often subject to hurdle rates and high-water marks).</li>
              <li><strong>Setup & operational fees:</strong> Legal, audit, valuation, administration and custody expenses.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxation (overview)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              AIF taxation varies heavily by structure and asset class:
            </p>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2 mt-2">
              <li>Private equity / venture returns are usually treated as capital gains — long-term vs short-term rules depend on asset holding period and local law.</li>
              <li>Private credit or debt-like returns may be taxed as interest (ordinary income) depending on structure.</li>
              <li>Carried interest and sponsor-level taxation differ from investor taxation and often treated separately.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">Consult a tax specialist — AIF tax rules are complex and jurisdiction-specific.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Entry limits & classification</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Typical minimum investment: often ₹1 crore or higher (varies by fund and regulator).</li>
              <li>AIFs are classified (example: in India) into Category I (infrastructure/VC), Category II (private equity, debt funds), and Category III (hedge funds / complex strategies).</li>
              <li>Each category has different regulatory constraints and investor qualification requirements.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AIF;