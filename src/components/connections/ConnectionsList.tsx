import React from 'react';
import { UserPlus, Check, MoreHorizontal } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const FRIENDS = [
  { id: 1, name: 'Andrei Vasile', status: 'Online', avatar: 'https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?auto=format&fit=crop&q=80&w=200', following: true },
  { id: 2, name: 'Maria Ionescu', status: 'Inactiv de 2h', avatar: 'https://images.unsplash.com/photo-1730674952644-9cd0235abcda?auto=format&fit=crop&q=80&w=200', following: true },
  { id: 3, name: 'Cristian Stan', status: 'Online', avatar: 'https://images.unsplash.com/photo-1758275557315-53f66f57119a?auto=format&fit=crop&q=80&w=200', following: false },
  { id: 4, name: 'Ana Dumitru', status: 'Inactiv de 5m', avatar: 'https://images.unsplash.com/photo-1764397514715-37a966071228?auto=format&fit=crop&q=80&w=200', following: false },
  { id: 5, name: 'Victor Moise', status: 'Online', avatar: 'https://images.unsplash.com/photo-1728477501317-231e8b95bd13?auto=format&fit=crop&q=80&w=200', following: true },
];

export function ConnectionsList() {
  return (
    <div className="p-6 md:p-8 max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Conexiuni</h2>
        <p className="text-slate-500">Gestionează prietenii și urmăritorii tăi</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <h3 className="font-semibold text-slate-700 uppercase text-xs tracking-wider">Sugestii pentru tine</h3>
        </div>
        
        {FRIENDS.map(user => (
          <div key={user.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-50 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <ImageWithFallback src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                {user.status === 'Online' && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{user.name}</h4>
                <p className="text-xs text-slate-400">{user.status}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm transition-all ${
                user.following 
                  ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                  : 'bg-lime-400 text-slate-900 hover:bg-lime-300'
              }`}>
                {user.following ? (
                  <>
                    <Check size={16} /> Urmărești
                  </>
                ) : (
                  <>
                    <UserPlus size={16} /> Follow
                  </>
                )}
              </button>
              <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
