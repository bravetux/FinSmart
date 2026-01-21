"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Layers, 
  Building2, 
  Landmark, 
  Factory,
  TrendingUp,
  Shield,
  DollarSign,
  Target,
  AlertCircle,
  CheckCircle,
  Award,
  Briefcase
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const TypesOfBonds = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  const bondTypes = [
    {
      icon: Landmark,
      title: "Government Bonds (G-Sec)",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      description: "Issued by the Central Government, considered the safest bonds with zero default risk.",
      features: [
        "Sovereign guarantee (backed by Government of India)",
        "Yields: 7-7.5% typically",
        "Maturity: 1-40 years",
        "Highly liquid - can be sold easily"
      ],
      examples: ["10-year G-Sec", "7.18% GS 2037", "Floating Rate Bonds 2031"]
    },
    {
      icon: DollarSign,
      title: "Treasury Bills (T-Bills)",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      description: "Short-term government securities with maturity less than 1 year.",
      features: [
        "Ultra-safe (government backed)",
        "Issued at discount to face value",
        "Maturity: 91 days, 182 days, 364 days",
        "No periodic interest - gain is difference between purchase and face value"
      ],
      examples: ["91-day T-Bill at ₹99,000 maturing at ₹1,00,000"]
    },
    {
      icon: Building2,
      title: "State Development Loans (SDL)",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      description: "Bonds issued by state governments for infrastructure and development projects.",
      features: [
        "State government guarantee",
        "Yields: 0.25-1% higher than G-Sec",
        "Less liquid than G-Sec",
        "Tax implications same as G-Sec"
      ],
      examples: ["Maharashtra SDL", "Karnataka SDL", "Tamil Nadu SDL"]
    },
    {
      icon: Factory,
      title: "PSU Bonds",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      description: "Issued by Public Sector Undertakings (government-owned companies).",
      features: [
        "AAA rated (mostly)",
        "Yields: 0.5-1.5% higher than G-Sec",
        "Implicit government backing",
        "Good liquidity for large PSUs"
      ],
      examples: ["NTPC Bonds", "Power Finance Corporation", "REC Bonds", "NHAI Bonds"]
    },
    {
      icon: Briefcase,
      title: "Corporate Bonds",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      description: "Issued by private companies to raise capital for business expansion.",
      features: [
        "Credit rating: AAA to D",
        "Yields: 8-12% (depends on rating)",
        "Higher risk than government bonds",
        "Liquidity varies by company"
      ],
      examples: ["Bajaj Finance Bonds", "HDFC Ltd Bonds", "Tata Motors Bonds"]
    },
    {
      icon: Shield,
      title: "Tax-Free Bonds",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      description: "Interest income is exempt from income tax under Section 10.",
      features: [
        "Interest is 100% tax-free",
        "Issued by PSUs (NHAI, IRFC, PFC, etc.)",
        "Yields: 5-6% (but tax-free)",
        "Long tenure: 10-20 years"
      ],
      examples: ["NHAI Tax-Free Bonds", "IRFC Tax-Free Bonds", "PFC Tax-Free Bonds"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Bond Categories</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Types of Bonds</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Explore the diverse universe of bonds available to Indian investors - from ultra-safe 
            government securities to higher-yielding corporate bonds. Each type serves different 
            investment objectives.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* Bond Types Cards */}
        {bondTypes.map((bond, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${bond.bgColor}`}>
                    <bond.icon className={`h-6 w-6 ${bond.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{bond.title}</CardTitle>
                    <CardDescription className="mt-2 text-base">{bond.description}</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className={`h-5 w-5 ${bond.color}`} />
                    Key Features
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {bond.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-muted-foreground">
                        <span className="text-green-600 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`p-4 rounded-lg ${bond.bgColor}`}>
                  <h5 className="font-semibold mb-2">Examples:</h5>
                  <div className="flex flex-wrap gap-2">
                    {bond.examples.map((example, idx) => (
                      <Badge key={idx} variant="outline">{example}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Inflation-Indexed Bonds */}
        <Card className="shadow-lg border-l-4 border-l-yellow-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
              <CardTitle className="text-2xl">Inflation-Indexed Bonds (IIBs)</CardTitle>
            </div>
            <CardDescription>Protect your purchasing power against inflation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Special government bonds where both principal and interest payments are adjusted 
              for inflation, ensuring your real returns remain positive.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">How It Works</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Principal adjusted based on WPI (Wholesale Price Index)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fixed real coupon rate (e.g., 2.5%) applied to adjusted principal</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>If inflation is 6%, your effective return = 2.5% + 6% = 8.5%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Example Calculation</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Initial Investment:</strong> {formatCurrency(100000)}</p>
                  <p><strong>Coupon Rate:</strong> 2.5% (real rate)</p>
                  <p><strong>Inflation (Year 1):</strong> 6%</p>
                  <hr className="my-2" />
                  <p><strong>Adjusted Principal:</strong> {formatCurrency(106000)}</p>
                  <p><strong>Interest Payment:</strong> {formatCurrency(2650)} (2.5% of ₹1,06,000)</p>
                  <p className="text-green-600 font-semibold">
                    Total Return: 8.5% (beats inflation!)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                Important Note
              </h4>
              <p className="text-muted-foreground">
                Inflation-indexed bonds are not frequently issued in India. When available, they're 
                ideal for long-term investors concerned about inflation eroding their returns. 
                Check RBI Retail Direct for upcoming issues.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Comparison Table */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-purple-600" />
              <CardTitle className="text-2xl">Complete Bond Type Comparison</CardTitle>
            </div>
            <CardDescription>Side-by-side comparison to help you choose the right bond</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
                    <th className="border p-3 text-left font-bold">Bond Type</th>
                    <th className="border p-3 text-left font-bold">Safety</th>
                    <th className="border p-3 text-left font-bold">Typical Yield</th>
                    <th className="border p-3 text-left font-bold">Liquidity</th>
                    <th className="border p-3 text-left font-bold">Min. Investment</th>
                    <th className="border p-3 text-left font-bold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Government Bonds (G-Sec)</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Highest
                      </Badge>
                    </td>
                    <td className="border p-3">7.0-7.5%</td>
                    <td className="border p-3">Excellent</td>
                    <td className="border p-3">{formatCurrency(10000)}</td>
                    <td className="border p-3">Risk-averse, long-term</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Treasury Bills</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Highest
                      </Badge>
                    </td>
                    <td className="border p-3">6.5-7.0%</td>
                    <td className="border p-3">Excellent</td>
                    <td className="border p-3">{formatCurrency(25000)}</td>
                    <td className="border p-3">Short-term parking</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">State Development Loans</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Very High
                      </Badge>
                    </td>
                    <td className="border p-3">7.5-8.0%</td>
                    <td className="border p-3">Moderate</td>
                    <td className="border p-3">{formatCurrency(10000)}</td>
                    <td className="border p-3">Higher yield seekers</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">PSU Bonds (AAA)</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        High
                      </Badge>
                    </td>
                    <td className="border p-3">7.5-8.5%</td>
                    <td className="border p-3">Good</td>
                    <td className="border p-3">{formatCurrency(10000)}</td>
                    <td className="border p-3">Balance of safety & yield</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Corporate Bonds (AAA)</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        High
                      </Badge>
                    </td>
                    <td className="border p-3">8.0-9.5%</td>
                    <td className="border p-3">Moderate</td>
                    <td className="border p-3">{formatCurrency(10000)}</td>
                    <td className="border p-3">Higher returns, quality</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Corporate Bonds (AA/A)</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                        Medium
                      </Badge>
                    </td>
                    <td className="border p-3">9.5-11.0%</td>
                    <td className="border p-3">Low-Moderate</td>
                    <td className="border p-3">{formatCurrency(10000)}</td>
                    <td className="border p-3">Risk-takers, diversified</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Tax-Free Bonds</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        High
                      </Badge>
                    </td>
                    <td className="border p-3">5.0-6.0% (tax-free)</td>
                    <td className="border p-3">Low</td>
                    <td className="border p-3">{formatCurrency(10000)}</td>
                    <td className="border p-3">High tax bracket</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border p-3 font-medium">Inflation-Indexed</td>
                    <td className="border p-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Highest
                      </Badge>
                    </td>
                    <td className="border p-3">Inflation + 2-3%</td>
                    <td className="border p-3">Low</td>
                    <td className="border p-3">{formatCurrency(10000)}</td>
                    <td className="border p-3">Inflation protection</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-green-800 dark:text-green-400">
                  Highest Safety
                </h5>
                <p className="text-sm text-muted-foreground">
                  Suitable for investors who prioritize capital protection over returns
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-blue-800 dark:text-blue-400">
                  High Safety
                </h5>
                <p className="text-sm text-muted-foreground">
                  Good balance of safety and returns for conservative investors
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-400">
                  Medium Safety
                </h5>
                <p className="text-sm text-muted-foreground">
                  Higher returns but requires careful credit analysis and diversification
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tax-Free Bond Detailed Example */}
        <Card className="shadow-lg border-l-4 border-l-indigo-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-indigo-600" />
              <CardTitle className="text-2xl">Tax-Free Bonds: A Deeper Look</CardTitle>
            </div>
            <CardDescription>Understanding the true benefit for high tax bracket investors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Tax-free bonds can be extremely attractive for investors in high tax brackets. 
                Let's see how they compare to regular bonds and FDs.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Tax-Free Bond</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Stated Yield:</strong> 5.5%</p>
                    <p><strong>Tax:</strong> 0% (exempt)</p>
                    <p className="text-green-600 font-semibold text-lg">
                      Effective Yield: 5.5%
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Regular Bond (30% tax)</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Stated Yield:</strong> 8.5%</p>
                    <p><strong>Tax (30%):</strong> 2.55%</p>
                    <p className="text-orange-600 font-semibold text-lg">
                      Effective Yield: 5.95%
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Bank FD (30% tax)</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Stated Yield:</strong> 7.0%</p>
                    <p><strong>Tax (30%):</strong> 2.10%</p>
                    <p className="text-orange-600 font-semibold text-lg">
                      Effective Yield: 4.9%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  Key Consideration
                </h4>
                <p className="text-muted-foreground mb-3">
                  Tax-free bonds are most beneficial if you're in the 30% tax bracket. For lower 
                  tax brackets, regular bonds might offer better post-tax returns despite taxation.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Formula:</strong> Tax-free yield = Taxable yield × (1 - Tax Rate)
                  <br />
                  If tax-free bond yields 5.5%, equivalent taxable yield at 30% tax = 5.5 / 0.7 = 7.86%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-green-500 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Government bonds (G-Sec) offer highest safety but lower yields (7-7.5%)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>PSU and AAA corporate bonds provide 1-2% extra yield with good safety</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Tax-free bonds are attractive for high tax bracket investors (30% slab)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>SDL bonds offer slightly higher yields than G-Sec with state government backing</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Inflation-indexed bonds protect purchasing power in high inflation environments</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Choose bond type based on your risk appetite, tax bracket, and liquidity needs</span>
              </li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default TypesOfBonds;
