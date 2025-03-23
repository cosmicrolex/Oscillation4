import {
  Award,
  Calendar,
  DollarSign,
  HelpCircle,
  Info,
  Users,
  Wifi,
  ChevronDown
} from "lucide-react";
import React, { useState } from "react";

export default function Faqs() {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "When and where would hackathon take place ?",
      answer: "Hackathon will take place at 4th Floor , Labs - 407 & 401 of Vasantdada Patil Prathisthan's College of Engineering , Chunabatti   And the Will Start At 12:30 PM. It is a 24 Hr Hackathon Event.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      question: "Is there a Participation Fee?",
      answer: "Yes , Every Event has a Entry Fee and A Prize Pool.",
      icon: <DollarSign className="w-6 h-6" />,
      
    },
    {
      question: "Are there any prizes? ",
      answer: "Yes , Every Event has Prizes and there is total Prize Pool Worth  ₹75,000.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      question: "Will There be Wi-Fi?",
      answer: "Yes , Internet Will be Provided for Every Technical Events. ",
      icon: <Wifi className="w-6 h-6" />,
    },
    {
      question: "What is The Theme of Oscillation?",
      answer: " The theme for Oscillation 2K25 is Robotics, focusing on the impact of automation, AI, and robotics on our future.",
      icon: <HelpCircle className="w-6 h-6" />,
    },
    {
      question: " How to Register?",
      answer: " Go to the events section & Press Register Button to fill the Form, Done! You are now registered for Oscillation 2025!",
      icon: <HelpCircle className="w-6 h-6" />,
    },
    {
      question: "About Us?",
      answer: "Oscillation 2K25 is organized by the Vasantdada Patil Prathisthan's College of Engineering & Visual Arts, with the support of students, faculty, and tech communities who are passionate about innovation and technology.",
      icon: <HelpCircle className="w-6 h-6" />,
    },
  ];

  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);
  // State to track hover effects
  const [hoveredFaq, setHoveredFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#1e1937] min-h-screen py-16 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl text-center font-bold text-white mb-8">
          <span className="inline-block animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Frequently Asked Questions
          </span>
        </h2>
        <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: "0.3s" }}>
          Get all the information you need about Oscillation 2025, our exciting hackathon experience!
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side image with enhanced animations */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              {/* Animated glows for image background */}
              <div className="absolute w-64 h-64 top-0 left-0 bg-[#6f2270] rounded-full opacity-50 blur-3xl animate-pulse"></div>
              <div className="absolute w-64 h-64 bottom-0 right-0 bg-[#541b81] rounded-full opacity-40 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
              
              {/* Enhanced image container */}
              <div className="relative aspect-square bg-gradient-to-br from-[#2a1b4a] to-[#1e1937] rounded-2xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-900/20 transition-all duration-500 hover:shadow-purple-600/30 hover:scale-105 hover:border-purple-500/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4 animate-pulse">Oscillation</div>
                    <div className="text-white/70 px-8 animate-fadeIn" style={{ animationDelay: "1s" }}>Your gateway to innovation and creativity</div>
                  </div>
                </div>
                
                {/* Animated decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full -translate-y-1/2 translate-x-1/2 animate-float" style={{ animationDuration: "6s" }}></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600/10 rounded-full translate-y-1/2 -translate-x-1/2 animate-float" style={{ animationDuration: "8s", animationDelay: "1s" }}></div>
              </div>
            </div>
          </div>
          
          {/* Right side FAQs with enhanced animations */}
          <div className="w-full md:w-1/2 animate-fadeIn" style={{ animationDelay: "0.7s" }}>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className={`bg-[#2929294c] rounded-xl border overflow-hidden transition-all duration-500 
                    ${hoveredFaq === index || openFaq === index ? 'border-purple-500/50 shadow-lg shadow-purple-900/30 translate-x-1' : 'border-purple-500/20'} 
                    cursor-pointer animate-slideIn`}
                  onClick={() => toggleFaq(index)}
                  onMouseEnter={() => setHoveredFaq(index)}
                  onMouseLeave={() => setHoveredFaq(null)}
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="px-6 py-4 flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <span className={`p-2 rounded-lg text-purple-300 transition-all duration-300 
                        ${hoveredFaq === index || openFaq === index ? 'bg-purple-800/50 scale-110' : 'bg-purple-900/30'}`}>
                        {item.icon}
                      </span>
                      <h3 className={`font-medium transition-all duration-300 
                        ${hoveredFaq === index || openFaq === index ? 'text-purple-300' : 'text-white'}`}>
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-purple-300 transition-all duration-500 
                        ${openFaq === index ? 'rotate-180 text-pink-300' : hoveredFaq === index ? 'text-purple-200' : ''}`}
                    />
                  </div>
                  
                  {/* Answer section with enhanced animation */}
                  <div 
                    className={`px-6 pb-4 pt-0 overflow-hidden transition-all duration-500 ease-in-out 
                      ${openFaq === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="pt-3 border-t border-purple-500/20 text-white/80 animate-fadeIn">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(0, -10px); }
          100% { transform: translate(0, 0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 1s ease forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}