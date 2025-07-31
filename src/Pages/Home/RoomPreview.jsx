import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { Bed, Ruler, Users, Wifi, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { roomsPreview } from "../../constants/roomCategories";


const RoomsPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
            Rooms & Suites
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Each space is meticulously designed to offer unparalleled comfort and luxury
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsPreview.rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                  {room.price}
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                {/* Room Specs */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Ruler className="h-4 w-4 mr-1 text-amber-600" />
                    {room.size}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1 text-amber-600" />
                    {room.capacity}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, i) => (
                      <span key={i} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/rooms/${room.id}`}
                  className="inline-block w-full text-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-sm font-medium uppercase tracking-wider text-sm transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/rooms"
            className="inline-flex items-center border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-sm font-medium uppercase tracking-wider text-sm transition-colors duration-300"
          >
            Explore All Accommodations
            <ChevronRight className="h-4 w-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsPreview;