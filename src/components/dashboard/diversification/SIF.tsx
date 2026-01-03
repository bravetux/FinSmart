"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SIF = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold">SIF — What it means today</h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          The term "SIF" can refer to different fund structures depending on jurisdiction — most commonly SEBI's Specialized Investment Fund in India (launched 2025) or the long-standing Luxembourg SIF used by international investors; it can also mean strategic/state investment vehicles in some contexts.
        </p>
      </header>

      {/* SEBI Specialized Investment Funds (India) */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">1. SEBI Specialized Investment Funds (India)</h3>
        <p className="text-sm text-slate-700 max-w-3xl">
          Introduced in April 2025, SEBI's SIF provides a middle ground between retail mutual funds and high-ticket PMS. It is aimed at sophisticated investors who want more sophisticated strategies without the larger ticket of PMS.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Who it’s for</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Sophisticated investors and High Net-Worth Individuals (HNIs) who want access to advanced strategies but don't want to commit the typical ₹50 lakh required for PMS.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Minimum investment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Typically ₹10 lakh (as a practical minimum for many SIF offerings).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Advanced strategies:</strong> Long-short, sector rotation, dynamic asset allocation.</li>
                <li><strong>Flexibility:</strong> Managers can use derivatives and invest in unlisted securities (often up to a capped allocation such as 30%).</li>
                <li><strong>Structure:</strong> Can be open-ended (daily liquidity) or interval funds (redemptions at fixed windows — weekly/monthly).</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Taxation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Taxed similar to mutual funds in India — treatment depends on whether the strategy is equity-oriented (equity taxation rules) or debt/other oriented (debt taxation rules); always confirm with a tax advisor for specifics.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Luxembourg Specialized Investment Funds */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">2. Luxembourg Specialized Investment Funds (International)</h3>
        <p className="text-sm text-slate-700 max-w-3xl">
          A well-established vehicle in Luxembourg tailored for "well-informed" investors; popular in Europe for institutional and professional money.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Who it’s for</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Institutional investors, professional investors, or individuals able to invest at least around €125,000.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Asset variety:</strong> Can hold private equity, real estate, hedge strategies, art, and traditional securities.</li>
                <li><strong>Light regulation:</strong> Regulated by CSSF but with more flexibility on portfolio rules compared to retail funds.</li>
                <li><strong>Tax efficiency:</strong> Often exempt from corporate income tax, typically paying a small annual subscription tax (example: ~0.01%).</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typical charges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Varies by manager: management fees, performance fees, custody and administration fees; structure often targets institutional pricing and bespoke arrangements.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Regulatory & tax notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Luxembourg SIFs are structured to be tax-efficient for non-retail investors; specifics depend on domicile and investor tax residence — consult cross-border tax counsel.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategic Investment Funds (Sovereign/Public) */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">3. Strategic Investment Funds (Sovereign / Public)</h3>
        <p className="text-sm text-slate-700 max-w-3xl">
          In some contexts "SIF" refers to government-backed or strategic funds (Sovereign Wealth Funds) used to allocate capital to priority national sectors.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Purpose</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Finance strategic initiatives like infrastructure, SME growth, green energy, or tech/innovation programs that support national priorities.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Who it’s for</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Typically governed by public policy; participation can be limited to institutional partners, co-investors or concessional capital providers.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison table */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">Comparison: SEBI SIF (India) vs Luxembourg SIF (Global)</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 text-left">
                <th className="p-3 font-medium">Feature</th>
                <th className="p-3 font-medium">SEBI SIF (India)</th>
                <th className="p-3 font-medium">Luxembourg SIF (Global)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">Primary goal</td>
                <td className="p-3">Strategy-based retail/HNI growth with enhanced manager flexibility</td>
                <td className="p-3">Institutional flexibility & tax-efficient vehicle for a wide range of assets</td>
              </tr>
              <tr className="border-t bg-white">
                <td className="p-3 font-medium">Min. investment</td>
                <td className="p-3">₹10 Lakh (typical for many SIF offerings)</td>
                <td className="p-3">~€125,000 for individual professional investors (varies)</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Regulation</td>
                <td className="p-3">SEBI (formal, investor-protective)</td>
                <td className="p-3">CSSF (Luxembourg) with professional-investor rules</td>
              </tr>
              <tr className="border-t bg-white">
                <td className="p-3 font-medium">Typical assets</td>
                <td className="p-3">Listed equities, derivatives, unlisted securities (capped)</td>
                <td className="p-3">Real estate, PE, hedge funds, illiquid assets, debt</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">Launch date (example)</td>
                <td className="p-3">April 2025 (SEBI SIF introduction)</td>
                <td className="p-3">Lux SIF regime: early 2000s (popular since 2007)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SIF;