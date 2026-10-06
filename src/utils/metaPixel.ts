/**
 * Meta Pixel Tracking Utility
 * Standardized helper for Meta (Facebook) Pixel integration with Lead Objective support.
 */

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Key for storage override to allow runtime configuration
const LOCAL_STORAGE_KEY = 'meta_pixel_id';

/**
 * Gets the active Meta Pixel ID from environment variables or localStorage override.
 */
export function getMetaPixelId(): string {
  const envId = (import.meta as any).env?.VITE_META_PIXEL_ID || '';
  const localId = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
  return localId.trim() || envId.trim() || '1356255929677434';
}

/**
 * Sets a runtime Meta Pixel ID in localStorage for testing/client-side configuration.
 */
export function setMetaPixelId(pixelId: string): void {
  if (pixelId.trim()) {
    localStorage.setItem(LOCAL_STORAGE_KEY, pixelId.trim());
  } else {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }
}

/**
 * Checks if Meta Pixel is initialized on the window.
 */
export function isPixelInitialized(): boolean {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
}

/**
 * Initializes the Meta Pixel.
 * If a valid Pixel ID is present, it injects the Pixel script and triggers the initial PageView.
 */
export function initMetaPixel(): void {
  if (typeof window === 'undefined') return;

  const pixelId = getMetaPixelId();

  if (!pixelId) {
    console.warn(
      ' [Meta Pixel] No Pixel ID found. Define VITE_META_PIXEL_ID in your .env or set it via the settings panel.'
    );
    return;
  }

  // Standard Meta Pixel Integration Code
  (function (f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(t, s);
    } else {
      b.head.appendChild(t);
    }
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
  
  console.log(`🚀 [Meta Pixel] Initialized successfully with ID: ${pixelId}`);
}

/**
 * Tracks the standard PageView event.
 */
export function trackPageView(): void {
  if (isPixelInitialized()) {
    window.fbq('track', 'PageView');
    console.log('📈 [Meta Pixel] Tracked standard event: PageView');
  } else {
    console.log('📈 [Meta Pixel Simulator] PageView (Pixel not active)');
  }
}

/**
 * Tracks a standard Lead event, which is vital for Lead Objective Ad Campaigns.
 * Useful for when a form is submitted, a messaging button is clicked, or an external booking link is clicked.
 * 
 * @param contentName Name of the specific conversion action (e.g. "WhatsApp Booking", "Manual Booking Form", "Setmore Booking")
 * @param service The name of the beauty service selected by the user
 * @param value Optional currency value associated with the lead
 */
export function trackLead(contentName: string, service?: string, value: number = 0, currency: string = 'USD'): void {
  const pixelId = getMetaPixelId();
  const eventData: Record<string, any> = {
    content_name: contentName,
    content_category: 'Beauty Service',
    value: value,
    currency: currency,
  };

  if (service) {
    eventData.content_ids = [service];
    eventData.contents = [{ id: service, quantity: 1 }];
  }

  if (isPixelInitialized()) {
    window.fbq('track', 'Lead', eventData);
    console.log(`🎯 [Meta Pixel] Tracked standard event: Lead`, eventData);
  } else {
    console.log(`🎯 [Meta Pixel Simulator] Lead Event triggered:`, {
      event: 'Lead',
      pixelId: pixelId || 'Not Configured',
      data: eventData
    });
  }
}

/**
 * Tracks custom events to capture refined actions.
 */
export function trackCustom(eventName: string, params?: Record<string, any>): void {
  if (isPixelInitialized()) {
    window.fbq('trackCustom', eventName, params);
    console.log(`✨ [Meta Pixel] Tracked custom event: ${eventName}`, params);
  } else {
    console.log(`✨ [Meta Pixel Simulator] Custom event triggered: ${eventName}`, params);
  }
}
