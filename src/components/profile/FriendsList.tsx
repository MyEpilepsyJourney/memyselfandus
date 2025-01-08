import React from 'react';
import { UserPlus, MessageCircle } from 'lucide-react';
import ProfileSection from './ProfileSection';

interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline';
}

const mockFriends: Friend[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    status: 'online'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    status: 'offline'
  }
];

export default function FriendsList() {
  return (
    <ProfileSection
      title="Friends"
      action={
        <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700">
          <UserPlus className="w-4 h-4" />
          <span>Add Friend</span>
        </button>
      }
    >
      <div className="space-y-4">
        {mockFriends.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={friend.avatar}
                  alt={friend.name}
                  className="w-10 h-10 rounded-full"
                />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
                    friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{friend.name}</h3>
                <p className="text-sm text-gray-500">{friend.status}</p>
              </div>
            </div>
            <button className="p-2 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-gray-100">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
}