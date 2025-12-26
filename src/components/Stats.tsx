"use client";

import React from 'react';
import { AlertCircle, TrendingDown, Users, PiggyBank } from 'lucide-react';

const stats = [
  {
    icon: <AlertCircle className="w-6 h-6 text-red-500" />,
    value: "2/3",
    label: "Lack basic financial knowledge",
    description: "Most adults struggle with basic concepts like interest rates and inflation."
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-orange-500" />,
    value: "$435B",
    label: "Annual cost of financial illiteracy",
    description: "Lost in the US alone due to poor financial decisions and high-interest debt."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    value: "78%",
    label: "Live paycheck to paycheck",
    description: "A lack of emergency savings leaves millions vulnerable to unexpected costs."
  }
];

const Stats = () => {
  return (
    <section id="why" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Cost of Staying Uninformed</h2>
          <p className="text-lg text-slate-600">
            Financial education isn't just about making money—it's about protecting your future and achieving freedom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-slate-800 mb-3">{stat.label}</div>
              <p className="text-slate-600 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-600 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <PiggyBank className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Bridge the gap with FinSmart</h3>
              <p className="text-blue-100">Our interactive lessons turn complex finance into simple daily habits.</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;