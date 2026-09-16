import { motion } from 'motion/react';
import { Home, Clock, ShieldCheck, Heart, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Benefits() {
  const { language } = useLanguage();
  const t = translations[language];

  // Map icons to index
  const icons = [
    <Home className="text-brand" size={32} />,
    <ShieldCheck className="text-brand" size={32} />,
    <Sparkles className="text-brand" size={32} />,
    <Heart className="text-brand" size={32} />,
    <Zap className="text-brand" size={32} />,
    <Clock className="text-brand" size={32} />,
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
              {t.benefits.title} <span className="text-brand">{t.benefits.titleSpan}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              {t.benefits.subheading}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.items.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-10 rounded-[40px] border border-gray-100 dark:border-gray-800 hover:border-brand/30 transition-all group flex flex-col items-center text-center"
            >
              <div className="bg-white dark:bg-gray-950 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
