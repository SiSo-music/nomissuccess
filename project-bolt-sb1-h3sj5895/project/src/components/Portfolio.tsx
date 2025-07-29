import React from 'react';
import { ExternalLink, Code, Palette } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Handwerker Müller",
      category: "Handwerk",
      description: "Moderne Website für einen regionalen Handwerksbetrieb mit Fokus auf Vertrauen und Professionalität",
      image: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Responsive Design", "Kontaktformular", "SEO"]
    },
    {
      title: "Anwaltskanzlei Schmidt",
      category: "Recht",
      description: "Elegante und vertrauensvolle Online-Präsenz für eine etablierte Anwaltskanzlei",
      image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["DSGVO-konform", "Terminbuchung", "Blog"]
    },
    {
      title: "Restaurant Bella Vista",
      category: "Gastronomie",
      description: "Appetitliche Website mit Online-Reservierung und digitaler Speisekarte",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Online-Reservierung", "Speisekarte", "Social Media"]
    },
    {
      title: "Metzgerei Tradition",
      category: "Lebensmittel",
      description: "Authentische Website, die Tradition und Qualität regionaler Produkte vermittelt",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-Commerce", "Produktkatalog", "Lieferservice"]
    },
    {
      title: "PersonalPro Vermittlung",
      category: "Personalwesen",
      description: "Professionelle Plattform für Personalvermittlung mit Bewerbermanagement",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Bewerbungsportal", "CRM-Integration", "Matching-System"]
    },
    {
      title: "Zahnarztpraxis Dr. Weber",
      category: "Gesundheit",
      description: "Vertrauensvolle Website mit Online-Terminbuchung und Patienteninformationen",
      image: "https://images.pexels.com/photos/6812540/pexels-photo-6812540.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Terminbuchung", "Patientenportal", "Praxisinfo"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Referenzen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreichen Projekte und lassen Sie sich inspirieren
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <Code className="w-4 h-4 text-gray-400" />
                    <Palette className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Alle Projekte ansehen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;