import { motion } from 'motion/react';
import { GraduationCap, CheckCircle2, Users, Award, ArrowRight } from 'lucide-react';

export default function Training() {
  const features = [
    { title: 'Hands-on Training', desc: 'Learn the latest techniques with practical sessions.' },
    { title: 'Starter Kits Included', desc: 'Get everything you need to start your own business.' },
    { title: 'Certification', desc: 'Receive a recognized certificate upon completion.' },
    { title: 'Ongoing Support', desc: 'Get mentorship even after your training ends.' },
  ];

  return (
    <section id="training" className="py-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
              <GraduationCap className="text-brand" size={16} />
              <span className="text-brand font-bold text-xs uppercase tracking-widest">
                Train with us
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">
              Start Your <span className="text-brand">Beauty</span> Career
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">
              Join our professional training programs and learn from the best. 
              We've trained over 25+ students who are now successful beauty entrepreneurs.
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
              href="#book"
              className="inline-flex items-center justify-center bg-brand text-white px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 hover:opacity-90"
            >
              <span>ENQUIRE ABOUT TRAINING</span>
              <ArrowRight className="ml-2" size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900">
              <img
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800"
                alt="Professional Beauty Training"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Added z-20 to bring text to front */}
            <div className="absolute -bottom-10 -right-10 bg-brand p-8 rounded-3xl shadow-2xl text-white z-20">
              <Users size={48} className="mb-4" />
              <p className="text-4xl font-black leading-none">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                Students Trained
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
