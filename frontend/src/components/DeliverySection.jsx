import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Zap, Calendar, CheckCircle } from 'lucide-react';

const DeliverySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineSteps = [
    { icon: Calendar, label: 'Event Day', time: 'Day 0', description: 'We capture your moments' },
    { icon: Zap, label: 'Raw Content', time: '24 Hours', description: 'Full media delivered' },
    { icon: Clock, label: 'Edited Content', time: '1 Week', description: 'Polished reels ready' },
    { icon: CheckCircle, label: 'Your Keepsake', time: 'Forever', description: 'Memories to treasure' },
  ];

  return (
    <section 
      ref={ref}
      data-testid="delivery-section"
      className="py-24 md:py-32 bg-gradient-to-b from-[#F2EBE5] to-[#F9F8F6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[#D4AF37] text-2xl mb-4">Fast Delivery</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#4A4036]">
            Speed Meets Quality
          </h2>
        </motion.div>

        {/* Big Numbers Display */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            className="relative bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E6C2BF] to-[#D4AF37]" />
            <motion.div 
              className="font-heading text-7xl md:text-9xl text-[#D4AF37] mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            >
              24
            </motion.div>
            <p className="font-heading text-2xl text-[#4A4036] mb-2">Hours</p>
            <p className="text-[#8C8070]">Raw Content Delivered</p>
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#E6C2BF]/30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            className="relative bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E6C2BF] via-[#D4AF37] to-[#E6C2BF]" />
            <motion.div 
              className="font-heading text-7xl md:text-9xl text-[#D4AF37] mb-4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            >
              1
            </motion.div>
            <p className="font-heading text-2xl text-[#4A4036] mb-2">Week</p>
            <p className="text-[#8C8070]">Edited Content Ready</p>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[#D4AF37]/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#E6DCD3] -translate-y-1/2" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                >
                  <motion.div 
                    className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </motion.div>
                  <p className="font-script text-[#D4AF37] text-lg">{step.time}</p>
                  <h4 className="font-heading text-lg text-[#4A4036] mt-1">{step.label}</h4>
                  <p className="text-[#8C8070] text-sm mt-1">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverySection;
