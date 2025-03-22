import React from 'react';
import { motion } from 'framer-motion';
import Faqs from './Faqs';
import dominos from '..//assets/dominos.png';
import habhit from '..//assets/habhit.png';
import smaash from '..//assets/smaash.png';
import hellenergy from '..//assets/hellenergy.png';
import mojoco from '..//assets/Mojoco Logo.png';
import alpha8 from '..//assets/Alpha8 Logo.png';
import hop from '..//assets/Hop LOGO.png';


const SponsorsComponent = () => {
  const sponsors = [
    // {
    //   id: 1,
    //   name: "",
    //   tier: "Platinum",
    //   logo: "/api/placeholder/200/100", // Replace with actual logo path
    //   website: "https://example.com"
    // },
    {
      id: 2,
      name: "",
      tier: "Gold",
      logo: hellenergy,
      website: "https://www.hellenergy.com/in/"
    },
    {
      id: 3,
      name: "",
      tier: "Gold",
      logo: smaash,
      website: "https://smaaash-entertainment.in"
    },
    {
      id: 4,
      name: "",
      tier: "Silver",
      logo: dominos,
      website: "https://pizzaonline.dominos.co.in/postorder-ui/login?&src=google_sem_brand&utm_source=google&utm_medium=cpc&utm_campaign=Brand-PanIndia-Exact-2017-S-Mumbai&gad_source=1"
    },
    {
      id: 5,
      name: "",
      tier: "Silver",
      logo: habhit,
      website: "https://habhit.com/"
    },
    {
      id: 6,
      name: "",
      tier: "Silver",
      logo: mojoco, // Replace with actual logo path
      website: "https://habhit.com/"
    },
    {
      id: 7,
      name: "",
      tier: "Silver",
      logo: hop, // Replace with actual logo path
      website: "https://habhit.com/product-category/hop-cold-coffee/"
    },
    {
      id: 8,
      name: "",
      tier: "Silver",
      logo: alpha8, // Replace with actual logo path
      website: "https://habhit.com/"
    }
    // {
    //   id: 6,
    //   name: "",
    //   tier: "Silver",
    //   logo: "/api/placeholder/200/100", // Replace with actual logo path
    //   website: "https://example.com"
    // }
  ];

  const tierOrder = ["Platinum", "Gold", "Silver", "Bronze"];
  const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="py-16 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {tierOrder.map(tier => 
          sponsorsByTier[tier] && (
            <motion.div key={tier} className="mb-16 last:mb-0" variants={itemVariants}>
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                  {tier.toUpperCase()} SPONSORS
                </h3>
                <div className={`w-16 h-0.5 mx-auto ${
                  tier === 'Platinum' ? 'bg-gray-200' : 
                  tier === 'Gold' ? 'bg-yellow-400' : 
                  tier === 'Silver' ? 'bg-gray-400' : 
                  'bg-amber-700'
                }`}></div>
              </div>

              <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2`}>
                {sponsorsByTier[tier].map(sponsor => (
                  <motion.div
                    key={sponsor.id}
                    className={`
                      relative rounded-xl p-1 overflow-hidden
                      ${tier === 'Platinum' ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300' : 
                        tier === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-amber-400' : 
                        tier === 'Silver' ? 'bg-gradient-to-r from-gray-400 to-gray-300' :
                        'bg-gradient-to-r from-amber-700 to-amber-600'}
                    `}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4)' }}
                    transition={{ duration: 0.3 }}
                    variants={itemVariants}
                  >
                    <div className="bg-white rounded-lg p-6 h-full">
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="relative w-full h-32 mb-4 flex items-center justify-center">
                          <img 
                            src={sponsor.logo} 
                            alt={`${sponsor.name} logo`} 
                            className="max-h-full max-w-full object-contain transition-all duration-300 filter hover:brightness-125"
                          />
                        </div>
                        <a 
                          href={sponsor.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-pink-600 hover:text-pink-500 transition-colors duration-300"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default SponsorsComponent;