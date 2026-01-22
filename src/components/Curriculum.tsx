"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Baby, 
  BarChart3, 
  Gem, 
  Building2, 
  ScrollText, 
  LineChart, 
  PieChart,
  ArrowRight,
  CheckCircle2,
  Wallet,
  TrendingUp,
  Shield,
  CreditCard
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const modules = [
  {
    title: "Kids Foundations",
    icon: <Baby className="w-6 h-6 text-pink-500" />,
    color: "bg-pink-50",
    topics: ["Magic of Money", "Piggy Bank Power", "Smart Spending", "The Bank Store", "Safety Shield"],
    route: "/dashboard?section=kids"
  },
  {
    title: "Income Management",
    icon: <Wallet className="w-6 h-6 text-green-500" />,
    color: "bg-green-50",
    topics: ["Salary Breakdown", "Tax Planning", "Emergency Fund", "Budgeting Strategies"],
    route: "/dashboard?section=income"
  },
  {
    title: "Insurance",
    icon: <Shield className="w-6 h-6 text-red-500" />,
    color: "bg-red-50",
    topics: ["Health Insurance", "Term Insurance", "Vehicle Insurance", "Business Insurance"],
    route: "/dashboard?section=insurance"
  },
  {
    title: "Loans & Debt",
    icon: <CreditCard className="w-6 h-6 text-slate-500" />,
    color: "bg-slate-50",
    topics: ["Home Loans", "Personal Loans", "Credit Cards", "Debt Management"],
    route: "/dashboard?section=loans"
  },
  {
    title: "Mutual Funds",
    icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-50",
    topics: ["Equity & Debt Types", "SIP vs Lumpsum", "SWP & STP Strategies", "Taxation Rules"],
    route: "/dashboard?section=mf"
  },
  {
    title: "Equity Markets",
    icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
    color: "bg-indigo-50",
    topics: ["Stock Basics", "Valuation Methods", "Trading Strategies", "Risk Management"],
    route: "/dashboard?section=equity"
  },
  {
    title: "Fixed Income",
    icon: <ScrollText className="w-6 h-6 text-orange-500" />,
    color: "bg-orange-50",
    topics: ["Corporate Bonds", "Credit Ratings", "Secondary Markets", "Risk Assessment"],
    route: "/dashboard?section=bonds"
  },
  {
    title: "Precious Metals",
    icon: <Gem className="w-6 h-6 text-amber-500" />,
    color: "bg-amber-50",
    topics: ["Physical Gold", "Gold ETFs", "Sovereign Gold Bonds", "Digital Gold"],
    route: "/dashboard?section=gold"
  },
  {
    title: "Real Estate",
    icon: <Building2 className="w-6 h-6 text-emerald-500" />,
    color: "bg-emerald-50",
    topics: ["Market Overview", "Document Verification", "REITs & Fractional", "Property Taxation"],
    route: "/dashboard?section=real-estate"
  },
  {
    title: "Diversification",
    icon: <PieChart className="w-6 h-6 text-purple-500" />,
    color: "bg-purple-50",
    topics: ["PMS & AIF", "Bitcoin & Crypto", "Overseas Investing", "Portfolio Rebalancing"],
    route: "/dashboard?section=diversification"
  }
];

const Curriculum = () => {
  const navigate = useNavigate();

  return (
    <section id="curriculum" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20">Learning Path</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">What you'll master</h2>
          <p className="text-lg text-slate-600">
            A comprehensive curriculum designed to take you from absolute beginner to a confident investor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className={`${module.color} p-3 rounded-2xl group-hover:scale-110 transition-transform`}>
                  {module.icon}
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-slate-300" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <div 
                  onClick={() => navigate(module.route)}
                  className="mt-8 pt-6 border-t border-slate-50 flex items-center text-xs font-bold text-primary uppercase tracking-widest cursor-pointer hover:gap-3 transition-all"
                >
                  Start Module <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;