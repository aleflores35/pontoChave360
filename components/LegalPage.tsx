import React, { useEffect } from 'react';
import { ArrowLeft, Shield, FileText } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  setPage: (page: string) => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, setPage }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const content = {
    privacy: {
      title: "Política de Privacidade",
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      updated: "Atualizado em: 26 de Outubro de 2023",
      text: (
        <div className="space-y-6 text-slate-300 font-light leading-relaxed">
          <p>
            A <strong>PontoChave360</strong> ("nós", "nosso") valoriza a privacidade de seus usuários ("usuário", "você"). Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Coleta de Dados</h3>
          <p>Coletamos informações que você nos fornece diretamente, como:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dados de identificação (Nome, E-mail, Telefone/WhatsApp) ao preencher formulários de contato ou diagnóstico.</li>
            <li>Dados de navegação (Endereço IP, tipo de navegador, páginas visitadas) coletados automaticamente via Cookies e Pixel do Facebook/Google Analytics.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Uso das Informações</h3>
          <p>Utilizamos seus dados para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Entrar em contato para agendamento de diagnósticos ou demonstrações.</li>
            <li>Melhorar a experiência do usuário em nosso site.</li>
            <li>Exibir anúncios personalizados (Remarketing) em plataformas de terceiros.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Compartilhamento de Dados</h3>
          <p>
            Não vendemos seus dados. Podemos compartilhar informações com parceiros de tecnologia estritamente necessários para a operação do serviço (ex: provedores de hospedagem, ferramentas de CRM e plataformas de automação), sob acordos de confidencialidade.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Cookies e Rastreamento</h3>
          <p>
            Utilizamos cookies para rastrear a atividade em nosso serviço. Você pode instruir seu navegador a recusar todos os cookies, mas algumas partes do nosso serviço podem não funcionar corretamente sem eles.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Seus Direitos (LGPD)</h3>
          <p>Você tem o direito de solicitar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confirmação da existência de tratamento de dados.</li>
            <li>Acesso aos dados coletados.</li>
            <li>Correção de dados incompletos ou desatualizados.</li>
            <li>Eliminação dos dados pessoais (salvo em casos de cumprimento legal).</li>
          </ul>
          <p className="mt-4">
            Para exercer seus direitos, entre em contato via e-mail: <strong>contato@pontochave360.com.br</strong>.
          </p>
        </div>
      )
    },
    terms: {
      title: "Termos de Uso",
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      updated: "Atualizado em: 26 de Outubro de 2023",
      text: (
        <div className="space-y-6 text-slate-300 font-light leading-relaxed">
          <p>
            Ao acessar o site da <strong>PontoChave360</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Licença de Uso</h3>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site PontoChave360, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Isenção de Responsabilidade</h3>
          <p>
            Os materiais no site da PontoChave360 são fornecidos "como estão". Não oferecemos garantias, expressas ou implícitas, e, por este meio, isentamos e negamos todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.
          </p>
          <p>
            Além disso, não garantimos resultados específicos de faturamento ou crescimento, visto que o sucesso de estratégias de marketing depende de variáveis externas ao nosso controle.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Limitações</h3>
          <p>
            Em nenhum caso a PontoChave360 ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Links de Terceiros</h3>
          <p>
            Não analisamos todos os sites vinculados ao nosso site e não somos responsáveis ​​pelo conteúdo de nenhum site vinculado. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Lei Aplicável</h3>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>
      )
    }
  };

  const data = content[type];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      
      {/* Simple Header */}
      <div className="border-b border-slate-800 bg-slate-950/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
           <button 
             onClick={() => setPage('home')}
             className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wide"
           >
             <ArrowLeft size={16} />
             Voltar
           </button>
           <span className="text-white font-montserrat font-bold">PontoChave360</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 border-b border-slate-800 pb-8">
            <div className="mb-6 bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-800">
                {data.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-4">{data.title}</h1>
            <p className="text-slate-500 text-sm">{data.updated}</p>
        </div>

        {data.text}

        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
            <button 
                onClick={() => setPage('home')}
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded font-bold transition-all"
            >
                Entendi, voltar para o site
            </button>
        </div>
      </main>

    </div>
  );
};

export default LegalPage;