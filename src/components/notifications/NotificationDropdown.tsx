import React from 'react';
import { Check } from 'lucide-react';
import { Notification } from '../../types/notification';
import NotificationItem from './NotificationItem';

interface NotificationDropdownProps {
  notifications: Notification[];
  onClose: () => void;
  onMarkAllRead: () => void;
}

export default function NotificationDropdown({
  notifications,
  onClose,
  onMarkAllRead
}: NotificationDropdownProps) {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <button
            onClick={onMarkAllRead}
            className="flex items-center space-x-1 text-sm text-indigo-600 hover:text-indigo-700"
          >
            <Check className="w-4 h-4" />
            <span>Mark all as read</span>
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            No notifications yet
          </div>
        )}
      </div>
    </div>
  );
}