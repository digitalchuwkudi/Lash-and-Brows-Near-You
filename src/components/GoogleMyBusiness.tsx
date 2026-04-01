import { motion } from 'motion/react';
import { MapPin, Star, Clock, Phone } from 'lucide-react';

export default function GoogleMyBusiness() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Find Us on <span className="text-brand">Google</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out our Google My Business profile, read reviews from our amazing clients, and get directions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Lash and Brows</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Cotonou, Benin</p>
                  <a 
                    href="https://www.google.com/maps/place/Lash+and+brows/@6.3629383,2.4736715,17z/data=!3m1!4b1!4m6!3m5!1s0x1023559f3bac5445:0xfc92304e5de70066!8m2!3d6.3629383!4d2.4736715!16s%2Fg%2F11w21crwn4?entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand hover:underline text-sm mt-2 inline-block font-medium"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Reviews</p>
                  <div className="flex items-center mt-1">
                    <span className="text-gray-900 dark:text-white font-bold mr-2">5.0</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/place/Lash+and+brows/@6.3629383,2.4736715,17z/data=!3m1!4b1!4m6!3m5!1s0x1023559f3bac5445:0xfc92304e5de70066!8m2!3d6.3629383!4d2.4736715!16s%2Fg%2F11w21crwn4?entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand hover:underline text-sm mt-1 inline-block font-medium"
                  >
                    Read Reviews &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Hours</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <a 
                href="https://www.google.com/maps/place/Lash+and+brows/@6.3629383,2.4736715,17z/data=!3m1!4b1!4m6!3m5!1s0x1023559f3bac5445:0xfc92304e5de70066!8m2!3d6.3629383!4d2.4736715!16s%2Fg%2F11w21crwn4?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-4 rounded-xl hover:bg-brand hover:text-white dark:hover:bg-brand dark:hover:text-white transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 h-[500px] rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 relative"
          >
            <iframe 
              src="https://maps.google.com/maps?q=6.3629383,2.4736715&t=&z=17&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lash and Brows Location"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
