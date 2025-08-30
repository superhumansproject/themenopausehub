import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="https://d64gsuwffb70l.cloudfront.net/68aecb82adc4be414b9e4253_1756451277233_063da0f1.jpg" 
                   alt="Superhumans Project" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold">Menopause Mastery</h3>
                <p className="text-sm text-gray-400">by Superhumans Project</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering women through menopause with evidence-based resources, supportive community, and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
              <Twitter className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
              <Instagram className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
              <Youtube className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={24} />
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Free Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Premium Content</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Video Library</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Expert Articles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Meal Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Workout Routines</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Discussion Forums</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support Groups</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Live Q&A Sessions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Member Directory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Events Calendar</a></li>
            </ul>
          </div>

          {/* Contact & Other Sites */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact & More</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="text-gray-400" size={20} />
                <span className="text-gray-300">support@superhumansproject.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-gray-400" size={20} />
                <span className="text-gray-300">1-800-SUPERHUMAN</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-3 text-gray-200">Other Communities:</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Diabetes Management</a></li>
                <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Fat Loss Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors">Injury Rehabilitation</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
            <p className="text-gray-400">
              © 2024 Superhumans Project. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;