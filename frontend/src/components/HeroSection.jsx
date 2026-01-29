import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const HeroSection = () => {
  const storyBars = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
    { id: 5, active: false },
  ];

  return (
    <section 
      data-testid="hero-section"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1738851952441-2a7d17487545?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Cinematic wedding moment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#F9F8F6]" />
      </div>

      {/* Story Progress Bars */}
      <div className="absolute top-6 left-6 right-6 flex gap-1 z-20">
        {storyBars.map((bar) => (
          <div 
            key={bar.id}
            className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden"
          >
            {bar.active && (
              <motion.div 
                className="h-full bg-white story-progress"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Floating Reel Frames */}
      <motion.div
        className="absolute top-1/4 left-8 md:left-16 w-32 md:w-48 reel-frame animate-float hidden md:block z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1680349345004-da07f2ed9354?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Wedding reel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Play className="w-8 h-8 text-white fill-white" />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-8 md:right-20 w-28 md:w-40 reel-frame animate-float-delayed hidden md:block z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1766113482209-0723f874e425?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Party moments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Play className="w-6 h-6 text-white fill-white" />
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.img
          src="https://customer-assets.emergentagent.com/job_story-studio-8/artifacts/bfv6iveu_IMG_9511.PNG"
          alt="Keepsake Studio Logo"
          className="w-32 md:w-40 h-auto mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
        
        <motion.h1
          className="font-heading text-white text-4xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          We Don't Just Create Content —
          <br />
          <span className="text-[#D4AF37]">We Create Memories People Keep.</span>
        </motion.h1>
        
        <motion.p
          className="text-white/80 text-lg md:text-xl mt-6 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Modern Event & Lifestyle Content Creation
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a
            href="#collections"
            data-testid="view-stories-btn"
            className="px-8 py-4 bg-white text-[#4A4036] rounded-full font-medium hover:bg-[#D4AF37] hover:text-white transition-all duration-300 hover:scale-105"
          >
            View Stories
          </a>
          <a
            href="#contact"
            data-testid="book-keepsake-btn"
            className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#4A4036] transition-all duration-300 hover:scale-105"
          >
            Book Your Keepsake
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
