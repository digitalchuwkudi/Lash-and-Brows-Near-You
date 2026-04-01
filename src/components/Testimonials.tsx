import { motion } from 'motion/react';
import { Star, Quote, Play } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Busy Mother',
      content: 'The convenience of having my lashes done at home is unmatched. The results are flawless and last for weeks!',
      rating: 5,
      videoThumb: 'https://images.unsplash.com/photo-1512496015851-a1c82246411d?q=80&w=400&h=600&fit=crop',
    },
    {
      name: 'Elena K.',
      role: 'Professional',
      content: 'I save so much time in the morning now. My brows look perfect every day without any effort. Highly recommend!',
      rating: 5,
      videoThumb: 'https://images.unsplash.com/photo-1588513706482-66cf53642474?q=80&w=400&h=600&fit=crop',
    },
    {
      name: 'Jessica T.',
      role: 'Student',
      content: 'Amazing service! The technician is so professional and the hygiene standards are top-notch. Best in Cotonou.',
      rating: 5,
      videoThumb: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=400&h=600&fit=crop',
    },
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-950 p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800 relative group hover:border-brand/30 transition-all flex flex-col h-full"
            >
              <Quote className="absolute top-8 right-8 text-brand/10 group-hover:text-brand/20 transition-colors z-0" size={64} />
              
              {/* Video Placeholder */}
              <div className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden mb-8 cursor-pointer group/video">
                <img 
                  src={testimonial.videoThumb} 
                  alt={`${testimonial.name} testimonial`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover/video:scale-110 transition-transform shadow-xl">
                    <Play className="text-brand ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="flex space-x-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-brand" size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-8 relative z-10 flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center font-black text-brand">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
