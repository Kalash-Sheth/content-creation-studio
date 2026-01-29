import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Heart, 
  Gem, 
  PartyPopper, 
  Baby, 
  Cake, 
  Users, 
  Briefcase, 
  Sparkles, 
  Camera,
  Gift,
  Wine,
  Star
} from 'lucide-react';

const services = [
  { icon: Heart, title: 'Weddings', description: 'Your forever story, captured candidly', color: '#E6C2BF' },
  { icon: Gem, title: 'Engagements', description: 'The moment you said yes', color: '#D4AF37' },
  { icon: Sparkles, title: 'Proposals', description: 'Surprise moments, forever kept', color: '#E8DCCA' },
  { icon: Camera, title: 'Pre-Wedding', description: 'Building anticipation beautifully', color: '#E6C2BF' },
  { icon: Star, title: 'Bridal Showers', description: 'Celebrating the bride-to-be', color: '#D4AF37' },
  { icon: Baby, title: 'Baby Showers', description: 'Welcoming new beginnings', color: '#E8DCCA' },
  { icon: Cake, title: 'Birthdays', description: 'Another year, more memories', color: '#E6C2BF' },
  { icon: Gift, title: 'Anniversaries', description: 'Milestones worth remembering', color: '#D4AF37' },
  { icon: Wine, title: 'Bachelorettes', description: 'Last fling before the ring', color: '#E8DCCA' },
  { icon: Briefcase, title: 'Corporate Events', description: 'Professional moments captured', color: '#E6C2BF' },
  { icon: PartyPopper, title: 'Brand Activations', description: 'Making brands memorable', color: '#D4AF37' },
  { icon: Users, title: 'Lifestyle Shoots', description: 'Your everyday, elevated', color: '#E8DCCA' },
];

const ServiceCard = ({ service, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      className="flip-card h-72 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <motion.div 
        className="flip-card-inner relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div 
          className="flip-card-front absolute inset-0 rounded-lg bg-white shadow-lg flex flex-col items-center justify-center p-6 border border-[#E6DCD3]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
            style={{ backgroundColor: service.color }}
          >
            <Icon className="w-8 h-8 text-[#4A4036]" />
          </div>
          <h3 className="font-heading text-xl text-[#4A4036] text-center">{service.title}</h3>
        </div>

        {/* Back */}
        <div 
          className="flip-card-back absolute inset-0 rounded-lg flex flex-col items-center justify-center p-6"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: `linear-gradient(135deg, ${service.color}, #F9F8F6)`,
          }}
        >
          <Icon className="w-10 h-10 text-[#4A4036] mb-4" />
          <h3 className="font-heading text-xl text-[#4A4036] mb-2">{service.title}</h3>
          <p className="text-[#4A4036]/80 text-center text-sm mb-4">{service.description}</p>
          <div className="flex items-center gap-2 text-[#4A4036] text-xs">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span>Reel Preview Available</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      data-testid="services-section"
      className="py-24 md:py-32 bg-[#F2EBE5]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[#D4AF37] text-2xl mb-4">What We Capture</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#4A4036]">
            Every Moment Matters
          </h2>
          <p className="text-[#8C8070] mt-4 max-w-xl mx-auto">
            From intimate celebrations to grand events — we create keepsakes for all of life's beautiful moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
