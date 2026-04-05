import { motion } from 'motion/react';
import { useRef } from 'react';

export default function Testimonials() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (currentIndex: number) => {
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== currentIndex) {
        video.pause();
      }
    });
  };

  const videos = [
    'https://res.cloudinary.com/dx41voszq/video/upload/c_limit,w_720,q_auto:good,f_auto/v1775373472/Lash_extension_brow_lip_blush_testimonial13_agoqqi.mp4',
    'https://res.cloudinary.com/dx41voszq/video/upload/c_limit,w_720,q_auto:good,f_auto/v1775373338/Lash_extension_brow_lip_blush_testimonial15_pyuj5o.mp4',
    'https://res.cloudinary.com/dx41voszq/video/upload/c_limit,w_720,q_auto:good,f_auto/v1775373266/Lash_extension_brow_lip_blush_testimonial7_h9urfp.mp4',
    'https://res.cloudinary.com/dx41voszq/video/upload/c_limit,w_720,q_auto:good,f_auto/v1775373265/Lash_extension_brow_lip_blush_testimonial11_apafte.mp4',
    'https://res.cloudinary.com/dx41voszq/video/upload/c_limit,w_720,q_auto:good,f_auto/v1775373065/Lash_extension_brow_lip_blush_testimonial18_hiuhn0.mp4',
    'https://res.cloudinary.com/dx41voszq/video/upload/c_limit,w_720,q_auto:good,f_auto/v1775373039/Lash_extension_brow_lip_blush_testimonial4_do3evy.mp4',
    'https://res.cloudinary.com/dx41voszq/video/upload/c_limit,w_720,q_auto:good,f_auto/v1775372956/Lash_extension_brow_lip_blush_testimonial5_gs0wmx.mp4',
    'https://res.cloudinary.com/dx41voszq/video/upload/c_limit,w_720,q_auto:good,f_auto/v1775372847/Lash_extension_brow_lip_blush_testimonial9_byfibz.mp4',
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
              What Our <span className="text-brand">Clients</span> Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              Trusted by more than 150+ beautiful women in Cotonou. Watch their transformation stories.
            </p>
          </motion.div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1 }}
              className="relative rounded-[32px] overflow-hidden shadow-xl border-4 border-white dark:border-gray-950 break-inside-avoid bg-black group aspect-[9/16]"
            >
              <video
                ref={(el) => { videoRefs.current[idx] = el; }}
                src={video}
                poster={video.replace('.mp4', '.jpg')}
                controls
                playsInline
                preload="none"
                onPlay={() => handlePlay(idx)}
                className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
