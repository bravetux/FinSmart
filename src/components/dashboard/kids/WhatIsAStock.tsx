"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Zap, Clock, AlertTriangle, Star, ArrowRight, Users } from 'lucide-react';

const WhatIsAStock = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">

      {/* Hero */}
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-bold backdrop-blur-sm">
            <Star className="w-4 h-4" />
            <span>Future Investor Alert!</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Stocks: Own a Tiny Piece of Your Favourite Company!
          </h2>
          <p className="text-sky-100 text-lg max-w-xl font-medium">
            Yes — you can actually own a piece of a company you love. Here is how it works!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 opacity-10">
          <TrendingUp size={280} />
        </div>
      </div>

      {/* Story Opener */}
      <section>
        <Card className="border-2 border-amber-200 bg-amber-50">
          <CardContent className="pt-6 space-y-4">
            <p className="text-xl font-bold text-amber-900">🍪 You love Parle-G biscuits, right?</p>
            <p className="text-slate-700 leading-relaxed">
              Think about how many packets of Parle-G people in India eat every day. Millions! All those biscuits bring money to the Parle company.
            </p>
            <div className="bg-white rounded-2xl p-5 border border-amber-200">
              <p className="text-amber-800 font-bold text-base">
                🤯 Here is the big idea: <span className="text-amber-600">YOU can own a tiny piece of that company!</span>
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Every time Parle makes money, you — as an owner — can benefit too. That is what a <strong>stock</strong> is!
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Zap className="text-yellow-500" /> How Does It Work?
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: "1", emoji: "🏭", title: "Company Needs Money", desc: "Parle-G wants to build new factories to make more biscuits." },
            { step: "2", emoji: "✂️", title: "Split Into Shares", desc: "They cut the whole company into millions of tiny pieces called shares." },
            { step: "3", emoji: "📣", title: "Sell to the Public", desc: "They sell these shares to anyone who wants to buy — including YOU!" },
            { step: "4", emoji: "🤝", title: "You Are an Owner!", desc: "Buy 1 share and you own a teeny tiny piece of Parle-G!" },
          ].map((item) => (
            <div key={item.step} className="relative">
              <Card className="bg-sky-50 border-2 border-sky-200 h-full">
                <CardHeader className="text-center pb-2">
                  <div className="w-8 h-8 rounded-full bg-sky-500 text-white text-sm font-bold flex items-center justify-center mx-auto mb-2">
                    {item.step}
                  </div>
                  <span className="text-3xl block">{item.emoji}</span>
                  <CardTitle className="text-sky-900 text-sm mt-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-xs text-sky-800">
                  {item.desc}
                </CardContent>
              </Card>
              {item.step !== "4" && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white border-2 border-sky-200 rounded-full items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-sky-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Two Ways to Make Money */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <TrendingUp className="text-emerald-500" /> Two Ways to Make Money from Stocks
        </h3>
        <div className="grid md:grid-cols-2 gap-6">

          {/* Price Goes Up */}
          <Card className="bg-green-50 border-2 border-green-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <CardTitle className="text-green-900">Way 1: Price Goes UP 📈</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white rounded-xl p-3 border border-green-200 text-center">
                  <p className="text-xs text-slate-500 font-bold uppercase">You Buy</p>
                  <p className="text-2xl font-bold text-slate-800">₹100</p>
                </div>
                <ArrowRight className="w-5 h-5 text-green-500 shrink-0" />
                <div className="flex-1 bg-white rounded-xl p-3 border border-green-200 text-center">
                  <p className="text-xs text-slate-500 font-bold uppercase">Later Worth</p>
                  <p className="text-2xl font-bold text-green-600">₹150</p>
                </div>
                <ArrowRight className="w-5 h-5 text-green-500 shrink-0" />
                <div className="flex-1 bg-green-100 rounded-xl p-3 border border-green-300 text-center">
                  <p className="text-xs text-green-700 font-bold uppercase">Your Profit</p>
                  <p className="text-2xl font-bold text-green-700">+₹50</p>
                </div>
              </div>
              <p className="text-green-800 text-sm">
                If the company does well, more people want its shares, so the price goes up. You sell and keep the profit!
              </p>
            </CardContent>
          </Card>

          {/* Dividend */}
          <Card className="bg-blue-50 border-2 border-blue-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <CardTitle className="text-blue-900">Way 2: Dividend 🎁</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white rounded-2xl p-4 border border-blue-200 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏭</span>
                  <p className="text-sm text-slate-700">Company earns big profits this year.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-400 mx-auto rotate-90" />
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎉</span>
                  <p className="text-sm text-slate-700">They share some of that profit with all their owners.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-400 mx-auto rotate-90" />
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <p className="text-sm text-blue-700 font-bold">You get a "thank you" payment — even without selling!</p>
                </div>
              </div>
              <p className="text-blue-800 text-sm">
                This is called a <strong>Dividend</strong>. It is like getting paid just for being a loyal owner.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Risk Section */}
      <section>
        <Card className="border-2 border-red-200 bg-red-50">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-red-900">The Risk — Being Honest With You 🔴</h3>
            </div>
            <p className="text-red-800 leading-relaxed">
              Prices can also go <strong>DOWN</strong>. That is the honest truth.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white rounded-xl p-3 border border-red-200 text-center">
                <p className="text-xs text-slate-500 font-bold uppercase">You Buy</p>
                <p className="text-2xl font-bold text-slate-800">₹100</p>
              </div>
              <ArrowRight className="w-5 h-5 text-red-400 shrink-0" />
              <div className="flex-1 bg-white rounded-xl p-3 border border-red-200 text-center">
                <p className="text-xs text-slate-500 font-bold uppercase">Falls To</p>
                <p className="text-2xl font-bold text-red-600">₹70</p>
              </div>
              <ArrowRight className="w-5 h-5 text-red-400 shrink-0" />
              <div className="flex-1 bg-red-100 rounded-xl p-3 border border-red-300 text-center">
                <p className="text-xs text-red-700 font-bold uppercase">Your Loss</p>
                <p className="text-2xl font-bold text-red-700">-₹30</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-red-200">
              <p className="text-sm text-red-800 font-medium">
                That is why stocks are called <strong>risky</strong>. You can gain money, but you can also lose some. Never put money in stocks that you NEED right now!
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* The Patience Secret */}
      <section>
        <Card className="bg-slate-900 text-white border-none rounded-[2.5rem] p-8 md:p-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">The Patience Secret 🌳</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Stock prices go up AND down every single day. That is normal. But here is the secret that rich investors know:
            </p>
            <div className="bg-white/10 rounded-2xl p-5 border border-white/20 text-center">
              <p className="text-xl font-bold text-amber-400">
                "If you wait long enough — 5 to 10 years — good companies almost ALWAYS go up!"
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <p className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">Real Example</p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center flex-1">
                  <p className="text-xs text-slate-400 uppercase font-bold">10 years ago</p>
                  <p className="text-3xl font-bold text-white mt-1">₹1,000</p>
                  <p className="text-xs text-slate-400 mt-1">invested in India's top 50 companies</p>
                </div>
                <div className="text-3xl font-bold text-emerald-400">→</div>
                <div className="bg-emerald-500/20 rounded-xl p-4 text-center flex-1 border border-emerald-500/30">
                  <p className="text-xs text-emerald-300 uppercase font-bold">Today worth</p>
                  <p className="text-3xl font-bold text-emerald-400 mt-1">₹3,500</p>
                  <p className="text-xs text-emerald-300 mt-1">That is 3.5 times your money!</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Mutual Funds Bridge */}
      <section>
        <Card className="bg-indigo-50 border-2 border-indigo-200">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500 text-white flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-indigo-900">What is a Mutual Fund? 🏦</h3>
            </div>
            <p className="text-indigo-800 leading-relaxed">
              Instead of buying 1 company (risky!), what if you could own a tiny piece of <strong>50 companies at once</strong>?
            </p>
            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-indigo-200">
              <div className="text-center flex-1">
                <span className="text-3xl">🍪</span>
                <p className="text-xs font-bold text-slate-700 mt-1">1 Company</p>
                <p className="text-xs text-red-500">Riskier</p>
              </div>
              <div className="text-indigo-400 font-bold text-xl">vs</div>
              <div className="text-center flex-1">
                <span className="text-3xl">🧺</span>
                <p className="text-xs font-bold text-slate-700 mt-1">50 Companies</p>
                <p className="text-xs text-green-600">Much Safer!</p>
              </div>
            </div>
            <p className="text-indigo-800 text-sm">
              That basket of many companies is called a <strong>Mutual Fund</strong>. If one company does badly, the others help make up for it. It is a much smarter way for beginners!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Age Note */}
      <section>
        <Card className="border-2 border-orange-200 bg-orange-50">
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🇮🇳</span>
              <h3 className="text-xl font-bold text-orange-900">What About You Right Now?</h3>
            </div>
            <p className="text-orange-800 leading-relaxed">
              In India, you need to be <strong>18 years old</strong> to open your own investment account (called a <strong>Demat account</strong>).
            </p>
            <div className="bg-white rounded-2xl p-4 border border-orange-200">
              <p className="text-orange-700 font-medium text-sm">
                But here is the amazing part — your <strong>parents can start investing FOR YOU right now</strong>! The sooner you start, the more time your money has to grow.
              </p>
            </div>
            <div className="bg-amber-100 rounded-2xl p-4 border border-amber-300 text-center">
              <p className="font-bold text-amber-900">Go ask your parents today! 👨‍👩‍👦</p>
              <p className="text-xs text-amber-700 mt-1">"Can we start investing for my future?"</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Golden Rule */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] text-center space-y-4">
        <p className="text-sky-400 font-bold uppercase text-sm tracking-widest">The Golden Rule</p>
        <h4 className="text-2xl font-bold">
          "Stocks are like planting a tree. You need patience. The longer you wait, the bigger it grows."
        </h4>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Start learning now. Start small when you can. Time is the most powerful tool an investor has — and you have lots of it!
        </p>
      </div>

    </div>
  );
};

export default WhatIsAStock;
