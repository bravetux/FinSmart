"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  ShieldCheck, 
  AlertTriangle, 
  ThumbsUp, 
  ThumbsDown,
  Scale
} from 'lucide-react';

const CreditReputation = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Scale className="w-4 h-4" />
            <span>The Trust Score</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Credit Reputation: Your Trust Score
          </h2>
          <p className="text-indigo-50 text-lg max-w-xl">
            A credit score is like a report card for how well you handle borrowed money. It tells banks if they can trust you!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Library Analogy */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <BookOpen className="text-amber-500" /> The Library Book Analogy
        </h3>
        <Card className="border-2 border-amber-100 bg-amber-50/50 p-8 rounded-[2.5rem]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-amber-900">How Trust is Built</h4>
              <p className="text-amber-800 leading-relaxed">
                If you borrow a library book and return it on time, the librarian gives you a good "trust score." Next time, they might let you borrow the biggest, most expensive book!
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-amber-200">
                <ThumbsUp className="w-6 h-6 text-emerald-500 shrink-0" />
                <p className="text-sm text-slate-700">Good Score: You get the best loans (big books).</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-amber-200">
                <ThumbsDown className="w-6 h-6 text-red-500 shrink-0" />
                <p className="text-sm text-slate-700">Bad Score: Banks might say no, or charge you extra (late fees).</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Why it matters */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <ShieldCheck className="text-emerald-500" /> Why a Good Score is Important
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">Lower Interest</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              Banks give people with high scores a lower "rent" (interest) on loans because they trust them to pay back.
            </p>
          </Card>
          <Card className="border-none shadow-md bg-white p-6">
            <CardTitle className="text-lg mb-2">Easier Approvals</CardTitle>
            <p className="text-sm text-slate-600 leading-relaxed">
              It's easier to get a home loan or a car loan when you have a history of being responsible with money.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CreditReputation;