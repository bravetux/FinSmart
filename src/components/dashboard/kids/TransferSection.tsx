"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRightLeft, 
  Smartphone, 
  Zap, 
  Clock, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Info,
  PenTool,
  Building2,
  Landmark,
  FileText
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TransferSection = () => {
  const [selectedTransfer, setSelectedTransfer] = useState<any>(null);

  const transferMethods = [
    {
      id: 'upi',
      title: "UPI",
      label: "The Magic Scanner",
      icon: <Smartphone className="w-8 h-8" />,
      color: "blue",
      details: "The fastest way to pay using your phone. Just scan a code and the money moves instantly!",
      needs: ["A Smartphone", "A UPI App (like BHIM or Google Pay)", "Your secret UPI PIN"],
      when: "Small daily things like buying ice cream, toys, or paying back a friend.",
      limits: "Usually up to ₹1 Lakh per day.",
      dos: ["Verify the shop's name on the screen before paying.", "Keep your UPI PIN secret.", "Check your balance after paying."],
      donts: ["Don't share your PIN with anyone.", "Don't scan a code to 'receive' money (you only scan to pay!)."],
      safety: "RBI says: Never enter your PIN if you are expecting to receive money. PIN is only for sending money!"
    },
    {
      id: 'imps',
      title: "IMPS",
      label: "Instant Rocket Pay",
      icon: <Zap className="w-8 h-8" />,
      color: "purple",
      details: "A quick way to send money to someone else's bank account instantly, 24/7.",
      needs: ["Mobile/Netbanking", "Receiver's Account Number", "IFSC Code"],
      when: "When you need to send money urgently to someone you know.",
      limits: "Usually up to ₹5 Lakhs (depends on your bank).",
      dos: ["Double-check the account number.", "Wait for the 'Success' message."],
      donts: ["Don't use it if you are not in a hurry (use NEFT instead).", "Don't share your login password."],
      safety: "IMPS is real-time. Once sent, it cannot be stopped!"
    },
    {
      id: 'neft',
      title: "NEFT",
      label: "The Steady Traveler",
      icon: <Clock className="w-8 h-8" />,
      color: "emerald",
      details: "Sends money in batches. It's safe and reliable for medium to large amounts.",
      needs: ["Netbanking or Bank Visit", "Receiver's Account Details", "IFSC Code"],
      when: "Paying school fees or sending a birthday gift to a cousin far away.",
      limits: "No specific upper limit, but usually for medium amounts.",
      dos: ["Enter the correct IFSC code (each bank branch has a unique one)."],
      donts: ["Don't expect it to be instant (it might take 30-60 minutes)."],
      safety: "NEFT works in 30-minute cycles. It's one of the safest ways to move money."
    },
    {
      id: 'rtgs',
      title: "RTGS",
      label: "The Heavy Lifter",
      icon: <Building2 className="w-8 h-8" />,
      color: "indigo",
      details: "Used for moving VERY large amounts of money. It's meant for the biggest transactions.",
      needs: ["Bank Visit or Netbanking", "IFSC Code", "Receiver's Full Name"],
      when: "Buying a house or a very big car.",
      limits: "Minimum ₹2 Lakhs (no maximum limit!).",
      dos: ["Fill the form very carefully.", "Get a stamped receipt from the bank."],
      donts: ["Don't use this for small amounts of money."],
      safety: "RTGS is 'Gross' settlement, meaning each transfer is handled individually and immediately."
    },
    {
      id: 'cheque',
      title: "Cheque",
      label: "The Signature Promise",
      icon: <PenTool className="w-8 h-8" />,
      color: "orange",
      details: "A paper promise that tells the bank to pay someone using the money in your account.",
      needs: ["A Cheque Book", "Your Signature", "Receiver's Name"],
      when: "Formal payments where you need a paper record (like school fees).",
      limits: "Limited by how much money you have in your account.",
      dos: ["Write the name and amount clearly.", "Draw two lines on the top corner for safety ('Account Payee')."],
      donts: ["Don't leave empty spaces after the name or numbers.", "Don't sign a blank cheque."],
      safety: "A cheque is a legal document. Always keep your cheque book locked away!"
    },
    {
      id: 'bankers_cheque',
      title: "Banker's Cheque",
      label: "The Bank's Guarantee",
      icon: <Landmark className="w-8 h-8" />,
      color: "rose",
      details: "A special cheque issued by the bank itself. Since the bank makes it, it can never 'bounce'!",
      needs: ["Bank Visit", "Sufficient Balance", "Processing Fee"],
      when: "Local payments for high-value items where the seller wants a 100% guarantee.",
      limits: "No specific limit, as long as you have the money in your account.",
      dos: ["Double check the 'Payable to' name.", "Keep the counter-foil (receipt) for your records."],
      donts: ["Don't lose it! Getting a refund for a lost banker's cheque is a long process."],
      safety: "It's like cash but safer, because it's only payable to a specific person or office."
    },
    {
      id: 'demand_draft',
      title: "Demand Draft (DD)",
      label: "The Super Cheque",
      icon: <FileText className="w-8 h-8" />,
      color: "amber",
      details: "Similar to a banker's cheque, but it can be used to send money to a person in a different city.",
      needs: ["Application Form", "Receiver's City Name", "Fee or Account Debit"],
      when: "Paying college fees or official bills to a person or office in another city.",
      limits: "No upper limit. You can send as much as you have.",
      dos: ["Write the receiver's name exactly as it appears in their bank records.", "Check the city of payment carefully."],
      donts: ["Don't make any scratches or overwriting on the draft."],
      safety: "Demand drafts are very secure because they are prepaid and cannot be cancelled easily by the sender."
    }
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <ArrowRightLeft className="w-4 h-4" />
            <span>Moving Money</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Transfer Station
          </h2>
          <p className="text-blue-50 text-lg max-w-xl">
            How does money get from your pocket to someone else's? Explore the different ways to send your treasure!
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 rounded-full blur-3xl" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transferMethods.map((method) => (
          <Card 
            key={method.id} 
            className="border-none shadow-lg bg-white overflow-hidden group cursor-pointer hover:scale-105 transition-all"
            onClick={() => setSelectedTransfer(method)}
          >
            <div className={cn(
              "h-2",
              method.color === 'blue' && "bg-blue-500",
              method.color === 'purple' && "bg-purple-500",
              method.color === 'emerald' && "bg-emerald-500",
              method.color === 'indigo' && "bg-indigo-500",
              method.color === 'orange' && "bg-orange-500",
              method.color === 'rose' && "bg-rose-500",
              method.color === 'amber' && "bg-amber-500"
            )} />
            <CardHeader className="flex flex-row items-center gap-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                method.color === 'blue' && "bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
                method.color === 'purple' && "bg-purple-50 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
                method.color === 'emerald' && "bg-emerald-50 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white",
                method.color === 'indigo' && "bg-indigo-50 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white",
                method.color === 'orange' && "bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
                method.color === 'rose' && "bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white",
                method.color === 'amber' && "bg-amber-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white"
              )}>
                {method.icon}
              </div>
              <div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <p className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  method.color === 'blue' && "text-blue-600",
                  method.color === 'purple' && "text-purple-600",
                  method.color === 'emerald' && "text-emerald-600",
                  method.color === 'indigo' && "text-indigo-600",
                  method.color === 'orange' && "text-orange-600",
                  method.color === 'rose' && "text-rose-600",
                  method.color === 'amber' && "text-amber-600"
                )}>{method.label}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 line-clamp-2">
                {method.details}
              </p>
              <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Learn the Rules <Info className="w-3 h-3" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedTransfer} onOpenChange={() => setSelectedTransfer(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 bg-slate-100 rounded-2xl text-primary">
                {selectedTransfer?.icon}
              </div>
              <div>
                <DialogTitle className="text-2xl">{selectedTransfer?.title}</DialogTitle>
                <DialogDescription className="font-bold text-primary/60">{selectedTransfer?.label}</DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-8 pt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-amber-500" /> When to use?
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">{selectedTransfer?.when}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4 text-orange-500" /> Limits
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">{selectedTransfer?.limits}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" /> What you need
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedTransfer?.needs.map((need: string, i: number) => (
                  <div key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
                    {need}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Dos
                </h4>
                <ul className="space-y-3">
                  {selectedTransfer?.dos.map((item: string, i: number) => (
                    <li key={i} className="flex gap-2 text-xs text-emerald-800">
                      <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2 text-sm">
                  <XCircle className="w-4 h-4 text-red-500" /> Don'ts
                </h4>
                <ul className="space-y-3">
                  {selectedTransfer?.donts.map((item: string, i: number) => (
                    <li key={i} className="flex gap-2 text-xs text-red-800">
                      <div className="w-1 h-1 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden">
              <h4 className="font-bold mb-3 flex items-center gap-2 relative z-10 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> The Golden Safety Rule
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed relative z-10 italic">
                "{selectedTransfer?.safety}"
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default TransferSection;