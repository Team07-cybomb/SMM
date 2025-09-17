import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToServices = () => {
    if (location.pathname === "/") {
      // Already on home page → scroll directly
      const section = document.getElementById("services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate home first, then scroll after render
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("services");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", value: "/about" },
    { name: "Services", value: "/services" }, 
    { name: "Pricing", value: "/pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        "bg-white/90 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/" onClick={scrollToTop} className="text-2xl tracking-tight">
              SMM
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.value === "services" ? (
                  <button
                    key={item.value}
                    onClick={scrollToServices}
                    className={`px-3 py-2 transition-colors duration-200 hover:text-primary ${
                      location.pathname === "/" ? "text-foreground/70" : "text-foreground/70"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.value}
                    to={item.value}
                    onClick={scrollToTop}
                    className={`px-3 py-2 transition-colors duration-200 hover:text-primary ${
                      location.pathname === item.value
                        ? "text-primary"
                        : "text-foreground/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" onClick={scrollToTop}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg"
          >
            <div className="space-y-2">
              {navItems.map((item) =>
                item.value === "services" ? (
                  <button
                    key={item.value}
                    onClick={() => {
                      scrollToServices();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 text-foreground/70 hover:bg-accent"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.value}
                    to={item.value}
                    onClick={() => {
                      scrollToTop();
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                      location.pathname === item.value
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/70 hover:bg-accent"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
