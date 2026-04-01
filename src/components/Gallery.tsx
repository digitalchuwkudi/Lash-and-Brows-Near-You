import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1588513706482-66cf53642474?q=80&w=600', alt: 'Lash Extension' },
    { src: 'https://images.unsplash.com/photo-1512496015851-a1c82246411d?q=80&w=600', alt: 'Brow Lamination' },
    { src: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600', alt: 'Lip Blush' },
    { src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=600', alt: 'Classic Lash' },
    { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600', alt: 'Microblading' },
    { src: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=600', alt: 'Volume Lash' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
              Our <span className="text-brand">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              See the stunning transformations we've created for our beautiful clients.
            </p>
          </motion.div>
        </div>

        <div className="columns-2 md:columns-3 gap-8 space-y-8">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-[32px] overflow-hidden shadow-xl border-4 border-white dark:border-gray-900"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-black text-xs uppercase tracking-widest bg-brand px-6 py-3 rounded-full">
                  VIEW WORK
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
