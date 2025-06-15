import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.jpg';

const About = () => {
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-13">
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden animate-fade-in border border-gray-700">
                {/* Left Side - About Info */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center animate-slide-in-left">
                    <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-lg">About Me</h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Hi, I'm <span className="font-semibold text-indigo-400">Shivanand Kumar</span>, a passionate web developer specializing in modern JavaScript frameworks and UI/UX design. I love building beautiful, performant, and accessible web applications.
                    </p>
                    <div className="mb-8">
                        <h3 className="font-semibold text-indigo-300 mb-1 tracking-wide">Address</h3>
                        <p className="text-gray-400">Lucknow<br />Uttar Pradesh, India</p>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-block px-8 text-center py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:from-pink-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Contact Me
                    </Link>
                </div>
                {/* Right Side - Photo */}
                <div className="md:w-1/2 py-4 flex items-center justify-center bg-gradient-to-tr from-indigo-900 via-gray-900 to-purple-900 relative animate-slide-in-right">
                    <div className="relative ">
                        <img
                            src={profile}
                            alt="Your Portrait"
                            className="w-72 h-72 object-cover rounded-full border-8 border-indigo-400 shadow-2xl transform hover:scale-105 transition-transform duration-300"
                        />
                        {/* Decorative glowing ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-indigo-500 opacity-40 animate-pulse"></div>
                        {/* Decorative blob */}
                        <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    </div>
                </div>
            </div>
            {/* Animations */}
            <style>
                {`
                    .animate-fade-in {
                        animation: fadeIn 1s ease;
                    }
                    .animate-slide-in-left {
                        animation: slideInLeft 1s ease;
                    }
                    .animate-slide-in-right {
                        animation: slideInRight 1s ease;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0 }
                        to { opacity: 1 }
                    }
                    @keyframes slideInLeft {
                        from { opacity: 0; transform: translateX(-40px);}
                        to { opacity: 1; transform: translateX(0);}
                    }
                    @keyframes slideInRight {
                        from { opacity: 0; transform: translateX(40px);}
                        to { opacity: 1; transform: translateX(0);}
                    }
                `}
            </style>
        </div>
    );
};

export default About;