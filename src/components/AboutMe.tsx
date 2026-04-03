import { motion } from 'motion/react';
import { User, Award, Clock, ShieldCheck, Home, Star } from 'lucide-react';

export default function AboutMe() {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: <Clock size={24} /> },
    { label: 'Happy Clients', value: '150+', icon: <Star size={24} /> },
    { label: 'Trained Students', value: '25+', icon: <Award size={24} /> },
    { label: 'Mobile Expert', value: 'No. 1', icon: <Home size={24} /> },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900">
              <img
                src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=800"
                alt="Certified Expert Technician"
                className="w-full h-auto object-cover"
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
          >
            <div className="inline-flex items-center space-x-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
              <User className="text-brand" size={16} />
              <span className="text-brand font-bold text-xs uppercase tracking-widest">
                About the Expert
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">
              Meet Your <span className="text-brand">Beauty Expert</span>
            </h2>

            <div className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium space-y-4">
              <p>
                I am Josella, a certified esthetician serving clients across Cotonou. With over 5 years of experience in the beauty industry, I specialize in delivering premium, salon-quality results in the comfort of your home or office.
              </p>
              <p>
                No traffic, no waiting — just personalized, professional care tailored to your schedule. I use high-quality products to create fresh, natural, confident and long-lasting looks that enhance your beauty effortlessly.
              </p>
              <p>
                My mission is simple: to give you a relaxing, convenient, and satisfying beauty experience without ever leaving your space.
              </p>
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
                  Strict Hygiene Standards
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Your safety and comfort are my top priorities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
