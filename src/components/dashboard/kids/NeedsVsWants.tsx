"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart, Lightbulb, CheckCircle, XCircle, Zap, AlertTriangle } from 'lucide-react';

const needsItems = [
  { emoji: "🎒", name: "School Bag", label: "NEED", color: "bg-green-100 border-green-300 text-green-800", reason: "You need it to carry your books to school." },
  { emoji: "🎮", name: "Mobile Game", label: "WANT", color: "bg-red-100 border-red-300 text-red-800", reason: "Fun to play, but life goes on without it!" },
  { emoji: "🍚", name: "Rice / Food", label: "NEED", color: "bg-green-100 border-green-300 text-green-800", reason: "Your body needs food every single day." },
  { emoji: "🎬", name: "Movie Ticket", label: "WANT", color: "bg-red-100 border-red-300 text-red-800", reason: "Great fun, but not needed to survive." },
  { emoji: "💊", name: "Medicine", label: "NEED", color: "bg-green-100 border-green-300 text-green-800", reason: "When you are sick, medicine is a must!" },
  { emoji: "🍕", name: "Pizza", label: "WANT", color: "bg-red-100 border-red-300 text-red-800", reason: "Yummy, but plain food also keeps you healthy." },
  { emoji: "☂️", name: "Umbrella", label: "NEED", color: "bg-green-100 border-green-300 text-green-800", reason: "Protects you from rain and sun — safety first." },
  { emoji: "🚲", name: "Bicycle", label: "WANT", color: "bg-red-100 border-red-300 text-red-800", reason: "Great for fun and travel, but not a survival must." },
];

