import { Instagram, MapPin, Phone, Heart, MessageCircle, Youtube } from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#25F4EE" transform="translate(-0.5, -0.5)"/>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FE2C55" transform="translate(0.5, 0.5)"/>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#FFFFFF"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 pt-24 pb-12 overflow-hidden relative transition-colors">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-brand/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 md:gap-3 mb-8">
              <img 
                src="https://i.ibb.co/KjjmHHHC/lash-brows-service-logo-LE-auto-x4.jpg" 
                alt="Lash & Brows Logo" 
                className="h-10 md:h-12 w-auto rounded-full"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl md:text-2xl font-black tracking-tighter text-brand">
                LASH&BROWS
                <span className="text-white ml-1">NEAR YOU</span>
              </span>
            </div>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md mb-10">
              Premium mobile eyelash extension and brows expert in Cotonou. 
              Transforming beauty and building confidence since 2021.
            </p>
            <div className="flex items-center space-x-6">
              <svg width="0" height="0" className="absolute">
                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f09433" />
                  <stop offset="25%" stopColor="#e6683c" />
                  <stop offset="50%" stopColor="#dc2743" />
                  <stop offset="75%" stopColor="#cc2366" />
                  <stop offset="100%" stopColor="#bc1888" />
                </linearGradient>
              </svg>
              {[
                { icon: <Instagram size={24} stroke="url(#ig-gradient)" />, href: 'https://www.instagram.com/lashandbrowsnearyou/', label: 'Instagram' },
                { icon: <TikTokIcon size={24} />, href: 'https://www.tiktok.com/@lashandbrowsnearyou', label: 'TikTok' },
                { icon: <Youtube size={24} color="#FF0000" />, href: 'https://www.youtube.com/@Lashbrowsnearyou1', label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-4 rounded-2xl text-white hover:bg-white/10 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Training', href: '#training' },
                { name: 'Bookings', href: '#book' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 font-bold text-sm hover:text-brand transition-colors uppercase tracking-wide"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">
              Contact Info
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-brand/10 p-2 rounded-lg">
                  <Phone className="text-brand" size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">Phone</p>
                  <a href="tel:+2290190083461" className="text-gray-400 text-sm font-medium hover:text-brand transition-colors block">+229 01 90 08 34 61</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <MessageCircle className="text-green-500" size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">WhatsApp</p>
                  <a href="https://wa.me/2290190083461" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm font-medium hover:text-green-500 transition-colors block">+229 01 90 08 34 61</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-brand/10 p-2 rounded-lg">
                  <MapPin className="text-brand" size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">Location</p>
                  <p className="text-gray-400 text-sm font-medium">Cotonou, Benin Republic</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            © 2026 LASH AND BROWS NEAR YOU. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center space-x-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <span>MADE WITH</span>
            <Heart className="text-brand" size={14} fill="currentColor" />
            <span>IN COTONOU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
