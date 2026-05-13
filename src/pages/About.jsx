import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Shield, Star } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <div className="pt-8">
      {/* Hero / Intro */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{opacity: 0, x: -30 }}
              animate={{opacity: 1, x: 0 }}
              transition={{duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-about-1.webp"
                    alt="Sweet Cat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl flex items-center justify-center"
                     style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
                  <Heart size={40} className="text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 30 }}
              animate={{opacity: 1, x: 0 }}
              transition={{duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{backgroundColor: '#ec489922',
                  color: '#ec4899',
                  border: '1px solid #ec489944',
                }}
              >
                <Sparkles size={16} />
                <span>About Me</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight"
                  style={{fontFamily: 'Playfair Display', serif }}>
                Sweet Cat
              </h1>

              <div className="space-y-4 text-base leading-relaxed opacity-80">
                <p>Welcome, darling. I'm Sweet Cat — an enchanting blend of sophistication, warmth, and playful allure.</p>
                <p>With a passion for the finer things in life and a talent for making every moment feel special, I invite you to step into a world where your desires take center stage. Whether you seek intimate conversation, a romantic evening, or an unforgettable adventure, I curate each encounter with care, discretion, and genuine connection.</p>
                <p>Let's create something beautiful together.</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://booking-manageme.formaloo.me/tssweetcat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
                  style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
                >
                  <Heart size={18} />
                  <span>Book Now</span>
                </a>
                <a
                  href="/gallery"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all border hover:bg-white/5"
                  style={{borderColor: '#f5f5f533', color: '#f5f5f5' }}
                >
                  <Star size={18} />
                  <span>View Gallery</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features/Highlights */}
      <section className="py-20 px-4" style={{backgroundColor: '#f5f5f505' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{fontFamily: 'Playfair Display', serif }}>
              What Sets Me <span style={{color: '#ec4899' }}>Apart</span>
            </h2>
            <div className="w-20 h-1 mx-auto rounded-full" style={{background: 'linear-gradient(90deg, #ec4899, #a855f7)' }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              key="Passionate & Attentive"
              className="p-8 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#f5f5f508',
                border: '1px solid #f5f5f511',
              }}
              {...fadeInUp}
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
              {...fadeInUp}
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
              {...fadeInUp}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                   style={{backgroundColor: '#ec489922' }}>
                <Sparkles size={28} style={{color: '#ec4899' }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Elegant & Sophisticated</h3>
              <p className="opacity-70 leading-relaxed">From fine dining to exclusive events, I bring elegance and charm to every occasion. A true companion for the discerning gentleman.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl"
            initial={{opacity: 0, y: 30 }}
            whileInView={{opacity: 1, y: 0 }}
            viewport={{once: true }}
            transition={{duration: 0.8 }}
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-about-2.webp"
              alt="Sweet Cat"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;