const NeedsVsWants = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">

      {/* Hero */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-400 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-bold backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>Money Superpower Unlocked!</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Needs vs. Wants
          </h2>
          <p className="text-purple-100 text-lg max-w-xl font-medium">
            Knowing the difference is one of the most powerful money skills you can ever learn!
          </p>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10">
          <ShoppingCart size={280} />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Opening Hook */}
      <section>
        <Card className="border-2 border-amber-200 bg-amber-50">
          <CardContent className="pt-6 space-y-4">
            <p className="text-xl font-bold text-amber-900">🤔 Imagine this...</p>
            <p className="text-slate-700 leading-relaxed text-base">
              You have <strong>₹500</strong> in your pocket. Your stomach is rumbling — you are really hungry. But you also saw a brand new mobile game that looks SO cool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex-1 bg-green-100 border-2 border-green-300 rounded-2xl p-4 text-center">
                <span className="text-4xl block mb-2">🍱</span>
                <p className="font-bold text-green-800">Buy Food</p>
                <p className="text-xs text-green-700 mt-1">Your body needs this to work and stay healthy.</p>
              </div>
              <div className="flex items-center justify-center text-2xl font-bold text-slate-400">or</div>
              <div className="flex-1 bg-red-100 border-2 border-red-300 rounded-2xl p-4 text-center">
                <span className="text-4xl block mb-2">🎮</span>
                <p className="font-bold text-red-800">Buy the Game</p>
                <p className="text-xs text-red-700 mt-1">Super fun, but you can live without it right now.</p>
              </div>
            </div>
            <p className="text-center text-slate-600 font-medium italic">
              The food is a <strong>NEED</strong>. The game is a <strong>WANT</strong>. That is the whole lesson!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Definitions */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card className="bg-green-50 border-2 border-green-200">
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center mb-2">
              <Heart className="w-6 h-6" />
            </div>
            <CardTitle className="text-green-900 text-xl">✅ NEEDS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-green-800 text-sm leading-relaxed">
              Things you <strong>must have</strong> to stay alive, healthy, and safe. Without these, life becomes very hard.
            </p>
            <ul className="space-y-2">
              {["🍚 Food and clean water", "👕 Basic clothes", "🏠 A home to live in", "💊 Medicine when sick", "📚 School supplies"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-green-800">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-2 border-red-200">
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center mb-2">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <CardTitle className="text-red-900 text-xl">💫 WANTS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-red-800 text-sm leading-relaxed">
              Things that are <strong>nice to have</strong> and make life more fun — but life goes on just fine without them!
            </p>
            <ul className="space-y-2">
              {["🎮 Video games", "👟 Brand-name shoes", "🍫 Candy and snacks", "📺 Streaming services", "🎬 Movie outings"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-red-800">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* The Tricky In-Between */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <AlertTriangle className="text-orange-500" /> The Tricky In-Between
        </h3>
        <Card className="border-2 border-orange-200 bg-orange-50">
          <CardContent className="pt-6 space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Sometimes it gets confusing! Here is an example:
            </p>
            <div className="bg-white rounded-2xl p-5 border border-orange-200 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-3xl">👟</span>
                <div>
                  <p className="font-bold text-slate-800">Shoes — NEED or WANT?</p>
                  <p className="text-sm text-slate-600 mt-1">
                    You <strong>need shoes</strong> to protect your feet. But do you <strong>need the ₹3,000 branded ones</strong> when your old shoes still work perfectly fine?
                  </p>
                  <div className="flex gap-3 mt-3">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold border border-green-300">NEED = Shoes ✅</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold border border-red-300">WANT = Branded ones 💫</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-orange-800 text-sm font-medium italic">
              The NEED is the basic version. The WANT is the expensive, fancy upgrade!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 3-Second Rule */}
      <section>
        <Card className="bg-blue-50 border-2 border-blue-200">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">⏱️ The 3-Second Rule</h3>
            </div>
            <p className="text-blue-800 leading-relaxed">
              Before you buy <em>anything</em>, pause for just 3 seconds and ask yourself one question:
            </p>
            <div className="bg-white rounded-2xl p-5 border-2 border-blue-300 text-center">
              <p className="text-2xl font-bold text-blue-800">"Is this a NEED or a WANT?"</p>
            </div>
            <p className="text-blue-700 text-sm">
              If it is a WANT, it does not mean "never buy it." It just means — think first! Can you afford it? Have your Needs been taken care of first?
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Activity Grid */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          🧩 Can You Sort These?
        </h3>
        <p className="text-slate-600 text-sm">Here are 8 everyday items. Check if each one is a Need or a Want!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {needsItems.map((item) => (
            <div key={item.name} className={`rounded-2xl border-2 p-4 text-center space-y-2 ${item.color}`}>
              <span className="text-4xl block">{item.emoji}</span>
              <p className="font-bold text-sm">{item.name}</p>
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${item.label === "NEED" ? "bg-green-500 text-white" : "bg-red-400 text-white"}`}>
                {item.label}
              </span>
              <p className="text-xs leading-tight opacity-80">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section>
        <Card className="border-2 border-slate-200 bg-slate-50">
          <CardContent className="pt-6 space-y-3">
            <h3 className="text-xl font-bold text-slate-800">💡 Why Does This Matter?</h3>
            <p className="text-slate-700 leading-relaxed">
              Every rupee you spend on a <strong>Want</strong> is one rupee that cannot be saved for something more important later.
            </p>
            <div className="bg-white rounded-2xl p-4 border border-slate-200">
              <p className="text-sm text-slate-600">
                Spend <strong>₹50 on candy every day</strong> → That is <strong>₹1,500 in a month</strong>!<br />
                That same money could buy a new school bag, a book, or go into your savings goal. 🎯
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Golden Rule */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] text-center space-y-4">
        <p className="text-amber-400 font-bold uppercase text-sm tracking-widest">The Golden Rule</p>
        <h4 className="text-2xl font-bold">
          "Needs keep you alive. Wants make life fun. Both matter — but Needs come first."
        </h4>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Master this rule and you will always make smarter money choices than most adults!
        </p>
      </div>

    </div>
  );
};

export default NeedsVsWants;
