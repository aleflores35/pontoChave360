
import React from 'react';
import { ArrowUpRight, Target, Brain, Globe, Settings } from 'lucide-react';

const Solutions: React.FC = () => {
  const services = [
    { 
        title: "Funil de Vendas 360", 
        desc: "Engenharia completa da estratégia ao checkout.",
        icon: <Target className="text-cyan-500" />
    },
    { 
        title: "Agentes de Elite IA", 
        desc: "Atendimento autonômo especializado no seu nicho.",
        icon: <Brain className="text-purple-500" />
    },
    { 
        title: "Páginas de Elite", 
        desc: "LPs com design focado em conversão extrema.",
        icon: <Globe className="text-blue-500" />
    },
    { 
        title: "Gestão de Tráfego", 
        desc: "Anúncios orientados por ROI e dados reais.",
        icon: <Settings className="text-amber-500" />
    },
  ];

  return (
    <section id="solutions" className="bg-slate-950 py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat text-white mb-20 tracking-tight">
          Nossas Soluções de <span className="text-cyan-500">Engenharia Comercial</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-900/50 border border-slate-800 p-10 rounded-[2rem] hover:bg-slate-900 transition-all duration-300 relative overflow-hidden text-left h-full flex flex-col">
               <div className="w-14 h-14 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:border-slate-700 transition-colors">
                  {service.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-4 font-montserrat">{service.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 flex-1">{service.desc}</p>
               
               <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                  Saiba Mais <ArrowUpRight size={16} className="text-cyan-500" />
               </button>

               <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
