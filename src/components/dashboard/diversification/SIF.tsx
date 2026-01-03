"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SIF = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="mb-4">
        <h2 className="text-3xl font-bold">SIF — Structured / Specialized Investment Funds</h2>
        <p className="text-sm text-slate-600 mt-1">Funds that use structured products, credit strategies or bespoke overlays to deliver tailored risk/return profiles.</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Who is it for?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Accredited investors and institutions seeking structured payoffs (capital protection, credit spreads, yield enhancement).</li>
              <li>Investors comfortable with complex instruments and limited transparency compared with plain-vanilla funds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What to expect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Customized returns (e.g., capital-protected notes, structured credit, market-neutral strategies) with clearly defined payoff profiles.</li>
              <li>Potential for steady income or downside protection at the cost of upside capping or greater complexity.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Charges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Management fee: ~1%–2% p.a., depending on complexity.</li>
              <li>Performance fee / incentive: 10%–20% typically if fund generates positive excess returns.</li>
              <li>Transaction / structuring fees for tailored instruments and hedges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Tax depends on underlying instruments (derivatives, bonds, credit). Possible outcomes:
            </p>
            <ul className="list-disc ml-5 text-sm text-slate-700 mt-2">
              <li>Gains from derivatives or short-term trading may be taxed at ordinary income rates.</li>
              <li>Longer-held underlying assets may qualify for capital gains treatment (with or without indexation).</li>
              <li>Structured payouts can have mixed tax treatment — seek specialist advice.</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">Tax law is nuanced — consult a qualified tax advisor for your jurisdiction.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Entry limits & other notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Minimum investments commonly in the range of ₹25 lakh–₹50 lakh or higher, depending on provider and strategy.</li>
              <li>Lock-ins and notice periods may apply; liquidity profiles vary widely.</li>
              <li>Best used as a satellite allocation to diversify and target specific risks or yields.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default SIF;