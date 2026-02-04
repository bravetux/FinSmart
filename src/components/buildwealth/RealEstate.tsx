"use client";

import React from 'react';
import { 
  Home, 
  Clock, 
  Lock, 
  TrendingUp, 
  Map, 
  Banknote, 
  Percent, 
  Building, 
  CreditCard, 
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  LineChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StrategyItemProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const StrategyItem: React.FC<StrategyItemProps> = ({ title, desc, icon, color }) => (
  <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-2">
    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color} text-white`}>
      {icon}
    </div>
    <h4 className="text-sm font-bold text-slate-900">{title}</h4>
    <p className="text-xs text-slate-600">{desc}</p>
  </div>
);

const RealEstate = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-600 to-teal-700 p-8 md:p-12 text-white shadow-2xl">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
            <Home className="w-4 h-4" />
            Real Estate Investment
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            How the Rich Build Real Estate Wealth in India
          </h1>
          <p className="text-teal-50 text-lg max-w-3xl">
            Key Insights from Ashwinder R. Singh: A guide to strategic property investment, focusing on long-term compounding and smart leverage.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* 1. The Mindset of Wealthy Real Estate Investors */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
            <Clock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">1. The Mindset of Wealthy Real Estate Investors</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-purple-200 bg-purple-50/50 shadow-md">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3 text-purple-700">
                <Clock className="w-5 h-5" />
                <h3 className="text-lg font-bold">Think in Decades, Not Years</h3>
              </div>
              <p className="text-sm text-slate-700">
                Wealthy investors treat real estate as a 30–50 year game. Property value compounds roughly 30 times over 30 years. Real estate rewards patience and long holding periods.
              </p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50/50 shadow-md">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3 text-blue-700">
                <Lock className="w-5 h-5" />
                <h3 className="text-lg font-bold">Illiquidity Is an Advantage</h3>
              </div>
              <p className="text-sm text-slate-700">
                Its illiquid nature prevents impulsive exits when prices rise marginally, protecting investors from emotional decisions and allowing long-term compounding to work uninterrupted.
              </p>
            </CardContent>
          </Card>
          <Card className="border-emerald-200 bg-emerald-50/50 shadow-md">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3 text-emerald-700">
                <Home className="w-5 h-5" />
                <h3 className="text-lg font-bold">Behavioral Asset</h3>
              </div>
              <p className="text-sm text-slate-700">
                Property ownership signals success and status in a way financial assets do not. This emotional attachment often strengthens holding discipline.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. Market Trends and Growth Drivers */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-700">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">2. Market Trends and Growth Drivers</h2>
        </div>

        <Card className="border-orange-200 bg-orange-50/50 shadow-lg">
          <CardContent className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-orange-900 flex items-center gap-2">
                  <Map className="w-5 h-5" /> Infrastructure Drives Appreciation
                </h3>
                <p className="text-sm text-slate-700">
                  Government investment in infrastructure—roads, bridges, airports, and metro connectivity—has a direct and powerful impact on real estate prices. Areas that gain strong connectivity often see sharp re-rating in property values over time.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-orange-900 flex items-center gap-2">
                  <Building className="w-5 h-5" /> The Rise of Tier-2 Cities
                </h3>
                <p className="text-sm text-slate-700">
                  With Global Capability Centers (GCCs) expanding beyond metros, Tier-2 cities are emerging as the next growth hubs due to lower land costs and rising white-collar employment.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-orange-200">
              <h4 className="text-md font-bold text-orange-900 mb-3">Key Tier-2 Growth Hubs</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-xs font-bold text-red-700">North India</p>
                  <p className="text-sm text-slate-700">Lucknow, Indore, Jaipur</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs font-bold text-blue-700">South India</p>
                  <p className="text-sm text-slate-700">Mysore, Kochi, Mangalore, Visakhapatnam</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs font-bold text-green-700">West India</p>
                  <p className="text-sm text-slate-700">Pune belts, Nagpur, Nashik</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 3. Buying Your First Home & Affordability */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
            <Banknote className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">3. Buying Your First Home & Affordability</h2>
        </div>

        <Card className="border-blue-200 bg-blue-50/50 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-xl border border-blue-200 text-center space-y-2">
                <Percent className="w-6 h-6 text-blue-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">The 50% Rule for Debt</h4>
                <p className="text-2xl font-bold text-blue-700">50%</p>
                <p className="text-xs text-slate-600">Total EMIs (Home, Car, CC) should not exceed 50% of monthly income.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-blue-200 text-center space-y-2">
                <Home className="w-6 h-6 text-blue-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">Home Loan Comfort Zone</h4>
                <p className="text-2xl font-bold text-blue-700">~30%</p>
                <p className="text-xs text-slate-600">Ideally, the home loan EMI alone should be capped at around 30% of income.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-blue-200 text-center space-y-2">
                <Map className="w-6 h-6 text-blue-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">Start Where You Can Afford</h4>
                <p className="text-2xl font-bold text-blue-700">Tier-2</p>
                <p className="text-xs text-slate-600">If metros are too expensive, start compounding early by buying in your hometown or a Tier-2 city.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. Advanced Investment Strategies */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">4. Advanced Investment Strategies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <StrategyItem
            title="Integrated Townships Outperform"
            desc="Properties within integrated townships (live, work, amenities) appreciate more due to superior livability and sustained demand."
            icon={<Building className="w-4 h-4" />}
            color="bg-purple-600"
          />
          <StrategyItem
            title="Lease Rental Discounting (LRD)"
            desc="HNI strategy: Use predictable rental income from commercial property as cash flow to finance the next property purchase, scaling the portfolio."
            icon={<DollarSign className="w-4 h-4" />}
            color="bg-indigo-600"
          />
          <StrategyItem
            title="REITs (Real Estate Investment Trusts)"
            desc="Offers exposure to commercial real estate (rental yield + appreciation) for investors with lower capital."
            icon={<LineChart className="w-4 h-4" />}
            color="bg-teal-600"
          />
          <StrategyItem
            title="Fractional Ownership"
            desc="Reduces entry barriers by allowing participation in high-value real estate assets with very small ticket sizes."
            icon={<CreditCard className="w-4 h-4" />}
            color="bg-amber-600"
          />
        </div>
      </section>

      {/* 5. Common Mistakes & Smarter Negotiation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-700">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">5. Common Mistakes & Smarter Negotiation</h2>
        </div>

        <Card className="border-red-200 bg-red-50/50 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-red-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" /> The Overconfidence Trap
                </h3>
                <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                  <li>Many buyers overestimate their understanding of real estate.</li>
                  <li>Neglecting proper due diligence on legal clarity, project design, location quality, and developer credibility leads to costly mistakes.</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Negotiate Beyond Price
                </h3>
                <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
                  <li>Negotiate flexible payment plans to match future income growth.</li>
                  <li>Secure value-added upgrades (better interiors, kitchens, fittings) instead of just headline discounts.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom Line CTA */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-green-600 to-teal-600 rounded-[2.5rem] text-white space-y-4 shadow-2xl">
        <h4 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <Home className="w-8 h-8" />
          Bottom Line: Patience & Strategy
        </h4>
        <p className="text-lg text-teal-100 leading-relaxed">
          Real estate wealth in India is built through patience, discipline, and strategic selection—not quick flips. The rich don’t just buy property; they design systems that let real estate compound quietly over decades.
        </p>
      </div>
    </div>
  );
};

export default RealEstate;