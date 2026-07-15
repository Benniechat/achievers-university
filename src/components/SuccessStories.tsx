"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Freelance Designer",
    content: "The AI Mastery course completely changed how I work. I now deliver client projects 3x faster using AI tools I learned here.",
    earnings: "$2,500/mo (Illustrative)"
  },
  {
    name: "Michael T.",
    role: "Digital Marketer",
    content: "The WhatsApp marketing strategies are gold. I grew my audience to over 5,000 engaged contacts within a few months.",
    earnings: "$1,200/mo (Illustrative)"
  },
  {
    name: "David O.",
    role: "Agency Owner",
    content: "Learning how to acquire clients globally was the missing piece for me. The mentorship provided here is unmatched.",
    earnings: "$4,000/mo (Illustrative)"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join thousands of others who are transforming their careers.
          </p>
          <div className="mt-2 inline-block px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-xs text-gray-500 font-medium">
            Sample Testimonials (Demo Content)
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl relative"
            >
              <div className="flex gap-1 text-accent mb-6">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-8 relative z-10">
                &quot;{t.content}&quot;
              </p>
              <div className="flex items-center justify-between border-t border-gray-200 dark:border-white/10 pt-6">
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Results</p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">{t.earnings}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
