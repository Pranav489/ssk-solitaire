import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Home,
  Info,
  Image,
  Gift,
  MessageSquare,
} from "lucide-react";
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [contactInfo] = useState({
    email: "reservations@luxuryhotel.com",
    phone: "+1 (555) 123-4567",
    phone1: "+1 (555) 987-6543",
    whatsapp: "#",
    address: "123 Luxury Avenue, City, Country",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    },
    openHours: "24/7 Concierge Service"
  });

  const navItems = [
    { label: "Home", path: "/", icon: <Home className="h-5 w-5 mr-2" /> },
    { 
      label: "About Us", 
      path: "/about", 
      icon: <Info className="h-5 w-5 mr-2" />,
      subItems: ["Our Story", "Awards", "Management", "Sustainability"]
    },
    {
      label: "Accommodations",
      path: "/rooms",
      icon: <Home className="h-5 w-5 mr-2" />,
      subItems: ["Deluxe Rooms", "Executive Suites", "Presidential Suite", "Villa"]
    },
    {
      label: "Experiences",
      path: "/experiences",
      icon: <Image className="h-5 w-5 mr-2" />,
      subItems: ["Dining", "Spa & Wellness", "Events", "Location"]
    },
    {
      label: "Offers",
      path: "/offers",
      icon: <Gift className="h-5 w-5 mr-2" />,
      subItems: ["Seasonal Packages", "Honeymoon", "Family Getaway", "Business Retreat"]
    },
    {
      label: "Contact",
      path: "/contact",
      icon: <MessageSquare className="h-5 w-5 mr-2" />,
      subItems: ["Reservations", "Event Inquiries", "Press", "Careers"]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed w-full z-50 font-serif">
      {/* Top Contact Bar - Gold */}
      <div
        className={`bg-gradient-to-r from-amber-700 to-amber-800 text-white text-sm transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden" : "h-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center hover:text-amber-200 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center hover:text-amber-200 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              {contactInfo.phone}
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <Clock className="h-4 w-4" />
            <span>{contactInfo.openHours}</span>
            <div className="flex space-x-4 ml-4">
              <a href={contactInfo.socialLinks.facebook} className="hover:text-amber-200">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href={contactInfo.socialLinks.instagram} className="hover:text-amber-200">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href={contactInfo.socialLinks.twitter} className="hover:text-amber-200">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href={contactInfo.socialLinks.linkedin} className="hover:text-amber-200">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href={contactInfo.socialLinks.youtube} className="hover:text-amber-200">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - White with Gold Accents */}
      <nav
        className={`bg-white shadow-sm transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="Luxury Grand Hotel"
              className={`transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center text-gray-800 hover:text-amber-700 transition-colors font-medium uppercase tracking-wider text-sm"
                    >
                      {item.icon}
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-2 w-56 bg-white rounded-sm shadow-lg z-50 border border-amber-100"
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem}
                                href="#"
                                className="block px-4 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-700 transition-colors border-b border-amber-50 last:border-0"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.path}
                    className="flex items-center text-gray-800 hover:text-amber-700 transition-colors font-medium uppercase tracking-wider text-sm"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            
            {/* Book Now Button */}
            <a
              href="/reservations"
              className="ml-4 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-sm flex items-center transition-colors duration-300 font-medium uppercase tracking-wider text-sm shadow-lg hover:shadow-xl"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-6"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-center mb-8">
                <img
                  src={Logo}
                  alt="Luxury Grand Hotel"
                  className="h-14 w-auto"
                />
                <button onClick={toggleMenu} className="text-gray-800">
                  <X size={28} />
                </button>
              </div>

              <div className="space-y-1 mb-8">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex items-center justify-between w-full py-4 text-gray-800 font-medium uppercase tracking-wider"
                        >
                          <div className="flex items-center">
                            {item.icon}
                            <span className="ml-3">{item.label}</span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              openDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-10 overflow-hidden"
                          >
                            <div className="py-2 space-y-2">
                              {item.subItems.map((subItem) => (
                                <a
                                  key={subItem}
                                  href="#"
                                  className="block py-3 px-4 text-gray-600 hover:text-amber-700 hover:bg-amber-50 transition-colors rounded-sm"
                                  onClick={toggleMenu}
                                >
                                  {subItem}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.path}
                        className="flex items-center py-4 text-gray-800 hover:text-amber-700 transition-colors font-medium uppercase tracking-wider"
                        onClick={toggleMenu}
                      >
                        {item.icon}
                        <span className="ml-3">{item.label}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="bg-amber-50 p-6 rounded-sm mb-8">
                <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider">Contact Us</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center text-gray-700 mb-4 hover:text-amber-700"
                >
                  <Mail className="h-5 w-5 mr-3 text-amber-700" />
                  {contactInfo.email}
                </a>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center text-gray-700 mb-4 hover:text-amber-700"
                >
                  <Phone className="h-5 w-5 mr-3 text-amber-700" />
                  {contactInfo.phone}
                </a>
                <div className="flex items-start text-gray-700 hover:text-amber-700">
                  <MapPin className="h-5 w-5 mr-3 text-amber-700 mt-1" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-8 mb-8">
                <a href={contactInfo.socialLinks.facebook} className="text-amber-700 hover:text-amber-800">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href={contactInfo.socialLinks.instagram} className="text-amber-700 hover:text-amber-800">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href={contactInfo.socialLinks.twitter} className="text-amber-700 hover:text-amber-800">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href={contactInfo.socialLinks.linkedin} className="text-amber-700 hover:text-amber-800">
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>

              {/* Mobile Action Buttons */}
              <div className="space-y-4">
                <a
                  href="/reservations"
                  className="block w-full bg-amber-700 hover:bg-amber-800 text-white px-4 py-3 rounded-sm text-center transition-colors font-medium uppercase tracking-wider shadow-lg"
                >
                  Book Now
                </a>
                <a
                  href={contactInfo.whatsapp}
                  className="block w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-sm text-center transition-colors font-medium uppercase tracking-wider"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;