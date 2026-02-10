import React from 'react';
import { Heart, MessageSquare, UserPlus, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const NOTIFICATIONS = [
  { id: 1, type: 'like', user: 'Alex Johnson', content: 'a apreciat postarea ta.', time: '2m', avatar: 'https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?auto=format&fit=crop&q=80&w=200' },
  { id: 2, type: 'comment', user: 'Elena Popescu', content: 'a comentat: "Superb!"', time: '15m', avatar: 'https://images.unsplash.com/photo-1730674952644-9cd0235abcda?auto=format&fit=crop&q=80&w=200' },
  { id: 3, type: 'follow', user: 'Radu Marinescu', content: 'a început să te urmărească.', time: '1h', avatar: 'https://images.unsplash.com/photo-1758275557315-53f66f57119a?auto=format&fit=crop&q=80&w=200' },
  { id: 4, type: 'mention', user: 'Victor Moise', content: 'te-a menționat într-un story.', time: '3h', avatar: 'https://images.unsplash.com/photo-1728477501317-231e8b95bd13?auto=format&fit=crop&q=80&w=200' },
];

export function NotificationsList() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'like': return <Heart className="text-red-500" size={16} fill="currentColor" />;
      case 'comment': return <MessageSquare className="text-blue-500" size={16} />;
      case 'follow': return <UserPlus className="text-lime-600" size={16} />;
      case 'mention': return <Star className="text-yellow-500" size={16} />;
      default: return null;
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Notificări</h2>
        <button className="text-lime-600 text-sm font-semibold hover:underline">Șterge tot</button>
      </div>

      <div className="space-y-1">
        {NOTIFICATIONS.map(notif => (
          <div key={notif.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all cursor-pointer group">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <ImageWithFallback src={notif.avatar} alt={notif.user} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                {getIcon(notif.type)}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-bold text-slate-900">{notif.user}</span>{' '}
                <span className="text-slate-500">{notif.content}</span>
              </p>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">{notif.time} ago</span>
            </div>
            <div className="w-2 h-2 bg-lime-500 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
          </div>
        ))}
      </div>

      <section className="mt-8">
        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Ieri</h3>
        <div className="space-y-1 opacity-60">
           {/* Similar list items... */}
           <div className="flex items-center gap-4 p-4">
             <div className="w-12 h-12 bg-slate-200 rounded-full animate-pulse"></div>
             <div className="flex-1 space-y-2">
               <div className="w-2/3 h-3 bg-slate-200 rounded animate-pulse"></div>
               <div className="w-1/4 h-2 bg-slate-200 rounded animate-pulse"></div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
