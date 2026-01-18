"use client";

import React from 'react';
import { Brain, Timer, ShieldCheck, EyeOff, Heart, Target, Quote, DollarSign, Lightbulb, Zap, Rocket } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const quoteCategories = [
  {
    title: "Warren Buffett",
    icon: <DollarSign className="w-5 h-5 text-red-500" />,
    quotes: [
      "💡 The Core Strategies of Warren Buffett: Capital Preservation, Long-Term Fundamentals, and Value Investing.",
      "I. The Golden Rules of Investing",
      "Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1.",
      "Someone’s sitting in the shade today because someone planted a tree a long time ago.",
      "If you aren’t willing to own a stock for 10 years, don’t even think about owning it for 10 minutes.",
      "I never attempt to make money on the stock market. I buy on the assumption that they could close the market the next day and not reopen it for five years.",
      "Our favourite holding period is forever.",
      "II. Identifying Business Quality",
      "The key to investing is not assessing how much an industry is going to affect society... but rather determining the competitive advantage of any given company and, above all, the durability of that advantage.",
      "The most important thing to do if you find yourself in a hole is to stop digging.",
      "Risk comes from not knowing what you are doing.",
      "Never invest in a business you cannot understand.",
      "I try to invest in businesses that are so wonderful that an idiot can run them. Because sooner or later, one will.",
      "III. Value and Price (The Benjamin Graham School)",
      "Price is what you pay, value is what you get.",
      "The three most important words in investing are ‘margin of safety.’",
      "It’s far better to buy a wonderful company at a fair price, than a fair company at a wonderful price.",
      "A good business is not always a good purchase – although it’s a good place to look for one.",
      "The key to successful investing was the purchase of shares in good businesses when market prices were at a large discount from underlying business values.",
      "IV. Market Behavior & Risk Management",
      "It is a terrible mistake... to measure their investment ‘risk’ by their portfolio’s ratio of bonds to stocks.",
      "Do not take yearly results too seriously. Instead, focus on four or five-year averages.",
      "Cash is a terrible long-term asset... certain to depreciate in value.",
      "When forced to choose, I will not trade even a night’s sleep for the chance of extra profits. (On the importance of emergency funds).",
      "Don’t pass up something that’s attractive today because you think you will find something better tomorrow.",
      "When trillions of dollars are managed by Wall Streeters charging high fees, it will usually be the managers who reap outsized profits, not the clients.",
      "The best chance to deploy capital is when things are going down.",
      "Derivatives are financial weapons of mass destruction.",
      "You should never test the depth of the water with both feet.",
      "V. Concentration vs. Diversification",
      "Diversification is protection against ignorance. It makes little sense if you know what you are doing.",
      "Diversification may preserve wealth, but concentration builds wealth.",
      "We believe that a policy of portfolio concentration may well decrease risk if it raises... the intensity with which an investor thinks about a business.",
      "VI. Modern Analysis & Advice",
      "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.",
      "Wall Street is the only place that people ride to in a Rolls Royce to get advice from those who take the subway.",
      "Beware of geeks bearing formulas. (Regarding overly complex mathematical models).",
      "VII. Investing Psychology",
      "You don’t have to be an expert on every company, or even many. You only have to be able to evaluate companies within your circle of competence.",
      "Cash combined with courage in a time of crisis is priceless.",
      "Trust in American ingenuity.",
      "Invest in companies you believe in.",
      "Beware the investment activity that produces applause; the great moves are usually greeted by yawns.",
      "The business schools reward difficult complex behaviour more than simple behaviour, but simple behaviour is more effective.",
      "The most important quality for an investor is temperament, not intellect.",
      "Remember that the stock market is a manic depressive.",
      "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
      "No matter how great the talent or efforts, some things just take time. You can’t produce a baby in one month by getting nine women pregnant.",
      "Games are won by players who focus on the playing field –- not by those whose eyes are glued to the scoreboard.",
      "Forecasts may tell you a great deal about the forecaster; they tell you nothing about the future.",
      "We don’t have to be smarter than the rest. We have to be more disciplined than the rest.",
      "An investor should act as though he had a lifetime decision card with just twenty punches on it.",
      "If past history was all that is needed to play the game of money, the richest people would be librarians.",
      "Calling someone who trades actively in the market an investor is like calling someone who repeatedly engages in one-night stands a romantic.",
      "Buy a stock the way you would buy a house. Understand and like it such that you’d be content to own it in the absence of any market.",
      "The stock market is a device for transferring money from the impatient to the patient.",
      "Temperament is also important. Independent thinking, emotional stability, and a keen understanding of both human and institutional behaviour is vital to long-term investment success.",
      "VIII. Financial Management",
      "Never depend on a single income. Make an investment to create a second source.",
      "Do not save what is left after spending; instead spend what is left after saving.",
      "If you don’t find a way to make money while you sleep, you will work until you die.",
      "If you buy things you do not need, soon you will have to sell things you need.",
      "The more you learn, the more you earn.",
      "An idiot with a plan can beat a genius without a plan.",
      "Stay away from the mentality of using the credit card compulsorily and invest on yourself... Live your life in the simplest manner possible.",
      "I’ve never believed in risking what my family and friends have and need in order to pursue what they don’t have and don’t need.",
      "IX. Life and Success",
      "The most important investment you can make is in yourself.",
      "Honesty is a very expensive gift, Don’t expect it from cheap people.",
      "Intensity is the price of excellence.",
      "If you’re in the luckiest one per cent of humanity, you owe it to the rest of humanity to think about the other 99 per cent.",
      "The difference between successful people and really successful people is that really successful people say no to almost everything.",
      "There comes a time when you ought to start doing what you want. Take a job that you love... I think you are out of your mind if you keep taking jobs that you don’t like because you think it will look good on your resume.",
      "Should you find yourself in a chronically leaking boat, energy devoted to changing vessels is likely to be more productive than energy devoted to patching leaks.",
      "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that you’ll do things differently.",
      "It’s better to hang out with people better than you. Pick out associates whose behavior is better than yours and you’ll drift in that direction.",
      "Get something to improve yourself at least 1% each day.",
      "Reading could be the BEST addiction one could have. The only proven side effect is imagination & an edge in knowledge.",
      "Tell me who your heroes are and I’ll tell you how you’ll turn out to be.",
      "People always ask me where they should go to work, and I always tell them to go to work for whom they admire the most.",
      "You do things when the opportunities come along... If I get an idea next week, I’ll do something. If not, I won’t do a damn thing.",
      "X. Business Management",
      "In looking for people to hire, you look for three qualities: integrity, intelligence, and energy. And if you don’t have the first, the other two will kill you.",
      "I insist on a lot of time being spent, almost every day, to just sit and think... So I do more reading and thinking, and make less impulse decisions.",
      "In the world of business, the people who are most successful are those who are doing what they love.",
      "I learned to go into business only with people whom I like, trust, and admire.",
      "In the business world, the rearview mirror is always clearer than the windshield.",
      "In the long run managements stressing accounting appearance over economic substance usually achieve little of either.",
      "Culture, more than rule books, determines how an organisation behaves.",
      "If each of us hires people who are smaller than we are, we shall become a company of dwarfs. But, if each of us hires people who are bigger than we are, we shall become a company of giants.",
      "Having first-rate people on the team is more important than designing hierarchies and clarifying who reports to whom.",
      "It’s only when the tide goes out that you learn who’s been swimming naked.",
      "ABCs of business decay, which are arrogance, bureaucracy and complacency.",
      "If you’ve got the power to raise prices without losing business to a competitor, you’ve got a very good business.",
      "The requisites for board membership should be business savvy, interest in the job, and owner-orientation.",
      "Charlie and I have seen all sorts of bad corporate behaviour... induced by the desire of management to meet Wall Street expectations.",
      "When a management with a reputation for brilliance tackles a business with a reputation for bad economics, it is the reputation of the business that remains intact.",
      "Managers who want to expand their domain at the expense of owners might better consider a career in government."
    ]
  },
  {
    title: "Action",
    icon: <Rocket className="w-5 h-5 text-orange-500" />,
    quotes: [
      "Stress and worry tend to be higher before you act. Without action, all you can do is worry. Once you begin, fear shrinks as you start to influence the outcome.",
      "Motivation increases after you begin. Make starting easy.",
      "Clarity comes after you start walking. Like a hike, you don't see the path until you're on it.",
      "Opportunity favors active hands, not limp ones. Engage.",
      "Well begun is half done.",
      "Take care of the minutes; the hours will take care of themselves.",
      "Every great advance comes from dreams and attempts. Devise more dreams. Make more attempts.",
      "Excellence looks easy only after you try it yourself.",
      "Inspiration does not visit the lazy.",
      "You can’t speed time or success—only control the next action.",
      "Deal with the difficult while it is yet easy. Deal with the great while it is yet small.",
      "The feeling of progress—however small—is one of the best feelings there is.",
      "You learn to work smart only after working hard—and making mistakes.",
      "Momentum magnifies strengths and hides weaknesses. Lack of it does the opposite.",
      "Improvement depends on starting fast, learning fast, and staying in the game."
    ]
  },
  {
    title: "Psychology",
    icon: <Brain className="w-5 h-5 text-purple-500" />,
    quotes: [
      "Replaying a bad situation only makes it worse. The damage is done. Make the best next choice. Next-play mentality.",
      "Do not fear what you can address. What should worry you is resisting addressing it.",
      "When you stop competing and comparing, respect follows.",
      "Reflection requires stillness. Don’t confuse activity with effectiveness.",
      "Peace requires letting go—there will always be more to want.",
      "What are you still carrying that isn’t yours?",
      "Always play the hand you have, not the one you wish you had.",
      "In the short run, markets vote. In the long run, they weigh.",
      "Sentiment moves prices faster than fundamentals.",
      "Pause. Close your eyes. Breathe for 60 seconds.",
      "Personally, after spending several years in this field, I've realized one important truth: More than just stock analysis or picking the 'right' stocks, what truly determines success in investing is patience—and a deep understanding of reverse human psychology.",
      "Normalize staying calm and patient during market corrections or even when stocks are rising.",
      "Learning how to navigate regret is key to long-term success.",
      "Arrange whatever pieces come your way."
    ]
  },
  {
    title: "Principles",
    icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
    quotes: [
      "Chase your desired lifestyle, not your desired title. People are blinded by status and labels. Once you release the need for a specific title, there is almost always an easier path to living your preferred lifestyle.",
      "Earning more money increases freedom. Spending less than you earn reduces stress.",
      "Before you worry about how to win the game, figure out whether the game is worth winning.",
      "If you love them more than the fight, end the fight. An apology loses its warmth if it waits too long.",
      "Distance and time separate relationships. When it matters, meet face-to-face. Solve it early.",
      "A dull truth will be ignored. An exciting lie won’t. Make truth compelling.",
      "Good habits stockpile ease. Bad habits postpone pain.",
      "New lifestyles create new results. Habits beat goals.",
      "Simplify, then add lightness.",
      "Growth comes by adding or shedding. Choose wisely.",
      "The best things in life have no finish line. Practice them daily.",
      "Ideas multiply when shared; apples don’t.",
      "The master knows what not to do.",
      "Decide the type of person you want to be. Prove it to yourself with small wins.",
      "You can control the slope of your success, not your starting point.",
      "You are richer than 93% of people—not in money, but in time.",
      "Even bad luck contains opportunity—if you live like it does.",
      "If you do not bend, you will break. The adaptable prevail—determined, but flexible.",
      "You want two things: Simplicity (no wasted effort) and Compounding (long runways that feed each other).",
      "“An investment in knowledge pays the best interest.” — Benjamin Franklin"
    ]
  },
  {
    title: "Strategy",
    icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    quotes: [
      "Investing is like a seat belt: without conviction, every bump feels dangerous.",
      "What looks like a talent gap is often a focus gap. Talent is staying focused.",
      "Greatness often requires eliminating what you do well to focus on what you can do exceptionally.",
      "Work hard on what comes easily.",
      "Find what feels effortless. Then apply maximum effort.",
      "'Diversify to Survive. Concentrate to Get Rich.' Use diversification for defense, protecting against downside and emotional panic.",
      "Proper position sizing, number of holdings, when to sell, and turnover discipline define long-term success — not just stock selection.",
      "Circle of Competence > Broad Ambition: True mastery in investing comes from depth in familiar territories.",
      "Profit booking is completely normal. Not all stocks deserve to be held for the long term—only a few truly earn that tag."
    ]
  },
  {
    title: "Milestones",
    icon: <Target className="w-5 h-5 text-rose-500" />,
    quotes: [
      "The first ₹1 Lakh is purely a test of discipline. It's built not by high returns, but by consistent saving and ruthless expense control.",
      "Reaching ₹10 Lakh shifts the focus from saving to earning. Your income stream must accelerate.",
      "The jump to ₹25 Lakh demands diversification. Move beyond bank deposits.",
      "At ₹50 Lakh, risk management becomes paramount. This corpus is large enough to protect.",
      "The first ₹1 Crore is the hardest. After this, compounding takes over.",
      "Consistency is the currency of compounding. A small, steady SIP executed for twenty years beats a large, sporadic investment every time.",
      "Don't measure your wealth by the size of your portfolio, but by the length of time you can survive without working.",
      "If your goal is wealth creation, the first thing you should aim for is creating 1 crore. The first 1 crore is always the toughest."
    ]
  }
];

