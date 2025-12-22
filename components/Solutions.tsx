import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Solutions: React.FC = () => {
  const services = [
    { title: "Gestão de Tráfego", desc: "Google Ads & Meta Ads focados em ROI." },
    { title: "Agentes de IA", desc: "Automação de atendimento no WhatsApp." },
    { title: "Funis de Venda", desc: "Criação de Landing Pages e Copywriting." },
    { title: "Consultoria 360º", desc: "Análise completa do seu processo comercial." },
  ];

  return (
    <section id="solutions" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">
            Como podemos acelerar sua empresa?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-900 border border-slate-800 p-8 rounded-lg hover:border-amber-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden">
               <div className="absolute top-4 right-4 text-slate-700 group-hover:text-amber-500 transition-colors">
                 <ArrowUpRight size={24} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2 font-montserrat">{service.title}</h3>
               <p className="text-slate-400 text-sm">{service.desc}</p>
               <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;