import React, { useState } from 'react';
import { Heart, MessageSquare, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PostProps {
  post: {
    id: number;
    user: {
      name: string;
      avatar: string;
      handle: string;
    };
    image: string;
    caption: string;
    likes: number;
    comments: number;
    time: string;
  };
}

export function PostCard({ post }: PostProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100">
            <ImageWithFallback src={post.user.avatar} alt={post.user.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">{post.user.name}</h4>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <span>{post.user.handle}</span>
              <span>•</span>
              <span>{post.time} ago</span>
            </div>
          </div>
        </div>
        <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Image */}
      <div 
        className="relative aspect-square overflow-hidden bg-slate-100 cursor-pointer"
        onDoubleClick={() => setLiked(true)}
      >
        <ImageWithFallback 
          src={post.image} 
          alt="Post content" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
        {liked && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Heart size={80} fill="#bef264" className="text-lime-500 shadow-xl" />
          </motion.div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLiked(!liked)}
              className={`p-1 transition-all active:scale-125 ${liked ? 'text-lime-500' : 'text-slate-900'}`}
            >
              <Heart size={26} fill={liked ? 'currentColor' : 'none'} strokeWidth={2.5} />
            </button>
            <button className="p-1 text-slate-900 hover:text-slate-600 transition-colors">
              <MessageSquare size={26} strokeWidth={2.5} />
            </button>
            <button className="p-1 text-slate-900 hover:text-slate-600 transition-colors">
              <Send size={26} strokeWidth={2.5} />
            </button>
          </div>
          <button 
            onClick={() => setSaved(!saved)}
            className={`p-1 transition-all ${saved ? 'text-slate-900' : 'text-slate-900'}`}
          >
            <Bookmark size={26} fill={saved ? 'currentColor' : 'none'} strokeWidth={2.5} />
          </button>
        </div>

        {/* Likes & Caption */}
        <div>
          <p className="text-sm font-black text-slate-900">{post.likes.toLocaleString()} likes</p>
          <p className="text-sm text-slate-800 mt-1">
            <span className="font-bold mr-2">{post.user.handle}</span>
            {post.caption}
          </p>
          <button className="text-slate-400 text-xs font-bold mt-2 hover:text-slate-600 transition-colors">
            View all {post.comments} comments
          </button>
        </div>

        {/* Add Comment */}
        <div className="pt-3 border-t border-slate-50 flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden"></div>
          <input 
            type="text" 
            placeholder="Add a comment..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-1 placeholder:text-slate-300"
          />
          <button className="text-lime-600 font-bold text-sm">Post</button>
        </div>
      </div>
    </motion.article>
  );
}
