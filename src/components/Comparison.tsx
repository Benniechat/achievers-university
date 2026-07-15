"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  { name: "Speed of Learning", traditional: "2-4 Years", achievers: "Weeks to Months" },
  { name: "Practical Application", traditional: false, achievers: true },
  { name: "1-on-1 Mentorship", traditional: false, achievers: true },
  { name: "Business & Income Focus", traditional: false, achievers: true },
  { name: "Portfolio Building", traditional: "Theoretical", achievers: "Real-world Projects" },
  { name: "Supportive Community", traditional: "Limited", achievers: "Active & Global" },
  { name: "Modern AI Digital Skills", traditional: false, achievers: true },
];

export default function Comparison() {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-white/5 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Achievers University?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how we stack up against traditional models of education.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl glass"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 bg-white/50 dark:bg-black/20 border-b border-gray-200 dark:border-white/10 p-6">
                <div className="font-bold text-gray-500 dark:text-gray-400">Features</div>
                <div className="font-bold text-center text-gray-500 dark:text-gray-400">Traditional</div>
                <div className="font-bold text-center text-primary dark:text-accent">Achievers University</div>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-white/10">
                {features.map((feature, i) => (
                  <div key={i} className="grid grid-cols-3 p-6 items-center hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
                    <div className="font-medium text-sm md:text-base">{feature.name}</div>
                    <div className="flex justify-center items-center text-sm text-gray-500">
                      {typeof feature.traditional === "boolean" ? (
                        feature.traditional ? <Check className="text-green-500" /> : <X className="text-red-400" />
                      ) : (
                        feature.traditional
                      )}
                    </div>
                    <div className="flex justify-center items-center text-sm font-semibold text-primary dark:text-white">
                      {typeof feature.achievers === "boolean" ? (
                        feature.achievers ? <Check className="text-green-500" /> : <X className="text-red-400" />
                      ) : (
                        feature.achievers
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
