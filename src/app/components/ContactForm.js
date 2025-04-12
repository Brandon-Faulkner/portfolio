'use client';
import { motion } from 'framer-motion';

export default function ContactForm({ handleSubmit }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-card-border bg-card-bg focus:ring-2 focus:ring-accent outline-none transition-shadow"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-card-border bg-card-bg focus:ring-2 focus:ring-accent outline-none transition-shadow"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-card-border bg-card-bg focus:ring-2 focus:ring-accent outline-none transition-shadow"
                    ></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3 rounded-lg transition-colors cursor-pointer"
                >
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    )
}