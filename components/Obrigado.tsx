import React from 'react';
import { CheckCircle, ArrowRight, Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface ObrigadoProps {
    setPage: (page: string) => void;
}

const Obrigado: React.FC<ObrigadoProps> = ({ setPage }) => {
    return (
        <div className="absolute inset-0 z-20 min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-50 p-6">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-2xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">

                {/* Icon */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full" />
                        <CheckCircle className="w-24 h-24 text-cyan-400 relative z-10" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-display">
                        Recebemos seu contato!
                    </h1>
                    <p className="text-xl text-slate-400 max-w-lg mx-auto leading-relaxed">
                        Parabéns por dar o primeiro passo. Nossa equipe de especialistas já está analisando suas informações e entrará em contato em breve.
                    </p>
                </div>

                {/* Card of Next Steps */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-left max-w-md mx-auto backdrop-blur-sm">
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                        O que acontece agora?
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                            <p className="text-sm text-slate-300">Vamos analisar seu perfil de negócio.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                            <p className="text-sm text-slate-300">Você receberá uma mensagem no WhatsApp ou E-mail.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                            <p className="text-sm text-slate-300">Agendaremos o seu Diagnóstico Gratuito.</p>
                        </li>
                    </ul>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button
                        onClick={() => {
                            window.history.pushState({}, '', '/');
                            setPage('home');
                        }}
                        className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Voltar para o Início
                    </button>

                    <a
                        href="https://wa.me/5599999999999" // Placeholder WhatsApp
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-50 font-medium border border-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Falar agora no WhatsApp
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Obrigado;
