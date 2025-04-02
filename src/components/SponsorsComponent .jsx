import React from 'react';
import { motion } from 'framer-motion';
import dominos from '../assets/dominos.png';
import habhit from '../assets/habhit.png';
import smaash from '../assets/smaash.png';
import hellenergy from '../assets/hellenergy.png';
import mojoco from '../assets/Mojoco Logo.png';
import alpha8 from '../assets/Alpha8 Logo.png';
import hop from '../assets/Hop LOGO.png';

const SponsorsComponent = () => {
  const sponsors = [
    {
      id: 1,
      name: "Hell Energy",
      logo: hellenergy,
      website: "https://www.hellenergy.com/in/"
    },
    {
      id: 2,
      name: "Smaaash",
      logo: smaash,
      website: "https://smaaash-entertainment.in"
    },
    {
      id: 3,
      name: "Dominos",
      logo: dominos,
      website: "https://pizzaonline.dominos.co.in/"
    },
    {
      id: 4,
      name: "Habhit",
      logo: habhit,
      website: "https://habhit.com/"
    },
    {
      id: 5,
      name: "Mojoco",
      logo: mojoco, 
      website: "https://habhit.com/"
    },
    {
      id: 6,
      name: "Hop",
      logo: hop, 
      website: "https://habhit.com/product-category/hop-cold-coffee/"
    },
    {
      id: 7,
      name: "Alpha8",
      logo: alpha8, 
      website: "https://habhit.com/"
    },
    {
      id: 8,
      name: "RVTech",
      logo: hellenergy,
      website: "https://www.hellenergy.com/in/"
    },
  ];

  // Animation variants
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
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Subtle background particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white tracking-wide">
            OUR <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">SPONSORS</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            We extend our deepest gratitude to our sponsors for their invaluable support in making this event possible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Hexagon layout for sponsors */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.div 
                className="h-48 w-full max-w-xs rounded-xl shadow-xl overflow-hidden"
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
                  scale: 1.03
                }}
                transition={{ 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
              >
                <div className="bg-white h-full w-full flex flex-col items-center justify-between p-6 relative">
                  {/* Subtle corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-pink-400 opacity-40"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-pink-400 opacity-40"></div>
                  
                  <div className="relative w-full h-24 flex items-center justify-center mb-4">
                    <motion.img 
                      src={sponsor.logo} 
                      alt={`${sponsor.name} logo`} 
                      className="max-h-full max-w-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  
                  <motion.a 
                    href={sponsor.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-600 px-4 py-1.5 rounded-full shadow-md"
                    whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(157, 23, 77, 0.4)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Visit Website
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsComponent;