import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-medium sm:text-5xl mb-6">Uma estrutura validada para o mercado de Saúde e Beleza.</h2>
          <p className="text-stone-400 font-light text-lg">
             A PontoChave360 não é apenas uma agência de marketing. Somos especialistas em estruturação de sistemas de crescimento. Já analisamos centenas de interações para criar o script perfeito de conversão para estética.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:border-amber-500/50 transition-colors">
            <div className="flex gap-1 text-amber-500 mb-6">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
            </div>
            <p className="text-stone-300 mb-8 text-lg font-light italic">
              "Minha recepção ficava louca com tantas mensagens no Instagram. A IA agora responde preços e agenda avaliações sozinha. Minha conversão aumentou 40%."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-amber-500"></div>
              <div>
                <h4 className="font-bold text-white text-lg font-serif">Dra. Juliana M.</h4>
                <p className="text-sm text-stone-400">Dermatologista</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:border-amber-500/50 transition-colors">
             <div className="flex gap-1 text-amber-500 mb-6">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
            </div>
            <p className="text-stone-300 mb-8 text-lg font-light italic">
              "O que mais gostei foi a reativação. A IA mandou mensagem para pacientes que não vinham há 6 meses e lotou minha agenda de limpeza de pele e botox."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-amber-500"></div>
              <div>
                <h4 className="font-bold text-white text-lg font-serif">Carla S.</h4>
                <p className="text-sm text-stone-400">Dona de Clínica de Estética</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 hover:border-amber-500/50 transition-colors">
             <div className="flex gap-1 text-amber-500 mb-6">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
            </div>
            <p className="text-stone-300 mb-8 text-lg font-light italic">
              "Elegante e funcional. Meus pacientes acham que estão falando com uma secretária extremamente educada. A tecnologia é impressionante."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-amber-500"></div>
              <div>
                <h4 className="font-bold text-white text-lg font-serif">Dra. Fernanda L.</h4>
                <p className="text-sm text-stone-400">Harmonização Facial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;