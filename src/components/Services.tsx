import { motion } from 'motion/react';
import { Sparkles, Eye, Hand, Smile, Flame, GraduationCap, Zap, ArrowRight } from 'lucide-react';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

type ServiceItem = { name: string; price: string; duration?: string };
type ServiceGroup = { category: string; icon: React.ReactNode; items: ServiceItem[] };

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  const services: ServiceGroup[] = [
    {
      category: t.services.categories['Lash Extensions'],
      icon: <Eye className="text-brand" size={32} />,
      items: [
        { name: t.services.items['Classic lash Extension'], price: 'CFA 10,000', duration: language === 'en' ? '1 hr' : '1 h' },
        { name: t.services.items['2D/ Hybrid Lash Extension'], price: 'CFA 15,000', duration: language === 'en' ? '1 hr 20 mins' : '1 h 20' },
        { name: t.services.items['3D/ Volume Lash Extension'], price: 'CFA 25,000', duration: language === 'en' ? '1 hr' : '1 h' },
        { name: t.services.items['4D/ Mega Volume Lash Extension'], price: 'CFA 30,000', duration: language === 'en' ? '1 hr' : '1 h' },
        { name: t.services.items['Lash Fill'], price: 'CFA 10,000', duration: language === 'en' ? '50 mins' : '50 min' },
      ],
    },
    {
      category: t.services.categories['Brows'],
      icon: <Sparkles className="text-brand" size={32} />,
      items: [
        { name: t.services.items['Retouch of Brows'], price: 'CFA 30,000', duration: language === 'en' ? '2 hrs' : '2 h' },
        { name: t.services.items['Combo Brows'], price: 'CFA 50,000', duration: language === 'en' ? '2 hrs' : '2 h' },
        { name: t.services.items['Microshading (Ombre)'], price: 'CFA 35,000', duration: language === 'en' ? '2 hrs' : '2 h' },
        { name: t.services.items['Microblading'], price: 'CFA 40,000', duration: language === 'en' ? '2 hrs' : '2 h' },
        { name: t.services.items['Eyeliner'], price: 'CFA 30,000', duration: language === 'en' ? '1 hr 30 mins' : '1 h 30' },
        { name: t.services.items['Brow Lamination'], price: 'CFA 15,000', duration: language === 'en' ? '40 mins' : '40 min' },
        { name: t.services.items['Brow Coloration'], price: 'CFA 10,000', duration: language === 'en' ? '15 mins' : '15 min' },
        { name: t.services.items['Brow Correction'], price: 'CFA 5,000', duration: language === 'en' ? '30 mins' : '30 min' },
      ],
    },
    {
      category: t.services.categories['Lips'],
      icon: <Smile className="text-brand" size={32} />,
      items: [
        { name: t.services.items['Lip Blush'], price: 'CFA 35,000', duration: language === 'en' ? '1 hr 45 mins' : '1 h 45' },
      ],
    },
    {
      category: t.services.categories['Manicure & Pedicure'],
      icon: <Hand className="text-brand" size={32} />,
      items: [
        { name: t.services.items['Manicure'], price: 'CFA 5,000', duration: language === 'en' ? '45 mins' : '45 min' },
        { name: t.services.items['Pedicure'], price: 'CFA 7,000', duration: language === 'en' ? '1 hr' : '1 h' },
        { name: t.services.items['Pedicure & Manicure Combo'], price: 'CFA 11,500', duration: language === 'en' ? '1 hr 45 mins' : '1 h 45' },
        { name: t.services.items['Manicure & Gel Polish'], price: 'CFA 8,000', duration: language === 'en' ? '1 hr' : '1 h' },
        { name: t.services.items['Manicure & Simple Polish'], price: 'CFA 7,500', duration: language === 'en' ? '50 mins' : '50 min' },
        { name: t.services.items['Pedicure + Gel Polish'], price: 'CFA 15,000', duration: language === 'en' ? '1 hr 15 mins' : '1 h 15' },
        { name: t.services.items['Pedicure + Simple Polish'], price: 'CFA 10,000', duration: language === 'en' ? '1 hr' : '1 h' },
        { name: t.services.items['Pedicure Spa + Gel Polish'], price: 'CFA 15,000', duration: language === 'en' ? '1 hr 30 mins' : '1 h 30' },
        { name: t.services.items['Pedicure Spa + Simple Polish'], price: 'CFA 12,500', duration: language === 'en' ? '1 hr 15 mins' : '1 h 15' },
        { name: t.services.items['Gel Polish Removal'], price: 'CFA 2,000', duration: language === 'en' ? '20 mins' : '20 min' },
      ],
    },
    {
      category: t.services.categories['Waxing'],
      icon: <Flame className="text-brand" size={32} />,
      items: [
        { name: t.services.items['Sugaring: Upper Lip'], price: 'CFA 5,000', duration: language === 'en' ? '15 mins' : '15 min' },
        { name: t.services.items['Sugaring: Face'], price: 'CFA 8,000', duration: language === 'en' ? '30 mins' : '30 min' },
        { name: t.services.items['Sugaring: Chin'], price: 'CFA 5,000', duration: language === 'en' ? '15 mins' : '15 min' },
        { name: t.services.items['Sugaring: Underarm'], price: 'CFA 8,000', duration: language === 'en' ? '20 mins' : '20 min' },
        { name: t.services.items['Sugaring: Half Arms (to Elbow)'], price: 'CFA 10,000', duration: language === 'en' ? '30 mins' : '30 min' },
        { name: t.services.items['Sugaring: Legs Below Knee'], price: 'CFA 10,000', duration: language === 'en' ? '30 mins' : '30 min' },
        { name: t.services.items['Sugaring: Full Legs'], price: 'CFA 20,000', duration: language === 'en' ? '45 mins' : '45 min' },
        { name: t.services.items['Sugaring: Bikini Zone'], price: 'CFA 15,000', duration: language === 'en' ? '40 mins' : '40 min' },
        { name: t.services.items['Hard Wax: Upper Lip'], price: 'CFA 4,500', duration: language === 'en' ? '15 mins' : '15 min' },
        { name: t.services.items['Hard Wax: Face'], price: 'CFA 7,000', duration: language === 'en' ? '30 mins' : '30 min' },
        { name: t.services.items['Hard Wax: Chin'], price: 'CFA 4,000', duration: language === 'en' ? '15 mins' : '15 min' },
        { name: t.services.items['Hard Wax: Underarm'], price: 'CFA 7,000', duration: language === 'en' ? '20 mins' : '20 min' },
        { name: t.services.items['Hard Wax: Half Arms (to Elbow)'], price: 'CFA 8,000', duration: language === 'en' ? '35 mins' : '35 min' },
        { name: t.services.items['Hard Wax: Legs Below Knee'], price: 'CFA 8,000', duration: language === 'en' ? '30 mins' : '30 min' },
        { name: t.services.items['Hard Wax: Full Legs'], price: 'CFA 15,000', duration: language === 'en' ? '45 mins' : '45 min' },
        { name: t.services.items['Hard Wax: Bikini Zone'], price: 'CFA 15,000', duration: language === 'en' ? '40 mins' : '40 min' },
      ],
    },
    {
      category: t.services.categories['Training'],
      icon: <GraduationCap className="text-brand" size={32} />,
      items: [
        { name: t.services.items['Training: Microblading & Lash Extensions'], price: 'CFA 50,000', duration: language === 'en' ? '3 weeks' : '3 semaines' },
        { name: t.services.items['Training: Lash Extensions & Brow Lamination'], price: 'CFA 45,000', duration: language === 'en' ? '2 weeks' : '2 semaines' },
        { name: t.services.items['Training: Lash Extension (Includes training kits)'], price: 'CFA 30,000', duration: language === 'en' ? '2 weeks' : '2 semaines' },
        { name: t.services.items['Training: Lash Extensions, Brow Lamination & Semi Permanent Make-Up'], price: 'CFA 65,000', duration: language === 'en' ? '4 weeks' : '4 semaines' },
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
              <span className="text-brand font-bold text-xs uppercase tracking-widest">{t.services.tag}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
              {t.services.title.split(' ')[0]} <span className="text-brand">{t.services.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              {t.services.subheading}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        {t.services.durationTag}: {item.duration}
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
                  <span>{t.navbar.bookNow}</span>
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
              {language === 'en' ? 'Book early to secure your slot' : 'Réservez tôt pour garantir votre créneau'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
