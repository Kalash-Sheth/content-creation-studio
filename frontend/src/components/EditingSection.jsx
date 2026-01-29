import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Instagram, Film } from 'lucide-react';

const EditingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      data-testid="editing-section"
      className="py-24 md:py-32 bg-[#4A4036] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[#D4AF37] text-2xl mb-4">Editing Styles</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">
            Two Ways to Relive
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Signature Edit */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-[280px]">
              {/* Phone Mockup */}
              <div className="phone-mockup">
                <div className="phone-screen relative bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1765991736112-947360518547?crop=entropy&cs=srgb&fm=jpg&q=85"
                    alt="Signature edit preview"
                    className="w-full h-full object-cover"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </motion.div>
                  </div>
                  {/* Instagram UI overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <Instagram className="w-5 h-5" />
                      <span className="text-xs">@keepsakestudioandco</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div 
                className="absolute -top-4 -right-4 px-4 py-2 bg-[#D4AF37] text-[#4A4036] rounded-full text-sm font-semibold"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                15-45 sec
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <h3 className="font-heading text-2xl md:text-3xl mb-3">Signature Edit</h3>
              <p className="text-white/70 max-w-sm mx-auto">
                Quick, punchy vertical reels optimized for Instagram & TikTok. 
                Perfect for sharing your highlights instantly.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Instagram Ready</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">TikTok Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Curated Edit */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative mx-auto max-w-[400px]">
              {/* Cinematic frame */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
                <img 
                  src="https://images.unsplash.com/photo-1720617550153-7242f81ccbd6?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Curated edit preview"
                  className="w-full h-full object-cover"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </motion.div>
                </div>
                {/* Cinematic bars */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-black/60" />
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-black/60" />
                {/* Film icon */}
                <div className="absolute top-8 right-4">
                  <Film className="w-5 h-5 text-white/60" />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div 
                className="absolute -top-4 -left-4 px-4 py-2 bg-[#E6C2BF] text-[#4A4036] rounded-full text-sm font-semibold"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                60-90 sec
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <h3 className="font-heading text-2xl md:text-3xl mb-3">Curated Edit</h3>
              <p className="text-white/70 max-w-sm mx-auto">
                Cinematic highlight films that capture the full essence of your event. 
                A timeless keepsake to treasure forever.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Cinematic Quality</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">Full Story</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditingSection;
