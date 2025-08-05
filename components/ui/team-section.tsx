'use client';

import { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  briefDescription: string;
  longDescription: string;
  image: string;
  links?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const leaders: TeamMember[] = [
    {
        id: 'leader-2',
        name: 'Boris Geldyyev',
        role: 'CSO & Founder',
        briefDescription: 'Ph.D. in Geography and Environmental Sciences, Kazakh National University',
        longDescription: 'CEO of Terra GIS with 20+ years in remote sensing, spectral mapping, and terrain analysis. Boris anchors GeoCube\'s geoscience logic — transforming satellite data into field-ready mineral intelligence.',
        image: '/images/team/boris.jpeg',
        links: {
          linkedin: 'https://www.linkedin.com/in/boris-geldyyev-8a325016/',
          email: 'boris@geocube.kz'
        }
      },
  {
    id: 'leader-1',
    name: 'Dastan Kozhabekov',
    role: 'CEO & Co-Founder',
    briefDescription: 'MBA, Massachusetts Institute of Technology (MIT)',
    longDescription: 'Former Director General, K.I.N.G. Former Chairman of the Board, National Scientific and Technical Center "Parasat"',
    image: '/images/team/dastan.png',
    links: {
      linkedin: 'https://www.linkedin.com/in/dastan-kozhabekov-793b413/',
      email: 'dastan@geocube.kz'
    }
  }
];

const executiveBoard: TeamMember[] = [
  {
    id: 'board-1',
    name: 'Dr. Yuri Loktionov',
    role: 'CFO & Member of the Board',
    briefDescription: 'PhD, Massachusetts Institute of Technology (MIT)',
    longDescription: 'Economist and technologist with experience across MIT, USC, and Boston Sloan Capital. Yuri designs GeoCube\'s financial model and drives its investment strategy at the intersection of AI, geology, and infrastructure.',
    image: '/images/team/yuri.png',
    links: {
      linkedin: 'https://www.linkedin.com/in/yuri-loktionov-ph-d-cfa-2385732/'
    }
  },
  {
    id: 'board-2',
    name: 'Dr. Montu Saxena',
    role: 'Head of Research & Board Member',
    briefDescription: 'PhD, University of Cambridge',
    longDescription: 'Former lead scientist at the European Space Agency with deep expertise in hyperspectral imaging and subsurface modeling. At GeoCube, Montu drives R&D on AI-driven anomaly detection and ensures scientific rigor across all exploratory workflows.',
    image: '/images/team/montu.png',
    links: {
      linkedin: 'https://www.linkedin.com/in/siddharthsaxenacambridge/'
    }
  },
  {
    id: 'board-3',
    name: 'Dr. Montu Saxena',
    role: 'Head of Research & Board Member',
    briefDescription: 'PhD, University of Cambridge',
    longDescription: 'Former lead scientist at the European Space Agency with deep expertise in hyperspectral imaging and subsurface modeling. At GeoCube, Montu drives R&D on AI-driven anomaly detection and ensures scientific rigor across all exploratory workflows.',
    image: '/images/team/montu.png',
    links: {
      linkedin: 'https://www.linkedin.com/in/siddharthsaxenacambridge/'
    }
  },
];

// Memoized social links component
const SocialLinks = memo(({ links }: { links: TeamMember['links'] }) => {
  if (!links) return null;

  return (
    <div className="flex space-x-3 mb-4">
      {links.linkedin && (
        <a
          href={links.linkedin}
          className="text-gray-400 hover:text-emerald-600 transition-colors"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      )}
      {links.twitter && (
        <a
          href={links.twitter}
          className="text-gray-400 hover:text-emerald-400 transition-colors"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-4 h-4" />
        </a>
      )}
      {links.email && (
        <a
          href={`mailto:${links.email}`}
          className="text-gray-400 hover:text-emerald-600 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      )}
    </div>
  );
});

SocialLinks.displayName = 'SocialLinks';

// Memoized team member card component
const TeamMemberCard = memo(({ member, index }: { member: TeamMember; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleExpanded = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsExpanded(prev => !prev);
    
    // Clear animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [isAnimating]);

  const fallbackInitials = useMemo(() => {
    return member.name.split(' ').map(n => n[0]).join('');
  }, [member.name]);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Profile Image */}
      <div className="aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
          style={{
            objectPosition: 'center 25%'
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 2} // Prioritize first 2 images
          onError={(e) => {
            // Fallback to gradient if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.className = 'aspect-square w-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center';
              const fallback = document.createElement('div');
              fallback.className = 'w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center';
              fallback.innerHTML = `<span class="text-white text-4xl font-bold">${fallbackInitials}</span>`;
              parent.appendChild(fallback);
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name and Role */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">
            {member.role}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {member.briefDescription}
          </p>
        </div>

        {/* Social Links */}
        <SocialLinks links={member.links} />

        {/* Expand/Collapse Button */}
        <button
          onClick={toggleExpanded}
          disabled={isAnimating}
          className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
            isAnimating
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300'
          }`}
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        {/* Expanded Content */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              layout
              initial={{ opacity: 0, maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
              animate={{ 
                opacity: 1, 
                maxHeight: 200,
                paddingTop: 16,
                paddingBottom: 0
              }}
              exit={{ opacity: 0, maxHeight: 0, paddingTop: 0, paddingBottom: 0 }}
              transition={{ 
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="overflow-hidden border-t border-gray-200 dark:border-gray-700"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {member.longDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';

// Memoized section header component
const SectionHeader = memo(({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="mb-8"
  >
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400">
      {description}
    </p>
  </motion.div>
));

SectionHeader.displayName = 'SectionHeader';

export default function TeamSection() {
  // Memoize the main header animation
  const mainHeaderAnimation = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }), []);

  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          {...mainHeaderAnimation}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our leadership combines deep geological expertise with cutting-edge technology, 
            bringing decades of experience from Kazakhstan&apos;s mining sector and Silicon Valley&apos;s 
            most innovative companies.
          </p>
        </motion.div>

        {/* Leaders Section */}
        <div className="mb-16">
          <SectionHeader 
            title="Leadership"
            description="The founding team driving GeoCube's vision and execution."
            delay={0.2}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Executive Board Section */}
        <div>
          <SectionHeader 
            title="Executive Board"
            description="Strategic advisors providing industry expertise and governance oversight."
            delay={0.4}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveBoard.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}