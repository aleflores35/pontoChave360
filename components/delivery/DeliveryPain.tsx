import React from 'react';
import { Clock, AlertTriangle, TrendingDown } from 'lucide-react';

const DeliveryPain: React.FC = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            O gargalo que <span className="text-red-500">queima o lucro</span> da sua operação
          </h2>
          <p className="text-xl text-gray-400 italic font-serif leading-relaxed">
            "20h00 da sexta-feira. A chapa está quente, o telefone não para e o WhatsApp tem 30 mensagens não lidas..."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Pain 1 */}
            <div className="relative group">
                <div className="absolute inset-0 bg-red-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-[#0F0F0F] p-10 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-red-900/10 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Clock size={32} className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">Cliente desiste</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                        A demora na resposta é fatal. Em 5 minutos, ele pede no concorrente ou vai para o iFood, onde você perde margem.
                    </p>
                </div>
            </div>

            {/* Pain 2 */}
            <div className="relative group">
                <div className="absolute inset-0 bg-red-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-[#0F0F0F] p-10 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-red-900/10 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                        <AlertTriangle size={32} className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">Erro no Pedido</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                        "Sem cebola" vira "com cebola". O atendente erra na correria, gerando prejuízo na entrega e cliente irritado.
                    </p>
                </div>
            </div>

            {/* Pain 3 */}
            <div className="relative group">
                <div className="absolute inset-0 bg-red-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-[#0F0F0F] p-10 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-red-900/10 rounded-2xl flex items-center justify-center mb-8 border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                        <TrendingDown size={32} className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">Ticket Baixo</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Na pressa, ninguém oferece a batata frita ou a bebida extra. Você deixa dinheiro na mesa em todo pedido.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryPain;