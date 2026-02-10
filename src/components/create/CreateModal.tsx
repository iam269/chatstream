import React, { useState } from 'react';
import { X, Image, MapPin, Smile, Users, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateModal({ isOpen, onClose }: Props) {
  const [text, setText] = useState('');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-xl font-bold">Creează postare</h3>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full shrink-0"></div>
                <textarea 
                  className="w-full bg-transparent border-none focus:ring-0 text-lg resize-none placeholder:text-slate-300 min-h-[120px]"
                  placeholder="Ce ai în minte azi?"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 p-4 bg-lime-50 rounded-2xl text-lime-700 font-semibold hover:bg-lime-100 transition-colors">
                  <Image size={20} /> Galerie
                </button>
                <button className="flex items-center justify-center gap-2 p-4 bg-slate-50 rounded-2xl text-slate-700 font-semibold hover:bg-slate-100 transition-colors">
                  <MapPin size={20} /> Locație
                </button>
              </div>

              <div className="flex items-center justify-between py-2 border-t border-slate-100 pt-6">
                <div className="flex gap-4 text-slate-400">
                  <button className="hover:text-slate-900 transition-colors"><Smile size={24} /></button>
                  <button className="hover:text-slate-900 transition-colors"><Users size={24} /></button>
                  <button className="hover:text-slate-900 transition-colors"><Settings size={24} /></button>
                </div>
                <button 
                  disabled={!text}
                  className={`px-8 py-3 rounded-full font-bold transition-all ${
                    text ? 'bg-slate-900 text-lime-400 shadow-lg active:scale-95' : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                  }`}
                >
                  Postează
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
