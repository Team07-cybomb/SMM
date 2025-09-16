import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Check, X, Star, Calculator, HelpCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";


export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        '2 Social Media Platforms',
        '8 Posts per Month',
        'Basic Analytics',
        'Email Support',
        'Content Templates',
        'Monthly Strategy Call'
      ],
      notIncluded: [
        'Advanced Analytics',
        'Paid Advertising',
        'Priority Support',
        'Custom Graphics'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Growth',
      description: 'Most popular choice for growing businesses',
      monthlyPrice: 2499,
      annualPrice: 1999,
      features: [
        '4 Social Media Platforms',
        '20 Posts per Month',
        'Advanced Analytics',
        'Paid Ad Management ($1K ad spend)',
        'Custom Graphics',
        'Priority Support',
        'Weekly Strategy Calls',
        'Competitor Analysis',
        'A/B Testing'
      ],
      notIncluded: [
        'Dedicated Account Manager',
        'Video Content Creation'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      description: 'For large businesses with complex needs',
      monthlyPrice: 4999,
      annualPrice: 3999,
      features: [
        'All Social Media Platforms',
        'Unlimited Posts',
        'Real-time Analytics',
        'Unlimited Ad Spend Management',
        'Video Content Creation',
        'Dedicated Account Manager',
        '24/7 Priority Support',
        'Custom Reporting',
        'Advanced Automation',
        'White-label Reports',
        'API Access'
      ],
      notIncluded: [],
      popular: false,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What social media platforms do you support?',
      answer: 'We support Instagram, Facebook, Twitter/X, LinkedIn, YouTube, TikTok, and Pinterest.'
    },
    {
      question: 'Do you provide content creation?',
      answer: 'Yes, all plans include content creation. Higher tiers include custom graphics and video content.'
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'We offer a 30-day money-back guarantee on all plans. No questions asked.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. All plans include our proven methodology and dedicated support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl mb-4">Calculate Your Potential ROI</h3>
                <p className="text-muted-foreground mb-6">
                  See how much revenue you could generate with our social media marketing
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl text-green-600 mb-1">250%</div>
                    <div className="text-sm text-muted-foreground">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl text-blue-600 mb-1">$50K+</div>
                    <div className="text-sm text-muted-foreground">Revenue Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl text-purple-600 mb-1">6 Months</div>
                    <div className="text-sm text-muted-foreground">Average Payback</div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Calculate Your ROI
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`transition-colors ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="scale-125"
              />
              <span className={`transition-colors ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                Annual
              </span>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Save 20%
              </Badge>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
                }`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <div className="w-8 h-8 bg-white rounded-full" />
                    </div>
                    <h3 className="text-2xl mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-2">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        <span className="text-lg text-muted-foreground">/month</span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-green-600">
                          Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                        </div>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <X className="w-5 h-5 text-gray-300 shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                          : 'bg-primary hover:bg-primary/90'
                      }`}
                      onClick={() => navigate('/contact')}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Custom Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="shadow-xl border-2 border-dashed border-gray-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl mb-4">Need Something Custom?</h3>
                <p className="text-muted-foreground mb-6">
                  We can create a tailored plan that perfectly fits your unique business requirements.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/contact')}
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We have answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl border-0 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl mb-4">30-Day Money-Back Guarantee</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're confident in our ability to deliver results. If you're not completely satisfied 
                  within the first 30 days, we'll refund your money. No questions asked.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}