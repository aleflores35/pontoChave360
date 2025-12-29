
import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldAlert, TrendingUp, CheckCircle } from 'lucide-react';
import ChatDemo from './ChatDemo';

const HeroAI: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-[#050505] text-white">
      {/* Background FX */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-gradient-to-b from-pink-600/20 via-transparent to-transparent blur-[140px] rounded-full pointer-events-none opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-[1.2] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/5 mb-8 animate-fadeIn shadow-[0_0_20px_rgba(219,39,119,0.1)]">
              <Zap className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
              <span className="text-[11px] font-black text-pink-200 uppercase tracking-[0.2em]">Engenharia de Conversão 24/7</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 font-montserrat italic uppercase">
              O VÁCUO NO ZAP <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-[0_0_30px_rgba(219,39,119,0.4)]">
                ESTÁ MATANDO <br/>SEU LUCRO.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light italic">
                Não é falta de leads. É falta de velocidade. <strong className="text-white">Instale um SDR Artificial de Elite</strong> que atende em 3 segundos, qualifica e agenda enquanto você dorme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <button 
                  onClick={scrollToContact}
                  className="group relative px-10 py-6 bg-pink-600 hover:bg-pink-500 text-white rounded-2xl font-black text-xl transition-all shadow-[0_0_40px_rgba(219,39,119,0.5)] flex items-center justify-center gap-4 overflow-hidden"
                >
                  <span className="relative z-10">PARAR O SANGRAMENTO AGORA</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
                <div className="flex flex-col gap-1">
                    <span className="text-pink-500 font-black text-2xl">0s</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Tempo de Espera</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-pink-500 font-black text-2xl">100%</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Leads Atendidos</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-pink-500 font-black text-2xl">3x+</span>
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Agendamentos</span>
                </div>
            </div>
          </div>

          {/* Device Mockup */}
          <div className="flex-1 w-full max-w-[440px] relative group perspective-[1000px]">
             <div className="absolute inset-0 bg-pink-600/20 blur-[100px] rounded-full scale-90 -z-10 animate-pulse"></div>
             
             <div className="bg-[#111] p-4 rounded-[4rem] shadow-2xl border border-white/10 transform rotate-y-[-5deg] hover:rotate-y-0 transition-all duration-700">
                <div className="bg-white rounded-[3.5rem] overflow-hidden relative h-[620px] ring-8 ring-black/50">
                    <ChatDemo />
                </div>
             </div>

             <div className="absolute -left-12 bottom-1/4 bg-red-600 text-white p-5 rounded-3xl shadow-2xl z-20 animate-float flex flex-col gap-1 border border-white/20">
                <div className="flex items-center gap-2">
                    <ShieldAlert size={20} />
                    <span className="font-black text-xs uppercase">Alerta de Perda</span>
                </div>
                <p className="text-[10px] font-bold opacity-80">Humanos demoram 15min+</p>
             </div>

             <div className="absolute -right-8 top-1/4 bg-green-500 text-black p-5 rounded-3xl shadow-2xl z-20 animate-float delay-500 flex flex-col gap-1 border border-white/20">
                 <div className="flex items-center gap-2">
                    <TrendingUp size={20} />
                    <span className="font-black text-xs uppercase">Conversão Ativa</span>
                 </div>
                 <p className="text-[10px] font-bold opacity-80">IA atendeu em 2.4s</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroAI;
