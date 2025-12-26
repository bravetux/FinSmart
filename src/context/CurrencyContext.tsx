"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Currency = {
  code: string;
  symbol: string;
  label: string;
};

const currencies: Currency[] = [
  { code: 'INR', symbol: '₹', label: 'INR' },
  { code: 'USD', symbol: '$', label: 'USD' },
  { code: 'EUR', symbol: '€', label: 'EUR' },
];

interface CurrencyContextType {
  currency: Currency;
  setCurrencyByCode: (code: string) => void;
  currencies: Currency[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>(currencies[0]); // Default INR

  const setCurrencyByCode = (code: string) => {
    const selected = currencies.find(c => c.code === code);
    if (selected) setCurrency(selected);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrencyByCode, currencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};