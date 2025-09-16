import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, CheckCircle } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20" />
        {/* Abstract shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-lg" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl text-white">
              Stay Ahead of the Game
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get weekly insights, tips, and strategies delivered straight to your inbox. 
              Join 10,000+ marketers who trust our newsletter.
            </p>
          </div>

          {!isSubscribed ? (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/90 border-0 focus:bg-white"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 shrink-0"
              >
                Subscribe
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-white"
            >
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span className="text-lg">Thanks for subscribing!</span>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-blue-300">
              <span>✓ No spam, ever</span>
              <span>✓ Weekly insights</span>
              <span>✓ Industry trends</span>
            </div>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/20"
          >
            <p className="text-blue-200 mb-4">Trusted by marketers at:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <span className="hover:text-white/80 transition-colors cursor-pointer">Google</span>
              <span className="hover:text-white/80 transition-colors cursor-pointer">Microsoft</span>
              <span className="hover:text-white/80 transition-colors cursor-pointer">Netflix</span>
              <span className="hover:text-white/80 transition-colors cursor-pointer">Shopify</span>
              <span className="hover:text-white/80 transition-colors cursor-pointer">Airbnb</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}