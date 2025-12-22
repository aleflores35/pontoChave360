import React from 'react';
import { Menu, MapPin, DollarSign, Bell, Smartphone, ChefHat } from 'lucide-react';

const DeliveryFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-montserrat mb-4">Um sistema completo dentro do Zap</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tudo o que você precisa para profissionalizar seu delivery sem criar barreiras para o cliente.</p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            
            {/* Feature 1 - Large */}
            <div className="md:col-span-2 bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px] rounded-full group-hover:bg-orange-600/20 transition-colors"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20 text-orange-500">
                        <Menu size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Cardápio Interativo</h3>
                        <p className="text-gray-400 max-w-md">Esqueça o PDF que trava o celular. Seu cliente navega por categorias, vê fotos em alta qualidade e adiciona ao carrinho com um toque.</p>
                    </div>
                </div>
            </div>

            {/* Feature 2 - Tall */}
            <div className="md:row-span-2 bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-green-500/30 transition-all duration-300">
                 <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900/10 to-transparent"></div>
                 <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center border border-green-500/20 text-green-500 mb-auto">
                        <DollarSign size={28} />
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-2">Upsell Automático</h3>
                        <p className="text-gray-400 text-sm mb-6">O robô nunca esquece de oferecer.</p>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <p className="text-xs text-gray-500 mb-2 font-mono">ROBÔ DIZ:</p>
                            <p className="text-green-400 font-bold text-sm">"Vai uma Coca-Cola 2L geladinha pra acompanhar por +R$12?"</p>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                             <span className="text-xs font-bold text-gray-500 uppercase">Resultado:</span>
                             <span className="text-sm font-bold text-white">+20% Ticket Médio</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 text-blue-500 mb-6">
                    <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cálculo de Entrega</h3>
                <p className="text-gray-400 text-sm">Integração via API para calcular a taxa exata baseada na distância do cliente.</p>
            </div>

             {/* Feature 4 */}
             <div className="bg-[#0c0c0c] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20 text-purple-500 mb-6">
                    <Bell size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Status do Pedido</h3>
                <p className="text-gray-400 text-sm">Atualizações automáticas ("Saiu para entrega") reduzem a ansiedade e mensagens no balcão.</p>
            </div>

        </div>
        
        {/* Simple Integration Flow */}
        <div className="mt-24 flex justify-center">
             <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                    <Smartphone size={16} /> WhatsApp
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                 <span className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div> Agente IA
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                 <span className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest">
                    <ChefHat size={16} /> Cozinha
                </span>
             </div>
        </div>

      </div>
    </section>
  );
};

export default DeliveryFeatures;