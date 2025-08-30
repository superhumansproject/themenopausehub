import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, CheckCircle, Users, BookOpen, MessageCircle, Star, Crown, Sparkles } from 'lucide-react';

const PremiumSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    if (searchQuery.toLowerCase().includes('hot flush') || searchQuery.toLowerCase().includes('hot flash')) {
      setSearchResult('Managing Hot Flushes: Understanding triggers, cooling techniques, and hormone therapy options...');
    } else if (searchQuery.toLowerCase().includes('sleep')) {
      setSearchResult('Sleep Solutions: Creating the perfect sleep environment, natural remedies, and bedtime routines...');
    } else if (searchQuery.toLowerCase().includes('mood')) {
      setSearchResult('Mood Management: Recognising emotional changes, coping strategies, and when to seek support...');
    } else {
      setSearchResult('Your personalised guidance will appear here with detailed insights and actionable advice...');
    }
  };

  const features = [
    { icon: BookOpen, title: 'Expert Articles', desc: 'In-depth guides by menopause specialists' },
    { icon: Search, title: 'Smart Search', desc: 'Find answers instantly with AI-powered search' },
    { icon: MessageCircle, title: 'Private Community', desc: 'Connect with supportive women on similar journeys' },
    { icon: Crown, title: 'Premium Support', desc: '24/7 expert chatbot for personalised advice' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-centre mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
            <Crown className="w-4 h-4 mr-2" />
            Premium Membership
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Complete Menopause Support System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of British women who've transformed their menopause journey with our comprehensive support platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-centre mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Try Our Intelligent Search</h3>
            <Card className="p-6 border-2 border-purple-200 shadow-lg">
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Ask about hot flushes, sleep, mood swings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSearch} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
              {searchResult && (
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="text-gray-700">{searchResult}</p>
                </div>
              )}
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow border border-purple-100">
                <feature.icon className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-semibold mb-2 text-gray-800">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="relative overflow-hidden border-2 border-purple-200 shadow-xl">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            <CardHeader className="text-centre pb-4">
              <div className="flex justify-centre mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Premium Membership</CardTitle>
              <div className="text-4xl font-bold text-purple-600 mt-2">
                £9.99<span className="text-lg text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                'Unlimited access to expert articles',
                'AI-powered personalised search',
                'Private community forum',
                'Premium chatbot support',
                'Monthly live Q&A sessions',
                'Downloadable resources & guides'
              ].map((feature, index) => (
                <div key={index} className="flex items-centre gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 mt-6">
                Start Your Journey Today
              </Button>
              <p className="text-centre text-sm text-gray-500 mt-2">
                Cancel anytime • 7-day free trial
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;