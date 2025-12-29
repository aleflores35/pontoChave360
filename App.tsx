import React, { useState, useEffect } from 'react';
// Layout
import DevNavigation from './components/DevNavigation';
import Footer from './components/Footer';

// Home Page Components (Institutional - Dark Theme)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Methodology from './components/Methodology';
import Segments from './components/Segments';
import Solutions from './components/Solutions';
import Contact from './components/Contact';

// AI Landing Page Components (Light Theme)
import NavbarAI from './components/NavbarAI';
import HeroAI from './components/HeroAI';
import SdrExplanation from './components/SdrExplanation';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

// Delivery Agent Page Components (Dark/Orange Theme)
import DeliveryNavbar from './components/delivery/DeliveryNavbar';
import DeliveryHero from './components/delivery/DeliveryHero';
import DeliveryPain from './components/delivery/DeliveryPain';
import DeliverySolution from './components/delivery/DeliverySolution';
import DeliveryFeatures from './components/delivery/DeliveryFeatures';
import DeliveryComparison from './components/delivery/DeliveryComparison';
import DeliveryFAQ from './components/delivery/DeliveryFAQ';
import DeliveryCTA from './components/delivery/DeliveryCTA';

// Legal Pages
import LegalPage from './components/LegalPage';

// Success Page
import Obrigado from './components/Obrigado';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle URL path on mount
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/obrigado') {
      setCurrentPage('obrigado');
    }
  }, []);

  // Update URL when page changes (optional, but good for navigation)
  useEffect(() => {
    if (currentPage === 'obrigado') {
      window.history.pushState({}, '', '/obrigado');
    } else if (currentPage === 'home') {
      window.history.pushState({}, '', '/');
    }
    // Add others if needed
  }, [currentPage]);

  // Handle body background color changes based on theme
  useEffect(() => {
    if (currentPage === 'home' || currentPage === 'delivery-agent' || currentPage === 'privacy' || currentPage === 'terms' || currentPage === 'obrigado') {
      document.body.classList.add('bg-slate-950');
      document.body.classList.remove('bg-stone-50');
      // For delivery specific overrides if needed
      if (currentPage === 'delivery-agent') {
        document.body.style.backgroundColor = '#050505'; // Ultra Dark
      } else {
        document.body.style.backgroundColor = '';
      }
    } else {
      document.body.classList.remove('bg-slate-950');
      document.body.style.backgroundColor = '';
      document.body.classList.add('bg-stone-50');
    }
  }, [currentPage]);

  return (
    <div className={`min-h-screen flex flex-col w-full overflow-x-hidden transition-colors duration-500 ${currentPage === 'ai-agent' ? 'bg-stone-50 text-stone-900' : 'bg-slate-950 text-slate-50'}`}>

      {/* DevNav only shows on main landing pages to avoid clutter on legal/success pages */}
      {['home', 'ai-agent', 'delivery-agent'].includes(currentPage) && (
        <DevNavigation currentPage={currentPage} setPage={setCurrentPage} />
      )}

      {/* --- HOME PAGE VIEW (Institutional) --- */}
      {currentPage === 'home' && (
        <>
          <Navbar />
          <main>
            <Hero />
            <ProblemSection />
            <Methodology />
            <Segments />
            <Solutions />
            <Contact />
          </main>
        </>
      )}

      {/* --- AI AGENT LANDING PAGE VIEW --- */}
      {currentPage === 'ai-agent' && (
        <>
          <NavbarAI />
          <main>
            <HeroAI />
            <SdrExplanation />
            <HowItWorks />
            <Benefits />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
        </>
      )}

      {/* --- DELIVERY AGENT LANDING PAGE VIEW --- */}
      {currentPage === 'delivery-agent' && (
        <>
          <DeliveryNavbar setPage={setCurrentPage} />
          <main className="bg-[#050505] text-gray-100 font-sans relative">
            {/* Global Noise Overlay for Delivery Page */}
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
        </>
      )}

      {/* --- LEGAL PAGES --- */}
      {currentPage === 'privacy' && <LegalPage type="privacy" setPage={setCurrentPage} />}
      {currentPage === 'terms' && <LegalPage type="terms" setPage={setCurrentPage} />}

      {/* --- SUCCESS PAGE --- */}
      {currentPage === 'obrigado' && <Obrigado setPage={setCurrentPage} />}

      {/* Footer is shown on all pages EXCEPT 'obrigado' for focus, passing setPage to handle navigation */}
      {currentPage !== 'obrigado' && <Footer setPage={setCurrentPage} />}
    </div>
  );
}