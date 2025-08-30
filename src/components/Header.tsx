import React, { useState } from 'react';
import { Menu, X, Search, User, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="https://d64gsuwffb70l.cloudfront.net/68aecb82adc4be414b9e4253_1756451204009_ee0d2595.JPG" 
                 alt="Superhumans Project" className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Menopause Mastery</h1>
              <p className="text-xs text-red-600">by Superhumans Project</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#guides" className="text-gray-700 hover:text-red-600 transition-colors">Free Guides</a>
            <a href="#premium" className="text-gray-700 hover:text-red-600 transition-colors">Premium</a>
            <a href="#community" className="text-gray-700 hover:text-red-600 transition-colors">Community</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowChatbot(!showChatbot)}
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <MessageCircle size={20} />
            </button>
            <button className="hidden md:flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              <User size={16} />
              <span>Sign In</span>
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-red-600"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
              <a href="#guides" className="text-gray-700 hover:text-red-600 transition-colors">Free Guides</a>
              <a href="#premium" className="text-gray-700 hover:text-red-600 transition-colors">Premium</a>
              <a href="#community" className="text-gray-700 hover:text-red-600 transition-colors">Community</a>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors w-fit">
                Sign In
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;