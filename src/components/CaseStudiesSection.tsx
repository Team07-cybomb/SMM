import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign } from 'lucide-react';

export function CaseStudiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      clientLogo: 'TechFlow',
      platform: 'LinkedIn',
      challenge: 'B2B lead generation for SaaS startup',
      solution: 'Targeted content strategy with thought leadership posts and LinkedIn ads',
      results: {
        roi: '320%',
        reach: '2.5M',
        conversions: '150'
      },
      testimonial: "SMM transformed our LinkedIn presence. We're now industry leaders.",
      clientName: 'Sarah Chen',
      clientTitle: 'CEO, TechFlow'
    },
    {
      clientLogo: 'FreshEats',
      platform: 'Instagram',
      challenge: 'Increase brand awareness for local restaurant chain',
      solution: 'Visual storytelling with food photography and influencer partnerships',
      results: {
        roi: '280%',
        reach: '1.8M',
        conversions: '890'
      },
      testimonial: "Our Instagram engagement skyrocketed. Customers are lining up!",
      clientName: 'Mike Rodriguez',
      clientTitle: 'Owner, FreshEats'
    },
    {
      clientLogo: 'EcoStyle',
      platform: 'Facebook',
      challenge: 'Drive e-commerce sales for sustainable fashion brand',
      solution: 'Targeted ads with sustainability messaging and retargeting campaigns',
      results: {
        roi: '450%',
        reach: '3.2M',
        conversions: '1,200'
      },
      testimonial: "Incredible results! Our online sales tripled within 6 months.",
      clientName: 'Emma Watson',
      clientTitle: 'Founder, EcoStyle'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real clients. See how we've helped brands achieve their social media goals.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="max-w-4xl mx-auto shadow-2xl border-0">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-3xl">{caseStudies[currentSlide].clientLogo}</div>
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                          {caseStudies[currentSlide].platform}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl mb-4">The Challenge</h3>
                      <p className="text-muted-foreground mb-6">
                        {caseStudies[currentSlide].challenge}
                      </p>
                      
                      <h3 className="text-2xl mb-4">The Solution</h3>
                      <p className="text-muted-foreground mb-6">
                        {caseStudies[currentSlide].solution}
                      </p>
                      
                      <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                        "{caseStudies[currentSlide].testimonial}"
                      </blockquote>
                      <div className="mt-4">
                        <div className="font-semibold">{caseStudies[currentSlide].clientName}</div>
                        <div className="text-muted-foreground">{caseStudies[currentSlide].clientTitle}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                        <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-3xl text-green-600 mb-1">{caseStudies[currentSlide].results.roi}</div>
                        <div className="text-muted-foreground">ROI Increase</div>
                      </div>
                      
                      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-3xl text-blue-600 mb-1">{caseStudies[currentSlide].results.reach}</div>
                        <div className="text-muted-foreground">Total Reach</div>
                      </div>
                      
                      <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                        <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-3xl text-purple-600 mb-1">{caseStudies[currentSlide].results.conversions}</div>
                        <div className="text-muted-foreground">Conversions</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-primary scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}