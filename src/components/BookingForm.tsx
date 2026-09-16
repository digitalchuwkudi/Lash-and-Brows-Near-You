import React, { useState } from 'react';
import { motion } from 'motion/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MessageCircle, Calendar, User, Phone, Clock, Send, Sparkles, Mail, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function BookingForm() {
  const { language } = useLanguage();
  const t = translations[language];

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [startDateManual, setStartDateManual] = useState<Date | null>(new Date());
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    time: '',
  });

  const services = [
    'Classic lash Extension',
    '2D/ Hybrid Lash Extension',
    '3D/ Volume Lash Extension',
    '4D/ Mega Volume Lash Extension',
    'Lash Fill',
    'Retouch of Brows',
    'Combo Brows',
    'Microshading (Ombre)',
    'Microblading',
    'Eyeliner',
    'Brow Lamination',
    'Brow Coloration',
    'Brow Correction',
    'Lip Blush',
    'Manicure',
    'Pedicure',
    'Pedicure & Manicure Combo',
    'Manicure & Gel Polish',
    'Manicure & Simple Polish',
    'Pedicure + Gel Polish',
    'Pedicure + Simple Polish',
    'Pedicure Spa + Gel Polish',
    'Pedicure Spa + Simple Polish',
    'Gel Polish Removal',
    'Sugaring: Upper Lip',
    'Sugaring: Face',
    'Sugaring: Chin',
    'Sugaring: Underarm',
    'Sugaring: Half Arms (to Elbow)',
    'Sugaring: Legs Below Knee',
    'Sugaring: Full Legs',
    'Sugaring: Bikini Zone',
    'Hard Wax: Upper Lip',
    'Hard Wax: Face',
    'Hard Wax: Chin',
    'Hard Wax: Underarm',
    'Hard Wax: Half Arms (to Elbow)',
    'Hard Wax: Legs Below Knee',
    'Hard Wax: Full Legs',
    'Hard Wax: Bikini Zone',
    'Training: Microblading & Lash Extensions',
    'Training: Lash Extensions & Brow Lamination',
    'Training: Lash Extension (Includes training kits)',
    'Training: Lash Extensions, Brow Lamination & Semi Permanent Make-Up',
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = startDate ? format(startDate, 'PPPP') : 'Not selected';
    const message = `Hello! I'd like to book an appointment:
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${dateStr}
Time: ${formData.time}
    `;
    const whatsappUrl = `https://wa.me/2290190083461?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="book" className="py-24 bg-brand/5 dark:bg-gray-900/50 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand/10 px-4 py-2 rounded-full mb-6">
              <Calendar className="text-brand" size={16} />
              <span className="text-brand font-bold text-xs uppercase tracking-widest">
                {t.booking.tag}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-tight">
              {t.booking.title} <span className="text-brand">{t.booking.titleSpan}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              {t.booking.subheading}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Left: WhatsApp Booking */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-950 p-10 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
                <MessageCircle className="text-green-500 mr-3" size={28} />
                {t.booking.whatsappTab}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {t.booking.whatsappDesc}
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6 relative z-10 flex-grow flex flex-col">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <User size={14} className="mr-2" /> {t.booking.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.booking.namePlaceholder}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-green-500 transition-colors"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Phone size={14} className="mr-2" /> {t.booking.whatsappNumber}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+229..."
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-green-500 transition-colors"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                  <Sparkles size={14} className="mr-2" /> {t.booking.selectService}
                </label>
                <select
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-green-500 transition-colors appearance-none"
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">{t.booking.chooseService}</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {t.services.items[s as keyof typeof t.services.items] || s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Calendar size={14} className="mr-2" /> {t.booking.date}
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-green-500 transition-colors"
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Clock size={14} className="mr-2" /> {t.booking.time}
                  </label>
                  <input
                    type="time"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-green-500 transition-colors"
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>

              <div className="mt-auto">
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-green-500/20 flex items-center justify-center hover:bg-green-600"
                >
                  <span>{t.booking.btnWhatsapp}</span>
                  <ArrowRight className="ml-2" size={24} />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Formspree Booking */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-950 p-10 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
                <Send className="text-brand mr-3" size={28} />
                {t.booking.manualTab}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {t.booking.manualDesc}
              </p>
            </div>

            <form action="https://formspree.io/f/mreolloq" method="POST" className="space-y-6 relative z-10 flex-grow flex flex-col">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <User size={14} className="mr-2" /> {t.booking.fullName}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.booking.namePlaceholder}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Phone size={14} className="mr-2" /> {t.booking.whatsappNumber}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={t.booking.phonePlaceholder}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                  <Mail size={14} className="mr-2" /> {t.booking.emailAddress}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t.booking.emailPlaceholder}
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                  <Sparkles size={14} className="mr-2" /> {t.booking.selectService}
                </label>
                <select
                  name="service"
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors appearance-none"
                >
                  <option value="">{t.booking.chooseService}</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {t.services.items[s as keyof typeof t.services.items] || s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Calendar size={14} className="mr-2" /> {t.booking.date}
                  </label>
                  <DatePicker
                    selected={startDateManual}
                    onChange={(date) => setStartDateManual(date)}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                  />
                  <input type="hidden" name="date" value={startDateManual ? format(startDateManual, 'PPPP') : ''} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Clock size={14} className="mr-2" /> {t.booking.time}
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              <div className="mt-auto">
                <button
                  type="submit"
                  className="w-full bg-brand text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 flex items-center justify-center hover:opacity-90"
                >
                  <span>{t.booking.btnManual}</span>
                  <ArrowRight className="ml-2" size={24} />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Setmore Booking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-950 p-10 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 flex items-center">
                <Calendar className="text-brand mr-3" size={28} />
                {t.booking.setmoreTab}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {t.booking.setmoreDesc}
              </p>
            </div>

            <div className="mt-auto relative z-10 flex flex-col">
              <a 
                href="https://lashandbrowsnearyou.setmore.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-brand text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 flex items-center justify-center hover:opacity-90"
              >
                <span>{t.booking.btnSetmore}</span>
                <ArrowRight className="ml-2" size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
