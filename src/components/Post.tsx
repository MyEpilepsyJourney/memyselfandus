import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Post as PostType } from '../types/post';

type PostProps = PostType;

export default function Post({ 
  author, 
  avatar, 
  content, 
  timestamp, 
  likes, 
  comments,
  mood 
}: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <img 
              src={avatar} 
              alt={author} 
              className="w-8 h-8 rounded-full"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/32";
              }}
            />
            <div>
              <h3 className="font-medium text-sm">{author}</h3>
              <p className="text-xs text-gray-500">{timestamp}</p>
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-sm text-gray-800 mb-3">{content}</p>
        
        <div className="flex items-center justify-between pt-3 border-t">
          <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500">
            <Heart className="w-4 h-4" />
            <span className="text-xs">{likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs">{comments}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500">
            <Share2 className="w-4 h-4" />
            <span className="text-xs">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}