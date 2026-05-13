import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-xl"
        initial={{opacity: 0, y: 20 }}
        animate={{opacity: 1, y: 0 }}
        transition={{duration: 0.6 }}
      >
        <div className="text-8xl font-bold mb-4" style={{fontFamily: 'Playfair Display', serif, color: '#ec4899' }}>
          404
        </div>
        <h1 className="text-2xl font-bold mb-4" style={{fontFamily: 'Playfair Display', serif }}>
          Page Not Found
        </h1>
        <p className="opacity-60 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
          style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
        >
          <Home size={18} />
          <span>Return Home</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default PageNotFound;