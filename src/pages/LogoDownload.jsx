import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogoDownload = () => {
  return (
    <div className="pt-8">
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-xl"
          initial={{opacity: 0, y: 20 }}
          animate={{opacity: 1, y: 0 }}
          transition={{duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{fontFamily: 'Playfair Display', serif }}>
            Logo <span style={{color: '#ec4899' }}>Download</span>
          </h1>
          <p className="opacity-60 mb-8">
            Download official logos and branding assets for Sweet Cat.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-2xl flex items-center justify-center mb-4 shadow-xl"
                 style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}>
              <span class="text-4xl font-bold text-white">SC</span>
            </div>

            <a
              href="#"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90"
              style={{background: 'linear-gradient(135deg, #ec4899, #a855f7)' }}
            >
              <Download size={18} />
              <span>Download Logo</span>
            </a>

            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-sm opacity-60 hover:opacity-100 transition-opacity mt-4"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LogoDownload;