"use client";

import React from 'react';
import { Brain, Timer, Compass, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mindsetPoints = [
  {
    title: "Delayed Gratification",
    desc: "The ability to resist a small reward now for a much larger one later is the #1 predictor of financial success.",
    icon: <Timer className="w-5 h-5 text-amber-600" />,
    color: "bg-amber-50"
  },
  {
    title: "Long-term Thinking",
    desc: "Wealth is built over decades, not days. Train your mind to ignore short-term noise and focus on compounding.",
    icon: <Compass className="w-5 h-5 text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    title: "Continuous Learning",
    desc: "Your greatest asset is your knowledge. Stay curious about how money works and how the world changes.",
    icon: <Lightbulb className="w-5 h-5 text-emerald-600" />,
    color: "bg-emerald-50"
  },
  {
    title: "Discipline over Emotion",
    desc: "Don't let fear or greed drive your decisions. Stick to your plan even when the market feels chaotic.",
    icon: <Brain className="w-5 h-5 text-purple-600" />,
    color: "bg-purple-50"
  }
];

const Mindset = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
          <Brain className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">How to Prepare Your Mind</h2>
      </div>
      <p className="text-lg text-slate-600">
        Before you invest your money, invest in your mindset. These psychological principles are the bedrock of lasting wealth.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {mindsetPoints.map((point, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className={`${point.color} p-2.5 rounded-lg shrink-0`}>
                {point.icon}
              </div>
              <CardTitle className="text-base">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 leading-relaxed">{point.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Mindset;