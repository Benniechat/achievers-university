"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, UserCheck, Briefcase, Store, ShieldCheck } from "lucide-react";

const badges = [
  { icon: Users, label: "Thousands Learning" },
  { icon: Sparkles, label: "AI Skills" },
  { icon: UserCheck, label: "Mentorship" },
  { icon: Briefcase, label: "Digital Business" },
  { icon: Store, label: "Client Marketplace" },
  { icon: ShieldCheck, label: "Money Back Guarantee*" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 border-y border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center gap-3 p-4 rounded-2xl hover:bg-white dark:hover:bg-white/5 transition-colors"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary dark:bg-white/10 dark:text-white">
                <badge.icon className="w-6 h-6" />
              </div>
              <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            * Terms apply. Guarantees are subject to the platform&apos;s refund policy and successful completion of stipulated criteria.
          </p>
        </div>
      </div>
    </section>
  );
}
