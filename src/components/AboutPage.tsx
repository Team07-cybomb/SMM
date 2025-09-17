import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Target, Heart } from 'lucide-react';

export function AboutPage() {
  const milestones = [
    { year: '2019', event: 'Founded SMM with a vision to democratize social media marketing' },
    { year: '2020', event: 'Reached 100 clients and launched our signature growth methodology' },
    { year: '2021', event: 'Expanded to serve enterprise clients and opened our second office' },
    { year: '2022', event: 'Won "Best Digital Marketing Agency" award and hit 300+ clients' },
    { year: '2023', event: 'Launched AI-powered analytics platform and reached 500+ clients' },
    { year: '2024', event: 'Achieved $50M+ in client revenue generated and global expansion' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former VP of Marketing at Meta with 15+ years in social media strategy.',
      avatar: 'SJ'
    },
    {
      name: 'David Chen',
      role: 'Chief Strategy Officer',
      bio: 'Ex-Google ads specialist who has managed $100M+ in ad spend.',
      avatar: 'DC'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Creative Director',
      bio: 'Award-winning designer who has created campaigns for Fortune 500 brands.',
      avatar: 'MR'
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Analytics',
      bio: 'Data scientist with expertise in social media ROI optimization.',
      avatar: 'AT'
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'Every strategy is designed to deliver measurable ROI and growth for our clients.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centric',
      description: 'We treat every client\'s success as our own and build long-term partnerships.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from strategy to execution.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Authentic',
      description: 'We believe in genuine connections and authentic brand storytelling.'
    }
  ];

  const partners = [
    'Meta Business Partner', 'Google Premier Partner', 'LinkedIn Marketing Partner',
    'Twitter Ads Partner', 'YouTube Certified', 'HubSpot Solutions Partner'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl mb-6">About SMM</h1>
      <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
        We're passionate about helping brands unlock their full potential through strategic social media marketing.
      </p>
    </motion.div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To empower brands of all sizes to build meaningful connections with their audiences through 
                data-driven social media strategies that deliver real business results.
              </p>
              <h2 className="text-4xl mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the world's most trusted social media marketing partner, known for our innovative 
                approach, exceptional results, and unwavering commitment to client success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NzkyNDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to industry leader - here's how we've grown alongside our clients.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl text-primary mb-2">{milestone.year}</div>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry experts who are passionate about your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="flex flex-col h-full text-center shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl mb-2">{member.name}</h3>
                    <p className="text-primary mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl mb-6">Trusted Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We're certified partners with the world's leading social media platforms.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <p className="text-sm text-muted-foreground">{partner}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}