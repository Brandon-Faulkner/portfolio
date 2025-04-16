'use client';
import { motion } from 'framer-motion';
import { contactInfo } from '@/data/contact';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
        >
            <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-secondary-text mb-6">
                    Feel free to reach out to me through any of these platforms. I&apos;ll get back to you as soon as possible.
                </p>
            </div>

            <div className="space-y-4">
                <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 text-secondary-text hover:text-accent"
                >
                    <div className="bg-blue-500 p-3 text-white rounded-full">
                        <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                        <h4 className="font-medium">Email</h4>
                        <p>{contactInfo.email}</p>
                    </div>
                </a>
            </div>

            <div className="flex gap-4">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card-bg p-3 rounded-full hover:bg-accent transition-colors"
                >
                    <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card-bg p-3 rounded-full hover:bg-accent transition-colors"
                >
                    <FaLinkedin className="text-xl" />
                </motion.a>
            </div>
        </motion.div>
    )
}