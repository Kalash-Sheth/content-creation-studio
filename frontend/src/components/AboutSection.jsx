import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const philosophyText = "A modern content creation studio dedicated to capturing real, raw, and meaningful moments — transforming them into timeless digital keepsakes.";
  const words = philosophyText.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      ref={ref}
      data-testid="about-section"
      className="relative py-24 md:py-32 bg-[#F9F8F6] overflow-hidden"
    >
      {/* Floating Images */}
      <motion.div
        className="absolute top-20 left-8 w-32 md:w-48 rounded-lg overflow-hidden shadow-xl rotate-[-6deg] animate-float-slow hidden md:block"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1720617550153-7242f81ccbd6?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Candid wedding moment"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-12 w-36 md:w-52 rounded-lg overflow-hidden shadow-xl rotate-[4deg] animate-float-delayed hidden md:block"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1630978781617-816e79eaffeb?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Behind the scenes"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Polaroid style image */}
      <motion.div
        className="absolute top-1/2 right-6 md:right-24 w-24 md:w-36 bg-white p-2 pb-10 shadow-xl rotate-[8deg] animate-float hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1611550287705-7ff8b459c8eb?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Celebration moment"
          className="w-full aspect-square object-cover"
        />
        <p className="font-script text-center text-[#4A4036] text-sm mt-2">memories</p>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.p
          className="font-script text-[#D4AF37] text-2xl md:text-3xl mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Philosophy
        </motion.p>

        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-[#4A4036] leading-tight mb-8">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-2"
                style={{ 
                  color: ['real', 'raw', 'meaningful', 'timeless'].includes(word.replace(/[^a-zA-Z]/g, '').toLowerCase()) 
                    ? '#D4AF37' 
                    : '#4A4036'
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {['Content-First Storytellers', 'Memory Curators', 'BTS Experts'].map((item, index) => (
            <div 
              key={index}
              className="glass px-6 py-3 rounded-full text-[#4A4036] font-medium text-sm md:text-base"
            >
              {item}
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-[#8C8070] text-lg mt-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We're not photographers or videographers — we're content-first storytellers 
          who capture candid moments and turn them into Instagram & TikTok ready keepsakes.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
