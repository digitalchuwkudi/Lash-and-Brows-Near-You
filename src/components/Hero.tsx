import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col w-full bg-white dark:bg-gray-950 pt-20">
      {/* Video Section (Top) */}
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[120vh] bg-black overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-[1.15]"
          src="https://res.cloudinary.com/dx41voszq/video/upload/ac_none,q_auto,f_auto/v1775074119/0331_1_uhjjpf.mp4"
        />
      </div>

      {/* Text Section (Below Video) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-2 bg-brand/10 px-4 py-2 rounded-full mb-6 border border-brand/20">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span className="text-brand font-bold text-xs uppercase tracking-widest">
              Premium Home Service
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 text-gray-900 dark:text-white tracking-tighter max-w-3xl mx-auto">
            Home Service for <br className="hidden sm:block" />
            <span className="text-orange-500">Lash Extensions, Brows & Lip Blush in Cotonou</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Skip the salon - get flawless results from a certified expert, right at your doorstep.
            Professional beauty care in the comfort of your home.
          </p>

          <div className="flex flex-col items-center space-y-8">
            <div className="relative group">
              <a
                href="#book"
                className="inline-flex items-center justify-center bg-brand text-white px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 hover:opacity-90"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="ml-2" size={24} />
              </a>
              <p className="absolute -bottom-7 left-0 right-0 text-center text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                free, no charges
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-3">
                {[
                  "https://wsrv.nl/?url=i.ibb.co/Z6kL1HDx/glamourous-african-lady-with-lash-extension.jpg&w=128&h=128&fit=cover",
                  "https://wsrv.nl/?url=i.ibb.co/8LPq6CXy/european-microshading-and-lash-extension.jpg&w=128&h=128&fit=cover",
                  "https://wsrv.nl/?url=i.ibb.co/XMP64F4/microshading-done-on-lady.jpg&w=128&h=128&fit=cover",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Client"
                    className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-900 object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-left text-sm">
                <p className="font-black text-gray-900 dark:text-white">70+ Beautiful Women</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Trusted our expertise</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
