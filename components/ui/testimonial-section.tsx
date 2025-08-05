'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar: string;
    initials: string;
  };
}

const testimonial: Testimonial = {
  quote: "GeoCube has revolutionized our exploration workflow. The AI-powered analysis of our legacy data combined with real-time satellite insights has accelerated our discovery process by 10x. It's like having decades of geological expertise at our fingertips.",
  author: {
    name: "Alexei Petrov",
    title: "Head of Exploration",
    company: "ERG",
    avatar: "/images/team/erg-representative.jpg",
    initials: "AP"
  }
};

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-xl p-8 md:p-12 shadow-2xl"
        >
          {/* Quote */}
          <blockquote className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-normal">
            "{testimonial.quote}"
          </blockquote>
          
          {/* Separator */}
          <div className="w-full h-px bg-gray-700 mb-8"></div>
          
          {/* Author Info */}
          <div className="flex items-center">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
              <span className="text-white font-semibold text-lg">
                {testimonial.author.initials}
              </span>
            </div>
            
            {/* Name and Title */}
            <div>
              <p className="text-white font-medium italic">
                {testimonial.author.name}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonial.author.title}, {testimonial.author.company}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 