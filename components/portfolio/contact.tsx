'use client';

import React from "react"

import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl pt-2">
            I'm always open to new opportunities and interesting conversations. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground">Contact Details</h3>
              <div className="space-y-6">
                {/* Email */}
                <a href="mailto:25dit015@charusat.edu.in" className="group flex items-start gap-6 p-4 rounded-2xl hover:bg-muted transition-all duration-300">
                  <div className="p-3 bg-primary/20 text-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      25dit015@charusat.edu.in
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+917069431115" className="group flex items-start gap-6 p-4 rounded-2xl hover:bg-muted transition-all duration-300">
                  <div className="p-3 bg-primary/20 text-primary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">+91 70694 31115</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-6 p-4">
                  <div className="p-3 bg-primary/20 text-primary rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground">Nadiad, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-muted border border-border/50 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-muted border border-border/50 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted rounded-3xl p-8 md:p-10 border border-border/50">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3 uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-background border border-border/50 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-background border border-border/50 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-3 bg-background border border-border/50 rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-accent transition-all duration-300 hover:shadow-lg hover:scale-105 uppercase tracking-widest text-sm"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-center text-sm text-primary font-semibold uppercase tracking-widest animate-pulse">✓ Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
