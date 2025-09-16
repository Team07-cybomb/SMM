import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  setCurrentPage: (page: string) => void;
}

export function HeroSection({ setCurrentPage }: HeroSectionProps) {
  const clientLogos = ['Nike', 'Apple', 'Google', 'Microsoft', 'Amazon', 'Tesla'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1663780887553-f61fb5caa1b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMHRlYW0lMjB3b3JraW5nfGVufDF8fHx8MTc1ODAwMDk1MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Social media marketing team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-blue-800/80" />
      </div>

      {/* Floating Abstract Shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 70, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Heading */}
{/* Heading */}
<motion.h1 className="text-wrap balance text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white max-w-3xl mx-auto">


  Maximize Your Brand's{' '}
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    Digital Impact
  </span>
</motion.h1>


{/* Subtext */}
<motion.p className="break-normal text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto">

  We help brands grow on Instagram, Facebook, Twitter/X, LinkedIn & YouTube with proven strategies.
</motion.p>



          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => setCurrentPage('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
            >
              Start Campaign
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setCurrentPage('case-studies')}
              className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200"
            >
              View Case Studies
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-blue-200"
          >
            Trusted by 500+ Brands Worldwide
          </motion.div>
        </motion.div>

        {/* Client Logos Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex space-x-16 whitespace-nowrap"
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-2xl text-white/60 hover:text-white/80 transition-colors duration-200"
                >
                  {logo}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
