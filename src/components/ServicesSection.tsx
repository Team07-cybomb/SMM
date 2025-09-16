import { motion } from 'motion/react';
import { Icon } from '@iconify/react';
import { Card, CardContent } from './ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: <Icon icon="mdi:instagram" className="w-12 h-12" />,
      title: 'Instagram Marketing',
      description: 'Build engagement with reels, stories & ads that convert your audience into loyal customers.',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'from-pink-50 to-purple-50',
    },
    {
      icon: <Icon icon="mdi:facebook" className="w-12 h-12" />,
      title: 'Facebook Marketing',
      description: 'Drive conversions with targeted campaigns that reach your ideal customers at the right time.',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: <Icon icon="simple-icons:x" className="w-12 h-12" />,
      title: 'Twitter/X Marketing',
      description: 'Create trends & build conversations that establish your brand as a thought leader.',
      color: 'from-gray-700 to-gray-900',
      bgColor: 'from-gray-50 to-gray-100',
    },
    {
      icon: <Icon icon="mdi:linkedin" className="w-12 h-12" />,
      title: 'LinkedIn Marketing',
      description: 'Generate B2B leads & establish authority in your industry with professional content.',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: <Icon icon="mdi:youtube" className="w-12 h-12" />,
      title: 'YouTube Marketing',
      description: 'Grow with video ads, SEO & content strategy that builds a loyal subscriber base.',
      color: 'from-red-500 to-red-700',
      bgColor: 'from-red-50 to-red-100',
    },
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
          <h2 className="text-4xl md:text-6xl mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in growing your brand across all major social media platforms with data-driven strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className={`text-white bg-gradient-to-r ${service.color} rounded-xl p-2`}>
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-1 bg-gradient-to-r ${service.color} rounded-full mt-6`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
