import { motion } from 'motion/react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
              <Phone className="text-brand" size={16} />
              <span className="text-brand font-bold text-xs uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-tight">
              Contact <span className="text-brand">Us</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              Have questions or need assistance? Reach out to us directly via phone or WhatsApp. We are always here to help!
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="tel:+2290161205830"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-brand dark:hover:border-brand transition-all flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-brand/10 p-5 rounded-full text-brand mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Call Us</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Speak directly with our team.</p>
            <span className="text-xl font-bold text-brand flex items-center">
              +229 01 61 20 58 30
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </span>
          </motion.a>

          <motion.a
            href="https://wa.me/2290190083461"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 transition-all flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <div className="bg-green-500/10 p-5 rounded-full text-green-500 mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle size={32} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">WhatsApp</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Send us a message anytime.</p>
            <span className="text-xl font-bold text-green-500 flex items-center">
              +229 01 90 08 34 61
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
