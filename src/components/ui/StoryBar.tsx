import React from 'react';
import { Plus } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const STORIES = [
  { id: 1, name: 'Alex Johnson', avatar: 'https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?auto=format&fit=crop&q=80&w=200', active: true },
  { id: 2, name: 'Elena Popescu', avatar: 'https://images.unsplash.com/photo-1730674952644-9cd0235abcda?auto=format&fit=crop&q=80&w=200', active: true },
  { id: 3, name: 'Radu Marinescu', avatar: 'https://images.unsplash.com/photo-1758275557315-53f66f57119a?auto=format&fit=crop&q=80&w=200', active: true },
  { id: 4, name: 'Victor Moise', avatar: 'https://images.unsplash.com/photo-1728477501317-231e8b95bd13?auto=format&fit=crop&q=80&w=200', active: false },
  { id: 5, name: 'Maria Stan', avatar: 'https://images.unsplash.com/photo-1764397514715-37a966071228?auto=format&fit=crop&q=80&w=200', active: false },
];

export function StoryBar() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide py-2">
      <div className="flex flex-col items-center gap-2 shrink-0">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-slate-200 border-dashed flex items-center justify-center p-1 relative cursor-pointer hover:border-lime-400 transition-colors">
          <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
            <Plus size={32} />
          </div>
          <div className="absolute bottom-0 right-0 bg-slate-900 text-lime-400 p-1 rounded-full border-2 border-white">
            <Plus size={12} strokeWidth={4} />
          </div>
        </div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Your Story</span>
      </div>

      {STORIES.map(story => (
        <div key={story.id} className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full p-[3px] transition-transform group-hover:scale-105 ${story.active ? 'bg-gradient-to-tr from-lime-400 to-blue-600' : 'bg-slate-200'}`}>
            <div className="w-full h-full bg-white rounded-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <ImageWithFallback src={story.avatar} alt={story.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter max-w-[64px] truncate text-center">
            {story.name.split(' ')[0]}
          </span >
        </div>
      ))}
    </div>
  );
}
