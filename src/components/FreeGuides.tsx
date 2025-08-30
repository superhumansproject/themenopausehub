import React, { useState } from 'react';
import { Download, Search, Filter, Clock, Star } from 'lucide-react';

const FreeGuides: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const guides = [
    {
      id: 1,
      title: "Understanding Menopause Symptoms",
      description: "Complete guide to recognising and managing common menopause symptoms",
      category: "symptoms",
      image: "https://d64gsuwffb70l.cloudfront.net/68aecb82adc4be414b9e4253_1756453195570_98273732.png",
      downloads: 2847,
      rating: 4.9,
      readTime: "12 min"
    },
    {
      id: 2,
      title: "Nutrition for Menopause",
      description: "Evidence-based nutrition strategies to support your body through menopause",
      category: "nutrition",
      image: "https://d64gsuwffb70l.cloudfront.net/68aecb82adc4be414b9e4253_1756453625373_31eaf64a.png",
      downloads: 1923,
      rating: 4.8,
      readTime: "15 min"
    },
    {
      id: 3,
      title: "Sleep Solutions",
      description: "Practical strategies for better sleep during menopause transition",
      category: "lifestyle",
      image: "https://d64gsuwffb70l.cloudfront.net/68aecb82adc4be414b9e4253_1756455741667_13c7917d.png",
      downloads: 1654,
      rating: 4.7,
      readTime: "10 min"
    },
    {
      id: 4,
      title: "Emotional Wellness Guide",
      description: "Managing mood changes and emotional challenges with confidence",
      category: "emotional",
      image: "https://d64gsuwffb70l.cloudfront.net/68aecb82adc4be414b9e4253_1756456145969_4ef6e655.png",
      downloads: 2156,
      rating: 4.9,
      readTime: "18 min"
    },
    {
      id: 5,
      title: "Exercise & Movement",
      description: "Safe and effective exercise routines tailored for menopause",
      category: "fitness",
      image: "https://d64gsuwffb70l.cloudfront.net/68aecb82adc4be414b9e4253_1756456460668_51144555.png",
      downloads: 1789,
      rating: 4.6,
      readTime: "14 min"
    },
    {
      id: 6,
      title: "Hormone Health Basics",
      description: "Understanding hormonal changes and natural support options",
      category: "hormones",
      image: "https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756452530777_bc67888a.webp",
      downloads: 2341,
      rating: 4.8,
      readTime: "16 min"
    }
  ];


  const categories = [
    { id: 'all', name: 'All Guides' },
    { id: 'symptoms', name: 'Symptoms' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'emotional', name: 'Emotional' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'hormones', name: 'Hormones' }
  ];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="guides" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Free Expert Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive guides created by menopause specialists and start your journey to better health today.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map(guide => (
            <div key={guide.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="text-yellow-500 fill-current" size={14} />
                  <span className="text-sm font-medium">{guide.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-red-600 font-medium capitalize">{guide.category}</span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock size={14} />
                    <span className="text-sm">{guide.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{guide.downloads.toLocaleString()} downloads</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeGuides;