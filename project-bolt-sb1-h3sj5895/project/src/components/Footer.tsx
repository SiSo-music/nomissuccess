import React from 'react';
import { Mail, Phone, MapPin, Globe, Shield, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/public/Logo9.png" 
                  alt="nomissuccess Logo" 
                  className="h-10 w-auto"
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  nomissuccess
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Wahrer Mehrwert entsteht dort, wo technische Stabilität und kreatives Design in Einklang stehen. 
                So schaffen wir digitale Räume, in denen Vertrauen und Nutzungsfreude wachsen.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Website-Entwicklung</a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Domain & Hosting</a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Sicherheit & DSGVO</a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Premium Support</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">info@nomissuccess.de</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">+49 (0) 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Deutschland</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 nomissuccess. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Impressum</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Datenschutz</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;