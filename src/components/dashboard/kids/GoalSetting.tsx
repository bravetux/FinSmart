"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Calendar, Star, TrendingUp, Zap, Clock, Layers } from 'lucide-react';

const shortTermGoals = [
  { item: "New mobile game", cost: "₹800", months: "2 months", emoji: "🎮" },
  { item: "Birthday gift for a friend", cost: "₹300", months: "1 month", emoji: "🎁" },
];

const mediumTermGoals = [
  { item: "New bicycle", cost: "₹2,500", months: "5 months", emoji: "🚲" },
  { item: "School trip", cost: "₹1,500", months: "3 months", emoji: "✈️" },
];

const longTermGoals = [
  { item: "Laptop for studies", cost: "₹25,000", months: "2+ years", emoji: "💻" },
  { item: "Learning a new sport", cost: "₹5,000", months: "1 year", emoji: "⚽" },
];

const GoalSetting = () => {
  const bicycleGoalCost = 2500;
  const savedSoFar = 1000;
  const progressPercent = Math.round((savedSoFar / bicycleGoalCost) * 100);

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">

      {/* Hero */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-400 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-bold backdrop-blur-sm">
            <Target className="w-4 h-4" />
            <span>Save With Purpose</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Money Goals
          </h2>
          <p className="text-emerald-50 text-lg max-w-xl font-medium">
            A goal turns your savings into a superpower. Let us learn how to set goals that really work!
          </p>
        </div>
        <div className="absolute -bottom-10 -right-10 opacity-10">
          <Target size={280} />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* The Wandering Analogy */}
      <section>
        <Card className="border-2 border-amber-200 bg-amber-50">
          <CardContent className="pt-6 space-y-4">
            <h3 className="text-xl font-bold text-amber-900 flex items-center gap-2">
              🚶 Saving Without a Goal
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Imagine you go out for a walk — but you have no idea where you are going.
              You might walk for hours, turn left, turn right, and end up right back where you started!
            </p>
            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-amber-200">
              <span className="text-4xl">🧍</span>
              <div>
                <p className="font-bold text-amber-800">No destination = no progress</p>
                <p className="text-sm text-slate-600 mt-1">
                  Saving without a goal feels the same way. Your money just sits there and you never know what it is for.
                </p>
              </div>
            </div>
            <p className="text-amber-800 font-medium">
              A <strong>goal</strong> is your destination. It tells your money where to go! 🎯
            </p>
          </CardContent>
        </Card>
      </section>

      {/* SMART Goals */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Star className="text-yellow-500" /> The SMART Goal Formula
        </h3>
        <p className="text-slate-600 text-sm">
          The best goals follow a simple 3-part formula. Here is how it works with a real example:
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          <Card className="bg-blue-50 border-2 border-blue-200">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                S
              </div>
              <CardTitle className="text-blue-900">Specific</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-blue-800 space-y-2">
              <p className="line-through text-slate-400">"I want to save money"</p>
              <p className="font-bold">"I want to save for a bicycle" ✅</p>
              <p className="text-xs text-blue-700">Be clear about exactly what you want!</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-2 border-purple-200">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 rounded-xl bg-purple-500 text-white flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                M
              </div>
              <CardTitle className="text-purple-900">Measurable</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-purple-800 space-y-2">
              <p className="line-through text-slate-400">"It costs some money"</p>
              <p className="font-bold">"The bicycle costs ₹2,500" ✅</p>
              <p className="text-xs text-purple-700">Put a real number on it!</p>
            </CardContent>
          </Card>

          <Card className="bg-rose-50 border-2 border-rose-200">
            <CardHeader className="text-center pb-2">
              <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                T
              </div>
              <CardTitle className="text-rose-900">Time-bound</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-rose-800 space-y-2">
              <p className="line-through text-slate-400">"Someday..."</p>
              <p className="font-bold">"₹500/month for 5 months" ✅</p>
              <p className="text-xs text-rose-700">Give yourself a deadline!</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Three Goal Horizons */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Clock className="text-sky-500" /> Three Types of Goals
        </h3>
        <p className="text-slate-600 text-sm">
          You can have goals at three different "distances." Think of them like levels in a game!
        </p>

        {/* Short Term */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardContent className="pt-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">LEVEL 1</span>
              <h4 className="font-bold text-green-900 text-lg">Short-term Goals — 1 to 3 months</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {shortTermGoals.map((g) => (
                <div key={g.item} className="bg-white rounded-2xl p-4 border border-green-200 flex items-center gap-3">
                  <span className="text-3xl">{g.emoji}</span>
                  <div>
                    <p className="font-bold text-sm text-slate-800">{g.item}</p>
                    <p className="text-xs text-green-700">{g.cost} · Ready in {g.months}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Medium Term */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardContent className="pt-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-bold">LEVEL 2</span>
              <h4 className="font-bold text-blue-900 text-lg">Medium-term Goals — 3 to 12 months</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {mediumTermGoals.map((g) => (
                <div key={g.item} className="bg-white rounded-2xl p-4 border border-blue-200 flex items-center gap-3">
                  <span className="text-3xl">{g.emoji}</span>
                  <div>
                    <p className="font-bold text-sm text-slate-800">{g.item}</p>
                    <p className="text-xs text-blue-700">{g.cost} · Ready in {g.months}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Long Term */}
        <Card className="border-2 border-purple-200 bg-purple-50">
          <CardContent className="pt-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-bold">LEVEL 3</span>
              <h4 className="font-bold text-purple-900 text-lg">Long-term Goals — 1 year or more</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {longTermGoals.map((g) => (
                <div key={g.item} className="bg-white rounded-2xl p-4 border border-purple-200 flex items-center gap-3">
                  <span className="text-3xl">{g.emoji}</span>
                  <div>
                    <p className="font-bold text-sm text-slate-800">{g.item}</p>
                    <p className="text-xs text-purple-700">{g.cost} · Ready in {g.months}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Goal Stacking */}
      <section>
        <Card className="bg-orange-50 border-2 border-orange-200">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-orange-900">Goal Stacking — Be a Pro!</h3>
            </div>
            <p className="text-orange-800 leading-relaxed">
              The smartest savers always have <strong>one goal from each level</strong> going at the same time!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-white rounded-2xl p-3 border border-green-300 text-center">
                <p className="text-xs font-bold text-green-700 uppercase">Short</p>
                <p className="text-sm font-medium mt-1">🎮 New Game</p>
              </div>
              <div className="flex items-center justify-center text-orange-400 font-bold">+</div>
              <div className="flex-1 bg-white rounded-2xl p-3 border border-blue-300 text-center">
                <p className="text-xs font-bold text-blue-700 uppercase">Medium</p>
                <p className="text-sm font-medium mt-1">🚲 Bicycle</p>
              </div>
              <div className="flex items-center justify-center text-orange-400 font-bold">+</div>
              <div className="flex-1 bg-white rounded-2xl p-3 border border-purple-300 text-center">
                <p className="text-xs font-bold text-purple-700 uppercase">Long</p>
                <p className="text-sm font-medium mt-1">💻 Laptop</p>
              </div>
            </div>
            <p className="text-sm text-orange-700">
              You split your savings across all three goals every month. You always move forward on all levels!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Progress Bar */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <TrendingUp className="text-emerald-500" /> Savings Tracker Example
        </h3>
        <Card className="border-2 border-emerald-200 bg-emerald-50">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚲</span>
                <div>
                  <p className="font-bold text-emerald-900">Goal: New Bicycle</p>
                  <p className="text-xs text-emerald-700">Target: ₹2,500 · Saved so far: ₹{savedSoFar.toLocaleString()}</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-emerald-700">{progressPercent}%</span>
            </div>
            <div className="w-full bg-emerald-200 rounded-full h-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-400 to-green-500 h-6 rounded-full flex items-center justify-end pr-3 transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              >
                <span className="text-xs font-bold text-white">{progressPercent}%</span>
              </div>
            </div>
            <div className="flex justify-between text-xs text-emerald-700 font-medium">
              <span>₹0</span>
              <span className="text-amber-600 font-bold">🎉 50% = Celebrate!</span>
              <span>₹2,500</span>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-emerald-200">
              <p className="text-sm text-emerald-800">
                <strong>Pro tip:</strong> When you hit <strong>50% of your goal</strong>, do something small to celebrate — like having your favourite snack or watching a movie! It keeps you motivated. 🥳
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Goal Card Template */}
      <section>
        <Card className="border-2 border-dashed border-slate-300 bg-white">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-800">📋 Your Goal Card Template</h3>
            </div>
            <p className="text-slate-600 text-sm">Copy this and fill in the blanks for your own goal!</p>
            <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 text-center space-y-2">
              <p className="text-lg font-bold text-amber-900">
                "I want to save <span className="border-b-2 border-amber-500 px-4">₹____</span> for <span className="border-b-2 border-amber-500 px-4">________</span>
              </p>
              <p className="text-lg font-bold text-amber-900">
                by <span className="border-b-2 border-amber-500 px-4">________</span>.
              </p>
              <p className="text-lg font-bold text-amber-900">
                I will save <span className="border-b-2 border-amber-500 px-4">₹____</span> every <span className="border-b-2 border-amber-500 px-4">________</span>."
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Golden Rule */}
      <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] text-center space-y-4">
        <p className="text-emerald-400 font-bold uppercase text-sm tracking-widest">The Golden Rule</p>
        <h4 className="text-2xl font-bold">
          "A goal without a plan is just a wish. Give your savings a destination!"
        </h4>
        <p className="text-slate-400 text-sm max-w-lg mx-auto">
          Start with just one goal today. Write it down. Watch your savings have direction — and purpose!
        </p>
      </div>

    </div>
  );
};

export default GoalSetting;
