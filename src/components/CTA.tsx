"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary -z-20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary to-secondary opacity-90 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] bg-cta/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build Your Online Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join Achievers University today and get immediate access to our comprehensive AI and digital skills curriculum, mentorship, and affiliate platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/register" className="px-8 py-4 rounded-full bg-cta text-white font-bold text-lg shadow-xl shadow-cta/20 hover:shadow-cta/40 hover:-translate-y-1 transition-all">
              Join Today
            </a>
            <a href="/register?role=affiliate" className="px-8 py-4 rounded-full bg-white text-primary font-bold text-lg hover:-translate-y-1 transition-all">
              Become an Affiliate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
