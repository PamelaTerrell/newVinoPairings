'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate form submission success
    setStatus('Thank you! Your message has been received.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-heading text-burgundy mb-8 text-center">Contact Us</h1>

      <div className="bg-cream p-8 rounded-lg shadow-lg">
        <div className="mb-8 text-charcoal font-body text-lg space-y-2">
          <p>
            Feel free to reach out via email at{' '}
            <a
              href="mailto:pammyhoney@yahoo.com"
              className="text-burgundy hover:text-gold underline"
            >
              pammyhoney@yahoo.com
            </a>{' '}
            or visit my website:{' '}
            <a
              href="https://www.pamelajterrell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy hover:text-gold underline"
            >
              pamelajterrell.com
            </a>
            .
          </p>
          <p>
            Or use the form below to send a message directly. I’ll get back to you as soon as possible!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-charcoal">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-charcoal rounded focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-charcoal">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-charcoal rounded focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-charcoal">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-charcoal rounded focus:outline-none focus:ring-2 focus:ring-gold"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-burgundy text-cream py-3 px-6 rounded font-semibold hover:bg-gold hover:text-charcoal transition-colors duration-300"
          >
            Send Message
          </button>

          {status && <p className="mt-4 text-green-600 font-semibold">{status}</p>}
        </form>
      </div>
    </main>
  );
}
