'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight
} from 'lucide-react';

const footerLinks = [
  {
    title: 'Продукт',
    links: [
      { name: 'GeoCube', href: '/geocube' },
      { name: 'Услуги', href: '/#services' },
      { name: 'О платформе', href: '/platform' },
    ]
  },
  {
    title: 'Компания',
    links: [
      { name: 'О нас', href: '/about' },
      { name: 'Команда', href: '/#team' },
      { name: 'Контакты', href: '#contact' },
    ]
  }
];

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-[#079669]" />,
    text: 'info@terraintelligence.kz',
    href: 'mailto:info@terraintelligence.kz'
  },
  {
    icon: <Phone className="w-5 h-5 text-[#079669]" />,
    text: '+7 (727) 388-55-44',
    href: 'tel:+77273885544'
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#079669]" />,
    text: 'г. Алматы, Казахстан',
    href: 'https://maps.google.com/?q=Алматы,+Казахстан'
  }
];



export default function NewFooter() {
  return (
    <footer className="bg-black pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Terra Intelligence Systems — геологоразведочная компания полного цикла. 
              Объединяем 30+ лет экспертизы с передовыми ИИ-технологиями.
            </p>
            <div className="flex flex-col space-y-3">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="mt-0.5 mr-3 flex-shrink-0">{item.icon}</div>
                  <span className="text-white/60 group-hover:text-white/90 transition-colors text-sm">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2">
            {footerLinks.map((group, i) => (
              <div key={i}>
                <h3 className="text-white font-medium mb-4 text-lg">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link, j) => (
                    <motion.li 
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: j * 0.05 + i * 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-white/60 hover:text-white/90 transition-colors text-sm flex items-center group"
                      >
                        <ChevronRight className="w-3 h-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Terra Intelligence Systems. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
