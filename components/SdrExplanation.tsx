import React from 'react';
import { Clock, Filter, MessageSquareX, Sparkles, BrainCircuit } from 'lucide-react';

const SdrExplanation: React.FC = () => {
  return (
    <section id="sdr" className="relative overflow-hidden">
      
      {/* PART 1: THE PAIN */}
      <div className="bg-white py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
                O cenário comum (e caro) da Estética hoje:
            </h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed">
                Você coloca dinheiro no Google e no Instagram. O telefone toca. O WhatsApp apita. Mas o que acontece depois?
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Pain Point 1 */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500">
                    <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">1. Demora na resposta</h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                O lead espera 2 horas e fecha com a concorrente que respondeu na hora.
                </p>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500">
                    <Filter size={24} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">2. Filtro Inexistente</h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                Sua recepção perde tempo com "curiosos" em vez de focar nos pacientes de tickets altos.
                </p>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500">
                    <MessageSquareX size={24} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">3. Follow-up Esquecido</h3>
                <p className="text-stone-500 leading-relaxed text-sm">
                O paciente diz "vou ver e te aviso" e nunca mais é contatado.
                </p>
            </div>
            </div>
            
            <div className="text-center max-w-2xl mx-auto border-t border-stone-100 pt-10">
                <p className="text-stone-500 italic">
                    "Não é culpa da sua equipe. Humanamente, é impossível dar atenção VIP para 50 pessoas ao mesmo tempo. <strong className="text-stone-800 not-italic">É uma falha do sistema.</strong>"
                </p>
            </div>
        </div>
      </div>

      {/* PART 2: THE OPPORTUNITY */}
      <div className="bg-stone-900 py-24 text-white relative overflow-hidden">
         {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/30 blur-[120px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/20 blur-[100px] rounded-full mix-blend-screen opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold text-white uppercase tracking-wide">A Nova Oportunidade</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
                        Contrate o funcionário mais eficiente que sua clínica já teve.
                    </h2>
                    <p className="text-stone-300 text-lg font-light leading-relaxed mb-8">
                        Esqueça aqueles chatbots "burros" que travam os clientes em menus numéricos. A PontoChave360 desenvolve Agentes de Atendimento Treinados com IA.
                    </p>
                    <p className="text-stone-300 text-lg font-light leading-relaxed">
                        É como clonar a sua melhor vendedora, dar a ela o conhecimento técnico de todos os seus procedimentos (Botox, Preenchimento, Laser) e fazê-la trabalhar 24 horas por dia, sem pausa para almoço, sem férias e sem encargos trabalhistas.
                    </p>
                </div>

                <div className="relative">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-600/30">
                            <BrainCircuit size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Agente PontoChave™</h3>
                        <ul className="space-y-4 text-stone-300">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                                <span>Disponível 24h/7</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                                <span>Conhecimento Técnico Ilimitado</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                                <span>Atende 1.000 pacientes simultâneos</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SdrExplanation;