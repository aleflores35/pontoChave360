import React from 'react';
import { Share2, Instagram, Linkedin, Facebook, Mail, MapPin } from 'lucide-react';

interface FooterProps {
    setPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-slate-400 py-16 border-t border-slate-900 font-sans relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white cursor-pointer" onClick={() => setPage('home')}>
              <div className="bg-cyan-500/10 p-2 rounded border border-cyan-500/20">
                <Share2 className="h-5 w-5 text-cyan-500" />
              </div>
              <span className="font-montserrat font-bold text-xl tracking-tight">PontoChave360</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
              Transformamos negócios locais em máquinas de vendas através de ecossistemas digitais, inteligência artificial e tráfego pago.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white hover:bg-slate-800 transition-all p-2 rounded-full border border-slate-800 hover:border-slate-700">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:bg-slate-800 transition-all p-2 rounded-full border border-slate-800 hover:border-slate-700">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white hover:bg-slate-800 transition-all p-2 rounded-full border border-slate-800 hover:border-slate-700">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-cyan-500 pl-3">Soluções</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><button onClick={() => setPage('home')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-left">Gestão de Tráfego</button></li>
              <li><button onClick={() => setPage('ai-agent')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-left">Agentes de IA</button></li>
              <li><button onClick={() => setPage('delivery-agent')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-left">Delivery AI</button></li>
              <li><button onClick={() => setPage('home')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-left">Funis de Venda</button></li>
            </ul>
          </div>

          {/* Legal & Institucional */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-purple-500 pl-3">Legal</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><button onClick={() => setPage('privacy')} className="hover:text-white transition-colors text-left">Política de Privacidade</button></li>
              <li><button onClick={() => setPage('terms')} className="hover:text-white transition-colors text-left">Termos de Uso</button></li>
              <li><button onClick={() => setPage('privacy')} className="hover:text-white transition-colors text-left">Políticas de Cookies</button></li>
              <li><button onClick={() => { setPage('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100); }} className="hover:text-white transition-colors text-left">Fale Conosco</button></li>
            </ul>
          </div>

          {/* Contact Data */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-amber-500 pl-3">Contato</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                 <Mail size={16} className="text-slate-500 mt-1" />
                 <span>contato@pontochave360.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                 <MapPin size={16} className="text-slate-500 mt-1" />
                 <span>
                   Av. Paulista, 1000 - Bela Vista<br/>
                   São Paulo - SP, 01310-100
                 </span>
              </li>
              <li className="text-xs text-slate-600 mt-4">
                CNPJ: 00.000.000/0001-00
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section: Disclaimer & Copyright */}
        <div className="border-t border-slate-900 pt-8 mt-8">
            
            {/* Meta / Facebook Disclaimer */}
            <div className="max-w-4xl mx-auto text-center mb-8">
                <p className="text-[10px] leading-relaxed text-slate-600 uppercase tracking-wide">
                    Este site não faz parte do site do Facebook ou da Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
                <p>&copy; {currentYear} PontoChave360. Todos os direitos reservados.</p>
                <div className="flex gap-4">
                    <button onClick={() => setPage('privacy')} className="hover:text-white cursor-pointer transition-colors">Privacidade</button>
                    <span>•</span>
                    <button onClick={() => setPage('terms')} className="hover:text-white cursor-pointer transition-colors">Termos</button>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;