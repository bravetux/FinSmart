"use client";
import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LineChart } from 'lucide-react';

// Kids Components
import KidsOverview from '@/components/dashboard/kids/KidsOverview';
import MoneySection from '@/components/dashboard/kids/MoneySection';
import PiggyBankSection from '@/components/dashboard/kids/PiggyBankSection';
import BudgetingSection from '@/components/dashboard/kids/BudgetingSection';
import BankSection from '@/components/dashboard/kids/BankSection';
import BankAccounts from '@/components/dashboard/kids/BankAccounts';
import OperatingAccount from '@/components/dashboard/kids/OperatingAccount';
import TransferSection from '@/components/dashboard/kids/TransferSection';
import BankLoans from '@/components/dashboard/kids/BankLoans';
import BankServices from '@/components/dashboard/kids/BankServices';
import SafetySection from '@/components/dashboard/kids/SafetySection';
import EarningEngine from '@/components/dashboard/kids/EarningEngine';
import MoneyTree from '@/components/dashboard/kids/MoneyTree';
import ShrinkingCookie from '@/components/dashboard/kids/ShrinkingCookie';
import CommunityPot from '@/components/dashboard/kids/CommunityPot';
import AdvancedGiving from '@/components/dashboard/kids/AdvancedGiving';
import CreditReputation from '@/components/dashboard/kids/CreditReputation';
import GlobalMoney from '@/components/dashboard/kids/GlobalMoney';
import MintingMoney from '@/components/dashboard/kids/MintingMoney';

// Income Component
import IncomeOverview from '@/components/dashboard/income/IncomeOverview';
import CareerGrowth from '@/components/dashboard/income/CareerGrowth';
import SideHustles from '@/components/dashboard/income/SideHustles';
import PassiveIncome from '@/components/dashboard/income/PassiveIncome';
import IncomeOptimization from '@/components/dashboard/income/IncomeOptimization';
import Freelancing from '@/components/dashboard/income/Freelancing';
import Entrepreneurship from '@/components/dashboard/income/Entrepreneurship';
import IncomeProtection from '@/components/dashboard/income/IncomeProtection';
import ExpenseManagement from '@/components/dashboard/income/ExpenseManagement';
import WealthMindset from '@/components/dashboard/income/WealthMindset';

// Mutual Fund Components
import Overview from '@/components/dashboard/mf/Overview';
import HowItWorks from '@/components/dashboard/mf/HowItWorks';
import NAVExplained from '@/components/dashboard/mf/NAVExplained';
import DirectVsRegular from '@/components/dashboard/mf/DirectVsRegular';
import TypesOfEquityFunds from '@/components/dashboard/mf/TypesOfEquityFunds';
import SIP from '@/components/dashboard/mf/SIP';
import Lumpsum from '@/components/dashboard/mf/Lumpsum';
import SIPandLumpsum from '@/components/dashboard/mf/SIPandLumpsum';
import SWP from '@/components/dashboard/mf/SWP';
import STP from '@/components/dashboard/mf/STP';
import DebtFunds from '@/components/dashboard/mf/DebtFunds';
import HybridFunds from '@/components/dashboard/mf/HybridFunds';
import GoalBasedFunds from '@/components/dashboard/mf/GoalBasedFunds';
import RiskBasedFunds from '@/components/dashboard/mf/RiskBasedFunds';
import StructureBasedFunds from '@/components/dashboard/mf/StructureBasedFunds';
import FundSelection from '@/components/dashboard/mf/FundSelection';
import ExpenseRatio from '@/components/dashboard/mf/ExpenseRatio';
import FundManager from '@/components/dashboard/mf/FundManager';
import FundHouse from '@/components/dashboard/mf/FundHouse';
import IndexFunds from '@/components/dashboard/mf/IndexFunds';
import ETF from '@/components/dashboard/mf/ETF';
import ActiveVsPassive from '@/components/dashboard/mf/ActiveVsPassive';
import PortfolioConstruction from '@/components/dashboard/mf/PortfolioConstruction';
import Diversification from '@/components/dashboard/mf/Diversification';
import Rebalancing from '@/components/dashboard/mf/Rebalancing';
import PortfolioReview from '@/components/dashboard/mf/PortfolioReview';
import MFExitStrategy from '@/components/dashboard/mf/ExitStrategy';
import CommonMistakes from '@/components/dashboard/mf/CommonMistakes';
import RiskManagement from '@/components/dashboard/mf/RiskManagement';
import RedFlags from '@/components/dashboard/mf/RedFlags';
import Taxation from '@/components/dashboard/mf/Taxation';
import ELSS from '@/components/dashboard/mf/ELSS';
import TaxOptimization from '@/components/dashboard/mf/TaxOptimization';
import FundMetrics from '@/components/dashboard/mf/FundMetrics';
import PassiveInvesting from '@/components/dashboard/mf/PassiveInvesting';

