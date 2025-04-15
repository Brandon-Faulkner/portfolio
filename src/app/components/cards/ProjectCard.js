'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ index, title, description, image, tags, github, demo }) {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card-bg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative h-48 bg-card-border">
                {image ? (
                    <Image
                        src={image}
                        alt={`Screenshot of ${title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, max-width: 1024px) 50vw, 640px"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-secondary-text">
                        No Preview Available
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-secondary-text mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-accent text-white text-sm px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary-text hover:text-accent"
                    >
                        <FaGithub className="text-xl" />
                        <span>Code</span>
                    </a>
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary-text hover:text-accent"
                    >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}