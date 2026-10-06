/**
 * Image Proxy Utility
 * Routes third-party CDN images (such as ImgBB/i.ibb.co) through our secure 
 * Express backend proxy to prevent local ISP blocking (net::ERR_CONNECTION_RESET).
 */

export function getProxiedImageUrl(originalUrl: string): string {
  if (!originalUrl) return '';

  // Only proxy external CDNs that suffer from local ISP resets (like i.ibb.co)
  if (originalUrl.includes('i.ibb.co')) {
    return `/api/image-proxy?url=${encodeURIComponent(originalUrl)}`;
  }

  return originalUrl;
}
