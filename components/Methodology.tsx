import React from 'react';
import { Search, MousePointerClick, Bot, TrendingUp } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-2 block">O Mecanismo</span>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
            Um Ecossistema Integrado de 4 Pilares
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Não aplicamos ações isoladas. Construímos uma máquina que funciona em sincronia.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

          {/* Pillar 1 */}
          <div className="relative z-10 bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-cyan-500/50 transition-colors duration-300 group">
            <div className="w-16 h-16 bg-slate-950 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg relative mx-auto md:mx-0">
               <Search className="text-white" size={28} />
               <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-montserrat text-center md:text-left">1. Visibilidade Local</h3>
            <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left">
              Dominamos o Google e os Mapas para que sua empresa seja a primeira opção quando o cliente buscar pelo seu serviço.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="relative z-10 bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-blue-500/50 transition-colors duration-300 group">
             <div className="w-16 h-16 bg-slate-950 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg relative mx-auto md:mx-0">
               <MousePointerClick className="text-white" size={28} />
               <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-montserrat text-center md:text-left">2. Conversão</h3>
            <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left">
              Substituímos sites institucionais lentos por Landing Pages de alta performance, desenhadas psicologicamente para vender.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="relative z-10 bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-purple-500/50 transition-colors duration-300 group">
             <div className="w-16 h-16 bg-slate-950 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg relative mx-auto md:mx-0">
               <Bot className="text-white" size={28} />
               <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-montserrat text-center md:text-left">3. Automação IA</h3>
            <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left">
              Implementamos Agentes de Inteligência Artificial que atendem, qualificam e agendam clientes em 5 segundos, 24/7.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="relative z-10 bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-amber-500/50 transition-colors duration-300 group">
             <div className="w-16 h-16 bg-slate-950 border border-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg relative mx-auto md:mx-0">
               <TrendingUp className="text-white" size={28} />
               <div className="absolute inset-0 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-montserrat text-center md:text-left">4. Escala</h3>
            <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left">
              Gestão de Tráfego Pago orientada a dados para injetar volume constante de clientes qualificados no sistema.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;