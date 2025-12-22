import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Methodology from './components/Methodology';
import Segments from './components/Segments';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Methodology />
        <Segments />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}