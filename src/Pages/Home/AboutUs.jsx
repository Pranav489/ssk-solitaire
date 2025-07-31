import React from "react";
import { motion } from "framer-motion";
import { Star, Award, Globe, Heart } from "lucide-react";
import { aboutus } from "../../assets";

const AboutUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Where Timeless Elegance Meets Modern Luxury
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={aboutus}
              alt="Luxury Hotel Lobby"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-light">Since 1985</p>
              <h3 className="text-xl font-serif font-medium">Grand Luxury Heritage</h3>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nestled in the heart of the city, Grand Luxury Hotel has been the epitome of 
              sophisticated hospitality for over three decades. Our commitment to excellence 
              has earned us recognition as one of the world's premier luxury destinations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We blend contemporary comfort with classic elegance, offering an unrivaled 
              experience where every detail is meticulously crafted to perfection. From our 
              award-winning spa to our Michelin-starred restaurants, we redefine the 
              meaning of luxury service.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-amber-50 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-amber-600 mr-2" />
                  <h4 className="font-serif font-semibold text-gray-800">5-Star Rating</h4>
                </div>
                <p className="text-sm text-gray-600">Consistently awarded since 1992</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-amber-50 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-amber-600 mr-2" />
                  <h4 className="font-serif font-semibold text-gray-800">120+ Awards</h4>
                </div>
                <p className="text-sm text-gray-600">Global recognition for excellence</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-amber-50 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-amber-600 mr-2" />
                  <h4 className="font-serif font-semibold text-gray-800">Global Clientele</h4>
                </div>
                <p className="text-sm text-gray-600">Welcoming guests from 60+ countries</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 bg-amber-50 rounded-lg"
              >
                <div className="flex items-center mb-2">
                  <Heart className="h-5 w-5 text-amber-600 mr-2" />
                  <h4 className="font-serif font-semibold text-gray-800">Sustainable Luxury</h4>
                </div>
                <p className="text-sm text-gray-600">Committed to eco-friendly practices</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-medium uppercase tracking-wider transition-colors duration-300 shadow-lg"
            >
              Discover Our Story
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;