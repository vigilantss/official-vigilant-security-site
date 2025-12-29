"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  UserCheck, 
  FileCheck, 
  Camera, 
  Users, 
  Car, 
  Lock, 
  HardHat, 
  ArrowRight
} from "lucide-react";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};


const primaryServices = [
  {
    title: "Static Guarding",
    desc: "Uniformed guards at fixed posts for offices, warehouses, residential complexes, and shopping centres.",
    image: "/patrol_1.png",
    icon: Shield
  },
  {
    title: "Mobile Patrols",
    desc: "Marked security vehicles performing scheduled and random surveillance.",
    image: "/mobile_patrols.png",
    icon: Car
  },
  {
    title: "Access Control",
    desc: "Managed entry and exit points to prevent unauthorised access.",
    image: "/access-control.jpg",
    icon: Lock
  },
  {
    title: "Event Security",
    desc: "Professional coverage for corporate events, private functions, concerts, and public gatherings.",
    image: "/patrol_3_person.png",
    icon: Users
  }
];

const advancedServices = [
  {
    title: "VIP & Executive Protection",
    desc: "Discreet, professional bodyguard services for high-profile individuals.",
    image: "/image5.png",
    icon: UserCheck
  },
  {
    title: "Construction Site Security",
    desc: "Guarding equipment, tools, and workers in high-risk or unmonitored areas.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    icon: HardHat
  },
  {
    title: "CCTV Monitoring",
    desc: "Real-time surveillance through advanced systems operated by trained personnel.",
    image: "/cctv_monitoring.jpg",
    icon: Camera
  },
  {
    title: "Risk Assessment",
    desc: "Comprehensive analysis of security vulnerabilities and tailored mitigation strategies.",
    image: "/risk_assessment.jpg",
    icon: FileCheck
  }
];


export const Services = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

    return (
      <section id="services" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">
                {showAdvanced ? "Specialised & Advanced Services" : "Our Services"}
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {showAdvanced ? "High-Risk Security Expertise." : "Comprehensive Security Solutions."}
              </h3>
              <p className="text-zinc-400 text-xl">
                {showAdvanced ? "Advanced protection for specialized requirements." : "Expert Guarding and Surveillance for Every Environment."}
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="underline">
              <button 
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-white text-md flex items-center gap-2 hover:gap-3 transition-all font-medium bg-transparent border-none cursor-pointer outline-none group"
              >
                {showAdvanced ? "View primary services" : "View all services"}
                <motion.div
                  animate={{ rotate: showAdvanced ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.div>
              </button>
            </motion.div>
          </div>

          <div className="relative overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div 
                key={showAdvanced ? 'advanced' : 'primary'}
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -500 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
              >
                {(showAdvanced ? advancedServices : primaryServices).map((service, idx) => (
                  <div 
                    key={idx}
                    className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-zinc-800 h-full"
                  >
                    {/* For Mobile Devices */}
                    <div className="aspect-[4/5] relative md:hidden lg:hidden">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-700 scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                    </div>
                    <div className="absolute bottom-0 p-8 w-full transition-transform duration-500 translate-y-0 md:hidden lg:hidden">
                      <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md">
                        <service.icon className="text-primary w-6 h-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                      <p className="text-zinc-400 text-sm">
                        {service.desc}
                      </p>
                    </div>

                    {/* For Desktop Devices */}
                    <div className="aspect-[4/5] relative hidden md:block lg:block">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                    </div>
                    <div className="absolute bottom-0 p-8 w-full transition-transform duration-500 translate-y-4 group-hover:translate-y-0 hidden md:block lg:block">
                      <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md">
                        <service.icon className="text-primary w-6 h-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                      <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
  )
}