const Wisdom = () => {
  let quoteCounter = 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
          <Quote className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Wisdom for the Journey</h2>
      </div>
      <p className="text-lg text-slate-600">
        Insights on psychology, action, and strategy from seasoned investors.
      </p>
      
      <Tabs defaultValue={quoteCategories[0].title} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 h-auto p-1 bg-slate-200/50 rounded-xl gap-1">
          {quoteCategories.map((category) => (
            <TabsTrigger key={category.title} value={category.title} className="text-[10px] md:text-xs py-2 px-1">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <span className="shrink-0">{category.icon}</span>
                <span className="truncate">{category.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {quoteCategories.map((category) => {
          quoteCounter = 0;

          return (
            <TabsContent key={category.title} value={category.title} className="mt-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2 px-1">
                  {category.icon}
                  <h3 className="font-bold text-slate-700 uppercase tracking-widest text-xs">{category.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.quotes.map((quote, j) => {
                    const isHeader = quote.includes('.') && (
                      quote.startsWith('I.') || 
                      quote.startsWith('II.') || 
                      quote.startsWith('III.') || 
                      quote.startsWith('IV.') || 
                      quote.startsWith('V.') || 
                      quote.startsWith('VI.') || 
                      quote.startsWith('VII.') || 
                      quote.startsWith('VIII.') || 
                      quote.startsWith('IX.') || 
                      quote.startsWith('X.') ||
                      quote.startsWith('💡')
                    );
                    
                    const isBullet = quote.startsWith('•');

                    if (isHeader) {
                      return (
                        <div key={j} className="md:col-span-2 p-4 bg-slate-100 rounded-xl border border-slate-200">
                          <p className="font-bold text-slate-900 text-lg not-italic">{quote}</p>
                        </div>
                      );
                    }
                    
                    if (isBullet) {
                        return (
                            <div key={j} className="md:col-span-2 flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-100">
                                <span className="text-sm text-primary/80 font-bold mt-0.5 shrink-0">●</span>
                                <p className="text-sm text-slate-700 leading-relaxed">{quote.substring(1).trim()}</p>
                            </div>
                        );
                    }

                    quoteCounter++;

                    return (
                      <Card key={j} className="border-none shadow-md bg-white/70 backdrop-blur-sm italic relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary/10 group-hover:bg-primary/30 transition-colors" />
                        <CardContent className="p-8 md:p-10">
                          <p className="text-lg md:text-xl text-slate-700 leading-tight relative font-serif">
                            <span className="text-5xl text-primary/5 absolute -top-6 -left-3 select-none pointer-events-none">"</span>
                            <span className="font-bold text-primary/80 mr-2 not-italic">{quoteCounter}.</span>
                            {quote}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Wisdom;