"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  Users,
  Lock,
  Smartphone,
  BookOpen,
  Shield,
  ArrowRight,
  ClipboardList,
} from "lucide-react";

const termDefinitions = [
  {
    term: "Nomination",
    color: "bg-amber-50 border-amber-200",
    badgeColor: "bg-amber-100 text-amber-800",
    icon: <Users className="w-5 h-5 text-amber-700" />,
    definition: "A temporary caretaker designation. The nominee receives your assets temporarily to distribute to legal heirs.",
    keyPoint: "Nominee does NOT become the owner. They are a trustee, not a beneficiary.",
    critical: true,
  },
  {
    term: "Legal Heir",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-100 text-blue-800",
    icon: <BookOpen className="w-5 h-5 text-blue-700" />,
    definition: "The person(s) who legally inherit per Indian succession laws — Hindu Succession Act, Muslim Personal Law, etc. Depends on your religion.",
    keyPoint: "Legal heirs are determined by law, not by who you trust. They may not be who you intended.",
    critical: false,
  },
  {
    term: "Will",
    color: "bg-emerald-50 border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-800",
    icon: <FileText className="w-5 h-5 text-emerald-700" />,
    definition: "A legal document that overrides succession laws and states your exact wishes. What you write in a Will is final.",
    keyPoint: "A Will is the only instrument that puts YOU in complete control of your legacy.",
    critical: false,
  },
];

const noWillConsequences = [
  "Assets divided per succession laws — which may not match your intentions at all",
  "Family members can challenge each other in court, creating lasting rifts",
  "Courts can take years to resolve disputes — assets may be frozen during this period",
  "Your nominee gets the assets temporarily but must hand them to legal heirs per court order",
  "If you have minor children, a judge — not you — decides their guardian",
];

const masterDocSections = [
  {
    title: "Bank Accounts",
    icon: <Shield className="w-4 h-4 text-blue-600" />,
    items: ["Bank name and branch", "Account number", "Type (savings/current/FD)", "Nominee name"],
  },
  {
    title: "Investments",
    icon: <ArrowRight className="w-4 h-4 text-emerald-600" />,
    items: ["Mutual fund folio numbers", "Demat/trading account details", "PPF account number", "NPS PRAN number"],
  },
  {
    title: "Insurance Policies",
    icon: <Shield className="w-4 h-4 text-purple-600" />,
    items: ["Policy number and insurer", "Nominee name", "Maturity/claim amount", "Renewal date"],
  },
  {
    title: "Property & Locker",
    icon: <Lock className="w-4 h-4 text-orange-600" />,
    items: ["Property address and documents location", "Title deed location", "Bank locker number and branch", "Locker key location"],
  },
];

const jointAccountTypes = [
  {
    type: "Either or Survivor",
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
    desc: "Either person can operate the account independently. When one dies, the survivor automatically gets full control. Highly recommended for married couples.",
    best: "Best for: Spouses — ensures smooth access without court involvement",
  },
  {
    type: "Former or Survivor",
    color: "bg-slate-50 border-slate-200",
    badge: "bg-slate-100 text-slate-700",
    desc: "Only the primary holder can operate during their lifetime. The secondary holder gains access only after the primary holder passes away.",
    best: "Best for: Parent-child accounts where the parent manages while alive",
  },
];

const willFacts = [
  { label: "Handwritten Will valid?", value: "Yes", note: "Called a holographic will. Must be entirely in your handwriting and signed." },
  { label: "Witnesses required?", value: "2 Adults", note: "Must be adults who do NOT benefit from the will — not your spouse or children." },
  { label: "Registration mandatory?", value: "No", note: "But highly recommended. A registered will is harder to challenge or forge." },
  { label: "Registration cost?", value: "~₹500", note: "At your local Sub-Registrar's office. One of the best ₹500 you'll ever spend." },
  { label: "Can I update my will?", value: "Yes, anytime", note: "Use a 'codicil' to amend or simply write a new will — the latest dated will is valid." },
];

const actionChecklist = [
  { item: "List all your financial accounts and who the current nominees are", urgent: true },
  { item: "Update any outdated nominations — especially if still listing parents after marriage", urgent: true },
  { item: "Create your Master Document and store it safely", urgent: false },
  { item: "Write a basic will — handwritten and signed is legally valid. Start today.", urgent: false },
  { item: "Get your will registered at the Sub-Registrar office (costs ~₹500)", urgent: false },
  { item: "Tell one trusted person exactly where your important documents are stored", urgent: false },
  { item: "Set a calendar reminder to review and update every 2–3 years", urgent: false },
];

