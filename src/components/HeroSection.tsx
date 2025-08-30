import React from 'react';
import { ArrowRight, Download, Users, BookOpen } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-50 via-white to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600"> Menopause</span> Journey
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of women who've transformed their menopause experience with our evidence-based guides, supportive community, and expert resources.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="flex items-center space-x-2">
                <Users className="text-red-600" size={20} />
                <span className="text-gray-700 font-medium">15,000+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="text-red-600" size={20} />
                <span className="text-gray-700 font-medium">50+ Expert Guides</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="text-red-600" size={20} />
                <span className="text-gray-700 font-medium">Free Resources</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Start Free Today</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
                Download Free Guide
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756451383865_f77efdf9.webp"
                alt="Empowering menopause support"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;