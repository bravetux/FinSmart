"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Lock, 
  ShieldAlert, 
  Key, 
  UserX,
  Smartphone,
  Zap,
  CheckCircle2,
  XCircle,
  EyeOff
} from 'lucide-react';

const SafetySection = () => {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Protect Your Treasure</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Money Safety Shield
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Digital treasure needs digital armor. Learn how to spot online pirates and keep your account safe from harm!
          </p>
        </div>
        <div className="absolute bottom-4 right-8 opacity-10 hidden md:block">
          <Lock size={200} />
        </div>
      </div>

      {/* The Secret Keys */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Key className="text-amber-500" /> Your Secret Keys
          </h3>
          <p className="text-slate-600 text-sm">Treat these like your most private diary. Never share them with ANYONE.</p>
          <div className="space-y-3">
            {[
              { title: "PIN (Personal ID Number)", desc: "The 4 or 6 digit code for your card or phone.", icon: <Smartphone /> },
              { title: "Passwords", desc: "The secret words used to log into your bank app.", icon: <Lock /> },
              { title: "OTP (One Time Password)", desc: "The temporary code that comes in a text message.", icon: <Zap /> }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center gap-4">
                <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="bg-amber-50 border-amber-100 shadow-sm flex flex-col justify-center p-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
            <ShieldAlert className="w-10 h-10 text-amber-600" />
          </div>
          <h4 className="text-xl font-bold text-amber-900 mb-2">The "Free Robux" Trap</h4>
          <p className="text-sm text-amber-800 leading-relaxed">
            Online pirates often offer "Free Games," "Free Coins," or "Free Rewards." They might ask for your parent's phone number or an OTP to "verify" you. 
            <strong>STOP!</strong> This is a trick to take money from your account.
          </p>
        </Card>
      </section>

      {/* Safety Rules Table */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100 space-y-6">
          <h4 className="text-xl font-bold text-emerald-900 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-emerald-500" /> The Safety "Dos"
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-emerald-800 font-medium">
              <EyeOff className="w-5 h-5 shrink-0" />
              Cover the keypad with your hand when typing your PIN at an ATM.
            </li>
            <li className="flex gap-3 text-sm text-emerald-800 font-medium">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              Tell your parents immediately if you get a strange text with a code.
            </li>
            <li className="flex gap-3 text-sm text-emerald-800 font-medium">
              <Smartphone className="w-5 h-5 shrink-0" />
              Always log out of banking or payment apps when you're done.
            </li>
          </ul>
        </div>

        <div className="bg-rose-50 p-6 rounded-[2rem] border border-rose-100 space-y-6">
          <h4 className="text-xl font-bold text-rose-900 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-rose-500" /> The Safety "Donts"
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-rose-800 font-medium">
              <UserX className="w-5 h-5 shrink-0" />
              Never share your OTP with a stranger, even if they sound very nice.
            </li>
            <li className="flex gap-3 text-sm text-rose-800 font-medium">
              <Smartphone className="w-5 h-5 shrink-0" />
              Don't use public Wi-Fi (like at a park or cafe) to pay for things.
            </li>
            <li className="flex gap-3 text-sm text-rose-800 font-medium">
              <Lock className="w-5 h-5 shrink-0" />
              Don't write your passwords in your school notebooks.
            </li>
          </ul>
        </div>
      </div>

      {/* Golden Rule */}
      <div className="text-center p-10 bg-blue-600 text-white rounded-[2.5rem] shadow-xl">
        <h3 className="text-2xl font-bold mb-4">The Golden Rule of Digital Money</h3>
        <p className="text-blue-100 text-lg italic max-w-2xl mx-auto">
          "The Bank will NEVER call you and ask for your PIN or OTP. If someone asks for it, they are a pirate!"
        </p>
      </div>
    </div>
  );
};

export default SafetySection;