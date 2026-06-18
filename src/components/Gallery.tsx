import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GalleryProps {
  images?: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Fallback default images if none provided
  const galleryImages = images.length > 0 ? images : [
    '/images/slideshow/slide-1.png',
    '/images/slideshow/slide-2.png',
    '/images/slideshow/slide-3.png',
    '/images/slideshow/slide-4.png',
    '/images/slideshow/slide-5.png',
    '/images/slideshow/slide-6.png',
    '/images/slideshow/slide-7.png',
    '/images/slideshow/slide-8.png',
    '/images/slideshow/slide-9.png',
    '/images/slideshow/slide-10.png',
  ];

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIdx]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') {
        setSelectedIdx(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, galleryImages.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-dark-900/40 backdrop-blur-[2px] border-b border-gray-200 dark:border-dark-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Image Gallery
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore all captured slides and visual content from the home carousel.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => setSelectedIdx(idx)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-dark-800 border border-gray-150 dark:border-dark-700 shadow-sm cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <Maximize2 size={18} />
                  </div>
                  <span className="absolute bottom-3 left-4 text-xs font-semibold text-white font-mono opacity-80">
                    SLIDE_{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center z-10"
              onClick={() => setSelectedIdx(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-0 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-sm transition-all duration-300 z-30 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              {/* Main Image View */}
              <div 
                className="relative w-full max-h-[75vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Left navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 active:scale-90 z-20 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Image */}
                <img
                  src={galleryImages[selectedIdx]}
                  alt={`Slide ${selectedIdx + 1}`}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl select-none"
                />

                {/* Right navigation */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 active:scale-90 z-20 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Caption Index */}
              <div className="mt-4 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-white text-xs font-mono font-bold tracking-wider select-none">
                SLIDE_{String(selectedIdx + 1).padStart(2, '0')} / SLIDE_{String(galleryImages.length).padStart(2, '0')}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