const EstatePlanning = () => {
  return (
    <div className="space-y-10 pb-12 animate-in fade-in duration-500">

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-700 to-slate-800 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <FileText className="w-4 h-4" />
            <span>Estate Planning</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Your Financial Legacy: Wills & Nominations
          </h2>
          <p className="text-indigo-100 text-lg max-w-3xl">
            You've spent years building wealth. Don't let it become a family dispute or a government problem when you're gone. Estate planning takes 1 day and protects your lifetime of work.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      {/* Three Terms Explained */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-blue-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">The Three Terms Most Indians Confuse</h3>
        </div>
        <div className="space-y-4">
          {termDefinitions.map((item, i) => (
            <Card key={i} className={`border shadow-sm ${item.color}`}>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-sm border border-white/60">
                    {item.icon}
                  </div>
                  <Badge className={`${item.badgeColor} border-0 text-sm font-semibold`}>{item.term}</Badge>
                </div>
                <p className="text-slate-700">{item.definition}</p>
                <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-slate-100">
                  <ArrowRight className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-semibold text-slate-800">{item.keyPoint}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Critical clarification box */}
        <div className="p-5 bg-amber-50 border border-amber-300 rounded-xl">
          <p className="text-sm font-bold text-amber-900 mb-1">The Critical Difference</p>
          <p className="text-sm text-amber-800">
            Your bank nomination says your wife gets your FD. But if you die without a will and have children, the law may split it between your wife and children under the Hindu Succession Act. A <strong>Will overrides this</strong> and gives you complete control.
          </p>
        </div>
      </section>

      {/* What Happens Without a Will */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">What Happens Without a Will</h3>
        </div>
        <Card className="border-red-200 bg-red-50/50 shadow-sm">
          <CardContent className="p-6 space-y-3">
            <p className="text-slate-700 mb-4">These are not hypotheticals. They happen in Indian courts every day.</p>
            {noWillConsequences.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-red-100">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* What is a Will */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <FileText className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">What Is a Will? (The Facts)</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {willFacts.map((fact, i) => (
            <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-1">
              <div className="flex justify-between items-start gap-2">
                <p className="text-sm text-slate-500">{fact.label}</p>
                <Badge className="bg-indigo-100 text-indigo-800 border-0 shrink-0">{fact.value}</Badge>
              </div>
              <p className="text-xs text-slate-600">{fact.note}</p>
            </div>
          ))}
        </div>
        <div className="p-5 bg-indigo-50 border border-indigo-200 rounded-xl space-y-2">
          <p className="font-bold text-indigo-900">A Valid Will Requires:</p>
          <ul className="space-y-1">
            {[
              "Your full legal name and address",
              "A clear list of your assets and who gets each one",
              "Name of your executor (the trusted person who carries out your wishes)",
              "Guardianship wishes for minor children if applicable",
              "Your signature + signatures of 2 adult witnesses who do not inherit",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-indigo-800">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Master Document */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
            <ClipboardList className="w-5 h-5 text-slate-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">The Master Document</h3>
        </div>
        <p className="text-slate-600">
          Create one comprehensive document that lists everything your family would need if you were gone. Store one copy with your spouse or trusted family member, one with your CA or lawyer.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {masterDocSections.map((section, i) => (
            <Card key={i} className="border-slate-200 shadow-sm">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <p className="font-bold text-slate-800">{section.title}</p>
                </div>
                <ul className="space-y-1">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Digital Assets */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-violet-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Digital Assets — The Modern Problem</h3>
        </div>
        <Card className="border-violet-200 bg-violet-50/40 shadow-sm">
          <CardContent className="p-6 space-y-4">
            <p className="text-slate-700">
              Many families lose lakhs in dormant digital wallets, UPI balances, and crypto holdings simply because they cannot access the deceased's phone or accounts.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-700">Assets that may hold money:</p>
                {["UPI apps (PhonePe, GPay, Paytm wallets)", "Mutual fund / trading apps (Groww, Zerodha)", "Crypto wallets or exchange accounts", "PayPal or international payment accounts"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-violet-100 text-sm text-slate-600">
                    <Smartphone className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-sm font-bold text-slate-700">What to document:</p>
                {["List all apps that hold money or investments", "Store PINs/passwords in a sealed envelope or secure password manager", "Recovery email and phone number details", "Instructions kept separately from the device itself"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 bg-white rounded-lg border border-violet-100 text-sm text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Nomination Best Practices */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
            <Users className="w-5 h-5 text-orange-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Nomination Best Practices</h3>
        </div>
        <div className="space-y-3">
          {[
            { title: "Audit all nominations NOW", desc: "Bank accounts, insurance policies, EPF, PPF, mutual funds, NPS — check every single one." },
            { title: "Update after major life events", desc: "Marriage, birth of a child, divorce, or death of a nominee — each event should trigger an immediate review." },
            { title: "The most common mistake", desc: "Millions of working Indians still have their parents listed as nominees years after marriage. This creates serious legal complications." },
            { title: "Name a backup nominee", desc: "Always name a secondary/contingent nominee in case your primary nominee predeceases you." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl">
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                <p className="text-sm text-slate-600 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Joint Accounts */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
            <Lock className="w-5 h-5 text-teal-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Joint Accounts — Understanding the Options</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {jointAccountTypes.map((account, i) => (
            <Card key={i} className={`border shadow-sm ${account.color}`}>
              <CardContent className="p-5 space-y-3">
                <Badge className={`${account.badge} border-0`}>{account.type}</Badge>
                <p className="text-sm text-slate-700">{account.desc}</p>
                <p className="text-xs font-semibold text-slate-500">{account.best}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          "Either or Survivor" joint accounts with your spouse are one of the simplest tools for ensuring smooth asset transfer without any court involvement or probate process.
        </p>
      </section>

      {/* Action Checklist */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Your 7-Step Action Checklist: Do These in the Next 30 Days</h3>
        </div>
        <Card className="border-emerald-200 bg-emerald-50/40 shadow-sm">
          <CardContent className="p-6 space-y-3">
            {actionChecklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-emerald-100">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${item.urgent ? "bg-red-500 border-2 border-red-500" : "border-2 border-emerald-400"}`}>
                  <span className={`text-xs font-bold ${item.urgent ? "text-white" : "text-emerald-600"}`}>{i + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-700">{item.item}</p>
                  {item.urgent && (
                    <Badge className="mt-1 bg-red-100 text-red-700 border-0 text-xs">Do this first</Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="p-4 bg-slate-900 text-white rounded-xl text-center">
          <p className="text-sm text-slate-300">A will doesn't mean you're planning to die soon.</p>
          <p className="font-bold mt-1">It means you're planning to protect the people you love.</p>
        </div>
      </section>

    </div>
  );
};

export default EstatePlanning;
