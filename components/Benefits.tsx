import React from 'react';
import { FileText, RefreshCw, LineChart, Settings2, CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
            Por que as clínicas escolhem o nosso ecossistema?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Card 1 */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="flex flex-col h-full justify-between">
                <div>
                     <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-700">
                        <FileText size={24} />
                     </div>
                     <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif">Treinado no seu negócio</h3>
                     <p className="text-stone-600 leading-relaxed">
                        Não é um robô genérico. Ele estuda seus PDFs, protocolos e site. Ele sabe a diferença dos seus procedimentos e vende o seu valor.
                     </p>
                </div>
             </div>
          </div>

          {/* Card 2 */}
          <div className="bg-stone-900 text-white rounded-[2rem] p-8 relative overflow-hidden group">
             <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-6 text-white border border-white/10">
                    <RefreshCw size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">Reativação de Base</h3>
                <p className="text-stone-300 font-light text-sm">
                    A IA chama pacientes antigos automaticamente para oferecer retoques ou novos procedimentos, gerando receita sem custo de anúncio.
                </p>
             </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
             <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 text-amber-600">
                <LineChart size={24} />
             </div>
             <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">Previsibilidade</h3>
             <p className="text-stone-600 text-sm">
                Um funil que funciona todo dia. Elimine a incerteza de depender apenas do esforço manual da equipe.
             </p>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-2 bg-gradient-to-r from-stone-100 to-white rounded-[2rem] p-8 border border-stone-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                 <div className="w-12 h-12 bg-stone-200 rounded-xl flex items-center justify-center mb-6 text-stone-700">
                    <Settings2 size={24} />
                 </div>
                 <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif">Instalação Plug & Play</h3>
                 <p className="text-stone-600">
                     Nós configuramos tudo. Você não precisa entender de código ou tecnologia complexa. Entregamos a solução rodando.
                 </p>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 w-full md:w-auto min-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-xs font-bold text-stone-600">Integração WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-xs font-bold text-stone-600">Treinamento IA</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-xs font-bold text-stone-600">Conexão Agenda</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;