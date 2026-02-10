import React from 'react';
import { StoryBar } from '../ui/StoryBar';
import { PostCard } from '../ui/PostCard';

const MOCK_POSTS = [
  {
    id: 1,
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1751093383900-dbf2a79169f8?auto=format&fit=crop&q=80&w=200',
      handle: '@alexj'
    },
    image: 'https://images.unsplash.com/photo-1728477501317-231e8b95bd13?auto=format&fit=crop&q=80&w=800',
    caption: 'Explorând culmile dimineții. Un răsărit magic! ✨ #nature #freedom',
    likes: 1240,
    comments: 42,
    time: '2h'
  },
  {
    id: 2,
    user: {
      name: 'Elena Popescu',
      avatar: 'https://images.unsplash.com/photo-1730674952644-9cd0235abcda?auto=format&fit=crop&q=80&w=200',
      handle: '@elenap'
    },
    image: 'https://images.unsplash.com/photo-1764397514715-37a966071228?auto=format&fit=crop&q=80&w=800',
    caption: 'Cea mai bună cină din oraș. Recomand cu drag acest loc! 🍝🍷',
    likes: 856,
    comments: 18,
    time: '5h'
  },
  {
    id: 3,
    user: {
      name: 'Radu Marinescu',
      avatar: 'https://images.unsplash.com/photo-1758275557315-53f66f57119a?auto=format&fit=crop&q=80&w=200',
      handle: '@radum'
    },
    image: 'https://images.unsplash.com/photo-1631604124953-fbbc915dd82f?auto=format&fit=crop&q=80&w=800',
    caption: 'Arhitectura minimalistă mă inspiră mereu în proiectele mele.',
    likes: 2100,
    comments: 95,
    time: '1d'
  }
];

export function Feed() {
  return (
    <div className="py-6 px-4 md:px-8 space-y-8 max-w-2xl mx-auto">
      <StoryBar />
      
      <div className="space-y-6">
        {MOCK_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
