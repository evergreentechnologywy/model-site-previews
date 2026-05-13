import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Clock, Shield, CheckCircle, ExternalLink, Calendar } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => {
  return (
    <div className="pt-8">
      {/* Header */}
      <section className="py-16 px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{opacity: 0, y: 20 }}
          animate={{opacity: 1, y: 0 }}
          transition={{duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{backgroundColor: '#ec489922',
              color: '#ec4899',
              border: '1px solid #ec489944',
            }}
          >
            <Phone size={16} />
            <span>Get In Touch</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Playfair Display', serif }}>
            Contact <span style={{color: '#ec4899' }}>Me</span>
          </h1>
          <p className="text-lg opacity-60 max-w-xl mx-auto">
            I look forward to connecting with you. Please review my booking guidelines before reaching out.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{opacity: 0, x: -30 }}
            animate={{opacity: 1, x: 0 }}
            transition={{duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6" style={{fontFamily: 'Playfair Display', serif }}>
              Contact Information
            </h2>

            <a
              href="sms:+17202514659"
              className="flex items-center space-x-4 p-4 rounded-xl transition-all hover:scale-105 group"
              style={{backgroundColor: '#f5f5f508', border: '1px solid #f5f5f511' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                   style={{backgroundColor: '#ec489922' }}>
                <MessageCircle size={24} style={{color: '#ec4899' }} />
              </div>
              <div>
                <p className="text-sm opacity-50">Text Message</p>
                <p className="font-semibold">+17202514659</p>
              </div>
              <ExternalLink size={16} className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="mailto:tssweetcat@gmail.com"
              className="flex items-center space-x-4 p-4 rounded-xl transition-all hover:scale-105 group"
              style={{backgroundColor: '#f5f5f508', border: '1px solid #f5f5f511' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                   style={{backgroundColor: '#a855f722' }}>
                <Mail size={24} style={{color: '#a855f7' }} />
              </div>
              <div>
                <p className="text-sm opacity-50">Email</p>
                <p className="font-semibold">tssweetcat@gmail.com</p>
              </div>
              <ExternalLink size={16} className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://booking-manageme.formaloo.me/tssweetcat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl transition-all hover:scale-105 group"
              style={{background: 'linear-gradient(135deg, #ec489922, #a855f722)',
                border: '1px solid #ec489933',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                   style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
                <Calendar size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm opacity-50">Booking Portal</p>
                <p className="font-semibold">Schedule an Appointment</p>
              </div>
              <ExternalLink size={16} className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://tryst.link/escort/tssweetcat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-xl transition-all hover:scale-105 group"
              style={{backgroundColor: '#f5f5f508', border: '1px solid #f5f5f511' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                   style={{backgroundColor: '#d4af3722' }}>
                <Shield size={24} style={{color: '#d4af37' }} />
              </div>
              <div>
                <p className="text-sm opacity-50">Verified on</p>
                <p className="font-semibold">Tryst</p>
              </div>
              <ExternalLink size={16} className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          {/* Contact Image / Booking Guidelines */}
          <motion.div
            className="space-y-8"
            initial={{opacity: 0, x: 30 }}
            animate={{opacity: 1, x: 0 }}
            transition={{duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-contact.webp"
                alt="Sweet Cat"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Booking Guidelines */}
            <div className="p-8 rounded-2xl"
                 style={{backgroundColor: '#f5f5f508', border: '1px solid #f5f5f511' }}>
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2"
                  style={{fontFamily: 'Playfair Display', serif }}>
                <Shield size={20} style={{color: '#ec4899' }} />
                <span>Booking Guidelines</span>
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{color: '#ec4899' }} />
                  <span className="text-sm opacity-80">
                    Please introduce yourself when reaching out. Include your name, age, and preferred date/time.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{color: '#ec4899' }} />
                  <span className="text-sm opacity-80">
                    Screening is required for all new clients. References or provider verification accepted.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{color: '#ec4899' }} />
                  <span className="text-sm opacity-80">
                    A deposit may be required to confirm bookings. This will be discussed during scheduling.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{color: '#ec4899' }} />
                  <span className="text-sm opacity-80">
                    Discretion is paramount. All personal information is kept strictly confidential.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0" style={{color: '#ec4899' }} />
                  <span className="text-sm opacity-80">
                    24-hour cancellation policy applies. Late cancellations may forfeit deposit.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;