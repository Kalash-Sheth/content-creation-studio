import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "@/App.css";

// Import sections
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PackagesSection from "./components/PackagesSection";
import EditingSection from "./components/EditingSection";
import DeliverySection from "./components/DeliverySection";
import EquipmentSection from "./components/EquipmentSection";
import FAQSection from "./components/FAQSection";
import InstagramSection from "./components/InstagramSection";
import ContactSection from "./components/ContactSection";

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App" data-testid="keepsake-studio-app">
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PackagesSection />
        <EditingSection />
        <DeliverySection />
        <EquipmentSection />
        <FAQSection />
        <InstagramSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
