import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Video, Aperture, Battery, Disc, Camera } from 'lucide-react';

const equipment = [
  { icon: Smartphone, name: 'Latest iPhones', description: 'Pro-grade mobile capture' },
  { icon: Video, name: 'Gimbals', description: 'Smooth, cinematic movement' },
  { icon: Aperture, name: 'Tripods', description: 'Stable, professional shots' },
  { icon: Disc, name: 'Stabilizers', description: 'Shake-free content' },
  { icon: Battery, name: 'Battery Kits', description: 'All-day coverage ready' },
  { icon: Camera, name: 'Pro Accessories', description: 'Premium quality tools' },
];

const EquipmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      data-testid="equipment-section"
      className="py-24 md:py-32 bg-[#F9F8F6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[#D4AF37] text-2xl mb-4">Our Gear</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#4A4036]">
            Modern Tools, Timeless Results
          </h2>
          <p className="text-[#8C8070] mt-4 max-w-xl mx-auto">
            We use the latest mobile technology and professional accessories to capture your moments in stunning quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {equipment.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div 
                  className="relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-500 border border-[#E6DCD3] h-full"
                  whileHover={{ y: -10 }}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    y: { duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <motion.div 
                    className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E6C2BF] to-[#E8DCCA] flex items-center justify-center group-hover:from-[#D4AF37] group-hover:to-[#E6C2BF] transition-all duration-500"
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="w-7 h-7 text-[#4A4036]" />
                  </motion.div>
                  <h4 className="font-heading text-base text-[#4A4036] mb-1">{item.name}</h4>
                  <p className="text-[#8C8070] text-xs">{item.description}</p>
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Equipment Images */}
        <motion.div
          className="mt-16 flex justify-center gap-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1712491058340-ec237ec2cb64?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Camera equipment"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl hidden md:block"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1705091688077-ac75287a1e6f?crop=entropy&cs=srgb&fm=jpg&q=85"
              alt="Professional gear"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentSection;
