import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const images = [
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-gallery-1.webp',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-gallery-2.webp',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-gallery-3.webp',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-gallery-4.webp',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-gallery-5.webp',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698eff832e30ccfb0071d4d3/0198c3e5-2ee1-7739-b26c-e78bb2ebaa5f/sweet-cat-gallery-6.webp',
  ];

  const openLightbox = useCallback((index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleImageLoad = useCallback((index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  }, []);

  return (
    <div className="pt-8">
      {/* Page Header */}
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
            <ImageIcon size={16} />
            <span>Gallery</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Playfair Display', serif }}>
            Photo <span style={{color: '#ec4899' }}>Gallery</span>
          </h1>
          <p className="text-lg opacity-60">
            A curated collection of exclusive photographs
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {images.length === 0 ? (
            <div className="text-center py-20 opacity-50">
              <ImageIcon size={48} className="mx-auto mb-4" />
              <p>No images available yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group"
                  initial={{opacity: 0, scale: 0.9 }}
                  animate={{opacity: 1, scale: 1 }}
                  transition={{duration: 0.4, delay: index * 0.05 }}
                  whileHover={{scale: 1.02 }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      loadedImages[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(index)}
                  />
                  {!loadedImages[index] && (
                    <div className="absolute inset-0 flex items-center justify-center"
                         style={{backgroundColor: '#f5f5f508' }}>
                      <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                           style={{borderColor: '#ec4899', borderTopColor: 'transparent' }} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
                           style={{backgroundColor: '#ec489944' }}>
                        <ImageIcon size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{duration: 0.2 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeLightbox} />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute left-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={24} className="text-white" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-4 z-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={24} className="text-white" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={selectedIndex}
              className="relative z-10 max-w-4xl max-h-[85vh] mx-4"
              initial={{opacity: 0, scale: 0.9 }}
              animate={{opacity: 1, scale: 1 }}
              exit={{opacity: 0, scale: 0.9 }}
              transition={{duration: 0.3 }}
            >
              <img
                src={images[selectedIndex]}
                alt={`Gallery ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm"
                   style={{backgroundColor: 'rgba(0,0,0,0.6)' }}>
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;