"use client";

import React from 'react';
import { Wallet, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Wallet className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg tracking-tight">FinSmart</span>
            </div>
            <p className="text-slate-500 text-sm">
              Empowering the next generation to take control of their financial destiny through accessible, engaging education.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
              <Github className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-700 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-primary cursor-pointer">All Courses</li>
              <li className="hover:text-primary cursor-pointer">Pricing</li>
              <li className="hover:text-primary cursor-pointer">Mobile App</li>
              <li className="hover:text-primary cursor-pointer">Enterprise</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-primary cursor-pointer">About Us</li>
              <li className="hover:text-primary cursor-pointer">Careers</li>
              <li className="hover:text-primary cursor-pointer">Blog</li>
              <li className="hover:text-primary cursor-pointer">Press Kit</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-primary cursor-pointer">Help Center</li>
              <li className="hover:text-primary cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer">Terms of Service</li>
              <li className="hover:text-primary cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} FinSmart Education Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;