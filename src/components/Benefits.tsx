import { motion } from 'motion/react';
import { Home, Clock, ShieldCheck, Heart, Sparkles, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: 'No Salon Visits',
      description: 'No need to visit a salon so you save cost and travel time.',
      icon: <Home className="text-brand" size={32} />,
    },
    {
      title: 'Professional & Certified',
      description: 'Get flawless results from a professional & certified technician.',
      icon: <ShieldCheck className="text-brand" size={32} />,
    },
    {
      title: 'Strict Hygiene',
      description: 'We follow strict hygiene standards for your safety and comfort.',
      icon: <Sparkles className="text-brand" size={32} />,
    },
    {
      title: 'Comfort & Privacy',
      description: 'Enjoy your transformation in the comfort & privacy of your home.',
      icon: <Heart className="text-brand" size={32} />,
    },
    {
      title: 'Long-lasting Results',
      description: 'Perfect for busy women and mothers who want to wake up ready.',
      icon: <Zap className="text-brand" size={32} />,
    },
    {
      title: 'Time-Saving',
      description: 'Cuts your morning makeup time to half. Wake up ready every day.',
      icon: <Clock className="text-brand" size={32} />,
    },
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
              Why Choose Our <span className="text-brand">Home Service?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              We bring the salon experience to your doorstep, providing premium care 
              without the stress of travel or waiting.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-10 rounded-[40px] border border-gray-100 dark:border-gray-800 hover:border-brand/30 transition-all group flex flex-col items-center text-center"
            >
              <div className="bg-white dark:bg-gray-950 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
