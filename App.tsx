
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

// Generic AI Agent Landing Page
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
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
    
    // Manage background colors
    const colors: Record<string, string> = {
      'home': '#020617',
      'ai-generic': '#050505',
      'ai-estetica': '#050505',
      'delivery-agent': '#050505'
    };
    document.body.style.backgroundColor = colors[currentPage] || '#020617';
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden transition-colors duration-500 bg-[#020617] text-slate-50 selection:bg-cyan-500/30">
      
      {/* DevNavigation is global and stays on top of everything */}
      <DevNavigation currentPage={currentPage} setPage={setCurrentPage} />

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
            <FAQ />
            <Contact />
          </main>
        </div>
      )}

      {currentPage === 'delivery-agent' && (
        <div className="animate-fadeIn">
          <DeliveryNavbar setPage={setCurrentPage} />
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

      {currentPage === 'privacy' && <LegalPage type="privacy" setPage={setCurrentPage} />}
      {currentPage === 'terms' && <LegalPage type="terms" setPage={setCurrentPage} />}

      <Footer setPage={setCurrentPage} />
    </div>
  );
}
