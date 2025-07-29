import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Über <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">nomissuccess</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Wir sind ein professionelles Start-Up, das sich in der Website-Design-Szene etablieren möchte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Unser Team</h3>
                <p className="text-gray-300">
                  <strong>Simon Socha</strong> - Aufstrebender Jungunternehmer und Projektleiter
                </p>
                <p className="text-gray-300 mt-2">
                  <strong>Anthony Benz</strong> - Talentierter Programmierer und Web-Developer mit Expertise in MySQL, Docker und Kubernetes
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Unsere Zielgruppe</h3>
                <p className="text-gray-300">
                  Regionale SMB wie Handwerker, Anwaltskanzleien, Restaurants, Metzger, Personalvermittler und mehr
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-700/50">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">Unsere Philosophie</h3>
            </div>
            <blockquote className="text-gray-300 italic text-lg leading-relaxed mb-6">
              "Verantwortung entsteht dort, wo wir handeln. Indem wir technische Exzellenz mit ethischer Verantwortung verbinden, schaffen wir Vertrauen – das wertvollste Gut im digitalen Zeitalter."
            </blockquote>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">Unser Leitsatz</h3>
          <p className="text-lg text-center leading-relaxed opacity-90">
            "Risiko ist immer die Kehrseite von Freiheit. Indem wir bewusst entscheiden, welche Risiken wir absichern, 
            gestalten wir die Spielregeln unseres Handelns und definieren zugleich unsere Verantwortung im digitalen Raum."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;