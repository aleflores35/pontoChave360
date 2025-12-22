import React, { useEffect, useState } from 'react';
import { Send, Sparkles, MoreVertical, Phone, ArrowLeft } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  time?: string;
}

const ChatDemo: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const fullConversation: Message[] = [
    { id: 1, text: "Olá! Gostaria de saber o valor do Botox.", sender: 'user', time: "09:41" },
    { id: 2, text: "Olá! Que bom te ver por aqui ✨. O valor depende da avaliação, mas trabalhamos com Botox Allergan original.", sender: 'bot', time: "09:41" },
    { id: 3, text: "Temos horários disponíveis para avaliação gratuita esta semana. Gostaria de ver a agenda?", sender: 'bot', time: "09:42" },
    { id: 4, text: "Sim, por favor. Pode ser na quinta?", sender: 'user', time: "10:05" },
    { id: 5, text: "Perfeito! Tenho vaga às 14:00 e às 16:30 na quinta-feira com a Dra. Ana.", sender: 'bot', time: "10:05" },
    { id: 6, text: "Pode ser às 16:30.", sender: 'user', time: "10:08" },
    { id: 7, text: "Agendado! 📅 Quinta-feira, 16:30. Enviei as orientações pré-procedimento para seu e-mail. Algo mais?", sender: 'bot', time: "10:09" },
  ];

  useEffect(() => {
    let mounted = true;

    const runSequence = async () => {
      while (mounted) {
        setVisibleMessages([]);
        
        for (const msg of fullConversation) {
          if (!mounted) break;
          
          if (msg.sender === 'bot') {
            setIsTyping(true);
            await new Promise(r => setTimeout(r, 1000));
            if (!mounted) break;
            setIsTyping(false);
          } else {
             await new Promise(r => setTimeout(r, 800));
          }
          
          setVisibleMessages(prev => [...prev, msg]);
          
          const chatContainer = document.getElementById('chat-scroll-area');
          if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;

          await new Promise(r => setTimeout(r, msg.sender === 'bot' ? 1500 : 1000));
        }
        
        await new Promise(r => setTimeout(r, 3000));
      }
    };

    runSequence();

    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#E5DDD5]">
      {/* Header WhatsApp Style */}
      <div className="bg-stone-100 p-3 px-4 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-3">
            <ArrowLeft className="text-stone-500 w-5 h-5" />
          <div className="relative">
            <div className="w-9 h-9 bg-purple-900 rounded-full flex items-center justify-center">
              <Sparkles className="text-amber-400 w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-stone-900 font-semibold text-sm">Clínica Estética</h3>
            <p className="text-stone-500 text-[10px]">IA • Online 24h</p>
          </div>
        </div>
        <div className="flex gap-4 text-purple-900">
            <Phone size={20} />
            <MoreVertical size={20} />
        </div>
      </div>

      {/* Chat Area */}
      <div id="chat-scroll-area" className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-opacity-40">
        <div className="flex justify-center my-2">
           <span className="bg-white/80 backdrop-blur-sm text-stone-600 text-[10px] px-2 py-1 rounded shadow-sm">HOJE</span>
        </div>

        {visibleMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeIn_0.3s_ease-out]`}
          >
            <div
              className={`max-w-[80%] p-2 px-3 rounded-lg text-sm shadow-sm relative leading-snug ${
                msg.sender === 'user'
                  ? 'bg-[#DCF8C6] text-stone-800 rounded-tr-none'
                  : 'bg-white text-stone-800 rounded-tl-none'
              }`}
            >
              {msg.text}
              <div className={`text-[9px] text-right mt-1 opacity-60`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
           <div className="flex justify-start animate-pulse">
             <div className="bg-white p-2 px-4 rounded-lg rounded-tl-none shadow-sm flex gap-1 items-center h-8">
                <span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-1 h-1 bg-stone-400 rounded-full animate-bounce delay-150"></span>
             </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-2 bg-[#F0F2F5] flex items-center gap-2">
        <div className="flex-1 bg-white h-10 rounded-full px-4 flex items-center text-stone-400 text-sm border border-stone-200">
          Mensagem
        </div>
        <div className="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center text-white shadow-sm">
          <Send size={18} />
        </div>
      </div>
    </div>
  );
};

export default ChatDemo;