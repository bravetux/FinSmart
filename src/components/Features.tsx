"use client";

import React from 'react';
import { BookOpen, Target, BarChart3, Smartphone } from 'lucide-react';

const features = [
  {
    title: "Bite-sized Lessons",
    description: "Learn complex topics like compound interest and stock markets in just 5 minutes a day.",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: "Goal Tracking",
    description: "Set personal financial milestones and watch your progress with our intuitive dashboard.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Real Market Simulators",
    description: "Practice investing with virtual currency before committing your hard-earned savings.",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: "Mobile First Experience",
    description: "Education that fits your lifestyle. Learn on the bus, in line, or during your coffee break.",
    icon: <Smartphone className="w-6 h-6" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need to master your money</h2>
              <p className="text-lg text-slate-600">
                We've combined behavioral science with financial expertise to create a learning experience that actually sticks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 w-full h-6 bg-slate-800 rounded-b-xl z-20" />
              <div className="p-6 pt-12 space-y-6">
                <div className="h-4 w-24 bg-slate-700 rounded-full" />
                <div className="space-y-2">
                  <div className="h-32 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xs p-4 text-center">
                    Level 1: The Foundations of Saving
                  </div>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-12 bg-slate-800/50 rounded-xl flex items-center gap-3 px-4">
                      <div className="w-6 h-6 rounded-full bg-slate-700" />
                      <div className="h-3 w-32 bg-slate-700 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -z-10 w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-50 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;