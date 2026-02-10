import React from 'react';
import { Grid, Bookmark, Tag, MapPin, Link as LinkIcon, Settings } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const USER_POSTS = [
  'https://images.unsplash.com/photo-1730674952644-9cd0235abcda?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1728477501317-231e8b95bd13?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1764397514715-37a966071228?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1758275557315-53f66f57119a?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1631604124953-fbbc915dd82f?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?auto=format&fit=crop&q=80&w=400',
];

export function UserProfile() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      {/* Header / Cover */}
      <div className="h-48 md:h-64 bg-slate-900 relative">
        <div className="absolute -bottom-16 left-8 md:left-12">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl border-4 border-white overflow-hidden shadow-lg bg-white">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?auto=format&fit=crop&q=80&w=300" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
              <Settings size={20} />
            </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-20 px-8 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Alex Johnson</h1>
            <p className="text-slate-500 font-medium">@alex_creative</p>
            
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-600">
              <span className="flex items-center gap-1"><MapPin size={14} /> Bucharest, RO</span>
              <span className="flex items-center gap-1"><LinkIcon size={14} /> <a href="#" className="text-lime-600 font-bold hover:underline">alexj.dev</a></span>
            </div>

            <p className="mt-4 text-slate-700 max-w-md leading-relaxed">
              Pasionat de design minimalist, fotografie și tech. Explorând lumea un pixel pe rând. ✨
            </p>
          </div>

          <div className="flex gap-4">
             <button className="flex-1 md:flex-none px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">
               Editează Profil
             </button>
             <button className="px-4 py-3 bg-slate-100 text-slate-900 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95">
               Share
             </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 py-8 border-y border-slate-100 mt-8">
          <div className="text-center">
            <p className="text-xl font-black text-slate-900">128</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Postări</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-black text-slate-900">4.2k</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-black text-slate-900">856</p>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Urmăriți</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center md:justify-start gap-8 mt-4 border-b border-slate-50">
          <button className="pb-4 border-b-2 border-slate-900 text-slate-900 font-bold flex items-center gap-2">
            <Grid size={18} /> Postări
          </button>
          <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-slate-900 font-bold flex items-center gap-2 transition-colors">
            <Bookmark size={18} /> Salvate
          </button>
          <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-slate-900 font-bold flex items-center gap-2 transition-colors">
            <Tag size={18} /> Etichetate
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 py-6">
          {USER_POSTS.map((img, idx) => (
            <div key={idx} className="aspect-square rounded-xl overflow-hidden group relative cursor-pointer">
              <ImageWithFallback src={img} alt={`Post ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white font-bold">
                 <span>❤️ 1.2k</span>
                 <span>💬 48</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
