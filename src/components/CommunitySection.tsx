import React, { useState } from 'react';
import { Users, MessageCircle, Heart, TrendingUp, Clock, Pin } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'General Support', count: 1247, color: 'bg-blue-500' },
    { id: 'symptoms', name: 'Symptom Management', count: 892, color: 'bg-red-500' },
    { id: 'nutrition', name: 'Nutrition & Diet', count: 634, color: 'bg-green-500' },
    { id: 'fitness', name: 'Exercise & Fitness', count: 456, color: 'bg-purple-500' },
    { id: 'emotional', name: 'Emotional Wellness', count: 723, color: 'bg-pink-500' },
    { id: 'relationships', name: 'Relationships', count: 389, color: 'bg-orange-500' }
  ];

  const discussions = [
    {
      id: 1,
      title: "Natural remedies that actually work for hot flashes?",
      author: "Sarah M.",
      avatar: "https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756451394591_e79c8e21.webp",
      replies: 23,
      likes: 45,
      timeAgo: "2 hours ago",
      isPinned: true,
      category: "symptoms"
    },
    {
      id: 2,
      title: "Celebrating small wins - better sleep for 3 nights straight!",
      author: "Maria L.",
      avatar: "https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756451396370_9fe008cf.webp",
      replies: 18,
      likes: 67,
      timeAgo: "4 hours ago",
      isPinned: false,
      category: "general"
    },
    {
      id: 3,
      title: "Meal prep ideas for hormone-balancing foods",
      author: "Jennifer K.",
      avatar: "https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756451399999_fc900c66.webp",
      replies: 31,
      likes: 52,
      timeAgo: "6 hours ago",
      isPinned: false,
      category: "nutrition"
    },
    {
      id: 4,
      title: "How to talk to your partner about menopause changes",
      author: "Lisa R.",
      avatar: "https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756451402263_511f7a54.webp",
      replies: 15,
      likes: 38,
      timeAgo: "8 hours ago",
      isPinned: false,
      category: "relationships"
    }
  ];

  const filteredDiscussions = activeCategory === 'general' 
    ? discussions 
    : discussions.filter(d => d.category === activeCategory);

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-centre mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Users className="text-red-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Supportive Community</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with thousands of women sharing similar experiences. Get support, share victories, and learn from each other.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Discussion Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-red-50 border-2 border-red-200 text-red-700'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Community Stats */}
            <div className="mt-8 bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Community Stats</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Members</span>
                  <span className="font-semibold text-gray-900">15,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Posts Today</span>
                  <span className="font-semibold text-gray-900">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Expert Responses</span>
                  <span className="font-semibold text-gray-900">89%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Discussions */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Recent Discussions
              </h3>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                New Post
              </button>
            </div>

            <div className="space-y-4">
              {filteredDiscussions.map(discussion => (
                <div key={discussion.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {discussion.isPinned && (
                          <Pin className="text-red-600" size={16} />
                        )}
                        <h4 className="text-lg font-semibold text-gray-900 hover:text-red-600 cursor-pointer">
                          {discussion.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>by {discussion.author}</span>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{discussion.timeAgo}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <MessageCircle size={16} />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Heart size={16} />
                          <span>{discussion.likes} likes</span>
                        </div>
                        <button className="text-red-600 hover:text-red-700 font-medium">
                          Join Discussion
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Join CTA */}
            <div className="mt-12 bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
              <p className="text-lg mb-6 opacity-90">
                Get instant access to supportive discussions, expert advice, and a network of empowered women.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Premium Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;