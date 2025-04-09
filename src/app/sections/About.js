'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import Parallax from '../components/animations/Parallax';
import Timeline from '../components/Timeline';

const Terminal = () => {
    const [text, setText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);

    const lines = [
        'C:\\Users\\Brandon> whoami',
        'developer',
        '',
        'C:\\Users\\Brandon> developer.info',
        '{',
        '    name: "Brandon Faulkner",',
        '    title: "Software Developer",',
        '    experience: "10000+ years",',
        '    skills: ["JavaScript", "React", "Node.js", "Python"],',
        '    passion: "Building elegant solutions to complex problems"',
        '}',
        '',
        'C:\\Users\\Brandon> _'
    ];

    useEffect(() => {
        if (currentLine < lines.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + lines[currentLine] + '\n');
                setCurrentLine(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentLine]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg shadow-lg"
        >
            {/* Windows terminal title bar */}
            <div className="bg-windows-title px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img 
                        src="/icons/terminal-icon.svg" 
                        alt="Windows CMD Icon" 
                        className="w-4 h-4"
                        onError={(e) => e.target.style.display = 'none'} 
                    />
                    <span className="text-primary-text text-sm">Command Prompt</span>
                </div>
                <div className="flex gap-2">
                    <button className="hover:bg-windows-hover px-3 py-0.5 text-primary-text">─</button>
                    <button className="hover:bg-windows-hover px-3 py-0.5 text-primary-text">□</button>
                    <button className="hover:bg-windows-hover px-3 py-0.5 text-primary-text">×</button>
                </div>
            </div>

            {/* Terminal content */}
            <div className="bg-windows-content p-4 font-mono text-sm">
                <pre className="whitespace-pre-wrap text-windows-text">{text}</pre>
                <span className="animate-pulse text-windows-text">█</span>
            </div>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInWhenVisible>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-text">About Me</h2>
                        <div className="w-20 h-1 gradient-accent mx-auto"></div>
                    </div>
                </FadeInWhenVisible>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <Parallax offset={50}>
                        <div className="space-y-6">
                            <p className="text-lg text-secondary-text">
                                I am a passionate Software Developer with a strong foundation in computer science 
                                and a drive for creating innovative solutions. My journey in technology began with 
                                a curiosity about how things work, which led me to pursue a career in software development.
                            </p>
                            <p className="text-lg text-secondary-text">
                                With expertise in modern web technologies and a keen eye for detail, I specialize 
                                in building scalable, efficient, and user-friendly applications. I believe in 
                                continuous learning and staying up-to-date with the latest industry trends.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass p-4 rounded-lg border border-card-border"
                                >
                                    <h3 className="font-bold text-xl mb-2 text-accent">Education</h3>
                                    <p className="text-secondary-text">BS Computer Science<br/>AAS Computer Programing</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass p-4 rounded-lg border border-card-border"
                                >
                                    <h3 className="font-bold text-xl mb-2 text-accent">Experience</h3>
                                    <p className="text-secondary-text">100000+ Years in Development</p>
                                </motion.div>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax offset={-50}>
                        <Terminal />
                    </Parallax>
                </div>

                <FadeInWhenVisible>
                    <div className="text-center mb-12">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-primary-text">
                            My Journey
                        </h3>
                        <p className="text-secondary-text max-w-2xl mx-auto">
                            Here's a timeline of my professional journey and key achievements along the way.
                        </p>
                    </div>
                </FadeInWhenVisible>

                <Timeline />
            </div>
        </section>
    );
};

export default About;