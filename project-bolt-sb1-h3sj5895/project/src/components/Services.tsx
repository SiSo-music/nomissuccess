import React from 'react';
import { Globe, Palette, Shield, Code, Server, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website-Entwicklung",
      description: "Individuelle Internetauftritte für regionale Unternehmen",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Server,
      title: "Domain & Hosting",
      description: "Zuverlässiges Hosting mit höchsten Sicherheitsstandards",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Kreatives Design in Einklang mit technischer Stabilität",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Sicherheit & DSGVO",
      description: "Umfassende Sicherheitskonzepte und Datenschutz-Compliance",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Code,
      title: "Technische Exzellenz",
      description: "MySQL, Docker, Kubernetes - moderne Technologien",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Headphones,
      title: "Premium Support",
      description: "Persönlicher Support mit schnellen Reaktionszeiten",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digitale Räume schaffen, in denen Vertrauen und Nutzungsfreude wachsen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;