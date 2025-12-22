import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-stone-900 group-hover:text-purple-900 transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-purple-900" /> : <ChevronDown className="text-stone-400" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-stone-600 leading-relaxed font-light">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "O atendimento fica robotizado?",
      answer: "Não. Usamos IA Generativa avançada. O agente entende contexto, gírias e até áudios, mantendo uma conversa natural e fluida como se fosse um humano."
    },
    {
      question: "E se o robô não souber responder?",
      answer: "O sistema é programado para transbordar (transferir) para um humano imediatamente caso detecte uma dúvida complexa ou fora do padrão treinado."
    },
    {
      question: "Serve para clínica pequena?",
      answer: "Sim. É ideal para quem tem equipe enxuta, pois libera sua recepcionista de responder perguntas repetitivas para focar no atendimento presencial."
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-stone-900">Perguntas Frequentes</h2>
        </div>
        
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-stone-100">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;