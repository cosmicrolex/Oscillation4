import React, { useState, useEffect } from 'react';
import Faqs from './Faqs';
import coderelay2 from '../assets/Code Relay 2.0 (2).jpg';
import hack from '../assets/hackathon (1).jpg';
import valo from '../assets/valorant (1).jpg';
import treasure from '../assets/treasure hunt (1).jpg';
import proj from '../assets/project presentation (1).jpg';
import bgmi from '../assets/bgmi (1).jpg';
import carrom from '../assets/carrom (1).jpg';
import codeandpray from '../assets/Code and Pray (1).jpg';
import dumbcharades from '../assets/Dumb Charades (1).jpg';
import aivisionary from '../assets/AI Visionary (1).jpg';
import ludo from '../assets/ludo (1).jpg';
import siddhesh from '..//assets/siddhesh.jpeg'
import pranav from '..//assets/panna.png';
import kshitij from '..//assets/Kshitij.png';
import vedant from '..//assets/Vedant.png';
import devesh from '..//assets/Devesh.png';
// import deep from '..//assets/deep.png';

const App = () => {
  // Events data with unique coordinators and specific details for each event
  const events = [
    {
      id: "hackathon",
      title: "Hackathon",
      description: "24-hour coding marathon to build innovative solutions for real-world problems.",
      icon: "fas fa-laptop-code",
      image: hack,
      registrationLink: "https://unstop.com/o/qOCVa2f?lb=8WkQgyPl&utm_medium=Share&utm_source=shortUrl",
      featured: true,
      eventDate: "2025-04-15T09:00:00", // Set your hackathon date here
      coordinators: [
        { 
          name: "Siddhesh Varhadi", 
          role: "Co-Ordinator", 
          image: siddhesh,
          email: "7900164138"
        },
        { 
          name: "Pranav Agarthade", 
          role: "Co-Ordinator", 
          image: pranav,
          email: "8591727736" 
        }
        // { 
        //   name: "Arjun Mehta", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "arjun@gmail.com" 
        // }
      ],
      // Custom details for Hackathon
      details: {
        date: "April 3-4, 2025",
        time: "9:00 AM - 9:00 AM (24 hours)",
        venue: "Will be Updated on the WhatsApp Group",
        registrationDeadline: "April 1, 2025",
        requirements: "Laptop, charger, valid ID, and pre-installed development tools",
        teamSize: "3-4 members per team",
        prizes: [
          {  amount: "₹33,000" },
          
        ],
        skills: ["Problem Solving", "Web/Mobile Development", "API Integration", "Design Thinking", "Team Collaboration"],
        timeline: [
          { date: "March 1, 2025", event: "Registration Opens" },
          { date: "April 1, 2025", event: "Registration Closes" },
          { date: "April 10, 2025", event: "Theme Announcement & Team Confirmation" },
          { date: "April 15, 2025 9:00 AM", event: "Hackathon Begins" },
          { date: "April 16, 2025 9:00 AM", event: "Coding Ends" },
          { date: "April 16, 2025 10:00 AM - 1:00 PM", event: "Project Presentations" },
          { date: "April 16, 2025 2:00 PM", event: "Results & Prize Distribution" }
        ],
        // contacts: {
        //   phone: "+91 9876543210",
        //   email: "aisac.vpp@gmail.com",
        //   website: "www.college-hackathon.com"
        // },
        rules: [
          "Participants will receive an AI/ML-related problem statement and must create a project to solve it.",
          "Participants can work individually or in teams, and each member must contribute actively.",
          "Projects will be evaluated based on innovation, accuracy, and feasibility.",
          "Open-source libraries and frameworks are allowed, but external consultation or AI assistance is not permitted.",
          "Code must be clean and structured; poor code structure will reduce scores."
        ]        
      }
    },
    {
      id: "coderelay2",
      title: "Code Relay 2.0",
      description: "Debug challenging code and solve complex programming puzzles in this exciting competition.",
      icon: "fas fa-bug",
      image: coderelay2,
      registrationLink: "https://forms.gle/dsuTCD5K9r3Jt7T19",
      coordinators: [
        { 
          name: "Aryan Fursule", 
          role: "Co-Ordinator", 
          image: "/api/placeholder/150/150",
          email: "9321618971"
        },
        { 
          name: "Deep Mohite", 
          role: "Technical Support", 
          image: "/api/placeholder/150/150",
          email: "9987999748" 
        },
        // { 
        //   name: "Siddhesh Varhadi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "sid@gmail.com" 
        // }
      ],
      // Custom details for Code Relay 2.0
      details: {
        date: "April 3, 2025",
        time: "10:00 AM - 2:00 PM",
        venue: "Will be Updated on the WhatsApp Group",
        registrationDeadline: "April 5, 2025",
        requirements: "Knowledge of Java/Python/C++",
        Prize: "1st and 2nd winner would get coupons worth 1200rs",
        teamSize: "2-4 members per team",
        prizes: [
          { place: "1st Place", amount: "₹1000" },
          { place: "2nd Place", amount: "₹400" },
          {place : "1st and 2nd winner would get coupons worth 1200rs"}
         
        ],
        skills: ["Debugging", "Problem Solving", "Algorithms", "Code Optimization", "Time Management"],
        timeline: [
          { date: "March 20, 2025", event: "Registration Opens" },
          { date: "April 5, 2025", event: "Registration Closes" },
          { date: "April 8, 2025", event: "Selected Teams Notification" },
          { date: "April 10, 2025 10:00 AM", event: "Round 1: Bug Hunt" },
          { date: "April 10, 2025 12:00 PM", event: "Round 2: Code Relay" },
          { date: "April 10, 2025 2:00 PM", event: "Results & Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543211",
          email: "aisac.vpp@gmail.com",
          website: "www.college-coderelay.com"
        },
        rules: [
          "Participants must complete the assigned code to be eligible to win the event.",
          "Team members can switch coding tasks among themselves until the code is completed or the time limit is reached.",
          "A rotation order must be followed, and code handoffs must be seamless.",
          "For Python-related problems, the time limit will be adjusted to account for shorter code length.",
          "Teams will be evaluated based on team collaboration, time management, code quality, and code functionality.",
          "If two teams have the same score, the team with fewer member switches will win. If the tie persists, a new problem statement will be issued.",
          "Each team member must actively participate to ensure fairness and collaboration.",
          "Each team member's time will be balanced based on the overall time limit.",
          "Teams that fail to complete the code within the time limit will be ranked based on progress and passing criteria.",
          "Teams are only allowed to use the provided tools and resources; external help, pre-written code, internet, or mobile usage is strictly prohibited.",
          "Submitted code will be reviewed for quality, standards, and originality.",
          "Participants must maintain decorum and follow ethical practices. Misconduct will result in immediate disqualification."
        ]        
      }
    },
    
    {
      id: "valorant",
      title: "Valorant",
      description: "Form a team, strategize, and showcase your tactical skills in this high-stakes Valorant battle.",
      icon: "fas fa-chess",
      image: valo,
      registrationLink: "https://forms.gle/neyAbdGGuNa7BKHg8",
      coordinators: [
        { 
          name: "Suyash Lohakare", 
          role: "Co-Ordinator", 
          image: "/api/placeholder/150/150",
          email: "9870219100"
        },
        { 
          name: "Sarthak Labdhe", 
          role: "Co-Ordinator", 
          image: "/api/placeholder/150/150",
          email: "9324341287" 
        },
        // { 
        //   name: "Aditya Joshi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "aditya@gmail.com" 
        // }
      ],
      // Custom details for Valorant tournament
      details: {
        date: "April 4, 2025",
        time: "11:00 AM - 6:00 PM",
        venue: "E-Sports Arena, CCC Building",
        registrationDeadline: "April 8, 2025",
        prize : "1st and 2nd winner would get coupons worth 1200rs",
        teamSize: "5 members per team",
        
        prizes: [
          { place: "1st Place", amount: "₹1500" },
          { place: "2nd Place", amount: "₹500" },
          {place : "1st and 2nd winner would get coupons worth 1200rs"}
          
        ],
        skills: ["Team Coordination", "Strategy", "Aim", "Game Sense", "Communication"],
        timeline: [
          { date: "March 15, 2025", event: "Registration Opens" },
          { date: "April 8, 2025", event: "Registration Closes" },
          { date: "April 10, 2025", event: "Team Seeding Announcement" },
          { date: "April 12, 2025", event: "Group Stage Matches" },
          { date: "April 13, 2025", event: "Quarter Finals, Semi Finals, and Finals" },
          { date: "April 13, 2025", event: "Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543212",
          email: "aisac.vpp@gmail.com",
          website: "www.college-esports.com"
        },
        rules: [
          "The competition consists of 4 rounds: TDM, Quarterfinals, Semifinals, and Finals.",
          "Matches follow a 5v5 standard format.",
          "Standard Valorant rules apply, and cheating will result in immediate disqualification.",
          "In case of a tie, a sudden death round will decide the winner."
        ]        
      }
    },
    {
      id: "treasureHunt",
      title: "Treasure Hunt",
      description: "Follow the clues and solve riddles in this tech-themed treasure hunt.",
      icon: "fas fa-chess",
      image: treasure,
      registrationLink: "https://forms.gle/VRF3mgaMZWJrwhHV6",
      coordinators: [
        { 
          name: "Devesh Amberkar", 
          role: "Co-Ordinator", 
          image: devesh,
          email: "9898153919"
        },
        { 
          name: "Vedant Kadam", 
          role: "Co-Ordinator", 
          image: vedant,
          email: "84220 28339" 
        },
        // { 
        //   name: "Aditya Joshi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "aditya@gmail.com" 
        // }
      ],
      // Custom details for Valorant tournament
      details: {
        date: "April 3, 2025",
        time: "11:00 AM - 6:00 PM",
        venue: "E-Sports Arena, CCC Building",
        registrationDeadline: "April 8, 2025",
        requirements: "",
        teamSize: "4 members per team",
        Prize : "1st and 2nd winner would get coupons worth 1200rs",
        prizes: [
          { place: "1st Place", amount: "₹1500" },
          { place: "2nd Place", amount: "₹500" },
          {place : "1st and 2nd winner would get coupons worth 1200rs"}
          
        ],
        skills: ["Team Coordination", "Strategy", "Aim", "Game Sense", "Communication"],
        timeline: [
          { date: "March 15, 2025", event: "Registration Opens" },
          { date: "April 8, 2025", event: "Registration Closes" },
          { date: "April 10, 2025", event: "Team Seeding Announcement" },
          { date: "April 12, 2025", event: "Group Stage Matches" },
          { date: "April 13, 2025", event: "Quarter Finals, Semi Finals, and Finals" },
          { date: "April 13, 2025", event: "Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543212",
          email: "aisac.vpp@gmail.com",
          website: "www.college-esports.com"
        },
        rules: [
          "Each team will consist of 4 players.",
          "Correct clues will lead to the next stage, while penalties apply for incorrect answers.",
          "The fastest team to complete the hunt wins."
        ]        
      }
    },
    {
      id: "projectPresentation",
      title: "Project Exibition",
      description: "Showcase your innovative projects and get feedback from industry experts.",
      icon: "fas fa-bug",
      image: proj,
      registrationLink: "https://forms.gle/rvRVM6ms1QtwZZFy5",
      coordinators: [
        { 
          name: "Kshitij Tapekar", 
          role: "Co-Ordinator", 
          image: kshitij,
          email: "7700021900"
        },
        { 
          name: "Sarthak Labdhe", 
          role: "Co-Ordinator", 
          image: "/api/placeholder/150/150",
          email: "9324341287" 
        },
        // { 
        //   name: "Siddhesh Varhadi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "sid@gmail.com" 
        // }
      ],
      // Custom details for Code Relay 2.0
      details: {
        date: "April 3, 2025",
        time: "10:00 AM - 2:00 PM",
        venue: "Will be Updated on the WhatsApp Group",
        registrationDeadline: "April 5, 2025",
        requirements: "",
        teamSize: "4 members per team",
        Prize : "1st and 2nd winner would get coupons worth 1200rs",
        prizes: [
          { place: "1st Place", amount: "₹1500" },
          { place: "2nd Place", amount: "₹500" },
          {place : "1st and 2nd winner would get coupons worth 1200rs"}
      
        ],
        skills: ["Debugging", "Problem Solving", "Algorithms", "Code Optimization", "Time Management"],
        timeline: [
          { date: "March 20, 2025", event: "Registration Opens" },
          { date: "April 5, 2025", event: "Registration Closes" },
          { date: "April 8, 2025", event: "Selected Teams Notification" },
          { date: "April 10, 2025 10:00 AM", event: "Round 1: Bug Hunt" },
          { date: "April 10, 2025 12:00 PM", event: "Round 2: Code Relay" },
          { date: "April 10, 2025 2:00 PM", event: "Results & Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543211",
          email: "aisac.vpp@gmail.com",
          website: "www.college-coderelay.com"
        },
        rules: [
          "Each participant gets 10 minutes to present, followed by a Q&A session.",
          "Projects will be evaluated based on innovation, technical execution, and presentation quality.",
          "Winners will be determined based on judges' scores."
        ]        
      }
    },
    {
      id: "bgmi",
      title: "BGMI",
      description: "Battle it out in this fast-paced BGMI showdown where strategy and precision determine the winner.",
      icon: "fas fa-bug",
      image: bgmi,
      registrationLink: "https://forms.gle/jLp2Z7BC4fPhYddy9",
      coordinators: [
        { 
          name: "Siddhesh Varhadi", 
          role: "Co-Ordinator", 
          image: siddhesh,
          email: "7900164138"
        },
        { 
          name: "Pranav Agarthade", 
          role: "Co-Ordinator", 
          image: pranav,
          email: "8591727736" 
        },
        // { 
        //   name: "Siddhesh Varhadi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "sid@gmail.com" 
        // }
      ],
      // Custom details for Code Relay 2.0
      details: {
        date: "April 4, 2025",
        time: "10:00 AM - 2:00 PM",
        venue: "Will be Updated on the WhatsApp Group",
        registrationDeadline: "April 5, 2025",
        requirements: "",
        teamSize: "4 members per team",
        
        prizes: [
          { place: "1st Place", amount: "₹1000" },
          { place: "2nd Place", amount: "₹500" },
          {place : "1st and 2nd winner would get coupons worth 1200rs"}
          
          
        ],
        skills: ["Debugging", "Problem Solving", "Algorithms", "Code Optimization", "Time Management"],
        timeline: [
          { date: "March 20, 2025", event: "Registration Opens" },
          { date: "April 5, 2025", event: "Registration Closes" },
          { date: "April 8, 2025", event: "Selected Teams Notification" },
          { date: "April 10, 2025 10:00 AM", event: "Round 1: Bug Hunt" },
          { date: "April 10, 2025 12:00 PM", event: "Round 2: Code Relay" },
          { date: "April 10, 2025 2:00 PM", event: "Results & Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543211",
          email: "aisac.vpp@gmail.com",
          website: "www.college-coderelay.com"
        },
        rules: [
          "The competition features 10 teams in a battleground.",
          "Maps include Erangel and others.",
          "The last team standing wins.",
          "Any form of cheating results in immediate disqualification."
        ]        
      }
    },
    {
      id: "carromClash",
      title: "Carrom Clash",
      description: "Sharpen your aim and strategy in this exciting game of carrom where precision meets skill.",
      icon: "fas fa-bug",
      image: carrom,
      registrationLink: "https://forms.gle/xXV4sLuk3vT2rrgi6",
      coordinators: [
        { 
          name: "Siddhesh Varhadi", 
          role: "Co-Ordinator", 
          image: siddhesh,
          email: "7900164138"
        },
        { 
          name: "Pranav Agarthade", 
          role: "Co-Ordinator", 
          image: pranav,
          email: "8591727736" 
        },
        // { 
        //   name: "Siddhesh Varhadi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "sid@gmail.com" 
        // }
      ],
      // Custom details for Code Relay 2.0
      details: {
        date: "April 3, 2025",
        time: "10:00 AM - 2:00 PM",
        venue: "Will be Updated on the WhatsApp Group",
        registrationDeadline: "April 5, 2025",
        requirements: "",
        teamSize: "2 members per team",
        
        prizes: [
          { place: "1st Place", amount: "₹800" },
          {place : "1st winner would get coupons worth 1200rs"}
        
        ],
        skills: ["Debugging", "Problem Solving", "Algorithms", "Code Optimization", "Time Management"],
        timeline: [
          { date: "March 20, 2025", event: "Registration Opens" },
          { date: "April 5, 2025", event: "Registration Closes" },
          { date: "April 8, 2025", event: "Selected Teams Notification" },
          { date: "April 10, 2025 10:00 AM", event: "Round 1: Bug Hunt" },
          { date: "April 10, 2025 12:00 PM", event: "Round 2: Code Relay" },
          { date: "April 10, 2025 2:00 PM", event: "Results & Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543211",
          email: "aisac.vpp@gmail.com",
          website: "www.college-coderelay.com"
        },
        rules: [
          "Each team will consist of two players, and standard carrom rules apply.",
          "The first team to reach the required points wins, with queen capture and cover rules in effect.",
          "Touching the opponent’s piece results in a penalty, and incorrect strikes lead to a turn loss.",
          "In case of a tie, a sudden death round will decide the winner."
        ]        
      }
    },
    {
      id: "codeAndPray",
      title: "Code And Pray",
      description: "Put your coding instincts to the test as you write without sight—only faith in your skills will guide you to victory.",
      icon: "fas fa-bug",
      image: codeandpray,
      registrationLink: "https://forms.gle/HekrvhzAaQZLV8Jv7",
      coordinators: [
        { 
          name: "Omkar Shingote", 
          role: "Co-Ordinator", 
          image: "/api/placeholder/150/150",
          email: "9594231594"
        },
        { 
          name: "Urvi Turbekar", 
          role: "Co-Ordinator", 
          image: "/api/placeholder/150/150",
          email: "7738612080" 
        },
        // { 
        //   name: "Siddhesh Varhadi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "sid@gmail.com" 
        // }
      ],
      // Custom details for Code Relay 2.0
      details: {
        date: "April 4, 2025",
        time: "10:00 AM - 2:00 PM",
        venue: "Will be Updated on the WhatsApp Group",
        registrationDeadline: "April 5, 2025",
        requirements: "",
        teamSize: "1 member per team",
        
        prizes: [
          { place: "1st Place", amount: "₹500" },
          { place: "2nd Place", amount: "₹250" },
          {place : "1st and 2nd winner would get coupons worth 1200rs"}
          
        ],
        skills: ["Debugging", "Problem Solving", "Algorithms", "Code Optimization", "Time Management"],
        timeline: [
          { date: "March 20, 2025", event: "Registration Opens" },
          { date: "April 5, 2025", event: "Registration Closes" },
          { date: "April 8, 2025", event: "Selected Teams Notification" },
          { date: "April 10, 2025 10:00 AM", event: "Round 1: Bug Hunt" },
          { date: "April 10, 2025 12:00 PM", event: "Round 2: Code Relay" },
          { date: "April 10, 2025 2:00 PM", event: "Results & Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543211",
          email: "aisac.vpp@gmail.com",
          website: "www.college-coderelay.com"
        },
        rules: [
          "Participants will be given a webpage design to replicate using HTML and CSS, with the output hidden until the timer ends.",
          "Coding must be done on the provided platform, and the use of frameworks or external libraries is not allowed.",
          "Projects will be evaluated based on accuracy, code quality, and completion.",
          "A fixed time limit will be provided, and late submissions will not be accepted.",
          "Submitted code will be reviewed for adherence to coding standards."
        ]         
      }
    },
    {
      id: "dumbCharades",
      title: "Dumb Charades",
      description: "Unleash your acting skills in this classic game where gestures speak louder than words.",
      image: dumbcharades,
      registrationLink: "https://forms.gle/mEgy3na9CngqqKFw5",
      coordinators: [
        { 
          name: "Siddhesh Varhadi", 
          role: "Co-Ordinator", 
          image: siddhesh,
          email: "7900164138"
        },
        { 
          name: "Pranav Agarthade", 
          role: "Co-Ordinator", 
          image: pranav,
          email: "8591727736" 
        },
        // { 
        //   name: "Siddhesh Varhadi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "sid@gmail.com" 
        // }
      ],
      // Custom details for Code Relay 2.0
      details: {
        date: "April 4, 2025",
        time: "10:00 AM - 2:00 PM",
        venue: "Will be Updated on the WhatsApp Group",
        registrationDeadline: "April 5, 2025",
        requirements: "",
        teamSize: "3 members per team",
        Prize : "1st and 2nd winner would get coupons worth 1200rs",
        prizes: [
          { place: "1st Place", amount: "₹800" },
          {place : "1st winner would get coupons worth 1200rs"}
          
        ],
        skills: ["Debugging", "Problem Solving", "Algorithms", "Code Optimization", "Time Management"],
        timeline: [
          { date: "March 20, 2025", event: "Registration Opens" },
          { date: "April 5, 2025", event: "Registration Closes" },
          { date: "April 8, 2025", event: "Selected Teams Notification" },
          { date: "April 10, 2025 10:00 AM", event: "Round 1: Bug Hunt" },
          { date: "April 10, 2025 12:00 PM", event: "Round 2: Code Relay" },
          { date: "April 10, 2025 2:00 PM", event: "Results & Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543211",
          email: "aisac.vpp@gmail.com",
          website: "www.college-coderelay.com"
        },
        rules: [
          "Each team will consist of 3 members: one person will act, and two will guess.",
          "Each round has a time limit of 60 seconds.",
          "No verbal or written communication is allowed, and the use of props is prohibited.",
          "Correct answers earn points, and the team with the highest score wins."
        ]        
      }
    },
    {
      id: "aiVisionary",
      title: "AI Visionary",
      description: "Dive into the future with AI-driven challenges that test your technical foresight.",
      icon: "fas fa-bug",
      image: aivisionary,
      registrationLink: "https://forms.gle/kscpDreUV9N8EK4cA",
      coordinators: [
        { 
          name: "Siddhesh Varhadi", 
          role: "Co-Ordinator", 
          image: siddhesh,
          email: "7900164138"
        },
        { 
          name: "Pranav Agarthade", 
          role: "Co-Ordinator", 
          image: pranav,
          email: "8591727736" 
        },
        // { 
        //   name: "Siddhesh Varhadi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "sid@gmail.com" 
        // }
      ],
      // Custom details for Code Relay 2.0
      details: {
        date: "April 4, 2025",
        time: "10:00 AM - 2:00 PM",
        venue: "Will be Updated on the WhatsApp Group",
        registrationDeadline: "April 5, 2025",
        requirements: "",
        teamSize: "1 member per team",
        
        prizes: [
          { place: "1st Place", amount: "₹600" },
          { place: "2nd Place", amount: "₹300" },
          {place : "1st and 2nd winner would get coupons worth 1200rs"}
          
        ],
        skills: ["Debugging", "Problem Solving", "Algorithms", "Code Optimization", "Time Management"],
        timeline: [
          { date: "March 20, 2025", event: "Registration Opens" },
          { date: "April 5, 2025", event: "Registration Closes" },
          { date: "April 8, 2025", event: "Selected Teams Notification" },
          { date: "April 10, 2025 10:00 AM", event: "Round 1: Bug Hunt" },
          { date: "April 10, 2025 12:00 PM", event: "Round 2: Code Relay" },
          { date: "April 10, 2025 2:00 PM", event: "Results & Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543211",
          email: "aisac.vpp@gmail.com",
          website: "www.college-coderelay.com"
        },
        rules: [
          "Participants will be given a creative task to generate an image using AI tools, aligning with the provided theme or concept.",
          "After generating the image, participants must create an animated video based on it, highlighting the theme and creative process.",
          "Projects will be evaluated based on creativity, relevance, and technical execution.",
          "A fixed time limit will be provided for both image generation and video creation.",
          "Use of copyrighted or offensive content is prohibited, and ethical AI guidelines must be followed.",
          "Files must be submitted in specified formats (PNG, MP4, etc.), and late submissions will not be considered."
        ]        
      }
    },
    {
      id: "ludo",
      title: "Ludo Tech",
      description: "Combine strategy and luck in this engaging Ludo challenge.",
      icon: "fas fa-bug",
      image: ludo,
      registrationLink: "https://forms.gle/oSL8hcTSMNp3JHkR9",
      coordinators: [
        { 
          name: "Siddhesh Varhadi", 
          role: "Co-Ordinator", 
          image: siddhesh,
          email: "7900164138"
        },
        { 
          name: "Pranav Agarthade", 
          role: "Co-Ordinator", 
          image: pranav,
          email: "8591727736" 
        },
        // { 
        //   name: "Siddhesh Varhadi", 
        //   role: "Event Manager", 
        //   image: "/api/placeholder/150/150",
        //   email: "sid@gmail.com" 
        // }
      ],
      // Custom details for Code Relay 2.0
      details: {
        date: "April 4, 2025",
        time: "10:00 AM - 2:00 PM",
        venue: "Will be Updated on the WhatsApp Group",
        registrationDeadline: "April 5, 2025",
        requirements: "",
        
        teamSize: "4 members per team",
        
        prizes: [
          { place: "1st Place", amount: "₹1000" },
          {place : "1st winner would get coupons worth 1200rs"}
        
          
          
        ],
        skills: ["Debugging", "Problem Solving", "Algorithms", "Code Optimization", "Time Management"],
        timeline: [
          { date: "March 20, 2025", event: "Registration Opens" },
          { date: "April 5, 2025", event: "Registration Closes" },
          { date: "April 8, 2025", event: "Selected Teams Notification" },
          { date: "April 10, 2025 10:00 AM", event: "Round 1: Bug Hunt" },
          { date: "April 10, 2025 12:00 PM", event: "Round 2: Code Relay" },
          { date: "April 10, 2025 2:00 PM", event: "Results & Prize Distribution" }
        ],
        contacts: {
          phone: "+91 9876543211",
          email: "aisac.vpp@gmail.com",
          website: "www.college-coderelay.com"
        },
        rules: [
          "The game will be played on a human-sized Ludo board, where players roll dice to move.",
          "Landing on a safe spot triggers a tech riddle; correct answers keep players safe, while wrong answers result in penalties.",
          "The first team to finish wins."
        ]        
      }
    }
  ];

  // State for the event details modal
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // State for active section in modal
  const [activeSection, setActiveSection] = useState('event-details');

  // Function to open the modal with the selected event
  const openEventDetails = (event) => {
    // Save current scroll position before opening modal
    setScrollPosition(window.pageYOffset);
    setSelectedEvent(event);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    // Reset active section
    setActiveSection('event-details');
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
    // Restore scroll position
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };

  // Set up countdown functionality for featured events
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const featuredEvent = events.find(event => event.featured);
    if (featuredEvent && featuredEvent.eventDate) {
      const timer = setInterval(() => {
        const eventDate = new Date("April 3, 2025 08:00:00");
        const now = new Date().getTime();
        const difference = eventDate - now;
        
        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((difference / (1000 * 60)) % 60);
          const seconds = Math.floor((difference / 1000) % 60);
          
          setTimeLeft({
            days,
            hours,
            minutes,
            seconds
          });
        } else {
          clearInterval(timer);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [events]);

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleOutsideClick = (e) => {
      if (isModalOpen && e.target.classList.contains('modal-overlay')) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('click', handleOutsideClick);
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isModalOpen]);

  // Track scroll position within the modal to update active section
  useEffect(() => {
    if (isModalOpen) {
      const handleScroll = () => {
        const sections = ['event-details', 'prize-pool', 'rules', 'timeline'];
        
        for (let section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the top of the element is near the top of the viewport
            if (rect.top <= 200) {
              setActiveSection(section);
            }
          }
        }
      };
      
      const modalContent = document.querySelector('.modal-content');
      if (modalContent) {
        modalContent.addEventListener('scroll', handleScroll);
        return () => modalContent.removeEventListener('scroll', handleScroll);
      }
    }
  }, [isModalOpen]);

  // Add lazy loading to improve performance
  useEffect(() => {
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        img.src = img.dataset.src;
      });
    } else {
      // Fallback for browsers that don't support lazy loading
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header - Updated with purple theme */}
      <header className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center animate__animated animate__fadeIn">OSCILLATION 2025</h1>
          <p className="text-xl text-center mt-2 animate__animated animate__fadeIn animate__delay-1s">April 3rd-4th, 2025 • An Immersive Technical Experience</p>
          
          {/* Featured Event Countdown - Updated with purple theme */}
          {events.find(event => event.featured) && (
            <div className="mt-8 bg-purple-700 rounded-lg p-6 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-2s shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-center mb-4">
                {events.find(event => event.featured)?.title} is Coming Soon!
              </h2>
              <div className="flex justify-center space-x-4">
                <div className="text-center bg-purple-600 p-3 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm">Days</div>
                </div>
                <div className="text-center bg-purple-600 p-3 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm">Hours</div>
                </div>
                <div className="text-center bg-purple-600 p-3 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm">Minutes</div>
                </div>
                <div className="text-center bg-purple-600 p-3 rounded-lg">
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm">Seconds</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a 
                  href={events.find(event => event.featured)?.registrationLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-purple-800 font-bold py-2 px-8 rounded-full hover:bg-purple-100 transition duration-300 animate-pulse"
                >
                  Register Now
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-800 animate__animated animate__fadeIn">Our Events</h2>
        
        {/* Back button to navigate to top */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-purple-800 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all z-10 animate__animated animate__fadeIn"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-purple-900 opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-800">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="mb-4">
                  <div className="flex items-center text-gray-700">
                    <i className="far fa-calendar-alt mr-2 text-purple-600"></i>
                    <span>{event.details.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700 mt-1">
                    <i className="far fa-clock mr-2 text-purple-600"></i>
                    <span>{event.details.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700 mt-1">
                    <i className="fas fa-map-marker-alt mr-2 text-purple-600"></i>
                    <span>{event.details.venue}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm bg-purple-100 text-purple-800 py-1 px-3 rounded-full">
                    {event.details.teamSize}
                  </span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => openEventDetails(event)}
                      className="bg-green-600 text-white font-bold py-1 px-3 rounded hover:bg-green-700 transition duration-300 transform hover:scale-105"
                    >
                      Details
                    </button>
                    <a 
                      href={event.registrationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-purple-800 text-white font-bold py-1 px-3 rounded hover:bg-purple-700 transition duration-300 transform hover:scale-105"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Event Details Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start p-4 modal-overlay overflow-y-auto animate__animated animate__fadeIn">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full my-8 animate__animated animate__zoomIn">
            {/* Modal Header */}
            <div className="relative">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title} 
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <button 
                  onClick={closeModal}
                  className="bg-white bg-opacity-80 text-gray-800 p-2 rounded-full hover:bg-opacity-100 transition duration-200 flex items-center transform hover:scale-105"
                >
                  <i className="fas fa-arrow-left mr-1"></i> Back
                </button>
              </div>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-80 text-gray-800 p-2 rounded-full hover:bg-opacity-100 transition duration-200 transform hover:scale-105"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-6">
                <h3 className="text-3xl font-bold text-white">{selectedEvent.title}</h3>
              </div>
            </div>
            
            {/* Modal Fixed Navigation - This is now fixed */}
            <div className="sticky top-0 bg-white py-2 px-4 border-b z-20 shadow-md">
              <div className="flex justify-around items-center">
                <a 
                  href="#event-details" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('event-details').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-${activeSection === 'event-details' ? 'purple-800 font-bold' : 'purple-600'} hover:text-purple-800 transition-all px-2 py-1 rounded ${activeSection === 'event-details' ? 'border-b-2 border-purple-800' : ''}`}
                >
                  Event Details
                </a>
                <a 
                  href="#prize-pool" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('prize-pool').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-${activeSection === 'prize-pool' ? 'purple-800 font-bold' : 'purple-600'} hover:text-purple-800 transition-all px-2 py-1 rounded ${activeSection === 'prize-pool' ? 'border-b-2 border-purple-800' : ''}`}
                >
                  Prize Pool
                </a>
                <a 
                  href="#rules" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('rules').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-${activeSection === 'rules' ? 'purple-800 font-bold' : 'purple-600'} hover:text-purple-800 transition-all px-2 py-1 rounded ${activeSection === 'rules' ? 'border-b-2 border-purple-800' : ''}`}
                >
                  Rules
                </a>
                <a 
                  href="#timeline" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-${activeSection === 'timeline' ? 'purple-800 font-bold' : 'purple-600'} hover:text-purple-800 transition-all px-2 py-1 rounded ${activeSection === 'timeline' ? 'border-b-2 border-purple-800' : ''}`}
                >
                  Timeline
                </a>
                {/* <a 
                  href="#contacts" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-${activeSection === 'contacts' ? 'purple-800 font-bold' : 'purple-600'} hover:text-purple-800 transition-all px-2 py-1 rounded ${activeSection === 'contacts' ? 'border-b-2 border-purple-800' : ''}`}
                >
                  Contacts
                </a> */}
              </div>
            </div>
            
            {/* Modal Content - Adding class for scroll tracking */}
            <div className="p-6 overflow-y-auto max-h-screen modal-content">
              {/* Basic Details */}
              <div id="event-details" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 animate__animated animate__fadeIn">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-purple-800">Event Details</h4>
                  <p className="text-gray-700 mb-1"><span className="font-semibold">Date:</span> {selectedEvent.details.date}</p>
                  <p className="text-gray-700 mb-1"><span className="font-semibold">Time:</span> {selectedEvent.details.time}</p>
                  <p className="text-gray-700 mb-1"><span className="font-semibold">Venue:</span> {selectedEvent.details.venue}</p>
                  <p className="text-gray-700 mb-1"><span className="font-semibold">Registration Deadline:</span> {selectedEvent.details.registrationDeadline}</p>
                  <p className="text-gray-700 mb-1"><span className="font-semibold">Team Size:</span> {selectedEvent.details.teamSize}</p>
                  <p className="text-gray-700 mb-1"><span className="font-semibold">Requirements:</span> {selectedEvent.details.requirements}</p>
                </div>
                
                {/* Coordinators Section */}
                <div>
                  <h4 className="text-xl font-bold mb-3 text-purple-800">Event Coordinators</h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedEvent.coordinators.map((coordinator, index) => (
                      <div 
                        key={index} 
                        className="flex items-center bg-purple-50 p-2 rounded-lg transition-all hover:shadow-md transform hover:scale-105"
                      >
                        <img
                          src={coordinator.image}
                          alt={coordinator.name}
                          className="w-12 h-12 rounded-full object-cover mr-3"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-semibold text-purple-800">{coordinator.name}</p>
                          <p className="text-gray-600 text-sm">{coordinator.role}</p>
                          <p className="text-purple-600 text-sm">{coordinator.email}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Prize Pool Section */}
              <div id="prize-pool" className="mb-6 pt-4 animate__animated animate__fadeIn">
                <h4 className="text-xl font-bold mb-3 text-purple-800">Prize Pool</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedEvent.details.prizes.map((prize, index) => (
                    <div 
                      key={index} 
                      className="bg-purple-50 p-4 rounded-lg text-center transform transition-transform hover:scale-105 hover:shadow-lg"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <p className="font-bold text-purple-800">{prize.place}</p>
                      <p className="text-2xl font-bold text-green-600">{prize.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rules Section */}
              <div id="rules" className="mb-6 pt-4 animate__animated animate__fadeIn">
                <h4 className="text-xl font-bold mb-3 text-purple-800">Rules</h4>
                <ul className="space-y-2">
                {selectedEvent.details.rules.map((rule, index) => (
                    <li 
                      key={index} 
                      className="flex items-start p-2 hover:bg-purple-50 rounded-md transition-colors"
                    >
                      <i className="fas fa-check-circle text-purple-600 mt-1 mr-2"></i>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Required Skills Section */}
              <div className="mb-6 pt-4 animate__animated animate__fadeIn">
                <h4 className="text-xl font-bold mb-3 text-purple-800">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.details.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Timeline Section */}
              <div id="timeline" className="mb-6 pt-4 animate__animated animate__fadeIn">
                <h4 className="text-xl font-bold mb-3 text-purple-800">Event Timeline</h4>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-9 top-0 h-full w-0.5 bg-purple-200"></div>
                  
                  {/* Timeline items */}
                  {selectedEvent.details.timeline.map((item, index) => (
                    <div 
                      key={index} 
                      className="relative pl-20 pb-6 animate__animated animate__fadeInLeft"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-7 top-1 w-5 h-5 bg-purple-600 border-4 border-purple-100 rounded-full"></div>
                      <p className="absolute left-0 top-0 text-sm text-purple-800 font-semibold">{item.date.split(" ")[0]}</p>
                      <div className="bg-purple-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Contact Information */}
              {/* <div id="contacts" className="mb-6 pt-4 animate__animated animate__fadeIn">
                <h4 className="text-xl font-bold mb-3 text-purple-800">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg transform transition-transform hover:scale-105">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-phone text-purple-600 mr-2"></i>
                      <span className="font-semibold text-purple-800">Phone</span>
                    </div>
                    <p className="text-gray-700">{selectedEvent.details.contacts.phone}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg transform transition-transform hover:scale-105">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-envelope text-purple-600 mr-2"></i>
                      <span className="font-semibold text-purple-800">Email</span>
                    </div>
                    <p className="text-gray-700">{selectedEvent.details.contacts.email}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg transform transition-transform hover:scale-105">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-globe text-purple-600 mr-2"></i>
                      <span className="font-semibold text-purple-800">Website</span>
                    </div>
                    <p className="text-gray-700">{selectedEvent.details.contacts.website}</p>
                  </div>
                </div>
              </div> */}
              
              {/* Registration Button */}
              <div className="text-center py-4 mt-4 animate__animated animate__fadeInUp">
                <a 
                  href={selectedEvent.registrationLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-800 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-md"
                >
                  Register for {selectedEvent.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
    
    </div>
  );
};

export default App;