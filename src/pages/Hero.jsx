import React from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Portfolio</h2>
            <h1 className="group text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
              <span className="text-gray-900 transition-colors duration-200 group-hover:text-blue-600">Hi, I'm </span>
              <span className="text-blue-600 transition-colors duration-200 group-hover:text-gray-900">Ayush</span>
              <br />
              <span className="text-2xl md:text-4xl text-gray-600">Aspiring Software Engineer</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Passionate about creating efficient and user-friendly web applications. 
              Skilled in MERN Stack, Python, and modern web technologies. 
              Always eager to learn and solve complex problems through code.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                View Work <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 hover:scale-105 hover:border-blue-300 transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4">
              {['HTML/CSS', 'Python', 'React.js', 'JavaScript', 'MERN Stack'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-600 text-sm font-medium border border-gray-100 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-700 hover:shadow-md hover:-translate-y-0.5 hover:scale-105 hover:border-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-100 flex items-center justify-center hover:shadow-3xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 cursor-pointer group">
                <img src={profileImage} alt="Ayush" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce delay-700">
                <p className="font-bold text-gray-900">2+</p>
                <p className="text-xs text-gray-500">Internships</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce">
                <p className="font-bold text-gray-900">10+</p>
                <p className="text-xs text-gray-500">Skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
