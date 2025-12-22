import React from 'react';
import { X, Check, ThumbsUp, DollarSign, Megaphone, Target } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="bg-slate-900 py-24 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-montserrat">
            O jeito tradicional de fazer marketing <br /><span className="text-red-500">parou de funcionar.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Durante anos, disseram que bastava "postar todo dia". Mentira. Hoje, o cliente decide em minutos, e posts bonitos não pagam boletos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* The Old Way */}
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 lg:p-12 grayscale opacity-70 hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-slate-800 rounded-lg">
                        <Megaphone className="text-slate-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-300 font-montserrat">Agência Comum</h3>
                </div>
                
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <div>
                            <p className="text-white font-medium">Foco em "Likes" e Seguidores</p>
                            <p className="text-slate-500 text-sm mt-1">Métricas de vaidade que não trazem dinheiro.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <div>
                            <p className="text-white font-medium">Site Institucional Lento</p>
                            <p className="text-slate-500 text-sm mt-1">O cliente se perde no menu e sai sem comprar.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
                        <div>
                            <p className="text-white font-medium">Atendimento Manual</p>
                            <p className="text-slate-500 text-sm mt-1">Depende da secretária responder (quando pode).</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* The PontoChave Way */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-8 lg:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.05)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[60px] rounded-full"></div>
                
                <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                        <Target className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-montserrat">PontoChave360</h3>
                </div>
                
                <ul className="space-y-6 relative z-10">
                    <li className="flex items-start gap-4">
                        <Check className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                            <p className="text-white font-bold">Foco em Lucro e Agendamento</p>
                            <p className="text-slate-400 text-sm mt-1">Métricas reais de negócio (CAC, LTV, ROI).</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Check className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                            <p className="text-white font-bold">Páginas de Alta Conversão</p>
                            <p className="text-slate-400 text-sm mt-1">Landing Pages focadas em uma única ação: vender.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <Check className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                        <div>
                            <p className="text-white font-bold">Automação com IA</p>
                            <p className="text-slate-400 text-sm mt-1">Atendimento imediato em 5 segundos, 24/7.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;