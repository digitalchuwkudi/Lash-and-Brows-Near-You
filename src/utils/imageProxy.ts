/**
 * Image Proxy Utility
 * Routes third-party CDN images (such as ImgBB/i.ibb.co) through global CDN proxy 
 * (wsrv.nl) and Express backend proxy to prevent local ISP blocking (net::ERR_CONNECTION_RESET).
 */

export function getProxiedImageUrl(originalUrl: string): string {
  if (!originalUrl) return '';

  // Data URIs or local relative assets don't need proxying
  if (originalUrl.startsWith('data:') || originalUrl.startsWith('/')) {
    return originalUrl;
  }

  // If it's an ImgBB URL or external image, route through wsrv.nl CDN proxy
  // to bypass ISP connection resets and deliver fast, cross-origin webp images
  if (originalUrl.includes('i.ibb.co') || originalUrl.includes('ibb.co')) {
    return `https://wsrv.nl/?url=${encodeURIComponent(originalUrl)}&output=webp`;
  }

  return originalUrl;
}

export function getFallbackImageUrl(type: 'logo' | 'avatar' | 'technician' | 'gallery' = 'gallery', index: number = 0): string {
  const galleryFallbacks = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80&fit=crop',
  ];

  if (type === 'logo') {
    return 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop&crop=faces';
  }
  if (type === 'avatar') {
    const avatarList = [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop&crop=faces',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&fit=crop&crop=faces',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=128&h=128&fit=crop&crop=faces',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&crop=faces',
    ];
    return avatarList[index % avatarList.length];
  }
  if (type === 'technician') {
    return 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&fit=crop';
  }

  return galleryFallbacks[index % galleryFallbacks.length];
}

