import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Training from './components/Training';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import GoogleMyBusiness from './components/GoogleMyBusiness';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Ensure dark mode is applied on mount
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-white bg-[#fcfbf9] dark:bg-gray-950 transition-colors relative">
      {/* Subtle brand color gradient background for light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/5 dark:from-transparent dark:to-transparent pointer-events-none z-0" />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Dark Mode Toggle */}
      <button 
        onClick={toggleDark} 
        className="fixed bottom-6 right-6 z-[100] p-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <Services />
          <Benefits />
          <HowItWorks />
          <Gallery />
          <Training />
          <Testimonials />
          <BookingForm />
          <AboutMe />
          <Contact />
          <GoogleMyBusiness />
        </main>

        <Footer />
      </div>
    </div>
  );
}
