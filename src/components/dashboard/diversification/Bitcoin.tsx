"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Bitcoin = () => {
  return (
    <div className="space-y-8 pb-12">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold">Bitcoin & Crypto Assets</h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Digital assets that can serve as speculative investments, portfolio diversifiers, or long-term stores of value depending on your view and risk tolerance.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Who is this for?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Investors seeking high-risk, high-reward opportunities and comfortable with extreme volatility.</li>
              <li>Those who understand custody risks, security best-practices (cold wallets), and regulatory uncertainty.</li>
              <li>Portfolio diversifiers who will allocate a small percentage of net worth only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What to expect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Expect large price swings (up and down), market-driven liquidity, and the need for robust security (private keys, hardware wallets). Potential for outsized returns but also complete loss of capital in adverse scenarios.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Charges & custody</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-2">
              <li>Exchange/trading fees: typical taker/maker fees range ~0.05%–0.5% per trade (platform-dependent).</li>
              <li>Withdrawal/network fees: blockchain network fees vary and are payable when moving assets off exchange.</li>
              <li>Custody fees: custodial services or institutional custody may charge annual fees; hardware wallets have one-time costs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxation (high-level)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Tax rules for crypto vary across jurisdictions. In some markets (e.g., India in recent years), gains from virtual digital assets are taxed distinctly (often at a flat rate on gains with limited set-off). Elsewhere, crypto gains may be treated as capital gains or business income depending on activity. Always consult a tax specialist for your jurisdiction.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Entry limits & classification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700">
              Retail exchanges allow small purchases (even ₹100/US$10). Institutional products (ETPs/OTC desks) have larger minimums. For classification within a portfolio, crypto is typically a speculative/alternative allocation; recommended allocation is commonly a small percentage of overall investable assets.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-sm text-slate-600">
        <p>
          Important: Security and regulatory due-diligence are critical. Use reputable exchanges, enable strong account protections (2FA), and consider hardware wallets for long-term holdings. Tax rules change rapidly—get professional advice.
        </p>
      </div>
    </div>
  );
};

export default Bitcoin;