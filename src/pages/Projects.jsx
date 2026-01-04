import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Shoppe',
      description: 'Online user friendly web site. Curated products for better user experience.',
      tags: ['Wix', 'Web Design', 'E-commerce'],
      link: 'https://ayushmourya43.wixsite.com/pujashoppe-1',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'AI Resume Builder',
      description: 'Team project building an AI-assisted resume builder. I created multiple resume templates and contributed to frontend UX. Stack: React (frontend), Node.js (backend), Tailwind CSS for styling.',
      tags: ['React', 'Node.js', 'Tailwind', 'Team Project', 'Resume Templates', 'AI'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Flappy Bird Game',
      description: 'Developed using HTML, CSS, JavaScript. Classic arcade game recreation.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Game Dev'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="group inline-block text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-tight whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
            <span className="text-gray-900 transition-colors duration-200 group-hover:text-blue-600">Featured</span>{' '}
            <span className="text-blue-600 transition-colors duration-200 group-hover:text-gray-900">Projects</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 leading-relaxed mb-8">
              Some of my recent work
            </p>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="flex space-x-4">
                <ExternalLink className="text-blue-500 animate-pulse" size={32} />
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.link !== '#' && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
