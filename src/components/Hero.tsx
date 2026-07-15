"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-xs sm:text-sm">
            🚀 The New Standard in Digital Education
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight mb-6">
            Learn <span className="text-gradient">High-Income AI</span> & Digital Skills That Can Help You Build a Profitable Online Business
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed text-balance">
            Position yourself for the future. Learn practical AI-powered digital skills, freelancing, branding, and online business techniques through our structured training and mentorship programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/register" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cta text-white font-bold text-lg shadow-lg shadow-cta/30 hover:shadow-cta/50 hover:-translate-y-1 transition-all">
              Join Today
            </a>
            <a href="#training" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full glass font-bold text-lg hover:-translate-y-1 transition-all">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
              Watch Free Training
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden glass p-2 shadow-2xl"
        >
          <div className="aspect-video rounded-2xl overflow-hidden bg-black/5">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kJBY0O9Nt_w?autoplay=1&mute=1&loop=1&playlist=kJBY0O9Nt_w"
              title="Achievers University Promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
