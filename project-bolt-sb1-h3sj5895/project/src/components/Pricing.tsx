import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: "Basic",
      subtitle: "Shared Hosting",
      price: "79",
      icon: Star,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Landingpage mit One-Page-Menü",
        "Einbindung von bestehendem Logo, Basic Farben & Fonts",
        "Rechtliche Unterseiten (Impressum, Datenschutz, Cookie-Einstellungen, Lieferbedingungen, Widerrufsbelehrung, AGB)",
        "4 Std. Support p.a., Reaktionszeitraum Next Business Day"
      ]
    },
    {
      name: "Standard",
      subtitle: "Shared Hosting Performance",
      price: "199",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      popular: true,
      features: [
        "Individuelle Anpassung eines Premium-Themes",
        "Bis zu 3 verlinkte Unterseiten (Kontaktformular, Produkte, Blog)",
        "Tägliche Backups",
        "12 Std. Support p.a., Reaktionszeitraum 4 Stunden"
      ]
    },
    {
      name: "Premium",
      subtitle: "Shared Hosting Enterprise",
      price: "Auf Anfrage",
      icon: Crown,
      gradient: "from-indigo-500 to-purple-500",
      features: [
        "Priorisierte Server-Resources",
        "Full-Service Design (UX/UI-Konzept), Design-Workshop (2× 30 min): Detail-Aufnahme & Konzeptausarbeitung",
        "Individuelles Mockup & Responsive Umsetzung",
        "Unbegrenzte Seitenanzahl",
        "24/7 Premium-Support, Reaktionszeitraum 4 Std.",
        "SLA 99,9 %"
      ]
    }
  ];

  const addOns = [
    { name: "Security-Checks & DSGVO-Audits", price: "149 €" },
    { name: "AI-Tools Workshop", price: "149 €" },
    { name: "Stundensatz für Ad-hoc-Aufträge", price: "90 €/Std." },
    { name: "Ergänzende Design-Änderungen & weitere Supportanfragen", price: "90 €/Std." }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Pakete</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wählen Sie das perfekte Paket für Ihr Unternehmen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  pkg.popular ? 'border-purple-500 ring-4 ring-purple-100' : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Beliebt
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pkg.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
                  <div className="text-4xl font-bold text-gray-900">
                    {pkg.price === "Auf Anfrage" ? (
                      <span className="text-2xl">Auf Anfrage</span>
                    ) : (
                      <>
                        {pkg.price}
                        <span className="text-lg text-gray-600 font-normal"> €</span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {pkg.price === "Auf Anfrage" ? "Kontakt aufnehmen" : "Paket wählen"}
                </button>
              </div>
            );
          })}
        </div>

        {/* Support Add-ons */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Support <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Add-ons</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className={`p-4 rounded-xl border ${
                index === 0 ? 'bg-blue-500/10 border-blue-500/30' :
                index === 1 ? 'bg-emerald-500/10 border-emerald-500/30' :
                index === 2 ? 'bg-purple-500/10 border-purple-500/30' :
                'bg-orange-500/10 border-orange-500/30'
              }`}>
                <div className="flex justify-between items-start">
                  <span className="text-white font-medium text-sm leading-tight">{addon.name}</span>
                  <span className={`font-bold text-sm ml-4 ${
                    index === 0 ? 'text-blue-400' :
                    index === 1 ? 'text-emerald-400' :
                    index === 2 ? 'text-purple-400' :
                    'text-orange-400'
                  }`}>{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;