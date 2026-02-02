import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // For debugging: Log the message to the console
    const formData = new FormData(formRef.current);
    console.log("New Message Captured:", {
      name: formData.get('user_name'),
      email: formData.get('user_email'),
      message: formData.get('message')
    });

    const SERVICE_ID = 'service_fqpw0r9';
    const TEMPLATE_ID = 'template_8d05zzc';
    const PUBLIC_KEY = 'VEktUQUWjYudh-bZf';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        formRef.current.reset();
      })
      .catch((error) => {
        const errorMessage = error?.text || error?.message || 'Something went wrong. Please try again later.';
        setStatus({ type: 'error', message: `Error: ${errorMessage}` });
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:ayushmourya43@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">ayushmourya43@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:8171478306" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">8171478306</p>
                </div>
              </a>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Gurgaon+Sector+37" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Gurgaon, Sector 37</p>
                </div>
              </a>
            </div>

            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/ayush-mourya-7999a428a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 text-white transition-all hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/ayushmourya43/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-pink-600 text-white transition-all hover:-translate-y-1"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-white placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-white placeholder-gray-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              {status.message && (
                <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Ayush. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
