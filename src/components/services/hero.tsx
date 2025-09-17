import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (

    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <h1 className="text-5xl md:text-7xl mb-6"> Social Media Services</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Boost your brand presence across Instagram, YouTube, LinkedIn, X, and
                        Facebook with our tailored strategies and services.
                    </p>
                </motion.div>
            </div>
    
        </section>
    </div>
  );
};

export default Hero;
