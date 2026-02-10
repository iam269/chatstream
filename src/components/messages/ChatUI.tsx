import React, { useState } from 'react';
import { Send, Phone, Video, Info, Paperclip, Smile } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const CONVERSATIONS = [
  { id: 1, name: 'Alex Johnson', lastMsg: 'Salut! Ce mai faci?', time: '12:30', unread: 2, avatar: 'https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?auto=format&fit=crop&q=80&w=200' },
  { id: 2, name: 'Elena Popescu', lastMsg: 'Trimite-mi pozele de ieri te rog', time: '11:45', unread: 0, avatar: 'https://images.unsplash.com/photo-1730674952644-9cd0235abcda?auto=format&fit=crop&q=80&w=200' },
  { id: 3, name: 'Grupul Tech', lastMsg: 'Victor: Am terminat designul', time: 'Ieri', unread: 0, avatar: 'https://images.unsplash.com/photo-1758275557315-53f66f57119a?auto=format&fit=crop&q=80&w=200' },
];

const MESSAGES = [
  { id: 1, text: 'Salut Alex! Totul e ok?', sent: false },
  { id: 2, text: 'Hey! Da, am văzut postarea ta nouă. Arată super!', sent: true },
  { id: 3, text: 'Mulțumesc mult! Planificăm ceva pe weekend?', sent: false },
  { id: 4, text: 'Cu siguranță! Vorbim mâine pentru detalii.', sent: true },
];

export function ChatUI() {
  const [selectedChat, setSelectedChat] = useState(CONVERSATIONS[0]);
  const [msgInput, setMsgInput] = useState('');

  return (
    <div className="flex h-[calc(100vh-64px)] md:h-screen bg-white">
      {/* Sidebar de chat - Ascuns pe mobil dacă un chat e selectat (opțional, dar simplificăm) */}
      <div className="w-full md:w-80 border-r border-slate-100 flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">Mesaje</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CONVERSATIONS.map(chat => (
            <button 
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors ${selectedChat.id === chat.id ? 'bg-slate-50' : ''}`}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                <ImageWithFallback src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-sm truncate">{chat.name}</h4>
                  <span className="text-[10px] text-slate-400">{chat.time}</span>
                </div>
                <p className="text-xs text-slate-500 truncate">{chat.lastMsg}</p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                  {chat.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="hidden md:flex flex-1 flex-col">
        <header className="p-4 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <ImageWithFallback src={selectedChat.avatar} alt={selectedChat.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-sm">{selectedChat.name}</h4>
              <p className="text-[10px] text-green-500 font-medium uppercase tracking-wider">Activ acum</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button className="hover:text-slate-900"><Phone size={20} /></button>
            <button className="hover:text-slate-900"><Video size={20} /></button>
            <button className="hover:text-slate-900"><Info size={20} /></button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/50">
          {MESSAGES.map(msg => (
            <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-2xl text-sm ${
                msg.sent 
                  ? 'bg-slate-900 text-white rounded-tr-none' 
                  : 'bg-white text-slate-900 border border-slate-100 rounded-tl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <footer className="p-4 bg-white border-t border-slate-100">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-2xl">
            <button className="p-2 text-slate-400 hover:text-slate-900"><Smile size={20} /></button>
            <button className="p-2 text-slate-400 hover:text-slate-900"><Paperclip size={20} /></button>
            <input 
              type="text" 
              placeholder="Scrie un mesaj..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button className={`p-3 rounded-xl transition-all ${msgInput ? 'bg-lime-500 text-white' : 'text-slate-300'}`}>
              <Send size={20} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
