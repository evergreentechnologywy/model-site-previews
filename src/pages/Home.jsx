import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-hero.webp"
            alt="Sweet Cat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" 
               style={{background: 'linear-gradient(to bottom, #0a0a0a00 0%, #0a0a0add 50%, #0a0a0a 100%)'}}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{opacity: 0, y: 20 }}
            animate={{opacity: 1, y: 0 }}
            transition={{duration: 0.8 }}
          >
            <motion.div
              initial={{scale: 0 }}
              animate={{scale: 1 }}
              transition={{delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{backgroundColor: '#ec489922',
                color: '#ec4899',
                border: '1px solid #ec489944',
              }}
            >
              <Sparkles size={16} />
              <span>Premium Companion</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              style={{fontFamily: 'Playfair Display', serif }}
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{delay: 0.3, duration: 0.6 }}
            >
              Sweet Cat
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 opacity-80 max-w-2xl mx-auto"
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{delay: 0.5, duration: 0.6 }}
            >
              Elegance and allure, redefined.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{opacity: 0, y: 20 }}
              animate={{opacity: 1, y: 0 }}
              transition={{delay: 0.7, duration: 0.6 }}
            >
              <a
                href="https://booking-manageme.formaloo.me/tssweetcat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
              >
                <Heart size={20} />
                <span>Book Your Experience</span>
                <ArrowRight size={20} />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border hover:bg-white/5"
                style={{borderColor: '#f5f5f533', color: '#f5f5f5' }}
              >
                <Star size={20} />
                <span>Discover More</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{opacity: 0, y: 20 }}
            whileInView={{opacity: 1, y: 0 }}
            viewport={{once: true }}
            transition={{duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Playfair Display', serif }}>
              Why Choose <span style={{color: '#ec4899' }}>Me</span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{background: 'linear-gradient(90deg, #ec4899, #a855f7)' }} />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{once: true }}
          >
            <motion.div
              key="Passionate & Attentive"
              className="p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#f5f5f508',
                border: '1px solid #f5f5f511',
              }}
              variants={fadeInUp}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                   style={{backgroundColor: '#ec489922' }}>
                <Sparkles size={28} style={{color: '#ec4899' }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Passionate & Attentive</h3>
              <p className="opacity-70 leading-relaxed">Every encounter is curated with genuine care and attention to your desires. Your comfort and satisfaction are my top priorities.</p>
            </motion.div>
            <motion.div
              key="Discreet & Professional"
              className="p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#f5f5f508',
                border: '1px solid #f5f5f511',
              }}
              variants={fadeInUp}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                   style={{backgroundColor: '#ec489922' }}>
                <Sparkles size={28} style={{color: '#ec4899' }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Discreet & Professional</h3>
              <p className="opacity-70 leading-relaxed">Complete privacy and professionalism guaranteed. All communications and meetings are handled with the utmost confidentiality.</p>
            </motion.div>
            <motion.div
              key="Elegant & Sophisticated"
              className="p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#f5f5f508',
                border: '1px solid #f5f5f511',
              }}
              variants={fadeInUp}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                   style={{backgroundColor: '#ec489922' }}>
                <Sparkles size={28} style={{color: '#ec4899' }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Elegant & Sophisticated</h3>
              <p className="opacity-70 leading-relaxed">From fine dining to exclusive events, I bring elegance and charm to every occasion. A true companion for the discerning gentleman.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4" style={{backgroundColor: '#f5f5f505' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{opacity: 0, y: 20 }}
            whileInView={{opacity: 1, y: 0 }}
            viewport={{once: true }}
            transition={{duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Playfair Display', serif }}>
              Gallery
            </h2>
            <p className="opacity-60 mb-8 max-w-xl mx-auto">
              Explore a curated collection of exclusive photographs
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 border hover:bg-white/5"
              style={{borderColor: '#ec4899', color: '#ec4899' }}
            >
              <span>View Full Gallery</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;