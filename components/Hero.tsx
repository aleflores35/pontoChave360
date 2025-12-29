
import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-8">
            <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400" />
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Engenharia Comercial 360º</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[0.95] mb-8 font-montserrat">
            NÃO VENDEMOS ANÚNCIOS.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              INSTALAMOS UM ATIVO DE VENDAS.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            A PontoChave360 constrói o seu <strong>Funil de Vendas 360º</strong>: uma engrenagem de duas fases que planeja a inteligência e executa a engenharia para o seu negócio local escalar.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="group px-10 py-6 bg-white text-slate-950 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-3"
            >
              SOLICITAR DIAGNÓSTICO
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-3 text-slate-500 text-sm font-medium border-l border-slate-800 pl-6 h-12">
                <ShieldCheck className="text-cyan-500 w-5 h-5" />
                Sistemas Validados para Escala Local
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
