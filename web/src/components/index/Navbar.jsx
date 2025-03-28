'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <Link href="/" className="text-lg font-bold" onClick={() => handleLinkClick('/')}>MyWebsite</Link>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/" onClick={() => handleLinkClick('/')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeLink === '/' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Home</Link>
                <Link href="/about" onClick={() => handleLinkClick('/about')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeLink === '/about' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>About</Link>
                <Link href="/services" onClick={() => handleLinkClick('/services')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeLink === '/services' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Services</Link>
                <Link href="/contact" onClick={() => handleLinkClick('/contact')} className={`px-3 py-2 rounded-md text-sm font-medium ${activeLink === '/contact' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" onClick={() => handleLinkClick('/')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === '/' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Home</Link>
            <Link href="/about" onClick={() => handleLinkClick('/about')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === '/about' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>About</Link>
            <Link href="/services" onClick={() => handleLinkClick('/services')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === '/services' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Services</Link>
            <Link href="/contact" onClick={() => handleLinkClick('/contact')} className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink === '/contact' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>Contact</Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;