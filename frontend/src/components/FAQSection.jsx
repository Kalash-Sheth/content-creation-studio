import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
  {
    question: "How is Keepsake Studio different from traditional photography?",
    answer: "We're content-first storytellers, not traditional photographers. We focus on capturing candid, real moments and transforming them into Instagram & TikTok-ready reels. We complement traditional photography & videography — we don't replace them."
  },
  {
    question: "How quickly will I receive my content?",
    answer: "You'll receive all raw content within 24 hours of your event. Edited content (Signature & Curated Edits) is delivered within one week. We believe your memories shouldn't have to wait!"
  },
  {
    question: "What equipment do you use?",
    answer: "We use the latest iPhones, professional gimbals, tripods, battery banks, and stabilization tools. Our mobile-first approach allows us to capture authentic, candid moments while maintaining professional quality."
  },
  {
    question: "Can I customize my package?",
    answer: "Absolutely! While we offer six curated collections, we're happy to create bespoke content plans tailored to your specific event needs. Just reach out for a consultation."
  },
  {
    question: "What's the difference between Signature Edit and Curated Edit?",
    answer: "Signature Edits are 15-45 second vertical reels optimized for Instagram & TikTok — perfect for quick sharing. Curated Edits are 60-90 second cinematic highlight films that capture the full essence of your event."
  },
  {
    question: "Do you travel for events?",
    answer: "Yes! We're available for events worldwide. Travel arrangements and accommodations for destination events can be discussed during your consultation."
  },
  {
    question: "How do I book a session?",
    answer: "Simply reach out via Instagram (@Keepsakestudioandco) or email (keepsakestudioandco@gmail.com). We'll schedule a consultation to discuss your event and create the perfect keepsake for you."
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      data-testid="faq-section"
      className="py-24 md:py-32 bg-[#F2EBE5]"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-[#D4AF37] text-2xl mb-4">Questions?</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#4A4036]">
            We've Got Answers
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-md border border-[#E6DCD3] overflow-hidden px-0"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-[#F9F8F6] transition-colors [&[data-state=open]]:bg-[#F9F8F6]">
                    <span className="font-heading text-left text-lg text-[#4A4036] pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0">
                    <p className="text-[#8C8070] leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
