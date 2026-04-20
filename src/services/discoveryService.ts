import { Video } from '../types';
import { MOCK_VIDEOS } from '../constants';

export class DiscoveryService {
  static getRecommendedVideos(currentVideoId?: string): Video[] {
    // Basic recommendation logic: exclude current video and shuffle/prioritize relevant categories
    let recommendations = [...MOCK_VIDEOS];
    if (currentVideoId) {
      recommendations = recommendations.filter(v => v.id !== currentVideoId);
    }
    return recommendations.sort(() => Math.random() - 0.5);
  }

  static searchVideos(query: string): Video[] {
    const lowerQuery = query.toLowerCase();
    return MOCK_VIDEOS.filter(v => 
      v.title.toLowerCase().includes(lowerQuery) || 
      v.description.toLowerCase().includes(lowerQuery) ||
      v.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
      v.category.toLowerCase().includes(lowerQuery)
    );
  }

  static getVideosByCategory(category: string): Video[] {
    if (category === 'All') return MOCK_VIDEOS;
    return MOCK_VIDEOS.filter(v => v.category === category);
  }
}
