import React from 'react';
import { ArrowRight, Code, Palette, Shield, Database, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Large background logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="/public/Logo9.png" 
          alt="nomissuccess Background Logo" 
          className="h-96 w-auto filter grayscale"
        />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Left side - Content */}
        <div className="text-left">
          {/* Logo */}
          <div className="mb-8 flex justify-start">
            <img 
              src="/public/Logo9.png" 
              alt="nomissuccess Logo" 
              className="h-24 w-auto filter drop-shadow-2xl"
            />
          </div>

          <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/30 mb-6">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-purple-200 font-medium text-sm">WILD DIGITAL SUCCESS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-white">Professionelle</span><br />
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Websites
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            für mittelständische<br />
            <span className="text-white">Unternehmen</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-4 max-w-2xl leading-relaxed">
            Wir entwickeln moderne, sichere und DSGVO-konforme<br />
            Websites für Kleinunternehmen und Mittelstand.
          </p>

          <p className="text-xl text-emerald-400 font-semibold mb-8">
            Bereits ab 79€/Monat <span className="text-gray-300 font-normal">erhalten Sie eine<br />
            professionelle Online-Präsenz.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Kostenlose Beratung</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group bg-transparent border-2 border-purple-400/50 hover:border-purple-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center justify-center space-x-2">
                <span>Referenzen ansehen</span>
              </span>
            </button>
          </div>
        </div>
        {/* Right side - Coding Window */}
        <div className="relative">
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 border-b border-slate-700/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">nomissuccess.de</div>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-blue-400 font-mono">LIVE</div>
              </div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-mono text-sm">
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-gray-500 w-8">1</span>
                  <span className="text-blue-400">&lt;html</span>
                  <span className="text-emerald-400"> lang=</span>
                  <span className="text-yellow-400">"de"</span>
                  <span className="text-blue-400">&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">2</span>
                  <span className="ml-4 text-blue-400">&lt;head&gt;</span>
                  <span className="text-emerald-400 animate-pulse">|</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">3</span>
                  <span className="ml-8 text-blue-400">&lt;title&gt;</span>
                  <span className="text-white">Ihr Unternehmen</span>
                  <span className="text-blue-400">&lt;/title&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">4</span>
                  <span className="ml-4 text-blue-400">&lt;/head&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">5</span>
                  <span className="ml-4 text-blue-400">&lt;body&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">6</span>
                  <span className="ml-8 text-blue-400">&lt;h1&gt;</span>
                  <span className="text-emerald-400">Willkommen!</span>
                  <span className="text-blue-400">&lt;/h1&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">7</span>
                  <span className="ml-8 text-gray-500">// </span>
                  <span className="text-purple-400">Professionell entwickelt</span>
                  <span className="text-yellow-400 ml-2">⚡</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">8</span>
                  <span className="ml-4 text-blue-400">&lt;/body&gt;</span>
                </div>
                <div className="flex">
                  <span className="text-gray-500 w-8">9</span>
                  <span className="text-blue-400">&lt;/html&gt;</span>
                </div>
              </div>
            </div>
            
            {/* Status Bar */}
            <div className="flex items-center justify-between px-6 py-3 bg-slate-900/50 border-t border-slate-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-xs font-mono">Live & Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-xs font-mono">SSL</span>
              </div>
            </div>
          </div>
          
          {/* Floating icons */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <Database className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
            <Code className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;