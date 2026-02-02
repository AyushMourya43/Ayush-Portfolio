import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'FUllSTACK DEVELOPER ',
      company: 'WEBARCLIGHT',
      period: 'Oct 2025 - Jan 2026 ',
      type: 'Remote',
      description: [
        'Learning and building end-to-end applications with React, Node.js, and Tailwind CSS.',
        'Integrating API, authentication, and database integration.',
        'Improving deployment workflows and problem-solving skills.'
      ]
    },
    {
      title: 'WEB DEVELOPMENT INTERN',
      company: 'UPTOSKILLS',
      period: 'Jun 2025 - Sep 2025',
      type: 'Remote',
      description: [
        'Contributed to web projects using MERN Stack, Node.js, HTML, CSS, JavaScript.',
        'Enhanced front-end/back-end functionality.',
        'Collaborated with mentors and gained hands-on experience in modern web technologies.'
      ]
    },
     {
      title: 'HR INTERN',
      company: 'GOMECHANIC',
      period: 'Jun 2025 - Sep 2025',
      type: 'On-site',
      description: [
        'Gained exposure to corporate workflows, teamwork, and management practices.',
        'Recruited 20+ candidates across multiple cities for various roles.',
        'Managed interview scheduling and feedback communication using Outlook.'
      ]
    }
  ];

  const renderCard = (exp) => (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-gray-100 cursor-pointer h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
        {exp.type && <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{exp.type}</span>}
      </div>
      <h4 className="text-blue-600 font-medium mb-2 flex items-center gap-2">
        <Briefcase size={16} /> {exp.company}
      </h4>
      <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <Calendar size={16} /> {exp.period}
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
        {exp.description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
  
  const renderUpcoming = () => (
    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-blue-100 cursor-pointer h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-blue-800">Upcoming Opportunity</h3>
        <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">Upcoming</span>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
        Waiting and preparing for my next opportunity — focused on learning, improving, and building better applications.
      </p>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="group inline-block text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
            <span className="text-gray-900 transition-colors duration-200 group-hover:text-blue-600">Work</span>{' '}
            <span className="text-blue-600 transition-colors duration-200 group-hover:text-gray-900">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 leading-relaxed mb-8">
              My professional journey so far
            </p>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="flex space-x-4">
                <Briefcase className="text-blue-500 animate-pulse" size={32} />
                <Calendar className="text-purple-500 animate-pulse" size={32} />
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="relative ml-4 md:ml-0 md:pl-0 space-y-12">
          {Array.from({ length: Math.ceil(experiences.length / 2) }).map((_, rowIdx) => {
            const leftExp = experiences[rowIdx * 2];
            const rightExp = experiences[rowIdx * 2 + 1];
            return (
              <div key={rowIdx} className="relative pl-8 md:pl-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 w-4 h-4 rounded-full border-4 border-white shadow-sm"></div>
                <div className="md:flex items-stretch justify-between gap-8">
                  <div className="md:w-5/12">{renderCard(leftExp)}</div>
                  <div className="md:w-5/12">{rightExp ? renderCard(rightExp) : renderUpcoming()}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