// Equity Components
import EquityOverview from '@/components/dashboard/equity/EquityOverview';
import EquityLaws from '@/components/dashboard/equity/EquityLaws';
import FundamentalAnalysis from '@/components/dashboard/equity/FundamentalAnalysis';
import TechnicalAnalysis from '@/components/dashboard/equity/TechnicalAnalysis';
import IPOs from '@/components/dashboard/equity/IPOs';
import MacroAnalysis from '@/components/dashboard/equity/MacroAnalysis';
import MoatAnalysis from '@/components/dashboard/equity/MoatAnalysis';
import PricingPower from '@/components/dashboard/equity/PricingPower';
import FaceValueStockSplit from '@/components/dashboard/equity/FaceValueStockSplit';
import BeyondValuation from '@/components/dashboard/equity/BeyondValuation';
import SectorCompetition from '@/components/dashboard/equity/SectorCompetition';
import CompanyDebt from '@/components/dashboard/equity/CompanyDebt';
import Valuation from '@/components/dashboard/equity/Valuation';
import ValueInvesting from '@/components/dashboard/equity/ValueInvesting';
import QualityAnalysis from '@/components/dashboard/equity/QualityAnalysis';
import Scrips from '@/components/dashboard/equity/Scrips';
import PortfolioManagement from '@/components/dashboard/equity/PortfolioManagement';
import Derivatives from '@/components/dashboard/equity/Derivatives';
import OrderTypes from '@/components/dashboard/equity/OrderTypes';
import CorporateActions from '@/components/dashboard/equity/CorporateActions';
import MarketCycles from '@/components/dashboard/equity/MarketCycles';
import BehavioralFinance from '@/components/dashboard/equity/BehavioralFinance';
import ResearchTools from '@/components/dashboard/equity/ResearchTools';
import TaxStrategy from '@/components/dashboard/equity/TaxStrategy';
import IndexInvesting from '@/components/dashboard/equity/IndexInvesting';
import ExitStrategy from '@/components/dashboard/equity/ExitStrategy';

// Gold Components
import GoldOverview from '@/components/dashboard/gold/GoldOverview';
import PhysicalGold from '@/components/dashboard/gold/PhysicalGold';
import GoldETF from '@/components/dashboard/gold/GoldETF';
import DigitalGold from '@/components/dashboard/gold/DigitalGold';
import GoldTaxation from '@/components/dashboard/gold/GoldTaxation';
import DigitalGoldPlatforms from '@/components/dashboard/gold/DigitalGoldPlatforms';

