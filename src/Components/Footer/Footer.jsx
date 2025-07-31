import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { Logo } from "../../assets";

const Footer = () => {
  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Rooms & Suites", href: "/rooms" },
        { name: "Dining", href: "/dining" },
        { name: "Spa & Wellness", href: "/spa" },
        { name: "Events", href: "/events" },
        { name: "Gallery", href: "/gallery" },
      ],
    },
    {
      title: "About Us",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Awards", href: "/awards" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Press", href: "/press" },
        { name: "Careers", href: "/careers" },
      ],
    },

  ];

  const contactInfo = {
    address: "123 Luxury Avenue, City, Country",
    phone: "+1 (555) 123-4567",
    email: "reservations@luxuryhotel.com",
    hours: "24/7 Concierge Service"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 font-serif min-h-[50vh]">
      <motion.div
        className="max-w-7xl mx-auto px-4 lg:px-6"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Hotel Branding Section */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            variants={itemVariants}
          >
            <div className="mb-4">
              <img
                src={Logo}
                alt="Luxury Grand Hotel"
                className="h-20 w-auto"
              />
            </div>
            <motion.p
              className="text-gray-300 text-base leading-relaxed"
              variants={itemVariants}
            >
              Experience unparalleled luxury at our award-winning 5-star hotel.
            </motion.p>

            {/* Social Media */}
            <motion.div
              className="pt-4"
              variants={itemVariants}
            >
              <h4 className="text-sm font-semibold mb-3 text-amber-400 uppercase tracking-wider">
                Connect With Us
              </h4>
              <div className="flex space-x-5">
                {[
                  { icon: <FaFacebook className="h-6 w-6" />, name: "Facebook" },
                  { icon: <FaInstagram className="h-6 w-6" />, name: "Instagram" },
                  { icon: <FaTwitter className="h-6 w-6" />, name: "Twitter" },
                  { icon: <FaLinkedin className="h-6 w-6" />, name: "LinkedIn" },
                  { icon: <FaYoutube className="h-6 w-6" />, name: "YouTube" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                    whileHover={{ y: -2 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              className="space-y-6"
              variants={itemVariants}
            >
              <motion.h3
                className="text-lg font-medium mb-4 text-amber-400 uppercase tracking-wider border-b border-amber-400 pb-2"
                variants={itemVariants}
              >
                {section.title}
              </motion.h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    variants={itemVariants}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-400 transition-colors text-base"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.h3
              className="text-lg font-medium mb-4 text-amber-400 uppercase tracking-wider border-b border-amber-400 pb-2"
              variants={itemVariants}
            >
              Contact Us
            </motion.h3>
            <div className="space-y-4">
    {[
      { icon: <MapPin className="h-5 w-5 mt-0.5" />, text: contactInfo.address },
      { icon: <Phone className="h-5 w-5" />, text: contactInfo.phone, href: `tel:${contactInfo.phone}` },
      { icon: <Mail className="h-5 w-5" />, text: contactInfo.email, href: `mailto:${contactInfo.email}` },
      { icon: <Clock className="h-5 w-5" />, text: contactInfo.hours }
    ].map((item, index) => (
      <motion.div
        key={index}
        className="flex items-start space-x-4"
        variants={itemVariants}
      >
        <span className="text-amber-400 flex-shrink-0">{item.icon}</span>
        {item.href ? (
          <motion.a
            href={item.href}
            className="text-gray-300 hover:text-amber-400 text-sm"
            whileHover={{ x: 3 }}
          >
            {item.text}
          </motion.a>
        ) : (
          <p className="text-gray-300 text-sm">{item.text}</p>
        )}
      </motion.div>
    ))}
  </div>
</motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.h3
              className="text-lg font-medium mb-4 text-amber-400 uppercase tracking-wider border-b border-amber-400 pb-2"
              variants={itemVariants}
            >
              Newsletter
            </motion.h3>
            <motion.p
              className="text-gray-300 text-base mb-4"
              variants={itemVariants}
            >
              Subscribe for exclusive offers
            </motion.p>
            <motion.form
              className="flex flex-col space-y-4"
              variants={itemVariants}
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 w-full text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-100 "
              />
              <motion.button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 text-base transition-colors   md:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-700 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
        >
          <motion.p
            className="text-gray-400 text-sm mb-4 md:mb-0"
            variants={itemVariants}
          >
            &copy; {new Date().getFullYear()} Luxury Grand Hotel. All rights reserved.
          </motion.p>
          <motion.div
            className="flex space-x-6"
            variants={itemVariants}
          >
            {["Terms of Service", "Privacy Policy", "Cookies Policy"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;