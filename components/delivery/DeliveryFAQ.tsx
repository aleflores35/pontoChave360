import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DeliveryFAQ: React.FC = () => {
  const faqs = [
    { q: "O cliente precisa baixar algum app?", a: "Não, tudo acontece no WhatsApp que ele já usa diariamente." },
    { q: "E se o cliente quiser mudar um ingrediente?", a: "O Agente entende observações como 'sem cebola' ou 'borda recheada' e repassa para a cozinha." },
    { q: "Funciona para Pizzaria e Lanchonete?", a: "Sim, adaptamos o cardápio e a linguagem para qualquer tipo de delivery de alimentação." },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white font-montserrat">Dúvidas Frequentes</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((item, idx) => (
             <FAQItem key={idx} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{q: string, a: string}> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-zinc-800 rounded-lg bg-zinc-900/30 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 flex justify-between items-center text-left text-gray-200 font-medium hover:bg-zinc-800/50 transition-colors"
            >
                {q}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
                <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-zinc-800/50 mt-2">
                    {a}
                </div>
            )}
        </div>
    )
}

export default DeliveryFAQ;