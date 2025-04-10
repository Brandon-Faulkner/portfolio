'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="hidden sm:block">
            <div className="flex space-x-8 text-primary-text">
              <Link href="#about" className="hover:text-accent">
                About
              </Link>
              <Link href="#skills" className="hover:text-accent">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-accent">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-accent">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;