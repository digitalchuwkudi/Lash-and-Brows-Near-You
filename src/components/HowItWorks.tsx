import { motion } from 'motion/react';
import { MessageCircle, Calendar, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function HowItWorks() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [
    <Calendar className="text-brand" size={32} />,
    <MessageCircle className="text-brand" size={32} />,
    <MapPin className="text-brand" size={32} />,
    <Sparkles className="text-brand" size={32} />,
  ];

  return (
    <section className="py-24 bg-gray-900 dark:bg-gray-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              {t.howItWorks.title} <span className="text-brand">{t.howItWorks.titleSpan}</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
              {t.howItWorks.subheading}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand/10 -translate-y-1/2 hidden lg:block" />

          {t.howItWorks.steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 text-center group"
            >
              <div className="bg-white dark:bg-gray-900 w-24 h-24 rounded-[32px] flex items-center justify-center mb-8 mx-auto shadow-2xl group-hover:scale-110 transition-transform group-hover:rotate-6">
                {icons[idx]}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                {step.desc}
              </p>
              <div className="mt-6 text-brand font-black text-4xl opacity-20">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
