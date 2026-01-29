import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const packages = [
  {
    name: 'Mini Keepsake',
    tagline: 'Perfect for intimate moments',
    features: [
      'Pre-shoot consultation',
      '2 hours coverage',
      'Full event media within 24hrs',
      '1 Signature Edit',
    ],
    highlighted: false,
  },
  {
    name: 'Classic Keepsake',
    tagline: 'Our most popular choice',
    features: [
      'Pre-event consultation',
      '3 hours coverage',
      'Full event media within 24hrs',
      '1 Signature Edit',
    ],
    highlighted: false,
  },
  {
    name: 'Heirloom Keepsake',
    tagline: 'Comprehensive coverage',
    features: [
      'Pre-event consultation',
      'Bespoke content plan',
      '6 hours coverage',
      'Full event media within 24hrs',
      '2 Signature Edits',
    ],
    highlighted: true,
  },
  {
    name: 'Timeless Keepsake',
    tagline: 'Premium storytelling',
    features: [
      'Pre-event consultation',
      'Bespoke content plan',
      '8 hours coverage',
      'Full event media',
      '1 Curated Edit',
      '2 Signature Edits',
    ],
    highlighted: false,
  },
  {
    name: 'Grand Keepsake',
    tagline: 'Full day excellence',
    features: [
      'Pre-event consultation',
      'Bespoke content plan',
      '12 hours coverage',
      'Full event media',
      '1 Curated Edit',
      '4 Signature Edits',
    ],
    highlighted: false,
  },
  {
    name: 'Ultimate Keepsake',
    tagline: 'The complete experience',
    features: [
      'Pre-event consultation',
      'Bespoke content plan',
      'Two days onsite coverage',
      'Full event media',
      '1 Curated Edit',
      '5 Signature Edits',
    ],
    highlighted: false,
  },
];

const PackageCard = ({ pkg, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative rounded-lg p-6 md:p-8 transition-all duration-500 ${
        pkg.highlighted 
          ? 'bg-gradient-to-br from-[#4A4036] to-[#2A2520] text-white' 
          : 'bg-white text-[#4A4036]'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? '0 0 40px rgba(212, 175, 55, 0.4)' 
          : '0 10px 40px rgba(0, 0, 0, 0.08)',
      }}
      data-testid={`package-card-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {pkg.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-[#4A4036] text-xs font-semibold rounded-full flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Popular
        </div>
      )}

      <motion.div
        animate={{ scale: isHovered ? 1.02 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="font-heading text-2xl mb-2">{pkg.name}</h3>
        <p className={`text-sm mb-6 ${pkg.highlighted ? 'text-white/70' : 'text-[#8C8070]'}`}>
          {pkg.tagline}
        </p>

        <div className="space-y-3 mb-6">
          {pkg.features.map((feature, i) => (
            <motion.div 
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 + 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                pkg.highlighted ? 'bg-[#D4AF37]' : 'bg-[#E6C2BF]'
              }`}>
                <Check className={`w-3 h-3 ${pkg.highlighted ? 'text-[#4A4036]' : 'text-[#4A4036]'}`} />
              </div>
              <span className={`text-sm ${pkg.highlighted ? 'text-white/90' : 'text-[#4A4036]'}`}>
                {feature}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          className={`block w-full py-3 rounded-full text-center font-medium transition-all duration-300 ${
            pkg.highlighted
              ? 'bg-[#D4AF37] text-[#4A4036] hover:bg-white'
              : 'bg-[#4A4036] text-white hover:bg-[#D4AF37] hover:text-[#4A4036]'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Choose {pkg.name.split(' ')[0]}
        </motion.a>
      </motion.div>

      {/* Glow border effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? 'inset 0 0 0 2px rgba(212, 175, 55, 0.5)' 
            : 'inset 0 0 0 1px rgba(230, 220, 211, 0.5)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const PackagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="collections"
      ref={ref}
      data-testid="packages-section"
      className="py-24 md:py-32 bg-[#F9F8F6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[#D4AF37] text-2xl mb-4">The Keepsake Collections</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#4A4036]">
            Choose Your Story
          </h2>
          <p className="text-[#8C8070] mt-4 max-w-xl mx-auto">
            Every package is crafted to capture your moments beautifully, with fast delivery and social-ready content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
