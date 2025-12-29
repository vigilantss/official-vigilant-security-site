"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Target, Eye } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const imageFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1 }
};

export const About = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  const content = {
    mission: {
      title: "Our Mission",
      icon: Target,
      text: "To safeguard people, property, and assets through well-trained personnel and advanced technology. We pride ourselves on our rapid response, integrity, and the professional excellence we bring to every security challenge. Our goal is to provide peace of mind to our clients by delivering reliable and customized protection strategies."
    },
    vision: {
      title: "Our Vision",
      icon: Eye,
      text: "To be the leading provider of innovative, professional security services in the region, recognized for our commitment to excellence and community safety. We envision a future where security is seamless and proactive, setting new industry standards for accountability and trust while expanding our reach to protect more individuals and businesses."
    }
  };

  return (
      <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              {...fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter"
            >
              About Our Company
            </motion.h2>
            <motion.p 
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-lg leading-relaxed"
            >
              With years of experience in the security industry, we specialize in delivering high-quality, 
              innovative, and reliable protection solutions tailored to meet the unique needs of our clients.
            </motion.p>
          </div>
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Link href="#values">
              <Button className="rounded-full px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 hidden lg:flex cursor-pointer">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column: Overlapping Images */}
          <div className="relative">
            <motion.div 
              {...imageFade}
              className="relative aspect-[4/5] md:aspect-square w-full max-w-[500px] overflow-hidden rounded-[2.5rem]"
            >
              <Image 
                src="/patrol_2.png" 
                alt="Security Management" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>

            {/* Inset Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -right-4 md:-right-10 w-2/3 md:w-1/2 aspect-square rounded-[2rem] overflow-hidden border-8 border-zinc-950 shadow-2xl z-20"
            >
              <Image 
                src="/patrol_3_person.png" 
                alt="Security Officer" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
            </motion.div>
          </div>

          {/* Right Column: Mission/Vision Accordion */}
          <div className="space-y-4 pt-12 lg:pt-0">
            {/* Mission Section */}
            <div 
              onClick={() => setActiveTab('mission')}
              className={`cursor-pointer transition-all duration-500 rounded-3xl p-8 border ${
                activeTab === 'mission' 
                  ? 'bg-zinc-900 border-zinc-800' 
                  : 'bg-transparent border-transparent hover:border-zinc-800'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl md:text-3xl font-bold transition-colors ${
                  activeTab === 'mission' ? 'text-white' : 'text-zinc-500'
                }`}>
                  Our Mission
                </h3>
                {activeTab !== 'mission' && <ChevronDown className="text-zinc-600" />}
              </div>
              
              <AnimatePresence>
                {activeTab === 'mission' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {content.mission.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Vision Section */}
            <div 
              onClick={() => setActiveTab('vision')}
              className={`cursor-pointer transition-all duration-500 rounded-3xl p-8 border ${
                activeTab === 'vision' 
                  ? 'bg-zinc-900 border-zinc-800' 
                  : 'bg-transparent border-transparent hover:border-zinc-800'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-2xl md:text-3xl font-bold transition-colors ${
                  activeTab === 'vision' ? 'text-white' : 'text-zinc-500'
                }`}>
                  Our Vision
                </h3>
                {activeTab !== 'vision' && <ChevronDown className="text-zinc-600" />}
              </div>

              <AnimatePresence>
                {activeTab === 'vision' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      {content.vision.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="#values">
              <Button className="w-full rounded-full py-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 lg:hidden mt-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 blur-[120px] rounded-full -z-0 pointer-events-none" />
    </section>
  );
};
