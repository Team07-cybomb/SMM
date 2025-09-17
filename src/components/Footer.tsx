import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  X as XIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRedirect = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  const footerLinks = {
    quickLinks: [
      { name: "Home", value: "/" },
      { name: "About Us", value: "/about" },
      { name: "Services", value: "/services" },
      { name: "Pricing", value: "/pricing" },
      { name: "Contact", value: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "#" },
    { icon: <XIcon className="w-5 h-5" />, name: "X", url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "#" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "#" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube", url: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                <div
                  className="text-3xl mb-4 cursor-pointer hover:text-blue-400 transition"
                  onClick={() => handleRedirect("/")}
                >
                  SMM
                </div>
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                  We help brands maximize their digital impact through proven
                  social media marketing strategies. Join 500+ successful brands
                  worldwide.
                </p>
                <nav className="flex gap-3 flex-wrap" aria-label="Social media">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="sm:col-span-1"
            >
              <h3 className="text-lg mb-3 pt-2 font-semibold">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleRedirect(link.value)}
                      className="text-left text-gray-300 hover:text-white transition w-full"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.address
              {...fadeUp}
              className="not-italic sm:col-span-1 lg:col-span-2"
            >
              <h3 className="text-lg mb-3 pt-2 font-semibold">Contact Info</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <p>hello@smm.com</p>
                <p>+1 (555) 123-4567</p>
                <p>
                  123 Marketing Street
                  <br />
                  San Francisco, CA 94102
                </p>
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <h4 className="text-sm mb-3 font-medium">Newsletter</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm flex-1"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 shrink-0">
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center md:text-left">
              <div>© 2025 SMM. All rights reserved.</div>

              <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                <button
                  onClick={() => handleRedirect("/terms")}
                  className="hover:text-white transition"
                >
                  Terms & Services
                </button>
                <button
                  onClick={() => handleRedirect("/privacy")}
                  className="hover:text-white transition"
                >
                  Privacy policy
                </button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-gray-800 flex items-center"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
