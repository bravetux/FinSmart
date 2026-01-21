"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  AlertTriangle, 
  ShieldAlert, 
  TrendingDown, 
  XCircle,
  AlertCircle,
  Shield,
  FileText,
  CheckCircle,
  Target,
  Lightbulb,
  Building2,
  Ban
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/context/CurrencyContext";

const CreditRisk = () => {
  const { currency } = useCurrency();
  const formatCurrency = (amount: number) => `${currency.symbol}${amount.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="h-12 w-12" />
            <Badge variant="secondary" className="text-sm">Risk Assessment</Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">Credit & Default Risk</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Understand credit risk, the danger of bond defaults, and how to protect your investments. 
            Learn from real Indian case studies and implement effective risk mitigation strategies.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        
        {/* What is Credit Risk */}
        <Card className="border-l-4 border-l-red-500 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">What is Credit Risk?</CardTitle>
            </div>
            <CardDescription>Understanding the risk of issuer default</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                <strong>Credit risk</strong> (or default risk) is the risk that the bond issuer will be unable 
                to make interest payments or repay the principal when the bond matures. Unlike government securities, 
                corporate bonds carry significant credit risk.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                Types of Credit Events
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
                  <h5 className="font-bold mb-2">Default</h5>
                  <p className="text-sm">
                    Complete failure to pay interest or principal. Investors may lose most/all of their investment.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-bold mb-2">Rating Downgrade</h5>
                  <p className="text-sm">
                    Credit rating agencies lower the bond's rating. Bond price falls even without default.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h5 className="font-bold mb-2">Delayed Payment</h5>
                  <p className="text-sm">
                    Issuer delays interest or principal payment. Not full default but signals trouble.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">Credit Risk Spectrum</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-40 font-medium">Government Bonds</div>
                  <div className="flex-1 bg-green-200 dark:bg-green-900/40 h-8 rounded flex items-center px-3">
                    <span className="text-sm font-medium">Lowest Risk (AAA equivalent)</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-40 font-medium">AAA Corporate</div>
                  <div className="flex-1 bg-blue-200 dark:bg-blue-900/40 h-8 rounded flex items-center px-3">
                    <span className="text-sm font-medium">Very Low Risk</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-40 font-medium">AA Corporate</div>
                  <div className="flex-1 bg-teal-200 dark:bg-teal-900/40 h-8 rounded flex items-center px-3">
                    <span className="text-sm font-medium">Low Risk</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-40 font-medium">A Corporate</div>
                  <div className="flex-1 bg-yellow-200 dark:bg-yellow-900/40 h-8 rounded flex items-center px-3">
                    <span className="text-sm font-medium">Moderate Risk</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-40 font-medium">BBB Corporate</div>
                  <div className="flex-1 bg-orange-200 dark:bg-orange-900/40 h-8 rounded flex items-center px-3">
                    <span className="text-sm font-medium">Moderate-High Risk</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-40 font-medium">BB & Below</div>
                  <div className="flex-1 bg-red-200 dark:bg-red-900/40 h-8 rounded flex items-center px-3">
                    <span className="text-sm font-medium">High Risk (Junk Bonds)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rating Downgrades */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingDown className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Rating Downgrades & Impact</CardTitle>
            </div>
            <CardDescription>How rating changes affect bond values</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Credit rating agencies (CRISIL, ICRA, CARE) continuously monitor bond issuers. 
                A downgrade signals deteriorating financial health and immediately impacts bond prices.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Impact of Rating Changes</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-orange-100 dark:bg-orange-900/30">
                      <th className="border p-3 text-left">Rating Change</th>
                      <th className="border p-3 text-left">Immediate Impact</th>
                      <th className="border p-3 text-left">Typical Price Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">
                        <div className="font-semibold text-red-600">AAA → AA</div>
                        <div className="text-sm">Investment Grade</div>
                      </td>
                      <td className="border p-3 text-sm">
                        Moderate concern, yield spread widens
                      </td>
                      <td className="border p-3">
                        <span className="text-red-600 font-bold">-2% to -4%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">
                        <div className="font-semibold text-red-600">AA → A</div>
                        <div className="text-sm">Investment Grade</div>
                      </td>
                      <td className="border p-3 text-sm">
                        Increased scrutiny, some selling pressure
                      </td>
                      <td className="border p-3">
                        <span className="text-red-600 font-bold">-4% to -7%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">
                        <div className="font-semibold text-red-600">A → BBB</div>
                        <div className="text-sm">Still Investment Grade</div>
                      </td>
                      <td className="border p-3 text-sm">
                        Heightened concern, institutional selling
                      </td>
                      <td className="border p-3">
                        <span className="text-red-600 font-bold">-6% to -10%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">
                        <div className="font-semibold text-red-700">BBB → BB</div>
                        <div className="text-sm text-red-600">Fallen Angel</div>
                      </td>
                      <td className="border p-3 text-sm">
                        Major red flag, forced institutional selling
                      </td>
                      <td className="border p-3">
                        <span className="text-red-700 font-bold">-15% to -30%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="border p-3">
                        <div className="font-semibold text-red-800">BB → D</div>
                        <div className="text-sm text-red-700">Default</div>
                      </td>
                      <td className="border p-3 text-sm">
                        Default or imminent default announced
                      </td>
                      <td className="border p-3">
                        <span className="text-red-800 font-bold">-50% to -90%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-red-600" />
                Real Example: Yes Bank Bonds (2020)
              </h4>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">Initial Position (2018):</p>
                  <ul className="space-y-1 ml-6 text-sm">
                    <li>• Yes Bank AT1 Bonds: {formatCurrency(100000)} face value</li>
                    <li>• Coupon: 10% per annum</li>
                    <li>• Rating: AA+ (Investment Grade)</li>
                    <li>• Trading at par (100% of face value)</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">September 2019: First Downgrade</p>
                  <ul className="space-y-1 ml-6 text-sm">
                    <li>• Rating cut to A+ due to asset quality concerns</li>
                    <li>• Bond price fell to ~{formatCurrency(85000)} (15% loss)</li>
                    <li>• Many investors ignored warning signs</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <p className="font-medium mb-2">March 2020: RBI Reconstruction</p>
                  <ul className="space-y-1 ml-6 text-sm">
                    <li>• AT1 bonds written down to ZERO</li>
                    <li>• Bondholders lost 100% of investment</li>
                    <li>• {formatCurrency(100000)} → {formatCurrency(0)}</li>
                    <li className="text-red-700 font-bold">• Total Loss: {formatCurrency(100000)}</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Default Scenarios */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Ban className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Default Scenarios & Recovery Rates</CardTitle>
            </div>
            <CardDescription>What happens when a bond defaults</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                When a company defaults on its bonds, the recovery process begins. 
                Recovery rates vary significantly based on bond seniority and company assets.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Bond Seniority & Recovery Rates</h4>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Secured Bonds (Senior Secured)</span>
                    <Badge className="bg-green-600">Highest Priority</Badge>
                  </div>
                  <p className="text-sm mb-2">Backed by specific collateral</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-green-200 dark:bg-green-900/40 h-6 rounded"></div>
                    <span className="text-sm font-bold">60-80% recovery</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Senior Unsecured Bonds</span>
                    <Badge variant="outline">Medium Priority</Badge>
                  </div>
                  <p className="text-sm mb-2">No specific collateral, but senior claim</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-yellow-200 dark:bg-yellow-900/40 h-6 rounded" style={{width: '60%'}}></div>
                    <span className="text-sm font-bold">30-50% recovery</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Subordinated Bonds</span>
                    <Badge variant="outline">Lower Priority</Badge>
                  </div>
                  <p className="text-sm mb-2">Paid after senior bondholders</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-orange-200 dark:bg-orange-900/40 h-6 rounded" style={{width: '35%'}}></div>
                    <span className="text-sm font-bold">10-30% recovery</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">AT1 Bonds / Preference Shares</span>
                    <Badge className="bg-red-600">Lowest Priority</Badge>
                  </div>
                  <p className="text-sm mb-2">Can be written down in crisis</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-red-200 dark:bg-red-900/40 h-6 rounded" style={{width: '15%'}}></div>
                    <span className="text-sm font-bold">0-15% recovery</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
              <h4 className="font-semibold text-lg mb-4">Default Timeline Example</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Missed Payment (Day 0)</p>
                    <p className="text-sm text-muted-foreground">
                      Company misses interest payment. Grace period of 30 days typically provided.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-200 dark:bg-yellow-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Technical Default (Day 30)</p>
                    <p className="text-sm text-muted-foreground">
                      If payment not made, bond enters technical default. Rating cut to D (Default).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-200 dark:bg-orange-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Legal Action (Day 60-90)</p>
                    <p className="text-sm text-muted-foreground">
                      Bondholders can initiate insolvency proceedings under IBC (Insolvency and Bankruptcy Code).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-200 dark:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Resolution Process (1-3 years)</p>
                    <p className="text-sm text-muted-foreground">
                      NCLT (National Company Law Tribunal) oversees resolution. Assets sold, claims prioritized.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-200 dark:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <p className="font-medium">Recovery (Final)</p>
                    <p className="text-sm text-muted-foreground">
                      Bondholders receive recovery amount based on seniority. Process can take 2-5 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indian Case Studies */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Indian Bond Default Case Studies</CardTitle>
            </div>
            <CardDescription>Learning from major defaults in India</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">
                  IL&FS Crisis (2018)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">What Happened:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• Infrastructure finance company with {formatCurrency(9100000000000)} debt</li>
                      <li>• Defaulted on commercial paper and bonds in September 2018</li>
                      <li>• Created systemic crisis in debt markets</li>
                      <li>• Many bonds rated AA+ just months before default</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h5 className="font-semibold mb-3">Investor Impact:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• Bond prices fell 70-80% overnight</li>
                      <li>• Debt mutual funds suffered heavy losses</li>
                      <li>• Recovery process ongoing (50-60% expected for senior bonds)</li>
                      <li>• Subordinated bondholders facing 80-90% haircuts</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">Lessons Learned:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Don't rely solely on ratings - they lag reality</li>
                      <li>✓ Understand business model and cash flow generation</li>
                      <li>✓ Diversify across issuers, never concentrate</li>
                      <li>✓ Infrastructure companies carry rollover risk</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">
                  DHFL Default (2019)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">What Happened:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• Dewan Housing Finance Corporation, major housing finance company</li>
                      <li>• Defaulted on bonds and NCDs worth {formatCurrency(8300000000000)}</li>
                      <li>• Rating downgraded from AA to D in 2019</li>
                      <li>• Piramal Group acquired assets under IBC process</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h5 className="font-semibold mb-3">Investor Impact:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• Fixed deposit holders received ~35-40% recovery</li>
                      <li>• Secured bondholders: 40-45% recovery</li>
                      <li>• Unsecured bondholders: 25-30% recovery</li>
                      <li>• Subordinated debt holders: 10-15% recovery</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">Lessons Learned:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Company FDs and bonds carry real default risk</li>
                      <li>✓ Understand bond seniority before investing</li>
                      <li>✓ High yields often indicate high risk</li>
                      <li>✓ Resolution process is lengthy (2-3 years)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">
                  Yes Bank AT1 Bonds (2020)
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">What Happened:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• Yes Bank faced severe capital crisis in March 2020</li>
                      <li>• RBI imposed moratorium and reconstruction scheme</li>
                      <li>• All AT1 (Additional Tier 1) bonds written down to zero</li>
                      <li>• AT1 bonds worth {formatCurrency(8400000000000)} wiped out</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                    <h5 className="font-semibold mb-3">Investor Impact:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• AT1 bondholders received ZERO recovery</li>
                      <li>• Many investors didn't understand AT1 bond risks</li>
                      <li>• Equity shareholders diluted 75% but survived</li>
                      <li>• Perpetual bonds (no maturity) = highest risk</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h5 className="font-semibold mb-3">Lessons Learned:</h5>
                    <ul className="space-y-2 text-sm">
                      <li>✓ AT1 bonds are extremely risky despite being from banks</li>
                      <li>✓ Perpetual bonds can be written down permanently</li>
                      <li>✓ Read offering document - understand trigger events</li>
                      <li>✓ Don't assume "too big to fail" protection</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Risk Mitigation Strategies */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Credit Risk Mitigation Strategies</CardTitle>
            </div>
            <CardDescription>How to protect yourself from defaults</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Best Practices
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">1</Badge>
                    <div>
                      <p className="font-medium">Stick to High Ratings</p>
                      <p className="text-sm text-muted-foreground">
                        Only invest in AAA, AA+, AA rated bonds. Avoid anything below AA-.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">2</Badge>
                    <div>
                      <p className="font-medium">Diversify Across Issuers</p>
                      <p className="text-sm text-muted-foreground">
                        Never put more than 5-10% in any single issuer's bonds.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">3</Badge>
                    <div>
                      <p className="font-medium">Prefer Government Bonds</p>
                      <p className="text-sm text-muted-foreground">
                        G-Secs and SDLs have zero credit risk. Accept slightly lower yields.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">4</Badge>
                    <div>
                      <p className="font-medium">Monitor Regularly</p>
                      <p className="text-sm text-muted-foreground">
                        Check ratings quarterly. Exit if downgraded below your threshold.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600 mt-1">5</Badge>
                    <div>
                      <p className="font-medium">Understand Bond Type</p>
                      <p className="text-sm text-muted-foreground">
                        Secured bonds safer than unsecured. Avoid subordinated and AT1 bonds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Red Flags to Avoid
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">✗</Badge>
                    <div>
                      <p className="font-medium">Unusually High Yields</p>
                      <p className="text-sm text-muted-foreground">
                        If yield is 2-3% above AAA bonds, there's hidden risk.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">✗</Badge>
                    <div>
                      <p className="font-medium">Recent Downgrades</p>
                      <p className="text-sm text-muted-foreground">
                        Bond downgraded in last 6 months? High risk of further cuts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">✗</Badge>
                    <div>
                      <p className="font-medium">Weak Business Model</p>
                      <p className="text-sm text-muted-foreground">
                        Real estate, NBFCs without strong parentage = high risk.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">✗</Badge>
                    <div>
                      <p className="font-medium">High Debt Levels</p>
                      <p className="text-sm text-muted-foreground">
                        Debt-to-equity ratio above 2-3x indicates stress.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 mt-1">✗</Badge>
                    <div>
                      <p className="font-medium">Perpetual Bonds</p>
                      <p className="text-sm text-muted-foreground">
                        No maturity date = can be written down anytime (like Yes Bank AT1).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Due Diligence Checklist</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-medium mb-2">Before Buying:</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Check current credit rating (AAA/AA+ preferred)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Review rating history (no recent downgrades)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Verify bond type (secured vs unsecured)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Check company financials (profitability, debt levels)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Compare yield with similar-rated bonds</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium mb-2">After Buying (Monitor):</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Quarterly rating review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Check company quarterly results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Monitor news for negative developments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Track bond price movements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span>Set exit trigger (e.g., downgrade below AA-)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-l-4 border-l-red-500 shadow-lg bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-red-600" />
              <CardTitle className="text-2xl">Key Takeaways</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">1</Badge>
                  <p className="text-sm">Credit risk is real - bonds can default, causing total loss</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">2</Badge>
                  <p className="text-sm">Rating downgrades happen fast and cause immediate price drops</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">3</Badge>
                  <p className="text-sm">Stick to AAA/AA+ ratings for safety - don't chase high yields</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-600 mt-1">4</Badge>
                  <p className="text-sm">Recovery in defaults is low and takes years (avg 30-40%)</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-rose-600 mt-1">5</Badge>
                  <p className="text-sm">IL&FS, DHFL, Yes Bank - learn from these Indian disasters</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-rose-600 mt-1">6</Badge>
                  <p className="text-sm">Diversify across issuers - never concentrate in one bond</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-rose-600 mt-1">7</Badge>
                  <p className="text-sm">Government bonds are the safest - zero credit risk</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-rose-600 mt-1">8</Badge>
                  <p className="text-sm">Monitor regularly and exit quickly if rating drops</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default CreditRisk;
