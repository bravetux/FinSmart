"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        
        {/* Simple CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white space-y-8 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">Ready to take control?</h2>
                <p className="text-slate-400 text-lg max-w-xl mx-auto">
                  Join 50,000+ others who are building their financial future today. Free to start, forever valuable.
                </p>
                <div className="pt-4">
                  <button 
                    className="px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all transform hover:scale-105 active:scale-95"
                    onClick={() => navigate('/dashboard')}
                  >
                    Start Your Journey
                  </button>
                </div>
              </div>
              {/* Decorative Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-[120px] pointer-events-none" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;