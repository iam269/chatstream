import React, { useState } from 'react';
import { 
  Home, 
  Search, 
  Compass, 
  Users, 
  MessageCircle, 
  Bell, 
  PlusSquare, 
  User,
  LogOut,
  MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Feed } from './components/home/Feed';
import { ExploreGrid } from './components/explore/ExploreGrid';
import { DiscoverView } from './components/discover/DiscoverView';
import { ConnectionsList } from './components/connections/ConnectionsList';
import { ChatUI } from './components/messages/ChatUI';
import { NotificationsList } from './components/notifications/NotificationsList';
import { CreateModal } from './components/create/CreateModal';
import { UserProfile } from './components/profile/UserProfile';

type Tab = 'home' | 'explore' | 'discover' | 'connections' | 'messages' | 'notifications' | 'create' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Feed />;
      case 'explore': return <ExploreGrid />;
      case 'discover': return <DiscoverView />;
      case 'connections': return <ConnectionsList />;
      case 'messages': return <ChatUI />;
      case 'notifications': return <NotificationsList />;
      case 'profile': return <UserProfile />;
      default: return <Feed />;
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Search, label: 'Explore' },
    { id: 'discover', icon: Compass, label: 'Discover' },
    { id: 'connections', icon: Users, label: 'Connections' },
    { id: 'messages', icon: MessageCircle, label: 'Messages' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'create', icon: PlusSquare, label: 'Create' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  const handleTabChange = (tab: string) => {
    if (tab === 'create') {
      setIsCreateOpen(true);
    } else {
      setActiveTab(tab as Tab);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex overflow-hidden">
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-64 border-r border-slate-200 bg-white h-screen fixed left-0 top-0 z-20">
        <div className="p-8">
          <h1 className="text-2xl font-bold tracking-tighter text-slate-900">
            Chat<span className="text-lime-500">Stream</span>
          </h1>
        </div>
        
        <div className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">
            <LogOut size={24} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-0 h-screen overflow-y-auto scrollbar-hide">
        <div className="max-w-4xl mx-auto w-full min-h-full pb-10">
          <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md md:hidden flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h1 className="text-xl font-bold tracking-tighter">
              Chat<span className="text-lime-500">Stream</span>
            </h1>
            <button className="p-2 hover:bg-slate-100 rounded-full">
              <MessageCircle size={24} />
            </button>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 flex justify-between items-center z-20">
        {navItems.filter(i => ['home', 'explore', 'create', 'notifications', 'profile'].includes(i.id)).map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabChange(item.id)}
            className={`p-2 rounded-xl transition-colors ${
              activeTab === item.id ? 'text-lime-600' : 'text-slate-400'
            }`}
          >
            <item.icon size={26} strokeWidth={activeTab === item.id ? 2.5 : 2} />
          </button>
        ))}
      </nav>

      {/* Floating Action Button (Mobile Only) */}
      <button 
        onClick={() => setIsCreateOpen(true)}
        className="md:hidden fixed bottom-20 right-6 w-14 h-14 bg-slate-900 text-lime-400 rounded-full shadow-lg flex items-center justify-center z-10 active:scale-95 transition-transform"
      >
        <PlusSquare size={28} />
      </button>

      {/* Create Modal */}
      <CreateModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
    </div>
  );
}
