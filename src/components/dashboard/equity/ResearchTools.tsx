"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Globe, FileText, TrendingUp, Calendar, Bell, ExternalLink, BookOpen, BarChart3, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ResearchTools = () => {
  const screeners = [
    {
      name: "Screener.in",
      url: "https://www.screener.in",
      icon: <Search className="w-5 h-5 text-blue-600" />,
      description: "Most popular Indian stock screener with 10-year data, ratios, and custom filters",
      features: ["Custom screens", "Historical data", "Peer comparison", "Financial ratios"],
      bestFor: "Fundamental analysis and value hunting",
      free: true
    },
    {
      name: "Tickertape",
      url: "https://www.tickertape.in",
      icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
      description: "Modern UI with stock discovery, portfolio tracking, and analysis tools",
      features: ["Visual screeners", "Stock comparison", "Portfolio tracking", "Sector analysis"],
      bestFor: "Beginners and visual learners",
      free: true
    },
    {
      name: "MoneyControl",
      url: "https://www.moneycontrol.com",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      description: "Comprehensive financial portal with news, live prices, and company data",
      features: ["Live news", "Market buzz", "Technical charts", "Company announcements"],
      bestFor: "Real-time market updates and news",
      free: true
    },
    {
      name: "TradingView",
      url: "https://www.tradingview.com",
      icon: <Filter className="w-5 h-5 text-orange-600" />,
      description: "Advanced charting and technical analysis platform used globally",
      features: ["Advanced charts", "Technical indicators", "Social trading", "Global markets"],
      bestFor: "Technical analysis and charting",
      free: false
    }
  ];

  const officialSources = [
    {
      name: "BSE/NSE Websites",
      url: "https://www.bseindia.com / https://www.nseindia.com",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      description: "Official exchange websites for corporate announcements, filings, and price data",
      what: "Company announcements, results, shareholding patterns, bulk/block deals"
    },
    {
      name: "Company Website (Investor Relations)",
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      description: "Every listed company has an 'Investor Relations' page with official documents",
      what: "Annual reports, quarterly results, investor presentations, concall transcripts"
    },
    {
      name: "SEBI Website",
      url: "https://www.sebi.gov.in",
      icon: <Bell className="w-5 h-5 text-red-600" />,
      description: "Securities and Exchange Board of India - regulatory filings and investor protection",
      what: "Insider trading data, regulatory actions, investor complaints, circulars"
    }
  ];

  const researchSteps = [
    {
      step: "1. Find the Stock",
      actions: [
        "Use screeners to filter by criteria (ROE > 20%, Debt/Equity < 0.5, etc.)",
        "Check sector leaders and market cap classifications",
        "Look for consistent profit growth over 5-10 years"
      ]
    },
    {
      step: "2. Read the Annual Report",
      actions: [
        "Go to company website → Investor Relations → Annual Reports",
        "Read the Chairman's letter (outlook and strategy)",
        "Check 'Notes to Accounts' for hidden liabilities or one-time gains",
        "Review MD&A (Management Discussion & Analysis) section"
      ]
    },
    {
      step: "3. Analyze Financials",
      actions: [
        "Export 10-year data from Screener.in",
        "Calculate key ratios: ROE, ROCE, Debt/Equity, P/E, P/B",
        "Check if revenue and profit growth are consistent",
        "Verify if profits are backed by cash flow (OCF positive)"
      ]
    },
    {
      step: "4. Check Peer Comparison",
      actions: [
        "Compare with 3-5 competitors in same sector",
        "Look at market share, margins, and growth rates",
        "Identify who has the strongest moat and pricing power"
      ]
    },
    {
      step: "5. Listen to Earnings Calls",
      actions: [
        "Search '[Company Name] concall transcript' on Google",
        "Available on company website or equity research platforms",
        "Pay attention to management's tone and Q&A responses",
        "Check for red flags: evasive answers, overoptimism"
      ]
    },
    {
      step: "6. Track Insider Trading",
      actions: [
        "Check if promoters are buying or selling their shares",
        "Available on NSE/BSE under 'Corporate Actions' or SEBI website",
        "Consistent promoter buying = confidence signal",
        "Heavy insider selling = potential red flag"
      ]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <BookOpen className="w-4 h-4" />
            <span>Due Diligence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Research Tools & Resources
          </h2>
          <p className="text-blue-100 text-lg max-w-xl">
            Know where to find reliable information. This is your arsenal for making informed investment decisions, from screening stocks to reading annual reports.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Stock Screeners */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
            <Search className="w-6 h-6 text-blue-600" /> Stock Screeners & Platforms
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            These tools help you filter thousands of stocks based on your criteria and analyze their fundamentals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {screeners.map((screener, i) => (
            <Card key={i} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {screener.icon}
                  </div>
                  <Badge variant={screener.free ? "outline" : "secondary"} className="text-xs">
                    {screener.free ? "Free" : "Paid"}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{screener.name}</CardTitle>
                <CardDescription className="text-sm">{screener.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-700 uppercase">Key Features</p>
                  <div className="flex flex-wrap gap-1">
                    {screener.features.map((feature, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-1 bg-slate-100 rounded-md text-slate-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-[10px] font-bold text-blue-800 uppercase mb-1">Best For</p>
                  <p className="text-[10px] text-blue-700">{screener.bestFor}</p>
                </div>

                {screener.url && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-2"
                    onClick={() => window.open(screener.url, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3" /> Visit {screener.name}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Official Sources */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <FileText className="w-6 h-6 text-emerald-600" /> Official Information Sources
        </h3>
        <p className="text-slate-600 max-w-3xl">
          Always cross-verify information from official sources. These are the most reliable places to find authentic company data.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {officialSources.map((source, i) => (
            <Card key={i} className="border-slate-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="p-2 bg-slate-50 rounded-lg w-fit mb-2">
                  {source.icon}
                </div>
                <CardTitle className="text-lg leading-tight">{source.name}</CardTitle>
                <CardDescription className="text-xs">{source.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-700 uppercase mb-1">What You'll Find</p>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{source.what}</p>
                </div>
                {source.url && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full gap-2 text-xs"
                    onClick={() => window.open(source.url, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3" /> Visit
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Process */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
            <Calendar className="w-6 h-6 text-purple-600" /> The Research Process
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            A systematic approach to analyzing a stock before you invest. Don't skip steps!
          </p>
        </div>

        <div className="space-y-6">
          {researchSteps.map((item, i) => (
            <Card key={i} className="border-slate-200 shadow-sm">
              <CardHeader className="bg-slate-50/50 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </div>
                  <CardTitle className="text-lg">{item.step}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  {item.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reading Annual Reports */}
      <section className="bg-indigo-50 rounded-[2.5rem] p-8 md:p-12 border border-indigo-100">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-indigo-900 flex items-center gap-3">
              <BookOpen className="w-7 h-7" />
              How to Read an Annual Report
            </h3>
            <p className="text-indigo-800 leading-relaxed text-sm">
              Annual reports can be 200+ pages, but you don't need to read everything. Focus on these sections:
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-900">1. Chairman's Letter (2-3 pages)</p>
                <p className="text-xs text-indigo-700">Strategic vision, challenges faced, future outlook</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-900">2. Financial Statements (10-15 pages)</p>
                <p className="text-xs text-indigo-700">Income statement, balance sheet, cash flow statement</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-900">3. MD&A - Management Discussion (10-20 pages)</p>
                <p className="text-xs text-indigo-700">Industry overview, opportunities, risks, operations analysis</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-indigo-100">
                <p className="text-xs font-bold text-indigo-900">4. Notes to Accounts (Critical!)</p>
                <p className="text-xs text-indigo-700">Hidden liabilities, related party transactions, contingent liabilities</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="p-8 bg-white rounded-2xl shadow-md border border-indigo-100 space-y-4">
              <FileText className="w-12 h-12 text-indigo-600 mx-auto" />
              <p className="text-xs text-slate-600 italic text-center leading-relaxed">
                "The annual report is the most important document a public company publishes. It's your window into the business."
              </p>
              <div className="pt-4 border-t">
                <p className="text-xs text-slate-500 text-center">
                  💡 <strong>Pro Tip:</strong> Compare this year's report with last year's. Check if management delivered on promises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">🚩 Research Red Flags</h3>
        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="pt-6">
            <p className="text-sm text-red-800 mb-4 font-medium">
              If you discover any of these during research, investigate deeper or avoid the stock:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Frequent changes in auditors",
                "Consistent related-party transactions",
                "Promoter pledge above 50%",
                "Declining profit with rising revenue (margin compression)",
                "Huge divergence between PAT and Operating Cash Flow",
                "Management evasiveness in concalls",
                "Heavy insider selling",
                "Consistent one-time 'exceptional' gains",
                "Complex group structure (shell companies)",
                "Poor corporate governance ratings"
              ].map((flag, i) => (
                <div key={i} className="flex items-start gap-2 p-3 bg-white rounded-xl border border-red-100">
                  <span className="text-red-600 text-sm">🚩</span>
                  <p className="text-xs text-red-800">{flag}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final Message */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem]">
        <h4 className="text-xl font-bold mb-4">Research is a Skill, Not a Chore</h4>
        <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
          The more companies you analyze, the faster and better you become at spotting quality. Your first analysis might take 5 hours. 
          Your 50th will take 30 minutes. Build a checklist. Develop a process. Over time, pattern recognition becomes your superpower.
        </p>
      </div>
    </div>
  );
};

export default ResearchTools;
