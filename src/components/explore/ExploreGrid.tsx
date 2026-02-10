import React from 'react';
import { Search } from 'lucide-react';

const EXPLORE_IMAGES = [
  'https://images.unsplash.com/photo-1730674952644-9cd0235abcda?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1728477501317-231e8b95bd13?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1764397514715-37a966071228?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1758275557315-53f66f57119a?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1631604124953-fbbc915dd82f?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1682687221038-404670f09ef1?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&q=80&w=400',
  'https://images.unsplash.com/photo-1682687220067-dced9a881b56?auto=format&fit=crop&q=80&w=400',
];

export function ExploreGrid() {
  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="relative group max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-lime-500 transition-colors" size={20} />
        <input 
          type="text" 
          placeholder="Caută conținut popular..." 
          className="w-full bg-slate-100 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-lime-500 focus:bg-white transition-all outline-none"
        />
      </div>

      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {EXPLORE_IMAGES.map((img, idx) => (
          <div key={idx} className={`relative aspect-square overflow-hidden rounded-lg group cursor-pointer ${idx % 7 === 0 ? 'col-span-2 row-span-2' : ''}`}>
            <img 
              src={img} 
              alt={`Explore ${idx}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-semibold">🔥 Trending</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
