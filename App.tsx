
import React, { useState, useEffect } from 'react';
import DevNavigation from './components/DevNavigation';
import Footer from './components/Footer';

// Home Page Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Methodology from './components/Methodology';
import Segments from './components/Segments';
import Solutions from './components/Solutions';
import Contact from './components/Contact';

// Generic AI Agent Landing Page (High Conversion SDR)
import HeroAI from './components/HeroAI';
import SdrExplanation from './components/SdrExplanation';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';

// Niche Specific Components
import HeroAIEstetica from './components/niche/HeroAIEstetica';

// Delivery Page Components
import DeliveryNavbar from './components/delivery/DeliveryNavbar';
import DeliveryHero from './components/delivery/DeliveryHero';
import DeliveryPain from './components/delivery/DeliveryPain';
import DeliverySolution from './components/delivery/DeliverySolution';
import DeliveryFeatures from './components/delivery/DeliveryFeatures';
import DeliveryComparison from './components/delivery/DeliveryComparison';
import DeliveryFAQ from './components/delivery/DeliveryFAQ';
import DeliveryCTA from './components/delivery/DeliveryCTA';

import LegalPage from './components/LegalPage';

export default function App() {
  // Hash-based routing logic
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    const routes: Record<string, string> = {
      '': 'home',
      'agentes-ia': 'ai-generic',
      'estetica': 'ai-estetica',
      'delivery': 'delivery-agent',
      'privacidade': 'privacy',
      'termos': 'terms'
    };
    return routes[hash] || 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash());

  const setPage = (page: string) => {
    const hashes: Record<string, string> = {
      'home': '',
      'ai-generic': 'agentes-ia',
      'ai-estetica': 'estetica',
      'delivery-agent': 'delivery',
      'privacy': 'privacidade',
      'terms': 'termos'
    };
    window.location.hash = hashes[page] || '';
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const colors: Record<string, string> = {
      'home': '#020617',
      'ai-generic': '#050505',
      'ai-estetica': '#050505',
      'delivery-agent': '#050505'
    };
    document.body.style.backgroundColor = colors[currentPage] || '#020617';
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden transition-colors duration-500 bg-[#020617] text-slate-50 selection:bg-pink-500/30">
      
      <DevNavigation currentPage={currentPage} setPage={setPage} />

      {currentPage === 'home' && (
        <div className="animate-fadeIn">
          <Navbar />
          <main>
            <Hero />
            <ProblemSection />
            <Methodology />
            <Segments />
            <Solutions />
            <Contact />
          </main>
        </div>
      )}

      {currentPage === 'ai-generic' && (
        <div className="animate-fadeIn">
          <main className="bg-[#050505]">
            <HeroAI />
            <SdrExplanation />
            <HowItWorks />
            <Benefits />
            <FAQ />
            <Contact />
          </main>
        </div>
      )}

      {currentPage === 'ai-estetica' && (
        <div className="animate-fadeIn">
          <main className="bg-[#050505]">
            <HeroAIEstetica />
            <SdrExplanation />
            <HowItWorks />
            <Benefits />
            <Contact />
          </main>
        </div>
      )}

      {currentPage === 'delivery-agent' && (
        <div className="animate-fadeIn">
          <DeliveryNavbar setPage={setPage} />
          <main className="bg-[#050505] text-gray-100 font-sans relative">
             <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay fixed"></div>
             <div className="relative z-10">
               <DeliveryHero />
               <DeliveryPain />
               <DeliverySolution />
               <DeliveryFeatures />
               <DeliveryComparison />
               <DeliveryCTA />
               <DeliveryFAQ />
             </div>
          </main>
        </div>
      )}

      {currentPage === 'privacy' && <LegalPage type="privacy" setPage={setPage} />}
      {currentPage === 'terms' && <LegalPage type="terms" setPage={setPage} />}

      <Footer setPage={setPage} />
    </div>
  );
}
