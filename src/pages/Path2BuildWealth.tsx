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
  Heart
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
        "People talk about returns. Few talk about the patience required to earn them. That patience is the real cost.",
        "The stock market rewards people who think in years, not weeks. Short-term thinking creates stress and overthinking, while long-term thinking creates calm. Time becomes your friend only when you stop rushing it.",
        "Over the years, investing teaches you an unusual kind of patience. You learn to wait without anxiety and act without urgency. You stop forcing outcomes and start respecting time. The market rewards those who trust the process even when progress feels invisible.",
        "Many investors confuse activity with progress. Buying and selling feels productive, but holding a strong position through uncertainty is where real growth happens. Patience looks passive, but it is an active skill."
      ]
    },
    {
      title: "Emotional Mastery",
      icon: <Activity className="w-5 h-5 text-rose-500" />,
      quotes: [
        "When prices fall, confidence disappears. When prices rise, confidence is everywhere. Neither should guide your decisions.",
        "Markets move in cycles, but human behavior stays the same. Fear and greed repeat themselves again and again. Investors who understand this stop reacting emotionally and start acting thoughtfully.",
        "The market does not test your intelligence every day. It tests your ability to stay calm when your money is involved. When emotions stay quiet, decisions improve. When emotions take control, even good ideas fail."
      ]
    },
    {
      title: "Strategic Restraint",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      quotes: [
        "You don't need to act on every opportunity. Missing a trade is cheaper than making a bad one. Restraint is underrated.",
        "People chase new opportunities because they are uncomfortable sitting with old decisions. But wealth grows when you give time to the right choices instead of constantly searching for better ones. Doing less, but doing it well, changes everything.",
        "Remember that great investing is rarely about timing the market, but about time in businesses that compound quietly. Value is not found in noise, narratives, or price movement but in cash flows, balance sheets, and management integrity.",
        "The market rewards patience unevenly, but always pays in full to discipline. In the coming year, may your decisions be driven by margin of safety, not momentum, and conviction, not crowd behavior."
      ]
    },
    {
      title: "Clarity over Chaos",
      icon: <EyeOff className="w-5 h-5 text-purple-500" />,
      quotes: [
        "Your biggest challenge in the market is not finding information, it is filtering noise. When you reduce inputs, your thinking becomes clearer. Fewer opinions lead to stronger conviction.",
        "Most mistakes in investing happen not because of lack of knowledge, but because of lack of clarity. When you know why you bought something, you stop reacting to every small move. Clarity gives you the confidence to wait.",
        "There is a point where you stop checking prices every day. Not because you stopped caring, but because you finally understand what you own. Clarity reduces anxiety more than any market rally ever could."
      ]
    },
    {
      title: "Boring is Beautiful",
      icon: <Wind className="w-5 h-5 text-slate-500" />,
      quotes: [
        "A good investment looks boring most of the time. If it feels exciting every day, it's probably risky. Calm usually wins.",
        "Most people want excitement from the market. Experienced investors want stability of thought. Once you value peace over thrill, your decisions improve quietly, and returns follow without drama.",
        "Good investing feels boring most of the time, and that is exactly why it works. Excitement usually comes from risk you do not fully understand. Calm decisions compound quietly while loud decisions often disappear."
      ]
    },
    {
      title: "Character & Humility",
      icon: <Heart className="w-5 h-5 text-emerald-500" />,
      quotes: [
        "Many people think investing success comes from being right often, but it actually comes from being wrong and not breaking down. Losses teach patience, discipline, and humility if you stay in the game long enough. Over time, those lessons matter more than any single profit you make.",
        "Losses teach lessons gains never can. They show you your weak spots, your biases, your blind faith. If you listen carefully instead of getting bitter, every loss makes you calmer, not smaller. That calm becomes your strength.",
        "In the long run, investing becomes a reflection of your values. Discipline over impulse. Patience over urgency. Thinking over reacting. Those who grow internally almost always grow financially too.",
        "Investing slowly changes how you see life. You become less reactive, more thoughtful. You stop chasing quick outcomes and start trusting long processes. That mindset compounds far beyond money.",
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
                        <p className="text-xl md:text-2xl text-slate-700 leading-tight relative font-serif">
                          <span className="text-6xl text-primary/5 absolute -top-8 -left-4 select-none pointer-events-none">"</span>
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