import { motion } from 'motion/react';
import { GraduationCap, CheckCircle2, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Training() {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    { title: t.training.practiceTitle, desc: t.training.practiceDesc },
    { title: t.training.kitTitle, desc: t.training.kitDesc },
    { title: t.training.certTitle, desc: t.training.certDesc },
    { title: language === 'en' ? 'Ongoing Mentorship' : 'Mentorat Continu', desc: language === 'en' ? 'Get mentorship even after your training ends.' : 'Bénéficiez d\'un accompagnement même après la formation.' },
  ];

  return (
    <section id="training" className="py-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-8">
              <div className="inline-flex items-center space-x-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
                <GraduationCap className="text-brand" size={16} />
                <span className="text-brand font-bold text-xs uppercase tracking-widest">
                  {t.training.badge}
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight">
                {t.training.title.split(' ').slice(0, 2).join(' ')} <span className="text-brand">{t.training.title.split(' ').slice(2).join(' ')}</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium text-center lg:text-left">
              {t.training.subheading}
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-brand flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2290161205830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand text-white px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 hover:opacity-90 self-center lg:self-start"
            >
              <span>{t.training.viewDetails}</span>
              <ArrowRight className="ml-2" size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 flex flex-col gap-6">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900 group aspect-square">
                <img
                  src="https://i.ibb.co/8gkGPzxT/Whisk-f59d3db16aed09e9cd443b7187a3870bdr.png"
                  alt="Professional Beauty Training 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900 group aspect-square">
                <img
                  src="https://i.ibb.co/Hvh5cvx/Whisk-13b951e643c8875ad024ef6d9cd54ba2dr.png"
                  alt="Professional Beauty Training 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Added z-20 to bring text to front */}
            <div className="absolute -bottom-10 -right-10 bg-brand p-8 rounded-3xl shadow-2xl text-white z-20">
              <Users size={48} className="mb-4" />
              <p className="text-4xl font-black leading-none">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                {language === 'en' ? 'Students Trained' : 'Élèves Formées'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
