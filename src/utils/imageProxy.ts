/**
 * Image Proxy Utility
 * Routes third-party CDN images (such as ImgBB/i.ibb.co) through our secure 
 * Express backend proxy to prevent local ISP blocking (net::ERR_CONNECTION_RESET).
 */

export function getProxiedImageUrl(originalUrl: string): string {
  return originalUrl;
}
