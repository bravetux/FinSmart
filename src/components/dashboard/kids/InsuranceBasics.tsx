"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Umbrella,
  Heart,
  Car,
  Users,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  IndianRupee,
  Scale
} from 'lucide-react';

const InsuranceBasics = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">

      {/* Hero Header */}
      <div className="bg-sky-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Umbrella className="w-4 h-4" />
            <span>Your Financial Umbrella</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Insurance: Your Financial Umbrella ☂️
          </h2>
          <p className="text-sky-100 text-lg max-w-xl">
            Do you carry an umbrella because you <strong>KNOW</strong> it will rain? No! You carry it because it <strong>MIGHT</strong> rain. Insurance works the same way.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-8 opacity-10 hidden md:block">
          <Umbrella size={180} />
        </div>
      </div>

      {/* The Umbrella Analogy */}
      <section className="bg-sky-50 border border-sky-100 p-8 rounded-[2rem] space-y-4">
        <h3 className="text-2xl font-bold flex items-center gap-2 text-sky-800">
          <Umbrella className="text-sky-500" /> The Umbrella Idea
        </h3>
        <p className="text-slate-700 text-sm leading-relaxed">
          Insurance is protection you buy <strong>BEFORE</strong> something bad happens. You hope you never need it. But if something goes wrong, it saves you from losing all your money!
        </p>
        <p className="text-slate-700 text-sm leading-relaxed">
          You pay a small amount every month (or year). In return, the insurance company promises to help you pay if something big and expensive happens.
        </p>
      </section>

      {/* The Class Fund Story */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <Users className="text-violet-500" /> The Class Safety Fund Story
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { step: "1", text: "100 students each put ₹10 into a Class Safety Fund every month.", color: "bg-violet-50 border-violet-100 text-violet-800" },
              { step: "2", text: "One day, a student's lunchbox falls and breaks. It costs ₹1,000 to replace.", color: "bg-rose-50 border-rose-100 text-rose-800" },
              { step: "3", text: "The Class Safety Fund pays ₹1,000 to help that student.", color: "bg-emerald-50 border-emerald-100 text-emerald-800" },
            ].map((item) => (
              <div key={item.step} className={`p-4 rounded-2xl border ${item.color} flex items-start gap-3`}>
                <span className="text-2xl font-black opacity-30">{item.step}</span>
                <p className="text-sm font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Card className="bg-violet-600 text-white border-none shadow-lg flex flex-col justify-center p-8">
            <div className="text-5xl mb-4">💡</div>
            <h4 className="text-xl font-bold mb-3">The Big Idea!</h4>
            <p className="text-violet-100 text-sm leading-relaxed">
              Each student only gave <strong>₹10</strong>, but the unlucky student got <strong>₹1,000</strong> worth of help. That is <strong>100x more</strong> than they put in!
            </p>
            <p className="text-violet-200 text-sm mt-3 font-medium">
              THAT is how insurance works. Many people share the risk together.
            </p>
          </Card>
        </div>
      </section>

      {/* Three Types of Insurance */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <ShieldCheck className="text-emerald-500" /> Three Types of Insurance
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-rose-50 rounded-2xl border border-rose-100 space-y-3">
            <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-rose-500" />
            </div>
            <h4 className="font-bold text-rose-800">Health Insurance</h4>
            <p className="text-xs text-rose-700 leading-relaxed">
              When you get sick or hurt, hospital bills can be <strong>HUGE</strong>. Health insurance pays most of it. Your family pays a small amount every year (called a <strong>"premium"</strong>) so there's never a surprise giant hospital bill.
            </p>
          </div>
          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 space-y-3">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-amber-500" />
            </div>
            <h4 className="font-bold text-amber-800">Life Insurance</h4>
            <p className="text-xs text-amber-700 leading-relaxed">
              If something happens to your parents (the earning members), life insurance gives the family money to survive. It's like a <strong>safety net for your whole family</strong>. It makes sure everyone is okay no matter what.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Car className="w-6 h-6 text-blue-500" />
            </div>
            <h4 className="font-bold text-blue-800">Vehicle Insurance</h4>
            <p className="text-xs text-blue-700 leading-relaxed">
              If your family's car gets damaged in an accident, vehicle insurance pays to fix it. It is <strong>required by law in India!</strong> So every car on the road must have it.
            </p>
          </div>
        </div>
      </section>

      {/* Golden Rule */}
      <div className="p-8 bg-emerald-600 text-white rounded-[2rem] shadow-xl">
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-8 h-8 shrink-0 text-emerald-200 mt-1" />
          <div>
            <h4 className="text-xl font-bold mb-2">The Golden Rule of Insurance</h4>
            <p className="text-emerald-100 text-sm leading-relaxed italic">
              "Insurance is NOT for making money. It is for <strong className="text-white">PROTECTING</strong> the money and things you already have."
            </p>
          </div>
        </div>
      </div>

      {/* The Rule of Fairness */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-7 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Scale className="text-slate-500" /> The Rule of Fairness
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Why can't you buy insurance only when you are already sick or hurt?
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Think about it — if everyone waited until they needed it, the insurance company would run out of money immediately! That's why everyone pays <strong>even when they are healthy</strong>. It keeps the system fair for everyone.
          </p>
        </div>

        {/* Cost Comparison */}
        <div className="p-7 bg-white rounded-[2rem] border border-slate-100 shadow-sm space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <IndianRupee className="text-amber-500" /> How Much Does It Cost?
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <p className="text-xs font-bold text-emerald-800">Health Insurance (Family of 4)</p>
              <p className="text-sm text-emerald-700 mt-1">About <strong>₹500–800 per month</strong> — less than a movie outing!</p>
            </div>
            <div className="p-3 bg-rose-50 rounded-xl border border-rose-100 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-rose-800">Cost of NOT having it:</p>
                <p className="text-sm text-rose-700 mt-1">One hospital stay can cost <strong>₹50,000 – ₹5,00,000!</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <CheckCircle2 className="text-sky-500" /> Premium Paid vs. What You Are Protected Against
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sky-600 text-white">
                <th className="text-left p-4 font-bold">Type</th>
                <th className="text-left p-4 font-bold">You Pay (Premium)</th>
                <th className="text-left p-4 font-bold">You Are Protected Against</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Health Insurance", premium: "~₹600/month", protection: "Hospital bills up to ₹5,00,000+" },
                { type: "Life Insurance", premium: "~₹1,000/month", protection: "Family gets ₹50,00,000+ if needed" },
                { type: "Vehicle Insurance", premium: "~₹300/month", protection: "Car repair or accident costs up to ₹3,00,000" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="p-4 font-medium">{row.type}</td>
                  <td className="p-4 text-rose-600 font-bold">{row.premium}</td>
                  <td className="p-4 text-emerald-600 font-bold">{row.protection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 text-center">* These are approximate numbers for learning. Actual amounts vary.</p>
      </section>

    </div>
  );
};

export default InsuranceBasics;
