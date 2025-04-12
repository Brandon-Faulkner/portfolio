'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-nav-bg backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Brandon Faulkner
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex space-x-8 text-primary-text">
              <Link href="#about" className="hover:text-accent">
                About
              </Link>
              <Link href="#projects" className="hover:text-accent">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-accent">
                Skills
              </Link>
              <Link href="#contact" className="hover:text-accent">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 rounded-md text-primary-text hover:text-accent"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-nav-bg backdrop-blur-sm"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                href="#about"
                className="block px-3 py-2 rounded-md text-primary-text hover:text-accent hover:bg-card-bg"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="block px-3 py-2 rounded-md text-primary-text hover:text-accent hover:bg-card-bg"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="block px-3 py-2 rounded-md text-primary-text hover:text-accent hover:bg-card-bg"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 rounded-md text-primary-text hover:text-accent hover:bg-card-bg"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}