import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';

interface SlideshowProps {
  images: string[];
  interval?: number;
}

export const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
            }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 dark:from-dark-900/95 dark:via-dark-900/90 dark:to-dark-900/95" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 text-gray-800 dark:text-white backdrop-blur-sm transition-all hover:scale-110 active:scale-90 z-20 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 text-gray-800 dark:text-white backdrop-blur-sm transition-all hover:scale-110 active:scale-90 z-20 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* View Gallery Link */}
      <a
        href="#gallery"
        className="absolute bottom-6 right-6 px-4 py-2 rounded-lg bg-black/15 hover:bg-black/25 dark:bg-white/10 dark:hover:bg-white/20 text-gray-800 dark:text-white backdrop-blur-sm transition-all hover:scale-105 active:scale-95 text-xs font-semibold z-20 cursor-pointer flex items-center gap-1.5 font-display border border-black/5 dark:border-white/5 shadow-sm"
      >
        <Image size={14} /> See More Images
      </a>
    </div>
  );
};
