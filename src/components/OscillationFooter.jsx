import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import EmailForm from './EmailForm';
import siddhesh from '..//assets/siddhesh.jpeg'
import pranav from '..//assets/panna.png';
import deep from '..//assets/deep.jpeg';
import insta from '..//assets/image-removebg-preview (1).png'
import unstop from '..//assets/unstopwhite.png';

const OscillationFooter = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Developer team data
  const developers = [
    { name: "Deep Mohite", image: deep },
    { name: "Pranav Agarthade", image: pranav },
    { name: "Siddhesh Varhadi", image: siddhesh },
  ];

  // Navigation links with their routes
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
  ];

  // Social links with Instagram, Extra Instagram, and Unstop (using logo link)
  const socialLinks = [
    { name: '@oscillation_2025', url: 'https://www.instagram.com/oscillation_2025/', logo: insta },
    { name: '@aisac_vppcoe', url: 'https://www.instagram.com/aisac_vppcoe/', logo: insta },
    { name: 'Unstop', url: 'https://unstop.com/o/qOCVa2f?lb=8WkQgyPl&utm_medium=Share&utm_source=shortUrl', logo: unstop },  // Unstop logo URL used
  ];

  // Function to handle navigation
  const handleNavigation = (path) => {
    if (window.history && window.history.pushState) {
      window.history.pushState({}, "", path);
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    } else {
      window.location.href = path;
    }
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    // Other existing logic for creating animated particles (unchanged)
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white font-sans py-10 px-4 sm:px-5">
      {/* Animated particles background */}
      <div id="particles" className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
      
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto relative z-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* About Oscillation Section */}
          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">About Oscillation</h3>
            <p className="mb-4 text-gray-200">The premier tech event by AI & Data Science. VPPCOEVA unites coders, innovators, and tech enthusiasts to learn, compete, and innovate.</p>
          </div>

          {/* Quick Links Section */}
          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.path);
                  }}
                  className="block text-gray-200 transition-all duration-300 hover:text-pink-500 hover:translate-x-1 relative group cursor-pointer"
                >
                  <span className="absolute -left-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-left-3">
                    &gt;
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links Section with Instagram, Extra Instagram, and Unstop logos */}
          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">Follow Us</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-200 transition-all duration-300 hover:text-pink-500 hover:translate-x-1 relative group cursor-pointer"
                >
                  <span className="absolute -left-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-left-3">
                    &gt;
                  </span>
                  <img 
                    src={social.logo} 
                    alt={social.name} 
                    className="h-6 w-6 object-contain" // Ensures all logos are the same height and properly aligned
                    style={social.name === 'Unstop' ? { width: '24px', height: '24px', marginLeft: '12px' } : {}}
                  />

                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Email Form Section */}
          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">And Doubts We Didn't Answer?</h3>
            <p className="mb-4 text-gray-200">How About Emailing Us! We Will get to You ASAP!</p>
            <EmailForm />
          </div>
        </div>

        {/* Developer Section */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/30 via-purple-800/50 to-purple-900/30 rounded-lg border border-white/10">
          <h3 className="text-2xl mb-6 text-center font-bold">
            <span className="oscillation-logo">Development Team</span>
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-3xl mx-auto">
            {developers.map((dev, index) => (
              <div key={index} className="dev-card rounded-lg p-4 flex flex-col items-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-pink-500 p-1 bg-gradient-to-br from-pink-500/20 to-purple-600/20">
                  <img 
                    src={dev.image} 
                    alt={dev.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="font-bold text-lg text-center mt-2">{dev.name}</h4>
                <p className="text-sm text-gray-300 text-center">{dev.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="text-center pt-8 border-t border-white border-opacity-10 mt-8 w-full">
        <div className="oscillation-logo text-2xl font-bold tracking-wide mb-2 hidden md:block">
          OSCILLATION 2K25
        </div>
        <p className="text-sm px-4">© 2025 Oscillation. All rights reserved. Organized by students, for everyone.</p>
      </div>
    </footer>
  );
};

export default OscillationFooter;