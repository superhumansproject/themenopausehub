import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Building2, Users, Heart, TrendingUp, CheckCircle } from 'lucide-react';

const CorporateSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Corporate Wellness Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Support your female employees through menopause with our comprehensive workplace wellness program
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68b1520810155752a063d1ed_1756456875924_516085d4.webp"
              alt="Corporate wellness meeting"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Invest in Menopause Support?
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">25%</div>
                  <div className="text-sm text-gray-600">Productivity Increase</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Heart className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-pink-600">40%</div>
                  <div className="text-sm text-gray-600">Reduced Sick Days</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'Customized wellness workshops and seminars',
                'Access to menopause specialists and nutritionists',
                'Employee resource groups and peer support',
                'Flexible wellness programs and scheduling',
                'Comprehensive health tracking and reporting'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Enterprise Pricing
                </h4>
                <p className="text-gray-600 mb-4">
                  Custom packages tailored to your organization's needs
                </p>
                <div className="text-2xl font-bold text-purple-600 mb-4">
                  Price on Request
                </div>
                <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                  Request Corporate Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;