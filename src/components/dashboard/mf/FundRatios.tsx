"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  BarChart2,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Shield,
  Search
} from 'lucide-react';

const FundRatios = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <BarChart2 className="w-4 h-4" />
            <span>Mutual Fund Mastery</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Beyond Returns: Reading Fund Scorecards
          </h2>
          <p className="text-cyan-50 text-lg max-w-2xl">
            Two funds both returned 12% last year. Are they equal? Absolutely not. One might have taken twice the risk to get there. That's where fund ratios come in.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Why Ratios Matter */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-cyan-600" /> Why Ratios Matter More Than Returns
        </h3>
        <Card className="border-cyan-200 bg-cyan-50/40 shadow-md">
          <CardContent className="p-6">
            <p className="text-sm text-slate-700 mb-4">Returns tell you <strong>WHAT happened</strong> — how much the fund grew. Ratios tell you <strong>HOW it happened</strong> — how much risk was taken, how consistent it was, and how skilled the fund manager actually is.</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-cyan-200 text-center">
                <p className="text-2xl font-bold text-slate-700">12%</p>
                <p className="text-xs text-slate-500 mt-1">Return from Fund A<br/><span className="text-red-500 font-semibold">SD = 22% (wild swings)</span></p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-cyan-200 text-center">
                <p className="text-2xl font-bold text-slate-700">12%</p>
                <p className="text-xs text-slate-500 mt-1">Return from Fund B<br/><span className="text-emerald-600 font-semibold">SD = 10% (steady growth)</span></p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 text-center">
                <p className="text-sm font-bold text-emerald-800">Fund B is superior</p>
                <p className="text-xs text-slate-600 mt-1">Same return, half the stress, less chance of panic-selling in a downturn. Ratios reveal this. Returns don't.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The 5 Key Ratios */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Activity className="w-6 h-6 text-blue-600" /> The 5 Key Ratios — Explained Clearly
        </h3>

        {/* Sharpe Ratio */}
        <Card className="border-blue-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-blue-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Sharpe Ratio — Return per Unit of Total Risk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs font-bold text-blue-800">The Formula</p>
                  <p className="text-sm font-mono font-semibold text-slate-800 mt-1">(Fund Return − Risk-Free Return) ÷ Standard Deviation</p>
                  <p className="text-xs text-slate-500 mt-1">Risk-Free Return = current FD/repo rate (~7%). Standard Deviation = how volatile the fund is month-to-month.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-100">
                  <p className="text-xs font-bold text-slate-800">Plain English</p>
                  <p className="text-xs text-slate-600 mt-1">How much EXTRA return are you getting per unit of total risk taken? Higher = manager is generating more reward for each unit of volatility endured.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-800">How to Read It</p>
                  <div className="space-y-1 mt-2">
                    {[
                      { val: "> 2", label: "Excellent — rare and consistent", color: "emerald" },
                      { val: "1 – 2", label: "Good — manager adding value", color: "blue" },
                      { val: "0 – 1", label: "Acceptable but unremarkable", color: "amber" },
                      { val: "< 0", label: "Fund didn't even beat FD returns", color: "red" },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`text-xs font-bold text-${r.color}-700 w-12`}>{r.val}</span>
                        <span className="text-xs text-slate-600">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-xs font-bold text-amber-800">Worked Example</p>
                  <p className="text-xs text-slate-700 mt-1">Fund return: 14%, FD rate: 7%, SD: 10%<br/><strong>Sharpe = (14 − 7) ÷ 10 = 0.7</strong> — Not great. The return barely justifies the risk.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sortino Ratio */}
        <Card className="border-emerald-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-emerald-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Sortino Ratio — The Investor-Friendly Version of Sharpe
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <p className="text-sm text-slate-700">Sortino works like Sharpe, but with one key difference: it only penalizes <strong>downside volatility</strong> (bad months when the fund falls). It ignores upside volatility (great months when the fund surges).</p>
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-xs font-bold text-emerald-800">Why This is Smarter</p>
                  <p className="text-xs text-slate-600 mt-1">As an investor, you don't mind if the fund unexpectedly jumps up by 5% in a month. You DO mind if it drops 10%. Sortino separates "good volatility" from "bad volatility" — Sharpe treats both equally.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-800">How to Read It</p>
                  <div className="space-y-1 mt-2">
                    {[
                      { val: "> 2", label: "Excellent downside management", color: "emerald" },
                      { val: "1 – 2", label: "Good — acceptable drawdowns", color: "blue" },
                      { val: "< 1", label: "Poor — too many bad months", color: "red" },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`text-xs font-bold text-${r.color}-700 w-12`}>{r.val}</span>
                        <span className="text-xs text-slate-600">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                  <p className="text-xs font-bold text-cyan-800">Pro Tip</p>
                  <p className="text-xs text-slate-700 mt-1">Sortino is generally <strong>higher than Sharpe</strong> for the same fund. That's expected. When comparing equity funds, prefer Sortino — it measures what actually hurts investors.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alpha */}
        <Card className="border-purple-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-purple-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Alpha — Did the Manager Actually Add Value?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <p className="text-sm text-slate-700"><strong>Alpha</strong> measures how much the fund outperformed (or underperformed) its benchmark index — like Nifty 50 or Sensex.</p>
                <div className="space-y-2">
                  {[
                    { alpha: "Alpha +3%", meaning: "Fund beat benchmark by 3%. Manager added real value — you're paying fund management fees for something.", color: "emerald" },
                    { alpha: "Alpha 0%", meaning: "Fund just matched the index. You're paying an active fund's fees for index-level returns. Just buy an index fund!", color: "amber" },
                    { alpha: "Alpha −2%", meaning: "Manager actually destroyed value. The index outperformed. You'd have done better buying a Nifty 50 index fund.", color: "red" },
                  ].map((a, i) => (
                    <div key={i} className={`p-3 bg-${a.color}-50 rounded-lg border border-${a.color}-200`}>
                      <p className={`text-xs font-bold text-${a.color}-800`}>{a.alpha}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{a.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-xs font-bold text-purple-800">The Important Caveat</p>
                  <p className="text-xs text-slate-600 mt-1">Alpha for ONE year can be luck. Look for funds with <strong>consistent positive alpha over 3–5 years</strong>. A fund with alpha of +2% every year for 5 years is remarkable. A fund with +10% in year 1 and −5% in years 2–5 is not.</p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-xs font-bold text-amber-800">The Index Fund Case</p>
                  <p className="text-xs text-slate-600 mt-1">Studies show ~80% of actively managed funds have negative or zero alpha over 10 years. That's why index funds (which intentionally aim for alpha of 0) are increasingly popular — lower cost, predictable results.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Beta */}
        <Card className="border-orange-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-orange-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              Beta — How Sensitive is the Fund to Market Moves?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <p className="text-sm text-slate-700">Beta measures how the fund moves relative to the overall market (Nifty 50). It tells you whether the fund amplifies market swings or dampens them.</p>
                <div className="space-y-2">
                  {[
                    { beta: "Beta = 1.0", meaning: "Moves exactly with the market. If Nifty falls 10%, fund falls 10%.", color: "slate" },
                    { beta: "Beta = 1.2", meaning: "More aggressive. Market falls 10% → fund falls 12%. Market rises 10% → fund rises 12%.", color: "red" },
                    { beta: "Beta = 0.8", meaning: "Less volatile. Market falls 10% → fund falls only 8%. Steadier ride.", color: "emerald" },
                    { beta: "Beta = 0.5", meaning: "Very low volatility. Good for near-retirement or conservative investors.", color: "blue" },
                  ].map((b, i) => (
                    <div key={i} className={`p-2.5 bg-${b.color}-50 rounded-lg border border-${b.color}-200 flex gap-3 items-start`}>
                      <span className={`text-xs font-bold text-${b.color}-700 w-20 shrink-0`}>{b.beta}</span>
                      <p className="text-xs text-slate-600">{b.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-xs font-bold text-orange-800">Beta is Not Good or Bad</p>
                  <p className="text-xs text-slate-600 mt-1">It depends entirely on what you want. A young aggressive investor may want Beta 1.2+ for maximum long-term growth. Someone 3 years from retirement wants Beta 0.6–0.8 to protect the corpus. Match beta to your risk appetite and time horizon.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-orange-100">
                  <p className="text-xs font-bold text-slate-800">Sector Funds</p>
                  <p className="text-xs text-slate-600 mt-1">Technology or small-cap sector funds often have Beta &gt;1.2. Pharma or FMCG funds are often &lt;0.9. Beta gives you a quick read on the fund's personality before you invest.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Standard Deviation */}
        <Card className="border-rose-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-rose-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              Standard Deviation — How Consistent Are the Returns?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <p className="text-sm text-slate-700">
                  <strong>Standard Deviation (SD)</strong> measures how much the fund's monthly returns vary from its average. Low SD = steady, predictable growth. High SD = wild swings — the fund might double expectations one month and crash the next.
                </p>
                <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                  <p className="text-xs font-bold text-rose-800">Example: Both funds average 12% annually</p>
                  <div className="mt-2 space-y-2">
                    <div className="p-2 bg-white rounded border border-rose-100">
                      <p className="text-xs font-bold text-slate-800">Fund A — SD: 8%</p>
                      <p className="text-xs text-slate-600">Returns typically land between 4% and 20%. Predictable. Comfortable to hold.</p>
                    </div>
                    <div className="p-2 bg-white rounded border border-rose-100">
                      <p className="text-xs font-bold text-slate-800">Fund B — SD: 22%</p>
                      <p className="text-xs text-slate-600">Returns could be anywhere from −10% to +34%. You might panic-sell in the bad months — killing your long-term returns.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-xs font-bold text-slate-800">General Benchmarks (Equity Funds)</p>
                  <div className="space-y-1 mt-2">
                    {[
                      { sd: "SD < 12%", label: "Low volatility — steady large-cap type", color: "emerald" },
                      { sd: "SD 12–18%", label: "Moderate — typical diversified equity", color: "blue" },
                      { sd: "SD 18–25%", label: "High — mid/small cap or sector funds", color: "amber" },
                      { sd: "> 25%", label: "Very high — thematic/concentrated bets", color: "red" },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className={`text-xs font-bold text-${r.color}-700 w-20`}>{r.sd}</span>
                        <span className="text-xs text-slate-600">{r.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                  <p className="text-xs font-bold text-cyan-800">Why it Matters Psychologically</p>
                  <p className="text-xs text-slate-600 mt-1">High SD funds make people sell in panic during downturns. If you know you'll be anxious watching your fund drop 25%, choose a lower-SD fund — even if returns are slightly less.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" /> Reading the Scorecard: Fund A vs Fund B
        </h3>
        <Card className="border-slate-200 shadow-md">
          <CardContent className="p-6 space-y-4">
            <p className="text-sm text-slate-600">Both funds returned 14% over 3 years. But look at the rest of the scorecard:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left">Ratio</th>
                    <th className="p-3 text-center">Fund A</th>
                    <th className="p-3 text-center">Fund B</th>
                    <th className="p-3 text-center">Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { ratio: "3-Year Return", a: "14%", b: "14%", winner: "Tie", winColor: "slate", note: "Returns identical — ratios now separate them" },
                    { ratio: "Sharpe Ratio", a: "0.6", b: "1.4", winner: "Fund B", winColor: "emerald", note: "B gives far more return per unit of risk" },
                    { ratio: "Sortino Ratio", a: "0.8", b: "1.9", winner: "Fund B", winColor: "emerald", note: "B handles downturns much better" },
                    { ratio: "Alpha", a: "−0.5%", b: "+2.8%", winner: "Fund B", winColor: "emerald", note: "B's manager outperforms benchmark; A's doesn't" },
                    { ratio: "Beta", a: "1.3", b: "0.9", winner: "Fund B", winColor: "emerald", note: "B is less sensitive to market crashes" },
                    { ratio: "Std. Deviation", a: "21%", b: "11%", winner: "Fund B", winColor: "emerald", note: "B is far more consistent month to month" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white border-t" : "bg-slate-50 border-t"}>
                      <td className="p-3 font-medium text-slate-800">{row.ratio}</td>
                      <td className="p-3 text-center text-red-600 font-semibold">{row.a}</td>
                      <td className="p-3 text-center text-emerald-700 font-semibold">{row.b}</td>
                      <td className="p-3 text-center">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${row.winColor === 'emerald' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                          {row.winner}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300">
              <p className="text-sm font-bold text-emerald-800">Verdict: Fund B is clearly superior</p>
              <p className="text-xs text-slate-700 mt-1">Same return, half the volatility, better downside protection, a manager who beats the benchmark, and less market sensitivity. Fund A took much more risk to get to the same 14% — and in a bad year, it will hurt far more.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Decision Table by Investor Type */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Shield className="w-6 h-6 text-slate-600" /> Which Ratio Matters Most — By Investor Type
        </h3>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              type: "Conservative Investor",
              icon: Shield,
              color: "blue",
              profile: "Near retirement, protecting capital, low risk tolerance",
              priority: [
                { ratio: "Sortino Ratio", why: "Measures downside specifically — most relevant for capital protection" },
                { ratio: "Beta (< 0.8 preferred)", why: "Low market sensitivity = softer fall when markets crash" },
                { ratio: "Standard Deviation (low)", why: "Predictable returns reduce anxiety and rash decisions" },
              ]
            },
            {
              type: "Moderate Investor",
              icon: TrendingUp,
              color: "emerald",
              profile: "10–20 year horizon, balanced growth and safety goals",
              priority: [
                { ratio: "Sharpe Ratio (> 1)", why: "Overall risk-adjusted return — balanced view of reward vs risk" },
                { ratio: "Alpha (consistent +ve)", why: "Manager's consistent skill over multiple years" },
                { ratio: "Sortino Ratio", why: "Still want protection on the downside" },
              ]
            },
            {
              type: "Aggressive Investor",
              icon: BarChart2,
              color: "orange",
              profile: "20+ year horizon, maximum wealth creation, comfortable with volatility",
              priority: [
                { ratio: "Alpha (high, consistent)", why: "You want maximum outperformance — pay for a manager who truly delivers" },
                { ratio: "Beta (> 1 acceptable)", why: "Higher beta = amplified market gains over long horizons" },
                { ratio: "Returns (long-term)", why: "Over 20+ years, compounding outperformance matters most" },
              ]
            }
          ].map((inv, i) => (
            <Card key={i} className={`border-${inv.color}-200 shadow-sm`}>
              <CardHeader className="pb-3">
                <CardTitle className={`text-base text-${inv.color}-900`}>{inv.type}</CardTitle>
                <p className="text-xs text-slate-500">{inv.profile}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                {inv.priority.map((p, j) => (
                  <div key={j} className={`p-3 bg-${inv.color}-50 rounded-lg border border-${inv.color}-100`}>
                    <p className={`text-xs font-bold text-${inv.color}-800`}>{p.ratio}</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">{p.why}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Where to Find These Ratios */}
      <section className="space-y-5">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Search className="w-6 h-6 text-blue-600" /> Where to Find These Ratios
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { site: "Value Research Online", url: "valueresearchonline.com", desc: "Most comprehensive. Sharpe, alpha, beta, SD all listed on fund pages. Free.", color: "blue" },
            { site: "Morningstar India", url: "morningstar.in", desc: "Excellent risk analysis section. Particularly useful for comparing fund categories.", color: "purple" },
            { site: "Kuvera", url: "kuvera.in", desc: "Investment platform with fund analytics built in. Good for active investors.", color: "emerald" },
            { site: "AMFI India", url: "amfiindia.com", desc: "Official SEBI-regulated source for NAV and basic fund data. Less detailed ratios.", color: "orange" },
          ].map((s, i) => (
            <Card key={i} className={`border-${s.color}-200 shadow-sm`}>
              <CardContent className="p-4 space-y-2">
                <p className={`text-sm font-bold text-${s.color}-800`}>{s.site}</p>
                <p className={`text-xs text-${s.color}-600 font-mono`}>{s.url}</p>
                <p className="text-xs text-slate-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-xs text-slate-600"><strong>How to find them:</strong> On Value Research or Morningstar, search your fund name → go to the "Risk" or "Ratios" tab → all 5 ratios are listed there alongside peer comparison. Takes 2 minutes per fund.</p>
        </div>
      </section>

      {/* Golden Rule */}
      <div className="p-8 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[2.5rem] text-white space-y-4">
        <h4 className="text-2xl font-bold flex items-center gap-3">
          <CheckCircle2 className="w-8 h-8" />
          The Golden Rule of Fund Analysis
        </h4>
        <p className="text-cyan-50 text-base">
          Never judge a fund only by its returns. A fund that made 20% by taking huge risks is worse than one that made 15% with half the risk — especially when markets fall. The 20% fund will crash harder, and most investors will panic-sell at exactly the wrong time.
        </p>
        <div className="grid md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-white/15 rounded-xl space-y-2">
            <p className="text-sm font-bold text-cyan-100">Your Quick Checklist Before Investing:</p>
            <ul className="text-xs text-white space-y-1 list-disc ml-4">
              <li>Sharpe Ratio &gt; 1 (preferably &gt;1.5)</li>
              <li>Sortino Ratio &gt; 1</li>
              <li>Consistent positive Alpha over 3+ years</li>
              <li>Beta matches your risk preference</li>
              <li>Standard Deviation appropriate for your category</li>
            </ul>
          </div>
          <div className="p-4 bg-white/15 rounded-xl space-y-2">
            <p className="text-sm font-bold text-cyan-100">The Minimum You Should Check:</p>
            <ul className="text-xs text-white space-y-1 list-disc ml-4">
              <li>3-year AND 5-year Sharpe Ratio (not just 1-year)</li>
              <li>Alpha vs the fund's benchmark (not another fund)</li>
              <li>Compare ratios against category peers — not absolute numbers</li>
              <li>A great ratio from 10 years ago means little today</li>
            </ul>
          </div>
        </div>
        <div className="pt-4 border-t border-white/20 text-center">
          <p className="text-cyan-100 font-semibold text-lg">
            "A fund that makes 15% with a Sharpe of 1.5 is a masterpiece. A fund that makes 20% with a Sharpe of 0.4 is a gamble in disguise."
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundRatios;
