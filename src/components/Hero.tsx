"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShieldCheck, GraduationCap } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToCurriculum = () => {
    const element = document.getElementById('curriculum');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
              <GraduationCap className="w-4 h-4" />
              <span>Master your money mindset</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Finance Education <br />
              <span className="text-blue-600">Built for Everyone</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Only 33% of adults worldwide are financially literate. We're here to change that. 
              Learn how to manage, invest, and grow your wealth with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button size="lg" className="px-8 text-md gap-2" onClick={() => navigate('/dashboard')}>
                Start Learning Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 text-md gap-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800" 
                onClick={() => navigate('/dashboard')}
              >
                <TrendingUp className="w-4 h-4" /> Build Wealth
              </Button>
              <Button size="lg" variant="ghost" className="px-8 text-md" onClick={scrollToCurriculum}>
                View Curriculum
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">50k+</span>
                <span className="text-sm text-slate-500">Active Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">4.9/5</span>
                <span className="text-sm text-slate-500">App Rating</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Portfolio Growth</span>
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="h-48 bg-slate-50 rounded-lg flex items-end justify-between p-4 gap-2">
                  <div className="w-full bg-blue-100 h-1/4 rounded-t-sm"></div>
                  <div className="w-full bg-blue-200 h-2/5 rounded-t-sm"></div>
                  <div className="w-full bg-blue-300 h-3/5 rounded-t-sm"></div>
                  <div className="w-full bg-blue-400 h-4/5 rounded-t-sm"></div>
                  <div className="w-full bg-blue-600 h-full rounded-t-sm"></div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-800">Your future is secured with knowledge</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;