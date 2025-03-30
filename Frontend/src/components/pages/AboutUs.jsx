import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Sagar Gupta",
      role: "Language Creator",
      image: "/Sagar.jpg", 
      github: "https://github.com/sagargupta35",
      linkedin: "https://www.linkedin.com/in/sagar-gupta-733b02290/",
      description: "Competitive Programmer and ML Enthusiast"
    },
    {
      name: "Swastik Verma",
      role: "Frontend Developer",
      image: "/Swastik.jpg",
      github: "https://github.com/SwastikVerma1",
      linkedin: "https://www.linkedin.com/in/swastikverma/",
      description: "Skilled in creating beautiful and functional user interfaces with modern technologies."
    },
    {
      name: "Ashutosh Patel",
      role: "Backend Developer",
      image: "/Ash.jpg",
      github: "https://github.com/Ash590034",
      linkedin: "https://www.linkedin.com/in/ashutosh-patel9443/",
      description: "Backend developer skilled in the MERN stack, building efficient APIs, etc. Strong problem-solver with a competitive programming background in data structures and algorithms."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 px-4 py-2 bg-[#e8984a] text-black font-semibold rounded-lg hover:bg-[#ec625d] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-[#ec625d7e] flex items-center space-x-2 z-10"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>Back to Home</span>
      </button>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Our Team</h1>
          <p className="text-gray-400 text-lg">Meet the talented individuals behind Golmaal</p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#e8984a]/20 border border-gray-700/50"
            >
              {/* Image Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-4 border-[#e8984a]">
                {<img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />}
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#e8984a] font-medium mb-4">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-6">
                <a href={member.github} className="text-gray-400 hover:text-[#e8984a] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href={member.linkedin} className="text-gray-400 hover:text-[#e8984a] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
