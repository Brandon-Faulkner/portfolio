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
        '    experience: "College Graduate",',
        '    skills: ["Next.js", "Node.js", "Express", "and more..."],',
        '    passion: "Turning lines of code into solutions to problems"',
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
                                I am a soon-to-be computer science graduate from The University of Texas at Arlington in May 2025.
                                I am passionate about turning lines of code into things that bring solutions to people's problems.
                                I enjoy working the most on front-end or back-end web development, turning ideas into clean and
                                responsive user experiences using HTML, CSS, JavaScript, and modern frameworks like Next.js.
                                I also have experience working with back-end frameworks such as Express, leveraged with Node.js.
                            </p>
                            <p className="text-lg text-secondary-text">
                                What excites me the most about being a developer is being able to creatively think through different
                                ways to approach and create a solution. I love being able to push through late nights or chase those
                                random "ah-hah!" moments when you finally think of a solution to a code problem. I live for it.
                            </p>
                            <p className="text-lg text-secondary-text">
                                Right now, I'm looking for opportunities in software development around the Dallas/Fort Worth, TX area.
                                I have a genuine love for what I do and building things that matter, and I am ready to bring that mindset with me wherever I go.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass p-4 rounded-lg border border-card-border"
                                >
                                    <h3 className="font-bold text-xl mb-2 text-accent">Education</h3>
                                    <p className="text-secondary-text">AAS Computer Programing<br />BS Computer Science</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass p-4 rounded-lg border border-card-border"
                                >
                                    <h3 className="font-bold text-xl mb-2 text-accent">Experience</h3>
                                    <p className="text-secondary-text">College Graduate</p>
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