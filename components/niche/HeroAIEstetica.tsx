
import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, BarChart3, Check } from 'lucide-react';
import ChatDemo from '../ChatDemo';

const HeroAIEstetica: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-purple-900/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 mb-8">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span className="text-[10px] font-bold text-purple-200 uppercase tracking-widest">SDR para Clínicas de Estética</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.05] mb-8 font-montserrat">
              SUA CLÍNICA PERDE <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">PACIENTES NO SILÊNCIO.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Agentes de IA que atendem, qualificam e agendam avaliações em segundos. Atendimento humanizado e técnico 24h por dia.
            </p>

            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto px-10 py-6 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] flex items-center justify-center gap-3"
            >
              ESCALAR MEU AGENDAMENTO
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 w-full max-w-[420px] mx-auto relative">
             <div className="bg-[#111] p-3 rounded-[3.5rem] shadow-2xl border border-white/10 relative">
                <div className="bg-white rounded-[3rem] overflow-hidden relative h-[580px]">
                    <ChatDemo />
                </div>
             </div>
             <div className="absolute -right-10 top-20 bg-green-500 text-black p-3 rounded-2xl shadow-2xl z-20 animate-float flex items-center gap-2 font-bold text-[10px] uppercase tracking-tighter">
                <Check size={14} strokeWidth={4} /> Avaliação Agendada
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAIEstetica;
