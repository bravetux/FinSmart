"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  List,
  Clock,
  Calculator,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Tag
} from 'lucide-react';

const SmartShopping = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">

      {/* Hero Header */}
      <div className="bg-orange-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <ShoppingCart className="w-4 h-4" />
            <span>Be a Smart Buyer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Smart Shopping: Make Every Rupee Count 🛒
          </h2>
          <p className="text-orange-100 text-lg max-w-xl">
            Did you know that shops are <strong>DESIGNED</strong> to make you spend more? Bright lights, yummy smells, sale signs everywhere... Let's learn to outsmart them!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-8 opacity-10 hidden md:block">
          <ShoppingCart size={180} />
        </div>
      </div>

      {/* The Shopping Trap */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <AlertTriangle className="text-rose-500" /> The Shopping Trap 🪤
        </h3>
        <p className="text-sm text-slate-600">Shops use clever tricks to get you to spend more. Here's what they do:</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { emoji: "🚶", title: "Long Walk In", desc: "Most-wanted items are at the BACK of the store. So you walk past everything else and pick up extra stuff on the way!" },
            { emoji: "🍫", title: "Checkout Snacks", desc: "Chocolates and snacks are placed right at the checkout counter — last minute temptation when you're about to pay!" },
            { emoji: "🏷️", title: "Big SALE Signs", desc: "Huge red 'SALE!' signs catch your eye. But is the discount really that great? Often not! It's just to excite you." },
          ].map((trap) => (
            <div key={trap.title} className="p-5 bg-rose-50 rounded-2xl border border-rose-100 space-y-2">
              <div className="text-3xl">{trap.emoji}</div>
              <h4 className="font-bold text-rose-800">{trap.title}</h4>
              <p className="text-xs text-rose-700 leading-relaxed">{trap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rule #1 — The Shopping List */}
      <section className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem] space-y-4">
        <h3 className="text-2xl font-bold flex items-center gap-3 text-emerald-800">
          <List className="text-emerald-500" /> Rule #1 — The Shopping List 📋
        </h3>
        <p className="text-sm text-emerald-700 leading-relaxed">
          Before going to <strong>any</strong> shop, make a list. Buy <strong>ONLY</strong> what's on the list.
        </p>
        <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-emerald-100">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700">
            The list is your <strong>shield against impulse buying</strong>. If it's not on the list, it doesn't go in the basket!
          </p>
        </div>
      </section>

      {/* 3 Questions Before Buying */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Lightbulb className="text-amber-500" /> The 3 Questions Superpower ⚡
        </h3>
        <p className="text-sm text-slate-600">Before buying anything, ask yourself these 3 questions. This is your superpower!</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              q: "1", question: "Do I NEED this or just WANT it?",
              detail: "Needs are things you can't live without — food, school supplies. Wants are things that are nice to have but not necessary.",
              color: "bg-blue-50 border-blue-100", titleColor: "text-blue-800", textColor: "text-blue-700"
            },
            {
              q: "2", question: "Can I find it cheaper somewhere else?",
              detail: "Check one or two other shops or apps before buying. A few minutes of checking can save you ₹50–100!",
              color: "bg-violet-50 border-violet-100", titleColor: "text-violet-800", textColor: "text-violet-700"
            },
            {
              q: "3", question: "If I wait ONE week, will I still want this?",
              detail: "This is the 1-Week Rule. If the answer is 'no' after a week — you probably didn't really want it! You were just excited in the moment.",
              color: "bg-amber-50 border-amber-100", titleColor: "text-amber-800", textColor: "text-amber-700"
            },
          ].map((item) => (
            <div key={item.q} className={`p-6 rounded-2xl border ${item.color} space-y-3`}>
              <div className={`text-4xl font-black opacity-20 ${item.titleColor}`}>{item.q}</div>
              <h4 className={`font-bold ${item.titleColor}`}>{item.question}</h4>
              <p className={`text-xs leading-relaxed ${item.textColor}`}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Decoding Discount Tricks */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Tag className="text-rose-500" /> Decoding Discount Tricks 🔍
        </h3>
        <div className="space-y-4">
          {[
            {
              trick: `"50% OFF on purchases above ₹1,000!"`,
              reality: "You HAVE to spend ₹1,000 to save ₹500. Is that smart? Only if you actually needed ₹1,000 worth of stuff anyway! If you spend ₹1,000 just to save ₹500, you still spent ₹500 that you didn't need to.",
              icon: <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            },
            {
              trick: `"Buy 2 Get 1 Free!"`,
              reality: "Only useful if you actually need 3 of the item. Buying 3 shampoos when you only needed 1 means you spent money on 2 extra shampoos!",
              icon: <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            },
            {
              trick: `"Limited Time Offer! Ends Tonight!"`,
              reality: "This creates fake urgency. It makes you rush and buy without thinking. In most cases, the sale is extended or comes back next week. Don't fall for it!",
              icon: <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
              <p className="font-bold text-sm text-slate-800">{item.trick}</p>
              <div className="flex items-start gap-2">
                {item.icon}
                <p className="text-xs text-slate-600 leading-relaxed">{item.reality}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Price Per Unit Trick */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Calculator className="text-teal-500" /> The Price-Per-Unit Maths Superpower 🧮
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 space-y-3">
            <div className="text-2xl">📦 Small Pack</div>
            <p className="font-bold text-rose-800">100ml shampoo for ₹40</p>
            <p className="text-sm text-rose-700">₹40 ÷ 100ml = <strong>₹0.40 per ml</strong></p>
            <p className="text-xs text-rose-600">Looks cheap because the total price is low!</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-3">
            <div className="text-2xl">📦 Big Pack</div>
            <p className="font-bold text-emerald-800">400ml shampoo for ₹120</p>
            <p className="text-sm text-emerald-700">₹120 ÷ 400ml = <strong>₹0.30 per ml</strong></p>
            <p className="text-xs text-emerald-600">More money upfront, but CHEAPER per ml!</p>
          </div>
        </div>
        <div className="p-5 bg-teal-50 border border-teal-100 rounded-2xl flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
          <p className="text-sm text-teal-800">
            <strong>Always compare price per unit</strong>, not just the total price. The big pack saves you ₹0.10 per ml — and over time, that adds up!
          </p>
        </div>
      </section>

      {/* Online vs Offline */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-7 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Smartphone className="text-blue-500" /> Online Shopping Tips 📱
          </h3>
          <ul className="space-y-3">
            {[
              "Compare prices on 2–3 apps before buying (Amazon, Flipkart, Meesho).",
              "Wait for cashback offers — they are as good as a discount!",
              "Never buy just because there's 'FREE DELIVERY TODAY ONLY'. That's fake urgency!",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-7 bg-amber-50 rounded-[2rem] border border-amber-100 space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Clock className="text-amber-500" /> The Impulse Buy Regret 😬
          </h3>
          <p className="text-sm text-amber-800 leading-relaxed">
            Have you ever bought something and felt bad about it the next day? That is called an <strong>impulse buy</strong>.
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Smart shoppers <strong>wait, think, then decide</strong>. The excitement you feel in the shop often disappears within a day!
          </p>
        </div>
      </section>

      {/* Bottom Golden Rule */}
      <div className="text-center p-10 bg-orange-500 text-white rounded-[2.5rem] shadow-xl">
        <div className="text-4xl mb-4">🛒</div>
        <h3 className="text-2xl font-bold mb-3">The Smart Shopper's Mantra</h3>
        <p className="text-orange-100 text-lg italic max-w-2xl mx-auto">
          "Make the list. Ask the 3 questions. Compare the price per unit. Then — and only then — buy."
        </p>
      </div>

    </div>
  );
};

export default SmartShopping;
