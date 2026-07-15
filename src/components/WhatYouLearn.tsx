"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Briefcase, MessageCircle, CreditCard, CheckCircle2 } from "lucide-react";

const curriculums = [
  {
    title: "AI Mastery",
    icon: BrainCircuit,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    items: ["AI Images & Studio Photos", "AI Videos & Cartoon Creation", "Photo Manipulation", "Flyer Design"]
  },
  {
    title: "Digital Business",
    icon: Briefcase,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    items: ["Client Acquisition", "Freelancing Fundamentals", "Personal & Corporate Branding"]
  },
  {
    title: "WhatsApp Marketing",
    icon: MessageCircle,
    color: "text-green-500",
    bg: "bg-green-500/10",
    items: ["Audience Growth Strategies", "Organic Marketing Techniques", "Personal Branding on Social"]
  },
  {
    title: "Digital Payments",
    icon: CreditCard,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    items: ["Compliant Digital Payment Workflows", "Online Business Operations", "Invoicing & Client Management"]
  }
];

export default function WhatYouLearn() {
  return (
    <section className="py-24 relative overflow-hidden" id="curriculum">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Master The Skills Of Tomorrow</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our comprehensive curriculum is designed to take you from beginner to highly sought-after professional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curriculums.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass p-8 rounded-3xl flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${category.bg} ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-4 flex-1">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
