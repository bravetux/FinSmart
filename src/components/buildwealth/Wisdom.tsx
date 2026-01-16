"use client";

import React from 'react';
import { Brain, Timer, ShieldCheck, EyeOff, Heart, Target, Quote, DollarSign } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const quoteCategories = [
  {
    title: "Warren Buffett",
    icon: <DollarSign className="w-5 h-5 text-red-500" />,
    quotes: [
      "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
      "Risk comes from not knowing what you're doing.",
      "Only when the tide goes out do you discover who's been swimming naked.",
      "Price is what you pay. Value is what you get.",
      "The stock market is designed to transfer money from the active to the patient.",
      "Someone's sitting in the shade today because someone planted a tree a long time ago.",
      "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
      "You only have to do a very few things right in your life so long as you don't do too many things wrong.",
      "It's better to hang out with people better than you. Pick out associates whose behavior is better than yours and you'll drift in that direction.",
      "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
      "The most important quality for an investor is temperament, not intellect.",
      "The best thing that happens to us is when a great company gets into temporary trouble...We want to buy them when they're on the operating table.",
      "If you aren't thinking about owning a stock for ten years, don't even think about owning it for ten minutes.",
      "The key to investing is not assessing how much an industry is going to affect society, or how much it will grow, but rather determining the competitive advantage of any given company and, above all, the durability of that advantage.",
      "The business schools reward difficult complex behavior more than simple behavior, but simple behavior is more effective.",
      "The most important investment you can make is in yourself.",
      "The difference between successful people and really successful people is that really successful people say no to almost everything.",
      "The investor of today does not profit from yesterday's growth.",
      "The most common cause of low prices is pessimism - sometimes pervasive, sometimes specific to a company or industry. We want to do business in such an environment, not because we like pessimism but because we like the prices it produces. It's optimism that is the enemy of the rational buyer.",
      "The best chance to deploy capital is when things are going down."
    ]
  },
  {
    title: "Psychology",
    icon: <Brain className="w-5 h-5 text-purple-500" />,
    quotes: [
      "Personally, after spending several years in this field, I've realized one important truth: More than just stock analysis or picking the 'right' stocks, what truly determines success in investing is patience—and a deep understanding of reverse human psychology. Successful investing often requires us to: Practice delayed gratification, Avoid impulsive action, Stay still when the market moves, Resist the urge to buy without a bargain, Avoid booking profits too early, even when potential remains. All of this runs counter to our natural instincts.",
      "In the stock market and investing, it's more about understanding ourselves than just focusing on stocks or prices. Understanding our own psychology and personality is very important. Investing is more about how we behave than just picking stocks. Psychology plays a big role, and most people only understand this after many years of investing.",
      "Normalize staying calm and patient during market corrections or even when stocks are rising. Having a settled and steady mindset at all times will take us a long way in the stock market.",
      "A lot of regret among us who missed the opportunity to book profits. But in the stock market, regrets like these are extremely common. What I've realized is that it's important to normalize regrets and view them as part of the learning journey. Over time, the weight of such mistakes and regrets reduces. Learning how to navigate regret is key to long-term success."
    ]
  },
  {
    title: "Patience",
    icon: <Timer className="w-5 h-5 text-amber-500" />,
    quotes: [
      "Patience > Precision: Great returns aren't born from perfect timing but from steadfast discipline. Sit tight; compounding rewards the waiting.",
      "Most people quit the stock market too early. The real magic happens after it starts getting hard.",
      "In the stock market, patience and high performance almost always go hand in hand. It's rare to find someone with a high-performing portfolio who is also impatient. Patience remains one of the most important yet undervalued traits in investing.",
      "Most people don't have the patience. When they see a big gap between their stock and the market, they end up selling. But the reality is different. Stocks can stay in a consolidation phase for a long time without any business reason. Even if the business is growing, the stock may not move, because some stocks need strong triggers to break out. The larger the base and the longer the consolidation phase, the stronger the breakout will be. Most people don't think like this and don't have the patience, and that is how they miss most of the opportunities.",
      "Yes, this is a choppy market and it often frustrates people. It is like exam time during our college days. Everyone has to go through it. This phase actually tests our patience and discipline. If you have cash, this is a good time to buy quality stocks in small tranches. Because even if stocks fall again, you can continue buying on dips. For the last 12 to 18 months, the market has been the same choppy, confusing, and without many strong positive triggers. So don't confuse yourself if your portfolio is not performing well. It is just the nature of this market right now.",
      "Market is slowly bleeding without any big movements. It's a gradual correction. These are the times that offer good buying opportunities. Many stocks are already down 20-25% from their recent highs. We saw some swings earlier, but now it's correcting again. It's a good time to start buying in small tranches.",
      "The market is not going up or down. It looks like it's waiting for a strong reason to move. This kind of market is frustrating because people are not getting any good chances and not making profits.",
      "Sometimes people hold stocks that don't move for a very long time. This kind of stagnation often leads to frustration. But if we can control that frustration and stay patient, those same stocks—once they move—often move big because they've been building a strong base. The market tends to move after most people have exited out of frustration.",
      "There are some really good quality stocks that have been in sideways consolidation for the past few months. They're forming strong bases, which is usually a good sign. Remember, the larger and stronger the base, the more powerful the breakout will be."
    ]
  },
  {
    title: "Strategy",
    icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    quotes: [
      "'Diversify to Survive. Concentrate to Get Rich.' Use diversification for defense, protecting against downside and emotional panic. Use concentration for offense, but only when based on deep research, conviction, and long-term orientation.",
      "Don't spread your bets across average companies. Concentrate on the few that can deliver exceptional, compounding returns. Selective intensity > Diversified mediocrity. Focus capital and attention on your very best ideas.",
      "Proper position sizing, number of holdings, when to sell, and turnover discipline define long-term success — not just stock selection.",
      "If you see, our portfolio is like having a team of players. Not everybody can be a batsman in cricket, and not everybody can be a bowler. The best approach is to categorize into three partitions: momentum players, short term players, and long-term players. There will be stocks where we expect 50%, 70%, or even 100% returns in a year or two, but sometimes the market moves 70-80% in just three to six months. In such cases, it is better to close those positions, book the profit, and either hold cash or move that money into stocks meant for long term holding. Without such prioritization and strategic planning, if we are just holding all stocks for the very long term, it doesn't create much portfolio restructuring, and also impact on returns .",
      "Sometimes it happens that a stock is up 30, 40, even 60 percent in profit. But if you feel the stock is overvalued or something doesn't seem right, it's better to book profits. Most of the time, these instincts come from your experience. It's wise to book gains and keep some cash on hand because the market always gives new opportunities. Some people say they're always fully invested, but holding some cash is always a safer option. Why miss a good opportunity when it comes?",
      "Last week, booked some profit and am holding some cash now. As I mentioned earlier, the market might remain choppy for a while. So it's better to keep some cash aside, just in case good opportunities come up. We can't predict exactly, but being prepared helps. If you look at the past year, market returns haven't been great. Until the market shows a clear one-sided move, there will likely be more volatility and ups and downs. So, holding cash for the right opportunity is a smart move.",
      "Profit booking is completely normal. Not all stocks deserve to be held for the long term—only a few truly earn that tag. Many stocks are better suited for short-to-medium-term positions, and it's perfectly healthy to book profits when the time is right.",
      "Sometimes, if you ever get that gut feeling or subtle sign that it's time to exit a position - try to listen to it. Because often, it's your internal signal pointing toward a wise move. Especially if the position is already in profit and has been consolidating for a long time, the probability of it falling downward becomes higher than upward. So, it's perfectly okay to book profits. Opportunities in the market are like buses - they keep coming and going. Recognizing this and acting accordingly is a key principle in long-term successful investing.",
      "Circle of Competence > Broad Ambition: True mastery in investing comes from depth in familiar territories, not superficial dives into unknowns. Stick to what you deeply understand, and let opportunities compound within those bounds."
    ]
  },
  {
    title: "Clarity",
    icon: <EyeOff className="w-5 h-5 text-indigo-500" />,
    quotes: [
      "So, what I am thinking is that India will see big reforms in tax, GST, and policies. These may turn out to be very favorable for startups, businesses, and overall growth. In the long term, India's growth is inevitable. Many companies are already expanding rapidly, and it won't be surprising if some of our products go global and become well known. That is why I say invest in India . The long-term story is very bright. Do not get carried away by short-term pain like tariff threats, macro events, or small corrections. These are just noises. What really matters is the underlying growth and potential. Compared to the global stage, India is still in the early growth phase, almost at the beginning of the beginning. This means there is huge scope across every sector and industry. So, focus on the bigger picture. The GDP will grow massively in the coming decades. Right now also, many small businesses and industries have deep potential. Look for those stories and do not get distracted by short-term market noise.",
      "I see that people are not very excited in this market because it looks confusing and choppy. But six to nine months from now, people may regret not taking positions and will hope for a market like this again. Many stocks are slowly falling, and some SME, micro-cap, and small-cap stocks still have 1-2x potential. The issue is that many macro events, like the tariff issue, are still not settled and are under discussion. So, it's better to focus on buying some of your favorite stocks for the long term, because I don't think we will get these price opportunities again. As always, once the stocks start moving up, we regret not buying. So just focus on value.",
      "Instead of getting distracted by macro events or global conflicts, investors should focus on how sectors are performing, how companies are growing, their promoter quality, and long term fundamentals. As Graham said, 'Mr. Market' comes daily with random moods sometimes panicking, sometimes euphoric. Right now, that irrational figure looks like Donald Trump aka Mad man . this 'orange man' keeps showing up and creating short term volatility, which can offer great opportunities. So rather than panicking and selling out of fear, we should try to make the most of these opportunities.",
      "If you look closely, most multibagger stocks 2x, 5x, 10x returns were captured by people who didn't get distracted by macro events, wars, global conflicts, and other issues. These kinds of events keep happening, but the people who truly benefit are the ones who ignore the noise and stay focused on business fundamentals.",
      "It takes discipline to block out all the fear and just look at whether the business behind the stock is actually growing. That's what ultimately drives the stock price upward.",
      "More than how we react, it's about how we don't react to news and short-term events. After a week or two, most of the noise fades away, and everyone goes back to looking at the company's fundamentals. In the end, it always comes down to earnings and sales growth.",
      "Volatility Is Not the Enemy - It's Fuel. Few understand this.",
      "Don't depend on predictions—build for adaptability.",
      "The antifragile gains from variability/volatility—not from comfort/rise.",
      "We always say that during a bull market, if stocks are overvalued and you're in profit, it's wise to book some profits and keep cash aside. Not sure why people are cheering for Trump, but as long as he's in power, he keeps introducing tough policies that slow down the growth of many countries. This is very negative for the market."
    ]
  },
  {
    title: "Character",
    icon: <Heart className="w-5 h-5 text-emerald-500" />,
    quotes: [
      "Even mistakes are important. Without making mistakes, we really don't grow. The key is to ensure that the mistakes are small and manageable—and that we actually learn from them. In fact, the earlier we make those mistakes, the better.",
      "I know many who, despite the market performing well over the last 1-2 years, didn't make money because they missed opportunities, held too long, or exited too early. Mistakes are inevitable. You need to test your investment thesis over a large sample size to understand whether it has an edge. You must face all the setbacks to eventually reach that consistent profitability phase."
    ]
  },
  {
    title: "Milestones",
    icon: <Target className="w-5 h-5 text-rose-500" />,
    quotes: [
      "The first ₹1 Lakh is purely a test of discipline. It's built not by high returns, but by consistent saving and ruthless expense control. This is where the habit is forged.",
      "Reaching ₹10 Lakh shifts the focus from saving to earning. Your income stream must accelerate, and your savings rate must be non-negotiable. This milestone is powered by hustle.",
      "The jump to ₹25 Lakh demands diversification. Move beyond bank deposits; introduce systematic investments (SIPs) into equity and debt funds. Your money must now work harder than you do.",
      "At ₹50 Lakh, risk management becomes paramount. This corpus is large enough to protect. Ensure you have adequate insurance and a clear asset allocation strategy to weather market storms.",
      "The first ₹1 Crore is the hardest. After this, compounding takes over. The journey from ₹1 Crore to ₹5 Crores is often faster than the journey from zero to one. This is the reward for patience.",
      "Consistency is the currency of compounding. A small, steady SIP executed for twenty years beats a large, sporadic investment every time.",
      "Don't measure your wealth by the size of your portfolio, but by the length of time you can survive without working. That is true financial freedom.",
      "To achieve ₹1 Crore, you need a plan, not a prediction. Define your savings rate, your target asset allocation, and automate the execution. Remove emotion from the process.",
      "Your savings rate is more important than your investment return until you hit the ₹50 Lakh mark. Focus on increasing your income and widening the gap between earning and spending.",
      "Once you hit ₹1 Crore, the game changes from accumulation to preservation and strategic growth. Start exploring advanced tools like PMS or AIFs for specialized diversification.",
      "If your goal is wealth creation, the first thing you should aim for is creating 1 crore. The first 1 crore is always the toughest. Creating 10 to 25 lakhs nowadays is relatively easy through a side hustle, job, or business, but reaching 1 crore requires discipline. You should not get distracted by buying phones, cars, bikes, and other luxuries. Focus on achieving that first 1 crore, ideally before 30, because once you do, creating the next 2, 5, or 10 crores becomes much easier. It's all about the process. Reaching the first crore is not just about money. It tells our hard work, discipline, execution skills, and ability to get things done.",
      "Having a goal oriented and step-by-step approach for wealth creation is very important. Why? Because the more structured and planned your journey is, the easier it becomes to implement the right strategies. For example, if your goal is to reach ₹10 crores or ₹25 crores, you must have a proper plan in place. Without a clear plan, it's very difficult to track your expenses, savings, and investments effectively. The first major milestone should be reaching your first ₹1 crore. Why? Because going from zero to ₹1 crore is like climbing the first 100 steps it takes maximum effort, time, hard work, and often sleepless nights. Once you cross that first crore, the next targets ₹1 crore to ₹5 crores are like five more steps. And ₹1 crore to ₹10 crores is like ten more steps. It gets easier as you move ahead because you now have experience, knowledge, and a system in place. Your first crore is always the toughest. But once you achieve that with discipline, structure, and planning, the rest becomes more about momentum.",
      "Reaching the first crore is not just about money. It tells our hard work, discipline, execution skills, and ability to get things done. It's all about the process.",
      "Going from zero to ₹1 crore is like climbing the first 100 steps—it takes maximum effort. Once you cross that first crore, the next targets are like taking five or ten more steps. It gets easier because you have a system."
    ]
  }
];

const Wisdom = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
          <Quote className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Wisdom for the Journey</h2>
      </div>
      <p className="text-lg text-slate-600">
        Insights on psychology, patience, and strategy from seasoned investors.
      </p>
      
      <Tabs defaultValue={quoteCategories[0].title} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto p-1 bg-slate-200/50 rounded-xl">
          {quoteCategories.map((category) => (
            <TabsTrigger key={category.title} value={category.title} className="text-[10px] md:text-xs lg:text-sm py-2">
              <div className="flex items-center gap-1 md:gap-2">
                {category.icon}
                {category.title}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {quoteCategories.map((category) => (
          <TabsContent key={category.title} value={category.title} className="mt-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 px-1">
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
                        <span className="font-bold text-primary/80 mr-2 not-italic">{j + 1}.</span>
                        {quote}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Wisdom;