// Real Estate Components
import RealEstateOverview from '@/components/dashboard/real-estate/RealEstateOverview';
import InvestmentTypes from '@/components/dashboard/real-estate/InvestmentTypes';
import ResidentialVsCommercial from '@/components/dashboard/real-estate/ResidentialVsCommercial';
import LocationAnalysis from '@/components/dashboard/real-estate/LocationAnalysis';
import PropertyValuation from '@/components/dashboard/real-estate/PropertyValuation';
import LegalDueDiligence from '@/components/dashboard/real-estate/LegalDueDiligence';
import DocumentCheck from '@/components/dashboard/real-estate/DocumentCheck';
import BuilderResearch from '@/components/dashboard/real-estate/BuilderResearch';
import MarketResearch from '@/components/dashboard/real-estate/MarketResearch';
import HomeLoanBasics from '@/components/dashboard/real-estate/HomeLoanBasics';
import EMIPlanning from '@/components/dashboard/real-estate/EMIPlanning';
import LoanEligibility from '@/components/dashboard/real-estate/LoanEligibility';
import RentalHouseReturns from '@/components/dashboard/real-estate/RentalHouseReturns';
import ROIAnalysis from '@/components/dashboard/real-estate/ROIAnalysis';
import RentalYield from '@/components/dashboard/real-estate/RentalYield';
import AppreciationFactors from '@/components/dashboard/real-estate/AppreciationFactors';
import REExitStrategy from '@/components/dashboard/real-estate/ExitStrategy';
import REITsFractional from '@/components/dashboard/real-estate/REITsFractional';
import CommercialRealEstate from '@/components/dashboard/real-estate/CommercialRealEstate';
import PlotsUnderConstruction from '@/components/dashboard/real-estate/PlotsUnderConstruction';
import RECommonMistakes from '@/components/dashboard/real-estate/CommonMistakes';
import RERedFlags from '@/components/dashboard/real-estate/RedFlags';
import RiskMitigation from '@/components/dashboard/real-estate/RiskMitigation';
import HiddenCosts from '@/components/dashboard/real-estate/HiddenCosts';
import RealEstateTaxation from '@/components/dashboard/real-estate/RealEstateTaxation';

// Bonds Components
import BondsOverview from '@/components/dashboard/bonds/BondsOverview';
import BondBasics from '@/components/dashboard/bonds/BondBasics';
import TypesOfBonds from '@/components/dashboard/bonds/TypesOfBonds';
import GovernmentBonds from '@/components/dashboard/bonds/GovernmentBonds';
import CorporateBonds from '@/components/dashboard/bonds/CorporateBonds';
import HowToBuyBonds from '@/components/dashboard/bonds/HowToBuyBonds';
import BondSelection from '@/components/dashboard/bonds/BondSelection';
import BondRatings from '@/components/dashboard/bonds/BondRatings';
import BondImportance from '@/components/dashboard/bonds/BondImportance';
import BondResearch from '@/components/dashboard/bonds/BondResearch';
import YieldCalculations from '@/components/dashboard/bonds/YieldCalculations';
import ThingsToConsider from '@/components/dashboard/bonds/ThingsToConsider';
import InterestRateRisk from '@/components/dashboard/bonds/InterestRateRisk';
import CreditRisk from '@/components/dashboard/bonds/CreditRisk';
import BondRisks from '@/components/dashboard/bonds/BondRisks';
import BondsCommonMistakes from '@/components/dashboard/bonds/CommonMistakesBonds';
import BondLaddering from '@/components/dashboard/bonds/BondLaddering';
import BondPortfolio from '@/components/dashboard/bonds/BondPortfolio';
import BondVsDebtFunds from '@/components/dashboard/bonds/BondVsDebtFunds';
import BondPlatforms from '@/components/dashboard/bonds/BondPlatforms';
import BondTaxation from '@/components/dashboard/bonds/BondTaxation';

// Loans Components
import LoansOverview from '@/components/dashboard/loans/LoansOverview';

// Insurance Components
import HealthInsurance from '@/components/dashboard/insurance/HealthInsurance';
import TermInsurance from '@/components/dashboard/insurance/TermInsurance';

