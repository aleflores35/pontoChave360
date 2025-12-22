import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const DeliveryCTA: React.FC = () => {
  return (
    <section id="delivery-cta" className="py-32 relative overflow-hidden group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[#050505]"></div>
         <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" 
            alt="Pizza Background" 
            className="w-full h-full object-cover opacity-10 scale-110 group-hover:scale-100 transition-transform duration-[20s] ease-linear"
         />
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-transparent"></div>
         {/* Color Glow */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl">
            <MessageCircle size={32} className="text-green-500" />
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 font-montserrat tracking-tight">
            Prepare sua cozinha para <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">vender mais.</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Agende uma demonstração gratuita e veja o robô tirando um pedido de hambúrguer ou pizza na sua frente, em tempo real.
        </p>

        <button className="px-12 py-6 bg-green-600 hover:bg-green-500 text-white font-bold text-xl rounded-2xl shadow-[0_0_40px_rgba(22,163,74,0.3)] hover:shadow-[0_0_60px_rgba(22,163,74,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto w-full md:w-auto border border-green-500/50">
            VER DEMONSTRAÇÃO AGORA
            <ArrowRight size={24} />
        </button>
        
        <p className="mt-8 text-sm text-gray-500">
            Sem cartão de crédito necessário • Instalação em 24h
        </p>
      </div>
    </section>
  );
};

export default DeliveryCTA;