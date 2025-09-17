import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Social Media Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Boost your brand presence across Instagram, YouTube, LinkedIn, X, and
          Facebook with our tailored strategies and services.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
