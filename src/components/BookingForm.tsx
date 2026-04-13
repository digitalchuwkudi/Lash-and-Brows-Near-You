import React, { useState } from 'react';
import { motion } from 'motion/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MessageCircle, Calendar, User, Phone, Clock, Send, Sparkles, Mail, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

export default function BookingForm() {
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
    'Brow Lamination',
    'Brow Coloration',
    'Brow Correction',
    'Lip Blush',
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
    const whatsappUrl = `https://wa.me/2290161205830?text=${encodeURIComponent(message)}`;
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
                Bookings
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-tight">
              Ready for your <span className="text-brand">Transformation?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
              Choose your preferred booking method below. Book online via our portal, use WhatsApp for instant replies, or fill out our manual form.
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
                Book via WhatsApp
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Fastest response. Fill the details to generate a message.
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6 relative z-10 flex-grow flex flex-col">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <User size={14} className="mr-2" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-green-500 transition-colors"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Phone size={14} className="mr-2" /> WhatsApp Number
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
                  <Sparkles size={14} className="mr-2" /> Select Service
                </label>
                <select
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-green-500 transition-colors appearance-none"
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Choose a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Calendar size={14} className="mr-2" /> Date
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
                    <Clock size={14} className="mr-2" /> Time
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
                  <span>BOOK VIA WHATSAPP</span>
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
                Manual Booking
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Submit your request and we'll get back to you.
              </p>
            </div>

            <form action="https://formspree.io/f/mreolloq" method="POST" className="space-y-6 relative z-10 flex-grow flex flex-col">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <User size={14} className="mr-2" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Phone size={14} className="mr-2" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your Phone Number"
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                  <Mail size={14} className="mr-2" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email Address"
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                  <Sparkles size={14} className="mr-2" /> Select Service
                </label>
                <select
                  name="service"
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors appearance-none"
                >
                  <option value="">Choose a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Calendar size={14} className="mr-2" /> Date
                  </label>
                  <DatePicker
                    selected={startDateManual}
                    onChange={(date) => setStartDateManual(date)}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                  />
                  {/* Hidden input to ensure DatePicker value is submitted with the form */}
                  <input type="hidden" name="date" value={startDateManual ? format(startDateManual, 'PPPP') : ''} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
                    <Clock size={14} className="mr-2" /> Time
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
                  <span>SUBMIT BOOKING</span>
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
                Book on Setmore
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                More booking options for you. View real-time availability and secure your spot instantly.
              </p>
            </div>

            <div className="mt-auto relative z-10 flex flex-col">
              <a 
                href="https://lashandbrowsnearyou.setmore.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-brand text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 hover:scale-105 shadow-xl shadow-brand/20 flex items-center justify-center hover:opacity-90"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="ml-2" size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
