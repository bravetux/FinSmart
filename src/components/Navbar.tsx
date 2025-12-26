"use client";

import React from 'react';
import { Wallet } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Wallet className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl tracking-tight">FinSmart</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#why" className="hover:text-primary transition-colors">Why FinSmart</a>
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;