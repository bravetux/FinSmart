"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, LineChart } from 'lucide-react';

const Index = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-slate-900">Welcome to FinSmart</h1>
      <p className="text-lg text-slate-600">Navigate your financial journey:</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-primary">
              <LineChart className="w-6 h-6" />
              Build Wealth Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">Explore milestones, mindset, and strategies for long-term wealth creation.</p>
            <Link to="/build-wealth" className="text-blue-600 hover:underline font-medium">
              Go to Wealth Path →
            </Link>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-emerald-600">
              <Home className="w-6 h-6" />
              Dashboard (Placeholder)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 mb-4">A placeholder for your main financial dashboard.</p>
            <Link to="/" className="text-gray-500 font-medium cursor-not-allowed">
              (Current Page)
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;