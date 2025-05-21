import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'GitHub Info Fetcher',
        description: 'A sleek and modern portfolio website built with React and styled-components.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
        github: 'https://github.com/shivanand91/githubinfofetcher',
        demo: 'https://yourportfolio.com',
    },
    {
        title: 'Portfolio',
        description: 'A responsive e-commerce store with shopping cart and payment integration.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        github: 'https://github.com/shivanand91/portfolio',
        demo: 'https://yourecommerce.com',
    },
    {
        title: 'E-commerce Store',
        description: 'A responsive e-commerce store with shopping cart and payment integration.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        github: 'https://github.com/yourusername/ecommerce',
        demo: 'https://yourecommerce.com',
    },
    {
        title: 'E-commerce Store',
        description: 'A responsive e-commerce store with shopping cart and payment integration.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        github: 'https://github.com/yourusername/ecommerce',
        demo: 'https://yourecommerce.com',
    },
    {
        title: 'E-commerce Store',
        description: 'A responsive e-commerce store with shopping cart and payment integration.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        github: 'https://github.com/yourusername/ecommerce',
        demo: 'https://yourecommerce.com',
    },
    {
        title: 'E-commerce Store',
        description: 'A responsive e-commerce store with shopping cart and payment integration.',
        image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
        github: 'https://github.com/yourusername/ecommerce',
        demo: 'https://yourecommerce.com',
    },
    // Add more projects as needed
];

const Project = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 font-inter">
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
