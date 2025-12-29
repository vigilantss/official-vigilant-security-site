"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export const Values = () => {
  return (
    <section id="values" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center mb-16">
        <motion.div {...fadeInUp}>
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4 text-center">Our Core Values</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#010101] max-w-3xl mx-auto">The Principles That Guide Our Protection.</h3>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            { title: "Integrity", desc: "Upholding honesty and strong moral principles." },
            { title: "Professionalism", desc: "Disciplined, well-trained staff committed to excellence." },
            { title: "Reliability", desc: "Delivering consistent and dependable services." },
            { title: "Accountability", desc: "Taking full responsibility for duties and results." },
            { title: "Client Focus", desc: "Prioritising safety, satisfaction, and peace of mind." },
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-[#3b49af] min-h-[320px] flex flex-col justify-between transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-[#3b49af]/30 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
              
              <div className="relative">
                <span className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
                  0{idx + 1}
                </span>
              </div>

              <div className="relative mt-auto">
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{value.title}</h4>
                <p className="text-white/70 text-base leading-relaxed max-w-[240px]">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};