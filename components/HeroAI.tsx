import React from 'react';
import { ArrowRight, Check, PlayCircle, ShieldCheck } from 'lucide-react';
import ChatDemo from './ChatDemo';

const HeroAI: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-stone-50 text-stone-900">
      {/* Background System Luxury */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        {/* Gold Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/20 blur-[120px] rounded-full mix-blend-multiply opacity-60" />
        {/* Purple Glow */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/20 blur-[100px] rounded-full mix-blend-multiply opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm mb-8 animate-float">
              <ShieldCheck className="w-4 h-4 text-purple-900" />
              <span className="text-xs font-bold text-stone-600 uppercase tracking-wide">Sistema de Atendimento Inteligente</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 tracking-tight leading-[1.15] mb-6 font-serif">
              Sua clínica investe alto em tráfego para perder o paciente no <br className="hidden lg:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-stone-500 font-bold italic">"Buraco Negro"</span> do WhatsApp?
            </h1>
            
            <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              O <strong>Método PontoChave360</strong> implementa Agentes de IA que atendem, qualificam e agendam pacientes em 5 segundos. Elimine a dependência do humor da recepção.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-stone-900 rounded-full text-white font-medium shadow-xl shadow-stone-900/20 hover:shadow-stone-900/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <div className="flex items-center gap-3 relative z-10">
                    QUERO UMA DEMONSTRAÇÃO
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 px-4 py-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-sm text-stone-500 font-medium tracking-wide">
                      IA ativa na demo ao lado
                  </p>
              </div>
            </div>
          </div>

          {/* Visual Showcase (Chat Demo) */}
          <div className="flex-1 relative w-full max-w-[450px] lg:max-w-none perspective-1000 mx-auto">
             {/* Floating Badge */}
             <div className="absolute -right-4 top-20 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl z-20 animate-[float_4s_infinite_1s] hidden lg:block border border-stone-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Check className="w-5 h-5 text-purple-700" />
                    </div>
                    <div>
                        <p className="text-xs text-stone-500 font-bold uppercase tracking-wide">Agendamento Confirmado</p>
                        <p className="text-sm font-bold text-stone-900">Tempo: 4 segundos</p>
                    </div>
                </div>
             </div>

            <div className="relative transform transition-transform duration-500 lg:rotate-y-[-5deg] hover:rotate-0">
                {/* Phone Frame */}
                <div className="bg-stone-900 p-2.5 rounded-[3rem] shadow-2xl relative z-10 border-4 border-stone-800">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden relative h-[600px]">
                         {/* Dynamic Chat Component */}
                        <ChatDemo />
                    </div>
                </div>
                {/* Shadows behind phone */}
                <div className="absolute inset-0 bg-stone-900/20 blur-3xl transform translate-y-10 scale-90 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAI;