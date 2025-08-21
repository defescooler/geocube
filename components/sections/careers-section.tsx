'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Интерфейс для вакансии
interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

// Мок-данные для вакансий
const jobOpenings: JobOpening[] = [
  {
    id: 'founding-ml-engineer',
    title: 'Founding ML Engineer',
    department: 'Engineering',
    location: 'Almaty, Kazakhstan (Remote friendly)',
    type: 'Full time',
    description: 'Ты станешь первым ML-инженером в команде и будешь строить AI-мозг GeoCube с нуля.',
  },
  {
    id: 'founding-system-architect',
    title: 'Founding System Architect',
    department: 'Engineering',
    location: 'Almaty, Kazakhstan (Remote friendly)',
    type: 'Full time',
    description: 'Ты спроектируешь и построишь техническую архитектуру GeoCube platform с нуля.',
  },
];

interface CareersSectionProps {
  showAll?: boolean;
  maxJobs?: number;
}

export default function CareersSection({ showAll = false, maxJobs = 3 }: CareersSectionProps) {
  const displayedJobs = showAll ? jobOpenings : jobOpenings.slice(0, maxJobs);

  return (
    <section className="py-16 bg-gray-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Открытые вакансии
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Присоединяйтесь к команде Terra Exploration и помогите нам революционизировать 
            геологоразведку с помощью AI и спутниковых технологий
          </p>
          <div className="text-sm text-gray-400">
            Открытых позиций: <span className="text-white font-semibold">({jobOpenings.length})</span>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4 mb-8">
          {displayedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* View All Button */}
        {!showAll && jobOpenings.length > maxJobs && (
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/careers" className="text-white border-white hover:bg-white hover:text-black">
                Смотреть все вакансии
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

interface JobCardProps {
  job: JobOpening;
}

function JobCard({ job }: JobCardProps) {
  return (
    <Link 
      href={`/careers/${job.id}`}
      className="block border border-gray-700 rounded-lg p-6 hover:border-gray-500 hover:bg-gray-800/30 transition-all duration-200 group"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{job.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
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
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
      </div>
    </Link>
  );
}

// Компонент фильтров для вакансий
interface JobFiltersProps {
  selectedDepartment: string;
  selectedLocation: string;
  selectedType: string;
  onDepartmentChange: (dept: string) => void;
  onLocationChange: (location: string) => void;
  onTypeChange: (type: string) => void;
}

export function JobFilters({
  selectedDepartment,
  selectedLocation,
  selectedType,
  onDepartmentChange,
  onLocationChange,
  onTypeChange,
}: JobFiltersProps) {
  const departments = ['All', 'Engineering'];
  const locations = ['All', 'Almaty, Kazakhstan'];
  const types = ['All', 'Full time'];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">Фильтры:</h3>
      <div className="flex flex-wrap gap-4">
        {/* Department Filter */}
        <div className="relative">
          <select 
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white appearance-none pr-10 min-w-[150px] focus:outline-none focus:border-emerald-500"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept === 'All' ? 'Отдел' : dept}
              </option>
            ))}
          </select>
          <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Location Filter */}
        <div className="relative">
          <select 
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white appearance-none pr-10 min-w-[150px] focus:outline-none focus:border-emerald-500"
          >
            {locations.map(location => (
              <option key={location} value={location}>
                {location === 'All' ? 'Локация' : location}
              </option>
            ))}
          </select>
          <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Employment Type Filter */}
        <div className="relative">
          <select 
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white appearance-none pr-10 min-w-[150px] focus:outline-none focus:border-emerald-500"
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'All' ? 'Тип занятости' : type}
              </option>
            ))}
          </select>
          <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
