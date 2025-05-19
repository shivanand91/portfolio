import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
];

const socials = [
    {
        href: 'https://github.com/shivanand91',
        target: '_blank',
        icon: <FaGithub />,
        label: 'GitHub',
    },
    {
        href: 'https://www.linkedin.com/in/shivanand-kumar-7a8924234/',
        target: '_blank',
        icon: <FaLinkedin />,
        label: 'LinkedIn',
    },
    {
        href: 'https://x.com/Shivanand802114',
        target: '_blank',
        icon: <FaTwitter />,
        label: 'Twitter',
    },
    {
        href: 'mailto:shivanand916232@gamil.com',
        icon: <FaEnvelope />,
        label: 'Email',
    },
];

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 border-t-1  shadow-[0_-2px_16px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Animated Gradient Blobs */}
            <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-blob1" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl animate-blob2" />

            <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
                {/* Navigation */}
                <nav className="flex gap-8">
                    {navLinks.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `no-underline font-semibold text-[1.1rem] px-2 py-1 rounded transition-all duration-300
                                ${
                                    isActive
                                        ? 'text-yellow-300 bg-white/10 shadow-md scale-105'
                                        : 'text-white hover:text-yellow-300 hover:bg-white/5 hover:scale-105'
                                }`
                            }
                        >
                            <span className="relative group">
                                {label}
                                <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-yellow-300 absolute left-0 -bottom-1 rounded" />
                            </span>
                        </NavLink>
                    ))}
                </nav>

                {/* Social Media */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[1rem] font-semibold tracking-wide mb-1">Follow me</span>
                    <div className="flex gap-6">
                        {socials.map(({ href, icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group relative text-2xl transition-transform duration-300 hover:scale-125 hover:text-yellow-300"
                                aria-label={label}
                            >
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 text-xs bg-black/70 px-2 py-1 rounded text-yellow-300 pointer-events-none">
                                    {label}
                                </span>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative z-10 text-[0.95rem] opacity-80 text-center mt-10">
                &copy; {new Date().getFullYear()} Shivanand Kumar. All rights reserved.
            </div>

            {/* Tailwind CSS keyframes for blobs */}
            <style>
                {`
                    @keyframes blob1 {
                        0%, 100% { transform: translateY(0) scale(1); }
                        50% { transform: translateY(30px) scale(1.1); }
                    }
                    @keyframes blob2 {
                        0%, 100% { transform: translateY(0) scale(1); }
                        50% { transform: translateY(-30px) scale(1.1); }
                    }
                    .animate-blob1 { animation: blob1 8s infinite ease-in-out; }
                    .animate-blob2 { animation: blob2 10s infinite ease-in-out; }
                `}
            </style>
        </footer>
    );
};

export default Footer;
