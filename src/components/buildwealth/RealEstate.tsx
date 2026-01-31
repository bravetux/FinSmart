"use client";

import React from 'react';
import { Home, TrendingUp, Zap, Shield, Users, DollarSign, LandPlot, Clock, Scale, Building, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface InsightCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: string;
}

const InsightCard = ({ title, icon, children, color }: InsightCardProps) => (
  <Card className={`border-${color}-200 bg-${color}-50/50 shadow-md`}>
    <CardHeader className="pb-3">
      <div className="flex items-center gap-3">
        <div className={`bg-${color}-100 text-${color}-700 p-2 rounded-lg`}>
          {icon}
        </div>
        <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="text-sm text-slate-700 space-y-3">
      {children}
    </CardContent>
  </Card>
);

const RealEstate = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-700 to-teal-800 p-8 md:p-12 text-white shadow-2xl">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
            <Home className="w-4 h-4" />
            Real Estate Investment
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">How the Rich Build Real Estate Wealth in India</h1>
          <p className="text-lg text-teal-100 max-w-3xl">
            Key Insights from Ashwinder R. Singh on leveraging patience, infrastructure, and strategic financing to build multi-generational wealth through property.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Section 1: The Mindset of Wealthy Real Estate Investors */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">1. The Mindset of Wealthy Real Estate Investors</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <InsightCard title="Think in Decades, Not Years" icon={<Clock className="w-5 h-5" />} color="blue">
            <p>Wealthy investors treat real estate as a 30–50 year game. A common benchmark is property value compounding roughly 30 times over 30 years. Unlike equities, which can deliver outcomes in shorter cycles, real estate rewards patience and long holding periods.</p>
          </InsightCard>
          <InsightCard title="Illiquidity Is an Advantage" icon={<Shield className="w-5 h-5" />} color="purple">
            <p>One of the biggest reasons real estate creates wealth is its illiquid nature. You cannot exit impulsively when prices rise marginally, which protects investors from emotional decisions and allows long-term compounding to work uninterrupted.</p>
          </InsightCard>
          <InsightCard title="Real Estate as a Behavioral Asset" icon={<Users className="w-5 h-5" />} color="emerald">
            <p>Property ownership also plays a psychological and social role. Owning a high-value property visibly signals success and status in a way that financial assets like mutual funds or stocks do not. This emotional attachment often strengthens holding discipline.</p>
          </InsightCard>
        </div>
      </section>

      <Separator />

      {/* Section 2: Market Trends and Growth Drivers */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">2. Market Trends and Growth Drivers</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <InsightCard title="Infrastructure Drives Appreciation" icon={<LandPlot className="w-5 h-5" />} color="orange">
            <p>Government investment in infrastructure—roads, bridges, airports, and metro connectivity—has a direct and powerful impact on real estate prices. Areas that gain strong connectivity often see sharp re-rating in property values over time.</p>
          </InsightCard>
          <InsightCard title="The Rise of Tier-2 Cities" icon={<Zap className="w-5 h-5" />} color="red">
            <p>With Global Capability Centers (GCCs) expanding beyond metros, Tier-2 cities are emerging as the next growth hubs.</p>
            <ul className="list-disc list-inside text-xs mt-2 space-y-1">
              <li>North India: Lucknow, Indore, Jaipur</li>
              <li>South India: Mysore, Kochi, Mangalore, Visakhapatnam</li>
              <li>West India: Emerging belts around Pune, including cities like Nagpur and Nashik</li>
            </ul>
            <p className="text-xs italic mt-2">These cities benefit from lower land costs, improving infrastructure, and rising white-collar employment.</p>
          </InsightCard>
        </div>
      </section>

      <Separator />

      {/* Section 3: Buying Your First Home & Affordability */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-700">
            <DollarSign className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">3. Buying Your First Home & Affordability</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <InsightCard title="The 50% Rule for Debt" icon={<Wallet className="w-5 h-5" />} color="pink">
            <p>Total EMIs—including home loans, car loans, and credit cards—should not exceed 50% of your monthly income. This ensures financial flexibility and resilience.</p>
          </InsightCard>
          <InsightCard title="Home Loan Comfort Zone" icon={<Home className="w-5 h-5" />} color="indigo">
            <p>Ideally, the home loan EMI alone should be capped at around 30% of income to avoid lifestyle stress and over-leverage.</p>
          </InsightCard>
          <InsightCard title="Start Where You Can Afford" icon={<Users className="w-5 h-5" />} color="teal">
            <p>If buying a home in an expensive metro is not feasible, it is better to start by purchasing property in your hometown or a Tier-2 city. A reasonably priced asset can still help you enter the real estate compounding cycle early.</p>
          </InsightCard>
        </div>
      </section>

      <Separator />

      {/* Section 4: Advanced Investment Strategies */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700">
            <Zap className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">4. Advanced Investment Strategies</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <InsightCard title="Integrated Townships Outperform" icon={<Building className="w-5 h-5" />} color="cyan">
            <p>Properties located within integrated townships—where residents can live, work, and access amenities within the same ecosystem—tend to appreciate meaningfully more than standalone developments due to superior livability and demand.</p>
          </InsightCard>
          <InsightCard title="Lease Rental Discounting (LRD)" icon={<DollarSign className="w-5 h-5" />} color="green">
            <p>High-net-worth investors often use LRD to scale portfolios. A commercial property with a strong tenant generates predictable rental income, which banks accept as cash flow for financing the next property. This allows portfolio expansion without relying solely on fresh capital.</p>
          </InsightCard>
          <InsightCard title="REITs and Fractional Ownership" icon={<TrendingUp className="w-5 h-5" />} color="yellow">
            <p>For investors with lower capital, REITs offer exposure to commercial real estate with a combination of rental yield and appreciation. Fractional ownership platforms further reduce entry barriers by allowing participation in real estate assets with very small ticket sizes.</p>
          </InsightCard>
        </div>
      </section>

      <Separator />

      {/* Section 5: Common Mistakes & Smarter Negotiation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-700">
            <Shield className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">5. Common Mistakes & Smarter Negotiation</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <InsightCard title="The Overconfidence Trap" icon={<Scale className="w-5 h-5" />} color="red">
            <p>Many buyers overestimate their understanding of real estate and neglect proper due diligence. Legal clarity, project design, location quality, and developer credibility are often under-analysed, leading to costly mistakes.</p>
          </InsightCard>
          <InsightCard title="Negotiate Beyond Price" icon={<DollarSign className="w-5 h-5" />} color="orange">
            <p>Smart negotiation goes beyond headline discounts. Buyers can negotiate flexible payment plans, defer payments to match future income growth, or secure value-added upgrades such as better interiors, kitchens, or fittings.</p>
          </InsightCard>
        </div>
      </section>

      {/* Bottom Line CTA */}
      <div className="p-8 md:p-10 bg-gradient-to-br from-green-600 to-teal-700 rounded-[2.5rem] text-white space-y-4 shadow-2xl">
        <h4 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
          <Home className="w-8 h-8" />
          Bottom Line: Patience is the Real Asset
        </h4>
        <p className="text-lg text-teal-100 leading-relaxed">
          Real estate wealth in India is built through patience, discipline, and strategic selection—not quick flips. Infrastructure-led growth, long holding periods, and structured financing separate serious wealth creators from casual buyers. The rich don’t just buy property; they design systems that let real estate compound quietly over decades.
        </p>
      </div>
    </div>
  );
};

export default RealEstate;