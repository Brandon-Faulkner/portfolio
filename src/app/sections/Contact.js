'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
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

          {/* Contact Information */}
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
                Feel free to reach out to me through any of these platforms. I'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="space-y-4">
              <a
                href="mailto:faulknerb48@gmail.com"
                className="flex items-center gap-4 text-secondary-text hover:text-accent"
              >
                <div className="bg-blue-500 p-3 text-white rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>faulknerb48@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Brandon-Faulkner"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-bg p-3 rounded-full hover:bg-accent transition-colors"
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/brandon-m-faulkner"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-bg p-3 rounded-full hover:bg-accent transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;