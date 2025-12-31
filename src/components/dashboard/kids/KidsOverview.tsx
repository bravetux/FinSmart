"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PiggyBank, 
  Gamepad2, 
  Rocket, 
  Star, 
  Heart,
  Gift,
  Coins
} from 'lucide-react';

const KidsOverview = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <Star className="w-4 h-4 fill-current" />
            <span>Money is Fun!</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Learn How Money Works!
          </h2>
          <p className="text-pink-100 text-lg max-w-xl">
            Financial literacy isn't just for grown-ups. Start your journey today and learn how to save, share, and grow your treasure!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-8 opacity-20 hidden md:block">
          <Rocket size={200} />
        </div>
      </div>

      {/* The Three Pillars */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-none shadow-md bg-white hover:scale-105 transition-transform cursor-pointer overflow-hidden group">
          <div className="h-2 bg-blue-400" />
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <PiggyBank className="w-8 h-8" />
            </div>
            <CardTitle className="text-xl">Save</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-slate-500 text-sm">
            Learn how to put money aside for the things you really want.
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white hover:scale-105 transition-transform cursor-pointer overflow-hidden group">
          <div className="h-2 bg-green-400" />
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center mx-auto mb-2 group-hover:bg-green-500 group-hover:text-white transition-colors">
              <Heart className="w-8 h-8" />
            </div>
            <CardTitle className="text-xl">Share</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-slate-500 text-sm">
            Discover the joy of helping others with your small treasures.
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-white hover:scale-105 transition-transform cursor-pointer overflow-hidden group">
          <div className="h-2 bg-purple-400" />
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center mx-auto mb-2 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <CardTitle className="text-xl">Spend</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-slate-500 text-sm">
            Make smart choices when buying toys, treats, and games.
          </CardContent>
        </Card>
      </div>

      {/* Fun Facts */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Coins className="text-amber-500" /> Fun Money Facts
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="p-3 bg-amber-50 rounded-xl text-amber-500 shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold">Did you know?</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                The first paper money was made in China over 1,000 years ago!
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-500 shrink-0">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold">Amazing Growth</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                If you save just one coin every day, you'll have 365 coins in a year!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsOverview;