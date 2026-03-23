"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Timer,
  Brain,
  TrendingUp,
  Target,
  Dumbbell,
  Star,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  IndianRupee
} from 'lucide-react';

const DelayedGratification = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">

      {/* Hero Header */}
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Timer className="w-4 h-4" />
            <span>Your Secret Superpower</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Waiting Game: Your Secret Money Superpower ⏳
          </h2>
          <p className="text-indigo-100 text-lg max-w-xl">
            What if waiting for something made it <strong>twice as good</strong>? Learn the superpower that the world's richest people all share!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-8 opacity-10 hidden md:block">
          <Timer size={180} />
        </div>
      </div>

      {/* The Marshmallow Test */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Brain className="text-pink-500" /> The Famous Marshmallow Test 🍡
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { emoji: "👦", text: "A scientist gave kids one marshmallow each." },
              { emoji: "🚪", text: "He said: \"I'm leaving for 15 minutes. If you DON'T eat it until I'm back, I'll give you TWO marshmallows!\"" },
              { emoji: "😋", text: "Some kids ate it right away. Some kids waited — they sang, looked away, sat on their hands!" },
              { emoji: "🏆", text: "Years later, the kids who WAITED did better in school and life. They earned more and were happier!" },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-2xl">{step.emoji}</span>
                <p className="text-sm text-slate-700 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
          <Card className="bg-pink-600 text-white border-none shadow-lg flex flex-col justify-center p-8">
            <div className="text-5xl mb-4">🧠</div>
            <h4 className="text-xl font-bold mb-3">What This Test Showed</h4>
            <p className="text-pink-100 text-sm leading-relaxed">
              The ability to <strong className="text-white">wait for something bigger</strong> instead of grabbing something smaller right now is one of the most important skills in the world.
            </p>
            <p className="text-pink-200 text-sm mt-3">
              It's called <strong className="text-white">Delayed Gratification</strong> — and you can learn it!
            </p>
          </Card>
        </div>
      </section>

      {/* Simple Definition */}
      <section className="bg-indigo-50 border border-indigo-100 p-8 rounded-[2rem] space-y-3">
        <h3 className="text-xl font-bold text-indigo-800 flex items-center gap-2">
          <Lightbulb className="text-indigo-500" /> What is Delayed Gratification?
        </h3>
        <p className="text-slate-700 text-sm leading-relaxed">
          <strong>Delayed Gratification</strong> means choosing to <strong>wait for a better reward</strong> instead of getting a smaller reward right now.
        </p>
        <p className="text-slate-700 text-sm leading-relaxed">
          It's not easy — but it's one of the best things you can practice. And like any skill, the more you do it, the easier it gets!
        </p>
      </section>

      {/* The Money Version: Option A vs B */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <IndianRupee className="text-amber-500" /> The Money Version 💰
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-rose-50 rounded-2xl border border-rose-200 space-y-3">
            <div className="text-2xl font-bold text-rose-700">Option A 😬</div>
            <p className="text-sm font-medium text-rose-800">Spend ₹100 on ice cream today</p>
            <ul className="space-y-1 text-xs text-rose-700">
              <li>• ₹0 left in your piggy bank</li>
              <li>• Ice cream is gone in 10 minutes</li>
              <li>• Nothing to show for it tomorrow</li>
            </ul>
          </div>
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
            <div className="text-2xl font-bold text-emerald-700">Option B 😎</div>
            <p className="text-sm font-medium text-emerald-800">Save ₹100 this month. And next month. And the month after...</p>
            <ul className="space-y-1 text-xs text-emerald-700">
              <li>• After 5 months → ₹500</li>
              <li>• After 1 year → ₹1,200</li>
              <li>• After a few years → a real bicycle! 🚲</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Present Self vs Future Self */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-7 bg-orange-50 rounded-[2rem] border border-orange-100 space-y-4">
          <h3 className="text-xl font-bold text-orange-800 flex items-center gap-2">
            😴 Your Present Self
          </h3>
          <p className="text-sm text-orange-700 leading-relaxed">
            Your Present Self only thinks about <strong>RIGHT NOW</strong> — the ice cream, the game, the fun thing happening this second.
          </p>
          <p className="text-sm text-orange-700 leading-relaxed">
            Present Self says: <em>"I want it NOW!"</em>
          </p>
        </div>
        <div className="p-7 bg-teal-50 rounded-[2rem] border border-teal-100 space-y-4">
          <h3 className="text-xl font-bold text-teal-800 flex items-center gap-2">
            🌟 Your Future Self
          </h3>
          <p className="text-sm text-teal-700 leading-relaxed">
            Your Future Self is 10 years older and will <strong>thank you</strong> — or blame you — for the decisions you make today.
          </p>
          <p className="text-sm text-teal-700 leading-relaxed font-semibold">
            Be kind to your Future Self. They will remember what you did!
          </p>
        </div>
      </section>

      {/* Savings Timeline */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <TrendingUp className="text-emerald-500" /> ₹100/Month — Watch It Grow! 📈
        </h3>
        <p className="text-sm text-slate-500">(Assuming 7% yearly interest from a savings account)</p>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { period: "1 Year", amount: "₹1,248", note: "12 months × ₹100 + interest", color: "bg-blue-50 border-blue-100 text-blue-800" },
            { period: "3 Years", amount: "₹3,972", note: "36 months + compound interest", color: "bg-violet-50 border-violet-100 text-violet-800" },
            { period: "5 Years", amount: "₹7,159", note: "60 months + compound interest", color: "bg-amber-50 border-amber-100 text-amber-800" },
            { period: "10 Years", amount: "₹17,308", note: "120 months + compound interest", color: "bg-emerald-50 border-emerald-100 text-emerald-800" },
          ].map((item) => (
            <div key={item.period} className={`p-5 rounded-2xl border text-center space-y-2 ${item.color}`}>
              <p className="text-xs font-bold uppercase tracking-wide opacity-60">{item.period}</p>
              <p className="text-2xl font-black">{item.amount}</p>
              <p className="text-xs opacity-70">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          <p className="text-sm text-emerald-800">
            In 10 years, you would have put in <strong>₹12,000</strong> but get back <strong>₹17,308</strong>. That extra ₹5,308 is your reward for waiting. That is the magic of compound interest!
          </p>
        </div>
      </section>

      {/* 3 Ways to Practice */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Target className="text-rose-500" /> 3 Ways to Practice the Waiting Game 🎯
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "The 3-Day Rule",
              desc: "Before buying anything over ₹200, wait 3 days. If you still want it on Day 3 — and it fits your budget — go ahead!",
              color: "bg-rose-50 border-rose-100", titleColor: "text-rose-700", numColor: "text-rose-200"
            },
            {
              number: "02",
              title: "Goal First, Reward Later",
              desc: "Set a savings goal (like ₹500 for a new game). Reward yourself ONLY when you reach it. Not before!",
              color: "bg-amber-50 border-amber-100", titleColor: "text-amber-700", numColor: "text-amber-200"
            },
            {
              number: "03",
              title: "Write It Down",
              desc: "Write down what you are saving for and stick it on your piggy bank. Look at it every time you feel like spending!",
              color: "bg-indigo-50 border-indigo-100", titleColor: "text-indigo-700", numColor: "text-indigo-200"
            },
          ].map((item) => (
            <div key={item.number} className={`p-6 rounded-2xl border ${item.color} space-y-3 relative overflow-hidden`}>
              <div className={`text-6xl font-black absolute top-2 right-3 ${item.numColor}`}>{item.number}</div>
              <h4 className={`font-bold ${item.titleColor} relative z-10`}>{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Muscle Analogy */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="p-7 bg-slate-800 text-white rounded-[2rem] space-y-4">
          <div className="flex items-center gap-3">
            <Dumbbell className="w-7 h-7 text-amber-400" />
            <h3 className="text-xl font-bold">It's Like a Muscle 💪</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Delayed gratification is like a muscle. The more you exercise it, the <strong className="text-white">stronger it gets</strong>.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            At first it is <strong className="text-white">really HARD</strong>. You will feel like giving up. But with practice, it gets easier and easier — until waiting feels totally normal!
          </p>
        </div>
        <div className="p-7 bg-amber-50 rounded-[2rem] border border-amber-100 space-y-4">
          <div className="flex items-center gap-3">
            <Star className="w-7 h-7 text-amber-500" />
            <h3 className="text-xl font-bold text-amber-800">The Warren Buffett Secret</h3>
          </div>
          <p className="text-sm text-amber-800 leading-relaxed">
            Warren Buffett is one of the richest people in the world. His secret? He said it was simply <strong>"not spending money on things he didn't need."</strong>
          </p>
          <p className="text-sm text-amber-700 leading-relaxed">
            He started investing at age <strong>11</strong> — just a couple of years older than you!
          </p>
        </div>
      </section>

      {/* Golden Rule */}
      <div className="text-center p-10 bg-indigo-600 text-white rounded-[2.5rem] shadow-xl">
        <div className="text-4xl mb-4">⏳</div>
        <h3 className="text-2xl font-bold mb-3">The Golden Rule</h3>
        <p className="text-indigo-100 text-lg italic max-w-2xl mx-auto">
          "The best time to wait is when you <strong className="text-white">REALLY don't want to</strong>. That's exactly when it matters most."
        </p>
      </div>

    </div>
  );
};

export default DelayedGratification;
