import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/education', label: 'Education' },
    { to: '/contact', label: 'Contact' },
    // { to: '/experience', label: 'Experience' },
];

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl sticky top-0 z-50 opacity-97">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Link to="/" className="text-white font-bold text-2xl sm:text-3xl tracking-tight drop-shadow-lg">
                        Shivanand <span className='text--700'>Kumar</span>
                    </Link>
                </div>
                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `relative text-white font-semibold px-3 py-1 transition hover:text-yellow-300 after:block after:bg-yellow-300 after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1` +
                                (isActive ? ' text-yellow-300' : '')
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        aria-label="Open menu"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 pb-4 pt-2 shadow-lg animate-fade-in-down">
                    <nav className="flex flex-col space-y-3">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-white font-semibold px-3 py-2 rounded hover:bg-yellow-300 hover:text-indigo-800 transition` +
                                    (isActive ? ' bg-blue-800 text-black' : '')
                                }
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;