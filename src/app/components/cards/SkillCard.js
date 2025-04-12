'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SkillCard({ skill, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card-bg rounded-xl p-6 shadow-lg transform-gpu"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
            <div className="grid grid-cols-2 gap-4">
                {skill.tech.map((tech, techIndex) => (
                    <motion.div
                        key={tech.name}
                        className="flex flex-col items-center p-3 rounded-lg bg-inner-card-bg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <tech.icon className="text-4xl mb-2" style={{ color: tech.color }} />
                        <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};