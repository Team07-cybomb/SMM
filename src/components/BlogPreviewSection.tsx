import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPreviewSectionProps {
  setCurrentPage: (page: string) => void;
}

export function BlogPreviewSection({ setCurrentPage }: BlogPreviewSectionProps) {
  const blogPosts = [
    {
      id: 1,
      title: '10 Instagram Reels Ideas That Drive Engagement',
      excerpt: 'Discover creative video content strategies that boost your Instagram engagement rates.',
      category: 'Instagram',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBncmFwaHN8ZW58MXx8fHwxNzU4MDAwOTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Jan 15, 2025'
    },
    {
      id: 2,
      title: 'LinkedIn Algorithm Changes: What Marketers Need to Know',
      excerpt: 'Stay ahead of the latest LinkedIn updates and optimize your B2B content strategy.',
      category: 'LinkedIn',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NzkyNDQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Jan 12, 2025'
    },
    {
      id: 3,
      title: 'The Future of Social Media Marketing in 2025',
      excerpt: 'Explore emerging trends and technologies shaping the social media landscape.',
      category: 'Trends',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1743004873139-5bc0e3d937d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1Nzk1MzIzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'Jan 10, 2025'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Instagram':
        return 'bg-gradient-to-r from-pink-500 to-purple-600';
      case 'LinkedIn':
        return 'bg-gradient-to-r from-blue-600 to-blue-800';
      case 'Trends':
        return 'bg-gradient-to-r from-green-500 to-emerald-600';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-700';
    }
  };

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
          <h2 className="text-4xl md:text-6xl mb-6">Latest Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest social media marketing trends, tips, and strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors duration-300">
                    <span className="text-sm mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setCurrentPage('blog')}
            className="hover:bg-primary hover:text-primary-foreground group"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}