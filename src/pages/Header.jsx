import React, { useState } from 'react';
import { Menu, X, Linkedin, Github, Mail, Download } from 'lucide-react';
import resumePdf from '../assets/Ayush_cv_6049.pdf';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Education', href: '#education' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-gray-900">WELCOME</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                {item.title}
              </a>
            ))}
            <a
              href={resumePdf}
              download="Ayush_Resume.pdf"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Download size={16} className="mr-2" />
              Get Resume
            </a>
            <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-gray-200">
              <a href="https://linkedin.com/in/ayush-mourya-7999a428a" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/AyushMourya43" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                <Github size={20} />
              </a>
              <a href="mailto:ayushmourya43@gmail.com" className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-black focus:outline-none p-2 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b shadow-lg">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <a
              href={resumePdf}
              download="Ayush_Resume.pdf"
              className="mt-2 block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Get Resume
            </a>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <p className="px-3 text-sm font-medium text-gray-500 mb-3">Connect</p>
              <div className="flex justify-center space-x-6">
                <a href="https://linkedin.com/in/ayush-mourya-7999a428a" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/AyushMourya43" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:ayushmourya43@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
