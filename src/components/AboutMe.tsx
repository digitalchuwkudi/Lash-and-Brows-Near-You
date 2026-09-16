import { motion } from 'motion/react';
import { User, Award, Clock, ShieldCheck, Home, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function AboutMe() {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { label: t.aboutMe.stats.experience, value: '5+', icon: <Clock size={24} /> },
    { label: t.aboutMe.stats.clients, value: '150+', icon: <Star size={24} /> },
    { label: t.aboutMe.stats.students, value: '25+', icon: <Award size={24} /> },
    { label: t.aboutMe.stats.mobile, value: 'No. 1', icon: <Home size={24} /> },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-last lg:order-first"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900 group">
              <img
                src="https://i.ibb.co/qLLybcDS/Whisk-02cd61bed33245aae1f44c13d1c491d6dr.png"
                alt="Certified Expert Technician"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-first lg:order-last flex flex-col"
          >
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-8">
              <div className="inline-flex items-center space-x-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <User className="text-brand" size={16} />
                <span className="text-brand font-bold text-xs uppercase tracking-widest">
                  {t.aboutMe.tag}
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight">
                {t.aboutMe.title} <span className="text-brand">{t.aboutMe.titleSpan}</span>
              </h2>
            </div>

            <div className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium space-y-4 text-center lg:text-left">
              <p>{t.aboutMe.bio1}</p>
              <p>{t.aboutMe.bio2}</p>
              <p>{t.aboutMe.bio3}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 group hover:border-brand/30 transition-all flex flex-col items-center text-center">
                  <div className="text-brand mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-black text-gray-900 dark:text-white mb-1 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <ShieldCheck className="text-brand" size={32} />
              <div>
                <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest">
                  {t.aboutMe.hygieneTitle}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {t.aboutMe.hygieneDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
