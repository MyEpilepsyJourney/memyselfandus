import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageSquare, UserPlus } from 'lucide-react';
import { Notification } from '../../types/notification';

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({ notification }: NotificationItemProps) {
  const navigate = useNavigate();
  
  const getIcon = () => {
    switch (notification.type) {
      case 'like':
        return <Heart className="w-5 h-5 text-pink-500" />;
      case 'comment':
        return <MessageSquare className="w-5 h-5 text-blue-500" />;
      case 'friend_request':
        return <UserPlus className="w-5 h-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={() => {
        if (notification.link) {
          navigate(notification.link);
        }
      }}
      className={`
        w-full p-4 flex items-start space-x-3 hover:bg-gray-50 transition-colors
        ${!notification.read ? 'bg-indigo-50' : ''}
      `}
    >
      <div className="flex-shrink-0">{getIcon()}</div>
      <div className="flex-1 text-left">
        <p className="text-sm text-gray-900">{notification.message}</p>
        <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
      </div>
    </button>
  );
}