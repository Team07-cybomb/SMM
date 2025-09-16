import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    quickLinks: [
      { name: 'Home', value: 'home' },
      { name: 'About Us', value: 'about' },
      { name: 'Services', value: 'services' },
      { name: 'Pricing', value: 'pricing' },
      { name: 'Contact', value: 'contact' }
    ],
    resources: [
      { name: 'Blog', value: 'blog' },
      { name: 'Case Studies', value: 'case-studies' },
      { name: 'Free Guides', value: 'guides' },
      { name: 'Webinars', value: 'webinars' },
      { name: 'Templates', value: 'templates' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', url: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', url: '#' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', url: '#' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', url: '#' },
    { icon: <Youtube className="w-5 h-5" />, name: 'YouTube', url: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div 
                  className="text-3xl mb-4 cursor-pointer hover:text-blue-400 transition-colors"
                  onClick={() => setCurrentPage('home')}
                >
                  SMM
                </div>
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  We help brands maximize their digital impact through proven social media marketing strategies. 
                  Join 500+ successful brands worldwide.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {footerLinks.quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setCurrentPage(link.value)}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg mb-6">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setCurrentPage(link.value)}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg mb-6">Contact Info</h3>
                <div className="space-y-3 text-gray-300">
                  <p>hello@smm.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>123 Marketing Street<br />San Francisco, CA 94102</p>
                </div>
                
                {/* Newsletter Signup */}
                <div className="mt-6">
                  <h4 className="text-sm mb-3">Newsletter</h4>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm"
                    />
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 shrink-0">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 SMM. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <button className="hover:text-white transition-colors">Terms of Service</button>
                <button className="hover:text-white transition-colors">Privacy Policy</button>
                <select className="bg-transparent border-none text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}