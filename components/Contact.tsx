import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-block p-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <Lock className="text-cyan-400" size={24} />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat leading-tight">
            Vamos construir o seu <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">sistema de vendas?</span>
        </h2>
        
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            O primeiro passo é uma conversa estratégica para entender seu cenário. Sem compromisso, apenas clareza sobre o próximo nível.
        </p>
        
        <button className="px-10 py-6 bg-white hover:bg-slate-200 text-slate-950 font-bold text-xl rounded shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto w-full md:w-auto">
            SOLICITAR DIAGNÓSTICO GRATUITO
            <ArrowRight size={24} />
        </button>
        
        <p className="mt-8 text-sm text-slate-600">
            *Vagas limitadas para consultoria estratégica mensal.
        </p>

      </div>
    </section>
  );
};

export default Contact;