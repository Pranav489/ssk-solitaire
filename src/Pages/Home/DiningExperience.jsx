import React from "react";
import { motion } from "framer-motion";
import { Utensils, Clock, Star } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { diningVenues, iconComponents } from "../../constants/diningVenues";

const DiningExperience = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Utensils className="h-8 w-8 text-amber-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Culinary Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            A symphony of flavors crafted by our award-winning culinary team
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        {/* Dining Venues - Updated icon rendering */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {diningVenues.venues.map((venue, index) => {
            const IconComponent = iconComponents[venue.icon];
            
            return (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-96 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center mb-2">
                    <IconComponent className="h-5 w-5 text-amber-400" />
                    <span className="ml-2 text-sm font-medium text-amber-400 uppercase tracking-wider">
                      {venue.type}
                    </span>
                  </div>
                  {/* Rest of the venue content remains the same */}
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                    {venue.name}
                  </h3>
                  <p className="text-gray-200 mb-4">{venue.description}</p>
                  <div className="flex items-center text-sm text-amber-300 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    {venue.hours}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {venue.features.map((feature, i) => (
                      <span key={i} className="bg-black bg-opacity-40 text-white px-3 py-1 rounded-full text-xs border border-amber-400">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/dining/${venue.id}`}
                    className="inline-flex items-center text-amber-400 hover:text-white group-hover:bg-amber-600 bg-transparent border border-amber-400 group-hover:border-amber-600 px-6 py-2 rounded-sm font-medium uppercase tracking-wider text-sm transition-all duration-300 w-fit"
                  >
                    Explore Menu
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Culinary Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-amber-50 rounded-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Our Culinary Philosophy
              </h3>
              <p className="text-gray-700 mb-6">
                At Grand Luxury Hotel, we believe dining should be an unforgettable experience. 
                Our executive chef combines locally-sourced ingredients with innovative techniques 
                to create dishes that delight both the eye and palate.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-gray-900">Farm to Table</h4>
                    <p className="text-sm text-gray-600">Partnering with local organic farms</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-gray-900">Sommelier Selection</h4>
                    <p className="text-sm text-gray-600">500+ vintage wines curated by our experts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-gray-900">Signature Dishes</h4>
                    <p className="text-sm text-gray-600">Award-winning creations since 1995</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-gray-900">Dietary Accommodations</h4>
                    <p className="text-sm text-gray-600">Customized menus for all preferences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
              <h4 className="font-serif font-bold text-xl text-gray-900 mb-4">
                Private Dining & Events
              </h4>
              <p className="text-gray-600 mb-6">
                Host unforgettable gatherings in our exclusive private dining rooms or outdoor terrace spaces.
              </p>
              <Link
                to="/dining/private-events"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-sm font-medium uppercase tracking-wider text-sm transition-colors duration-300"
              >
                Inquire Now
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiningExperience;