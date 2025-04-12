'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements, categories } from '@/data/achievements';
import TimelineCard from './cards/TimelineCard';

export default function Timeline() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    let filteredAchievements;
    if (selectedCategory === 'all') {
        filteredAchievements = achievements;
    } else {
        filteredAchievements = achievements.filter(a => a.category === selectedCategory);
    }

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
                        ${selectedCategory === category.id ? 'bg-accent text-white' : 'bg-secondary hover:bg-secondary-hover'}`}
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
                            <TimelineCard
                                key={achievement.title}
                                index={index}
                                CardIcon={achievement.icon}
                                date={achievement.date}
                                title={achievement.title}
                                description={achievement.description}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}