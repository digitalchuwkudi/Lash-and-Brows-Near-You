import { motion } from 'motion/react';
import { Sparkles, Eye, Scissors, Heart, Zap, GraduationCap, ArrowRight } from 'lucide-react';

type ServiceItem = { name: string; price: string; duration?: string };
type ServiceGroup = { category: string; icon: JSX.Element; items: ServiceItem[] };

const services: ServiceGroup[] = [
  {
    category: 'Lash Extensions',
    icon: <Eye className="text-brand" size={32} />,
    items: [
      { name: 'Classic lash Extension', price: 'CFA 10,000', duration: '50 mins' },
      { name: '2D/ Hybrid Lash Extension', price: 'CFA 15,000', duration: '50 mins' },
      { name: '3D/ Volume Lash Extension', price: 'CFA 20,000', duration: '1 hr' },
      { name: '4D/ Mega Volume Lash Extension', price: 'CFA 25,000', duration: '1 hr' },
      { name: 'Lash Fill', price: 'CFA 10,000', duration: '30 mins' },
    ],
  },
  {
    category: 'Brows',
    icon: <Sparkles className="text-brand" size={32} />,
    items: [
      { name: 'Retouch of Brows', price: 'CFA 30,000', duration: '45 mins' },
      { name: 'Combo Brows', price: 'CFA 50,000', duration: '1 hr' },
      { name: 'Microshading (Ombre)', price: 'CFA 35,000', duration: '1 hr' },
      { name: 'Microblading', price: 'CFA 40,000', duration: '2 hrs' },
      { name: 'Brow Lamination', price: 'CFA 15,000', duration: '45 mins' },
      { name: 'Brow Correction', price: 'CFA 5,000', duration: '30 mins' },
    ],
  },
  {
    category: 'Lips',
    icon: <Heart className="text-brand" size={32} />,
    items: [
      { name: 'Lip Blush', price: 'CFA 35,000', duration: '30 mins' },
    ],
  },
  {
    category: 'Training',
    icon: <GraduationCap className="text-brand" size={32} />,
    items: [
      { name: 'Microblading & Lash Extensions', price: 'CFA 50,000', duration: '2 hrs' },
      { name: 'Lash Extensions & Brow Lamination', price: 'CFA 45,000', duration: '2 hrs' },
      { name: 'Lash Extension (Includes training kits)', price: 'CFA 30,000', duration: '2 hrs' },
      { name: 'Lash Extensions, Brow Lamination & Semi Permanent Make-Up (Microblading & Microshading)', price: 'CFA 65,000', duration: '2 hrs' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
              Our <span className="text-brand">Signature</span> Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              We use only premium materials and the latest techniques to ensure long-lasting, 
              stunning results that enhance your natural beauty.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-950 p-8 rounded-[32px] shadow-xl border border-gray-100 dark:border-gray-800 hover:border-brand/30 transition-all group flex flex-col h-full"
            >
              <div className="bg-brand/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight text-center">
                {group.category}
              </h3>
              <ul className="space-y-6 flex-grow">
                {group.items.map((item) => (
                  <li key={item.name} className="flex flex-col items-center text-center border-b border-gray-50 dark:border-gray-800 pb-4 last:border-0">
                    <span className="text-gray-700 dark:text-gray-300 font-bold text-sm uppercase tracking-wide mb-1">
                      {item.name}
                    </span>
                    {item.duration && (
                      <span className="text-gray-400 dark:text-gray-500 text-xs mb-2 font-medium">
                        Duration: {item.duration}
                      </span>
                    )}
                    <span className="text-brand font-black text-xs bg-brand/10 px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap mt-1">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <a
                  href="#book"
                  className="w-full bg-brand text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 flex items-center justify-center hover:opacity-90"
                >
                  <span>BOOK NOW</span>
                  <ArrowRight className="ml-2" size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-white dark:bg-gray-950 px-8 py-4 rounded-full shadow-lg border border-gray-100 dark:border-gray-800">
            <Zap className="text-brand animate-pulse" size={24} />
            <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest">
              Book early to secure your slot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
