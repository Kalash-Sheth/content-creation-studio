import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navBg = useTransform(scrollY, [0, 100], ['rgba(249, 248, 246, 0)', 'rgba(249, 248, 246, 0.95)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Collections', href: '#collections' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ backgroundColor: navBg }}
        data-testid="navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a 
              href="#"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              data-testid="nav-logo"
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_story-studio-8/artifacts/bfv6iveu_IMG_9511.PNG"
                alt="Keepsake Studio"
                className={`h-12 md:h-14 w-auto transition-all duration-300 ${isScrolled ? '' : 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'}`}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-[#4A4036] hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                  }`}
                  whileHover={{ y: -2 }}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-[#4A4036] text-white hover:bg-[#D4AF37] hover:text-[#4A4036]' 
                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[#4A4036]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                data-testid="nav-book-btn"
              >
                Book Now
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden p-2 rounded-full transition-colors ${
                isScrolled ? 'text-[#4A4036]' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-[#F9F8F6] border-t border-[#E6DCD3] px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="block text-[#4A4036] font-medium py-2 hover:text-[#D4AF37] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="block w-full text-center px-6 py-3 bg-[#4A4036] text-white rounded-full font-medium hover:bg-[#D4AF37] hover:text-[#4A4036] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
              whileTap={{ scale: 0.98 }}
            >
              Book Now
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navigation;
