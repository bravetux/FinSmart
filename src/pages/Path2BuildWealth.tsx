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
  Scale
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
      title: "The Power of Patience",
      icon: <Timer className="w-5 h-5 text-amber-500" />,
      quotes: [
        "The stock market rewards people who think in years, not weeks. Short-term thinking creates stress and overthinking, while long-term thinking creates calm. Time becomes your friend only when you stop rushing it.",
        "Many people leave the market not because they were wrong, but because they got tired of waiting. Time tests belief more than intelligence. Those who stay long enough eventually realize patience was the strategy all along.",
        "Nothing, the market is just testing our patience right now. Most of the stocks have corrected a lot and are not moving at all. But this is what the market does, it tests our patience. Many people who are impatient will give up during this phase.",
        "Over the years, investing teaches you an unusual kind of patience. You learn to wait without anxiety and act without urgency. You stop forcing outcomes and start respecting time. The market rewards those who trust the process even when progress feels invisible.",
        "Bulls are hiding in this sideways and confusing market because it is waiting for approval from many global events to calm down. Once these issues are cleared, positive news will lift the market and the next big rally will come.",
        "Slow bleeding is actually more dangerous than a sharp correction. Most portfolios are down by 30 to 40 percent, and people are scared. These are the times that build our patience and show how we handle tough phases.",
        "Don't sell your stocks just because they are up by 10%, 20%, or 25%. Hold patiently. The market is yet to move in a bigger way, and strong rallies may come once everything normalizes.",
        "Dealing with sideways markets, corrections, and frustration is actually one of the most important skills in investing. This is the phase where true long-term success is built, like farming, where patience brings results later."
      ]
    },
    {
      title: "Emotional Mastery",
      icon: <Activity className="w-5 h-5 text-rose-500" />,
      quotes: [
        "When prices fall, confidence disappears. When prices rise, confidence is everywhere. Neither should guide your decisions.",
        "If you can't control your emotions, the market will control your results. Your mindset decides your entries and your exits. Fix the mind first, profits come later.",
        "At first, volatility feels like a threat. Later, you understand it's just the market breathing. Prices move, opinions change, emotions rise and fall. What matters is whether your thinking stays steady while everything else moves around you.",
        "Every investor thinks risk is in the market. Over time, you learn risk mostly lives inside you. Fear makes you sell early, greed makes you overstay. Once you manage yourself better, the market starts feeling far less dangerous.",
        "The market does not test your intelligence every day. It tests your ability to stay calm when your money is involved. When emotions stay quiet, decisions improve. When emotions take control, even good ideas fail.",
        "One of the most psychological aspects of the stock market is how we feel when booking the same amount of profit versus loss. Profit and loss are the same in numbers, but the way we feel towards loss is what makes it seem heavier."
      ]
    },
    {
      title: "Strategic Restraint",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      quotes: [
        "You don't need to act on every opportunity. Missing a trade is cheaper than making a bad one. Restraint is underrated.",
        "People chase new opportunities because they are uncomfortable sitting with old decisions. But wealth grows when you give time to the right choices instead of constantly searching for better ones.",
        "One common mistake many traders and investors make is that they plan to buy the dip, but blindly buying every 10-15% dip doesn't make much sense. Successful investors usually buy only after deeper corrections of 20% or more.",
        "Smart investors don't just focus on stock picking like herd. They also pay attention to portfolio restructuring, proper capital allocation, and patience in holding. When all these factors come together, that's when real profits are made.",
        "If you look at SME, small-cap, and micro-cap stocks, many are down 30-50%. We may not get such opportunities often, where good quality stocks are available at corrected levels. Meanwhile, Gold has already rallied a lot. Trust is cyclical; soon or later, cycles change."
      ]
    },
    {
      title: "Clarity over Chaos",
      icon: <EyeOff className="w-5 h-5 text-purple-500" />,
      quotes: [
        "Real confidence in investing is very silent. It doesn't come from predictions or bold opinions. It comes from knowing exactly why you own something. When that clarity is strong, short-term noise loses its power over you.",
        "Most mistakes in investing happen not because of lack of knowledge, but because of lack of clarity. When you know why you bought something, you stop reacting to every small move. Clarity gives you the confidence to wait.",
        "Your biggest challenge in the market is not finding information, it is filtering noise. When you reduce inputs, your thinking becomes clearer. Fewer opinions lead to stronger conviction.",
        "If you look at the current market, it has been completely choppy and almost dead. These are the signs that the market may have bottomed out. Six months to one year down the line, many may regret not investing here."
      ]
    },
    {
      title: "Boring is Beautiful",
      icon: <Wind className="w-5 h-5 text-slate-500" />,
      quotes: [
        "A good investment looks boring most of the time. If it feels exciting every day, it's probably risky. Calm usually wins.",
        "Good investing feels boring most of the time, and that is exactly why it works. Excitement usually comes from risk you do not fully understand. Calm decisions compound quietly while loud decisions often disappear.",
        "Most people want excitement from the market. Experienced investors want stability of thought. Once you value peace over thrill, your decisions improve quietly, and returns follow without drama."
      ]
    },
    {
      title: "Character & Humility",
      icon: <Heart className="w-5 h-5 text-emerald-500" />,
      quotes: [
        "Most people quit trading after a few losses. Winners study those losses, adjust, and come back sharper. Your best teacher in the market is the mistake you hate the most.",
        "Losses teach lessons gains never can. They show you your weak spots, your biases, your blind faith. If you listen carefully instead of getting bitter, every loss makes you calmer, not smaller. That calm becomes your strength.",
        "In the long run, investing becomes a reflection of your values. Discipline over impulse. Patience over urgency. Thinking over reacting. Those who grow internally almost always grow financially too.",
        "The market rewards people who respect uncertainty. The moment you feel too sure, risk quietly increases. Humility keeps you alert, flexible, and alive in the game long after confidence alone would have failed."
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

        <section className="bg-slate-900 text-white p-8 md:p-16 rounded-[2.5rem] text-center space-y-8 relative overflow-hidden max-w-4xl mx-auto">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to take the first step?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Jump into your learning dashboard to start mastering these concepts and build your future.</p>
            <div className="pt-4">
              <Button size="lg" className="px-10 py-6 text-lg font-bold rounded-2xl transition-transform hover:scale-105" onClick={() => navigate('/dashboard')}>
                Go to Dashboard
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 -mr-24 -mt-24 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 -ml-24 -mb-24 rounded-full blur-[100px]" />
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