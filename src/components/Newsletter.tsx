import React, { useState } from 'react';
import { Mail, Gift, Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-centre">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="bg-white/20 p-3 rounded-full">
            <Gift className="text-white" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-white">
            Get Your Free Menopause Starter Kit
          </h2>
        </div>
        
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join 15,000+ women and get instant access to our exclusive starter kit with 
          symptom tracker, nutrition guide, and expert tips delivered weekly.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6">What You'll Get:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center space-x-3">
              <Check className="text-green-300 flex-shrink-0" size={20} />
              <span>Symptom Tracking Template</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-green-300 flex-shrink-0" size={20} />
              <span>Weekly Expert Tips</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-green-300 flex-shrink-0" size={20} />
              <span>Exclusive Member Discounts</span>
            </div>
          </div>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-white/30"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Kit
              </button>
            </div>
            <p className="text-white/80 text-sm mt-4">
              No spam, unsubscribe anytime. Your privacy is protected.
            </p>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-green-500 text-white p-6 rounded-xl">
            <div className="flex items-center justify-center space-x-2">
              <Check size={24} />
              <span className="text-lg font-semibold">Success! Check your email for your free kit.</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;