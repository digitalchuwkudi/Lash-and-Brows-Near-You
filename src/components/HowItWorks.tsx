import { motion } from 'motion/react';
import { MessageCircle, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Book Online',
      description: 'Book via WhatsApp or our easy online booking system.',
      icon: <Calendar className="text-brand" size={32} />,
    },
    {
      title: 'Choose Service',
      description: 'Choose your desired service and preferred time slot.',
      icon: <MessageCircle className="text-brand" size={32} />,
    },
    {
      title: 'We Come to You',
      description: 'We come to your location in Cotonou at the scheduled time.',
      icon: <MapPin className="text-brand" size={32} />,
    },
    {
      title: 'Transformation',
      description: 'Enjoy your transformation and wake up ready every day.',
      icon: <Sparkles className="text-brand" size={32} />,
    },
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
              How It <span className="text-brand">Works</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
              A simple, stress-free process to get the beauty treatment you deserve.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand/10 -translate-y-1/2 hidden lg:block" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 text-center group"
            >
              <div className="bg-white dark:bg-gray-900 w-24 h-24 rounded-[32px] flex items-center justify-center mb-8 mx-auto shadow-2xl group-hover:scale-110 transition-transform group-hover:rotate-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                {step.description}
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
