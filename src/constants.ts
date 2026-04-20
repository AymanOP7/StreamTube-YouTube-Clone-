/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const CATEGORIES = [
  'All',
  'Gaming',
  'Music',
  'Mixes',
  'Live',
  'News',
  'Comedy',
  'Programming',
  'Design',
  'Vlogs',
  'Education',
  'Movies',
  'Sports',
];

export const MOCK_VIDEOS = [
  {
    id: '1',
    title: 'Building a full-stack YouTube Clone with React & Firebase',
    description: 'In this video, we build a complete YouTube clone from scratch including authentication, video uploads, and real-time comments.',
    thumbnailUrl: 'https://picsum.photos/seed/yt1/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    duration: '15:24',
    views: 125000,
    likes: [],
    dislikes: [],
    authorId: 'author1',
    authorName: 'CodeWithMe',
    authorAvatar: 'https://picsum.photos/seed/avatar1/100/100',
    category: 'Programming',
    tags: ['react', 'firebase', 'tutorial'],
    createdAt: Date.now() - 86400000,
  },
  {
    id: '2',
    title: 'Top 10 Travel Destinations for 2026',
    description: 'Discover the most beautiful places to visit this year. From hidden gems to famous landmarks.',
    thumbnailUrl: 'https://picsum.photos/seed/yt2/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '10:05',
    views: 45000,
    likes: [],
    dislikes: [],
    authorId: 'author2',
    authorName: 'TravelVibes',
    authorAvatar: 'https://picsum.photos/seed/avatar2/100/100',
    category: 'Vlogs',
    tags: ['travel', 'vlog', '2026'],
    createdAt: Date.now() - 172800000,
  },
  {
    id: '3',
    title: 'Modern Interior Design Trends',
    description: 'Minimalist living and how it can transform your space.',
    thumbnailUrl: 'https://picsum.photos/seed/yt3/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '08:45',
    views: 8900,
    likes: [],
    dislikes: [],
    authorId: 'author3',
    authorName: 'DesignSpace',
    authorAvatar: 'https://picsum.photos/seed/avatar3/100/100',
    category: 'Design',
    tags: ['design', 'interior', 'minimalist'],
    createdAt: Date.now() - 432000000,
  }
];
