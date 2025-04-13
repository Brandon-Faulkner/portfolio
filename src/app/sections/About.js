'use client';
import { motion } from 'framer-motion';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import Parallax from '../components/animations/Parallax';
import Terminal from '../components/Terminal';
import Timeline from '../components/Timeline';
import { about } from '@/data/about';

export default function About() {
    return (
        <section id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <FadeInWhenVisible>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-text">About Me</h2>
                        <div className="w-20 h-1 gradient-accent mx-auto"></div>
                    </div>
                </FadeInWhenVisible>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <FadeInWhenVisible>
                        <Parallax offset={50}>
                            <div className="space-y-6">
                                <p className="text-lg text-secondary-text">
                                    {about.bio[0]}
                                </p>
                                <p className="text-lg text-secondary-text">
                                    {about.bio[1]}
                                </p>
                                <p className="text-lg text-secondary-text">
                                    {about.bio[2]}
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
                                        <p className="text-secondary-text">{about.experience}</p>
                                    </motion.div>
                                </div>
                            </div>
                        </Parallax>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={0.2}>
                        <Parallax offset={-50}>
                            <Terminal />
                        </Parallax>
                    </FadeInWhenVisible>
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

                    <Timeline />
                </FadeInWhenVisible>
            </div>
        </section>
    );
}