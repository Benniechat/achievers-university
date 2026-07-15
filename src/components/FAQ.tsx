"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Who is this for?", a: "This platform is for anyone looking to learn high-income digital skills, regardless of previous experience. Whether you're a student, professional, or aspiring entrepreneur, our courses are designed to take you from beginner to expert." },
  { q: "Do I need experience?", a: "No prior experience is necessary. Our curriculum starts from the fundamentals and gradually moves to advanced concepts." },
  { q: "How long is the training?", a: "The training is self-paced. Most students complete the core modules within 4 to 8 weeks depending on their availability." },
  { q: "Will I receive mentorship?", a: "Yes, we provide community support and dedicated mentorship sessions to ensure you're never stuck." },
  { q: "How do I earn?", a: "You learn skills that clients are actively paying for, such as AI design, copywriting, and marketing. Additionally, you can earn through our built-in affiliate program by referring others." },
  { q: "Can I become an affiliate?", a: "Yes! Every registered student automatically receives an affiliate dashboard with a unique referral link." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-white/5 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about Achievers University.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden transition-colors hover:bg-white/50 dark:hover:bg-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-300">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
