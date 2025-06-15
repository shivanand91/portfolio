import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.jpg'
const roles = [
  ' FullStack Web Developer',
  ' Fontend Developer',
  ' Backend Developer',
  ' UI/UX Designer',
  ' DSA Enthusiast'
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => setFade(false), 1800);
    const next = setTimeout(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setFade(true);
    }, 2200);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [currentRole]);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between py-10 h-[550px] px-4 sm:px-8 md:px-20  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Left: Photo with animation */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"></div>
          <img
            src={profile}
            alt="My Photo"
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-xl animate-float"
          />
        </div>
      </div>

      {/* Right: Name, running text, buttons */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            Shivanand Kumar
          </span>
        </h1>
        {/* Running text effect */}
        <div className="h-10 mb-6 flex items-center justify-center min-w-[200px] space-x-1">
          <h3 className='text-lg sm:text-xl md:text-2xl text-gray-300 font-medium transition-opacity duration-400'>I am a  
          <span
            className={`text-lg sm:text-xl md:text-2xl text-yellow-300 font-bold transition-opacity duration-400 ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
            >
              {roles[currentRole]}
            </span>
            </h3>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center sm:justify-start">
          <a
            href="https://drive.google.com/uc?export=download&id=1bsumK_MV6adKLhGvLt6tsSCCfl23dqtP"
            download
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg font-semibold hover:scale-105 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 text-center"
          >
            Download Resume
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow-lg font-semibold border border-gray-300 hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;