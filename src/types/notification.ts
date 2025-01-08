export type NotificationType = 'like' | 'comment' | 'friend_request' | 'system';

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  timestamp: string;
  read: boolean;
  link?: string;
}