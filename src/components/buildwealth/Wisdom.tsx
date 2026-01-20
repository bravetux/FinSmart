"use client";

import React from 'react';
import { Brain, Timer, ShieldCheck, EyeOff, Heart, Target, Quote, DollarSign, Lightbulb } from 'lucide-react';
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
    title: "Golden Rules",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    quotes: [
        "💡 The Golden Rules of Investing: InvestSmart principles for long-term success.",
        "I. Introduction",
        "Whether you’re taking your first steps or are already an experienced investor, following these golden rules could really help you to InvestSmart.",
        "Investing can help you meet your financial goals and the better the investment decisions you make, the more chance you have of succeeding.",
        "While nobody can make the best investment decision every single time, following these golden rules could help you to get more from your investments over the long term.",
        "II. Rule 1: If you can’t afford to invest yet, don’t",
        "Starting early is beneficial, but it is crucial not to begin investing until you can truly afford to. Sort out your day-to-day money matters first.",
        "Here are some steps to take before you begin investing:",
        "• Keep an emergency fund with instant access to cope with unexpected expenses without dipping into investments.",
        "• Clear high-interest debts, and never invest using a credit card, as interest charges will likely exceed investment returns.",
        "• Getting your everyday money matters sorted allows you to determine what you can afford to invest regularly, increasing your chances of meeting goals.",
        "III. Rule 2: Set your investment expectations",
        "Before you invest, define your goals and set realistic expectations for returns and risk tolerance.",
        "• The greater the potential returns, the higher the level of risk. Ensure you understand the risks and are willing and able to accept them.",
        "• Be comfortable with the value of your investment fluctuating. Assess whether you could cope financially if your investment made a loss.",
        "• Target a realistic rate of return. Be wary of products promising unrealistic returns, as they often come with hidden risks or could be scams.",
        "• Compare costs and charges to ensure you are not paying for services you don't want or need.",
        "IV. Rule 3: Understand your investment",
        "Make sure you understand what you’re actually investing in before you hand over your hard-earned money. Your future finances are linked to how your investments perform so it’s important you know the key information before you invest.",
        "• Make sure you know things like the level of risk you’re taking, the factors that might affect how your investment performs and how easy it is to get your money out when you need to.",
        "• Before you invest, take time to do some research of your own – and never invest in a rush or in anything you don’t fully understand.",
        "• Some investments are professionally managed and can help you to align your long-term investment goals.",
        "• It’s important to check whether the firm you are dealing with is authorised by us to provide the service or product you are buying. You may not be protected if you use the services of a firm that is not authorised.",
        "V. Rule 4: Diversify",
        "In an uncertain world, putting all your investment eggs in the same basket can be risky.",
        "Spreading your money across a range of different companies, asset types and geographical areas will reduce your reliance on any one to perform. So if some of your investments perform poorly and make a loss, your other investments might not.",
        "Therefore, many people choose to invest in a fund – where an investment manager will choose which assets to invest in on your behalf.",
        "VI. Rule 5: Take a long-term view",
        "Investing should not be viewed as a short-term solution to a problem. Investing over a timeframe of at least five years can give your investment more opportunity to ride out any short-term performance dips.",
        "• Look beyond the short-term. Trying to time the market increases your risk of buying or selling at the wrong time. By investing over a longer timeframe, you’re more likely to benefit from trends that can support positive performance over a matter of years.",
        "• Investing monthly over five or more years can smooth out returns. A regular monthly investment buys more during months when prices have dipped, and buys less when prices are higher.",
        "• Think about how to access your money if the unexpected happens. Check for any notice periods or fees that you’d need to pay just in case.",
        "VII. Rule 6: Keep on top of your investments",
        "It's a good idea to periodically review the performance of your investments. Choices that were right for you two years ago may not necessarily be the best for you now.",
        "• Take stock of your investment performance. Reviewing what you hold can help you keep on top of the overall level of risk you’re exposing your money to.",
        "• Your immediate personal circumstances may have changed. Regularly reviewing how and where you’re investing can help to ensure your investments still suit your personal circumstances.",
        "• Your investment objectives evolve over time. What you’re looking to achieve with your investments can change over the years."
    ]
  },
  {
    title: "Psychology",
    icon: <Brain className="w-5 h-5 text-purple-500" />,
    quotes: [
      "I. The Investor's Temperament",
      "Personally, after spending several years in this field, I've realized one important truth: More than just stock analysis or picking the 'right' stocks, what truly determines success in investing is patience—and a deep understanding of reverse human psychology. Successful investing often requires us to: Practice delayed gratification, Avoid impulsive action, Stay still when the market moves, Resist the urge to buy without a bargain, Avoid booking profits too early, even when potential remains. All of this runs counter to our natural instincts.",
      "In the stock market and investing, it's more about understanding ourselves than just focusing on stocks or prices. Understanding our own psychology and personality is very important. Investing is more about how we behave than just picking stocks. Psychology plays a big role, and most people only understand this after many years of investing.",
      "II. Action & Momentum",
      "Motivation increases after you begin. Make starting easy.",
      "Stress and worry tend to be higher before you act. Without action, all you can do is worry. Once you begin, fear shrinks as you start to influence the outcome.",
      "The feeling of progress—however small—is one of the best feelings there is.",
      "III. Mindset & Calmness",
      "Normalize staying calm and patient during market corrections or even when stocks are rising. Having a settled and steady mindset at all times will take us a long way in the stock market.",
      "Reflection requires stillness. Don’t confuse activity with effectiveness.",
      "Do not fear what you can address. What should worry you is resisting addressing it.",
      "Pause. Close your eyes. Breathe for 60 seconds.",
      "IV. Dealing with Regret & Mistakes",
      "A lot of regret among us who missed the opportunity to book profits. But in the stock market, regrets like these are extremely common. What I've realized is that it's important to normalize regrets and view them as part of the learning journey. Over time, the weight of such mistakes and regrets reduces. Learning how to navigate regret is key to long-term success.",
      "Replaying a bad situation only makes it worse. The damage is done. Make the best next choice. Next-play mentality.",
      "V. Letting Go (Mental Burden)",
      "Peace requires letting go—there will always be more to want.",
      "What are you still carrying that isn’t yours?",
    ]
  },
  {
    title: "Patience",
    icon: <Timer className="w-5 h-5 text-amber-500" />,
    quotes: [
      "Patience > Precision: Great returns aren't born from perfect timing but from steadfast discipline. Sit tight; compounding rewards the waiting.",
      "Our favourite holding period is forever.",
      "Whatever age you are today, your future self would love to be it. Today is a good moment. In a few years, you’ll wish you had used it better—or thank yourself for doing so.",
      "You can’t speed time or success—only control the next action.",
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
      "Before you worry about how to win the game, figure out whether the game is worth winning.",
      "Deal with the difficult while it is yet easy. Deal with the great while it is yet small.",
      "Greatness often requires eliminating what you do well to focus on what you can do exceptionally.",
      "Arrange whatever pieces come your way.",
      "Improvement depends on starting fast, learning fast, and staying in the game.",
      "Investing is like a seat belt: without conviction, every bump feels dangerous.",
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
    title: "Principles",
    icon: <Lightbulb className="w-5 h-5 text-amber-600" />,
    quotes: [
      "Chase your desired lifestyle, not your desired title. People are blinded by status and labels. Once you release the need for a specific title, there is almost always an easier path to living your preferred lifestyle.",
      "Earning more money increases freedom. Spending less than you earn reduces stress.",
      "Every great advance comes from dreams and attempts. Devise more dreams. Make more attempts.",
      "Work hard on what comes easily.",
      "You can control the slope of your success, not your starting point.",
      "You want two things: Simplicity (no wasted effort) and Compounding (long runways that feed each other).",
      "Opportunity favors active hands, not limp ones. Engage.",
      "Momentum magnifies strengths and hides weaknesses. Lack of it does the opposite.",
      "Optimize for lifestyle, not title.",
      "Ideas multiply when shared; apples don’t.",
      "The master knows what not to do.",
      "Well begun is half done.",
      "Even bad luck contains opportunity—if you live like it does.",
      "Simplify, then add lightness.",
      "Growth comes by adding or shedding. Choose wisely.",
      "Find what feels effortless. Then apply maximum effort.",
      "Always play the hand you have, not the one you wish you had.",
      "“An investment in knowledge pays the best interest.” — Benjamin Franklin",
      "The more things you have, the more things you must manage. Simplicity isn’t just cheaper—it’s easier.",
      "If you don’t actively choose a better way, life will choose a worse one for you. The default is distraction, not improvement.",
      "Maintain a margin of safety. If your life only handles expected challenges, it will collapse under unexpected ones. Be stronger than you need to be.",
      "Boredom is a filter. Common ideas come before it. Uncommon ideas come after it.",
      "Your success depends on the risks you take. Your survival depends on the risks you avoid.",
      "Don’t sacrifice peace of mind for a piece of luxury.",
      "Each day, spend time on two things: Building something that pays off years from now; Appreciating something happening right now.",
      "You don’t need to predict everything. Just master the next step and keep moving forward.",
      "You are richer than 93% of people—not in money, but in time. Most who ever lived would trade everything they had for today.",
      "If you do not bend, you will break. The adaptable prevail—determined, but flexible."
    ]
  },
  {
    title: "Clarity",
    icon: <EyeOff className="w-5 h-5 text-indigo-500" />,
    quotes: [
      "A dull truth will be ignored. An exciting lie won’t. Make truth compelling.",
      "Like a hike, clarity comes after you start walking.",
      "In the short run, markets vote. In the long run, they weigh.",
      "Sentiment moves prices faster than fundamentals.",
      "I see that people are not very excited in this market because it looks confusing and choppy. But six to nine months from now, people may regret not taking positions and will hope for a market like this again. Many stocks are slowly falling, and some SME, micro-cap, and small-cap stocks still have 1-2x potential. The issue is that many macro events, like the tariff issue, are still not settled and are under discussion. So, it's better to focus on buying some of your favorite stocks for the long term, because I don't think we will get these price opportunities again. As always, once the stocks start moving up, we regret not buying. So just focus on value.",
      "Instead of getting distracted by macro events or global conflicts, investors should focus on how sectors are performing, how companies are growing, their promoter quality, and long term fundamentals. As Graham said, 'Mr. Market' comes daily with random moods sometimes panicking, sometimes euphoric. Right now, that irrational figure looks like Donald Trump aka Mad man . this 'orange man' keeps showing up and creating short term volatility, which can offer great opportunities. So rather than panicking and selling out of fear, we should try to make the most of these opportunities.",
      "If you look closely, most multibagger stocks 2x, 5x, 10x returns were captured by people who didn't get distracted by macro events, wars, global conflicts, and other issues. These kinds of events keep happening, but the people who truly benefit are the ones who ignore the noise and stay focused on business fundamentals.",
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
      "What looks like a talent gap is often a focus gap. Talent is staying focused.",
      "Take care of the minutes; the hours will take care of themselves.",
      "Decide the type of person you want to be. Prove it to yourself with small wins.",
      "Distance and time separate relationships. When it matters, meet face-to-face. Solve it early.",
      "Inspiration does not visit the lazy.",
      "You learn to work smart only after working hard—and making mistakes.",
      "Good habits stockpile ease. Bad habits postpone pain.",
      "When you stop competing and comparing, respect follows.",
      "The best things in life have no finish line. Practice them daily.",
      "New lifestyles create new results. Habits beat goals.",
      "Excellence looks easy only after you try it yourself.",
      "Your biological age is the number of days you've lived. Your psychological age is the number of thoughts you've entertained. Your sociological age is the number of contributions you've made.",
      "Consistency enlarges ability.",
      "Even mistakes are important. Without making mistakes, we really don't grow. The key is to ensure that the mistakes are small and manageable—and that we actually learn from them. In fact, the earlier we make those mistakes, the better."
    ]
  },
  {
    title: "Milestones",
    icon: <Target className="w-5 h-5 text-rose-500" />,
    quotes: [
      "I. The First Crore (The Hardest Step)",
      "The first ₹1 Crore is always the toughest. Going from zero to ₹1 crore is like climbing the first 100 steps—it takes maximum effort, time, hard work, and often sleepless nights.",
      "If your goal is wealth creation, the first thing you should aim for is creating 1 crore. Reaching the first crore is not just about money. It tells our hard work, discipline, execution skills, and ability to get things done.",
      "To achieve ₹1 Crore, you need a plan, not a prediction. Define your savings rate, your target asset allocation, and automate the execution. Remove emotion from the process.",
      "II. Step-by-Step Accumulation",
      "Your savings rate is more important than your investment return until you hit the ₹50 Lakh mark. Focus on increasing your income and widening the gap between earning and spending.",
      "The first ₹1 Lakh is purely a test of discipline. It's built not by high returns, but by consistent saving and ruthless expense control. This is where the habit is forged.",
      "Reaching ₹10 Lakh shifts the focus from saving to earning. Your income stream must accelerate, and your savings rate must be non-negotiable. This milestone is powered by hustle.",
      "The jump to ₹25 Lakh demands diversification. Move beyond bank deposits; introduce systematic investments (SIPs) into equity and debt funds. Your money must now work harder than you do.",
      "At ₹50 Lakh, risk management becomes paramount. This corpus is large enough to protect. Ensure you have adequate insurance and a clear asset allocation strategy to weather market storms.",
      "III. Compounding & Momentum",
      "The first ₹1 Crore is the hardest. After this, compounding takes over. The journey from ₹1 Crore to ₹5 Crores is often faster than the journey from zero to one. This is the reward for patience.",
      "Once you cross that first crore, the next targets ₹1 crore to ₹5 crores are like five more steps. And ₹1 crore to ₹10 crores is like ten more steps. It gets easier as you move ahead because you now have experience, knowledge, and a system in place. Your first crore is always the toughest. But once you achieve that with discipline, structure, and planning, the rest becomes more about momentum.",
      "Consistency is the currency of compounding. A small, steady SIP executed for twenty years beats a large, sporadic investment every time.",
      "IV. Advanced Wealth Management",
      "Once you hit ₹1 Crore, the game changes from accumulation to preservation and strategic growth. Start exploring advanced tools like PMS or AIFs for specialized diversification.",
      "Don't measure your wealth by the size of your portfolio, but by the length of time you can survive without working. That is true financial freedom.",
      "Having a goal oriented and step-by-step approach for wealth creation is very important. Why? Because the more structured and planned your journey is, the easier it becomes to implement the right strategies. For example, if your goal is to reach ₹10 crores or ₹25 crores, you must have a proper plan in place. Without a clear plan, it's very difficult to track your expenses, savings, and investments effectively. The first major milestone should be reaching your first ₹1 crore. Why? Because going from zero to ₹1 crore is like climbing the first 100 steps it takes maximum effort, time, hard work, and often sleepless nights. Once you cross that first crore, the next targets ₹1 crore to ₹5 crores are like five more steps. And ₹1 crore to ₹10 crores is like ten more steps. It gets easier as you move ahead because you now have experience, knowledge, and a system in place. Your first crore is always the toughest. But once you achieve that with discipline, structure, and planning, the rest becomes more about momentum.",
      "If your goal is wealth creation, the first thing you should aim for is creating 1 crore. The first 1 crore is always the toughest. Creating 10 to 25 lakhs nowadays is relatively easy through a side hustle, job, or business, but reaching 1 crore requires discipline. You should not get distracted by buying phones, cars, bikes, and other luxuries. Focus on achieving that first 1 crore, ideally before 30, because once you do, creating the next 2, 5, or 10 crores becomes much easier. It's all about the process. Reaching the first crore is not just about money. It tells our hard work, discipline, execution skills, and ability to get things done.",
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
        <h2 className="2xl font-bold text-slate-900">Wisdom for the Journey</h2>
      </div>
      <p className="text-lg text-slate-600">
        Insights on psychology, patience, and strategy from seasoned investors and life thinkers.
      </p>
      
      <Tabs defaultValue={quoteCategories[0].title} className="w-full">
        <div className="overflow-x-auto pb-2">
          <TabsList className="flex w-max min-w-full md:grid md:grid-cols-5 h-auto p-1 bg-slate-200/50 rounded-xl gap-1">
            {quoteCategories.map((category) => (
              <TabsTrigger key={category.title} value={category.title} className="text-[10px] md:text-xs py-2 whitespace-nowrap">
                <div className="flex items-center gap-1 md:gap-2">
                  {category.icon}
                  {category.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

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