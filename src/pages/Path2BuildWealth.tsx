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
      title: "The Power of Patience",
      icon: <Timer className="w-5 h-5 text-amber-500" />,
      quotes: [
        "Patience > Precision: Great returns aren't born from perfect timing but from steadfast discipline. Sit tight; compounding rewards the waiting.",
        "The stock market rewards people who think in years, not weeks. Short-term thinking creates stress and overthinking, while long-term thinking creates calm. Time becomes your friend only when you stop rushing it.",
        "Many people leave the market not because they were wrong, but because they got tired of waiting. Time tests belief more than intelligence. Those who stay long enough eventually realize patience was the strategy all along.",
        "Over the years, investing teaches you an unusual kind of patience. You learn to wait without anxiety and act without urgency. You stop forcing outcomes and start respecting time. The market rewards those who trust the process even when progress feels invisible.",
        "In the stock market, patience and high performance almost always go hand in hand. It's rare to find someone with a high-performing portfolio who is also impatient. While most focus on strategies, patience remains the most undervalued trait.",
        "Sometimes people hold stocks that don't move for a long time. If we can control that frustration and stay patient, those same stocks—once they move—often move big because they've been building a strong base. The market tends to move after most people have exited out of frustration.",
        "The larger the base and the longer the consolidation phase, the stronger the breakout will be. Most people don't think like this and don't have the patience, and that is how they miss most of the opportunities.",
        "Yes, this is a choppy market and it often frustrates people. It is like exam time during our college days. Everyone has to go through it. This phase actually tests our patience and discipline."
      ]
    },
    {
      title: "Emotional Mastery",
      icon: <Activity className="w-5 h-5 text-rose-500" />,
      quotes: [
        "More than just stock analysis, what truly determines success is patience—and a deep understanding of reverse human psychology. Successful investing requires us to practice delayed gratification, avoid impulsive action, stay still when the market moves, and resist buying without a bargain.",
        "Volatility Is Not the Enemy — It's Fuel. Few understand this.",
        "When prices fall, confidence disappears. When prices rise, confidence is everywhere. Neither should guide your decisions.",
        "If you can't control your emotions, the market will control your results. Your mindset decides your entries and your exits. Fix the mind first, profits come later.",
        "At first, volatility feels like a threat. Later, you understand it's just the market breathing. Prices move, opinions change, emotions rise and fall. What matters is whether your thinking stays steady while everything else moves around you.",
        "Every investor thinks risk is in the market. Over time, you learn risk mostly lives inside you. Fear makes you sell early, greed makes you overstay. Once you manage yourself better, the market starts feeling far less dangerous.",
        "One of the most psychological aspects of the stock market is how we feel when booking the same amount of profit versus loss. Profit and loss are the same in numbers, but the way we feel towards loss is what makes it seem heavier.",
        "Instead of getting distracted by macro events or global conflicts, investors should focus on how sectors are performing, how companies are growing, their promoter quality, and long term fundamentals."
      ]
    },
    {
      title: "Strategic Restraint",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      quotes: [
        "'Diversify to Survive. Concentrate to Get Rich.' Use diversification for defense, protecting against downside and emotional panic. Use concentration for offense, but only when based on deep research and conviction.",
        "Don't spread your bets across average companies. Concentrate on the few that can deliver exceptional returns. Selective intensity > Diversified mediocrity.",
        "Profit booking is completely normal. Not all stocks deserve to be held for the long term—only a few truly earn that tag. Many are better suited for short-to-medium-term positions.",
        "Opportunities in the market are like buses — they keep coming and going. If you get a gut feeling to exit a profitable position that's been consolidating for too long, listen to it. It's okay to book profits and wait for the next bus.",
        "Proper position sizing, number of holdings, when to sell, and turnover discipline define long-term success — not just stock selection.",
        "Circle of Competence > Broad Ambition: True mastery in investing comes from depth in familiar territories, not superficial dives into unknowns. Stick to what you deeply understand, and let opportunities compound within those bounds.",
        "One common mistake many traders and investors make is that they plan to buy the dip, but blindly buying every 10-15% dip doesn't make much sense. Successful investors usually buy only after deeper corrections of 20% or more.",
        "Smart investors don't just focus on stock picking like herd. They also pay attention to portfolio restructuring, proper capital allocation, and patience in holding. When all these factors come together, that's when real profits are made.",
        "If you see, our portfolio is like having a team of players. Not everybody can be a batsman in cricket, and not everybody can be a bowler. The best approach is to categorize into partitions: momentum, short term, and long-term."
      ]
    },
    {
      title: "Clarity over Chaos",
      icon: <EyeOff className="w-5 h-5 text-purple-500" />,
      quotes: [
        "Don't depend on predictions—build for adaptability.",
        "The antifragile gains from variability and volatility—not from comfort and steady rises.",
        "If you look closely, most multibagger stocks (2x, 5x, 10x) were captured by people who didn't get distracted by macro events, wars, and global conflicts. It takes discipline to block out all the fear and just look at whether the business is growing.",
        "Real confidence in investing is very silent. It doesn't come from predictions or bold opinions. It comes from knowing exactly why you own something. When that clarity is strong, short-term noise loses its power over you.",
        "Most mistakes in investing happen not because of lack of knowledge, but because of lack of clarity. When you know why you bought something, you stop reacting to every small move. Clarity gives you the confidence to wait.",
        "Your biggest challenge in the market is not finding information, it is filtering noise. When you reduce inputs, your thinking becomes clearer. Fewer opinions lead to stronger conviction."
      ]
    },
    {
      title: "Milestone Mindset",
      icon: <Target className="w-5 h-5 text-indigo-500" />,
      quotes: [
        "If your goal is wealth creation, the first thing you should aim for is creating 1 crore. The first 1 crore is always the toughest. Achieving it ideally before 30 makes creating the next 2, 5, or 10 crores much easier.",
        "Reaching the first crore is not just about money. It tells our hard work, discipline, execution skills, and ability to get things done. It's all about the process.",
        "Having a goal oriented and step-by-step approach is vital. The more structured your journey, the easier it becomes to implement the right strategies.",
        "Going from zero to ₹1 crore is like climbing the first 100 steps—it takes maximum effort. Once you cross that first crore, the next targets are like taking five or ten more steps. It gets easier because you have a system."
      ]
    },
    {
      title: "The India Story",
      icon: <Landmark className="w-5 h-5 text-emerald-500" />,
      quotes: [
        "India will see big reforms in tax, GST, and policies. These may turn out to be very favorable for startups, businesses, and overall growth. In the long term, India's growth is inevitable.",
        "Invest in India. The long-term story is very bright. Do not get carried away by short-term pain or macro events. What really matters is the underlying growth and potential.",
        "Compared to the global stage, India is still in the early growth phase, almost at the beginning of the beginning. This means there is huge scope across every sector and industry.",
        "The GDP will grow massively in the coming decades. Look for those underlying stories and do not get distracted by short-term market noise. Focus on the bigger picture."
      ]
    },
    {
      title: "Character & Humility",
      icon: <Heart className="w-5 h-5 text-emerald-500" />,
      quotes: [
        "Investing is more about understanding our own psychology and personality than just focusing on stocks or prices. It's more about how we behave than just picking stocks. Psychology plays a big role.",
        "Even mistakes are important. Without making mistakes, we really don't grow. The key is to ensure that the mistakes are small and manageable—and that we actually learn from them.",
        "I know many who didn't make money even in a good market because they held too long or exited too early. Mistakes are inevitable; you must face the setbacks to eventually reach that consistent profitability phase.",
        "Most people quit trading after a few losses. Winners study those losses, adjust, and come back sharper. Your best teacher in the market is the mistake you hate the most.",
        "Losses teach lessons gains never can. They show you your weak spots, your biases, your blind faith. If you listen carefully instead of getting bitter, every loss makes you calmer, not smaller. That calm becomes your strength.",
        "In the long run, investing becomes a reflection of your values. Discipline over impulse. Patience over urgency. Thinking over reacting. Those who grow internally almost always grow financially too."
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