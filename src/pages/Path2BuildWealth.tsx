"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  TrendingUp, 
  ShieldCheck, 
  LineChart,
  Zap,
  Globe,
  Brain,
  Timer,
  Lightbulb,
  Compass,
  Coins,
  Quote,
  EyeOff,
  Activity,
  Wind,
  Sparkles,
  Heart,
  TrendingDown,
  Scale,
  Target,
  Landmark
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Path2BuildWealth = () => {
  const navigate = useNavigate();

  const mindsetPoints = [
    {
      title: "Delayed Gratification",
      desc: "The ability to resist a small reward now for a much larger one later is the #1 predictor of financial success.",
      icon: <Timer className="w-5 h-5 text-amber-600" />,
      color: "bg-amber-50"
    },
    {
      title: "Long-term Thinking",
      desc: "Wealth is built over decades, not days. Train your mind to ignore short-term noise and focus on compounding.",
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Continuous Learning",
      desc: "Your greatest asset is your knowledge. Stay curious about how money works and how the world changes.",
      icon: <Lightbulb className="w-5 h-5 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Discipline over Emotion",
      desc: "Don't let fear or greed drive your decisions. Stick to your plan even when the market feels chaotic.",
      icon: <Brain className="w-5 h-5 text-purple-600" />,
      color: "bg-purple-50"
    }
  ];

  const paths = [
    {
      title: "Step 1: Financial Foundation",
      desc: "Clear high-interest debt and build an emergency fund covering 6 months of expenses.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-50"
    },
    {
      title: "Step 2: Protection",
      desc: "Secure your future with adequate health and term insurance to protect your wealth from shocks.",
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-50"
    },
    {
      title: "Step 3: Systematic Growth",
      desc: "Start SIPs in diversified mutual funds or index funds to benefit from compounding.",
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      title: "Step 4: Diversification",
      desc: "Expand into Gold, Real Estate (REITs), and Global markets to balance your portfolio.",
      icon: <GlobeIcon className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-50"
    }
  ];

  const quoteCategories = [
    {
      title: "Reverse Human Psychology",
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      quotes: [
        "Personally, after spending several years in this field, I've realized one important truth: More than just stock analysis or picking the 'right' stocks, what truly determines success in investing is patience—and a deep understanding of reverse human psychology. Successful investing often requires us to: Practice delayed gratification, Avoid impulsive action, Stay still when the market moves, Resist the urge to buy without a bargain, Avoid booking profits too early, even when potential remains. All of this runs counter to our natural instincts.",
        "In the stock market and investing, it's more about understanding ourselves than just focusing on stocks or prices. Understanding our own psychology and personality is very important. Investing is more about how we behave than just picking stocks. Psychology plays a big role, and most people only understand this after many years of investing.",
        "Normalize staying calm and patient during market corrections or even when stocks are rising. Having a settled and steady mindset at all times will take us a long way in the stock market.",
        "A lot of regret among us who missed the opportunity to book profits. But in the stock market, regrets like these are extremely common. What I've realized is that it's important to normalize regrets and view them as part of the learning journey. Over time, the weight of such mistakes and regrets reduces. Learning how to navigate regret is key to long-term success."
      ]
    },
    {
      title: "The Power of Patience",
      icon: <Timer className="w-5 h-5 text-amber-500" />,
      quotes: [
        "Patience > Precision: Great returns aren't born from perfect timing but from steadfast discipline. Sit tight; compounding rewards the waiting.",
        "Most people quit the stock market too early. The real magic happens after it starts getting hard.",
        "In the stock market, patience and high performance almost always go hand in hand. It's rare to find someone with a high-performing portfolio who is also impatient. Patience remains one of the most important yet undervalued traits in investing.",
        "Sometimes people hold stocks that don't move for a very long time. This kind of stagnation often leads to frustration. But if we can control that frustration and stay patient, those same stocks—once they move—often move big because they've been building a strong base. The market tends to move after most people have exited out of frustration.",
        "There are some really good quality stocks that have been in sideways consolidation for the past few months. They're forming strong bases, which is usually a good sign. Remember, the larger and stronger the base, the more powerful the breakout tends to be."
      ]
    },
    {
      title: "Strategic Restraint & Execution",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      quotes: [
        "'Diversify to Survive. Concentrate to Get Rich.' Use diversification for defense, protecting against downside and emotional panic. Use concentration for offense, but only when based on deep research, conviction, and long-term orientation.",
        "Don't spread your bets across average companies. Concentrate on the few that can deliver exceptional, compounding returns. Selective intensity > Diversified mediocrity. Focus capital and attention on your very best ideas.",
        "Proper position sizing, number of holdings, when to sell, and turnover discipline define long-term success — not just stock selection.",
        "Profit booking is completely normal. Not all stocks deserve to be held for the long term—only a few truly earn that tag. Many stocks are better suited for short-to-medium-term positions, and it's perfectly healthy to book profits when the time is right.",
        "Sometimes, if you ever get that gut feeling or subtle sign that it's time to exit a position—try to listen to it. Especially if the position is already in profit and has been consolidating for a long time, the probability of it falling downward becomes higher than upward. Opportunities in the market are like buses—they keep coming and going.",
        "Circle of Competence > Broad Ambition: True mastery in investing comes from depth in familiar territories, not superficial dives into unknowns. Stick to what you deeply understand, and let opportunities compound within those bounds."
      ]
    },
    {
      title: "Clarity over Chaos",
      icon: <EyeOff className="w-5 h-5 text-indigo-500" />,
      quotes: [
        "If you look closely, most multibagger stocks 2x, 5x, 10x returns were captured by people who didn't get distracted by macro events, wars, global conflicts, and other issues. These kinds of events keep happening, but the people who truly benefit are the ones who ignore the noise and stay focused on business fundamentals.",
        "It takes discipline to block out all the fear and just look at whether the business behind the stock is actually growing. That's what ultimately drives the stock price upward.",
        "More than how we react, it's about how we don't react to news and short-term events. After a week or two, most of the noise fades away, and everyone goes back to looking at the company's fundamentals. In the end, it always comes down to earnings and sales growth.",
        "Volatility Is Not the Enemy — It's Fuel. Few understand this.",
        "Don't depend on predictions—build for adaptability.",
        "The antifragile gains from variability/volatility—not from comfort/rise.",
        "We always say that during a bull market, if stocks are overvalued and you're in profit, it's wise to book some profits and keep cash aside. Not sure why people are cheering for Trump, but as long as he's in power, he keeps introducing tough policies that slow down the growth of many countries. This is very negative for the market."
      ]
    },
    {
      title: "Character & Humility",
      icon: <Heart className="w-5 h-5 text-emerald-500" />,
      quotes: [
        "Even mistakes are important. Without making mistakes, we really don't grow. The key is to ensure that the mistakes are small and manageable—and that we actually learn from them. In fact, the earlier we make those mistakes, the better.",
        "I know many who, despite the market performing well over the last 1-2 years, didn't make money because they missed opportunities, held too long, or exited too early. Mistakes are inevitable. You need to test your investment thesis over a large sample size to understand whether it has an edge. You must face all the setbacks to eventually reach that consistent profitability phase."
      ]
    },
    {
      title: "Milestone Mindset",
      icon: <Target className="w-5 h-5 text-rose-500" />,
      quotes: [
        "If your goal is wealth creation, the first thing you should aim for is creating 1 crore. The first 1 crore is always the toughest. Achieving it ideally before 30 makes creating the next 2, 5, or 10 crores much easier.",
        "Reaching the first crore is not just about money. It tells our hard work, discipline, execution skills, and ability to get things done. It's all about the process.",
        "Going from zero to ₹1 crore is like climbing the first 100 steps—it takes maximum effort. Once you cross that first crore, the next targets are like taking five or ten more steps. It gets easier because you have a system."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-8">
          <Button 
            variant="ghost" 
            className="gap-2 -ml-2" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>

          <header className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
              <LineChart className="w-4 h-4" />
              <span>The Roadmap to Freedom</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Your Path to Build Wealth</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Wealth isn't built overnight. It's a journey of discipline, patience, and smart decisions.
            </p>
          </header>
        </div>

        {/* Mindset Section */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">How to Prepare Your Mind</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {mindsetPoints.map((point, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className={`${point.color} p-2.5 rounded-lg shrink-0`}>
                    {point.icon}
                  </div>
                  <CardTitle className="text-base">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-500 leading-relaxed">{point.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Path Section */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
              <Coins className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">The 4-Step Wealth Path</h2>
          </div>
          <div className="grid gap-6">
            {paths.map((path, i) => (
              <Card key={i} className="border-none shadow-lg overflow-hidden flex flex-col md:flex-row items-center group">
                <div className={`p-8 ${path.color} flex items-center justify-center self-stretch transition-colors`}>
                  {path.icon}
                </div>
                <CardContent className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{path.title}</h3>
                  <p className="text-slate-600">{path.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quotes Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
              <Quote className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Wisdom for the Journey</h2>
          </div>
          <div className="space-y-12">
            {quoteCategories.map((category, i) => (
              <div key={i} className="space-y-6">
                <div className="flex items-center gap-2 px-1 max-w-4xl mx-auto">
                  {category.icon}
                  <h3 className="font-bold text-slate-700 uppercase tracking-widest text-xs">{category.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.quotes.map((quote, j) => (
                    <Card key={j} className="border-none shadow-md bg-white/70 backdrop-blur-sm italic relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary/10 group-hover:bg-primary/30 transition-colors" />
                      <CardContent className="p-8 md:p-10">
                        <p className="text-lg md:text-xl text-slate-700 leading-tight relative font-serif">
                          <span className="text-5xl text-primary/5 absolute -top-6 -left-3 select-none pointer-events-none">"</span>
                          {quote}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Internal icon helper
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default Path2BuildWealth;