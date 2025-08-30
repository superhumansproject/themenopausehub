import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Heart, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      age: 52,
      location: "Manchester",
      image: "https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756452240223_869df66c.webp",
      rating: 5,
      text: "The community here has been absolutely brilliant. I felt so isolated during my menopause journey until I found this platform. The expert articles helped me understand what was happening to my body, and the support from other women has been invaluable.",
      highlight: "Life-changing support"
    },
    {
      name: "Emma Davies",
      age: 48,
      location: "Birmingham",
      image: "https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756452243458_5c9003e2.webp",
      rating: 5,
      text: "I was struggling with terrible hot flushes and mood swings. The personalised search feature helped me find exactly what I needed, when I needed it. The chatbot is like having a menopause expert available 24/7. Worth every penny!",
      highlight: "Expert guidance when needed"
    },
    {
      name: "Rebecca Wilson",
      age: 45,
      location: "London",
      image: "https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756452248352_a2da23ad.webp",
      rating: 5,
      text: "As a working mum, I needed practical advice that fitted around my busy life. The downloadable guides are fantastic, and being able to connect with other women going through similar experiences has made all the difference to my wellbeing.",
      highlight: "Practical and accessible"
    },
    {
      name: "Helen Clarke",
      age: 54,
      location: "Leeds",
      image: "https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756452252049_fd5e4274.webp",
      rating: 5,
      text: "I've tried so many different approaches to managing my menopause symptoms. This platform brings everything together in one place - expert advice, community support, and practical tools. It's genuinely changed how I approach this phase of my life.",
      highlight: "Comprehensive solution"
    }
  ];

  const stats = [
    { number: "15,000+", label: "British Women Supported", icon: Users },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "98%", label: "Would Recommend", icon: Heart }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-centre mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            Member Stories
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Real Stories from Real Women
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of British women who've found support, understanding, and practical solutions for their menopause journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-centre">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-centre justify-centre mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow border border-purple-100">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-purple-200">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-centre mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.age} • {testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Badge variant="secondary" className="mb-3 bg-purple-50 text-purple-700">
                  {testimonial.highlight}
                </Badge>

                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-centre mt-12">
          <p className="text-gray-600 mb-6">Ready to start your transformation?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-centre">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Join Our Community
            </button>
            <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-all">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;