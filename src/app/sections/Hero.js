'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Parallax from '../components/animations/Parallax';
import useMediaQuery from '../components/utils/MediaQuery';
import { hero } from '@/data/about';

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = hero.phrases;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(phrases[index].slice(0, text.length + 1));
    }, 100);

    if (text === phrases[index]) {
      setTimeout(() => {
        setText('');
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [text, index, phrases]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <Parallax offset={isMobile ? 150 : 500}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left relative z-10"
          >
            <div className="mb-6 inline-block">
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="text-5xl sm:text-6xl lg:text-7xl mb-2"
              >
                👋
              </motion.div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-accent">Brandon Faulkner</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-secondary-text mb-8 h-14">
              <span className="border-r-2 border-accent pr-1">{text}</span>
            </h2>
            <p className="text-lg text-secondary-text mb-8 max-w-2xl">
              {hero.tagline}
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-full font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute inset-0 bg-accent opacity-20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-secondary hover:bg-secondary-hover text-primary-text px-8 py-3 rounded-full font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">View Work</span>
                <motion.div
                  className="absolute inset-0 bg-secondary opacity-20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
            </div>

            <div className="mt-12 flex gap-6 justify-center lg:justify-start">
              {hero.socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: social.delay }}
                  className="text-secondary-text hover:text-accent"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 relative"
          >
            <div className="w-80 h-80 sm:w-96 sm:h-96 relative mx-auto">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 bg-accent/60 dark:bg-accent/20 rounded-full filter blur-3xl"
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card-border">
                <Image
                  src="/images/Headshot.jpg"
                  width={3024}
                  height={4032}
                  alt='Image of Brandon Faulkner'
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Parallax>
    </section>
  );
}