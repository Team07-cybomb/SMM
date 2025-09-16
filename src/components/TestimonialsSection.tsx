import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Jennifer Smith',
      company: 'TechStartup Inc.',
      role: 'Marketing Director',
      content: 'SMM doubled our lead generation within 3 months. Their strategy is unmatched.',
      rating: 5,
      avatar: 'JS'
    },
    {
      name: 'David Chen',
      company: 'E-commerce Pro',
      role: 'CEO',
      content: 'ROI increased by 400%. Best investment we made for our social media presence.',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Maria Rodriguez',
      company: 'Local Bistro',
      role: 'Owner',
      content: 'Our restaurant bookings tripled thanks to their Instagram marketing expertise.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Alex Johnson',
      company: 'SaaS Solutions',
      role: 'Growth Manager',
      content: 'Professional, results-driven, and always exceeding expectations. Highly recommended!',
      rating: 5,
      avatar: 'AJ'
    }
  ];

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
          <h2 className="text-4xl md:text-6xl mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the brands we've helped transform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <blockquote className="text-muted-foreground italic mb-6 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">4.9/5 average rating from 500+ clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}