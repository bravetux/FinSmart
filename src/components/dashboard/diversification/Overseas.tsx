"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Overseas = () => {
  return (
    <div className="space-y-10 pb-12">
      <header className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Overseas Investment from India — the clean, compliant way 🌍💸
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          Think of this as taking your capital global while staying firmly inside RBI’s rulebook.
          Old-school discipline, new-age access. Let’s break it down, step by step.
        </p>
      </header>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>1️⃣ The legal backbone: LRS (Liberalised Remittance Scheme)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-700">
          <p>
            India doesn’t block overseas investing—it regulates it smartly.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Governed by Reserve Bank of India</li>
            <li>Under Liberalised Remittance Scheme</li>
            <li>Limit: USD 250,000 per financial year per person</li>
          </ul>

          <div className="space-y-2">
            <p className="font-semibold">Covers:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Foreign stocks &amp; ETFs</li>
              <li>Overseas mutual funds</li>
              <li>Foreign bonds</li>
              <li>Property abroad</li>
              <li>Even startup investments</li>
            </ul>
          </div>

          <p className="font-medium">
            👉 Translation: If it’s legal and within the limit, you’re good.
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>2️⃣ Practical ways to invest abroad (pick your weapon)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 text-slate-700">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">🅰️ Indian brokers with global access (Beginner-friendly)</h3>
            <div className="space-y-2">
              <p className="font-semibold">Examples:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Vested Finance</li>
                <li>INDmoney</li>
                <li>Groww</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">How it works</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Open account (PAN + KYC)</li>
                <li>Link Indian bank</li>
                <li>USD remittance under LRS</li>
                <li>Buy US stocks/ETFs (Apple, S&amp;P 500, Nasdaq—pick your poison)</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold">Pros</p>
                <p className="text-sm text-slate-600">Simple, low learning curve</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold">Cons</p>
                <p className="text-sm text-slate-600">Slightly higher FX &amp; platform fees</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">🅱️ Direct foreign broker accounts (Power-user mode)</h3>
            <p className="font-semibold">Popular choice:</p>
            <p>Interactive Brokers</p>

            <div className="space-y-2">
              <p className="font-semibold">Why pros love this</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Ultra-low brokerage</li>
                <li>Access to 100+ global markets</li>
                <li>Serious tools (options, bonds, futures)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Reality check</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>More paperwork</li>
                <li>You handle remittance + compliance yourself</li>
              </ul>
              <p className="font-medium">
                This is not a weekend hobby—this is institutional-grade investing.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">🅲️ GIFT City route (India’s global gateway 🇮🇳➡️🌐)</h3>
            <div className="space-y-2">
              <p className="font-semibold">Via:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>GIFT City</li>
                <li>NSE IFSC</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">You can invest in:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>US stocks</li>
                <li>Global ETFs</li>
                <li>Dollar-denominated instruments</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Why this matters</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Indian jurisdiction</li>
                <li>Lower regulatory friction</li>
                <li>Still evolving, but big future upside</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">🅳️ International mutual funds via India (Hands-off style)</h3>
            <p className="font-semibold">Available through Indian AMCs:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>US equity funds</li>
              <li>Global tech funds</li>
              <li>Nasdaq / S&amp;P 500 feeder funds</li>
            </ul>

            <p className="font-semibold">Good for:</p>
            <p>People who want global exposure without daily stock-picking drama.</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>3️⃣ Taxes — the part everyone tries to ignore (don’t)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-slate-700">
          <div className="space-y-2">
            <p className="font-semibold">🔹 At the time of remittance</p>
            <p className="font-semibold">TCS (Tax Collected at Source):</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>20% on remittance (adjustable in ITR)</li>
              <li>Not an extra tax—just cash-flow pain</li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-semibold">🔹 On gains</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Short-term (&lt;24 months): Slab rate</li>
              <li>Long-term (≥24 months): 20% with indexation</li>
              <li>Dividends: Taxed at slab rate in India</li>
              <li>DTAA benefits apply (US taxes withheld can be adjusted)</li>
            </ul>
          </div>

          <p className="font-medium">
            📌 Bottom line: Overseas investing is tax-heavy if you’re sloppy. Precision matters.
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>4️⃣ Risk management — don’t YOLO internationally</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-700">
          <p className="font-medium">Let’s be brutally honest:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>FX risk cuts both ways</li>
            <li>Foreign markets are not always greener</li>
            <li>Regulatory changes can happen</li>
          </ul>

          <p className="font-medium">
            Classic rule (still undefeated):
          </p>
          <p className="text-slate-800">
            Keep 10–25% of portfolio overseas for diversification—not ego.
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>5️⃣ A sane starter strategy (battle-tested)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-700">
          <p className="font-medium">If you want clarity, not chaos:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>60–70% → Indian equity &amp; debt</li>
            <li>15–20% → US index ETFs (S&amp;P 500 / Nasdaq)</li>
            <li>5–10% → Global thematic funds</li>
            <li>Rest → Gold / bonds / liquidity</li>
          </ul>

          <p className="font-medium">
            Old wisdom + global exposure = long-term compounding machine.
          </p>
        </CardContent>
      </Card>

      <Card className="border-slate-200 bg-slate-900 text-white">
        <CardHeader>
          <CardTitle>Final word</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-slate-300 leading-relaxed">
            Overseas investing isn’t about chasing hype—it’s about currency diversification, geopolitical balance,
            and valuation arbitrage. Do it calmly, do it legally, and let time do the heavy lifting.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overseas;