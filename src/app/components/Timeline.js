'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaTrophy, FaCode } from 'react-icons/fa';

const achievements = [
    {
        icon: FaGraduationCap,
        date: '2021',
        title: 'AAS in Computer Programming',
        description: 'Graduated with a 4.0 GPA',
        category: 'education'
    },
    {
        icon: FaCode,
        date: '2023',
        title: 'Cana CAM',
        description: 'Developed a web app for a local business',
        category: 'technical'
    },
    {
        icon: FaCode,
        date: '2024',
        title: 'LaunchPad',
        description: 'Developed a web app for a local business',
        category: 'technical'
    },
    {
        icon: FaCode,
        date: '2024',
        title: 'Cana Goals',
        description: 'Developed a web app for a local business',
        category: 'technical'
    },
    {
        icon: FaCode,
        date: '2025',
        title: 'CookieTrack',
        description: 'Developed a full-stack web app',
        category: 'technical'
    },
    {
        icon: FaGraduationCap,
        date: '2025',
        title: 'BS in Computer Science',
        description: 'Graduated with honors',
        category: 'education'
    },
];

const Timeline = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const filteredAchievements = selectedCategory === 'all'
        ? achievements
        : achievements.filter(a => a.category === selectedCategory);

    const categories = [
        { id: 'all', label: 'All' },
        //{ id: 'work', label: 'Work' },
        { id: 'education', label: 'Education' },
        //{ id: 'achievement', label: 'Achievements' },
        { id: 'technical', label: 'Technical' }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category.id
                                ? 'bg-accent text-white'
                                : 'bg-secondary hover:bg-secondary-hover'
                            }`}
                    >
                        {category.label}
                    </motion.button>
                ))}
            </div>

            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-accent opacity-40"></div>

                <div className="space-y-12">
                    <AnimatePresence>
                        {filteredAchievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-1/2 px-6">
                                        <motion.div
                                            className="bg-card-bg p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                                            animate={{
                                                scale: hoveredIndex === index ? 1.02 : 1
                                            }}
                                        >
                                            <achievement.icon className="text-accent text-2xl mb-4" />
                                            <h3 className="text-xl font-bold mb-2 text-accent">{achievement.title}</h3>
                                            <p className="text-secondary-text">{achievement.description}</p>

                                            <motion.div
                                                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500"
                                                initial={{ width: '0%' }}
                                                animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>
                                    </div>

                                    <div className="relative flex items-center justify-center">
                                        <motion.div
                                            className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center z-10"
                                            animate={{
                                                scale: hoveredIndex === index ? 1.2 : 1,
                                                rotate: hoveredIndex === index ? 360 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-sm font-bold">{achievement.date}</span>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Timeline;