import React from 'react';
import { Compass, Sparkles, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const SUGGESTIONS = [
  { id: 1, name: 'Creative Studio', tag: '#Art', img: 'https://images.unsplash.com/photo-1631604124953-fbbc915dd82f?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Travel Vibes', tag: '#Nature', img: 'https://images.unsplash.com/photo-1728477501317-231e8b95bd13?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Foodie Life', tag: '#Food', img: 'https://images.unsplash.com/photo-1764397514715-37a966071228?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Tech Insider', tag: '#Tech', img: 'https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?auto=format&fit=crop&q=80&w=400' },
];

export function DiscoverView() {
  return (
    <div className="p-6 md:p-8 space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            Descoperă <Sparkles className="text-lime-500" size={24} />
          </h2>
          <p className="text-slate-500">Recomandări personalizate pentru tine</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <TrendingUp size={20} className="text-lime-500" /> Categorii Populare
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {['Fotografie', 'Design', 'Sport', 'Muzică'].map(cat => (
              <button key={cat} className="bg-white border border-slate-100 p-4 rounded-2xl hover:border-lime-300 hover:shadow-sm transition-all text-left">
                <span className="font-medium text-slate-800">{cat}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Compass size={20} className="text-lime-500" /> Canale Noi
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {SUGGESTIONS.map(item => (
              <div key={item.id} className="min-w-[160px] bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="h-24 overflow-hidden">
                  <ImageWithFallback src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="font-bold text-sm truncate">{item.name}</p>
                  <p className="text-lime-600 text-xs font-medium">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <h3 className="text-3xl font-bold max-w-xs">Găsește inspirația în fiecare zi</h3>
          <p className="text-slate-400 max-w-sm">Vezi ce mai fac prietenii tăi și comunitățile de care ești pasionat.</p>
          <button className="bg-lime-400 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-lime-300 transition-colors">
            Începe acum
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      </div>
    </div>
  );
}
