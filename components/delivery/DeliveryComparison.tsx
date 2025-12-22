import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const DeliveryComparison: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-montserrat">Mais lucro no seu bolso</h2>
            <p className="text-gray-400 mt-4">Pare de trabalhar apenas para pagar taxas de plataforma.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* The Apps Way (Loser) */}
            <div className="p-8 rounded-3xl bg-[#0F0F0F] border border-white/5 grayscale opacity-70 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-gray-400 mb-8 pb-4 border-b border-white/5">Apps de Delivery</h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4 text-red-400">
                        <div className="bg-red-500/10 p-1 rounded">
                            <X size={20} />
                        </div>
                        <div>
                            <span className="font-bold block text-white">Taxas Altas</span>
                            <span className="text-sm opacity-80">Comissão de 12% a 27% sobre seu bruto.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 text-red-400">
                        <div className="bg-red-500/10 p-1 rounded">
                             <X size={20} />
                        </div>
                         <div>
                            <span className="font-bold block text-white">Concorrência</span>
                            <span className="text-sm opacity-80">Seu cliente vê seu concorrente na mesma tela.</span>
                        </div>
                    </li>
                    <li className="flex items-start gap-4 text-red-400">
                         <div className="bg-red-500/10 p-1 rounded">
                             <X size={20} />
                        </div>
                         <div>
                            <span className="font-bold block text-white">Sem Dados</span>
                            <span className="text-sm opacity-80">O cliente é do App, você não fideliza.</span>
                        </div>
                    </li>
                </ul>
            </div>

            {/* PontoChave Way (Winner) */}
            <div className="relative transform md:scale-105 z-10">
                <div className="absolute inset-0 bg-green-500/20 blur-[50px] rounded-3xl -z-10"></div>
                <div className="p-10 rounded-3xl bg-gradient-to-b from-[#111] to-black border border-green-500/50 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider shadow-lg">Vencedor</div>
                    
                    <h3 className="text-3xl font-bold text-white mb-8 pb-4 border-b border-white/10">
                        Agente <span className="text-green-500">PontoChave</span>
                    </h3>
                    
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 text-white">
                            <div className="bg-green-500 p-1 rounded shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                                <Check size={20} className="text-black" />
                            </div>
                            <div>
                                <span className="font-bold block text-2xl text-green-400">0% de Comissão</span>
                                <span className="text-sm text-gray-400">Todo o lucro do pedido fica com você.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 text-white">
                            <div className="bg-green-500 p-1 rounded shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                                <Check size={20} className="text-black" />
                            </div>
                            <div>
                                <span className="font-bold block text-white">Fidelização Total</span>
                                <span className="text-sm text-gray-400">Reative clientes antigos via WhatsApp em massa.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 text-white">
                            <div className="bg-green-500 p-1 rounded shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                                <Check size={20} className="text-black" />
                            </div>
                            <div>
                                <span className="font-bold block text-white">Base Própria</span>
                                <span className="text-sm text-gray-400">Você é dono dos dados e do contato do cliente.</span>
                            </div>
                        </li>
                    </ul>

                     <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                        <button className="text-green-500 font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                            Quero economizar taxas <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DeliveryComparison;