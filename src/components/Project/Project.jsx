import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import portfolio from '../../assets/portfolio.png'
import github from '../../assets/github.png'
import YouTube from '../../assets/YouTube.png'
import Employee from '../../assets/Employee.png'
import CRUD from '../../assets/CRUD.png'
import thinkboard from '../../assets/thinkboard.png';

const projects = [
    {
        title: 'GitHub InfThinkBoard – A MERN Stack Note-Taking App 🧠o Fe',
        description: 'Proud to share my latest Full-Stack MERN project — built from scratch to production! ThinkBoard is a responsive and beginner-friendly note-taking app that lets users easily create, update, and delete notes with a title and content.',
        image: thinkboard,
        github: 'https://github.com/shivanand91/thinkboard',
        demo: 'https://thinkboard-aixs.onrender.com/',
    },
    {
        title: 'GitHub Info Fetcher',
        description: 'A tool to fetch and display GitHub user information, repositories, and more.',
        image: github,
        github: 'https://github.com/shivanand91/githubinfofetcher',
        demo: 'https://githubinfofetch.vercel.app/',
    },
    {
        title: 'Portfolio',
        description: 'A personal portfolio website showcasing my projects,skills, education and experience.',
        image: portfolio,
        github: 'https://github.com/shivanand91/portfolio',
        demo: 'https://portfolio-pink-theta-60.vercel.app/',
    },
    {
        title: 'VideoTube with Ai',
        description: 'A video streaming platform with Ai Integration for automatic video captioning and Thumbnail.',
        image: '#',
        github: 'https://github.com/yourusername/ecommerce',
        demo: 'https://yourecommerce.com',
    },
    {
        title: 'CRUD Application',
        description: 'A simple CRUD application for managing tasks like add task, delete and update.',
        image: CRUD,
        github: 'https://github.com/shivanand91/crud-project.git',
        demo: '#',
    },
    {
        title: 'YouTube Backend',
        description: 'A backend service for a YouTube-like application, handling video uploads, user authentication, and more.',
        image: YouTube,
        github: 'https://github.com/shivanand91/Backend.git',
        demo: '#',
    },
    {
        title: 'Employee Management System',
        description: 'A web application for managing employee records, including CRUD operations and search functionality.',
        image: Employee,
        github: 'https://github.com/shivanand91/employeemanagement.git',
        demo: '#',
    },
    // Add more projects as needed
];

const Project = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4 font-inter">
            <h2 className="text-white text-center text-4xl md:text-5xl mb-8 tracking-wider font-bold">
                My Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-white/5 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 overflow-hidden transform transition duration-300 hover:scale-[1.03] relative animate-fadeInUp"
                        style={{ animationDelay: `${idx * 0.15 + 0.2}s`, animationFillMode: 'both' }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-52 object-cover transition-transform duration-400 hover:scale-105"
                        />
                        <div className="p-6">
                            <h3 className="text-[#00e6d3] text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-200 mb-5 min-h-[60px]">{project.description}</p>
                            <div className="flex gap-4">
                                <Link
                                    to={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-medium text-white bg-gradient-to-r from-[#00e6d3] to-[#0072ff] px-4 py-2 rounded-lg shadow-md transition-colors duration-200 hover:from-[#0072ff] hover:to-[#00e6d3]"
                                >
                                    <FaGithub /> GitHub
                                </Link>
                                <Link
                                    to={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 font-medium text-white bg-gradient-to-r from-[#ff512f] to-[#dd2476] px-4 py-2 rounded-lg shadow-md transition-colors duration-200 hover:from-[#dd2476] hover:to-[#ff512f]"
                                >
                                    <FaExternalLinkAlt /> Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style>
                {`
                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.7s both;
                }
                `}
            </style>
        </section>
    );
};

export default Project;
