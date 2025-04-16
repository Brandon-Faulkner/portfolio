'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function ContactForm({ handleSubmit, isLoading }) {
    const { register, handleSubmit: validateAndSubmit, reset, formState: { errors } } = useForm();

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <form onSubmit={validateAndSubmit((data) => handleSubmit(data, reset))} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-2 rounded-lg border border-card-border bg-card-bg focus:ring-2 focus:ring-accent outline-none transition-shadow"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                                message: 'Invalid email address',
                            },
                        })}
                        className="w-full px-4 py-2 rounded-lg border border-card-border bg-card-bg focus:ring-2 focus:ring-accent outline-none transition-shadow"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        {...register('message', { required: 'Message cannot be empty' })}
                        rows="4"
                        className="w-full px-4 py-2 rounded-lg border border-card-border bg-card-bg focus:ring-2 focus:ring-accent outline-none transition-shadow"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center gap-2 bg-accent 
                        ${isLoading ? 'cursor-not-allowed opacity-60' : 'hover:bg-accent-hover cursor-pointer'} 
                        text-white font-medium py-3 rounded-lg transition-colors`}
                >
                    {isLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                        </svg>
                    ) : (
                        'Send Message'
                    )}
                </motion.button>
            </form>
        </motion.div>
    )
}