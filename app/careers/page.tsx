'use client';

import React from 'react';
import UnifiedNavbar from '@/components/layout/unified-navbar';
import NewFooter from '@/components/layout/new-footer';
import { UnifiedButton } from '@/components/ui/unified-button';
import { UnifiedSection } from '@/components/ui/unified-section';
import Link from 'next/link';
import { ChevronRight, MapPin, Clock, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

// Мок-данные для вакансий
const jobOpenings = [
  {
    id: 'founding-ml-engineer',
    title: 'Founding ML Engineer',
    department: 'Engineering',
    location: 'Almaty, Kazakhstan (Remote friendly)',
    type: 'Full time',
    description: 'Ты станешь первым ML-инженером в команде и будешь строить AI-мозг GeoCube с нуля.',
    requirements: [
      'Strong ML Background: 3+ года практического опыта с PyTorch/TensorFlow',
      'Computer Vision: Опыт с image classification, object detection',
      'Python Ecosystem: Уверенное владение Python, pandas, numpy',
      'Cloud Platforms: Опыт с AWS/GCP/Azure для ML workloads'
    ]
  },
  {
    id: 'founding-system-architect',
    title: 'Founding System Architect',
    department: 'Engineering',
    location: 'Almaty, Kazakhstan (Remote friendly)',
    type: 'Full time',
    description: 'Ты спроектируешь и построишь техническую архитектуру GeoCube platform с нуля.',
    requirements: [
      'Distributed Systems: 5+ лет опыта проектирования distributed systems',
      'Cloud Expertise: Deep knowledge AWS/GCP/Azure, serverless architectures',
      'Backend Engineering: Expert level в Python/Go/Rust',
      'Database Design: Опыт с SQL/NoSQL, data modeling'
    ]
  }
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = React.useState('All');
  const [selectedLocation, setSelectedLocation] = React.useState('All');
  const [selectedType, setSelectedType] = React.useState('All');

  const departments = ['All', 'Engineering'];
  const locations = ['All', 'Almaty, Kazakhstan'];
  const types = ['All', 'Full time'];

  const filteredJobs = jobOpenings.filter(job => {
    return (selectedDepartment === 'All' || job.department === selectedDepartment) &&
           (selectedLocation === 'All' || job.location.includes(selectedLocation)) &&
           (selectedType === 'All' || job.type === selectedType);
  });

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <UnifiedNavbar variant="solid" />
      
      {/* Jobs Section */}
      <UnifiedSection padding="md" className="pt-24">
          {/* Filters */}
          <div className="mb-8 mt-8">
            <div className="flex flex-wrap gap-4">
              {/* Department Filter */}
              <div className="relative">
                <select 
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white appearance-none pr-10 min-w-[150px] focus:border-emerald-500 transition-colors"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'All' ? 'Отдел' : dept}
                    </option>
                  ))}
                </select>
                <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400" />
              </div>

              {/* Location Filter */}
              <div className="relative">
                <select 
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white appearance-none pr-10 min-w-[150px] focus:border-emerald-500 transition-colors"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>
                      {location === 'All' ? 'Локация' : location}
                    </option>
                  ))}
                </select>
                <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400" />
              </div>

              {/* Employment Type Filter */}
              <div className="relative">
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white appearance-none pr-10 min-w-[150px] focus:border-emerald-500 transition-colors"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'All' ? 'Тип занятости' : type}
                    </option>
                  ))}
                </select>
                <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Department Sections */}
          <div className="mb-12">
            <h3 className="h4 mb-6">Инженерия</h3>
            
            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.map(job => (
                <Link 
                  key={job.id} 
                  href={`/careers/${job.id}`}
                  className="card-unified-hover block"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="h5 mb-2">{job.title}</h4>
                      <div className="flex items-center space-x-4 text-small text-muted">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </UnifiedSection>

      <NewFooter />
    </div>
  );
}
