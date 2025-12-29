
import React from 'react';
import { Clock, Filter, MessageSquareX, Sparkles, BrainCircuit, Zap, Users, ShieldCheck } from 'lucide-react';

const SdrExplanation: React.FC = () => {
  return (
    <section id="sdr" className="relative overflow-hidden bg-[#050505] py-32">
      
      {/* SECTION 1: THE BRUTAL TRUTH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-8 tracking-tighter uppercase italic">
                    A cada segundo de vácuo, <br/>
                    <span className="text-red-600">seu lead esfria 80%.</span>
                </h2>
                <p className="text-gray-400 text-xl font-light leading-relaxed">
                    No mundo atual, se você não responde na hora, o lead volta pro Instagram e fecha com quem respondeu. O problema do seu comercial não é falta de leads, <strong className="text-white">é a ineficiência da velocidade humana.</strong>
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="p-10 rounded-[2.5rem] bg-zinc-950 border border-white/5 opacity-60 grayscale hover:grayscale-0 transition-all">
                    <div className="flex items-center gap-4 mb-8 text-gray-500">
                        <Users size={32} />
                        <h3 className="text-2xl font-bold uppercase tracking-tight">Vendedor Humano</h3>
                    </div>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-3 text-red-500/80">
                            <MessageSquareX size={20} className="mt-1 shrink-0" />
                            <span className="text-gray-400">Demora média de 20 minutos para responder.</span>
                        </li>
                        <li className="flex items-start gap-3 text-red-500/80">
                            <MessageSquareX size={20} className="mt-1 shrink-0" />
                            <span className="text-gray-400">Esquece de fazer follow-up no dia seguinte.</span>
                        </li>
                        <li className="flex items-start gap-3 text-red-500/80">
                            <MessageSquareX size={20} className="mt-1 shrink-0" />
                            <span className="text-gray-400">Fica cansado, doente e tem encargos CLT.</span>
                        </li>
                    </ul>
                </div>

                <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-pink-600/10 to-transparent border border-pink-500/30 shadow-[0_0_40px_rgba(219,39,119,0.1)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 bg-pink-600 text-white text-[10px] font-black px-4 py-2 rounded-bl-2xl uppercase tracking-widest">Eficiência Total</div>
                    <div className="flex items-center gap-4 mb-8 text-pink-500">
                        <BrainCircuit size={32} />
                        <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Agente de Elite pontoChave360</h3>
                    </div>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-3 text-green-500">
                            <Zap size={20} className="mt-1 shrink-0 fill-green-500" />
                            <span className="text-gray-200 font-medium italic">Atendimento instantâneo (menos de 5 segundos).</span>
                        </li>
                        <li className="flex items-start gap-3 text-green-500">
                            <Zap size={20} className="mt-1 shrink-0 fill-green-500" />
                            <span className="text-gray-200 font-medium italic">Qualificação técnica e agendamento automático.</span>
                        </li>
                        <li className="flex items-start gap-3 text-green-500">
                            <Zap size={20} className="mt-1 shrink-0 fill-green-500" />
                            <span className="text-gray-200 font-medium italic">Trabalha 24h/dia, 365 dias/ano sem custos extras.</span>
                        </li>
                    </ul>
                </div>
            </div>
      </div>

      {/* MECHANISM SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-zinc-900 to-black rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-pink-600/10 blur-[100px] rounded-full"></div>
                
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                            <ShieldCheck className="w-4 h-4 text-pink-400" />
                            <span className="text-xs font-black text-white uppercase tracking-widest">IA Treinada na Sua Oferta</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black font-montserrat leading-tight mb-8 uppercase italic">
                            Não é um robô genérico. <br/>
                            <span className="text-pink-500">É o clone da sua melhor vendedora.</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                            Nós não instalamos um chatbot de menu. Nós treinamos um cérebro artificial com todos os seus manuais, tabelas de preços e protocolos técnicos. 
                        </p>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            Ele entende áudio, lida com objeções complexas e só passa o lead para o humano quando ele está <strong className="text-white">pronto para pagar</strong> ou com a reunião agendada.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Brain Power", val: "Llama 3 / GPT-4o", icon: <BrainCircuit className="text-pink-500" /> },
                            { label: "Multimodal", val: "Texto e Áudio", icon: <Zap className="text-pink-500" /> },
                            { label: "Persuasão", val: "Copywriting de Elite", icon: <Sparkles className="text-pink-500" /> },
                            { label: "Conexão", val: "WhatsApp Nativo", icon: <Users className="text-pink-500" /> },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-pink-500/30 transition-all group">
                                <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <div className="text-[10px] text-gray-500 font-bold uppercase mb-1 tracking-widest">{item.label}</div>
                                <div className="text-sm font-bold text-white tracking-tight">{item.val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
};

export default SdrExplanation;
