"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SIF = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold">SIF — Specialized Investment Fund (SEBI, India)</h2>
        <p className="text-sm text-slate-600 max-w-3xl">
          The term SIF typically refers to a few fund structures in different jurisdictions; the most relevant context today is SEBI’s Specialized Investment Fund introduced in India (April 2025), which creates a middle ground between retail mutual funds and high-ticket Portfolio Management Services (PMS).
        </p>
      </header>

      {/* SEBI Specialized Investment Funds (India) */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">SEBI Specialized Investment Funds (India)</h3>
        <p className="text-sm text-slate-700 max-w-3xl">
          Introduced in April 2025, this new asset class allows experienced investors access to advanced strategies with lower minimums than PMS, while retaining regulatory oversight from SEBI.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Who it’s for</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Sophisticated investors and High Net-Worth Individuals (HNIs) who want advanced strategies but don't want to commit the typical ₹50 lakh required for PMS.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Minimum investment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">Typical minimums start at around <strong>₹10 lakh</strong>, making SIFs more accessible than many PMS offerings.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li><strong>Advanced strategies:</strong> Fund managers can run long-short strategies, sector rotation, dynamic asset allocation and other sophisticated approaches.</li>
                <li><strong>Flexibility:</strong> Managers may use derivatives and invest in unlisted securities, typically subject to capped allocations (e.g., up to 30% in unlisted instruments, as per SEBI rules).</li>
                <li><strong>Structure:</strong> SIFs can be structured as open-ended funds (daily liquidity) or as interval funds that permit redemptions at fixed windows (weekly/monthly), depending on the manager’s design and investor preferences.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What to expect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">
                Expect active management with higher-return potential and elevated strategy risk; liquidity and volatility will vary by fund structure. Due diligence on manager expertise, risk controls, and historical strategy performance is essential.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typical charges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
                <li>Management fee: commonly in the range <strong>1%–2.5% p.a.</strong> depending on strategy.</li>
                <li>Performance / carry: commonly structured as a share of outperformance (e.g., <strong>10%–25%</strong> over a benchmark/hurdle), often subject to a high-water mark.</li>
                <li>Other fees: custody, administration, legal and setup expenses may be charged separately.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Taxation (high-level)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">
                Tax treatment generally follows the nature of the underlying investments: equity-oriented strategies follow equity taxation rules, while debt/credit-oriented strategies follow debt taxation rules. Treatment of carried interest, pass-throughs and specific fund-level structures can vary — consult a tax advisor for precise, jurisdiction-specific guidance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="text-sm text-slate-600">
        <p>
          Practical note: SIFs are designed to offer experienced investors more strategic flexibility while maintaining investor protection under SEBI rules. If you are considering a SIF, request the fund’s strategy document, risk limits, fee schedule, liquidity windows, and historical strategy performance (if available) before committing capital.
        </p>
      </div>
    </div>
  );
};

export default SIF;