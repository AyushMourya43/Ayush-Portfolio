import React from 'react';
import { Layout, Code, Terminal, Database, Users, Brain } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', icon: Layout, level: 'Advanced' },
    { name: 'React.js', icon: Code, level: 'Advanced' },
    { name: 'JavaScript', icon: Code, level: 'Intermediate' },
    { name: 'Python', icon: Terminal, level: 'Intermediate' },
    { name: 'MERN Stack', icon: Database, level: 'Intermediate' },
    { name: 'Google Suite', icon: Layout, level: 'Advanced' },
  ];

  const softSkills = [
    'Communication',
    'Critical Thinking',
    'Teamwork',
    'Problem-Solving',
    'Active Listening'
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50 relative">
      {/* Large background text for visual impact */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h1 className="text-8xl md:text-9xl font-black text-gray-300 tracking-wider transform rotate-12">
          SKILLS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="group inline-block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
            <span className="text-gray-900 transition-colors duration-200 group-hover:text-blue-600">Skills &</span>{' '}
            <span className="text-blue-600 transition-colors duration-200 group-hover:text-gray-900">Expertise</span>
          </h2>

          {/* Subtitle - much larger and more prominent */}
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 leading-relaxed mb-8">
              My technical toolkit and professional attributes
            </p>

            {/* Decorative elements to fill space */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="flex space-x-4">
                <Code className="text-blue-500 animate-pulse" size={32} />
                <Terminal className="text-purple-500 animate-pulse" size={32} style={{ animationDelay: '0.2s' }} />
                <Database className="text-green-500 animate-pulse" size={32} style={{ animationDelay: '0.4s' }} />
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Code className="text-blue-600" /> Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-200">
                  <skill.icon className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{skill.name}</h4>
                  <p className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-300">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="text-blue-600" /> Soft Skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="font-medium text-gray-700 group-hover:text-blue-700 transition-colors">{skill}</span>
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Brain className="text-blue-600 flex-shrink-0" size={24} />
                  <p className="text-sm text-blue-900 italic">
                    "Always eager to learn and adapt to new technologies and challenges."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
