import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Search, Palette, Rocket, BarChart3 } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Strategy',
      description: 'Research & planning',
      details: 'We analyze your audience, competitors, and industry trends to create a data-driven strategy.',
      color: 'from-blue-500 to-cyan-500',
      number: '01'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Content',
      description: 'Creative posts & campaigns',
      details: 'Our creative team designs engaging content that resonates with your target audience.',
      color: 'from-purple-500 to-pink-500',
      number: '02'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Execution',
      description: 'Ads & organic campaigns',
      details: 'We launch and manage your campaigns across all platforms with precision timing.',
      color: 'from-orange-500 to-red-500',
      number: '03'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Growth',
      description: 'Analytics & optimization',
      details: 'Continuous monitoring and optimization to maximize your ROI and social media growth.',
      color: 'from-green-500 to-emerald-500',
      number: '04'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven 4-step methodology that delivers consistent results for every client.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-orange-200 to-green-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background Number */}
                    <div className="absolute top-4 right-4 text-6xl opacity-10 select-none">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.details}
                    </p>
                    
                    {/* Animated Border */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color} origin-left`}
                      style={{ width: '100%' }}
                    />
                  </CardContent>
                </Card>
                
                {/* Step Connection (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}