// Diversification: PMS / AIF / SIF / Bitcoin / Overseas
import PMS from '@/components/dashboard/diversification/PMS';
import AIF from '@/components/dashboard/diversification/AIF';
import SIF from '@/components/dashboard/diversification/SIF';
import Bitcoin from '@/components/dashboard/diversification/Bitcoin';
import Overseas from '@/components/dashboard/diversification/Overseas';


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('kids-overview');

  const renderContent = () => {
    switch (activeSection) {
      // Kids
      case 'kids-overview':
        return <KidsOverview />;
      case 'kids-money':
        return <MoneySection />;
      case 'kids-piggy-bank':
        return <PiggyBankSection />;
      case 'kids-budgeting':
        return <BudgetingSection />;
      case 'kids-bank':
        return <BankSection />;
      case 'kids-bank-accounts':
        return <BankAccounts />;
      case 'kids-bank-operating':
        return <OperatingAccount />;
      case 'kids-bank-transfers':
        return <TransferSection />;
      case 'kids-bank-loans':
        return <BankLoans />;
      case 'kids-bank-services':
        return <BankServices />;
      case 'kids-safety':
        return <SafetySection />;
      case 'kids-earning':
        return <EarningEngine />;
      case 'kids-investing':
        return <MoneyTree />;
      case 'kids-inflation':
        return <ShrinkingCookie />;
      case 'kids-taxes':
        return <CommunityPot />;
      case 'kids-giving':
        return <AdvancedGiving />;
      case 'kids-credit':
        return <CreditReputation />;
      case 'kids-global':
        return <GlobalMoney />;
      case 'kids-minting-money':
        return <MintingMoney />;
      
      // Income
      case 'income-overview':
        return <IncomeOverview />;
      case 'income-career':
        return <CareerGrowth />;
      case 'income-optimization':
        return <IncomeOptimization />;
      case 'income-expenses':
        return <ExpenseManagement />;
      case 'income-side-hustles':
        return <SideHustles />;
      case 'income-freelancing':
        return <Freelancing />;
      case 'income-passive':
        return <PassiveIncome />;
      case 'income-entrepreneurship':
        return <Entrepreneurship />;
      case 'income-protection':
        return <IncomeProtection />;
      case 'income-mindset':
        return <WealthMindset />;
        
      // Insurance
      case 'insurance-health':
        return <HealthInsurance />;
      case 'insurance-term':
        return <TermInsurance />;

      // Mutual Funds - Foundations
      case 'mf-overview':
        return <Overview />;
      case 'mf-how-it-works':
        return <HowItWorks />;
      case 'mf-nav':
        return <NAVExplained />;
      case 'mf-direct-regular':
        return <DirectVsRegular />;
        
      // Mutual Funds - Types
      case 'mf-equity-types':
        return <TypesOfEquityFunds />;
      case 'mf-debt-types':
        return <DebtFunds />;
      case 'mf-hybrid-types':
        return <HybridFunds />;
      case 'mf-goal-types':
        return <GoalBasedFunds />;
      case 'mf-risk-types':
        return <RiskBasedFunds />;
      case 'mf-structure-types':
        return <StructureBasedFunds />;
        
      // Mutual Funds - Investment Options
      case 'mf-sip':
        return <SIP />;
      case 'mf-lumpsum':
        return <Lumpsum />;
      case 'mf-combined':
        return <SIPandLumpsum />;
      case 'mf-swp':
        return <SWP />;
      case 'mf-stp':
        return <STP />;
        
      // Mutual Funds - Selection & Analysis
      case 'mf-selection':
        return <FundSelection />;
      case 'mf-metrics':
        return <FundMetrics />;
      case 'mf-expense-ratio':
        return <ExpenseRatio />;
      case 'mf-fund-manager':
        return <FundManager />;
      case 'mf-fund-house':
        return <FundHouse />;
        
      // Mutual Funds - Passive Investing
      case 'mf-passive':
        return <PassiveInvesting />;
      case 'mf-index-funds':
        return <IndexFunds />;
      case 'mf-etf':
        return <ETF />;
      case 'mf-active-passive':
        return <ActiveVsPassive />;
        
      // Mutual Funds - Portfolio Management
      case 'mf-portfolio':
        return <PortfolioConstruction />;
      case 'mf-diversification':
        return <Diversification />;
      case 'mf-rebalancing':
        return <Rebalancing />;
      case 'mf-review':
        return <PortfolioReview />;
      case 'mf-exit-strategy':
        return <MFExitStrategy />;
        
      // Mutual Funds - Risks & Mistakes
      case 'mf-mistakes':
        return <CommonMistakes />;
      case 'mf-risk-management':
        return <RiskManagement />;
      case 'mf-red-flags':
        return <RedFlags />;
        
      // Mutual Funds - Taxation
      case 'mf-taxation':
        return <Taxation />;
      case 'mf-elss':
        return <ELSS />;
      case 'mf-tax-optimization':
        return <TaxOptimization />;
        
      // Equity
      case 'equity-overview':
        return <EquityOverview />;
      case 'equity-laws':
        return <EquityLaws />;
      case 'equity-scrips':
        return <Scrips />;
      case 'equity-macro':
        return <MacroAnalysis />;
      case 'equity-competition':
        return <SectorCompetition />;
      case 'equity-debt':
        return <CompanyDebt />;
      case 'equity-valuation':
        return <Valuation />;
      case 'equity-value-investing':
        return <ValueInvesting />;
      case 'equity-fundamental':
        return <FundamentalAnalysis />;
      case 'equity-moat':
        return <MoatAnalysis />;
      case 'equity-pricing-power':
        return <PricingPower />;
      case 'equity-face-value':
        return <FaceValueStockSplit />;
      case 'equity-beyond-valuation':
        return <BeyondValuation />;
      case 'equity-technical':
        return <TechnicalAnalysis />;
      case 'equity-ipo':
        return <IPOs />;
      case 'equity-quality':
        return <QualityAnalysis />;
      case 'equity-portfolio-management':
        return <PortfolioManagement />;
      case 'equity-derivatives':
        return <Derivatives />;
      case 'equity-order-types':
        return <OrderTypes />;
      case 'equity-corporate-actions':
        return <CorporateActions />;
      case 'equity-market-cycles':
        return <MarketCycles />;
      case 'equity-behavioral-finance':
        return <BehavioralFinance />;
      case 'equity-research-tools':
        return <ResearchTools />;
      case 'equity-tax-strategy':
        return <TaxStrategy />;
      case 'equity-index-investing':
        return <IndexInvesting />;
      case 'equity-exit-strategy':
        return <ExitStrategy />;
        
      // Gold
      case 'gold-overview':
        return <GoldOverview />;
      case 'gold-physical':
        return <PhysicalGold />;
      case 'gold-etf':
        return <GoldETF />;
      case 'gold-digital':
        return <DigitalGold />;
      case 'gold-taxation':
        return <GoldTaxation />;
      case 'gold-platforms':
        return <DigitalGoldPlatforms />;
        
      // Real Estate
      case 're-overview':
        return <RealEstateOverview />;
      case 're-investment-types':
        return <InvestmentTypes />;
      case 're-residential-commercial':
        return <ResidentialVsCommercial />;
      case 're-location-analysis':
        return <LocationAnalysis />;
      case 're-property-valuation':
        return <PropertyValuation />;
      case 're-legal-diligence':
        return <LegalDueDiligence />;
      case 're-documents':
        return <DocumentCheck />;
      case 're-builder-research':
        return <BuilderResearch />;
      case 're-market-research':
        return <MarketResearch />;
      case 're-home-loan-basics':
        return <HomeLoanBasics />;
      case 're-emi-planning':
        return <EMIPlanning />;
      case 're-loan-eligibility':
        return <LoanEligibility />;
      case 're-rental-returns':
        return <RentalHouseReturns />;
      case 're-roi-analysis':
        return <ROIAnalysis />;
      case 're-rental-yield':
        return <RentalYield />;
      case 're-appreciation-factors':
        return <AppreciationFactors />;
      case 're-exit-strategy':
        return <REExitStrategy />;
      case 're-reits-fractional':
        return <REITsFractional />;
      case 're-commercial':
        return <CommercialRealEstate />;
      case 're-plots-construction':
        return <PlotsUnderConstruction />;
      case 're-common-mistakes':
        return <RECommonMistakes />;
      case 're-red-flags':
        return <RERedFlags />;
      case 're-risk-mitigation':
        return <RiskMitigation />;
      case 're-hidden-costs':
        return <HiddenCosts />;
      case 're-taxation':
        return <RealEstateTaxation />;
        
      // Bonds
      case 'bonds-overview':
        return <BondsOverview />;
      case 'bonds-basics':
        return <BondBasics />;
      case 'bonds-types':
        return <TypesOfBonds />;
      case 'bonds-government':
        return <GovernmentBonds />;
      case 'bonds-corporate':
        return <CorporateBonds />;
      case 'bonds-how-to-buy':
        return <HowToBuyBonds />;
      case 'bonds-selection':
        return <BondSelection />;
      case 'bonds-ratings':
        return <BondRatings />;
      case 'bonds-importance':
        return <BondImportance />;
      case 'bonds-research':
        return <BondResearch />;
      case 'bonds-yield':
        return <YieldCalculations />;
      case 'bonds-consider':
        return <ThingsToConsider />;
      case 'bonds-interest-risk':
        return <InterestRateRisk />;
      case 'bonds-credit-risk':
        return <CreditRisk />;
      case 'bonds-risks':
        return <BondRisks />;
      case 'bonds-mistakes':
        return <BondsCommonMistakes />;
      case 'bonds-laddering':
        return <BondLaddering />;
      case 'bonds-portfolio':
        return <BondPortfolio />;
      case 'bonds-vs-debt-funds':
        return <BondVsDebtFunds />;
      case 'bonds-platforms':
        return <BondPlatforms />;
      case 'bonds-taxation':
        return <BondTaxation />;

      // Loans
      case 'loans-overview':
        return <LoansOverview />;

      // Diversification
      case 'pms':
        return <PMS />;
      case 'aif':
        return <AIF />;
      case 'sif':
        return <SIF />;
      case 'bitcoin':
        return <Bitcoin />;
      case 'overseas':
        return <Overseas />;
        
      default:
        return (
          <div className="grid grid-cols-1 gap-6">
            <Card className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-white border-dashed border-2">
              <div className="bg-slate-50 p-4 rounded-full mb-4">
                <LineChart className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Module coming soon</h3>
              <p className="text-slate-500 max-w-sm mb-6">
                We are currently building the educational content for this section. Stay tuned!
              </p>
              <Button variant="outline" onClick={() => setActiveSection('mf-equity-types')}>
                Back to Basics
              </Button>
            </Card>
          </div>
        );
    }
  };

  const getSectionTitle = (id: string) => {
    const titles: Record<string, string> = {
      'kids-overview': 'Kids Wealth Adventure',
      'kids-money': 'The Magic of Money',
      'kids-piggy-bank': 'Piggy Bank Power',
      'kids-budgeting': 'The Budgeting Adventure',
      'kids-bank': 'How Banks Work',
      'kids-bank-accounts': 'The Account Store',
      'kids-bank-operating': 'Operating Your Account',
      'kids-bank-transfers': 'Money Transfer Station',
      'kids-bank-loans': 'The Loan Counter',
      'kids-bank-services': 'Digital Magic & More',
      'kids-safety': 'Safety Shield',
      'kids-earning': 'The Earning Engine',
      'kids-investing': 'The Money Tree (Investing)',
      'kids-inflation': 'The Shrinking Cookie (Inflation)',
      'kids-taxes': 'The Community Pot (Taxes)',
      'kids-giving': 'Advanced Giving',
      'kids-credit': 'Credit Reputation',
      'kids-global': 'Global Money',
      'kids-minting-money': 'Minting Money (Money Multiplier)',
      
      'income-overview': 'Income Roadmap',
      
      'insurance-health': 'Health Insurance',
      'insurance-term': 'Term Insurance',

      'mf-equity-types': 'Equity Funds',
      'mf-debt-types': 'Debt Funds',
      'mf-hybrid-types': 'Hybrid Funds',
      'mf-goal-types': 'Goal Based Funds',
      'mf-risk-types': 'Risk Based Funds',
      'mf-structure-types': 'Structure Based Funds',
      'mf-sip': 'SIP (Systematic Investment Plan)',
      'mf-lumpsum': 'Lumpsum Investment',
      'mf-combined': 'Hybrid Strategy (SIP + Lumpsum)',
      'mf-swp': 'SWP (Systematic Withdrawal Plan)',
      'mf-stp': 'STP (Systematic Transfer Plan)',
      'mf-taxation': 'Taxation of Mutual Funds',
      'mf-metrics': 'Fund Metrics & Selection',
      'mf-passive': 'Passive Investing (Index/ETF)',
      
      'equity-overview': 'Equity Market Basics',
      'equity-laws': 'Equity Laws',
      'equity-scrips': 'Tracked Scrips',
      'equity-macro': 'Economic & Macro Analysis',
      'equity-competition': 'Sector Competition (5 Forces)',
      'equity-debt': 'Corporate Debt Analysis',
      'equity-valuation': 'Valuation Fundamentals',
      'equity-value-investing': 'Value Investing',
      'equity-fundamental': 'Fundamental Analysis',
      'equity-moat': 'Moat Analysis',
      'equity-pricing-power': 'Pricing Power',
      'equity-face-value': 'Face Value & Stock Splits',
      'equity-beyond-valuation': 'Beyond Price Valuation',
      'equity-technical': 'Technical Analysis Basics',
      'equity-ipo': 'IPOs (Going Public)',
      'equity-quality': 'Quality Analysis',
      'equity-portfolio-management': 'Portfolio Management & Risk',
      'equity-derivatives': 'Futures & Options (F&O) Basics',
      'equity-order-types': 'Order Types & Trading Mechanics',
      'equity-corporate-actions': 'Corporate Actions (Bonus, Rights, Buyback)',
      'equity-market-cycles': 'Market Cycles & Timing',
      'equity-behavioral-finance': 'Behavioral Finance & Psychology',
      'equity-research-tools': 'Research Tools & Resources',
      'equity-tax-strategy': 'Tax Planning & Optimization',
      'equity-index-investing': 'Index Funds & ETFs',
      'equity-exit-strategy': 'Exit Strategy & Profit Booking',
        
      'gold-overview': 'Gold Investment Overview',
      'gold-physical': 'Physical Gold',
      'gold-etf': 'Gold ETFs & Funds',
      'gold-digital': 'Digital Gold (SGB)',
      'gold-taxation': 'Gold Taxation',
      'gold-platforms': 'Digital Gold Platforms',
      're-overview': 'Real Estate Overview',
      're-documents': 'Document Verification Checklist',
      're-reits-fractional': 'REITs & Fractional Ownership',
      're-rental-yield': 'Rental Yield Calculation',
      're-taxation': 'Real Estate Taxation',
      're-rental-returns': 'Rent vs. Buy Analysis',
      
      'bonds-overview': 'Corporate Bond Markets',
      'bonds-ratings': 'CRISIL Rating Scale',
      'bonds-importance': 'Credit Ratings',
      'bonds-consider': 'Things to Consider',

      'loans-overview': 'Loan Overview',

      // Diversification
      'pms': 'Portfolio Management Services (PMS)',
      'aif': 'Alternative Investment Funds (AIF)',
      'sif': 'Specialized Investment Fund (SIF)',
      'bitcoin': 'Bitcoin & Crypto',
      'overseas': 'Overseas Investment from India'
    };
    return titles[id] || 'Financial Dashboard';
  };

  const getModuleLabel = (id: string) => {
    if (id.startsWith('kids-')) return "Early Foundations";
    if (id.startsWith('income-')) return "Income Generation";
    if (id.startsWith('insurance-')) return "Insurance & Protection";
    if (id.startsWith('mf-')) return "Mutual Funds Masterclass";
    if (id.startsWith('equity-')) return "Equity Markets";
    if (id.startsWith('gold-')) return "Precious Metals Module";
    if (id.startsWith('re-')) return "Real Estate Module";
    if (id.startsWith('bonds-')) return "Fixed Income Module";
    if (id.startsWith('loans-')) return "Debt Management";
    if (['pms','aif','sif','bitcoin','overseas'].includes(id)) return "Diversification";
    return "Wealth Management";
  }

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      <DashboardSidebar currentSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
              {getModuleLabel(activeSection)}
            </div>
            <h1 className="text-3xl font-bold text-slate-900">{getSectionTitle(activeSection)}</h1>
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;