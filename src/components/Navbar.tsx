import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://i.ibb.co/KjjmHHHC/lash-brows-service-logo-LE-auto-x4.jpg" 
              alt="Lash & Brows Logo" 
              className="h-10 w-10 rounded-full object-cover mr-3"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-black tracking-tighter text-brand">
              LASH&BROWS
              <span className="text-gray-900 dark:text-white ml-1">NEAR YOU</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-brand dark:hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#book"
              className="inline-flex bg-brand text-white px-6 py-3 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 items-center justify-center hover:opacity-90"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-brand transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
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
            <div className="pt-4 px-3">
              <a
                href="#book"
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 flex items-center justify-center hover:opacity-90"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="ml-2" size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
