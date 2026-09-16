import { motion } from 'motion/react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { name: t.navbar.home, href: '#' },
    { name: t.navbar.about, href: '#about' },
    { name: t.navbar.services, href: '#services' },
    { name: t.navbar.gallery, href: '#gallery' },
    { name: t.navbar.training, href: '#training' },
    { name: t.navbar.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 md:gap-3">
            <img 
              src="https://i.ibb.co/KjjmHHHC/lash-brows-service-logo-LE-auto-x4.jpg" 
              alt="Lash & Brows Logo" 
              className="h-8 md:h-10 w-auto rounded-full"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg md:text-xl font-black tracking-tighter text-brand">
              LASH&BROWS
              <span className="text-gray-900 dark:text-white ml-1">NEAR YOU</span>
            </span>
          </div>

          {/* Centered Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-grow space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions (CTA + Language Switcher) */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-brand text-white shadow-md'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all ${
                  language === 'fr'
                    ? 'bg-brand text-white shadow-md'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                FR
              </button>
            </div>

            <a
              href="#book"
              className="inline-flex bg-brand text-white px-6 py-3 rounded-2xl font-black text-sm transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 items-center justify-center hover:opacity-90"
            >
              <span>{t.navbar.bookNow}</span>
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Language Switcher Quick-Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-black text-xs flex items-center gap-1.5 hover:text-brand"
            >
              <Globe size={14} />
              <span>{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-brand transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-gray-900 dark:text-white border-b border-gray-50 dark:border-gray-900"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Language Switcher Select */}
            <div className="flex items-center justify-between px-3 py-4 border-b border-gray-50 dark:border-gray-900">
              <span className="text-sm font-black text-gray-400 uppercase tracking-widest">Language / Langue</span>
              <div className="flex items-center bg-gray-100 dark:bg-gray-900 p-1 rounded-xl">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all ${
                    language === 'en'
                      ? 'bg-brand text-white shadow-md'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all ${
                    language === 'fr'
                      ? 'bg-brand text-white shadow-md'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  FR
                </button>
              </div>
            </div>

            <div className="pt-4 px-3">
              <a
                href="#book"
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 flex items-center justify-center hover:opacity-90"
              >
                <span>{t.navbar.bookNow}</span>
                <ArrowRight className="ml-2" size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
