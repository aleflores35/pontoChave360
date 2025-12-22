import React, { useEffect, useState } from 'react';
import { Send, ArrowLeft, MoreVertical, Phone, ShoppingBag } from 'lucide-react';

interface Message {
  id: number;
  text: string | React.ReactNode;
  sender: 'bot' | 'user';
  time?: string;
}

const ChatDemoFood: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const fullConversation: Message[] = [
    { id: 1, text: "Boa noite! Quero fazer um pedido.", sender: 'user', time: "20:01" },
    { id: 2, text: "Boa noite! 🍕 Bem-vindo à Pizzaria PontoChave. Segue nosso cardápio digital:", sender: 'bot', time: "20:01" },
    { id: 3, text: <div className="bg-gray-100 p-2 rounded text-xs font-bold text-gray-800">📋 CARDÁPIO ABERTO<br/><span className="font-normal text-gray-600">Toque para ver pizzas e promoções</span></div>, sender: 'bot', time: "20:01" },
    { id: 4, text: "Vou querer uma meia Calabresa, meia Portuguesa. Tamanho G.", sender: 'user', time: "20:02" },
    { id: 5, text: "Ótima escolha! 😋 Gosta de borda recheada? Temos Catupiry e Cheddar.", sender: 'bot', time: "20:02" },
    { id: 6, text: "Com Catupiry, por favor.", sender: 'user', time: "20:03" },
    { id: 7, text: "Perfeito. Vai uma Coca-Cola 2L geladinha para acompanhar por +R$12,00?", sender: 'bot', time: "20:03" },
    { id: 8, text: "Pode mandar!", sender: 'user', time: "20:03" },
    { id: 9, text: "Fechado! 🛵 Total: R$ 82,00 com entrega. Seu pedido já foi para a cozinha!", sender: 'bot', time: "20:04" },
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
            await new Promise(r => setTimeout(r, 1200));
            if (!mounted) break;
            setIsTyping(false);
          } else {
             await new Promise(r => setTimeout(r, 1000));
          }
          setVisibleMessages(prev => [...prev, msg]);
          const chatContainer = document.getElementById('chat-food-scroll');
          if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
          await new Promise(r => setTimeout(r, 1500));
        }
        await new Promise(r => setTimeout(r, 4000));
      }
    };
    runSequence();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="flex flex-col h-full bg-[#E5DDD5] font-sans">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] p-3 px-4 flex items-center justify-between shadow-md z-10 text-white">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-5 h-5" />
          <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
            <ShoppingBag className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm">Delivery 24h</h3>
            <p className="text-[10px] text-gray-200">Online agora</p>
          </div>
        </div>
        <div className="flex gap-4">
            <Phone size={20} />
            <MoreVertical size={20} />
        </div>
      </div>

      {/* Chat Area */}
      <div id="chat-food-scroll" className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-opacity-40">
        {visibleMessages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-[fadeIn_0.3s_ease-out]`}>
            <div className={`max-w-[85%] p-2 px-3 rounded-lg text-sm shadow-sm relative leading-snug ${msg.sender === 'user' ? 'bg-[#DCF8C6] text-gray-800 rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none'}`}>
              {msg.text}
              <div className="text-[9px] text-right mt-1 opacity-50">{msg.time}</div>
            </div>
          </div>
        ))}
        {isTyping && (
           <div className="flex justify-start animate-pulse">
             <div className="bg-white p-2 px-4 rounded-lg rounded-tl-none shadow-sm flex gap-1 items-center h-8">
                <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce delay-150"></span>
             </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-2 bg-[#F0F2F5] flex items-center gap-2">
        <div className="flex-1 bg-white h-10 rounded-full px-4 flex items-center text-gray-400 text-sm border border-gray-200">
          Mensagem
        </div>
        <div className="w-10 h-10 bg-[#075E54] rounded-full flex items-center justify-center text-white shadow-sm">
          <Send size={18} />
        </div>
      </div>
    </div>
  );
};

export default ChatDemoFood;