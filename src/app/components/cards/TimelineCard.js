'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TimelineCard({ index, CardIcon, date, title, description }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <motion.div
            key={title}
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
                        animate={{ scale: hoveredIndex === index ? 1.02 : 1 }}
                    >
                        <CardIcon className="text-accent text-2xl mb-4" />
                        <h3 className="text-xl max-sm:text-base font-bold mb-2 text-accent">{title}</h3>
                        <p className="max-sm:text-xs text-secondary-text">{description}</p>

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
                        <span className="text-sm font-bold">{date}</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}