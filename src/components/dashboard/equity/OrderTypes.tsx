"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShoppingCart, Target, ShieldAlert, Zap, TrendingUp, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const OrderTypes = () => {
  const orderTypes = [
    {
      name: "Market Order",
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      desc: "Buy or sell immediately at the current market price",
      when: "When you want instant execution and don't care about small price variations",
      pros: ["Instant execution", "Simple to use", "Guaranteed fill"],
      cons: ["Price uncertainty", "Can be expensive in volatile markets", "Slippage risk"],
      example: "You see Reliance at ₹2,500 and want to buy NOW. You place a market order and get filled at ₹2,502 (slightly higher due to bid-ask spread)."
    },
    {
      name: "Limit Order",
      icon: <Target className="w-5 h-5 text-emerald-600" />,
      desc: "Buy or sell only at your specified price or better",
      when: "When you have a target price and are willing to wait",
      pros: ["Price control", "No overpaying", "Good for volatile stocks"],
      cons: ["May not execute", "Requires monitoring", "Can miss opportunities"],
      example: "Infosys is at ₹1,600. You place a limit buy order at ₹1,550. If the price drops to ₹1,550 or below, your order executes."
    },
    {
      name: "Stop-Loss Order (SL)",
      icon: <ShieldAlert className="w-5 h-5 text-red-600" />,
      desc: "Sells automatically when price falls to your trigger level",
      when: "To protect profits or limit losses on existing holdings",
      pros: ["Automatic risk management", "Emotion-free exit", "Protects capital"],
      cons: ["Can trigger on temporary dips", "Becomes market order after trigger", "Gap down risk"],
      example: "You bought TCS at ₹3,500. You set a stop-loss at ₹3,300. If price falls to ₹3,300, it automatically sells to limit your loss to ₹200/share."
    },
    {
      name: "Stop-Loss Market (SL-M)",
      icon: <ShieldAlert className="w-5 h-5 text-orange-600" />,
      desc: "Converts to market order when trigger price is hit",
      when: "When guaranteed exit is more important than exit price",
      pros: ["Guaranteed execution", "Simple", "Fast exit"],
      cons: ["No price control after trigger", "Can get poor fill in panic selling"],
      example: "Stock triggers at ₹100, but sells at ₹98 due to rapid fall - you're guaranteed an exit but not the price."
    }
  ];

  const tradingTerms = [
    { term: "Bid Price", definition: "The highest price a buyer is willing to pay for a stock." },
    { term: "Ask Price", definition: "The lowest price a seller is willing to accept for a stock." },
    { term: "Spread", definition: "The difference between Bid and Ask price. Lower spread = more liquid stock." },
    { term: "Lot Size", definition: "The minimum quantity you must trade (especially in F&O). In equity cash, lot size = 1." },
    { term: "Slippage", definition: "The difference between expected price and actual execution price." },
    { term: "Day Order", definition: "Order valid only for the current trading day. Expires if not filled." },
    { term: "GTC (Good Till Cancelled)", definition: "Order remains active until you cancel it or it executes (not available in all Indian brokers)." },
    { term: "IOC (Immediate or Cancel)", definition: "Execute immediately, cancel any unfilled portion." }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <ShoppingCart className="w-4 h-4" />
            <span>Trading Essentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Order Types & Trading Mechanics
          </h2>
          <p className="text-blue-100 text-lg max-w-xl">
            Master the different ways to buy and sell stocks. Understanding order types is crucial for executing your strategy effectively.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Order Types Grid */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" /> Types of Orders
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {orderTypes.map((order, i) => (
            <Card key={i} className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-slate-50 rounded-lg">
                    {order.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {order.name.includes("Stop") ? "Risk Management" : "Execution"}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{order.name}</CardTitle>
                <CardDescription className="text-sm">{order.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-800 uppercase mb-1">When to Use</p>
                  <p className="text-xs text-blue-700">{order.when}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-emerald-700 uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Pros
                    </p>
                    <ul className="space-y-1">
                      {order.pros.map((pro, idx) => (
                        <li key={idx} className="text-[10px] text-slate-600 flex items-start gap-1">
                          <span className="text-emerald-500 mt-0.5">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-red-700 uppercase flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> Cons
                    </p>
                    <ul className="space-y-1">
                      {order.cons.map((con, idx) => (
                        <li key={idx} className="text-[10px] text-slate-600 flex items-start gap-1">
                          <span className="text-red-500 mt-0.5">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <p className="text-[10px] font-bold text-slate-700 uppercase mb-1">Example</p>
                  <p className="text-[10px] text-slate-600 italic leading-relaxed">{order.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trading Terms */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-purple-600" /> Essential Trading Terms
        </h3>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Term</TableHead>
                <TableHead>Definition</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tradingTerms.map((item, i) => (
                <TableRow key={i}>
                  <TableCell className="font-bold text-blue-700">{item.term}</TableCell>
                  <TableCell className="text-sm text-slate-600">{item.definition}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Circuit Breakers */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-red-600" /> Circuit Breakers & Trading Halts
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-lg text-red-800">What are Circuit Breakers?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>Automatic trading halts triggered when stock prices move too much (usually ±5%, ±10%, ±20% limits).</p>
              <div className="p-3 bg-white rounded-xl border border-red-100">
                <p className="text-xs font-bold text-red-800 uppercase mb-2">Purpose</p>
                <ul className="space-y-1 text-xs text-red-700">
                  <li className="flex gap-2"><span>•</span> Prevent panic selling/buying</li>
                  <li className="flex gap-2"><span>•</span> Give investors time to digest news</li>
                  <li className="flex gap-2"><span>•</span> Protect market integrity</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">Market-Wide Circuit Breakers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>If the market (Sensex/Nifty) falls significantly, trading halts across all stocks:</p>
              <div className="p-3 bg-white rounded-xl border border-blue-100">
                <p className="text-xs font-bold text-blue-800 uppercase mb-2">Halt Duration</p>
                <ul className="space-y-1 text-xs text-blue-700">
                  <li className="flex gap-2"><span>•</span> <strong>10% fall:</strong> 45-minute halt</li>
                  <li className="flex gap-2"><span>•</span> <strong>15% fall:</strong> 1 hr 45 min halt</li>
                  <li className="flex gap-2"><span>•</span> <strong>20% fall:</strong> Trading suspended for the day</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* First Trade Walkthrough */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem]">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <CheckCircle2 className="w-7 h-7 text-emerald-400" />
          Your First Trade: Step-by-Step
        </h3>
        <div className="space-y-4">
          {[
            "Log in to your trading app (Zerodha, Groww, Upstox, etc.)",
            "Search for the stock using its symbol (e.g., 'RELIANCE' or 'TCS')",
            "Click 'Buy' and select order type (usually start with 'Limit Order')",
            "Enter quantity and your desired price",
            "Select 'Product Type': Usually 'CNC' for delivery (long-term holding)",
            "Review your order details and click 'Submit'",
            "Your order appears in the 'Order Book' - monitor if it gets filled",
            "Once filled, it moves to 'Positions' (intraday) or 'Holdings' (delivery)"
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>
              <p className="text-slate-300 text-sm pt-1">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
          <p className="text-xs text-slate-400 italic">
            💡 <strong>Pro Tip:</strong> Start with small quantities. Your first few trades are your learning trades, not wealth-creation trades. Focus on understanding the mechanics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderTypes;
