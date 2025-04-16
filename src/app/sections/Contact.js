'use client';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (data, reset) => {
    setIsLoading(true);
    const toastId = toast.loading('Sending message...');

    emailjs.send(
      "service_vqy2jz7",
      "template_uvgb0dc",
      data,
      "edtdPDBTjZ-oJRfmw",
    ).then(() => {
      toast.success('Message sent!', { id: toastId });
      reset();
    }).catch((error) => {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Try again.', { id: toastId });
    }).finally(() => {
      setIsLoading(false);
    });;
  };

  return (
    <section id="contact">
      <div className="bg-section-alt rounded-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
          <ContactForm handleSubmit={handleSubmit} isLoading={isLoading} />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}