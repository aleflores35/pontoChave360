
import React from 'react';
import { Target, Construction, Search, MousePointerClick, Bot, TrendingUp } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="bg-slate-950 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-white mb-6">As Duas Fases da nossa Engenharia</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Tratamos seu comercial como um sistema de precisão, não como uma tentativa e erro.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
            {/* Phase 1 */}
            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all group">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20">
                    <Target className="text-cyan-400" size={32} />
                </div>
                <div className="mb-2 text-cyan-500 font-bold text-xs uppercase tracking-widest">Fase 01</div>
                <h3 className="text-3xl font-bold text-white mb-4 font-montserrat">PLANEJAMENTO (Inteligência)</h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8">
                    Não apertamos botões sem direção. Mapeamos sua oferta única, estudamos o comportamento do seu público local e criamos a estratégia de copy que vai sustentar todo o funil.
                </p>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Engenharia de Oferta</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Mapeamento de Avatar</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> Arquitetura de Funil</li>
                </ul>
            </div>

            {/* Phase 2 */}
            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/30 transition-all group">
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20">
                    <Construction className="text-purple-400" size={32} />
                </div>
                <div className="mb-2 text-purple-500 font-bold text-xs uppercase tracking-widest">Fase 02</div>
                <h3 className="text-3xl font-bold text-white mb-4 font-montserrat">ESTRUTURAÇÃO (Engenharia)</h3>
                <p className="text-slate-400 leading-relaxed font-light mb-8">
                    Aqui o sistema ganha corpo. Desenvolvemos as LPs de alta performance, configuramos os Agentes de IA para atender 24h e ativamos o tráfego que vai alimentar sua máquina.
                </p>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Desenvolvimento de LPs</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Implementação de Agentes IA</li>
                    <li className="flex items-center gap-2 text-sm text-slate-300"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Setup de Tráfego Pago</li>
                </ul>
            </div>
        </div>

        {/* Pilares Grid */}
        <div className="grid md:grid-cols-4 gap-4">
            {[
                { icon: <Search />, title: "Visibilidade", desc: "Google & Mapas" },
                { icon: <MousePointerClick />, title: "Conversão", desc: "Landing Pages" },
                { icon: <Bot />, title: "Automação", desc: "Agentes de IA" },
                { icon: <TrendingUp />, title: "Escala", desc: "Gestão de Tráfego" }
            ].map((p, i) => (
                <div key={i} className="bg-[#0c0c0c] border border-white/5 p-8 rounded-3xl hover:border-slate-700 transition-all">
                    <div className="text-cyan-500 mb-4">{p.icon}</div>
                    <h4 className="text-white font-bold mb-1">{p.title}</h4>
                    <p className="text-slate-500 text-xs">{p.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
