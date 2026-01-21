"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, TrendingUp } from 'lucide-react';

const ETF = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
        <h2 className="text-3xl md:text-5xl font-bold">Exchange Traded Funds (ETFs)</h2>
        <p className="text-orange-50 text-lg mt-4">Trade like stocks, diversify like mutual funds</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-600" />
            What are ETFs?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700">
            ETFs are like index funds but traded on stock exchanges like individual stocks. You need a demat account to invest.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-green-50 rounded-xl">
              <h4 className="font-semibold text-green-900 mb-2">Advantages</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Even lower expense ratio than index funds</li>
                <li>• Intraday trading possible</li>
                <li>• Real-time pricing</li>
                <li>• More liquidity</li>
              </ul>
            </div>
            <div className="p-5 bg-red-50 rounded-xl">
              <h4 className="font-semibold text-red-900 mb-2">Disadvantages</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Brokerage charges apply</li>
                <li>• No SIP automation</li>
                <li>• Trading demat required</li>
                <li>• Bid-ask spread costs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Popular ETFs in India</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <p>• <strong>Nifty BeES:</strong> Tracks Nifty 50</p>
            <p>• <strong>Junior BeES:</strong> Tracks Nifty Next 50</p>
            <p>• <strong>Bank BeES:</strong> Tracks Nifty Bank Index</p>
            <p>• <strong>Gold BeES:</strong> Invests in physical gold</p>
            <p>• <strong>Liquid BeES:</strong> Invests in liquid funds</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ETF;
