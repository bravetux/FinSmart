"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LineChart, Home } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 text-center">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full space-y-6">
        <div className="flex justify-center mb-4">
          <div className="bg-primary p-3 rounded-full text-primary-foreground">
            <LineChart className="w-8 h-8" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-slate-900">Welcome to FinSmart</h1>
        <p className="text-lg text-slate-600">
          Your personal guide to financial freedom and strategic wealth building.
        </p>
        <p className="text-sm text-slate-500 mt-[-10px] mb-4">
          By Bravetux
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link to="/build-wealth" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Start Building Wealth
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;