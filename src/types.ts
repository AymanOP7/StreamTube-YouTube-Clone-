/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  subscribers: number;
  subscribedTo: string[]; // List of channel IDs
  createdAt: number;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: number;
  likes: string[]; // List of user IDs
  dislikes: string[]; // List of user IDs
  authorId: string;
  authorName: string;
  authorAvatar: string;
  category: string;
  tags: string[];
  createdAt: number;
}

export interface Comment {
  id: string;
  videoId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  text: string;
  likes: string[];
  replyToId?: string; // For nested replies
  createdAt: number;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'upload' | 'reply' | 'like' | 'subscribe';
  fromUserId: string;
  fromUserName: string;
  videoId?: string;
  read: boolean;
  createdAt: number;
}
