import React from 'react';
import { Share2, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-500 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <Share2 className="h-6 w-6 text-cyan-500" />
              <span className="font-montserrat font-bold text-2xl tracking-tight">PontoChave360</span>
            </div>
            <p className="max-w-sm mb-8 font-light text-sm">
              Sistemas de crescimento previsível para negócios que desejam escalar com inteligência e automação.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-cyan-400 transition-colors bg-slate-900 p-2 rounded"><Instagram size={18} /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors bg-slate-900 p-2 rounded"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors bg-slate-900 p-2 rounded"><Facebook size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-montserrat font-bold mb-6 text-sm uppercase tracking-wider">Soluções</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Gestão de Tráfego</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agentes de IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Funis de Venda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRM & Dados</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-montserrat font-bold mb-6 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casos de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} PontoChave360. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito com inteligência.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;