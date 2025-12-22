import React from 'react';
import { CheckCircle2, Bot, Receipt } from 'lucide-react';

const DeliverySolution: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-green-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-20">
            
            {/* Visual Simulation */}
            <div className="w-full md:w-1/2 relative">
                <div className="relative p-1 bg-gradient-to-br from-green-500/30 to-transparent rounded-3xl">
                    <div className="bg-[#0c0c0c] rounded-[1.4rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
                        {/* Header of Simulation */}
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <Bot size={24} className="text-green-500" />
                                <span className="font-mono text-green-500 font-bold tracking-widest text-xs">AI_AGENT_ACTIVE</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                        </div>

                        {/* List of Orders */}
                        <div className="space-y-4">
                            {/* Card 1 */}
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border-l-4 border-green-500 backdrop-blur-sm animate-slide-in">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                    <Receipt size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-white font-bold text-sm">Pedido #3942</p>
                                        <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase font-bold">Pago (Pix)</span>
                                    </div>
                                    <p className="text-gray-400 text-xs">1x Pizza G (Calabresa) + Coca 2L</p>
                                </div>
                            </div>

                             {/* Card 2 */}
                             <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border-l-4 border-orange-500 backdrop-blur-sm opacity-80">
                                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                                    <Bot size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-white font-bold text-sm">Mesa 04 (WhatsApp)</p>
                                        <span className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded uppercase font-bold">Em atendimento</span>
                                    </div>
                                    <p className="text-gray-400 text-xs">Oferecendo borda recheada...</p>
                                </div>
                            </div>

                             {/* Card 3 */}
                             <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border-l-4 border-gray-600 backdrop-blur-sm opacity-50">
                                <div className="w-12 h-12 rounded-full bg-gray-600/20 flex items-center justify-center text-gray-400">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-white font-bold text-sm">Pedido #3940</p>
                                        <span className="text-[10px] bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded uppercase font-bold">Finalizado</span>
                                    </div>
                                    <p className="text-gray-400 text-xs">Entregue pelo motoboy</p>
                                </div>
                            </div>
                        </div>

                        {/* Glow Overlay */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[40px] rounded-full pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Copy */}
            <div className="w-full md:w-1/2">
                <div className="inline-block px-3 py-1 mb-6 rounded-lg bg-green-500/10 border border-green-500/20">
                    <span className="text-green-400 font-bold text-xs uppercase tracking-widest">Automação Inteligente</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat leading-tight">
                    O atendente que <br/>
                    <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">nunca erra o pedido.</span>
                </h2>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Nosso Agente de IA transforma seu WhatsApp em uma <strong className="text-white">máquina de vendas</strong>. Ele guia o cliente por um cardápio interativo, tira dúvidas sobre ingredientes e fecha a conta sozinho.
                </p>
                
                <div className="border-l-2 border-green-500/50 pl-6 py-1">
                    <p className="text-white text-lg font-medium">
                        "Enquanto sua equipe foca na produção e embalagem, o robô garante que o dinheiro entre no caixa."
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DeliverySolution;