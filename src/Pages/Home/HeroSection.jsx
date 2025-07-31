import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../../constants/heroSlides";

const HeroSection = () => {


  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.slides.length) % heroSlides.slides.length);
  };

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      <AnimatePresence custom={direction}>
        <motion.div
          key={heroSlides.slides[currentSlide].id}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? "100%" : "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? "-100%" : "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides.slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-opacity-40"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-2xl text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
                  {heroSlides.slides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-light">
                  {heroSlides.slides[currentSlide].subtitle}
                </p>
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-medium uppercase tracking-wider transition-colors duration-300">
                  {heroSlides.slides[currentSlide].cta}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md backdrop-saturate-150 text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md backdrop-saturate-150 text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button> */}

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-3 w-3 rounded-full transition-all ${index === currentSlide ? "bg-amber-400 w-6" : "bg-white bg-opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scrolling Indicator */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="h-8 w-5 border-2 border-amber-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 bg-amber-400 rounded-full mt-1"
          />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;