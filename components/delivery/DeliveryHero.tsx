import React from 'react';
import { ArrowRight, Clock, Star, Zap } from 'lucide-react';
import ChatDemoFood from './ChatDemoFood';

const DeliveryHero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('delivery-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-24 lg:pt-28 lg:pb-40 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#050505]">
        {/* Top Gradient Spotlight */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-gradient-to-b from-orange-600/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Secondary Glows */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Copy */}
          <div className="flex-1 text-center lg:text-left pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm mb-8 animate-fade-in shadow-[0_0_15px_rgba(234,88,12,0.2)]">
              <Zap size={14} className="text-orange-400 fill-orange-400" />
              <span className="text-xs font-bold text-orange-200 uppercase tracking-widest">IA para Delivery 24h</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 font-montserrat">
              A fome do seu cliente não espera. <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 drop-shadow-sm">
                O lucro também não.
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light border-l-2 border-orange-500/20 pl-0 lg:pl-6 lg:border-l-0">
              Pare de perder pedidos na sexta à noite. O <strong>Agente PontoChave</strong> atende, vende e envia para a cozinha em segundos.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="group relative px-8 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
                <div className="relative flex items-center justify-center gap-3">
                    QUERO VENDER MAIS
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">Ver Demo ao Lado</span>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-8">
               <div className="flex flex-col">
                 <span className="text-3xl font-bold text-white font-montserrat">5s</span>
                 <span className="text-xs text-gray-500 uppercase tracking-wide">Tempo de Resposta</span>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <div className="flex flex-col">
                 <span className="text-3xl font-bold text-white font-montserrat">24h</span>
                 <span className="text-xs text-gray-500 uppercase tracking-wide">Disponibilidade</span>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <div className="flex flex-col">
                 <span className="text-3xl font-bold text-white font-montserrat">0%</span>
                 <span className="text-xs text-gray-500 uppercase tracking-wide">Comissão/Pedido</span>
               </div>
            </div>
          </div>

          {/* Right: Visual (Chat + Food) */}
          <div className="flex-1 relative w-full max-w-[420px] lg:max-w-none mx-auto perspective-[2000px]" id="demo-section">
             
             {/* Phone Container with Glassmorphism */}
             <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 ease-out preserve-3d">
                
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-orange-500/30 blur-[60px] transform scale-90 -z-10 rounded-full"></div>

                {/* The Phone */}
                <div className="bg-[#121212] p-3 rounded-[3rem] shadow-2xl border border-white/10 ring-4 ring-black/50 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20"></div>
                    <div className="bg-white rounded-[2.5rem] overflow-hidden relative h-[600px] border border-gray-800">
                        <ChatDemoFood />
                    </div>
                </div>

                {/* Floating Elements (Parallax feel) */}
                <div className="absolute -left-12 bottom-20 bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl animate-[float_5s_ease-in-out_infinite] hidden lg:block">
                     <div className="flex items-center gap-3">
                        <div className="bg-green-500/20 p-2.5 rounded-full">
                            <Clock size={20} className="text-green-500" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Status do Pedido</p>
                            <p className="text-sm font-bold text-white">Saiu para Entrega 🛵</p>
                        </div>
                    </div>
                </div>

                <div className="absolute -right-8 top-32 bg-[#1a1a1a]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl animate-[float_6s_ease-in-out_infinite_1s] hidden lg:block">
                    <div className="flex items-center gap-3">
                        <div className="bg-orange-500/20 p-2.5 rounded-full">
                            <Star size={20} className="text-orange-500 fill-orange-500" />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Avaliação</p>
                            <p className="text-sm font-bold text-white">"Atendimento perfeito!"</p>
                        </div>
                    </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeliveryHero;