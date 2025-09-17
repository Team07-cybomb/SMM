import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section className="bg-indigo-900 text-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-lg mb-8">
          Let’s design and execute the perfect social media strategy for you.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-muted text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
};

export default CTA;
