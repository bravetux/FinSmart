"use client";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, Info, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <div className="bg-primary p-1.5 rounded-lg">
            <Wallet className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl tracking-tight">FinSmart</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#why" className="hover:text-primary transition-colors">Why FinSmart</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#curriculum" className="hover:text-primary transition-colors">Curriculum</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2 hidden md:flex"
            onClick={() => navigate('/about')}
          >
            <Info className="w-4 h-4" />
            About
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 hidden sm:flex border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
            onClick={() => navigate('/build-wealth')}
          >
            <TrendingUp className="w-4 h-4" />
            Build Wealth
          </Button>
          <Button size="sm" onClick={() => navigate('/dashboard')}>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;