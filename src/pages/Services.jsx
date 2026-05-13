import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, MapPin, Shield, Star, CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Services = () => {
  const servicesList = [
    {
      title: 'GFE Experience',
      description: `Intimate girlfriend experience with genuine connection, conversation, cuddling, and affection. The perfect blend of romance and passion.`,
    },
    {
      title: 'PSE Experience',
      description: `For those seeking a more adventurous encounter. Let your fantasies come to life in a safe, judgment-free environment.`,
    },
    {
      title: 'Dinner Date',
      description: `Fine dining and stimulating conversation at the best restaurants in town. The perfect prelude to an unforgettable evening.`,
    },
    {
      title: 'Overnight',
      description: `An extended experience of intimacy and connection. Dinner, drinks, and a full night of passion and companionship.`,
    },
    {
      title: 'Travel Companion',
      description: `Available for multi-day engagements and travel. Explore new destinations with a beautiful, engaging companion by your side.`,
    },
    {
      title: 'Virtual Experience',
      description: `Can't meet in person? Let's connect virtually for an intimate video call experience tailored to your desires.`,
    },
  ];

  const incallRates = [
    { duration: '1 Hour', price: 400 },
    { duration: '90 Minutes', price: 600 },
    { duration: '2 Hours', price: 800 },
    { duration: '3 Hours', price: 1200 },
    { duration: 'Overnight (10h)', price: 3000 },
  ];

  const outcallRates = [
    { duration: '1 Hour', price: 500 },
    { duration: '90 Minutes', price: 700 },
    { duration: '2 Hours', price: 1000 },
    { duration: '3 Hours', price: 1400 },
    { duration: 'Overnight (10h)', price: 3500 },
  ];

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
            <Sparkles size={16} />
            <span>Services &amp; Rates</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Playfair Display', serif }}>
            Services &amp; <span style={{color: '#ec4899' }}>Rates</span>
          </h1>
          <p className="text-lg opacity-60 max-w-xl mx-auto">
            Premium companionship tailored to your desires. Discretion and satisfaction guaranteed.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{fontFamily: 'Playfair Display', serif }}
            {...fadeInUp}
          >
            Experiences
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.title}
                className="p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{backgroundColor: '#f5f5f508',
                  border: '1px solid #f5f5f511',
                }}
                {...fadeInUp}
                transition={{duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                     style={{backgroundColor: '#ec489922' }}>
                  <Star size={28} style={{color: '#ec4899' }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates Tables */}
      <section className="py-20 px-4" style={{backgroundColor: '#f5f5f505' }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{fontFamily: 'Playfair Display', serif }}
            {...fadeInUp}
          >
            Rates
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Incall */}
            <motion.div
              className="rounded-2xl overflow-hidden"
              style={{backgroundColor: '#f5f5f508',
                border: '1px solid #f5f5f511',
              }}
              {...fadeInUp}
            >
              <div className="p-6 text-center"
                   style={{background: 'linear-gradient(135deg, #ec489933, #a855f733)' }}>
                <MapPin size={24} className="mx-auto mb-2" style={{color: '#ec4899' }} />
                <h3 className="text-2xl font-bold" style={{fontFamily: 'Playfair Display', serif }}>Incall</h3>
                <p className="text-sm opacity-60">At my private residence</p>
              </div>
              <div className="p-6 space-y-4">
                {incallRates.map((rate) => (
                  <div key={rate.duration}
                       className="flex items-center justify-between py-3 px-4 rounded-xl transition-colors hover:bg-white/5">
                    <span className="font-medium">{rate.duration}</span>
                    <span className="text-lg font-bold" style={{color: '#ec4899' }}>
                      ${rate.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Outcall */}
            <motion.div
              className="rounded-2xl overflow-hidden"
              style={{backgroundColor: '#f5f5f508',
                border: '1px solid #f5f5f511',
              }}
              {...fadeInUp}
              transition={{duration: 0.6, delay: 0.2 }}
            >
              <div className="p-6 text-center"
                   style={{background: 'linear-gradient(135deg, #a855f733, #ec489933)' }}>
                <Clock size={24} className="mx-auto mb-2" style={{color: '#a855f7' }} />
                <h3 className="text-2xl font-bold" style={{fontFamily: 'Playfair Display', serif }}>Outcall</h3>
                <p className="text-sm opacity-60">I come to you</p>
              </div>
              <div className="p-6 space-y-4">
                {outcallRates.map((rate) => (
                  <div key={rate.duration}
                       className="flex items-center justify-between py-3 px-4 rounded-xl transition-colors hover:bg-white/5">
                    <span className="font-medium">{rate.duration}</span>
                    <span className="text-lg font-bold" style={{color: '#a855f7' }}>
                      ${rate.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;