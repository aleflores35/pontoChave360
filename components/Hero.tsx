import React from 'react';
import { ArrowRight, ChevronDown, Network, Database, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-950">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      
      {/* Cybernetic Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 mb-8 animate-fade-in-up">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-75"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse delay-150"></span>
            </div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Sistemas de Crescimento</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 font-montserrat">
            Negócios locais não precisam de "mais marketing". <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Precisam de um Sistema de Aquisição Previsível.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light">
            A <strong>PontoChave360</strong> estrutura o ecossistema que faz sua empresa ser encontrada no Google, converter leads em páginas otimizadas e atender clientes automaticamente com IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button 
              onClick={scrollToContact}
              className="px-8 py-5 bg-white text-slate-950 rounded font-bold text-lg hover:bg-slate-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3"
            >
              AGENDAR DIAGNÓSTICO
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
               onClick={() => document.getElementById('problem')?.scrollIntoView({behavior: 'smooth'})}
               className="px-8 py-5 bg-transparent border border-slate-700 text-white rounded font-bold text-lg hover:bg-slate-900 hover:border-slate-500 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver a Diferença
              <ChevronDown className="w-5 h-5 text-slate-400" />
            </button>
          </div>

        </div>
        
        {/* Abstract Ecosystem Visual */}
        <div className="mt-24 relative hidden md:flex justify-center">
            <div className="relative w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent">
                <div className="absolute -top-3 left-1/4 w-6 h-6 bg-slate-950 border-2 border-cyan-500 rounded-full flex items-center justify-center z-10">
                    <Network size={12} className="text-cyan-400" />
                </div>
                <div className="absolute -top-3 left-1/2 w-6 h-6 bg-slate-950 border-2 border-blue-500 rounded-full flex items-center justify-center z-10">
                    <Database size={12} className="text-blue-400" />
                </div>
                <div className="absolute -top-3 left-3/4 w-6 h-6 bg-slate-950 border-2 border-purple-500 rounded-full flex items-center justify-center z-10">
                    <Cpu size={12} className="text-purple-400" />
                </div>
            </div>
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;