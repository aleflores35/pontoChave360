import React from 'react';
import { Zap, Stethoscope, CalendarCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-purple-700 font-bold tracking-widest uppercase text-xs mb-2 block">O Mecanismo</span>
          <h2 className="text-4xl font-serif text-stone-900 mb-4">
            O Processo de 3 Etapas da PontoChave360
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            Da mensagem inicial ao agendamento confirmado, sem intervenção humana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
           {/* Connector Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent z-0"></div>

           {/* Step 1 */}
           <div className="relative z-10 text-center group">
               <div className="w-24 h-24 bg-white border border-stone-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-stone-200/50 group-hover:scale-110 transition-transform duration-300">
                   <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center text-white">
                        <Zap size={28} />
                   </div>
               </div>
               <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif">1. Atendimento Imediato</h3>
               <p className="text-amber-600 font-bold text-xs uppercase tracking-wide mb-3">(0s - 5s)</p>
               <p className="text-stone-500 leading-relaxed px-4 text-sm">
                   O paciente manda "oi". O Agente reconhece o perfil, chama pelo nome e inicia o acolhimento instantaneamente.
               </p>
           </div>

           {/* Step 2 */}
           <div className="relative z-10 text-center group">
               <div className="w-24 h-24 bg-white border border-stone-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-stone-200/50 group-hover:scale-110 transition-transform duration-300">
                   <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center text-white">
                        <Stethoscope size={28} />
                   </div>
               </div>
               <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif">2. Triagem & Tira-Dúvidas</h3>
               <p className="text-amber-600 font-bold text-xs uppercase tracking-wide mb-3">Consultivo</p>
               <p className="text-stone-500 leading-relaxed px-4 text-sm">
                   O Agente entende a queixa, explica os tratamentos disponíveis na sua clínica e tira dúvidas sobre dor e recuperação.
               </p>
           </div>

           {/* Step 3 */}
           <div className="relative z-10 text-center group">
               <div className="w-24 h-24 bg-white border border-stone-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-stone-200/50 group-hover:scale-110 transition-transform duration-300">
                   <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white">
                        <CalendarCheck size={28} />
                   </div>
               </div>
               <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif">3. O Agendamento</h3>
               <p className="text-amber-600 font-bold text-xs uppercase tracking-wide mb-3">Conversão</p>
               <p className="text-stone-500 leading-relaxed px-4 text-sm">
                   O Agente verifica a disponibilidade na sua agenda e guia o paciente até a confirmação. Leads complexos são transferidos para humano apenas para pagamento.
               </p>
           </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;