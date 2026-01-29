import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Mail, Send, Heart } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="contact"
      ref={ref}
      data-testid="contact-section"
      className="relative py-24 md:py-32 bg-[#4A4036] text-white overflow-hidden"
    >
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#D4AF37]/20"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#E6C2BF]/10"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-[#D4AF37]/10"
        animate={{ 
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating message animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 hidden lg:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { 
          opacity: [0, 1, 1, 0],
          x: [-50, 0, 0, 50],
          y: [0, -10, -10, -20],
        } : {}}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <Send className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-sm">New booking request!</span>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 hidden lg:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { 
          opacity: [0, 1, 1, 0],
          x: [50, 0, 0, -50],
          y: [0, 10, 10, 20],
        } : {}}
        transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
      >
        <Heart className="w-4 h-4 text-[#E6C2BF]" />
        <span className="text-sm">We'd love to hear from you</span>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[#D4AF37] text-2xl md:text-3xl mb-4">Let's Create Together</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Make Memories?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
            Every great keepsake starts with a conversation. 
            Reach out and let's discuss how we can capture your special moments.
          </p>
        </motion.div>

        {/* Contact options */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="https://instagram.com/Keepsakestudioandco"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-[#4A4036] transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-testid="contact-instagram"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E6C2BF] flex items-center justify-center group-hover:from-[#4A4036] group-hover:to-[#4A4036] transition-all duration-500">
              <Instagram className="w-6 h-6 text-[#4A4036] group-hover:text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-white/60 group-hover:text-[#8C8070]">Instagram</p>
              <p className="font-medium">@Keepsakestudioandco</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:keepsakestudioandco@gmail.com"
            className="group flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white hover:text-[#4A4036] transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-testid="contact-email"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E6C2BF] to-[#D4AF37] flex items-center justify-center group-hover:from-[#4A4036] group-hover:to-[#4A4036] transition-all duration-500">
              <Mail className="w-6 h-6 text-[#4A4036] group-hover:text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-white/60 group-hover:text-[#8C8070]">Email</p>
              <p className="font-medium">keepsakestudioandco@gmail.com</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Book Session CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="mailto:keepsakestudioandco@gmail.com?subject=Booking%20Inquiry%20-%20Keepsake%20Studio"
            className="inline-block px-10 py-5 bg-[#D4AF37] text-[#4A4036] rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 glow-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-testid="book-session-btn"
          >
            Book Your Session
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-20 pt-8 border-t border-white/10 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <p className="font-script text-[#D4AF37] text-xl mb-2">Keepsake Studio</p>
        <p className="text-white/50 text-sm">
          Modern Event & Lifestyle Content Creation
        </p>
        <p className="text-white/30 text-xs mt-4">
          © {new Date().getFullYear()} Keepsake Studio. Creating memories worth keeping.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
