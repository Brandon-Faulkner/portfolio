'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Terminal() {
    const [text, setText] = useState('');
    const [currentLine, setCurrentLine] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

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
        if (isVisible && currentLine < lines.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + lines[currentLine] + '\n');
                setCurrentLine(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentLine, isVisible, lines]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsVisible(true)}
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
}