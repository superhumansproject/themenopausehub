import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Zap, Heart, Scale } from 'lucide-react';

const GLP1Section: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            <Zap className="w-4 h-4 mr-2" />
            Premium Content
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            GLP-1 & Menopause: Your Complete Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice on combining GLP-1 medications with nutrition and exercise 
            for optimal results during menopause
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756456673488_b25302e3.webp"
              alt="GLP-1 consultation"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          
          <div className="space-y-6">
            <div className="grid gap-4">
              <Card className="p-6 border-l-4 border-l-purple-500">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <Scale className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Optimized Nutrition Plans
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Meal timing and macros specifically designed for GLP-1 users experiencing menopause
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-l-4 border-l-pink-500">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-pink-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Exercise Modifications
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Safe, effective workouts that complement GLP-1 therapy during hormonal changes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-dashed border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Premium Preview</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                "Managing appetite changes while on GLP-1 during menopause requires a strategic approach. 
                Our 3-phase nutrition protocol helps you maintain muscle mass while optimizing fat loss..."
              </p>
              <div className="bg-gray-100 p-3 rounded text-center">
                <p className="text-sm text-gray-500 italic">
                  Unlock full access with Premium Membership
                </p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3">
              Get Premium Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GLP1Section;