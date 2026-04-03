import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: 'https://wsrv.nl/?url=i.ibb.co/G3r8yG6R/Whisk-2c4b0d0237068039bfa43875bab40abddr.png&w=600&h=600&fit=cover', alt: 'Client Work 1' },
    { src: 'https://wsrv.nl/?url=i.ibb.co/7JMFH5Yc/Whisk-4bdc566ce27d842ae67434e18f3bbf0bdr.png&w=600&h=450&fit=cover', alt: 'Client Work 2' },
    { src: 'https://wsrv.nl/?url=i.ibb.co/fGZYZYmJ/Whisk-6c36ed214f857c1a1254996de89bd702dr.png&w=600&h=600&fit=cover', alt: 'Client Work 3' },
    { src: 'https://wsrv.nl/?url=i.ibb.co/S9G4sd0/Whisk-8e67f3169a3880d8d4842165342457b8dr.png&w=600&h=450&fit=cover', alt: 'Client Work 4' },
    { src: 'https://wsrv.nl/?url=i.ibb.co/tp7rmv5j/Whisk-67f1e1efc89cd1980404a7148e857c4cdr.png&w=600&h=600&fit=cover', alt: 'Client Work 5' },
    { src: 'https://wsrv.nl/?url=i.ibb.co/VcRvkBnT/Whisk-a4c50aabff534c98d024baee71b8a816dr.png&w=600&h=450&fit=cover', alt: 'Client Work 6' },
    { src: 'https://wsrv.nl/?url=i.ibb.co/XZ0QNyWM/Whisk-bfa5bb843355e5dbb3d424afc2b4ad66dr.png&w=600&h=600&fit=cover', alt: 'Client Work 7' },
    { src: 'https://wsrv.nl/?url=i.ibb.co/cKMQTz5q/Whisk-f3b37f99d6a1f7da8a7474591d20218bdr.png&w=600&h=450&fit=cover', alt: 'Client Work 8' },
    { src: 'https://wsrv.nl/?url=i.ibb.co/cKr0hC28/Whisk89872c2152b2fbc91a54a9eb9562fa7deg.png&w=600&h=1066&fit=cover', alt: 'Client Work 9' },
    { src: 'https://wsrv.nl/?url=i.ibb.co/35G3YQ7L/Whisk-ffa3ebe3bd7b8ccbb6b4a77df97b9d75dr.png&w=600&h=1066&fit=cover', alt: 'Client Work 10' },
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
