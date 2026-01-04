import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: 'GD Goenka University',
      degree: 'BTECH SELECT',
      year: '2023',
      grade: null
    },
    {
      school: 'ROYAL PUB SR SEC SCHOOL GURUGRAM',
      degree: 'Class XII',
      year: '2023',
      grade: '73%'
    },
    {
      school: 'VIVEKANAND PUBLIC SCHOOL GURUGRAM',
      degree: 'Class X',
      year: '2021',
      grade: '68%'
    }
  ];

  const certifications = [
    {
      name: 'Syntax sprint Hackathon',
      issuer: 'Sunstone',
      date: 'March 2025'
    },
    {
      name: 'HANDS - ON WORKSHOP ON PYTHON',
      issuer: 'Sunstone',
      date: 'November 2024'
    },
    {
      name: 'HR Intern Certificate',
      issuer: 'GoMechanic',
      date: 'September 2025'
    },
    {
      name: 'Web Development Intern of the Month – Certificate of Excellence',
      issuer: 'UptoSkills',
      date: 'September 2025'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 bg-white p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 left-[-9px] bg-white w-4 h-4 rounded-full border-2 border-blue-600"></div>
                  <h3 className="text-lg font-bold text-gray-900">{edu.school}</h3>
                  <p className="text-blue-600 font-medium">{edu.degree}</p>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                    <span>{edu.year}</span>
                    {edu.grade && <span className="font-semibold text-gray-700">CBSE</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-blue-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mt-1">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
